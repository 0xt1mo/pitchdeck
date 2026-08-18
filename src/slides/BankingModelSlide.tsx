import { motion } from 'framer-motion';
import { tr } from '../i18n';

const ANTON = "'Anton', sans-serif";
const MONO = "'Geist Mono', monospace";

// Base-case ramp — projected paying customers across the diaspora banking universe.
// Unicity take = $0.75/customer/mo = $9/customer/yr (same commercials as telco).
const RAMP = [
  { y: '2027', cust: '1M', pen: '3%', arr: 9 },
  { y: '2028', cust: '3M', pen: '9%', arr: 27 },
  { y: '2029', cust: '5M', pen: '14%', arr: 45 },
  { y: '2030', cust: '7M', pen: '20%', arr: 63 },
];
const MAX_ARR = 63;

const T = tr({
  en: {
    eyebrow: 'Financial model · Banking (NRI)',
    headLead: 'Every 1M customers =',
    headAccent: '$9M ARR.',
    subtitle:
      'Same commercials as telco — $5/mo · $0.75 to Unicity · $9 per customer a year. A 35M Non-Resident Indian wedge that compounds across the diaspora.',
    uniTitle: 'Addressable universe',
    nriValue: '35M',
    nriLabel: 'Non-Resident Indians',
    addValue: '+13M',
    addLabel: 'adjacent diaspora',
    diaspora: ['Philippines', 'Pakistan', 'Sri Lanka', 'China'],
    totalValue: '~48M',
    totalLabel: 'households — and expanding',
    rampTitle: 'Unicity ARR — base case',
    custLabel: 'customers',
    footnote: 'Ramukaka is the wedge. Every diaspora market added widens the universe — the base case only penetrates the NRI core.',
  },
  pt: {
    eyebrow: 'Modelo financeiro · Bancos (NRI)',
    headLead: 'Cada 1M de clientes =',
    headAccent: '$9M de ARR.',
    subtitle:
      'Mesmos termos comerciais do telecom — $5/mês · $0.75 para a Unicity · $9 por cliente ao ano. Um wedge de 35M de indianos não residentes que se acumula por toda a diáspora.',
    uniTitle: 'Universo endereçável',
    nriValue: '35M',
    nriLabel: 'Indianos não residentes',
    addValue: '+13M',
    addLabel: 'diáspora adjacente',
    diaspora: ['Filipinas', 'Paquistão', 'Sri Lanka', 'China'],
    totalValue: '~48M',
    totalLabel: 'famílias — e crescendo',
    rampTitle: 'ARR da Unicity — cenário base',
    custLabel: 'clientes',
    footnote: 'Ramukaka é o wedge. Cada mercado da diáspora adicionado amplia o universo — o cenário base penetra apenas o núcleo NRI.',
  },
});

export function BankingModelSlide() {
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

      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-8 lg:py-10 gap-6 lg:gap-8">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-orange-400 text-sm lg:text-base tracking-[0.22em] uppercase mb-3"
            style={{ fontFamily: MONO }}
          >
            {T.eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06, duration: 0.6 }}
            className="text-[#fefefe] text-[32px] sm:text-[46px] lg:text-[60px] xl:text-[68px] leading-[0.98] tracking-tight uppercase max-w-6xl"
            style={{ fontFamily: ANTON }}
          >
            {T.headLead} <span className="text-orange-400">{T.headAccent}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-[#fefefe]/75 text-base sm:text-lg lg:text-2xl leading-snug mt-4 max-w-6xl"
            style={{ fontFamily: MONO }}
          >
            {T.subtitle}
          </motion.p>
        </div>

        {/* Body: addressable universe + ARR ramp */}
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-8 items-stretch">

          {/* Addressable universe */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="w-full lg:w-[38%] rounded-xl border border-white/10 bg-white/[0.02] px-6 py-6 lg:px-8 lg:py-7 flex flex-col"
          >
            <p className="text-[#fefefe]/45 text-sm lg:text-base tracking-[0.2em] uppercase mb-5" style={{ fontFamily: MONO }}>{T.uniTitle}</p>

            <div className="flex items-baseline gap-2.5">
              <span className="text-[#fefefe] text-5xl lg:text-6xl leading-none" style={{ fontFamily: ANTON }}>{T.nriValue}</span>
            </div>
            <p className="text-[#fefefe]/60 text-base lg:text-lg mt-1.5" style={{ fontFamily: MONO }}>{T.nriLabel}</p>

            <div className="my-3 text-[#fefefe]/35 text-base lg:text-lg" style={{ fontFamily: MONO }}>+</div>

            <div className="flex items-baseline gap-2.5">
              <span className="text-orange-400 text-5xl lg:text-6xl leading-none" style={{ fontFamily: ANTON }}>{T.addValue}</span>
            </div>
            <p className="text-[#fefefe]/60 text-base lg:text-lg mt-1.5" style={{ fontFamily: MONO }}>{T.addLabel}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {T.diaspora.map((d) => (
                <span key={d} className="rounded-md px-2.5 py-1 text-xs lg:text-sm text-[#fefefe]/70" style={{ fontFamily: MONO, border: '1px solid rgba(255,255,255,0.14)' }}>{d}</span>
              ))}
            </div>

            <div className="my-4 h-px bg-white/10" />

            <div className="flex items-baseline gap-2.5">
              <span className="text-orange-400 text-6xl lg:text-7xl leading-none" style={{ fontFamily: ANTON }}>{T.totalValue}</span>
            </div>
            <p className="text-[#fefefe]/60 text-base lg:text-lg mt-1.5" style={{ fontFamily: MONO }}>{T.totalLabel}</p>
          </motion.div>

          {/* ARR ramp chart */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="flex-1 rounded-xl border border-white/10 bg-white/[0.02] px-6 py-6 lg:px-8 lg:py-7 flex flex-col"
          >
            <p className="text-[#fefefe]/45 text-sm lg:text-base tracking-[0.2em] uppercase mb-5" style={{ fontFamily: MONO }}>{T.rampTitle}</p>

            <div className="flex-1 flex items-end justify-between gap-4 lg:gap-8 min-h-[200px] lg:min-h-[240px]">
              {RAMP.map((r, i) => {
                const pct = Math.max((r.arr / MAX_ARR) * 100, 7);
                const last = i === RAMP.length - 1;
                return (
                  <div key={r.y} className="flex-1 flex flex-col items-center justify-end h-full">
                    <span
                      className={`text-3xl lg:text-5xl leading-none mb-2.5 ${last ? 'text-orange-400' : 'text-[#fefefe]'}`}
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
            <div className="flex justify-between gap-4 lg:gap-8 mt-4 pt-4 border-t border-white/10">
              {RAMP.map((r) => (
                <div key={r.y} className="flex-1 text-center">
                  <p className="text-[#fefefe] text-xl lg:text-3xl leading-none" style={{ fontFamily: ANTON }}>{r.y}</p>
                  <p className="text-[#fefefe]/55 text-sm lg:text-base mt-1.5" style={{ fontFamily: MONO }}>{r.cust} {T.custLabel} · {r.pen}</p>
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
          className="shrink-0 text-[#fefefe]/70 text-base lg:text-lg leading-snug"
          style={{ fontFamily: MONO }}
        >
          {T.footnote}
        </motion.p>

      </div>
    </div>
  );
}
