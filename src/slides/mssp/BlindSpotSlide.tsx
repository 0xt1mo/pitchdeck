import { motion } from 'framer-motion';

const mono = "'Geist Mono', monospace";
const display = "'Anton', sans-serif";

const tools = [
  { name: 'EDR', watches: 'Watches endpoints', blind: 'An agent is not a device.' },
  { name: 'SIEM', watches: 'Watches logs', blind: 'It sees the event after the act.' },
  { name: 'IAM', watches: 'Watches human identity', blind: 'Agents share static keys and drift.' },
  { name: 'DLP', watches: 'Watches files', blind: 'It never sees the prompt or the decision.' },
];

export function BlindSpotSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-20 py-10 lg:py-12 gap-6 lg:gap-9">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-400 text-[10px] sm:text-xs lg:text-sm tracking-[0.4em] uppercase font-bold"
            style={{ fontFamily: mono }}
          >
            The blind spot
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[34px] sm:text-[52px] lg:text-[74px] xl:text-[86px] leading-[0.95] tracking-tight uppercase mt-2"
            style={{ fontFamily: display }}
          >
            YOUR STACK{' '}
            <span className="text-orange-400">CAN&apos;T SEE THEM.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-[#fefefe]/85 text-sm sm:text-base lg:text-xl leading-snug mt-4 max-w-5xl"
            style={{ fontFamily: mono }}
          >
            Every tool in the SOC was built to watch users, devices, and files.
            An agent decides and acts — and slips between all of them.
          </motion.p>
        </div>

        {/* Tool cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 shrink-0">
          {tools.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 + i * 0.1, duration: 0.5 }}
              className="rounded-2xl px-5 lg:px-6 py-5 lg:py-6 flex flex-col"
              style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid #2c2c2c' }}
            >
              <p className="text-[#fefefe] text-2xl lg:text-3xl leading-none uppercase" style={{ fontFamily: display }}>
                {t.name}
              </p>
              <p className="text-[#fefefe]/45 text-[10px] lg:text-xs tracking-[0.18em] uppercase mt-2" style={{ fontFamily: mono }}>
                {t.watches}
              </p>
              <p className="flex gap-2 text-[#ff9d76] text-xs lg:text-sm leading-snug mt-4" style={{ fontFamily: mono }}>
                <span className="shrink-0">✕</span>
                <span>{t.blind}</span>
              </p>
            </motion.div>
          ))}
        </div>

        {/* Punchline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          className="shrink-0 text-[#fefefe]/85 text-base sm:text-lg lg:text-2xl leading-snug max-w-6xl pt-4"
          style={{ fontFamily: mono, borderTop: '1px solid rgba(255,255,255,0.10)' }}
        >
          Your clients are running agents with <span className="text-orange-400">no controls</span> — and they don&apos;t even know it yet.
        </motion.p>

      </div>
    </div>
  );
}
