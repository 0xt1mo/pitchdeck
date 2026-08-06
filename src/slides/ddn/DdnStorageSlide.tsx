import { motion } from 'framer-motion';

const ANTON = "'Anton', sans-serif";
const MONO = "'Geist Mono', monospace";

const cards: { k: string; d: React.ReactNode }[] = [
  {
    k: 'Content-addressed',
    d: <>Every block is keyed by its hash. Identical state across agents — base models, prompts, tool outputs — is <span className="text-[#fefefe] font-bold">stored once.</span></>,
  },
  {
    k: 'Cross-tenant dedup',
    d: <>10,000 agents don't write 10,000 copies. You store the <span className="text-orange-400">novel bytes</span> — cost tracks new information, not agent count.</>,
  },
  {
    k: 'Provenance edges',
    d: <>Every read and write is an edge in the content-addressed graph. <span className="text-[#fefefe] font-bold">Lineage is free</span> — recorded by construction, not bolted on.</>,
  },
];

export function DdnStorageSlide() {
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
      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-8 lg:py-10 gap-5 lg:gap-6">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-orange-400 text-xs lg:text-sm tracking-[0.22em] uppercase mb-3"
            style={{ fontFamily: MONO }}
          >
            Unicity AOS × Alerix · Agent-native storage
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.6 }}
            className="text-[#fefefe] text-[30px] sm:text-[42px] lg:text-[54px] xl:text-[62px] leading-[1.0] tracking-tight uppercase max-w-6xl"
            style={{ fontFamily: ANTON }}
          >
            Agent state is a <span className="text-orange-400">data-intelligence problem.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.22, duration: 0.6 }}
            className="mt-3 text-[#fefefe]/70 text-base lg:text-lg leading-relaxed max-w-5xl"
            style={{ fontFamily: MONO }}
          >
            AOS writes agent state the way it runs agents: <span className="text-[#fefefe] font-bold">content-addressed and deduplicated.</span> Not a filesystem bolted under a runtime — storage as a first-class, provable data layer.
          </motion.p>
        </div>

        {/* Main: cost curve + concept cards */}
        <div className="flex gap-6 lg:gap-8 items-stretch">

          {/* Novel-bytes cost curve */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex-[0_0_44%] rounded-xl border border-white/10 bg-white/[0.02] p-5 lg:p-6 flex flex-col"
          >
            <p className="text-[#fefefe]/40 text-[10px] lg:text-[11px] tracking-[0.14em] uppercase mb-4" style={{ fontFamily: MONO }}>Storage cost vs. agent count</p>
            <div className="flex-1 flex items-center justify-center">
              <svg viewBox="0 0 340 200" className="w-full h-auto max-h-[240px]">
                {/* axes */}
                <line x1="34" y1="176" x2="330" y2="176" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
                <line x1="34" y1="176" x2="34" y2="16" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
                {/* naive: linear per-agent copies */}
                <line x1="34" y1="176" x2="322" y2="28" stroke="rgba(255,255,255,0.28)" strokeWidth="2" strokeDasharray="5 5" />
                {/* novel-bytes: sublinear, flattening */}
                <path d="M34 176 C 120 96, 210 96, 322 112" fill="none" stroke="#f97316" strokeWidth="2.6" />
                {/* fill under orange */}
                <path d="M34 176 C 120 96, 210 96, 322 112 L322 176 Z" fill="rgba(249,115,22,0.08)" />
                {/* labels */}
                <text x="250" y="34" fill="rgba(255,255,255,0.45)" fontSize="11" fontFamily="'Geist Mono', monospace">per-agent copies</text>
                <text x="150" y="132" fill="#f97316" fontSize="11" fontFamily="'Geist Mono', monospace">content-addressed</text>
                <text x="150" y="147" fill="#f97316" fontSize="11" fontFamily="'Geist Mono', monospace">· novel bytes only</text>
                <text x="300" y="193" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="'Geist Mono', monospace" textAnchor="end">agents →</text>
              </svg>
            </div>
            <p className="text-[#fefefe]/45 text-[11px] lg:text-sm leading-snug mt-3" style={{ fontFamily: MONO }}>
              Cost tracks <span className="text-orange-400">new information</span>, not fleet size. The economics improve as the fleet grows.
            </p>
          </motion.div>

          {/* Concept cards */}
          <div className="flex-1 flex flex-col gap-3 lg:gap-4">
            {cards.map((c, i) => (
              <motion.div
                key={c.k}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.45 }}
                className="flex-1 rounded-xl border border-white/10 bg-white/[0.02] border-l-[3px] border-l-orange-500 px-6 py-4 flex flex-col justify-center"
              >
                <p className="text-[#fefefe] text-lg lg:text-2xl uppercase leading-none" style={{ fontFamily: ANTON }}>{c.k}</p>
                <p className="text-[#fefefe]/70 text-sm lg:text-base leading-snug mt-2" style={{ fontFamily: MONO }}>{c.d}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Positioning band */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="shrink-0 rounded-xl px-6 py-3.5"
          style={{ border: '1px solid rgba(249,115,22,0.4)', background: 'rgba(249,115,22,0.04)' }}
        >
          <p className="text-[#fefefe]/85 text-sm lg:text-base leading-snug" style={{ fontFamily: MONO }}>
            <span className="text-orange-400 font-bold">Your category, extended:</span> the data-intelligence discipline you built for training data, now applied to agent runtime state — <span className="text-[#fefefe] font-bold">on top of Alerix's layer, not beside it.</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
