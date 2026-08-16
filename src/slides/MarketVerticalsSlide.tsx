import { motion } from 'framer-motion';
import { tr } from '../i18n';

const ANTON = "'Anton', sans-serif";
const MONO = "'Geist Mono', monospace";

// Illustrative addressable market per vertical ($B/yr) — agentic AI + personal agents.
type Vertical = { name: string; users: string; tam: number };

const T = tr({
  en: {
    eyebrow: 'Go-to-market · the opportunity',
    headLead: 'One platform.',
    headAccent: 'Every vertical.',
    subtitle:
      'Every business with customers is a buyer — and every one of their customers a personal-agent user. The addressable market compounds vertical by vertical.',
    verticals: [
      { name: 'Financial services', users: '4B+ accounts', tam: 180 },
      { name: 'Healthcare', users: 'billions of patients', tam: 140 },
      { name: 'Telecom', users: '5B+ subscribers', tam: 120 },
      { name: 'Government', users: 'every citizen', tam: 80 },
      { name: 'Robotics', users: 'the agent fleet', tam: 60 },
    ] as Vertical[],
    unit: 'addressable / yr',
    foot: '+ retail · insurance · defense · education — every vertical runs agents, and every one has customers.',
  },
  pt: {
    eyebrow: 'Go-to-market · a oportunidade',
    headLead: 'Uma plataforma.',
    headAccent: 'Cada vertical.',
    subtitle:
      'Toda empresa com clientes é um comprador — e cada cliente é um usuário de agente pessoal. O mercado endereçável se acumula vertical a vertical.',
    verticals: [
      { name: 'Serviços financeiros', users: '4B+ contas', tam: 180 },
      { name: 'Saúde', users: 'bilhões de pacientes', tam: 140 },
      { name: 'Telecom', users: '5B+ assinantes', tam: 120 },
      { name: 'Governo', users: 'cada cidadão', tam: 80 },
      { name: 'Robótica', users: 'a frota de agentes', tam: 60 },
    ] as Vertical[],
    unit: 'endereçável / ano',
    foot: '+ varejo · seguros · defesa · educação — toda vertical roda agentes, e todas têm clientes.',
  },
});

const MAX_TAM = 180;

export function MarketVerticalsSlide() {
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
        style={{ background: 'radial-gradient(ellipse 60% 55% at 40% 50%, rgba(249,115,22,0.10) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-8 lg:py-10 gap-6 lg:gap-8">

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
            className="text-[30px] sm:text-[44px] lg:text-[58px] xl:text-[66px] leading-[0.98] tracking-tight uppercase"
            style={{ fontFamily: ANTON }}
          >
            <span className="text-[#fefefe]">{T.headLead}</span> <span className="text-orange-400">{T.headAccent}</span>
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

        {/* Bar chart */}
        <div className="flex flex-col gap-3 lg:gap-4">
          {T.verticals.map((v, i) => {
            const pct = (v.tam / MAX_TAM) * 100;
            return (
              <div key={v.name} className="flex items-center gap-4 lg:gap-6">
                {/* label */}
                <div className="w-40 lg:w-64 shrink-0 text-right">
                  <p className="text-[#fefefe] text-base lg:text-2xl uppercase leading-none" style={{ fontFamily: ANTON }}>{v.name}</p>
                  <p className="text-[#fefefe]/40 text-[10px] lg:text-xs mt-1" style={{ fontFamily: MONO }}>{v.users}</p>
                </div>
                {/* bar */}
                <div className="flex-1 h-9 lg:h-12 rounded-md bg-white/[0.04] overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${pct}%` }}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full rounded-md"
                    style={{ background: 'linear-gradient(90deg, rgba(249,115,22,0.35) 0%, #f97316 100%)', boxShadow: '0 0 24px rgba(249,115,22,0.25)' }}
                  />
                </div>
                {/* value */}
                <div className="w-20 lg:w-28 shrink-0 text-right">
                  <p className="text-orange-400 text-xl lg:text-3xl leading-none" style={{ fontFamily: ANTON }}>${v.tam}B</p>
                </div>
              </div>
            );
          })}
          <p className="text-[#fefefe]/35 text-[10px] lg:text-xs tracking-[0.12em] uppercase text-right pr-1" style={{ fontFamily: MONO }}>{T.unit}</p>
        </div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.95, duration: 0.5 }}
          className="shrink-0 text-[#fefefe]/55 text-sm lg:text-lg leading-snug pt-3"
          style={{ fontFamily: MONO, borderTop: '1px solid rgba(255,255,255,0.10)' }}
        >
          {T.foot}
        </motion.p>

      </div>
    </div>
  );
}
