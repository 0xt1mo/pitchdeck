import { motion } from 'framer-motion';

const mono = "'Geist Mono', monospace";
const display = "'Anton', sans-serif";

const columns = [
  {
    title: 'Community',
    sub: 'Free · open',
    accent: false,
    marker: '—',
    items: [
      'Full OS on the open engine',
      'Installers & distributions',
      'Capsule marketplace',
      'Developer bottom-up adoption',
      'Payment rails opt-in $2 per 100k transactions',
      'Pre-paid gas,sold as capacity '
    ],
  },
  {
    title: 'Enterprise',
    sub: 'Licensed · governed',
    accent: false,
    marker: '+',
    items: [
      'The same engine — no fork',
      'Guardrails Compliance, Security, Governance',
      'RBAC, SSO, SIEM...', 
      'VPC / on-prem · per-agent licensing',
      '$250K average ARR per enterprise customer',
    ],
  },
  {
    title: 'Industry Solutions',
    sub: 'Partner-led · rev share',
    accent: true,
    marker: '+',
    items: [
      'Channel partners build & ship on AOS',
      'Revenue share on every deployment',
      'Compliant agentic solutions',
      'Telecom · medical · government',
      'Signed: Aleria — UAE sovereign AI',
    ],
  },
];

export function GtmEditionsSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-8 lg:py-11 gap-6 lg:gap-8">

        {/* Header */}
        <div className="shrink-0">
          <motion.h1
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[34px] sm:text-[52px] lg:text-[64px] xl:text-[72px] leading-[0.95] tracking-tight uppercase"
            style={{ fontFamily: display }}
          >
            Go To <span className="text-orange-400">Market.</span>
          </motion.h1>
        </div>

        {/* Three columns */}
        <div className="shrink-0 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5">
          {columns.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
              className={
                c.accent
                  ? 'rounded-2xl border-2 border-orange-500 bg-orange-500/[0.06] p-5 lg:p-6'
                  : 'rounded-2xl border border-[#fefefe]/14 bg-[#fefefe]/[0.02] p-5 lg:p-6'
              }
              style={c.accent ? { boxShadow: '0 0 28px rgba(249,115,22,0.14)' } : undefined}
            >
              <p className="text-[#fefefe] text-2xl lg:text-3xl leading-none uppercase" style={{ fontFamily: display }}>{c.title}</p>
              <p
                className={`text-xs lg:text-base tracking-[0.16em] uppercase mt-2 ${c.accent ? 'text-orange-400' : 'text-[#fefefe]/45'}`}
                style={{ fontFamily: mono }}
              >
                {c.sub}
              </p>
              <div className="flex flex-col gap-2 mt-4">
                {c.items.map((it) => (
                  <p key={it} className="flex gap-2.5 text-[#fefefe]/85 text-sm lg:text-lg leading-snug" style={{ fontFamily: mono }}>
                    <span className={`shrink-0 ${c.accent ? 'text-orange-400' : 'text-[#fefefe]/40'}`}>{c.marker}</span>
                    {it}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="shrink-0 text-[#fefefe]/85 text-base sm:text-lg lg:text-2xl leading-snug pt-4"
          style={{ fontFamily: mono, borderTop: '1px solid rgba(255,255,255,0.10)' }}
        >
          One OS underneath — adopt it free, license it, or <span className="text-orange-400">buy a finished solution built on top.</span>
        </motion.p>

      </div>
    </div>
  );
}
