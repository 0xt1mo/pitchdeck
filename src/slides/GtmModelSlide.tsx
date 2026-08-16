import { motion } from 'framer-motion';
import { tr } from '../i18n';

const ANTON = "'Anton', sans-serif";
const MONO = "'Geist Mono', monospace";

type Panel = { num: string; title: string; line: string; tags: string[]; hot: boolean };

const T = tr({
  en: {
    eyebrow: 'Go-to-market · our customers',
    headLead: 'The breach that hit OpenAI',
    headAccent: "couldn't happen here.",
    subtitle: (
      <>
        Our customers are the institutions that <span className="text-[#fefefe] font-bold">can't get it wrong</span> — they run agents on AOS for a guarantee no one else can give, and hand a personal agent to every customer they serve.
      </>
    ),
    customersLabel: 'Who we sell to',
    customers: ['Governments', 'Banks', 'Telcos', 'Healthcare', 'Military'],
    panels: [
      {
        num: 'i',
        title: 'Agents that can’t go rogue',
        line: 'Deploy fleets of agents with a cryptographic guarantee: no exfiltration, no unauthorized action, every step signed.',
        tags: ['Kernel-enforced bounds', 'Verifiable execution', 'Immutable audit'],
        hot: false,
      },
      {
        num: 'ii',
        title: 'A personal agent for every customer',
        line: 'Give each citizen, subscriber or account-holder their own agent — a daily touchpoint the institution never had.',
        tags: ['New touchpoint', 'Better experience', 'New ARPU'],
        hot: true,
      },
    ] as Panel[],
    kickerA: 'We sell the guarantee.',
    kickerB: 'They sell the experience.',
  },
  pt: {
    eyebrow: 'Go-to-market · nossos clientes',
    headLead: 'A brecha que atingiu a OpenAI',
    headAccent: 'não aconteceria aqui.',
    subtitle: (
      <>
        Nossos clientes são as instituições que <span className="text-[#fefefe] font-bold">não podem errar</span> — rodam agentes no AOS por uma garantia que ninguém mais dá, e entregam um agente pessoal a cada cliente que atendem.
      </>
    ),
    customersLabel: 'Para quem vendemos',
    customers: ['Governos', 'Bancos', 'Telecoms', 'Saúde', 'Defesa'],
    panels: [
      {
        num: 'i',
        title: 'Agentes que não saem do controle',
        line: 'Implante frotas de agentes com uma garantia criptográfica: sem exfiltração, sem ação não autorizada, cada passo assinado.',
        tags: ['Limites no kernel', 'Execução verificável', 'Auditoria imutável'],
        hot: false,
      },
      {
        num: 'ii',
        title: 'Um agente pessoal para cada cliente',
        line: 'Dê a cada cidadão, assinante ou correntista o seu próprio agente — um ponto de contato diário que a instituição nunca teve.',
        tags: ['Novo ponto de contato', 'Melhor experiência', 'Novo ARPU'],
        hot: true,
      },
    ] as Panel[],
    kickerA: 'Nós vendemos a garantia.',
    kickerB: 'Eles vendem a experiência.',
  },
});

export function GtmModelSlide() {
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
        style={{ background: 'radial-gradient(ellipse 60% 55% at 50% 44%, rgba(249,115,22,0.09) 0%, transparent 70%)' }}
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
            className="text-[30px] sm:text-[44px] lg:text-[58px] xl:text-[68px] leading-[0.96] tracking-tight uppercase max-w-6xl"
            style={{ fontFamily: ANTON }}
          >
            <span className="text-[#fefefe]">{T.headLead}</span> <span className="text-orange-400">{T.headAccent}</span>
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

        {/* Customer strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="shrink-0 flex flex-wrap items-center gap-x-3 gap-y-2.5"
        >
          <span className="text-[#fefefe]/40 text-[11px] lg:text-sm tracking-[0.2em] uppercase mr-1" style={{ fontFamily: MONO }}>{T.customersLabel}</span>
          {T.customers.map((c) => (
            <span
              key={c}
              className="rounded-full border border-white/15 bg-white/[0.03] text-[#fefefe] px-4 py-1.5 text-base lg:text-2xl uppercase leading-none"
              style={{ fontFamily: ANTON }}
            >
              {c}
            </span>
          ))}
        </motion.div>

        {/* Two payoff panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 shrink-0">
          {T.panels.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 + i * 0.12, duration: 0.5 }}
              className="rounded-2xl p-6 lg:p-7 flex flex-col"
              style={
                p.hot
                  ? { border: '1px solid rgba(249,115,22,0.45)', background: 'rgba(249,115,22,0.06)', boxShadow: '0 0 30px rgba(249,115,22,0.12)' }
                  : { border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.02)' }
              }
            >
              <div className="flex items-baseline gap-3">
                <span className={`text-3xl lg:text-5xl leading-none ${p.hot ? 'text-orange-400' : 'text-[#fefefe]/35'}`} style={{ fontFamily: ANTON }}>{p.num}</span>
                <span className={`text-2xl lg:text-4xl uppercase leading-none ${p.hot ? 'text-orange-400' : 'text-[#fefefe]'}`} style={{ fontFamily: ANTON }}>{p.title}</span>
              </div>
              <p className="text-[#fefefe]/75 text-base lg:text-lg leading-snug mt-4" style={{ fontFamily: MONO }}>{p.line}</p>
              <div className="flex flex-wrap gap-2 mt-5">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`rounded-md px-3 py-1.5 text-xs lg:text-sm ${p.hot ? 'text-orange-300' : 'text-[#fefefe]/60'}`}
                    style={{ fontFamily: MONO, border: p.hot ? '1px solid rgba(249,115,22,0.35)' : '1px solid rgba(255,255,255,0.14)', background: p.hot ? 'rgba(249,115,22,0.06)' : 'rgba(255,255,255,0.02)' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Kicker */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="shrink-0 text-2xl sm:text-3xl lg:text-[38px] leading-tight uppercase"
          style={{ fontFamily: ANTON }}
        >
          <span className="text-[#fefefe]/60">{T.kickerA}</span> <span className="text-orange-400">{T.kickerB}</span>
        </motion.p>

      </div>
    </div>
  );
}
