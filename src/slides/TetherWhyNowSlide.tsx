import { motion } from 'framer-motion';

export function TetherWhyNowSlide() {
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

      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-10 sm:py-14 lg:py-16 justify-center gap-8 lg:gap-12">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-orange-400 text-xs sm:text-sm lg:text-base tracking-[0.4em] uppercase font-bold shrink-0"
          style={{ fontFamily: "'Geist Mono', monospace" }}
        >
          Why now
        </motion.p>

        {/* Massive headline — two lines */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-[56px] sm:text-[88px] lg:text-[128px] xl:text-[148px] leading-[0.92] tracking-tight uppercase shrink-0 -mt-4 lg:-mt-6"
          style={{ fontFamily: "'Anton', sans-serif" }}
        >
          <span className="text-[#fefefe] block">THE MONEY IS READY.</span>
          <span className="text-[#fefefe]">THE </span>
          <span className="text-orange-400">AGENTS ARE NOT.</span>
        </motion.h1>

        {/* Era progression — Tether's payments lineage */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="text-xl sm:text-2xl lg:text-[32px] leading-snug shrink-0"
          style={{ fontFamily: "'Geist Mono', monospace" }}
        >
          <span className="text-[#fefefe]/55">Cash</span>
          <span className="text-[#fefefe]/35"> → </span>
          <span className="text-[#fefefe]/55">Cards</span>
          <span className="text-[#fefefe]/35"> → </span>
          <span className="text-[#fefefe] font-bold">Stablecoins</span>
          <span className="text-orange-400"> → Agentic Money</span>
        </motion.p>

        {/* Closing paragraph — sets up Astrid OS as the missing layer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-sm sm:text-base lg:text-lg xl:text-xl leading-[1.5] shrink-0 max-w-6xl"
          style={{ fontFamily: "'Geist Mono', monospace" }}
        >
          <span className="text-[#fefefe] font-bold">Tether</span>{' '}
          <span className="text-[#fefefe]/85">already owns the strongest stablecoin network in the world.</span>{' '}
          <span className="text-[#fefefe] font-bold">QVAC</span>{' '}
          <span className="text-[#fefefe]/85">brings AI onto user devices.</span>{' '}
          <span className="text-[#fefefe] font-bold">WDK</span>{' '}
          <span className="text-[#fefefe]/85">gives that AI wallet access.</span>{' '}
          <span className="text-orange-400 font-bold">Astrid OS</span>{' '}
          <span className="text-[#fefefe]/85">gives those agents the operating layer: what they can access, sign, spend, and prove.</span>
        </motion.p>

      </div>
    </div>
  );
}
