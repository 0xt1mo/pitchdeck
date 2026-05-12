import { motion } from 'framer-motion';

const benefits = [
  {
    num: '01 · Register',
    title: <>Every agent gets <span className="text-orange-400">an identity.</span></>,
    body: (
      <>
        A verifiable identity tied to its <strong className="text-[#fefefe] font-semibold">owner, purpose, and scope</strong>. Held in the Sovereign Agent Registry.
      </>
    ),
  },
  {
    num: '02 · Delegate',
    title: <>Authority is <span className="text-orange-400">scoped & revocable.</span></>,
    body: (
      <>
        Just-in-time, time-bound, revocable. <strong className="text-[#fefefe] font-semibold">This action, this session, no more</strong>.
      </>
    ),
  },
  {
    num: '03 · Enforce',
    title: <>Policy decided <span className="text-orange-400">before action.</span></>,
    body: (
      <>
        Semantic Intercept Fabric evaluates every action against policy <strong className="text-[#fefefe] font-semibold">before execution</strong>. Sub-20ms, at the kernel.
      </>
    ),
  },
  {
    num: '04 · Prove',
    title: <>Every action <span className="text-orange-400">receipted.</span></>,
    body: (
      <>
        Cryptographically signed receipt: identity, authority, policy, decision, outcome. <strong className="text-[#fefefe] font-semibold">The institution keeps the evidence.</strong>
      </>
    ),
  },
  {
    num: '05 · Move',
    title: <>Value moves <span className="text-orange-400">at machine speed.</span></>,
    body: (
      <>
        AgentSphere enables <strong className="text-[#fefefe] font-semibold">agent-to-agent and agent-to-system coordination</strong> — counterparty-verified, no shared-ledger dependency.
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
            Nº 07 · What Unicity Provides
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[28px] sm:text-[40px] lg:text-[52px] leading-[0.98] tracking-tight mt-3 uppercase"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            Security at the point of{' '}
            <span className="text-orange-400">agent execution.</span>
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
            Every agent gets an <span className="text-[#fefefe] font-semibold">identity</span>. Every action gets a <span className="text-[#fefefe] font-semibold">policy decision</span>. Every outcome gets a <span className="text-orange-400 font-semibold">tamper-evident receipt</span>. The institution keeps custody of the evidence — cryptographic proofs can be verified without depending on editable vendor logs.
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

          {/* Right — 5 cards */}
          <div className="flex flex-col gap-2.5 lg:gap-3">
            {benefits.map((b, i) => (
              <motion.div
                key={b.num}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.08, duration: 0.5 }}
                className="relative pl-4"
                style={{ borderLeft: '2px solid rgba(255,106,31,0.55)' }}
              >
                <p
                  className="text-orange-400 text-[10px] lg:text-[11px] tracking-[0.28em] uppercase font-semibold"
                  style={{ fontFamily: "'Geist Mono', monospace" }}
                >
                  {b.num}
                </p>
                <h3
                  className="text-[#fefefe] text-[18px] sm:text-[19px] lg:text-[22px] leading-[1.05] tracking-[0.03em] uppercase mt-0.5"
                  style={{ fontFamily: "'Anton', sans-serif" }}
                >
                  {b.title}
                </h3>
                <p
                  className="text-[#fefefe]/78 text-[11px] lg:text-[12px] leading-[1.5] mt-1"
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

      {/* AI AGENT (left) */}
      <g>
        <rect x="20" y="80" width="180" height="160" fill="rgba(255,106,31,0.025)" stroke="rgba(254,254,254,0.18)" strokeWidth="1" />
        <rect x="20" y="80" width="2" height="160" fill="#FF6A1F" />
        <text x="34" y="106" fontFamily="Geist Mono" fontSize="9" letterSpacing="3" fill="#FF6A1F">AI AGENT</text>

        <circle cx="50" cy="138" r="9" fill="#FF6A1F" />
        <text x="50" y="142" fontFamily="Geist Mono" fontSize="10" fontWeight="700" fill="#060606" textAnchor="middle">A</text>
        <text x="68" y="135" fontFamily="Geist Mono" fontSize="11" fill="#FEFEFE" fontWeight="600">Enterprise Agent</text>
        <text x="68" y="148" fontFamily="Geist Mono" fontSize="9" fill="rgba(254,254,254,0.45)">Bank · Gov · Insurer</text>

        <rect x="34" y="168" width="152" height="60" fill="rgba(0,0,0,0.4)" stroke="rgba(255,106,31,0.45)" strokeWidth="1" />
        <text x="46" y="186" fontFamily="Geist Mono" fontSize="9" letterSpacing="2" fill="#FF6A1F">DELEGATION</text>
        <text x="46" y="202" fontFamily="Geist Mono" fontSize="10" fill="rgba(254,254,254,0.78)">Scoped · revocable</text>
        <text x="46" y="216" fontFamily="Geist Mono" fontSize="10" fill="rgba(254,254,254,0.78)">Time-bound</text>
      </g>

      {/* CONNECTION */}
      <g>
        <line x1="200" y1="155" x2="320" y2="155"
          stroke="#FF6A1F" strokeWidth="2.5"
          filter="drop-shadow(0 0 4px rgba(255,106,31,0.6))"
          markerEnd="url(#iu-arrow)"
          markerStart="url(#iu-arrow-rev)" />
        <text x="260" y="172" fontFamily="Geist Mono" fontSize="10" letterSpacing="1.5" fill="#FF6A1F" textAnchor="middle" fontWeight="600">actions</text>
      </g>

      {/* INSTITUTION (right, large) */}
      <g>
        <rect x="320" y="40" width="360" height="460" fill="rgba(255,106,31,0.025)" stroke="rgba(254,254,254,0.18)" strokeWidth="1" />
        <rect x="320" y="40" width="2" height="460" fill="#FF6A1F" />

        <text x="338" y="66" fontFamily="Geist Mono" fontSize="9" letterSpacing="3" fill="#FF6A1F">INSTITUTION</text>
        <text x="338" y="92" fontFamily="Anton" fontSize="22" letterSpacing="1" fill="#FEFEFE">YOUR STACK</text>

        {/* AOS band */}
        <rect x="338" y="116" width="324" height="80"
          fill="rgba(255,106,31,0.10)"
          stroke="#FF6A1F" strokeWidth="1.5"
          filter="drop-shadow(0 0 8px rgba(255,106,31,0.25))" />
        <text x="354" y="140" fontFamily="Geist Mono" fontSize="10" letterSpacing="3" fill="#FF6A1F" fontWeight="600">UNICITY AOS-9</text>
        <text x="354" y="162" fontFamily="Anton" fontSize="20" letterSpacing="1" fill="#FEFEFE">RUNTIME SECURITY</text>
        <text x="354" y="184" fontFamily="Geist Mono" fontSize="9" letterSpacing="2" fill="rgba(255,106,31,0.85)">REGISTER · DELEGATE · ENFORCE · PROVE</text>

        {/* Dashed leaders from AOS down to each box */}
        <line x1="388" y1="196" x2="388" y2="240" stroke="rgba(255,106,31,0.5)" strokeWidth="1" strokeDasharray="2 3" />
        <line x1="500" y1="196" x2="500" y2="240" stroke="rgba(255,106,31,0.5)" strokeWidth="1" strokeDasharray="2 3" />
        <line x1="612" y1="196" x2="612" y2="240" stroke="rgba(255,106,31,0.5)" strokeWidth="1" strokeDasharray="2 3" />

        {/* SYSTEMS OF RECORD */}
        <rect x="338" y="240" width="100" height="150" fill="rgba(0,0,0,0.4)" stroke="rgba(254,254,254,0.30)" strokeWidth="1" />
        <text x="354" y="266" fontFamily="Geist Mono" fontSize="10" letterSpacing="2" fill="#FEFEFE" fontWeight="600">SYSTEMS</text>
        <text x="354" y="282" fontFamily="Geist Mono" fontSize="10" letterSpacing="2" fill="#FEFEFE" fontWeight="600">OF RECORD</text>
        <line x1="354" y1="290" x2="396" y2="290" stroke="rgba(255,106,31,0.6)" strokeWidth="1" />
        <text x="354" y="312" fontFamily="Geist Mono" fontSize="10" fill="rgba(254,254,254,0.78)">Core banking</text>
        <text x="354" y="330" fontFamily="Geist Mono" fontSize="10" fill="rgba(254,254,254,0.78)">Claims</text>
        <text x="354" y="348" fontFamily="Geist Mono" fontSize="10" fill="rgba(254,254,254,0.78)">Customs</text>

        {/* PAYMENT RAILS */}
        <rect x="450" y="240" width="100" height="150" fill="rgba(0,0,0,0.4)" stroke="rgba(254,254,254,0.30)" strokeWidth="1" />
        <text x="466" y="266" fontFamily="Geist Mono" fontSize="10" letterSpacing="2" fill="#FEFEFE" fontWeight="600">PAYMENT</text>
        <text x="466" y="282" fontFamily="Geist Mono" fontSize="10" letterSpacing="2" fill="#FEFEFE" fontWeight="600">RAILS</text>
        <line x1="466" y1="290" x2="508" y2="290" stroke="rgba(255,106,31,0.6)" strokeWidth="1" />
        <text x="466" y="312" fontFamily="Geist Mono" fontSize="10" fill="rgba(254,254,254,0.78)">Wire · ACH</text>
        <text x="466" y="330" fontFamily="Geist Mono" fontSize="10" fill="rgba(254,254,254,0.78)">Card · SEPA</text>
        <text x="466" y="348" fontFamily="Geist Mono" fontSize="10" fill="rgba(254,254,254,0.78)">Treasury</text>

        {/* IDENTITY & ACCESS */}
        <rect x="562" y="240" width="100" height="150" fill="rgba(0,0,0,0.4)" stroke="rgba(254,254,254,0.30)" strokeWidth="1" />
        <text x="578" y="266" fontFamily="Geist Mono" fontSize="10" letterSpacing="2" fill="#FEFEFE" fontWeight="600">IDENTITY</text>
        <text x="578" y="282" fontFamily="Geist Mono" fontSize="10" letterSpacing="2" fill="#FEFEFE" fontWeight="600">&amp; ACCESS</text>
        <line x1="578" y1="290" x2="620" y2="290" stroke="rgba(255,106,31,0.6)" strokeWidth="1" />
        <text x="578" y="312" fontFamily="Geist Mono" fontSize="10" fill="rgba(254,254,254,0.78)">SSO · KYC</text>
        <text x="578" y="330" fontFamily="Geist Mono" fontSize="10" fill="rgba(254,254,254,0.78)">Permits</text>
        <text x="578" y="348" fontFamily="Geist Mono" fontSize="10" fill="rgba(254,254,254,0.78)">Onboarding</text>
      </g>
    </svg>
  );
}
