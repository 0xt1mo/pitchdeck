import { motion } from 'framer-motion';

const mono = "'Geist Mono', monospace";
const display = "'Anton', sans-serif";

const pipeline = ['Write', 'Verify', 'Deploy', 'Prove'];

const guarantees = [
  {
    title: 'A formal verification language',
    body: 'Verification tooling built for engineers — practical, not academic.',
  },
  {
    title: 'Mathematical guarantees',
    body: 'Provable agent behavior, not statistical detection after the fact.',
  },
];

export function AosVerifiedIdeSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(55% 45% at 50% 0%, rgba(249,115,22,0.10), transparent 70%)' }}
      />

      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-8 lg:py-11 gap-6 lg:gap-8">

        {/* Header */}
        <div className="shrink-0">
          <div className="flex items-center gap-3">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-orange-400 text-xs lg:text-lg tracking-[0.4em] uppercase font-bold"
              style={{ fontFamily: mono }}
            >
              The frontier · verified development
            </motion.p>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="rounded-full border border-orange-500/50 bg-orange-500/[0.08] px-2.5 py-0.5 text-orange-300 text-xs tracking-[0.16em] uppercase"
              style={{ fontFamily: mono }}
            >
              In development
            </motion.span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[32px] sm:text-[48px] lg:text-[64px] xl:text-[74px] leading-[0.98] tracking-tight uppercase mt-2"
            style={{ fontFamily: display }}
          >
            THE IDE FOR <span className="text-orange-400">VERIFIED</span> AGENT DEVELOPMENT.
          </motion.h1>
        </div>

        {/* Pipeline */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-[#fefefe]/45 text-xs lg:text-lg tracking-[0.24em] uppercase mb-3"
            style={{ fontFamily: mono }}
          >
            The full pipeline · end to end
          </motion.p>
          <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-center gap-2 lg:gap-3">
            {pipeline.map((stage, i) => (
              <div key={stage} className="contents">
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 + i * 0.12, duration: 0.4 }}
                  className="rounded-xl py-4 lg:py-6 text-center"
                  style={{
                    background: i === pipeline.length - 1 ? 'rgba(249,115,22,0.10)' : 'rgba(255,255,255,0.02)',
                    border: i === pipeline.length - 1 ? '1.5px solid rgba(249,115,22,0.65)' : '1px solid rgba(255,255,255,0.14)',
                  }}
                >
                  <p
                    className={`text-lg lg:text-3xl leading-none uppercase ${i === pipeline.length - 1 ? 'text-orange-400' : 'text-[#fefefe]'}`}
                    style={{ fontFamily: display }}
                  >
                    {stage}
                  </p>
                </motion.div>
                {i < pipeline.length - 1 && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.45 + i * 0.12 }}
                    className="text-orange-400/60 text-xl lg:text-2xl text-center"
                  >
                    →
                  </motion.span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Guarantees */}
        <div className="shrink-0 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          {guarantees.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.12, duration: 0.4 }}
              className="rounded-2xl p-5 lg:p-6"
              style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid #2c2c2c', borderTop: '2px solid rgba(249,115,22,0.7)' }}
            >
              <p className="text-orange-400 text-lg lg:text-2xl leading-tight uppercase" style={{ fontFamily: display }}>
                {g.title}
              </p>
              <p className="text-[#fefefe]/80 text-sm lg:text-2xl leading-snug mt-2" style={{ fontFamily: mono }}>
                {g.body}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
