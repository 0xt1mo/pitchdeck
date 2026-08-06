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

const columns = [
  {
    n: '1',
    label: 'SECURITY',
    accent: '#ef4444',
    timing: 'Urgent Today',
    body: 'Every enterprise running agents hits the compliance wall today.',
    callout: 'SOC2, HIPAA, EU AI Act pass by design.',
    img: '/dashboards/security.png',
  },
  {
    n: '2',
    label: 'GOVERNANCE',
    accent: '#22c55e',
    timing: 'Activated Next',
    body: 'Same substrate delivers audit, policy, and identity for free.',
    callout: 'No second procurement cycle required.',
    img: '/dashboards/governance.png',
  },
  {
    n: '3',
    label: 'NETWORKING',
    accent: '#a855f7',
    timing: 'Compounds',
    body: 'Once agents are governed, they connect to each other.',
    callout: 'MCP, A2A, x402 routing inside the substrate.',
    img: '/dashboards/networking.png',
  },
  {
    n: '4',
    label: 'PAYMENTS',
    accent: '#f59e0b',
    timing: 'Future Revenue',
    body: 'A2A settlement materializes as the network of governed agents matures.',
    callout: 'Machine-economics revenue accrual.',
    img: '/dashboards/payments.png',
  },
];

export function AgentSphereDashboardSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-6 sm:px-8 lg:px-12 py-4 sm:py-5 lg:py-6 justify-center gap-3 lg:gap-3.5">

        {/* ── TOP HALF: AGENT SPRAWL ── */}

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-orange-400 text-xs sm:text-sm tracking-[0.4em] uppercase font-bold shrink-0"
          style={{ fontFamily: "'Geist Mono', monospace" }}
        >
          The Land · Problems We Solve Today
        </motion.p>

        {/* Headline + subtitle */}
        <div className="shrink-0 flex flex-col gap-1 lg:gap-2 -mt-2">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-orange-400 text-[32px] sm:text-[44px] lg:text-[56px] xl:text-[64px] leading-[0.95] tracking-tight uppercase"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            AGENT SPRAWL.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-[#fefefe] text-base sm:text-lg lg:text-xl leading-snug font-bold"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            The problem every enterprise is trying to solve.
          </motion.p>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="grid grid-cols-[auto_auto_1fr] items-end gap-10 lg:gap-16 shrink-0"
        >
          <div className="flex flex-col gap-1">
            <p
              className="text-orange-400 text-[26px] sm:text-[34px] lg:text-[44px] leading-none tracking-tight"
              style={{ fontFamily: "'Anton', sans-serif" }}
            >
              150,000+
            </p>
            <p
              className="text-[#fefefe]/55 text-[10px] sm:text-xs lg:text-sm tracking-[0.18em] uppercase"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              Agents per F500 by 2028
            </p>
          </div>
          <div className="flex flex-col gap-1" style={{ borderLeft: '1px solid rgba(255,255,255,0.15)', paddingLeft: '40px' }}>
            <p
              className="text-orange-400 text-[26px] sm:text-[34px] lg:text-[44px] leading-none tracking-tight"
              style={{ fontFamily: "'Anton', sans-serif" }}
            >
              87%
            </p>
            <p
              className="text-[#fefefe]/55 text-[10px] sm:text-xs lg:text-sm tracking-[0.18em] uppercase"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              Have no governance today
            </p>
          </div>
          <p
            className="text-[#fefefe]/45 text-[10px] sm:text-xs lg:text-sm tracking-[0.18em] uppercase text-right self-end"
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
          className="grid grid-cols-3 gap-4 lg:gap-8 shrink-0 pt-2 lg:pt-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.15)' }}
        >
          {problems.map((p) => (
            <div
              key={p.label}
              className="flex flex-col gap-1.5 pl-3 lg:pl-4"
              style={{ borderLeft: '3px solid rgba(249,115,22,0.85)' }}
            >
              <p
                className="text-[#fefefe] text-sm sm:text-base lg:text-lg font-bold tracking-[0.04em] uppercase"
                style={{ fontFamily: "'Geist Mono', monospace" }}
              >
                {p.label}
              </p>
              <p
                className="text-[#fefefe]/70 text-xs lg:text-sm leading-snug"
                style={{ fontFamily: "'Geist Mono', monospace" }}
              >
                {p.detail}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Substrate punch line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-orange-400 text-sm sm:text-base lg:text-lg font-bold leading-snug shrink-0 pt-1.5"
          style={{
            fontFamily: "'Geist Mono', monospace",
            borderTop: '1px solid rgba(255,255,255,0.10)',
          }}
        >
          → Every enterprise is building a point solution. We're the substrate.
        </motion.p>

        {/* ── BOTTOM HALF: 4-COLUMN TIMELINE + DASHBOARDS ── */}

        {/* Numbered timeline */}
        <div className="relative grid grid-cols-4 shrink-0 mt-2">
          <div
            className="absolute left-0 right-0 top-[14px] h-[2px] z-0"
            style={{
              background:
                'linear-gradient(to right, rgba(249,115,22,0.45), rgba(249,115,22,0.45))',
            }}
          />
          {columns.map((c, i) => (
            <motion.div
              key={`num-${c.n}`}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.85 + i * 0.08, duration: 0.4 }}
              className="relative z-10 flex items-center justify-start"
            >
              <span
                className="flex items-center justify-center w-7 h-7 rounded-full text-[#060606] text-sm font-bold"
                style={{
                  background: '#f97316',
                  fontFamily: "'Geist Mono', monospace",
                }}
              >
                {c.n}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Four columns */}
        <div className="grid grid-cols-4 gap-4 lg:gap-6 shrink-0">
          {columns.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.95 + i * 0.08, duration: 0.5 }}
              className="flex flex-col gap-1.5 lg:gap-2"
            >
              <h3
                className="text-[18px] sm:text-[22px] lg:text-[26px] leading-none tracking-tight"
                style={{ fontFamily: "'Anton', sans-serif", color: c.accent }}
              >
                {c.label}
              </h3>
              <p
                className="text-[#fefefe]/55 text-[10px] sm:text-xs tracking-[0.28em] uppercase font-bold"
                style={{ fontFamily: "'Geist Mono', monospace" }}
              >
                {c.timing}
              </p>
              <p
                className="text-[#fefefe] text-[11px] lg:text-xs leading-snug"
                style={{ fontFamily: "'Geist Mono', monospace" }}
              >
                {c.body}
              </p>
              <p
                className="text-orange-400 text-[11px] lg:text-xs font-bold leading-snug"
                style={{ fontFamily: "'Geist Mono', monospace" }}
              >
                → {c.callout}
              </p>
              <div
                className="rounded-md overflow-hidden mt-1"
                style={{
                  border: `1px solid ${c.accent}55`,
                  background: '#0a0a0f',
                  aspectRatio: '16 / 9',
                }}
              >
                <img
                  src={c.img}
                  alt={`${c.label} dashboard`}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
