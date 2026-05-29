import { motion } from 'framer-motion';

const mono = { fontFamily: "'Geist Mono', monospace" };
const anton = { fontFamily: "'Anton', sans-serif" };

const RED = '#ff8a7a';
const GREEN = '#86efac';

const grad = {
  neutral: 'linear-gradient(180deg, rgba(255,255,255,0.055), rgba(255,255,255,0.015))',
  red: 'linear-gradient(180deg, rgba(224,86,78,0.16), rgba(224,86,78,0.04))',
  orange: 'linear-gradient(180deg, rgba(249,115,22,0.13), rgba(249,115,22,0.03))',
  orangeStrong: 'linear-gradient(180deg, rgba(249,115,22,0.2), rgba(249,115,22,0.05))',
  green: 'linear-gradient(180deg, rgba(110,231,135,0.13), rgba(110,231,135,0.035))',
};

function Eyebrow({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <p className="text-[11px] lg:text-sm tracking-[0.3em] uppercase mb-1" style={{ ...mono, color }}>
      {children}
    </p>
  );
}

function StepBox({ n, text, danger, delay }: { n: number; text: string; danger?: boolean; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.4 }}
      className="rounded-xl px-5 py-3 lg:py-3.5 border"
      style={{
        borderColor: danger ? 'rgba(224,86,78,0.6)' : 'rgba(254,254,254,0.12)',
        background: danger ? grad.red : grad.neutral,
        boxShadow: danger ? '0 0 26px rgba(224,86,78,0.16)' : undefined,
      }}
    >
      <span className="text-base lg:text-lg" style={{ ...mono, color: danger ? RED : 'rgba(254,254,254,0.88)' }}>
        <span style={{ opacity: 0.55 }}>{n} ·</span> {text}
      </span>
    </motion.div>
  );
}

export function AtomicSwapsSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div
        className="fixed inset-0 z-[1] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 65% 55% at 70% 55%, rgba(249,115,22,0.06) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-8 sm:py-10 lg:py-12 justify-center gap-6 lg:gap-9">

        {/* Header */}
        <div className="shrink-0">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[32px] sm:text-[50px] lg:text-[66px] leading-[1.0] tracking-tight"
            style={anton}
          >
            THE UNICITY <span className="text-orange-400">TRUSTLESS ATOMIC SWAP</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-[#fefefe]/70 text-base sm:text-lg lg:text-2xl leading-relaxed mt-3"
            style={mono}
          >
            Both parties commit independently — the swap completes, or everyone keeps their token.
          </motion.p>
        </div>

        {/* Two columns */}
        <div className="shrink-0 grid grid-cols-[1fr_auto_1fr] gap-8 lg:gap-12 items-stretch">

          {/* LEFT — HTLC */}
          <div className="flex flex-col gap-3 lg:gap-4">
            <Eyebrow color="#e0564e">Hashed Timelock (HTLC)</Eyebrow>
            <StepBox n={1} text="A locks, reveals hash y" delay={0.45} />
            <StepBox n={2} text="B locks against same y" delay={0.53} />
            <StepBox n={3} text="A claims, revealing preimage x" delay={0.61} />
            <StepBox n={4} text="B must claim before timeout" danger delay={0.69} />
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.45 }}
              className="rounded-2xl px-6 py-5 border mt-1"
              style={{ borderColor: 'rgba(224,86,78,0.6)', background: grad.red, boxShadow: '0 0 30px rgba(224,86,78,0.16)' }}
            >
              <h3 className="text-xl lg:text-2xl" style={{ ...anton, color: RED }}>THE TIMING TRAP</h3>
              <p className="text-[#fefefe]/80 text-sm lg:text-base leading-snug mt-2" style={mono}>
                B late on step 4 — a dropped connection — and A keeps both.
              </p>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="self-stretch border-l border-dashed border-[#fefefe]/20" />

          {/* RIGHT — Unicity predicate swap */}
          <div className="flex flex-col gap-3 lg:gap-4">
            <Eyebrow color={GREEN}>Unicity Predicate Swap</Eyebrow>

            {/* commit row */}
            <div className="grid grid-cols-2 gap-4 lg:gap-5">
              {['A', 'B'].map((p, i) => (
                <motion.div
                  key={p}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                  className="rounded-2xl px-5 py-4 border text-center"
                  style={{ borderColor: 'rgba(249,115,22,0.7)', background: grad.orange, boxShadow: '0 0 24px rgba(249,115,22,0.14)' }}
                >
                  <h3 className="text-[#fefefe] text-lg lg:text-2xl leading-none" style={anton}>{p} COMMITS</h3>
                  <p className="text-[#fefefe]/55 text-xs lg:text-sm mt-1.5" style={mono}>locks their token</p>
                </motion.div>
              ))}
            </div>

            {/* converging arrows */}
            <motion.svg
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75, duration: 0.5 }}
              viewBox="0 0 460 46" className="w-full h-9 lg:h-11"
            >
              <defs>
                <marker id="swapAr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                  <path d="M2 1L8 5L2 9" fill="none" stroke="#f97316" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </marker>
              </defs>
              <path d="M120 2 C 170 20, 195 30, 214 42" fill="none" stroke="#f97316" strokeWidth="2.2" markerEnd="url(#swapAr)" />
              <path d="M340 2 C 290 20, 265 30, 246 42" fill="none" stroke="#f97316" strokeWidth="2.2" markerEnd="url(#swapAr)" />
            </motion.svg>

            {/* Unicity service */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.45 }}
              className="rounded-2xl px-6 py-4 lg:py-5 border text-center"
              style={{ borderColor: 'rgba(249,115,22,0.9)', background: grad.orangeStrong, boxShadow: '0 0 40px rgba(249,115,22,0.26)' }}
            >
              <h3 className="text-lg lg:text-2xl leading-none" style={{ ...anton, color: '#fb923c' }}>UNICITY SERVICE</h3>
              <p className="text-[#fefefe]/80 text-xs lg:text-base mt-1.5" style={mono}>the shared reference</p>
            </motion.div>

            {/* Provably fair */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05, duration: 0.45 }}
              className="rounded-2xl px-6 py-5 border mt-1"
              style={{ borderColor: 'rgba(110,231,135,0.6)', background: grad.green, boxShadow: '0 0 32px rgba(110,231,135,0.16)' }}
            >
              <h3 className="text-xl lg:text-2xl" style={{ ...anton, color: GREEN }}>AUTOMATIC FAIRNESS</h3>
              <div className="mt-2.5 space-y-1.5 text-[#fefefe]/85 text-sm lg:text-base" style={mono}>
                <p><span style={{ color: GREEN }}>✓</span> both locked → swap completes</p>
                <p><span style={{ color: GREEN }}>✓</span> either walked away → both refunded</p>
                <p><span style={{ color: GREEN }}>✓</span> no deadlines, no chasing, done</p>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  );
}
