import { motion } from 'framer-motion';

const ANTON = "'Anton', sans-serif";
const MONO = "'Geist Mono', monospace";

const dims = [
  { noun: 'State', mech: 'Blockchain', desc: 'testnet live · mainnet GA Aug 2026', tag: "GA AUG '26", shipped: true },
  { noun: 'Code', mech: 'Formal methods', desc: 'proven correct, not tested', tag: 'ROADMAP' },
  { noun: 'Reasoning', mech: 'Tensor logic', desc: 'conclusions follow from the facts', tag: 'ROADMAP' },
  { noun: 'Learning', mech: 'Own records', desc: 'every rule traceable to evidence', tag: 'ROADMAP' },
];

export function VerifiableRoadmapSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 55% 55% at 50% 62%, rgba(249,115,22,0.12), transparent 70%)' }}
      />

      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-8 lg:py-10 gap-6 lg:gap-8">

        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="shrink-0 text-[#fefefe] text-[26px] sm:text-[38px] lg:text-[52px] leading-[0.98] tracking-tight uppercase"
          style={{ fontFamily: ANTON }}
        >
          Where this goes: <span className="text-orange-400">verifiable AI.</span>
        </motion.h1>

        {/* The equation */}
        <div className="shrink-0 flex items-stretch justify-center gap-2 lg:gap-3">
          {dims.map((d, i) => (
            <div key={d.noun} className="contents">
              {i > 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.25 + i * 0.12 }}
                  className="flex items-center shrink-0"
                >
                  <span className="text-orange-400/70 text-3xl lg:text-5xl leading-none" style={{ fontFamily: ANTON }}>+</span>
                </motion.div>
              )}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.12, duration: 0.5 }}
                className="flex-1 min-w-0 rounded-2xl p-4 lg:p-6 flex flex-col"
                style={
                  d.shipped
                    ? { border: '2px solid #f97316', background: 'rgba(249,115,22,0.07)', boxShadow: '0 0 28px rgba(249,115,22,0.16)' }
                    : { border: '1px solid rgba(255,255,255,0.14)', background: 'rgba(255,255,255,0.02)' }
                }
              >
                <p className="text-[#fefefe]/45 text-[10px] lg:text-xs tracking-[0.28em] uppercase" style={{ fontFamily: MONO }}>Verifiable</p>
                <p className={`text-[28px] sm:text-[34px] lg:text-[44px] leading-[0.95] uppercase ${d.shipped ? 'text-orange-400' : 'text-[#fefefe]'}`} style={{ fontFamily: ANTON }}>{d.noun}</p>
                <p className="text-[#fefefe]/90 text-sm lg:text-base font-bold mt-3 leading-snug" style={{ fontFamily: MONO }}>{d.mech}</p>
                <p className="text-[#fefefe]/50 text-xs lg:text-sm mt-1 leading-snug flex-1" style={{ fontFamily: MONO }}>{d.desc}</p>
                <div className="mt-4">
                  {d.shipped ? (
                    <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/70 px-3 py-1 text-orange-400 text-[10px] lg:text-xs tracking-[0.18em] uppercase font-bold" style={{ fontFamily: MONO }}>
                      <span className="relative flex w-1.5 h-1.5">
                        <span className="absolute inline-flex w-full h-full rounded-full bg-orange-400 opacity-60 animate-ping" />
                        <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-orange-400" />
                      </span>
                      {d.tag}
                    </span>
                  ) : (
                    <span className="rounded-full border border-[#fefefe]/20 px-3 py-1 text-[#fefefe]/45 text-[10px] lg:text-xs tracking-[0.18em] uppercase" style={{ fontFamily: MONO }}>{d.tag}</span>
                  )}
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* = VERIFIABLE AI */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          className="shrink-0 flex items-center justify-center gap-4 lg:gap-6"
        >
          <span className="text-orange-400/70 text-4xl lg:text-6xl leading-none" style={{ fontFamily: ANTON }}>=</span>
          <span
            className="text-orange-400 text-[44px] sm:text-[64px] lg:text-[92px] leading-none uppercase"
            style={{ fontFamily: ANTON, textShadow: '0 0 34px rgba(249,115,22,0.45)' }}
          >
            Verifiable AI
          </span>
        </motion.div>

        {/* Punch + closer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.95, duration: 0.6 }}
          className="shrink-0 pt-4 lg:pt-5 text-center"
          style={{ borderTop: '1px solid rgba(255,255,255,0.10)' }}
        >
          <p className="text-[#fefefe] text-base sm:text-xl lg:text-[28px] leading-tight uppercase" style={{ fontFamily: ANTON }}>
            Everyone else makes hallucination rarer.{' '}
            <span className="text-orange-400">We make it impossible — by construction.</span>
          </p>
          <p className="text-[#fefefe]/70 text-sm sm:text-base lg:text-lg mt-2" style={{ fontFamily: MONO }}>
            Don’t trust AI. <span className="text-[#fefefe] font-bold">Verify it.</span>
          </p>
        </motion.div>

      </div>
    </div>
  );
}
