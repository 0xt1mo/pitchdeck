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
            Nº 04 · Retention
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[32px] sm:text-[44px] lg:text-[60px] leading-[0.98] tracking-tight mt-3 uppercase"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            Retention becomes{' '}
            <span className="text-orange-400">a conversation.</span>
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
            92%
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-orange-400 text-[64px] sm:text-[96px] lg:text-[132px] leading-[0.88] tracking-[-0.01em] uppercase"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            Ignored.
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
            The average regulated operator spends <span className="text-[#fefefe] font-semibold">$5–10 per active player per year</span> on CRM platforms — Optimove, Smartico, Fast Track — to deliver promotional emails that <span className="text-[#fefefe] font-semibold">ninety-two per cent of recipients never open</span>. The agent is the channel the player already uses. The Friday reload arrives in chat, contextually, when it matters.{' '}
            <span className="text-orange-400 font-semibold">Delivered: one hundred per cent.</span>
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
          The CRM stack was a workaround.{' '}
          <span className="text-orange-400">The agent makes the channel alive again.</span>
        </motion.p>
      </div>
    </div>
  );
}
