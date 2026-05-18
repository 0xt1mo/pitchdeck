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

const left = {
  header: 'EVERY EXISTING BLOCKCHAIN',
  subhead: 'Network verifies transactions.',
  bullets: [
    { text: 'State lives on a shared ledger', emphasis: false },
    { text: 'Network is the bottleneck', emphasis: false },
    { text: 'Tokens are ledger entries', emphasis: false },
    { text: 'Tokens are static', emphasis: false },
    { text: 'Cannot integrate natively with existing systems', emphasis: true },
  ],
};

const right = {
  header: 'UNICITY',
  subhead: 'Network verifies uniqueness.',
  bullets: [
    { text: "State lives where it's used", emphasis: false },
    { text: 'Verification at the edge', emphasis: false },
    { text: 'Each token carries its own proof', emphasis: false },
    { text: 'Tokens move peer-to-peer', emphasis: false },
    { text: 'Integrates natively into existing systems', emphasis: true },
  ],
};

export function CompetitionSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-6 sm:py-8 lg:py-10 justify-center gap-4 lg:gap-5">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-orange-400 text-sm sm:text-base lg:text-lg tracking-[0.4em] uppercase font-bold"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Competition
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[28px] sm:text-[40px] lg:text-[52px] xl:text-[60px] leading-[0.95] tracking-tight uppercase shrink-0 mt-1"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            <span className="text-[#fefefe]">THE INEVITABLE ENDPOINT</span>{' '}
            <span className="text-orange-400">FOR BLOCKCHAIN.</span>
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
              className="flex flex-col gap-1 lg:gap-1.5 px-4 lg:px-5 py-2 lg:py-2.5"
              style={{
                borderLeft: i > 0 ? '1px solid rgba(249,115,22,0.15)' : 'none',
              }}
            >
              <p
                className={`text-xs sm:text-sm lg:text-base tracking-[0.18em] ${
                  g.highlight ? 'text-orange-400' : 'text-[#fefefe]/50'
                }`}
                style={{ fontFamily: "'Geist Mono', monospace" }}
              >
                {g.year}
              </p>
              <h3
                className={`text-[20px] sm:text-[26px] lg:text-[32px] leading-none tracking-tight uppercase ${
                  g.highlight ? 'text-orange-400' : 'text-[#fefefe]/55'
                }`}
                style={{ fontFamily: "'Anton', sans-serif" }}
              >
                {g.name}
              </h3>
              <p
                className={`text-sm sm:text-base lg:text-lg font-bold leading-snug ${
                  g.highlight ? 'text-orange-400' : 'text-[#fefefe]/85'
                }`}
                style={{ fontFamily: "'Geist Mono', monospace" }}
              >
                {g.summary}
              </p>
              <p
                className={`text-xs sm:text-sm lg:text-base italic leading-snug ${
                  g.highlight ? 'text-[#fefefe]/85' : 'text-[#fefefe]/55'
                }`}
                style={{ fontFamily: "'Geist Mono', monospace" }}
              >
                {g.detail}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Two-column comparison */}
        <div
          className="grid grid-cols-2 shrink-0"
          style={{
            borderTop: '1px solid rgba(255,255,255,0.12)',
            borderBottom: '1px solid rgba(255,255,255,0.12)',
          }}
        >
          {/* Left — every existing blockchain */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col gap-3 lg:gap-4 py-4 lg:py-5 pr-6 lg:pr-10"
            style={{ borderRight: '1px solid rgba(255,255,255,0.12)' }}

          >
            <p
              className="text-[#fefefe]/50 text-sm sm:text-base lg:text-lg tracking-[0.18em] uppercase font-bold"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              {left.header}
            </p>
            <p
              className="text-[#fefefe]/85 text-xl sm:text-2xl lg:text-[28px] font-bold leading-tight"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              {left.subhead}
            </p>
            <ul className="flex flex-col gap-2 lg:gap-3 mt-1">
              {left.bullets.map((b) => (
                <li
                  key={b.text}
                  className="flex items-start gap-3 lg:gap-4"
                >
                  <span className="text-orange-400/70 text-base lg:text-lg shrink-0 mt-0.5 font-bold">→</span>
                  <span
                    className={`text-sm sm:text-base lg:text-lg leading-snug ${
                      b.emphasis ? 'text-[#fefefe] font-bold' : 'text-[#fefefe]/55'
                    }`}
                    style={{ fontFamily: "'Geist Mono', monospace" }}
                  >
                    {b.text}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right — Unicity */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col gap-4 lg:gap-5 py-5 lg:py-7 pl-6 lg:pl-10"
          >
            <p
              className="text-orange-400 text-sm sm:text-base lg:text-lg tracking-[0.18em] uppercase font-bold"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              {right.header}
            </p>
            <p
              className="text-orange-400 text-xl sm:text-2xl lg:text-[28px] font-bold leading-tight"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              {right.subhead}
            </p>
            <ul className="flex flex-col gap-2 lg:gap-3 mt-1">
              {right.bullets.map((b) => (
                <li
                  key={b.text}
                  className="flex items-start gap-3 lg:gap-4"
                >
                  <span className="text-orange-400 text-base lg:text-lg shrink-0 mt-0.5 font-bold">→</span>
                  <span
                    className={`text-sm sm:text-base lg:text-lg leading-snug ${
                      b.emphasis ? 'text-orange-400 font-bold' : 'text-[#fefefe]/85'
                    }`}
                    style={{ fontFamily: "'Geist Mono', monospace" }}
                  >
                    {b.text}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
