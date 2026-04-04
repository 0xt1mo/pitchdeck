import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';

function AnimatedNumber({ value, prefix = '', suffix = '', duration = 2, delay = 0 }: {
  value: number; prefix?: string; suffix?: string; duration?: number; delay?: number;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => `${prefix}${Math.round(v)}${suffix}`);
  useEffect(() => {
    const controls = animate(count, value, { duration, delay, ease: [0.25, 0.1, 0.25, 1] });
    return controls.stop;
  }, [value, duration, delay, count]);
  return <motion.span>{rounded}</motion.span>;
}

const economicsQuotes = [
  {
    text: '"AI agents will make 1 million times more payments than humans, and they will use crypto."',
    author: 'CZ, Binance founder, March 2026',
  },
  {
    text: '"We will likely need blockchains that support more than one million — or even one billion — transactions per second."',
    author: 'Patrick & John Collison, Stripe, 2026',
  },
  {
    text: '"By 2028, AI agents will intermediate more than $15 trillion in B2B spending."',
    author: 'Gartner',
  },
];

export function MarketSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col justify-between px-8 sm:px-12 lg:px-20 py-8 sm:py-10 lg:py-12">

        <div>
        {/* ─── TOP: Header ─── */}
        <div className="shrink-0">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-orange-400 text-[10px] sm:text-xs tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            Market Opportunity
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[32px] sm:text-[44px] lg:text-[56px] leading-[0.95] tracking-tight mt-2"
            style={{ fontFamily: "'Anton', sans-serif" }}>
            AGENTS ARE COMING.{' '}
            <span className="text-orange-400">THE INFRA ISN'T READY.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-[#fefefe]/70 text-sm sm:text-base mt-3 max-w-3xl"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            <span className="text-orange-400 font-bold">$3-5T</span> agentic commerce by 2030 (McKinsey).<br />Trillion-dollar opportunity. Infra is still in the dialup stage.<br />That's the gap we fill.
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-[#fefefe]/50 text-xs sm:text-sm mt-3 max-w-3xl leading-relaxed"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            x402 has moved to the Linux Foundation with Google, AWS, Microsoft, Visa, and Mastercard as founding members. Tempo launched at a $5B valuation backed by Stripe and Paradigm. Kite.ai raised $33M from PayPal Ventures. <span className="text-orange-400 font-bold">The agent infrastructure race is on.</span>
          </motion.p>
        </div>

        {/* ─── MIDDLE: Two columns ─── */}
        <div className="shrink-0 grid grid-cols-2 gap-10 lg:gap-14 mt-8">

          {/* LEFT — The Economics */}
          <div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
              <h2 className="text-[#fefefe] text-[20px] sm:text-[26px] lg:text-[32px] leading-none tracking-tight"
                style={{ fontFamily: "'Anton', sans-serif" }}>
                THE <span className="text-orange-400">ECONOMICS</span>
              </h2>
              <div className="h-[1px] bg-orange-400/30 mt-2 mb-5" />
            </motion.div>

            {economicsQuotes.map((q, i) => (
              <motion.div
                key={q.author}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.15, duration: 0.5 }}
                className="mb-5 pb-5"
                style={{ borderBottom: i < economicsQuotes.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}
              >
                <p className="text-[#fefefe]/80 text-sm sm:text-[15px] lg:text-lg leading-relaxed italic">
                  {q.text}
                </p>
                <p className="text-orange-400/60 text-xs sm:text-sm mt-2" style={{ fontFamily: "'Geist Mono', monospace" }}>
                  — {q.author}
                </p>
              </motion.div>
            ))}
          </div>

          {/* RIGHT — The Security */}
          <div className="flex flex-col gap-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
              <h2 className="text-[#fefefe] text-[20px] sm:text-[26px] lg:text-[32px] leading-none tracking-tight"
                style={{ fontFamily: "'Anton', sans-serif" }}>
                THE <span className="text-orange-400">SECURITY</span>
              </h2>
              <div className="h-[1px] bg-orange-400/30 mt-2 mb-5" />
            </motion.div>

            {/* Mandia quote */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <p className="text-[#fefefe]/80 text-sm sm:text-[15px] lg:text-lg leading-relaxed italic">
                "If we let the animal out of the cage today, nobody's ready for it."
              </p>
              <p className="text-orange-400/60 text-xs sm:text-sm mt-2" style={{ fontFamily: "'Geist Mono', monospace" }}>
                — Kevin Mandia, founder of Mandiant, RSA 2026
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex gap-8 sm:gap-12"
            >
              <div>
                <p className="text-orange-400 text-[28px] sm:text-[34px] lg:text-[40px] leading-none"
                  style={{ fontFamily: "'Anton', sans-serif" }}>
                  <AnimatedNumber value={88} delay={1} duration={1.5} suffix="%" />
                </p>
                <p className="text-[#fefefe]/40 text-[10px] sm:text-xs mt-1 leading-tight" style={{ fontFamily: "'Geist Mono', monospace" }}>
                  reported AI agent<br />security incidents
                </p>
              </div>
              <div>
                <p className="text-orange-400 text-[28px] sm:text-[34px] lg:text-[40px] leading-none"
                  style={{ fontFamily: "'Anton', sans-serif" }}>
                  <AnimatedNumber value={14} delay={1.2} duration={1.5} suffix="%" />
                </p>
                <p className="text-[#fefefe]/40 text-[10px] sm:text-xs mt-1 leading-tight" style={{ fontFamily: "'Geist Mono', monospace" }}>
                  of agents went live<br />with security approval
                </p>
              </div>
            </motion.div>

            {/* OpenClaw */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="text-xs sm:text-sm leading-relaxed"
            >
              <p className="text-orange-400 font-bold">OpenClaw: 400K users.</p>
              <p className="text-[#fefefe]/50 mt-1">Zero enforcement. Zero identity. Zero verifiable execution.</p>

            </motion.div>
          </div>
        </div>
        </div>


        {/* Logo */}

      </div>
    </div>
  );
}
