# Handoff: Ruben's Portfolio & Notes Site (ruben.dev)

## Overview
A personal portfolio / blog site for Ruben de Beer, software engineer. It has two content types — **Opinions** (longer-form blog posts) and **Notes** (technical field notes / cheat sheets) — plus a Contact page. The visual identity is a "hand-drawn stick figure" aesthetic: wobbly doodle SVG illustrations, dotted-paper backgrounds, pill buttons, and a light/dark theme toggle.

## About the Design Files
The files in `design_files/` are **design references created in HTML** — high-fidelity prototypes showing intended look and behavior, **not production code to copy directly**. They use a proprietary component runtime (`support.js`, `<x-dc>` templates). Your task is to **recreate these designs in your target codebase's environment** (Next.js, Astro, plain React, etc.) using its established patterns. If no codebase exists yet, a static-friendly framework (Astro or Next.js) is a good fit for a content site like this.

Open each `.dc.html` in a browser to see the live design. All styles are inline on the elements, so the files double as the styling spec.

## Fidelity
**High-fidelity.** Colors, typography, spacing, copy, and animations are final. Recreate pixel-perfectly.

## Screens / Views

### 1. Home (`Home.dc.html`)
- **Nav (all pages, sticky):** 18px vertical / 40px horizontal padding, translucent background (`rgba(251,250,247,.85)` light / `rgba(19,15,13,.82)` dark) with `backdrop-filter: blur(10px)`, 1px bottom hairline. Left: logo — 32px purple (#B841FB) rounded square (10px radius) with white "R" + wordmark "ruben.dev" (display font, 800, 20px). Right: theme-toggle icon button (sun/moon, 19px stroke icons) + links Home / Opinions / Notes / Contact (15px, 600). Active link is purple; inactive links are `--ink-2` and darken on hover.
- **Hero:** max-width 1200px, flex row, min-height 600px. Left column (max 620px): purple uppercase eyebrow "NOTES & OPINIONS" (13px, 700, letter-spacing 0.18em) → H1 "Hi, I'm Ruben." (display font, 800, clamp(52px,7vw,82px), line-height 1, letter-spacing −0.03em) → animated purple underline squiggle (SVG stroke-dashoffset draw-in, 1.1s, 0.4s delay) → intro paragraph (20px, line-height 1.55, `--ink-2`, max 520px) → two pill buttons: primary "Read my opinions →" (purple bg, white text, 999px radius, 15px 28px padding, lifts −3px on hover) and secondary "Browse notes" (surface bg, 3px solid ink border, same shape).
- **Right column (mascot scene, 380×520px):** large waving stick figure (SVG, 330px wide), a "hey." speech bubble card (3px ink border, 16px radius, mono font) and a small blinking lightbulb doodle. All parts bob gently (see Animations).
- **"What you'll find here" section:** grey eyebrow + H2 "Two things I can't stop doing." (display, 800, 38px) above a 3-column card grid (24px gap). Each card links to a page: white/surface bg, 26px radius, 1px hairline border, shadow `0 10px 30px rgba(19,15,13,.07)`, 26px padding; 150px doodle illustration area, purple uppercase eyebrow (12px), H3 (display, 700, 24px), body (15px/1.5, `--ink-2`), purple "…→" link pinned to bottom. Hover: translateY(−6px) + deeper shadow.
- **"Recently" list:** H2 (30px) + "See all →" link on a baseline row; then a hairline-divided list of entries. Each row: category pill (mono font 11px uppercase, 1.5px solid border, 999px radius, 4px 11px padding — sky blue `#5AC6FF` for Notes, purple for Opinions) + title (display, 600, 20px) + date (mono, 13px, `--ink-3`). Hover: faint purple wash `rgba(184,65,251,.05)` and padding-left eases 6px→16px.
- **Footer (all pages):** hairline top border, 36px/40px padding, flex space-between: wordmark, mono links (email / linkedin / github — purple on hover), © line (13px, `--ink-3`).

### 2. Opinions (`Opinions.dc.html`)
- Hero: purple eyebrow "OPINIONS", H1 "Loud takes I actually hold." (clamp(40px,6vw,64px)), **pink** underline squiggle, subtitle. Right: 300px-wide waving stick figure. Text column max-width 540px, 40px gap to figure, left-aligned (not space-between).
- Post list: full-width cards (surface bg, ~20px radius, hairline border) each with a category pill (e.g. CAREER), date + read-time in mono, post title (display, bold), excerpt, and a "Read →" link. Card links to the post page.

### 3. Notes (`Notes.dc.html`)
- Hero: same pattern; H1 "Field notes I keep coming back to.", **sky-blue** underline, 300px stick figure.
- **Search:** rounded text input (max 540px) with magnifier icon, placeholder "Search notes by #hashtag — try #ci-cd". Filters the note list live by hashtag; shows a clear control when a query is active; shows an empty-state doodle + message when nothing matches.
- Note list: rows/cards with tag pills, title, date; links to note pages.

### 4. Contact (`Contact.dc.html`)
- Same nav/footer; contact channels (email, LinkedIn: linkedin.com/in/ruben-de-beer-578b8a20b, GitHub: github.com/rubendebeer) presented with doodle illustration.

### 5. Article pages (`Note - How DNS resolution works.dc.html`, `Post - The inferiority complex as a developer.dc.html`)
- Long-form reading layouts using the same tokens: display-font headings, 18–20px body, mono for code, hairline dividers. Use these as the template for all post/note detail pages.

## Interactions & Behavior
- **Theme toggle:** button with `data-theme-toggle` toggles `theme-dark` class on `<html>`; persists to `localStorage['rd-theme']`; syncs across tabs via the `storage` event; applied before first paint to avoid flash. Background/color transition 0.35s ease.
- **Navigation:** plain page links between the five pages (map to routes: `/`, `/opinions`, `/notes`, `/contact`, `/notes/[slug]`, `/opinions/[slug]`).
- **Hovers:** buttons/cards lift with `transform: translateY(-3px / -6px)`, transition ~0.18–0.2s ease; list rows tint + indent; footer/nav links recolor.
- **Notes search:** case-insensitive hashtag filter over the note list; clear button resets; empty state with doodle.
- **Underline squiggles:** draw in once on load via `stroke-dashoffset` animation (~1–1.1s, 0.3–0.4s delay, fill freeze).

## Animations (the signature "hand-drawn" system)
- **Boiling-line filter:** every doodle SVG runs through a shared filter `#doodle` — `feTurbulence` (baseFrequency 0.018, 2 octaves) + `feDisplacementMap` (scale 3.2), with the turbulence `seed` animated through `3;5;7;9;11;9;7;5;3` over **1.6s**, spline-eased (`.4 0 .6 1`), infinite. This makes strokes wobble like a flipbook. Define the filter once per page in a 0×0 SVG.
- **Bobbing:** `@keyframes bobc` translateY(0 → −12px → 0), applied to mascots/bubbles with durations 3.6–5.5s ease-in-out infinite (varied per element so they desync).
- **Waving arm:** SMIL `animateTransform` rotate −3° → −24° → −3°, 1.8s, spline `.37 0 .63 1`, infinite.
- **Sparkles:** opacity 1 → 0.25 → 1, 2s, spline-eased, infinite.
- **Pencil scribble (Notes card):** translate jitter `0 0; 2 2.5; 0 0; -2 1.5; 0 0`, 2.2s, spline-eased.
- Motion register: eased and gentle — no bounces or springs.

## State Management
- `theme: 'light' | 'dark'` — persisted (localStorage), default light.
- `notesQuery: string` — Notes page search; derived `filteredNotes`, `noResults`.
- Content should be data-driven: a collection of posts/notes with `{ title, slug, type: 'opinion' | 'note', kind?: 'cheat sheet' | 'long read', tags: string[], date, readTime?, excerpt }`.

## Design Tokens
Themed via CSS variables (light / dark):
- `--bg`: #FBFAF7 / #130F0D
- `--surface`: #FFFFFF / #1B1816
- `--ink` (primary text): #130F0D / #F3F3F0
- `--ink-2` (secondary): #4A4440 / #B8B4AE
- `--ink-3` (tertiary): #9A968F / #8C8985
- `--hair` (hairlines): rgba(19,15,13,.10) / rgba(243,243,240,.12)
- `--dot` (paper dots): rgba(19,15,13,.06) / rgba(243,243,240,.06)
- `--nav` (nav bg): rgba(251,250,247,.85) / rgba(19,15,13,.82)

Accents (from the Synthesis design system, `colors_and_type.css`):
- Purple (primary accent): #B841FB · Pink: #F966B4 · Sky blue: #5AC6FF (used for Notes; **do not** use the neon cyan #59FFF5 — it was deliberately removed)

Typography:
- Display: "Inter Tight" (fallback Aptos Display) — headings, 700–800, letter-spacing −0.02 to −0.03em
- Body: "Inter" (fallback Aptos) — 15–20px, line-height 1.5–1.55
- Mono: "JetBrains Mono" — pills, dates, code, footer links
- Eyebrows: 12–13px, 700, uppercase, letter-spacing 0.18em

Shape & depth:
- Radii: pills/buttons 999px · cards 20–26px · speech bubbles 16px · logo square 10px
- Card shadow: `0 10px 30px rgba(19,15,13,.07)`; hover `0 20px 44px rgba(19,15,13,.14)`
- Background texture: `radial-gradient(var(--dot) 1.5px, transparent 1.5px)` at 26px × 26px

## Assets
No raster assets. All illustrations are inline SVG stick-figure doodles (drawn with `stroke: var(--ink)`, 3.5–4.5px strokes, round caps, run through the `#doodle` boiling filter) — copy the SVG markup verbatim from the design files. Icons (sun/moon, magnifier) are inline stroke SVGs.

## Files
- `design_files/Home.dc.html` — landing page
- `design_files/Opinions.dc.html` — blog index
- `design_files/Notes.dc.html` — notes index with hashtag search
- `design_files/Contact.dc.html` — contact page
- `design_files/Post - The inferiority complex as a developer.dc.html` — opinion detail template
- `design_files/Note - How DNS resolution works.dc.html` — note detail template
- `design_files/_ds/.../colors_and_type.css` — design-system token sheet (referenced by all pages)
- `design_files/support.js`, `_ds_bundle.js` — prototype runtime only; ignore for implementation
