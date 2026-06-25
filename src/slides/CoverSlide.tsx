import { motion } from 'framer-motion';

export function CoverSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">

      {/* Background grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Top HUD bar */}
      <div className="absolute top-6 left-8 lg:left-12 right-8 lg:right-12 z-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
          <span
            className="text-[#fefefe]/65 text-[10px] sm:text-xs lg:text-sm tracking-[0.32em] uppercase"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Unicity · Securing the Agentic Economy
          </span>
        </div>
      </div>

      {/* Bottom HUD bar */}
      <div className="absolute bottom-6 left-8 lg:left-12 right-8 lg:right-12 z-20 flex items-center justify-end">
        <span
          className="text-[#fefefe]/45 text-[10px] sm:text-xs lg:text-sm tracking-[0.32em] uppercase font-bold"
          style={{ fontFamily: "'Geist Mono', monospace" }}
        >
          Unicity
        </span>
      </div>

      {/* Left vertical orange bar */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute left-12 lg:left-20 top-[12%] bottom-[12%] w-[2px] bg-orange-500 origin-top z-10"
      />

      {/* Main content — left-aligned */}
      <div className="relative z-10 h-full flex flex-col justify-center pl-24 lg:pl-36 pr-8 lg:pr-16 gap-5 lg:gap-6">

        {/* Wordmark */}
        <motion.img
          src="/UnicityLogo.svg"
          alt="Unicity"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-10 lg:h-14 w-auto shrink-0"
        />

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-orange-400 text-xs sm:text-sm lg:text-base tracking-[0.32em] uppercase font-bold shrink-0 -mt-2"
          style={{ fontFamily: "'Geist Mono', monospace" }}
        >
          Unicity Protocol · Strategic Proposal · 2026
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.8 }}
          className="text-[#fefefe] text-[48px] sm:text-[72px] lg:text-[112px] xl:text-[140px] leading-[0.95] tracking-tight uppercase shrink-0"
          style={{ fontFamily: "'Anton', sans-serif" }}
        >
          SECURING THE{' '}
          <span className="text-orange-400">AGENTIC ECONOMY.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          className="text-[#fefefe]/75 text-base sm:text-lg lg:text-xl tracking-wide shrink-0 -mt-2"
          style={{ fontFamily: "'Geist Mono', monospace" }}
        >
          The machine economy cannot run on human infrastructure.
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="h-[1px] w-40 sm:w-56 lg:w-72 bg-orange-500/60 origin-left shrink-0"
        />

        {/* Bottom row — credits (from) on left, dedication (to) on right */}
        <div className="flex items-end justify-between gap-8 shrink-0 pr-4 lg:pr-8">
          {/* Credits */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.05, duration: 0.5 }}
            className="flex flex-col gap-1"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            <p className="text-[#fefefe]/65 text-[10px] sm:text-xs lg:text-sm tracking-[0.24em] uppercase">
              Mike Gault · CEO ·{' '}
              <span className="text-orange-400/85 tracking-normal normal-case">mike@unicity-labs.com</span>
            </p>
            <p className="text-[#fefefe]/65 text-[10px] sm:text-xs lg:text-sm tracking-[0.24em] uppercase">
              Alan Radi · Commercial ·{' '}
              <span className="text-orange-400/85 tracking-normal normal-case">alan@unicity-labs.com</span>
            </p>
          </motion.div>

          {/* Dedication — bottom right, baseline-aligned with credits */}
          <motion.div
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.15, duration: 0.5 }}
            className="flex items-center gap-3 border-l border-orange-500/40 pl-3"
          >
            <div className="flex flex-col items-end gap-0.5">
              <span
                className="text-[#fefefe]/45 text-[8px] sm:text-[9px] lg:text-[10px] tracking-[0.32em] uppercase"
                style={{ fontFamily: "'Geist Mono', monospace" }}
              >
                Prepared for
              </span>
              <span
                className="text-[#fefefe] text-[10px] sm:text-xs lg:text-sm tracking-[0.18em] uppercase font-bold"
                style={{ fontFamily: "'Geist Mono', monospace" }}
              >
                Greg Kidd <span className="text-orange-400">@</span> Hard Yaka
              </span>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
