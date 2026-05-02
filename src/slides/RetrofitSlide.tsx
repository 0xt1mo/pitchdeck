import { motion } from 'framer-motion';

export function RetrofitSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-10 sm:py-14 lg:py-16 justify-center gap-7">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-orange-400 text-sm tracking-[0.4em] uppercase shrink-0"
          style={{ fontFamily: "'Geist Mono', monospace" }}
        >
          Competition
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-[#fefefe] text-[42px] sm:text-[60px] lg:text-[80px] leading-[1.0] tracking-tight max-w-6xl shrink-0"
          style={{ fontFamily: "'Anton', sans-serif" }}
        >
          YOU CAN'T RETROFIT AN EVM INTO{' '}
          <span className="text-orange-400">AUTONOMOUS AI.</span>
        </motion.h1>

        {/* Body */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="shrink-0 max-w-5xl pb-5 space-y-5"
          style={{ borderBottom: '1px solid rgba(249,115,22,0.30)' }}
        >
          <p
            className="text-[#fefefe]/75 text-base sm:text-lg lg:text-xl leading-relaxed"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            State channels, sharding, rollups, sequencers — every patch in crypto is an attempt to make a 2015 design do something it was never built to do.
          </p>
          <p
            className="text-[#fefefe]/75 text-base sm:text-lg lg:text-xl leading-relaxed"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            And even with a perfect chain, enterprise and government need more — secure runtime, policy enforcement, on-premise verifiable execution, cryptographic identity, multi-protocol networking.{' '}
            <span className="text-[#fefefe] font-bold">Current blockchains deliver none of these.</span>
          </p>
        </motion.div>

        {/* Punch */}
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-orange-400 text-[22px] sm:text-[30px] lg:text-[38px] leading-[0.95] tracking-tight shrink-0"
          style={{ fontFamily: "'Anton', sans-serif" }}
        >
          WRONG SUBSTRATE. INCOMPLETE STACK.
        </motion.h2>

      </div>
    </div>
  );
}
