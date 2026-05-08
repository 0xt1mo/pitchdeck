import { motion } from 'framer-motion';

const pillars = [
  { title: 'IDENTITY', punch: 'Cryptographic identity, not API keys.' },
  { title: 'DELEGATION', punch: 'Verifiable authority. Scoped and revocable.' },
  { title: 'VERIFIABLE EXECUTION', punch: 'Cryptographic proof of every action, not vendor logs.' },
  { title: 'POLICY ENFORCEMENT', punch: 'Real-time guardrails on every action.' },
  { title: 'SETTLEMENT', punch: 'Machine-speed transactions at machine economics.' },
  { title: 'INTEROPERABILITY', punch: 'MCP, A2A, AP2, x402 — agents already span them all.' },
];

export function ProblemSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">

      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-10 sm:py-14 lg:py-16 justify-center gap-8">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-orange-400 text-sm tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            The Problem
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[32px] sm:text-[44px] lg:text-[56px] leading-[0.95] tracking-tight mt-2"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            WHAT AUTONOMOUS AI <span className="text-orange-400">DEMANDS</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-4 text-[#fefefe]/85 text-lg sm:text-xl lg:text-2xl max-w-5xl leading-relaxed"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Autonomy has six requirements that no tech stack can deliver on.
          </motion.p>
        </div>

        {/* Pillars — vertical list with text beside */}
        <div className="flex flex-col shrink-0">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
              className="flex items-center gap-5 lg:gap-8 py-1.5 lg:py-2"
              style={{ borderBottom: i < pillars.length - 1 ? '1px solid rgba(249,115,22,0.1)' : 'none' }}
            >
              <h3
                className="text-orange-400 text-[22px] sm:text-[28px] lg:text-[34px] leading-none tracking-tight w-[240px] lg:w-[320px] shrink-0"
                style={{ fontFamily: "'Anton', sans-serif" }}
              >
                {p.title}
              </h3>
              <p className="text-[#fefefe] text-base sm:text-lg lg:text-xl font-bold"
                style={{ fontFamily: "'Geist Mono', monospace" }}>
                {p.punch}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 + 6 * 0.08 + 0.2, duration: 0.6 }}
          className="text-orange-400 text-[20px] sm:text-[26px] lg:text-[32px] leading-tight tracking-tight pt-3 shrink-0"
          style={{
            fontFamily: "'Anton', sans-serif",
            borderTop: '1px solid rgba(249,115,22,0.25)',
          }}
        >
          WE'VE ASSEMBLED THE TEAM <span className="text-[#fefefe]">TO BUILD IT.</span>
        </motion.p>

      </div>
    </div>
  );
}
