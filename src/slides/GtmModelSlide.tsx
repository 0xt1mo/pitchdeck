import { motion } from 'framer-motion';
import { tr } from '../i18n';

const ANTON = "'Anton', sans-serif";
const MONO = "'Geist Mono', monospace";

type Pair = { client: string; user: string };

const T = tr({
  en: {
    eyebrow: 'Go-to-market · our clients',
    head1: 'Agents',
    head2: 'cannot go rogue.',
    clientsLabel: 'Our clients — and the end users they reach',
    pairs: [
      { client: 'Governments', user: 'Citizens' },
      { client: 'Telecom operators', user: 'Subscribers' },
      { client: 'Healthcare providers', user: 'Patients' },
      { client: 'Banks', user: 'Customers' },
    ] as Pair[],
    kicker: (
      <>
        Our platform lets our clients run agent fleets <span className="text-orange-400">safely and securely</span> — at a price point that lets them offer an <span className="text-orange-400">agentic experience</span> to their end users.
      </>
    ),
  },
  pt: {
    eyebrow: 'Go-to-market · nossos clientes',
    head1: 'Agentes',
    head2: 'não saem do controle.',
    clientsLabel: 'Nossos clientes — e os usuários finais que eles alcançam',
    pairs: [
      { client: 'Governos', user: 'Cidadãos' },
      { client: 'Operadoras de telecom', user: 'Assinantes' },
      { client: 'Provedores de saúde', user: 'Pacientes' },
      { client: 'Bancos', user: 'Clientes' },
    ] as Pair[],
    kicker: (
      <>
        Nossa plataforma permite que nossos clientes rodem frotas de agentes <span className="text-orange-400">com segurança</span> — a um preço que lhes permite oferecer uma <span className="text-orange-400">experiência agêntica</span> aos seus usuários finais.
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
            className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 lg:gap-x-16 gap-y-4 lg:gap-y-5"
          >
            {T.pairs.map((p) => (
              <div key={p.client} className="flex items-baseline gap-3 lg:gap-4">
                <span className="text-[#fefefe] text-2xl sm:text-3xl lg:text-4xl uppercase leading-none" style={{ fontFamily: ANTON }}>
                  {p.client}
                </span>
                <span className="text-[#fefefe]/30 text-xl lg:text-3xl leading-none shrink-0" style={{ fontFamily: ANTON }}>→</span>
                <span className="text-orange-400 text-2xl sm:text-3xl lg:text-4xl uppercase leading-none" style={{ fontFamily: ANTON }}>
                  {p.user}
                </span>
              </div>
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
