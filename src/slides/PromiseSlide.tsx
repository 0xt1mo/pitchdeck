import { motion } from 'framer-motion';

export function PromiseSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-10 sm:py-14 lg:py-16 justify-center gap-7">

        {/* Eyebrow */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-orange-400 text-sm tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            The Promise
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-[#fefefe]/80 text-lg sm:text-xl lg:text-2xl mt-3"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Satoshi titled the whitepaper
          </motion.p>
        </div>

        {/* Quote */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-orange-400 text-[48px] sm:text-[72px] lg:text-[96px] leading-[1.0] tracking-tight max-w-6xl shrink-0"
          style={{ fontFamily: "'Anton', sans-serif" }}
        >
          "Peer-to-Peer Electronic Cash."
        </motion.h1>

        {/* Reflection */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-[#fefefe] text-[32px] sm:text-[44px] lg:text-[56px] leading-[1.05] tracking-tight pb-5 shrink-0"
          style={{
            fontFamily: "'Anton', sans-serif",
            borderBottom: '1px solid rgba(249,115,22,0.25)',
          }}
        >
          17 years later,
          <br />
          we have <span className="text-orange-400">neither.</span>
        </motion.h2>

        {/* Punch */}
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-[#fefefe] text-[20px] sm:text-[26px] lg:text-[32px] leading-[0.95] tracking-tight shrink-0"
          style={{ fontFamily: "'Anton', sans-serif" }}
        >
          UNICITY IS FINALLY BUILDING{' '}
          <span className="text-orange-400">WHAT WAS PROMISED.</span>
        </motion.h3>

      </div>
    </div>
  );
}
