import { motion } from 'framer-motion';

export function SolutionIntroSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-12 sm:py-16 lg:py-20 justify-center gap-10 lg:gap-14">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-orange-400 text-xs sm:text-sm lg:text-base tracking-[0.4em] uppercase font-bold shrink-0"
          style={{ fontFamily: "'Geist Mono', monospace" }}
        >
          The Solution
        </motion.p>

        {/* Hero headline */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[48px] sm:text-[80px] lg:text-[120px] xl:text-[140px] leading-[0.92] tracking-tight uppercase shrink-0"
          style={{ fontFamily: "'Anton', sans-serif" }}
        >
          <span className="text-[#fefefe]">UNICITY OS:</span>{' '}
          <span className="text-orange-400">A SECURE OS FOR AI AGENTS.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-[#fefefe]/90 text-xl sm:text-2xl lg:text-[32px] leading-snug max-w-6xl shrink-0"
          style={{ fontFamily: "'Geist Mono', monospace" }}
        >
          Runtime, identity, payments, compliance — with{' '}
          <span className="text-orange-400">security at its core.</span>
        </motion.p>

      </div>
    </div>
  );
}
