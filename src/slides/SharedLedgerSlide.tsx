import { motion } from 'framer-motion';

export function SharedLedgerSlide() {
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
          The Industry
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-[#fefefe] text-[42px] sm:text-[64px] lg:text-[88px] leading-[1.0] tracking-tight max-w-6xl shrink-0"
          style={{ fontFamily: "'Anton', sans-serif" }}
        >
          EVERY BLOCKCHAIN FROM BITCOIN TO MEGAETH IS THE SAME{' '}
          <span className="text-orange-400">17-YEAR-OLD DESIGN.</span>
        </motion.h1>

        {/* Body */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="shrink-0 max-w-4xl"
        >
          <p
            className="text-[#fefefe]/85 text-lg sm:text-xl lg:text-2xl leading-relaxed"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            A shared asset ledger. Competition for blockspace. Gas fees.
          </p>
          <p
            className="text-[#fefefe]/65 text-base sm:text-lg lg:text-xl italic leading-relaxed mt-3 pb-5"
            style={{
              fontFamily: "'Geist Mono', monospace",
              borderBottom: '1px solid rgba(249,115,22,0.25)',
            }}
          >
            The wrong design for billions of agents transacting at machine speed.
          </p>
        </motion.div>

        {/* Punch */}
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-orange-400 text-[24px] sm:text-[32px] lg:text-[42px] leading-[0.95] tracking-tight shrink-0"
          style={{ fontFamily: "'Anton', sans-serif" }}
        >
          THE SHARED LEDGER IS THE BOTTLENECK.
        </motion.h2>

      </div>
    </div>
  );
}
