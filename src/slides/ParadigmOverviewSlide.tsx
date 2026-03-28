import { motion } from 'framer-motion';
import splashVideoUrl from '/kling_20260226_VIDEO_Take_Image_1650_0.mp4';
import unicityLogoUrl from '/UnicityLogo.svg';

export function ParadigmOverviewSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-y-auto">
      {/* Video background */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <video className="w-full h-full object-cover opacity-40" autoPlay muted loop playsInline src={splashVideoUrl} />
        <div className="absolute inset-0 bg-[#060606]/30" />
      </div>

      <div className="relative z-10 h-full flex flex-col px-6 sm:px-10 lg:px-16 py-6 sm:py-8">

        {/* Header */}
        <div className="shrink-0">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-orange-400 text-[10px] sm:text-xs tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            How It Works
          </motion.p>
          <motion.h1 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[28px] sm:text-[40px] lg:text-[52px] leading-[0.95] tracking-tight mt-1"
            style={{ fontFamily: "'Anton', sans-serif" }}>
            THE L1 PARADIGM SHIFT:{' '}
            <span className="text-orange-400">BEYOND SHARED LEDGERS</span>
          </motion.h1>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] w-32 sm:w-48 bg-gradient-to-r from-orange-500 to-transparent origin-left mt-1.5" />
        </div>

        {/* Top text */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="shrink-0 mt-3">
          <p className="text-[#fefefe]/80 text-sm sm:text-base leading-relaxed"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            Satoshi's whitepaper was titled <span className="text-orange-400">"P2P electronic cash"</span>
          </p>
          <p className="text-[#fefefe]/80 text-sm sm:text-base leading-relaxed mt-1"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            17 years later we have neither P2P nor electronic cash
          </p>
          <p className="text-orange-400 text-sm sm:text-base leading-relaxed mt-1"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            Unicity finishes what Bitcoin started
          </p>
        </motion.div>

        {/* Diagrams — compact */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-4 flex-1 min-h-0">

          {/* Traditional Approach */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col min-h-0">
            <h2 className="text-[#fefefe]/80 text-sm sm:text-base tracking-[0.1em] uppercase mb-2"
              style={{ fontFamily: "'Anton', sans-serif" }}>
              Traditional Approach
            </h2>
            <div className="flex-1 rounded-xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-2 min-h-0 overflow-hidden relative">
              <object type="image/svg+xml" data="/traditional-paradigm.svg"
                className="absolute inset-0 w-full h-full p-2">
                Traditional blockchain approach
              </object>
            </div>
          </motion.div>

          {/* Unicity Approach */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-col min-h-0">
            <h2 className="text-orange-400 text-sm sm:text-base tracking-[0.1em] uppercase mb-2"
              style={{ fontFamily: "'Anton', sans-serif" }}>
              Unicity Approach
            </h2>
            <div className="flex-1 rounded-xl border border-orange-500/20 bg-orange-500/[0.03] backdrop-blur-sm p-2 min-h-0 overflow-hidden relative">
              <object type="image/svg+xml" data="/unicity-paradigm.svg"
                className="absolute inset-0 w-full h-full p-2">
                Unicity approach
              </object>
            </div>
          </motion.div>

        </div>

        {/* Bottom text */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="shrink-0 mt-4 mb-14">
          <p className="text-[#fefefe]/80 text-sm sm:text-base leading-relaxed w-full"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            Shared ledgers were designed for humans: slow, sequential, contested. Agents don't work that way — they're parallel, autonomous, and transacting at machine speed.
            Unicity is the first blockchain built for that reality.{' '}
            <span className="text-orange-400">No shared ledger. No bottlenecks.</span>{' '}
            Assets live off-chain; the only on-chain function is preventing double-spending.
            The result: unlimited throughput, one-second finality, and a microcent per transaction.
          </p>
          <p className="text-orange-400 text-base sm:text-lg font-bold mt-3 tracking-wide"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            Chain-agnostic token transfers at machine speed.
          </p>
        </motion.div>

        {/* Logo */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
          className="shrink-0 mt-3 flex justify-end">
          <img src={unicityLogoUrl} alt="Unicity" className="h-5 opacity-60" />
        </motion.div>

      </div>
    </div>
  );
}
