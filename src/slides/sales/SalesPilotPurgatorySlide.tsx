import { motion } from 'framer-motion';

const bars = [
  {
    label: 'Governance &\nSecurity Blocks',
    value: 46,
    width: 88,
    fill: 'linear-gradient(90deg, rgba(245,158,11,0.15) 0%, rgba(245,158,11,0.5) 100%)',
    valueColor: 'rgba(245,158,11,0.9)',
    labelColor: 'rgba(245,158,11,0.8)',
    labelBold: true,
    annotation: '← This is what we solve',
  },
  {
    label: 'Data Access &\nPrivacy Risks',
    value: 32,
    width: 62,
    fill: 'linear-gradient(90deg, rgba(239,68,68,0.1) 0%, rgba(239,68,68,0.3) 100%)',
    valueColor: 'rgba(239,68,68,0.7)',
    labelColor: 'rgba(255,255,255,0.4)',
  },
  {
    label: 'Operational\nReliability',
    value: 14,
    width: 38,
    fill: 'linear-gradient(90deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.08) 100%)',
    valueColor: 'rgba(255,255,255,0.35)',
    labelColor: 'rgba(255,255,255,0.4)',
  },
  {
    label: 'ROI Justification\nUnclear',
    value: 8,
    width: 28,
    fill: 'linear-gradient(90deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.06) 100%)',
    valueColor: 'rgba(255,255,255,0.3)',
    labelColor: 'rgba(255,255,255,0.4)',
  },
];

export function SalesPilotPurgatorySlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-12 lg:px-20 py-10 lg:py-14 justify-center gap-8">

        <div className="shrink-0">
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[32px] sm:text-[44px] lg:text-[56px] leading-[1.05] tracking-tight"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            AGENTIC AI IS{' '}
            <span className="text-orange-400">NOT READY FOR PRODUCTION.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-[#fefefe]/70 text-lg sm:text-xl max-w-5xl leading-relaxed"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Gartner forecasts that a massive portion of agentic AI projects will fail to reach production by 2027.{' '}
            <span className="text-orange-400/80 font-bold">The #1 reason: governance and security.</span>
          </motion.p>
        </div>

        <div className="flex flex-col gap-5 lg:gap-6 px-4 lg:px-8 shrink-0">
          {bars.map((b, i) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.12 }}
              className="flex items-center gap-5 lg:gap-6"
            >
              <div
                className="w-[180px] lg:w-[220px] text-right text-sm lg:text-base leading-[1.3] shrink-0 whitespace-pre-line"
                style={{
                  color: b.labelColor,
                  fontFamily: "'Geist Mono', monospace",
                  fontWeight: b.labelBold ? 700 : 400,
                }}
              >
                {b.label}
              </div>
              <div
                className="flex-1 h-12 lg:h-14 rounded relative overflow-visible"
                style={{ background: 'rgba(255,255,255,0.03)' }}
              >
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${b.width}%` }}
                  transition={{ delay: 0.5 + i * 0.12, duration: 0.9, ease: 'easeOut' }}
                  className="h-full rounded flex items-center justify-end pr-4 text-base lg:text-lg font-bold relative"
                  style={{
                    background: b.fill,
                    color: b.valueColor,
                    fontFamily: "'Geist Mono', monospace",
                  }}
                >
                  {b.value}%
                  {b.annotation && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.6 }}
                      className="absolute -top-5 right-0 text-[11px] lg:text-xs uppercase tracking-[0.15em] whitespace-nowrap"
                      style={{
                        color: 'rgba(245,158,11,0.55)',
                        fontFamily: "'Geist Mono', monospace",
                      }}
                    >
                      {b.annotation}
                    </motion.div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="text-[11px] lg:text-xs pl-[200px] lg:pl-[244px]"
            style={{
              color: 'rgba(255,255,255,0.18)',
              fontFamily: "'Geist Mono', monospace",
            }}
          >
            Source: Gartner 2026 — Primary Blockers to Agentic AI Production
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5 }}
          className="rounded-r-md px-5 py-4 shrink-0"
          style={{
            background: 'rgba(239,68,68,0.05)',
            borderLeft: '2px solid rgba(239,68,68,0.4)',
          }}
        >
          <p
            className="text-base lg:text-lg italic leading-snug text-[#fefefe]/70"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            "If we let the animal out of the cage today, nobody's ready for it."
          </p>
          <p
            className="text-[11px] lg:text-xs mt-2 tracking-wide"
            style={{ fontFamily: "'Geist Mono', monospace", color: 'rgba(239,68,68,0.6)' }}
          >
            Kevin Mandia, founder of Mandiant · RSA 2026
          </p>
        </motion.div>
      </div>
    </div>
  );
}
