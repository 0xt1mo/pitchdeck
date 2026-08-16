import { motion } from 'framer-motion';
import { tr } from '../i18n';

const ANTON = "'Anton', sans-serif";
const MONO = "'Geist Mono', monospace";

const T = tr({
  en: {
    eyebrow: 'Go-to-market · our clients',
    head1: 'Agents',
    head2: 'cannot go rogue.',
    clientsLabel: 'Our clients are the institutions that can’t afford one that does',
    clients: ['Governments', 'Banks', 'Telcos', 'Healthcare', 'Military'],
    kicker: (
      <>
        We sell the platform that lets them run agents at scale on behalf of their citizens, subscribers, patients and users — <span className="text-orange-400">with safety guarantees.</span>
      </>
    ),
  },
  pt: {
    eyebrow: 'Go-to-market · nossos clientes',
    head1: 'Agentes',
    head2: 'não saem do controle.',
    clientsLabel: 'Nossos clientes são as instituições que não podem se dar ao luxo de um que saia',
    clients: ['Governos', 'Bancos', 'Telecoms', 'Saúde', 'Defesa'],
    kicker: (
      <>
        Vendemos a plataforma que permite rodar agentes em escala em nome de seus cidadãos, assinantes, pacientes e usuários — <span className="text-orange-400">com garantias de segurança.</span>
      </>
    ),
  },
});

export function GtmModelSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 42%, rgba(249,115,22,0.12) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-20 gap-10 lg:gap-14">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="shrink-0 tracking-[0.28em] uppercase text-sm lg:text-base"
          style={{ fontFamily: MONO, color: '#fb923c' }}
        >
          {T.eyebrow}
        </motion.p>

        {/* Big gold headline */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="shrink-0 text-[56px] sm:text-[92px] lg:text-[132px] xl:text-[152px] leading-[0.9] tracking-tight uppercase"
          style={{ fontFamily: ANTON }}
        >
          <span className="text-[#fefefe] block">{T.head1}</span>
          <span className="block text-orange-400">
            {T.head2}
          </span>
        </motion.h1>

        {/* Clients */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-[#fefefe]/55 text-sm lg:text-lg tracking-[0.12em] uppercase mb-5"
            style={{ fontFamily: MONO }}
          >
            {T.clientsLabel}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-wrap items-center gap-x-4 gap-y-3"
          >
            {T.clients.map((c) => (
              <span
                key={c}
                className="text-[#fefefe] text-3xl sm:text-4xl lg:text-6xl uppercase leading-none"
                style={{ fontFamily: ANTON }}
              >
                {c}
                <span className="text-orange-400/60">.</span>
              </span>
            ))}
          </motion.div>
        </div>

        {/* Kicker */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75, duration: 0.5 }}
          className="shrink-0 text-lg sm:text-2xl lg:text-3xl leading-snug text-[#fefefe]"
          style={{ fontFamily: MONO }}
        >
          {T.kicker}
        </motion.p>

      </div>
    </div>
  );
}
