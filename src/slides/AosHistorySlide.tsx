import { motion } from 'framer-motion';

const mono = "'Geist Mono', monospace";
const display = "'Anton', sans-serif";

export function AosHistorySlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-20 py-10 lg:py-14 gap-6 lg:gap-10">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-400 text-xs sm:text-xs lg:text-lg tracking-[0.4em] uppercase font-bold"
            style={{ fontFamily: mono }}
          >
            History rhymes
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[32px] sm:text-[50px] lg:text-[70px] xl:text-[82px] leading-[0.95] tracking-tight uppercase mt-2 max-w-6xl"
            style={{ fontFamily: display }}
          >
            WHEN APPLICATIONS MULTIPLIED,{' '}
            <span className="text-orange-400">THE OS WON THE ERA.</span>
          </motion.h1>
        </div>

        {/* Then / Now parallel */}
        <div className="shrink-0 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="rounded-2xl border border-[#fefefe]/12 bg-[#fefefe]/[0.02] p-6 lg:p-8"
          >
            <p className="text-[#fefefe]/45 text-xs lg:text-lg tracking-[0.2em] uppercase" style={{ fontFamily: mono }}>Then</p>
            <p className="text-[#fefefe] text-xl lg:text-2xl leading-snug mt-3" style={{ fontFamily: mono }}>
              Applications needed one safe place to share the machine. The OS became the most valuable layer in computing.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="rounded-2xl border-2 border-orange-500 bg-orange-500/[0.06] p-6 lg:p-8"
            style={{ boxShadow: '0 0 28px rgba(249,115,22,0.14)' }}
          >
            <p className="text-orange-400 text-xs lg:text-lg tracking-[0.2em] uppercase" style={{ fontFamily: mono }}>Now</p>
            <p className="text-[#fefefe] text-xl lg:text-2xl leading-snug mt-3" style={{ fontFamily: mono }}>
              Agents are the new applications. They need one safe place to share tools, memory, and trust.
            </p>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
