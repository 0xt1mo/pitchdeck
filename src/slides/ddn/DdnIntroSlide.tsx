import { motion } from 'framer-motion';

const ANTON = "'Anton', sans-serif";
const MONO = "'Geist Mono', monospace";

export function DdnIntroSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      {/* radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 60% 55% at 50% 46%, rgba(249,115,22,0.09) 0%, transparent 70%)' }}
      />
      {/* faint grid, masked to center */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 72% 62% at 50% 48%, #000 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 72% 62% at 50% 48%, #000 30%, transparent 80%)',
        }}
      />

      {/* Bottom HUD */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="absolute bottom-6 left-8 right-8 lg:bottom-10 lg:left-16 lg:right-16 z-10 flex items-center justify-between"
      >
        <span className="text-[#fefefe]/45 text-xs sm:text-sm lg:text-base tracking-[0.32em] uppercase" style={{ fontFamily: MONO }}>
          Unicity Labs
        </span>
        <span className="text-[#fefefe]/45 text-xs sm:text-sm lg:text-base tracking-[0.28em] uppercase" style={{ fontFamily: MONO }}>
          Partnership Brief
        </span>
      </motion.div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-8 sm:px-12 lg:px-16 gap-9 lg:gap-11">

        {/* Co-brand lockup: Unicity × Alerix */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-8 sm:gap-12 lg:gap-16"
        >
          <img src="/UnicityLogo.svg" alt="Unicity" className="h-12 sm:h-16 lg:h-24 w-auto" />

          <span className="text-[#fefefe]/30 text-4xl sm:text-5xl lg:text-7xl font-light leading-none" style={{ fontFamily: MONO }}>×</span>

          {/* Alerix wordmark — placeholder. Swap for <img src="/alerix-logo.svg" .../> when the asset is dropped in. */}
          <span
            className="text-[#fefefe] text-[52px] sm:text-[72px] lg:text-[112px] leading-none tracking-tight"
            style={{ fontFamily: ANTON }}
          >
            ALERIX
          </span>
        </motion.div>

        {/* Accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="h-[2px] w-40 sm:w-56 lg:w-72 bg-gradient-to-r from-transparent via-orange-500 to-transparent origin-center"
        />

        {/* Unicity Labs descriptor — the hero statement */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.95, duration: 0.6 }}
          className="text-[#fefefe]/80 text-xl sm:text-3xl lg:text-[40px] xl:text-[46px] leading-[1.25] text-center max-w-5xl"
          style={{ fontFamily: MONO }}
        >
          <span className="text-[#fefefe]">Unicity Labs</span>, the product factory for Aleria AI, is building the infrastructure for <span className="text-orange-400">Autonomous AI</span>.
        </motion.p>
      </div>
    </div>
  );
}
