import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';
import splashVideoUrl from '/kling_20260226_VIDEO_Take_Image_1650_0.mp4';
import unicityLogoUrl from '/UnicityLogo.svg';

function AnimatedNumber({ value, prefix = '', suffix = '', duration = 2, delay = 0 }: {
  value: number; prefix?: string; suffix?: string; duration?: number; delay?: number;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => {
    if (value >= 1000) return `${prefix}${Math.round(v).toLocaleString()}${suffix}`;
    if (value >= 100) return `${prefix}${Math.round(v)}${suffix}`;
    return `${prefix}${Math.round(v)}${suffix}`;
  });

  useEffect(() => {
    const controls = animate(count, value, {
      duration,
      delay,
      ease: [0.25, 0.1, 0.25, 1],
    });
    return controls.stop;
  }, [value, duration, delay, count]);

  return <motion.span>{rounded}</motion.span>;
}

const references = [
  { label: 'Dimension Market Research', desc: 'Multi-Agent System Market' },
  { label: 'Precedence Research', desc: 'Agentic AI Market Size and Forecast' },
  { label: 'Meticulous Research', desc: 'Autonomous AI and Autonomous Agents Market Analysis' },
  { label: 'McKinsey', desc: 'Agentic Commerce' },
];

export function MarketSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-y-auto scrollbar-hide">
      {/* Video background */}
      <div className="fixed inset-0 w-full h-full z-0">
        <video className="w-full h-full object-cover opacity-40" autoPlay muted loop playsInline src={splashVideoUrl} />
        <div className="absolute inset-0 bg-[#060606]/20" />
      </div>

      <div className="relative z-10 h-full flex flex-col px-6 sm:px-10 lg:px-16 py-6 sm:py-8">

        {/* Header */}
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-400 text-[10px] sm:text-xs tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Market Opportunity
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[28px] sm:text-[40px] lg:text-[52px] leading-[0.95] tracking-tight mt-1"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            MARKET SIZE
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] w-32 sm:w-48 bg-gradient-to-r from-orange-500 to-transparent origin-left mt-2"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-3 text-[#fefefe]/70 text-xs sm:text-sm lg:text-base max-w-2xl"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            The agents are coming. The infrastructure isn't ready.
          </motion.p>
        </div>

        {/* ── Agentic Commerce ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-8 sm:mt-10"
        >
          <h2
            className="text-[#fefefe]/60 text-[10px] tracking-[0.3em] uppercase mb-4"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Agentic Commerce — Market Size Projections (USD)
          </h2>

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {/* Today */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="relative rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm p-5 sm:p-8 text-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent pointer-events-none" />
              <p className="text-[#fefefe]/60 text-[10px] sm:text-xs uppercase tracking-wider mb-2" style={{ fontFamily: "'Geist Mono', monospace" }}>Today</p>
              <p className="text-[#fefefe]/80 text-[48px] sm:text-[64px] lg:text-[80px] leading-none font-black" style={{ fontFamily: "'Anton', sans-serif" }}>
                ~$0
              </p>
              <p className="text-[#fefefe]/60 text-[10px] sm:text-xs mt-3 max-w-[250px] mx-auto" style={{ fontFamily: "'Geist Mono', monospace" }}>
                ChatGPT's shopping queries exist but actual agent-to-agent transactions at scale? Not happening yet.
              </p>
            </motion.div>

            {/* 2030 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="relative rounded-2xl border border-orange-500/15 bg-orange-500/[0.04] backdrop-blur-sm p-5 sm:p-8 text-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent pointer-events-none" />
              {/* Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-orange-500/10 rounded-full blur-[80px] pointer-events-none" />
              <p className="text-orange-400/60 text-[10px] sm:text-xs uppercase tracking-wider mb-2 relative z-10" style={{ fontFamily: "'Geist Mono', monospace" }}>2030</p>
              <p className="text-orange-400 text-[48px] sm:text-[64px] lg:text-[80px] leading-none font-black relative z-10" style={{ fontFamily: "'Anton', sans-serif" }}>
                $<AnimatedNumber value={3} delay={1.2} duration={1.5} />T
              </p>
              <p className="text-[#fefefe]/70 text-[10px] sm:text-xs mt-3 max-w-[250px] mx-auto relative z-10" style={{ fontFamily: "'Geist Mono', monospace" }}>
                McKinsey prediction of worldwide agentic commerce by 2030
              </p>
            </motion.div>
          </div>

        </motion.div>

        {/* ── Agentic AI ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-8 sm:mt-10"
        >
          <h2
            className="text-[#fefefe]/60 text-[10px] tracking-[0.3em] uppercase mb-4"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Agentic AI — Market Size Projections (USD)
          </h2>

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {/* Autonomous AI */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              className="relative rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm p-5 sm:p-7 overflow-hidden"
            >
              <p className="text-orange-400 text-[36px] sm:text-[48px] lg:text-[56px] leading-none font-black" style={{ fontFamily: "'Anton', sans-serif" }}>
                $<AnimatedNumber value={400} delay={1.8} duration={1.5} />B+
              </p>
              <p className="text-[#fefefe]/60 text-xs sm:text-sm font-semibold mt-2" style={{ fontFamily: "'Anton', sans-serif", letterSpacing: '0.05em' }}>
                AUTONOMOUS AI
              </p>
              <p className="text-[#fefefe]/60 text-[10px] sm:text-xs mt-2" style={{ fontFamily: "'Geist Mono', monospace" }}>
                Projected by 2034/2035
              </p>
              <div className="mt-2 flex items-center gap-2">
                <div className="h-1 flex-1 rounded-full bg-white/[0.05] overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"
                    initial={{ width: '3%' }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 2, duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
                  />
                </div>
                <span className="text-[#fefefe]/50 text-[9px] shrink-0" style={{ fontFamily: "'Geist Mono', monospace" }}>from $11.5B</span>
              </div>
            </motion.div>

            {/* Agentic AI */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.5 }}
              className="relative rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm p-5 sm:p-7 overflow-hidden"
            >
              <p className="text-orange-400 text-[36px] sm:text-[48px] lg:text-[56px] leading-none font-black" style={{ fontFamily: "'Anton', sans-serif" }}>
                $<AnimatedNumber value={200} delay={2} duration={1.5} />B+
              </p>
              <p className="text-[#fefefe]/60 text-xs sm:text-sm font-semibold mt-2" style={{ fontFamily: "'Anton', sans-serif", letterSpacing: '0.05em' }}>
                AGENTIC AI
              </p>
              <p className="text-[#fefefe]/60 text-[10px] sm:text-xs mt-2" style={{ fontFamily: "'Geist Mono', monospace" }}>
                Projected by 2034/2035
              </p>
              <div className="mt-2 flex items-center gap-2">
                <div className="h-1 flex-1 rounded-full bg-white/[0.05] overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"
                    initial={{ width: '4%' }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 2.2, duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
                  />
                </div>
                <span className="text-[#fefefe]/50 text-[9px] shrink-0" style={{ fontFamily: "'Geist Mono', monospace" }}>from $7.55B</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* ── References ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.6 }}
          className="mt-8 sm:mt-10 border-t border-white/[0.05] pt-4 flex items-end justify-between"
        >
          <div className="flex flex-wrap gap-x-6 gap-y-1">
            {references.map((r) => (
              <p key={r.label} className="text-[#fefefe]/20 text-[9px]" style={{ fontFamily: "'Geist Mono', monospace" }}>
                <span className="text-[#fefefe]/30">{r.label}</span> — {r.desc}
              </p>
            ))}
          </div>
          <img src={unicityLogoUrl} alt="Unicity" className="h-5 opacity-60 shrink-0 ml-4" />
        </motion.div>

      </div>
    </div>
  );
}
