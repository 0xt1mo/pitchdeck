import { motion } from 'framer-motion';
import splashVideoUrl from '/kling_20260226_VIDEO_Take_Image_1650_0.mp4';
import unicityLogoUrl from '/UnicityLogo.svg';

const rightToWin = [
  {
    title: 'Founder pedigree',
    desc: 'Built and exited Guardtime — cybersecurity infrastructure deployed at national scale. This team has done it before with clients including DARPA, Lockheed Martin, Verizon and Maersk.',
  },
  {
    title: 'Deep tech IP',
    desc: 'Open source L1 and core for maximum adoption. Proprietary security algorithms protected by a patent portfolio rooted in 15+ years of cryptographic R&D.',
  },
  {
    title: '24-month engineering head start',
    desc: 'Not a whitepaper. Kernel runtime built, L1 testnet live, three products launching in 2026.',
  },
  {
    title: 'Distribution pre-committed',
    desc: '4 launch partners — Tawasal (6M DAU), Aleria/IHC, EasyTransac (60K+ merchants), PadUp Ventures.',
  },
];

const moats = [
  {
    tag: 'MOAT 1 · NETWORK EFFECTS',
    title: 'The marketplace becomes the moat',
    desc: 'AgentSphere as the settlement marketplace for agent commerce. Liquidity attracts liquidity. Winner-takes-most — like exchanges, not like software.',
    color: '#f97316',
  },
  {
    tag: 'MOAT 2 · STANDARD ADOPTION',
    title: 'The OS becomes the industry standard',
    desc: 'Kernel as the Linux of AI agents. Once the ecosystem builds on your runtime, switching costs are enormous. Nobody migrates off a standard.',
    color: '#3b82f6',
  },
  {
    tag: 'THE ENDGAME',
    title: 'Every agent transaction is revenue',
    desc: 'Settlement layer + marketplace + token economics. Compounding network value on every machine-to-machine transaction, at machine speed.',
    color: '#10b981',
  },
];

export function OpportunitySlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-y-auto">
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <video className="w-full h-full object-cover opacity-15" autoPlay muted loop playsInline src={splashVideoUrl} />
        <div className="absolute inset-0 bg-[#060606]/50" />
      </div>

      <div className="relative z-10 flex flex-col px-6 sm:px-10 lg:px-16 py-6 sm:py-8">

        {/* Header */}
        <div className="shrink-0">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-orange-400 text-[10px] sm:text-xs tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            The Opportunity
          </motion.p>
          <motion.h1 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[28px] sm:text-[40px] lg:text-[52px] leading-[0.95] tracking-tight mt-1"
            style={{ fontFamily: "'Anton', sans-serif" }}>
            WHY US.{' '}
            <span className="text-orange-400">WHAT IF WE WIN.</span>
          </motion.h1>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] w-32 sm:w-48 bg-gradient-to-r from-orange-500 to-transparent origin-left mt-2" />
        </div>

        {/* Two-column content */}
        <div className="shrink-0 flex mt-16 gap-10 lg:gap-14">

          {/* ── LEFT: Right to Win ── */}
          <div className="shrink-0" style={{ width: '40%' }}>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-orange-400 text-xs tracking-[0.3em] uppercase mb-4"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              Right to Win
            </motion.p>

            <div className="space-y-4">
              {rightToWin.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                  className="flex gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-orange-400 shrink-0 mt-1.5" />
                  <div>
                    <p className="text-[#fefefe]/90 text-sm sm:text-base font-bold tracking-wide uppercase"
                      style={{ fontFamily: "'Geist Mono', monospace" }}>
                      {item.title}
                    </p>
                    <p className="text-[#fefefe]/40 text-[10px] sm:text-[11px] mt-1 leading-relaxed"
                      style={{ fontFamily: "'Geist Mono', monospace" }}>
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: What if We Win ── */}
          <div className="flex-1 min-w-0">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-orange-400 text-xs tracking-[0.3em] uppercase mb-4"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              What if We Win
            </motion.p>

            <div className="space-y-4">
              {moats.map((m, i) => (
                <motion.div
                  key={m.tag}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.15, duration: 0.5 }}
                  className="rounded-xl bg-white/[0.03] px-5 py-3.5"
                  style={{ borderLeft: `3px solid ${m.color}` }}
                >
                  <p className="text-[9px] tracking-[0.2em] uppercase mb-1"
                    style={{ fontFamily: "'Geist Mono', monospace", color: `${m.color}90` }}>
                    {m.tag}
                  </p>
                  <p className="text-sm sm:text-base font-bold leading-tight tracking-wide"
                    style={{ fontFamily: "'Geist Mono', monospace", color: m.color }}>
                    {m.title}
                  </p>
                  <p className="text-[#fefefe]/45 text-[10px] sm:text-[11px] mt-1 leading-relaxed"
                    style={{ fontFamily: "'Geist Mono', monospace" }}>
                    {m.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="shrink-0 mt-6 rounded-xl px-6 py-5"
          style={{
            background: 'linear-gradient(135deg, rgba(249,115,22,0.06) 0%, rgba(249,115,22,0.02) 100%)',
            border: '1px solid rgba(249,115,22,0.15)',
          }}
        >
          <p className="text-[#fefefe]/80 text-sm sm:text-base text-center leading-relaxed"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            The agentic economy will be larger than the human internet economy. The company that owns the <span className="text-orange-400 font-bold">settlement layer</span>, the <span className="text-orange-400 font-bold">runtime</span>, and the <span className="text-orange-400 font-bold">marketplace</span> where agents transact will be one of the most valuable infrastructure businesses of the next decade. <span className="text-[#fefefe] font-bold">That is what we are building.</span>
          </p>
        </motion.div>


      </div>

      {/* Logo — fixed bottom right */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
        className="fixed bottom-6 right-6 sm:right-10 lg:right-16 z-20">
        <img src={unicityLogoUrl} alt="Unicity" className="h-5 opacity-60" />
      </motion.div>
    </div>
  );
}
