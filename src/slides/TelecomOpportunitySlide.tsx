import { motion } from 'framer-motion';

const mono = "'Geist Mono', monospace";
const display = "'Anton', sans-serif";

export function TelecomOpportunitySlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">

      {/* Background grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-10 lg:py-12 gap-6 lg:gap-8">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-orange-400 text-xs sm:text-sm lg:text-base tracking-[0.4em] uppercase font-bold shrink-0"
          style={{ fontFamily: mono }}
        >
          The Opportunity
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-[34px] sm:text-[50px] lg:text-[76px] xl:text-[90px] leading-[0.95] tracking-tight uppercase shrink-0 -mt-2"
          style={{ fontFamily: display }}
        >
          EVERY ENTERPRISE IS ABOUT TO RUN{' '}
          <span className="text-orange-400">THOUSANDS OF AGENTS.</span>
        </motion.h1>

        {/* Pull-quote — the principle, the control layer, the payoff */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="shrink-0 mt-2 lg:mt-4 flex items-start gap-5 lg:gap-7 max-w-6xl"
        >
          <div className="shrink-0 w-[3px] lg:w-[4px] self-stretch bg-orange-500 rounded-full" />

          <div className="flex flex-col gap-4 lg:gap-5" style={{ fontFamily: mono }}>
            <p className="text-[#fefefe] text-xl sm:text-2xl lg:text-3xl xl:text-[2.1rem] leading-[1.25] font-medium">
              Each one needs{' '}
              <span className="text-orange-400 font-bold">permission before it acts,</span> and{' '}
              <span className="text-orange-400 font-bold">proof after it acts.</span>
            </p>
            <p className="text-[#fefefe]/70 text-base sm:text-lg lg:text-xl leading-[1.5]">
              Define what every agent can access, which tools it can use, what actions need approval, what limits apply, and what record is left behind.
            </p>
            <p className="text-[#fefefe]/90 text-base sm:text-lg lg:text-xl xl:text-[1.4rem] leading-[1.4] font-light">
              Put agents behind real workflows —{' '}
              <span className="text-[#fefefe] font-semibold">with boundaries, approvals, and evidence.</span>
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
