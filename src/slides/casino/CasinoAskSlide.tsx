import { motion } from 'framer-motion';

const movements = [
  {
    num: '01',
    week: 'Week 1–3',
    title: 'Install.',
    text: (
      <>
        Unicity AOS deploys <strong className="text-[#fefefe] font-semibold">on your platform</strong>, alongside your existing wallet and game engine. No replacement, no migration. Your current systems keep running.
      </>
    ),
    production: false,
  },
  {
    num: '02',
    week: 'Week 4–6',
    title: 'Integrate.',
    text: (
      <>
        Sandbox handshake with a reference agent. Validate <strong className="text-[#fefefe] font-semibold">signed sessions, per-bet settlement, audit trail</strong>. Compliance and security reviews run in parallel.
      </>
    ),
    production: false,
  },
  {
    num: '03',
    week: 'Week 7',
    title: 'Production.',
    text: (
      <>
        Agent traffic goes live. The first signed session settles. Clean audit.{' '}
        <span className="text-orange-400 font-semibold">You start onboarding agents at scale.</span>
      </>
    ),
    production: true,
  },
];

export function CasinoAskSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-12 lg:px-20 py-10 lg:py-14 justify-center gap-7">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-orange-400 text-xs sm:text-sm tracking-[0.32em] uppercase font-semibold"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            No. 12 · The Ask
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[32px] sm:text-[44px] lg:text-[60px] leading-[0.98] tracking-tight mt-3 uppercase"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            Forty-five days to production.{' '}
            <span className="text-orange-400">Then start onboarding agents.</span>
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] w-24 lg:w-32 bg-orange-500 origin-left mt-5"
            style={{ boxShadow: '0 0 8px rgba(249,115,22,0.7)' }}
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-4 text-[#fefefe]/75 text-sm lg:text-base leading-relaxed max-w-5xl"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            One integration. One sprint. One regulated operator live and taking agent traffic. Forty-five days from kickoff to Unicity AOS running in production inside your stack — then you start receiving agents.
          </motion.p>
        </div>

        {/* Three movements */}
        <div className="flex flex-col shrink-0">
          {movements.map((m, i) => (
            <motion.div
              key={m.num}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
              className="grid grid-cols-[320px_1fr] items-center gap-x-8 lg:gap-x-12 py-5 lg:py-6"
              style={{
                borderTop: '1px solid rgba(255,255,255,0.10)',
                ...(i === movements.length - 1
                  ? { borderBottom: '1px solid rgba(255,255,255,0.10)' }
                  : {}),
              }}
            >
              <h3
                className="text-[#fefefe] text-[36px] sm:text-[44px] lg:text-[52px] leading-none tracking-[0.04em] uppercase"
                style={{ fontFamily: "'Anton', sans-serif" }}
              >
                {m.title}
              </h3>
              <p
                className="text-[#fefefe]/85 text-base sm:text-lg lg:text-xl leading-[1.55]"
                style={{ fontFamily: "'Geist Mono', monospace" }}
              >
                {m.text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
