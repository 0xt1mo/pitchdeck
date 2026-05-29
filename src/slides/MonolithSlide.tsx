import { motion } from 'framer-motion';

const mono = { fontFamily: "'Geist Mono', monospace" };
const anton = { fontFamily: "'Anton', sans-serif" };

const jobs = [
  { name: 'TRANSACTION VALIDATION', desc: 're-executes every transaction' },
  { name: 'TRANSACTION STORAGE', desc: 'keeps the full ledger forever' },
  { name: 'PROVE UNIQUENESS', desc: 'proves no double-spend' },
  { name: 'COMMUNICATION CHANNEL', desc: 'peer-to-peer broadcast network' },
];

export function MonolithSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-8 sm:py-10 lg:py-12 justify-center gap-6 lg:gap-8">

        {/* Header */}
        <div className="shrink-0">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[22px] sm:text-[34px] lg:text-[48px] leading-[1.08] tracking-tight whitespace-nowrap"
            style={anton}
          >
            <span className="text-[#fefefe]">HISTORICALLY, BLOCKCHAINS DID FOUR THINGS.</span>
            <br />
            <span className="text-orange-400">UNICITY DOES ONE.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-[#fefefe]/60 text-sm sm:text-base lg:text-xl leading-relaxed mt-3"
            style={mono}
          >
            The other three happen off-chain, at the edge — by the parties who care.
          </motion.p>
        </div>

        {/* Comparison */}
        <div className="shrink-0 grid grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-center">

          {/* Left — a traditional chain: four coupled jobs */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <p className="text-[#fefefe]/40 text-[11px] lg:text-sm tracking-[0.3em] uppercase mb-4" style={mono}>
              A Traditional Chain
            </p>
            <div className="flex flex-col gap-3 lg:gap-3.5">
              {jobs.map((job) => (
                <div
                  key={job.name}
                  className="rounded-r-xl border-l-2 border-[#fefefe]/25 bg-[#fefefe]/[0.04] px-5 lg:px-6 py-3 lg:py-3.5"
                >
                  <h3 className="text-[#fefefe] text-lg lg:text-2xl leading-none" style={anton}>{job.name}</h3>
                  <p className="text-[#fefefe]/50 text-xs lg:text-sm mt-1.5" style={mono}>{job.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Unicity, one on-chain job */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.55, duration: 0.5 }}
            className="flex flex-col items-center text-center"
          >
            <p className="text-orange-400 text-xs lg:text-sm tracking-[0.4em] uppercase mb-4" style={mono}>
              Unicity
            </p>
            <h3 className="text-orange-400 text-[44px] sm:text-[60px] lg:text-[80px] leading-[0.92]" style={anton}>
              PROVE<br />UNIQUENESS.
            </h3>
            <p className="text-orange-400/70 text-sm lg:text-lg leading-relaxed mt-5 max-w-md" style={mono}>
              The chain's only job. Everything else is delegated to the holder, the recipient, or any transport.
            </p>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
