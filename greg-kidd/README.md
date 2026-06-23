# Unicity × Greg Kidd / Hard Yaka — Seed Proposal

A seed-investor deck pitching **Unicity** to **Greg Kidd** (Hard Yaka), framed around **Securing the Agentic Economy** — the machine economy is here, a shared ledger cannot verify a fast-moving actor in real time, and Unicity is the cure. Written as a *story*, not a feature list. Greg is the hero; Unicity is the guide that hands him the missing piece. It carries his thirty-year campaign for fair access — cut out the middleman, prove who's really there, let the money move — into the agentic era, where the buyer that can't skip the check has finally arrived: the machine.

## The story

Greg's identity bet — GlobaliD — was **right, but early**. It didn't fail on cryptography; it stalled because nobody ever *had* to use it: the credential always sat next to the payment, and you could skip it with nothing broken. (Microsoft shut its identity chain in 2023; Trinsic folded before a credential was ever reused — the whole field hit the same wall.)

He learned the lesson and built **USBC**: identity *inside* the money, on one bank charter. That instinct is exactly right — the only question left is how to make it true everywhere.

> **The buyer that can't skip the check has finally arrived: the machine. Unicity is where USBC's move works everywhere — the credential lives inside the asset, so the money won't move unless the rule is satisfied. The piece GlobaliD never had.**

Structure borrowed from *Storyteller Tactics*: **Hero & Guide** (Greg is the hero, Unicity the guide), **Man in a Hole** (GlobaliD = the fall, the machine economy = the climb out), **The Dragon & the City** (machines as threat *and* opportunity), and the **POPP** pitch arc (problem → opportunity → practical → promise).

## What's here

| File | What it is |
|---|---|
| `OUTREACH-NOTE.md` | The 3-line note that gets the meeting. **Send this first** — the deck is the leave-behind. |
| `index.html` | The 20-slide deck (self-contained; open in a browser). |
| `Unicity_HardYaka_Seed_Deck.pdf` | The deck as a 16:9 PDF. |
| `slides/` | Per-slide PNG renders. |
| `build.mjs` | Reproducible build — renders `index.html`, `slides/`, and the PDF. |
| `assets/logo-defs.html` | The `#ulogo` SVG (keeps the build self-contained). |

## The arc

1. **Cover** — *Securing the Agentic Economy* — the machine economy is here; a shared ledger cannot verify a fast actor in real time; Unicity is the cure
2. **The agentic economy** — most traffic is already machines, and they have started paying each other *(57.5% · the turn)*
3. **Why a shared ledger can't verify a fast actor in real time** — broadcast / order / validate / record, for everyone — the ceiling is the design
4. **The three problems** — fair access takes three; two solved a decade ago, the open one is proving who is on the other end
5. **The field** — identity reached the right architecture before the market could carry it; GlobaliD stalled, USBC put it inside the dollar
6. **Off the ledger** — a dollar on-chain is a row someone keeps; Unicity makes it a bearer file *(transformation diagram)*
7. **One question** — the only job a chain ever had: has this been spent — sophisticated in cryptography, simple in composition *(uniqueness oracle)*
8. **What moves to the edge** — communication / storage / validation leave the chain; uniqueness is all that stays *(new)*
9. **The inevitable unbundling** — Bitcoin 2009 → FastPay 2023 → Unicity 2026 *(new · statement turn)*
10. **The architecture** — RandomX PoW + chained HotStuff + ZK oracle on-chain; SDK + agent execution layer off-chain *(new · the stack)*
11. **The rule inside the token** — the money checks who may receive it; a failing transfer can't be constructed *(receive predicate)*
12. **Three observers** — privacy as a founding principle: the network, the sender, anyone who knows your address — none can learn anything *(proven)*
13. **No bridge, nothing to hack** — a locked source asset is verified directly; no bridge, no custodian *(new · objection-killer)*
14. **Five wins, one hard problem** — removing the shared ledger buys five; atomicity is the one it leaves *(new · statement turn)*
15. **The trade** — two parties swap, no middleman holding both legs, no clock, no MEV *(atomic swap)*
16. **Scale by adding shards** — the oracle never validates; throughput grows horizontally *(new · ~30k/shard, design)*
17. **The machine market** — CEX speed · DEX custody · private and compliant (the only column green on every row) *(new · CLOB matrix)*
18. **What gets built** — a decentralized autonomous corporation, built for BlackRock (autonomous reinsurance) *(new · the DAC)*
19. **The vision of the titans** — Circle, Solana, Cardano, Greg/USBC all optimize the ledger; Unicity eliminates it *(new · external validation)*
20. **The team, the proof, the ask** — Guardtime/KSI with the Estonian Government, Lockheed Martin, Boeing & NATO · three math papers · a $5M co-build, then the full-width close

*v2 (deeper): excavated from the full 26-slide protocol deck + the scalability report + the propositional-development notes. 13 → 20 — the story spine preserved, now showing what Unicity IS as a system. Every technical claim fact-tagged: **proven** (privacy + no-double-spend only), **design** (~30k tx/sec per shard, sharding, AIR+Plonky3, no-trusted-setup, PoW+BFT), **lineage** (300k tx/sec Eesti Pank 2021 / KSI / Estonian Government·Lockheed Martin·Boeing·NATO — the team's history, never a live Unicity number). No arXiv IDs; Plasma never named; USBC respected.*

*Distilled from 17 → 13 by a council of deck-authors (narrative architect, minimalist, investor whisperer, voice keeper, the explainer, visual editor): the spine is told once and accelerates, the turn moves up, six mechanism slides become four, the second ending is cut, the orange punch-line is rationed to ~5 slides, and the best sentence is held for the full-width climax. The 13 headlines, read alone in order, carry the whole argument.*

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
- **300,000+ tx/sec** = the team's **KSI lineage** in the Eesti Pank 2021 CBDC test — *never* "the ECB tested Unicity." The cryptographers' heritage runs through the **Estonian Government, Lockheed Martin, Boeing & NATO**.
- The papers prove **privacy + no-double-spend** only — *never* throughput; scalability is "by sharding, as design."
- **eIDAS-aligned**, not accredited. Greg **founded** GlobaliD; was Ripple **early-investor + CRO**.
- GlobaliD **never reached escape velocity / migrated into USBC** — never "shut down."
- **USBC is respected throughout** — the right conclusion on one charter, not a target.

---

*Provenance: reframed from the Unicity protocol deck (`tech-finance` branch). House system — bg `#060606`, accent `#FF6A1F`, Anton + Geist Mono.*
