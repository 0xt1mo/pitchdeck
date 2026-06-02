import { motion } from 'framer-motion';

export function TechnicalAppendixDividerSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">

      {/* Background grid texture — consistent across the deck */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 sm:px-10 lg:px-16 gap-10 lg:gap-14">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-orange-400 text-sm sm:text-base lg:text-lg tracking-[0.4em] uppercase font-bold"
          style={{ fontFamily: "'Geist Mono', monospace" }}
        >
          Appendix
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-[#fefefe] text-[36px] sm:text-[56px] lg:text-[84px] xl:text-[100px] leading-[0.95] tracking-tight uppercase text-center"
          style={{ fontFamily: "'Anton', sans-serif" }}
        >
          TECHNICAL{' '}
          <span className="text-orange-400">APPENDIX.</span>
        </motion.h1>

        {/* Accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="h-[2px] w-40 sm:w-56 lg:w-72 bg-gradient-to-r from-transparent via-orange-500 to-transparent origin-center"
        />

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-[#fefefe]/70 text-base sm:text-lg lg:text-xl tracking-[0.18em] uppercase text-center"
          style={{ fontFamily: "'Geist Mono', monospace" }}
        >
          AOS Kernel · Why AOS · Semantic Intercept Fabric · Proofs of Uniqueness
        </motion.p>

      </div>
    </div>
  );
}
