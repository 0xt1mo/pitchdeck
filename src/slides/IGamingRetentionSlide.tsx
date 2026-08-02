import { motion } from 'framer-motion';

const display = "'Anton', sans-serif";
const mono = "'Geist Mono', monospace";

export function IGamingRetentionSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-16 py-8 lg:py-12 justify-center">

        <div className="grid grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 items-center">

          {/* Left — copy */}
          <div className="flex flex-col">
            <motion.h1
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="text-[#fefefe] text-[26px] sm:text-[36px] lg:text-[44px] xl:text-[50px] leading-[0.98] tracking-tight uppercase"
              style={{ fontFamily: display }}
            >
              EXAMPLE SOLUTION: <span className="text-orange-400">iGaming agentic CRM.</span>
            </motion.h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-[2px] w-24 lg:w-32 bg-orange-500 origin-left mt-5"
              style={{ boxShadow: '0 0 8px rgba(249,115,22,0.7)' }}
            />

            {/* Stat */}
            <div className="flex items-baseline gap-4 mt-7">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-[#fefefe]/60 text-[56px] lg:text-[84px] leading-[0.9] uppercase"
                style={{ fontFamily: display }}
              >
                92%
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
                className="text-orange-400 text-[56px] lg:text-[84px] leading-[0.9] uppercase"
                style={{ fontFamily: display }}
              >
                Ignored.
              </motion.span>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-[#fefefe]/75 text-base sm:text-lg leading-relaxed max-w-xl mt-6"
              style={{ fontFamily: mono }}
            >
              Operators spend <span className="text-[#fefefe] font-semibold">$5–10 per active player per year</span> on CRM platforms to send promotional emails that ninety-two per cent never open. The agent is the channel the player already uses — the Friday reload arrives in chat, when it matters.{' '}
              <span className="text-orange-400 font-semibold">Delivered: one hundred per cent.</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="text-[#fefefe]/65 text-lg sm:text-xl lg:text-2xl leading-tight tracking-tight uppercase pt-5 mt-6"
              style={{ fontFamily: display, borderTop: '1px solid rgba(249,115,22,0.25)' }}
            >
              The CRM stack was a workaround.{' '}
              <span className="text-orange-400">The agent makes the channel alive again.</span>
            </motion.p>
          </div>

          {/* Right — phone screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative justify-self-center p-6"
          >
            {/* Bracket corners */}
            <span className="absolute top-0 left-0 w-5 h-5 border-l-2 border-t-2 border-orange-500" />
            <span className="absolute top-0 right-0 w-5 h-5 border-r-2 border-t-2 border-orange-500" />
            <span className="absolute bottom-0 left-0 w-5 h-5 border-l-2 border-b-2 border-orange-500" />
            <span className="absolute bottom-0 right-0 w-5 h-5 border-r-2 border-b-2 border-orange-500" />

            <img
              src="/images/casino-retention.png"
              alt="Concierge applying the Friday reload bonus to the player's wallet"
              className="block mx-auto w-auto max-h-[560px] lg:max-h-[640px]"
              style={{ filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.6))' }}
            />
          </motion.div>

        </div>
      </div>
    </div>
  );
}
