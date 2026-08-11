import { motion } from 'framer-motion';
import { tr } from '../i18n';

const T = tr({
  en: {
    line1: 'Billions of machine intelligences.',
    line2: 'The internet they need doesn’t exist yet.',
    sub: 'Routing, compute, identity, settlement. The entire stack has to be rebuilt for machines, not people.',
  },
  pt: {
    line1: 'Bilhões de inteligências de máquina.',
    line2: 'A internet que elas precisam ainda não existe.',
    sub: 'Roteamento, computação, identidade, liquidação. Toda a stack precisa ser reconstruída para máquinas, não pessoas.',
  },
});

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

      {/* Faint grid texture */}
      <div
        className="fixed inset-0 z-[1] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, #000 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, #000 30%, transparent 80%)',
        }}
      />

      {/* Bottom HUD */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="absolute bottom-6 left-8 right-8 lg:bottom-10 lg:left-16 lg:right-16 z-10 flex items-center justify-between"
      >
        <span
          className="text-[#fefefe]/45 text-xs sm:text-sm lg:text-base tracking-[0.32em] uppercase"
          style={{ fontFamily: "'Geist Mono', monospace" }}
        >
          Unicity Labs
        </span>
      </motion.div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-8 sm:px-12 lg:px-16 gap-7 lg:gap-9">

        {/* Logo */}
        <motion.img
          src="/UnicityLogo.svg"
          alt="Unicity"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="h-12 sm:h-14 lg:h-16 w-auto"
        />

        {/* Thesis headline */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-[26px] sm:text-[40px] lg:text-[54px] xl:text-[62px] leading-[0.98] tracking-tight uppercase text-center max-w-5xl"
          style={{ fontFamily: "'Anton', sans-serif" }}
        >
          <span className="block text-[#fefefe]">{T.line1}</span>
          <span className="block text-orange-400 mt-4 lg:mt-6">{T.line2}</span>
        </motion.h1>

        {/* Accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="h-[2px] w-40 sm:w-56 lg:w-72 bg-gradient-to-r from-transparent via-orange-500 to-transparent origin-center"
        />

        {/* Rebuild-the-stack subline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          className="text-[#fefefe]/60 text-base sm:text-lg lg:text-2xl leading-snug text-center max-w-3xl"
          style={{ fontFamily: "'Geist Mono', monospace" }}
        >
          {T.sub}
        </motion.p>

      </div>
    </div>
  );
}
