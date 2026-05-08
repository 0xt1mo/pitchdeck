import { motion } from 'framer-motion';

const assetTypes = [
  {
    label: 'A',
    title: 'Native Currency',
    desc: 'Unicity native currency mined through Proof of Work, migrated off-chain by the miner who originally won the block reward. Minted via an off-chain genesis transaction.',
  },
  {
    label: 'B',
    title: 'Native Assets',
    desc: 'Genesis event occurs off-chain with no external reference. Trivially minted by defining genesis data and generating a unicity proof for the genesis transaction.',
  },
  {
    label: 'C',
    title: 'External-chain Tokens',
    desc: 'Unicity does not validate source-chain blocks — recipients do. The State Transition SDK plugs in local validation (light client, ZK proof verification) of the source chain.',
  },
];

function ChainAgnosticDiagram() {
  const W = 720;
  const H = 420;
  const font = "'Geist Mono', monospace";
  const fontTitle = "'Anton', sans-serif";

  // Source positions (left column)
  const srcX = 150;
  const srcY = [70, 200, 330];

  // Genesis data + UP (center)
  const genX = 410;
  const genY = 200;
  const upX = 540;
  const upY = 200;

  // Oracle (top right)
  const oracleX = 540;
  const oracleY = 70;

  const cryptoIcons = [
    { x: -78, src: '/icons/crypto/btc.svg' },
    { x: -36, src: '/icons/crypto/eth.svg' },
    { x: 6, src: '/icons/crypto/sol.svg' },
    { x: 48, src: '/icons/crypto/bnb.svg' },
  ];

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto">
      <defs>
        <marker id="ca-arrow" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto">
          <path d="M0,0 L8,3.5 L0,7" fill="rgba(254,254,254,0.7)" />
        </marker>
        <marker id="ca-arrow-orange" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto">
          <path d="M0,0 L8,3.5 L0,7" fill="#f97316" />
        </marker>
      </defs>

      {/* ── Source labels ── */}
      <g>
        {/* Unicity PoW */}
        <text x={srcX} y={srcY[0] - 4} textAnchor="middle" fill="#fefefe" fontSize="14"
          fontWeight="bold" fontFamily={fontTitle} letterSpacing="0.06em">
          UNICITY POW
        </text>
        <text x={srcX} y={srcY[0] + 14} textAnchor="middle" fill="rgba(254,254,254,0.7)" fontSize="11"
          fontFamily={font}>native currency</text>

        {/* Unicity native assets */}
        <text x={srcX} y={srcY[1] - 4} textAnchor="middle" fill="#fefefe" fontSize="14"
          fontWeight="bold" fontFamily={fontTitle} letterSpacing="0.06em">
          UNICITY NATIVE
        </text>
        <text x={srcX} y={srcY[1] + 14} textAnchor="middle" fill="rgba(254,254,254,0.7)" fontSize="11"
          fontFamily={font}>off-chain genesis</text>

        {/* External chains */}
        <text x={srcX} y={srcY[2] - 4} textAnchor="middle" fill="#fefefe" fontSize="14"
          fontWeight="bold" fontFamily={fontTitle} letterSpacing="0.06em">
          EXTERNAL CHAINS
        </text>
        {/* Real crypto icons */}
        {cryptoIcons.map((c, i) => (
          <image
            key={i}
            href={c.src}
            x={srcX + c.x - 14}
            y={srcY[2] + 8}
            width={28}
            height={28}
          />
        ))}
      </g>

      {/* ── Arrows from sources to Genesis Data ── */}
      {srcY.map((y, i) => (
        <line
          key={i}
          x1={srcX + 80}
          y1={y + (i === 2 ? 22 : 6)}
          x2={genX - 38}
          y2={genY + 8}
          stroke="rgba(254,254,254,0.55)"
          strokeWidth={1.3}
          markerEnd="url(#ca-arrow)"
        />
      ))}

      {/* ── Genesis Data box ── */}
      <rect x={genX - 38} y={genY - 22} width={76} height={62} rx={7}
        fill="rgba(249,115,22,0.08)" stroke="rgba(249,115,22,0.55)" strokeWidth={1.4} />
      <text x={genX} y={genY + 4} textAnchor="middle" fill="#fefefe" fontSize="13"
        fontWeight="bold" fontFamily={fontTitle} letterSpacing="0.05em">
        GENESIS
      </text>
      <text x={genX} y={genY + 22} textAnchor="middle" fill="rgba(254,254,254,0.85)" fontSize="11"
        fontWeight="bold" fontFamily={fontTitle} letterSpacing="0.05em">DATA</text>

      {/* ── UP box ── */}
      <rect x={upX - 22} y={upY - 22} width={44} height={62} rx={6}
        fill="rgba(249,115,22,0.18)" stroke="#f97316" strokeWidth={1.4} />
      <text x={upX} y={upY + 14} textAnchor="middle" fill="#f97316" fontSize="15"
        fontWeight="bold" fontFamily={fontTitle} letterSpacing="0.05em">
        UP
      </text>

      {/* ── Oracle box ── */}
      <rect x={oracleX - 100} y={oracleY - 22} width={200} height={48} rx={7}
        fill="rgba(249,115,22,0.08)" stroke="rgba(249,115,22,0.6)" strokeWidth={1.4} />
      <text x={oracleX} y={oracleY - 2} textAnchor="middle" fill="#fefefe" fontSize="14"
        fontWeight="bold" fontFamily={fontTitle} letterSpacing="0.07em">
        UNIQUENESS ORACLE
      </text>
      <text x={oracleX} y={oracleY + 16} textAnchor="middle" fill="rgba(254,254,254,0.7)" fontSize="10"
        fontFamily={font}>ZK proof of state uniqueness</text>

      {/* Mint Request arrow (Genesis → Oracle) */}
      <line x1={genX + 46} y1={genY - 12} x2={oracleX - 75} y2={oracleY + 28}
        stroke="rgba(254,254,254,0.7)" strokeWidth={1.3} markerEnd="url(#ca-arrow)" />
      <text x={(genX + oracleX) / 2 - 32} y={(genY + oracleY) / 2 - 4} fill="#fefefe" fontSize="11"
        fontFamily={font} fontWeight="bold">mint request</text>

      {/* Unicity Proof arrow (Oracle → UP) */}
      <line x1={oracleX} y1={oracleY + 28} x2={upX} y2={upY - 24}
        stroke="#f97316" strokeWidth={1.6} markerEnd="url(#ca-arrow-orange)" />
      <text x={oracleX + 10} y={(oracleY + upY) / 2 - 4} fill="#f97316" fontSize="11"
        fontFamily={font} fontWeight="bold">unicity proof (UP)</text>

      {/* Caption */}
      <text x={W / 2} y={H - 12} textAnchor="middle" fill="rgba(254,254,254,0.55)" fontSize="11"
        fontFamily={font} letterSpacing="0.06em" fontWeight="bold">
        CHAIN-AGNOSTIC TOKEN GENESIS
      </text>
    </svg>
  );
}

export function ChainAgnosticSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-6 sm:px-10 lg:px-16 py-6 sm:py-8 lg:py-10 justify-center gap-4 lg:gap-5">

        {/* Header */}
        <div className="shrink-0">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-orange-400 text-[10px] sm:text-xs tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            Appendix — Blockchain
          </motion.p>
          <motion.h1 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[26px] sm:text-[36px] lg:text-[44px] leading-[1.05] tracking-tight mt-1"
            style={{ fontFamily: "'Anton', sans-serif" }}>
            CHAIN AGNOSTIC <span className="text-orange-400">OPERATIONS</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="mt-2 text-[#fefefe]/85 text-xs sm:text-sm lg:text-base max-w-5xl leading-relaxed"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            The Unicity State Transition SDK mints three classes of asset — native currency, native assets, and tokens detached from any external chain. Unicity does not validate source-chain blocks; <span className="text-orange-400">recipients verify locally</span> using pluggable light clients or ZK proofs.
          </motion.p>
        </div>

        {/* Body */}
        <div className="grid grid-cols-2 gap-6 lg:gap-10 shrink-0 items-start">

          {/* Left — Diagram */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="rounded-xl p-4 lg:p-5"
            style={{
              border: '1px solid rgba(249,115,22,0.5)',
              background: '#0a0a0f',
            }}>
            <p className="text-orange-400 text-[10px] sm:text-xs tracking-[0.3em] uppercase font-bold mb-2"
              style={{ fontFamily: "'Geist Mono', monospace" }}>
              Token Genesis
            </p>
            <ChainAgnosticDiagram />
          </motion.div>

          {/* Right — Three asset types */}
          <div className="flex flex-col gap-3 lg:gap-4">
            <p className="text-orange-400 text-[10px] sm:text-xs tracking-[0.3em] uppercase font-bold"
              style={{ fontFamily: "'Geist Mono', monospace" }}>
              Three Asset Classes
            </p>
            {assetTypes.map((a, i) => (
              <motion.div
                key={a.label}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                className="rounded-lg p-3 lg:p-4 flex items-start gap-3"
                style={{
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: 'rgba(255,255,255,0.025)',
                }}
              >
                <span
                  className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{
                    background: 'rgba(249,115,22,0.15)',
                    border: '1px solid rgba(249,115,22,0.55)',
                  }}
                >
                  <span
                    className="text-orange-400 text-xs font-bold"
                    style={{ fontFamily: "'Geist Mono', monospace" }}
                  >
                    {a.label}
                  </span>
                </span>
                <div className="flex-1">
                  <p
                    className="text-[#fefefe] text-sm sm:text-base lg:text-lg font-bold leading-tight"
                    style={{ fontFamily: "'Anton', sans-serif", letterSpacing: '0.01em' }}
                  >
                    {a.title.toUpperCase()}
                  </p>
                  <p
                    className="text-[#fefefe]/70 text-[11px] sm:text-xs lg:text-sm mt-1.5 leading-snug"
                    style={{ fontFamily: "'Geist Mono', monospace" }}
                  >
                    {a.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
