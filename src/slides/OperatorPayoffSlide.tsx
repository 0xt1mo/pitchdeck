import { motion } from 'framer-motion';

const mono = "'Geist Mono', monospace";
const display = "'Anton', sans-serif";

const features = [
  {
    title: 'Operator-native',
    body: 'Identity, billing, and location built in — no card setup, no friction.',
  },
  {
    title: 'New revenue per line',
    body: 'Top-ups, gifts, groceries, bookings — every settled action is ARPU on your rails.',
  },
  {
    title: 'You own the customer',
    body: "The agent layer and the data stay on your network — not a hyperscaler's.",
  },
];

/**
 * Operator payoff — phone on the left, headline + 3 feature bullets on the right.
 * Mirrors s_operator.html: 30/70 split, phone vertically centered, orange-rule
 * accent lines on each feature.
 */
export function OperatorPayoffSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">

      {/* Subtle dotted background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '34px 34px',
        }}
      />

      <div className="relative z-10 h-full flex flex-row items-center px-8 sm:px-12 lg:px-16 py-8 lg:py-12 gap-8 lg:gap-16">

        {/* LEFT — phone */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="shrink-0 flex items-center justify-center"
          style={{ width: '30%' }}
        >
          <img
            src="/concierge/Concierge6.png"
            alt="Operator subscriber concierge"
            style={{
              height: '78vh',
              width: 'auto',
              borderRadius: '24px',
              filter: 'drop-shadow(0 26px 70px rgba(0,0,0,0.6))',
            }}
          />
        </motion.div>

        {/* RIGHT — copy + bullets */}
        <div className="flex-1 flex flex-col">

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-orange-400 text-[10px] sm:text-xs lg:text-sm tracking-[0.4em] uppercase font-bold"
            style={{ fontFamily: mono }}
          >
            The external payoff · what the operator gets
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[#fefefe] text-[28px] sm:text-[40px] lg:text-[56px] xl:text-[64px] leading-[0.95] tracking-tight uppercase mt-2 lg:mt-3"
            style={{ fontFamily: display }}
          >
            AND EVERY TAP IS <span className="text-orange-400">REVENUE YOU OWN.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-[#fefefe]/80 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed mt-4 lg:mt-6 max-w-3xl"
            style={{ fontFamily: mono }}
          >
            A personal concierge for every subscriber — it books, pays, and handles the subscriber's day. Each settled action runs through{' '}
            <span className="text-[#fefefe] font-bold">your identity and billing.</span>
          </motion.p>

          {/* Feature bullets — orange left-rule */}
          <div className="flex flex-col gap-4 lg:gap-6 mt-6 lg:mt-10">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.45 + i * 0.1, duration: 0.5 }}
                className="pl-4 lg:pl-5"
                style={{ borderLeft: '2px solid #FF6A00' }}
              >
                <p
                  className="text-[#fefefe] text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight"
                  style={{ fontFamily: display }}
                >
                  {f.title.toUpperCase()}
                </p>
                <p
                  className="text-[#fefefe]/65 text-xs sm:text-sm lg:text-base leading-snug mt-1 lg:mt-2"
                  style={{ fontFamily: mono }}
                >
                  {f.body}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
