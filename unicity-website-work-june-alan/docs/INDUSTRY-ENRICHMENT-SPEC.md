# INDUSTRY ENRICHMENT SPEC — upgrading the four Unicity Industry pages to excellent

*Consolidated from all deck work (Telecom / MSSP / Gaming / Finance / DeFi decks + the shared design system + 0xt1mo's narrative DNA). This is the data-and-design layer that sits on top of the existing copy kit.*

---

## 1. How to use this

This spec **enriches** the existing `WEBSITE-INDUSTRY-BUILDKIT.md` (v2.1). It does not replace it.

- **v2.1 owns:** the publish-ready page copy, the 8-block skeleton (§2), the five content rulings, the KSI-heritage framing block (§5), asset paths (§6), and open questions. Do not re-edit copy here.
- **This spec owns:** (a) the *deeper data* — exact stats, chart values, comparison tables, and sharper lines the current pages reference loosely or omit; (b) the *design-component recipes* to make the pages look like the decks; (c) the *full 25-logo credential library*; (d) the *0xt1mo page-flow cheatsheet*; (e) a *prioritized upgrade checklist*.
- **Precedence (unchanged from v2.1):** where this spec and the **live DeFi/Devs** pages disagree, the live pages win — match their section skeleton, card component, stat-strip, logo-row, and CTA convention. Flag deltas, do not invent patterns. Everything below is written to *drop into* that component set, not to define a new one.
- **The five rulings still bind everything here:** no placeholders; heritage = the KSI blockchain (not the Guardtime brand); every third-party stat is *market signal + explicit Unicity position*, never endorsement; bios match the Team Factsheet exactly; 0xt1mo voice (open on an inflection, category-by-negation, competitors-as-architectural-limit, the agent is the protagonist).
- **Design north star:** the pages should read as the *same brand as the decks* — near-black ground, single orange accent on the load-bearing word, Anton headlines / mono body, restraint. Every recipe in §3 is keyed to the decks' actual values.
- **How to apply, in order:** (1) port the design tokens + components in §3 into the live page primitives; (2) per vertical (§2), surface the missing data into the existing blocks (stat strip, problem chart, capability grid, comparison); (3) wire the correct credential wall (§4); (4) sanity-check each page against the 0xt1mo cheatsheet (§5); (5) walk the upgrade checklist (§6).

---

## 2. Per-vertical enrichment

For each vertical: **(A)** the deeper content/data to surface that the current page lacks · **(B)** the recommended page flow (0xt1mo 4-act, mapped to the v2.1 8-block skeleton) · **(C)** the credential-wall logo set.

---

### 2.1 TELECOM

**(A) Deeper data to surface**

The current page cites Gartner/McKinsey/NVIDIA loosely in prose. Surface them as a *stat strip* and an *authority-citation card row* with exact attribution (these are the three Telecom-deck market cards, verbatim):

| Source | Big number | Sub-caption | Quote (italic) | Attribution |
|---|---|---|---|---|
| NVIDIA | **100:1** | agents-to-humans ratio at scale | "In ten years, we will have 75,000 employees working with 7.5 million agents." | Jensen Huang, NVIDIA GTC, March 2026 |
| GARTNER *(highlight card)* | **10,000×** | agent growth in 3 years · 87% ungoverned | "By 2028, the average Fortune 500 will run 150,000+ AI agents, up from fewer than 15 today. Only 13% have adequate governance." | Max Goss, Gartner, April 2026 |
| McKINSEY | **$4.4T** | annual value at stake · landing on subscriber lines | "Generative and agentic AI could add up to $4.4 trillion in annual productivity value across the global economy — much of it consumed at the edge." | McKinsey Global Institute, 2025 |

Sharper lines / proof points the page should carry (all from the Telecom deck):
- The spine triad: **"Securely · Efficiently · Provably"** — and the explicit reason *Efficiently* is the unlock: "intelligent routing + multi-tenancy bring the cost per agent low enough to offer one to every subscriber — and still hold a margin when you resell."
- The consumer→operator diptych money line: subscriber sees a **"concierge for every SIM"**; operator gets **"every tap is revenue you own"** (ARPU on your rails, you own the customer, data stays on your network).
- **Two products, not one:** Concierge (personal agent per line) **+ Agent Cloud** (managed agent hosting resold to enterprises) — both ship as your own infra or white-labeled.
- The five operator-console capability groups (use as the capability grid sub-labels): **Governance** (agent identity & registry · compliance & audit) · **Cost management** (intelligent routing · agent-sprawl control) · **Protect** (prompt-injection defense · DLP) · **Transact** (A2A payments — private, compliant settlement) · **Deploy** (sovereign hosting, in-country).
- The deployment proof claim: **a single Semantic Intercept Fabric egress** is the only gate to the external world — "data sovereignty is architectural, not a promise." (Pair with the deployment diagram, §3.6.)
- Appendix-grade hard numbers available if a deep "how" section is wanted: **sub-20ms** SIF enforcement; SIF is **Rust** + **ONNX-compatible** ML detection + **NER** DLP; capsule swap enables **air-gapped/offline** (Ollama/vLLM) and **30–60% fewer API calls** via a caching capsule.

**(B) Page flow (0xt1mo arc → 8-block)**
1. Hero — "The secure agentic compute platform for telecom." + "who runs it" stakes line. *(Act I open: ownership question.)*
2. Problem — "Agentic is the fourth rebuild of compute" era progression (Mainframe → Client-server → Cloud → **Mobile** → **Agentic**), personalized "you shipped Mobile." Below it the 3 authority cards. *(Category ceiling = it has no telco home yet, heading to the hyperscaler.)*
3. Solution — "One protocol stack delivers everything autonomy demands" + the L1/L2/L3 stack diagram (§3.5) with the four ✓ primitives (Identity · Execution · Governance · Payments).
4. Capabilities — "Securely · Efficiently · Provably" + operator-native trio, as the 2×3 grid.
5. Story (the diptych) — "Concierge is just one offer": three-handset concierge UI → "revenue you own" payoff → Agent Cloud → one console.
6. Proof — KSI heritage + stat strip + globe (Zug/Tallinn/Abu Dhabi) + credential wall.
7. Use cases / deployment — the single-egress deployment diagram.
8. Close — "Own the agent layer before someone else does." + Book a live demo.

**(C) Credential wall:** Telecom-sector heritage fenced separately (Ruling 2.1). **Defense & sovereign:** NATO · DARPA · Lockheed · BIS · Maersk · ESA. **Telecom-sector (separate caption):** Verizon. Strong sovereign-scale narrative; Verizon must read as KSI-era track record, not a current telco customer.

---

### 2.2 MSSP (Unicity × CyberKnight)

**(A) Deeper data to surface**

The single highest-value addition is the **competition-as-architecture** exhibit — the MSSP deck's most distinctive slide, currently only described in prose. Render it as a "them vs. us" diagram or table:

**"Everyone else watches the agent. We run it and prove its execution."** — competitors orbit/observe the agent from outside; Unicity is the kernel underneath.

| Competitor | What it is | Consolidated into / valuation |
|---|---|---|
| NeMo | dialog SDK | Nvidia |
| Lakera | API gateway | → Check Point · ~$300M |
| Geordie | observability | independent |
| Protect AI | model layer | → Palo Alto · ~$500M |
| CalypsoAI | inference layer | → F5 · $180M |

Center: **AGENT**. Underneath, the orange bar: **AOS — the kernel the agent runs on · cryptographic verification of execution.** The acquisition prices are the "category is consolidating into incumbents; we're the deeper, un-retrofittable layer" signal.

Other sharper data the page should carry:
- The MSSP-specific market card the Telecom deck doesn't use — **STRIPE / a16z** (validates the infrastructure thesis): Stripe (Patrick & John Collison, 2026): "We will likely need blockchains that support more than one million — or even one billion — transactions per second." → big number **1B TPS**. a16z crypto pull-quote (Feb 2026): "blockchains are not optional infrastructure. They are the missing layer that makes an AI-native internet work." *(Market signal, no endorsement.)*
- **Sub-20ms** in-path enforcement; **Rust** implementation; **ONNX-compatible** custom model loading (CISOs deploy their own detection models); **NER-based** DLP — these are the measured, CISO-legible capability claims.
- The SIF three stages, named: **Rule Engine** (deterministic, dynamic rule updates, zero-day injection) → **ML Detection** (low-latency inference, anomaly, ONNX plugins) → **DLP Scanner** (secrets/IP/PII via NER).
- The **single controlled egress** enterprise-deployment story (whole stack inside the firewall; SIF is the one egress all model calls and A2A payments traverse) — pair with the deployment diagram (§3.6).
- The **six runtime controls as a resellable service catalog** (already in copy) — present as the 2×3 grid: Semantic Firewall · Cryptographic identity · DLP · Runaway-compute control · Intelligent routing · Agent inventory & governance.
- Five PhD cryptographers credited as KSI architects: **Ahto Buldas · Ahto Truu · Risto Laanoja · Jian Tan · Dirk Draheim.**

**(B) Page flow**
1. Hero — "The kernel your clients' agents run on." + Unicity × CyberKnight co-brand.
2. Problem — "Computing is being rebuilt a fourth time. The controls are not." + Gartner 10,000×/87%; "static keys are not identity; detection arrives after the action."
3. Solution — "Everyone else watches the agent. We run it and prove its execution." + the competition-as-architecture exhibit + the 3-layer stack.
4. Capabilities — the six runtime controls (2×3 service catalog).
5. Proof — KSI heritage + sub-20ms / proof-not-inference stat strip + five cryptographers.
6. Use cases — the four MSSP service lines (Managed DLP · Shadow-AI discovery · Cost governance · BYO-agent enablement).
7. (Optional deep) — single-egress enterprise deployment diagram.
8. Close — "a runtime security line that watchers cannot sell — because they never run the agent." + Book a live demo / Talk to the team.

**(C) Credential wall:** Full defense spine — NATO · DARPA · Lockheed · Boeing · BIS · Maersk · ESA. (Tier-one defense-prime + government weight is exactly the MSSP/CISO credibility narrative.)

---

### 2.3 FINANCE & FINANCIAL SERVICES

**(A) Deeper data to surface**

Finance has no dedicated deck, so it pulls from Enterprise + DeFi. The current page is strong on voice but light on hard numbers — surface these:

- **The Gartner blocker chart** (the page's "the problem in one number"). Bar chart, "Primary Blockers to Agentic AI Production" (Gartner 2026):
  - Governance & Security Blocks — **46%** (orange, annotation "← this is what we solve")
  - Data Access & Privacy Risks — **32%**
  - Operational Reliability — **14%**
  - ROI Justification Unclear — **8%**
- **Three stat tiles** (count-up): **88%** reported AI agent security incidents · **14%** of agents went live with security approval · **$400B+** agentic AI market by 2034.
- **The six autonomy requirements scorecard** (the Enterprise deck's keystone) — use as the Solution enumeration before the stack: **I Identity · II Delegation · III Verifiable Execution · IV Policy Enforcement · V Settlement · VI Interoperability**, with the verdict: "No legacy blockchain meets all six. No security vendor meets all six. No framework meets all six." This is the strongest finance framing available — a scorecard only Unicity passes.
- **The competitive-landscape table** (Enterprise deck, "we sit underneath, we don't replace") — the most examiner-useful exhibit:

| Category | Vendors | Unicity stance |
|---|---|---|
| Agent protocols | x402 (Linux Foundation), Stripe MPP, AP2 | WE SCALE THEM |
| Settlement | Base, Tempo, Solana, Lightning | PURPOSE-BUILT |
| AI chains | Kite.ai, Near, Fetch.ai | PURPOSE-BUILT ("can't retrofit an EVM into autonomous AI") |
| Frameworks | LangChain, CrewAI, Google ADK, OpenClaw | WE COMPLEMENT |
| Security | Lakera/Check Point, HiddenLayer, Protect AI, NeMo | PURPOSE-BUILT ("Check Point paid $300M for Lakera — validating demand, not solving the problem") |

- **The Enterprise "Payoff" pair** (DeFi-grade differentiation for capital markets): "agent state itself becomes a token" (kernel-level verification) + "value moves at machine speed — no shared ledger, no mempool, no gas; subscription economics, privacy by design."
- **Hard DeFi performance numbers** (for the payments / settlement use case): **30,000 tx/sec per shard** on a single consumer CPU (Plonky3 AIR + Poseidon2); **<1 microcent/tx**; **~45 ms** to verify one SNARK per round; **∞ horizontal shards**; the chain "proves single-spend without ever seeing the transaction."
- **The CLOB comparison** (capital-markets desk angle): CEX speed + DEX custody + dark-pool privacy — "Binance has the first, Uniswap has the second, neither has the third. Unicity has all three." Match speed <1ms · gas $0 · self-custody · unlinkable · no mempool/MEV · sub-second trustless settlement.
- **Three "market signal + Unicity position" cards** (Ruling 3, already in copy — keep verbatim): Card networks wiring agents (Mastercard Agent Pay / Visa Intelligent Commerce, no partnership implied) · $300M Check Point/Lakera (bolt-on vs kernel) · NVIDIA 100:1 + McKinsey $4.4T (100:1 economy coming).
- **Finance-sector track record (KSI-era):** Mike Gault ex-MD Barclays Capital; BIS · SEB · KPMG · EY · Willis Towers Watson as KSI deployments. **Track-record stat strip:** 15+ years in production · 25+ sovereign-grade institutions · 4 continents · 0 cryptographic breaches.

**(B) Page flow**
1. Hero — "Agentic AI your auditors can read, not just trust."
2. Problem — "Finance has two kinds of actor. The agent is a third." + the Gartner 46% blocker chart + 88%/14%/$400B stat tiles.
3. Solution — the six-requirement scorecard ("no one meets all six") → the L1/L2/L3 stack ("we sit underneath; the agent runs as-is").
4. Capabilities — controls a CISO can underwrite / examiner can read (2×3): cryptographic identity · kernel enforcement · SIF · tamper-evident audit · cost circuit breaker · intelligent routing recorded.
5. Proof — KSI heritage + 4-stat strip + finance-sector heritage row (banking/insurance only) + "the layer your risk team can read" open-source line.
6. Market signal — the three "what's happening + where we stand" cards; optionally the competitive-landscape table.
7. Use cases — front/middle/back office + air-gap deployment (payments · fraud/risk · audit/compliance · cross-institution coordination).
8. Close — "put one agent into production your risk team can answer for" + Book a live demo (20 min / one flow).

**(C) Credential wall:** Banking & insurance ONLY (no defense spine on a public finance page): **BIS · SEB · KPMG · EY · Willis Towers Watson** — regulatory + compliance weight. Mandatory non-customer KSI caption.

---

### 2.4 GAMING (iGaming)

**(A) Deeper data to surface**

The Gaming deck is the most quantitatively loaded; surface the exact stats and the two hidden-but-excellent exhibits.

- **The three-waves timeline** (Problem block) — exact era data:
  - **Web · 1995** — "InterCasino launches 1995. Bet365 founded 2000. Online gambling reaches $1bn by 2003."
  - **Mobile · 2008** — "App Store launches 2008. Mobile overtakes desktop in regulated markets by 2014. FanDuel and DraftKings build $5bn+ businesses."
  - **Agentic · 2026 · NOW** — "Mastercard and Santander cleared Europe's first live agent-initiated bank payment in March. Visa Intelligent Commerce and Mastercard Agent Pay rolling out across US cardholders. The category is six months old and already real. The window is three years. It just opened." *(Mastercard/Santander = market signal, no Unicity link.)*
- **The P&L kill-stats** (the recurring "[legacy thing]. Gone." device — each is a big-stat block with source):
  - Onboarding: **25 minutes / 30% lost** to abandonment, KYC drop-off, card decline.
  - Cost: **15–35% of GGR** in on-ramp cost (Edgar Dunn · Aeropay · EPI, 2025–26) → **0** after. Line items: card processing 2.5–3.5% → 0; chargebacks 0.5–1.0% → 0; PSP stack 5+ vendors → 1 rail; deposit funnel 30% abandon → 0.
  - Retention: **92% of promotional email never opened**; $5–10/active player/year on CRM (Optimove, Smartico, Fast Track) → **100% delivered** in chat.
  - Loyalty: "personalization by timing/attention — the only personalization that has ever worked."
- **The six-pillar platform grid** (capability grid): Security · Compliance · Networking · Governance · Payments · Audit — with "Other vendors solve one piece. Unicity is the platform."
- **The 45-day pilot timeline** (the de-risked "ask"): Week 1–3 Install (alongside existing wallet/game engine, no migration) → Week 4–6 Integrate (sandbox handshake, signed sessions, per-wager settlement, audit trail; compliance + security review in parallel) → Week 7 Production (live agent traffic, first signed session settles).
- **Two excellent hidden exhibits to recover** (currently not in the page):
  - **Compliance-as-moat** (`CasinoComplianceSlide`): "Your regulatory moat. Built into the rail." Four rows — Affordability invisible (UKGC £125 threshold becomes a non-event) · Self-exclusion that audits clean (wallet refuses the wager) · Early signal, your move · Cryptographic proof of compliance ("evidence becomes a query, not a CSV — offshore competitors cannot replicate this").
  - **Settlement architecture** (`CasinoArchitectureSlide`): "Two wallets. One witness. No middleman." Player wallet ↔ peer-to-peer bearer-token ↔ operator house wallet; Unicity's uniqueness oracle witnesses each transfer — "not in the transaction path, not a custodian, not a router." Three "absence" tiles: no payment processor · no shared ledger · no funds custodied by Unicity.
- **Cover money-shot detail** (for a hero/story visual): the agent "Kelly" opens a session card — Operator: MatchdayBet · Wallet `custody retained` · Caps `$30 loss · 45m` · Settlement `per-wager · sub-second` · `SIGNED · AOS9`.

**(B) Page flow**
1. Hero — "Your next million players won't arrive through a browser or an app." (Open on the concrete product moment, like the deck.)
2. Problem — "Every twenty years the interface changes" three-waves timeline + the four P&L kill-stats.
3. Solution — "One OS for receiving agents. One integration." + stack + "the agent arrives KYC'd, holding regulated stablecoins."
4. Capabilities — the six-pillar platform grid.
5. Proof — KSI heritage + finance-sector track record (BIS) + globe.
6. Story / production — agent-initiated session card + per-wager settlement + (recovered) compliance-moat + two-wallets-one-witness architecture.
7. Use cases / what's happening — market-signal card (Mastercard/Santander) + Enterprise Console one-pane-of-glass.
8. Close — "Forty-five days to production. Then start onboarding agents." + Talk to the gaming team.

**(C) Credential wall:** Full defense spine — NATO · DARPA · Lockheed · Boeing · BIS · Maersk · ESA — with BIS doubling as the finance-sector anchor in the heritage copy. (Diverse regulated-sector adoption story.)

---

## 3. Design-component library (implementable recipes)

All values keyed to the decks' actual design system (`enterprise-sales` is the richest source). Tech: React + Tailwind v4 (CSS-config) + framer-motion. On scroll pages, swap `animate` for `whileInView` + `viewport={{ once: true }}` while keeping the exact easing/stagger. Match the live DeFi/Devs primitives first; use these only to fill gaps.

### 3.0 Design tokens (port first — everything depends on these)
```css
/* Fonts (self-hosted TTF) */
--font-display: 'Anton', sans-serif;     /* headlines, big stats, layer labels — UPPERCASE, tracking-tight */
--font-mono:    'Geist Mono', monospace; /* body, eyebrows, captions, chips — wide tracking on labels */

/* Core colors */
--bg:          #060606;                  /* near-black ground */
--plate:       rgba(6,6,6,0.65);         /* layered panel base */
--text:        #fefefe;
/* muted via opacity: /85 body · /55 captions · /40 chrome · /18 source lines */

/* Orange is the brand spine — two values, used deliberately */
--orange-500:  #f97316;                  /* fills / borders / bars */
--orange-400:  #fb923c;                  /* accent text / bright strokes */

/* Semantic accents — sparingly, for categorical contrast only */
--green: #34d399;  --red: #f87171;  --amber: #fbbf24;
--blue:  #60a5fa;  --indigo: #818cf8;  --purple: #a855f7;

/* The "panel" recipe */
--panel-bg: rgba(255,255,255,0.025);
--panel-border: 1px solid rgba(255,255,255,0.08);
--radius: 0.5rem;
/* highlighted/orange variant: bg rgba(249,115,22,0.06–0.08); border 1px rgba(249,115,22,0.40–0.55) */
```

### 3.1 Big-stat block + count-up (highest impact, lowest effort)
The "ZERO-FEES"-style stat row. Port `CountUp` verbatim (RAF, ease-out-cubic `1-(1-t)³`, no deps). 3-up grid, count-up triggers on scroll-into-view, staggered left-to-right (delays 1.65s / 1.8s / 1.95s in-deck → on web, `+0.15s` per tile after the section enters view).
```css
.stat-tile {
  background: rgba(249,115,22,0.10);
  border: 1px solid rgba(249,115,22,0.40);
  border-left: 3px solid rgba(251,146,60,0.95);   /* orange-bar motif */
  border-radius: 6px; padding: 1rem 1.25rem;
  display: grid; grid-template-columns: auto 1fr; align-items: center; gap: 1rem;
}
.stat-number { font-family: var(--font-display); font-size: 52px; line-height: 1; font-variant-numeric: tabular-nums; }
.stat-label  { font-family: var(--font-mono); font-size: 12.5px; text-transform: uppercase; letter-spacing: 0.06em; }
```
Prefix/suffix (`$`, `%`, `B+`, `×`, `:1`) wrap the number in the parent. Use for: Finance 88%/14%/$400B; Telecom 100:1 / 10,000× / $4.4T; the KSI track-record strip (15+ / 25+ / 4 / 0).

### 3.2 Horizontal bar chart (pure flex + framer-motion, no chart lib)
For each page's "the problem in one number" block (Finance Gartner 46%; Gaming P&L; MSSP 87% ungoverned).
- Row: `[180–220px label][flex-1 track]`. Track `h-12 rounded`, `bg: rgba(255,255,255,0.03)`.
- Fill: `motion.div` animating `width: 0 → {value}%`, `transition={{ duration: 1.1, ease: [0.16,1,0.3,1] }}`, fill `rgba(249,115,22,0.55)`, count-up number right-aligned inside.
- Annotation callout floats above-right ("← THIS IS WHAT WE SOLVE"), revealed after the bar fills.
- Tiny mono source line `rgba(255,255,255,0.18)` underneath — the citation credibility tell. **Mandatory** on every analyst stat (source + year).

### 3.3 Authority-citation card (the 3-source market row)
3-column grid, middle card highlighted (orange gradient `rgba(249,115,22,0.06)→rgba(10,10,15,0.6)` + orange-30% border); others flat `#0a0a0f` + white-10% border. Card structure: **Source** (Anton, orange) → italic mono quote → author/attribution → divider → **big number** (Anton) + sub-caption. Per Ruling 3, every card pairs the external quote with a one-line Unicity position.

### 3.4 Orange-bar motif (the single most portable element — pure CSS)
- **(a) Vertical anchor bar + label** (logo-wall rows): `width:2px; height:64px; background:rgba(249,115,22,0.85)` next to an orange mono category label.
- **(b) Left accent border on a card** (stat tiles, vendor rows): `border-left: 3px solid <accent>` on top of the 1px hairline.
- **(c) Top accent bar** (payoff panels): `border-top: 4px solid #fb923c`.
- **(d) Gradient divider rule:** `height:1px; background: linear-gradient(to right, transparent, rgba(249,115,22,0.7), transparent)`.
- **(e) Floor-to-ceiling vertical accent strip** (stack frame left edge): `width:3px; background: linear-gradient(to bottom, rgba(249,115,22,0.95), rgba(249,115,22,0.55) 50%, rgba(249,115,22,0.30))`.

### 3.5 L1/L2/L3 stack diagram — USE THE HTML/CSS VERSION
Port the HTML/CSS layered stack (responsive divs, no SVG viewBox math), not the SVG primitive set.
- Wrapper `max-w-3xl mx-auto`. Three (or four) layers, each a rounded panel.
- **Highlighted ("ours") layers:** `bg: rgba(249,115,22,0.06); border: 1px solid rgba(249,115,22,0.55)`. **Neutral layers:** sky-blue `rgba(125,211,252,0.30)` border.
- Each layer = header (Anton label orange/sky + mono caption) + a `repeat(N,1fr)` grid of sub-boxes (`bg:#0a0a0f`, themed border).
- Between layers: a staggered orange `↓` connector.
- **Canonical layer content (sitewide, per v2.1 naming):**
  - **Application layer** — "Bring your own agent — any framework, any model." sub-boxes: LangChain · OpenClaw · AutoGen · Custom.
  - **Unicity AOS** *(highlighted)* — "Multi-tenant secure OS · executes the agents · every prompt, tool call, decision passes through." sub-boxes: Kernel · Policy · Intercept.
  - **Unicity Blockchain / Proof System** *(highlighted)* — "State tokenization · verifiable execution · cryptographic identity · value transfer."
- Footer ✓ row: **Identity · Execution · Governance · Payments** (Telecom/MSSP/Finance) or the six-requirement set (Gaming/Finance scorecard).

### 3.6 Single-egress deployment diagram (the "data never leaves your network" proof)
For Telecom / MSSP / Finance air-gap. Two enclosures: **"Your environment / inside the firewall"** (solid border) and **"External world"** (dashed border). Internal stack top→bottom: Frameworks + Internal LLM → **Semantic Intercept Fabric** (orange gate: "one gate · single egress · allow/block/flag") → Agent Registry (orange: "cryptographic identity · scoped, revocable") → AOS hosting env (orange: "enforcement kernel · WASM sandbox · budgets" with sandbox sub-boxes). Single orange "bus" routes from the SIF out to all external boxes — the one controlled egress. Top label: "A2A networking + payments." Build as positioned divs + one SVG arrow overlay (`preserveAspectRatio="none"`), or simplify to a vertical HTML stack on mobile.

### 3.7 Logo wall / credential row (the "where KSI ran" component)
Most sophisticated layout in the decks — port wholesale.
- Category rows: `[orange anchor bar + label, 220px][flex-1 logo grid]`, separated by `border-top: 1px solid rgba(255,255,255,0.07)`.
- **Proportional columns by aspect ratio:** hardcode each logo's natural W:H, then `columnWeight = Math.sqrt(aspect)` → `gridTemplateColumns` of `{weight}fr` values (sqrt compresses 12× outliers to ~3.5×, so a wide Willis Towers cell doesn't dwarf a square Switzerland one).
- Per-logo size caps (`maxH`/`maxW` as % of cell), hand-tuned because each PNG ships different internal padding.
- Normalize all to white: `filter: brightness(0) invert(1); opacity: 0.88`.
- `onError` hides the `<img>` and shows a mono text label (graceful fallback).
- Reveal: rows stagger `0.4 + rowIdx*0.12`; logos within a row `+i*0.04`.
- **Mandatory** non-customer caption under every row (Ruling 2).

### 3.8 Section dividers / hero chrome
- **Divider (two-beat):** quiet mono kicker (orange, `tracking-[0.4em]`) + loud Anton claim + a directional gradient rule (`from-orange-500 to-transparent`). Consider explicit ACT labels for rhythm.
- **Hero chrome:** top-edge fading hairline rule, editorial eyebrow ("UNICITY · INDUSTRY · {Vertical}"), orange-tail headline (`<span class="text-orange-400">` on the load-bearing clause), animated rule with a looping glow pulse. Optional word-by-word title reveal with blur (`filter: blur(8px)→blur(0)`, staggered 0.6s/0.85s).

### 3.9 Globe (global-reach proof) — drop-in
`Globe.tsx` is self-contained (orthographic wireframe, continents from `landData.json`, orange equator, pulsing pins + leader labels, great-circle arcs with traveling dots). Pass three pins: **Zug 47.17°N·8.52°E · Tallinn 59.44°N·24.75°E · Abu Dhabi 24.47°N·54.37°E.** Use only in Proof sections where "where we operate" earns it. Higher effort — do last.

### 3.10 Framer-motion reveal vocabulary (consistent across all decks)
- **Signature easing:** `[0.16, 1, 0.3, 1]` (ease-out-expo). Slide cross-fade `duration: 0.32`.
- Header/title: `x: -40 → 0`, `duration 0.7`. Cards/rows: `y: 12–20 → 0`, stagger `base + i*0.07–0.12`. Bars/rules: `scaleX/Y: 0 → 1`, `origin-left/center`. Number "stamp" reveals: `ease: [0.34, 1.56, 0.64, 1]`, `scale 0.7→1, rotate -8→0`.
- Idle life: pulsing dots `scale:[1,1.8,1], opacity:[0,0.55,0], repeat:Infinity`.
- **Perf:** single hoisted `<video>` backdrop (never per-slide; `/kling_20260226_VIDEO_Take_Image_1650_0.mp4` at opacity ~0.2); glow via stacked translucent strokes, not `feGaussianBlur`; `memo` heavy SVG.

---

## 4. Full logo / credential library

The complete 25-logo enterprise set. **Clean filenames** are what to use; the numbered `NN_*.png` originals live in `enterprise-sales:public/logos/` and `dist/logos/`. Confirmed-present clean files in `public/logos/`: nato, darpa, lockheed, boeing, bis, maersk, esa (+ `verizon.svg`). The four finance logos are `[RECOVER]` from `dist/logos/` (copy + rename). All render white via `filter: brightness(0) invert(1)`.

| Clean filename | Org | Group | Source file |
|---|---|---|---|
| `lockheed.png` | Lockheed Martin | Defense & Aerospace | 01_lockheed.png |
| `raytheon.png` | Raytheon Technologies | Defense & Aerospace | 02_raytheon.png |
| `general_dynamics.png` | General Dynamics | Defense & Aerospace | 03_general_dynamics.png |
| `huntington.png` | Huntington Ingalls Industries | Defense & Aerospace | 06_huntington.png |
| `boeing.png` | Boeing | Defense & Aerospace | 22_boeing.png |
| `darpa.png` | DARPA (US) | Defense & Aerospace | 04_darpa.png |
| `esa.png` | European Space Agency | Defense & Aerospace | 11_esa.png |
| `nato.png` | NATO | Sovereign & Government | 05_nato.png |
| `estonia_govt.png` | Republic of Estonia Government | Sovereign & Government | 07_estonia_govt.png |
| `netherlands.png` | Netherlands Government | Sovereign & Government | 08_netherlands.png |
| `hm_government.png` | HM Government (UK) | Sovereign & Government | 09_hm_government.png |
| `estonia_mod.png` | Estonia Ministry of Defense | Sovereign & Government | 10_estonia_mod.png |
| `switzerland.png` | Switzerland Government | Sovereign & Government | 23_switzerland.png |
| `bis.png` | Bank for International Settlements | Finance & Insurance | 13_bis.png |
| `seb.png` | SEB | Finance & Insurance | 14_seb.png |
| `kpmg.png` | KPMG | Finance & Insurance | 15_kpmg.png |
| `willis_towers.png` | Willis Towers Watson | Finance & Insurance | 18_willis_towers.png |
| `axa.png` | AXA | Finance & Insurance | 19_axa.png |
| `ey.png` | EY (Ernst & Young) | Finance & Insurance | 24_ey.png |
| `maersk.png` | Maersk | Enterprise & Health | 16_maersk.png |
| `roche.png` | Roche | Enterprise & Health | 17_roche.png |
| `verizon.png` / `verizon.svg` | Verizon | Enterprise & Health (Telecom) | 20_verizon.png |
| `nhs.png` | NHS (UK) | Enterprise & Health | 21_nhs.png |
| `sicpa.png` | SICPA | Enterprise & Health | 12_sicpa.png |
| `scrive.png` | Scrive | Enterprise & Health | 25_scrive.png |

**Per-vertical wall composition (the binding decision):**

| Vertical | Wall set | Caption grouping |
|---|---|---|
| **Telecom** | NATO · DARPA · Lockheed · BIS · Maersk · ESA **+ Verizon** | Two groups: "Defense & sovereign" (first six) + **separate** "Telecom-sector track record: Verizon" |
| **MSSP** | NATO · DARPA · Lockheed · Boeing · BIS · Maersk · ESA | Single defense/sovereign row |
| **Finance** | BIS · SEB · KPMG · EY · Willis Towers Watson | Banking & insurance ONLY — no defense spine on a public finance page |
| **Gaming** | NATO · DARPA · Lockheed · Boeing · BIS · Maersk · ESA | Single defense/sovereign row (BIS anchors finance heritage in copy) |

Shared defense spine = NATO · DARPA · Lockheed · Boeing · BIS · Maersk · ESA. Every row carries the mandatory non-customer KSI caption (v2.1 §5). Logos beyond the per-vertical set (Raytheon, General Dynamics, Huntington, Estonia, Netherlands, HM Gov, Switzerland, AXA, Roche, NHS, SICPA, Scrive) are available if a denser wall or a region-specific variant is approved.

---

## 5. 0xt1mo logic cheatsheet

Run every page through this. The four pages must be **structurally identical** (same skeleton, same card counts) and differ only in substituted nouns — that consistency is itself the trait.

**The macro arc (always, regardless of length):**
- **ACT I — THE MOMENT** — open on a *civilizational hinge*, not a pain point or TAM. Two opener engines: the **"Nth Rebuild"** (`Mainframe → Client-server → Cloud → Mobile → Agentic`, personalized "you shipped X") or the **"broken promise"** (original ideal → betrayal → "we rebuild the foundation"). Cover = category line + hinge, nothing else.
- **ACT II — THE PLATFORM** — name the category ceiling as a *structural law* ("every design picks two," "the same 17-year-old design"), end on the negation that previews the exit ("you cannot retrofit X into Y"). Then **enumerate the demand set** (4–6 requirements) and answer with **ONE stack** satisfying all of them. The enumeration→single-answer pairing is the center of gravity; give it the strongest diagram.
- **ACT III — THE STORY** — buyer's-eye view in two paired beats: *what the end-user sees* → *what the operator/buyer owns*. Close on a big-statement payoff line ("revenue you own" / "the highest-margin product since data"). This is the only place commercial/emotional payoff lives — it lands because everything before was austere.
- **ACT IV — THE PROOF** — pointer-level proof on the spine (papers exist / deployment model / KSI track record), the deployment-inside-your-infrastructure beat, then one clear next step.
- **APPENDIX** — depth on demand, clearly fenced below the fold. Never inline kernel internals into the spine.

**Section rules (enforce on all four pages):**
1. **One claim per section.** If it needs two ideas, split it.
2. **Big-statement treatment reserved for hinges only:** the Hero headline, the "one platform" line, and the Act III payoff. Everywhere else, quiet.
3. **Diagrams only for stack + mechanism** (deployment, atomic swap, agent mesh). No decorative graphics.
4. **Two-beat dividers between acts:** quiet kicker + loud claim.
5. **The agent is the protagonist** — never "our software." Verb-led, them/us contrasts ("Everyone else watches the agent. We run it and prove its execution.").
6. **Category-creation by negation:** define each offering by what it *removes* ("no ledger, no validators, no referees"; "the agent doesn't have a funnel").
7. **Competitors = architectural limit, not performance gap:** "a gateway sits beside the agent and reads its exhaust; the kernel sits below it." Lead with the one-liner, never open differentiation with a feature grid.
8. **Visual austerity:** dark ground, single accent on the load-bearing word only, Anton headline / mono body, capped line length (`max-w-5xl`), whitespace-forward. Restraint is the brand. Em-dashes for unpacking; no semicolon-stacking, no exclamation marks, no hype adjectives.
9. **Close by naming the endgame, not the product.**

---

## 6. Prioritized upgrade checklist

Concrete changes to make the preview excellent, in priority order (highest impact / lowest effort first).

**P0 — Foundation (do first; everything else depends on it)**
- [ ] Port design tokens §3.0 (Anton + Geist Mono, `#060606` ground, the two oranges, the panel recipe) into the live page primitives. This alone makes the pages read as the decks' brand.
- [ ] Confirm the live DeFi/Devs component set covers: hero, insight/stat card, 2×3 capability grid, stat strip, "where KSI ran" logo row, closing-CTA band. Match them; flag any missing block.
- [ ] Standardize the orange-tail headline convention sitewide (`text-orange-400` span on the load-bearing clause).

**P1 — Surface the missing data (the core enrichment)**
- [ ] **Finance:** add the Gartner 46% blocker bar chart (§3.2) + the 88%/14%/$400B count-up stat tiles (§3.1) + the six-requirement scorecard. Highest-impact single page upgrade.
- [ ] **Telecom:** add the 3 authority-citation cards (NVIDIA 100:1 / Gartner 10,000× / McKinsey $4.4T, §3.3) with exact attribution; surface the "Securely · Efficiently · Provably" triad as the capability grid.
- [ ] **MSSP:** add the competition-as-architecture exhibit (NeMo/Lakera/Geordie/Protect AI/CalypsoAI orbiting the AGENT, AOS underneath; with the $300M/$500M/$180M consolidation signal).
- [ ] **Gaming:** add the three-waves timeline with exact era data + the four P&L kill-stat blocks (25min/30%, 15–35% GGR, 92%, personalization-by-timing).
- [ ] Add the KSI track-record stat strip (15+ / 25+ / 4 / 0) to all four Proof sections as count-up tiles.

**P2 — Port the signature diagrams**
- [ ] Build the L1/L2/L3 HTML/CSS stack diagram (§3.5) once, reuse on all four Solution blocks (edit the layer array per vertical; keep highlighted-orange vs neutral-sky convention + ↓ connectors).
- [ ] Build the single-egress deployment diagram (§3.6) for Telecom/MSSP/Finance ("data never leaves your network" proof).
- [ ] Port the proportional-aspect logo wall (§3.7) with white-normalization + `onError` text fallback.

**P3 — Recover the high-value hidden exhibits**
- [ ] **Gaming:** surface the compliance-as-moat four-row block and the two-wallets-one-witness settlement architecture (currently hidden in source — both are excellent and on-brand).
- [ ] **Finance:** optionally add the competitive-landscape table ("we scale them / we complement / purpose-built") and the CLOB comparison for the capital-markets angle.
- [ ] **Gaming/Finance:** surface the hard DeFi performance numbers (30,000 tx/sec per shard · <1 microcent/tx · ~45ms verify · ∞ shards) where the payments/settlement use case lives.

**P4 — Motion + polish**
- [ ] Apply the framer-motion reveal vocabulary (§3.10) via `whileInView` + `viewport={{ once:true }}`, keeping the exact easing `[0.16,1,0.3,1]` and stagger values.
- [ ] Add the two-beat section dividers (§3.8) between acts; add the hero chrome (fading hairline + glow-pulse rule).
- [ ] Single hoisted background video at opacity ~0.2 (perf: never per-section).
- [ ] Add the globe (§3.9) to Proof "where we operate" only where it earns its place.

**P5 — Correctness gates (must clear before publish — inherited from v2.1)**
- [ ] Every analyst stat carries inline source + year (Gartner Apr 2026 · NVIDIA GTC Mar 2026 · McKinsey 2025 · Gartner 2026 for the 46% line · Edgar Dunn/Aeropay/EPI 2025–26 for gaming GGR).
- [ ] Every third-party item rendered as market signal + explicit Unicity position, with "no partnership implied" (Ruling 3). No implied endorsement (Mastercard/Visa/Check Point/NVIDIA/McKinsey).
- [ ] Every credential-wall row carries the mandatory non-customer KSI caption; Verizon fenced as telecom-sector heritage on Telecom; Finance wall is banking/insurance only.
- [ ] Bios match the Team Factsheet exactly (Tony Kenyon = **CTO**, not CPTO); Guardtime named only inside Gault's bio; five cryptographers credited where the deck supports it.
- [ ] Lock one email / one phone / one domain sitewide (currently mixed: info@ vs enterprise@; …3758 vs …3756; unicity.ai vs unicity.network).
- [ ] Copy + rename the four `[RECOVER]` finance logos into `public/logos/`; defense-logo legal clearance per region.
- [ ] Responsive + a11y: 2×3 grid → 1-col mobile; logo rows wrap; the deployment diagram degrades to a vertical HTML stack; concierge three-handset sequence carries its caption.
