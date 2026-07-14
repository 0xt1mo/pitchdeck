import { motion } from 'framer-motion';

const mono = "'Geist Mono', monospace";
const display = "'Anton', sans-serif";

const seats = [
  {
    who: 'Users',
    body: 'Agents finally share one toolbox, one memory, and one set of rules — instead of every app hoarding its own.',
  },
  {
    who: 'Hosts',
    body: 'Thousands of tenants, one server. Isolation by construction, shared parts, far less compute per tenant.',
  },
  {
    who: 'Builders',
    body: 'Publish one signed capsule. Every agent on any Unicity AOS can install it.',
  },
];

export function AosSeatsSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-9 lg:py-12 gap-6 lg:gap-9">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-400 text-xs sm:text-xs lg:text-lg tracking-[0.4em] uppercase font-bold"
            style={{ fontFamily: mono }}
          >
            The payoff
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[34px] sm:text-[52px] lg:text-[72px] xl:text-[84px] leading-[0.95] tracking-tight uppercase mt-2"
            style={{ fontFamily: display }}
          >
            DIFFERENT SEATS, <span className="text-orange-400">SAME MACHINE.</span>
          </motion.h1>
        </div>

        {/* Three constituencies */}
        <div className="shrink-0 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
          {seats.map((s, i) => (
            <motion.div
              key={s.who}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.12, duration: 0.5 }}
              className="rounded-2xl p-6 lg:p-8 flex flex-col"
              style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid #2c2c2c' }}
            >
              <p className="text-orange-400 text-2xl lg:text-3xl leading-none uppercase" style={{ fontFamily: display }}>
                {s.who}
              </p>
              <p className="text-[#fefefe]/75 text-sm lg:text-2xl leading-snug mt-4" style={{ fontFamily: mono }}>
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Punchline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          className="shrink-0 text-[#fefefe]/85 text-base sm:text-lg lg:text-2xl leading-snug max-w-6xl pt-4"
          style={{ fontFamily: mono, borderTop: '1px solid rgba(255,255,255,0.10)' }}
        >
          The capsule registry is the <span className="text-orange-400">app store of the agent era</span> — open, signed, owned by no model vendor.
        </motion.p>

      </div>
    </div>
  );
}
