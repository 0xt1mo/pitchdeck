import { motion } from 'framer-motion';

const ANTON = "'Anton', sans-serif";
const MONO = "'Geist Mono', monospace";

const recorded: React.ReactNode[] = [
  <>A cryptographic record of <span className="text-[#fefefe] font-bold">what every agent read and produced</span> — inputs, actions, outputs, content-addressed.</>,
  <>Tamper-evident by construction. The audit trail is the execution, not a log written next to it.</>,
  <>Record-keeping that clears <span className="text-orange-400">EU AI Act, SOC 2, and FSI / healthcare</span> retention out of the box.</>,
];

const enforced: React.ReactNode[] = [
  <><span className="text-[#fefefe] font-bold">DLP, PII, and prompt-injection blocked in the OS</span> — at the kernel, not in the prompt a model can be talked out of.</>,
  <>Policy sits <span className="text-orange-400">below the agent</span>: every tool call and data read passes the kernel before it runs.</>,
  <>Agent activity <span className="text-[#fefefe] font-bold">never leaves the enterprise boundary</span> — the sovereign requirement, enforced structurally.</>,
];

const chips = ['EU AI Act', 'SOC 2', 'HIPAA', 'FSI', 'Sovereign'];

function Panel({ label, items, delay }: { label: string; items: React.ReactNode[]; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="flex-1 rounded-xl border border-white/10 bg-white/[0.02] border-t-[3px] border-t-orange-500 p-6 lg:p-7 flex flex-col"
    >
      <p className="text-orange-400 text-sm lg:text-base tracking-[0.12em] uppercase mb-4" style={{ fontFamily: MONO }}>{label}</p>
      <div className="flex flex-col gap-3.5">
        {items.map((it, i) => (
          <div key={i} className="flex gap-3 leading-snug" style={{ fontFamily: MONO }}>
            <span className="text-orange-400 shrink-0">→</span>
            <p className="text-[#fefefe]/75 text-sm lg:text-base">{it}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export function DdnSecureSlide() {
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
      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-8 lg:py-10 gap-5 lg:gap-6">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-orange-400 text-xs lg:text-sm tracking-[0.22em] uppercase mb-3"
            style={{ fontFamily: MONO }}
          >
            Unicity AOS × DDN · Secure AI factories
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.6 }}
            className="text-[#fefefe] text-[30px] sm:text-[42px] lg:text-[56px] xl:text-[64px] leading-[1.0] tracking-tight uppercase max-w-6xl"
            style={{ fontFamily: ANTON }}
          >
            Secure by <span className="text-orange-400">construction.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.22, duration: 0.6 }}
            className="mt-3 text-[#fefefe]/70 text-base lg:text-lg leading-relaxed max-w-5xl"
            style={{ fontFamily: MONO }}
          >
            Two properties enterprises can't retrofit onto a container: <span className="text-[#fefefe] font-bold">a provable record of what happened</span>, and <span className="text-[#fefefe] font-bold">enforcement below the agent.</span> Both live in the OS.
          </motion.p>
        </div>

        {/* Two panels */}
        <div className="flex gap-5 lg:gap-6 items-stretch">
          <Panel label="Recorded by construction" items={recorded} delay={0.3} />
          <Panel label="Kernel-level enforcement" items={enforced} delay={0.42} />
        </div>

        {/* Compliance chips + positioning */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.5 }}
          className="shrink-0 rounded-xl px-6 py-3.5 flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-6"
          style={{ border: '1px solid rgba(249,115,22,0.4)', background: 'rgba(249,115,22,0.04)' }}
        >
          <div className="flex flex-wrap gap-2 shrink-0">
            {chips.map((c) => (
              <span
                key={c}
                className="rounded-full px-3 py-1 text-[11px] lg:text-xs tracking-[0.08em] uppercase text-orange-400"
                style={{ fontFamily: MONO, border: '1px solid rgba(249,115,22,0.5)' }}
              >
                {c}
              </span>
            ))}
          </div>
          <p className="text-[#fefefe]/85 text-sm lg:text-base leading-snug" style={{ fontFamily: MONO }}>
            Procurement-clearing by default — maps to your <span className="text-orange-400 font-bold">Secure AI Factories</span> push and defense / sovereign accounts.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
