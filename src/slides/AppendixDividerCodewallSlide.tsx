import { motion } from 'framer-motion';
import { tr } from '../i18n';

const T = tr({
  en: {
    eyebrow: 'Appendix',
    headline: 'THE PLATFORM',
    subline: 'About Unicity · the operating system · verifiable AI',
  },
  pt: {
    eyebrow: 'Apêndice',
    headline: 'A PLATAFORMA',
    subline: 'Sobre a Unicity · o sistema operacional · IA verificável',
  },
});

export function AppendixDividerCodewallSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">

      {/* Subtle radial glow */}
      <div
        className="fixed inset-0 z-[1] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(249,115,22,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 sm:px-10 lg:px-16 gap-10 lg:gap-14">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-orange-400 text-sm sm:text-base lg:text-lg tracking-[0.4em] uppercase font-bold"
          style={{ fontFamily: "'Geist Mono', monospace" }}
        >
          {T.eyebrow}
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-[#fefefe] text-[64px] sm:text-[96px] lg:text-[140px] xl:text-[160px] leading-[0.95] tracking-tight uppercase text-center"
          style={{ fontFamily: "'Anton', sans-serif" }}
        >
          {T.headline}
        </motion.h1>

        {/* Accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="h-[2px] w-40 sm:w-56 lg:w-72 bg-gradient-to-r from-transparent via-orange-500 to-transparent origin-center"
          style={{ boxShadow: '0 0 12px rgba(249,115,22,0.6)' }}
        />

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-[#fefefe]/70 text-base sm:text-lg lg:text-xl tracking-[0.18em] uppercase text-center"
          style={{ fontFamily: "'Geist Mono', monospace" }}
        >
          {T.subline}
        </motion.p>

      </div>
    </div>
  );
}
