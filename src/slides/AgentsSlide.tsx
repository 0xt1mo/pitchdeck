import { motion } from 'framer-motion';
import splashVideoUrl from '/kling_20260226_VIDEO_Take_Image_1650_0.mp4';

export function AgentsSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-y-auto">
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <video className="w-full h-full object-cover opacity-15" autoPlay muted loop playsInline src={splashVideoUrl} />
        <div className="absolute inset-0 bg-[#060606]/50" />
      </div>

      <div className="relative z-10 h-full flex flex-col px-6 sm:px-10 lg:px-16 py-10 sm:py-14 lg:py-16 justify-center gap-6">

        {/* Header */}
        <div className="shrink-0">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-orange-400 text-[10px] sm:text-xs tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            The Unicity L1
          </motion.p>
          <motion.h1 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[28px] sm:text-[40px] lg:text-[52px] leading-[0.95] tracking-tight mt-1"
            style={{ fontFamily: "'Anton', sans-serif" }}>
            THE NEW PARADIGM: <span className="text-orange-400">VALIDATION AT THE EDGE</span>
          </motion.h1>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] w-32 sm:w-48 bg-gradient-to-r from-orange-500 to-transparent origin-left mt-2" />
        </div>

        {/* Intro paragraph */}
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="shrink-0 mt-4 text-[#fefefe]/90 text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-5xl"
          style={{ fontFamily: "'Geist Mono', monospace" }}>
          Unicity eliminates <span className="text-orange-400">globally</span> shared state entirely — agents execute off-chain, verification is done by interested parties only, independent of other transactions.          Like physical cash, tokens are <span className="text-orange-400">locally verifiable</span> at the edge — there is no chain dependency.
        </motion.p>

        {/* Diagram */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex items-center justify-center shrink-0 h-[400px] lg:h-[480px]">
          <object type="image/svg+xml" data="/agents_smartcontracts.svg"
            className="w-full h-full object-contain">
            Agents architecture diagram
          </object>
        </motion.div>

        {/* Logo */}

      </div>
    </div>
  );
}
