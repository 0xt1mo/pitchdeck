import { motion } from 'framer-motion';

const cards = [
  {
    title: 'AGENT STATE IS TOKENIZED.',
    text: 'Every action — model output, tool call, decision — is verified inside an enforcement runtime that sits below the agent and cannot be bypassed.',
  },
  {
    title: 'VALUE MOVES AT MACHINE SPEED.',
    text: 'No shared ledger. No mempool. No gas. Subscription economics, privacy by design — the first architecture that fits agent-to-agent payments.',
  },
];

export function EdgePayoffSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-10 sm:py-14 lg:py-16 justify-center gap-7">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-orange-400 text-sm tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            The Payoff
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[32px] sm:text-[44px] lg:text-[56px] leading-[1.05] tracking-tight mt-2"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            WHAT VALIDATION AT THE EDGE{' '}
            <span className="text-orange-400">UNLOCKS</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-4 text-[#fefefe]/85 text-lg sm:text-xl lg:text-2xl max-w-5xl leading-relaxed"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Three consequences. Each one is required for autonomous AI. Each one is impossible on a shared ledger.
          </motion.p>
        </div>

        {/* Cards — top row 2-col + economic unlock full-width */}
        <div className="flex flex-col gap-4 lg:gap-5 shrink-0">
          <div className="grid grid-cols-2 gap-4 lg:gap-5">
            {cards.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
                className="rounded-md p-5 lg:p-7"
                style={{
                  background: 'rgba(249,115,22,0.04)',
                  border: '1px solid rgba(249,115,22,0.45)',
                }}
              >
                <h3
                  className="text-orange-400 text-[20px] sm:text-[26px] lg:text-[30px] leading-[1.05] tracking-tight"
                  style={{ fontFamily: "'Anton', sans-serif" }}
                >
                  {c.title}
                </h3>
                <p
                  className="text-[#fefefe]/80 text-sm lg:text-base leading-relaxed mt-3"
                  style={{ fontFamily: "'Geist Mono', monospace" }}
                >
                  {c.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Third card — full width */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="rounded-md p-5 lg:p-7 grid grid-cols-[1fr_2fr] gap-6 items-start"
            style={{
              background: 'rgba(249,115,22,0.04)',
              border: '1px solid rgba(249,115,22,0.45)',
            }}
          >
            <div>
              <h3
                className="text-orange-400 text-[20px] sm:text-[26px] lg:text-[30px] leading-[1.05] tracking-tight"
                style={{ fontFamily: "'Anton', sans-serif" }}
              >
                GAS IS ELIMINATED.
              </h3>
            </div>
            <p
              className="text-[#fefefe]/80 text-sm lg:text-base leading-relaxed"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              No scarcity, no auction, no per-transaction fees. Pricing inverts from gas to fixed subscription. The only architecture where machine-speed agent transaction volumes are economically viable at the protocol layer.
            </p>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
