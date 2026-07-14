import { motion } from 'framer-motion';

const mono = "'Geist Mono', monospace";
const display = "'Anton', sans-serif";

const cards = [
  { title: 'Run Completely Offline', tag: 'Air-gapped', desc: 'Swap the cloud provider capsule for a local one. Everything else keeps working — fully air-gapped, one config change.' },
  { title: 'Novel Agent Architectures', tag: 'Research', desc: 'Plug in a debate system, MCTS planner, or chain-of-verification loop. Tools, sandboxing, and audit work unchanged.' },
  { title: 'Transparent LLM Caching', tag: 'Scale', desc: 'Drop in a caching capsule as middleware. Fewer API calls on repetitive workloads. No code changes, no redeploy.' },
  { title: 'Autonomous Overnight Agents', tag: 'Dev teams', desc: 'Swap in an autonomous worker capsule. It writes code, runs tests, self-corrects — same sandbox, same audit trail.' },
  { title: 'Mix & Match Providers', tag: 'Multi-model', desc: 'Install multiple provider capsules with a routing capsule. Direct each request to the right model by cost or latency.' },
  { title: 'Writes Its Own Capsule', tag: 'The memorable one', desc: 'An agent that safely writes, compiles, and installs its OWN capsule inside the sandbox — permissions declared up front.', highlight: true },
];

export function AosSwapSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-8 lg:py-11 gap-5 lg:gap-7">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-400 text-xs sm:text-xs lg:text-lg tracking-[0.4em] uppercase font-bold"
            style={{ fontFamily: mono }}
          >
            The payoff
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[32px] sm:text-[48px] lg:text-[66px] xl:text-[78px] leading-[0.95] tracking-tight uppercase mt-2"
            style={{ fontFamily: display }}
          >
            SWAP A CAPSULE. <span className="text-orange-400">CHANGE EVERYTHING.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-[#fefefe]/80 text-sm sm:text-base lg:text-2xl leading-snug mt-3 max-w-5xl"
            style={{ fontFamily: mono }}
          >
            Intelligence isn&apos;t baked into the OS. <span className="text-orange-400 font-bold">Swap a capsule, change the config, restart.</span> That&apos;s it.
          </motion.p>
        </div>

        {/* 3×2 grid */}
        <div className="shrink-0 grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.07, duration: 0.4 }}
              className="rounded-xl p-4 lg:p-5 flex flex-col"
              style={{
                background: c.highlight ? 'rgba(249,115,22,0.09)' : 'rgba(255,255,255,0.015)',
                border: c.highlight ? '1.5px solid rgba(249,115,22,0.65)' : '1px solid rgba(249,115,22,0.22)',
                borderLeft: c.highlight ? '3px solid #f97316' : '3px solid rgba(249,115,22,0.5)',
              }}
            >
              <h3
                className={`text-lg sm:text-xl lg:text-2xl leading-[1.05] tracking-tight uppercase mb-1.5 ${c.highlight ? 'text-orange-400' : 'text-[#fefefe]'}`}
                style={{ fontFamily: display }}
              >
                {c.title}
              </h3>
              <p className="text-[#fefefe]/40 text-[11px] lg:text-lg mb-2.5 tracking-[0.2em] uppercase font-bold" style={{ fontFamily: mono }}>
                {c.tag}
              </p>
              <p className="text-[#fefefe]/70 text-xs lg:text-xl leading-[1.55] flex-1" style={{ fontFamily: mono }}>
                {c.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
