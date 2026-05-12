import { motion } from 'framer-motion';

const lineage = [
  {
    num: '01',
    name: 'Estonia',
    label: 'Digital State',
    body: 'KSI used as the integrity layer for the national digital state infrastructure. Tamper-evident records at the scale of a sovereign government.',
  },
  {
    num: '02',
    name: 'NATO',
    label: 'Cyber Range',
    body: 'Cryptographic engineering cleared for use in NATO Cyber Range work. Operating in environments where the threat model is adversarial states.',
  },
  {
    num: '03',
    name: 'Verizon',
    label: 'Enterprise KSI',
    body: 'KSI-based services announced by Verizon Enterprise Solutions for enterprise and government customers in 2018. Tier-one telco deployment.',
  },
];

export function CasinoWhyUnicitySlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-12 lg:px-20 py-10 lg:py-14 justify-center gap-7">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-orange-400 text-xs sm:text-sm tracking-[0.32em] uppercase font-semibold"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Nº 13 · Why Unicity
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[28px] sm:text-[40px] lg:text-[54px] leading-[0.98] tracking-tight mt-3 uppercase"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            Fifteen years of{' '}
            <span className="text-orange-400">cryptographic infrastructure.</span>
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] w-24 lg:w-32 bg-orange-500 origin-left mt-5"
            style={{ boxShadow: '0 0 8px rgba(249,115,22,0.7)' }}
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-4 text-[#fefefe]/75 text-sm lg:text-base leading-relaxed max-w-5xl"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            KSI has been used in <span className="text-[#fefefe] font-semibold">high-assurance environments</span> where tamper-evident records and independently verifiable integrity are core requirements. The point is <span className="text-orange-400 font-semibold">operating memory</span> — this team has built for environments where records must be secure, independently verifiable, and controlled by the institution.
          </motion.p>
        </div>

        {/* 3 lineage pillars */}
        <div className="grid grid-cols-3 gap-8 lg:gap-12 shrink-0">
          {lineage.map((l, i) => (
            <motion.div
              key={l.name}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.12, duration: 0.55 }}
              className="relative pt-6 flex flex-col gap-2"
            >
              <span
                className="absolute top-0 left-0 h-[2px] w-12"
                style={{
                  background: '#FF6A1F',
                  boxShadow: '0 0 8px rgba(249,115,22,0.7)',
                }}
              />
              <p
                className="text-orange-400 text-[11px] tracking-[0.32em] uppercase font-semibold"
                style={{ fontFamily: "'Geist Mono', monospace" }}
              >
                {l.num} · {l.label}
              </p>
              <h3
                className="text-[#fefefe] uppercase tracking-[0.02em] leading-[0.95]"
                style={{
                  fontFamily: "'Anton', sans-serif",
                  fontSize: 'clamp(40px, 4.5vw, 64px)',
                }}
              >
                {l.name}
              </h3>
              <div
                className="h-[1px] w-8 my-1"
                style={{ background: 'rgba(254,254,254,0.30)' }}
              />
              <p
                className="text-[#fefefe]/75 text-[12px] lg:text-[13px] leading-[1.55]"
                style={{ fontFamily: "'Geist Mono', monospace" }}
              >
                {l.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="text-[#fefefe]/65 text-[20px] sm:text-[24px] lg:text-[30px] leading-tight tracking-tight uppercase pt-5 shrink-0"
          style={{
            fontFamily: "'Anton', sans-serif",
            borderTop: '1px solid rgba(249,115,22,0.25)',
          }}
        >
          Sovereign procurement. NATO clearance. Tier-one deployment.{' '}
          <span className="text-orange-400">The substrate Unicity is built on.</span>
        </motion.p>
      </div>
    </div>
  );
}
