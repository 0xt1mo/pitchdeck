import { motion } from 'framer-motion';

const pillars = [
  {
    label: 'Security',
    desc: 'Semantic intercept fabric — every payload checked at runtime.',
    img: '/dashboards/security.png',
    accent: '#ef4444',
  },
  {
    label: 'Governance',
    desc: 'Live policy library, approvals, and full audit ledger.',
    img: '/dashboards/governance.png',
    accent: '#22c55e',
  },
  {
    label: 'Networking',
    desc: 'Open lanes across A2A, MCP, x402 — counterparty-aware.',
    img: '/dashboards/networking.png',
    accent: '#a855f7',
  },
  {
    label: 'Payments',
    desc: 'Cash flow, rail balances and per-agent budgets in real time.',
    img: '/dashboards/payments.png',
    accent: '#f59e0b',
  },
];

export function AgentSphereDashboardSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-6 sm:px-8 lg:px-10 py-6 sm:py-8 lg:py-10 justify-center gap-4">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-orange-400 text-xs sm:text-sm tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            The Enterprise Console
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[20px] sm:text-[28px] lg:text-[34px] leading-[1.05] tracking-tight mt-1"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            ONE PANE OF GLASS FOR <span className="text-orange-400">EVERY AGENT, EVERY POLICY, EVERY PAYMENT</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-2 text-[#fefefe]/85 text-xs sm:text-sm max-w-5xl leading-relaxed"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Identity, delegation, policy, settlement and audit — unified into a single operator surface.
          </motion.p>
        </div>

        {/* Hero overview + pillar 2x2 grid */}
        <div className="grid grid-cols-[1.5fr_1fr] gap-3 shrink-0 h-[460px] lg:h-[500px]">
          {/* Overview hero */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="rounded-xl overflow-hidden border border-orange-500/40 relative h-full"
            style={{ background: '#0a0a0f' }}
          >
            <img
              src="/dashboards/overview.png"
              alt="Agent Sphere overview"
              className="w-full h-full object-contain object-top"
            />
            <div
              className="absolute top-2 left-3 text-orange-400 text-[10px] sm:text-xs tracking-[0.25em] uppercase font-bold px-2 py-1 rounded"
              style={{
                fontFamily: "'Geist Mono', monospace",
                background: 'rgba(6,6,6,0.78)',
                border: '1px solid rgba(249,115,22,0.55)',
              }}
            >
              Overview
            </div>
          </motion.div>

          {/* Pillar 2x2 grid */}
          <div className="grid grid-cols-2 grid-rows-2 gap-3 h-full">
            {pillars.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.08, duration: 0.5 }}
                className="rounded-lg overflow-hidden border relative"
                style={{
                  borderColor: `${p.accent}66`,
                  background: '#0a0a0f',
                }}
              >
                <img
                  src={p.img}
                  alt={`${p.label} dashboard`}
                  className="w-full h-full object-contain object-top"
                />
                <div
                  className="absolute top-1.5 left-2 text-[9px] sm:text-[10px] tracking-[0.25em] uppercase font-bold px-1.5 py-0.5 rounded"
                  style={{
                    fontFamily: "'Geist Mono', monospace",
                    color: p.accent,
                    background: 'rgba(6,6,6,0.78)',
                    border: `1px solid ${p.accent}80`,
                  }}
                >
                  {p.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pillar captions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="grid grid-cols-4 gap-3 sm:gap-4 shrink-0"
        >
          {pillars.map((p) => (
            <div key={`cap-${p.label}`} className="flex items-start gap-2">
              <span
                className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                style={{ background: p.accent }}
              />
              <div>
                <p
                  className="text-xs sm:text-sm font-bold tracking-[0.18em] uppercase"
                  style={{ fontFamily: "'Geist Mono', monospace", color: p.accent }}
                >
                  {p.label}
                </p>
                <p
                  className="text-[#fefefe]/70 text-[11px] sm:text-xs leading-snug mt-0.5"
                  style={{ fontFamily: "'Geist Mono', monospace" }}
                >
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}
