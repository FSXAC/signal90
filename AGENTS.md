# Building UI in SIGNAL/90

Instructions for coding agents. Machine-readable source of truth: [`signal90/guide.json`](signal90/guide.json) (rules, components, motion, layout, JS API, review checklist) and [`signal90/tokens.json`](signal90/tokens.json) (DTCG design tokens). Read both before writing UI. If this file and `guide.json` disagree, `guide.json` wins.

## Kit

| File | What |
|---|---|
| `signal90/signal90.css` | Tokens as CSS custom properties + component classes (`.tag`, `.chain`, `.brk`, `.chev`, `.hazard`, `.wall`, `.dump`, `.strobe`, `.blink`, `.flick-on`, `.tall/.cond/.hx/.wide`) |
| `signal90/signal90.js` | Globals, no bundler: `stretchAll`, `seg7`, `ctx`, `AF`/`FR`, SVG kit (`sv`, `chamfer`, `tagS`, `chainS`, `tab`, `brkS`, `gridS`, `rulerS`, `wire`, `dot`, `drawWires`, `diamond`, `seg`, `svgT`, `monoT`, `mincT`), text walls (`wallHTML`, `dumpText`) |
| `signal90/template.html` | Working starter: one HTML screen, one SVG screen |
| `demo-reel.html` + `scenes.js` | 41 reference screens. Copy patterns from here |

## Build loop

1. Start from `signal90/template.html`: fonts, kit CSS/JS, the `#sglow`/`#rgbsplit` filters, a 16:9 `.screen` with `container-type:inline-size`.
2. Pick a layout pattern from `guide.json → layout.patterns` (alarm, dashboard, schematic, status_list, monitor, terminal, auth).
3. Compose with kit components only. Size HTML in `cqw`; draw SVG screens in a `0 0 1600 900` viewBox.
4. Animate with `const c = ctx(); c.every(AF, …)`: big steps, no easing. Kill the scope (`c.kill()`) when the screen unmounts.
5. Call `stretchAll(root)` after inserting text, after `document.fonts.ready`, and on resize.
6. Run the review checklist (`guide.json → review_checklist`) before you finish.

## Non-negotiables (short form)

- **Flat screen.** No perspective, tilt, parallax or camera moves. Cuts, not transitions.
- **One family, stretched.** Helvetica Bold, UPPERCASE, distorted with `scaleX` (`.tall` .56, `.cond` .74, `.hx` .84, `.wide` 1.18). Mono for data, Mincho for kanji stamps.
- **Boxed labels, 7-segment numbers.** Labels go in `.tag` or `.chain` cells. Ticking values use `seg7`/`seg`.
- **Colour = meaning.** Red is fault, mint is ok, amber is data, sky is secondary, phosphor is traces. Max 3 hues per screen, on `--void`.
- **Ornament.** Chamfer frames, corner brackets, tabs on rails, orthogonal wires with dot terminals, leader lines to a shared rail, rulers, grids. Snap to a module grid.
- **Texture.** A word wall or dump text behind the hero.
- **Motion on the anime frame.** `AF` = 83.333 ms. `steps()`, never ease. Strobe (12 Hz, 42% afterimage) is for critical states only; use `.blink` for status.
- **Asymmetric, never modal.** Heroes bleed off an edge; frames get one cut corner or an open side. Overlap only across open edges or bands. No centred dialog boxes.
- **Oblique accents.** `.obl` (skewX -12°) on 1–2 hero words or warnings per screen.
- **No rounded corners, drop shadows, glass, icon fonts or emoji.**
- **Original copy only.** No real shows, brands or characters.

## Sound

Sound is documented in `guide.json → sound` (layers, frequencies, rates) but not implemented in the kit. Don't add audio unless asked.
