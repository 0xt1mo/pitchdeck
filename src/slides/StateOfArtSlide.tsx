import { motion } from 'framer-motion';

const mono = { fontFamily: "'Geist Mono', monospace" };
const anton = { fontFamily: "'Anton', sans-serif" };

const ORANGE = '#fb923c';
const BLUE = '#8fb8e6';
const BLUE_DIM = 'rgba(143,184,230,0.72)';

export function StateOfArtSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex items-center gap-6 lg:gap-12 px-8 sm:px-12 lg:px-20 py-8">

        {/* Left — text */}
        <div className="shrink-0 w-[40%] max-w-xl">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[40px] sm:text-[58px] lg:text-[76px] leading-[0.98] tracking-tight"
            style={anton}
          >
            THE <span className="text-orange-400">TRILEMMA</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-[#fefefe]/80 text-base sm:text-lg lg:text-xl leading-relaxed mt-5"
            style={mono}
          >
            On a shared ledger every transaction is public, making privacy hard. Using advanced cryptography (FHE, ZK) to recover privacy kills the throughput, and shortcuts that restore throughput give up decentralization. <span className="text-orange-400">Every design picks two.</span>
          </motion.p>
        </div>

        {/* Right — Venn */}
        <div className="flex-1 h-full flex items-center justify-center min-h-0">
          <motion.svg
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            viewBox="0 0 680 560"
            className="h-full max-h-[78vh] w-auto"
          >
            <defs>
              <radialGradient id="labelFade" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(6,6,6,0.92)" />
                <stop offset="55%" stopColor="rgba(6,6,6,0.7)" />
                <stop offset="100%" stopColor="rgba(6,6,6,0)" />
              </radialGradient>
            </defs>

            {/* Circle fills (stack to brighten overlaps) */}
            <g fill="rgba(249,115,22,0.05)" stroke="rgba(249,115,22,0.7)" strokeWidth="1.6">
              <circle cx="340" cy="195" r="170" />
              <circle cx="248" cy="350" r="170" />
              <circle cx="432" cy="350" r="170" />
            </g>

            {/* Set labels — outer lobes */}
            <text x="340" y="120" textAnchor="middle" fontSize="30" fill={ORANGE} style={anton}>PRIVACY</text>
            <text x="180" y="432" textAnchor="middle" fontSize="26" fill={ORANGE} style={anton}>DECENTRALIZED</text>
            <text x="500" y="432" textAnchor="middle" fontSize="26" fill={ORANGE} style={anton}>THROUGHPUT</text>

            {/* Pairwise petals — the alternatives that pick only two */}
            <g>
              <ellipse cx="252" cy="232" rx="80" ry="30" fill="url(#labelFade)" />
              <text x="252" y="228" textAnchor="middle" fontSize="18" fill={BLUE} style={mono}>Monero</text>
              <text x="252" y="247" textAnchor="middle" fontSize="13" fill={BLUE_DIM} style={mono}>no throughput</text>
            </g>
            <g>
              <ellipse cx="428" cy="232" rx="76" ry="30" fill="url(#labelFade)" />
              <text x="428" y="228" textAnchor="middle" fontSize="18" fill={BLUE} style={mono}>Canton</text>
              <text x="428" y="247" textAnchor="middle" fontSize="13" fill={BLUE_DIM} style={mono}>centralized</text>
            </g>
            <g>
              <ellipse cx="340" cy="402" rx="80" ry="30" fill="url(#labelFade)" />
              <text x="340" y="398" textAnchor="middle" fontSize="18" fill={BLUE} style={mono}>public L1s</text>
              <text x="340" y="417" textAnchor="middle" fontSize="13" fill={BLUE_DIM} style={mono}>no privacy</text>
            </g>

            {/* Center — Unicity claims it */}
            <text x="340" y="306" textAnchor="middle" fontSize="27" fill={ORANGE} style={anton}>UNICITY</text>
          </motion.svg>
        </div>

      </div>
    </div>
  );
}
