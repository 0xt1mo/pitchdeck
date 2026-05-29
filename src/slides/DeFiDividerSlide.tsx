import { motion } from 'framer-motion';

const mono = { fontFamily: "'Geist Mono', monospace" };
const anton = { fontFamily: "'Anton', sans-serif" };

export function DeFiDividerSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      {/* atmospheric glow */}
      <div
        className="fixed inset-0 z-[1] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 55% 55% at 50% 50%, rgba(249,115,22,0.1) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-8 sm:px-12 lg:px-20 gap-6 lg:gap-8">

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-orange-400 text-xs lg:text-sm tracking-[0.45em] uppercase"
          style={mono}
        >
          Build on Unicity
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-[#fefefe] text-[44px] sm:text-[72px] lg:text-[100px] leading-[0.95] tracking-tight"
          style={anton}
        >
          WHAT CAN YOU
          <br />
          <span className="text-orange-400">BUILD?</span>
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="h-[2px] w-40 sm:w-56 lg:w-72 bg-gradient-to-r from-transparent via-orange-500 to-transparent origin-center"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-[#fefefe]/70 text-base sm:text-lg lg:text-2xl leading-relaxed max-w-4xl"
          style={mono}
        >
          Composable protocols on self-contained tokens.
        </motion.p>

      </div>
    </div>
  );
}
