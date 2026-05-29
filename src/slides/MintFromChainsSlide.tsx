import { motion } from 'framer-motion';
import { SolMintFlowDiagram } from './NoBridgeRiskSlide';

const mono = { fontFamily: "'Geist Mono', monospace" };
const anton = "'Anton', sans-serif";

export function MintFromChainsSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-8 sm:py-10 lg:py-12 justify-center gap-6 lg:gap-8">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-orange-400 text-[11px] lg:text-sm tracking-[0.35em] uppercase mb-2"
            style={mono}
          >
            Minting Path · 3 of 3 <span className="text-[#fefefe]/55">· Token Genesis · Cross-Chain Assets</span>
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[30px] sm:text-[46px] lg:text-[60px] leading-[1.0] tracking-tight"
            style={{ fontFamily: anton }}
          >
            MINTING FROM <span className="text-orange-400">OTHER CHAINS</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-[#fefefe]/80 text-base sm:text-lg lg:text-2xl leading-relaxed mt-3"
            style={mono}
          >
            A Unicity SOL token — verified straight from Solana. No bridge to trust.
          </motion.p>
        </div>

        {/* Flow diagram */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="shrink-0 flex items-center justify-center w-full max-w-6xl mx-auto"
        >
          <SolMintFlowDiagram />
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="shrink-0 text-[#fefefe]/45 text-sm sm:text-base lg:text-lg tracking-[0.25em] uppercase text-center"
          style={mono}
        >
          No Bridge&nbsp;&nbsp;·&nbsp;&nbsp;No Custodian&nbsp;&nbsp;·&nbsp;&nbsp;Nothing to Hack
        </motion.p>

      </div>
    </div>
  );
}
