import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';
import splashVideoUrl from '/kling_20260226_VIDEO_Take_Image_1650_0.mp4';
import unicityLogoUrl from '/UnicityLogo.svg';

function CountUp({ target, delay = 0 }: { target: number; delay?: number }) {
  const count = useMotionValue(0);
  const display = useTransform(count, (v) => `$${Math.round(v)}M`);
  useEffect(() => {
    const c = animate(count, target, { duration: 2, delay, ease: [0.25, 0.1, 0.25, 1] });
    return c.stop;
  }, [target, delay, count]);
  return <motion.span>{display}</motion.span>;
}

const proceeds = [
  { pct: '45%', label: 'Go-to-Market', desc: 'Enterprise sales, channel partners, developer relations, TGE marketing', amount: '$13.5M', color: '#a855f7' },
  { pct: '30%', label: 'Operations', desc: 'Exchange listing fees, legal, compliance, corporate operations', amount: '$9M', color: '#eab308' },
  { pct: '25%', label: 'Engineering', desc: 'Team ramp $2M→$4M/yr, L1 hardening, platform scaling', amount: '$7.5M', color: '#3b82f6' },
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
            Now Raising
          </motion.p>
          <motion.h1 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[28px] sm:text-[40px] lg:text-[52px] leading-[0.95] tracking-tight mt-1"
            style={{ fontFamily: "'Anton', sans-serif" }}>
            THE <span className="text-orange-400">RAISE</span>
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
                <CountUp target={30} delay={0.5} />
              </h2>
              <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="h-[2px] w-28 sm:w-36 bg-gradient-to-r from-orange-500 to-transparent origin-left mt-1" />
              <p className="text-[#fefefe]/35 text-[10px] tracking-[0.3em] uppercase mt-2"
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
                { label: 'TIMELINE', value: 'Close Q2 2026' },
              ].map((d) => (
                <div key={d.label} className="flex items-baseline gap-5">
                  <span className="text-[#fefefe]/20 text-[9px] tracking-[0.2em] uppercase shrink-0 w-20"
                    style={{ fontFamily: "'Geist Mono', monospace" }}>
                    {d.label}
                  </span>
                  <span className="text-[#fefefe]/90 text-sm sm:text-base font-bold"
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
              <p className="text-[#fefefe]/20 text-[9px] tracking-[0.3em] uppercase mb-2"
                style={{ fontFamily: "'Geist Mono', monospace" }}>
                Seed Round Backers
              </p>
              <div className="flex items-center gap-5">
                {['Blockchange Capital', 'Outlier Ventures', 'Tawasal'].map((name) => (
                  <span key={name} className="text-[#fefefe]/55 text-xs sm:text-sm font-semibold">
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

          {/* ── RIGHT: Use of Proceeds + Runway ── */}
          <div className="flex-1 flex flex-col justify-center min-w-0">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-[#fefefe]/20 text-[10px] tracking-[0.3em] uppercase mb-5"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              Use of Proceeds
            </motion.p>

            <div className="space-y-5">
              {proceeds.map((p, i) => (
                <motion.div
                  key={p.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.15, duration: 0.5 }}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-2xl sm:text-3xl font-black shrink-0"
                      style={{ fontFamily: "'Anton', sans-serif", color: p.color, width: 65, textAlign: 'right' }}>
                      {p.pct}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline justify-between">
                        <p className="text-[#fefefe]/90 text-sm sm:text-base font-bold"
                          style={{ fontFamily: "'Geist Mono', monospace" }}>
                          {p.label}
                        </p>
                        <span className="text-[#fefefe]/40 text-xs shrink-0 ml-3"
                          style={{ fontFamily: "'Geist Mono', monospace" }}>
                          {p.amount}
                        </span>
                      </div>
                      <p className="text-[#fefefe]/35 text-[10px] sm:text-[11px] mt-1"
                        style={{ fontFamily: "'Geist Mono', monospace" }}>
                        {p.desc}
                      </p>
                      <div className="mt-2 h-[3px] w-full rounded-full bg-white/[0.04] overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ backgroundColor: p.color }}
                          initial={{ width: '0%' }}
                          animate={{ width: `${parseInt(p.pct)}%` }}
                          transition={{ delay: 0.9 + i * 0.15, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>

        {/* Logo */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
          className="shrink-0 flex justify-end mt-2">
          <img src={unicityLogoUrl} alt="Unicity" className="h-5 opacity-60" />
        </motion.div>

      </div>
    </div>
  );
}
