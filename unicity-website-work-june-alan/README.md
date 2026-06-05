# Unicity — Enterprise vertical website pages (June 2026, Alan)

Web-ready build of the four **Enterprise** vertical pages — **Telecom, MSSP, Finance, Gaming** —
plus an **Enterprise overview** landing page, packaged from 0xt1mo's pitch-deck material.
Destined for the `mike` branch of `unicitynetwork/unicity-website` (staging:
https://web.staging.unicity.network/). Parked here on `0xt1mo/pitchdeck` because the
website repo is private and not yet accessible to `alanradi` — see **Status** below.

## View it

Two ways, no build step:

1. **Fastest — open the portable file.** Double-click **`Unicity-Industry-Pages.html`**.
   It's a single self-contained file (fonts + images inlined as data URIs, ~4.4 MB);
   opens in any browser with no server.

2. **Editable source.** From this folder:
   ```
   python3 -m http.server 8080
   ```
   then open http://localhost:8080/  (loads `index.html`). A server is needed because
   `index.html` pulls in `./fonts/` and `./assets/` by relative path.

Navigate between the five pages from the top nav, or by hash:
`#industry` (Enterprise overview) · `#telecom` · `#mssp` · `#finance` · `#gaming`.

## What's here

| Path | What it is |
|---|---|
| `index.html` | The five pages as one self-contained SPA (inline `<style>`/`<script>`, JS hash routing). **Editable source of truth.** |
| `Unicity-Industry-Pages.html` | Portable single-file build of the same thing — fonts + assets inlined. Regenerated from `index.html`. |
| `fonts/` | Self-hosted Anton (display) + Geist Mono (eyebrows/labels). Inter loads from Google Fonts. |
| `assets/` | Logos and images referenced by `index.html`. |
| `docs/` | The written deliverables (below). |

### docs/
- **`WEBSITE-INDUSTRY-BUILDKIT.md`** — web-ready copy for all four verticals, the shared
  section template, the reusable-asset list, and the build checklist. The primary spec.
- `WEBSITE-INDUSTRY-BUILDKIT-v1.md` — earlier revision, kept for reference.
- `INDUSTRY-ENRICHMENT-SPEC.md` — enrichment notes / source mapping.
- `0xt1mo-voice-guide.md` — voice + register guide distilled from the decks.
- `WORK-REVIEW.md` — review notes from the build.

## Design system (so edits stay consistent)

- **Palette:** `#060606` background, `#fefefe` text, orange `#FF6A00` / `#f97316` on the
  load-bearing clause of each headline.
- **Type:** Anton (uppercase display), Inter (body), Geist Mono (eyebrows/labels).
- **Heroes are centered** (eyebrow · headline · subhead · CTAs · primitive strip).
- **Section-pattern library:** centered hero → centered "moment" statements →
  two-column editorials → **full-width** component rows (the isometric "one protocol
  stack" diagram is always full-width, never nested in a split) → full-width card / stat /
  logo grids → centered CTA band.
- Verified at 1440px (desktop) and 390px (mobile).

## Content rules baked in

Copy is ported from the decks in 0xt1mo's voice. Specifically scrubbed of:
- monetization/BD jargon (no ARPU, GGR, P&L, "highest-margin product since data"),
- hype buzzwords (no "one pane of glass", "unlock", "seamless", "leverage"),
- named individual bios (team is referenced by track record, not by person),
- office/geo lines (location belongs on a Contact page, not in stat strips).

Heritage is framed as the **KSI blockchain** lineage (not the Guardtime brand); named
orgs (NATO, DARPA, BIS, Maersk, SEB, KPMG…) are "where KSI ran" / team track record,
**never** presented as Unicity customers.

## Status (June 2026)

- Design + copy: **cleaned and self-consistent**; all reviewed blockers closed
  (centered heroes, geo tiles removed, duplicate headlines fixed, banned vocabulary
  swept). Final as a preview/handoff artifact.
- **Not yet live.** This is a standalone preview, not integrated into the Next.js
  app-router site. To ship it as real pages, `alanradi` needs collaborator access to
  `unicitynetwork/unicity-website` (+ SSO authorization) so the `mike` branch can be
  cloned and these pages ported in.

## Regenerating the portable file

`Unicity-Industry-Pages.html` is produced by inlining every `./assets/*` and `./fonts/*`
reference in `index.html` as a base64 data URI. Edit `index.html`, then rebuild the
portable copy from it.
