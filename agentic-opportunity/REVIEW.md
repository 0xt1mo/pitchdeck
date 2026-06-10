I have all the data I need to synthesize the final review. The JSON contains all dimension reviews and the independent verdicts on must-fix items. Let me produce the final review.

# Review — "THE AGENTIC OPPORTUNITY" (2026 Industry Report)

## Verdict

This is a strong, on-voice document. The argumentative spine — the four-domain decomposition (security, governance, networking, payments) resolving to one primitive — holds end to end, and the load-bearing facts (Gartner 40%/~130 real vendors/15%/33%, MIT-SMR×BCG 35%, EchoLeak CVE-2025-32711 CVSS 9.3, ForcedLeak CVSS 9.4 + $5 expired domain, the EU AI Act phased dates and Art. 99 tiers, x402's 69,000 agents, ~$7.5T on-chain) verify against authoritative primaries. Critically, there is **zero Aleria product/metric leakage** (no AOS-9, AgentStack, AgentSphere, SIF, 225K, 145x) and **zero heritage/customer misattribution** — the discipline the brief was most worried about holds cleanly. The fixes below are mostly surgical: a denominator error, two stat misstatements, a misdefined coinage, one layer-attribution error, two weak entity facts, and a swept-clean set of weakly-sourced numbers. Fix the must-fix list and this is publishable.

---

## A. MUST-FIX — factual errors, hallucinations, wrong entity/domain, banned terms

### 1. The "88%" denominator collision (CONFIRMED)
- **Quote:** *"88% / of AI agents never reach production."* (cover, **UNICITY01**); *"Does not ship. Where the 88% live."* (**UNICITY13** L0 row); methodology cites *"Deloitte, December 2025 — 11% of organizations running agentic AI in production"* (**UNICITY17**).
- **What's wrong:** Three different denominators presented as one population. The 88% is a **pilot/POC-level** failure rate (88% of agent *initiatives* never graduate); 11% (Deloitte) is **organizations** in production; 40% (Gartner) is **projects** canceled. The cover attaches 88% to "agents," and UNICITY13 relocates it onto an **organization** maturity tier ("Where the 88% live"). They are not the same cohort. Arithmetic also fails the obvious check: 100 − 11 = 89, not 88, confirming 88% is a separate metric, not the complement of the 11%.
- **Evidence:** The 88% traces to the doc's own Source 03 (Digital Applied → Forrester/Anaconda), a pilot-to-production conversion rate; the surviving 12% return the 171% ROI cited on UNICITY02 (same study). Deloitte 11% is org-level. Do **not** hard-attribute to "IDC" — IDC's 88% is *AI POCs broadly*, not agent POCs.
- **Fix:** Cover → *"88% of AI agent **projects** never reach production"* (footnote to the source already in the methodology). UNICITY02 → add one clause: *"35% of organizations have adopted; only 11% run agents in production — and at the project level, 88% of agent initiatives never ship."* UNICITY13 → reword *"Where the 88% live"* to *"The pilots inside the 88%."* Keep the Deloitte 11% and the failure-rate source clearly separate in UNICITY17.

### 2. "Lethal trifecta" — third leg redefined (CONFIRMED)
- **Quote:** *"the lethal trifecta — untrusted inputs, sensitive data access, autonomous execution"* (**UNICITY04**), repeated in the kill-chain diagram (**UNICITY05**: *"Autonomous Execution / tool calls · messages · transactions"*).
- **What's wrong:** "The lethal trifecta" is Simon Willison's coined term, and his third leg is **external communication / exfiltration**, not "autonomous execution." Swapping the third leg borrows the term's authority while changing its meaning. It's also self-inconsistent: the report's own EchoLeak and ForcedLeak descriptions are *exfiltration* attacks ("silently exfiltrated…", "exfiltration channel: an expired allow-listed domain"), which fit Willison's real third leg.
- **Evidence:** Willison, "The lethal trifecta for AI agents: private data, untrusted content, and external communication" (simonwillison.net, 16 Jun 2025). Note: the report never *names* Willison, so this is "uses his coined term while altering its third leg," not a misquote.
- **Fix (preferred):** Restore the real third leg — *"untrusted inputs, sensitive data access, the ability to exfiltrate"* — which also aligns with the report's own incident evidence. Alternative: if Unicity wants "autonomous execution" as the third axis, drop the "lethal trifecta" name and present it as Unicity's own reframing.

### 3. Stale data-breach cost (CONFIRMED)
- **Quote:** *"$4.9M / global average cost of a single data breach"* (**UNICITY07**).
- **What's wrong:** Stale and rounded the wrong way. $4.9M ≈ IBM's 2024 figure ($4.88M); the current IBM 2025 global average **fell to $4.44M** (down ~9%). A 2026 report citing the superseded number is itself an undefendable stat. It is also sourced to vendor handbooks (Veeam/Datadog, Source 17), not IBM directly.
- **Fix:** Update to **$4.44M** and cite IBM *Cost of a Data Breach 2025* directly (add IBM to UNICITY17). Stronger for the substrate thesis: swap in IBM's ungoverned-AI numbers — **$4.63M average shadow-AI breach (~$670K premium); 97% of AI-incident orgs lacked AI access controls; 63% had no AI governance policy** — which are directly attributable and on-thesis. (Note: footnote 17 *does* reference "breach-cost figures," so the defect is mis-sourcing + stale number, not a total absence of citation.)

### 4. "68%" and "81%" governance stats — indefensible composites (CONFIRMED)
- **Quote:** *"68% / of security teams report GenAI in use without data-protection controls"* and *"81% / of organizations lack full visibility into where their sensitive data lives"* (**UNICITY06/07**).
- **What's wrong:** The 68% misparaphrases Menlo Security 2025 (*"68% of employees use free-tier AI tools" / "68% surge in shadow GenAI"*) into a "security teams… without controls" claim — a different statement. The 81% resolves to **no** defensible source (the real "81%" figures are off-topic: insider-risk programs; firewalls/VPNs). Both are sourced to gated vendor-marketing assets (Veeam DSPM Handbook, Datadog guide) that don't expose the figures publicly.
- **Fix:** Cut or re-state the 68% to match Menlo's exact wording and footnote Menlo directly. Cut the 81% or replace with an attributable equivalent. Better: use IBM 2025's directly-citable governance stats (63% no AI governance policy; 97% lacked AI access controls). No unattributed survey percentages; no gated vendor asset as the sole citation.

### 5. "7× governance investment in nine months" + banned word (CONFIRMED, two prongs)
- **Quote:** *"7× growth in AI governance investment in nine months — governance is the production unlock"* (**UNICITY06**).
- **What's wrong:** (a) The **7×/nine-months** figure maps to no source and could not be corroborated; nearest real figures are an order of magnitude off (Stanford HAI 8.5× is *all GenAI investment vs. 2022*, not governance; the governance market grows ~34–45% CAGR). (b) **"unlock"** is on the hard-banned list (voice guide line 115: *No "leverage," "synergy," "unlock," "empower"*). There's also a missing space in the source: *"…monthsgovernance…"*.
- **Fix:** Cite an exact named source with a defined metric/period for the 7×, or cut the number and make the point qualitatively (defensible alternative: OneTrust Sept 2025 — *"98% of enterprises plan to raise governance budgets, ~24% on average"* — but note this is far smaller than 7×, so drop the big-multiple emphasis). Replace "production unlock" with *"governance is the gate to production"* or *"governance is what lets agents ship."*

### 6. Actor-rule breach: "software discovers software" (CONFIRMED)
- **Quote:** *"But packets never negotiated contracts. When software discovers software, the channel itself must enforce identity on both ends…"* (**UNICITY09**).
- **What's wrong:** Direct breach of the actor=the-agent rule — software is the actor twice, in the one chapter where the distinction matters most. (The UNICITY02 *"a third of enterprise software"* is fine — that's Gartner's product-category noun, not an actor.)
- **Fix:** *"But packets never negotiated contracts. When one agent discovers another, the channel itself must enforce identity on both ends…"* — also tightens the parallel with the next line ("a conversation between machines").

### 7. EU AI Act — Aug 2 2025 enforcement timing wrong (CONFIRMED)
- **Quote:** *"General-purpose AI obligations begin. The AI Office gains direct enforcement power over foundation-model providers."* (AUG 02 2025, **UNICITY08**).
- **What's wrong:** GPAI obligations apply from 2 Aug 2025, but the Commission's enforcement/supervisory powers over GPAI providers begin **2 Aug 2026** (one-year adjustment period). Stating enforcement was "gained" in 2025 is wrong. Doubly imprecise: the exclusive enforcement competence sits with **the Commission** (Art. 88), not "the AI Office."
- **Evidence:** artificialintelligenceact.eu (Chapter V enforcement); EC GPAI FAQ ("from 2 August 2026 onwards, the Commission will enforce… including through fines").
- **Fix:** *"General-purpose AI model obligations begin. A one-year adjustment period applies; the Commission's enforcement powers over GPAI providers (Art. 88), including fines, apply from 2 Aug 2026."* Or simply drop the enforcement clause.

### 8. EU AI Act — Digital Omnibus status stale (CONFIRMED)
- **Quote:** *"The proposed Digital Omnibus may adjust certain high-risk deadlines — it is in trilogue, not law."* (**UNICITY08**).
- **What's wrong:** As of the report's 2026-06-10 date, the Omnibus is no longer "in trilogue" — a **provisional political agreement was reached 6–7 May 2026**, and it proposes moving the very **2 Aug 2026** date the "53 days / COMPLIANCE CLOCK" centerpiece is built on to **2 Dec 2027** (standalone Annex III high-risk). "Not law" is still correct; "in trilogue" is not.
- **Evidence:** Council of the EU press release, 7 May 2026; Gibson Dunn; Bird & Bird.
- **Fix:** *"The Digital Omnibus reached a provisional political agreement at trilogue (7 May 2026) that would defer standalone high-risk obligations to 2 Dec 2027 — but it is not yet formally adopted or published, so it is not law. Until it is, 2 Aug 2026 remains the operative date."* Also flag footnote 12's hard-coded phased dates so they don't read as stale after the body is corrected. (The 53-day count itself is arithmetically exact and can stay, tied to the qualifier.)

### 9. Databricks "327% one-year… 46% compounding" (CONFIRMED)
- **Quote:** *"327% one-year growth in multi-agent workflows compounding at a 46% rate"* (**UNICITY08/09**, EXHIBIT 04 lead).
- **What's wrong:** The 327% is a **~4-month** figure (Jun–Oct 2025), not "one-year." The "46% compounding rate" appears in no Databricks material and is mathematically incoherent against the 327%/4-month figure.
- **Evidence:** Databricks *State of AI Agents 2026* (the doc's own Source 07), corroborated by Techstrong/SiliconANGLE: *"327% in just four months."*
- **Fix:** *"327% — growth in multi-agent workflows on Databricks in four months (Jun–Oct 2025)."* Delete "one-year" and the entire "46% compounding" clause. If a smoothed rate is wanted, derive it transparently and attribute it to the author, not Databricks.

### 10. x402 "$17K daily volume" misattributed (CONFIRMED)
- **Quote:** *"x402 claimed 69,000 agents; independent on-chain analysis found ~$17,000 of real daily volume."* (**UNICITY11**); page headline *"$17K real daily volume…"* sourced to *"CoinDesk on-chain analysis, March 2026"* (Source 13).
- **What's wrong:** CoinDesk's 11 Mar 2026 piece reports **~$28,000** daily volume (~131,000 tx, avg ~$0.20), not $17,000. The "$17K" appears in no source.
- **Fix:** *"~$28,000 of daily volume, roughly half of it self-dealing and wash trading (Artemis, via CoinDesk, Mar 2026)."* Keep the 69,000-agents contrast (it's real — ~69,000 agents / $50M cumulative by Apr 2026) but date-align it (the 69K is an April cumulative count vs. the March daily snapshot). The "~half is test/wash" detail is supported.

### 11. Visa "3–9 months KYC" and "$250M revenue floor" (CONFIRMED)
- **Quote:** *"Visa's agentic token demands 3–9 months of KYC and an effective $250M revenue floor."* (**UNICITY11**); echoes at UNICITY11 (*"encoded as 3–9 months of KYC"*) and UNICITY10 (*"a nine-month KYC queue"*).
- **What's wrong:** Neither number exists in any Visa primary source (Visa Developer, Intelligent Commerce, newsroom, Core Rules). They trace solely to a hedged secondhand line in a practitioner essay (*"Visa mentioned…"*, Source 13). Visa's published posture (Payment Facilitator "New/Emerging" path under ~$100K/month) actively contradicts a $250M floor.
- **Fix (preferred):** Cut the precise numbers, keep the structural point: *"Visa's agentic token routes every transaction through issuer-side verification — the trusted intermediary at the center."* Alternative: downgrade to explicitly attributed opinion (*"One practitioner account reports…"*). Soften the two downstream echoes accordingly. Do **not** touch the x402 figures in the same passage.

### 12. Cover geography "STOCKHOLM" (CONFIRMED)
- **Quote:** *"UNICITY LABS — STOCKHOLM · ZUG · ABU DHABI"* (**UNICITY01**).
- **What's wrong:** Stockholm has no documented Unicity Labs presence; the only "Unicity"+Stockholm match is an unrelated MLM company (a brand-confusion risk). The legal seat — **Tallinn** (Unicity Labs OÜ, Narva mnt 13) — is omitted.
- **Evidence:** Estonian e-Business Register (Tallinn); $3M seed PR datelines Zug; Abu Dhabi via UAE investor. Zero genuine "Unicity Labs + Stockholm" hits.
- **Fix:** *"UNICITY LABS — TALLINN · ZUG · ABU DHABI"* (lead with the registered seat). Drop Stockholm. (Per-page footer needs no change — it carries no city.)

### 13. Substrate "intercepts" attributed to the proof / "semantic inspection" (CONFIRMED — two related layer-attribution errors)
- **Quote (a):** *"Live: an autonomous agent attempts an unauthorized action. It is inspected, intercepted, and signed into the audit record — before the tool call executes. That is the substrate, working."* (**UNICITY16**), immediately after **UNICITY15** reduces everything to *"one primitive: a self-contained, verifiable proof."*
- **What's wrong (a):** Intercept-before-execution is a **runtime** capability (the AgentStack/AstridOS guard layer: input classification, capability checks, sandboxing, approval gates, BLAKE3-linked audit chain) — **not** a property of the Unicity blockchain, which is a *settlement layer* (non-inclusion proofs; it anchors/settles, it does not inspect tool calls). The report collapses the two layers into one undifferentiated "substrate" — a category error a cryptographer will catch.
- **Quote (b):** *"Semantic inspection before execution"* (**UNICITY03**); *"Meaning, not just actions"* (**UNICITY04**); *"inspecting the meaning of every instruction"* (**UNICITY03**).
- **What's wrong (b):** The KB-backed primitive is AstridOS **"input classification"** — not meaning/semantic-level intercept. "Semantic inspection of meaning" is unsupported by the Unicity KB and traces to the adjacent website-deck concept "Semantic Intercept Fabric (SIF)," an Aleria-attribution-risk term. (Good news: the report does **not** literally contain "SIF" — keep it that way. Note "semantic" *does* appear in Unicity's whitepaper, but only for the Neuro-Symbolic Orchestrator's intent→tool *planning*, not the security guard — so it's borrowed vocabulary attached to the wrong layer.)
- **Fix:** Reframe "substrate" as an explicit two-layer stack: the guard-layer runtime that does the intercepting (capability checks, approval gates, tamper-evident audit chain) above, and the settlement/proof layer below. On UNICITY16, re-attribute the demo to the runtime. On UNICITY03/04, downgrade "semantic inspection / meaning" to *"classifying every instruction and checking it against capability grants before the tool call runs."* These mechanism names (AstridOS, AgentStack, BLAKE3) are **genuine Unicity terms** — naming them is the fix, not new leakage. Do not import "sub-20ms" (an Aleria/deck number).

---

## B. SHOULD-FIX — weak-sourced stats & voice tightening

- **"171% / 192% ROI"** (UNICITY02): rests on a chain of vendor SEO blogs (Landbase→Multimodal, where the cited Multimodal page does **not** contain 171%/192% — a broken citation chain). Attribute honestly as a vendor-survey signal (e.g., *"vendor surveys report ROI in the 170–210% range for programs that reach production"*) and drop the precise "192% in US" absent a methodology-documented primary.
- **"23% of B2B purchase orders ~$180B, cycle times cut two-thirds"** (UNICITY03): could not be verified in any source — the most aggressive demand-side number in the doc, likely mutated from a ~22% B2C peak-shopping forecast. Remove or replace with the defensible Gartner *"$15T of B2B purchases by 2028"* (explicitly future tense, attributed). This is the softest number on the strongest claim ("the prize, honestly sized") — the failure stats are blue-chip while this upside stat is vendor-survey; hold it to the same bar.
- **"$7.5T on-chain… more than ACH"** (UNICITY11/12): figure is real (Artemis) but inherits a methodology caveat the doc drops — it pits *global, trading-inclusive* stablecoin throughput against *US-only* ACH. Soften: *"~$7.5T/month — comparable to US ACH volume, though the figure is global and includes trading and DeFi flows."*
- **Protocol table steward attributions** (UNICITY10): **ACP** is "OpenAI **+ Stripe**" (co-maintained), not OpenAI alone. **x402 / MPP** "Coinbase / Stripe orbit" is loose — relabel *"x402 (Coinbase) / MPP (Stripe + Tempo)"*. (MCP/Anthropic, A2A/Google, UCP/Google-led, AP2/Google+partners are all correct — match that rigor.)
- **Morris II grouped under "0 human clicks to compromise an enterprise AI agent"** (UNICITY04): EchoLeak/ForcedLeak are shipped-product CVEs; Morris II is a lab research worm. Make the asymmetry explicit (e.g., *"two shipped products, one research worm — all at zero clicks"*).
- **"Salesforce patched… inside six."** (UNICITY15): ambiguous unit — make it *"inside six weeks"* (verifiable: 28 Jul → 8 Sep 2025).
- **"defining infrastructure company of the decade"** (UNICITY09, repeated UNICITY14): the most investor-deck phrase in the report, an unearned superlative about a company that doesn't yet exist, and repeated. On UNICITY09 prefer the structural claim: *"Whoever builds the switch builds the layer every agent connection passes through."* State the company-scale framing once, at the close.
- **"in high magnitudes"** (UNICITY11): vague intensifier in an otherwise rigorously specific chapter. Cut or make concrete: *"When it arrives, it arrives fast — fractions of a cent to millions in a single flow."*
- **Identity "recognized across organizations" at L3** (UNICITY13/09): cross-enterprise recognition is architecture-*enabled* in the whitepaper, not shipped. Tie to the real primitive and tense: *"portable, self-authenticating cryptographic agent identity (reputation travels with the agent) — the substrate for cross-organization recognition."*
- **"instantly, without trust"** (UNICITY11/12): over-tightened vs. the protocol's own model (~2s inclusion-proof finality under an honest-BFT-majority assumption; the whitepaper states maximalist/zero-trust verification is *not* instantaneous). Soften to *"verify at the edge in seconds (~2s inclusion proof), without a central intermediary"* — more credible to a cryptographer and matches 0xt1mo's precision pattern.
- **Payments/Networking Principle boxes read present-tense** (UNICITY11) beside body text saying A2A settlement has *"zero shipped volume… the long bet."* Make the Principle boxes uniformly prescriptive (requirements the substrate must meet), as the Security/Governance boxes already are.

---

## C. NICE-TO-HAVE

- **MIT/BCG base**: tighten "2,100+ organizations" → "2,102 executives/respondents" (35% is sound).
- **BFSI causal clause** (UNICITY03, *"because they already operate identity, settlement, and audit rails"*): directionally grounded but editorial — optionally signal as the author's read.
- **Self-narrated honesty** ("honestly sized," "mapped honestly," "the numbers hold," 5+ times): keep the strongest instances ("THE NUMBERS HOLD" as the sources-page title is earned), trim one or two mid-body assertions so the data demonstrates honesty rather than announcing it.
- **"most-hyped agent payment rail"** caption (UNICITY11): replace the editorializing adjective with the specific number — the contrast does the judging.
- **Readiness Model has 3 columns for 4 domains** (UNICITY13): Identity/Enforcement/Record cover Security+Governance; Networking and Payments have no scoring column despite the "same climb in every domain" promise. Either add Connectivity + Settlement columns, or state the three are cross-cutting primitives.
- **EU AI Act precision** (UNICITY08): optionally add "whichever is higher" to the Art. 99 penalty header; relabel the 2027 milestone from "Full application" to "Annex I embedded products in scope."
- **"53 days" durability**: hard-pegged to 2026-06-10 — consider an auto-computed countdown or fallback to the absolute date for any evergreen version.
- **Domain/contact consistency**: whitepaper uses info@unicity-labs.com; docs/site use unicity.ai / unicity.network. Lock one canonical surface (see ledger note below).

---

## D. WHAT IS STRONG (be specific)

- **The Gartner spine** (UNICITY02/03): *"40% of agentic AI projects will be canceled by end of 2027"*, *"~130 with real agentic capability… the rest is agent washing"*, *"15% of day-to-day work decisions… a third of enterprise software… both effectively from zero in 2024"* — all verbatim-consistent with Gartner's 25 Jun 2025 release. This is the model for the rest of the doc: single authoritative primary, quoted faithfully.
- **Adoption numbers** (UNICITY02/03): MIT-SMR×BCG 35% and Deloitte 11% both verify and are correctly attributed.
- **The three security incidents** (UNICITY05): EchoLeak (CVE-2025-32711, CVSS 9.3, XPIA-bypass, arXiv 2509.10540) and ForcedLeak (CVSS 9.4, Noma Security, Web-to-Lead injection, $5 expired allow-listed domain, Trusted-URL remediation) match authoritative sources *exactly*; Morris II is correctly attributed to Cornell Tech and labeled "research." The strongest-sourced cluster in the doc.
- **EU AI Act scaffolding** (UNICITY07/08): all four phased dates, all three Art. 99 tiers (€35M/7%, €15M/3%, €7.5M/1%), and the 53-day count verify. On-voice prose: *"a log is a claim; you trust it exactly as far as you trust whoever produced it"*; *"the fines land on the deployer — your liability, their logbook."*
- **Payments/networking primaries** (UNICITY11/12): x402's 69,000 agents and the ~$7.5T on-chain figure check out against CoinDesk/Chainalysis/Artemis even where the doc's named source is weak; the four Google/Anthropic protocol stewards are accurate.
- **The payments thesis is the best-grounded part of the implicit Unicity argument** (UNICITY11/14): *"the value carries its own proof, so any counterparty verifies at the edge"* and the center-vs-edge framing map almost clause-for-clause onto the whitepaper's non-shared-ledger / self-contained bearer-token design. Lean harder here.
- **Voice + brand discipline**: zero Aleria leakage, zero named-org/customer misattribution (NATO/DARPA/BIS/KSI/Guardtime appear nowhere; Microsoft/Salesforce/Stripe/Visa appear only as attack disclosures, protocol stewards, or market signal — never as Unicity customers). The borrowed coinages ("agent washing," "zero-click," "the substrate," "the switch") are real literature used precisely. This is the discipline the brief most cared about, and the report holds the line.

---

## Source-Strength Ledger

| Headline number | Source strength | Status |
|---|---|---|
| Gartner 40% canceled / ~130 real vendors / 15% / 33% | **Authoritative** (Gartner press release) | Keep |
| MIT-SMR×BCG 35% adoption | **Authoritative** | Keep (tighten "orgs"→"executives") |
| Deloitte 11% in production | **Authoritative** | Keep |
| EchoLeak CVE/CVSS, ForcedLeak CVSS/$5 domain | **Authoritative** (MSRC, Noma, arXiv) | Keep |
| EU AI Act dates + Art. 99 tiers | **Authoritative** (Reg. 2024/1689) | Keep; fix Aug-2025 enforcement + Omnibus status |
| x402 69,000 agents / ~$28K daily / ~half wash | **Authoritative** (CoinDesk/Chainalysis/Artemis) | Keep; **fix $17K→$28K** |
| $7.5T on-chain | **Authoritative** (Artemis) | Keep; add global/trading caveat |
| Cisco 15% AI-ready / 59% one-year | **Authoritative** | Keep |
| Databricks 327% | **Authoritative** | Keep; **fix "one-year"→4 months; cut "46%"** |
| 88% never reach production | Real but **denominator-confused** (Digital Applied→Forrester/Anaconda) | Fix framing to "projects" |
| 171% / 192% ROI | **Flimsy** (vendor SEO blogs, broken citation chain) | Downgrade to signal |
| 23% / $180B / two-thirds cycle | **Unverifiable / likely fabricated** | Remove or replace w/ Gartner $15T |
| 7× governance in 9 months | **Unverifiable / uncited** | Cut or re-source |
| 68% / 81% data-control gaps | **Flimsy** (gated vendor handbooks; misparaphrased) | Re-source or cut |
| $4.9M breach cost | **Stale** (2024 figure) | Update to $4.44M (IBM 2025) |
| Visa 3–9mo KYC / $250M floor | **Single-source hearsay** (practitioner essay) | Cut the numbers |

---

## Note on the Aleria–Unicity brand boundary

The report **respects the boundary well** — and that is its standout discipline. A full-text scan finds none of Aleria's product names or vanity metrics (AOS-9, AgentStack-as-Aleria, AgentSphere, "Aleria L1," SIF/"Semantic Intercept Fabric," 225K agents, 1,000+ customers, 145x, 450+ connectors), and the report sells the *category* ("the substrate") rather than a SKU, which avoids collision cleanly. The one place the boundary thins is conceptual, not nominal: the load-bearing security primitive "semantic inspection / inspecting the meaning of every instruction" (UNICITY03/04) traces to Aleria's website-deck "Semantic Intercept Fabric" concept and is **not** in the Unicity KB (which describes only "input classification"). The fix is to downgrade that phrasing to what AstridOS actually does — using genuine Unicity terms — and to keep the literal "SIF" and "sub-20ms" out (they currently are out; keep it that way). The CTA domain (`unicity-labs.com`) is a separate brand-consistency point, not Aleria leakage: it 301-redirects live to unicity.ai, so it is not a blocking error — optionally print the canonical `unicity.ai` to match the PR/LinkedIn convention.

---

# v4 FINALIZE PASS — 2026-06-10

The deck was re-developed externally (Claude design + Fable 5 Max) into `Agentic_Opportunity_v4_1900.html` — richer layout, live counters, and **~18 new statistics** not present in the originally fact-checked version. This pass verified the v4 before shipping it as `index.html`: a 29-agent workflow web-checked every new claim against primary sources (with an adversarial second pass on anything not rock-solid) plus brand-boundary and coherence audits.

**Brand boundary: CLEAN (re-confirmed on v4).** Zero Aleria leakage (no Aleria/AOS-9/AgentSphere/AgentStack/AstridOS/SIF/225K/145×), product-name-free, no customer/heritage misattribution, every third-party stat externally credited. The one prior conceptual thinness ("semantic inspection") is already resolved — v4 says "inspection / intent, not just keywords."

**All prior corrections survived** the redesign (Tallinn, "agent **projects**", IBM 97%/63%/$4.44M/$670K, Gartner 33%, Databricks 327%/4mo, x402 $28K, ACP = OpenAI+Stripe, no "unlock"/"lethal trifecta", unicity.ai CTA).

**Self-contained + live:** only external ref is the `unicity.ai` CTA link; 3 fonts inlined; JS valid; EU AI Act countdown targets `Date.UTC(2026,7,1,22,0,0)` = Aug 2 2026 00:00 CEST (Brussels midnight) — timezone-correct. All 16 slides render headless with counters landing on corrected values (verified by screenshot).

## Applied — must-fix (2)

| # | Was | Now | Why |
|---|---|---|---|
| 1 | 171% "AVG ROI **REPORTED** FOR AGENTIC PROGRAMS **THAT REACH PRODUCTION** — VENDOR SURVEYS, **2026**" | "AVG ROI ENTERPRISES **EXPECT** FROM AGENTIC AI — **PAGERDUTY SURVEY, 2025**" | PagerDuty's 171% is a forward-looking *expectation*, not a realized return; "that reach production" is a citation-chain mutation (absent from the primary); survey is 2025 and is one named source, not plural "vendor surveys" |
| 2 | "**Seven** protocols announced in eighteen months" | "**Six** protocols…" | The table has 6 rows and the punch says "Six standards" — "Seven" was an investor-visible contradiction |

## Applied — should-fix (precision / coherence)

| Slide | Was | Now | Why |
|---|---|---|---|
| Cover | TALLINN · ZUG · **ABU DHABI** | TALLINN · ZUG | Abu Dhabi traces only to investor Tawasal's HQ + search-AI hallucinations; no primary source places a Unicity office there *(owner can confirm — see below)* |
| Prize | 59% / "ONLY **15% CALL THEIR INFRASTRUCTURE** AI-READY" | 61% / "FEWER THAN 1 IN 6 HAVE **NETWORKS READY FOR AI**" | refreshed 2024→2025 Cisco edition (59→61); the 15% is network-specific & measured, not a whole-infrastructure self-report; "fewer than 1 in 6" also kills a duplicate "15%" colliding with the Gartner stat on the same slide |
| Governance | "12× … WITH **ACTIVE AI GOVERNANCE**" | "12× … WITH **AI GOVERNANCE TOOLS**" | Databricks' signal is use of its governance *tools* (telemetry), not abstract governance |
| Payments | "$7.5T … ON PAR WITH US ACH" (no caveat) | + "Artemis, 2026 — global & trading-inclusive vs US-only ACH" | the figure is correct but global/trading-inclusive vs US-only ACH; without the caveat the comparison misleads |
| Payments | "a thousand merchants are agent-enabled — … **single digits**" | "real agent-initiated transactions still number in the **hundreds, not the millions**" | the merchant/single-digit counts were unsourced; grounded in Visa's reported hundreds; also removed a duplicated "wash trading" clause |
| Exhibit-Payments | "Verification travels with the value" (twice on slide) | "Proof rides with the value" (edge pane) | de-duplicated the refrain within one frame |
| Framework | "Nothing below L2 survives **contact with** production" | "…survives **production at scale**" | reconciles with L1's "SHIPS NARROW, LOW-RISK WORKFLOWS" |
| Architecture | kick "ONE PRIMITIVE, TWO LAYERS" vs hero "TWO LAYERS. ONE PROOF." | both "TWO LAYERS, ONE PROOF" | one ordering per slide |
| Source line | "CISCO AI READINESS INDEX · … · COINDESK ON-CHAIN ANALYSIS" | "CISCO … INDEX **2025** · **PAGERDUTY** · … · COINDESK · **ARTEMIS** ON-CHAIN ANALYSIS" | attribution accuracy (Artemis did the on-chain analysis; PagerDuty now cited; Cisco edition dated) |

## Verified solid — NOT changed

Gartner 40%/~130 vendors/15% autonomous decisions, MIT-SMR×BCG 35% adoption, Deloitte 11% in production, EchoLeak CVE-2025-32711 (9.3, Microsoft rating) / ForcedLeak 9.4 (Noma) / Morris II (Cornell Tech), $5 expired domain, Stripe **288 products** (Stripe Sessions 2026), x402 **69,000 agents** claimed vs $28K real, **$7.5T** monthly on-chain figure itself, **70–90%** stablecoin programmatic (Money Movement 2.0), Databricks **78%** multi-LLM, EU AI Act penalty tiers (€35M/7% · €15M/3% · €7.5M/1%, exact per Art. 99), and the **protocol-steward table** — including **x402/MPP = Coinbase · Stripe** (the Linux Foundation's own release names Stripe as an x402 developer, so Stripe is *not* stripped).

## Deliberately left as-is

- **Gartner "over 40%" / "at least 15%" / "over 12×":** the deck prints flat 40%/15%/12×, which *understates* the sourced floors — conservative, not misleading; left for clean counter animation.
- **EU high-risk timeline (Aug 2 2026 / 2027):** the deck already carries the honest "Digital Omnibus provisional May 2026, not yet law — until then, August 2 stands" caveat; defensible as written.

## Open — owner's call

- **ABU DHABI** was removed pending confirmation. If Unicity Labs has a genuine UAE/ADGM office or registration, restoring it is a one-line edit (`TALLINN · ZUG · ABU DHABI`).

---

## Source-folder reconciliation (2026-06-10)

After the web-only fact-check, the report's actual provenance surfaced: `~/Downloads/Market Data/` (21 PDFs + ~23 images). Reconciling the deck against the **primary sources Alan actually used** caught two places where the web-based pass had "corrected" *away* from the real source:

| Claim | Web pass said | Primary source says | Fix |
|---|---|---|---|
| $7.5T monthly on-chain | attributed to "Artemis, 2026" | **Money Movement 2.0** (51 Insights, 2026): *"Monthly on-chain settlement hit $7.5 trillion in March 2026, surpassing the U.S. ACH network for the first time"* | caption + source line re-attributed to Money Movement 2.0 (kept the global/trading-inclusive caveat — the report itself notes only ~$400B is real-world payments ex-trading/bots) |
| 12× governance | "AI governance **tools**" | **Databricks State of AI Agents 2026** (p5/p26): *"Companies that **actively use** AI governance put over 12× more AI projects into production"* | reverted to **"ACTIVE AI GOVERNANCE"** — the deck's original wording was faithful to the source |

Primary-source **confirmations** (deck was right): 70–90% programmatic stablecoin volume (Money Movement 2.0, verbatim); 69,000 x402 agents + 165M txns, Apr 2026 (Money Movement 2.0); 327% multi-agent growth + 78% multi-LLM, Oct 2025 (Databricks). Money Movement 2.0's *"$400B real-world payments excluding trading and bots"* independently backs the deck's x402 skepticism.

Not in the folder (so web-sourced, no primary to contradict): **Cisco 59/61%** (the 2024→2025 edition bump is a judgment call — revertible) and **171% ROI / PagerDuty**. The rest of the folder is supplementary research from adjacent domains (Magnet Forensics DFIR, CockroachDB RAG, Legitima/Gartner compliance, Gartner AI-TRiSM & shadow-AI figures) — useful background, not deck stats.
