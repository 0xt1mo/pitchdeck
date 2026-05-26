import { motion } from 'framer-motion';

const mono = "'Geist Mono', monospace";
const display = "'Anton', sans-serif";

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
    benefit: 'Secure by architecture',
    desc: "The agent runs inside your kernel, on your infrastructure. Every action is intercepted in-path — security can't be bypassed, and data never leaves your network.",
    feature: (
      <>
        <span className="text-[#cfcfcf] font-bold block">AOS enforcement kernel</span>
        <span className="block mt-0.5">in-path, unbypassable</span>
      </>
    ),
  },
  {
    num: '02 · Efficiently',
    benefit: 'A price point that works at scale',
    desc: "Intelligent routing sends each task to the cheapest model that can handle it, and multi-tenancy packs many agents onto the same hardware. Together they bring the cost per agent low enough to run one per USDT holder — at unit economics that work at billion-user scale.",
    feature: (
      <>
        <span className="text-[#cfcfcf] font-bold block">Intelligent routing + multi-tenancy</span>
        <span className="block mt-0.5">cost per agent that scales</span>
      </>
    ),
    highlight: true,
  },
  {
    num: '03 · Provably',
    benefit: 'Provable, not just observed',
    desc: "Every agent action lands in a tamper-evident record. You don't infer what an agent did from scattered logs — you have one definitive, audit-ready answer for regulators and customers.",
    feature: (
      <>
        <span className="text-[#cfcfcf] font-bold block">Tamper-evident audit</span>
        <span className="block mt-0.5">one definitive record</span>
      </>
    ),
  },
];

export function WhyDifferentSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">

      {/* Background grid texture — match the rest of the content slides */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-10 lg:py-14 gap-6 lg:gap-10">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-400 text-[10px] sm:text-xs lg:text-sm tracking-[0.4em] uppercase font-bold"
            style={{ fontFamily: mono }}
          >
            Why we’re different
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[32px] sm:text-[44px] lg:text-[60px] xl:text-[72px] leading-[0.96] tracking-tight uppercase mt-3"
            style={{ fontFamily: display }}
          >
            <span className="block">BUILT TO RUN AGENTS AT SCALE —</span>
            <span className="block text-orange-400">SECURELY, EFFICIENTLY, PROVABLY.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-[#cfcfcf] text-xs sm:text-sm lg:text-base leading-[1.55] mt-4 lg:mt-5 max-w-5xl"
            style={{ fontFamily: mono }}
          >
            <span className="text-[#fefefe] font-bold">Unicity is the first secure, efficient, and provable agent compute platform</span>{' '}
            — built for agents that move real money.
          </motion.p>
        </div>

        {/* 3 cards */}
        <div className="grid grid-cols-3 gap-4 lg:gap-5 shrink-0">
          {cards.map((c, i) => (
            <motion.div
              key={c.num}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
              className="rounded-2xl px-5 lg:px-6 py-5 lg:py-6 flex flex-col"
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
                className={`text-[10px] sm:text-xs lg:text-sm tracking-[0.28em] uppercase font-bold ${
                  c.highlight ? 'text-orange-400' : 'text-[#9a9a9a]'
                }`}
                style={{ fontFamily: mono }}
              >
                {c.num}
              </p>
              <p
                className={`text-xl sm:text-2xl lg:text-[28px] xl:text-[32px] leading-[1.05] tracking-tight uppercase mt-3 lg:mt-4 ${
                  c.highlight ? 'text-orange-400' : 'text-[#fefefe]'
                }`}
                style={{ fontFamily: display }}
              >
                {c.benefit}
              </p>
              <p
                className="text-[#b4b4b4] text-[11px] sm:text-xs lg:text-sm leading-[1.55] mt-3 lg:mt-4 mb-5 lg:mb-7"
                style={{ fontFamily: mono }}
              >
                {c.desc}
              </p>
              <div
                className="text-[#8a8a8a] text-[10px] sm:text-xs lg:text-sm leading-snug mt-auto pt-4 lg:pt-5"
                style={{
                  fontFamily: mono,
                  borderTop: '1px solid #2a2a2a',
                }}
              >
                {c.feature}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
