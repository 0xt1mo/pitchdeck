import { motion } from 'framer-motion';

const tiers = [
  {
    num: '01',
    tier: 'Consumer',
    product: 'AgentSphere · No/low-code',
    desc: 'Plug-and-play agent creation. Any user can deploy an agent, find counterparties, and transact. $1-10/month per agent, unlimited transactions.',
    partner: 'Launch partner: Tawasal — 6M DAU, UAE/MENA/Asia',
    color: '#f59e0b',
  },
  {
    num: '02',
    tier: 'Developer',
    product: 'AgentStack · SDK-led',
    desc: 'Self-learning agent harness for builders. Full toolkit — identity, sandbox, settlement, memory. Bring your own LLM.',
    partner: '20K agents registered · Launch April 2026',
    color: '#3b82f6',
  },
  {
    num: '03',
    tier: 'Enterprise',
    product: 'Managed delivery · Sales-led',
    desc: 'Bespoke, managed agent solutions for regulated industries. Full governance, audit, and compliance stack.',
    partner: 'Design partners include AI labs, financial institutions, and telecom operators',
    color: '#22c55e',
  },
];

export function GTMSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-10 sm:py-14 lg:py-16">

        {/* Header */}
        <div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-orange-400 text-xs tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            Go To Market
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[28px] sm:text-[36px] lg:text-[48px] leading-[0.95] tracking-tight mt-2"
            style={{ fontFamily: "'Anton', sans-serif" }}>
            FROM NO-CODE TO <span className="text-orange-400">ENTERPRISE</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="mt-3 text-[#fefefe]/60 text-base lg:text-lg"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            All roads lead to active agent growth.
          </motion.p>
        </div>

        {/* Three tiers */}
        <div className="flex-1 flex items-center mt-6">
          <div className="w-full flex flex-col gap-0">
            {tiers.map((t, i) => (
              <motion.div
                key={t.num}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
                className="flex gap-6 lg:gap-10 py-6 lg:py-8 relative"
                style={{ borderBottom: i < tiers.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}
              >
                {/* Left bar */}
                <div className="absolute left-0 top-[20%] bottom-[20%] w-[3px] rounded-full" style={{ background: t.color }} />

                {/* Number + Tier */}
                <div className="pl-5 w-[180px] lg:w-[220px] shrink-0">
                  <span className="text-[#fefefe]/25 text-xs" style={{ fontFamily: "'Geist Mono', monospace" }}>
                    Tier {t.num}
                  </span>
                  <h3 className="text-[28px] sm:text-[34px] lg:text-[40px] leading-none tracking-tight mt-1"
                    style={{ fontFamily: "'Anton', sans-serif", color: t.color }}>
                    {t.tier.toUpperCase()}
                  </h3>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <p className="text-[#fefefe]/50 text-sm" style={{ fontFamily: "'Geist Mono', monospace" }}>
                    {t.product}
                  </p>
                  <p className="text-[#fefefe]/70 text-base lg:text-lg leading-relaxed mt-2" style={{ fontFamily: "'Geist Mono', monospace" }}>
                    {t.desc}
                  </p>
                  <p className="text-[#fefefe]/40 text-sm mt-3" style={{ fontFamily: "'Geist Mono', monospace" }}>
                    {t.partner}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
