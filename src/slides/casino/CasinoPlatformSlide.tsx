import { motion } from 'framer-motion';

const pillars = [
  {
    num: 'E·01',
    name: 'Banking',
    body: (
      <>
        Agents approve credit decisions, modify accounts, authorise payments — <strong className="text-[#fefefe] font-semibold">records compliance, regulators, and legal teams can review</strong>.
      </>
    ),
  },
  {
    num: 'E·02',
    name: 'Logistics',
    body: (
      <>
        Agents coordinate across counterparties — <strong className="text-[#fefefe] font-semibold">every commitment scoped and recorded</strong>, cross-jurisdiction.
      </>
    ),
  },
  {
    num: 'E·03',
    name: 'Healthcare',
    body: (
      <>
        Agents access patient records — <strong className="text-[#fefefe] font-semibold">access bounded by policy before action</strong>, never post-hoc.
      </>
    ),
  },
  {
    num: 'G·01',
    name: 'Customs',
    body: (
      <>
        Agents classify declarations and authorise clearances — <strong className="text-[#fefefe] font-semibold">a record that survives independent review</strong>.
      </>
    ),
  },
  {
    num: 'G·02',
    name: 'Permitting',
    body: (
      <>
        Agents approve or reject applications — <strong className="text-[#fefefe] font-semibold">an audit trail that can be inspected</strong>, decision by decision.
      </>
    ),
  },
  {
    num: 'G·03',
    name: 'Sovereign AI',
    body: (
      <>
        Citizen-data deployments — <strong className="text-[#fefefe] font-semibold">evidence held under the institution's control</strong>, not a vendor's.
      </>
    ),
  },
];

export function CasinoPlatformSlide() {
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
            Nº 10 · Enterprise &amp; Government
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[28px] sm:text-[40px] lg:text-[52px] leading-[0.98] tracking-tight mt-3 uppercase"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            Two contexts.{' '}
            <span className="text-orange-400">One security architecture.</span>
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
            The use cases differ. The requirement is the same: <span className="text-[#fefefe] font-semibold">Security. Explainability. Verifiability.</span> Enterprises need agents acting inside systems of record — auditable and bounded. Governments need agent actions that stay attributable and institution-controlled.
          </motion.p>
        </div>

        {/* 3×2 pillar grid */}
        <div className="grid grid-cols-3 grid-rows-2 gap-4 lg:gap-5 shrink-0">
          {pillars.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.07, duration: 0.5 }}
              className="relative px-6 py-5"
              style={{
                border: '1px solid rgba(255,255,255,0.18)',
                borderLeft: '2px solid #FF6A1F',
                background: 'rgba(255,106,31,0.025)',
              }}
            >
              <p
                className="text-[#fefefe]/45 text-[11px] tracking-[0.32em] uppercase font-semibold"
                style={{ fontFamily: "'Geist Mono', monospace" }}
              >
                {p.num}
              </p>
              <h3
                className="text-[#fefefe] text-[26px] sm:text-[32px] lg:text-[40px] leading-none uppercase tracking-[0.04em] mt-1"
                style={{ fontFamily: "'Anton', sans-serif" }}
              >
                {p.name}
              </h3>
              <div
                className="h-[1px] w-8 bg-orange-500 mt-2 mb-2"
                style={{ boxShadow: '0 0 6px rgba(249,115,22,0.7)' }}
              />
              <p
                className="text-[#fefefe]/78 text-sm lg:text-base leading-[1.55]"
                style={{ fontFamily: "'Geist Mono', monospace" }}
              >
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="text-[#fefefe]/65 text-[22px] sm:text-[28px] lg:text-[36px] leading-tight tracking-tight uppercase pt-5 shrink-0"
          style={{
            fontFamily: "'Anton', sans-serif",
            borderTop: '1px solid rgba(249,115,22,0.25)',
          }}
        >
          Different mandates.{' '}
          <span className="text-orange-400">Same evidentiary standard.</span>
        </motion.p>
      </div>
    </div>
  );
}
