import { motion } from 'framer-motion';
import { tr } from '../i18n';

type Card = {
  source: string;
  quote: string;
  author: string;
  bigNumber: string;
  highlight?: boolean;
};

// Brand sources and attributed quotes stay identical across languages.
const cards: Card[] = [
  {
    source: 'NVIDIA',
    quote: 'In ten years, we will have 75,000 employees working with 7.5 million agents.',
    author: 'Jensen Huang, Nvidia GTC, March 2026',
    bigNumber: '100:1',
  },
  {
    source: 'GARTNER',
    quote: 'By 2028, the average Fortune 500 will run 150,000+ AI agents, up from fewer than 15 today. Only 13% have adequate governance.',
    author: 'Max Goss, Gartner, April 2026',
    bigNumber: '10,000×',
    highlight: true,
  },
  {
    source: 'STRIPE',
    quote: 'We will likely need blockchains that support more than one million — or even one billion — transactions per second.',
    author: 'Patrick & John Collison, Stripe, 2026',
    bigNumber: '1B TPS',
  },
];

// Only these strings swap by language — layout below is shared.
const T = tr({
  en: {
    headLead: 'MARKET OPPORTUNITY:',
    headAccent: 'A TRILLION-DOLLAR REBUILD.',
    bigSubs: [
      'agents-to-humans ratio at scale',
      'agent growth in 3 years · 87% ungoverned',
      'the infrastructure thesis, validated',
    ],
  },
  pt: {
    headLead: 'OPORTUNIDADE DE MERCADO:',
    headAccent: 'UMA RECONSTRUÇÃO DE TRILHÕES DE DÓLARES.',
    bigSubs: [
      'proporção de agentes para humanos em escala',
      'crescimento de agentes em 3 anos · 87% sem governança',
      'a tese de infraestrutura, validada',
    ],
  },
});

export function MarketBlockchainSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col justify-center gap-5 lg:gap-7 px-8 sm:px-12 lg:px-16 py-8 sm:py-10 lg:py-12">

        {/* Header */}
        <div className="shrink-0">
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[32px] sm:text-[44px] lg:text-[56px] leading-[0.95] tracking-tight"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            {T.headLead}{' '}
            <span className="text-orange-400">{T.headAccent}</span>
          </motion.h1>
        </div>

        {/* Three citation cards */}
        <div className="grid grid-cols-3 gap-4 lg:gap-5 shrink-0 items-stretch">
          {cards.map((c, i) => (
            <CitationCard key={c.source} card={c} bigSub={T.bigSubs[i]} delay={0.4 + i * 0.12} />
          ))}
        </div>

        {/* a16z pull-quote */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.5 }}
          className="shrink-0 rounded-xl px-5 sm:px-6 lg:px-8 py-3 lg:py-4 flex items-start gap-4 lg:gap-5"
          style={{
            border: '1px solid rgba(249,115,22,0.5)',
            background: 'rgba(249,115,22,0.06)',
          }}
        >
          <span
            className="text-orange-400 text-[48px] sm:text-[64px] lg:text-[80px] leading-[0.7] shrink-0 -mt-1"
            style={{ fontFamily: "'Anton', sans-serif" }}
            aria-hidden="true"
          >
            "
          </span>
          <div className="flex-1">
            <p
              className="text-[#fefefe] text-sm sm:text-base lg:text-lg leading-snug"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              If we want an internet where AI agents can operate without destroying trust,{' '}
              <span className="text-orange-400">blockchains are not optional infrastructure</span>. They are the missing layer that makes an AI-native internet work.
            </p>
            <p
              className="text-orange-400 text-[20px] sm:text-[26px] lg:text-[32px] mt-3 tracking-tight uppercase leading-none"
              style={{ fontFamily: "'Anton', sans-serif" }}
            >
              — a16z, February 2026
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

function CitationCard({ card, bigSub, delay }: { card: Card; bigSub: string; delay: number }) {
  const border = card.highlight
    ? '1px solid rgba(249,115,22,0.65)'
    : '1px solid rgba(255,255,255,0.10)';
  const background = card.highlight
    ? 'linear-gradient(180deg, rgba(249,115,22,0.06) 0%, rgba(10,10,15,0.6) 100%)'
    : '#0a0a0f';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      className="rounded-xl flex flex-col p-5 lg:p-6"
      style={{ border, background }}
    >
      {/* Source */}
      <p
        className="text-orange-400 text-[22px] sm:text-[28px] lg:text-[36px] leading-none tracking-tight uppercase"
        style={{ fontFamily: "'Anton', sans-serif" }}
      >
        {card.source}
      </p>

      {/* Quote */}
      <p
        className="text-[#fefefe]/95 text-sm sm:text-base lg:text-lg italic leading-snug mt-4 lg:mt-5"
        style={{ fontFamily: "'Geist Mono', monospace" }}
      >
        "{card.quote}"
      </p>

      {/* Author */}
      <p
        className="text-[#fefefe]/55 text-xs sm:text-sm mt-4 leading-snug"
        style={{ fontFamily: "'Geist Mono', monospace" }}
      >
        — {card.author}
      </p>

      {/* Divider */}
      <div
        className="mt-5 lg:mt-6"
        style={{
          borderTop: card.highlight
            ? '1px solid rgba(249,115,22,0.65)'
            : '1px solid rgba(255,255,255,0.10)',
        }}
      />

      {/* Big number */}
      <div className="mt-4 lg:mt-5 flex-1 flex flex-col justify-end">
        <p
          className={`${card.highlight ? 'text-orange-400' : 'text-[#fefefe]'} text-[40px] sm:text-[52px] lg:text-[64px] tracking-tight leading-[0.9]`}
          style={{ fontFamily: "'Anton', sans-serif" }}
        >
          {card.bigNumber}
        </p>
        <p
          className="text-[#fefefe]/70 text-xs lg:text-sm mt-2 leading-snug"
          style={{ fontFamily: "'Geist Mono', monospace" }}
        >
          {bigSub}
        </p>
      </div>
    </motion.div>
  );
}
