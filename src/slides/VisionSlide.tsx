import { motion } from 'framer-motion';

const ANTON = "'Anton', sans-serif";
const MONO = "'Geist Mono', monospace";

const layers: { noun: string; mech: string; live?: boolean; status?: string }[] = [
  { noun: 'Execution', mech: 'Proof System', live: true },
  { noun: 'Code', mech: 'Formal methods', status: 'In development' },
  { noun: 'Reasoning', mech: 'Neurosymbolic' },
];

const products: { name: string; tag: string; price?: string; ghost?: boolean }[] = [
  { name: 'Concierge', tag: 'Telco', price: '$5 / sub' },
  { name: 'Ramukaka', tag: 'Banking', price: '$5 / cust.' },
  { name: 'Codewall', tag: 'Dev security', price: '$15 / dev' },
  { name: 'Compliance Gateway', tag: 'Healthcare', price: '$TBD' },
];

export function VisionSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 60% 55% at 50% 40%, rgba(249,115,22,0.10) 0%, transparent 70%)' }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-10 lg:py-12 gap-6 lg:gap-8">

        {/* Header */}
        <div className="shrink-0">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#fefefe] text-[34px] sm:text-[48px] lg:text-[62px] xl:text-[72px] leading-[0.96] tracking-tight uppercase max-w-6xl"
            style={{ fontFamily: ANTON }}
          >
            Our vision: autonomous, verifiable AI, <span className="text-orange-400">secure by construction.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-5 lg:mt-6 text-[#fefefe]/75 text-base sm:text-lg lg:text-xl leading-relaxed max-w-5xl"
            style={{ fontFamily: MONO }}
          >
            Our team consists of <span className="text-[#fefefe] font-bold">PhDs in machine learning, cryptography, formal methods and semantics.</span> We're building the infrastructure for verifiable autonomous AI — <span className="text-[#fefefe] font-bold">AIs that are formally verified, secure by construction, with safety properties guaranteed.</span>
          </motion.p>
        </div>

        {/* Layers we prove */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.42, duration: 0.5 }}
            className="text-[#fefefe]/40 text-[11px] lg:text-xs tracking-[0.22em] uppercase mb-3"
            style={{ fontFamily: MONO }}
          >
            Proven at every layer
          </motion.p>
          <div className="flex gap-3 lg:gap-4 items-stretch">
            {layers.map((l, i) => (
              <motion.div
                key={l.noun}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.48 + i * 0.1, duration: 0.45 }}
                className="flex-1 rounded-xl px-5 py-4 lg:px-6 lg:py-5 flex flex-col"
                style={
                  l.live
                    ? { border: '1px solid rgba(249,115,22,0.5)', borderLeft: '3px solid #f97316', background: 'rgba(249,115,22,0.06)' }
                    : { border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.02)' }
                }
              >
                <div className="flex items-center gap-2">
                  <p className={`text-2xl lg:text-4xl uppercase leading-none ${l.live ? 'text-orange-400' : 'text-[#fefefe]'}`} style={{ fontFamily: ANTON }}>{l.noun}</p>
                  {l.live && (
                    <span className="relative flex w-2 h-2 mt-1">
                      <span className="absolute inline-flex w-full h-full rounded-full bg-orange-400 opacity-60 animate-ping" />
                      <span className="relative inline-flex w-2 h-2 rounded-full bg-orange-400" />
                    </span>
                  )}
                </div>
                <p className="text-[#fefefe]/80 text-sm lg:text-base font-bold mt-2.5" style={{ fontFamily: MONO }}>{l.mech}</p>
                <p className="text-[#fefefe]/40 text-[10px] lg:text-xs tracking-[0.16em] uppercase mt-2" style={{ fontFamily: MONO }}>
                  {l.status ?? (l.live ? 'Live' : 'Under research')}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Products on the OS */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.72, duration: 0.5 }}
            className="text-[#fefefe]/40 text-[11px] lg:text-xs tracking-[0.22em] uppercase mb-3"
            style={{ fontFamily: MONO }}
          >
            Products on the OS
          </motion.p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
            {products.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.78 + i * 0.08, duration: 0.4 }}
                className="rounded-xl px-5 py-4 lg:px-6 lg:py-5 flex items-center justify-between gap-3"
                style={
                  p.ghost
                    ? { border: '1px dashed rgba(255,255,255,0.22)' }
                    : { border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.02)' }
                }
              >
                <div className="min-w-0">
                  <p className={`text-[10px] lg:text-xs tracking-[0.16em] uppercase ${p.ghost ? 'text-[#fefefe]/40' : 'text-orange-400'}`} style={{ fontFamily: MONO }}>{p.tag}</p>
                  <p className={`text-lg lg:text-2xl uppercase leading-none mt-1.5 ${p.ghost ? 'text-[#fefefe]/55' : 'text-[#fefefe]'}`} style={{ fontFamily: ANTON }}>{p.name}</p>
                </div>
                {p.price && <p className="text-orange-400 text-2xl lg:text-4xl leading-none shrink-0" style={{ fontFamily: ANTON }}>{p.price}</p>}
              </motion.div>
            ))}
          </div>

          {/* Moat / distribution thesis */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            className="text-xl sm:text-2xl lg:text-[30px] leading-tight mt-5 lg:mt-6"
            style={{ fontFamily: ANTON }}
          >
            <span className="text-[#fefefe]/60">The OS is the moat. Channel distribution is in place —</span> <span className="text-orange-400">we deliver the product roadmap.</span>
          </motion.p>
        </div>

      </div>
    </div>
  );
}
