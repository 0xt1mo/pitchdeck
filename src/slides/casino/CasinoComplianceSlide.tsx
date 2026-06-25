import { motion } from 'framer-motion';

const moats = [
  {
    num: '01',
    title: 'Affordability, Invisible.',
    text: (
      <>
        The agent enforces affordability before the wager arrives at your platform. <span className="text-[#fefefe] font-semibold">No mid-session interruption, no checkpoint friction</span> — the player never sees a check; you never lose the session to a UX break.{' '}
        <span className="text-orange-400 font-semibold">UKGC's £125 threshold becomes a non-event.</span>
      </>
    ),
  },
  {
    num: '02',
    title: 'Self-Exclusion That Audits Clean.',
    text: (
      <>
        When a player self-excludes, the wallet refuses the wager — your platform never sees the attempt. <span className="text-[#fefefe] font-semibold">You cannot accidentally serve an excluded player.</span>{' '}
        <span className="text-orange-400 font-semibold">License renewals become routine.</span>
      </>
    ),
  },
  {
    num: '03',
    title: 'Early Signal, Your Move.',
    text: (
      <>
        The agent surfaces risk indicators — chasing losses, escalating session length, anomalous bet patterns — before the player is lost. <span className="text-[#fefefe] font-semibold">You decide the response.</span>{' '}
        <span className="text-orange-400 font-semibold">Signal arrives early enough to act commercially.</span>
      </>
    ),
  },
  {
    num: '04',
    title: 'Cryptographic Proof of Compliance.',
    text: (
      <>
        Every wager, every limit, every enforcement is signed and timestamped at the wallet. Compliance evidence becomes a live query the regulator runs.{' '}
        <span className="text-orange-400 font-semibold">Offshore competitors cannot replicate this.</span>
      </>
    ),
  },
];

export function CasinoComplianceSlide() {
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
            Nº 06 · Compliance
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[32px] sm:text-[44px] lg:text-[60px] leading-[0.98] tracking-tight mt-3 uppercase"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            Your regulatory moat.{' '}
            <span className="text-orange-400">Built into the wallet.</span>
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] w-24 lg:w-32 bg-orange-500 origin-left mt-5"
            style={{ boxShadow: '0 0 8px rgba(249,115,22,0.7)' }}
          />
        </div>

        {/* Four moat rows */}
        <div className="flex flex-col shrink-0">
          {moats.map((m, i) => (
            <motion.div
              key={m.num}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
              className="grid grid-cols-[80px_280px_1fr] items-baseline gap-x-7 lg:gap-x-10 py-4 lg:py-5"
              style={{
                borderTop: '1px solid rgba(255,255,255,0.10)',
                ...(i === moats.length - 1
                  ? { borderBottom: '1px solid rgba(255,255,255,0.10)' }
                  : {}),
              }}
            >
              <div
                className="text-orange-400 text-[42px] sm:text-[52px] lg:text-[60px] leading-none"
                style={{ fontFamily: "'Anton', sans-serif", letterSpacing: '0.02em' }}
              >
                {m.num}
              </div>
              <h3
                className="text-[#fefefe] text-[20px] sm:text-[24px] lg:text-[28px] leading-[1.05] tracking-[0.04em] uppercase"
                style={{ fontFamily: "'Anton', sans-serif" }}
              >
                {m.title}
              </h3>
              <p
                className="text-[#fefefe]/78 text-sm lg:text-base leading-[1.55]"
                style={{ fontFamily: "'Geist Mono', monospace" }}
              >
                {m.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="text-[#fefefe]/65 text-[22px] sm:text-[28px] lg:text-[36px] leading-tight tracking-tight uppercase pt-5 shrink-0"
          style={{
            fontFamily: "'Anton', sans-serif",
            borderTop: '1px solid rgba(249,115,22,0.25)',
          }}
        >
          The regulatory bar is moving up.{' '}
          <span className="text-orange-400">Be the operator who's already above it.</span>
        </motion.p>
      </div>
    </div>
  );
}
