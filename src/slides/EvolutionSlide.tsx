import { motion } from 'framer-motion';

const ANTON = "'Anton', sans-serif";
const MONO = "'Geist Mono', monospace";
const BROKE = '#e0885a';

type Era = {
  group: string;
  date: string;
  name: string;
  tag: string;
  motif: 'chat' | 'boxes' | 'grid';
  fact: React.ReactNode;
  verdict: { tone: 'proved' | 'broke'; text: string }[];
  now?: boolean;
};

const eras: Era[] = [
  {
    group: 'Yesterday',
    date: 'Late 2025 · homebrew',
    name: 'The laptop',
    tag: 'OpenClaw · a daemon on a Mac Mini',
    motif: 'chat',
    fact: <><span className="text-[#fefefe] font-bold">280K GitHub stars in 6 months</span> — past React. One always-on agent per person.</>,
    verdict: [
      { tone: 'proved', text: 'proved: people want agents' },
      { tone: 'broke', text: 'broke: full host access + prompt injection' },
    ],
  },
  {
    group: 'Industry today',
    date: 'Today · rent a box',
    name: 'The rented box',
    tag: 'VPS & cloud · agents as pets',
    motif: 'boxes',
    fact: <><span className="text-[#fefefe] font-bold">$20–80/mo servers, 24/7.</span> One hand-tended box per agent.</>,
    verdict: [
      { tone: 'proved', text: 'proved: agents are a workload, not an app' },
      { tone: 'broke', text: 'broke: ~20 agents/box · no density, no audit' },
    ],
  },
  {
    group: 'Unicity',
    date: 'Unicity',
    name: 'The data center',
    tag: 'enterprise fleets · agents as infrastructure',
    motif: 'grid',
    now: true,
    fact: <><span className="text-[#fefefe] font-bold">10,000s of concurrent agents.</span> Needs an OS, not a box — density, isolation, audit by construction.</>,
    verdict: [
      { tone: 'proved', text: 'this layer: Unicity AOS' },
      { tone: 'proved', text: 'data center infrastructure made safe to consume' },
    ],
  },
];

const LIT = new Set([0, 3, 6, 9, 12, 15]);

function Motif({ kind }: { kind: Era['motif'] }) {
  if (kind === 'chat') {
    return (
      <div className="h-12 flex items-center gap-2.5">
        <span className="w-3.5 h-3.5 rounded-[3px] bg-orange-500" style={{ boxShadow: '0 0 10px rgba(249,115,22,0.5)' }} />
        <span className="text-[#fefefe]/45 text-xs lg:text-sm" style={{ fontFamily: MONO }}>↔ WhatsApp · Telegram · cron</span>
      </div>
    );
  }
  if (kind === 'boxes') {
    return (
      <div className="h-12 flex items-center gap-2">
        {[0, 1, 2].map((i) => (
          <span key={i} className="w-14 h-10 rounded border border-white/10 bg-white/[0.04] flex items-center justify-center">
            <span className="w-3 h-3 rounded-[2px]" style={{ background: 'rgba(249,115,22,0.4)' }} />
          </span>
        ))}
      </div>
    );
  }
  return (
    <div className="h-12 flex items-center">
      <div className="grid gap-1 w-[160px]" style={{ gridTemplateColumns: 'repeat(8, 1fr)' }}>
        {Array.from({ length: 16 }).map((_, i) => (
          <span
            key={i}
            className="rounded-[2px]"
            style={{ aspectRatio: '1.5', background: LIT.has(i) ? '#f97316' : 'rgba(249,115,22,0.24)' }}
          />
        ))}
      </div>
    </div>
  );
}

export function EvolutionSlide() {
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

        {/* Punchline title */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="shrink-0 text-[26px] sm:text-[38px] lg:text-[50px] xl:text-[56px] leading-[0.98] tracking-tight uppercase max-w-6xl"
          style={{ fontFamily: ANTON }}
        >
          <span className="text-orange-400">Competition:</span> <span className="text-[#fefefe]">guardrails are a feature.</span> <span className="text-orange-400">An OS with a proprietary proof system is a moat.</span>
        </motion.h1>

        {/* Industry today vs Unicity — group labels sit outside the cards */}
        <div className="flex items-stretch gap-4 lg:gap-6">
          {eras.map((e, i) => (
            <div key={e.name} className="flex-1 flex flex-col">
              <p
                className={`text-xl sm:text-2xl lg:text-3xl uppercase leading-none mb-3 ${e.now ? 'text-orange-400' : 'text-[#fefefe]'}`}
                style={{ fontFamily: ANTON }}
              >
                {e.group}
              </p>
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 + i * 0.12, duration: 0.5 }}
                className="flex-1 rounded-xl p-5 lg:p-6 flex flex-col"
                style={
                  e.now
                    ? { border: '1px solid rgba(249,115,22,0.5)', borderLeft: '3px solid #f97316', background: 'rgba(249,115,22,0.06)' }
                    : { border: '1px solid rgba(255,255,255,0.10)', background: 'rgba(255,255,255,0.02)' }
                }
              >
                <p className={`text-2xl lg:text-4xl uppercase leading-none ${e.now ? 'text-orange-400' : 'text-[#fefefe]'}`} style={{ fontFamily: ANTON }}>{e.name}</p>
                <p className="text-[#fefefe]/60 text-sm lg:text-base mt-2 mb-4" style={{ fontFamily: MONO }}>{e.tag}</p>

                <Motif kind={e.motif} />

                <p className="text-[#fefefe]/75 text-base lg:text-lg leading-snug flex-1 mt-3" style={{ fontFamily: MONO }}>{e.fact}</p>

                <div className="mt-4 pt-3 flex flex-col gap-1.5" style={{ borderTop: `1px solid ${e.now ? 'rgba(249,115,22,0.3)' : 'rgba(255,255,255,0.10)'}` }}>
                  {e.verdict.map((v, k) => (
                    <p key={k} className="text-[13px] lg:text-[15px] leading-snug" style={{ fontFamily: MONO, color: v.tone === 'proved' ? '#f97316' : BROKE }}>{v.text}</p>
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
