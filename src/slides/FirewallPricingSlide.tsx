import { motion } from 'framer-motion';

const ANTON = "'Anton', sans-serif";
const MONO = "'Geist Mono', monospace";

const tiers = [
  {
    name: 'Free',
    who: 'Individual devs · 1–5',
    price: '$0',
    unit: 'forever',
    accent: false,
    items: [
      'Fail-closed capability enforcement',
      'Secret redaction + local content checks',
      'Cursor · Claude Code · Copilot',
      'MCP & extension scanning',
    ],
  },
  {
    name: 'Team',
    who: 'Growing teams · 5+',
    price: '$15',
    unit: '/ user / month',
    accent: true,
    plus: 'Everything in Free, plus:',
    items: [
      'Fleet dashboard + org policy',
      'Role-based access control',
      'Verifiable audit log — provable offline',
      'Priority support',
    ],
  },
  {
    name: 'Enterprise',
    who: 'Eng leaders · 10+',
    price: 'Contact',
    unit: 'us',
    accent: false,
    plus: 'Everything in Team, plus:',
    items: [
      'SSO · SIEM · Slack',
      'Commit attestation (GitOps)',
      'Compliance reporting · VPC / on-prem',
      'Dedicated support & SLAs',
    ],
  },
];

export function FirewallPricingSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(249,115,22,0.08) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-10 lg:py-12 gap-6 lg:gap-8">

        {/* Header */}
        <div className="shrink-0">
          <motion.h1
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#fefefe] text-[32px] sm:text-[46px] lg:text-[64px] xl:text-[72px] leading-[0.95] tracking-tight uppercase"
            style={{ fontFamily: ANTON }}
          >
            Land free. <span className="text-orange-400">Expand per seat.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="mt-2.5 text-[#fefefe]/80 text-base lg:text-lg"
            style={{ fontFamily: MONO }}
          >
            The developer adopts it free. The team pays per seat. The enterprise buys governance.
          </motion.p>
        </div>

        {/* Tiers */}
        <div className="shrink-0 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
              className={
                t.accent
                  ? 'rounded-2xl border-2 border-orange-500 bg-orange-500/[0.06] p-5 lg:p-7'
                  : 'rounded-2xl border border-[#fefefe]/14 bg-[#fefefe]/[0.02] p-5 lg:p-7'
              }
              style={t.accent ? { boxShadow: '0 0 28px rgba(249,115,22,0.14)' } : undefined}
            >
              <div className="flex items-center justify-between gap-2">
                <p className="text-[#fefefe] text-2xl lg:text-3xl leading-none uppercase" style={{ fontFamily: ANTON }}>{t.name}</p>
                {t.accent && (
                  <span className="rounded-full border border-orange-500/70 text-orange-400 text-[10px] lg:text-xs px-2.5 py-0.5 tracking-[0.14em] uppercase" style={{ fontFamily: MONO }}>Popular</span>
                )}
              </div>
              <p className="text-[#fefefe]/45 text-[11px] lg:text-sm tracking-[0.14em] uppercase mt-1.5" style={{ fontFamily: MONO }}>{t.who}</p>

              <div className="flex items-baseline gap-2 mt-4">
                <span className={`text-[40px] lg:text-[56px] leading-none ${t.accent ? 'text-orange-400' : 'text-[#fefefe]'}`} style={{ fontFamily: ANTON }}>{t.price}</span>
                <span className="text-[#fefefe]/55 text-xs lg:text-sm" style={{ fontFamily: MONO }}>{t.unit}</span>
              </div>

              {t.plus && (
                <p className="text-[#fefefe]/50 text-xs lg:text-sm mt-4" style={{ fontFamily: MONO }}>{t.plus}</p>
              )}
              <div className={`flex flex-col gap-2 ${t.plus ? 'mt-2' : 'mt-4'}`}>
                {t.items.map((it) => (
                  <p key={it} className="flex gap-2.5 text-[#fefefe]/85 text-sm lg:text-base leading-snug" style={{ fontFamily: MONO }}>
                    <span className={`shrink-0 ${t.accent ? 'text-orange-400' : 'text-[#fefefe]/40'}`}>{t.accent ? '+' : '—'}</span>
                    {it}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="shrink-0 text-[#fefefe]/85 text-base sm:text-lg lg:text-2xl leading-snug pt-4"
          style={{ fontFamily: MONO, borderTop: '1px solid rgba(255,255,255,0.10)' }}
        >
          Even the free tier <span className="text-orange-400">fails closed</span> — enforcement no competitor can match, and the wedge into the enterprise.
        </motion.p>

      </div>
    </div>
  );
}
