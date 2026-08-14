import { motion } from 'framer-motion';
import { tr } from '../i18n';

const display = "'Anton', sans-serif";
const MONO = "'Geist Mono', monospace";

const LAUNCH_VIDEO = 'https://www.youtube.com/watch?v=mXnQT5UL9kk';

const OPERATORS = [
  'airtel-africa.svg',
  'mtn.svg',
  'vodafone-qatar.svg',
  'stc.svg',
  'ooredoo.svg',
  'zain.svg',
  'eand.svg',
  'omantel.svg',
  'turkcell.svg',
  'vi.svg',
  'bsnl.png',
];

const T = tr({
  en: {
    headLead: 'TELCO:',
    headAccent: 'A PERSONAL AGENT FOR HIGH ARPU SUBSCRIBERS.',
    subtitle:
      "It books, pays and calls on the subscriber's behalf — on the operator's billing, identity and voice, running on their own infrastructure.",
    reach: ['11 operators', '70+ countries', '>1B subscribers addressable'],
    price: '$5/mo',
    priceNote: 'per subscriber — a price point only a multi-tenant OS makes possible.',
    watch: 'Watch the launch film',
    pipeline: 'Pipeline',
  },
  pt: {
    headLead: 'TELCO:',
    headAccent: 'UM AGENTE PESSOAL PARA ASSINANTES DE ALTO ARPU.',
    subtitle:
      'Ele reserva, paga e liga em nome do assinante — no faturamento, identidade e voz da operadora, rodando na infraestrutura dela.',
    reach: ['11 operadoras', '70+ países', '>1B assinantes endereçáveis'],
    price: '$5/mês',
    priceNote: 'por assinante — um preço que só um OS multi-tenant torna possível.',
    watch: 'Ver o filme de lançamento',
    pipeline: 'Pipeline',
  },
});

/**
 * Telecom concierge slide — three phone screenshots in a fan, reach + unit-economics
 * proof, an operator logo wall, and a launch-film link.
 */
export function ConciergeSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">

      {/* Subtle dotted background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '34px 34px',
        }}
      />

      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-6 lg:py-8 gap-4 lg:gap-5">

        {/* Header */}
        <div className="shrink-0">
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[26px] sm:text-[38px] lg:text-[52px] xl:text-[58px] leading-[0.95] tracking-tight uppercase"
            style={{ fontFamily: display }}
          >
            {T.headLead}{' '}
            <span className="text-orange-400">{T.headAccent}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-[#fefefe]/75 text-sm sm:text-base lg:text-lg leading-snug mt-2.5 max-w-4xl"
            style={{ fontFamily: MONO }}
          >
            {T.subtitle}
          </motion.p>
        </div>

        {/* Product (left) + launch film (right) */}
        <div className="shrink-0 flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12">
          {/* Phone */}
          <motion.img
            src="/concierge/Concierge1.png"
            alt="Subscriber concierge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="h-[26vh] lg:h-[40vh] w-auto shrink-0"
            style={{ filter: 'drop-shadow(0 30px 70px rgba(0,0,0,0.8))', borderRadius: '22px' }}
          />

          {/* Launch film */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="relative rounded-xl overflow-hidden border border-white/10 shrink-0 w-[46vw] max-w-[560px]"
            style={{ aspectRatio: '16 / 9', boxShadow: '0 30px 80px rgba(0,0,0,0.6)' }}
          >
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/mXnQT5UL9kk?rel=0&modestbranding=1"
              title="Concierge launch film"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </motion.div>
        </div>

        {/* Reach + price + launch film */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="shrink-0 flex flex-wrap items-center justify-between gap-x-8 gap-y-3 pt-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.10)' }}
        >
          {/* Reach stats */}
          <div className="flex items-center gap-3 lg:gap-4 flex-wrap">
            {T.reach.map((r, i) => (
              <div key={r} className="flex items-center gap-3 lg:gap-4">
                {i > 0 && <span className="text-orange-500/70 text-sm">•</span>}
                <span className="text-[#fefefe] text-sm lg:text-base tracking-wide" style={{ fontFamily: MONO }}>{r}</span>
              </div>
            ))}
          </div>

          {/* Price callout */}
          <div className="flex items-baseline gap-3">
            <span className="text-orange-400 text-3xl lg:text-5xl leading-none" style={{ fontFamily: display }}>{T.price}</span>
            <span className="text-[#fefefe]/55 text-xs lg:text-sm max-w-xs leading-snug" style={{ fontFamily: MONO }}>{T.priceNote}</span>
          </div>

          {/* Launch film */}
          <a
            href={LAUNCH_VIDEO}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 rounded-full px-4 py-2 lg:px-5 lg:py-2.5 border border-orange-500/50 hover:border-orange-400 hover:bg-orange-500/10 transition-colors"
            style={{ fontFamily: MONO }}
          >
            <span className="flex items-center justify-center h-5 w-5 rounded-full bg-orange-500 text-[#060606] text-[10px]">▶</span>
            <span className="text-[#fefefe] text-xs lg:text-sm tracking-wide uppercase">{T.watch}</span>
          </a>
        </motion.div>

        {/* Operator logo wall */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="shrink-0 flex flex-wrap items-center justify-center gap-x-6 lg:gap-x-8 gap-y-3"
        >
          <span
            className="text-orange-400/80 text-[10px] lg:text-xs tracking-[0.28em] uppercase pr-1"
            style={{ fontFamily: MONO }}
          >
            {T.pipeline}
          </span>
          <span className="h-4 w-px bg-white/15" />
          {OPERATORS.map((f) => (
            <img
              key={f}
              src={`/logos/telcos/${f}`}
              alt=""
              className="h-5 lg:h-6 w-auto object-contain opacity-70"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          ))}
        </motion.div>

      </div>
    </div>
  );
}
