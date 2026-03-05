import { motion } from 'framer-motion';
import splashVideoUrl from '/kling_20260226_VIDEO_Take_Image_1650_0.mp4';
import unicityLogoUrl from '/UnicityLogo.svg';

const humanTraits = [
  { label: 'Fragmentation by Necessity' },
  { label: 'Forced Specialization' },
  { label: 'Complex Smart Contract Languages' },
];

const machineTraits = [
  { label: 'Frictionless P2P at Internet Speed', sub: '10e-8 USD per TX · Unlimited throughput' },
  { label: 'Universal & Chain/Asset Agnostic' },
  { label: 'Unified Computational Substrate', sub: 'Web2 SDK · Any language, any runtime' },
];

export function PaymentsSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-y-auto">
      {/* Video background */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <video className="w-full h-full object-cover opacity-40" autoPlay muted loop playsInline src={splashVideoUrl} />
        <div className="absolute inset-0 bg-[#060606]/30" />
      </div>

      <div className="relative z-10 h-full flex flex-col">

        {/* ── Top bar ── */}
        <div className="px-6 sm:px-10 lg:px-16 pt-8 sm:pt-10 pb-4">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-400 text-[10px] sm:text-xs tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Appendix — Payments
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[32px] sm:text-[44px] lg:text-[56px] leading-[0.95] tracking-tight mt-1"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            A2A MICROPAYMENTS
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] w-32 sm:w-48 bg-gradient-to-r from-orange-500 to-transparent origin-left mt-2"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-2 text-[#fefefe]/80 text-xs sm:text-sm lg:text-base max-w-3xl leading-relaxed"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Each token is itself a blockchain — self authenticating with the{' '}
            <span className="text-orange-400">same trust model as Bitcoin</span>.
            {' '}No shared ledger. Just verifiable tokens moving P2P around the internet, at{' '}
            <span className="text-orange-400">massive scale</span>
          </motion.p>
        </div>

        {/* ── Main battle area ── */}
        <div className="flex-1 flex items-stretch relative min-h-0">

          {/* ═══ Left half: Human Finance ═══ */}
          <div className="flex-1 relative flex flex-col items-center justify-center px-4 sm:px-8">

            {/* Dim red wash */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-transparent pointer-events-none" />

            {/* Column header */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-center mb-5 sm:mb-7"
            >
              <h2
                className="text-[#fefefe]/70 text-[40px] sm:text-[52px] lg:text-[64px] leading-none"
                style={{ fontFamily: "'Anton', sans-serif" }}
              >
                HUMAN<br />FINANCE
              </h2>
            </motion.div>

            {/* Central block */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative w-44 h-44 sm:w-52 sm:h-52 lg:w-60 lg:h-60 rounded-full border border-red-400/25 bg-white/[0.04] flex items-center justify-center mb-5 sm:mb-7"
            >
              {/* Broken/cracked styling */}
              <div className="absolute inset-[3px] rounded-full border border-dashed border-red-400/20" />
              <p
                className="text-[#fefefe] text-center text-base sm:text-lg lg:text-xl leading-snug"
                style={{ fontFamily: "'Anton', sans-serif", letterSpacing: '0.04em' }}
              >
                SHARED<br />LEDGER<br />BLOCKCHAINS
              </p>
            </motion.div>

            {/* Traits */}
            <div className="space-y-3 w-full max-w-sm">
              {humanTraits.map((trait, i) => (
                <motion.div
                  key={trait.label}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + i * 0.12, duration: 0.5 }}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg border border-red-400/20 bg-red-500/[0.06]"
                >
                  {/* Red X */}
                  <div className="w-7 h-7 rounded-full bg-red-500/25 flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 text-red-400">
                      <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <p
                    className="text-[#fefefe]/90 text-xs sm:text-sm uppercase tracking-wider"
                    style={{ fontFamily: "'Geist Mono', monospace" }}
                  >
                    {trait.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ═══ Center divider ═══ */}
          <div className="relative w-16 sm:w-20 flex items-center justify-center z-20">
            {/* Vertical line */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute inset-y-0 w-[2px] bg-gradient-to-b from-transparent via-orange-500/60 to-transparent origin-center"
            />
            {/* Glow pulse */}
            <motion.div
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-1/2 -translate-y-1/2 w-16 h-40 bg-orange-500/15 blur-[40px] rounded-full pointer-events-none"
            />
            {/* VS badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.5, type: 'spring', stiffness: 200 }}
              className="relative z-30 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#0a0a0a] border-2 border-orange-500/40 flex items-center justify-center shadow-[0_0_30px_rgba(249,115,22,0.2)]"
            >
              <span
                className="text-orange-400 text-sm sm:text-base font-black"
                style={{ fontFamily: "'Anton', sans-serif" }}
              >
                VS
              </span>
            </motion.div>
          </div>

          {/* ═══ Right half: Machine Finance ═══ */}
          <div className="flex-1 relative flex flex-col items-center justify-center px-4 sm:px-8">

            {/* Orange energy wash */}
            <div className="absolute inset-0 bg-gradient-to-l from-orange-500/[0.06] to-transparent pointer-events-none" />
            {/* Corner glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/[0.08] rounded-full blur-[120px] pointer-events-none -translate-y-1/3 translate-x-1/3" />

            {/* Column header */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-center mb-5 sm:mb-7"
            >
              <h2
                className="text-orange-400 text-[40px] sm:text-[52px] lg:text-[64px] leading-none"
                style={{ fontFamily: "'Anton', sans-serif" }}
              >
                MACHINE<br />FINANCE
              </h2>
            </motion.div>

            {/* Central block — glowing */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative w-44 h-44 sm:w-52 sm:h-52 lg:w-60 lg:h-60 rounded-full border border-orange-500/20 bg-orange-500/[0.04] flex items-center justify-center mb-5 sm:mb-7"
            >
              {/* Animated ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-[-4px] rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, transparent 0%, rgba(249,115,22,0.3) 25%, transparent 50%, rgba(249,115,22,0.15) 75%, transparent 100%)',
                }}
              />
              {/* Inner glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-500/15 to-transparent" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-orange-500/15 rounded-full blur-[50px] pointer-events-none" />
              <p
                className="text-orange-400 text-center text-base sm:text-lg lg:text-xl leading-snug relative z-10"
                style={{ fontFamily: "'Anton', sans-serif", letterSpacing: '0.04em' }}
              >
                UNICITY<br />TOKEN<br />BLOCKCHAINS
              </p>
            </motion.div>

            {/* Traits */}
            <div className="space-y-3 w-full max-w-sm">
              {machineTraits.map((trait, i) => (
                <motion.div
                  key={trait.label}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + i * 0.12, duration: 0.5 }}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg border border-orange-500/20 bg-orange-500/[0.04]"
                >
                  {/* Check */}
                  <div className="w-7 h-7 rounded-full bg-orange-500/20 flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 text-orange-400">
                      <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                  </div>
                  <div>
                    <p
                      className="text-[#fefefe]/90 text-xs sm:text-sm uppercase tracking-wider"
                      style={{ fontFamily: "'Geist Mono', monospace" }}
                    >
                      {trait.label}
                    </p>
                    {trait.sub && (
                      <p
                        className="text-[#fefefe]/50 text-[11px] sm:text-xs tracking-wider mt-0.5"
                        style={{ fontFamily: "'Geist Mono', monospace" }}
                      >
                        {trait.sub}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

        {/* ── Bottom logo ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="px-6 sm:px-10 lg:px-16 pb-6 sm:pb-8 flex justify-end"
        >
          <img src={unicityLogoUrl} alt="Unicity" className="h-5 opacity-60" />
        </motion.div>

      </div>
    </div>
  );
}
