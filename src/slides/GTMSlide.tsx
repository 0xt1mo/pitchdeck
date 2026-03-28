import { motion } from 'framer-motion';
import splashVideoUrl from '/kling_20260226_VIDEO_Take_Image_1650_0.mp4';
import unicityLogoUrl from '/UnicityLogo.svg';

const phases = [
  {
    phase: 'PHASE 1',
    name: 'AgentStack',
    color: '#3b82f6',
    desc: 'Open source + enterprise license',
    bullets: [
      'Open source core + enterprise license',
      'Channel partner distribution',
      'Security · Runtime · Settlement',
    ],
    revenue: 'ENTERPRISE LICENSE (FIAT)',
    partner: { name: 'Aleria', detail: 'Sovereign AI — $400B+ ecosystem (UAE)', motion: 'Channel partner → enterprise deployments' },
  },
  {
    phase: 'PHASE 2',
    name: 'AgentSphere',
    color: '#10b981',
    desc: 'A2A marketplace for autonomous trading',
    bullets: [
      'Agent-to-agent transactions',
      'Crypto token settlement',
      'Predictions & parametrics',
      'Network effects at scale',
    ],
    revenue: 'PROTOCOL SUBSCRIPTION (TOKEN)',
    partner: { name: 'Tawasal', detail: '6M DAU super app — UAE, MENA, Asia', motion: '6M DAU → agent onramp at scale' },
  },
  {
    phase: 'PHASE 3',
    name: 'ParaMarket',
    color: '#a855f7',
    desc: 'Mutual insurance built by agents, for agents',
    bullets: [
      'Parametric insurance marketplace',
      'Agent-managed mutual pools',
      'Automated claims & settlement',
      'First vertical proof point',
    ],
    revenue: 'APPLICATION REVENUE',
    partner: { name: 'Aleria/Blackrock', detail: 'Reinsurance — UAE', motion: 'Reinsurance capital → first mutual pools' },
  },
];

export function GTMSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-y-auto">
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <video className="w-full h-full object-cover opacity-15" autoPlay muted loop playsInline src={splashVideoUrl} />
        <div className="absolute inset-0 bg-[#060606]/50" />
      </div>

      <div className="relative z-10 h-full flex flex-col px-6 sm:px-10 lg:px-16 py-6 sm:py-8">

        {/* Header */}
        <div className="shrink-0">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-orange-400 text-[10px] sm:text-xs tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            Go to Market
          </motion.p>
          <motion.h1 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[28px] sm:text-[40px] lg:text-[52px] leading-[0.95] tracking-tight mt-1"
            style={{ fontFamily: "'Anton', sans-serif" }}>
            LAND THE OS. BUILD THE MARKETPLACE.{' '}
            <span className="text-orange-400">PROVE THE VERTICAL.</span>
          </motion.h1>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] w-32 sm:w-48 bg-gradient-to-r from-orange-500 to-transparent origin-left mt-2" />
        </div>

        {/* Phase cards */}
        <div className="shrink-0 grid grid-cols-3 gap-4 sm:gap-5 mt-4">
          {phases.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.12, duration: 0.5 }}
              className="rounded-xl flex flex-col overflow-hidden"
              style={{
                border: `1px solid ${p.color}25`,
                background: `linear-gradient(170deg, ${p.color}0a 0%, transparent 50%)`,
              }}
            >
              {/* Card header */}
              <div className="px-5 pt-5 pb-3">
                <h2 className="text-xl sm:text-2xl lg:text-3xl leading-none"
                  style={{ fontFamily: "'Anton', sans-serif", color: p.color }}>
                  {p.name}
                </h2>
                <p className="text-[#fefefe]/60 text-xs sm:text-sm mt-1.5"
                  style={{ fontFamily: "'Geist Mono', monospace" }}>
                  {p.desc}
                </p>
              </div>

              {/* Bullets */}
              <div className="px-5 py-3 space-y-1.5 flex-1">
                {p.bullets.map((b) => (
                  <p key={b} className="text-[#fefefe]/70 text-[11px] sm:text-xs leading-relaxed"
                    style={{ fontFamily: "'Geist Mono', monospace" }}>
                    <span className="mr-1.5" style={{ color: p.color }}>→</span>{b}
                  </p>
                ))}
              </div>

              {/* Partner proof point */}
              <div className="px-5 py-3 border-t"
                style={{ borderColor: `${p.color}15` }}>
                <p className="text-[10px] tracking-[0.15em] uppercase mb-1"
                  style={{ fontFamily: "'Geist Mono', monospace", color: `${p.color}80` }}>
                  Launch Partner
                </p>
                <p className="text-[#fefefe]/90 text-xs sm:text-sm font-bold"
                  style={{ fontFamily: "'Geist Mono', monospace" }}>
                  {p.partner.name}
                </p>
                <p className="text-[#fefefe]/50 text-[10px] sm:text-[11px] mt-0.5"
                  style={{ fontFamily: "'Geist Mono', monospace" }}>
                  {p.partner.detail}
                </p>
                <p className="text-[10px] mt-1.5 italic"
                  style={{ fontFamily: "'Geist Mono', monospace", color: `${p.color}90` }}>
                  {p.partner.motion}
                </p>
              </div>

              {/* Revenue model tag */}
              <div className="px-5 py-2 pb-4">
                <span className="text-[10px] sm:text-[11px] tracking-[0.15em] uppercase px-3 py-1.5 rounded-md border"
                  style={{
                    fontFamily: "'Geist Mono', monospace",
                    color: p.color,
                    borderColor: `${p.color}35`,
                    background: `${p.color}10`,
                  }}>
                  {p.revenue}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Strategy paragraphs */}
        <div className="shrink-0 mt-5 space-y-3">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="text-[#fefefe]/60 text-xs sm:text-sm leading-relaxed"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            <span className="text-blue-400 font-bold">AgentStack:</span> The open infrastructure layer for AI agents. Any agent, any LLM, any framework. AgentStack packages the Unicity runtime (Astrid OS), the Semantic Intercept Fabric, and the L1 settlement layer into a single deployable stack. Open source core drives adoption — developers integrate once and get security, execution, and settlement out of the box. Enterprise license adds SLAs, policy dashboards, and dedicated support for production deployments.
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="text-[#fefefe]/60 text-xs sm:text-sm leading-relaxed"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            <span className="text-emerald-400 font-bold">AgentSphere:</span> The first marketplace purpose-built for autonomous agent commerce. Agents discover counterparties, negotiate terms, and settle transactions peer-to-peer using crypto tokens — no human in the loop. A bulletin board protocol enables price discovery across predictions, parametrics, and any structured product agents can define. Every transaction settles on the Unicity L1 at $1/month per agent, unlimited volume.
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="text-[#fefefe]/60 text-xs sm:text-sm leading-relaxed"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            <span className="text-purple-400 font-bold">ParaMarket:</span> Parametric insurance built entirely by agents. Mutual pools are formed, priced, and managed autonomously — agents assess risk, set premiums, process claims, and distribute payouts without manual intervention. The first vertical proof point on the Unicity stack, demonstrating that the infrastructure can power regulated, high-value financial products. Once proven in insurance, the same model extends to lending, derivatives, and supply chain finance.
          </motion.p>
        </div>




      </div>

      {/* Logo — fixed bottom right */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        className="fixed bottom-6 right-6 sm:right-10 lg:right-16 z-20">
        <img src={unicityLogoUrl} alt="Unicity" className="h-5 opacity-60" />
      </motion.div>
    </div>
  );
}
