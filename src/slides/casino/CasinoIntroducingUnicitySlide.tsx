import { motion } from 'framer-motion';

const benefits = [
  {
    num: '01 · Acquisition',
    title: <>Agent onboarding <span className="text-orange-400">in seconds.</span></>,
    body: (
      <>
        Wallet, KYC and risk limits presented in a single signed handshake. The funnel — and its <strong className="text-[#fefefe] font-semibold">30% drop-off rate</strong> — disappears. First bet in seconds, not sessions.
      </>
    ),
  },
  {
    num: '02 · Retention',
    title: <>A live <span className="text-orange-400">retention channel.</span></>,
    body: (
      <>
        The dead email channel gives way to the channel the player already uses. Promotions land in the chat — contextual, at the right moment. <strong className="text-[#fefefe] font-semibold">From 8% open rate to 100% delivery.</strong>
      </>
    ),
  },
  {
    num: '03 · Loyalty',
    title: <>Personalization <span className="text-orange-400">that is real.</span></>,
    body: (
      <>
        Bankroll appetite, available time, frame of mind — disclosed to your platform with the player's permission, signed and auditable. <strong className="text-[#fefefe] font-semibold">Telemetry was a guess. This is signal.</strong>
      </>
    ),
  },
  {
    num: '04 · Cost',
    title: <>The payments stack <span className="text-orange-400">collapses.</span></>,
    body: (
      <>
        No card network. No PSP integrations. No deposit funnel. No withdrawal queue. <strong className="text-[#fefefe] font-semibold">15–35% of GGR back in your P&amp;L.</strong>
      </>
    ),
  },
];

export function CasinoIntroducingUnicitySlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-12 lg:px-20 py-10 lg:py-14 justify-center gap-7">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-orange-400 text-xs sm:text-sm tracking-[0.32em] uppercase font-semibold"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            No. 08 · Introducing Unicity
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[28px] sm:text-[40px] lg:text-[52px] leading-[0.98] tracking-tight mt-3 uppercase"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            Unicity:{' '}
            <span className="text-orange-400">The secure AI OS for gaming operators.</span>
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] w-24 lg:w-32 bg-orange-500 origin-left mt-5"
            style={{ boxShadow: '0 0 8px rgba(249,115,22,0.7)' }}
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-4 text-[#fefefe]/75 text-sm lg:text-base leading-relaxed max-w-5xl"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Unicity Labs pioneered the platform that lets operators onboard agents at scale, securely. Identity, value, settlement, audit — one OS, one integration.
          </motion.p>
        </div>

        {/* Two columns: diagram (left) + benefits (right) */}
        <div className="grid grid-cols-[1fr_1fr] gap-10 lg:gap-14 items-center shrink-0">

          {/* Left — diagram */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <UnicityDiagram />
          </motion.div>

          {/* Right — 4 benefits */}
          <div className="flex flex-col gap-4 lg:gap-5">
            {benefits.map((b, i) => (
              <motion.div
                key={b.num}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.08, duration: 0.5 }}
                className="relative pl-5"
                style={{ borderLeft: '2px solid rgba(255,106,31,0.55)' }}
              >
                <p
                  className="text-orange-400 text-[11px] lg:text-xs tracking-[0.32em] uppercase font-semibold"
                  style={{ fontFamily: "'Geist Mono', monospace" }}
                >
                  {b.num}
                </p>
                <h3
                  className="text-[#fefefe] text-[22px] sm:text-[24px] lg:text-[28px] leading-[1.05] tracking-[0.04em] uppercase mt-1"
                  style={{ fontFamily: "'Anton', sans-serif" }}
                >
                  {b.title}
                </h3>
                <p
                  className="text-[#fefefe]/78 text-xs lg:text-sm leading-[1.55] mt-1.5"
                  style={{ fontFamily: "'Geist Mono', monospace" }}
                >
                  {b.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function UnicityDiagram() {
  return (
    <svg viewBox="0 0 700 540" className="w-full h-auto">
      <defs>
        <marker id="iu-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#FF6A1F" />
        </marker>
        <marker id="iu-arrow-rev" viewBox="0 0 10 10" refX="1" refY="5" markerWidth="9" markerHeight="9" orient="auto">
          <path d="M 10 0 L 0 5 L 10 10 z" fill="#FF6A1F" />
        </marker>
      </defs>

      {/* AGENT (left) */}
      <g>
        <rect x="20" y="80" width="180" height="160" fill="rgba(255,106,31,0.025)" stroke="rgba(254,254,254,0.18)" strokeWidth="1" />
        <rect x="20" y="80" width="2" height="160" fill="#FF6A1F" />
        <text x="34" y="106" fontFamily="Geist Mono" fontSize="9" letterSpacing="3" fill="#FF6A1F">AGENT</text>

        <circle cx="50" cy="138" r="9" fill="#FF6A1F" />
        <text x="50" y="142" fontFamily="Geist Mono" fontSize="10" fontWeight="700" fill="#060606" textAnchor="middle">K</text>
        <text x="68" y="135" fontFamily="Geist Mono" fontSize="11" fill="#FEFEFE" fontWeight="600">Player Agent</text>
        <text x="68" y="148" fontFamily="Geist Mono" fontSize="9" fill="rgba(254,254,254,0.45)">OpenClaw</text>

        <rect x="34" y="168" width="152" height="60" fill="rgba(0,0,0,0.4)" stroke="rgba(255,106,31,0.45)" strokeWidth="1" />
        <text x="46" y="186" fontFamily="Geist Mono" fontSize="9" letterSpacing="2" fill="#FF6A1F">WALLET</text>
        <text x="46" y="202" fontFamily="Geist Mono" fontSize="10" fill="rgba(254,254,254,0.78)">USDC / EURC</text>
        <text x="46" y="216" fontFamily="Geist Mono" fontSize="10" fill="rgba(254,254,254,0.78)">KYC-bound</text>
      </g>

      {/* CONNECTION */}
      <g>
        <line x1="200" y1="155" x2="320" y2="155"
          stroke="#FF6A1F" strokeWidth="2.5"
          filter="drop-shadow(0 0 4px rgba(255,106,31,0.6))"
          markerEnd="url(#iu-arrow)"
          markerStart="url(#iu-arrow-rev)" />
        <text x="260" y="172" fontFamily="Geist Mono" fontSize="10" letterSpacing="1.5" fill="#FF6A1F" textAnchor="middle" fontWeight="600">tokens</text>
      </g>

      {/* OPERATOR (right, large) */}
      <g>
        <rect x="320" y="40" width="360" height="460" fill="rgba(255,106,31,0.025)" stroke="rgba(254,254,254,0.18)" strokeWidth="1" />
        <rect x="320" y="40" width="2" height="460" fill="#FF6A1F" />

        <text x="338" y="66" fontFamily="Geist Mono" fontSize="9" letterSpacing="3" fill="#FF6A1F">OPERATOR PLATFORM</text>
        <text x="338" y="92" fontFamily="Anton" fontSize="22" letterSpacing="1" fill="#FEFEFE">YOUR STACK</text>

        {/* AOS band */}
        <rect x="338" y="116" width="324" height="80"
          fill="rgba(255,106,31,0.10)"
          stroke="#FF6A1F" strokeWidth="1.5"
          filter="drop-shadow(0 0 8px rgba(255,106,31,0.25))" />
        <text x="354" y="140" fontFamily="Geist Mono" fontSize="10" letterSpacing="3" fill="#FF6A1F" fontWeight="600">UNICITY AOS</text>
        <text x="354" y="162" fontFamily="Anton" fontSize="20" letterSpacing="1" fill="#FEFEFE">AI OS</text>
        <text x="354" y="184" fontFamily="Geist Mono" fontSize="9" letterSpacing="2" fill="rgba(255,106,31,0.85)">IDENTITY  ·  VALUE  ·  SETTLEMENT  ·  AUDIT</text>

        {/* Dashed leaders from AOS down to each box */}
        <line x1="388" y1="196" x2="388" y2="240" stroke="rgba(255,106,31,0.5)" strokeWidth="1" strokeDasharray="2 3" />
        <line x1="500" y1="196" x2="500" y2="240" stroke="rgba(255,106,31,0.5)" strokeWidth="1" strokeDasharray="2 3" />
        <line x1="612" y1="196" x2="612" y2="240" stroke="rgba(255,106,31,0.5)" strokeWidth="1" strokeDasharray="2 3" />

        {/* WALLET */}
        <rect x="338" y="240" width="100" height="150" fill="rgba(0,0,0,0.4)" stroke="rgba(254,254,254,0.30)" strokeWidth="1" />
        <text x="354" y="266" fontFamily="Geist Mono" fontSize="10" letterSpacing="2" fill="#FEFEFE" fontWeight="600">HOUSE</text>
        <text x="354" y="282" fontFamily="Geist Mono" fontSize="10" letterSpacing="2" fill="#FEFEFE" fontWeight="600">WALLET</text>
        <line x1="354" y1="290" x2="396" y2="290" stroke="rgba(255,106,31,0.6)" strokeWidth="1" />
        <text x="354" y="312" fontFamily="Geist Mono" fontSize="10" fill="rgba(254,254,254,0.78)">USDC balance</text>
        <text x="354" y="330" fontFamily="Geist Mono" fontSize="10" fill="rgba(254,254,254,0.78)">Takes bets</text>
        <text x="354" y="348" fontFamily="Geist Mono" fontSize="10" fill="rgba(254,254,254,0.78)">Pays winnings</text>

        {/* GAME ENGINE */}
        <rect x="450" y="240" width="100" height="150" fill="rgba(0,0,0,0.4)" stroke="rgba(254,254,254,0.30)" strokeWidth="1" />
        <text x="466" y="266" fontFamily="Geist Mono" fontSize="10" letterSpacing="2" fill="#FEFEFE" fontWeight="600">GAME</text>
        <text x="466" y="282" fontFamily="Geist Mono" fontSize="10" letterSpacing="2" fill="#FEFEFE" fontWeight="600">ENGINE</text>
        <line x1="466" y1="290" x2="508" y2="290" stroke="rgba(255,106,31,0.6)" strokeWidth="1" />
        <text x="466" y="312" fontFamily="Geist Mono" fontSize="10" fill="rgba(254,254,254,0.78)">RNG · provably fair</text>
        <text x="466" y="330" fontFamily="Geist Mono" fontSize="10" fill="rgba(254,254,254,0.78)">Per bet</text>
        <text x="466" y="348" fontFamily="Geist Mono" fontSize="10" fill="rgba(254,254,254,0.78)">Signed</text>

        {/* BACKEND SYSTEMS */}
        <rect x="562" y="240" width="100" height="150" fill="rgba(0,0,0,0.4)" stroke="rgba(254,254,254,0.30)" strokeWidth="1" />
        <text x="578" y="266" fontFamily="Geist Mono" fontSize="10" letterSpacing="2" fill="#FEFEFE" fontWeight="600">BACKEND</text>
        <text x="578" y="282" fontFamily="Geist Mono" fontSize="10" letterSpacing="2" fill="#FEFEFE" fontWeight="600">SYSTEMS</text>
        <line x1="578" y1="290" x2="620" y2="290" stroke="rgba(255,106,31,0.6)" strokeWidth="1" />
        <text x="578" y="312" fontFamily="Geist Mono" fontSize="10" fill="rgba(254,254,254,0.78)">CRM · loyalty</text>
        <text x="578" y="330" fontFamily="Geist Mono" fontSize="10" fill="rgba(254,254,254,0.78)">Treasury</text>
        <text x="578" y="348" fontFamily="Geist Mono" fontSize="10" fill="rgba(254,254,254,0.78)">Risk · limits</text>
      </g>
    </svg>
  );
}
