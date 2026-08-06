import { motion } from 'framer-motion';

type Card = {
  n: string;
  title: string;
  bodyPre: string;
  highlight: string;
  bodyPost: string;
};

const cards: Card[] = [
  {
    n: '01',
    title: 'PRODUCT, NOT CHAIN.',
    bodyPre:
      'Solana, Kite, NEAR are public chains with AI tooling layered on top.',
    highlight: 'Unicity is a secure agentic compute platform with the chain used as the underlying proof system.',
    bodyPost: '',
  },
  {
    n: '02',
    title: 'PRIVATE BY DEFAULT.',
    bodyPre:
      'Regulated enterprise has spent 15 years converging on private state. Canton proved the model in finance.',
    highlight: 'We built it for agents.',
    bodyPost: '',
  },
];

export function CompetitiveLandscapeSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-7 sm:py-9 lg:py-11 justify-center gap-5 lg:gap-7">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-orange-400 text-xs sm:text-sm lg:text-base tracking-[0.4em] uppercase font-bold shrink-0"
          style={{ fontFamily: "'Geist Mono', monospace" }}
        >
          Competition
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-[36px] sm:text-[56px] lg:text-[80px] xl:text-[92px] leading-[0.95] tracking-tight uppercase shrink-0 -mt-2"
          style={{ fontFamily: "'Anton', sans-serif" }}
        >
          <span className="text-[#fefefe]">WE'RE BETTING ON A</span>{' '}
          <span className="text-orange-400">DIFFERENT ARCHITECTURE.</span>
        </motion.h1>

        {/* Two bordered cards */}
        <div className="grid grid-cols-2 gap-6 lg:gap-10 shrink-0">
          {cards.map((c, i) => (
            <motion.div
              key={c.n}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 + i * 0.12, duration: 0.5 }}
              className="flex flex-col gap-3 lg:gap-4 rounded-lg p-6 lg:p-8"
              style={{
                background: 'rgba(249,115,22,0.03)',
                border: '1px solid rgba(249,115,22,0.45)',
              }}
            >
              <h3
                className="text-[#fefefe] text-[22px] sm:text-[30px] lg:text-[38px] leading-[1.0] tracking-tight uppercase"
                style={{ fontFamily: "'Anton', sans-serif" }}
              >
                {c.title}
              </h3>
              <p
                className="text-base sm:text-lg lg:text-xl leading-snug"
                style={{ fontFamily: "'Geist Mono', monospace" }}
              >
                <span className="text-[#fefefe]/85">{c.bodyPre}</span>
              </p>
              <p
                className="text-base sm:text-lg lg:text-xl leading-snug"
                style={{ fontFamily: "'Geist Mono', monospace" }}
              >
                <span className="text-orange-400 font-bold">{c.highlight}</span>{' '}
                <span className="text-[#fefefe]/85">{c.bodyPost}</span>
              </p>
            </motion.div>
          ))}
        </div>

        {/* Our Bet closing line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.5 }}
          className="text-base sm:text-lg lg:text-[22px] leading-snug shrink-0 pt-4 lg:pt-5"
          style={{
            fontFamily: "'Geist Mono', monospace",
            borderTop: '1px solid rgba(255,255,255,0.12)',
          }}
        >
          <span className="text-[#fefefe]/55 tracking-[0.3em] uppercase font-bold mr-3">
            Our bet —
          </span>
          <span className="text-[#fefefe]">Private state and a product-led integration</span>{' '}
          <span className="text-orange-400">unlock adoption at scale.</span>
        </motion.p>

      </div>
    </div>
  );
}
