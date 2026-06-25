/* ============================================================
   Unicity → Padra Clinic. The secure control layer for the
   clinic's AI call-center agents. 0xt1mo voice, our design
   system. Hero = Padra; Guide = Unicity.
   ============================================================ */

const mono = "'Geist Mono', monospace";
const anton = "'Anton', sans-serif";

const SCOPE = `
.px{font-family:'Geist Mono',monospace}
.px .o{color:var(--color-orange-400)}
.px b{color:#FEFEFE;font-weight:600}
.px .lblc{font-family:'Anton',sans-serif}
`;

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="px fixed inset-0 z-50 bg-[#060606] overflow-y-auto lg:overflow-hidden">
      <style>{SCOPE}</style>
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 58% 50% at 50% 48%, rgba(255,137,4,0.07), transparent 70%)' }} />
      <div className="relative z-10 min-h-full lg:h-full flex flex-col justify-start lg:justify-center px-6 sm:px-12 lg:px-24 py-14 sm:py-16 lg:py-20">
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

function Table({ cols, head, rows }: { cols: string; head: string[]; rows: (string | { v: string; cls?: string })[][] }) {
  const cell = (c: string | { v: string; cls?: string }, key: number, isHead = false) => {
    const v = typeof c === 'string' ? c : c.v;
    const cls = typeof c === 'string' ? '' : c.cls || '';
    return <div key={key} className={`px-4 lg:px-5 py-2.5 lg:py-3 text-sm lg:text-lg leading-snug border-r border-[#2c2c2a] last:border-r-0 ${isHead ? 'uppercase tracking-wide text-[#9E9E96] text-xs lg:text-sm' : ''} ${cls}`} style={isHead ? { fontFamily: anton } : undefined}>{v}</div>;
  };
  return (
    <div className="shrink-0 mt-5 -mx-6 sm:mx-0 overflow-x-auto">
      <div className="border border-[#2c2c2a] rounded-lg overflow-hidden min-w-[680px] sm:min-w-0 mx-6 sm:mx-0">
        <div className="grid border-b border-[#2c2c2a] bg-white/[0.025]" style={{ gridTemplateColumns: cols }}>{head.map((h, i) => cell(i === head.length - 1 ? { v: h, cls: 'text-orange-400' } : h, i, true))}</div>
        {rows.map((r, ri) => (
          <div key={ri} className="grid border-b border-[#2c2c2a] last:border-b-0" style={{ gridTemplateColumns: cols }}>{r.map((c, ci) => cell(c, ci))}</div>
        ))}
      </div>
    </div>
  );
}
const lbl = (v: string) => ({ v, cls: 'text-[#fefefe] uppercase lblc' });
const mut = (v: string) => ({ v, cls: 'text-[#9E9E96]' });
const win = (v: string) => ({ v, cls: 'text-orange-400' });

/* ════════ 2 · THE SHIFT ════════ */
export function PadraShiftSlide() {
  return (
    <Shell>
      <H main='The patient journey is <span class="o">going agentic.</span>' sub="Chatbots and voicebots now run lead capture, consultation, booking, and aftercare — across WhatsApp, web, Instagram, and voice." />
      <div className="shrink-0 flex flex-col lg:flex-row lg:items-start gap-5 lg:gap-14 mt-6 lg:mt-8">
        <div className="shrink-0">
          <div className="text-orange-400 leading-[0.8]" style={{ fontFamily: anton, fontSize: 'min(168px, 17vw)' }}>20→3</div>
          <div className="text-[#9E9E96] uppercase tracking-wide text-sm lg:text-base mt-3 max-w-[34ch] leading-snug">human agents per branch, as the AI takes the routine load</div>
        </div>
        <Core className="mt-0" html="Padra runs a million-case clinic across the UAE, Qatar, Kuwait, and Canada — on Odoo and XCALLY. The plan is an omnichannel AI layer that captures leads, qualifies patients, books surgery, and follows up. <b>The agents are about to start acting on real systems.</b>" />
      </div>
    </Shell>
  );
}

/* ════════ 3 · THE DANGER ════════ */
export function PadraDangerSlide() {
  return (
    <Shell>
      <H main='The moment an agent acts, <span class="o">it becomes a liability.</span>' sub="Answering a question is safe. Quoting a graft price, booking surgery, holding a patient's photos — that is not." />
      <Core html="An agent that writes to Odoo, sends a price, or moves a medical image is taking a regulated action no one approved and no one can replay. In a clinic, one wrong quote or one leaked photo is a complaint, a refund, or a regulator. <b>Automation without control is exposure.</b>" />
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

/* ════════ 4 · THE ANSWER ════════ */
export function PadraAnswerSlide() {
  return (
    <Shell>
      <H main='Unicity sits between the agent <span class="o">and the systems.</span>' sub="It runs between your AI agents, XCALLY, and Odoo — governing what each agent may see, say, update, and trigger." />
      <Core html="Every agent asks permission <b>before</b> it acts, and leaves a tamper-evident record <b>after</b>. The doctor stays in the loop where it matters. XCALLY still runs the calls and Odoo still holds the records — Unicity makes the agents safe enough to operate across both." />
      <div className="shrink-0 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5 mt-8">
        {[
          ['XCALLY', 'Calls, WhatsApp, chat, queues, recordings, handover'],
          ['Unicity', 'Identity · permission · policy · approval · audit'],
          ['Odoo', 'Patient records, cases, bookings, doctor review, pricing'],
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

/* ════════ 5 · THE POLICY ENGINE (the killer slide) ════════ */
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

/* ════════ 6 · AGENT REGISTRY ════════ */
export function PadraRegistrySlide() {
  return (
    <Shell>
      <H main='Every agent — <span class="o">a registered identity.</span>' sub="A live inventory of every AI agent in the call center: its role, the systems it may touch, and the actions it may take." />
      <Table cols="1.3fr 1.2fr 1.1fr 1.6fr"
        head={['Agent', 'Channel', 'System', 'Allowed actions']}
        rows={[
          [lbl('Lead Capture'), mut('WhatsApp · Web'), mut('Odoo CRM'), win('Create lead, update contact')],
          [lbl('Consultation'), mut('WhatsApp'), mut('Odoo + files'), win('Collect photos, open case')],
          [lbl('Booking'), mut('Voice · Chat'), mut('Odoo Calendar'), win('Offer slots, book appointment')],
          [lbl('No-Show'), mut('Voicebot'), mut('Odoo · XCALLY'), win('Call patient, reschedule')],
          [lbl('Aftercare'), mut('WhatsApp'), mut('Odoo record'), win('Send guidance, request photos')],
          [lbl('QA Auditor'), mut('XCALLY rec.'), mut('Transcripts'), win('Score calls, flag errors')],
        ]}
      />
    </Shell>
  );
}

/* ════════ 7 · THE SIX MODULES ════════ */
const modules = [
  ['Agent Registry', 'Every agent registered — role, owner, allowed systems, data, and actions.'],
  ['Policy Engine', 'What each agent can and cannot do — checked before every action.'],
  ['Secure Tool Execution', 'Every read, write, and trigger to Odoo and XCALLY passes through enforcement.'],
  ['Data Protection', 'PII and medical-image boundaries, consent capture, prompt-injection defence.'],
  ['Human Approval', 'The agent pauses, routes to a doctor or supervisor, waits, then continues.'],
  ['QA & Audit Cockpit', 'One audit-ready record of every action, across every agent and channel.'],
];
export function PadraModulesSlide() {
  return (
    <Shell>
      <H main='The control layer, <span class="o">in six parts.</span>' sub="One runtime between your agents and your systems — identity, policy, execution, protection, approval, proof." />
      <div className="shrink-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5 mt-7">
        {modules.map(([t, d], i) => (
          <div key={t} className={cellCls}>
            <div className="flex items-baseline gap-2">
              <span className="text-orange-400/70 text-sm lblc">{String(i + 1).padStart(2, '0')}</span>
              <span className={ctCls}>{t}</span>
            </div>
            <div className={ckCls}>{d}</div>
          </div>
        ))}
      </div>
    </Shell>
  );
}

/* ════════ 8 · PROOF / AUDIT ════════ */
const proofQs = [
  'Who captured this lead, and in which language?',
  'What did the patient consent to?',
  'Who approved the graft estimate?',
  'What exactly did the AI send back to the patient?',
  'Was the case escalated to a human — and did they enter the right data into Odoo?',
];
export function PadraProofSlide() {
  return (
    <Shell>
      <H main='Every action <span class="o">leaves a record.</span>' sub="One audit-ready record across XCALLY, Odoo, and the model — every action provable." />
      <Core html="When a regulator, a complaint, or a refund arrives, Padra answers from one definitive record — every question, settled by the proof itself." />
      <div className="shrink-0 mt-5">
        {proofQs.map((q, i) => (
          <div key={q} className={`flex items-baseline gap-4 py-3 border-t border-[#2c2c2a] ${i === proofQs.length - 1 ? 'border-b' : ''}`}>
            <span className="text-orange-400 shrink-0 text-sm lg:text-base" style={{ fontFamily: mono }}>{String(i + 1).padStart(2, '0')}</span>
            <span className="text-[#D6D6D0] text-base lg:text-xl leading-snug">{q}</span>
          </div>
        ))}
      </div>
    </Shell>
  );
}

/* ════════ 9 · THE POC WEDGE ════════ */
const flow = [
  ['Enter', 'Patient arrives on WhatsApp or the website'],
  ['Capture', 'Name, country, age, phone, language, treatment interest'],
  ['Photos', 'The agent requests 4–6 diagnostic angles'],
  ['Govern', 'Unicity checks permissions, opens the Odoo case'],
  ['Doctor', 'The doctor reviews and enters the graft estimate'],
  ['Close', 'The agent relays the estimate, books a live slot, escalates to a human on XCALLY when needed'],
];
export function PadraPOCSlide() {
  return (
    <Shell>
      <H main='One agent, end to end, <span class="o">in 45 days.</span>' sub="The hair-transplant WhatsApp agent — lead to booking — proves the whole architecture without building the whole clinic." />
      <div className="shrink-0 mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
        {flow.map(([t, d], i) => (
          <div key={t} className={cellCls}>
            <div className="flex items-baseline gap-2.5">
              <span className="text-orange-400 text-lg lblc">{String(i + 1).padStart(2, '0')}</span>
              <span className={ctCls}>{t}</span>
            </div>
            <div className={ckCls}>{d}</div>
          </div>
        ))}
      </div>
    </Shell>
  );
}

/* ════════ 10 · WHY UNICITY ════════ */
export function PadraWhyUnicitySlide() {
  return (
    <Shell>
      <H main='Fifteen years of <span class="o">sovereign-grade cryptography.</span>' sub="Unicity is not a startup learning the problem today. The team built the cryptographic infrastructure trusted by the world's most demanding institutions." />
      <Core html="The founders built Guardtime's <b>KSI</b> — deployed with the Estonian Government, NATO, Lockheed Martin, and Boeing, in production since 2012. That same engineering now intercepts every agent tool-call <b>beneath the application</b>, before it reaches your systems — enforced in milliseconds, recorded for good." />
      <div className="shrink-0 grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-4 mt-8">
        {[
          ['Intercept', 'Every command checked beneath the app, before it touches Odoo or XCALLY'],
          ['Multi-tenant', 'Runs inside your ecosystem — your data never leaves your boundary'],
          ['Provable', 'eIDAS-grade, tamper-evident audit — verifiable, end to end'],
        ].map(([t, d]) => (
          <div key={t} className={cellCls}><div className={ctCls}>{t}</div><div className={ckCls}>{d}</div></div>
        ))}
      </div>
    </Shell>
  );
}

/* ════════ 12 · THE ASK ════════ */
export function PadraAskSlide() {
  return (
    <Shell>
      <H main='Bring us the workflows <span class="o">no one will approve.</span>' sub="The 45-day challenge — turn your agents into operators you can trust." />
      <div className="shrink-0 mt-7 rounded-xl p-6 lg:p-8" style={{ border: '1px solid rgba(255,137,4,0.4)', background: 'linear-gradient(180deg, rgba(255,137,4,0.06), transparent)' }}>
        <div className="text-[#fefefe] text-2xl lg:text-3xl" style={{ fontFamily: anton }}>Pick three of your highest-stakes agentic workflows — <span className="text-orange-400">the ones the security team keeps refusing to sign off.</span></div>
        <p className="text-[#D6D6D0] text-base lg:text-2xl mt-4 leading-relaxed max-w-[104ch]">We stand up the hair-transplant agent end to end — lead, photos, doctor-approved estimate, booking, escalation — governed and audit-ready, on your Odoo and XCALLY.</p>
      </div>
      <p className="shrink-0 mt-7 text-[#fefefe] font-semibold text-xl lg:text-2xl">Permission before the agent acts. <span className="text-orange-400">Proof after every action.</span></p>
    </Shell>
  );
}
