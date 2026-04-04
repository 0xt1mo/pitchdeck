import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';

function AnimatedNumber({ value, duration = 2, delay = 0 }: { value: number; duration?: number; delay?: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  useEffect(() => {
    const controls = animate(count, value, { duration, delay, ease: [0.25, 0.1, 0.25, 1] });
    return controls.stop;
  }, [value, duration, delay, count]);
  return <motion.span>{rounded}</motion.span>;
}

const path = [
  { year: "H2 '26", agents: '100K', revenue: '$0.6M' },
  { year: '2027', agents: '2M', revenue: '$24M' },
  { year: '2028', agents: '10M', revenue: '$120M' },
  { year: '2029', agents: '50M', revenue: '$600M' },
];

const drivers = [
  {
    title: 'Partner with AI Labs',
    milestone: '→ 2M agents',
    text: 'Signed integration with a leading AI lab. Every agent on their platform gets native access to security, identity, and settlement.',
  },
  {
    title: 'Developer marketing',
    milestone: '→ organic growth',
    text: "Community-first. The Stripe/Vercel playbook — win the developer, win every agent they build. Unicity skills, open SDKs, docs-as-product.",
  },
  {
    title: 'Enterprise distribution',
    milestone: '→ 10M agents',
    text: 'Platform deals that bring millions of agents in a single contract. One partner = step-function growth.',
  },
  {
    title: 'Network effects',
    milestone: '→ 50M agents',
    text: 'Every on-network transaction recruits the counterparty. Machine-readable discovery. Self-onboarding. Zero human in the loop.',
  },
];

export function ProjectionsSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-10 sm:py-14 lg:py-16">

        {/* Header */}
        <div className="shrink-0">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-orange-400 text-[10px] sm:text-xs tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            Projections
          </motion.p>
          <motion.h1 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[32px] sm:text-[44px] lg:text-[56px] leading-[0.95] tracking-tight mt-2"
            style={{ fontFamily: "'Anton', sans-serif" }}>
            THE PROTOCOL <span className="text-orange-400">REVENUE OPPORTUNITY</span>
          </motion.h1>
        </div>

        {/* Two-column body */}
        <div className="flex-1 grid grid-cols-2 gap-10 mt-4 content-start">

          {/* Left — model + number + trajectory */}
          <div className="flex flex-col">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
              <p className="text-[#fefefe] text-sm font-bold" style={{ fontFamily: "'Geist Mono', monospace" }}>
                Every agent pays a subscription in native token.
              </p>
              <p className="text-[#fefefe]/50 text-xs sm:text-sm leading-relaxed mt-1"
                style={{ fontFamily: "'Geist Mono', monospace" }}>
                Unlimited transactions. Subscription replaces gas entirely. Infrastructure cost per transaction: one microcent.
              </p>
              <p className="text-[#fefefe]/40 text-xs leading-relaxed mt-1"
                style={{ fontFamily: "'Geist Mono', monospace" }}>
                Pricing ranges from $12 to $120 per year per agent depending on tier. The model below uses <span className="text-orange-400">floor pricing only</span>.
              </p>
            </motion.div>

            {/* Hero number */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-4">
              <p className="text-[#fefefe]/40 text-sm" style={{ fontFamily: "'Geist Mono', monospace" }}>
                50M agents × $12/year/agent
              </p>
              <p className="text-orange-400 text-[90px] sm:text-[120px] lg:text-[150px] leading-none"
                style={{ fontFamily: "'Anton', sans-serif" }}>
                $<AnimatedNumber value={600} delay={0.6} duration={1.5} />M
              </p>
              <p className="text-[#fefefe]/40 text-xs mt-1" style={{ fontFamily: "'Geist Mono', monospace" }}>
                annual protocol revenue by 2029 (floor pricing)
              </p>
            </motion.div>

            {/* Trajectory */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mt-4">
              <div className="flex items-center">
                {path.map((p, i) => (
                  <div key={p.year} className="flex items-center">
                    <div className="text-center px-2 sm:px-4 first:pl-0">
                      <p className="text-[#fefefe]/40 text-[10px]" style={{ fontFamily: "'Geist Mono', monospace" }}>{p.year}</p>
                      <p className="text-[#fefefe]/80 text-lg font-bold" style={{ fontFamily: "'Geist Mono', monospace" }}>{p.agents}</p>
                      <p className="text-orange-400/80 text-base font-bold" style={{ fontFamily: "'Geist Mono', monospace" }}>{p.revenue}</p>
                    </div>
                    {i < path.length - 1 && <div className="text-orange-500/30 text-xs">→</div>}
                  </div>
                ))}
              </div>
              <p className="text-[#fefefe]/25 text-[10px] mt-1" style={{ fontFamily: "'Geist Mono', monospace" }}>
                $12-120/year per agent · unlimited transactions · no gas
              </p>
            </motion.div>
          </div>

          {/* Right — How We Get There */}
          <div className="flex flex-col">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
              <p className="text-orange-400 text-[10px] sm:text-xs tracking-[0.35em] uppercase"
                style={{ fontFamily: "'Geist Mono', monospace" }}>
                How We Get There
              </p>
              <div className="h-[1px] bg-orange-400/30 mt-2" />
            </motion.div>

            <div className="flex flex-col gap-4 mt-4">
              {drivers.map((d, i) => (
                <motion.div key={d.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.12 }}
                  style={{ borderBottom: i < drivers.length - 1 ? '1px solid rgba(249,115,22,0.1)' : 'none', paddingBottom: i < drivers.length - 1 ? '1rem' : 0 }}>
                  <div className="flex items-baseline gap-3">
                    <p className="text-[#fefefe] text-sm font-bold" style={{ fontFamily: "'Geist Mono', monospace" }}>
                      {d.title}
                    </p>
                    <span className="text-orange-400 text-xs font-bold" style={{ fontFamily: "'Geist Mono', monospace" }}>
                      {d.milestone}
                    </span>
                  </div>
                  <p className="text-[#fefefe]/50 text-[11px] leading-relaxed mt-1"
                    style={{ fontFamily: "'Geist Mono', monospace" }}>
                    {d.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}
