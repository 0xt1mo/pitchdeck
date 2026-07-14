import { motion } from 'framer-motion';

const mono = "'Geist Mono', monospace";
const display = "'Anton', sans-serif";

const capsules = [
  { name: 'Model', desc: 'The brain — swap OpenAI, Anthropic, or a local model.' },
  { name: 'Agent Loop', desc: 'The reasoning coordinator, driving thought and tool calls.' },
  { name: 'Memory', desc: 'Persistence across sessions, injected into the prompt.' },
  { name: 'Tools', desc: 'Everything the agent can do — each permission-scoped.' },
  { name: 'Skills', desc: 'Packaged behaviours, installed on demand.' },
  { name: 'Frontends', desc: 'How people reach the agent — CLI, chat, a bot.' },
];

export function AosEngineSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-7 lg:py-9 gap-4 lg:gap-6">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-400 text-xs lg:text-lg tracking-[0.4em] uppercase font-bold"
            style={{ fontFamily: mono }}
          >
            The architecture
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[28px] sm:text-[42px] lg:text-[58px] xl:text-[66px] leading-[0.98] tracking-tight uppercase mt-2"
            style={{ fontFamily: display }}
          >
            ONE MICROKERNEL.<br />
            <span className="text-orange-400">EVERYTHING ELSE IS A CAPSULE.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-[#fefefe]/80 text-sm lg:text-2xl leading-snug mt-3 max-w-5xl"
            style={{ fontFamily: mono }}
          >
            The microkernel is <span className="text-orange-400 font-bold">dumb on purpose</span> — it routes events, enforces capabilities, and runs the sandbox. No business logic, no AI.
            Everything above it is a capsule.
          </motion.p>
        </div>

        {/* Capsule definition */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="shrink-0 text-sm lg:text-xl"
          style={{ fontFamily: mono }}
        >
          <span className="text-orange-400 font-bold uppercase tracking-[0.14em]">Capsule</span>
          <span className="text-[#fefefe]/60">{' '}[ a sealed WebAssembly module — permissions declared up front, swap any part ]</span>
        </motion.p>

        {/* Capsule grid */}
        <div className="shrink-0 grid grid-cols-2 lg:grid-cols-3 gap-2.5 lg:gap-3.5">
          {capsules.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.06, duration: 0.35 }}
              className="rounded-xl p-3.5 lg:p-4 flex flex-col"
              style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid #2c2c2c', borderTop: '2px solid rgba(249,115,22,0.7)' }}
            >
              <div className="flex items-center justify-between">
                <p className="text-orange-400 text-lg lg:text-2xl leading-none uppercase" style={{ fontFamily: display }}>
                  {c.name}
                </p>
                <span className="text-orange-400/50 text-base leading-none">◳</span>
              </div>
              <p className="text-[#fefefe]/75 text-xs lg:text-lg leading-snug mt-2" style={{ fontFamily: mono }}>
                {c.desc}
              </p>
            </motion.div>
          ))}
        </div>


      </div>
    </div>
  );
}
