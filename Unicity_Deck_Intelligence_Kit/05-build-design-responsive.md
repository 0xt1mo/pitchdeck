# 05 · Build, Design & Responsive System

## The app
Vite + React 19 + Tailwind v4. Slides are full-viewport TSX components in the `slides` array in `src/App.tsx`. Desktop-grade; now also responsive (phone/tablet). Two worktrees of the `0xt1mo/pitchdeck` repo:
- `~/pitchdeck-tether` → branch `greg-kidd-tether` (Option A)
- `~/pitchdeck-optionB` → branch `greg-kidd-optionB` (Option B)
- `~/pitchdeck` → branch `greg-kidd` (HTML deck-builder + this Kit + `deck-content.md` + `0xt1mo-voice-guide.md`)

## The content (our work)
- `src/slides/GregDeck.tsx` — the shared deck: 16 slide components + helpers `Shell`, `H({main,sub})`, `Core({html})`, `Dia({k,max})`, `Two`, `Table`, cell styles. Headlines/cores render via `dangerouslySetInnerHTML`; orange via `<span class="o">`, bold via `<b>`.
- `src/gregDiagrams.ts` — 8 inlined SVG diagrams (xform/ledgerbearer/oracle/compliance/nobridge/swap/dac/trilemma/archstack), preprocessed (font floor 15, orange remapped to #FF8904).
- `src/slides/CoverSlide.tsx` — the May-30 hero cover. `src/slides/WhoWeAreSlide.tsx` — the real Tether team slide (founders + globe + logo wall).
- `src/slides/GregOptionB.tsx` (Option B only) — the answer slide, the Hard Yaka portfolio, the "THE HOW" divider.

## Design system
- **Colour:** orange = Tailwind `--color-orange-400` ≈ **#FF8904**. (House orange `#FF6A1F` was the banned deviation — everything remapped to #FF8904.)
- **Fonts:** **Anton** (display/headlines, uppercase) + **Geist Mono** (body). Self-hosted in `public/fonts/`, `@font-face` in `src/index.css`, **`font-display: swap`** (was `block` — caused the load flicker).
- **Headline scale:** `text-[30px] sm:text-[40px] lg:text-[52px]`. **Body/sub:** `lg:text-xl` (20px — was 24px, too big). One consistent type scale.
- **Layout:** content **vertically centered** on every slide (`justify-center`) — balanced, never top-jammed. (We briefly top-anchored to a fixed datum; Alan rejected it — centered is the standard.)
- **Diagrams** are inline SVG, `width:100%`, sized by a `max` vh prop on `<Dia>`. Keep all diagram text ≥15px and size every label to fit its box (see 06).

## Build & export
```bash
cd ~/pitchdeck-tether            # or ~/pitchdeck-optionB
npx vite --port 5174             # Option B uses 5175
node scripts/export-fast.mjs http://localhost:5174 <out.pdf>
```
- **`npm run build` FAILS** (tsc `noUnusedLocals`). Never use it — use the dev server.
- **`export-fast.mjs`** = raster JPEG, **deviceScaleFactor 2, quality 88** (the optimized settings: retina-crisp, ~40% smaller than 3×, faster load). It waits 3s per slide → the PDF captures the fully-settled state. **Vector export is slow to view — always raster.**
- PDF naming convention: `Unicity_Greg_Kidd_June_25_Draft_A.pdf` / `_B.pdf` (in `~/Downloads` + committed to each branch).
- Typical sizes: A ≈ 4.8 MB (16 slides), B ≈ 5.7 MB (20).

## Responsive system (phone / tablet / desktop)
The Tether app shipped a `<768px → DESKTOP ONLY` gate; we removed it and made the deck genuinely reflow. **Every responsive change is `lg:`-gated so desktop is byte-identical.**
- **Gate:** removed the `if (isMobile) return …` block in `App.tsx` (both decks).
- **Shell:** `fixed inset-0 overflow-y-auto lg:overflow-hidden`; inner `min-h-full lg:h-full flex-col justify-start lg:justify-center px-6 sm:px-12 lg:px-24`. → mobile scrolls & top-aligns; desktop is fixed-centered.
- **`Two` (text + diagram):** `flex flex-col lg:flex-row`; left `lg:shrink-0 lg:basis-[44%]`; right **`lg:flex-1`** (critical — without it the diagram shrinks). → stacks on mobile, side-by-side filling on desktop.
- **`Table`:** wrap in `-mx-6 sm:mx-0 overflow-x-auto` + inner `min-w-[620px] sm:min-w-0`. → horizontal scroll on mobile (columns stay legible, not crushed).
- **Cell grids:** bottleneck `grid grid-cols-2 lg:flex`; x402 panels `flex-col lg:flex-row`; privacy rows stack; portfolio `grid-cols-3 sm:grid-cols-4 lg:grid-cols-7`; team founders/globe `grid-cols-1 lg:grid-cols-[1fr_1fr]`, logo wall `grid-cols-4 lg:grid-cols-7`.
- **The web app responsive ≠ the PDF.** A flat PDF is fixed-page. The responsive layout enables a phone-readable view *when opened in a browser / served as a link*, and could feed a portrait-PDF export (not yet built).

## Quick mobile-verify recipe
A tiny puppeteer script in `scripts/` (viewport 390×844, `__goToSlide(i)`, screenshot) renders any slide at phone width. Always verify mobile AND re-verify desktop after a responsive change.
