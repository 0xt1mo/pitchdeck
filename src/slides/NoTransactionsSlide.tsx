import { motion } from 'framer-motion';

const mono = { fontFamily: "'Geist Mono', monospace" };
const anton = { fontFamily: "'Anton', sans-serif" };

const layers = [
  {
    title: 'CONSENSUS & EMISSION',
    desc: 'decentralized base security',
    flow: 'certified state root',
  },
  {
    title: 'UNIQUENESS ORACLE',
    desc: 'stores only proofs that token states are unique',
    flow: 'inclusion proofs',
    highlight: true,
  },
  {
    title: 'EXECUTION LAYER',
    desc: 'agents and users transact client-side, off-chain',
  },
];

export function NoTransactionsSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-7 sm:py-9 lg:py-10 justify-center gap-5 lg:gap-6">

        {/* Header */}
        <div className="shrink-0">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[30px] sm:text-[46px] lg:text-[58px] leading-[1.0] tracking-tight"
            style={anton}
          >
            <span className="text-[#fefefe]">A BLOCKCHAIN WITH </span>
            <span className="text-orange-400">NO TRANSACTIONS</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-[#fefefe]/65 text-sm sm:text-base lg:text-lg leading-relaxed mt-2 max-w-5xl"
            style={mono}
          >
            <span className="text-orange-400">Three layers.</span> The chain certifies uniqueness — and nothing else. Inclusion proofs prove uniqueness of spends (state transitions).
          </motion.p>
        </div>

        {/* Body — three layers, centered */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="shrink-0 flex flex-col w-full max-w-3xl mx-auto"
        >
            {layers.map(({ title, desc, flow, highlight }) => (
              <div key={title}>
                <div
                  className="rounded-2xl px-6 lg:px-7 py-4 lg:py-5"
                  style={{
                    border: highlight ? '1.5px solid #f97316' : '1px solid rgba(254,254,254,0.12)',
                    background: highlight ? 'rgba(249,115,22,0.07)' : 'rgba(255,255,255,0.02)',
                    boxShadow: highlight ? '0 0 30px rgba(249,115,22,0.14)' : undefined,
                  }}
                >
                  <h3
                    className="text-2xl lg:text-3xl leading-none"
                    style={{ ...anton, color: highlight ? '#fb923c' : '#fefefe' }}
                  >
                    {title}
                  </h3>
                  <p className="text-[#fefefe]/65 text-sm lg:text-lg leading-snug mt-2.5" style={mono}>{desc}</p>
                </div>
                {flow && (
                  <p className="text-[#fefefe]/45 text-[11px] lg:text-sm text-center py-2" style={mono}>↓&nbsp;&nbsp;{flow}</p>
                )}
              </div>
            ))}
        </motion.div>

      </div>
    </div>
  );
}
