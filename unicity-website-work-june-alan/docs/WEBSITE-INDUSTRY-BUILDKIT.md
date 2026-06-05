# Unicity Website — Industry Section Build Kit (v2.1)

*Four publish-ready Industry pages — Telecom, MSSP, Finance, Gaming — written in one continuous authorial voice (0xt1mo's), assembled against five approved rulings. Where this kit and the live DeFi/Devs pages disagree, the live pages win; flag the delta in Open Questions, do not invent a pattern.*

---

## 1. What changed in v2

v2 closes out the content rulings the v1 kit left open. Every page was rebuilt from the approved page specs against the five rulings. Here is how each landed across all four pages.

**Ruling 1 — No placeholders.** Every proof point on every page is a real item from an approved deck (Telecom, Enterprise, CyberKnight/MSSP, iGaming, DeFi) or the Team Factsheet. The v1 finance `[PLACEHOLDER — DO NOT SHIP]` result card is deleted. Finance has no dedicated deck, so finance-relevant proof was pulled from across the approved decks: the Enterprise deck's track-record footer stats (15+ years in production · 25+ sovereign-grade institutions · 4 continents · 0 cryptographic breaches), its compliance/audit/risk substance (tamper-evident audit, Semantic Intercept Fabric, kernel enforcement, cost circuit breakers), and the finance-sector track record — Mike Gault ex-MD Barclays Capital, plus BIS / SEB / KPMG / EY / Willis Towers Watson as KSI-era deployments. Each is tagged to its source in the per-page `proofProvenance`.

**Ruling 2 — Heritage = KSI blockchain, not Guardtime.** This is the largest structural change in v2. Every Proof section now *leads with the technology*: "Built by the team that built the KSI blockchain — at nation-state scale," "the team that ran the KSI blockchain," "the team that built and ran the KSI blockchain." Guardtime the company appears only inside Mike Gault's bio as the entity he built and exited (ADX:IHC) that *operated* KSI — never as the headline brand, and on the Finance page it is named only in the heritage line, not centered. The named orgs (BIS, SEB, KPMG, EY, Willis Towers Watson; NATO, DARPA, Lockheed, Boeing, ESA, Maersk, Verizon) appear strictly under "Where KSI ran / where the KSI blockchain ran," each carrying an explicit non-customer disclaimer ("the team's track record running KSI for these organizations — not current Unicity customers"). Verizon is fenced as KSI/team past work even on Telecom, never an implied current telco customer.

**Ruling 3 — Market context + Unicity take.** Every third-party development is presented as *signal about the space*, never Unicity proof or endorsement, and each is paired with an explicit Unicity position. NVIDIA 100:1 → "Signal about the space, not an endorsement of us — and the reason the agent layer is worth owning." Gartner 10,000x/87% → "the governance gap is exactly what the AOS enforcement kernel closes." Mastercard Agent Pay / Visa Intelligent Commerce → "the rail still has no identity an examiner can attribute… no partnership implied." Check Point $300M Lakera → "a bolt-on watches the agent from outside and infers after the fact… the bolt-on vs. kernel-level problem the deal leaves unsolved." Each item carries "no partnership implied" or equivalent. The v1 implied-endorsement Mastercard/Santander "first live agent-initiated payment" proof claim is reframed as external signal with no Unicity link asserted.

**Ruling 4 — Accurate bios & naming.** All bios match the Team Factsheet exactly. The v1 "CPTO" label for Tony Kenyon is corrected to the canonical **CTO** on every page. Canonical product naming is held *within each page* and not mixed: the Telecom/Gaming family uses the deck's own runtime name, MSSP uses the CyberKnight deck's "Unicity AOS," Finance uses the Enterprise deck's "Unicity AOS." (The cross-page runtime-name reconciliation against AstridOS/AgentStack is the single naming item still escalated — see Open Questions.) The five PhD cryptographers (Buldas, Truu, Laanoja, Tan, Draheim) are credited as KSI architects where the deck supports it.

**Ruling 5 — 0xt1mo's voice.** Every page opens on a historical-inflection or market-shift fact, not a pain point ("Agentic is the fourth rebuild of compute," "Computing is being rebuilt a fourth time," "Finance has two kinds of actor. The agent is a third," "Every twenty years the interface changes"). Category-creation-by-negation throughout ("The agent doesn't have a funnel," "Everyone else watches the agent. We run it"). Competitors reframed as architectural limit, not performance gap ("a gateway sits beside the agent and reads its exhaust; the AOS kernel sits below the agent"). Em-dashes for unpacking, no semicolon-stacking in body prose, no exclamation marks, no hype adjectives, one capability = one specific claim. The actor is always "the agent," never "software." Every page closes by naming the endgame, not the product. The four pages read as one voice with the DeFi/Devs surfaces.

---

## 1a. What changed in v2.1

A short adversarial-review pass on top of v2; copy, structure, and voice are otherwise untouched.

- **Telecom — Verizon fenced as telecom-sector heritage.** The Proof "where KSI ran" row is split into two captioned heritage groups — defense & sovereign, and a separate "Telecom-sector track record: Verizon" — so Verizon no longer reads as a current telco customer.
- **All pages — canonical runtime/product naming.** Standardized to one set sitewide: runtime/kernel → "Unicity AOS" (was AstridOS / AOS9 / QVAC), proof system → "Unicity Proof System" (was Proof Layer), settlement → "Unicity Blockchain" (Unicity L1 only as a first-mention parenthetical).
- **Finance — Eric Leandri bio added.** The Proof section now carries his entry (Chairman — CEO, Aleria, UAE Sovereign AI), matching the other three pages.
- **Finance — voice tweak.** "In finance, that is not a line item — that is the gate." → "In finance, you cannot move forward without clearing it."

---

## 2. The shared 8-block page template

Every Industry page is built on this fixed skeleton. Block roles, card counts, and length budgets are constant; only the copy and the asset set change per vertical.

| # | Block (role) | Purpose | Components | Length budget |
|---|---|---|---|---|
| 0 | **Page header / breadcrumb** | Site nav + eyebrow | Shared nav + `UnicityLogo.svg`; "UNICITY · INDUSTRY · {Vertical}" eyebrow | eyebrow only |
| 1 | **Hero** | Category claim + one-line stakes + primary CTA | Headline ≤ 12 words · subhead ≤ 55 words · one CTA | headline + subhead + CTA |
| 2 | **Problem** | The historical/structural gap | Lead + 3–4 insight cards | lead ≤ 60 words; 4 cards |
| 3 | **Solution** | The one-stack answer | Lead + 3–4 layer/outcome cards + stack diagram | lead ≤ 70 words; 3–4 cards |
| 4 | **Capabilities** | What it enforces, one claim each | Lead + 6-card grid (2×3) | one capability = one claim |
| 5 | **Proof** | KSI-heritage technology lineage + bios + stat strip + "where KSI ran" row | Lead ≤ 60 words + stat strip (3–4) + heritage row w/ non-customer caption | lead ≤ 60 words |
| 6 | **Use cases** | Where it goes to work | Lead + 4 cards (one may be market-signal) | 4 cards |
| 7 | **Closing CTA** | Category-stakes line + booking + contact | Full-bleed band (`close-splash.png`) + one CTA + contact line | ≤ 45 words + contact |

Notes: one primary CTA per page, repeated in Hero and Close; secondary CTAs are text-only. The Proof "where KSI ran" row uses the same component on every page — only the logo set changes (Ruling 2 caption is mandatory). Capability grid is always 2×3, six cards.

---

## 3. The four pages (ready-to-use copy)

---

### PAGE 1 — TELECOM

`UNICITY · INDUSTRY · TELECOM` — *Telecom operators and service providers*

# The secure agentic compute platform for telecom.

Every subscriber is about to get a personal AI agent. The only question is who runs it.

Unicity is the secure, efficient, and provable compute platform built for agents in telecom networks — running on your infrastructure, under your identity and billing. Own that layer and it becomes your highest-margin product since data.

**[ Book a live demo → ]** *See an agent book, pay, and settle end-to-end — live, on your own infrastructure.*

---

## Agentic is the fourth rebuild of compute. It has no telco home yet.

Mainframe. Client-server. Cloud. Mobile. You shipped Mobile — telecom's last platform win.

Agentic is next, and it cannot be bolted onto human-centric architecture. Agents need identity, execution, governance, and payments rebuilt for machines with no human in the loop. Today that growth is heading to the hyperscaler — ungoverned, off your network, on someone else's rails.

The shift is already sized, and it is landing on subscriber lines.

- **Explosive growth** — "By 2028, the average Fortune 500 will run 150,000+ AI agents, up from fewer than 15 today." — Max Goss, Gartner, April 2026. That is 10,000x growth in three years.
- **Almost no controls** — "Only 13% have adequate governance." — Max Goss, Gartner, April 2026. The other 87% run agents they cannot see or audit.
- **Value at the edge** — "Generative and agentic AI could add up to $4.4 trillion in annual productivity value across the global economy — much of it consumed at the edge." — McKinsey Global Institute, 2025. Much of it lands on subscriber lines.

---

## One protocol stack delivers everything autonomy demands.

Unicity is a three-layer platform. Bring any agent framework, run it on Unicity AOS — the multi-tenant secure OS — and settle on the Unicity Blockchain. Every prompt, tool call, and decision passes through the AOS enforcement kernel: in-path, unbypassable, and inside your infrastructure. Below it, the chain tokenizes execution state for verifiable, tamper-evident proof.

Every autonomy requirement, delivered as one stack.

- **Identity** — Cryptographic, revocable agent identity bound to a human principal. Not a static API key.
- **Execution** — Agents run in sandboxed WASM capsules with safety policy, goal focus, and budget enforcement applied in-path.
- **Governance** — A tamper-evident audit trail, compliance logs, and a live Agent Registry mapping every agent and its scopes.
- **Payments** — On-chain settlement with agent-to-agent payments and tokenized value transfer — private, compliant.

*Application layer (any framework, any model: LangChain · OpenClaw · AutoGen · custom) → Unicity AOS (executes the agents; capsules provide multi-tenancy and isolation) → Unicity Blockchain (state tokenization · verifiable execution · cryptographic identity · value transfer). ✓ Identity ✓ Execution ✓ Governance ✓ Payments.*

---

## Built to run agents at scale — securely, efficiently, provably.

Unicity is the first secure, efficient, and provable agent compute platform — built for telecom from day one. Three things make it different, and three more make it operator-native.

- **Secure by architecture** — The agent runs inside your kernel, on your infrastructure. Every action is intercepted in-path — security cannot be bypassed, and data never leaves your network. *(AOS enforcement kernel · in-path, unbypassable.)*
- **A price point that works at scale** — Intelligent routing sends each task to the cheapest model that can handle it; multi-tenancy packs many agents onto the same hardware. Together they bring the cost per agent low enough to offer one to every subscriber — and still hold a margin when you resell.
- **Provable, not just observed** — Every agent action lands in a tamper-evident record. You don't infer what an agent did from scattered logs — you have one definitive, audit-ready answer for regulators and customers.
- **Operator-native** — Identity, billing, and location are built in. No card setup, no third-party network — every settled action runs through your identity and your billing.
- **Sovereign by default** — Unicity AOS runs on the user's device and in your network. The agent layer and the user data stay on your network — not a hyperscaler's.
- **Pluggable kernel** — Swap a capsule to change the LLM, the agentic loop, or the deployment model — local, air-gapped, multi-provider — without touching a line of core code.

---

## Built by the team that built the KSI blockchain — at nation-state scale.

Unicity Labs is PhDs in machine learning and cryptography with fifteen years building nation-state-grade security infrastructure. The technical lineage is the KSI blockchain — the keyless-signature infrastructure this team architected and ran for government and enterprise security, deployed for over a decade across DARPA, NATO, Lockheed, Verizon, and Maersk. Now they are applying that to the rails your agents transact on.

The market signal is independent of us. The track record is ours.

- **Mike Gault — CEO** — PhD Electrical Engineering · built and exited Guardtime (ADX:IHC), the company that operated KSI · ex-MD, Barclays Capital.
- **Tony Kenyon — CTO** — PhD Machine Learning · 25 years shipping enterprise AI and infrastructure · Principal Architect: BT, Nokia, A10.
- **Eric Leandri — Chairman** — CEO, Aleria (UAE Sovereign AI).

*Where we operate: Zug (47.17°N · 8.52°E) · Tallinn (59.44°N · 24.75°E) · Abu Dhabi (24.47°N · 54.37°E).*

What is happening, and where we stand:

- **100:1** — agents to humans at scale. "In ten years, we will have 75,000 employees working with 7.5 million agents." — Jensen Huang, NVIDIA GTC, March 2026. Signal about the space, not an endorsement of us — and the reason the agent layer is worth owning.
- **10,000x · 87% ungoverned** — agent growth across the Fortune 500 in three years, the overwhelming majority without adequate governance. — Max Goss, Gartner, April 2026. The governance gap is exactly what the AOS enforcement kernel closes.
- **$4.4T at the edge** — annual productivity value from generative and agentic AI, much of it consumed at the edge. — McKinsey Global Institute, 2025. On subscriber lines, that value settles on whoever owns the agent layer.

**Where KSI ran — cryptographic infrastructure trusted by:**

**Defense & sovereign track record:** NATO · DARPA · Lockheed Martin · Bank for International Settlements · Maersk · European Space Agency. *(The team's prior work running the KSI blockchain for these organizations — not current Unicity customers.)*

**Telecom-sector track record:** Verizon. *(The team's prior work running the KSI blockchain for this organization — not a current Unicity customer.)*

---

## Concierge is just one offer.

Launch a subscriber service, resell to enterprises, and govern every workload from one live console — AgentSphere, one pane of glass across every agent workload, internal or resold.

- **A concierge for every SIM** — Each subscriber gets a personal agent that books, pays, and handles their day. Each settled action runs through your identity and billing — no card setup, no friction. *(Concierge app, shown on three handsets: the agent asks to place calls on the subscriber's behalf, requests permission, and contacts saved contacts to complete a booking.)*
- **Revenue you own** — Top-ups, gifts, groceries, bookings — every settled action is ARPU on your rails. Every tap is revenue you own, and the data stays on your network.
- **Agent Cloud for enterprises** — Resell managed, sovereign agent hosting to enterprise customers — deployed in-country, on your infrastructure. Ships as your own infrastructure or white-labeled.
- **One console for everything** — Govern every workload across five core use cases — **Governance** (agent identity, registry, compliance and audit), **Cost Management** (intelligent routing, agent-sprawl control), **Protect** (prompt-injection defense, data loss prevention), **Transact** (A2A payments — private, compliant settlement), and **Deploy** (sovereign hosting, in-country) — from AgentSphere.

*Deployment: runs inside your infrastructure. Unicity AOS on the user's device and in your network. Agent activity and user data never leave your boundary — A2A networking and payments bridge to the external world through a single gate.*

---

## Own the agent layer before someone else does.

Every subscriber gets an agent. The operator who runs it owns the customer moment and the highest-margin product layer since data.

See an agent book, pay, and settle end-to-end — live, on your own infrastructure.

**[ Book a live demo → ]**
info@unicity.ai · unicity.ai · +971 50 884 3758

---

### PAGE 2 — MSSP (Managed Security Service Providers) · Unicity × CyberKnight

`UNICITY × CYBERKNIGHT · INDUSTRY · MANAGED SECURITY SERVICE PROVIDERS`

# The kernel your clients' agents run on.

**Unicity × CyberKnight.** Every other tool watches the agent and infers from logs. Unicity runs the agent on a cryptographically enforced kernel and proves what it did. For an MSSP, that is a service line: secure what your clients deploy at the runtime level, prove it, and bill it.

**[ Book a live demo ]** *See an agent execute under policy, with every decision verified and audit-logged — end to end.* · Talk to the team — info@unicity.ai · unicity.ai

---

## Computing is being rebuilt a fourth time. The controls are not.

Mainframe, client-server, cloud, mobile — and now agentic. Four primitives have to be rebuilt for an actor that runs without a human in the loop: identity, execution, governance, payments. Your clients are deploying that actor faster than anyone can govern it.

Gartner projects the average Fortune 500 will run 150,000+ AI agents by 2028, up from fewer than 15 today, with only 13% adequately governed (Max Goss, Gartner, April 2026). Every agent is a new identity, a new egress path, a new way to leak data or burn budget. The tools your clients bought watch and infer after the fact — by then the prompt has already left the perimeter.

- **10,000x growth, 87% ungoverned** — fewer than 15 agents per Fortune 500 today; 150,000+ by 2028; only 13% adequately governed (Gartner, April 2026). The gap is the market.
- **Static keys are not identity** — agents authenticate with shared API keys that cannot be scoped, attributed, or revoked. You cannot secure what you cannot see.
- **Detection arrives after the action** — observability and gateways flag exfiltration and runaway compute after it happens, not before the action executes. The watcher is always one step late.

---

## Everyone else watches the agent. We run it and prove its execution.

Unicity is a secure compute platform for AI, delivered as one protocol stack. Agents run inside Unicity AOS — a user-space microkernel where every prompt, tool call, and decision passes through enforcement before it executes. The kernel stays minimal; everything else lives in user-space. Below it, the Unicity Proof System tokenizes execution state into a verifiable, tamper-evident trace.

The difference is architectural, not a performance gap — a gateway sits beside the agent and reads its exhaust; the AOS kernel sits below the agent, and the agent cannot bypass it. For an MSSP that means runtime security delivered as a service: bring any client's framework, enforce policy in-path, hand back cryptographic evidence.

- **Application layer — bring your client's agent** — any framework, any model. LangChain, AutoGen, OpenClaw, Claude Code, custom. No rip-and-replace; the agent runs as-is.
- **Unicity AOS — the runtime kernel** — executes the agent in an isolated WASM capsule. Multi-tenant by design. Every prompt, tool call, and decision passes through policy before it runs — proactive safety, goal focus, budget enforcement, with a tokenized execution trace for analysis and compliance.
- **Unicity Proof System — the evidence** — state tokenization, cryptographic identity, verifiable execution, value transfer. Not log signals — proof.

---

## Six runtime controls you resell as a managed service.

Each is enforced at the kernel, below the agent, not beside it. One capability, one specific claim. This is the service catalog — every line maps to a control your clients are already being asked about.

- **The Semantic Firewall** — the Semantic Intercept Fabric (SIF) goes beyond action-based policy to content-based controls with domain-specific ontologies, a Rust implementation with optimized search and rule algorithms. Intent is classified inline and enforced before the action executes: sub-20ms overhead, in-path, not after the fact. A three-stage pipeline — deterministic Rule Engine, ONNX-compatible ML Detection (CISOs deploy custom models), and a DLP Scanner using Named Entity Recognition for secrets, IP, and PII.
- **Cryptographic agent identity** — every agent is assigned a revocable identity bound to a human principal. Static API keys go away. Scopes are explicit; rogue agents that drift from baseline get quarantined.
- **Data loss prevention** — AOS sits directly in the transport flow. Inline redaction of PII, credentials, and secrets in the prompt before inference; indirect prompt-injection exfiltration is blocked before any payload leaves the perimeter. Cryptographic, tamper-evident logs of every byte an agent touched.
- **Runaway compute control** — a poorly engineered agent in a hallucination cycle can burn thousands in token cost. Hard rate limiting and token quotas are enforced at the kernel; execution is blocked the instant a budget is hit, before the cost is incurred. Per-agent, per-workflow ROI attribution.
- **Intelligent routing** — every request is scored before it runs (complexity, cost, latency, security clearance) and routed to the right model or capsule. Sensitive context only ever reaches a target authorised to receive it, and the routing choice is itself an inspected, recorded event, explainable after the fact. Traffic is matched to capability without ever escaping the security boundary.
- **Agent inventory & governance** — a global map of every active agent and its authorized scopes across the client estate. Unicity is the mandatory registration and monitoring layer for all machine identity. You cannot secure what you cannot see.

---

## Built by the team that ran the KSI blockchain at nation-state scale.

Unicity Labs is a team of PhDs in machine learning and cryptography. The lineage is the KSI (keyless-signature) blockchain — cryptographic signing infrastructure this team architected and operated for fifteen years, deployed across defense, aerospace, and critical infrastructure. That same nation-state-grade cryptographic engineering is now applied to the rail your clients' agents transact on.

This platform overview was prepared for CyberKnight technical review; CyberKnight is the regional MSSP channel partner. Three offices: Zug, Tallinn, Abu Dhabi.

- **Sub-20ms enforcement** — intent is classified inline and policy is enforced in-path, before the action runs. A capability claim, measured.
- **Proof, not inference** — everyone else watches the agent. Unicity runs it and proves its execution: verifiable execution and cryptographic guarantees of security, not behavioral inference, not log signals.
- **The founders** — Mike Gault (CEO): PhD Electrical Engineering; built and exited Guardtime (ADX:IHC), the company that operated the KSI blockchain; ex-MD, Barclays Capital. Tony Kenyon (CTO): PhD Machine Learning; 25 years shipping enterprise AI and infrastructure; principal architect at BT, Nokia, A10. Five PhD cryptographers — Ahto Buldas, Ahto Truu, Risto Laanoja, Jian Tan, Dirk Draheim — architected the keyless-signature infrastructure.
- **Where the KSI blockchain ran** — DARPA, NATO, Lockheed Martin, Boeing, BIS, Maersk, ESA. Built by the team behind these deployments — the technology lineage, not MSSP customer references. MSSP case studies on request.

---

## Service lines you can stand up on day one.

Each maps to a control your clients are already being asked about — and each is something an MSSP charges for, not a feature you absorb.

- **Managed DLP for agentic workloads** — sit in the transport flow and inspect every LLM payload before it leaves the client perimeter. Block exfiltration, redact secrets inline, return tamper-evident compliance logs your clients hand to their auditors.
- **Shadow-AI discovery & containment** — make Unicity the mandatory registration layer for client machine identity. Surface every unsanctioned agent, scope it, and instantly quarantine drift. You cannot secure what you cannot see.
- **Cost governance as a service** — cap runaway compute with kernel-level budgets and quotas. Give clients per-agent and per-workflow attribution and a defensible story on agent-sprawl spend.
- **Bring-your-own-agent enablement** — let clients run any framework with security and strict cost control built in. Onboard existing agents without rebuilding them — the security lives below the kernel, so it does not care which agent runs on top.

---

## See an agent run under policy, end to end.

Book a live demo and watch an agent execute under enforcement, with every decision verified and audit-logged: verifiable execution, the Semantic Intercept Fabric, and the operator console in one session.

The endgame for an MSSP is a runtime security line that watchers cannot sell — because they never run the agent. Unicity does.

**[ Book a live demo ]**
info@unicity.ai · unicity.ai · +971 50 884 3756
Unicity Labs — 502, 5th Floor, Al Montazah Tower B, Khalidiyah Area, Abu Dhabi, UAE

---

### PAGE 3 — FINANCE & FINANCIAL SERVICES · Banks · Payments · Capital markets

`UNICITY · INDUSTRY · FINANCE & FINANCIAL SERVICES`

# Agentic AI your auditors can read, not just trust.

Unicity is the security and settlement layer beneath every financial-services agent. Cryptographic identity, runtime policy enforcement, and a tamper-evident record — so a bank, a payment network, or a capital-markets desk can put autonomous AI into production without losing control of risk, compliance, or money movement.

**[ Book a live demo → ]** *See an agent acting inside your policy — intercepted, settled, and proven. Twenty minutes. One working flow. Your risk team can decide from there.*

---

## Finance has two kinds of actor. The agent is a third.

Every control a regulated firm runs was built for one of two actors: a person, who can be denied access, and a binary, which can be patched. An agent is neither. It authenticates with valid credentials, decides on its own, calls APIs, touches data, moves value — and shifts behaviour between audits. The controls do not see the action until after it has run. This is the gate before production, not a tuning problem after it.

- **Identity gap** — An API key is not an identity. A regulated firm cannot attribute an autonomous action to an accountable, revocable actor — so it cannot answer for it.
- **Authorization gap** — The agent passes authentication, then does what no one scoped. The action executes before any control is in its path.
- **No stable baseline** — Behaviour drifts between audits. There is no fixed posture to monitor against, so detection arrives after the fact.
- **Governance is the whole gate** — Gartner attributes 46% of stalled agentic-AI projects to governance and security (Gartner, 2026). In finance, you cannot move forward without clearing it. Unicity is built to clear it.

---

## One protocol stack — before the agent acts, and after.

No agent should move money, execute a contract, or touch sensitive data unless the firm can prove who acted, what they were allowed to do, and what they did. That is identity, enforcement, and audit — before the fact, not after. No legacy chain, security gateway, or agent framework delivers all three in one runtime. Unicity does, as one stack that sits underneath the frameworks and models your teams already run. You do not replace your AI stack. The agent runs as-is; identity, enforcement, and a record are added beneath it.

- **Application layer — your agent** — Bring your own agent: any framework, any model. Claude Code, LangChain, AutoGen, custom. No rip-and-replace.
- **Unicity AOS — the enforcement kernel** — Executes every agent in an isolated capsule. Every prompt, tool call, and decision passes through policy, budget, and a tokenized trace — in-path, unbypassable.
- **Unicity Proof System — the record** — State tokenization, cryptographic identity, verifiable execution, and value transfer. The chain settles and attests; it never sees the transaction.

---

## Controls a CISO can underwrite and an examiner can read.

The platform turns autonomous behaviour into something a financial institution can govern: enforcement below the model, content-aware inspection, and a cryptographic record of every action. One capability, one specific guarantee — no inference from scattered logs.

- **Cryptographic identity, bound to a principal** — Every agent gets a revocable identity bound to a human principal. Static API keys go away. Scopes are explicit; rogue agents that drift from baseline get quarantined.
- **Kernel-level enforcement** — A user-space microkernel runs every tool in a sandbox. Interception, budgets, and audit happen below the agent, not beside it. Tools cannot bypass the kernel — that is the point.
- **Semantic Intercept Fabric** — A content-aware firewall, not just action-based. Prompt injection, indirect injection, PII and secrets exfiltration: a Rust pipeline of rule engine, ML detection, and DLP scanning rules allow / block / flag at low latency.
- **Tamper-evident audit** — Every model output, tool call, and decision lands in one signed, definitive record. Hand your second line and your examiners evidence, not log assertions stitched together after an incident.
- **Cost as a circuit breaker** — Hard rate limiting and token quotas enforced at the kernel. A hallucinating agent that would burn thousands is blocked the instant a budget is reached — before the cost is incurred — with per-workflow attribution.
- **Intelligent routing, recorded** — Every request is scored on complexity, cost, latency, and clearance, then routed to the right model. Sensitive context only reaches a target cleared to receive it, and the routing choice is itself an inspected, explainable event.

---

## The team that built the KSI blockchain — now beneath autonomous AI.

The Unicity team built and ran a keyless-signature (KSI) blockchain at nation-state scale: cryptographic signing infrastructure deployed in production for fifteen years, then applied to autonomous AI. The same lineage now sits under the agent.

CEO **Mike Gault** holds a PhD in Electrical Engineering and is a former Managing Director at Barclays Capital. CTO **Tony Kenyon** holds a PhD in Machine Learning, with 25 years shipping enterprise AI and infrastructure as a principal architect at BT, Nokia, and A10. Chairman **Eric Leandri** is CEO of Aleria (UAE Sovereign AI). Five PhD cryptographers — Ahto Buldas, Ahto Truu, Risto Laanoja, Jian Tan, Dirk Draheim — architected the keyless-signature work at scale.

The codebase is open source: the layer your risk team has to trust is the layer your risk team can read.

- **15+ years in production** — KSI cryptographic infrastructure, 2010–2024, running continuously at sovereign grade.
- **25+ sovereign-grade institutions** — Where the KSI blockchain ran — across defence, sovereign government, finance, and supply chain.
- **4 continents deployed** — The same cryptographic infrastructure, in production across four continents.
- **0 cryptographic breaches** — Across fifteen years of KSI deployment. That is the track record now applied to the agent.

*Where the KSI blockchain ran in banking and insurance: Bank for International Settlements · SEB · KPMG · EY · Willis Towers Watson — the team's prior-work deployments, not Unicity customers.*

---

## What is happening in the space — and where Unicity stands.

Three developments are reshaping machine finance. None is a Unicity endorsement or partnership. Each is signal about where the category is going, and each has a Unicity position.

- **Card networks are wiring agents into payments.** Mastercard Agent Pay and Visa Intelligent Commerce are bringing agent-initiated payments to cardholders. *Signal:* money movement by agents is becoming real infrastructure. *Unicity's position:* the rail still has no identity an examiner can attribute or a control that runs in-path before the action. That is the layer we build, under any payment scheme — no partnership implied.
- **$300M says agent security is a market.** Check Point paid $300M for Lakera, confirming demand for agent security. *Signal:* enterprises are buying. *Unicity's position:* a bolt-on watches the agent from outside and infers after the fact. Unicity runs the agent inside the kernel and enforces before the action — the bolt-on vs. kernel-level problem the deal leaves unsolved.
- **The scale is not speculative.** NVIDIA's Jensen Huang projects 7.5M agents to 75,000 employees within a decade; McKinsey Global Institute puts generative and agentic AI at up to $4.4T in annual value (2025). *Signal:* a 100:1 machine-to-human economy is coming. *Unicity's position:* at that ratio, a firm cannot answer for what its agents did unless every action was identified, enforced, and recorded as it happened.

---

## Where it goes to work in financial services.

The same runtime and the same guarantees apply across the front, middle, and back office — and across deployment topologies, from a managed cloud to a fully air-gapped, in-country install. Your models on your hardware; the AOS kernel in your network; agent activity and data never leave your boundary.

- **Payments and money movement** — Settlement at the agent edge on the Unicity Blockchain: the chain proves single-spend without ever seeing the transaction. Per-transaction, no shared ledger, no gas.
- **Fraud and risk operations** — The Semantic Intercept Fabric flags injection, exfiltration, and anomalous behaviour inline and rules allow / block / flag — with one signed record behind every decision.
- **Audit, compliance, and reporting** — Tamper-evident audit turns agent activity into examiner-ready evidence. Governance is enforced at runtime and provable after the fact — one definitive answer, not scattered logs.
- **Cross-institution coordination** — Agents reach counterparties at other firms through gateways, never directly. Every cross-boundary message is authenticated, scoped, and logged on both sides — zero-trust by default.

---

## Put one agent into production your risk team can answer for.

The firms that win machine finance will not be the ones with the most agents. They will be the ones that can prove what every agent did — who acted, what they were allowed to do, what record was left behind. That is what we build: identity, enforcement, and a tamper-evident record, beneath the agents you already run, inside your boundary.

**[ Book a live demo → ]** *An agent acting inside your policy — intercepted, settled, and proven. Twenty minutes. One working flow.*

*Deploy how you need it — managed cloud, on-premise, or fully air-gapped for data residency and sovereign requirements. Same runtime, same guarantees.*

enterprise@unicity.ai · unicity.ai

---

### PAGE 4 — GAMING (iGaming) · Regulated gaming and casino operators

`UNICITY · INDUSTRY · GAMING`

# Your next million players won't arrive through a browser or an app.

Two interfaces made this industry — the web, then the mobile app. The agent is the third. Unicity is the secure agentic OS regulated operators run at the front door: identity, value, settlement, and audit in one signed handshake.

The first regulated operator to receive agents at the front door — safely, auditably, at machine speed — defines the category.

**[ Talk to the gaming team ]** · See the platform

---

## Every twenty years the interface changes. The operator who moves first defines the era.

The web made operators in 1995. The app made them in 2008. Each opened a window of roughly three years where the early movers became the giants of the next two decades. The third window is open — and the funnel beneath it was built for humans. The agent doesn't have a funnel.

- **Onboarding built for humans** — from landing page to first wager, the average regulated funnel runs 25 minutes and loses 30% of attempted players to KYC drop-off, card decline, and abandonment.
- **Thirty years of on-ramp cost** — card processing, chargebacks, PSP stacks, deposit funnels: 15–35% of GGR to move money onto your platform (Edgar Dunn · Aeropay · EPI, 2025–26).
- **Retention into an empty inbox** — operators spend $5–10 per active player per year on CRM — Optimove, Smartico, Fast Track — to send promotional email that 92% of recipients never open.
- **Personalization that guesses** — telemetry and CRM segments infer attention from clicks and deposits. Send-time optimization fires when the CRM thinks best — not when the player is actually present.

---

## One OS for receiving agents. One integration.

Unicity unifies identity, value, settlement, and audit into a single operator surface that sits under any agent deployment — no rip-and-replace. Three layers: bring any agent framework on top, the Unicity AOS runtime enforces policy at the kernel, and the Unicity Blockchain (Unicity L1) settles value and identity below. The agent arrives KYC'd, holding regulated stablecoins. Once the wager arrives, your platform runs exactly as it does today.

- **Onboarding in seconds** — wallet, KYC, and risk caps arrive in one signed handshake. First wager in seconds, not sessions. The 30% abandon rate disappears.
- **The payments stack collapses** — players hold MiCA-compliant stablecoins — USDC, EURC — in agent wallets, KYC'd upstream. No card network. No PSP integrations. No deposit funnel. 15–35% of GGR back on the P&L.
- **Retention becomes a conversation** — the reload arrives in chat, in context, when it matters — delivered to 100%. The CRM stack was a workaround for a channel that's now alive.
- **Personalization by timing** — the agent knows when the player is actually present, because the player just spoke to it. Surfaced with permission, signed, auditable. The only personalization that has ever worked.

---

## Everything an operator needs to deploy agents safely at scale.

Six requirements autonomy demands — security, compliance, networking, governance, payments, audit — on a single platform, built from first principles. Every model output, tool call, and decision passes through the Unicity AOS runtime that sits below the agent, where tools cannot bypass it. Other vendors solve one piece. Unicity is the platform.

- **Security** — verifiable execution for every agent. Guardrails, sandboxing, and enforcement at the OS kernel; the Semantic Intercept Fabric checks every payload at runtime.
- **Compliance** — KYC attestations, risk caps, session limits, and a regulatory audit trail — bound to the agent, enforced structurally, presented per transaction.
- **Payments** — peer-to-peer transfer of regulated stablecoins. Cryptographic finality. Perfect privacy. No card network, no payment processor, no deposit queue.
- **Networking** — peer-to-peer agent-to-agent messaging across regulated counterparties. No shared ledger. No central router. Sub-second. Open lanes across A2A, MCP, x402.
- **Governance** — policy enforcement at the agent level. Limits, exclusions, permissions — defined once, applied across every interaction, from one live policy library.
- **Audit** — every action signed and witnessed. Compliance evidence is a query, not a CSV. Regulators verify, they don't trust.

---

## The team that built and ran the KSI blockchain — applied to the rail your agents transact on.

Unicity Labs is a team of PhDs in machine learning and cryptography who built the KSI keyless-signature blockchain and ran it at nation-state scale — fifteen years of cryptographic engineering, now applied to the settlement layer agents transact on. KSI ran where correctness had to be provable, not assumed.

- **15 years** — of keyless-signature blockchain engineering at nation-state scale, behind the Unicity settlement layer.
- **Finance-sector track record** — CEO Mike Gault built and exited Guardtime (ADX:IHC), the company that ran KSI; ex-MD at Barclays Capital. BIS — the central banks' bank — is among the institutions where KSI ran.
- **Built from first principles** — six requirements (identity, delegation, verifiable execution, policy enforcement, settlement, interoperability) delivered as one protocol stack, not bolted together.

**Where KSI ran:** DARPA · NATO · Lockheed Martin · Boeing · BIS · Maersk · ESA *(the team's track record running KSI for these organizations — not current Unicity customers.)*
**Where we operate:** Zug · Tallinn · Abu Dhabi

---

## What it looks like in production — and what is already happening around it.

The agentic channel is not a forecast. The infrastructure is live, and the operators who are agent-readable first win the window. Below: concrete moments on Unicity, and the market signal we read against our own position.

- **Agent-initiated sessions** — an agent bound to a player opens a session — a reload with free spins — with stop-loss and a time cap enforced in the signed session card before the first wager.
- **Per-wager settlement** — each wager settles sub-second with cryptographic finality and a signed execution trail. Card rails and chargeback exposure go to zero.
- **What is happening in payments** — Mastercard and Santander cleared Europe's first live agent-initiated bank payment in March; Visa Intelligent Commerce and Mastercard Agent Pay are rolling out across US cardholders. Our position: the channel is real and external to us — Unicity is the rail an operator runs to receive it, not a participant in those programs.
- **One pane of glass** — the Enterprise Console puts security, governance, networking, and payments on one control plane: every agent, every policy, every payment. Not rip-and-replace; a control plane under any agent deployment.

---

## Forty-five days to production. Then start onboarding agents.

One integration. One sprint. One regulated operator on the live rail. Unicity AOS deploys alongside your existing wallet and game engine — no replacement, no migration, and deployable within your jurisdiction and residency requirements. Install, integrate against a reference agent with compliance and security review in parallel, then go live. The first regulated operator to receive agents at the front door defines the category.

**[ Talk to the gaming team ]** · Read the docs

info@unicity.ai · unicity.ai · +971 50 884 3758

---

## 4. Cross-vertical consistency

### 4.1 Consistency table

| Vertical | One-line positioning | Primary CTA | Secondary CTA | Runtime name used (per source deck) | Proof "where KSI ran" set | Page-specific element |
|---|---|---|---|---|---|---|
| **Telecom** | The secure agentic compute platform for telecom. | Book a live demo | — | Unicity AOS · AgentSphere · Unicity Blockchain | NATO · DARPA · Lockheed · BIS · Maersk · ESA (defense & sovereign) + Verizon (telecom-sector, separate caption) | Concierge for every SIM (three-handset UI); AgentSphere console; Agent Cloud resale |
| **MSSP** | The kernel your clients' agents run on. | Book a live demo | Talk to the team | Unicity AOS · Unicity Proof System · SIF | DARPA · NATO · Lockheed · Boeing · BIS · Maersk · ESA | Unicity × CyberKnight co-brand; 6 controls as a resellable service catalog |
| **Finance** | Agentic AI your auditors can read, not just trust. | Book a live demo | — | Unicity AOS · Unicity Proof System · SIF · Unicity Blockchain | Banking/insurance only: BIS · SEB · KPMG · EY · Willis Towers Watson | Dedicated "what is happening in the space" market-signal block; air-gap deployment |
| **Gaming** | Your next million players won't arrive through a browser or an app. | Talk to the gaming team | See the platform / Read the docs | Unicity AOS · Unicity Blockchain (Unicity L1) · SIF · Enterprise Console | DARPA · NATO · Lockheed · Boeing · BIS · Maersk · ESA | Three-waves (web/app/agent) framing; per-wager settlement; regulated stablecoins |

The defense/aerospace set (NATO · DARPA · Lockheed · Boeing · BIS · Maersk · ESA) is the shared spine. Telecom adds Verizon; Finance swaps to the banking/insurance heritage set only (no defense spine on a public finance page). Every set carries the non-customer caption (§5).

### 4.2 Canonical "What is Unicity" blurb (reuse on every page meta / about / nav hover)

> Unicity is the secure compute platform for AI agents, delivered as one protocol stack. Bring any agent framework, run it on the Unicity AOS enforcement kernel — where every prompt, tool call, and decision passes through policy in-path, before it executes — and settle on the Unicity Blockchain, which tokenizes execution state into a verifiable, tamper-evident record. The agent gets a cryptographic, revocable identity bound to a human principal; the chain proves single-spend without ever seeing the transaction. Built by the team that built the KSI blockchain and ran it at nation-state scale.

Short form (≤ 30 words, for nav / social): *Unicity is the secure compute platform for AI agents: identity, in-path enforcement, and a tamper-evident record, settled on a blockchain built for machines. Built by the team behind the KSI blockchain.*

---

## 5. KSI heritage / team-experience framing block (reusable on every Proof section)

Drop this technology-lineage framing into any page's Proof block. It leads with the *technology* (KSI blockchain), never the Guardtime company brand, and renders every named org as track-record, not as a Unicity customer.

**Heritage lead (pick the verb to match the page):**
> Built by the team that built the KSI blockchain — and ran it at nation-state scale. Unicity Labs is PhDs in machine learning and cryptography. The technical lineage is the KSI (keyless-signature) blockchain — cryptographic signing infrastructure this team architected and operated for fifteen years, then applied to the rail your agents transact on.

**Stat strip (Enterprise-deck footer stats, reusable verbatim):**
> 15+ years in production · 25+ sovereign-grade institutions · 4 continents deployed · 0 cryptographic breaches.

**Bios (Team Factsheet — exact, do not alter titles):**
> - **Mike Gault — CEO** — PhD Electrical Engineering · built and exited Guardtime (ADX:IHC), the company that operated KSI · ex-MD, Barclays Capital.
> - **Tony Kenyon — CTO** — PhD Machine Learning · 25 years shipping enterprise AI and infrastructure · Principal Architect: BT, Nokia, A10.
> - **Five PhD cryptographers** — Ahto Buldas · Ahto Truu · Risto Laanoja · Jian Tan · Dirk Draheim — architected the keyless-signature infrastructure.
> - *(Where the deck supports it)* **Eric Leandri — Chairman** — CEO, Aleria (UAE Sovereign AI).

**"Where KSI ran" row — MANDATORY caption (Ruling 2):**
> **Where the KSI blockchain ran — cryptographic infrastructure trusted by:** {logo set}.
> *The team's track record running KSI for these organizations — not current Unicity customers.*

**Org-set selection rule:** Defense/critical-infra page → NATO · DARPA · Lockheed Martin · Boeing · BIS · Maersk · ESA (Telecom swaps Boeing→Verizon, or adds Verizon). Finance page → banking/insurance only: BIS · SEB · KPMG · EY · Willis Towers Watson. Guardtime is named once, only inside Gault's bio. Never present any org as a current customer or implied current relationship.

---

## 6. Reusable assets (verified `/public` paths + 4 `[RECOVER]` finance logos)

All paths web-root-relative (served from `/public`). **✓** = confirmed present in `public/`. **`[RECOVER]`** = exists only in old `dist/logos/` build (confirmed present); copy + rename into `public/logos/` before render, contingent on the heritage-vs-customer caption decision.

**Shared (all pages):**
- `✓ /UnicityLogo.svg` — header wordmark *(also `/icons/unicityLogo.svg`, `/images/unicity_logo.svg`)*
- `✓ /close-splash.png` *(also `/concierge/close-splash.png`)* — closing-CTA full-bleed background
- `✓ /unicity-paradigm.svg` · `✓ /traditional-paradigm.svg` · `✓ /agents_smartcontracts.svg` — three-layer stack / paradigm diagrams
- `✓ /dashboards/overview.png` — operator console / one pane of glass
- `✓ /dashboards/governance.png` — agent inventory & governance
- `✓ /dashboards/security.png` — DLP / semantic firewall
- `✓ /dashboards/payments.png` — cost / budget / settlement
- `✓ /dashboards/networking.png` — A2A networking pillar
- `✓ /dashboards/use-cases-console.png` — all-workloads operator console
- `✓ /sif-dashboard.png` — Semantic Intercept Fabric (sub-20ms inspection)
- `✓ /agentstack-screenshot.png` · `✓ /sphere-screenshot.png` — runtime / kernel UI
- `✓ /agentsphere-dashboard.jpeg` — cross-institution / AgentSphere network
- `✓ /team/mike.jpg` — Mike Gault (CEO)
- `✓ /team/tony.png` *(also `/team/Tony.jpeg`)* — Tony Kenyon (CTO)
- `✓ /team/eric.png` — Eric Leandri (Chairman) · `✓ /team/vladimir.png` · `✓ /team/joshua.jpeg` · `✓ /team/pavel.png` · `✓ /team/matt.jpg`
- `✓ /people/jensen-huang.jpg` — NVIDIA market-signal portrait (optional)
- **Defense/aerospace spine:** `✓ /logos/nato.png` · `✓ /logos/darpa.png` · `✓ /logos/lockheed.png` · `✓ /logos/boeing.png` · `✓ /logos/bis.png` · `✓ /logos/maersk.png` · `✓ /logos/esa.png`

**Telecom-specific:**
- `✓ /concierge/Concierge1.png` (primary hero/use-case phone UI) · `✓ /concierge/Concierge3.png` · `✓ /concierge/Concierge4.png` · `✓ /concierge/Concierge5.png` · `✓ /concierge/Concierge6.png` — three-handset concierge sequence
- `✓ /logos/verizon.svg` — Verizon (KSI-era / team track record only; see Open Questions)
- `✓ /kling_20260226_VIDEO_Take_Image_1650_0.mp4` — optional hero/demo motion

**MSSP-specific:**
- `✓ /cyberknight.svg` — "Unicity × CyberKnight" co-brand lockup (hero eyebrow + proof)
- `✓ /sif-dashboard.png` — Semantic Firewall / sub-20ms enforcement
- `✓ /demo-thumbnail.jpg` — "see an agent run under policy" demo poster

**Finance-specific:**
- `✓ /logos/bis.png` — the one finance logo already canonical
- `[RECOVER] /logos/seb.png` — from `dist/logos/14_seb.png` *(confirmed present)*
- `[RECOVER] /logos/kpmg.png` — from `dist/logos/15_kpmg.png` *(confirmed present)*
- `[RECOVER] /logos/ey.png` — from `dist/logos/24_ey.png` *(confirmed present)*
- `[RECOVER] /logos/willis_towers.png` — from `dist/logos/18_willis_towers.png` *(confirmed present)*
  *(Copy + rename into `public/logos/`. Render only with the §5 heritage caption — these are KSI-era / prior-work deployments, not Unicity customers.)*

**Gaming-specific:**
- `✓ /dashboards/security.png` — Security pillar / Enterprise Console preview
- `✓ /dashboards/governance.png` — Compliance/Governance pillar
- `✓ /dashboards/networking.png` — Networking pillar
- `✓ /dashboards/payments.png` — per-wager settlement
- `✓ /dashboards/overview.png` — "one pane of glass" Enterprise Console

---

## 7. Build checklist

- [ ] Locate the live **DeFi** and **Devs** Industry page source on the website repo's `mike` branch. Extract and reuse, do not re-invent: hero component, insight/stat card, 2×3 capability grid, stat strip, "where KSI ran" logo row, full-bleed closing-CTA band.
- [ ] Confirm the 8-block skeleton (§2) maps 1:1 onto the live DeFi/Devs component set; flag any block the live pages don't have.
- [ ] Copy the four verticals' assets from this deck repo's `/public/...` into the website repo's public/static dir (or wire a shared asset pipeline). Use canonical `public/` originals — except the four `[RECOVER]` finance logos, which come from `dist/logos/`.
- [ ] Copy + rename the four `[RECOVER]` finance logos into `public/logos/` (`14_seb→seb`, `15_kpmg→kpmg`, `24_ey→ey`, `18_willis_towers→willis_towers`) — gated on the heritage-caption legal decision.
- [ ] Apply the §5 KSI-heritage framing block to all four Proof sections; verify the mandatory non-customer caption renders under every logo row.
- [ ] Confirm logo-strip treatment matches DeFi/Devs (mono vs. color; max count; mobile wrap).
- [ ] Wire one primary CTA per page (Telecom/MSSP/Finance → "Book a live demo"; Gaming → "Talk to the gaming team"); confirm the Gaming CTA variant is allowed against the live convention.
- [ ] Lock contact + domain sitewide before publish (currently mixed: info@ vs enterprise@; +971…3758 vs …3756; unicity.ai vs unicity.network) — see Open Questions.
- [x] Standardize one canonical runtime name across the four pages — done in v2.1: runtime → "Unicity AOS," proof system → "Unicity Proof System," settlement → "Unicity Blockchain" (Unicity L1 as first-mention parenthetical only).
- [ ] Legal/comms sign-off on: defense-logo usage per region; heritage-vs-customer caption wording; naming Mastercard/Visa/Check Point/Lakera/NVIDIA/McKinsey as non-endorsement market signal; forward-looking analyst projections on a public page.
- [ ] Verify every analyst stat carries inline source + year (Gartner April 2026; NVIDIA GTC March 2026; McKinsey 2025; Gartner 2026 for the 46% line).
- [ ] Confirm the Gaming "45 days to production" and Finance "20 minutes / one working flow" commercial asks are approved to advertise.
- [ ] Responsive + a11y pass: 2×3 grid → 1-col mobile; concierge three-handset sequence carries the required caption; logo rows wrap.

---

## 8. Remaining open questions

The five content rulings are **RESOLVED** across all four pages. What remains is build/legal/parity:

1. **Website repo URL + access.** This (pitchdeck) repo holds the decks and assets only. The Industry page code lives on the website repo's `mike` branch — we still need the repo URL and push access to land these pages and extract the live DeFi/Devs components.
2. **Canonical contact email + domain (sitewide).** Pages currently mix `info@unicity.ai` (Telecom/MSSP/Gaming) and `enterprise@unicity.ai` (Finance); phone `+971 50 884 3758` (Telecom/Gaming) vs `+971 50 884 3756` (MSSP); domain `unicity.ai` vs live explorer `unicity.network`. Lock one email, one phone, one domain before publish.
3. **Defense-logo legal clearance.** NATO · DARPA · Lockheed · Boeing · ESA on a public commercial site is export/geopolitically sensitive (EU/US/MENA). Confirm clearance per region, and whether to render as a logo strip or text-only heritage caption. Specific sub-item: Verizon on the Telecom page risks being read as a current telco customer despite the caption — confirm legal/comms is comfortable keeping it or drop it from that page's strip.
4. **Nav order.** Confirm the Industry sub-nav order for the four new verticals relative to the existing DeFi/Devs entries (and whether MSSP renders as "MSSP" or "Security / MSSP").
5. **Parity with live DeFi/Devs.** Lock section skeleton, card counts, stat-strip layout, and CTA component against the built DeFi/Devs pages once the source is accessible. Where this kit and the live pages disagree, the live pages win. (The runtime-name reconciliation is resolved in v2.1 — standardized to "Unicity AOS" / "Unicity Proof System" / "Unicity Blockchain"; confirm it matches the live DeFi/Devs surfaces.)