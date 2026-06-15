import { motion } from 'framer-motion';

export function CasinoArchitectureSlide() {
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
            Nº 10 · Architecture
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[32px] sm:text-[44px] lg:text-[60px] leading-[0.98] tracking-tight mt-3 uppercase"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            Player wallet to operator wallet.{' '}
            <span className="text-orange-400">Direct.</span>
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
            The agent presents the player's wallet. The wager moves peer-to-peer, bearer-token, in milliseconds. Unicity's uniqueness oracle witnesses each transfer — it does not route, custody, or hold value.
          </motion.p>
        </div>

        {/* Architecture diagram */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="shrink-0"
        >
          <ArchDiagram />
        </motion.div>

        {/* Three absences row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="grid grid-cols-3 gap-4 shrink-0"
        >
          {['No payment processor', 'No shared ledger', 'No funds custodied by Unicity'].map((t) => (
            <div
              key={t}
              className="px-5 py-3 text-center"
              style={{
                border: '1px solid rgba(255,106,31,0.45)',
                background: 'rgba(255,106,31,0.05)',
              }}
            >
              <p
                className="text-orange-400 text-xs lg:text-sm tracking-[0.20em] uppercase font-semibold"
                style={{ fontFamily: "'Geist Mono', monospace" }}
              >
                {t}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Closing footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="text-[#fefefe]/65 text-[22px] sm:text-[28px] lg:text-[36px] leading-tight tracking-tight uppercase pt-5 shrink-0"
          style={{
            fontFamily: "'Anton', sans-serif",
            borderTop: '1px solid rgba(249,115,22,0.25)',
          }}
        >
          Two wallets. One witness.{' '}
          <span className="text-orange-400">No middleman.</span>
        </motion.p>
      </div>
    </div>
  );
}

function ArchDiagram() {
  return (
    <svg viewBox="0 0 1440 460" className="w-full h-auto">
      <defs>
        <marker id="arrow-orange" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#FF6A1F" />
        </marker>
        <marker id="arrow-orange-rev" viewBox="0 0 10 10" refX="1" refY="5" markerWidth="9" markerHeight="9" orient="auto">
          <path d="M 10 0 L 0 5 L 10 10 z" fill="#FF6A1F" />
        </marker>
      </defs>

      {/* LEFT — Player Agent UI */}
      <g>
        <rect x="50" y="40" width="380" height="280" fill="rgba(255,106,31,0.025)" stroke="rgba(254,254,254,0.18)" strokeWidth="1" />
        <rect x="50" y="40" width="2" height="280" fill="#FF6A1F" />
        <text x="72" y="72" fontFamily="Geist Mono" fontSize="11" letterSpacing="3" fill="#FF6A1F">PLAYER · AGENT UI</text>
        <circle cx="84" cy="106" r="11" fill="#FF6A1F" />
        <text x="84" y="111" fontFamily="Geist Mono" fontSize="11" fontWeight="700" fill="#060606" textAnchor="middle">K</text>
        <text x="106" y="103" fontFamily="Geist Mono" fontSize="13" fill="#FEFEFE" fontWeight="600">AGENT · KELLY</text>
        <text x="106" y="118" fontFamily="Geist Mono" fontSize="10" letterSpacing="1" fill="rgba(254,254,254,0.42)">bound to Nitish · OpenClaw</text>

        <rect x="72" y="142" width="336" height="158" fill="rgba(0,0,0,0.4)" stroke="rgba(255,106,31,0.45)" strokeWidth="1" />
        <text x="86" y="166" fontFamily="Geist Mono" fontSize="10" letterSpacing="3" fill="#FF6A1F">WALLET</text>
        <line x1="86" y1="174" x2="140" y2="174" stroke="rgba(255,106,31,0.6)" strokeWidth="1" />
        <text x="86" y="200" fontFamily="Geist Mono" fontSize="13" fill="rgba(254,254,254,0.85)">→ USDC / EURC balance</text>
        <text x="86" y="222" fontFamily="Geist Mono" fontSize="13" fill="rgba(254,254,254,0.85)">→ KYC attestation bound</text>
        <text x="86" y="244" fontFamily="Geist Mono" fontSize="13" fill="rgba(254,254,254,0.85)">→ Risk caps · session limits</text>
        <text x="86" y="266" fontFamily="Geist Mono" fontSize="13" fill="rgba(254,254,254,0.85)">→ Bearer-token issuance</text>
        <text x="86" y="290" fontFamily="Geist Mono" fontSize="10" letterSpacing="2" fill="rgba(255,106,31,0.7)">SIGNED · AGENT-CONTROLLED</text>
      </g>

      {/* RIGHT — Operator Wallet */}
      <g>
        <rect x="1010" y="40" width="380" height="280" fill="rgba(255,106,31,0.025)" stroke="rgba(254,254,254,0.18)" strokeWidth="1" />
        <rect x="1010" y="40" width="2" height="280" fill="#FF6A1F" />
        <text x="1032" y="72" fontFamily="Geist Mono" fontSize="11" letterSpacing="3" fill="#FF6A1F">OPERATOR</text>
        <text x="1032" y="118" fontFamily="Anton" fontSize="34" letterSpacing="1" fill="#FEFEFE">HOUSE WALLET</text>

        <rect x="1032" y="142" width="336" height="158" fill="rgba(0,0,0,0.4)" stroke="rgba(255,106,31,0.45)" strokeWidth="1" />
        <text x="1046" y="166" fontFamily="Geist Mono" fontSize="10" letterSpacing="3" fill="#FF6A1F">WALLET</text>
        <line x1="1046" y1="174" x2="1100" y2="174" stroke="rgba(255,106,31,0.6)" strokeWidth="1" />
        <text x="1046" y="200" fontFamily="Geist Mono" fontSize="13" fill="rgba(254,254,254,0.85)">→ Receives wagers directly</text>
        <text x="1046" y="222" fontFamily="Geist Mono" fontSize="13" fill="rgba(254,254,254,0.85)">→ Pays winnings instantly</text>
        <text x="1046" y="244" fontFamily="Geist Mono" fontSize="13" fill="rgba(254,254,254,0.85)">→ One integration to plug in</text>
        <text x="1046" y="266" fontFamily="Geist Mono" fontSize="13" fill="rgba(254,254,254,0.85)">→ Existing fiat off-ramp</text>
        <text x="1046" y="290" fontFamily="Geist Mono" fontSize="10" letterSpacing="2" fill="rgba(255,106,31,0.7)">SIGNED · OPERATOR-CONTROLLED</text>
      </g>

      {/* P2P arrow */}
      <g>
        <line x1="442" y1="180" x2="998" y2="180"
          stroke="#FF6A1F" strokeWidth="3"
          filter="drop-shadow(0 0 6px rgba(255,106,31,0.7))"
          markerEnd="url(#arrow-orange)"
          markerStart="url(#arrow-orange-rev)" />
        <text x="720" y="156" fontFamily="Anton" fontSize="22" letterSpacing="2" fill="#FEFEFE" textAnchor="middle">PEER-TO-PEER</text>
        <text x="720" y="200" fontFamily="Geist Mono" fontSize="12" letterSpacing="2" fill="#FF6A1F" textAnchor="middle" fontWeight="600">BEARER-TOKEN · SUB-SECOND · CRYPTOGRAPHIC FINALITY</text>
        <text x="720" y="224" fontFamily="Geist Mono" fontSize="11" letterSpacing="1" fill="rgba(254,254,254,0.55)" textAnchor="middle">debit on bet · credit on win · settles each wager</text>
      </g>

      {/* Verify lines + Oracle */}
      <g>
        <path d="M 240 320 Q 280 360 540 400" stroke="rgba(254,254,254,0.30)" strokeWidth="1" strokeDasharray="3 4" fill="none" />
        <text x="320" y="364" fontFamily="Geist Mono" fontSize="10" letterSpacing="1" fill="rgba(254,254,254,0.42)" transform="rotate(15 320 364)">verify</text>
        <path d="M 1200 320 Q 1160 360 900 400" stroke="rgba(254,254,254,0.30)" strokeWidth="1" strokeDasharray="3 4" fill="none" />
        <text x="1100" y="364" fontFamily="Geist Mono" fontSize="10" letterSpacing="1" fill="rgba(254,254,254,0.42)" transform="rotate(-15 1100 364)">verify</text>

        <rect x="540" y="380" width="360" height="70" fill="rgba(0,0,0,0.4)" stroke="rgba(254,254,254,0.18)" strokeWidth="1" />
        <text x="558" y="404" fontFamily="Geist Mono" fontSize="10" letterSpacing="3" fill="#FF6A1F">UNICITY · UNIQUENESS ORACLE</text>
        <text x="558" y="426" fontFamily="Geist Mono" fontSize="11" fill="rgba(254,254,254,0.78)">Witnesses each transfer · returns proof · holds no value</text>
        <text x="558" y="442" fontFamily="Geist Mono" fontSize="10" letterSpacing="1" fill="rgba(254,254,254,0.42)">Not in the transaction path. Not a custodian. Not a router.</text>
      </g>
    </svg>
  );
}
