import { motion } from 'framer-motion';

const mono = "'Geist Mono', monospace";
const display = "'Anton', sans-serif";

const ladder = ['once', 'session', 'workspace'];

export function AosLearningLoopSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.07), transparent 60%)' }}
      />

      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-10 lg:py-14 gap-6 lg:gap-9">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-400 text-xs lg:text-lg tracking-[0.4em] uppercase font-bold"
            style={{ fontFamily: mono }}
          >
            Horizon · The Learning Loop
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[40px] sm:text-[64px] lg:text-[92px] xl:text-[104px] leading-[0.95] tracking-tight uppercase mt-2"
            style={{ fontFamily: display }}
          >
            The OS already <span className="text-orange-400">learns.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-[#fefefe]/80 text-base sm:text-lg lg:text-2xl leading-snug mt-4 max-w-5xl"
            style={{ fontFamily: mono }}
          >
            Everyone else infers agent behavior from outside — endpoints, logs, taps. The OS observes from beneath:{' '}
            <span className="text-orange-400">nothing runs without producing the record.</span>
          </motion.p>
        </div>

        {/* Loop Zero — Authority */}
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }}
          className="shrink-0 rounded-2xl px-6 lg:px-10 py-6 lg:py-8"
          style={{ border: '1.5px solid #f97316', background: '#160d05' }}
        >
          <div className="flex items-baseline gap-4 flex-wrap">
            <span className="text-orange-400 text-sm lg:text-xl tracking-[0.14em] uppercase font-bold" style={{ fontFamily: mono }}>Loop Zero · Authority</span>
            <span className="text-sm lg:text-lg tracking-[0.14em] uppercase" style={{ fontFamily: mono, color: '#4ade80' }}>● Shipped</span>
          </div>

          <p className="text-[#e8e8e8] text-lg lg:text-3xl leading-snug mt-4" style={{ fontFamily: mono }}>
            Every human approval becomes learned authority.
          </p>

          {/* Ladder */}
          <div className="flex items-center gap-3 lg:gap-4 mt-5 flex-wrap text-base lg:text-2xl" style={{ fontFamily: mono }}>
            {ladder.map((l) => (
              <span key={l} className="contents">
                <span className="rounded-lg px-4 py-2 text-[#e8e8e8]" style={{ border: '1px solid #3a3a3a', background: '#111' }}>{l}</span>
                <span className="text-[#5f5f5f]">→</span>
              </span>
            ))}
            <span className="rounded-lg px-4 py-2 text-orange-400 font-bold" style={{ border: '1px solid #f97316', background: '#1d1005' }}>always — a signed, expiring token</span>
          </div>

          <p className="text-[#a8a8a8] text-sm lg:text-xl mt-5 leading-snug max-w-5xl" style={{ fontFamily: mono }}>
            The OS asks less as it learns what you permit — and every learned rule traces back to the human decision that created it.
          </p>
        </motion.div>

      </div>
    </div>
  );
}
