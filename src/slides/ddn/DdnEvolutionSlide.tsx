import { motion } from 'framer-motion';

const ANTON = "'Anton', sans-serif";
const MONO = "'Geist Mono', monospace";
const BROKE = '#e0885a';

type Era = {
  date: string;
  name: string;
  tag: string;
  motif: 'chat' | 'boxes' | 'grid';
  facts: React.ReactNode[];
  verdict: { tone: 'proved' | 'broke'; text: string }[];
  now?: boolean;
};

const eras: Era[] = [
  {
    date: 'Late 2025 — the homebrew era',
    name: 'The laptop',
    tag: 'OpenClaw · a daemon on a Mac Mini',
    motif: 'chat',
    facts: [
      <><span className="text-[#fefefe] font-bold">280K GitHub stars in six months</span> — past React, the fastest-growing repo of 2026. One persistent agent per person, always on.</>,
      <>13,700+ community skills. Demand proven beyond argument.</>,
    ],
    verdict: [
      { tone: 'proved', text: 'proved: people want agents' },
      { tone: 'broke', text: 'broke: full host access + autonomy + prompt injection — one CVE from takeover; ~20% of skills flagged' },
    ],
  },
  {
    date: '2026 — the client-server era',
    name: 'The rented box',
    tag: 'VPS & cloud · agents as pets',
    motif: 'boxes',
    facts: [
      <>Agents moved to <span className="text-[#fefefe] font-bold">$20–80/month servers</span> to run 24/7 — one Docker sandbox, one database, one hand-tended box per deployment.</>,
      <>Comfortable ceiling: <span className="text-[#fefefe] font-bold">~20 agents per machine.</span> Infrastructure built for websites, rented by the month, idle most of it.</>,
    ],
    verdict: [
      { tone: 'proved', text: 'proved: agents are a workload, not an app' },
      { tone: 'broke', text: 'broke: one-box-per-agent economics — no density, no multi-tenancy, no audit' },
    ],
  },
  {
    date: 'Now — the industrial era',
    name: 'The data center',
    tag: 'enterprise fleets · agents as infrastructure',
    motif: 'grid',
    now: true,
    facts: [
      <><span className="text-[#fefefe] font-bold">10,000s of concurrent agents</span> — bursty, machine-to-machine, regulated. A workload data centers were never designed for.</>,
      <>Needs an OS, not a box: <span className="text-[#fefefe] font-bold">1000× density, ms wake, isolation and audit by construction</span> — on data infrastructure built for AI.</>,
    ],
    verdict: [
      { tone: 'proved', text: 'this layer: Unicity AOS × DDN' },
      { tone: 'proved', text: 'the homebrew demand, made safe to sell' },
    ],
  },
];

const LIT = new Set([0, 3, 6, 9, 12, 15]);

function Motif({ kind }: { kind: Era['motif'] }) {
  if (kind === 'chat') {
    return (
      <div className="h-11 flex items-center gap-2.5">
        <span className="w-3 h-3 rounded-[3px] bg-orange-500" style={{ boxShadow: '0 0 10px rgba(249,115,22,0.5)' }} />
        <span className="text-[#fefefe]/40 text-[10px]" style={{ fontFamily: MONO }}>↔ WhatsApp · Telegram · cron</span>
      </div>
    );
  }
  if (kind === 'boxes') {
    return (
      <div className="h-11 flex items-center gap-1.5">
        {[0, 1, 2].map((i) => (
          <span key={i} className="w-[52px] h-9 rounded border border-white/10 bg-white/[0.04] flex items-center justify-center">
            <span className="w-2.5 h-2.5 rounded-[2px]" style={{ background: 'rgba(249,115,22,0.4)' }} />
          </span>
        ))}
      </div>
    );
  }
  return (
    <div className="h-11 flex items-center">
      <div className="grid gap-[3px] w-[132px]" style={{ gridTemplateColumns: 'repeat(8, 1fr)' }}>
        {Array.from({ length: 16 }).map((_, i) => (
          <span
            key={i}
            className="rounded-[2px]"
            style={{
              aspectRatio: '1.5',
              background: LIT.has(i) ? '#f97316' : 'rgba(249,115,22,0.24)',
            }}
          />
        ))}
      </div>
    </div>
  );
}

export function DdnEvolutionSlide() {
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
      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-8 lg:py-9 gap-4 lg:gap-5">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-orange-400 text-xs lg:text-sm tracking-[0.22em] uppercase mb-2.5"
            style={{ fontFamily: MONO }}
          >
            Unicity AOS × DDN · Why now
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06, duration: 0.6 }}
            className="text-[#fefefe] text-[26px] sm:text-[34px] lg:text-[42px] xl:text-[48px] leading-[1.02] tracking-tight uppercase"
            style={{ fontFamily: ANTON }}
          >
            Agents are recapitulating computing history <span className="text-[#fefefe]/45">— at 10× speed</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-2.5 text-[#fefefe]/65 text-sm lg:text-base leading-snug max-w-5xl"
            style={{ fontFamily: MONO }}
          >
            Every computing wave starts as a hobbyist machine and ends as industrial infrastructure. <span className="text-[#fefefe] font-bold">Agents began that trip in November 2025. They're arriving now</span> — on the layer you own.
          </motion.p>
        </div>

        {/* Three eras */}
        <div className="flex items-stretch">
          {eras.map((e, i) => (
            <div key={e.name} className="flex items-stretch flex-1">
              {i > 0 && (
                <div className="flex items-center px-2 lg:px-3 text-[#fefefe]/30 text-xl shrink-0" style={{ fontFamily: ANTON }}>→</div>
              )}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.12, duration: 0.5 }}
                className="flex-1 rounded-xl p-4 lg:p-5 flex flex-col"
                style={
                  e.now
                    ? { border: '1px solid rgba(249,115,22,0.4)', borderLeft: '3px solid #f97316', background: 'rgba(249,115,22,0.05)' }
                    : { border: '1px solid rgba(255,255,255,0.10)', background: 'rgba(255,255,255,0.02)' }
                }
              >
                <p className="text-[#fefefe]/40 text-[10px] lg:text-[11px] tracking-[0.14em] uppercase mb-1.5" style={{ fontFamily: MONO }}>{e.date}</p>
                <p className={`text-xl lg:text-2xl uppercase leading-none ${e.now ? 'text-orange-400' : 'text-[#fefefe]'}`} style={{ fontFamily: ANTON }}>{e.name}</p>
                <p className="text-[#fefefe]/55 text-[10.5px] lg:text-xs mt-1 mb-3" style={{ fontFamily: MONO }}>{e.tag}</p>

                <Motif kind={e.motif} />

                <div className="flex flex-col gap-2 flex-1 mt-1">
                  {e.facts.map((f, j) => (
                    <p key={j} className="text-[#fefefe]/60 text-[12px] lg:text-[13px] leading-snug" style={{ fontFamily: MONO }}>{f}</p>
                  ))}
                </div>

                <div className="mt-3 pt-2.5 flex flex-col gap-1" style={{ borderTop: `1px solid ${e.now ? 'rgba(249,115,22,0.3)' : 'rgba(255,255,255,0.10)'}` }}>
                  {e.verdict.map((v, k) => (
                    <p key={k} className="text-[10px] lg:text-[11px] leading-snug" style={{ fontFamily: MONO, color: v.tone === 'proved' ? '#f97316' : BROKE }}>{v.text}</p>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Analogy strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="shrink-0 rounded-lg border border-white/10 bg-white/[0.02] px-5 py-2.5 flex flex-wrap items-center gap-x-5 gap-y-1"
          style={{ fontFamily: MONO }}
        >
          <span className="text-[#fefefe]/40 text-[10px] lg:text-[11px] tracking-[0.16em] uppercase shrink-0">Precedent</span>
          <span className="text-[#fefefe]/60 text-[11px] lg:text-[12.5px] flex-1 min-w-0">
            computing: <span className="text-[#fefefe]">homebrew PC → colo rack → cloud</span> · ~30 years&nbsp;&nbsp;//&nbsp;&nbsp;agents: <span className="text-[#fefefe]">laptop → VPS → data center</span> · ~30 months
          </span>
          <span className="text-orange-400 text-[11px] lg:text-[12.5px] shrink-0">same trip, 10× faster</span>
        </motion.div>

        {/* Kicker */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="shrink-0 text-lg sm:text-xl lg:text-[26px] leading-tight pt-3"
          style={{ fontFamily: ANTON, borderTop: '1px solid rgba(255,255,255,0.10)' }}
        >
          <span className="text-[#fefefe]/60">Every computing wave ends in a data center.</span> <span className="text-orange-400">Agents just got there faster.</span>
        </motion.p>
      </div>
    </div>
  );
}
