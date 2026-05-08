import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';
import splashVideoUrl from '/kling_20260226_VIDEO_Take_Image_1650_0.mp4';

function CountUp({ target, delay = 0 }: { target: number; delay?: number }) {
  const count = useMotionValue(0);
  const display = useTransform(count, (v) => `$${Math.round(v)}M`);
  useEffect(() => {
    const c = animate(count, target, { duration: 2, delay, ease: [0.25, 0.1, 0.25, 1] });
    return c.stop;
  }, [target, delay, count]);
  return <motion.span>{display}</motion.span>;
}

const unlocks = [
  {
    num: '01',
    tag: '',
    title: 'LAUNCH MAINNET',
    desc: 'Network live. Hashlock audit complete. Distribution partners go live.',
  },
  {
    num: '02',
    tag: '$20M+ pipeline',
    title: 'CONVERT FIRST DEPLOYMENTS',
    desc: 'Sovereign AI Lab and Tier-1 Financial Institution deploy. Government, Telecom, Banks line up.',
  },
  {
    num: '03',
    tag: 'Network growth',
    title: 'BUILD THE FLYWHEEL',
    desc: 'Developer relations, framework integrations, hackathons. Path to TGE at adoption thresholds.',
  },
];

export function RaiseSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <video className="w-full h-full object-cover opacity-30" autoPlay muted loop playsInline src={splashVideoUrl} />
        <div className="absolute inset-0 bg-[#060606]/30" />
      </div>

      <div className="relative z-10 h-full flex flex-col px-6 sm:px-10 lg:px-16 py-10 sm:py-14 lg:py-16 justify-center gap-7">

        {/* Header */}
        <div className="shrink-0">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-orange-400 text-[10px] sm:text-xs tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
Pre Series A
          </motion.p>
          <motion.h1 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[28px] sm:text-[40px] lg:text-[52px] leading-[0.95] tracking-tight mt-1"
            style={{ fontFamily: "'Anton', sans-serif" }}>
FROM MAINNET LAUNCH <span className="text-orange-400">TO INITIAL SCALE</span>
          </motion.h1>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] w-32 sm:w-48 bg-gradient-to-r from-orange-500 to-transparent origin-left mt-2" />
        </div>

        {/* Main two-column content */}
        <div className="flex shrink-0 gap-10 lg:gap-14">

          {/* ── LEFT: $30M + details ── */}
          <div className="flex flex-col" style={{ width: '40%' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h2 className="text-[90px] sm:text-[120px] lg:text-[150px] leading-none font-black text-[#fefefe]"
                style={{ fontFamily: "'Anton', sans-serif" }}>
                <CountUp target={5} delay={0.5} />
              </h2>
              <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="h-[2px] w-28 sm:w-36 bg-gradient-to-r from-orange-500 to-transparent origin-left mt-1" />
              <p className="text-[#fefefe]/50 text-xs tracking-[0.3em] uppercase mt-2"
                style={{ fontFamily: "'Geist Mono', monospace" }}>
                USD
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="mt-10 space-y-3"
            >
              {[
                { label: 'STRUCTURE', value: 'Equity + Token Warrants' },
                { label: 'TIMELINE', value: 'Now' },
              ].map((d) => (
                <div key={d.label} className="flex items-baseline gap-5">
                  <span className="text-[#fefefe]/60 text-sm tracking-[0.2em] uppercase shrink-0 w-28"
                    style={{ fontFamily: "'Geist Mono', monospace" }}>
                    {d.label}
                  </span>
                  <span className="text-[#fefefe]/90 text-base sm:text-lg font-bold"
                    style={{ fontFamily: "'Geist Mono', monospace" }}>
                    {d.value}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Seed Round Backers — inside left column */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="mt-10"
            >
              <p className="text-[#fefefe]/60 text-sm tracking-[0.3em] uppercase mb-3"
                style={{ fontFamily: "'Geist Mono', monospace" }}>
                Seed Round Backers <span className="text-[#fefefe]">· Sep 2025</span>
              </p>
              <div className="flex items-center gap-5">
                {['Blockchange Capital', 'Outlier Ventures', 'Tawasal Al Khaleej'].map((name) => (
                  <span key={name} className="text-[#fefefe]/85 text-base sm:text-lg font-semibold">
                    {name}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Vertical divider — only in the middle content area */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-px shrink-0 bg-gradient-to-b from-transparent via-white/[0.08] to-transparent origin-top self-stretch"
          />

          {/* ── RIGHT: What this round unlocks ── */}
          <div className="flex-1 flex flex-col min-w-0">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-[#fefefe] text-[24px] sm:text-[32px] lg:text-[40px] leading-none tracking-tight mb-6"
              style={{ fontFamily: "'Anton', sans-serif" }}
            >
              WHAT THIS ROUND <span className="text-orange-400">UNLOCKS</span>
            </motion.h2>

            <div className="flex flex-col gap-3 lg:gap-4 relative">
              {/* Vertical rail */}
              <div className="absolute left-[19px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-orange-500/70 via-orange-500/40 to-orange-500/10" />

              {unlocks.map((u, i) => (
                <motion.div
                  key={u.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.15, duration: 0.5 }}
                  className="flex items-start gap-4 relative"
                >
                  {/* Step badge */}
                  <span
                    className="relative z-10 shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(rgba(249,115,22,0.18), rgba(249,115,22,0.18)), #060606',
                      border: '1.5px solid rgba(249,115,22,0.7)',
                    }}
                  >
                    <span
                      className="text-orange-400 text-xs font-bold tracking-[0.1em]"
                      style={{ fontFamily: "'Geist Mono', monospace" }}
                    >
                      {u.num}
                    </span>
                  </span>

                  {/* Body */}
                  <div className="flex-1 pt-1 pb-1">
                    <div className="flex items-baseline justify-between gap-3 flex-wrap">
                      <p
                        className="text-[#fefefe] text-[20px] sm:text-[26px] lg:text-[30px] leading-none tracking-tight"
                        style={{ fontFamily: "'Anton', sans-serif" }}
                      >
                        {u.title}
                      </p>
                      <span
                        className="text-orange-400 text-[10px] sm:text-xs tracking-[0.22em] uppercase font-bold whitespace-nowrap"
                        style={{ fontFamily: "'Geist Mono', monospace" }}
                      >
                        {u.tag}
                      </span>
                    </div>
                    <p
                      className="text-[#fefefe]/70 text-xs sm:text-sm lg:text-base leading-snug mt-2"
                      style={{ fontFamily: "'Geist Mono', monospace" }}
                    >
                      {u.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="mt-5 text-orange-400 text-[18px] sm:text-[22px] lg:text-[26px] leading-tight tracking-tight pt-4"
              style={{
                fontFamily: "'Anton', sans-serif",
                borderTop: '1px solid rgba(249,115,22,0.25)',
              }}
            >
              THIS ROUND FUNDS THE TRANSITION FROM <span className="text-[#fefefe]">INFRASTRUCTURE</span> → <span className="text-[#fefefe]">LIVE NETWORK.</span>
            </motion.p>

          </div>
        </div>

        {/* Logo */}

      </div>
    </div>
  );
}
