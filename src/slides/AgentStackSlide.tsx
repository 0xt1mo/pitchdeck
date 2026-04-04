import { motion } from 'framer-motion';

const features = [
  { title: 'Run Completely Offline', audience: 'Finance, healthcare, defence', desc: 'Swap the cloud provider for a local one (Ollama, vLLM). One-line config change, fully air-gapped.' },
  { title: 'Novel Agent Architectures', audience: 'AI researchers, startups', desc: 'Plug in a debate system, MCTS planner, or chain-of-verification loop. Tools, sandboxing, audit work unchanged.' },
  { title: 'Transparent LLM Caching', audience: 'Teams running agents at scale', desc: 'Drop in a caching capsule as middleware. 30–60% fewer API calls. No code changes, no redeployment.' },
  { title: 'Autonomous Overnight Agents', audience: 'Development teams', desc: 'Swap the orchestrator for an autonomous worker capsule. It writes code, runs tests, self-corrects.' },
  { title: 'Mix & Match Providers', audience: 'Teams using multiple models', desc: 'Multiple provider capsules with routing. Direct each request to the best model by complexity, cost, or latency.' },
  { title: 'Ship Custom Distros', audience: 'Platform teams, SaaS', desc: 'One codebase, infinite configurations. Each customer gets a different capsule set. Security patches ship to everyone.' },
];

export function AgentStackSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-10 sm:py-14 lg:py-16">

        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="text-orange-400 text-[10px] sm:text-xs tracking-[0.4em] uppercase"
              style={{ fontFamily: "'Geist Mono', monospace" }}>
              Use Case: Developer
            </motion.p>
            <motion.h1 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="text-[#fefefe] text-[28px] sm:text-[40px] lg:text-[52px] leading-[0.95] tracking-tight mt-1"
              style={{ fontFamily: "'Anton', sans-serif" }}>
              AGENT<span className="text-orange-400">STACK</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
              className="mt-2 text-[#fefefe]/60 text-sm sm:text-base max-w-2xl"
              style={{ fontFamily: "'Geist Mono', monospace" }}>
              The intelligent agent harness runtime for builders. Full toolkit — identity, sandbox, settlement, memory. Bring your own LLM.
            </motion.p>
          </div>

          {/* PDF download — top right */}
          <motion.a
            href="/agentstack-product-sheet.pdf"
            download
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="shrink-0 ml-6 inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all hover:scale-105 cursor-pointer"
            style={{
              fontFamily: "'Geist Mono', monospace",
              background: 'rgba(249,115,22,0.1)',
              border: '1px solid rgba(249,115,22,0.25)',
              color: '#f97316',
            }}
          >
            <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M8 2v9M4 8l4 4 4-4M2 14h12" />
            </svg>
            Product Brief
          </motion.a>
          <motion.a
            href="https://github.com/unicity-astrid"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="shrink-0 ml-2 inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all hover:scale-105 cursor-pointer"
            style={{
              fontFamily: "'Geist Mono', monospace",
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'rgba(254,254,254,0.7)',
            }}
          >
            <svg viewBox="0 0 16 16" className="w-4 h-4" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
            GitHub
          </motion.a>
        </div>

        {/* Features — 3x2 grid */}
        <div className="flex-1 flex items-center mt-6">
          <div className="w-full grid grid-cols-3 gap-4 lg:gap-5">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.08, duration: 0.5 }}
                className="rounded-lg px-5 py-4"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <p className="text-[#fefefe]/80 text-sm sm:text-base font-bold"
                  style={{ fontFamily: "'Geist Mono', monospace" }}>
                  {f.title}
                </p>
                <p className="text-orange-400/60 text-[10px] tracking-wider uppercase mt-1"
                  style={{ fontFamily: "'Geist Mono', monospace" }}>
                  {f.audience}
                </p>
                <p className="text-[#fefefe]/45 text-xs sm:text-sm leading-relaxed mt-2"
                  style={{ fontFamily: "'Geist Mono', monospace" }}>
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom statement */}
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
          className="text-[#fefefe]/50 text-sm leading-relaxed max-w-4xl border-t border-white/[0.06] pt-4 mb-6"
          style={{ fontFamily: "'Geist Mono', monospace" }}>
          Because intelligence is no longer baked into the OS, anyone can change how Astrid thinks without touching a single line of core code. <span className="text-[#fefefe]/80 font-bold">Swap a capsule, change the config, restart. That's it.</span>
        </motion.p>
      </div>
    </div>
  );
}
