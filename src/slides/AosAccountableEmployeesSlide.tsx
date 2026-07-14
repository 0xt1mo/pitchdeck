import { motion } from 'framer-motion';

const mono = "'Geist Mono', monospace";
const display = "'Anton', sans-serif";

const stages = [
  { n: '01', name: 'HIRED', desc: 'Persistent identity from day one. Permissions scoped to the job — nothing more.', highlight: false },
  { n: '02', name: 'SUPERVISED', desc: 'Every action observed on the bus. Every decision attributed to the human who authorised it.', highlight: false },
  { n: '03', name: 'REVIEWED', desc: 'Performance over months, against its baseline. Did it hit the goal? What did it cost? Is it drifting?', highlight: false },
  { n: '04', name: 'PROMOTED — OR CONTAINED', desc: 'Earn a track record, autonomy widens. Drift from it, permissions narrow — automatically, before the damage, not after.', highlight: true },
];

export function AosAccountableEmployeesSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-8 lg:py-11 gap-5 lg:gap-7">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-400 text-xs lg:text-lg tracking-[0.4em] uppercase font-bold"
            style={{ fontFamily: mono }}
          >
            Horizon · The Outcome
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[32px] sm:text-[50px] lg:text-[70px] xl:text-[80px] leading-[0.98] tracking-tight uppercase mt-2"
            style={{ fontFamily: display }}
          >
            Agents as <span className="text-orange-400">first-class citizens.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-[#fefefe]/80 text-base sm:text-lg lg:text-2xl leading-snug mt-4 max-w-6xl"
            style={{ fontFamily: mono }}
          >
            Banks are already issuing agents managed identities, like staff. The question isn't whether agents get treated as employees —{' '}
            <span className="text-orange-400">it's what their manager is.</span>
          </motion.p>
        </div>

        {/* Lifecycle */}
        <div className="shrink-0 flex flex-col lg:flex-row items-stretch gap-3 lg:gap-2.5">
          {stages.map((s, i) => (
            <div key={s.name} className="contents">
              <motion.div
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
                className="flex-1 rounded-xl px-5 py-4 lg:py-5 flex flex-col"
                style={{
                  border: s.highlight ? '1.5px solid #f97316' : '1px solid #2e2e2e',
                  background: s.highlight ? '#160d05' : '#111',
                  flexGrow: s.highlight ? 1.2 : 1,
                }}
              >
                <p className="text-sm lg:text-base tracking-[0.14em]" style={{ fontFamily: mono, color: s.highlight ? '#f97316' : '#5f5f5f' }}>{s.n}</p>
                <p className="text-[#fefefe] text-lg lg:text-2xl font-bold leading-tight mt-1.5" style={{ fontFamily: mono }}>{s.name}</p>
                <p className="text-sm lg:text-lg leading-snug mt-3" style={{ fontFamily: mono, color: s.highlight ? '#c9a583' : '#a8a8a8' }}>{s.desc}</p>
              </motion.div>
              {i < stages.length - 1 && <span className="hidden lg:flex items-center text-[#5f5f5f] text-xl">→</span>}
            </div>
          ))}
        </div>

        {/* Closing line */}
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.5 }}
          className="shrink-0 text-[#c9c9c9] text-sm lg:text-xl leading-snug max-w-6xl pt-4"
          style={{ fontFamily: mono, borderTop: '1px solid #262626' }}
        >
          This is how enterprises actually adopt autonomy: start with humans in every loop, let agents{' '}
          <span className="text-orange-400">earn their way out of supervision</span> — with the evidence to justify every step.
        </motion.p>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
          className="shrink-0 text-[#5f5f5f] text-xs lg:text-sm tracking-[0.2em] uppercase" style={{ fontFamily: mono }}
        >
          Foundations shipped today: Identity · Permissions · Observation · Attribution
        </motion.p>

      </div>
    </div>
  );
}
