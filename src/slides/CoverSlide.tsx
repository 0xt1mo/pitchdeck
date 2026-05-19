import { motion } from 'framer-motion';

export function CoverSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">

      {/* Radial glow */}
      <div
        className="fixed inset-0 z-[1] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(249,115,22,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-8 sm:px-12 lg:px-16 gap-10 lg:gap-12">

        {/* Logo */}
        <motion.img
          src="/UnicityLogo.svg"
          alt="Unicity"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="h-16 sm:h-24 lg:h-28 w-auto"
        />

        {/* Accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="h-[1px] w-40 sm:w-56 lg:w-72 bg-gradient-to-r from-transparent via-orange-500/60 to-transparent origin-center"
        />

        {/* Headline — explicit two-line wrap */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-[#fefefe] text-[40px] sm:text-[64px] lg:text-[96px] xl:text-[112px] leading-[0.95] tracking-tight uppercase text-center"
          style={{ fontFamily: "'Anton', sans-serif" }}
        >
          A SECURE COMPUTE PLATFORM<br />
          <span className="text-orange-400">FOR AI.</span>
        </motion.h1>

      </div>
    </div>
  );
}
