import { motion } from 'framer-motion';

const timeline = [
  'First code Apr 2024',
  'Testnet Jun 2025',
  'Seed Sep 2025',
  'Mainnet ready Apr 2026',
];

const nowItems: { text: string; sub?: string }[] = [
  { text: 'Design partners include AI labs, asset managers, insurers, telecom operators.', sub: 'Signed integration with a leading AI lab.' },
  { text: 'Agentic intent-based trading marketplace goes live May 2026.', sub: 'Permissionless, private, and fast enough for agent-speed settlement.' },
  { text: 'Active enterprise pilots:', sub: 'Mutual and Parametric Insurance, Telecom, Supply Chain.' },
  { text: 'Mainnet launching summer 2026.' },
  { text: 'TGE is adoption-triggered at 1M daily active agents — not calendar-driven.' },
];

export function RoadmapSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-10 sm:py-14 lg:py-16">

        {/* Header */}
        <div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-orange-400 text-[10px] sm:text-xs tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            Roadmap
          </motion.p>
          <motion.h1 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[32px] sm:text-[44px] lg:text-[56px] leading-[0.95] tracking-tight mt-2"
            style={{ fontFamily: "'Anton', sans-serif" }}>
            24 MONTHS BUILDING. <span className="text-orange-400">READY TO LAUNCH.</span>
          </motion.h1>
        </div>

        {/* Compressed timeline */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          className="flex items-center gap-2 mt-4"
          style={{ fontFamily: "'Geist Mono', monospace" }}>
          {timeline.map((step, i) => (
            <span key={i} className="flex items-center gap-3">
              <span className="text-[#fefefe]/40 text-sm sm:text-base">{step}</span>
              {i < timeline.length - 1 && <span className="text-orange-500/40 text-sm">→</span>}
            </span>
          ))}
        </motion.div>

        {/* Main content — what's happening now */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}>
            <p className="text-[24px] sm:text-[30px] lg:text-[36px] leading-none tracking-tight text-orange-400"
              style={{ fontFamily: "'Anton', sans-serif" }}>
              WHERE WE ARE
            </p>
            <div className="h-[2px] mt-2 mb-5" style={{ background: 'rgba(249,115,22,0.25)' }} />
            <div className="space-y-3">
              {nowItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.08 }}
                  className="flex gap-3"
                >
                  <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-400" />
                  <div>
                    <p className="text-[#fefefe]/80 text-sm sm:text-base leading-relaxed"
                      style={{ fontFamily: "'Geist Mono', monospace" }}>
                      {item.text}
                    </p>
                    {item.sub && (
                      <p className="text-[#fefefe]/50 text-xs sm:text-sm leading-relaxed mt-1 ml-3"
                        style={{ fontFamily: "'Geist Mono', monospace" }}>
                        ↳ {item.sub}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>


      </div>
    </div>
  );
}
