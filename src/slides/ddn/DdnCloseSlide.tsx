import { motion } from 'framer-motion';

const ANTON = "'Anton', sans-serif";
const MONO = "'Geist Mono', monospace";

const ease = [0.16, 1, 0.3, 1] as const;

const status: { k: string; v: string }[] = [
  { k: 'Mainnet', v: 'August 2026' },
  { k: 'AOS live', v: 'aos.unicity.ai' },
  { k: 'Soft-launched', v: 'July 2026' },
];

export function DdnCloseSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      {/* grid + glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 75% 70% at 50% 45%, #000 30%, transparent 82%)',
          WebkitMaskImage: 'radial-gradient(ellipse 75% 70% at 50% 45%, #000 30%, transparent 82%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 60% 55% at 50% 42%, rgba(249,115,22,0.10) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-12 gap-8 lg:gap-10 max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs lg:text-sm tracking-[0.22em] uppercase text-[#fefefe]/55"
          style={{ fontFamily: MONO }}
        >
          <span className="text-orange-400">Unicity AOS</span>
          <span className="text-[#fefefe]/30 mx-2.5">×</span>
          DDN
        </motion.div>

        {/* Kicker */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7, ease }}
          className="text-[#fefefe] text-[34px] sm:text-[52px] lg:text-[68px] xl:text-[78px] leading-[0.98] tracking-tight uppercase"
          style={{ fontFamily: ANTON }}
        >
          The next benchmark isn't <span className="text-[#fefefe]/45">GB/s to the GPU.</span><br />
          It's <span className="text-orange-400">agents per node & time to first token.</span>
        </motion.h1>

        {/* Status line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-6"
          style={{ borderTop: '1px solid rgba(255,255,255,0.10)' }}
        >
          {status.map((s) => (
            <div key={s.k} className="flex items-baseline gap-2.5" style={{ fontFamily: MONO }}>
              <span className="text-[#fefefe]/40 text-[11px] lg:text-xs tracking-[0.16em] uppercase">{s.k}</span>
              <span className="text-[#fefefe] text-sm lg:text-base">{s.v}</span>
            </div>
          ))}
        </motion.div>

        {/* The ask */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6, ease }}
          className="rounded-xl px-6 py-5 flex items-center gap-4"
          style={{ border: '1px solid rgba(249,115,22,0.4)', background: 'rgba(249,115,22,0.04)' }}
        >
          <span className="text-orange-400 text-sm lg:text-base tracking-[0.16em] uppercase shrink-0" style={{ fontFamily: MONO }}>The ask</span>
          <span className="text-[#fefefe] text-base lg:text-xl leading-snug" style={{ fontFamily: MONO }}>
            A <span className="text-orange-400 font-bold">90-minute technical session</span> with Sven's team.
          </span>
        </motion.div>
      </div>
    </div>
  );
}
