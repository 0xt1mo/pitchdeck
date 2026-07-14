import { motion } from 'framer-motion';

const mono = "'Geist Mono', monospace";
const display = "'Anton', sans-serif";

const locks = [
  { n: '01', name: 'Untrusted-input labelling' },
  { n: '02', name: 'Permission checks' },
  { n: '03', name: 'Tool-level gates' },
  { n: '04', name: 'The sandbox' },
  { n: '05', name: 'Approval + permanent record' },
];

export function AosProofSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-8 lg:py-11 gap-5 lg:gap-7">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-400 text-xs sm:text-xs lg:text-lg tracking-[0.4em] uppercase font-bold"
            style={{ fontFamily: mono }}
          >
            The architecture · Unicity Audit
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[32px] sm:text-[50px] lg:text-[70px] xl:text-[82px] leading-[0.95] tracking-tight uppercase mt-2"
            style={{ fontFamily: display }}
          >
            PROOF, <span className="text-orange-400">NOT PROMISES.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-[#fefefe]/80 text-sm sm:text-base lg:text-2xl leading-snug mt-3 max-w-5xl"
            style={{ fontFamily: mono }}
          >
            Five independent locks, then a signed, hash-linked audit chain anchored by <span className="text-orange-400 font-bold">Unicity Audit.</span>
          </motion.p>
        </div>

        {/* Five locks */}
        <div className="shrink-0 grid grid-cols-2 lg:grid-cols-5 gap-3 lg:gap-4">
          {locks.map((l, i) => (
            <motion.div
              key={l.n}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
              className="rounded-xl p-4 flex flex-col gap-2"
              style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(249,115,22,0.35)' }}
            >
              <div className="flex items-center gap-2">
                <span className="text-orange-400 text-base">⚿</span>
                <span className="text-[#fefefe]/40 text-xs lg:text-xl" style={{ fontFamily: mono }}>{l.n}</span>
              </div>
              <p className="text-[#fefefe] text-xs lg:text-lg leading-snug font-bold" style={{ fontFamily: mono }}>{l.name}</p>
            </motion.div>
          ))}
        </div>

        {/* Audit chain */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="shrink-0 flex items-center gap-1.5 lg:gap-2 overflow-hidden"
        >
          {['#a1f0', '#7c2e', '#e93b', '#4d81', '#UA'].map((h, i) => (
            <div key={i} className="contents">
              <div
                className="rounded-md px-3 py-2 text-center shrink-0"
                style={{
                  background: i === 4 ? 'rgba(249,115,22,0.1)' : 'rgba(255,255,255,0.03)',
                  border: i === 4 ? '1px solid rgba(249,115,22,0.6)' : '1px solid rgba(255,255,255,0.12)',
                }}
              >
                <p className={`text-xs lg:text-xl ${i === 4 ? 'text-orange-400 font-bold' : 'text-[#fefefe]/55'}`} style={{ fontFamily: mono }}>
                  {i === 4 ? 'Unicity Audit' : `block ${h}`}
                </p>
              </div>
              {i < 4 && <span className="text-orange-400/50 shrink-0">⛓</span>}
            </div>
          ))}
        </motion.div>

        {/* Reused copy + closing */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          className="shrink-0 text-[#fefefe]/85 text-sm sm:text-base lg:text-2xl leading-snug max-w-6xl pt-3"
          style={{ fontFamily: mono, borderTop: '1px solid rgba(255,255,255,0.10)' }}
        >
          You don&apos;t infer what an agent did from scattered logs — you have one definitive, audit-ready answer.{' '}
          <span className="text-orange-400">Harnesses log what they claim they did; the OS proves what actually happened.</span>
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.5 }}
          className="shrink-0 text-[#fefefe]/35 text-xs lg:text-xl tracking-[0.3em] uppercase"
          style={{ fontFamily: mono }}
        >
          This is what makes it an OS.
        </motion.p>

      </div>
    </div>
  );
}
