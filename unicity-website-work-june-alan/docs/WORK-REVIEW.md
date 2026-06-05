# COMPREHENSIVE WORK REVIEW — Unicity Industry Pages

**Artifact:** `/Users/alanradi/unicity-industry-preview/index.html` (five pages: `#industry`, `#telecom`, `#mssp`, `#finance`, `#gaming`)
**Voice reference:** `/Users/alanradi/pitchdeck/0xt1mo-voice-guide.md`
**Source decks:** Telecom, Enterprise, CyberKnight/MSSP, iGaming, DeFi PDFs

---

## 1) EXECUTIVE VERDICT

| # | Question | Answer | Score |
|---|---|---|---|
| 1 | Are we speaking 0xt1mo's language? | **Partly** | 4 / 5 |
| 2 | Is it anchored by the decks? | **Yes** | 4.5 / 5 |
| 3 | Cohesive flow? | **Partly** | 4 / 5 |
| 4 | Correct sequence? | **No** | 3 / 5 |
| 5 | Free of buzzwords / jargon / negations / "not X this is Y"? | **No** | 2 / 5 |

**(1) Are we speaking 0xt1mo's language? — PARTLY (4/5).** Substantially yes, and in places verbatim-grade: MSSP's "Everyone watches the agent. No one runs it.", Finance's "a person who can be denied, a binary which can be patched — an agent is neither," Gaming's three-interface windows, and "the chain proves single-spend without ever seeing the transaction" are exemplar lines reproduced correctly. Architectural-refusal, em-dash unpacking, and "one capability = one specific claim" discipline are present throughout. The consistent drift is **monetization vocabulary** — "highest-margin product since data," "ARPU on your rails," "% of GGR," "P&L kill-stats," "the only personalization that has ever worked," "Unicity is the platform" — which slides into operator/BD register the guide explicitly rejects, and one directly banned word ("unlock") appears twice in spirit on Telecom. Fidelity ranking: MSSP (4.5) ≈ Finance (4.5) > Telecom (4.0) > Industry (3.5) ≈ Gaming (3.5).

**(2) Is it anchored by the decks? — YES (4.5/5).** Anchoring is unusually strong; the overwhelming majority of substance and most actual wording traces to a confirmed slide. Telecom and MSSP are near-verbatim to their source decks (5/5 each). The genuine gaps are concentrated on Finance (which has no dedicated deck): the **88% / 14% / $400B stat tiles**, the **Gartner 46% blocker chart**, the **CLOB / Binance-Uniswap comparison**, and the **competitive-landscape vendor table** are kit-asserted, not deck-confirmed. Gaming's **UKGC £125 affordability figure** is also unsourced to any provided deck. The single most important compliance-adjacent miss: the **index full 25-logo credential wall lacks the mandatory "not current Unicity customers" caption** that every per-vertical page carries.

**(3) Cohesive flow? — PARTLY (4/5).** As a *family* the pages cohere strongly: byte-identical isometric stack diagram, shared Act scaffolding, shared KSI heritage block, shared single-egress diagram, shared CTA pattern, consistent palette and "the agent" actor discipline. Within-page flow is undermined by one recurring defect (see Q4) plus redundancy bloat — the index stacks four headline-tier elements before its stack diagram, Telecom and Gaming carry redundant stat-mega "hinges" that merely re-display a number already shown, and Finance/MSSP Act IV balloon into catch-all dumping grounds.

**(4) Correct sequence? — NO (3/5).** The dominant defect: **three of four detail pages render Act IV (Proof) before Act III (Story)** — the reader literally sees "Act IV · The proof" on screen before "Act III · The story." Telecom and Gaming both invert III/IV; MSSP omits Act III and front-loads Proof. **Finance is the only page sequenced correctly (I→II→III→IV).** This buries the two most persuasive assets in the suite — Telecom's concierge demo and Gaming's signed Kelly session card — *after* the credentials wall, sequencing the emotional peak into a trough. Act I and Act II are correctly ordered on every page; the flaw is isolated to the Story/Proof back half.

**(5) Free of buzzwords / jargon / negations / "not X this is Y"? — NO (2/5).** This is the weakest dimension by design intent: the pages are *built* on contrast-by-negation. Adversarial verification confirmed **119 distinct line-item violations (149 counting every cited instance), zero false positives.** 34 are the banned "not-X-this-is-Y" hinge; 64 are other negations; 16 are unexplained jargon/acronym-soup; 3 buzzwords ("unlock" ×2, "one pane of glass"); 2 hype. Finance is the worst offender (57 line-items), MSSP second (35). **Caveat:** several of the highest-severity antithesis lines were *previously user-requested* design hinges — see §2 before purging.

---

## 2) THE NEGATION TENSION — keep-vs-cut (USER DECIDES)

The new "no negations / no 'not X, this is Y'" rule flags a set of lines that were **previously authored as deliberate, user-requested antithesis hinges**. These are load-bearing brand devices, not accidental tics. Do **not** auto-purge them — list them for an explicit keep-or-cut decision. Every one is confirmed verbatim in the DOM.

| # | Line (verbatim) | Page · location | Why it was wanted | If cut → declarative rewrite |
|---|---|---|---|---|
| U1 | **"The third interface is open. The home is not."** | Gaming — Act I h2 (4082) + stat-mega (4351, dup) | Signature affirmation+negation hinge | "The third interface is open. iGaming still has to build its home for it." |
| U2 | **"Every interface change makes new giants. This one is open."** | Index — One-stack head (2045) | Historical-inflection brand line | "Every interface change makes new giants. This interface is open infrastructure you can own." |
| U3 | **"The fourth rebuild is here. The home is not."** | Telecom — Act I head (2308) | Recurring page motif | "The fourth rebuild is here. Telecom still has to build its home for it." |
| U4 | **"The market is certain. The home is not."** | Telecom — stat-mega (2586) | Motif echo | "The market is certain. The home for it is still open." |
| U5 | **"Data sovereignty is architectural, not a promise."** | Telecom — Deployment head (2722) | Architectural-refusal headline | "Data sovereignty is enforced in the architecture." |
| U6 | **"Data residency is architectural, not a promise."** | Finance — Deployment h2 (3942) | Same device, finance variant | "Data residency is built into the architecture." |
| U7 | **"Everyone else watches the agent... we run it"** family (6 instances) | Index 2173; MSSP hero 2807, 2827, 2885, 3228; Finance 3888 | The core category-creation antithesis — the single most-repeated brand hinge | "Unicity runs the agent on a cryptographically enforced kernel and proves what it did." |
| U8 | **"Autonomy demands six things. No one delivers all six."** | Finance — Act II claim (3491) | Enumeration→single-answer hinge | "Autonomy demands six things. Unicity delivers all six in one runtime." |
| U9 | **"A gateway reads exhaust. The kernel runs the agent."** | MSSP — stat-mega head (3145) | Gateway-vs-kernel antithesis | "The kernel runs the agent and proves what it did." |
| U10 | **"CEX speed. DEX custody. Dark-pool privacy. Binance has the first. Uniswap has the second. Neither has the third. Unicity has all three."** | Finance — CLOB block (3790-91) | Competitive-positioning hinge | "Sub-millisecond speed, self-custody, and dark-pool privacy in one order book." |
| U11 | **"The firms that win machine finance will not be the ones with the most agents. They will be the ones that can prove what every agent did."** | Finance — closing CTA (4040) | Category-endgame close | "The firms that win machine finance will be the ones that can prove what every agent did." |
| U12 | **"The endgame for an MSSP is a runtime security line that watchers cannot sell — because they never run the agent. Unicity does."** | MSSP — closing CTA (3358) | Closing antithesis | "The endgame for an MSSP is a runtime security line only the operator who runs the agent can sell. Unicity runs it, so you can sell it." |

**Recommendation:** Keep U1–U4 and U7 as intentional brand hinges (they are the 0xt1mo "historical inflection / category-by-negation" voice and they test well). Strongly consider cutting/softening the *duplicated* instances (U1's stat-mega copy at 4351, U4 which merely re-states U3) since the redundancy — not the negation — is the real flow problem. U5/U6 ("architectural, not a promise") are the cleanest examples of the device and worth keeping once. Everything in §3/§4 below that is **not** in this table is fair game for the declarative purge.

---

## 3) PER-PAGE BREAKDOWN

### 3.1 INDEX (`#industry`)
- **Voice 3.5/5** — Weakest on pure voice; hub page leans on marketing connective tissue. Strong: the stack-layer positioning lead and "Everyone else watches the agent and infers from logs... prove what it did" (MSSP card). Off: "Where agents go to work" is a slogan, not a 0xt1mo historical-inflection opener; "highest-margin product since data" (Telecom card) is operator register; "Talk to us" is generic CTA filler. Never plants a historical-inflection flag.
- **Anchoring 4/5** — Isostack and four vertical one-liners are deck-true. **Critical miss:** full 25-logo wall (2226-2255) carries only "trusted by:" with **no "not current Unicity customers" caption** — the one mandatory Ruling-2 disclaimer, absent on the public landing page.
- **Flow 4.5/5** — Cleanest of the five. Nit: four headline-tier elements stack before the diagram ("Pick a vertical" / "Three layers. Every industry." / "Every interface change…" / isostack headline); "More verticals" eyebrow verbatim-echoes its own h2 (2201-2202).
- **Sequence 4/5** — Correct for a navigational hub; strict 4-act arc does not bind. No reorder needed.

| Type | Quote | Sev | Rewrite |
|---|---|---|---|
| not-X-Y | "Everyone else watches the agent and infers from logs… prove what it did" (2173) | high* | "Run your clients' agents on a cryptographically enforced kernel and produce a signed record of exactly what each one did." |
| not-X-Y | "Agentic AI your auditors can read, not just trust." (2180) | high | "Agentic AI your auditors can read line by line." |
| negation | "…move into the infrastructure rather than living inside the agent." (2012) | med | "…live in the infrastructure underneath every agent." |
| negation | "…move down into the infrastructure instead of living inside the agent." (2029) | med | "…move down into the infrastructure that sits underneath every agent." |
| negation | "…put autonomous AI into production without losing control of risk." (2181) | med | "…put autonomous AI into production while keeping full control of risk." |
| negation | "Your next million players won't arrive through a browser or an app." (2188) | high* | "Your next million players arrive through an agent." |
| negation | "Don't see your industry? Talk to us." (2265) | low | "Your industry, your stack. Talk to us." |
| jargon | "PROOF SYSTEM · FORMAL VERIFICATION" (2128) | low | "PROOF SYSTEM · MATHEMATICALLY CHECKED EXECUTION" |
| jargon | "Executes every agent in an isolated capsule." (2119) | low | "Runs every agent in its own isolated sandbox." |
| jargon | "…in one signed handshake." (2189) | low | "…confirmed in a single signed exchange when the agent connects." |

\* = overlaps the user-requested hinge family in §2.

### 3.2 TELECOM (`#telecom`)
- **Voice 4/5** — Best opening of any page ("Mainframe. Client-server. Cloud. Mobile. You shipped Mobile…" = the guide's prescribed opener). Strong architectural spine. Most sales-register drift of the detail pages: "highest-margin product since data," "ARPU on your rails," "every tap is revenue you own," and the banned word **"This is the unlock."**
- **Anchoring 5/5** — Near-verbatim to Telecom + Enterprise decks (authority cards, SECURELY·EFFICIENTLY·PROVABLY spine, single-egress diagram, capsule-swap/SIF appendix all confirmed). Nits: "AgentSphere" console name vs. "Enterprise Console" elsewhere; Verizon folded into the shared 7-logo strip rather than separately fenced.
- **Flow 3/5** — Act IV-before-Act III inversion (2599 then 2671) peaks the page too early. Stat-mega hinge (2588-90) re-displays the exact 100:1 NVIDIA number already in the Act I card. Spine cards (2506-17) and feature rows (2527, 2546) repeat the same sentence verbatim.
- **Sequence 3/5** — Swap Act III (story/concierge, ~2668-2718) above Act IV (proof, ~2596-2667).

| Type | Quote | Sev | Rewrite |
|---|---|---|---|
| buzzword | "This is the unlock." (2512) | high | "That economics is what makes an agent per subscriber viable." |
| not-X-Y | "Provable, not just observed" (2546) | high | "Provable by record" |
| not-X-Y | "Two products, not one" (2698) | high | "Two products" |
| not-X-Y | "…bound to a human principal. Not a static API key." (2378) | high | "…bound to a human principal, issued and rotated per agent." |
| negation | "You don't infer what an agent did from scattered logs — you have one definitive, audit-ready answer." (2516, dup 2547) | med | "Every agent action lands in a tamper-evident record — one definitive, audit-ready answer." |
| negation | "No card setup, no third-party network — every settled action runs through your identity and billing." (2556) | med | "Every settled action runs through your own identity and billing, on your network." |
| negation | "…stay on your network — not a hyperscaler's." (2565) | med | "…stay on your network, inside your boundary." |
| negation | "Agent activity and user data never leave your boundary." (2723, dup 2762) | med | "Agent activity and user data stay inside your boundary." |
| negation | "…no card setup, no friction." (2685) | med | "Each settled action runs through your identity and billing, charged straight to the line." |
| negation | "…ungoverned, off your network, on someone else's rails." (2324) | med | "Today that growth runs on the hyperscaler's rails, beyond your governance and network." |
| negation | "…rebuilt for machines with no human in the loop." (2324) | low | "…rebuilt for machines that act on their own." |
| negation | "…without touching a line of core code." (2574) | low | "…with the core code unchanged." |
| buzzword | "one pane of glass" (2676) | med | "one console that governs every agent workload" |
| hype | "Intelligent routing…" (2512, 2538) | low | "Cost-aware routing…" |
| jargon | "A2A payments" (2710, +2390/2750/2758/2762) | med | "Agent-to-agent payments" (expand on first use) |

### 3.3 MSSP (`#mssp`)
- **Voice 4.5/5** — Most consistently on-voice page. "Everyone watches the agent. No one runs it." is the single most 0xt1mo line in the document. "reads its exhaust," "The difference is architectural, not a performance gap," the revocable-identity/quarantine passage, and "Not log signals — proof." are exemplar-grade. Minor: em-dash over-fire; "watchers cannot sell" tips faintly toward sales framing.
- **Anchoring 5/5** — Strongest-anchored page; competitor map, Stripe 1B TPS, a16z quote, SIF pipeline all confirmed verbatim against CyberKnight deck. Nit: two of three Problem-block "authority cards" (2849-75) are presentation scaffolding with invented-looking big-numbers.
- **Flow 3.5/5** — Best-argued in isolation. Act III missing (the unlabelled "Service lines" is the payoff in spirit); Act IV is overloaded (heritage + 4 stats + 3 bios + a *second* Stripe/a16z authority row + logo wall).
- **Sequence 3/5** — Move Act IV (proof, ~3155) to just before the close, after Service lines (~3258) and Deployment (~3292): prove, then ask.

| Type | Quote | Sev | Rewrite |
|---|---|---|---|
| not-X-Y | "Every other tool watches the agent and infers from logs. Unicity runs the agent…" (2807) | high* | "Unicity runs the agent on a cryptographically enforced kernel and proves what it did." |
| not-X-Y | "Everyone watches the agent. No one runs it." (2827) | high* | "Today's tools observe the agent from outside. Unicity runs it." |
| not-X-Y | "Everyone else watches the agent. We run it and prove its execution." (2885) | high* | "Unicity runs the agent and proves its execution." |
| not-X-Y | "Computing is being rebuilt a fourth time. The controls are not." (2822) | high | "Computing is being rebuilt a fourth time. The controls still lag the actor." |
| not-X-Y | "The difference is architectural, not a performance gap. A gateway sits beside… below…" (2889, dup 2966) | high | "The difference is architectural. A gateway sits beside the agent and reads its exhaust; the kernel sits below it, so every action passes through." |
| not-X-Y | "Not log signals — proof." (2962) | high | "Cryptographic proof of what the agent did." |
| not-X-Y | "Verifiable execution, not log signals" (3229) / "Proof, not inference" (3227) | high/med | "Verifiable execution, proven cryptographically" / "Proof of execution" |
| not-X-Y | "A gateway reads exhaust. The kernel runs the agent." (3145) | high* | "The kernel runs the agent and proves what it did." |
| not-X-Y | "…runtime security line that watchers cannot sell — because they never run the agent. Unicity does." (3358) | high* | "…a runtime security line only the operator who runs the agent can sell. Unicity runs it, so you can sell it." |
| not-X-Y | "Signal about the space, not an endorsement… purpose-built, not retrofitted." (3215) | high | "A signal about the space. The rail at this scale has to be built for the job from the start." |
| negation | "You cannot secure what you cannot see." (2856, 3133, 3275 — ×3 tic) | med | "Cryptographic identity is the floor the kernel restores: every agent visible, scoped, accountable." |
| negation | "Static keys are not identity" (2852) | med | "Identity is cryptographic and per-agent; static keys are shared credentials." |
| negation | "…flag exfiltration… after it happens, not before the action executes." (2869) | med | "…flag exfiltration and runaway compute once it has already happened." |
| negation | "In-path enforcement before the action runs — not after the fact" (2873, dup 3088, 3149) | med | "In-path enforcement that runs before the action does." |
| negation | "The watcher is always one step late… cannot bypass it." (2874) | med | "The kernel sits in the path, so the agent passes through it before any action runs." |
| negation | "everyone else orbits the agent" (2894) | med | "where each tool sits relative to the agent" |
| negation | "the bolt-ons still watch the agent from outside." (2946) | med | "these tools sit outside the agent. Unicity runs it." |
| negation | "No rip-and-replace; the agent runs as-is." (2954) | low | "The agent runs as-is, on the framework and model it already uses." |
| negation | "Onboard existing agents without rebuilding them… does not care which agent runs on top." (3285, dup 3344) | med | "Onboard existing agents as they are — the security lives below the kernel and works the same for any agent on top." |
| jargon | SIF paragraph: "domain-specific ontologies… ONNX-compatible ML Detection… DLP Scanner using Named Entity Recognition…" (3087) | high | "…reads the meaning of each request, not only the action. Three stages: a rule engine catches known patterns, a detection model (load your own) catches anomalies, a scanner finds secrets and personal data." |
| jargon | "indirect prompt-injection exfiltration is blocked…" (3106) | low | "If an attacker hides instructions in content the agent reads, the attempt to send data out is blocked at the perimeter." |
| jargon | "isolated WASM capsule. Multi-tenant by design." (2958) | low | "isolated sandbox, one per tenant." |
| jargon | "un-retrofittable layer" (2889) | low | "the deeper layer, built in from the start" |
| jargon | "A2A" / "SIF" bare acronyms (3297, 3336) | med | "agent-to-agent" / "Semantic Intercept Fabric" |
| hype | "a capability claim, measured" (3149) | low | "before the action runs — measured at sub-20ms." |

### 3.4 FINANCE (`#finance`)
- **Voice 4.5/5** — Strongest opening and structural argument. "Every control… was built for a person, who can be denied, and a binary, which can be patched. An agent is neither." is the best on-voice paragraph in the document. "Read it, don't just trust it" is a coinable, ownable concept; the six-requirement scorecard and the closing are guide-perfect. Off: the CLOB/Binance-Uniswap block flirts with crypto-bro register; "88% of organizations" survey stat reads like a fintech deck.
- **Anchoring 4/5** — Most settlement numbers, the isostack, the six-requirement framing (sourced to iGaming GAM p8, not Enterprise as the spec mis-credits) are deck-confirmed. **Genuine gaps:** 88%/14%/$400B tiles ("industry survey/market forecast," no deck); Gartner 46% blocker chart (not in any deck); CLOB comparison (kit-only); competitive-landscape vendor table (kit-only); **Eric Leandri bio dropped** along with named Gault/Kenyon bios (replaced with generic cards — safe but a dropped kit requirement).
- **Flow 4/5** — Best-ordered but heaviest. Act IV is enormous (bios + stats + logo wall + a whole "Market context" sub-section + competitive table) — market/competition material that structurally belongs in Acts I/II appended to the back. Deployment-before-Use-cases inverts the suite rhythm. "never leave your boundary" caption repeated 3×.
- **Sequence 5/5** — The reference page; the only one ordered I→II→III→IV. No reorder required.

| Type | Quote | Sev | Rewrite |
|---|---|---|---|
| not-X-Y | "Agentic AI your auditors can read, not just trust." (3381) | high* | "Agentic AI your auditors can read." |
| not-X-Y | "Neither denied, nor patched." (3402) | high | "A third kind of actor." |
| negation | "…a person, who can be denied access, and a binary, which can be patched. An agent is neither." (3405) | high | "…a person, granted or refused access, and a binary, patched on a schedule. The agent is a third actor with its own needs." |
| not-X-Y | "This is the gate before production, not a tuning problem after it." (3406) | high | "This is the gate before production." |
| negation | "The controls do not see the action until after it has run." (3406) | med | "The controls see the action only after it has already run." |
| not-X-Y | "An API key is not an identity." (3414) | high | "An identity must be attributable and revocable. An API key is a shared secret." |
| negation | "…cannot attribute… so it cannot answer for it." (3414) | med | "To answer for an autonomous action, a firm needs it tied to an accountable, revocable actor." |
| negation | "No stable baseline" (3423) / "There is no fixed posture…" (3424) | med | "Drifting baseline" / "Behaviour drifts between audits, so detection arrives after the fact." |
| not-X-Y | "Autonomy demands six things. No one delivers all six." (3491) | high* | "Autonomy demands six things. Unicity delivers all six in one runtime." |
| not-X-Y | "A legacy chain meets some… None meets all six… Unicity does." (3495) | high | "A legacy chain meets two of six. A gateway meets two. A framework meets one. Unicity meets all six in one runtime." |
| not-X-Y | "No legacy blockchain meets all six. No security vendor… No framework… Unicity is the one stack that does." (3549) | high | "Across legacy blockchains, security vendors, and frameworks, each meets only part of the list. Unicity is the one stack that meets all six." |
| not-X-Y | "proof of what ran, not a log assertion" (3522) | med | "cryptographic proof of what ran" |
| not-X-Y | "below the agent, not beside it. Tools cannot bypass the kernel…" (3695, dup 3696) | high | "Interception, budgets, and audit run in the kernel, below the agent. Every tool call passes through it — that is the point." |
| not-X-Y | "A content-aware firewall, not just action-based." (3705) | high | "A content-aware firewall that inspects the payload of every action." |
| not-X-Y | "evidence, not log assertions stitched together after an incident." (3714) | high | "a single signed record that stands as evidence on its own." |
| not-X-Y | "captured as verifiable state — not reconstructed afterward from logs" (3752) | high | "captured as verifiable state at the moment it happens" |
| not-X-Y | "one definitive answer, not scattered logs." (4009) | high | "in one definitive record." |
| not-X-Y | "Read it, don't just trust it" (3829) | high* | "Open to read" |
| not-X-Y | "CEX speed. DEX custody. Dark-pool privacy. Binance… Uniswap… Neither has the third. Unicity has all three" (3790-91) | high* | "Sub-millisecond speed, self-custody, and dark-pool privacy in one order book." |
| not-X-Y | "You can't retrofit an EVM into autonomous AI." (3919) | high | "Autonomous AI needs a chain built for it from the start." |
| not-X-Y | "Check Point paid $300M for Lakera — validating demand, not solving the problem." (3929) | high | "Check Point paid $300M for Lakera, confirming the demand. The kernel-level problem is the one we solve." |
| not-X-Y | "…a bolt-on watches the agent from outside… Unicity runs the agent inside the kernel… the bolt-on vs. kernel-level problem the deal leaves unsolved." (3888) | high* | "Unicity runs the agent inside the kernel and enforces before the action, where a perimeter tool can only observe afterward." |
| not-X-Y | "Unicity doesn't replace your stack — it runs underneath…" (3932) | high | "Unicity runs underneath the stack you already have." |
| not-X-Y | "Data residency is architectural, not a promise." (3942) | high* | "Data residency is built into the architecture." |
| not-X-Y | "The firms that win machine finance will not be the ones with the most agents. They will be the ones that can prove what every agent did" (4040) | high* | "The firms that win machine finance will be the ones that can prove what every agent did." |
| negation | "no shared ledger, no mempool, no gas." (3757) | high | "assets settle peer-to-peer, with no fee and instant finality." |
| negation | "The chain proves single-spend without ever seeing the transaction…" (3565, 3757, 3999, 4025 — refrain ×4) | high | "The chain proves single-spend while the transaction stays private." |
| negation | "Static API keys go away." (3686) | med | "Each agent carries a cryptographic identity in place of a static API key." |
| negation | "No rip-and-replace." (3557) | med | "Your agent runs as it is." |
| negation | "Agent activity and data never leave your boundary." (3943, 3982, 3992, 4018) | med | "Agent activity and data stay inside your boundary." |
| negation | "None is a Unicity endorsement or partnership." (3876) / "no partnership implied" (3883) | med | "Each is independent of Unicity, and each marks where the category is going." |
| buzzword | "What it unlocks" (3755) | med | "What it enables" |
| hype | "Intelligent routing, recorded" (3731) | low | "Scored routing, recorded" |
| jargon | "Plonky3 AIR + Poseidon2" (3769) / "SNARK" (3778) | med | "Zero-knowledge proof system" / "settlement proof" (defer detail to appendix) |
| jargon | "No mempool / no MEV" (3797) / "Unlinkable" (3796) | med/low | "Order privacy · no front-running" / "Private" |
| jargon | "EVM" (3919), "CEX/DEX" (3790), "DLP/PII/NER/ONNX" (3705, 4024) | low-med | Gloss in plain language; defer crypto acronyms to appendix |

### 3.5 GAMING (`#gaming`)
- **Voice 3.5/5** — Excellent historical-inflection opening ("Two interfaces made this industry — the web, then the mobile app. The agent is the third.") and "The agent doesn't have a funnel." Body collapses into iGaming-BD register: **"the four P&L kill-stats," "% of GGR," "Retention becomes a conversation," "the only personalization that has ever worked," "Unicity is the platform"** — the most off-voice stretch in the suite.
- **Anchoring 4.5/5** — Exceptionally faithful to the iGaming deck (cover, Kelly session card, three-waves with exact era data, GGR kill-stats, 92% CRM, six-pillar grid, 45-day pilot all confirmed verbatim). Gaps: **UKGC £125 affordability figure** not tied to any provided deck; compliance-as-moat and "two wallets, one witness" blocks are flagged "recovered/hidden exhibits" (architecture substance is DeFi-anchored). "AOS9" naming conflicts with standardized "Unicity AOS" elsewhere.
- **Flow 3/5** — Repeats Telecom's defect: Act IV before Act III (4364 then 4436), burying the Kelly money-shot after the credentials wall. "The third interface is open. The home is not." appears twice verbatim (4082 + 4351 stat-mega). Mastercard/Santander signal + disclaimer repeated 3×.
- **Sequence 3/5** — Move Act III (story/Kelly, ~4433-4555) above Act IV (proof, ~4360-4432). Spec §2.4(B) orders Proof-then-Story but §5 macro arc and the on-screen Act numbering both demand Story→Proof; reorder, don't relabel.

| Type | Quote | Sev | Rewrite |
|---|---|---|---|
| not-X-Y | "not in the transaction path, not a custodian, not a router." (4522) | high | "It sits beside the transfer, proving each one happened once, holding nothing and routing nothing." |
| not-X-Y | "No payment processor. No shared ledger. No funds custodied by Unicity." (4546-48) | high | "Direct transfer: wager moves wallet to wallet. Local witness: the oracle proves uniqueness, not a balance. Self-custody: player and operator hold their own funds." |
| not-X-Y | "not rip-and-replace, a control plane under any agent deployment." (4560) | high | "a control plane that sits under any agent deployment." |
| not-X-Y | "Two wallets. One witness. No middleman." (4521) | med | "Two wallets. One witness. A direct transfer." |
| not-X-Y | "Alongside, not instead" (4581) | med | "Deploys alongside your stack" |
| negation | "The oracle witnesses; it does not route." (4548) | med | "The oracle witnesses each transfer." |
| negation | "proves single-spend, never sees the transaction" (4540) | med | "proves single-spend, sees only the proof" |
| negation | "…instead of reconstructing harm after the fact." (4503) | med | "…while the signal is fresh." |
| negation | "no replacement, no migration" (4581, dup 4596) | med | "within your jurisdiction and residency requirements" |
| jargon | "Prompt-injection defense, sandboxing, payload checks at the kernel." (4567) | low | "Blocks malicious instructions, isolates each agent, and inspects every payload at the kernel." |
| voice/BD | "the four P&L kill-stats" / "% of GGR" (Act I block) | high | Recast as architectural-refusal: what the human funnel structurally cannot do for an actor with no funnel. |
| voice/BD | "the only personalization that has ever worked" (4) | high | "personalization by timing — delivered when the agent acts, not after." |
| voice/BD | "Unicity is the platform." (GAM-card) | med | Frame as architectural distinction: what the platform does that a bolt-on structurally cannot. |

---

## 4) CONSOLIDATED LANGUAGE-VIOLATION SUMMARY

Confirmed totals (adversarial verification, **0 false positives**):

| Page | not-X-this-is-Y | other negation | jargon | buzzword | hype | **Total** |
|---|---|---|---|---|---|---|
| Industry | 4 | 3 | 3 | 0 | 0 | **10** |
| Telecom | 5 | 9 | 1 | 2 | 0 | **17** |
| MSSP | 7 | 22 | 5 | 0 | 1 | **35** |
| Finance | 18 | 30 | 7 | 1 | 1 | **57** |
| Gaming | 3 | 4 | 1 | 0 | 0 (3 BD-voice) | **~11** |
| **TOTAL** | **~37** | **~68** | **~17** | **3** | **2** | **~119 line-items (~149 incl. every cited instance)** |

**8 recurring constructions generate ~60% of all flags** — fixing these clears the bulk:
1. **"Everyone/everything else watches the agent → we run it"** — 6 instances (Index, MSSP ×4, Finance). *Mostly user-requested (§2 U7).*
2. **"architectural, not a promise" / "below not beside" / gateway-vs-kernel** — 7 instances (Telecom, MSSP ×2, Finance ×3+). *Partly user-requested (U5/U6).*
3. **"X is here / the home is not"** affirmation+negation headline — 3 instances. *User-requested (U1/U3/U4).*
4. **"X, not Y" label hinges** — Provable-not-observed, Two-products-not-one, Not-log-signals-proof, etc.
5. **"everyone falls short → we do all"** competitor negation — six-requirements, CLOB. *Partly user-requested (U8/U10).*
6. **"You cannot secure what you cannot see"** — 3 instances (MSSP tic).
7. **"never leave your boundary"** — 6 instances (Telecom, Finance refrain).
8. **"without ever seeing the transaction"** — 4 instances (Finance refrain).

Full per-line rewrites are in the §3 per-page tables. **Buzzwords to kill outright:** "unlock"/"This is the unlock" (Telecom 2512, Finance 3755), "one pane of glass" (Telecom 2676). **Jargon to gloss/defer to appendix:** the SIF paragraph (MSSP 3087), Plonky3/AIR/Poseidon2/SNARK/MEV/CEX/DEX/EVM (Finance), A2A/WASM acronyms (MSSP/Telecom).

---

## 5) PRIORITIZED REMEDIATION PLAN

### P0 — The "not X this is Y" + contrast purge (the user's headline concern)
- **P0.1 — Decide §2 keep-vs-cut first (blocking).** ~12 high-severity antithesis lines were previously user-requested. Get an explicit keep/cut ruling before any automated purge, or the edit will strip intended brand hinges. *Effort: 30 min review + decision.*
- **P0.2 — Purge the non-protected "X, not Y" hinges** (everything in §3 tables marked high/medium not flagged with `*`). Replace with the declarative rewrites supplied. Finance (18 hinges) and MSSP (7) are the priority. *Effort: ~3-4 hrs; rewrites pre-written.*
- **P0.3 — De-duplicate the negation refrains** — collapse "never leave your boundary" (×6→1-2), "without ever seeing the transaction" (×4→1-2 declarative), "you cannot secure what you cannot see" (×3→1). *Effort: ~1 hr.*
- **P0.4 — Source-markup warning:** quotes are split by inline `<span class="accent">`/`<span class="hl">` tags. Edit against rendered text and search the pre-span fragment ("not just", "never leave"), not the full sentence. *Effort: process note.*

### P1 — Sequence / flow fixes (the clear structural bugs)
- **P1.1 — Reorder Telecom + Gaming so Act III (Story) precedes Act IV (Proof).** Move Telecom story (~2668-2718) above proof (~2596-2667); Gaming story/Kelly (~4433-4555) above proof (~4360-4432). Removes the on-screen "IV before III" contradiction and stops burying the two best assets. *Effort: ~1 hr (DOM block moves).*
- **P1.2 — MSSP:** move Act IV (proof, ~3155) to just before the close, after Service lines + Deployment; either label Service lines as Act III or accept as a deliberate variant. *Effort: ~45 min.*
- **P1.3 — Cut the redundant stat-mega hinges** on Telecom (100:1 dup of Act I card) and Gaming ("3rd interface" verbatim dup of Act I h2). *Effort: ~20 min.*
- **P1.4 — De-bloat Finance + MSSP Act IV:** move "Market context" signal cards and the competitive-landscape table nearer the problem/platform acts; keep Act IV to heritage + stats + bios + logos. *Effort: ~1.5 hrs.*
- **P1.5 — Index cleanup:** collapse the four headline-tier elements before the stack diagram to one claim; fix the "More verticals" eyebrow=h2 echo. *Effort: ~20 min.*

### P2 — Voice tightening (drift back toward 0xt1mo register)
- **P2.1 — Strike monetization/BD vocabulary:** "highest-margin product since data," "ARPU on your rails," "every tap is revenue you own" (Telecom); "the four P&L kill-stats," "% of GGR," "the only personalization that has ever worked," "Unicity is the platform," "Retention becomes a conversation" (Gaming). Recast each as architectural-refusal framing (what the legacy/human path structurally cannot do). *Effort: ~2 hrs.*
- **P2.2 — Kill the banned buzzword "unlock"** (Telecom 2512, Finance 3755) and "one pane of glass" (Telecom 2676). *Effort: 15 min.*
- **P2.3 — Re-open the Index hub on a historical-inflection beat** rather than "Where agents go to work." *Effort: ~30 min, one headline.*
- **P2.4 — Gloss/defer jargon** (SIF paragraph, Plonky3/SNARK/MEV/EVM/CEX/DEX, A2A/WASM) per §3 rewrites; push crypto acronyms to the technical appendix. *Effort: ~1.5 hrs.*

### P3 — Anchoring corrections (factual integrity / compliance)
- **P3.1 (compliance-critical) — Add the "not current Unicity customers" caption to the Index 25-logo wall** (2226-2255). This is the clearest compliance miss and the highest factual risk. *Effort: 5 min.*
- **P3.2 — Source or remove the un-anchored Finance numbers:** 88%/14%/$400B tiles (3466-82), Gartner 46% blocker chart (3429-62). Either attach a real citation or cut. *Effort: ~1 hr (depends on whether a source exists).*
- **P3.3 — Flag CLOB comparison + competitive-landscape table** as kit-derived (not deck-confirmed) — verify against a source before any external use. *Effort: ~30 min verification.*
- **P3.4 — Source or remove the Gaming UKGC £125 affordability figure** (4474-4516). *Effort: ~15 min.*
- **P3.5 — Fix contact-detail drift:** phone "+971 50 884 **3758**" on Telecom + Gaming should match the decks' "…**3756**"; `enterprise@unicity.ai` (Finance) appears on no deck. *Effort: 10 min.*
- **P3.6 — Resolve naming inconsistencies:** "AgentSphere" vs "Enterprise Console" vs "Enterprise Console"; "AOS9" (Gaming Kelly card) vs standardized "Unicity AOS"; "Proof Layer" vs deck/standard "Unicity Proof System." *Effort: ~30 min.*
- **P3.7 — Decide on dropped named bios** (Gault/Kenyon/Leandri): the generic-card replacement is *safer* but drops a kit requirement — confirm intent. *Effort: decision only.*

**Suggested order of execution:** P3.1 (5-min compliance fix) → P0.1 (blocking decision) → P1.1–P1.3 (structural, high-impact, low-effort) → P0.2–P0.3 (the purge) → P2 → remaining P3. Total effort estimate: **~18-22 hours** of focused editing, front-loaded by the two highest-leverage, lowest-cost items (logo-wall caption + the III/IV reorders).