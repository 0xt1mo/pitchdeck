# Unicity × Greg Kidd / Hard Yaka — Seed Proposal

A seed-investor deck pitching **Unicity** to **Greg Kidd** (Hard Yaka) — written as a *story*, not a feature list. Greg is the hero; Unicity is the guide that hands him the missing piece. It reframes the Unicity protocol deck around his thirty-year campaign for fair access — cut out the middleman, prove who's really there, let the money move — and the one piece that never held: a place for value to settle where the rule lives *inside the money*, so nothing moves unless it's satisfied.

## The story

Greg's identity bet — GlobaliD — was **right, but early**. It didn't fail on cryptography; it stalled because nobody ever *had* to use it: the credential always sat next to the payment, and you could skip it with nothing broken. (Microsoft shut its identity chain in 2023; Trinsic folded before a credential was ever reused — the whole field hit the same wall.)

He learned the lesson and built **USBC**: identity *inside* the money, on one bank charter. That instinct is exactly right — the only question left is how to make it true everywhere.

> **The buyer that can't skip the check has finally arrived: the machine. Unicity is where USBC's move works everywhere — the credential lives inside the asset, so the money won't move unless the rule is satisfied. The piece GlobaliD never had.**

Structure borrowed from *Storyteller Tactics*: **Hero & Guide** (Greg is the hero, Unicity the guide), **Man in a Hole** (GlobaliD = the fall, the machine economy = the climb out), **The Dragon & the City** (machines as threat *and* opportunity), and the **POPP** pitch arc (problem → opportunity → practical → promise).

## What's here

| File | What it is |
|---|---|
| `OUTREACH-NOTE.md` | The 3-line note that gets the meeting. **Send this first** — the deck is the leave-behind. |
| `index.html` | The 17-slide deck (self-contained; open in a browser). |
| `Unicity_HardYaka_Seed_Deck.pdf` | The deck as a 16:9 PDF. |
| `slides/` | Per-slide PNG renders. |
| `build.mjs` | Reproducible build — renders `index.html`, `slides/`, and the PDF. |
| `assets/logo-defs.html` | The `#ulogo` SVG (keeps the build self-contained). |

## The arc

1. **Cover** — thirty years, one fight: a fair shot at your own money
2. **The quest** — fair access always came down to three things; two shipped, one never held
3. **The wound** — GlobaliD: you bet your career on it; it was right, it was early
4. **What you did next** — USBC: you stopped bolting identity on, you put it inside the money
5. **What changed** — the buyer showed up: the internet is mostly machines, and a machine can't skip the check
6. **How it works ①** — take the dollar off the ledger, make it a file you hold *(transformation)*
7. **How it works ②** — hand someone a ten, they don't phone a committee *(bearer flow)*
8. **How it works ③** — the only job a chain ever had: stop double-spends *(uniqueness oracle)*
9. **The missing piece** — the dollar checks who's allowed to hold it, by itself *(receive predicate)*
10. **The tradeoff** — on a shared ledger you get two of three, never all three *(trilemma)*
11. **It's not a toy** — two strangers trade, no middleman, no timer *(atomic swap)*
12. **What it becomes** — once a trade needs no middleman, the market runs itself *(agentic hub)*
13. **Who we are** — the team a government already trusts with its records *(KSI + radical honesty)*
14. **Trust the math** — the white paper is marketing; these three papers are the real thing
15. **Back to USBC** — a charter only settles for its own members; the space between is what we built
16. **Where this sits** — every bet you funded assumed this layer was already there *(portfolio map)*
17. **The ask** — you started this thirty years ago; finish it. A $5M co-build.

## Infographics & voice

All seven protocol infographics are ported faithfully from the Unicity protocol deck (`tech-finance`) and live in `diagrams/` as self-contained, recolored SVG — they carry the *show* in show-don't-tell: the **ledger→bearer transformation** (slide 6), the **bearer A→token+proof→B flow** (7), the **uniqueness-oracle stack** (8), the **receive-predicate branch** (9), the **trilemma Venn** (10), the **HTLC-vs-predicate swap** (11), the **agentic hub** (12).

The copy was rewritten by a fleet trained on Unicity's own voice data (the 0xt1mo guide, the live decks, the room transcript, the Paolo/Tether register) against an enforced **Voice Bible**. The posture is **the Paolo register**: a deeply-informed protocol team speaking peer-to-peer about the ideas, the history, and the architecture — describing the problem precisely and letting Greg draw his own conclusions. It never narrates his biography at him, never dares or instructs him, never flatters.

Enforced bans (verified zero in the build): the *not-X-but-Y* / reflexive-negation tic; second-person "you/your"; the word "rail"; "forcing function" in a headline; hype adjectives. Exemplars of the register: *the only job a chain ever had is to answer one question — has this been spent · a ten-dollar note settles the moment it changes hands, nobody sends it to a committee · the white paper is marketing; the work is three math papers · we're protocol engineers, not lawyers.*

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
