import { motion } from 'framer-motion';

const status = [
  { title: 'Strategic partnership with UAE Sovereign AI Lab', sub: 'active deployment, channel partner for federal services' },
  { title: '$20M+ regional pipeline', sub: 'UAE government, GCC telcos, tier-1 GCC financial institutions' },
  { title: 'Public testnet live · Hashlock audit in progress', sub: 'architecture validated end-to-end, mainnet imminent' },
  { title: 'Whitepaper, ZK bluepaper, security proofs published' },
  { title: "Seed closed Sep '25", sub: 'Blockchange · Outlier · Tawasal Al Khaleej' },
  { title: 'Unicity Foundation established March 26', sub: 'Zug, Switzerland' },
];

const winSteps = [
  {
    num: '1',
    title: 'Mainnet launch',
    desc: 'Network goes live. First agents on Unicity.',
  },
  {
    num: '2',
    title: 'Enterprise activation',
    desc: '$20M pipeline converts. Governments, banks, telcos deploy. Compliance and verifiable execution drive enterprise commitment.',
  },
  {
    num: '3',
    title: 'Community & developer flywheel',
    desc: 'Developer relations program, framework integrations, open-source contributors, hackathons.',
  },
  {
    num: '4',
    title: 'TGE at adoption thresholds',
    desc: 'Token launches. Subscription monetization activates. Permissionless validators take over consensus.',
  },
];

export function ThePathSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-16 py-6 sm:py-8 lg:py-10 justify-center gap-5">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-400 text-[10px] sm:text-xs tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            The Path
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[26px] sm:text-[36px] lg:text-[44px] leading-[1.05] tracking-tight mt-1"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            CURRENT STATUS AND <span className="text-orange-400">HOW WE WIN</span>
          </motion.h1>
        </div>

        {/* Two columns */}
        <div className="grid grid-cols-2 gap-8 lg:gap-12 shrink-0">

          {/* Left — Current Status */}
          <div>
            <p
              className="text-orange-400 text-[10px] sm:text-xs tracking-[0.3em] uppercase font-bold mb-3"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              Current Status
            </p>
            <ul className="flex flex-col gap-2.5">
              {status.map((s, i) => (
                <motion.li
                  key={s.title}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.05, duration: 0.4 }}
                  className="flex gap-3 items-start"
                >
                  <span className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-orange-400" />
                  <div className="min-w-0">
                    <p
                      className="text-[#fefefe] text-sm sm:text-base lg:text-lg leading-snug"
                      style={{ fontFamily: "'Geist Mono', monospace" }}
                    >
                      {s.title}
                    </p>
                    {s.sub && (
                      <p
                        className="text-[#fefefe]/55 text-xs sm:text-sm leading-snug mt-0.5"
                        style={{ fontFamily: "'Geist Mono', monospace" }}
                      >
                        {s.sub}
                      </p>
                    )}
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Right — How We Win */}
          <div>
            <p
              className="text-orange-400 text-[10px] sm:text-xs tracking-[0.3em] uppercase font-bold mb-3"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              How We Win
            </p>
            <div className="relative">
              {/* Vertical connector */}
              <div className="absolute left-[14px] top-2 bottom-2 w-px bg-orange-500/25" />
              <ul className="flex flex-col gap-3.5">
                {winSteps.map((s, i) => (
                  <motion.li
                    key={s.num}
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                    className="flex gap-4 items-start relative"
                  >
                    <div
                      className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
                      style={{
                        border: '1px solid rgba(249,115,22,0.6)',
                        background: '#0a0a0f',
                      }}
                    >
                      <span
                        className="text-orange-400 text-xs font-bold"
                        style={{ fontFamily: "'Geist Mono', monospace" }}
                      >
                        {s.num}
                      </span>
                    </div>
                    <div className="min-w-0 pt-0.5">
                      <p
                        className="text-[#fefefe] text-sm sm:text-base lg:text-lg leading-snug font-bold"
                        style={{ fontFamily: "'Geist Mono', monospace" }}
                      >
                        {s.title}
                      </p>
                      <p
                        className="text-[#fefefe]/65 text-xs sm:text-sm leading-relaxed mt-1"
                        style={{ fontFamily: "'Geist Mono', monospace" }}
                      >
                        {s.desc}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
