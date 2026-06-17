import { motion } from 'framer-motion';

type Generation = {
  year: string;
  name: string;
  summary: string;
  detail: string;
  highlight?: boolean;
};

const generations: Generation[] = [
  {
    year: '2009',
    name: 'BITCOIN',
    summary: 'Correctness + global ordering.',
    detail: 'Every node certifies every transaction. Every node agrees on order.',
  },
  {
    year: '2023',
    name: 'SUI / FASTPAY',
    summary: 'Correctness only.',
    detail: 'Validators certify correctness. Ordering removed.',
  },
  {
    year: '2026',
    name: 'UNICITY',
    summary: 'Uniqueness only.',
    detail: 'The network attests one thing: has this token been spent? Correctness moves to the edge.',
    highlight: true,
  },
];

export function CompetitionSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-6 sm:py-8 lg:py-10 justify-center gap-4 lg:gap-5">

        {/* Header */}
        <div className="shrink-0">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[28px] sm:text-[40px] lg:text-[52px] xl:text-[60px] leading-[0.95] tracking-tight uppercase shrink-0 mt-1"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            <span className="text-[#fefefe]">THE INEVITABLE UNBUNDLING OF</span>{' '}
            <span className="text-orange-400">BLOCKCHAIN.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-[#fefefe]/90 text-base sm:text-lg lg:text-xl leading-snug shrink-0 max-w-6xl mt-2"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Each generation of consensus removed work from the network.{' '}
            <span className="text-orange-400">We took the unbundling to its logical conclusion.</span>
          </motion.p>
        </div>

        {/* Three-column generation comparison */}
        <div
          className="grid grid-cols-3 shrink-0"
          style={{
            borderTop: '1px solid rgba(249,115,22,0.4)',
            borderBottom: '1px solid rgba(249,115,22,0.4)',
          }}
        >
          {generations.map((g, i) => (
            <motion.div
              key={g.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 + i * 0.1, duration: 0.5 }}
              className="flex flex-col gap-2 lg:gap-3 px-5 lg:px-7 py-6 lg:py-9"
              style={{
                borderLeft: i > 0 ? '1px solid rgba(249,115,22,0.15)' : 'none',
              }}
            >
              <p
                className={`text-sm sm:text-base lg:text-lg tracking-[0.18em] ${
                  g.highlight ? 'text-orange-400' : 'text-[#fefefe]/50'
                }`}
                style={{ fontFamily: "'Geist Mono', monospace" }}
              >
                {g.year}
              </p>
              <h3
                className={`text-[28px] sm:text-[36px] lg:text-[46px] leading-none tracking-tight uppercase ${
                  g.highlight ? 'text-orange-400' : 'text-[#fefefe]/55'
                }`}
                style={{ fontFamily: "'Anton', sans-serif" }}
              >
                {g.name}
              </h3>
              <p
                className={`text-base sm:text-lg lg:text-2xl font-bold leading-snug ${
                  g.highlight ? 'text-orange-400' : 'text-[#fefefe]/85'
                }`}
                style={{ fontFamily: "'Geist Mono', monospace" }}
              >
                {g.summary}
              </p>
              <p
                className={`text-sm sm:text-base lg:text-lg italic leading-snug ${
                  g.highlight ? 'text-[#fefefe]/85' : 'text-[#fefefe]/55'
                }`}
                style={{ fontFamily: "'Geist Mono', monospace" }}
              >
                {g.detail}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
