import { motion } from 'framer-motion';

const steps = [
  {
    name: 'BITCOIN',
    sub: '2009',
    role: 'Correctness + Ordering',
    text: 'Every node certifies every transaction. Every node agrees on order.',
  },
  {
    name: 'FASTPAY',
    sub: '(Sui, Linera)',
    role: 'Correctness Without Ordering',
    text: 'Validators certify correctness. Ordering goes.',
  },
  {
    name: 'UNICITY',
    sub: '2026',
    role: 'Uniqueness Only',
    text: 'The network attests uniqueness. Correctness moves to the edge.',
  },
];

const cards = [
  {
    title: 'AGENT STATE IS TOKENIZED.',
    text: 'Every action — model output, tool call, decision — is verified inside an enforcement runtime that sits below the agent and cannot be bypassed.',
  },
  {
    title: 'VALUE MOVES AT MACHINE SPEED.',
    text: 'No shared ledger. No mempool. No gas. Subscription economics, privacy by design — the first architecture that scales for agentic finance.',
  },
];

export function UnbundledPayoffSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-8 sm:py-10 lg:py-12 justify-center gap-5 lg:gap-6">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-orange-400 text-sm tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Validation at the Edge
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[28px] sm:text-[40px] lg:text-[52px] leading-[0.95] tracking-tight mt-2"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            UNBUNDLING WHAT THE NETWORK <span className="text-orange-400">HAS TO DO.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-3 text-[#fefefe]/85 text-base sm:text-lg lg:text-xl max-w-6xl leading-snug"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Each step removes work the network was assumed to require.{' '}
            <span className="text-orange-400 font-bold">Blockchain becomes a function in the OS.</span>
          </motion.p>
        </div>

        {/* Three-step arc */}
        <div className="flex flex-col shrink-0">
          {steps.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="grid grid-cols-[180px_280px_1fr] lg:grid-cols-[240px_360px_1fr] items-center gap-4 lg:gap-6 py-2 lg:py-2.5"
              style={{ borderBottom: i < steps.length - 1 ? '1px solid rgba(249,115,22,0.1)' : 'none' }}
            >
              <div>
                <h3
                  className="text-orange-400 text-[22px] sm:text-[28px] lg:text-[34px] leading-none tracking-tight"
                  style={{ fontFamily: "'Anton', sans-serif" }}
                >
                  {s.name}
                </h3>
                <p
                  className="text-[#fefefe]/45 text-[10px] sm:text-xs tracking-[0.18em] uppercase mt-1"
                  style={{ fontFamily: "'Geist Mono', monospace" }}
                >
                  {s.sub}
                </p>
              </div>
              <p
                className="text-[#fefefe] text-xs sm:text-sm lg:text-base tracking-[0.18em] uppercase font-bold"
                style={{ fontFamily: "'Geist Mono', monospace" }}
              >
                {s.role}
              </p>
              <p
                className="text-[#fefefe]/75 text-xs sm:text-sm lg:text-base leading-snug"
                style={{ fontFamily: "'Geist Mono', monospace" }}
              >
                {s.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Thick rule divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="h-[2px] w-full bg-gradient-to-r from-orange-500 via-orange-500/40 to-transparent origin-left shrink-0"
          style={{ boxShadow: '0 0 8px rgba(249,115,22,0.5)' }}
        />

        {/* Two unlock cards */}
        <div className="grid grid-cols-2 gap-5 lg:gap-7 shrink-0">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.85 + i * 0.15 }}
              className="rounded-md p-5 lg:p-7"
              style={{
                background: 'rgba(249,115,22,0.04)',
                border: '1px solid rgba(249,115,22,0.45)',
              }}
            >
              <h3
                className="text-orange-400 text-[22px] sm:text-[28px] lg:text-[34px] leading-[1.05] tracking-tight"
                style={{ fontFamily: "'Anton', sans-serif" }}
              >
                {c.title}
              </h3>
              <p
                className="text-[#fefefe]/85 text-sm sm:text-base lg:text-lg leading-relaxed mt-3"
                style={{ fontFamily: "'Geist Mono', monospace" }}
              >
                {c.text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
