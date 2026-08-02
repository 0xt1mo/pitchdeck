import { motion } from 'framer-motion';

const mono = "'Geist Mono', monospace";
const display = "'Anton', sans-serif";

export function CodewallCoverSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">

      {/* Background grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Orange wash */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 50% 55% at 78% 55%, rgba(249,115,22,0.10) 0%, transparent 70%)' }}
      />

      {/* Top HUD bar */}
      <div className="absolute top-6 left-8 lg:left-12 right-8 lg:right-12 z-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
          <span className="text-[#fefefe]/65 text-xs sm:text-xs lg:text-lg tracking-[0.32em] uppercase" style={{ fontFamily: mono }}>
            Unicity AOS · Codewall
          </span>
        </div>
      </div>

      {/* Bottom HUD bar */}
      <div className="absolute bottom-6 left-8 lg:left-12 right-8 lg:right-12 z-20 flex items-center">
        <span className="text-[#fefefe]/45 text-xs sm:text-xs lg:text-lg tracking-[0.32em] uppercase" style={{ fontFamily: mono }}>
          Product Overview · Confidential
        </span>
      </div>

      {/* Left vertical orange bar */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute left-12 lg:left-20 top-[12%] bottom-[12%] w-[2px] bg-orange-500 origin-top z-10"
      />

      {/* Main content */}
      <div className="relative z-10 h-full flex flex-col justify-center pl-24 lg:pl-36 pr-8 lg:pr-16 gap-5 lg:gap-6">

        <motion.img
          src="/UnicityLogo.svg"
          alt="Unicity"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-10 lg:h-14 w-auto shrink-0"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-orange-400 text-xs sm:text-sm lg:text-xl tracking-[0.32em] uppercase font-bold shrink-0 -mt-2"
          style={{ fontFamily: mono }}
        >
          A Unicity AOS Product · 2026
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.8 }}
          className="text-[#fefefe] text-[64px] sm:text-[96px] lg:text-[136px] xl:text-[160px] leading-[0.9] tracking-tight uppercase shrink-0"
          style={{ fontFamily: display }}
        >
          AOS <span className="text-orange-400">Codewall.</span>
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="h-[1px] w-40 sm:w-56 lg:w-72 bg-orange-500/60 origin-left shrink-0"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.05, duration: 0.5 }}
          className="text-[#fefefe]/80 text-base sm:text-lg lg:text-2xl leading-snug max-w-4xl shrink-0"
          style={{ fontFamily: mono }}
        >
          The firewall for coding agents — <span className="text-orange-400">kernel-level permissions</span> that bound every action, redact every secret, and prove every step.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="text-[#fefefe]/55 text-xs sm:text-xs lg:text-lg tracking-[0.24em] uppercase shrink-0 mt-1"
          style={{ fontFamily: mono }}
        >
          Mike Gault · CEO ·{' '}
          <span className="text-orange-400/85 tracking-normal normal-case">mike@unicity-labs.com</span>
        </motion.p>

      </div>
    </div>
  );
}
