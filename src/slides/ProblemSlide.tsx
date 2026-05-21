import { motion } from 'framer-motion';

export function ProblemSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">

      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-10 sm:py-14 lg:py-16 justify-center gap-10 lg:gap-14">

        {/* Massive headline */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-[56px] sm:text-[88px] lg:text-[128px] xl:text-[148px] leading-[0.92] tracking-tight uppercase shrink-0"
          style={{ fontFamily: "'Anton', sans-serif" }}
        >
          <span className="text-[#fefefe]">THE FOURTH REBUILD</span>{' '}
          <span className="text-orange-400">OF COMPUTE.</span>
        </motion.h1>

        {/* Era progression */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="text-xl sm:text-2xl lg:text-[32px] leading-snug shrink-0"
          style={{ fontFamily: "'Geist Mono', monospace" }}
        >
          <span className="text-[#fefefe]">Mainframe</span>
          <span className="text-orange-400"> → </span>
          <span className="text-[#fefefe]">Client-server</span>
          <span className="text-orange-400"> → </span>
          <span className="text-[#fefefe]">Cloud</span>
          <span className="text-orange-400"> → </span>
          <span className="text-[#fefefe]">Mobile</span>
          <span className="text-orange-400"> → AI</span>
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-xl sm:text-2xl lg:text-[32px] leading-snug shrink-0"
          style={{ fontFamily: "'Geist Mono', monospace" }}
        >
          <span className="text-[#fefefe]">Identity. Execution. Governance. Payments.</span>
          <br />
          <span className="text-orange-400">All need to be rebuilt for AI Agents without a human in the loop.</span>
        </motion.p>

      </div>
    </div>
  );
}
