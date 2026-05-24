import { motion } from 'framer-motion';

export function ProblemSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">

      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-10 sm:py-14 lg:py-16 justify-center gap-8 lg:gap-12">

        {/* Eyebrow — connects back to the previous slide's "who runs it" question */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-orange-400 text-xs sm:text-sm lg:text-base tracking-[0.4em] uppercase font-bold shrink-0"
          style={{ fontFamily: "'Geist Mono', monospace" }}
        >
          Why now
        </motion.p>

        {/* Massive headline */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-[56px] sm:text-[88px] lg:text-[128px] xl:text-[148px] leading-[0.92] tracking-tight uppercase shrink-0 -mt-4 lg:-mt-6"
          style={{ fontFamily: "'Anton', sans-serif" }}
        >
          <span className="text-[#fefefe]">THE FOURTH REBUILD</span>{' '}
          <span className="text-orange-400">OF COMPUTE.</span>
        </motion.h1>

        {/* Era progression — Mobile pulled out as the telco's last win */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="text-xl sm:text-2xl lg:text-[32px] leading-snug shrink-0"
          style={{ fontFamily: "'Geist Mono', monospace" }}
        >
          <span className="text-[#fefefe]/55">Mainframe</span>
          <span className="text-[#fefefe]/35"> → </span>
          <span className="text-[#fefefe]/55">Client-server</span>
          <span className="text-[#fefefe]/35"> → </span>
          <span className="text-[#fefefe]/55">Cloud</span>
          <span className="text-[#fefefe]/35"> → </span>
          <span className="text-[#fefefe] font-bold">Mobile</span>
          <span className="text-orange-400"> → Agentic</span>
        </motion.p>

        {/* Tagline — bridges Mobile → Agentic for a telco audience */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-lg sm:text-xl lg:text-2xl xl:text-[1.75rem] leading-relaxed shrink-0 max-w-6xl"
          style={{
            fontFamily:
              '"Helvetica Neue", Helvetica, Arial, sans-serif',
          }}
        >
          <span className="text-[#fefefe] font-semibold">You shipped Mobile.</span>{' '}
          <span className="text-[#fefefe]/85">Agentic is next — and it needs</span>{' '}
          <span className="text-orange-400 font-semibold">identity, execution, governance, and payments</span>{' '}
          <span className="text-[#fefefe]/85">rebuilt for machines without a human in the loop.</span>
        </motion.p>

      </div>
    </div>
  );
}
