import { motion } from 'framer-motion';

const ANTON = "'Anton', sans-serif";
const MONO = "'Geist Mono', monospace";
const ease = [0.16, 1, 0.3, 1] as const;

const asks: { big: string; label: string; detail: React.ReactNode }[] = [
  {
    big: '$2M',
    label: 'Investment',
    detail: <>To scale Unicity AOS and stand up the joint go-to-market for the agentic AI factory.</>,
  },
  {
    big: 'Product',
    label: 'Partnership',
    detail: <>Co-build and co-sell — <span className="text-[#fefefe] font-bold">Unicity AOS on Alerix / Aleria infrastructure</span>, one reference architecture.</>,
  },
];

export function DdnAskSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 60% 55% at 50% 44%, rgba(249,115,22,0.10) 0%, transparent 70%)' }}
      />
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

      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-12 gap-8 lg:gap-10 max-w-6xl mx-auto">

        <div>
          <motion.p
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs lg:text-sm tracking-[0.22em] uppercase text-[#fefefe]/55 mb-4"
            style={{ fontFamily: MONO }}
          >
            <span className="text-orange-400">Unicity AOS</span>
            <span className="text-[#fefefe]/30 mx-2.5">×</span>
            Alerix
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.7, ease }}
            className="text-[#fefefe] text-[44px] sm:text-[64px] lg:text-[84px] xl:text-[96px] leading-[0.95] tracking-tight uppercase"
            style={{ fontFamily: ANTON }}
          >
            The <span className="text-orange-400">ask.</span>
          </motion.h1>
        </div>

        {/* Two asks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
          {asks.map((a, i) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.12, duration: 0.5, ease }}
              className="rounded-xl px-7 py-6 lg:px-8 lg:py-7 flex flex-col"
              style={{ border: '1px solid rgba(249,115,22,0.4)', borderLeft: '3px solid #f97316', background: 'rgba(249,115,22,0.05)' }}
            >
              <p className="text-orange-400 leading-none" style={{ fontFamily: ANTON, fontSize: 'clamp(40px, 5vw, 68px)' }}>{a.big}</p>
              <p className="text-[#fefefe] text-lg lg:text-2xl uppercase tracking-[0.04em] mt-2" style={{ fontFamily: ANTON }}>{a.label}</p>
              <p className="text-[#fefefe]/70 text-sm lg:text-base leading-snug mt-3" style={{ fontFamily: MONO }}>{a.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
