import { motion } from 'framer-motion';
import { tr } from '../i18n';

const ANTON = "'Anton', sans-serif";
const MONO = "'Geist Mono', monospace";

// Base-case ramp — penetration of the >1B addressable subscriber base.
// Unicity take = $0.75/sub/mo = $9/sub/yr.
const RAMP = [
  { y: '2027', subs: '1M', pen: '0.1%', arr: 9 },
  { y: '2028', subs: '5M', pen: '0.5%', arr: 45 },
  { y: '2029', subs: '15M', pen: '1.5%', arr: 135 },
  { y: '2030', subs: '40M', pen: '4%', arr: 360 },
];
const MAX_ARR = 360;

const T = tr({
  en: {
    eyebrow: 'Financial model · Concierge (telco)',
    headLead: 'Every 1% of the base =',
    headAccent: '$90M ARR.',
    subtitle:
      '$5/mo retail · $0.75 to Unicity · $9 per subscriber a year — recurring, at software margin. >1B subscribers addressable across pipeline operators.',
    econTitle: 'Unit economics',
    retail: 'Retail price',
    retailNote: 'operator → subscriber',
    take: 'To Unicity',
    takeNote: '15% revenue share',
    annual: 'Per subscriber, per year',
    annualNote: 'recurring, ~software margin',
    rampTitle: 'Unicity ARR — base case',
    subsLabel: 'subs',
    footnote: 'Concierge is one vertical on the OS. Base case tops out below 5% of the addressable base.',
  },
  pt: {
    eyebrow: 'Modelo financeiro · Concierge (telecom)',
    headLead: 'Cada 1% da base =',
    headAccent: '$90M de ARR.',
    subtitle:
      '$5/mês no varejo · $0.75 para a Unicity · $9 por assinante ao ano — recorrente, com margem de software. >1B de assinantes endereçáveis nas operadoras do pipeline.',
    econTitle: 'Economia unitária',
    retail: 'Preço de varejo',
    retailNote: 'operadora → assinante',
    take: 'Para a Unicity',
    takeNote: '15% de divisão de receita',
    annual: 'Por assinante, por ano',
    annualNote: 'recorrente, ~margem de software',
    rampTitle: 'ARR da Unicity — cenário base',
    subsLabel: 'assin.',
    footnote: 'Concierge é uma vertical no OS. O cenário base fica abaixo de 5% da base endereçável.',
  },
});

export function FinancialModelSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 55% 55% at 68% 46%, rgba(249,115,22,0.09) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-8 lg:py-10 gap-6 lg:gap-7">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-orange-400 text-xs lg:text-sm tracking-[0.22em] uppercase mb-3"
            style={{ fontFamily: MONO }}
          >
            {T.eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06, duration: 0.6 }}
            className="text-[#fefefe] text-[28px] sm:text-[40px] lg:text-[54px] xl:text-[60px] leading-[0.98] tracking-tight uppercase max-w-6xl"
            style={{ fontFamily: ANTON }}
          >
            {T.headLead} <span className="text-orange-400">{T.headAccent}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-[#fefefe]/70 text-sm sm:text-base lg:text-lg leading-snug mt-3 max-w-5xl"
            style={{ fontFamily: MONO }}
          >
            {T.subtitle}
          </motion.p>
        </div>

        {/* Body: unit economics + ARR ramp */}
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-8 items-stretch">

          {/* Unit economics */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="w-full lg:w-[36%] rounded-xl border border-white/10 bg-white/[0.02] p-5 lg:p-6 flex flex-col"
          >
            <p className="text-[#fefefe]/40 text-[11px] lg:text-xs tracking-[0.2em] uppercase mb-4" style={{ fontFamily: MONO }}>{T.econTitle}</p>

            <div className="flex items-baseline gap-2">
              <span className="text-[#fefefe] text-3xl lg:text-4xl leading-none" style={{ fontFamily: ANTON }}>$5.00</span>
              <span className="text-[#fefefe]/50 text-sm" style={{ fontFamily: MONO }}>/sub/mo</span>
            </div>
            <p className="text-[#fefefe]/60 text-xs lg:text-sm mt-1" style={{ fontFamily: MONO }}>{T.retail} · <span className="text-[#fefefe]/40">{T.retailNote}</span></p>

            <div className="my-3 pl-1 text-[#fefefe]/35 text-xs" style={{ fontFamily: MONO }}>↓ {T.takeNote}</div>

            <div className="flex items-baseline gap-2">
              <span className="text-orange-400 text-4xl lg:text-5xl leading-none" style={{ fontFamily: ANTON }}>$0.75</span>
              <span className="text-orange-400/60 text-sm" style={{ fontFamily: MONO }}>/sub/mo</span>
            </div>
            <p className="text-[#fefefe]/60 text-xs lg:text-sm mt-1" style={{ fontFamily: MONO }}>{T.take}</p>

            <div className="my-3 pl-1 text-[#fefefe]/35 text-xs" style={{ fontFamily: MONO }}>× 12</div>

            <div className="flex items-baseline gap-2">
              <span className="text-[#fefefe] text-3xl lg:text-4xl leading-none" style={{ fontFamily: ANTON }}>$9.00</span>
              <span className="text-[#fefefe]/50 text-sm" style={{ fontFamily: MONO }}>/sub/yr</span>
            </div>
            <p className="text-[#fefefe]/60 text-xs lg:text-sm mt-1" style={{ fontFamily: MONO }}>{T.annual} · <span className="text-[#fefefe]/40">{T.annualNote}</span></p>
          </motion.div>

          {/* ARR ramp chart */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="flex-1 rounded-xl border border-white/10 bg-white/[0.02] p-5 lg:p-6 flex flex-col"
          >
            <p className="text-[#fefefe]/40 text-[11px] lg:text-xs tracking-[0.2em] uppercase mb-4" style={{ fontFamily: MONO }}>{T.rampTitle}</p>

            <div className="flex-1 flex items-end justify-between gap-4 lg:gap-8 min-h-[190px] lg:min-h-[230px]">
              {RAMP.map((r, i) => {
                const pct = Math.max((r.arr / MAX_ARR) * 100, 7);
                const last = i === RAMP.length - 1;
                return (
                  <div key={r.y} className="flex-1 flex flex-col items-center justify-end h-full">
                    <span
                      className={`text-xl lg:text-3xl leading-none mb-2 ${last ? 'text-orange-400' : 'text-[#fefefe]'}`}
                      style={{ fontFamily: ANTON }}
                    >
                      ${r.arr}M
                    </span>
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: `${pct}%` }}
                      transition={{ delay: 0.55 + i * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="w-full rounded-t-md"
                      style={{
                        background: last
                          ? 'linear-gradient(180deg, #f97316 0%, rgba(249,115,22,0.55) 100%)'
                          : 'linear-gradient(180deg, rgba(249,115,22,0.55) 0%, rgba(249,115,22,0.18) 100%)',
                        boxShadow: last ? '0 0 24px rgba(249,115,22,0.35)' : undefined,
                      }}
                    />
                  </div>
                );
              })}
            </div>

            {/* Axis labels */}
            <div className="flex justify-between gap-4 lg:gap-8 mt-3 pt-3 border-t border-white/10">
              {RAMP.map((r) => (
                <div key={r.y} className="flex-1 text-center">
                  <p className="text-[#fefefe] text-sm lg:text-base" style={{ fontFamily: ANTON }}>{r.y}</p>
                  <p className="text-[#fefefe]/50 text-[10px] lg:text-xs mt-0.5" style={{ fontFamily: MONO }}>{r.subs} {T.subsLabel} · {r.pen}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Footnote */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="shrink-0 text-[#fefefe]/45 text-xs lg:text-sm leading-snug"
          style={{ fontFamily: MONO }}
        >
          {T.footnote}
        </motion.p>

      </div>
    </div>
  );
}
