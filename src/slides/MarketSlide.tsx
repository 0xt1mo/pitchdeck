import { motion } from 'framer-motion';

type Card = {
  source: string;
  quote: string;
  author: string;
  bigNumber: string;
  bigSub: string;
  highlight?: boolean;
};

const cards: Card[] = [
  {
    source: 'NVIDIA',
    quote: 'In ten years, we will have 75,000 employees working with 7.5 million agents.',
    author: 'Jensen Huang, Nvidia GTC, March 2026',
    bigNumber: '100:1',
    bigSub: 'agents-to-humans ratio at scale',
  },
  {
    source: 'MCKINSEY',
    quote: 'Agentic commerce will orchestrate $3–5 trillion in global transaction volume by 2030.',
    author: 'McKinsey QuantumBlack, October 2025',
    bigNumber: '$3–5T',
    bigSub: 'in agent transaction volume by 2030',
  },
  {
    source: 'STRIPE',
    quote: 'We will likely need blockchains that support more than one million — or even one billion — transactions per second.',
    author: 'Patrick & John Collison, Stripe, 2026',
    bigNumber: '1B TPS',
    bigSub: 'the infrastructure thesis, validated',
    highlight: true,
  },
];

export function MarketSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col justify-center gap-5 lg:gap-7 px-8 sm:px-12 lg:px-16 py-8 sm:py-10 lg:py-12">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-400 text-[10px] sm:text-xs tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Market Opportunity
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[32px] sm:text-[44px] lg:text-[56px] leading-[0.95] tracking-tight mt-1.5"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            THE INTERNET IS BEING <span className="text-orange-400">REBUILT FOR MACHINES.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-[#fefefe]/85 text-sm sm:text-base lg:text-lg mt-3 max-w-5xl leading-relaxed"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Nvidia is staffing it. McKinsey is modeling it. Stripe is preparing for it.
          </motion.p>
        </div>

        {/* Three citation cards */}
        <div className="grid grid-cols-3 gap-4 lg:gap-5 shrink-0 items-stretch">
          {cards.map((c, i) => (
            <CitationCard key={c.source} card={c} delay={0.4 + i * 0.12} />
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
              className="text-orange-400 text-[10px] sm:text-xs lg:text-sm mt-2 tracking-[0.18em] uppercase font-bold"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              — a16z crypto, February 2026
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

function CitationCard({ card, delay }: { card: Card; delay: number }) {
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
        className="text-orange-400 text-[10px] sm:text-xs tracking-[0.32em] uppercase font-bold"
        style={{ fontFamily: "'Geist Mono', monospace" }}
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
        className="text-[#fefefe]/55 text-[11px] sm:text-xs mt-4 leading-snug"
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
          className={`${card.highlight ? 'text-orange-400' : 'text-[#fefefe]'} text-[40px] sm:text-[52px] lg:text-[64px] leading-[0.9] tracking-tight`}
          style={{ fontFamily: "'Anton', sans-serif" }}
        >
          {card.bigNumber}
        </p>
        <p
          className="text-[#fefefe]/70 text-[11px] sm:text-xs lg:text-sm mt-2 leading-snug"
          style={{ fontFamily: "'Geist Mono', monospace" }}
        >
          {card.bigSub}
        </p>
      </div>
    </motion.div>
  );
}
