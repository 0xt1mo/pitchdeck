import { motion } from 'framer-motion';

export function CoverSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">

      {/* Radial glow */}
      <div
        className="fixed inset-0 z-[1] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(249,115,22,0.08) 0%, transparent 70%)',
        }}
      />

      {/* Faint grid texture */}
      <div
        className="fixed inset-0 z-[1] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, #000 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, #000 30%, transparent 80%)',
        }}
      />

      {/* Top-left HUD */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="absolute top-6 left-8 lg:top-10 lg:left-16 z-10 flex items-center gap-3"
      >
        <span className="relative flex w-2 h-2">
          <span className="absolute inset-0 rounded-full bg-orange-400 opacity-50 animate-ping" />
          <span className="relative w-2 h-2 rounded-full bg-orange-400" />
        </span>
        <span
          className="text-orange-400 text-xs sm:text-sm lg:text-base tracking-[0.4em] uppercase font-bold"
          style={{ fontFamily: "'Geist Mono', monospace" }}
        >
          Confidential · Investor Deck
        </span>
      </motion.div>

      {/* Top-right HUD */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="absolute top-6 right-8 lg:top-10 lg:right-16 z-10"
      >
        <span
          className="text-[#fefefe]/50 text-xs sm:text-sm lg:text-base tracking-[0.32em] uppercase"
          style={{ fontFamily: "'Geist Mono', monospace" }}
        >
          Rev. 2026.05
        </span>
      </motion.div>

      {/* Bottom HUD */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="absolute bottom-6 left-8 right-8 lg:bottom-10 lg:left-16 lg:right-16 z-10 flex items-center justify-between"
      >
        <span
          className="text-[#fefefe]/45 text-xs sm:text-sm lg:text-base tracking-[0.32em] uppercase"
          style={{ fontFamily: "'Geist Mono', monospace" }}
        >
          Unicity Labs
        </span>
      </motion.div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-8 sm:px-12 lg:px-16 gap-8 lg:gap-10">

        {/* Logo */}
        <motion.img
          src="/UnicityLogo.svg"
          alt="Unicity"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="h-16 sm:h-20 lg:h-24 w-auto"
        />

        {/* Massive headline */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-[64px] sm:text-[96px] lg:text-[160px] xl:text-[180px] leading-[0.88] tracking-tight uppercase text-center"
          style={{ fontFamily: "'Anton', sans-serif" }}
        >
          <span className="text-[#fefefe]">INVESTOR DECK.</span>
          <br />
          <span className="text-orange-400">MAY 2026.</span>
        </motion.h1>

        {/* Accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="h-[2px] w-40 sm:w-56 lg:w-72 bg-gradient-to-r from-transparent via-orange-500 to-transparent origin-center"
        />

      </div>
    </div>
  );
}
