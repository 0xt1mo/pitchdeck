import { motion } from 'framer-motion';
import splashVideoUrl from '/kling_20260226_VIDEO_Take_Image_1650_0.mp4';
import unicityLogoUrl from '/UnicityLogo.svg';

export function ParadigmOverviewSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      {/* Video background */}
      <div className="fixed inset-0 w-full h-full z-0">
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
            Satoshi's whitepaper was titled <span className="text-orange-400">"P2P electronic cash"</span>.
          </p>
          <p className="text-[#fefefe]/80 text-sm sm:text-base leading-relaxed mt-1"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            17 years later we have neither P2P nor electronic cash.
          </p>
        </motion.div>

        {/* Diagrams — compact */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-4 h-[28vh]">

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
          className="shrink-0 mt-4">
          <p className="text-[#fefefe]/80 text-sm sm:text-base leading-relaxed max-w-5xl"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            All blockchains to date operate as shared ledgers, leading to competition for resources and bottlenecks.
            Unicity shatters this paradigm — the first blockchain with true peer-to-peer transactions,{' '}
            <span className="text-orange-400">eliminating the shared ledger entirely</span>.
            Assets exist off-chain; on-chain functionality is reduced to preventing double-spending.
          </p>
          <div className="mt-3 space-y-1.5">
            {[
              'Unlimited throughput with the same security model as Bitcoin (trust nobody)',
              'Validation at the edge (the recipient), not a set of validators',
              'Ultra low latency',
              'Ultra low cost: a microcent/tx',
            ].map((item) => (
              <p key={item} className="text-[#fefefe]/70 text-sm sm:text-base"
                style={{ fontFamily: "'Geist Mono', monospace" }}>
                <span className="text-orange-400 mr-2">→</span>{item}
              </p>
            ))}
          </div>
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
