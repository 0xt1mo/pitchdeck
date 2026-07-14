import { motion } from 'framer-motion';

const mono = "'Geist Mono', monospace";
const display = "'Anton', sans-serif";

const capsules = [
  { name: 'http', v: 'v0.1.1', desc: 'The web for agents, behind the airlock', tag: 'Tools' },
  { name: 'memory', v: 'v0.1.0', desc: 'Cross-session memory, injected into the prompt', tag: 'Memory' },
  { name: 'react', v: 'v0.2.1', desc: 'The agent loop: stateless coordinator for reasoning and tools', tag: 'Core' },
  { name: 'shell', v: 'v0.2.0', desc: 'Shell execution, gated behind approval', tag: 'Tools' },
  { name: 'router', v: 'v0.1.0', desc: 'Routes every tool call, so every tool call is governable', tag: 'Core' },
  { name: 'context-engine', v: 'v0.1.0', desc: 'Compacts the context window when conversations run long', tag: 'Prompt' },
  { name: 'slack', v: 'v0.1.0', desc: 'A Slack app as a frontend to your agent', tag: 'Frontends' },
  { name: 'forge', v: 'v0.1.0', desc: 'Teaches a fresh LLM to build capsules — the OS extends itself', tag: 'Dev', highlight: true },
];

export function AosExtensibilitySlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-7 lg:py-9 gap-4 lg:gap-5">

        {/* Kicker row */}
        <div className="shrink-0 flex items-baseline justify-between">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-400 text-xs lg:text-lg tracking-[0.4em] uppercase font-bold"
            style={{ fontFamily: mono }}
          >
            The payoff · extensibility
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="text-[#fefefe]/40 text-xs lg:text-lg tracking-[0.24em] uppercase"
            style={{ fontFamily: mono }}
          >
            Signed · MIT / Apache-2.0
          </motion.p>
        </div>

        {/* Headline + subtitle */}
        <div className="shrink-0">
          <motion.h1
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[28px] sm:text-[40px] lg:text-[54px] xl:text-[62px] leading-[0.98] tracking-tight uppercase"
            style={{ fontFamily: display }}
          >
            OPERATING SYSTEMS WIN ON <span className="text-orange-400">WHAT RUNS ON THEM.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-[#fefefe]/80 text-sm lg:text-xl leading-snug mt-3 max-w-4xl"
            style={{ fontFamily: mono }}
          >
            One shelf, every ability: each a sealed, signed capsule — permissions declared up front, installed into a running OS with one command.{' '}
            <span className="text-orange-400">Open, and owned by no model vendor.</span>
          </motion.p>
        </div>

        {/* Capsule shelf */}
        <div className="shrink-0 grid grid-cols-2 lg:grid-cols-4 gap-2.5 lg:gap-3">
          {capsules.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.05, duration: 0.35 }}
              className="rounded-lg px-3 py-2.5 lg:px-3.5 lg:py-3 flex flex-col"
              style={{
                background: c.highlight ? '#160d05' : '#111',
                border: c.highlight ? '1px solid #f97316' : '1px solid #2e2e2e',
              }}
            >
              <p className="text-[#fefefe] text-lg lg:text-3xl leading-tight" style={{ fontFamily: mono }}>
                {c.name} <span className="text-[#5f5f5f] text-xs lg:text-sm">{c.v}</span>
              </p>
              <p className={`text-xs lg:text-lg leading-snug mt-1.5 flex-1 ${c.highlight ? 'text-[#c9a583]' : 'text-[#8f8f8f]'}`} style={{ fontFamily: mono }}>
                {c.desc}
              </p>
              <p className="text-orange-400 text-xs tracking-[0.14em] uppercase mt-2" style={{ fontFamily: mono }}>
                {c.tag}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Install + builder strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75, duration: 0.5 }}
          className="shrink-0 flex flex-col sm:flex-row gap-2.5"
        >
          <div className="flex-1 rounded-lg px-4 py-3 flex items-center gap-3" style={{ background: '#111', border: '1px solid #2e2e2e' }}>
            <span className="text-orange-400 text-sm lg:text-xl">$</span>
            <span className="text-[#e8e8e8] text-sm lg:text-xl" style={{ fontFamily: mono }}>aos capsule install http</span>
          </div>
          <div className="flex-[1.6] rounded-lg px-4 py-3" style={{ background: '#111', border: '1px solid #2e2e2e' }}>
            <span className="text-orange-400 text-xs lg:text-lg tracking-[0.14em] uppercase font-bold" style={{ fontFamily: mono }}>The builder · live today&nbsp;&nbsp;</span>
            <span className="text-[#a8a8a8] text-xs lg:text-lg" style={{ fontFamily: mono }}>
              Compose an agent from parts — pick an archetype, snap capsules together, install with one command.
            </span>
          </div>
        </motion.div>

        {/* Claims caption */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="shrink-0 text-[#fefefe]/75 text-sm lg:text-xl leading-snug pt-2.5"
          style={{ fontFamily: mono, borderTop: '1px solid rgba(255,255,255,0.10)' }}
        >
          Extensibility elsewhere means trusting strangers&apos; code with your whole machine. Here, a capsule can only do what its manifest declares —{' '}
          <span className="text-orange-400">signed, sandboxed, capability-scoped.</span>
        </motion.p>

      </div>
    </div>
  );
}
