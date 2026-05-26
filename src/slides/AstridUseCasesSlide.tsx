import { motion } from 'framer-motion';

const useCases = [
  {
    title: 'Run Completely Offline',
    audience: 'Finance, healthcare, defence',
    desc: 'Swap the cloud provider capsule for a local one (Ollama, vLLM). Everything else keeps working. One-line config change, fully air-gapped.',
    color: '#10b981',
  },
  {
    title: 'Novel Agent Architectures',
    audience: 'AI researchers, startups',
    desc: 'Plug in a debate system, MCTS planner, or chain-of-verification loop. The rest of the OS — tools, sandboxing, audit — works unchanged.',
    color: '#3b82f6',
  },
  {
    title: 'Transparent LLM Caching',
    audience: 'Teams running agents at scale',
    desc: 'Drop in a caching capsule as middleware. 30–60% fewer API calls for repetitive workloads. No code changes, no redeployment.',
    color: '#f59e0b',
  },
  {
    title: 'Autonomous Overnight Agents',
    audience: 'Development teams',
    desc: 'Swap the orchestrator for an autonomous worker capsule. It writes code, runs tests, self-corrects — same sandbox, same audit trail.',
    color: '#ec4899',
  },
  {
    title: 'Mix & Match Providers',
    audience: 'Teams using multiple models',
    desc: 'Install multiple provider capsules with a routing capsule. Direct each request to the best model by complexity, cost, or latency.',
    color: '#a855f7',
  },
  {
    title: 'Ship Custom Distros',
    audience: 'Platform teams, SaaS companies',
    desc: 'One codebase, infinite configurations. Each customer gets a different capsule set. Security patches ship to everyone simultaneously.',
    color: '#6366f1',
  },
];

export function AstridUseCasesSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">

      {/* Background grid texture — match the rest of the deck */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-16 pt-8 pb-14 lg:pt-10 lg:pb-16 justify-center gap-6 lg:gap-8">

        {/* Header */}
        <div className="shrink-0">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-orange-400 text-[10px] sm:text-xs lg:text-sm tracking-[0.4em] uppercase font-bold"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            Appendix — Kernel
          </motion.p>
          <motion.h1 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[36px] sm:text-[54px] lg:text-[72px] xl:text-[84px] leading-[0.95] tracking-tight uppercase mt-2"
            style={{ fontFamily: "'Anton', sans-serif" }}>
            SWAP A CAPSULE.{' '}
            <span className="text-orange-400">CHANGE EVERYTHING.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 lg:mt-5 text-[#fefefe]/80 text-xs sm:text-sm lg:text-base leading-[1.55]"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            Because intelligence is no longer baked into the OS, anyone can change how AOS thinks without touching a single line of core code.{' '}
            <span className="text-orange-400 font-bold">Swap a capsule, change the config, restart.</span>{' '}
            That's it.
          </motion.p>
        </div>

        {/* Use case grid — 3 cols × 2 rows */}
        <div className="grid grid-cols-3 grid-rows-2 gap-3 sm:gap-4 lg:gap-5 shrink-0">
          {useCases.map((uc, i) => (
            <motion.div key={uc.title}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.07, duration: 0.4 }}
              className="rounded-xl p-4 lg:p-5 flex flex-col"
              style={{
                borderLeft: `3px solid ${uc.color}`,
                border: `1px solid ${uc.color}28`,
                borderLeftWidth: '3px',
                borderLeftColor: uc.color,
                background: `linear-gradient(180deg, ${uc.color}08 0%, rgba(10,10,15,0.5) 100%)`,
              }}>
              <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-[26px] leading-[1.05] tracking-tight uppercase mb-1.5"
                style={{ fontFamily: "'Anton', sans-serif", color: uc.color }}>
                {uc.title}
              </h3>
              <p className="text-[#fefefe]/40 text-[9px] sm:text-[10px] lg:text-[11px] mb-3 tracking-[0.2em] uppercase font-bold"
                style={{ fontFamily: "'Geist Mono', monospace" }}>
                {uc.audience}
              </p>
              <p className="text-[#fefefe]/70 text-[10px] sm:text-[11px] lg:text-xs leading-[1.55] flex-1"
                style={{ fontFamily: "'Geist Mono', monospace" }}>
                {uc.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
