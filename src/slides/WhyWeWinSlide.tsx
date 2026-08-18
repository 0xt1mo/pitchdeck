import { motion } from 'framer-motion';
import { tr } from '../i18n';

const ANTON = "'Anton', sans-serif";
const MONO = "'Geist Mono', monospace";

type Pillar = { axis: string; claim: string; body: string; vs: string };

const T = tr({
  en: {
    eyebrow: 'Competition · why we win',
    headLead: 'Everyone else bolts onto someone else’s runtime.',
    headAccent: 'We are the runtime.',
    subtitle:
      'So we win on all three axes at once — not one traded off against the others.',
    pillars: [
      {
        axis: 'Security',
        claim: 'Can’t go rogue.',
        body: 'Kernel-enforced policy and an immutable proof of every action — not a prompt asking nicely.',
        vs: 'vs. guardrails that bolt on and break at scale.',
      },
      {
        axis: 'Performance',
        claim: '1000× density.',
        body: 'Thousands of agents per node · 50× faster launch than Docker · milliseconds to first token.',
        vs: 'vs. ~20 hand-tended agents per container box.',
      },
      {
        axis: 'Price',
        claim: '$5 a subscriber.',
        body: 'Multi-tenant economics hit price points no per-container stack can touch.',
        vs: 'vs. an OS’s worth of overhead replicated per agent.',
      },
    ] as Pillar[],
    kickerLead: 'Guardrails are a feature.',
    kickerAccent: 'An OS is a moat.',
  },
  pt: {
    eyebrow: 'Concorrência · por que vencemos',
    headLead: 'Todos os outros se acoplam ao runtime de outra pessoa.',
    headAccent: 'Nós somos o runtime.',
    subtitle:
      'Então vencemos nos três eixos ao mesmo tempo — sem trocar um pelo outro.',
    pillars: [
      {
        axis: 'Segurança',
        claim: 'Não sai do controle.',
        body: 'Política imposta no kernel e uma prova imutável de cada ação — não um prompt pedindo por favor.',
        vs: 'vs. guardrails que se acoplam por fora e quebram em escala.',
      },
      {
        axis: 'Performance',
        claim: '1000× de densidade.',
        body: 'Milhares de agentes por nó · lançamento 50× mais rápido que o Docker · milissegundos até o primeiro token.',
        vs: 'vs. ~20 agentes por caixa de container, um a um.',
      },
      {
        axis: 'Preço',
        claim: '$5 por assinante.',
        body: 'A economia multi-tenant atinge preços que nenhuma stack por container alcança.',
        vs: 'vs. um OS inteiro de overhead replicado por agente.',
      },
    ] as Pillar[],
    kickerLead: 'Guardrails são um recurso.',
    kickerAccent: 'Um OS é um moat.',
  },
});

export function WhyWeWinSlide() {
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
        style={{ background: 'radial-gradient(ellipse 60% 55% at 50% 42%, rgba(249,115,22,0.10) 0%, transparent 70%)' }}
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
            className="text-[28px] sm:text-[40px] lg:text-[54px] xl:text-[62px] leading-[0.98] tracking-tight uppercase max-w-6xl"
            style={{ fontFamily: ANTON }}
          >
            <span className="text-[#fefefe]">{T.headLead}</span> <span className="text-orange-400">{T.headAccent}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-[#fefefe]/75 text-base sm:text-lg lg:text-xl leading-snug mt-4 max-w-5xl"
            style={{ fontFamily: MONO }}
          >
            {T.subtitle}
          </motion.p>
        </div>

        {/* Three pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5 shrink-0">
          {T.pillars.map((p, i) => (
            <motion.div
              key={p.axis}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
              className="rounded-2xl border border-white/12 bg-white/[0.02] border-t-[3px] border-t-orange-500 p-6 lg:p-7 flex flex-col"
            >
              <p className="text-orange-400 text-sm lg:text-base tracking-[0.2em] uppercase" style={{ fontFamily: MONO }}>{p.axis}</p>
              <p className="text-[#fefefe] text-3xl lg:text-5xl uppercase leading-none mt-3" style={{ fontFamily: ANTON }}>{p.claim}</p>
              <p className="text-[#fefefe]/75 text-base lg:text-lg leading-snug mt-4 flex-1" style={{ fontFamily: MONO }}>{p.body}</p>
              <p className="text-[#fefefe]/45 text-sm lg:text-base leading-snug mt-4 pt-4" style={{ fontFamily: MONO, borderTop: '1px solid rgba(255,255,255,0.10)' }}>{p.vs}</p>
            </motion.div>
          ))}
        </div>

        {/* Kicker */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.5 }}
          className="shrink-0 text-2xl sm:text-3xl lg:text-[40px] leading-tight uppercase"
          style={{ fontFamily: ANTON }}
        >
          <span className="text-[#fefefe]/60">{T.kickerLead}</span> <span className="text-orange-400">{T.kickerAccent}</span>
        </motion.p>

      </div>
    </div>
  );
}
