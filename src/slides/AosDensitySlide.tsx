import { motion } from 'framer-motion';

const ANTON = "'Anton', sans-serif";
const MONO = "'Geist Mono', monospace";

const overhead = ['app runtime', 'libraries + deps', 'guest userland', 'container engine'];

const LIT = new Set([0, 3, 7, 12, 15, 19, 21, 26, 28, 30, 33, 35]);

const stats = [
  {
    num: '1000', sup: '×', label: 'Agent density',
    why: <>Thousands of agents per node instead of a handful. <b className="text-[#fefefe] font-bold">The hardware you already own runs a fleet, not a pilot.</b></>,
  },
  {
    num: '54', sup: '×', label: 'Faster launch than Docker',
    why: <>Capsule spawn vs. container cold start. Agents launch on demand — <b className="text-[#fefefe] font-bold">no warm pool, no idle burn.</b></>,
  },
  {
    num: 'milliseconds', sup: '', label: 'To first token', size: 'clamp(22px, 2.6vw, 36px)',
    why: <>Wake → execute → sleep. Agents become event-driven: <b className="text-[#fefefe] font-bold">they exist only while working.</b></>,
  },
];

export function AosDensitySlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-8 lg:py-10 gap-5 lg:gap-6">

        {/* Header */}
        <div className="shrink-0">
          <motion.h1
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#fefefe] text-[30px] sm:text-[42px] lg:text-[56px] leading-[1.0] tracking-tight uppercase max-w-6xl"
            style={{ fontFamily: ANTON }}
          >
            What a multi-tenant <span className="text-orange-400">agent OS</span> buys
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-3 text-[#fefefe]/70 text-base lg:text-lg leading-relaxed max-w-5xl"
            style={{ fontFamily: MONO }}
          >
<span className="text-[#fefefe] font-bold">AOS runs agents the way an operating system runs processes:</span> lightweight capsules on a shared kernel. Isolation is enforced by the OS, not by duplicating the machine.
          </motion.p>
        </div>

        {/* Main: diagram + stats */}
        <div className="flex gap-6 lg:gap-8 items-stretch">

          {/* Diagram panel */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex-[0_0_46%] rounded-xl border border-white/10 bg-white/[0.02] p-5 flex gap-7"
          >
            {/* Container model */}
            <div className="flex-1 flex flex-col">
              <p className="text-[#fefefe]/40 text-[10px] lg:text-[11px] tracking-[0.14em] uppercase mb-3" style={{ fontFamily: MONO }}>Container model — one agent</p>
              <div className="flex flex-col gap-1.5">
                <div className="rounded border border-[#3a4450] bg-[#1b222b] text-[#fefefe] text-xs lg:text-sm px-3 py-2.5" style={{ fontFamily: MONO }}>agent</div>
                {overhead.map((o) => (
                  <div key={o} className="rounded border border-dashed border-white/15 text-[#fefefe]/35 text-xs lg:text-sm px-3 py-2.5" style={{ fontFamily: MONO }}>{o}</div>
                ))}
              </div>
              <p className="text-[#fefefe]/35 text-[11px] lg:text-sm leading-snug mt-2" style={{ fontFamily: MONO }}>an OS's worth of overhead,<br />replicated per agent</p>
            </div>

            {/* AOS capsule model */}
            <div className="flex-1 flex flex-col">
              <p className="text-orange-400 text-[10px] lg:text-[11px] tracking-[0.14em] uppercase mb-3" style={{ fontFamily: MONO }}>AOS capsule model — a fleet</p>
              <div className="flex flex-col gap-1.5">
                <div className="grid grid-cols-10 gap-1 mb-1">
                  {Array.from({ length: 40 }).map((_, i) => (
                    <span
                      key={i}
                      className="rounded-[2px]"
                      style={{
                        aspectRatio: '1.55',
                        background: LIT.has(i) ? '#f97316' : 'rgba(249,115,22,0.22)',
                        border: LIT.has(i) ? '1px solid #f97316' : '1px solid rgba(249,115,22,0.3)',
                      }}
                    />
                  ))}
                </div>
                <div className="rounded text-center text-orange-400 text-xs lg:text-sm px-3 py-2.5" style={{ fontFamily: MONO, border: '1px solid rgba(249,115,22,0.4)', background: 'rgba(249,115,22,0.07)' }}>
                  shared kernel · OS-enforced isolation
                </div>
              </div>
              <p className="text-[#fefefe]/35 text-[11px] lg:text-sm leading-snug mt-2" style={{ fontFamily: MONO }}>
                capsules share the kernel —<br /><span className="text-orange-400">bright = executing,</span> the rest cost ~nothing
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <div className="flex-1 flex flex-col gap-3 lg:gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.45 }}
                className="flex-1 rounded-xl border border-white/10 bg-white/[0.02] border-l-[3px] border-l-orange-500 px-6 py-3 flex flex-col justify-center"
              >
                <p className="text-[#fefefe] leading-none" style={{ fontFamily: ANTON, fontSize: (s as { size?: string }).size ?? 'clamp(32px, 3.6vw, 50px)' }}>
                  {s.num}<span className="text-orange-400" style={{ fontSize: '0.95em' }}>{s.sup}</span>
                </p>
                <p className="text-orange-400 text-[11px] lg:text-sm tracking-[0.16em] uppercase mt-2 mb-1.5" style={{ fontFamily: MONO }}>{s.label}</p>
                <p className="text-[#fefefe]/70 text-sm lg:text-base leading-snug" style={{ fontFamily: MONO }}>{s.why}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Verifiable execution band */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="shrink-0 rounded-xl px-6 py-3.5 flex items-center gap-5 lg:gap-6"
          style={{ border: '1px solid rgba(249,115,22,0.4)', background: 'rgba(249,115,22,0.04)' }}
        >
          <p className="text-orange-400 text-[11px] lg:text-sm tracking-[0.16em] uppercase leading-tight shrink-0" style={{ fontFamily: MONO }}>Verifiable<br />execution</p>
          <p className="text-[#fefefe]/75 text-sm lg:text-lg leading-snug flex-1" style={{ fontFamily: MONO }}>
            Every capsule run is <span className="text-[#fefefe] font-bold">recorded by construction</span> — inputs, actions, and outputs content-addressed into a <span className="text-orange-400">cryptographically verifiable provenance graph.</span>
          </p>
          <p className="text-orange-400 text-[10px] lg:text-[11px] whitespace-nowrap shrink-0 hidden xl:block" style={{ fontFamily: MONO }}>
            #a1f3…9c <span className="text-[#fefefe]/35">→</span> #c48d…1e <span className="text-[#fefefe]/35">→</span> #e02a…b7 ✓
          </p>
        </motion.div>

      </div>
    </div>
  );
}
