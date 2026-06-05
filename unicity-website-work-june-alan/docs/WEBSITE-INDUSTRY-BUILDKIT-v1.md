# Unicity Website — Industry Section Build Kit

*Four Industry vertical pages: Telecom · MSSP · Finance · Gaming & Casino*

> Generated 2026-06-04 from pitch-deck branches: `origin/telecom-sylvain` (Telecom), `alan/mssp-polish` (MSSP), `casino-alan` (Gaming), `enterprise-sales` + `enterprise-gov-sales` (Finance, synthesized). For the website's `mike` branch Industry section. **Read §7 Open Questions and the Adversarial Review (Appendix A) before publishing — several items are blocking.**

---

## 1. How to use this

This kit is **page copy + a shared template + a build checklist** for four new Industry vertical pages on the Unicity marketing website. It is destined for the website's **`mike` branch**, where the **DeFi** and **Devs** Industry pages are already built by the team. Those two pages are the canonical reference: match their section skeleton, component names, card counts, stat-strip layout, logo-strip pattern, and CTA convention exactly. Where this kit and the live DeFi/Devs pages disagree, **the live pages win** — flag the delta in the relevant Open Question rather than inventing a new pattern.

Important orientation notes:

- **This (pitchdeck) repo is the deck repo, not the website repo.** It contains the source decks and all the image/logo assets the site will reuse (`/public/...`). The website code lives in a separate repo on the `mike` branch — see the Build Checklist for what we still need access to.
- **Register.** The actor is always **"the agent"**, never "software." Restrained, understated, no hype, no exclamation marks, no buzzword stacking. This is a **public marketing website**, not an investor deck — copy here is deliberately tighter and more scannable than the source decks. Resist the urge to port deck paragraphs wholesale.
- **Copy below is final-draft, web-ready.** Stat figures, analyst attributions, and any `[PLACEHOLDER]` items still need a legal/comms pass before publish (see Open Questions). Do not ship placeholders.
- **Assets verified against this repo.** Paths in the asset lists are confirmed present in `/public/` unless flagged `[RECOVER]` (exists in the old `dist/logos/` build, must be copied into `public/logos/`).

---

## 2. Shared page template

All four Industry pages follow the **same eight-block skeleton** so the section reads as one family. This mirrors the Problem → Solution → Proof arc of the source decks, compressed to web length.

| # | Block | Purpose | Component pattern | Copy budget (web) |
|---|---|---|---|---|
| 0 | **Page header / breadcrumb** | Wordmark + "Industry · {Vertical}" eyebrow | Shared site nav + `UnicityLogo.svg` | eyebrow only |
| 1 | **Hero** | One-line headline + 1–2 sentence subhead + primary CTA | Full-bleed hero, optional product/screenshot visual | headline ≤ 10 words; subhead ≤ 40 words |
| 2 | **Problem** | Why the old architecture fails this vertical | Lead paragraph + **3–4 stat/insight cards** | lead ≤ 60 words; cards ≤ 25 words each |
| 3 | **Solution** | The Unicity stack, framed for this buyer | Lead paragraph + **3–4 layer cards** (the stack) | lead ≤ 55 words; cards ≤ 25 words |
| 4 | **Capabilities** | What the platform does, concretely | Lead + **6 capability cards** (2×3 grid) | cards ≤ 30 words |
| 5 | **Proof** | Team, credentials, third-party validation, logo strip | Lead + **stat strip (3–4)** + **trusted-by logo row** | lead ≤ 55 words |
| 6 | **Use Cases** | What it looks like in production | Lead + **4 use-case cards** | cards ≤ 30 words |
| 7 | **Closing CTA** | The category-stakes line + booking | Full-bleed CTA band (`close-splash.png`) + contact line | ≤ 40 words + contact |

**Shared rules across all four pages**

- **Card counts are fixed** per the table (Problem 3–4 / Solution 3–4 / Capabilities 6 / Proof stats 3–4 / Use Cases 4). This is what keeps the grid identical to DeFi/Devs.
- **One primary CTA per page**, repeated verbatim in Hero and Closing CTA. A secondary text CTA ("Talk to the team" / "Read the docs" / "See the platform") is optional and styled as a link, not a button.
- **Proof logo strip** uses the same row component on every page; only the logo set changes. Verizon appears on Telecom; finance logos on Finance; defense/aerospace set is the shared spine.
- **Contact line** is consolidated to one canonical pair sitewide (see Open Questions — `unicity.ai` vs `unicity.network` must be settled before publish).

---

## 3. The four pages

### 3.1 Telecom

> **Industry · Telecom operators and service providers**

#### Hero
**The secure agentic compute platform for telecom.**

Every subscriber is about to get a personal AI agent. The only question is who runs it. Unicity is the secure, efficient, and provable compute platform built for agents in telecom networks — running on your infrastructure, under your identity and billing.

**[ Book a live demo → ]** *See an agent book, pay, and settle end-to-end — live, on your own infrastructure.*

#### Problem — Agentic is the fourth rebuild of compute, and it has no telco home yet.
Mainframe, client-server, cloud, mobile. Mobile was telecom's last platform win. Agentic is next, and it cannot be bolted onto human-centric architecture. Agents need identity, execution, governance, and payments rebuilt for machines with no human in the loop — and today most of that growth is heading to the hyperscaler, ungoverned, off your network.

- **Explosive growth** — Gartner projects the average Fortune 500 will run 150,000+ agents by 2028, up from fewer than 15 today.
- **Almost no controls** — only 13% of enterprises have adequate agent governance. The rest run agents they cannot see or audit.
- **Value at the edge** — McKinsey puts agentic AI's value at up to $4.4T a year, much of it consumed at the edge, on subscriber lines.

#### Solution — One protocol stack delivers everything autonomy demands.
Unicity is a three-layer platform: bring any agent framework, run it on the Unicity AOS secure operating system, and settle on the Unicity blockchain. Every prompt, tool call, and decision passes through an enforcement kernel that is in-path and unbypassable — all of it inside your infrastructure.

- **Identity** — Cryptographic, revocable agent identity bound to a human principal.
- **Execution** — Sandboxed runtime with safety policy, goal focus, and budget enforcement in-path.
- **Governance** — Tamper-evident audit trail, compliance logs, and a live agent registry.
- **Payments** — On-chain settlement with agent-to-agent payments and tokenized value transfer.

#### Capabilities — Built to run agents at scale: securely, efficiently, provably.
The first agent compute platform designed for telecom from day one. Three things make it different.

- **Secure by architecture** — the agent runs inside a kernel on your infrastructure. Every action is intercepted in-path. Tools cannot bypass the architecture.
- **A price point that works at scale** — intelligent routing sends each task to the cheapest capable model; multi-tenant capsules pack many agents onto the same hardware. Cost per agent stays low enough for every subscriber while holding margin.
- **Provable, not just observed** — every agent action lands in a cryptographic, tamper-evident record. One definitive, audit-ready answer for regulators, not an inference from logs.
- **Operator-native** — identity, billing, and location are built in. No card setup, no third-party networks — settlement runs on your rails.
- **Sovereign by default** — the agent executes inside your kernel and sandboxes. Data and the customer moment never leave your network.
- **Pluggable kernel** — swap a capsule to change the LLM, the agentic loop, or the deployment model (local, air-gapped, multi-provider) without touching core code.

#### Proof — Built by infrastructure veterans the world already trusts.
Unicity Labs holds PhDs in machine learning and cryptography, with fifteen years building nation-state-grade security infrastructure. CEO Mike Gault built and exited Guardtime; CTO Tony Kenyon spent 25 years as a principal architect across BT, Nokia, and A10. *(Team titles/bios flagged in Adversarial Review — verify against current org chart before publish.)*

- **100:1** — agents to humans at scale (NVIDIA — Jensen Huang: 75,000 employees, 7.5M agents).
- **10,000×** — agent growth across the Fortune 500 in three years, 87% ungoverned (Gartner).
- **$4.4T** — annual productivity value from generative and agentic AI, much of it at the edge (McKinsey Global Institute).

**Trusted by:** NATO · DARPA · Lockheed Martin · Verizon · Bank for International Settlements · Maersk · European Space Agency

#### Use Cases — One platform, more than one product to ship.
Launch a subscriber service, resell to enterprises, and govern every workload from a single console.

- **A concierge for every SIM** — each subscriber gets a personal agent that books, pays, and handles their day, running through your identity and billing, with no card and no friction.
- **Revenue you own** — top-ups, gifts, groceries, bookings: every settled action is incremental ARPU on your rails. The agent layer and the data stay on your network, not a hyperscaler's.
- **Agent Cloud for enterprises** — resell managed, sovereign agent hosting to enterprise customers, deployed in-country on your infrastructure, with no carrier lock-in.
- **One console for everything** — govern every agent (identity, audit, cost, intelligent routing, prompt-injection and data-loss defense) from a single pane of glass, internal or resold.

#### Closing CTA — Own the agent layer before someone else does.
The operator who runs the agent owns the customer moment and the highest-margin product layer since data. See an agent book, pay, and settle end-to-end — live, on your own infrastructure.

**[ Book a live demo → ]**
info@unicity.ai · unicity.ai · +971 50 884 3756

---

### 3.2 Managed Security Service Providers (MSSP)

> **Industry · Unicity × CyberKnight**

#### Hero
**The secure compute platform your clients' AI agents run on.**

MSSPs don't get a second chance at agentic security. Unicity runs every agent on a cryptographically enforced kernel — so you secure what your clients deploy at the runtime level, prove it, and bill it. Not another dashboard that watches from the sidelines.

**[ Book a live demo ]** · Talk to the team

#### Problem — Agents are scaling 10,000×. The controls aren't.
Your clients are deploying autonomous agents faster than anyone can govern them. Gartner projects the average Fortune 500 will run 150,000+ AI agents by 2028 — up from fewer than 15 today — and only 13% have adequate governance. Every agent is a new identity, a new egress path, and a new way to leak data or burn budget. The tools your clients bought watch and infer after the fact — by then the prompt has already left the perimeter.

- **10,000× growth, 87% ungoverned** — Gartner: fewer than 15 agents per Fortune 500 today, 150,000+ by 2028; only 13% adequately governed.
- **Static keys, no identity** — agents authenticate with shared API keys that can't be scoped, attributed, or revoked. You can't secure what you can't see.
- **Post-hoc detection arrives late** — observability and gateways flag exfiltration and runaway compute after it happens, not before the action executes.

#### Solution — Run the agent. Prove the execution.
Unicity is a secure compute platform for AI agents, delivered as one protocol stack. Agents run inside the Unicity AOS kernel — a user-space microkernel where every prompt, tool call, and decision passes through enforcement before it executes. Below it, a proof system tokenizes execution state for verifiable, tamper-evident audit. Everyone else watches the agent from outside; Unicity runs it and proves what it did. For MSSPs: deliver runtime security as a service — bring any client's framework, enforce policy in-path, hand back cryptographic evidence.

- **Application layer** — bring your client's agent: any framework, any model. LangChain, AutoGen, custom. No rip-and-replace.
- **AOS kernel** — executes agents in isolated WASM capsules. Multi-tenant by design; every prompt, tool call, and decision passes through policy enforcement before it runs.
- **Proof system** — state tokenization, cryptographic identity, and verifiable execution: a tamper-evident trace for compliance and analysis.

#### Capabilities — What you can offer your clients.
Six runtime controls that turn agentic risk into a managed service line — each enforced at the kernel, below the agent, not beside it.

- **Semantic firewall** — the Semantic Intercept Fabric classifies intent inline and enforces content-based policy in under 20ms: a Rust pipeline of deterministic rule engine, ONNX-loadable ML detection, and DLP scanning for secrets, IP, and PII.
- **Cryptographic agent identity** — every agent gets a revocable identity bound to a human principal. Static API keys go away. Scopes are explicit; rogue agents get quarantined.
- **Data loss prevention** — inline redaction of PII, credentials, and secrets in the prompt before inference. Blocks indirect prompt-injection exfiltration before payloads leave the perimeter.
- **Runaway compute control** — hard rate limiting and token quotas enforced at the kernel; execution blocked the instant a budget is hit, before cost is incurred. Per-agent, per-workflow ROI attribution.
- **Intelligent routing** — every request is scored on complexity, cost, latency, and security clearance, then routed to the right model or capsule. Sensitive context only reaches a cleared target, and the routing choice is a recorded, explainable event.
- **Agent inventory & governance** — a global map of every active agent and its authorized scopes. Mandatory registration and monitoring for all machine identity across the client estate.

#### Proof — Built by people who've shipped infrastructure at this grade.
Unicity Labs is a team of PhDs in machine learning and cryptography, applying fifteen years of nation-state-grade cryptographic engineering to the rail your clients' agents transact on. Trusted across defense, aerospace, and critical infrastructure. Three offices: Zug, Tallinn, Abu Dhabi.

- **Sub-20ms enforcement** — intent classified and policy enforced in-path, before the action runs.
- **The founders** — Mike Gault (CEO): PhD EE, built and exited Guardtime, ex-MD Barclays Capital. Tony Kenyon (CPTO): PhD ML, 25 years shipping enterprise AI and infra; principal architect at BT, Nokia, A10. *(Titles/bios flagged in Adversarial Review — verify.)*
- **Independent validation** — Gartner: 150,000+ agents per Fortune 500 by 2028, 87% ungoverned. NVIDIA: ~100 agents per human at scale. a16z: blockchains are "not optional" for an AI-native internet, "the missing layer that makes it work."

**Trusted by:** NATO · DARPA · Lockheed · Boeing · BIS · Maersk · ESA *(Unicity's own references — see Open Questions on MSSP-deployment framing)*

#### Use Cases — How MSSPs put it to work.
Concrete service lines you can stand up on day one — each maps to a control your clients are already being asked about.

- **Managed DLP for agentic workloads** — sit in the transport flow and inspect every LLM payload before it leaves the client perimeter. Block exfiltration, redact secrets inline, return tamper-evident compliance logs.
- **Shadow-AI discovery & containment** — make Unicity the mandatory registration layer for client machine identity. Surface every unsanctioned agent, scope it, instantly quarantine drift.
- **Cost governance as a service** — cap runaway compute with kernel-level budgets and quotas. Give clients per-agent and per-workflow attribution and a clear story on agent-sprawl spend.
- **Bring-your-own-agent enablement** — let clients run any framework with security and strict cost control built in. Onboard existing agents without rebuilding them.

#### Closing CTA — See an agent run under policy, end to end.
Book a live demo and watch an agent execute under enforcement, with every decision verified and audit-logged — verifiable execution, the Semantic Intercept Fabric, and the operator console in one session.

**[ Book a live demo ]**
info@unicity.ai · +971 50 884 3756 · unicity.ai

---

### 3.3 Finance & Financial Services

> **Industry · Banks, payments, capital markets**

#### Hero
**Agentic AI your auditors can sign off on.**

Unicity is the security and settlement layer beneath every financial-services agent. Cryptographic identity, runtime policy enforcement, and tamper-evident audit — so banks, payment networks, and capital-markets firms can put autonomous AI into production without losing control of risk, compliance, or money movement.

**[ Book a live demo ]** *See an agent intercepted, classified, and cryptographically signed in your environment — in 45 minutes.*

#### Problem — Agents authenticate legitimately, then act on their own.
Financial institutions are racing to deploy AI agents into onboarding, payments, trading, and servicing. But the controls that protect a regulated firm were built for two kinds of actors — people and software — and an agent is neither. A person can be denied access and a binary can be patched; an agent authenticates with valid credentials, decides on its own, and shifts behaviour between audits. The result is the single biggest blocker to production.

- **Identity gap** — API keys are not identity. A regulated firm cannot attribute an autonomous action to an accountable, revocable actor.
- **Authorization gap** — the agent passes authentication, then does things no one scoped. The action executes before any control sees it.
- **No stable baseline** — behaviour drifts between audits. There is no fixed posture to monitor against, so detection arrives after the fact.
- **Governance, not tooling** — Gartner attributes 46% of stalled agentic-AI projects to governance and security. In finance, that is the whole gate.

#### Solution — One stack that meets what autonomy actually requires.
No agent should spend money, execute a contract, or touch sensitive data unless six things are true: cryptographic identity, verifiable and revocable delegation, provable execution, policy enforced at runtime, settlement at machine economics, and interoperability across the protocols agents already use. No legacy chain, security vendor, or framework meets all six. The Unicity autonomy stack does — in three layers that sit underneath the agents and frameworks your teams already run.

- **L3 — Security** — AstridOS runtime and the Semantic Intercept Fabric. A secure runtime where every message is inspected and policy is enforced below the model.
- **L2 — Settlement** — Unicity L1. Cryptographic identity, scoped delegation, and per-transaction settlement: no shared ledger, no gas.
- **L1 — Connectivity** — AgentSphere SDK. Multi-protocol communication and payments (A2A, MCP, x402, AP2), neutral by design.

*We don't replace your AI stack. The agent runs as-is; identity, enforcement, and audit are added beneath it.* *(Note: "AstridOS" vs "AOS-9" naming inconsistency flagged in Adversarial Review — pick one canonical name.)*

#### Capabilities — Controls a CISO can underwrite and a regulator can read.
The platform turns autonomous behaviour into something a financial institution can govern: enforcement below the model, content-aware inspection, and a cryptographic record of every action.

- **Cryptographic identity and delegation** — every agent has a verifiable identity and a scoped, revocable mandate, not a shared API key. Attribute and revoke any action.
- **Kernel-level enforcement** — a user-space microkernel runs every tool in a sandbox. Interception, budgets, and audit happen below the agent; tools cannot bypass them.
- **Semantic Intercept Fabric** — a content-aware firewall, not just action-based. Prompt injection, data leakage, PII and secrets exfiltration: inspected and ruled on in sub-20ms.
- **Tamper-evident audit** — every model output, tool call, and decision is signed and recorded. Hand your second line and examiners evidence, not log assertions.
- **Runtime policy enforcement** — governance lives in the runtime, not in a code review weeks earlier. Policy is applied to every action as it happens.
- **Cross-institution coordination** — agents transact with counterparties at other firms through gateways, never directly. Every cross-boundary message is authenticated and logged, zero-trust by default.

#### Proof — Sovereign-grade, applied to autonomous AI.
The Unicity team founded and exited Guardtime, deploying KSI cryptographic infrastructure across defence, sovereign government, and finance for fifteen years. Unicity is the next-generation infrastructure from the same team — and the codebase is open source, so the L1 your risk team has to trust is the L1 your risk team can read.

- **Banking and insurance heritage** — prior (Guardtime-era) deployments with BIS, SEB, KPMG, EY, and Willis Towers Watson. *(Team heritage, not current Unicity customers — see Open Questions for required attribution wording.)*
- **46% governance and security block** — Gartner's headline reason agentic-AI projects stall before production (2025–2026). The platform addresses it directly.
- **$300M validation** — Check Point paid $300M for Lakera, confirming demand for agent security while leaving the bolt-on vs. kernel-level problem unsolved.
- **Auditable by design** — public repos at github.com/unicitynetwork. No vendor black box; the security layer is inspectable.

> **`[PLACEHOLDER — DO NOT SHIP]` Finance-specific result.** A named bank/payments customer, pilot outcome, or compliance-report reference for financial services. None exists in the source material; required before this page publishes.

**Trusted by (heritage):** BIS · SEB · KPMG · EY · Willis Towers Watson

#### Use Cases — Where it goes to work in financial services.
The same runtime and guarantees apply across the front, middle, and back office — and across deployment topologies, from managed cloud to fully air-gapped.

- **Payments and money movement** — settlement at the agent edge on Unicity L1: per-transaction, privacy by design, no shared ledger or gas. Subscription economics replace per-transaction fees.
- **Fraud and risk operations** — content-aware interception flags injection, exfiltration, and anomalous behaviour in sub-20ms, with a signed record for every decision.
- **Audit, compliance and reporting** — tamper-evident audit converts agent activity into examiner-ready evidence. Governance is enforced at runtime and provable after the fact.
- **Cross-institution settlement and data exchange** — agents discover and transact with counterparties at other banks, insurers, or networks through gateways: authenticated, logged, and policy-bound on both sides.

#### Closing CTA — Go operational in thirty days.
Thirty days. AstridOS on your three highest-risk workflows. Fixed scope, fixed price, and a governance report your risk and compliance teams can act on at the end. Start with a 45-minute live demo: see the agent intercepted, classified, and signed in your own environment.

*Deploy how you need it — cloud managed service, on-premise, or fully air-gapped for data residency and sovereign requirements. Same runtime, same guarantees.*

**[ Book a live demo ]**
enterprise@unicity.ai · www.unicity.ai · Zug · Tallinn · Abu Dhabi

---

### 3.4 Gaming & Casino Operations

> **Industry · Regulated gaming and casino operators**

#### Hero
**Your next million players won't arrive through a browser or an app.**

Agents are the third interface — after the web and the mobile app. Unicity is the secure agentic OS that lets regulated operators receive them at the front door: identity, value, settlement, and audit in one signed handshake. *(Hero hype/register flagged in Adversarial Review — consider reframing.)*

**[ Talk to the gaming team ]** · See the platform

#### Problem — Every twenty years, the interface changes.
The web made operators in 1995. The app made them in 2008. Each opened a roughly three-year window where the first movers became the giants of the next two decades. The third window is open now — and the funnel underneath it was built for humans, not agents.

- **Onboarding built for humans** — the average regulated onboarding funnel runs 25 minutes and loses 30% of attempted players to KYC drop-off, card declines, and friction. The agent doesn't have a funnel.
- **Thirty years of on-ramp cost** — card processing, chargebacks, PSP stacks, deposit funnels: 15–35% of GGR spent moving money onto your platform. The agent arrives with the money, KYC'd upstream.
- **Retention talking to an empty inbox** — operators spend $5–10 per active player per year on CRM to send promotions that 92% of recipients never open. The agent is a channel the player already uses.
- **Personalization that guesses** — telemetry and CRM segments infer attention from clicks and deposits. The agent knows when the player is actually present, because the player just spoke to it.

#### Solution — One OS for receiving agents. One integration.
Unicity unifies identity, value, settlement, and audit into a single operator surface that sits under any agent deployment — no rip-and-replace. Agents onboard in seconds through a signed handshake carrying wallet, KYC, and risk caps. Stop-loss and time limits are enforced structurally, not by policy reminder. Every wager settles per-transaction, sub-second, with a verifiable trail.

- **Onboarding in seconds** — wallet, KYC, and risk caps arrive in one signed handshake. First wager in seconds, not sessions. The 30% abandon rate disappears.
- **Payments stack collapses** — players hold MiCA-compliant stablecoins (USDC, EURC) in agent wallets, KYC'd upstream. No card network, no PSP integrations, no deposit funnel: 15–35% of GGR back on the P&L.
- **Retention becomes a conversation** — the Friday reload arrives in chat, in context, when it matters. Delivered: 100%. The CRM stack was a workaround for a channel that's now alive.
- **Personalization by timing** — real attention is signal you can't get anywhere else, surfaced with player permission, signed, and auditable. The only personalization that has ever worked.

#### Capabilities — Everything an operator needs to deploy agents safely at scale.
Six pillars on a single platform, where other vendors solve one piece. Built on a three-layer stack: bring any agent framework on top, the AOS9 runtime enforces policy at the kernel, and the Unicity L1 settles value and identity below.

- **Security** — verifiable execution for every agent. Every model output, tool call, and decision passes through the runtime; enforcement at the kernel, where tools cannot bypass it.
- **Compliance** — KYC attestations, risk caps, and session limits bound to the agent and enforced structurally, per transaction. Your regulatory obligations, built into the rail.
- **Payments** — peer-to-peer transfer of regulated stablecoins with cryptographic finality. No card network, no payment processor, no deposit queue.
- **Networking** — peer-to-peer agent-to-agent messaging across regulated counterparties. No shared ledger, no central router. Sub-second.
- **Governance** — policy enforcement at the agent level. Limits, exclusions, and permissions defined once, applied across every interaction.
- **Audit** — every action signed and witnessed. Compliance evidence is a query, not a CSV. Regulators verify rather than trust.

#### Proof — Nation-state cryptography, applied to the gaming rail.
Unicity Labs is founded by PhDs in machine learning and cryptography, applying fifteen years of nation-state-grade engineering to the rail your agents transact on. The infrastructure agents run on is already in production: Mastercard and Santander cleared Europe's first live agent-initiated bank payment in March 2026, with Visa Intelligent Commerce and Mastercard Agent Pay rolling out across US cardholders. *(Mastercard/Visa claim flagged HIGH in Adversarial Review — these are industry-wide, not Unicity-specific; verify or remove before publish.)*

- **15 years** — of nation-state cryptographic engineering behind the settlement layer.
- **Founder exit** — CEO Mike Gault built and exited Guardtime (ADX:IHC); ex-MD at Barclays Capital.
- **Category timing** — the web (1995), mobile (2008), and now agents (2026): each a three-year window. This one is six months old and already real.

**Trusted by:** NATO · DARPA · Lockheed · Boeing · BIS · Maersk · ESA

#### Use Cases — What it looks like in production.
Concrete moments where the agent channel changes the operator economics.

- **Agent-initiated sessions** — an agent bound to a player opens a session (say a £40 reload with 50 free spins) with stop-loss and a time cap enforced in the signed session card before the first wager.
- **Per-wager settlement** — each wager settles sub-second with cryptographic finality and a signed execution trail, replacing card rails and chargeback exposure entirely.
- **Live retention in chat** — promotions reach the player in the conversation they're already in: delivered, contextual, and timed to real attention rather than a CRM's best guess.
- **One pane of glass** — the Enterprise Console gives operators security, governance, networking, and payments on one control plane: every agent, every policy, every payment.

#### Closing CTA — Forty-five days to production.
One integration. One sprint. AOS9 deploys alongside your existing wallet and game engine — no replacement, no migration. Weeks 1–3 install, weeks 4–6 integrate against a reference agent with compliance and security review in parallel, week 7 live. Then you start onboarding agents at scale.

**[ Talk to the gaming team ]** · Read the docs

---

## 4. Cross-vertical consistency table

**Shared "What is Unicity" blurb** (use verbatim in meta description, nav hover, and any shared "About Unicity" footer block):

> *Unicity is a secure compute platform for AI agents. Bring any agent framework, run it on the Unicity AOS kernel where every prompt, tool call, and decision is enforced in-path, and settle on the Unicity L1 — cryptographic identity, runtime governance, and tamper-evident audit, on your own infrastructure.*

| Vertical | One-line positioning | Primary CTA | Secondary CTA | Proof logo set | Notable page-specific element |
|---|---|---|---|---|---|
| **Telecom** | The secure agentic compute platform telecom operators run on their own rails. | Book a live demo | — | Defense spine **+ Verizon** | Concierge phone UI; ARPU/own-the-layer angle |
| **MSSP** | The kernel an MSSP secures, proves, and bills its clients' agents on. | Book a live demo | Talk to the team | Defense spine (Unicity refs) | CyberKnight co-brand; service-line use cases |
| **Finance** | The security and settlement layer auditors can sign off on. | Book a live demo | — | **Finance heritage set** (BIS/SEB/KPMG/EY/WTW) | 30-day pilot; `[PLACEHOLDER]` finance proof |
| **Gaming** | The agentic OS that lets regulated operators receive agents at the front door. | Talk to the gaming team | See the platform / Read the docs | Defense spine | "Third interface" history; 45-day deploy timeline |

**Notes for consistency:**
- Three of four use **"Book a live demo"**; Gaming uses **"Talk to the gaming team."** Recommend keeping Gaming's variant (different buyer motion) but confirm against the live DeFi/Devs CTA convention.
- The **defense/aerospace logo spine** (NATO · DARPA · Lockheed · Boeing · BIS · Maersk · ESA) is the shared backbone; Telecom adds Verizon, Finance swaps to the heritage finance set.

---

## 5. Reusable assets, grouped by vertical

All paths are web-root-relative (served from `/public`). Status: **✓** present in `public/`; **`[RECOVER]`** exists only in old `dist/logos/` build (copy into `public/logos/`).

**Shared / all pages**
- `✓ /UnicityLogo.svg` — header wordmark
- `✓ /close-splash.png` — closing-CTA full-bleed background
- `✓ /dashboards/overview.png` — operator console / one-pane-of-glass
- `✓ /dashboards/governance.png` — agent inventory & governance
- `✓ /dashboards/security.png` — DLP / semantic firewall
- `✓ /dashboards/payments.png` — cost / budget / settlement
- `✓ /team/mike.jpg` — Mike Gault (CEO)
- `✓ /team/tony.png` *(also `/team/Tony.jpeg`)* — Tony Kenyon (CTO/CPTO)
- Defense logo spine: `✓ /logos/nato.png` · `✓ /logos/darpa.png` · `✓ /logos/lockheed.png` · `✓ /logos/boeing.png` · `✓ /logos/bis.png` · `✓ /logos/maersk.png` · `✓ /logos/esa.png`

**Telecom**
- `✓ /concierge/Concierge1.png` — hero / use-cases concierge phone UI (primary)
- `✓ /concierge/Concierge6.png` — use-cases, pairs with "Revenue you own"
- `✓ /dashboards/use-cases-console.png` — operator console for all agent workloads
- `✓ /logos/verizon.svg` — telecom credential in logo strip

**MSSP**
- `✓ /cyberknight.svg` — "Unicity × CyberKnight" co-brand lockup
- (uses shared dashboards + defense spine; **boeing** is in the set here, not in Telecom's)

**Finance**
- `✓ /sif-dashboard.png` — Semantic Intercept Fabric (sub-20ms inspection)
- `✓ /agentstack-screenshot.png` — AstridOS runtime / kernel enforcement
- `✓ /agentsphere-dashboard.jpeg` — cross-institution / AgentSphere network
- `✓ /unicity-paradigm.svg` — three-layer L1/L2/L3 stack diagram
- `✓ /logos/bis.png` — the one finance logo already canonical
- `[RECOVER] /logos/seb.png` — from `dist/logos/14_seb.png` *(confirmed present)*
- `[RECOVER] /logos/kpmg.png` — from `dist/logos/15_kpmg.png` *(confirmed present)*
- `[RECOVER] /logos/ey.png` — from `dist/logos/24_ey.png` *(confirmed present)*
- `[RECOVER] /logos/willis_towers.png` — from `dist/logos/18_willis_towers.png` *(confirmed present)*
  *(Copy + rename into `public/logos/`. Confirm heritage-vs-customer attribution wording before rendering — see Open Questions.)*

**Gaming**
- `✓ /dashboards/security.png` — Security pillar / Enterprise Console preview
- `✓ /dashboards/governance.png` — Governance/Compliance pillar
- `✓ /dashboards/networking.png` — Networking pillar
- `✓ /dashboards/payments.png` — per-wager settlement
- `✓ /dashboards/overview.png` — "one pane of glass" Enterprise Console

---

## 6. Build checklist (to ship in code)

**Access & repo**
- [ ] **Website repo URL + write access to the `mike` branch.** This deck repo is not the site. Confirm framework (Next.js / Astro / other), package manager, and local-run command.
- [ ] Copy the four verticals' assets from this deck repo's `/public/...` into the website repo's public/static dir (or wire a shared asset pipeline). Don't hand-copy from `dist/` — use the canonical `public/` originals, except the four `[RECOVER]` finance logos.

**Design system & component reuse (from existing DeFi / Devs pages)**
- [ ] Locate the live **DeFi** and **Devs** Industry page source on `mike`. Extract and reuse: hero component, stat/insight card, capability-grid (2×3), stat strip, **trusted-by logo row**, closing-CTA band.
- [ ] Confirm exact **card counts** the built pages use per section, and whether they cap Capabilities at 6 — adjust this kit's grids if they differ.
- [ ] Match **CTA component** (button style, link style, single-vs-dual CTA) and confirm whether the convention is a contact form, Calendly, mailto, or docs link.
- [ ] Confirm **partner co-brand** handling — do DeFi/Devs show any partner lockup? This determines whether MSSP renders the CyberKnight lockup or stays Unicity-only.
- [ ] Confirm **logo-strip treatment** (greyscale/mono vs. color; max count; mobile wrap).

**Routing & nav**
- [ ] Add four routes under the Industry section: `/industry/telecom`, `/industry/mssp`, `/industry/finance`, `/industry/gaming` (match existing slug convention for `defi`/`devs`).
- [ ] Add four **Industry nav entries** in the order the team wants relative to DeFi & Devs.
- [ ] Per-page **meta title, description, OG image** (reuse the shared "What is Unicity" blurb for descriptions; pick a hero/dashboard image per page for OG).
- [ ] Internal linking: any "Read the docs" CTA points to the docs site (https://unicitynetwork.github.io/unicity-docs/); confirm canonical docs URL.

**Pre-publish content gates**
- [ ] Resolve the **`[PLACEHOLDER]` finance proof** — page cannot publish with it.
- [ ] Settle **canonical contact** (one email + one domain) and apply across all four closing CTAs.
- [ ] Legal/comms sign-off on analyst stats and on **client logo usage** (defense relationships; heritage-vs-customer wording).

---

## 7. Open questions / placeholders

**Blocking (must resolve before publish)**
1. **Finance proof `[PLACEHOLDER]`.** No finance-specific customer, pilot outcome, or compliance reference exists in source. Provide one or cut the card.
2. **Heritage vs. current-customer attribution.** BIS, SEB, KPMG, EY, Willis Towers Watson are the team's *Guardtime-era* work, not Unicity customers. Get legal/comms-approved wording so the logo row isn't read as a current-customer claim. Same caution for the defense spine.
3. **MSSP proof framing.** All listed customers are Unicity's own, not MSSP deployments. Confirm the Proof section flags them as Unicity references, not implied MSSP wins.
4. **Canonical contact.** Decks use `unicity.ai` / `enterprise@unicity.ai` / a UAE phone; the live explorer is `unicity.network`. Pick one email + one domain sitewide.

**Template / parity**
5. **DeFi & Devs page source not in this repo** (deck repo only). Need those files to lock headline length, section density, card counts, and component names. This is the single biggest parity dependency.
6. **CTA convention.** Confirm whether the live pages use contact form, Calendly, mailto, or docs link — and whether Gaming's "Talk to the gaming team" / dual-CTA pattern is allowed or should normalize to "Book a live demo."
7. **Industry nav ordering** for the four new pages relative to DeFi and Devs.
8. **Partner co-brand.** Whether the MSSP page carries the explicit CyberKnight lockup, given DeFi/Devs may be Unicity-only.

**Content judgment calls**
9. **Analyst stats & forward-looking projections** (Gartner 150k/87%, NVIDIA 100:1, McKinsey $4.4T, Gartner 46%). Cleared for a public marketing page, or soften/source more precisely?
10. **Defense logos on a public site.** NATO/DARPA/Lockheed/Boeing are sensitive. Render as a logo strip, or name verticals only?
11. **Currency localization (Gaming).** GBP examples (£40 reload). Localize to USD/EUR or stay currency-neutral?
12. **Named individuals.** Gaming deck names Alan Radi as vertical lead; whether named people appear on public Industry pages or only on a separate About/Team page.
13. **Technical depth.** Whether AOS kernel / Semantic Intercept Fabric detail stays inline or moves behind a "Read the docs" link.
14. **`[RECOVER]` finance logos.** Confirmed present in `dist/logos/` (`14_seb`, `15_kpmg`, `24_ey`, `18_willis_towers`) — recoverable, contingent on the attribution decision (Q2) before they render.

---

# Appendix A — Adversarial Review (required edits before publish)

> An independent reviewer cross-checked the kit against the source decks. **Caveat:** the reviewer hit a transient sandbox error partway through, so some source-verification was done from earlier reads rather than fresh `git show` checks — treat the factual claims below (esp. team titles) as *items to verify*, not settled facts.

| # | Vertical | Issue | Severity | Suggested fix |
|---|---|---|---|---|
| 1 | All | Tony Kenyon title = "CPTO" / "25 years principal architect" not found in source decks (source: "Product: PhD ML/Cybersecurity, Vitruvian, BT, Nokia, A10"; Vladimir Rogojin listed as CTO) | HIGH | Verify current org chart; revert to exact source-deck wording |
| 2 | Finance | Mastercard/Visa "first live agent-initiated payment" claims have no Unicity link in source — reads as implied endorsement | HIGH | Remove, or reframe to "infrastructure already in production" without card-network examples unless a signed co-brand exists |
| 3 | Finance | `[PLACEHOLDER]` finance proof point blocks publish | CRITICAL | Insert one named bank/payment customer or pilot outcome, or cut the card |
| 4 | MSSP | "Trusted by" defense logos read as MSSP-deployed wins | MEDIUM | Add caption: "Built by the team behind these deployments. MSSP case studies on request," or move to a Team-Heritage block |
| 5 | Gaming | Hero "third interface" is hype/speculation, off the restrained register the other three hold | MEDIUM | Reframe, e.g. "Agents are the third distribution channel for regulated operators. Unicity is the secure agentic OS operators run at the front door." |
| 6 | Finance | "AstridOS" vs "AOS-9" used inconsistently (enterprise deck uses "AOS-9 INTERCEPT", no "AstridOS") | MEDIUM | Pick one canonical name; standardize and verify against the live site |
| 7 | Telecom/MSSP/Finance | Analyst stats (Gartner 150k/87%, 46%) lack inline source/year a web page can stand behind | MEDIUM | Add inline "(Gartner 2025)" attribution or drop the percentages |
| 8 | MSSP | CyberKnight co-brand only in eyebrow/asset list, not in rendered copy | MEDIUM | Ensure the lockup renders in hero/proof on the live page |
| 9 | All | NATO/DARPA/Lockheed/Boeing defense logos on a public commercial site — geopolitical/export sensitivity | MEDIUM | Confirm legal/comms clearance per region (EU/US/MENA); consider gating |
| 10 | Gaming | Deployment-model sentence is identical to Finance (not verticalized) | LOW | Reframe for gaming/regulator concerns (residency, sovereign gaming zones) |
| 11 | Telecom | Concierge images have no captions; web readers won't know what they show | LOW | Add 1-line captions under concierge UI images |
| 12 | Gaming | GBP examples (£40) not localized | LOW | Localize to USD/EUR or keep currency-neutral |
| 13 | All | "agent" vs "software" register — **all four pages comply.** No issue. | — | — |
