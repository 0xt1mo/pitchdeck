import { motion } from 'framer-motion';

const categories = [
  {
    title: 'AGENT PROTOCOLS',
    competitors: 'x402 (Linux Foundation) · Stripe MPP',
    text: "We don't compete, we scale them. These protocols negotiate payments then hand off to shared ledgers. Unicity turns the message itself into P2P settlement.",
  },
  {
    title: 'SETTLEMENT',
    competitors: 'Base · Tempo · Solana · Lightning',
    text: "All shared-ledger or centralized. Unicity settles natively, per-transaction, at internet speed, with privacy by design.",
  },
  {
    title: 'AI CHAINS',
    competitors: 'Kite.ai · Near · Fetch.ai',
    text: "Closest competitors but vertically integrated, not open infrastructure. Still EVM/shared-ledger underneath. Unicity is chain-agnostic — any asset, any chain.",
  },
  {
    title: 'FRAMEWORKS',
    competitors: 'LangChain · CrewAI · Google ADK · OpenClaw',
    text: "We complement. Unicity as the runtime underneath adds security, identity, communication and settlement.",
  },
  {
    title: 'SECURITY',
    competitors: 'Lakera/Check Point · HiddenLayer · Protect AI · NeMo Guardrails',
    text: "All bolt-on, not kernel level. Check Point paid $300M for Lakera — validating demand but not solving the problem.",
  },
];

export function CompetitionSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-10 sm:py-14 lg:py-16">

        {/* Header */}
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-400 text-[10px] sm:text-xs tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            Competition
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[32px] sm:text-[44px] lg:text-[56px] leading-[0.95] tracking-tight mt-2"
            style={{ fontFamily: "'Anton', sans-serif" }}>
            WHY US? <span className="text-orange-400">THE COMPETITIVE LANDSCAPE</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="mt-3 text-[#fefefe]/70 text-xs sm:text-sm max-w-4xl"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            The first purpose-built infrastructure for autonomous AI — settlement, kernel-level security, verifiable execution, and cryptographic identity in one integrated stack.
          </motion.p>
        </div>

        {/* Rows */}
        <div className="flex flex-col mt-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="flex items-start gap-5 lg:gap-8 py-1.5 lg:py-2"
              style={{ borderBottom: i < categories.length - 1 ? '1px solid rgba(249,115,22,0.1)' : 'none' }}
            >
              <h3
                className="text-orange-400 text-[24px] sm:text-[30px] lg:text-[36px] leading-none tracking-tight w-[220px] lg:w-[280px] shrink-0"
                style={{ fontFamily: "'Anton', sans-serif" }}>
                {cat.title}
              </h3>
              <div>
                <p className="text-[#fefefe]/40 text-xs sm:text-sm"
                  style={{ fontFamily: "'Geist Mono', monospace" }}>
                  {cat.competitors}
                </p>
                <p className="text-[#fefefe]/80 text-xs sm:text-sm leading-relaxed mt-1.5"
                  style={{ fontFamily: "'Geist Mono', monospace" }}>
                  {cat.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
