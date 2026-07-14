import { motion } from 'framer-motion';

const mono = "'Geist Mono', monospace";
const display = "'Anton', sans-serif";

// NOTE: placeholder content — replace bracketed [ ... ] tokens with real figures
// before this deck goes to a buyer. See the design-partner / anonymized-deployment
// options discussed with the team.
const gets = [
  'Hands-on deployment in your VPC or on-prem',
  'A named workflow instrumented and governed in weeks',
  'Direct line to the engineering team; roadmap influence',
  'Preferred commercial terms at general availability',
];

export function AosTractionSlide() {
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
            Traction · Design partner program
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[34px] sm:text-[52px] lg:text-[70px] xl:text-[82px] leading-[0.95] tracking-tight uppercase mt-2"
            style={{ fontFamily: display }}
          >
            ONBOARDING <span className="text-orange-400">[ N ] DESIGN PARTNERS.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-[#fefefe]/75 text-base sm:text-lg lg:text-xl leading-snug mt-3 max-w-6xl"
            style={{ fontFamily: mono }}
          >
            A small cohort putting agents under governance in production through [ Q_ 2026 ].
          </motion.p>
        </div>

        {/* Two columns: proof point + what partners get */}
        <div className="shrink-0 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">

          {/* Anonymized proof point placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="rounded-xl px-6 py-6 lg:py-7 flex flex-col justify-center"
            style={{ border: '1.5px solid #f97316', background: '#160d05' }}
          >
            <p className="text-orange-400 text-sm lg:text-base tracking-[0.16em] uppercase font-bold" style={{ fontFamily: mono }}>In production</p>
            <p className="text-[#fefefe] text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mt-3" style={{ fontFamily: display }}>
              [ 40 AGENTS UNDER GOVERNANCE ]
            </p>
            <p className="text-[#fefefe]/75 text-sm lg:text-lg leading-snug mt-3" style={{ fontFamily: mono }}>
              [ at a European financial institution — replace with a real, anonymized deployment ]
            </p>
          </motion.div>

          {/* What partners get */}
          <motion.div
            initial={{ opacity: 0, x: 14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="rounded-xl px-6 py-6 lg:py-7"
            style={{ border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.015)' }}
          >
            <p className="text-[#fefefe] text-sm lg:text-base tracking-[0.16em] uppercase font-bold" style={{ fontFamily: mono }}>What partners get</p>
            <div className="flex flex-col gap-2.5 mt-3">
              {gets.map((g) => (
                <p key={g} className="flex gap-2.5 text-[#fefefe]/85 text-sm lg:text-lg leading-snug" style={{ fontFamily: mono }}>
                  <span className="text-orange-400 shrink-0">→</span>{g}
                </p>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
