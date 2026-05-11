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
    title: 'DEVELOPER ADOPTION',
    desc: 'Scale developer marketing, developer relations, community. Universal integration into harnesses/frameworks.',
    goal: 'Network effects — scaling transactions, liquidity and agent deployments.',
  },
  {
    title: 'SCALING ENTERPRISE',
    desc: 'Scale enterprise licensing, channels & partner programs.',
    goal: 'Scale sales to the Fortune 500.',
  },
  {
    title: 'EXCHANGE LISTING',
    desc: 'TGE preparation, exchange listing infrastructure, community.',
    goal: 'Network live, liquid, and generating protocol revenue.',
  },
];

export function RaiseSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <video className="w-full h-full object-cover opacity-30" autoPlay muted loop playsInline src={splashVideoUrl} />
        <div className="absolute inset-0 bg-[#060606]/30" />
      </div>

      <div className="relative z-10 h-full flex flex-col px-6 sm:px-10 lg:px-16 py-6 sm:py-8">

        {/* Header */}
        <div className="shrink-0">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-orange-400 text-[10px] sm:text-xs tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
Series A Fundraise
          </motion.p>
          <motion.h1 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[28px] sm:text-[40px] lg:text-[52px] leading-[0.95] tracking-tight mt-1"
            style={{ fontFamily: "'Anton', sans-serif" }}>
THE RAISE: <span className="text-orange-400">FROM TESTNET TO 50M AGENTS</span>
          </motion.h1>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] w-32 sm:w-48 bg-gradient-to-r from-orange-500 to-transparent origin-left mt-2" />
        </div>

        {/* Main two-column content */}
        <div className="flex-1 flex min-h-0 mt-4 gap-10 lg:gap-14">

          {/* ── LEFT: $30M + details ── */}
          <div className="flex flex-col justify-center" style={{ width: '40%' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h2 className="text-[90px] sm:text-[120px] lg:text-[150px] leading-none font-black text-[#fefefe]"
                style={{ fontFamily: "'Anton', sans-serif" }}>
                <CountUp target={12} delay={0.5} />
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
                { label: 'ROUND', value: 'Series A' },
                { label: 'STRUCTURE', value: 'Equity + Token Warrants' },
                { label: 'TIMELINE', value: 'Close Q3 2026' },
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
                {['Blockchange Capital', 'Outlier Ventures', 'Tawasal'].map((name) => (
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
          <div className="flex-1 flex flex-col justify-center min-w-0">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-[#fefefe] text-[24px] sm:text-[32px] lg:text-[40px] leading-none tracking-tight mb-6"
              style={{ fontFamily: "'Anton', sans-serif" }}
            >
              WHAT THIS ROUND <span className="text-orange-400">UNLOCKS</span>
            </motion.h2>

            <div className="space-y-5">
              {unlocks.map((u, i) => (
                <motion.div
                  key={u.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.15, duration: 0.5 }}
                  style={{ borderBottom: i < unlocks.length - 1 ? '1px solid rgba(249,115,22,0.1)' : 'none', paddingBottom: i < unlocks.length - 1 ? '1.25rem' : 0 }}
                >
                  <p className="text-orange-400 text-[24px] sm:text-[30px] lg:text-[34px] leading-none tracking-tight"
                    style={{ fontFamily: "'Anton', sans-serif" }}>
                    {u.title}
                  </p>
                  <p className="text-[#fefefe]/65 text-sm sm:text-base leading-relaxed mt-3"
                    style={{ fontFamily: "'Geist Mono', monospace" }}>
                    {u.desc}
                  </p>
                  <p className="text-[#fefefe]/85 text-sm sm:text-base font-bold mt-2"
                    style={{ fontFamily: "'Geist Mono', monospace" }}>
                    Goal: {u.goal}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>

        {/* Logo */}

      </div>
    </div>
  );
}
