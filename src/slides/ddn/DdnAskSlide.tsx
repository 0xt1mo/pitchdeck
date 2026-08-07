import { motion } from 'framer-motion';

const ANTON = "'Anton', sans-serif";
const MONO = "'Geist Mono', monospace";

type Phase = {
  label: string;
  name: string;
  when: string;
  items: React.ReactNode[];
  today?: boolean;
};

const phases: Phase[] = [
  {
    label: 'Phase I · today’s ask',
    name: 'Paid design partnership',
    when: '90 days · starts on signature',
    today: true,
    items: [
      <><span className="text-[#fefefe] font-bold">NRE-funded validation</span> of AOS on Alerix Infra.</>,
      <>Deliverable: a <span className="text-[#fefefe] font-bold">joint technical validation</span>, with agreed benchmarks — agents per node, time-to-token, cost per token.</>,
    ],
  },
  {
    label: 'Phase II · on benchmarks hit',
    name: 'OEM license',
    when: 'FY27 · pre-agreed terms',
    items: [
      <>AOS embedded as the <span className="text-[#fefefe] font-bold">runtime layer of an Alerix SKU</span> — per-node royalty on every agentic deployment.</>,
      <><span className="text-[#fefefe] font-bold">Annual minimum commitment</span> with a prepaid advance against royalties.</>,
      <>Segment exclusivity — <span className="text-[#fefefe] font-bold">narrow and time-boxed</span>, contingent on the minimum being met.</>,
    ],
  },
  {
    label: 'Phase III · on OEM traction',
    name: 'Co-sell industry solutions',
    when: 'FY27+ · account by account',
    items: [
      <>Joint vertical offers — <span className="text-[#fefefe] font-bold">sovereign, FSI, healthcare, defense</span> — into accounts you already hold.</>,
      <>One <span className="text-[#fefefe] font-bold">lighthouse account per vertical</span>: production agents, referenceable, on the joint stack.</>,
      <>Unicity subscriptions + <span className="text-[#fefefe] font-bold">Alerix infrastructure pull-through</span> on every deployment.</>,
    ],
  },
];

export function DdnAskSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />
      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-8 lg:py-10 gap-6 lg:gap-8">

        {/* Header */}
        <div className="shrink-0">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#fefefe] text-[38px] sm:text-[54px] lg:text-[72px] xl:text-[82px] leading-[0.95] tracking-tight uppercase"
            style={{ fontFamily: ANTON }}
          >
            The <span className="text-orange-400">ask.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-3 text-[#fefefe]/70 text-base lg:text-xl leading-snug"
            style={{ fontFamily: MONO }}
          >
            A staged partnership — <span className="text-[#fefefe] font-bold">each phase earns the next.</span>
          </motion.p>
        </div>

        {/* Phases */}
        <div className="flex items-stretch">
          {phases.map((p, i) => (
            <div key={p.name} className="flex items-stretch flex-1">
              {i > 0 && (
                <div className="flex items-center px-2.5 lg:px-4 text-[#fefefe]/30 text-2xl lg:text-3xl shrink-0" style={{ fontFamily: ANTON }}>→</div>
              )}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.12, duration: 0.5 }}
                className="flex-1 rounded-xl px-5 py-4 lg:px-6 lg:py-5 flex flex-col"
                style={
                  p.today
                    ? { border: '1px solid rgba(249,115,22,0.55)', borderTop: '3px solid #f97316', background: 'rgba(249,115,22,0.06)' }
                    : { border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.02)' }
                }
              >
                <p className={`text-[10px] lg:text-[11px] tracking-[0.18em] uppercase mb-2 ${p.today ? 'text-orange-400' : 'text-[#fefefe]/40'}`} style={{ fontFamily: MONO }}>{p.label}</p>
                <p className="text-[#fefefe] text-xl lg:text-[28px] uppercase leading-none" style={{ fontFamily: ANTON }}>{p.name}</p>
                <p className="text-[#fefefe]/55 text-xs lg:text-sm mt-2 mb-4" style={{ fontFamily: MONO }}>{p.when}</p>
                <div className="flex flex-col gap-3 flex-1">
                  {p.items.map((it, k) => (
                    <div key={k} className="flex gap-2.5 leading-snug" style={{ fontFamily: MONO }}>
                      <span className={`shrink-0 ${p.today ? 'text-orange-400' : 'text-[#fefefe]/40'}`}>→</span>
                      <p className="text-[#fefefe]/75 text-sm lg:text-[15px]">{it}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
