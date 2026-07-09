import { motion } from 'framer-motion';

const mono = "'Geist Mono', monospace";
const display = "'Anton', sans-serif";
const sans = '"Helvetica Neue", Helvetica, Arial, sans-serif';

type Card = {
  num: string;
  benefit: React.ReactNode;
  desc: string;
  feature: React.ReactNode;
  highlight?: boolean;
};

const cards: Card[] = [
  {
    num: '01 · Securely',
    benefit: 'Prompt-proof boundaries',
    desc: "The agent runs inside your kernel, on your infrastructure. Every regulated action is intercepted in-path — security can't be bypassed, and data never leaves your network.",
    feature: (
      <>
        <span className="text-[#cfcfcf] font-medium">AOS enforcement kernel</span>
        {' · in-path, unbypassable'}
      </>
    ),
  },
  {
    num: '02 · Efficiently',
    benefit: (
      <>
        A price point that<br />
        works at scale
      </>
    ),
    desc: "Intelligent routing sends each task to the cheapest model that can handle it, and multi-tenancy packs many agents onto the same hardware. Together they bring the cost per agent low enough to run one on every line — thin hospital margins included.",
    feature: (
      <>
        <span className="text-[#cfcfcf] font-medium">Intelligent routing + multi-tenancy</span>
        {' · cost per agent that scales'}
      </>
    ),
    highlight: true,
  },
  {
    num: '03 · Provably',
    benefit: 'Provable, not just observed',
    desc: "Every regulated action lands in a tamper-evident record. You don't infer what an agent did from scattered logs — you have one definitive, audit-ready answer. Exactly what an EU AI Act deployer is legally required to hold.",
    feature: (
      <>
        <span className="text-[#cfcfcf] font-medium">Tamper-evident audit</span>
        {' · AI Act deployer-ready'}
      </>
    ),
  },
];

export function WhyDifferentSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">

      {/* Subtle dotted background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '34px 34px',
        }}
      />

      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-8 lg:py-12 gap-5 lg:gap-7">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-400 text-[10px] sm:text-xs lg:text-sm tracking-[0.4em] uppercase font-bold"
            style={{ fontFamily: mono }}
          >
            Why we're different
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[40px] sm:text-[60px] lg:text-[88px] xl:text-[104px] leading-[0.95] tracking-tight uppercase mt-2"
            style={{ fontFamily: display }}
          >
            BUILT TO RUN AGENTS AT SCALE —<br />
            <span className="text-orange-400">SECURELY, EFFICIENTLY, PROVABLY.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-[#cfcfcf] text-sm sm:text-base lg:text-lg leading-relaxed mt-4 lg:mt-5 max-w-5xl"
            style={{ fontFamily: sans }}
          >
            <span className="text-[#fefefe] font-medium">Unicity is the first secure, efficient, and provable agent compute platform</span>{' '}
            — the layer a hospital&apos;s compliance officer signs off on before an agent touches a patient.
          </motion.p>
        </div>

        {/* 3 cards */}
        <div className="grid grid-cols-3 gap-4 lg:gap-6 shrink-0">
          {cards.map((c, i) => (
            <motion.div
              key={c.num}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
              className="rounded-2xl px-5 lg:px-6 py-5 lg:py-7 flex flex-col"
              style={{
                background: c.highlight
                  ? 'rgba(255,106,0,0.06)'
                  : 'rgba(255,255,255,0.012)',
                border: c.highlight
                  ? '1px solid rgba(255,106,0,0.55)'
                  : '1px solid #2c2c2c',
              }}
            >
              <p
                className={`text-[10px] sm:text-xs lg:text-sm tracking-[0.24em] uppercase ${
                  c.highlight ? 'text-orange-400' : 'text-[#9a9a9a]'
                }`}
                style={{ fontFamily: mono }}
              >
                {c.num}
              </p>
              <p
                className={`text-xl sm:text-2xl lg:text-3xl xl:text-[2rem] font-bold leading-[1.04] mt-3 lg:mt-4 ${
                  c.highlight ? 'text-orange-400' : 'text-[#fefefe]'
                }`}
                style={{ fontFamily: display }}
              >
                {c.benefit}
              </p>
              <p
                className="text-[#b4b4b4] text-xs sm:text-sm lg:text-base leading-relaxed mt-3 lg:mt-4"
                style={{ fontFamily: sans }}
              >
                {c.desc}
              </p>
              <p
                className="text-[#8a8a8a] text-[10px] sm:text-xs lg:text-sm leading-snug mt-auto pt-3 lg:pt-4"
                style={{
                  fontFamily: sans,
                  borderTop: '1px solid #1e1e1e',
                }}
              >
                {c.feature}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
