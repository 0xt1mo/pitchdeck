import { motion } from 'framer-motion';

const mono = "'Geist Mono', monospace";
const display = "'Anton', sans-serif";

export function TelecomOpportunitySlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">

      {/* Background grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-10 lg:py-14 gap-6 lg:gap-8">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-orange-400 text-xs sm:text-sm lg:text-base tracking-[0.4em] uppercase font-bold shrink-0"
          style={{ fontFamily: mono }}
        >
          The Opportunity
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-[#fefefe] text-[36px] sm:text-[52px] lg:text-[80px] xl:text-[96px] leading-[0.95] tracking-tight uppercase shrink-0 -mt-2"
          style={{ fontFamily: display }}
        >
          EVERY SUBSCRIBER IS ABOUT TO GET A{' '}
          <span className="text-orange-400">PERSONAL AI AGENT.</span>
        </motion.h1>

        {/* Pull-quote — the strategic question, framed for impact */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="shrink-0 mt-4 lg:mt-6 flex items-start gap-5 lg:gap-7 max-w-6xl"
        >
          {/* Orange vertical rule — quote bar */}
          <div className="shrink-0 w-[3px] lg:w-[4px] self-stretch bg-orange-500 rounded-full" />

          <div
            className="flex flex-col gap-4 lg:gap-6"
            style={{ fontFamily: mono }}
          >
            <p className="text-[#fefefe] text-xl sm:text-2xl lg:text-3xl xl:text-[2.25rem] leading-[1.25] font-medium">
              The only question is{' '}
              <span className="text-orange-400 font-bold">who runs it.</span>
            </p>
            <p className="text-[#fefefe]/85 text-base sm:text-lg lg:text-xl xl:text-[1.5rem] leading-[1.45] font-light">
              Own that layer and it becomes your{' '}
              <span className="text-[#fefefe] font-semibold">highest-margin product since data.</span>
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
