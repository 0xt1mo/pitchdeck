import { motion } from 'framer-motion';

const scenarios = [
  {
    title: 'TGE viable',
    sub: 'monetization activates',
    agents: '1M',
    revenue: '$12M',
    highlight: false,
  },
  {
    title: 'Mainstream protocol',
    sub: '~0.5% of agent economy',
    agents: '50M',
    revenue: '$600M',
    highlight: false,
  },
  {
    title: 'Category-defining',
    sub: '~5% of agent economy',
    agents: '500M',
    revenue: '$6B',
    highlight: true,
  },
];

export function ProjectionsSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-16 py-8 sm:py-10 lg:py-12 justify-center gap-6 lg:gap-8">

        {/* Header */}
        <div className="shrink-0">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-orange-400 text-[10px] sm:text-xs tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            The Opportunity
          </motion.p>
          <motion.h1 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[26px] sm:text-[36px] lg:text-[44px] leading-[1.05] tracking-tight mt-1"
            style={{ fontFamily: "'Anton', sans-serif" }}>
            THE WORLD IF <span className="text-orange-400">WE WIN</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="mt-3 text-[#fefefe]/90 text-sm sm:text-base lg:text-lg max-w-5xl leading-relaxed"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            Agents become the <span className="text-orange-400">next interface to the Internet, finance and commerce</span>. Enterprise adopts Unicity first — for <span className="text-orange-400">compliance, audit, and verifiable execution</span>. From there it expands into <span className="text-[#fefefe] font-bold">the mainstream protocol layer underneath the agent economy.</span>
          </motion.p>
        </div>

        {/* Validation strip — compact horizontal pill */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="shrink-0 flex items-center gap-5 lg:gap-7 rounded-xl px-5 lg:px-7 py-4 lg:py-5"
          style={{
            border: '1px solid rgba(249,115,22,0.4)',
            background: 'rgba(249,115,22,0.04)',
          }}
        >
          <div className="flex items-baseline gap-2">
            <p className="text-orange-400 text-[36px] sm:text-[44px] lg:text-[56px] leading-none tracking-tight"
              style={{ fontFamily: "'Anton', sans-serif" }}>
              100K
            </p>
            <p className="text-[#fefefe]/60 text-[10px] sm:text-xs uppercase tracking-[0.2em]"
              style={{ fontFamily: "'Geist Mono', monospace" }}>
              testnet wallets
            </p>
          </div>
          <p className="text-[#fefefe]/85 text-xs sm:text-sm lg:text-base leading-snug border-l border-white/[0.12] pl-5 lg:pl-7 flex-1"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            100K users have created a wallet pre-launch. <span className="text-[#fefefe] font-bold">Every user gets a hosted agent.</span>
          </p>
          <a
            href="https://sphere.unicity.network"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 text-xs sm:text-sm font-bold hover:underline cursor-pointer whitespace-nowrap"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            sphere.unicity.network →
          </a>
        </motion.div>

        {/* Protocol upside table */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="shrink-0"
        >
          <p className="text-orange-400 text-[10px] sm:text-xs tracking-[0.3em] uppercase font-bold mb-3"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            The Protocol Upside
          </p>
          <table className="w-full max-w-3xl" style={{ fontFamily: "'Geist Mono', monospace" }}>
            <thead>
              <tr className="border-b border-white/[0.12]">
                <th className="text-left py-3 text-[#fefefe]/50 text-[10px] sm:text-xs tracking-[0.18em] uppercase font-normal w-[55%]">
                  Scenario
                </th>
                <th className="text-right py-3 px-6 text-[#fefefe]/50 text-[10px] sm:text-xs tracking-[0.18em] uppercase font-normal">
                  Agents
                </th>
                <th className="text-right py-3 text-orange-400 text-[10px] sm:text-xs tracking-[0.18em] uppercase font-bold">
                  Protocol Revenue
                </th>
              </tr>
            </thead>
            <tbody>
              {scenarios.map((s, i) => (
                <motion.tr
                  key={s.title}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.0 + i * 0.08, duration: 0.4 }}
                  className={i < scenarios.length - 1 ? 'border-b border-white/[0.06]' : ''}
                  style={s.highlight ? { background: 'rgba(249,115,22,0.06)' } : undefined}
                >
                  <td className="py-4 lg:py-5 pl-3">
                    <p className={`${s.highlight ? 'text-orange-400' : 'text-[#fefefe]'} text-base sm:text-lg lg:text-xl font-bold leading-tight`}>
                      {s.title}
                    </p>
                    <p className="text-[#fefefe]/50 text-[10px] sm:text-xs leading-tight mt-1">
                      {s.sub}
                    </p>
                  </td>
                  <td className={`py-4 lg:py-5 px-6 text-right text-2xl sm:text-3xl lg:text-4xl ${s.highlight ? 'text-orange-400' : 'text-[#fefefe]'}`}
                    style={{ fontFamily: "'Anton', sans-serif" }}>
                    {s.agents}
                  </td>
                  <td className={`py-4 lg:py-5 pr-3 text-right text-2xl sm:text-3xl lg:text-4xl ${s.highlight ? 'text-orange-400' : 'text-[#fefefe]'}`}
                    style={{ fontFamily: "'Anton', sans-serif" }}>
                    {s.revenue}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
          <p className="text-[#fefefe]/45 text-[10px] sm:text-xs italic mt-3"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            Floor pricing only ($12/agent/year).
          </p>
        </motion.div>

      </div>
    </div>
  );
}
