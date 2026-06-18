import { motion } from 'framer-motion';

const mono = { fontFamily: "'Geist Mono', monospace" };
const anton = { fontFamily: "'Anton', sans-serif" };

const types = [
  { name: 'FILE', desc: 'bytes on disk' },
  { name: 'PROCESS', desc: 'running program' },
  { name: 'SOCKET', desc: 'network endpoint' },
];

export function TokenObjectSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-7 sm:py-9 lg:py-10 justify-center gap-2 lg:gap-3">

        {/* Header */}
        <div className="shrink-0">
          <motion.h1
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="text-[28px] sm:text-[42px] lg:text-[56px] leading-[0.98] tracking-tight uppercase"
            style={anton}
          >
            <span className="text-[#fefefe]">TOKENS ARE NATIVE DATA TYPES,</span>{' '}
            <span className="text-orange-400">NOT LEDGER ENTRIES.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.6 }}
            className="text-[#fefefe]/85 text-base sm:text-lg lg:text-xl leading-snug mt-2.5 max-w-5xl"
            style={mono}
          >
            With the ledger gone, the token is a self-contained object — and an object is something an operating system can hold, like a file.
          </motion.p>
        </div>

        {/* Diagram — the OS box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 0.6 }}
          className="shrink-0 w-full max-w-5xl mx-auto rounded-3xl border border-orange-500/55 bg-orange-500/[0.05] px-6 lg:px-10 py-8 lg:py-12"
        >
          <h3 className="text-[#fefefe] text-2xl lg:text-4xl leading-none mb-6 lg:mb-8" style={anton}>OPERATING SYSTEM</h3>
          <div className="grid grid-cols-4 gap-4 lg:gap-6">
            {types.map((t) => (
              <div key={t.name} className="rounded-xl border border-[#fefefe]/18 bg-[#fefefe]/[0.04] px-3 lg:px-5 py-6 lg:py-8 text-center">
                <p className="text-[#fefefe]/75 text-xl lg:text-4xl leading-none" style={anton}>{t.name}</p>
                <p className="text-[#fefefe]/40 text-[11px] lg:text-base mt-2.5" style={mono}>{t.desc}</p>
              </div>
            ))}
            <div
              className="relative rounded-xl border-2 border-orange-500 bg-orange-500/[0.14] px-3 lg:px-5 py-6 lg:py-8 text-center"
              style={{ boxShadow: '0 0 24px rgba(249,115,22,0.3)' }}
            >
              <p className="text-orange-400 text-xl lg:text-4xl leading-none" style={anton}>TOKEN</p>
              <p className="text-orange-400/70 text-[11px] lg:text-base mt-2.5" style={mono}>value object</p>
              {/* horizontal line out of the token, to the right */}
              <div className="absolute top-1/2 left-full -translate-y-1/2 h-0.5 bg-orange-500/70" style={{ width: '9vw' }} />
            </div>
          </div>
        </motion.div>

        {/* connector — OS sits on the blockchain */}
        <div className="shrink-0 flex justify-center">
          <div className="w-0.5 h-4 lg:h-6 bg-orange-500/60" />
        </div>

        {/* Unicity Blockchain foundation */}
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.6 }}
          className="shrink-0 w-full max-w-5xl mx-auto rounded-2xl border-2 border-orange-500 bg-orange-500/[0.1] px-6 lg:px-10 py-5 lg:py-7 text-center"
          style={{ boxShadow: '0 0 28px rgba(249,115,22,0.22)' }}
        >
          <p className="text-orange-400 text-2xl lg:text-4xl leading-none" style={anton}>UNICITY BLOCKCHAIN</p>
        </motion.div>

      </div>
    </div>
  );
}
