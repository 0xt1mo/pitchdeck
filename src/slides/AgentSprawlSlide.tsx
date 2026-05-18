import { motion } from 'framer-motion';

const problems = [
  {
    label: 'COST',
    detail: 'Redundant token consumption. Runaway compute bills.',
  },
  {
    label: 'SECURITY',
    detail: 'Untracked agents, data exfiltration, regulatory exposure.',
  },
  {
    label: 'CONFLICTING LOGIC',
    detail: 'Overlapping agents on the same workflow. Conflicting outputs.',
  },
];

export function AgentSprawlSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-10 sm:py-14 lg:py-16 justify-center gap-7 lg:gap-9">

        {/* Headline + subhead */}
        <div className="shrink-0 flex flex-col gap-3 lg:gap-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[44px] sm:text-[64px] lg:text-[88px] xl:text-[100px] leading-[0.95] tracking-tight uppercase"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            <span className="text-[#fefefe]">CASE STUDY:</span>{' '}
            <span className="text-orange-400">AGENT SPRAWL.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-[#fefefe] text-xl sm:text-2xl lg:text-[28px] leading-snug font-bold"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            The problem every enterprise is trying to solve today.
          </motion.p>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="grid grid-cols-[auto_auto_1fr] items-end gap-10 lg:gap-20 shrink-0"
        >
          <div className="flex flex-col gap-2">
            <p
              className="text-orange-400 text-[44px] sm:text-[60px] lg:text-[88px] leading-none tracking-tight"
              style={{ fontFamily: "'Anton', sans-serif" }}
            >
              150,000+
            </p>
            <p
              className="text-[#fefefe]/55 text-xs sm:text-sm lg:text-base tracking-[0.18em] uppercase"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              Agents per F500 by 2028
            </p>
          </div>
          <div className="flex flex-col gap-2" style={{ borderLeft: '1px solid rgba(255,255,255,0.15)', paddingLeft: '40px' }}>
            <p
              className="text-orange-400 text-[44px] sm:text-[60px] lg:text-[88px] leading-none tracking-tight"
              style={{ fontFamily: "'Anton', sans-serif" }}
            >
              87%
            </p>
            <p
              className="text-[#fefefe]/55 text-xs sm:text-sm lg:text-base tracking-[0.18em] uppercase"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              Have no governance today
            </p>
          </div>
          <p
            className="text-[#fefefe]/45 text-xs sm:text-sm lg:text-base tracking-[0.18em] uppercase text-right self-end"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Source: Gartner, 2026
          </p>
        </motion.div>

        {/* Three problem pillars */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.5 }}
          className="grid grid-cols-3 gap-6 lg:gap-12 shrink-0 pt-5 lg:pt-6"
          style={{ borderTop: '1px solid rgba(255,255,255,0.15)' }}
        >
          {problems.map((p) => (
            <div
              key={p.label}
              className="flex flex-col gap-3 pl-5 lg:pl-6"
              style={{ borderLeft: '3px solid rgba(249,115,22,0.85)' }}
            >
              <p
                className="text-[#fefefe] text-lg sm:text-xl lg:text-2xl font-bold tracking-[0.04em] uppercase"
                style={{ fontFamily: "'Geist Mono', monospace" }}
              >
                {p.label}
              </p>
              <p
                className="text-[#fefefe]/75 text-base sm:text-lg lg:text-xl leading-snug"
                style={{ fontFamily: "'Geist Mono', monospace" }}
              >
                {p.detail}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}
