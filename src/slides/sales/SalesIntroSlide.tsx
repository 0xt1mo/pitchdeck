import { motion } from 'framer-motion';

export function SalesIntroSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-8">
        <motion.img
          src="/UnicityLogo.svg"
          alt="Unicity"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="h-10 sm:h-12 lg:h-14 mb-16"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-orange-400 text-xs sm:text-sm tracking-[0.5em] uppercase mb-10"
          style={{ fontFamily: "'Geist Mono', monospace" }}
        >
          Confidential
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-[#fefefe]/50 text-xs sm:text-sm tracking-[0.3em] uppercase mb-3"
          style={{ fontFamily: "'Geist Mono', monospace" }}
        >
          Prepared for
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="text-[#fefefe] text-[44px] sm:text-[64px] lg:text-[88px] leading-[0.9] tracking-tight text-center"
          style={{ fontFamily: "'Anton', sans-serif" }}
        >
          [COMPANY NAME]
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.85 }}
          className="h-[1px] w-32 sm:w-40 mt-8 mb-6 origin-center"
          style={{ background: 'linear-gradient(to right, transparent, rgba(249,115,22,0.6), transparent)' }}
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-[#fefefe]/60 text-sm sm:text-base tracking-[0.3em] uppercase"
          style={{ fontFamily: "'Geist Mono', monospace" }}
        >
          [Date]
        </motion.p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-20 flex items-end justify-between px-8 sm:px-12 lg:px-16 pb-6 sm:pb-8 pointer-events-none">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-[#fefefe]/40 text-[10px] sm:text-xs tracking-[0.3em] uppercase"
          style={{ fontFamily: "'Geist Mono', monospace" }}
        >
          unicity.network
        </motion.p>
      </div>
    </div>
  );
}
