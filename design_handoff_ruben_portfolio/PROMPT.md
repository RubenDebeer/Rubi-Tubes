# Prompt for Claude Code

Copy-paste everything below the line into Claude Code, run from the folder containing `design_handoff_ruben_portfolio/`.

---

Implement my personal portfolio/blog site in **Vue 3** from the design handoff in `design_handoff_ruben_portfolio/`.

Read `design_handoff_ruben_portfolio/README.md` first — it documents every screen, token, interaction, and animation. The `.dc.html` files in `design_files/` are high-fidelity design references: open them to inspect exact markup, inline styles, and SVG doodle illustrations. Recreate them faithfully — do NOT ship those files or their runtime (`support.js`, `_ds_bundle.js`) directly.

Stack requirements:
- Vue 3 with `<script setup>` SFCs, Vite, and vue-router (routes: `/`, `/opinions`, `/opinions/:slug`, `/notes`, `/notes/:slug`, `/contact`).
- No UI framework — hand-rolled CSS matching the design exactly. Put the theme tokens (light/dark CSS variables from the README's Design Tokens section) in a global stylesheet; everything else can be scoped styles.
- Fonts: Inter Tight (display), Inter (body), JetBrains Mono — load from Google Fonts.
- Content is data-driven: define posts/notes as a typed collection ({ title, slug, type, tags, date, readTime, excerpt, body }) in a `src/content/` module so new entries are added without touching components. Seed it with the entries visible in the designs.

Must-preserve details:
1. Pixel-faithful layout, spacing, radii, shadows, and copy from the design files (all styles are inline on the elements — treat them as the spec).
2. The hand-drawn aesthetic: copy the inline SVG stick-figure doodles verbatim, including the shared `#doodle` feTurbulence "boiling" filter and all SMIL animations (wave, sparkle, bob, underline draw-in). Define the filter once per page.
3. Dark/light theme: toggle on `<html>`, persisted to `localStorage['rd-theme']`, applied before first paint (inline head script) to avoid flash, 0.35s background/color transition.
4. Notes page hashtag search: live case-insensitive filtering, clear button, empty-state doodle.
5. Hover behaviors: card lift + shadow deepen, list-row tint + indent, pill button lift.
6. Shared components: NavBar (sticky, translucent, blur), Footer, category Pill, PostCard, NoteRow — reused across pages.
7. Accessibility: semantic landmarks, aria-label on the theme toggle, visible focus states, prefers-reduced-motion disables the boiling/bobbing animations.

Build it, then verify each page against its design file side by side in the browser before finishing.
