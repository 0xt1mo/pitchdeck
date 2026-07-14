import { motion } from 'framer-motion';

const mono = "'Geist Mono', monospace";
const display = "'Anton', sans-serif";

const capsules = [
  { name: 'Model', desc: 'The brain — swap OpenAI, Anthropic, or a local model. Nothing else changes.' },
  { name: 'Agent Loop', desc: 'The reasoning coordinator. Stateless; drives thought and tool calls.' },
  { name: 'Memory', desc: 'Persistence across sessions, injected back into the prompt.' },
  { name: 'Tools', desc: 'Everything the agent can do — each capability permission-scoped.' },
  { name: 'Skills', desc: 'Packaged behaviours, installed on demand.' },
  { name: 'Frontends', desc: 'How people reach the agent — CLI, chat, a bot.' },
];

export function AosCapsuleSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-7 lg:py-9 gap-5 lg:gap-6">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-400 text-xs lg:text-lg tracking-[0.4em] uppercase font-bold"
            style={{ fontFamily: mono }}
          >
            The architecture · capsules
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[32px] sm:text-[48px] lg:text-[66px] xl:text-[76px] leading-[0.98] tracking-tight uppercase mt-2"
            style={{ fontFamily: display }}
          >
            EVERYTHING ELSE IS <span className="text-orange-400">A CAPSULE.</span>
          </motion.h1>
        </div>

        {/* Capsule cards */}
        <div className="shrink-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
          {capsules.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 16, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.07, duration: 0.4 }}
              className="rounded-xl p-4 lg:p-5 flex flex-col"
              style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid #2c2c2c', borderTop: '2px solid rgba(249,115,22,0.7)' }}
            >
              <div className="flex items-center justify-between">
                <p className="text-orange-400 text-xl lg:text-[28px] leading-none uppercase" style={{ fontFamily: display }}>
                  {c.name}
                </p>
                <span className="text-orange-400/50 text-lg leading-none">◳</span>
              </div>
              <p className="text-[#fefefe]/75 text-sm lg:text-xl leading-snug mt-2.5" style={{ fontFamily: mono }}>
                {c.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footer: what a capsule is + swap */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="shrink-0 rounded-lg px-4 py-3.5 lg:px-5 lg:py-4 flex items-center gap-3"
          style={{ background: 'rgba(249,115,22,0.06)', border: '1px solid rgba(249,115,22,0.3)' }}
        >
          <span className="text-orange-400 text-xl leading-none shrink-0">◳</span>
          <p className="text-[#fefefe]/85 text-sm lg:text-2xl leading-snug" style={{ fontFamily: mono }}>
            Each a sealed WebAssembly capsule, permissions declared up front.{' '}
            <span className="text-orange-400">Snap together, swap any part, keep the machine.</span> Nothing is welded shut.
          </p>
        </motion.div>

        {/* OS tag */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.95, duration: 0.5 }}
          className="shrink-0 text-[#fefefe]/35 text-xs tracking-[0.3em] uppercase"
          style={{ fontFamily: mono }}
        >
          This is what makes it an OS.
        </motion.p>

      </div>
    </div>
  );
}
