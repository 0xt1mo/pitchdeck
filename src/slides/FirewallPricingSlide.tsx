import { motion } from 'framer-motion';
import { tr } from '../i18n';

const ANTON = "'Anton', sans-serif";
const MONO = "'Geist Mono', monospace";

// Non-text tier structure: stable name key + accent flag. Display text lives in T.tiers.
const tiers = [
  { name: 'Free', accent: false },
  { name: 'Team', accent: true },
  { name: 'Enterprise', accent: false },
];

const T = tr({
  en: {
    headLead: 'Land free.',
    headAccent: 'Expand per seat.',
    sub: 'The developer adopts it free. The team pays per seat. The enterprise buys governance.',
    popular: 'Popular',
    footer: (
      <>
        Even the free tier <span className="text-orange-400">fails closed</span> — enforcement no competitor can match, and the wedge into the enterprise.
      </>
    ),
    tiers: [
      {
        who: 'Individual devs · 1–5',
        price: '$0',
        unit: 'forever',
        items: [
          'Fail-closed capability enforcement',
          'Secret redaction + local content checks',
          'Cursor · Claude Code · Copilot',
          'MCP & extension scanning',
        ],
      },
      {
        who: 'Growing teams · 5+',
        price: '$15',
        unit: '/ user / month',
        plus: 'Everything in Free, plus:',
        items: [
          'Fleet dashboard + org policy',
          'Role-based access control',
          'Verifiable audit log — provable offline',
          'Priority support',
        ],
      },
      {
        who: 'Eng leaders · 10+',
        price: 'Contact',
        unit: 'us',
        plus: 'Everything in Team, plus:',
        items: [
          'SSO · SIEM · Slack',
          'Commit attestation (GitOps)',
          'Compliance reporting · VPC / on-prem',
          'Dedicated support & SLAs',
        ],
      },
    ] as { who: string; price: string; unit: string; plus?: string; items: string[] }[],
  },
  pt: {
    headLead: 'Entre de graça.',
    headAccent: 'Expanda por assento.',
    sub: 'O desenvolvedor adota de graça. O time paga por assento. A empresa compra governança.',
    popular: 'Popular',
    footer: (
      <>
        Até o plano gratuito <span className="text-orange-400">falha fechado</span> — uma imposição que nenhum concorrente consegue igualar, e a porta de entrada para a empresa.
      </>
    ),
    tiers: [
      {
        who: 'Devs individuais · 1–5',
        price: '$0',
        unit: 'para sempre',
        items: [
          'Imposição de capacidade fail-closed',
          'Redação de segredos + verificação de conteúdo local',
          'Cursor · Claude Code · Copilot',
          'Varredura de MCP & extensões',
        ],
      },
      {
        who: 'Times em crescimento · 5+',
        price: '$15',
        unit: '/ usuário / mês',
        plus: 'Tudo do Free, mais:',
        items: [
          'Dashboard de frota + política da organização',
          'Controle de acesso baseado em papéis',
          'Log de auditoria verificável — comprovável offline',
          'Suporte prioritário',
        ],
      },
      {
        who: 'Líderes de eng · 10+',
        price: 'Fale',
        unit: 'conosco',
        plus: 'Tudo do Team, mais:',
        items: [
          'SSO · SIEM · Slack',
          'Atestação de commit (GitOps)',
          'Relatórios de compliance · VPC / on-prem',
          'Suporte dedicado & SLAs',
        ],
      },
    ] as { who: string; price: string; unit: string; plus?: string; items: string[] }[],
  },
});

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
            {T.headLead} <span className="text-orange-400">{T.headAccent}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="mt-2.5 text-[#fefefe]/80 text-base lg:text-lg"
            style={{ fontFamily: MONO }}
          >
            {T.sub}
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
                  <span className="rounded-full border border-orange-500/70 text-orange-400 text-[10px] lg:text-xs px-2.5 py-0.5 tracking-[0.14em] uppercase" style={{ fontFamily: MONO }}>{T.popular}</span>
                )}
              </div>
              <p className="text-[#fefefe]/45 text-[11px] lg:text-sm tracking-[0.14em] uppercase mt-1.5" style={{ fontFamily: MONO }}>{T.tiers[i].who}</p>

              <div className="flex items-baseline gap-2 mt-4">
                <span className={`text-[40px] lg:text-[56px] leading-none ${t.accent ? 'text-orange-400' : 'text-[#fefefe]'}`} style={{ fontFamily: ANTON }}>{T.tiers[i].price}</span>
                <span className="text-[#fefefe]/55 text-xs lg:text-sm" style={{ fontFamily: MONO }}>{T.tiers[i].unit}</span>
              </div>

              {T.tiers[i].plus && (
                <p className="text-[#fefefe]/50 text-xs lg:text-sm mt-4" style={{ fontFamily: MONO }}>{T.tiers[i].plus}</p>
              )}
              <div className={`flex flex-col gap-2 ${T.tiers[i].plus ? 'mt-2' : 'mt-4'}`}>
                {T.tiers[i].items.map((it) => (
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
          {T.footer}
        </motion.p>

      </div>
    </div>
  );
}
