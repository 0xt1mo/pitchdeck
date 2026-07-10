import { motion } from 'framer-motion';

const mono = "'Geist Mono', monospace";
const display = "'Anton', sans-serif";

const stats = [
  { value: 'Per agent', label: 'Recurring revenue on every protected agent — usage that only grows.', highlight: true },
  { value: '1 : many', label: 'Multi-tenant capsules: many clients on the same infrastructure, sealed apart.' },
  { value: 'High margin', label: 'Cost to serve stays flat as seats scale — the leverage is in the platform.' },
  { value: 'Sticky', label: 'Once you hold identity, enforcement, and audit, you own the account.' },
];

export function MSSPEconomicsSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-8 lg:py-12 gap-5 lg:gap-7">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-400 text-[10px] sm:text-xs lg:text-sm tracking-[0.4em] uppercase font-bold"
            style={{ fontFamily: mono }}
          >
            The economics
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[34px] sm:text-[52px] lg:text-[74px] xl:text-[84px] leading-[0.95] tracking-tight uppercase mt-2"
            style={{ fontFamily: display }}
          >
            RECURRING REVENUE{' '}
            <span className="text-orange-400">PER PROTECTED AGENT.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-[#fefefe]/85 text-sm sm:text-base lg:text-xl leading-snug mt-4 max-w-5xl"
            style={{ fontFamily: mono }}
          >
            The agent count only goes up — and so does the service. This is a revenue line that compounds with your clients&apos; adoption.
          </motion.p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 shrink-0">
          {stats.map((s, i) => (
            <motion.div
              key={s.value}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 + i * 0.1, duration: 0.5 }}
              className="rounded-2xl px-5 lg:px-6 py-5 lg:py-6 flex flex-col"
              style={{
                background: s.highlight ? 'rgba(255,106,0,0.06)' : 'rgba(255,255,255,0.015)',
                border: s.highlight ? '1px solid rgba(255,106,0,0.55)' : '1px solid #2c2c2c',
              }}
            >
              <p
                className={`text-[28px] lg:text-[40px] leading-none uppercase ${s.highlight ? 'text-orange-400' : 'text-[#fefefe]'}`}
                style={{ fontFamily: display }}
              >
                {s.value}
              </p>
              <p className="text-[#fefefe]/75 text-xs lg:text-sm leading-snug mt-3" style={{ fontFamily: mono }}>
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Efficiency underline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          className="shrink-0 text-[#fefefe]/85 text-base sm:text-lg lg:text-2xl leading-snug max-w-6xl pt-4"
          style={{ fontFamily: mono, borderTop: '1px solid rgba(255,255,255,0.10)' }}
        >
          And the same platform runs your <span className="text-orange-400">agentic SOC</span> — more clients per analyst, not more analysts per client.
        </motion.p>

      </div>
    </div>
  );
}
