import { motion } from 'framer-motion';

const mono = "'Geist Mono', monospace";
const anton = "'Anton', sans-serif";

const coinbase = [
  'Facilitator sits in the middle of every transaction.',
  'Compliance enforced by a middleman watching the flow.',
  'Custodial checkpoints — the network sees your payments.',
  'Settles in USDC.',
];

const unicity = [
  'Compliance lives inside the wallet — self-custodial.',
  'No facilitator, no middleman. Peer-to-peer by default.',
  'A non-compliant payment is never even constructed.',
  'Settles in USDT.',
];

export function CompliantByConstructionSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      {/* Warm glow, top */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(55% 45% at 50% 0%, rgba(249,115,22,0.10), transparent 70%)' }}
      />

      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-20 py-10 lg:py-12 gap-7 lg:gap-9">

        {/* Header */}
        <div className="shrink-0">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[28px] sm:text-[44px] lg:text-[60px] leading-[0.95] tracking-tight uppercase"
            style={{ fontFamily: anton }}
          >
            <span className="text-[#fefefe]">COMPLIANCE IN THE WALLET,</span>{' '}
            <span className="text-orange-400">NOT THE MIDDLE.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-[#fefefe]/85 text-base sm:text-lg lg:text-xl leading-snug mt-3 max-w-5xl"
            style={{ fontFamily: mono }}
          >
            Coinbase wrote the agent-payment standard — but enforces compliance with a facilitator in the middle, watching every transaction.
          </motion.p>
        </div>

        {/* Two columns */}
        <div className="shrink-0 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-7">

          {/* Coinbase */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="rounded-2xl border border-[#fefefe]/12 bg-[#fefefe]/[0.02] p-6 lg:p-8"
          >
            <p className="text-[#fefefe]/45 text-xs lg:text-sm tracking-[0.18em] uppercase" style={{ fontFamily: mono }}>
              Coinbase · x402
            </p>
            <p className="text-[#fefefe] text-2xl lg:text-3xl leading-none uppercase mt-2" style={{ fontFamily: anton }}>
              A middleman in the flow
            </p>
            <ul className="mt-5 lg:mt-6 flex flex-col gap-3 lg:gap-4">
              {coinbase.map((c) => (
                <li key={c} className="flex gap-3 text-[#fefefe]/70 text-sm lg:text-lg leading-snug" style={{ fontFamily: mono }}>
                  <span className="text-[#fefefe]/30 shrink-0">—</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Unicity */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="rounded-2xl border-2 border-orange-500 bg-orange-500/[0.06] p-6 lg:p-8"
            style={{ boxShadow: '0 0 28px rgba(249,115,22,0.15)' }}
          >
            <p className="text-orange-400 text-xs lg:text-sm tracking-[0.18em] uppercase" style={{ fontFamily: mono }}>
              Unicity
            </p>
            <p className="text-[#fefefe] text-2xl lg:text-3xl leading-none uppercase mt-2" style={{ fontFamily: anton }}>
              Compliant by construction
            </p>
            <ul className="mt-5 lg:mt-6 flex flex-col gap-3 lg:gap-4">
              {unicity.map((u) => (
                <li key={u} className="flex gap-3 text-[#fefefe]/90 text-sm lg:text-lg leading-snug" style={{ fontFamily: mono }}>
                  <span className="text-orange-400 shrink-0">+</span>
                  <span>{u}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

        {/* Takeaway */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="shrink-0 text-[#fefefe]/85 text-base sm:text-lg lg:text-2xl leading-snug max-w-6xl"
          style={{ fontFamily: mono }}
        >
          Same agentic future — but ours is{' '}
          <span className="text-orange-400">private, peer-to-peer, and compliant by construction.</span>
        </motion.p>

      </div>
    </div>
  );
}
