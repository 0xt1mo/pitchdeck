import { motion } from 'framer-motion';

const mono = "'Geist Mono', monospace";
const display = "'Anton', sans-serif";

const behaviors = [
  { verb: 'ACT', body: 'Take real actions across systems, autonomously.' },
  { verb: 'HOLD CREDENTIALS', body: 'Carry keys, tokens, and standing access.' },
  { verb: 'TOUCH DATA', body: 'Read and move sensitive records at machine speed.' },
  { verb: 'MOVE MONEY', body: 'Transact, pay, and settle without a human in the loop.' },
];

export function AttackSurfaceSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      {/* glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(60% 50% at 50% 0%, rgba(249,115,22,0.10), transparent 70%)' }}
      />

      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-20 py-10 lg:py-12 gap-6 lg:gap-9">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-400 text-[10px] sm:text-xs lg:text-sm tracking-[0.4em] uppercase font-bold"
            style={{ fontFamily: mono }}
          >
            The shift
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[34px] sm:text-[52px] lg:text-[74px] xl:text-[86px] leading-[0.95] tracking-tight uppercase mt-2"
            style={{ fontFamily: display }}
          >
            AGENTS ARE THE{' '}
            <span className="text-orange-400">NEW ATTACK SURFACE.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-[#fefefe]/85 text-sm sm:text-base lg:text-xl leading-snug mt-4 max-w-5xl"
            style={{ fontFamily: mono }}
          >
            Every enterprise is wiring up autonomous AI agents — a surface that didn&apos;t exist 18 months ago,
            growing faster than any team can govern it.
          </motion.p>
        </div>

        {/* Behavior cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 shrink-0">
          {behaviors.map((b, i) => (
            <motion.div
              key={b.verb}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 + i * 0.1, duration: 0.5 }}
              className="rounded-2xl px-5 lg:px-6 py-5 lg:py-6 flex flex-col"
              style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid #2c2c2c' }}
            >
              <p className="text-orange-400 text-lg lg:text-2xl leading-none uppercase" style={{ fontFamily: display }}>
                {b.verb}
              </p>
              <p className="text-[#fefefe]/70 text-xs lg:text-sm leading-snug mt-3" style={{ fontFamily: mono }}>
                {b.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stat anchor */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="shrink-0 flex items-center gap-5 pt-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.10)' }}
        >
          <span className="text-orange-400 text-[40px] lg:text-[56px] leading-none shrink-0" style={{ fontFamily: display }}>
            150,000+
          </span>
          <span className="text-[#fefefe]/80 text-sm sm:text-base lg:text-xl leading-snug" style={{ fontFamily: mono }}>
            autonomous agents inside a single F500 by 2028 — none of them a user, none of them an endpoint.
          </span>
        </motion.div>

      </div>
    </div>
  );
}
