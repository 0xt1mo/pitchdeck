import { motion } from 'framer-motion';

const ANTON = "'Anton', sans-serif";
const MONO = "'Geist Mono', monospace";
const ease = [0.16, 1, 0.3, 1] as const;

export function DdnThankYouSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      {/* glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 60% 55% at 50% 46%, rgba(249,115,22,0.10) 0%, transparent 70%)' }}
      />
      {/* grid, masked to center */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 72% 62% at 50% 48%, #000 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 72% 62% at 50% 48%, #000 30%, transparent 80%)',
        }}
      />

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-8 sm:px-12 lg:px-16 gap-8 lg:gap-10 text-center">

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[#fefefe]/50 text-xs sm:text-sm lg:text-base tracking-[0.34em] uppercase"
          style={{ fontFamily: MONO }}
        >
          <span className="text-orange-400">Unicity AOS</span>
          <span className="text-[#fefefe]/30 mx-2.5">×</span>
          Alerix
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8, ease }}
          className="text-[#fefefe] text-[72px] sm:text-[110px] lg:text-[168px] xl:text-[190px] leading-[0.88] tracking-tight uppercase"
          style={{ fontFamily: ANTON }}
        >
          Thank <span className="text-orange-400">you.</span>
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="h-[2px] w-40 sm:w-56 lg:w-72 bg-gradient-to-r from-transparent via-orange-500 to-transparent origin-center"
        />

        <motion.a
          href="mailto:mike@unicity-labs.com"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-orange-400 hover:text-orange-300 transition-colors text-lg sm:text-2xl lg:text-3xl tracking-[0.02em]"
          style={{ fontFamily: MONO }}
        >
          mike@unicity-labs.com
        </motion.a>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.05, duration: 0.6 }}
          className="text-[#fefefe]/45 text-sm sm:text-base lg:text-lg tracking-[0.14em] uppercase"
          style={{ fontFamily: MONO }}
        >
          aos.unicity.ai · unicity-labs.com
        </motion.p>
      </div>
    </div>
  );
}
