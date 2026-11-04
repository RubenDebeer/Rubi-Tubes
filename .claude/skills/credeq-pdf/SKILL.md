---
name: credeq-pdf
description: Convert a Markdown file into a polished, Credeq-branded PDF that matches the Credeq pitch/brief house style — green Credeq logo header, Arial-bold section headings, two-level filled/hollow bullets, a light-header bordered table style, and a repeating green footer bar with the CREDEQ London address. Use this skill WHENEVER the user wants to turn Markdown (or a .md file) into a PDF and mentions Credeq, a Credeq pitch/brief/proposal/deck, "our brand", "the house style", "the pitch template", or asks to make a .md "look like" the Credeq document — even casual phrasings like "make this md a Credeq PDF" or "brand this as a Credeq doc". Focus is on faithful styling of the output PDF.
---

# Credeq Markdown → PDF

Turn a Markdown document into a PDF styled exactly like the Credeq pitch/brief template.
The pipeline is: **Markdown → HTML → headless Chromium → PDF**, with all Credeq
branding (colors, type, logo, footer, table styling) baked into `assets/style.css`.

## When to use

Use this whenever a `.md` file (or pasted Markdown) should become a Credeq-branded PDF.
The skill's whole job is the **look** — it makes ordinary Markdown render with the
Credeq logo, typography, bullet hierarchy, table style, and footer.

## How to run

1. Make sure the input is a Markdown file. If the user pasted Markdown, save it to a `.md` file first.
2. Install dependencies once (they're usually already present):
   ```bash
   pip install markdown playwright --break-system-packages -q
   python -m playwright install chromium   # only if Chromium isn't already installed
   ```
3. Run the converter:
   ```bash
   python scripts/build_pdf.py INPUT.md OUTPUT.pdf --title "Document title"
   ```
   - `--title` sets the PDF/browser title metadata (optional).
   - `--no-logo` omits the top-left logo header (e.g. for interior-only pages).
   - `--cover` renders the leading `# Title` and an immediately-following
     `*italic subtitle*` as a centered cover page with the Credeq logo, then
     starts the body on a fresh page.
   - `--toc` inserts an **Index** (table of contents) of the `##` sections on
     its own page, right after the cover.
   - `--footer-cover-only` renders the CREDEQ address footer once, at the
     bottom of the cover page, instead of repeating it in every page's
     bottom margin (body pages get the reclaimed space).
   - Local images referenced in the Markdown (`![](image.png)`) are inlined
     automatically, resolved relative to the input `.md` file's directory — so
     run against a copy that sits next to the image files.
4. Present `OUTPUT.pdf` to the user.

Do **not** hand-write bespoke HTML/CSS for each document — always go through
`build_pdf.py` and `assets/style.css` so every document comes out consistent.
If the user wants a styling tweak, edit `assets/style.css` (the single source of
truth for the look), then re-run.

## How Markdown maps to the Credeq style

The look is faithful to the reference document. Author normal Markdown and it renders as:

- `##` → **section heading** — Arial-bold 14pt, dark ink (`#1F1F1F`), the signature
  "Problem" / "Appetite" / "Boundaries" heading. This is the workhorse heading; use it
  for every section.
- `#` → larger document title (20pt). Optional — the reference often starts straight
  at a `##` section with no title, so only add `#` if the document needs a title.
- `###`/`####` → smaller subheadings.
- `- item` → **filled disc (●)** bullet. Nested `    - item` → **hollow circle (○)**,
  third level → small filled square. Dark markers, matching the source's two-level style.
- `**Label:** text` inside a bullet → bold inline label followed by body text
  (the "**Global Finance Alignment:** Conducting formal workshops…" pattern).
- Markdown tables → the Credeq matrix style: light header fill (`#F7FAFD`), thin gray
  borders (`#C3C7C4`), rounded outer frame, generous cell padding, and a **bold first
  column** (row labels). Status emoji like `⏳ Pending` / `✅ Approved` render inline.
- ```` ```mermaid ```` fenced blocks → rendered to **real SVG diagrams** (not code
  text) by Chromium at print time, themed in Credeq green with the table-header
  node fill. Requires `assets/mermaid.min.js`; if it's missing the block falls
  back to a plain code block and a warning is printed.
- `**bold**`, `*italic*`, `` `code` ``, fenced code blocks, `> blockquote`, links,
  and `---` rules are all styled on-brand. Code blocks **wrap** rather than
  scroll — `overflow-x` is meaningless in print and would clip long lines.

Every page automatically gets:
- the **green footer bar** plus the centered **CREDEQ / London address / credeq.com**
  block and the **"Powered by partnership, Backed by Correlation"** tagline;
- the **Credeq logo** at the top of the first page (unless `--no-logo`).

## Style reference (source of truth: `assets/style.css`)

Values measured from the reference Credeq PDF — keep these when editing the CSS:

| Element | Spec |
|---|---|
| Brand green (logo bars, footer bar, links) | `#04BF76` |
| Body & heading ink | `#1F1F1F` |
| Table border | `#C3C7C4` (1px) |
| Table header fill | `#F7FAFD` |
| Wordmark navy | `#0F2D37` |
| Body font | Arial / Helvetica / Liberation Sans, 11pt, line-height ~1.34 |
| Section heading (`h2`) | Arial-bold 14pt, ~28px above / 12px below |
| Page | A4, ~15mm side margins, footer reserved in bottom margin |
| Bullets | L1 filled ● / L2 hollow ○ / L3 ▪, dark |

## Assets

- `assets/style.css` — the complete Credeq stylesheet (edit this to change the look).
- `assets/credeq_logo.png` — full Credeq logo (bars + wordmark + tagline) for the header.
- `assets/credeq_icon.png` — the Credeq bars-only mark, for compact/interior use.
- `scripts/build_pdf.py` — the converter.
