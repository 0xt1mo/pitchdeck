import { motion } from 'framer-motion';

export function PromiseSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-8 sm:py-10 lg:py-12 justify-center gap-6 lg:gap-8">

        {/* Eyebrow */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-orange-400 text-[10px] sm:text-xs tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            The Promise
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-[#fefefe]/65 text-base sm:text-lg lg:text-xl mt-2"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Satoshi titled the whitepaper
          </motion.p>
        </div>

        {/* Quote — dominant */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-orange-400 text-[44px] sm:text-[68px] lg:text-[92px] leading-[0.95] tracking-tight shrink-0"
          style={{ fontFamily: "'Anton', sans-serif" }}
        >
          "PEER-TO-PEER ELECTRONIC CASH."
        </motion.h1>

        {/* Reflection */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-[#fefefe]/70 text-[28px] sm:text-[40px] lg:text-[52px] leading-[0.95] tracking-tight shrink-0"
          style={{ fontFamily: "'Anton', sans-serif" }}
        >
          17 YEARS LATER, <span className="text-[#fefefe]">WE HAVE</span> <span className="text-orange-400">NEITHER.</span>
        </motion.h2>

        {/* Punch — strong closing */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="shrink-0 pt-6 lg:pt-8 space-y-4 lg:space-y-5"
          style={{ borderTop: '1px solid rgba(249,115,22,0.3)' }}
        >
          <p
            className="text-[#fefefe]/85 text-sm sm:text-base lg:text-lg leading-relaxed max-w-5xl"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Satoshi proposed peer-to-peer electronic cash. The industry built ledgers with <span className="text-orange-400">decentralization theatre</span> and got <span className="text-orange-400">co-opted by Wall Street</span>.
          </p>
          <p
            className="text-[#fefefe]/90 text-sm sm:text-base lg:text-lg leading-relaxed max-w-5xl"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Unicity delivers on the original spec: <span className="text-orange-400">no ledger, no validators, no referees</span>. Just bearer cash, peer-to-peer. The foundation on which we're <span className="text-orange-400">rebuilding DeFi</span>.
          </p>
        </motion.div>

      </div>
    </div>
  );
}
