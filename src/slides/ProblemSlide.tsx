import { motion } from 'framer-motion';

const pillars = [
  { title: 'FRICTIONLESS RAILS', punch: 'Extreme throughput with ultra-low latency.', text: 'Billions of agents may transact thousands of times a day.' },
  { title: 'NEAR-ZERO COST', punch: 'A $0.001 transaction can\'t cost $0.001 to settle.', text: 'Agent micro-economics break on gas-priced chains.' },
  { title: 'PERMISSIONLESS', punch: 'Centralized gatekeepers don\'t work for an autonomous economy.', text: 'Any chain. Any service. Any agent. No gatekeepers.' },
  { title: 'IDENTITY', punch: 'Agents have API keys. Not identities.', text: 'No way to verify who an agent is, what it\'s authorized to do.' },
  { title: 'SECURITY', punch: 'Agent security is bolted on, not built in.', text: 'No verifiable execution. No way to prove what an agent actually did.' },
  { title: 'PORTABILITY', punch: "True autonomy means agents can't be tied to a single host.", text: 'On-chain identity, reputation, and history travel with the agent. Switch models, switch platforms, keep everything.' },
];

export function ProblemSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">

      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-8 sm:py-10 lg:py-12">

        {/* Header */}
        <div className="shrink-0 mb-4">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-orange-400 text-sm tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            The Problem
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[32px] sm:text-[44px] lg:text-[56px] leading-[0.95] tracking-tight mt-2"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            WHAT AUTONOMY <span className="text-orange-400">ACTUALLY REQUIRES</span>
          </motion.h1>
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-3 text-[#fefefe]/80 text-sm sm:text-base max-w-4xl leading-relaxed space-y-1"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            <li className="flex gap-3"><span className="text-orange-400/80 shrink-0">→</span><span>No enterprise will deploy autonomous agents that can spend money, sign contracts, or access sensitive data without verifiable security.</span></li>
            <li className="flex gap-3"><span className="text-orange-400/80 shrink-0">→</span><span>Legacy blockchains have too much friction for machines.</span></li>
            <li className="flex gap-3"><span className="text-orange-400/80 shrink-0">→</span><span>Nothing is portable.</span></li>
            <li className="flex gap-3"><span className="text-orange-400/80 shrink-0">→</span><span className="text-orange-400/80">Here's what's missing.</span></li>
          </motion.ul>
        </div>

        {/* Pillars — vertical list with text beside */}
        <div className="flex flex-col flex-1 justify-center">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
              className="flex items-center gap-5 lg:gap-8 py-1.5 lg:py-2"
              style={{ borderBottom: i < pillars.length - 1 ? '1px solid rgba(249,115,22,0.1)' : 'none' }}
            >
              <h3
                className="text-orange-400 text-[22px] sm:text-[28px] lg:text-[34px] leading-none tracking-tight w-[200px] lg:w-[260px] shrink-0"
                style={{ fontFamily: "'Anton', sans-serif" }}
              >
                {p.title}
              </h3>
              <div>
                <p className="text-[#fefefe] text-sm sm:text-base lg:text-lg font-bold"
                  style={{ fontFamily: "'Geist Mono', monospace" }}>
                  {p.punch}
                </p>
                <p className="text-[#fefefe]/60 text-sm sm:text-base leading-relaxed mt-0.5"
                  style={{ fontFamily: "'Geist Mono', monospace" }}>
                  {p.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
