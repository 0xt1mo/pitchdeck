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
            Nº 03 · The Stakes
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[28px] sm:text-[40px] lg:text-[54px] leading-[0.98] tracking-tight mt-3 uppercase"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            When an agent acts on the network,{' '}
            <span className="text-orange-400">the operator owns the consequence.</span>
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
            $33M.
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-orange-400 text-[64px] sm:text-[96px] lg:text-[132px] leading-[0.88] tracking-[-0.01em] uppercase"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            40% Cancelled.
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
            className="text-[#fefefe]/75 text-base sm:text-lg lg:text-xl leading-relaxed max-w-5xl mt-2"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            <span className="text-[#fefefe] font-semibold">$33M:</span> T-Mobile, March 2025 — private arbitration following a SIM-swap attack. A single misconfigured agent can initiate <span className="text-[#fefefe] font-semibold">hundreds of unauthorised actions</span> before a human notices.{' '}
            <span className="text-orange-400 font-semibold">40%:</span> Gartner's estimate of agentic AI projects cancelled by end 2027 — because the governance infrastructure beneath them does not exist.
          </motion.p>
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
          A SIM swap. A provisioning request. A billing change.{' '}
          <span className="text-orange-400">The operator carried it out. The operator is accountable.</span>
        </motion.p>
      </div>
    </div>
  );
}
