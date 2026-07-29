import { motion } from 'framer-motion';

const mono = "'Geist Mono', monospace";
const display = "'Anton', sans-serif";

const cards = [
  { fn: 'Processes', term: 'Capsules', desc: 'Sealed WASM programs, isolated by construction — one job each.' },
  { fn: 'Syscalls', term: 'The host ABI', desc: 'The only door out of the sandbox. A framework is a library you call; an OS is a boundary you can’t cross.' },
  { fn: 'Users & permissions', term: 'Capability tokens', desc: 'Identity, groups, grants. Stricter than Unix — power only narrows.' },
  { fn: 'IPC', term: 'The bus', desc: 'Every message routed, observable, governable.' },
  { fn: 'Quotas', term: 'Budgets', desc: 'CPU and RAM — plus the two resources no OS ever had to meter: tokens and money.' },
  { fn: 'Drivers', term: 'Provider capsules', desc: 'Models are the peripherals of the agent era. Swap one like a driver; nothing above notices.' },
];

export function AosNotMetaphorSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-7 lg:py-9 gap-5 lg:gap-7">

        {/* Header */}
        <div className="shrink-0">
          <motion.h1
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[32px] sm:text-[48px] lg:text-[66px] xl:text-[76px] leading-[0.98] tracking-tight uppercase"
            style={{ fontFamily: display }}
          >
            AN ACTUAL OS — <span className="text-orange-400">NOT JUST ORCHESTRATION.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-[#fefefe]/80 text-base lg:text-2xl leading-snug mt-3 max-w-5xl"
            style={{ fontFamily: mono }}
          >
            An OS isn't marketing — it's <span className="text-orange-400">syscalls, IPC, permissions, quotas, drivers.</span> Everyone claims the label; here, every primitive is a real implementation.
          </motion.p>
        </div>

        {/* Card grid */}
        <div className="shrink-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
          {cards.map((c, i) => (
            <motion.div
              key={c.fn}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32 + i * 0.08, duration: 0.4 }}
              className="rounded-xl p-4 lg:p-5 flex flex-col"
              style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid #2c2c2c', borderTop: '2px solid rgba(249,115,22,0.7)' }}
            >
              <div className="flex items-baseline gap-2 flex-wrap">
                <span className="text-orange-400 text-lg lg:text-2xl leading-none uppercase" style={{ fontFamily: display }}>
                  {c.fn}
                </span>
                <span className="text-[#fefefe]/30 text-base lg:text-2xl leading-none">→</span>
                <span className="text-[#fefefe] text-lg lg:text-2xl leading-none uppercase" style={{ fontFamily: display }}>
                  {c.term}
                </span>
              </div>
              <p className="text-[#fefefe]/75 text-sm lg:text-xl leading-snug mt-3" style={{ fontFamily: mono }}>
                {c.desc}
              </p>
            </motion.div>
          ))}
        </div>


      </div>
    </div>
  );
}
