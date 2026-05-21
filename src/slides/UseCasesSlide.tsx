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
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-orange-400 text-xs sm:text-sm lg:text-base tracking-[0.4em] uppercase font-bold"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              Product
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-[32px] sm:text-[44px] lg:text-[60px] xl:text-[68px] leading-[0.95] tracking-tight uppercase mt-2"
              style={{ fontFamily: "'Anton', sans-serif" }}
            >
              <span className="text-[#fefefe]">ENTERPRISE USE CASES,</span>{' '}
              <span className="text-orange-400">SHIPPING.</span>
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-[#fefefe]/65 text-xs sm:text-sm lg:text-base leading-snug text-right max-w-[340px] shrink-0 pb-1"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            The Unicity operator console.<br />One pane of glass across every agent workload.
          </motion.p>
        </div>

        {/* Dominant dashboard screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="rounded-xl overflow-hidden w-full shrink-0"
          style={{
            border: '1px solid rgba(249,115,22,0.40)',
            background: '#0a0a0a',
            boxShadow: 'none',
            maxHeight: '52vh',
          }}
        >
          <img
            src="/dashboards/overview.png"
            alt="Unicity operator console — Agent Sphere overview"
            className="w-full h-full object-cover object-top"
            style={{ maxHeight: '52vh' }}
          />
        </motion.div>

        {/* 5-pill use case row */}
        <div className="grid grid-cols-5 gap-2.5 lg:gap-3 shrink-0">
          {pills.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.55 + i * 0.06 }}
              className="rounded-md px-3 lg:px-3.5 py-2.5 lg:py-3"
              style={{
                background: `rgba(${p.color},${p.bgAlpha})`,
                border: `1px solid rgba(${p.color},${p.borderAlpha})`,
              }}
            >
              <p
                className="text-[11px] lg:text-xs font-bold tracking-[0.05em] uppercase mb-1"
                style={{
                  fontFamily: "'Geist Mono', monospace",
                  color: p.neutral ? 'rgba(255,255,255,0.9)' : `rgb(${p.color})`,
                }}
              >
                {p.label}
              </p>
              <p
                className="text-[#fefefe]/70 text-[11px] lg:text-xs leading-snug"
                style={{ fontFamily: "'Geist Mono', monospace" }}
              >
                {p.detail}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
