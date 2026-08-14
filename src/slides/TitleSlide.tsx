import { motion } from 'framer-motion';
import { tr } from '../i18n';

const ANTON = "'Anton', sans-serif";

const T = tr({
  en: { pre: 'AI safety', accent: 'at industrial scale.' },
  pt: { pre: 'Segurança de IA', accent: 'em escala industrial.' },
});

export function TitleSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">

      {/* Radial glow */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(249,115,22,0.09) 0%, transparent 70%)' }}
      />

      {/* Faint grid texture */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, #000 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, #000 30%, transparent 80%)',
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
          className="h-16 sm:h-20 lg:h-28 w-auto"
        />

        {/* Tagline */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-[30px] sm:text-[44px] lg:text-[60px] xl:text-[68px] leading-[0.98] tracking-tight uppercase text-center max-w-4xl"
          style={{ fontFamily: ANTON }}
        >
          <span className="text-[#fefefe]">{T.pre}</span>{' '}
          <span className="text-orange-400">{T.accent}</span>
        </motion.h1>

        {/* Accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="h-[2px] w-40 sm:w-56 lg:w-72 bg-gradient-to-r from-transparent via-orange-500 to-transparent origin-center"
        />

      </div>
    </div>
  );
}
