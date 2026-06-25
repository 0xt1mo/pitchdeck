import { motion } from 'framer-motion';

export function CasinoRetentionSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-12 lg:px-20 py-10 lg:py-14 justify-center gap-8">

        <div className="grid grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center">

          {/* Left column — copy */}
          <div className="flex flex-col">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-orange-400 text-xs sm:text-sm tracking-[0.32em] uppercase font-semibold"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              No. 04 · Retention
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="text-[#fefefe] text-[32px] sm:text-[44px] lg:text-[64px] leading-[0.98] tracking-tight mt-3 uppercase"
              style={{ fontFamily: "'Anton', sans-serif" }}
            >
              Retention becomes{' '}
              <span className="text-orange-400">a conversation.</span>
            </motion.h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-[2px] w-24 lg:w-32 bg-orange-500 origin-left mt-5"
              style={{ boxShadow: '0 0 8px rgba(249,115,22,0.7)' }}
            />

            {/* Stat */}
            <div className="flex items-baseline gap-4 mt-8">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-[#fefefe]/60 text-[64px] lg:text-[88px] leading-[0.9] uppercase"
                style={{ fontFamily: "'Anton', sans-serif" }}
              >
                92%
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
                className="text-orange-400 text-[64px] lg:text-[88px] leading-[0.9] uppercase"
                style={{ fontFamily: "'Anton', sans-serif" }}
              >
                Ignored.
              </motion.span>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-[#fefefe]/75 text-base sm:text-lg leading-relaxed max-w-xl mt-7"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              Operators spend <span className="text-[#fefefe] font-semibold">$5–10 per active player per year</span> on CRM platforms to push promo emails that ninety-two percent never open. The agent is the channel the player already uses — the Friday reload lands in chat, at the right moment.{' '}
              <span className="text-orange-400 font-semibold">Delivered: one hundred percent.</span>
            </motion.p>
          </div>

          {/* Right column — retention screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative justify-self-center w-full max-w-[420px] p-8"
          >
            {/* Bracket corners */}
            <span className="absolute top-0 left-0 w-5 h-5 border-l-2 border-t-2 border-orange-500" />
            <span className="absolute top-0 right-0 w-5 h-5 border-r-2 border-t-2 border-orange-500" />
            <span className="absolute bottom-0 left-0 w-5 h-5 border-l-2 border-b-2 border-orange-500" />
            <span className="absolute bottom-0 right-0 w-5 h-5 border-r-2 border-b-2 border-orange-500" />

            <img
              src="/images/casino-retention.png"
              alt="Concierge applying the Friday reload bonus to the player's wallet"
              className="block mx-auto w-full max-w-[340px] h-auto"
              style={{ filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.6))' }}
            />
          </motion.div>

        </div>
      </div>
    </div>
  );
}
