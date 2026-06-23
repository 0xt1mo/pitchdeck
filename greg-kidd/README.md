# Unicity × Greg Kidd / Hard Yaka — Seed Proposal

An **18-slide institutional seed deck** pitching **Unicity** to **Greg Kidd** (Hard Yaka), written in a Tier-1 VC register: one thesis **headline** + one context **sub-headline** + a tight active-voice **core** per slide. No kickers, clinical authority over cinematic phrasing, anchored throughout to Greg's thesis — **identity, speed, and peer-to-peer settlement**.

## The thesis

Machines now pay each other, but authority, permission, and settlement evidence stay **fragmented** across cards, wallets, APIs, and stablecoins. Unicity binds the proof of identity and permission directly to the payment asset itself — **the proof travels with the payment**.

## The arc

| # | Slide |
|---|---|
| 1 | Securing the Agentic Economy *(cover)* |
| 2 | The actor has changed: the rise of machine finance *(57.5% · the trust failure)* |
| 3 | The structural bottleneck: the shared ledger |
| 4 | **The stablecoin trilemma: pick two** — compliance / privacy / throughput; Unicity holds all three *(Venn)* |
| 5 | The final infrastructure gap: embedded identity *(the Hard Yaka hook)* |
| 6 | From side-car to protocol: evolving digital identity |
| 7 | From ledger entries to bearer instruments *(transformation diagram)* |
| 8 | The uniqueness oracle: unbundling consensus *(oracle + Bitcoin→Sui→Unicity timeline)* |
| 9 | **Protocol-enforced compliance: the Receive Predicate** *(receive-predicate diagram)* |
| 10 | Privacy by construction: proven against every observer |
| 11 | No bridge, nothing to hack *(no-bridge diagram)* |
| 12 | The atomic swap: settlement without an intermediary *(swap diagram)* |
| 13 | **X402, rebuilt: twelve steps to five** — the payment-friction proof *(12→5, 7 steps eliminated)* |
| 14 | The machine market: the venue disappears *(CEX/DEX/Unicity table)* |
| 15 | What gets built: the agentic corporation *(the BlackRock DAC)* |
| 16 | The incumbents validate the diagnosis *(AP2/x402 split the proof; Unicity keeps it whole)* |
| 17 | The team: sovereign-grade verification, built before |
| 18 | The ask: $5M to settle the first compliant dollar |

## The four Protocol-Deck leverages (slides 4 · 8 · 9 · 13)

- **The trilemma** — frames the problem in portfolio terms: every digital-dollar design sacrifices one of compliance, privacy, or throughput; Greg's portfolio lives inside the trade-off; Unicity is the first to hold all three (it never puts the transaction on a shared ledger).
- **The unbundling timeline** — Bitcoin (correctness + ordering) → Sui/FastPay (correctness only) → Unicity (uniqueness only): the inevitable, logical endpoint of a decade of consensus research.
- **The Receive Predicate** — the authoritative name. KYC, jurisdiction, and accreditation are cryptographically enforced by the asset itself *before receipt is allowed*.
- **x402, 12 → 5 steps** — removing the facilitator and the shared ledger cuts the agent-payment handshake by more than half: the quantitative, basis-points friction proof a payments operator (Square/Block) reads instantly.

## What's here

| File | What it is |
|---|---|
| `index.html` | The 18-slide deck (self-contained; open in a browser). |
| `Unicity_HardYaka_Seed_Deck.pdf` | The deck as a 16:9 PDF. |
| `slides/` | Per-slide PNG renders (01–18). |
| `build.mjs` | Reproducible build — renders `index.html`, `slides/`, and the PDF. |
| `diagrams/` | Self-contained recolored SVGs ported from the Unicity protocol deck. |
| `assets/logo-defs.html` | The `#ulogo` SVG. |
| `OUTREACH-NOTE.md` | The 3-line note that gets the meeting. **Send this first.** |

## Rebuild

```bash
node greg-kidd/build.mjs   # requires puppeteer + pdf-lib in the repo node_modules
```

The build asserts **zero content overflow and zero footer collisions** across all 18 slides.

## Fact-discipline (load-bearing — Greg reads like a regulator)

- **57.5%** = automated **web requests** (Cloudflare 2026), not on-chain — qualifier stays on-slide.
- **~100M payments on Base / 9mo** (Chainalysis) — transaction **count** only.
- **Stablecoins ~$33T settled in 2025** — "tens of trillions a year."
- **30,000 tx/sec per shard** = a **design** figure, always tagged ("by design"); the three math papers prove **only privacy + no-double-spend**, never throughput.
- **300,000 tx/sec** = the team's **KSI heritage** (Eesti Pank 2021) — *never* a live Unicity number.
- **AP2 / x402 / Mastercard / Visa** named accurately as real 2026 facts; **USBC respected**; **"locked source-chain asset"** (Plasma never named).

## Versions

This is the **institutional rewrite (v15)** — clinical Tier-1 register, 18 slides. The earlier **cinematic / 0xt1mo-voice 20-slide version** is recoverable at git tag **`deck-cinematic-v14`**.

---

*Provenance: reframed from the Unicity protocol deck (`tech-finance` / `Tether` branches). House system — bg `#060606`, accent `#FF6A1F`, Anton + Geist Mono.*
