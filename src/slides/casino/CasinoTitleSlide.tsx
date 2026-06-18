import { motion } from 'framer-motion';

export function CasinoTitleSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 45%, rgba(249,115,22,0.10), transparent 70%)',
        }}
      />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-12">

        {/* Wordmark */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-10"
        >
          <span
            className="text-[#fefefe] text-2xl sm:text-3xl tracking-[0.22em]"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            UNICITY
          </span>
          <span className="block w-px h-6 bg-orange-500" />
          <span
            className="text-orange-400 text-[11px] sm:text-xs tracking-[0.32em] uppercase font-semibold"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Para Operadores de Cassino
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#fefefe] text-[56px] sm:text-[88px] lg:text-[120px] leading-[0.9] tracking-tight uppercase max-w-6xl"
          style={{ fontFamily: "'Anton', sans-serif" }}
        >
          Agentes na{' '}
          <span className="text-orange-400">porta da frente.</span>
        </motion.h1>

        {/* Rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="h-[2px] w-28 lg:w-40 bg-orange-500 mt-10 mb-8"
          style={{ boxShadow: '0 0 8px rgba(249,115,22,0.7)' }}
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-[#fefefe]/75 text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-3xl"
          style={{ fontFamily: "'Geist Mono', monospace" }}
        >
          O OS de AI Seguro para operadores de cassino.
        </motion.p>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="absolute bottom-10 text-[#fefefe]/35 text-[11px] tracking-[0.28em] uppercase"
          style={{ fontFamily: "'Geist Mono', monospace" }}
        >
          Confidencial · 2026
        </motion.div>
      </div>
    </div>
  );
}
