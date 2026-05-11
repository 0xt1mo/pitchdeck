import { motion } from 'framer-motion';

const solutions = [
  {
    problem: 'SECURITY',
    solution: 'AgentStack',
    detail: 'Kernel-level security via AstridOS and Semantic Intercept Fabric. Verifiable execution below the model. The model cannot override it.',
  },
  {
    problem: 'SETTLEMENT',
    solution: 'Unicity Protocol',
    detail: 'Secure agents need secure settlement. x402 and MPP define how agents negotiate payments — Unicity turns the message itself into P2P settlement. No underlying chain required.',
  },
  {
    problem: 'ECONOMY',
    solution: 'AgentSphere',
    detail: 'Secure agents with native settlement can trade. Identity, discovery, and intent-based trading with privacy by design.',
  },
];

export function WhyUnicitySlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-10 sm:py-14 lg:py-16">

        {/* Header */}
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-400 text-[10px] sm:text-xs tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            Why Unicity
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[32px] sm:text-[44px] lg:text-[56px] leading-[0.95] tracking-tight mt-2"
            style={{ fontFamily: "'Anton', sans-serif" }}>
            WHY AGENTS NEED UNICITY — <span className="text-orange-400">WHY NOW?</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="mt-3 text-[#fefefe]/70 text-sm sm:text-base max-w-5xl leading-relaxed"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            No enterprise will deploy autonomous agents that can spend money, sign contracts, or access sensitive data without verifiable security. This is the single biggest blocker to production agent deployments today          </motion.p>
        </div>

        {/* Three rows */}
        <div className="flex-1 flex flex-col justify-center gap-4 lg:gap-5">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}
            className="text-[#fefefe]/50 text-xs sm:text-sm mb-1"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            We ship two products — <span className="text-orange-400 font-bold">AgentStack</span> (security runtime for developers) and <span className="text-orange-400 font-bold">AgentSphere</span> (agent economy) — both built on the <span className="text-orange-400 font-bold">Unicity Protocol</span>.
          </motion.p>
          {solutions.map((s, i) => (
            <motion.div
              key={s.problem}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
              className="flex items-start gap-5 lg:gap-8"
              style={{ borderBottom: i < solutions.length - 1 ? '1px solid rgba(249,115,22,0.1)' : 'none', paddingBottom: i < solutions.length - 1 ? '1rem' : 0 }}
            >
              <h3
                className="text-orange-400 text-[24px] sm:text-[30px] lg:text-[36px] leading-none tracking-tight w-[220px] lg:w-[280px] shrink-0"
                style={{ fontFamily: "'Anton', sans-serif" }}>
                {s.problem}
              </h3>

              <div className="flex-1">
                <p className="text-orange-400 text-sm sm:text-base font-bold"
                  style={{ fontFamily: "'Geist Mono', monospace" }}>
                  {s.solution}
                </p>
                <p className="text-[#fefefe]/60 text-xs sm:text-sm leading-relaxed mt-1"
                  style={{ fontFamily: "'Geist Mono', monospace" }}>
                  {s.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
