import { motion } from 'framer-motion';
import { tr } from '../../i18n';

const mono = "'Geist Mono', monospace";
const display = "'Anton', sans-serif";

type Regime = {
  tag: string;
  name: string;
  teeth: string[];
};

const T = tr({
  en: {
    eyebrow: 'The cost of failure',
    headLead: 'FOUR REGIMES.',
    headAccent: 'EACH WITH TEETH.',
    regimes: [
      {
        tag: 'AI Rules',
        name: 'EU AI Act',
        teeth: ['High-risk classification', 'Core obligations from Aug 2026', 'Deployer duties, not just providers'],
      },
      {
        tag: 'Privacy',
        name: 'GDPR',
        teeth: ['Explicit consent required', 'Data minimization', 'Auditable data lifecycle'],
      },
      {
        tag: 'Sovereignty',
        name: 'Data Residency',
        teeth: ['Where data physically lives', 'Cross-border transfer limits', 'Provable in-region processing'],
      },
      {
        tag: 'Medical',
        name: 'Licensing',
        teeth: ['Practicing medicine unlicensed', 'Diagnosis & prescription', 'Personal & criminal liability'],
      },
    ] as Regime[],
    compound: (
      <>
        These regimes <span className="text-orange-400">compound</span> — one failure triggers several at once. Penalties stack.
      </>
    ),
    statLabel: 'of hospital representatives feel ready for EU AI Act obligations.',
  },
  pt: {
    eyebrow: 'O custo do fracasso',
    headLead: 'QUATRO REGIMES.',
    headAccent: 'CADA UM COM DENTES.',
    regimes: [
      {
        tag: 'Regras de IA',
        name: 'EU AI Act',
        teeth: ['Classificação de alto risco', 'Obrigações centrais a partir de ago 2026', 'Deveres do implementador, não apenas dos provedores'],
      },
      {
        tag: 'Privacidade',
        name: 'GDPR',
        teeth: ['Consentimento explícito exigido', 'Minimização de dados', 'Ciclo de vida de dados auditável'],
      },
      {
        tag: 'Soberania',
        name: 'Residência de Dados',
        teeth: ['Onde os dados residem fisicamente', 'Limites de transferência transfronteiriça', 'Processamento na região comprovável'],
      },
      {
        tag: 'Médico',
        name: 'Licenciamento',
        teeth: ['Exercício da medicina sem licença', 'Diagnóstico e prescrição', 'Responsabilidade pessoal e criminal'],
      },
    ] as Regime[],
    compound: (
      <>
        Esses regimes <span className="text-orange-400">se acumulam</span> — uma falha aciona vários ao mesmo tempo. As penalidades se somam.
      </>
    ),
    statLabel: 'dos representantes hospitalares se sentem prontos para as obrigações da EU AI Act.',
  },
});

export function CostOfFailureSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">

      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-8 lg:py-12 gap-5 lg:gap-7">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-400 text-[10px] sm:text-xs lg:text-sm tracking-[0.4em] uppercase font-bold"
            style={{ fontFamily: mono }}
          >
            {T.eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[34px] sm:text-[52px] lg:text-[74px] xl:text-[84px] leading-[0.95] tracking-tight uppercase mt-2"
            style={{ fontFamily: display }}
          >
            {T.headLead} <span className="text-orange-400">{T.headAccent}</span>
          </motion.h1>
        </div>

        {/* 4 cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 shrink-0">
          {T.regimes.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
              className="rounded-2xl px-5 lg:px-6 py-5 lg:py-6 flex flex-col"
              style={{
                background: 'rgba(255,255,255,0.015)',
                border: '1px solid #2c2c2c',
              }}
            >
              <p
                className="text-orange-400 text-[10px] lg:text-xs tracking-[0.24em] uppercase font-bold"
                style={{ fontFamily: mono }}
              >
                {r.tag}
              </p>
              <p
                className="text-[#fefefe] text-2xl lg:text-3xl leading-none uppercase mt-2"
                style={{ fontFamily: display }}
              >
                {r.name}
              </p>
              <ul className="mt-4 lg:mt-5 flex flex-col gap-2.5">
                {r.teeth.map((t) => (
                  <li key={t} className="flex gap-2.5 text-[#fefefe]/70 text-xs lg:text-sm leading-snug" style={{ fontFamily: mono }}>
                    <span className="text-orange-400/70 shrink-0">→</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Compounding note + stat anchor */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="shrink-0 flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8 pt-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.10)' }}
        >
          <p
            className="text-[#fefefe]/85 text-base sm:text-lg lg:text-xl leading-snug flex-1"
            style={{ fontFamily: mono }}
          >
            {T.compound}
          </p>
          <div className="flex items-center gap-4 shrink-0">
            <span className="text-orange-400 text-[40px] lg:text-[56px] leading-none" style={{ fontFamily: display }}>~26%</span>
            <span className="text-[#fefefe]/55 text-xs lg:text-sm leading-snug max-w-[220px]" style={{ fontFamily: mono }}>
              {T.statLabel}
            </span>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
