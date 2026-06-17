import { motion } from 'framer-motion';

const mono = "'Geist Mono', monospace";
const anton = "'Anton', sans-serif";
const ORANGE = '#f97316';
const GREY = 'rgba(254,254,254,0.5)';
const LINE = 'rgba(254,254,254,0.35)';

function SwapDiagram() {
  return (
    <svg viewBox="0 0 1000 385" className="w-full h-auto max-h-[55vh]">
      <defs>
        <marker id="coreArO" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M2 1L8 5L2 9" fill="none" stroke={ORANGE} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </marker>
      </defs>

      {/* swap arcs */}
      <path d="M 205 168 Q 500 62 795 168" fill="none" stroke={ORANGE} strokeWidth="2.4" markerEnd="url(#coreArO)" />
      <path d="M 795 262 Q 500 368 205 262" fill="none" stroke={ORANGE} strokeWidth="2.4" markerEnd="url(#coreArO)" />
      <text x="500" y="88" textAnchor="middle" fontFamily={mono} fontSize="24" fill="rgba(254,254,254,0.85)">token X →</text>
      <text x="420" y="352" textAnchor="middle" fontFamily={mono} fontSize="24" fill="rgba(254,254,254,0.85)">← token Y</text>

      {/* A */}
      <circle cx="140" cy="215" r="86" fill="rgba(249,115,22,0.06)" stroke={ORANGE} strokeWidth="2.5" />
      <text x="140" y="215" textAnchor="middle" dominantBaseline="central" fontFamily={anton} fontSize="64" fill="#fb923c">A</text>
      <text x="140" y="340" textAnchor="middle" fontFamily={mono} fontSize="20" fill={GREY}>holds token X</text>

      {/* B */}
      <circle cx="860" cy="215" r="86" fill="rgba(249,115,22,0.06)" stroke={ORANGE} strokeWidth="2.5" />
      <text x="860" y="215" textAnchor="middle" dominantBaseline="central" fontFamily={anton} fontSize="64" fill="#fb923c">B</text>
      <text x="860" y="340" textAnchor="middle" fontFamily={mono} fontSize="20" fill={GREY}>holds token Y</text>

      {/* ATOMIC box */}
      <rect x="408" y="172" width="184" height="86" rx="12" fill="#0f0a06" stroke={ORANGE} strokeWidth="2" />
      <text x="500" y="210" textAnchor="middle" fontFamily={anton} fontSize="28" fill="#ffffff">ATOMIC</text>
      <text x="500" y="238" textAnchor="middle" fontFamily={mono} fontSize="16" fill={ORANGE}>both or neither</text>
    </svg>
  );
}

export function CoreOperationSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-8 sm:py-10 lg:py-12 justify-center gap-5 lg:gap-7">

        {/* Header */}
        <div className="shrink-0">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[30px] sm:text-[44px] lg:text-[56px] leading-[1.0] tracking-tight"
            style={{ fontFamily: anton }}
          >
            <span className="text-[#fefefe]">IN DEFI, THE ATOMIC OPERATION IS THE</span>{' '}
            <span className="text-orange-400">SWAP</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-[#fefefe]/65 text-sm sm:text-base lg:text-xl leading-relaxed mt-3 max-w-5xl"
            style={{ fontFamily: mono }}
          >
            Two assets change hands at once — <span className="text-[#fefefe] font-semibold">both legs, or neither</span>.
          </motion.p>
        </div>

        {/* Diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="shrink-0 flex items-center justify-center w-full max-w-5xl mx-auto"
        >
          <SwapDiagram />
        </motion.div>

        {/* Punch */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="shrink-0 text-center"
        >
          <p className="text-orange-400 text-lg sm:text-xl lg:text-2xl leading-snug" style={{ fontFamily: mono }}>
            Unicity has no shared ledger — so atomicity needs a new paradigm.
          </p>
          <p className="text-[#fefefe]/45 text-sm lg:text-base mt-2" style={{ fontFamily: mono }}>
            that's what predicates solve
          </p>
        </motion.div>

      </div>
    </div>
  );
}
