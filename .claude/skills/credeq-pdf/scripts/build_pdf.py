#!/usr/bin/env python3
"""
Convert a Markdown file into a Credeq-styled PDF.

Usage:
    python build_pdf.py INPUT.md OUTPUT.pdf [--title "Doc title"] [--no-logo]

Pipeline: Markdown -> HTML (python-markdown) -> wrap in Credeq template
          -> render with headless Chromium (Playwright) -> PDF.

The look (colors, type, footer, table styling) is defined in
assets/style.css and matches the reference Credeq pitch document.
"""

import argparse
import base64
import html as _html
import mimetypes
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ASSETS = os.path.normpath(os.path.join(HERE, "..", "assets"))


def _b64_img(path):
    """Return a data: URI for an image so the HTML is self-contained."""
    mime = mimetypes.guess_type(path)[0] or "image/png"
    with open(path, "rb") as f:
        return f"data:{mime};base64," + base64.b64encode(f.read()).decode()


def extract_cover(md_text):
    """Pull the leading `# Title` and an immediately-following italic
    `*subtitle*` line out of the Markdown so they can be rendered on a
    dedicated centered cover page. Returns (title, subtitle, remaining_md).
    If there is no leading H1, nothing is extracted."""
    lines = md_text.splitlines()
    i = 0
    while i < len(lines) and not lines[i].strip():
        i += 1
    if i >= len(lines) or not re.match(r"#\s+\S", lines[i]):
        return None, None, md_text
    title = lines[i].lstrip("#").strip()
    j = i + 1
    while j < len(lines) and not lines[j].strip():
        j += 1
    subtitle = None
    if j < len(lines):
        m = re.match(r"\*(.+?)\*\s*$", lines[j].strip())
        if m:
            subtitle = m.group(1).strip()
            j += 1
    remaining = "\n".join(lines[:i] + lines[j:])
    return title, subtitle, remaining


# Plain alphanumeric on purpose: python-markdown reserves \x02…\x03 for its
# own placeholders and will mangle anything using those delimiters.
MERMAID_TOKEN = "mmdfigureplaceholder{}mmdend"


def extract_mermaid(md_text):
    """Pull ```mermaid fences out of the Markdown before it is converted,
    leaving a placeholder. They come back as <pre class="mermaid"> blocks
    that Chromium renders into real SVG diagrams at print time — otherwise
    python-markdown would emit them as raw code text."""
    blocks = []

    def repl(match):
        blocks.append(match.group(1))
        return MERMAID_TOKEN.format(len(blocks) - 1)

    pattern = re.compile(r"^```mermaid[ \t]*\n(.*?)^```[ \t]*$",
                         re.MULTILINE | re.DOTALL)
    return pattern.sub(repl, md_text), blocks


def restore_mermaid(html, blocks):
    for i, src in enumerate(blocks):
        div = ('<div class="mermaid-figure"><pre class="mermaid">'
               f'{_html.escape(src)}</pre></div>')
        # markdown wraps a bare placeholder line in <p>…</p>; drop that too.
        token = MERMAID_TOKEN.format(i)
        html = html.replace(f"<p>{token}</p>", div).replace(token, div)
    return html


def inline_images(html, base_dir):
    """Replace <img src="relative/or/local"> with self-contained data URIs
    resolved relative to base_dir, so local diagrams render in the PDF."""
    def repl(match):
        src = match.group(1)
        if src.startswith(("data:", "http://", "https://")):
            return match.group(0)
        path = src if os.path.isabs(src) else os.path.join(base_dir, src)
        if not os.path.isfile(path):
            sys.stderr.write(f"warning: image not found: {src}\n")
            return match.group(0)
        return match.group(0).replace(f'src="{src}"', f'src="{_b64_img(path)}"')

    return re.sub(r'<img[^>]*\bsrc="([^"]+)"', repl, html)


def md_to_html_fragment(md_text, with_toc=False):
    import markdown
    extensions = [
        "tables",
        "fenced_code",
        "sane_lists",
        "attr_list",
        "md_in_html",
    ]
    configs = {}
    if with_toc:
        extensions.append("toc")
        configs["toc"] = {"toc_depth": "2-2", "title": "Index"}
    return markdown.markdown(md_text, extensions=extensions,
                             extension_configs=configs)


def build_html(md_text, title=None, show_logo=True, base_dir=".",
               cover=False, toc=False, cover_footer=False):
    cover_title = cover_subtitle = None
    if cover:
        cover_title, cover_subtitle, md_text = extract_cover(md_text)

    if toc:
        md_text = "[TOC]\n\n" + md_text

    md_text, mermaid_blocks = extract_mermaid(md_text)
    body = md_to_html_fragment(md_text, with_toc=toc)
    body = restore_mermaid(body, mermaid_blocks)
    body = inline_images(body, base_dir)

    with open(os.path.join(ASSETS, "style.css"), encoding="utf-8") as f:
        css = f.read()

    logo_uri = _b64_img(os.path.join(ASSETS, "credeq_logo.png"))

    cover_html = ""
    if cover and cover_title:
        sub = (f'<div class="cover-subtitle">{cover_subtitle}</div>'
               if cover_subtitle else "")
        # With --footer-cover-only the address block is an in-flow element
        # pinned to the bottom of the cover page instead of a repeating
        # print-margin footer.
        foot = COVER_FOOTER_HTML if cover_footer else ""
        cover_html = (
            '<div class="cover-page">'
            '<div class="cover-body">'
            f'<img class="cover-logo" src="{logo_uri}" alt="Credeq">'
            f'<h1 class="cover-title">{cover_title}</h1>'
            f'{sub}'
            "</div>"
            f'{foot}'
            "</div>"
        )

    header_html = ""
    # The top-left logo header is only for non-cover documents; a cover
    # page carries its own centered logo instead.
    if show_logo and not cover_html:
        header_html = (
            f'<div class="doc-header"><img src="{logo_uri}" '
            f'alt="Credeq"></div>'
        )

    page_title = title or "Credeq"
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>{page_title}</title>
<style>{css}</style>
</head>
<body>
{cover_html}
{header_html}
{body}
</body>
</html>"""


# Repeating footer, rendered by Chromium in the bottom page margin on
# EVERY page. This uses print header/footer templates (not position:fixed,
# which Chromium does not reliably repeat) so the green bar + CREDEQ address
# never overlap the body. Styling must be inline — the template renders in
# its own isolated context with no access to the document stylesheet.
# The green bar is an <img> (SVG data URI), not a background-color div:
# Chromium's print footer template suppresses CSS backgrounds but renders
# images reliably. '%23' is an encoded '#' for the hex colour.
_BAR_SVG = (
    "data:image/svg+xml;utf8,"
    "<svg xmlns='http://www.w3.org/2000/svg' width='100' height='7' "
    "preserveAspectRatio='none' viewBox='0 0 100 7'>"
    "<rect width='100' height='7' fill='%2304BF76'/></svg>"
)
FOOTER_TEMPLATE = (
    '<div style="width:100%; margin:0; padding:0; '
    'font-family:Arial,Helvetica,sans-serif; color:#1F1F1F; '
    'text-align:center;">'
    f'<img src="{_BAR_SVG}" style="display:block; width:100%; height:7px;">'
    '<div style="font-size:8px; font-weight:700; line-height:1.4; '
    'margin-top:6px;">'
    '<span style="color:#04BF76;">CREDEQ</span><br>'
    "1<sup>st</sup> Floor - 5 St Helen&rsquo;s Place &ndash; London - "
    "EC3A 6AB - United Kingdom<br>"
    '<span style="color:#04BF76;">credeq.com</span>'
    "</div>"
    '<div style="font-size:8px; font-weight:700; margin-top:4px;">'
    "Powered by partnership, Backed by Correlation</div>"
    "</div>"
)

# Same footer, but as an in-document block for the cover page only. Used by
# --footer-cover-only, where the address block belongs on the landing page
# and nowhere else. Styled by .cover-footer* rules in style.css.
COVER_FOOTER_HTML = (
    '<div class="cover-footer">'
    '<div class="cover-footer-bar"></div>'
    '<div class="cover-footer-address">'
    '<span class="cf-green">CREDEQ</span><br>'
    "1<sup>st</sup> Floor - 5 St Helen&rsquo;s Place &ndash; London - "
    "EC3A 6AB - United Kingdom<br>"
    '<span class="cf-green">credeq.com</span>'
    "</div>"
    '<div class="cover-footer-tagline">'
    "Powered by partnership, Backed by Correlation</div>"
    "</div>"
)


# Mermaid theme overrides so diagrams come out on-brand rather than in
# mermaid's default lilac. Node fill matches the table header, edges and
# decision borders use Credeq green.
_MERMAID_INIT = """async () => {
  mermaid.initialize({
    startOnLoad: false,
    theme: 'base',
    securityLevel: 'loose',
    flowchart: { htmlLabels: true, curve: 'basis', useMaxWidth: true },
    themeVariables: {
      fontFamily: 'Arial, Helvetica, sans-serif',
      fontSize: '14px',
      primaryColor: '#F7FAFD',
      primaryTextColor: '#1F1F1F',
      primaryBorderColor: '#C3C7C4',
      lineColor: '#04BF76',
      tertiaryColor: '#F7FAFD',
      edgeLabelBackground: '#FFFFFF',
    },
  });
  await mermaid.run({ querySelector: '.mermaid', suppressErrors: false });
}"""


def _render_mermaid(page):
    """Turn every <pre class="mermaid"> into an SVG inside the live page."""
    js_path = os.path.join(ASSETS, "mermaid.min.js")
    if not os.path.isfile(js_path):
        sys.stderr.write(
            "warning: assets/mermaid.min.js missing — mermaid blocks will "
            "render as plain code\n")
        return
    with open(js_path, encoding="utf-8") as f:
        page.add_script_tag(content=f.read())
    try:
        page.evaluate(_MERMAID_INIT)
    except Exception as exc:                      # a bad diagram shouldn't
        sys.stderr.write(f"warning: mermaid render failed: {exc}\n")


def render_pdf(html, out_path, repeating_footer=True):
    from playwright.sync_api import sync_playwright
    with sync_playwright() as p:
        browser = p.chromium.launch(args=["--no-sandbox"])
        page = browser.new_page()
        page.set_content(html, wait_until="networkidle")
        if 'class="mermaid"' in html:
            _render_mermaid(page)
        # Without the repeating footer the bottom margin no longer has to
        # reserve room for it, so the body gets the space back.
        bottom = "26mm" if repeating_footer else "15mm"
        page.pdf(
            path=out_path,
            format="A4",
            print_background=True,
            display_header_footer=True,
            header_template="<span></span>",   # suppress default header
            footer_template=(FOOTER_TEMPLATE if repeating_footer
                             else "<span></span>"),
            margin={"top": "18mm", "bottom": bottom,
                    "left": "15mm", "right": "15mm"},
        )
        browser.close()


def main():
    ap = argparse.ArgumentParser(description="Markdown -> Credeq-styled PDF")
    ap.add_argument("input", help="Input .md file")
    ap.add_argument("output", help="Output .pdf file")
    ap.add_argument("--title", default=None, help="Optional document title")
    ap.add_argument("--no-logo", action="store_true",
                    help="Omit the Credeq logo header")
    ap.add_argument("--cover", action="store_true",
                    help="Render the leading # title + *subtitle* as a "
                         "centered cover page with the Credeq logo")
    ap.add_argument("--toc", action="store_true",
                    help="Insert an Index (table of contents) of ## sections")
    ap.add_argument("--footer-cover-only", action="store_true",
                    help="Render the CREDEQ footer block only on the cover "
                         "page instead of repeating it on every page")
    args = ap.parse_args()

    with open(args.input, encoding="utf-8") as f:
        md_text = f.read()

    base_dir = os.path.dirname(os.path.abspath(args.input))
    html = build_html(md_text, title=args.title, show_logo=not args.no_logo,
                      base_dir=base_dir, cover=args.cover, toc=args.toc,
                      cover_footer=args.footer_cover_only)
    render_pdf(html, args.output,
               repeating_footer=not args.footer_cover_only)
    print(f"Wrote {args.output}")


if __name__ == "__main__":
    main()
