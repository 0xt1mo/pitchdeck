import { motion } from 'framer-motion';

const ANTON = "'Anton', sans-serif";
const MONO = "'Geist Mono', monospace";

const rois: { num: React.ReactNode; size?: string; label: string; text: React.ReactNode; tail: string }[] = [
  {
    num: <>1000<span className="text-orange-400">×</span></>,
    label: 'Runtime cost collapse',
    text: <>Capsules on a shared kernel replace one warm container per agent — <span className="text-[#fefefe] font-bold">cost per agent falls by orders of magnitude</span>, idle burn to ~zero. Lower cost per token, more tokens per watt.</>,
    tail: 'measured: 54× faster launch than Docker',
  },
  {
    num: <><span className="text-[0.72em]">TB→GB</span><span className="text-orange-400">/day</span></>,
    label: 'Storage economics inverted',
    text: <>Content-addressed dedup stores <span className="text-[#fefefe] font-bold">novel bytes, not gross bytes.</span> Unlimited snapshots, full history and instant rollback ship as <span className="text-[#fefefe] font-bold">free features</span> a naive-storage rival has to meter.</>,
    tail: 'a different cost curve, not a discount',
  },
  {
    num: <>Enterprise <span className="text-orange-400">ACV</span></>,
    size: 'clamp(24px, 3vw, 40px)',
    label: 'Contract size',
    text: <>Audit by construction clears regulated procurement — EU AI Act, SOC 2, FSI, healthcare. <span className="text-[#fefefe] font-bold">The ACV gap between selling to dev teams and to banks, hospitals and governments.</span></>,
    tail: 'compliance with zero margin penalty',
  },
];

export function DdnRoiSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />
      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-8 lg:py-9 gap-4 lg:gap-5">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-orange-400 text-xs lg:text-sm tracking-[0.22em] uppercase mb-2.5"
            style={{ fontFamily: MONO }}
          >
            Unicity AOS × Alerix · The upside, in numbers
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06, duration: 0.6 }}
            className="text-[#fefefe] text-[26px] sm:text-[38px] lg:text-[50px] xl:text-[56px] leading-[1.0] tracking-tight uppercase max-w-6xl"
            style={{ fontFamily: ANTON }}
          >
            The economics — <span className="text-orange-400">three multipliers.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-3 text-[#fefefe]/70 text-base lg:text-lg leading-snug max-w-5xl"
            style={{ fontFamily: MONO }}
          >
            The partnership economics aren't a new market bet — <span className="text-[#fefefe] font-bold">existing customers, existing hardware, existing deals, each one multiplied.</span>
          </motion.p>
        </div>

        {/* ROI blocks */}
        <div className="flex gap-4 lg:gap-5 items-stretch">
          {rois.map((r, i) => (
            <motion.div
              key={r.label}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32 + i * 0.12, duration: 0.5 }}
              className="flex-1 rounded-xl border border-white/10 bg-white/[0.02] border-t-[3px] border-t-orange-500 px-5 py-4 lg:px-6 lg:py-5 flex flex-col"
            >
              <p className="text-[#fefefe] leading-none whitespace-nowrap" style={{ fontFamily: ANTON, fontSize: r.size ?? 'clamp(34px, 4.2vw, 52px)' }}>{r.num}</p>
              <p className="text-orange-400 text-xs lg:text-sm tracking-[0.16em] uppercase mt-3 mb-3" style={{ fontFamily: MONO }}>{r.label}</p>
              <p className="text-[#fefefe]/70 text-sm lg:text-[17px] leading-snug flex-1" style={{ fontFamily: MONO }}>{r.text}</p>
              <p className="text-[#fefefe]/45 text-xs lg:text-sm leading-snug mt-3 pt-3" style={{ fontFamily: MONO, borderTop: '1px solid rgba(255,255,255,0.10)' }}>{r.tail}</p>
            </motion.div>
          ))}
        </div>

        {/* What Alerix books */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.5 }}
          className="shrink-0 rounded-xl px-6 py-3.5 flex items-center gap-5"
          style={{ border: '1px solid rgba(249,115,22,0.4)', background: 'rgba(249,115,22,0.04)' }}
        >
          <p className="text-orange-400 text-xs lg:text-sm tracking-[0.16em] uppercase shrink-0 leading-snug" style={{ fontFamily: MONO }}>What Alerix<br />books</p>
          <p className="text-[#fefefe]/80 text-sm lg:text-base leading-snug" style={{ fontFamily: MONO }}>
            <span className="text-[#fefefe] font-bold">Runtime attach on every AI factory sold</span> — a workload that hammers your storage around the clock. <span className="text-[#fefefe] font-bold">The OS sells the infrastructure; the infrastructure ships the OS.</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
