import { motion } from 'framer-motion';

export function CasinoRetentionSlide() {
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
            Nº 02 · The Principle
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[28px] sm:text-[40px] lg:text-[54px] leading-[0.98] tracking-tight mt-3 uppercase"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            Security is not what limits agents.{' '}
            <span className="text-orange-400">It is what qualifies them.</span>
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
            Limits?
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-orange-400 text-[64px] sm:text-[96px] lg:text-[132px] leading-[0.88] tracking-[-0.01em] uppercase"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            Qualifies.
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
            className="text-[#fefefe]/85 text-base sm:text-lg lg:text-xl leading-relaxed max-w-5xl mt-2"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Once an agent's <span className="text-[#fefefe] font-semibold">identity is established</span>, its <span className="text-[#fefefe] font-semibold">authority scoped</span>, its <span className="text-[#fefefe] font-semibold">actions enforced against policy</span>, and every <span className="text-[#fefefe] font-semibold">outcome evidenced</span> — the institution can allow the agent to do things it would never otherwise approve.{' '}
            <span className="text-orange-400 font-semibold">Move money. Enter controlled systems. Execute agreements. Coordinate across networks.</span>
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
          Secure the agent.{' '}
          <span className="text-orange-400">Then let it work.</span>
        </motion.p>
      </div>
    </div>
  );
}
