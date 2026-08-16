import { motion } from 'framer-motion';
import { tr } from '../i18n';

// Percentages and intensities stay numeric; only labels swap by language.
const useOfFunds = [
  { pct: 59, strong: 1.0 },
  { pct: 31, strong: 0.7 },
  { pct: 10, strong: 0.4 },
];

const backers = ['Blockchange Capital', 'Outlier Ventures'];

// Only these strings swap by language — layout below is shared.
const T = tr({
  en: {
    headLead: 'THE',
    headAccent: 'INVESTMENT.',
    subLead: 'We spent the last year building product — ',
    subAccent: 'the OS and the integrated proof system are now GA.',
    subTail: ' We’re opening a round to convert pipeline and build scalable, repeatable revenue.',
    runway: 'SAFE + token warrants · 18 months runway',
    pathTitle: 'The path to Series A',
    milestones: [
      { label: 'LAUNCH', primary: 'GA in August', sub: 'product shipped' },
      { label: 'REVENUE', primary: 'First paying deployments', sub: 'Aleria channel + paying clients in telecom, health & iGaming' },
      { label: 'SERIES A', primary: 'Repeatable revenue', sub: 'the metrics for a priced round' },
    ],
    useOfFundsTitle: 'Use of Funds',
    useOfFundsLabels: ['Engineering & product', 'Sales, GTM & deployment', 'Operations & corporate'],
    useOfFundsNoteLead: 'Engineering headcount held broadly flat; the increase is weighted to ',
    useOfFundsNoteAccent: 'deployment, compliance certification, and mainnet operations.',
    backedBy: 'Backed By',
  },
  pt: {
    headLead: 'O',
    headAccent: 'INVESTIMENTO.',
    subLead: 'Passamos o último ano construindo produto — ',
    subAccent: 'o OS e o proof system integrado agora estão em GA.',
    subTail: ' Estamos abrindo uma rodada para converter o pipeline e construir receita escalável e recorrente.',
    runway: 'SAFE + token warrants · 18 meses de runway',
    pathTitle: 'O caminho até a Série A',
    milestones: [
      { label: 'LANÇAMENTO', primary: 'GA em agosto', sub: 'produto entregue' },
      { label: 'RECEITA', primary: 'Primeiras implantações pagas', sub: 'canal Aleria + clientes pagantes em telecom, saúde e iGaming' },
      { label: 'SÉRIE A', primary: 'Receita recorrente', sub: 'as métricas para uma rodada precificada' },
    ],
    useOfFundsTitle: 'Uso dos Recursos',
    useOfFundsLabels: ['Engenharia e produto', 'Vendas, GTM e implantação', 'Operações e corporativo'],
    useOfFundsNoteLead: 'Quadro de engenharia mantido praticamente estável; o aumento é direcionado para ',
    useOfFundsNoteAccent: 'implantação, certificação de compliance e operação da mainnet.',
    backedBy: 'Investidores',
  },
});

export function InvestmentSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      {/* Top-right orange wash */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-100px',
          right: '-200px',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-16 py-8 sm:py-10 lg:py-12 justify-center gap-6 lg:gap-8">

        {/* Headline */}
        <div className="shrink-0">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[44px] sm:text-[64px] lg:text-[88px] xl:text-[100px] leading-[0.95] tracking-tight uppercase"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            <span className="text-[#fefefe]">{T.headLead}</span>{' '}
            <span className="text-orange-400">{T.headAccent}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-[#fefefe]/85 text-base sm:text-lg lg:text-xl mt-3 max-w-5xl leading-relaxed"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            {T.subLead}<span className="text-orange-400 font-bold">{T.subAccent}</span>{T.subTail}
          </motion.p>
        </div>

        {/* Hero: $5M + path to Series A */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="grid items-center shrink-0 gap-8 lg:gap-14"
          style={{ gridTemplateColumns: '0.9fr 1.1fr' }}
        >
          {/* $5M block */}
          <div>
            <p
              className="text-[#fefefe]/55 text-xs lg:text-sm tracking-[0.25em] uppercase font-bold mb-2 lg:mb-3"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              Q4 2026
            </p>
            <p
              className="text-[#fefefe] text-[68px] sm:text-[96px] lg:text-[120px] xl:text-[132px] leading-[0.88] tracking-[-0.04em]"
              style={{ fontFamily: "'Anton', sans-serif" }}
            >
              $5M
            </p>
            <p
              className="text-[#fefefe]/70 text-xs sm:text-sm lg:text-base mt-3 lg:mt-4 leading-relaxed"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              {T.runway}
            </p>
          </div>

          {/* Path to Series A */}
          <div>
            <p
              className="text-orange-400 text-xs lg:text-sm tracking-[0.25em] uppercase font-bold mb-3 lg:mb-4"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              {T.pathTitle}
            </p>
            <div className="flex flex-col gap-3 lg:gap-4">
              {T.milestones.map((m, i, arr) => (
                <div
                  key={m.label}
                  className="flex items-baseline gap-4 lg:gap-5 pb-3 lg:pb-3.5"
                  style={{ borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.10)' : 'none' }}
                >
                  <p
                    className="text-orange-400 text-[22px] sm:text-[30px] lg:text-[38px] leading-none tracking-[-0.01em] min-w-[110px] lg:min-w-[140px] font-bold"
                    style={{ fontFamily: "'Anton', sans-serif" }}
                  >
                    {m.label}
                  </p>
                  <div className="flex flex-col gap-1">
                    <p className="text-[#fefefe] text-base sm:text-lg lg:text-xl font-bold leading-snug" style={{ fontFamily: "'Geist Mono', monospace" }}>
                      {m.primary}
                    </p>
                    <p className="text-[#fefefe]/60 text-xs sm:text-sm lg:text-base leading-snug" style={{ fontFamily: "'Geist Mono', monospace" }}>
                      {m.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom row: Use of funds + Backed by */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.5 }}
          className="grid items-end shrink-0 pt-5 lg:pt-6 gap-8 lg:gap-12"
          style={{
            gridTemplateColumns: '1.6fr 1fr',
            borderTop: '1px solid rgba(255,255,255,0.12)',
          }}
        >
          {/* Use of funds */}
          <div>
            <p
              className="text-orange-400 text-xs lg:text-sm tracking-[0.25em] uppercase font-bold mb-3 lg:mb-4"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              {T.useOfFundsTitle}
            </p>
            <div
              className="flex gap-[6px] rounded-[4px] overflow-hidden mb-2 lg:mb-3"
              style={{ height: '36px' }}
            >
              {useOfFunds.map((f) => (
                <div
                  key={f.pct}
                  className="flex items-center justify-center text-xs lg:text-sm font-bold text-[#060606]"
                  style={{
                    flex: f.pct,
                    background:
                      f.strong === 1.0
                        ? '#f97316'
                        : `rgba(249,115,22,${f.strong})`,
                    fontFamily: "'Geist Mono', monospace",
                  }}
                >
                  {f.pct}%
                </div>
              ))}
            </div>
            <div className="flex gap-[6px]">
              {useOfFunds.map((f, i) => (
                <div
                  key={f.pct}
                  className="text-[#fefefe]/80 text-xs lg:text-sm"
                  style={{ flex: f.pct, fontFamily: "'Geist Mono', monospace" }}
                >
                  {T.useOfFundsLabels[i]}
                </div>
              ))}
            </div>
            <p
              className="text-[#fefefe]/55 text-xs lg:text-sm mt-3 leading-snug"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              {T.useOfFundsNoteLead}<span className="text-orange-400">{T.useOfFundsNoteAccent}</span>
            </p>
          </div>

          {/* Backed By */}
          <div className="text-right">
            <p
              className="text-orange-400 text-xs lg:text-sm tracking-[0.25em] uppercase font-bold mb-3 lg:mb-4"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              {T.backedBy}
            </p>
            <div className="flex flex-col gap-1.5">
              {backers.map((name) => (
                <span
                  key={name}
                  className="text-[#fefefe] text-sm sm:text-base lg:text-lg font-bold"
                  style={{ fontFamily: "'Geist Mono', monospace" }}
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
