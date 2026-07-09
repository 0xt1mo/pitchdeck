import { motion } from 'framer-motion';

const mono = "'Geist Mono', monospace";
const display = "'Anton', sans-serif";

const rows = [
  { action: 'Stores a photo', legal: 'PHI processing & consent' },
  { action: 'Quotes a price', legal: 'Commercial & advertising rules' },
  { action: 'Books a slot', legal: 'Patient data handling' },
  { action: 'Messages a patient', legal: 'Communication & consent' },
  { action: 'Drifts toward a diagnosis', legal: 'Practicing medicine' },
];

export function TheTrapSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">

      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-20 py-10 lg:py-12 gap-6 lg:gap-8">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-400 text-[10px] sm:text-xs lg:text-sm tracking-[0.4em] uppercase font-bold"
            style={{ fontFamily: mono }}
          >
            The trap
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[34px] sm:text-[52px] lg:text-[74px] xl:text-[86px] leading-[0.95] tracking-tight uppercase mt-2"
            style={{ fontFamily: display }}
          >
            THE MOST REGULATED{' '}
            <span className="text-orange-400">BEHAVIORS ON EARTH.</span>
          </motion.h1>
        </div>

        {/* Rows: mundane action → what it legally is */}
        <div className="shrink-0 flex flex-col">
          {/* Column headers */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 lg:gap-8 pb-3"
          >
            <p className="text-[#fefefe]/45 text-[10px] lg:text-xs tracking-[0.28em] uppercase" style={{ fontFamily: mono }}>
              What the agent does
            </p>
            <span className="w-6" />
            <p className="text-[#fefefe]/45 text-[10px] lg:text-xs tracking-[0.28em] uppercase" style={{ fontFamily: mono }}>
              What it legally is
            </p>
          </motion.div>

          {rows.map((r, i) => (
            <motion.div
              key={r.action}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35 + i * 0.1, duration: 0.45 }}
              className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 lg:gap-8 py-3.5 lg:py-4"
              style={{ borderTop: '1px solid rgba(255,255,255,0.10)' }}
            >
              <p
                className="text-[#fefefe] text-lg sm:text-xl lg:text-2xl leading-tight"
                style={{ fontFamily: mono }}
              >
                {r.action}
              </p>
              <span className="text-orange-500 text-xl lg:text-2xl font-bold shrink-0">→</span>
              <p
                className="text-orange-400 text-lg sm:text-2xl lg:text-[28px] leading-tight uppercase"
                style={{ fontFamily: display }}
              >
                {r.legal}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Payoff */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="shrink-0 text-[#fefefe]/85 text-base sm:text-lg lg:text-2xl leading-snug max-w-6xl pt-2"
          style={{ fontFamily: mono }}
        >
          The capability you&apos;re buying and the liability you&apos;re taking on are{' '}
          <span className="text-orange-400">the same five actions.</span>
        </motion.p>

      </div>
    </div>
  );
}
