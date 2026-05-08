import { motion } from 'framer-motion';

const categories = [
  {
    title: 'AGENT PROTOCOLS',
    competitors: 'x402 (Linux Foundation) · Stripe MPP',
    text: "We implement and simplify. Unicity turns the message itself into P2P settlement.",
  },
  {
    title: 'SETTLEMENT',
    competitors: 'Base · Tempo · Solana · Lightning',
    text: "We scale them by orders of magnitude. Tokens minted on any chain detach onto Unicity, transact peer-to-peer at machine speed, and settle back when needed. Every L1 becomes a Unicity issuance layer.",
  },
  {
    title: 'AI CHAINS',
    competitors: 'Kite.ai · Near · Fetch.ai',
    text: "We compete. Existing AI-chain projects retrofit general-purpose runtimes — EVM, Cosmos, sharded WASM — none of which were designed for off-chain agent execution with edge validation. Our architecture is purpose-built for the agent transaction profile.",
  },
  {
    title: 'FRAMEWORKS',
    competitors: 'LangChain · CrewAI · Google ADK · OpenClaw',
    text: "We complement. Unicity as the runtime underneath adds security, identity, communication and settlement.",
  },
  {
    title: 'SECURITY',
    competitors: 'Lakera/Check Point · HiddenLayer · Protect AI · NeMo Guardrails',
    text: "Check Point paid $300M for Lakera, which addresses LLM prompt-layer security. Our scope is broader and structurally different — we secure the entire agent execution path at the kernel and settlement layers.",
  },
];

export function CompetitionSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-10 sm:py-14 lg:py-16 justify-center gap-8">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-400 text-sm tracking-[0.4em] uppercase"
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
            className="mt-4 text-[#fefefe]/85 text-lg sm:text-xl lg:text-2xl max-w-5xl leading-relaxed"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            The first purpose-built infrastructure for autonomous AI — settlement, kernel-level security, verifiable execution, and cryptographic identity in one integrated stack.
          </motion.p>
        </div>

        {/* Rows */}
        <div className="flex flex-col shrink-0">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="flex items-start gap-5 lg:gap-8 py-2.5 lg:py-3"
              style={{ borderBottom: i < categories.length - 1 ? '1px solid rgba(249,115,22,0.1)' : 'none' }}
            >
              <h3
                className="text-orange-400 text-[24px] sm:text-[30px] lg:text-[36px] leading-none tracking-tight w-[220px] lg:w-[280px] shrink-0"
                style={{ fontFamily: "'Anton', sans-serif" }}>
                {cat.title}
              </h3>
              <div>
                <p className="text-[#fefefe]/50 text-sm"
                  style={{ fontFamily: "'Geist Mono', monospace" }}>
                  {cat.competitors}
                </p>
                <p className="text-[#fefefe]/90 text-base leading-relaxed mt-1.5"
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
