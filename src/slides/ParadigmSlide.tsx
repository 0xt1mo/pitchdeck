import { motion } from 'framer-motion';
import splashVideoUrl from '/kling_20260226_VIDEO_Take_Image_1650_0.mp4';

export function ParadigmSlide() {
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
            Appendix — Architecture
          </motion.p>
          <motion.h1 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[28px] sm:text-[40px] lg:text-[52px] leading-[0.95] tracking-tight mt-1"
            style={{ fontFamily: "'Anton', sans-serif" }}>
            THE PARADIGM SHIFT:{' '}
            <span className="text-orange-400">BEYOND SHARED LEDGERS</span>
          </motion.h1>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] w-32 sm:w-48 bg-gradient-to-r from-orange-500 to-transparent origin-left mt-1.5" />
        </div>

        {/* Diagrams */}
        <div className="flex-1 grid grid-cols-2 gap-4 sm:gap-8 mt-4 sm:mt-6 min-h-0">

          {/* Traditional Approach */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col min-h-0">
            <h2 className="text-[#fefefe]/80 text-sm sm:text-base tracking-[0.1em] uppercase mb-3"
              style={{ fontFamily: "'Anton', sans-serif" }}>
              Traditional Approach
            </h2>
            <div className="flex-1 rounded-xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-3 sm:p-4 min-h-0 overflow-hidden relative">
              <object type="image/svg+xml" data="/traditional-paradigm.svg"
                className="absolute inset-0 w-full h-full p-3 sm:p-4">
                Traditional blockchain approach
              </object>
            </div>
          </motion.div>

          {/* Unicity Approach */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-col min-h-0">
            <h2 className="text-orange-400 text-sm sm:text-base tracking-[0.1em] uppercase mb-3"
              style={{ fontFamily: "'Anton', sans-serif" }}>
              Unicity Approach
            </h2>
            <div className="flex-1 rounded-xl border border-orange-500/20 bg-orange-500/[0.03] backdrop-blur-sm p-3 sm:p-4 min-h-0 overflow-hidden relative">
              <object type="image/svg+xml" data="/unicity-paradigm.svg"
                className="absolute inset-0 w-full h-full p-3 sm:p-4">
                Unicity approach
              </object>
            </div>
          </motion.div>

        </div>

        {/* Description text */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="shrink-0 mt-4 sm:mt-5">
          <p className="text-[#fefefe]/70 text-xs sm:text-sm leading-relaxed max-w-4xl"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            All blockchains to date operate as shared ledgers, leading to competition for resources and bottlenecks.
            Unicity shatters this paradigm — the first blockchain with true peer-to-peer transactions,{' '}
            <span className="text-orange-400">eliminating the shared ledger entirely</span>.
            Assets exist off-chain; on-chain functionality is reduced to preventing double-spending.
          </p>
        </motion.div>

        {/* Logo */}

      </div>
    </div>
  );
}
