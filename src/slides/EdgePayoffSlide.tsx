import { motion } from 'framer-motion';

const cards = [
  {
    eyebrow: 'Kernel-Level Verification',
    title: 'AGENT STATE ITSELF BECOMES A TOKEN.',
    text: 'Every action - model output, tool call, decision, intermediate reasoning is verified cryptographically inside the OS kernel.',
  },
  {
    eyebrow: 'Peer-to-Peer at Machine Scale',
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
            Two consequences of the architecture that enable autonomous AI.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 gap-5 lg:gap-6 shrink-0">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
              className="rounded-md p-7 lg:p-9"
              style={{
                background: 'rgba(249,115,22,0.04)',
                border: '1px solid rgba(249,115,22,0.45)',
              }}
            >
              <p
                className="text-orange-400 text-xs lg:text-sm tracking-[0.28em] uppercase font-bold"
                style={{ fontFamily: "'Geist Mono', monospace" }}
              >
                {c.eyebrow}
              </p>
              <h3
                className="text-[#fefefe] text-[24px] sm:text-[30px] lg:text-[36px] leading-[1.05] tracking-tight mt-3"
                style={{ fontFamily: "'Anton', sans-serif" }}
              >
                {c.title}
              </h3>
              <p
                className="text-[#fefefe]/80 text-sm sm:text-base lg:text-lg leading-relaxed mt-4"
                style={{ fontFamily: "'Geist Mono', monospace" }}
              >
                {c.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-orange-400 text-[22px] sm:text-[30px] lg:text-[38px] leading-[0.95] tracking-tight pt-5 shrink-0"
          style={{
            fontFamily: "'Anton', sans-serif",
            borderTop: '1px solid rgba(249,115,22,0.25)',
          }}
        >
          ALLOWING US TO BUILD...
        </motion.p>

      </div>
    </div>
  );
}
