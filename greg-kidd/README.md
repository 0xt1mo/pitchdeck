# Unicity × Greg Kidd / Hard Yaka — Seed Proposal

A seed-investor deck pitching **Unicity** as *the settlement layer for fair access*, written for **Greg Kidd** (Hard Yaka). It reframes the Unicity protocol deck around Greg's own thirty-year campaign — cut the middleman, prove the identity, move the value freely — and the one piece the rails never carried: **a settlement layer where the credential is load-bearing, not optional.**

## The thesis (the meeting-winner)

Greg's identity bet — GlobaliD — was **right, but early**. It didn't fail on cryptography; it stalled because self-sovereign identity had **no economic forcing function**. The credential always sat *next to* the transaction, never inside it — skip the check and nothing broke.

> **Unicity's receive predicate is the first rail where the asset cannot move unless the credential is present — the forcing function the thesis never had.**

And the buyer has finally arrived: the agent that cannot round-trip a centralized check and must verify in-band, at the edge. Greg already reached this conclusion building **USBC** (identity inside the money, on one bank charter). Unicity is that move generalized one layer down — *a rail USBC could settle on, not one that competes with it.*

## What's here

| File | What it is |
|---|---|
| `OUTREACH-NOTE.md` | The 3-line note that gets the meeting. **Send this first** — the deck is the leave-behind. |
| `index.html` | The 14-slide deck (self-contained; open in a browser). |
| `Unicity_HardYaka_Seed_Deck.pdf` | The deck as a 16:9 PDF. |
| `slides/` | Per-slide PNG renders. |
| `build.mjs` | Reproducible build — renders `index.html`, `slides/`, and the PDF. |
| `assets/logo-defs.html` | The `#ulogo` SVG (keeps the build self-contained). |

## The arc

1. Cover — the credential lives *inside* the transfer
2. The throughline — every bet assumed a layer none of them own
3. The team — KSI / Estonia, the backbone a nation runs on (credibility gate, moved early)
4. Why now — the majority actor online is already a machine; the message is the settlement
5. **The diagnosis — right thesis, no forcing function** (the GlobaliD post-mortem)
6. **The portfolio map — the floor under 250 bets** (where Unicity sits)
7. **The tradeoff — privacy / compliance / throughput, pick two** (the trilemma)
8. **The move — make the money a thing you hold** (ledger entry → self-contained bearer file)
9. **Verify it yourself, like cash** (the bearer flow — proof travels with the asset)
10. The architecture — the chain's only job is to prevent double-spending (the uniqueness oracle)
11. **Compliance by construction — not a guy in the middle** (the receive predicate)
12. The swap — both parties commit, nobody chases a timeout
13. **The life arc — you already reached this conclusion, inside one bank**
14. Proof — three formal papers; the white paper is marketing, these are math
15. The boundary — what a charter structurally cannot cross
16. Live — agents discover, transact, and settle today
17. The ask — a $5M co-build, one layer down

## Infographics & voice

All seven protocol infographics are ported faithfully from the Unicity protocol deck (`tech-finance`) and live in `diagrams/` as self-contained, recolored SVG: the **trilemma Venn** (slide 7), the **ledger→bearer transformation** (8), the **bearer A→token+proof→B flow** (9), the **uniqueness-oracle stack** (10), the **receive-predicate branch** (11), the **HTLC-vs-predicate swap** (12), the **agentic hub** (16). The voice is taken from how Unicity presents in the room — first-principles, anti-fluff, radically honest: *privacy/compliance/throughput, pick two · the chain's only job is to prevent double-spending · verify it like cash · compliance by construction, not a guy in the middle · the message is the settlement · the white paper is marketing, the math is the proof.*

## Rebuild

```bash
node greg-kidd/build.mjs   # requires puppeteer + pdf-lib in the repo node_modules
```

## Fact-discipline (load-bearing — Greg is a Fed / Ripple-CRO reader)

- **57.5%** = *web requests* (Cloudflare), **not on-chain** — qualifier stays on-slide.
- **x402 ~100M tx on Base / 9mo** (Chainalysis) — transaction count only; real volume is tiny.
- **300,000+ tx/sec** = the team's **KSI lineage** in the Eesti Pank 2021 CBDC test — *never* "the ECB tested Unicity."
- The papers prove **privacy + no-double-spend** only — *never* throughput; scalability is "by sharding, as design."
- **eIDAS-aligned**, not accredited. Greg **founded** GlobaliD; was Ripple **early-investor + CRO**.
- GlobaliD **never reached escape velocity / migrated into USBC** — never "shut down."
- **USBC is respected throughout** — the right conclusion on one charter, not a target.

---

*Provenance: reframed from the Unicity protocol deck (`tech-finance` branch). House system — bg `#060606`, accent `#FF6A1F`, Anton + Geist Mono.*
