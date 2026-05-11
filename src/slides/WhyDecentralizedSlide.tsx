import { motion } from 'framer-motion';

const points = [
  { title: 'NO PLATFORM RISK', text: 'Centralized rails mean centralized pricing. No one can reprice the rails underneath you.' },
  { title: 'PERMISSIONLESS', text: "Agents can't open bank accounts. Blockchain is the only infrastructure that doesn't require human permission." },
  { title: 'VERIFIABLE', text: 'Execution proofs anchored to a decentralized consensus layer. Not "trust us." Prove it.' },
  { title: 'PROGRAMMABLE', text: 'Money as programmable as the agents. Conditional payments, escrow, splits — native to the protocol.' },
];

export function WhyDecentralizedSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">

      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-10 sm:py-14 lg:py-16">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-orange-400 text-sm tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Why Decentralized
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[32px] sm:text-[46px] lg:text-[60px] leading-[0.95] tracking-tight mt-2"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            WHY DECENTRALIZED. WHY{' '}
            <span className="text-orange-400">UNICITY.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-3 text-[#fefefe]/70 text-lg max-w-5xl leading-relaxed italic"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            "If we want an internet where AI agents can operate without destroying trust, blockchains are not optional infrastructure."
            <span className="text-orange-400/60 not-italic ml-2">— a16z crypto, February 2026</span>
          </motion.p>
        </div>

        {/* Four points — single line each */}
        <div className="flex flex-col gap-3 mt-8">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
              className="flex items-baseline gap-4"
            >
              <span className="text-orange-400 text-[24px] sm:text-[30px] lg:text-[36px] font-bold shrink-0 w-[300px] lg:w-[380px]"
                style={{ fontFamily: "'Anton', sans-serif", letterSpacing: '0.02em' }}>
                {p.title}
              </span>
              <span className="text-[#fefefe]/70 text-base leading-relaxed"
                style={{ fontFamily: "'Geist Mono', monospace" }}>
                {p.text}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Hero callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-8 rounded-xl p-6 lg:p-7"
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(232,124,30,0.2)',
          }}
        >
          <p className="text-[#fefefe] text-lg leading-relaxed"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            Unicity's extreme throughput makes it possible to{' '}
            <span className="text-orange-400 font-bold">tokenize every agent, every context, every event, every execution proof.</span>
            {' '}Integrated directly into the kernel of the AI operating system, every action is cryptographically anchored at the point of execution. An agent's identity, reputation, and history become bearer tokens the agent owns — portable across any framework, any harness, any platform.
          </p>
        </motion.div>

      </div>
    </div>
  );
}
