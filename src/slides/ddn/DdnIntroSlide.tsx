import { motion } from 'framer-motion';

const ANTON = "'Anton', sans-serif";
const MONO = "'Geist Mono', monospace";

// Ambient agent field — a fleet of capsules, a shifting subset executing.
const COLS = 22;
const ROWS = 12;
const CELLS = COLS * ROWS;
const isLit = (i: number) => (i * 13 + 7) % 19 < 2; // ~10% executing

/** Living background: a grid of agent capsules, faded away from the edges. */
function AgentField() {
  return (
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        maskImage: 'radial-gradient(ellipse 62% 58% at 50% 48%, transparent 22%, #000 82%)',
        WebkitMaskImage: 'radial-gradient(ellipse 62% 58% at 50% 48%, transparent 22%, #000 82%)',
      }}
    >
      <div
        className="grid w-full h-full"
        style={{ gridTemplateColumns: `repeat(${COLS}, 1fr)`, gridAutoRows: '1fr' }}
      >
        {Array.from({ length: CELLS }).map((_, i) =>
          isLit(i) ? (
            <div key={i} className="flex items-center justify-center">
              <motion.span
                className="rounded-[2px]"
                style={{ width: '9px', height: '6px', background: '#f97316' }}
                initial={{ opacity: 0.25 }}
                animate={{ opacity: [0.25, 0.95, 0.25] }}
                transition={{ duration: 2.6 + (i % 5) * 0.5, repeat: Infinity, ease: 'easeInOut', delay: (i % 11) * 0.28 }}
              />
            </div>
          ) : (
            <div key={i} className="flex items-center justify-center">
              <span className="rounded-[2px]" style={{ width: '9px', height: '6px', background: 'rgba(249,115,22,0.12)' }} />
            </div>
          )
        )}
      </div>
    </div>
  );
}

export function DdnIntroSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      {/* signature: living agent field */}
      <AgentField />

      {/* ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 55% 50% at 50% 46%, rgba(249,115,22,0.12) 0%, transparent 70%)' }}
      />

      {/* Bottom HUD */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="absolute bottom-6 left-8 right-8 lg:bottom-10 lg:left-16 lg:right-16 z-10 flex items-center justify-between"
      >
        <span className="text-[#fefefe]/45 text-xs sm:text-sm lg:text-base tracking-[0.32em] uppercase" style={{ fontFamily: MONO }}>
          Unicity Labs
        </span>
        <span className="text-[#fefefe]/45 text-xs sm:text-sm lg:text-base tracking-[0.28em] uppercase" style={{ fontFamily: MONO }}>
          Partnership Brief
        </span>
      </motion.div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-8 sm:px-12 lg:px-16 gap-7 lg:gap-9">

        {/* Co-brand lockup: Unicity × Alerix */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-7 sm:gap-11 lg:gap-14"
        >
          <img src="/UnicityLogo.svg" alt="Unicity" className="h-10 sm:h-14 lg:h-[76px] w-auto" />
          <span className="text-[#fefefe]/30 text-3xl sm:text-5xl lg:text-6xl font-light leading-none" style={{ fontFamily: MONO }}>×</span>
          <span className="text-[#fefefe] text-[44px] sm:text-[64px] lg:text-[92px] leading-none tracking-tight" style={{ fontFamily: ANTON }}>
            ALERIX
          </span>
        </motion.div>

        {/* Accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.55 }}
          className="h-[2px] w-40 sm:w-56 lg:w-72 bg-gradient-to-r from-transparent via-orange-500 to-transparent origin-center"
        />

        {/* Connective setup */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          className="text-[#fefefe]/55 text-sm sm:text-base lg:text-lg leading-snug text-center max-w-3xl"
          style={{ fontFamily: MONO }}
        >
          <span className="text-[#fefefe]/80">Unicity Labs</span>, the product factory for Aleria AI, is building the infrastructure for
        </motion.p>

        {/* Payoff — the display statement */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-orange-400 text-[38px] sm:text-[54px] lg:text-[76px] xl:text-[86px] leading-[0.92] tracking-tight uppercase text-center"
          style={{ fontFamily: ANTON, textShadow: '0 0 40px rgba(249,115,22,0.35)' }}
        >
          Autonomous, Verifiable AI.
        </motion.h1>
      </div>
    </div>
  );
}
