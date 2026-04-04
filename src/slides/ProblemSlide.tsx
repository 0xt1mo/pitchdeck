import { motion } from 'framer-motion';

const pillars = [
  { title: 'FRICTIONLESS RAILS', punch: 'Extreme throughput with ultra-low latency.', text: 'Billions of agents may transact thousands of times a day.' },
  { title: 'NEAR-ZERO COST', punch: 'A $0.001 transaction can\'t cost $0.001 to settle.', text: 'Agent micro-economics break on gas-priced chains.' },
  { title: 'PERMISSIONLESS', punch: 'Centralized gatekeepers don\'t work for an autonomous economy.', text: 'Any chain. Any service. Any agent. No gatekeepers.' },
  { title: 'IDENTITY', punch: 'Agents have API keys. Not identities.', text: 'No way to verify who an agent is, what it\'s authorised to do.' },
  { title: 'ENFORCEMENT', punch: 'Agent security is bolted on, not built in.', text: 'No verifiable execution. No way to prove what an agent actually did.' },
];

export function ProblemSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">

      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-10 sm:py-14 lg:py-16">

        {/* Header */}
        <div className="mb-8 lg:mb-10">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-orange-400 text-[10px] sm:text-xs tracking-[0.4em] uppercase"
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
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-3 text-[#fefefe]/80 text-base sm:text-lg max-w-3xl"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Agents transact today on infrastructure designed for human-scale finance — gas-priced chains, shared ledgers, transaction-based pricing. The economics break at scale. Today's agent security is bolted on, not integrated. <span className="text-orange-400/80">The autonomous economy needs purpose-built rails.</span>
          </motion.p>
        </div>

        {/* Pillars — vertical list with text beside */}
        <div className="flex flex-col mt-4">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="flex items-center gap-5 lg:gap-8 py-2 lg:py-2.5"
              style={{ borderBottom: i < pillars.length - 1 ? '1px solid rgba(249,115,22,0.1)' : 'none' }}
            >
              {/* Title */}
              <h3
                className="text-orange-400 text-[24px] sm:text-[30px] lg:text-[36px] leading-none tracking-tight w-[220px] lg:w-[280px] shrink-0"
                style={{ fontFamily: "'Anton', sans-serif" }}
              >
                {p.title}
              </h3>

              {/* Punch + Text */}
              <div>
                <p className="text-[#fefefe] text-sm sm:text-base font-bold"
                  style={{ fontFamily: "'Geist Mono', monospace" }}>
                  {p.punch}
                </p>
                <p className="text-[#fefefe]/60 text-xs sm:text-sm leading-relaxed mt-1"
                  style={{ fontFamily: "'Geist Mono', monospace" }}>
                  {p.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Logo bottom right */}

      </div>
    </div>
  );
}
