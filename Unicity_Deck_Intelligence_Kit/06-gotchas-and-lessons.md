# 06 · Gotchas & Hard-Won Lessons

Every trap we hit across the 4 days, and the fix. Read this before editing — it'll save hours.

## JSX / code traps
- **Orange-span quote-escaping (the recurring build-breaker).** In a `dangerouslySetInnerHTML` string, the inner `<span class="o">` quotes must be the **opposite** delimiter of the attribute. If `html="…"` (double), write `class='o'` (single) inside — and vice-versa. A matching/`\"`-escaped inner quote closes the attribute early and breaks the build. Symptom: `window.__goToSlide is not a function` on export, or a Vite "Unexpected token" at a line:col.
- **Apostrophes in single-quoted JSX attrs:** `main='…didn\'t…'` breaks (the `\'` closes the attr). Rephrase ("does not") or use a double-quoted attribute.
- **`npm run build` fails on `noUnusedLocals`.** Use the dev server + `export-fast.mjs`. Never `npm run build`.
- **Editing the JSON-encoded SVG strings in `gregDiagrams.ts`:** a Python `re.sub` whose *replacement* contains `\u…` (from ✓/✗/· in the SVG) throws "bad escape \u". Use a lambda/function replacement or plain `str.replace`.
- **`Edit` tool "file modified since read":** after a shell `cp`/`python` writes a file, re-`Read` it before `Edit`. After my own `Edit`, the harness state is current — don't re-read.

## Layout / design traps
- **Diagram font-floor overflow.** The 15px floor bumps small SVG labels past boxes sized for 11–13px text. Fix: shorten the label and/or size every label to fit its box. (e.g. "Single function: has this token been spent before?" overflowed the 340px ZK-oracle box → "Has this token been spent?".)
- **The desktop regression (important lesson).** A responsive change that isn't `lg:`-gated WILL break desktop. We dropped `flex-1` from the `Two` diagram column and switched Shell to `min-h-full` → desktop diagrams shrank and centering broke. **Always re-verify the desktop render after any responsive edit.** Don't claim "desktop unchanged" without looking.
- **Top-anchoring vs centering.** We tried pinning headlines to a fixed datum; it jammed content into the top third with empty bottoms. Alan wants content **vertically centered** (balanced). Centering *is* the balance.
- **Redundant marks.** A Hard Yaka logo next to a headline that already says "HARD YAKA" reads as an anomaly — removed it; the headline carries the brand. The deck refers to Hard Yaka in **text**, not logo (cover included).
- **Duplicate watermark on the cover.** The deck template (`SlideNavigation`) renders the Unicity logo bottom-right on every slide; the cover *also* had its own HUD "Unicity" text in the same corner → blur. Removed the cover's HUD text; kept the template mark.

## Performance traps
- **Slow PDF = vector export.** Vector re-draws 100s of ops per page → laggy scroll. **Raster (one JPEG/page) renders instantly.** Always `export-fast.mjs`.
- **Resolution vs size.** 3× deviceScaleFactor is perceptually wasted for a deck; **2× is retina-crisp and ~40% smaller**. Tuned to 2× / q88.
- **The "flicker before loaded" (it's the LIVE web view, not the PDF).** Two causes: (1) staggered framer-motion mount animations on the cover/team (delays to 1.15s) → set **`initial={false}`** so elements render at final state instantly; (2) **`font-display: block`** → text invisible until font loads → switch to **`swap`**. The PDF itself never flickers (export waits 3s → fully-settled).

## Process traps (mine)
- **Workflows reviewing the wrong source.** A review agent read `build.mjs` (the old HTML deck) instead of the React `GregDeck.tsx`, producing edits against stale copy. When fanning out, pin the agents to the *exact* live files.
- **Verify before claiming.** Several misses came from asserting "done/unchanged" without rendering. Render and look — especially desktop after mobile work, and the actual changed slide after an edit.
- **Over-engineering.** Alan repeatedly wanted the simple, obvious thing. Don't add cleverness he didn't ask for.
