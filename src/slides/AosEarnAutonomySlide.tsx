import { motion } from 'framer-motion';

const mono = "'Geist Mono', monospace";
const display = "'Anton', sans-serif";

const ladder = ['once', 'session', 'workspace'];

const stages = [
  { n: '01', name: 'HIRED', desc: 'Persistent identity from day one. Permissions scoped to the job.', highlight: false },
  { n: '02', name: 'SUPERVISED', desc: 'Every action observed; every decision attributed to the human who authorised it.', highlight: false },
  { n: '03', name: 'REVIEWED', desc: 'Performance over months, against its baseline. Did it hit the goal? What did it cost?', highlight: false },
  { n: '04', name: 'PROMOTED — OR CONTAINED', desc: 'Earn a track record, autonomy widens. Drift, and permissions narrow — automatically.', highlight: true },
];

export function AosEarnAutonomySlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-8 lg:py-10 gap-5 lg:gap-6">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-400 text-xs lg:text-sm tracking-[0.4em] uppercase font-bold"
            style={{ fontFamily: mono }}
          >
            The vision · Earned autonomy
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[30px] sm:text-[46px] lg:text-[64px] xl:text-[74px] leading-[0.98] tracking-tight uppercase mt-2"
            style={{ fontFamily: display }}
          >
            THE OS LEARNS. <span className="text-orange-400">AGENTS EARN AUTONOMY.</span>
          </motion.h1>
        </div>

        {/* Loop Zero — shipped authority ladder */}
        <motion.div
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.45 }}
          className="shrink-0 rounded-xl px-5 lg:px-7 py-4 lg:py-5"
          style={{ border: '1px solid #f97316', background: '#160d05' }}
        >
          <div className="flex items-center gap-4 flex-wrap">
            <span className="text-xs lg:text-sm tracking-[0.14em] uppercase" style={{ fontFamily: mono, color: '#4ade80' }}>● Shipped</span>
            <span className="text-[#e8e8e8] text-sm lg:text-lg" style={{ fontFamily: mono }}>Every human approval becomes learned authority:</span>
            <div className="flex items-center gap-2 lg:gap-2.5 flex-wrap text-sm lg:text-base" style={{ fontFamily: mono }}>
              {ladder.map((l) => (
                <span key={l} className="contents">
                  <span className="rounded px-3 py-1 text-[#e8e8e8]" style={{ border: '1px solid #3a3a3a', background: '#111' }}>{l}</span>
                  <span className="text-[#5f5f5f]">→</span>
                </span>
              ))}
              <span className="rounded px-3 py-1 text-orange-400 font-bold" style={{ border: '1px solid #f97316', background: '#1d1005' }}>always — a signed, expiring token</span>
            </div>
          </div>
        </motion.div>

        {/* Lifecycle */}
        <div className="shrink-0 flex flex-col lg:flex-row items-stretch gap-3 lg:gap-2.5">
          {stages.map((s, i) => (
            <div key={s.name} className="contents">
              <motion.div
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 + i * 0.08, duration: 0.4 }}
                className="flex-1 rounded-xl px-5 py-4 lg:py-5 flex flex-col"
                style={{
                  border: s.highlight ? '1.5px solid #f97316' : '1px solid #2e2e2e',
                  background: s.highlight ? '#160d05' : '#111',
                  flexGrow: s.highlight ? 1.2 : 1,
                }}
              >
                <p className="text-sm lg:text-base tracking-[0.14em]" style={{ fontFamily: mono, color: s.highlight ? '#f97316' : '#5f5f5f' }}>{s.n}</p>
                <p className="text-[#fefefe] text-base lg:text-xl font-bold leading-tight mt-1.5" style={{ fontFamily: mono }}>{s.name}</p>
                <p className="text-sm lg:text-base leading-snug mt-2" style={{ fontFamily: mono, color: s.highlight ? '#c9a583' : '#a8a8a8' }}>{s.desc}</p>
              </motion.div>
              {i < stages.length - 1 && <span className="hidden lg:flex items-center text-[#5f5f5f] text-xl">→</span>}
            </div>
          ))}
        </div>

        {/* Closing line */}
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75, duration: 0.5 }}
          className="shrink-0 text-[#c9c9c9] text-sm lg:text-xl leading-snug max-w-6xl pt-3"
          style={{ fontFamily: mono, borderTop: '1px solid #262626' }}
        >
          This is how enterprises actually adopt autonomy: start with humans in every loop, let agents{' '}
          <span className="text-orange-400">earn their way out of supervision</span> — with the evidence to justify every step.
        </motion.p>

      </div>
    </div>
  );
}
