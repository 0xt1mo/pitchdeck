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
    source: 'GARTNER',
    quote: 'By 2028, the average Fortune 500 will run 150,000+ AI agents, up from fewer than 15 today. Only 13% have adequate governance.',
    author: 'Max Goss, Gartner, April 2026',
    bigNumber: '10,000×',
    bigSub: 'agent growth in 3 years · 87% ungoverned',
    highlight: true,
  },
  {
    source: 'MCKINSEY',
    quote: 'Generative and agentic AI could add up to $4.4 trillion in annual productivity value across the global economy — much of it consumed at the edge.',
    author: 'McKinsey Global Institute, 2025',
    bigNumber: '$4.4T',
    bigSub: 'annual value at stake · landing on subscriber lines',
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
            className="text-[#fefefe] text-[40px] sm:text-[60px] lg:text-[88px] xl:text-[104px] leading-[0.95] tracking-tight uppercase mt-2"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            AND IT'S{' '}
            <span className="text-orange-400">A TRILLION-DOLLAR LAYER.</span>
          </motion.h1>
        </div>

        {/* Three citation cards */}
        <div className="grid grid-cols-3 gap-4 lg:gap-5 shrink-0 items-stretch">
          {cards.map((c, i) => (
            <CitationCard key={c.source} card={c} delay={0.4 + i * 0.12} />
          ))}
        </div>

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
          className={`${card.highlight ? 'text-orange-400' : 'text-[#fefefe]'} text-[40px] sm:text-[52px] lg:text-[64px] tracking-tight leading-[0.9]`}
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
