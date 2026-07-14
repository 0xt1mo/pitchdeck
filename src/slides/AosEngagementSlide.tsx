import { motion } from 'framer-motion';

const mono = "'Geist Mono', monospace";
const display = "'Anton', sans-serif";

const steps = [
  { when: 'Week 0', name: 'Prerequisites', body: 'A VPC or on-prem target, your IdP, and 1–2 agent workflows to instrument.' },
  { when: 'Weeks 1–2', name: 'Deploy & onboard', body: 'The OS goes in behind your egress gate; first agents onboarded; enforcement live.' },
  { when: 'Weeks 3–4', name: 'Tune & wire', body: 'Policies and budgets tuned; governance console populated; SIEM and IdP connected.' },
  { when: 'Day 14+', name: 'Governance view', body: 'Console shows every agent enumerated, attributed, budgeted — with proof on tap.' },
];

export function AosEngagementSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-8 lg:py-11 gap-6 lg:gap-8">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-400 text-xs sm:text-sm lg:text-base tracking-[0.4em] uppercase font-bold"
            style={{ fontFamily: mono }}
          >
            Appendix · Engagement model
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[34px] sm:text-[52px] lg:text-[70px] xl:text-[82px] leading-[0.95] tracking-tight uppercase mt-2"
            style={{ fontFamily: display }}
          >
            HOW A POC <span className="text-orange-400">RUNS.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-[#fefefe]/75 text-base sm:text-lg lg:text-xl leading-snug mt-3 max-w-6xl"
            style={{ fontFamily: mono }}
          >
            Enterprises don't buy platforms — they buy first projects. Here's the first one, on a fixed clock.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="shrink-0 flex flex-col lg:flex-row items-stretch gap-3 lg:gap-2.5">
          {steps.map((s, i) => (
            <div key={s.name} className="contents">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.09, duration: 0.4 }}
                className="flex-1 rounded-xl px-5 py-4 lg:py-5 flex flex-col"
                style={{
                  border: i === steps.length - 1 ? '1.5px solid #f97316' : '1px solid #2e2e2e',
                  background: i === steps.length - 1 ? '#160d05' : '#111',
                }}
              >
                <p className="text-orange-400 text-sm lg:text-base tracking-[0.14em] uppercase font-bold" style={{ fontFamily: mono }}>{s.when}</p>
                <p className="text-[#fefefe] text-base lg:text-xl font-bold leading-tight mt-1.5" style={{ fontFamily: mono }}>{s.name}</p>
                <p className="text-[#fefefe]/70 text-sm lg:text-base leading-snug mt-2" style={{ fontFamily: mono }}>{s.body}</p>
              </motion.div>
              {i < steps.length - 1 && <span className="hidden lg:flex items-center text-[#5f5f5f] text-xl">→</span>}
            </div>
          ))}
        </div>

        {/* Success criteria */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75, duration: 0.5 }}
          className="shrink-0 text-[#c9c9c9] text-sm lg:text-xl leading-snug max-w-6xl pt-3"
          style={{ fontFamily: mono, borderTop: '1px solid #262626' }}
        >
          <span className="text-orange-400 font-bold">Success criterion:</span> at the end, every agent in scope is enumerable, attributable to a human, spend-capped, and provable to an auditor.
        </motion.p>

      </div>
    </div>
  );
}
