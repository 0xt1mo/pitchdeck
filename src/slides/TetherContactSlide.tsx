import { motion } from 'framer-motion';

const mono = "'Geist Mono', monospace";
const display = "'Anton', sans-serif";

export function TetherContactSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">

      {/* RIGHT — abstract splash, faded on its left edge into the black background */}
      <img
        src="/close-splash.png"
        alt=""
        className="absolute right-0 top-0 h-full w-auto pointer-events-none"
        style={{
          maxWidth: '55%',
          objectFit: 'contain',
          objectPosition: 'right center',
          maskImage:
            'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 18%, #000 45%)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 18%, #000 45%)',
        }}
      />

      {/* LEFT — copy + CTA */}
      <div
        className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-20 py-10 lg:py-14 gap-6 lg:gap-8"
        style={{ maxWidth: '58%' }}
      >

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-orange-400 text-xs sm:text-sm lg:text-base tracking-[0.4em] uppercase font-bold shrink-0"
          style={{ fontFamily: mono }}
        >
          Next Step
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-[#fefefe] text-[44px] sm:text-[64px] lg:text-[88px] xl:text-[104px] leading-[0.96] tracking-tight uppercase shrink-0"
          style={{ fontFamily: display }}
        >
          LET US <span className="text-orange-400">SHOW YOU.</span>
        </motion.h1>

        {/* Body — one statement, then three pacing lines */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="shrink-0 flex flex-col gap-4"
          style={{ fontFamily: mono }}
        >
          <p className="text-[#fefefe] text-base sm:text-lg lg:text-xl font-bold leading-snug">
            A QVAC agent using WDK through Astrid OS.
          </p>
          <div className="flex flex-col gap-1">
            <p className="text-[#fefefe]/85 text-sm sm:text-base lg:text-lg leading-snug">
              20 minutes.
            </p>
            <p className="text-[#fefefe]/85 text-sm sm:text-base lg:text-lg leading-snug">
              One working flow.
            </p>
            <p className="text-[#fefefe]/85 text-sm sm:text-base lg:text-lg leading-snug">
              Your team can decide from there.
            </p>
          </div>
        </motion.div>

        {/* CTA button */}
        <motion.a
          href="mailto:mike@unicity-labs.com,alan@unicity-labs.com?subject=See%20it%20live%20%E2%80%94%20QVAC%20agent%20on%20Astrid%20OS"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="shrink-0 inline-flex items-center gap-3 self-start rounded-full px-6 py-3 lg:px-8 lg:py-4 text-[#060606] font-bold transition-transform hover:scale-[1.02]"
          style={{ background: '#FF6A00', fontFamily: mono }}
        >
          <span className="text-sm sm:text-base lg:text-lg tracking-[0.18em] uppercase">
            See It Live
          </span>
          <span className="text-base lg:text-lg">→</span>
        </motion.a>

        {/* Location line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.5 }}
          className="text-[#fefefe]/70 text-xs sm:text-sm lg:text-base shrink-0 leading-relaxed"
          style={{ fontFamily: mono }}
        >
          Available in <span className="text-[#fefefe]">Lugano</span>,{' '}
          <span className="text-[#fefefe]">El Salvador</span>, or remote.
        </motion.p>

        {/* Contact line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-orange-400/90 text-xs sm:text-sm lg:text-base shrink-0"
          style={{ fontFamily: mono }}
        >
          <a href="mailto:mike@unicity-labs.com" className="hover:underline">mike@unicity-labs.com</a>
          <span className="text-[#fefefe]/40">  ·  </span>
          <a href="mailto:alan@unicity-labs.com" className="hover:underline">alan@unicity-labs.com</a>
        </motion.p>

      </div>

      {/* Bottom HUD bar */}
      <div className="absolute bottom-6 left-8 lg:left-12 right-8 lg:right-12 z-20 flex items-center justify-between pointer-events-none">
        <span
          className="text-[#fefefe]/40 text-[10px] sm:text-xs lg:text-sm tracking-[0.32em] uppercase"
          style={{ fontFamily: mono }}
        >
          Unicity · Next Step
        </span>
        <span
          className="text-[#fefefe]/35 text-[10px] sm:text-xs lg:text-sm tracking-[0.32em] uppercase font-bold"
          style={{ fontFamily: mono }}
        >
          Unicity
        </span>
      </div>
    </div>
  );
}
