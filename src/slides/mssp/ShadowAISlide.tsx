import { motion } from 'framer-motion';

const bullets = [
  {
    label: 'CRYPTOGRAPHIC IDENTITY',
    body: 'Every agent is assigned a revocable identity bound to a human principal. Eliminates static API keys.',
  },
  {
    label: 'GLOBAL INVENTORY',
    body: 'Map every active agent and its authorized scopes across the organization.',
  },
  {
    label: 'DRIFT CONTAINMENT',
    body: 'Instantly quarantine rogue agents that deviate from baseline execution patterns.',
  },
];

export function ShadowAISlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-8 sm:py-10 lg:py-12 justify-center gap-6 lg:gap-7">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-orange-400 text-xs sm:text-sm lg:text-base tracking-[0.4em] uppercase font-bold"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Use Case · Visibility
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[36px] sm:text-[52px] lg:text-[72px] xl:text-[84px] leading-[0.95] tracking-tight uppercase mt-2"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            AGENT SPRAWL &{' '}
            <span className="text-orange-400">SHADOW AI.</span>
          </motion.h1>
        </div>

        {/* 2-column body */}
        <div className="grid grid-cols-[1fr_1fr] gap-8 lg:gap-12 shrink-0 items-start">

          {/* Left — intro + bullets */}
          <div className="flex flex-col gap-5 lg:gap-6">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-[#fefefe]/90 text-sm sm:text-base lg:text-lg leading-snug"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              <span className="text-[#fefefe] font-bold">You cannot secure what you cannot see.</span>{' '}
              Unicity acts as the mandatory registration and monitoring layer for all machine identity in the enterprise.
            </motion.p>

            <ul className="flex flex-col gap-3 lg:gap-4">
              {bullets.map((b, i) => (
                <motion.li
                  key={b.label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.08, duration: 0.4 }}
                  className="flex items-start gap-3 lg:gap-4"
                >
                  <span className="text-orange-400/70 text-base lg:text-lg shrink-0 mt-0.5 font-bold">→</span>
                  <div>
                    <p
                      className="text-orange-400 text-xs sm:text-sm lg:text-base tracking-[0.2em] uppercase font-bold"
                      style={{ fontFamily: "'Geist Mono', monospace" }}
                    >
                      {b.label}
                    </p>
                    <p
                      className="text-[#fefefe]/85 text-sm lg:text-base leading-snug mt-1"
                      style={{ fontFamily: "'Geist Mono', monospace" }}
                    >
                      {b.body}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Right — dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="rounded-lg overflow-hidden"
            style={{
              border: '1px solid rgba(249,115,22,0.45)',
              background: '#0a0a0f',
              aspectRatio: '16 / 10',
            }}
          >
            <img
              src="/dashboards/governance.png"
              alt="Agent inventory dashboard"
              className="w-full h-full object-cover object-top"
            />
          </motion.div>

        </div>
      </div>
    </div>
  );
}
