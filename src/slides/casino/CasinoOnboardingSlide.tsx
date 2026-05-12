import { motion } from 'framer-motion';

export function CasinoOnboardingSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-12 lg:px-20 py-10 lg:py-14 justify-center gap-8">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-orange-400 text-xs sm:text-sm tracking-[0.32em] uppercase font-semibold"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Nº 04 · Why Projects Stall
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[28px] sm:text-[40px] lg:text-[54px] leading-[0.98] tracking-tight mt-3 uppercase"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            The bottleneck is controlled execution.{' '}
            <span className="text-orange-400">Not model capability.</span>
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] w-24 lg:w-32 bg-orange-500 origin-left mt-5"
            style={{ boxShadow: '0 0 8px rgba(249,115,22,0.7)' }}
          />
        </div>

        {/* Megastats */}
        <div className="flex flex-col gap-3 lg:gap-4 shrink-0">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-[#fefefe]/60 text-[64px] sm:text-[96px] lg:text-[132px] leading-[0.88] tracking-[-0.01em] uppercase"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            40% Cancelled.
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-orange-400 text-[64px] sm:text-[96px] lg:text-[132px] leading-[0.88] tracking-[-0.01em] uppercase"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            Demonstrate.
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="h-[2px] w-32 lg:w-40 bg-orange-500 origin-left mt-3"
            style={{ boxShadow: '0 0 8px rgba(249,115,22,0.7)' }}
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-[#fefefe]/85 text-base sm:text-lg leading-relaxed max-w-5xl mt-2"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            <span className="text-[#fefefe] font-semibold">40%:</span> Gartner's estimate of agentic AI projects cancelled by end 2027 — not because the technology fails, but because what live operation requires <span className="text-[#fefefe] font-semibold">does not exist beneath them:</span>
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="flex flex-wrap gap-2 lg:gap-2.5 mt-3"
          >
            {[
              'Scoped Authority',
              'Pre-execution Policy',
              'Audit-ready Evidence',
              'Revocation',
              'Institutional Accountability',
            ].map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 rounded-md text-[10px] lg:text-[11px] tracking-[0.18em] uppercase font-bold text-orange-400"
                style={{
                  fontFamily: "'Geist Mono', monospace",
                  border: '1px solid rgba(255,106,31,0.35)',
                  background: 'rgba(255,106,31,0.06)',
                }}
              >
                {t}
              </span>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.05 }}
            className="mt-4 max-w-5xl"
          >
            <p
              className="text-[#fefefe]/85 text-xs lg:text-sm leading-snug mb-2"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              <span className="text-[#fefefe] font-semibold">Security, legal, and compliance teams ask four questions the agent stack does not answer:</span>
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-1">
              {[
                'Who authorised the agent?',
                'What policy constrained it?',
                'What did it decide?',
                'Can the record be verified?',
              ].map((q) => (
                <span
                  key={q}
                  className="text-orange-400 text-[12px] lg:text-[13px] leading-snug"
                  style={{ fontFamily: "'Geist Mono', monospace" }}
                >
                  {q}
                </span>
              ))}
            </div>
            <p
              className="text-orange-400 text-sm lg:text-base leading-snug mt-3 font-semibold"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              Without a security layer — pilots demonstrate. They do not execute.
            </p>
          </motion.div>
        </div>

        {/* Closing footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="text-[#fefefe]/65 text-[22px] sm:text-[28px] lg:text-[36px] leading-tight tracking-tight uppercase pt-5 shrink-0"
          style={{
            fontFamily: "'Anton', sans-serif",
            borderTop: '1px solid rgba(249,115,22,0.25)',
          }}
        >
          The pilot works. The business case is clear.{' '}
          <span className="text-orange-400">The project stalls.</span>
        </motion.p>
      </div>
    </div>
  );
}
