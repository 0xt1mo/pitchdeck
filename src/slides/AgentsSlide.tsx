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
            THE NEW BLOCKCHAIN PARADIGM: <span className="text-orange-400">VALIDATION AT THE EDGE</span>
          </motion.h1>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] w-32 sm:w-48 bg-gradient-to-r from-orange-500 to-transparent origin-left mt-2" />
        </div>

        {/* Intro paragraph */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="shrink-0 mt-4 text-[#fefefe]/90 text-base sm:text-lg lg:text-xl leading-relaxed max-w-5xl space-y-3"
          style={{ fontFamily: "'Geist Mono', monospace" }}>
          <p>
            Unicity eliminates <span className="text-orange-400">the shared ledger</span> entirely.
          </p>
          <p>
            Like physical cash, tokens move p2p and are <span className="text-orange-400">locally verifiable</span> at the edge.
          </p>
          <p>
            <span className="text-orange-400">Verifiable execution</span> agents are the equivalent of smart contracts.
          </p>
          <p>
            Our core invention is the <span className="text-orange-400">ZK Uniqueness Oracle</span> that proves the uniqueness of state.
          </p>
        </motion.div>

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
