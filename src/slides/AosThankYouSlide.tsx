import { motion } from 'framer-motion';

const mono = "'Geist Mono', monospace";
const display = "'Anton', sans-serif";

export function AosThankYouSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.10), transparent 60%)' }}
      />

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-8 sm:px-12 lg:px-16 gap-8 lg:gap-12 text-center">

        {/* Kicker */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-orange-400 text-sm sm:text-base lg:text-lg tracking-[0.4em] uppercase font-bold"
          style={{ fontFamily: mono }}
        >
          Unicity AOS · The OS for Autonomous AI
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-[#fefefe] text-[64px] sm:text-[108px] lg:text-[150px] xl:text-[168px] leading-[0.9] tracking-tight uppercase"
          style={{ fontFamily: display }}
        >
          Thank <span className="text-orange-400">you.</span>
        </motion.h1>

        {/* Accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="h-[2px] w-40 sm:w-56 lg:w-72 bg-gradient-to-r from-transparent via-orange-500 to-transparent origin-center"
        />

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-col gap-3"
        >
          <p className="text-[#fefefe] text-lg sm:text-xl lg:text-2xl" style={{ fontFamily: mono }}>
            Mike Gault <span className="text-[#fefefe]/40">·</span> CEO <span className="text-[#fefefe]/40">·</span>{' '}
            <a href="mailto:mike@unicity-labs.com" className="text-orange-400 hover:underline">mike@unicity-labs.com</a>
          </p>
          <p className="text-[#fefefe]/70 text-base sm:text-lg lg:text-xl" style={{ fontFamily: mono }}>
            <a href="https://unicity.ai" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 hover:underline">unicity.ai</a>
            <span className="text-[#fefefe]/30">  ·  </span>
            <a href="mailto:info@unicity.ai" className="hover:text-orange-400 hover:underline">info@unicity.ai</a>
          </p>
        </motion.div>

      </div>
    </div>
  );
}
