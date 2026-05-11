import { motion } from 'framer-motion';

const pillars = [
  {
    label: 'Article 12',
    desc: 'Automatic event recording throughout the system\'s operational lifetime — traceability by design.',
    img: '/dashboards/security.png',
    accent: '#ef4444',
  },
  {
    label: 'Article 13',
    desc: 'Sufficiently transparent that the deployer can interpret outputs. Log collection built in.',
    img: '/dashboards/governance.png',
    accent: '#22c55e',
  },
  {
    label: 'Article 14',
    desc: 'Designed so natural persons can effectively oversee operation — human oversight as architecture.',
    img: '/dashboards/networking.png',
    accent: '#a855f7',
  },
  {
    label: 'Article 26',
    desc: 'Deployer holds logs under their control — minimum six months. Operator-side, not vendor-side.',
    img: '/dashboards/payments.png',
    accent: '#f59e0b',
  },
];

export function CasinoDashboardSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-6 sm:px-8 lg:px-10 py-6 sm:py-8 lg:py-10 justify-center gap-4">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-orange-400 text-xs sm:text-sm tracking-[0.32em] uppercase font-semibold"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Nº 04 · The Regulation, Article by Article
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[28px] sm:text-[40px] lg:text-[52px] leading-[1.05] tracking-tight mt-3 uppercase"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            Four articles.{' '}
            <span className="text-orange-400">One architectural requirement.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-2 text-[#fefefe]/85 text-xs sm:text-sm max-w-5xl leading-relaxed"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Regulation (EU) 2024/1689 — for high-risk AI systems under Annex III. <span className="text-[#fefefe] font-semibold">Designed.</span> Not monitored. Not reported on. Not audited retrospectively. The transparency, traceability, and oversight capability must be properties of the system's architecture from the moment it operates.
          </motion.p>
        </div>

        {/* Pillar dashboards — 4-column strip */}
        <div className="grid grid-cols-4 gap-3 lg:gap-4 shrink-0 h-[460px] lg:h-[500px]">
          {pillars.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.08, duration: 0.5 }}
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
                className="absolute top-2 left-3 text-[10px] sm:text-xs tracking-[0.25em] uppercase font-bold px-2 py-1 rounded"
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
