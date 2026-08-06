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

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 sm:px-10 lg:px-16 gap-12 lg:gap-16">

        {/* Logo */}
        <motion.img
          src="/UnicityLogo.svg"
          alt="Unicity"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="h-20 sm:h-28 lg:h-36 w-auto"
        />

        {/* Accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="h-[1px] w-40 sm:w-56 lg:w-72 bg-gradient-to-r from-transparent via-orange-500/60 to-transparent origin-center"
        />

        {/* Round name */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col items-center gap-3"
        >
          <h1
            className="text-[#fefefe] text-[34px] sm:text-[52px] lg:text-[72px] leading-[0.98] tracking-tight uppercase text-center max-w-5xl"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            The{' '}
            <span className="text-orange-400">Protocol</span>
          </h1>
          <p
            className="text-[#fefefe]/70 text-sm sm:text-lg lg:text-2xl tracking-[0.28em] uppercase text-center"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            A New Agentic Financial System
          </p>
        </motion.div>

      </div>
    </div>
  );
}
