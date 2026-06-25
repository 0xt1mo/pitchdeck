/* ============================================================
   Unicity → Padra Clinic. Two sections:
   I · THE PITCH (why governed agents)  ·  II · WHAT WE PROPOSE
   (the 5 call-center modules + demo Module 1).
   0xt1mo voice, our design system. Hero = Padra; Guide = Unicity.
   Fact-disciplined: "Padra reports" for self-reported claims;
   "designed for" sub-20ms (not benchmarked); demo mockups are
   illustrative; stack = Odoo + XCALLY + HubSpot.
   ============================================================ */

const mono = "'Geist Mono', monospace";
const anton = "'Anton', sans-serif";

const SCOPE = `
.px{font-family:'Geist Mono',monospace}
.px .o{color:var(--color-orange-400)}
.px b{color:#FEFEFE;font-weight:600}
.px .lblc{font-family:'Anton',sans-serif}
`;

function Shell({ children, center = false }: { children: React.ReactNode; center?: boolean }) {
  return (
    <div className="px fixed inset-0 z-50 bg-[#060606] overflow-y-auto lg:overflow-hidden">
      <style>{SCOPE}</style>
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 58% 50% at 50% 48%, rgba(255,137,4,0.07), transparent 70%)' }} />
      <div className={`relative z-10 min-h-full lg:h-full flex flex-col justify-start lg:justify-center px-6 sm:px-12 lg:px-24 py-14 sm:py-16 lg:py-20 ${center ? 'items-center text-center' : ''}`}>
        {children}
      </div>
    </div>
  );
}

function H({ main, sub }: { main: string; sub: string }) {
  return (
    <div className="shrink-0">
      <h1 className="text-[#fefefe] uppercase text-[30px] sm:text-[40px] lg:text-[52px] leading-[1.06] tracking-tight" style={{ fontFamily: anton }} dangerouslySetInnerHTML={{ __html: main }} />
      <p className="text-[#fefefe] font-medium text-base sm:text-lg lg:text-xl mt-3 max-w-[92ch] leading-snug" dangerouslySetInnerHTML={{ __html: sub }} />
    </div>
  );
}

function Core({ html, className = '' }: { html: string; className?: string }) {
  return <p className={`text-[#D6D6D0] text-base sm:text-lg lg:text-xl leading-[1.55] mt-5 ${className}`} dangerouslySetInnerHTML={{ __html: html }} />;
}

const cellCls = 'rounded-lg border border-[#2c2c2a] border-t-2 border-t-orange-500 bg-[#101010] p-4 lg:p-5';
const ctCls = 'text-orange-400 uppercase tracking-wide text-base lg:text-xl lblc';
const ckCls = 'text-[#D6D6D0] text-sm lg:text-lg mt-2 leading-snug';

/* a reusable module slide: eyebrow + headline + 3 blocks (does / how / governs) */
function ModuleSlide({ eyebrow, main, sub, does, how, govern }: { eyebrow: string; main: string; sub: string; does: string; how: string; govern: string }) {
  const blocks: [string, string, boolean][] = [['What it does', does, false], ['How it works', how, false], ['What Unicity governs', govern, true]];
  return (
    <Shell>
      <p className="text-orange-400 text-xs sm:text-sm lg:text-base tracking-[0.3em] uppercase mb-3" style={{ fontFamily: mono }}>{eyebrow}</p>
      <H main={main} sub={sub} />
      <div className="shrink-0 grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-5 mt-7">
        {blocks.map(([t, d, hot]) => (
          <div key={t} className={`rounded-lg border bg-[#101010] p-4 lg:p-5 ${hot ? 'border-orange-500 border-t-2' : 'border-[#2c2c2a]'}`}>
            <div className={`uppercase tracking-wide text-sm lg:text-base lblc ${hot ? 'text-orange-400' : 'text-[#9E9E96]'}`}>{t}</div>
            <div className="text-[#D6D6D0] text-sm lg:text-lg mt-2.5 leading-snug">{d}</div>
          </div>
        ))}
      </div>
    </Shell>
  );
}

/* ══════════════ SECTION I — THE PITCH ══════════════ */

/* 2 · THE SHIFT */
export function PadraShiftSlide() {
  return (
    <Shell>
      <H main='The patient journey is <span class="o">going agentic.</span>' sub="Padra reports over a million cases in 25 years — Saudi Arabia, the UAE, Qatar, Kuwait, and Canada — every patient arriving first by WhatsApp." />
      <div className="shrink-0 flex flex-col lg:flex-row lg:items-start gap-5 lg:gap-14 mt-6 lg:mt-8">
        <div className="shrink-0">
          <div className="text-orange-400 leading-[0.8]" style={{ fontFamily: anton, fontSize: 'min(168px, 17vw)' }}>~20→3</div>
          <div className="text-[#9E9E96] uppercase tracking-wide text-sm lg:text-base mt-3 max-w-[34ch] leading-snug">human agents per branch — Padra's own target as the AI takes the routine load</div>
        </div>
        <Core className="mt-0" html="A medical-tourism clinic runs on the phone before it runs in the chair — inquiry, photos, a price, travel, booking, aftercare, all remote, in Arabic and English, across five markets. Padra is automating that journey on Odoo, XCALLY, and HubSpot. <b>The agents are about to start acting on real systems.</b>" />
      </div>
    </Shell>
  );
}

/* 3 · THE DANGER */
export function PadraDangerSlide() {
  return (
    <Shell>
      <H main='The moment an agent acts, <span class="o">it becomes a liability.</span>' sub="Answering a question is safe. Quoting a graft price, booking surgery, or holding a patient's photos is not." />
      <Core html="An agent that writes to Odoo, sends a price, or moves a medical image is taking a regulated action no one approved and no one can replay. In Saudi Arabia and the UAE, patient data is barred from leaving the country. <b>This is why agentic projects stall</b> — Gartner expects more than 40% to be scrapped by 2027, with compliance the top blocker. The voicebot is the easy part. Control is the hard part." />
      <div className="shrink-0 grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-4 mt-7">
        {[
          ['Quotes a price', 'with no doctor behind it'],
          ['Books surgery', 'into a slot that is not free'],
          ['Holds patient data', 'with no consent, no boundary'],
        ].map(([t, d]) => (
          <div key={t} className={cellCls}><div className={ctCls}>{t}</div><div className={ckCls}>{d}</div></div>
        ))}
      </div>
    </Shell>
  );
}

/* 4 · THE ANSWER */
export function PadraAnswerSlide() {
  return (
    <Shell>
      <H main='Unicity sits between the agent <span class="o">and the systems.</span>' sub="It runs between Padra's AI agents, XCALLY, and Odoo — governing what each agent may see, say, update, and trigger." />
      <Core html="Every agent asks permission <b>before</b> it acts, and leaves a tamper-evident record <b>after</b>. The doctor stays in the loop where it matters. XCALLY still runs the calls and Odoo still holds the records — Unicity makes the agents safe enough to operate across both." />
      <div className="shrink-0 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5 mt-8">
        {[
          ['XCALLY', 'Calls, WhatsApp, chat, queues, recordings, handover'],
          ['Unicity', 'Identity · permission · policy · approval · audit'],
          ['Odoo · HubSpot', 'Patient records, cases, bookings, doctor review, pricing'],
        ].map(([t, d], i) => (
          <div key={t} className={`rounded-lg border bg-[#101010] p-4 lg:p-5 ${i === 1 ? 'border-orange-500 border-t-2' : 'border-[#2c2c2a]'}`}>
            <div className={`uppercase tracking-wide text-base lg:text-xl lblc ${i === 1 ? 'text-orange-400' : 'text-[#fefefe]'}`}>{t}</div>
            <div className={ckCls}>{d}</div>
          </div>
        ))}
      </div>
    </Shell>
  );
}

/* 5 · THE POLICY ENGINE (the killer slide) */
const policy = [
  ['Collect consultation photos', 'allowed', false],
  ['Issue a medical diagnosis', 'never', true],
  ['Relay a graft estimate', 'only after a doctor enters it in Odoo', false],
  ['Offer appointment slots', 'only from live Odoo availability', false],
  ['Escalate VIP, angry, or high-risk cases', 'required', false],
  ['Store an image or recording', 'only with captured consent', false],
];
export function PadraPolicySlide() {
  return (
    <Shell>
      <H main='Collect the photo. <span class="o">Never the diagnosis.</span>' sub="The Policy Engine gives every agent a boundary — checked the instant before it acts." />
      <div className="shrink-0 mt-6">
        {policy.map(([t, d, deny], i) => (
          <div key={t as string} className={`flex items-baseline gap-5 py-3.5 border-t border-[#2c2c2a] ${i === policy.length - 1 ? 'border-b' : ''}`}>
            <span className="text-[#fefefe] text-base lg:text-xl flex-1 min-w-0">{t}</span>
            <span className={`shrink-0 text-right text-sm lg:text-lg ${deny ? 'text-[#9E9E96]' : 'text-orange-400'}`} style={{ fontFamily: mono }}>{d}</span>
          </div>
        ))}
      </div>
      <p className="shrink-0 mt-6 text-[#fefefe] font-semibold text-lg lg:text-2xl">If an agent cannot satisfy the rule, <span className="text-orange-400">the action does not happen.</span></p>
    </Shell>
  );
}

/* 6 · WHY UNICITY */
export function PadraWhyUnicitySlide() {
  return (
    <Shell>
      <H main='Fifteen years of <span class="o">sovereign-grade cryptography.</span>' sub="Unicity is not a startup learning the problem today. The platform is already built — and the team built the cryptography behind it." />
      <Core html="The founders built Guardtime's <b>KSI</b>, in production since 2012 with governments and global institutions. The runtime is real: agents run as sandboxed capsules <b>on top of</b> the Astrid microkernel, so a prompt injection cannot escape it, and the Semantic Intercept Fabric inspects every action — <b>designed for sub-20ms</b> inline classification before a command reaches your systems." />
      <div className="shrink-0 grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-4 mt-8">
        {[
          ['Intercept', 'Every command checked beneath the app, before it touches Odoo or XCALLY'],
          ['Resident', 'Run an in-country or local model — patient data stays resident in each market'],
          ['Provable', 'Tamper-evident audit of every action — verifiable, end to end'],
        ].map(([t, d]) => (
          <div key={t} className={cellCls}><div className={ctCls}>{t}</div><div className={ckCls}>{d}</div></div>
        ))}
      </div>
    </Shell>
  );
}

/* ══════════════ DIVIDER ══════════════ */
export function PadraProposeDividerSlide() {
  return (
    <Shell center>
      <p className="text-orange-400 text-xs sm:text-sm lg:text-base tracking-[0.4em] uppercase" style={{ fontFamily: mono }}>Section II</p>
      <h1 className="text-[#fefefe] uppercase text-[44px] sm:text-[72px] lg:text-[104px] leading-[0.92] tracking-tight mt-4" style={{ fontFamily: anton }}>
        What we <span className="text-orange-400">propose.</span>
      </h1>
      <div className="h-[2px] w-40 lg:w-56 bg-gradient-to-r from-orange-500 to-transparent mt-6" />
      <p className="text-[#D6D6D0] text-base sm:text-lg lg:text-2xl mt-6 max-w-[72ch] leading-snug" style={{ fontFamily: mono }}>The full AI call center — five modules, one governed control layer. We start by proving Module 1.</p>
    </Shell>
  );
}

/* ══════════════ SECTION II — THE PROPOSAL ══════════════ */

/* 8 · SOLUTION OVERVIEW */
const moduleList = [
  ['01', 'Acquisition', 'Capture & qualify every lead, every channel, every language'],
  ['02', 'Consultation & Booking', 'Photos, doctor-approved estimate, live booking'],
  ['03', 'Outbound Voicebot', 'Telesales, no-show recovery, reminders'],
  ['04', 'Aftercare', 'Day-by-day guidance, recovery photos at 1/3/6 months'],
  ['05', 'Quality Assurance', 'Score 100% of calls, audit what the human typed'],
];
export function PadraOverviewSlide() {
  return (
    <Shell>
      <H main='The full call center, <span class="o">in five modules.</span>' sub="One AI ecosystem across WhatsApp, web, and voice — in nine languages, Arabic dialects included — on Padra's own Odoo, XCALLY, and HubSpot." />
      <div className="shrink-0 mt-6">
        {moduleList.map(([n, t, d], i) => (
          <div key={n} className={`flex items-baseline gap-5 py-3.5 border-t border-[#2c2c2a] ${i === moduleList.length - 1 ? 'border-b' : ''}`}>
            <span className="text-orange-400 shrink-0 w-10 text-2xl lg:text-3xl" style={{ fontFamily: anton }}>{n}</span>
            <span className="text-[#fefefe] uppercase text-lg lg:text-2xl shrink-0 w-[190px] lg:w-[320px]" style={{ fontFamily: anton }}>{t}</span>
            <span className="text-[#D6D6D0] text-sm lg:text-lg leading-snug">{d}</span>
          </div>
        ))}
      </div>
      <p className="shrink-0 mt-6 text-[#fefefe] font-semibold text-lg lg:text-2xl">Every module is an agent under the same control layer — <span className="text-orange-400">identity, policy, proof.</span></p>
    </Shell>
  );
}

/* 9–13 · THE FIVE MODULES */
export function PadraModule1Slide() {
  return (
    <ModuleSlide
      eyebrow="Module 01 · Acquisition"
      main='Every lead, every channel, <span class="o">captured the instant it lands.</span>'
      sub="Speed-to-lead is the lever on a high-value procedure. The agent answers in seconds, in the patient's own language."
      does="Captures and qualifies inbound from WhatsApp, web, Instagram, and Facebook — in nine languages, Arabic dialects included (Saudi, Hijazi, Najdi, Qatari) — logging name, contact, age, and country, and handing VIP or critical cases to a human."
      how="A Lead Capture agent runs as a sandboxed capsule inside Astrid, scoped to create leads in Odoo and nothing more. Its model is swappable — run an in-country or local model so patient data stays resident in each market — Saudi Arabia, the UAE, and beyond."
      govern="A registered, revocable identity with least-privilege scope; controlled VIP handover; and a DLP scan on every message, so no patient data crosses the clinic boundary."
    />
  );
}
export function PadraModule2Slide() {
  return (
    <ModuleSlide
      eyebrow="Module 02 · Consultation & Booking"
      main='The doctor stays in the loop. <span class="o">The agent does the rest.</span>'
      sub="The most regulated, highest-stakes flow — pricing and medical images — automated everywhere except the diagnosis itself."
      does="Guides the patient through 4–6 diagnostic angles, opens the case for the doctor, relays the doctor's graft estimate the moment it is entered, and books from live Odoo availability."
      how="Photos move through secure execution and stay UAE-resident. The estimate is gated on a real doctor entry in Odoo. The agent pauses for approval, then continues — no human keystroke needed to relay."
      govern="The Policy Engine, live: collect photos yes, diagnose never, quote only after the doctor, book only from live availability — and explicit, withdrawable consent before any image is stored (UAE and Saudi data-protection law)."
    />
  );
}
export function PadraModule3Slide() {
  return (
    <ModuleSlide
      eyebrow="Module 03 · Outbound Voicebot"
      main='Recover the leads and the slots <span class="o">you lose today.</span>'
      sub="Telesales follow-up, no-show recovery, and reminders — the workflows that leak revenue when humans run out of hours."
      does="Calls leads who inquired but did not book, calls patients 1–2 hours after a missed slot to reschedule, and confirms appointments 24 hours and 3–4 hours ahead by voice or WhatsApp."
      how="An outbound agent dials through XCALLY under strict rate and budget limits — it cannot exceed its granted authority or dial outside its allowlist, and a misbehaving campaign halts in-path."
      govern="Time-bounded, rate-limited authority; angry or high-risk calls escalate by rule; no price beyond the doctor-set threshold; every contact, reschedule, and reason logged."
    />
  );
}
export function PadraModule4Slide() {
  return (
    <ModuleSlide
      eyebrow="Module 04 · Aftercare"
      main='Aftercare that arrives <span class="o">before they ask.</span>'
      sub="Recovery guidance and follow-up, delivered on schedule — the standard of care, every patient, every time."
      does="Delivers Day 3 (donor) and Day 10 (transplant) washing guidance, then requests recovery photos at the 1-, 3-, and 6-month marks, onto the doctor's dashboard."
      how="A scheduling engine fires each trigger; inbound photos move through secure execution and stay resident. Content-bound controls keep the agent on approved guidance and block out-of-scope medical advice."
      govern="Approved content only and never a new diagnosis; separate consent before storing follow-up photos; every image encrypted, role-restricted, inside the boundary; every touchpoint audited."
    />
  );
}
export function PadraModule5Slide() {
  return (
    <ModuleSlide
      eyebrow="Module 05 · Quality Assurance"
      main='Score every call. <span class="o">Audit what the human typed.</span>'
      sub="100% of interactions — not a sample — graded against the rubric, with the CRM entries checked against the conversation."
      does="Transcribes every call, scores each human agent out of 5 (greeting, probing questions, script), verifies the dates, numbers, and complaint categories keyed into the CRM, and tracks sentiment and CSAT/NPS on one dashboard."
      how="A QA agent reads XCALLY recordings and cross-checks the transcript against the CRM — scoped to transcripts, with no write access. The same audit substrate that logs the AI agents now grades the humans."
      govern="One audit-ready record that answers the regulator's questions from one place: who captured, who consented, who approved, what was sent, what was entered."
    />
  );
}

/* 14 · DEMO MODULE 1 — the WhatsApp lead-capture conversation (illustrative) */
type Msg = { who: 'a' | 'p' | 'photo' | 'chip' | 'slots'; text: string };
const convo: Msg[] = [
  { who: 'a', text: "Hello — I'm Padra's assistant. Looking into a hair transplant?" },
  { who: 'p', text: 'Yes. How much?' },
  { who: 'a', text: 'I can set up a free consultation. May I save your details? Withdraw any time.' },
  { who: 'chip', text: 'consent captured · before anything is stored' },
  { who: 'a', text: 'Could you send 4–6 photos — front, top, sides, and back?' },
  { who: 'photo', text: '3 photos' },
  { who: 'a', text: 'Got them. A doctor reviews first — then your exact estimate. Dubai slots:' },
  { who: 'chip', text: 'price withheld until the doctor approves' },
  { who: 'slots', text: 'Tue 10:00 · Wed 14:00 · Thu 16:00' },
];
function PhoneMockup() {
  return (
    <div className="w-[290px] sm:w-[300px] rounded-[34px] border border-[#2c2c2a] bg-[#0a0a0a] p-2.5 shrink-0" style={{ boxShadow: '0 30px 60px rgba(0,0,0,0.55)' }}>
      <div className="rounded-[26px] bg-[#0d0d0c] overflow-hidden h-[558px] flex flex-col">
        {/* header */}
        <div className="flex items-center gap-2.5 px-3.5 py-3 border-b border-white/5 shrink-0">
          <div className="w-7 h-7 rounded-full bg-orange-500 flex items-center justify-center text-[10px] text-[#0a0a0a] lblc">PA</div>
          <div className="min-w-0">
            <div className="text-[#fefefe] text-[12px] font-semibold leading-none">Padra · Concierge</div>
            <div className="flex items-center gap-1 mt-1"><span className="w-1.5 h-1.5 rounded-full bg-green-400" /><span className="text-[#9E9E96] text-[9px]">online</span></div>
          </div>
        </div>
        {/* body */}
        <div className="flex-1 overflow-hidden px-3 py-3 flex flex-col gap-1.5">
          {convo.map((m, i) => {
            if (m.who === 'chip') return <div key={i} className="flex items-center gap-1.5 my-0.5 self-center"><span className="w-1.5 h-1.5 rounded-full bg-orange-400" /><span className="text-orange-300/90 text-[9px] tracking-wide uppercase" style={{ fontFamily: mono }}>{m.text}</span></div>;
            if (m.who === 'photo') return <div key={i} className="self-end flex gap-1">{[0, 1, 2].map(k => <div key={k} className="w-9 h-9 rounded-md bg-orange-500/20 border border-orange-500/40" />)}</div>;
            if (m.who === 'slots') return <div key={i} className="self-start flex flex-wrap gap-1.5">{m.text.split(' · ').map(s => <span key={s} className="rounded-full border border-orange-500/50 text-orange-300 text-[10px] px-2.5 py-1">{s}</span>)}</div>;
            const mineP = m.who === 'p';
            return <div key={i} className={`flex ${mineP ? 'justify-end' : 'justify-start'}`}><div className={`max-w-[80%] rounded-2xl px-3 py-2 text-[11.5px] leading-snug ${mineP ? 'bg-orange-500 text-[#0a0a0a] rounded-br-sm font-medium' : 'bg-[#1f1f1d] text-[#e8e8e4] rounded-bl-sm'}`}>{m.text}</div></div>;
          })}
        </div>
        {/* input */}
        <div className="px-3 py-2.5 border-t border-white/5 shrink-0"><div className="rounded-full bg-[#1a1a18] text-[#6a6a64] text-[11px] px-3.5 py-2">Type a message…</div></div>
      </div>
    </div>
  );
}
export function PadraDemoSlide() {
  return (
    <Shell>
      <H main='Start with Module 1. <span class="o">In 45 days.</span>' sub="The WhatsApp lead-capture agent, end to end, on your Odoo and XCALLY — the lowest-risk, highest-volume entry point." />
      <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-14 mt-6">
        <div className="lg:flex-1 min-w-0">
          <Core className="mt-0" html="Watch the Policy Engine work inside the conversation: the agent captures <b>consent before it stores anything</b>, collects the photos, and <b>refuses to quote a price until a Padra doctor approves it</b> — then books from live availability." />
          <div className="mt-5 space-y-2.5">
            {[
              ['Lead', 'captured and written to Odoo, scoped'],
              ['Consent', 'explicit and withdrawable, before storage'],
              ['Photos', '4–6 angles, kept inside the UAE boundary'],
              ['Price', 'gated on the doctor — never invented'],
            ].map(([t, d]) => (
              <div key={t} className="flex items-baseline gap-3">
                <span className="text-orange-400 uppercase text-sm lg:text-base w-[88px] shrink-0 lblc">{t}</span>
                <span className="text-[#D6D6D0] text-sm lg:text-lg leading-snug">{d}</span>
              </div>
            ))}
          </div>
          <p className="mt-5 text-[#9E9E96] text-xs lg:text-sm leading-snug" style={{ fontFamily: mono }}>Illustrative concept of the Module 1 flow — we build it live on your stack.</p>
        </div>
        <div className="flex justify-center lg:justify-end"><PhoneMockup /></div>
      </div>
    </Shell>
  );
}

/* 16 · THE ASK */
export function PadraAskSlide() {
  return (
    <Shell>
      <H main='Ship the agent <span class="o">you cannot ship today.</span>' sub="The 45-day challenge — the one workflow your security team keeps blocking, made shippable." />
      <div className="shrink-0 mt-7 rounded-xl p-6 lg:p-8" style={{ border: '1px solid rgba(255,137,4,0.4)', background: 'linear-gradient(180deg, rgba(255,137,4,0.06), transparent)' }}>
        <div className="text-[#fefefe] text-2xl lg:text-3xl" style={{ fontFamily: anton }}>Pick the workflow the security team <span className="text-orange-400">keeps blocking.</span></div>
        <p className="text-[#D6D6D0] text-base lg:text-2xl mt-4 leading-relaxed max-w-[104ch]">We stand up the hair-transplant lead-capture agent end to end — lead, consent, photos, doctor-approved estimate, booking, escalation — governed and audit-ready, on your Odoo and XCALLY.</p>
      </div>
      <p className="shrink-0 mt-7 text-[#fefefe] font-semibold text-xl lg:text-2xl">Permission before the agent acts. <span className="text-orange-400">Proof after every action.</span></p>
    </Shell>
  );
}
