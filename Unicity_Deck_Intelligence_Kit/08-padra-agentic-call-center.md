# 08 · Padra & the Governed Agentic Call Center

The first **agentic-operations** proposal (vs the protocol/investor decks). Padra is the template for any customer who wants AI agents *taking actions* on their real systems — clinics, contact centers, regulated operators. Read this when the ask is "govern our agents," not "fund our protocol."

## The opportunity
**Padra Clinic** — the world's largest **hair-transplant + aesthetics** group (Fakhraei Medical Group; *not* dental). Five markets: **Saudi Arabia, the UAE, Qatar, Kuwait, Canada.** Medical tourism — the patient journey is WhatsApp-first (inquiry → photos → price → travel → booking → aftercare), in Arabic + English. The brief arrived as a failed PPTX Mike called "the worst deck on record." Mission: rebuild it as a Unicity proposal.

## The play (portable to any contact-center / regulated-ops vertical)
Unicity is the **governed control layer between the AI agents and the systems**: **Odoo** (system of record) · **XCALLY** (omnichannel platform) · **HubSpot** (CRM). *Permission before every action, proof after every one.* The agent acts; Unicity governs what it may see, say, update, and trigger.

## The deck shape — two sections
- **Section I · THE PITCH:** cover → the world-shift (*"The clinic now runs before the patient arrives"*) → the danger (*"The moment an agent acts, it becomes a liability"*) → the answer (Unicity between the agents and the systems) → the **Policy Engine** → why Unicity (15 yrs sovereign crypto, *"you cannot prompt-inject past a kernel boundary"*).
- **"What We Propose" divider** →
- **Section II · THE PROPOSAL:** the 5-module overview → the five modules → **demo Module 1** (45-day POC) → team (Mike · Tony · **Alan**) → the ask (*"Ship the agent you cannot ship today"*).

## The 5-module framework (reusable for any agentic-ops customer)
1. **Acquisition** — capture/qualify leads, omnichannel, multilingual, speed-to-lead.
2. **Consultation + Booking** — the doctor/expert stays in the loop; everything around it automated.
3. **Outbound Voicebot** — telesales, no-show recovery, reminders.
4. **Aftercare** — a proactive, scheduled program.
5. **Quality Assurance** — score 100% of calls, audit what the human typed into the CRM.

Each module slide = **what it does / how our platform powers it / what Unicity governs** (the governance block in orange ties it to identity · policy · audit). The "how" must pull from the *real* built platform (Astrid microkernel, Ed25519 agent identity, Semantic Intercept Fabric DLP, secure tool execution, swappable in-country model) — we **show** it, we don't invent it.

## Two custom visuals worth reusing
- **Policy Engine gate infographic** (inline SVG): the agent's actions hit a vertical membrane and sort into **PASS / HOLD / STOP** — visualizes *"the boundary the agent cannot cross."* Reusable for any permission/policy story.
- **Phone mockup** (React component, never a baked image): a WhatsApp-style conversation that shows governance *inside the chat* — consent captured before storage, price withheld until the doctor approves. Crisp, anonymizable, exports clean. (The same pattern rescued the Dan Andersson casino deck — `CasinoPhone` — when baked-brand PNGs broke confidentiality.)

## The process that worked when context is rich but chaotic
1. **Enrichment fleet (10 agents):** online research (company + industry + regulation) ∥ doc deep-dig (scope, modules, POC) ∥ mine our own GitHub for the real platform → a synthesizer merges into the two-section spec. It came back **fact-flagged** — that's the gold.
2. **Voice audit (5 agents):** four lenses + a DNA purist scored every line against 0xt1mo's real corpus; a voice-chief consolidated; **I was the final filter** (rejected foils — even his own *"below, not beside"*). See 01's "Field-tested elevations."

## Fact-discipline for a regulated (healthcare) buyer
- **"Padra reports"** for self-reported marketing (1M+ cases, 40+ Dubai ORs) — never as independently verified.
- **"~20→3 agents/branch"** = the client's stated target, hedged — not a guaranteed Unicity outcome.
- **Data residency:** Saudi Arabia + UAE bar patient data from leaving the country (UAE Federal Law 2/2019; Saudi PDPL). The swappable in-country / local model is the answer — name both markets, not just the UAE.
- **"designed for sub-20ms"** — a design target, not a benchmarked SLA.
- **KYA** = best-practice governance design, *not* a badge a clinic can claim compliance with.
- The demo flow is labeled **"illustrative concept until built on your stack."**
- The platform is **not healthcare-specific yet** — the clinical ontology / PHI model would need building (Alan owns that extrapolation).

## The lesson that bit
**XCALLY is NOT an agent.** It's the omnichannel CX *platform* (calls, WhatsApp, queues, recordings, handover) the agents operate *through* — never position it as an autonomous agent, never claim to replace it. (Alan confirmed via XCALLY's own product chat.) The clean stack story: **agents = the AI layer · XCALLY = the interaction platform · Odoo = system of record · HubSpot = CRM · Unicity = the control layer.**

## Where it lives
Branch **`padra`**, worktree `~/pitchdeck-padra` (port 5177). PDF `~/Downloads/Unicity_Padra_Proposal.pdf` (16 slides, ~4.8 MB). Built on the same React design system as the Greg decks (see 05), Alan on the team slide (see 07), two-section structure, fully responsive.
