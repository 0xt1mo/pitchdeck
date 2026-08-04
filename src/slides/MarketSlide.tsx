import { motion } from 'framer-motion';

const ANTON = "'Anton', sans-serif";
const MONO = "'Geist Mono', monospace";

const cards = [
  {
    org: 'NVIDIA',
    quote: '“In ten years, we will have 75,000 employees working with 7.5 million agents.”',
    cite: '— Jensen Huang, Nvidia GTC, March 2026',
    stat: '100:1',
    statLabel: 'agents-to-humans ratio at scale',
    accent: false,
  },
  {
    org: 'GARTNER',
    quote: '“By 2028, the average Fortune 500 will run 150,000+ AI agents, up from fewer than 15 today. Only 13% have adequate governance.”',
    cite: '— Max Goss, Gartner, April 2026',
    stat: '10,000×',
    statLabel: 'agent growth in 3 years · 87% ungoverned',
    accent: true,
  },
  {
    org: 'McKINSEY',
    quote: '“Agentic AI could add $4.4 trillion to global productivity by 2030.”',
    cite: '— McKinsey Global Institute, 2025',
    stat: '$4.4T',
    statLabel: 'global agent economy by 2030',
    accent: false,
  },
];

export function MarketSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-10 lg:py-14 gap-8 lg:gap-10">

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="shrink-0 text-[#fefefe] text-[30px] sm:text-[44px] lg:text-[58px] xl:text-[64px] leading-[0.95] tracking-tight uppercase"
          style={{ fontFamily: ANTON }}
        >
          Market Opportunity:{' '}
          <span className="text-orange-400">A trillion-dollar rebuild.</span>
        </motion.h1>

        {/* Three source cards */}
        <div className="shrink-0 grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.org}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.12, duration: 0.5 }}
              className={`rounded-xl p-6 lg:p-8 flex flex-col min-h-[300px] lg:min-h-[360px] ${
                c.accent
                  ? 'border-2 border-orange-500/60 bg-orange-500/[0.05]'
                  : 'border border-[#fefefe]/10 bg-[#fefefe]/[0.02]'
              }`}
              style={c.accent ? { boxShadow: '0 0 28px rgba(249,115,22,0.12)' } : undefined}
            >
              <p className="text-orange-400 text-2xl lg:text-3xl leading-none tracking-tight uppercase" style={{ fontFamily: ANTON }}>
                {c.org}
              </p>
              <p className="text-[#fefefe]/90 text-sm lg:text-base italic leading-relaxed mt-5" style={{ fontFamily: MONO }}>
                {c.quote}
              </p>
              <p className="text-[#fefefe]/50 text-xs lg:text-sm mt-3 mb-auto" style={{ fontFamily: MONO }}>
                {c.cite}
              </p>
              <div
                className="mt-6 pt-5"
                style={{ borderTop: c.accent ? '1px solid rgba(249,115,22,0.28)' : '1px solid rgba(255,255,255,0.12)' }}
              >
                <p
                  className={`text-[44px] sm:text-[52px] lg:text-[60px] leading-none tracking-[-0.02em] ${c.accent ? 'text-orange-400' : 'text-[#fefefe]'}`}
                  style={{ fontFamily: ANTON }}
                >
                  {c.stat}
                </p>
                <p className="text-[#fefefe]/60 text-xs lg:text-sm mt-2.5" style={{ fontFamily: MONO }}>
                  {c.statLabel}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          className="shrink-0 text-center text-[#fefefe]/50 text-xs lg:text-sm tracking-[0.3em] uppercase"
          style={{ fontFamily: MONO }}
        >
          Scale · Gap · Size
        </motion.p>

      </div>
    </div>
  );
}
