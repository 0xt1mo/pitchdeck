import { motion } from 'framer-motion';

const mono = { fontFamily: "'Geist Mono', monospace" };
const anton = { fontFamily: "'Anton', sans-serif" };

export function EdgeModelSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-10 sm:py-14 lg:py-16 justify-center gap-7 lg:gap-9">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-orange-400 text-xs lg:text-sm tracking-[0.4em] uppercase shrink-0"
          style={mono}
        >
          The Model
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-[#fefefe] text-[40px] sm:text-[64px] lg:text-[88px] leading-[0.98] tracking-tight shrink-0"
          style={anton}
        >
          TOKENS MOVE P2P.
          <br />
          <span className="text-orange-400">THE CHAIN JUST PROVES.</span>
        </motion.h1>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-[#fefefe]/85 text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-5xl shrink-0"
          style={mono}
        >
          Tokens are self-contained and move peer-to-peer with <span className="text-orange-400">validation at the edge</span>. The chain just provides a proof of single-spend — <span className="text-orange-400">without ever seeing the transaction</span>.
        </motion.p>

      </div>
    </div>
  );
}
