import { motion } from 'framer-motion';

type Pill = {
  label: string;
  detail: string;
  color: string;
  bgAlpha: number;
  borderAlpha: number;
  neutral?: boolean;
};

const pills: Pill[] = [
  { label: 'DLP', detail: 'Semantic intercept blocks exfil before it leaves.', color: '255,80,80', bgAlpha: 0.06, borderAlpha: 0.25 },
  { label: 'COST CONTROL', detail: 'Budget enforcement per agent and workflow.', color: '100,180,140', bgAlpha: 0.06, borderAlpha: 0.25 },
  { label: 'ROUTING', detail: 'Right model, tool, capsule for every request.', color: '140,120,200', bgAlpha: 0.06, borderAlpha: 0.25 },
  { label: 'PAYMENTS', detail: 'Compliant A2A settlement with audit trail.', color: '249,115,22', bgAlpha: 0.06, borderAlpha: 0.30 },
  { label: 'BYO AGENT', detail: 'Any framework. Security and cost intact.', color: '255,255,255', bgAlpha: 0.04, borderAlpha: 0.20, neutral: true },
];

export function UseCasesSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-16 py-6 sm:py-8 lg:py-10 justify-center gap-5 lg:gap-6">

        {/* Header row: eyebrow + headline left, tagline right */}
        <div className="flex items-end justify-between gap-8 shrink-0">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-[28px] sm:text-[40px] lg:text-[56px] xl:text-[64px] leading-[0.95] tracking-tight uppercase"
              style={{ fontFamily: "'Anton', sans-serif" }}
            >
              <span className="text-[#fefefe]">CASE STUDY: ENTERPRISE SECURE</span>{' '}
              <span className="text-orange-400">COMPUTE PLATFORM.</span>
            </motion.h1>
          </div>
        </div>

        {/* 5-pill use case row — key elements, surfaced at top */}
        <div className="grid grid-cols-5 gap-2.5 lg:gap-3 shrink-0">
          {pills.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
              className="rounded-lg px-4 lg:px-5 py-6 lg:py-10"
              style={{
                background: `rgba(${p.color},${p.bgAlpha})`,
                border: `1px solid rgba(${p.color},${p.borderAlpha})`,
              }}
            >
              <p
                className="text-base lg:text-xl font-bold tracking-[0.05em] uppercase mb-2"
                style={{
                  fontFamily: "'Geist Mono', monospace",
                  color: p.neutral ? 'rgba(255,255,255,0.9)' : `rgb(${p.color})`,
                }}
              >
                {p.label}
              </p>
              <p
                className="text-[#fefefe]/75 text-sm lg:text-base leading-snug"
                style={{ fontFamily: "'Geist Mono', monospace" }}
              >
                {p.detail}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Try it now CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="shrink-0 flex items-center gap-4 lg:gap-5 flex-wrap"
        >
          <span className="text-[#fefefe]/55 text-sm lg:text-lg" style={{ fontFamily: "'Geist Mono', monospace" }}>
            Live in production —
          </span>
          <a
            href="https://console.unicity.network"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 lg:gap-4 rounded-full border-2 border-orange-500 bg-orange-500/[0.1] px-6 lg:px-8 py-3 lg:py-4 transition-colors duration-300 hover:bg-orange-500/[0.2]"
          >
            <span className="text-orange-400 text-lg lg:text-2xl tracking-wide" style={{ fontFamily: "'Anton', sans-serif" }}>
              TRY IT NOW
            </span>
            <span className="text-[#fefefe] text-base lg:text-xl" style={{ fontFamily: "'Geist Mono', monospace" }}>
              console.unicity.network →
            </span>
          </a>
        </motion.div>

      </div>
    </div>
  );
}
