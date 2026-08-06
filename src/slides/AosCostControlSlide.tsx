import { motion } from 'framer-motion';

const mono = "'Geist Mono', monospace";
const display = "'Anton', sans-serif";

const panels = [
  {
    title: 'Budgets as circuit breakers',
    intro: 'A poorly-engineered agent stuck in a hallucination loop can burn thousands. The kernel is the financial circuit breaker.',
    items: [
      { label: 'Hard rate limiting', body: 'Strict execution thresholds enforced at the kernel — before cost is incurred.' },
      { label: 'Token quotas', body: 'Per-agent budgets; the kernel blocks execution the instant a limit is hit.' },
      { label: 'ROI attribution', body: 'Track exactly how much compute each autonomous workflow consumes.' },
    ],
  },
  {
    title: 'Routing as optimization',
    intro: 'Every request is scored before it runs and directed to the right model — by complexity, cost, latency, and clearance.',
    items: [
      { label: 'Capability-matched', body: 'Heavy work reaches strong models; trivial work never pays for them.' },
      { label: 'Clearance-aware', body: 'Sensitive context only routes to a target authorised to receive it.' },
      { label: 'Recorded', body: 'The routing choice is an inspected, explainable event — after the fact.' },
    ],
  },
];

export function AosCostControlSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-8 lg:py-11 gap-6 lg:gap-8">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-400 text-xs sm:text-sm lg:text-base tracking-[0.4em] uppercase font-bold"
            style={{ fontFamily: mono }}
          >
            Use Case · Cost Control
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[34px] sm:text-[52px] lg:text-[72px] xl:text-[84px] leading-[0.95] tracking-tight uppercase mt-2"
            style={{ fontFamily: display }}
          >
            SPEND, <span className="text-orange-400">UNDER CONTROL.</span>
          </motion.h1>
        </div>

        {/* Two panels */}
        <div className="shrink-0 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
          {panels.map((panel, pi) => (
            <motion.div
              key={panel.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + pi * 0.12, duration: 0.5 }}
              className="rounded-xl px-6 lg:px-7 py-5 lg:py-6 flex flex-col gap-4"
              style={{ border: '1px solid rgba(249,115,22,0.30)', background: 'rgba(249,115,22,0.035)' }}
            >
              <p className="text-orange-400 text-xl sm:text-2xl lg:text-3xl uppercase leading-tight" style={{ fontFamily: display }}>
                {panel.title}
              </p>
              <p className="text-[#fefefe]/80 text-sm sm:text-base lg:text-lg leading-snug" style={{ fontFamily: mono }}>
                {panel.intro}
              </p>
              <div className="flex flex-col gap-3 lg:gap-3.5 mt-1">
                {panel.items.map((it) => (
                  <div key={it.label} className="flex items-start gap-3">
                    <span className="text-orange-400/70 text-base lg:text-xl font-bold shrink-0 mt-0.5">→</span>
                    <div>
                      <p className="text-[#fefefe] text-sm sm:text-base lg:text-lg font-bold tracking-[0.14em] uppercase" style={{ fontFamily: mono }}>
                        {it.label}
                      </p>
                      <p className="text-[#fefefe]/70 text-sm lg:text-base leading-snug mt-0.5" style={{ fontFamily: mono }}>
                        {it.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
