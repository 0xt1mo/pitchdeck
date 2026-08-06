import { motion } from 'framer-motion';

const mono = { fontFamily: "'Geist Mono', monospace" };
const monoS = "'Geist Mono', monospace";
const anton = "'Anton', sans-serif";
const ORANGE = '#f97316';
const GREEN = '#5ee79a';
const GREY = 'rgba(254,254,254,0.55)';
const LINE = 'rgba(254,254,254,0.32)';

function SolIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r="14" fill="none" stroke={GREEN} strokeWidth="4.5" />
      <circle cx={cx} cy={cy} r="3" fill={GREEN} />
    </g>
  );
}

export function SolMintFlowDiagram() {
  return (
    <svg viewBox="0 0 1000 460" className="w-full h-auto max-h-[56vh]">
      <defs>
        <marker id="arGrey" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto">
          <path d="M2 1L8 5L2 9" fill="none" stroke={LINE} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </marker>
        <marker id="arOrange" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto">
          <path d="M2 1L8 5L2 9" fill="none" stroke={ORANGE} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </marker>
      </defs>

      {/* THE UNICITY L1 (top) */}
      <rect x="470" y="18" width="510" height="86" rx="14" fill="rgba(249,115,22,0.06)" stroke={ORANGE} strokeWidth="1.8" />
      <text x="725" y="54" textAnchor="middle" fontFamily={anton} fontSize="23" fill={ORANGE} letterSpacing="0.03em">UNICITY</text>
      <text x="725" y="80" textAnchor="middle" fontFamily={monoS} fontSize="13" fill="#d9d4cc">mints the Unicity XPL token — local, self-contained</text>

      {/* FLOW eyebrow */}
      <text x="24" y="232" fontFamily={monoS} fontSize="13" fill={ORANGE} letterSpacing="3">FLOW</text>

      {/* PLASMA CONTRACT */}
      <rect x="24" y="250" width="300" height="110" rx="12" fill="#131210" stroke="rgba(254,254,254,0.16)" strokeWidth="1.5" />
      <SolIcon cx={70} cy={305} />
      <text x="104" y="300" fontFamily={anton} fontSize="19" fill="#fefefe">PLASMA CONTRACT</text>
      <text x="104" y="324" fontFamily={monoS} fontSize="12" fill={GREY}>XPL locked · ledger rules</text>

      {/* UNICITY XPL (highlighted) */}
      <rect x="470" y="242" width="300" height="128" rx="12" fill="rgba(249,115,22,0.07)" stroke={ORANGE} strokeWidth="2" />
      <SolIcon cx={516} cy={300} />
      <text x="552" y="296" fontFamily={anton} fontSize="19" fill="#fefefe">UNICITY XPL</text>
      <text x="552" y="320" fontFamily={monoS} fontSize="12" fill={GREY}>local · self-contained</text>
      <text x="486" y="352" fontFamily={monoS} fontSize="12.5" fill={ORANGE}>carries its own state + proof</text>

      {/* HOLDER */}
      <rect x="856" y="256" width="124" height="100" rx="12" fill="#131210" stroke="rgba(254,254,254,0.16)" strokeWidth="1.5" />
      <text x="918" y="302" textAnchor="middle" fontFamily={anton} fontSize="17" fill="#fefefe">HOLDER</text>
      <text x="918" y="324" textAnchor="middle" fontFamily={monoS} fontSize="12" fill={GREY}>verifies</text>

      {/* arrow: SOLANA -> UNICITY XPL */}
      <text x="397" y="298" textAnchor="middle" fontFamily={monoS} fontSize="11" fill={GREY}>represented as</text>
      <line x1="330" y1="306" x2="462" y2="306" stroke={LINE} strokeWidth="1.8" markerEnd="url(#arGrey)" />

      {/* mint up / proof down — between UNICITY XPL and THE UNICITY L1 */}
      <line x1="600" y1="238" x2="600" y2="110" stroke={ORANGE} strokeWidth="2" markerEnd="url(#arOrange)" />
      <line x1="664" y1="110" x2="664" y2="238" stroke={LINE} strokeWidth="1.8" markerEnd="url(#arGrey)" />
      <text x="590" y="178" textAnchor="end" fontFamily={monoS} fontSize="12.5" fill={ORANGE}>mint</text>
      <text x="674" y="178" textAnchor="start" fontFamily={monoS} fontSize="12.5" fill={GREY}>proof</text>

      {/* arrow: UNICITY XPL -> HOLDER */}
      <line x1="776" y1="306" x2="848" y2="306" stroke={LINE} strokeWidth="1.8" markerEnd="url(#arGrey)" />

      {/* feedback: HOLDER -> PLASMA CONTRACT */}
      <path d="M918 360 L918 426 L92 426 L92 366" fill="none" stroke={LINE} strokeWidth="1.8" markerEnd="url(#arGrey)" />
      <text x="505" y="418" textAnchor="middle" fontFamily={monoS} fontSize="13" fill={GREY}>verifies the lock directly against the Plasma contract</text>
    </svg>
  );
}

export function NoBridgeRiskSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-8 sm:py-10 lg:py-12 justify-center gap-6 lg:gap-8">

        {/* Header */}
        <div className="shrink-0">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[30px] sm:text-[46px] lg:text-[60px] leading-[1.0] tracking-tight"
            style={{ fontFamily: anton }}
          >
            BRIDGES ARE ELIMINATED:{' '}
            <span className="text-orange-400">SOURCE TOKENS ARE VERIFIED DIRECTLY</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-[#fefefe]/80 text-base sm:text-lg lg:text-2xl leading-relaxed mt-3"
            style={mono}
          >
            A Unicity XPL token — verified straight from Plasma. No bridge to trust.
          </motion.p>
        </div>

        {/* Flow diagram */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="shrink-0 flex items-center justify-center w-full max-w-6xl mx-auto"
        >
          <SolMintFlowDiagram />
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="shrink-0 text-[#fefefe]/45 text-sm sm:text-base lg:text-lg tracking-[0.25em] uppercase text-center"
          style={mono}
        >
          No Bridge&nbsp;&nbsp;·&nbsp;&nbsp;No Custodian&nbsp;&nbsp;·&nbsp;&nbsp;Nothing to Hack
        </motion.p>

      </div>
    </div>
  );
}
