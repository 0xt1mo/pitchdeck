import { motion } from 'framer-motion';

const ANTON = "'Anton', sans-serif";
const MONO = "'Geist Mono', monospace";

const ease = [0.16, 1, 0.3, 1] as const;

// Factory stack, top → bottom. `kind` drives styling.
const layers: { name: string; status: string; kind: 'workload' | 'gap' | 'solved' }[] = [
  { name: 'Workload: 10,000 production agents', status: 'concurrent · bursty · regulated', kind: 'workload' },
  { name: 'Agent runtime — ?', status: 'unowned layer', kind: 'gap' },
  { name: 'GPU compute', status: 'solved', kind: 'solved' },
  { name: 'DDN data intelligence', status: 'solved', kind: 'solved' },
];

const eras: { label: string; kind: 'old' | 'new'; body: React.ReactNode }[] = [
  {
    label: 'Training era',
    kind: 'old',
    body: <>One job per cluster. The stack ends at the scheduler — <span className="text-[#fefefe] font-bold">this stack was enough.</span></>,
  },
  {
    label: 'Agent era',
    kind: 'new',
    body: (
      <>
        Thousands of concurrent processes: bursty, event-driven, audit-obligated. <span className="text-[#fefefe] font-bold">Containers fill the gap badly</span> — idle burn, no isolation economics, no record. <span className="text-orange-400">GPU utilization dies here, one layer above yours.</span>
      </>
    ),
  },
];

export function DdnGapSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      {/* faint grid texture */}
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
            Unicity AOS × DDN · The gap
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.6 }}
            className="text-[#fefefe] text-[30px] sm:text-[42px] lg:text-[56px] xl:text-[64px] leading-[1.0] tracking-tight uppercase max-w-6xl"
            style={{ fontFamily: ANTON }}
          >
            The AI factory <span className="text-orange-400">stops at the GPU.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.22, duration: 0.6 }}
            className="mt-3 text-[#fefefe]/70 text-base lg:text-lg leading-relaxed max-w-5xl"
            style={{ fontFamily: MONO }}
          >
            Enterprises are moving from agent pilots to production. DDN solved data-to-GPU. <span className="text-[#fefefe] font-bold">Nobody has solved what runs on the GPUs when the workload is 10,000 agents, not one training job.</span>
          </motion.p>
        </div>

        {/* Main: stack diagram + eras rail */}
        <div className="flex gap-6 lg:gap-8 items-stretch">

          {/* Factory stack */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex-1 rounded-xl border border-white/10 bg-white/[0.02] p-5 lg:p-6 flex flex-col justify-center gap-2.5"
          >
            {layers.map((l, i) => {
              if (l.kind === 'gap') {
                return (
                  <div
                    key={l.name}
                    className="rounded-lg px-5 py-4 flex items-baseline justify-between gap-4"
                    style={{ border: '1.5px dashed #f97316', background: 'rgba(249,115,22,0.05)' }}
                  >
                    <span className="text-orange-400 text-sm lg:text-base tracking-[0.1em] uppercase" style={{ fontFamily: MONO }}>{l.name}</span>
                    <span className="text-orange-400 text-[11px] lg:text-xs tracking-[0.1em] uppercase whitespace-nowrap" style={{ fontFamily: MONO }}>{l.status}</span>
                  </div>
                );
              }
              const solved = l.kind === 'solved';
              return (
                <div
                  key={l.name}
                  className={`rounded-lg px-5 py-3.5 flex items-baseline justify-between gap-4 border ${l.kind === 'workload' ? 'border-white/15 bg-transparent' : 'border-white/10 bg-white/[0.03]'}`}
                >
                  <span className="text-[#fefefe]/60 text-sm lg:text-[15px] tracking-[0.1em] uppercase" style={{ fontFamily: MONO }}>{l.name}</span>
                  <span className="text-[#fefefe]/35 text-[11px] lg:text-xs tracking-[0.1em] uppercase whitespace-nowrap" style={{ fontFamily: MONO }}>
                    {solved ? '✓ ' : ''}{l.status}
                  </span>
                </div>
              );
            })}
          </motion.div>

          {/* Eras rail */}
          <div className="flex-[0_0_32%] max-w-[360px] flex flex-col gap-3 lg:gap-4">
            {eras.map((e, i) => (
              <motion.div
                key={e.label}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.45 }}
                className={`flex-1 rounded-xl px-5 py-4 flex flex-col justify-center ${e.kind === 'new' ? 'border' : 'border border-white/10 bg-white/[0.02]'}`}
                style={e.kind === 'new' ? { border: '1px solid rgba(249,115,22,0.4)', background: 'rgba(249,115,22,0.04)' } : undefined}
              >
                <p
                  className={`text-[11px] lg:text-xs tracking-[0.16em] uppercase mb-2 ${e.kind === 'new' ? 'text-orange-400' : 'text-[#fefefe]/40'}`}
                  style={{ fontFamily: MONO }}
                >
                  {e.label}
                </p>
                <p className="text-[#fefefe]/70 text-[13px] lg:text-sm leading-snug" style={{ fontFamily: MONO }}>{e.body}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Kicker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.5 }}
          className="shrink-0 pt-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.10)' }}
        >
          <p className="text-xl sm:text-2xl lg:text-[28px] leading-tight" style={{ fontFamily: ANTON }}>
            <span className="text-[#fefefe]/60">Data-to-GPU is solved.</span> <span className="text-orange-400">GPU-to-agents is not.</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
