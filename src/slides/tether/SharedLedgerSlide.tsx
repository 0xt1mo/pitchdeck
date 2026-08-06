import { motion } from 'framer-motion';

const ANTON = 'Anton, sans-serif';
const MONO = 'Geist Mono, monospace';
const ORANGE = '#f97316';

const ledgerRows = [110, 144, 178, 212, 246, 280, 314];
const CHOSEN = 212; // the row that unbinds

const props = ['MOVES P2P', 'PRIVATE', 'COMPLIANT'];

export function SharedLedgerSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      {/* atmosphere — glow behind the bearer object */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 74% 52%, rgba(249,115,22,0.13), transparent 46%)' }}
      />

      <div className="relative z-10 h-full flex flex-col px-8 sm:px-10 lg:px-14 py-9 lg:py-12 justify-center gap-6 lg:gap-10">

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="shrink-0 text-[30px] sm:text-[46px] lg:text-[62px] leading-[1.0] tracking-tight uppercase max-w-6xl"
          style={{ fontFamily: ANTON }}
        >
          First we convert stablecoins to{' '}
          <span className="text-orange-400">off-chain bearer instruments.</span>
        </motion.h1>

        {/* Transformation scene */}
        <div className="shrink-0 w-full">
          <svg viewBox="0 0 1200 380" className="w-full h-auto max-h-[66vh]" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="sgRibbon" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor={ORANGE} stopOpacity="0.15" />
                <stop offset="55%" stopColor={ORANGE} stopOpacity="0.7" />
                <stop offset="100%" stopColor={ORANGE} stopOpacity="1" />
              </linearGradient>
              <filter id="sgGlow" x="-60%" y="-60%" width="220%" height="220%">
                <feGaussianBlur stdDeviation="7" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <linearGradient id="sgLedgerFade" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#fefefe" stopOpacity="0.28" />
                <stop offset="100%" stopColor="#fefefe" stopOpacity="0.12" />
              </linearGradient>
            </defs>

            {/* ── LEFT: the shared ledger ── */}
            <motion.text
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}
              x="265" y="58" textAnchor="middle" fontFamily={ANTON} fontSize="38" fill="rgba(254,254,254,0.95)" letterSpacing="0.04em"
            >PLASMA USDT</motion.text>

            {ledgerRows.map((y, i) => (
              y === CHOSEN ? null : (
                <motion.g
                  key={y}
                  initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.05, duration: 0.4 }}
                >
                  <text x="44" y={y + 6} fontFamily={MONO} fontSize="17" fill="rgba(254,254,254,0.42)">$</text>
                  <rect x="66" y={y} width="404" height="8" rx="4" fill="url(#sgLedgerFade)" />
                </motion.g>
              )
            ))}

            <motion.text
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
              x="265" y="360" textAnchor="middle" fontFamily={MONO} fontSize="20" fill="rgba(254,254,254,0.62)"
            >an entry on a shared ledger</motion.text>

            {/* the chosen row, bright — origin of the unbinding */}
            <motion.g
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.55, duration: 0.5 }}
            >
              <text x="44" y={CHOSEN + 6} fontFamily={MONO} fontSize="17" fontWeight="bold" fill={ORANGE}>$</text>
              <rect x="66" y={CHOSEN - 2} width="404" height="10" rx="5" fill={ORANGE} filter="url(#sgGlow)" />
            </motion.g>

            {/* ── RIBBON: the row unbinds and flows up-right ── */}
            <motion.path
              d="M470 212 C 600 212 650 192 720 186 C 760 183 772 182 782 182"
              fill="none" stroke="url(#sgRibbon)" strokeWidth="9" strokeLinecap="round" filter="url(#sgGlow)"
              initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 0.9, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            />

            {/* ── RIGHT: the bearer instrument (a free object) ── */}
            <motion.g
              initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.55, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
            >
              <g transform="rotate(-9 835 182)">
                <rect x="775" y="122" width="120" height="120" rx="22" fill="rgba(249,115,22,0.14)" stroke={ORANGE} strokeWidth="2.5" filter="url(#sgGlow)" />
                {/* inner mark — a self-contained object */}
                <path d="M835 150 L863 182 L835 214 L807 182 Z" fill="none" stroke={ORANGE} strokeWidth="2" />
                <circle cx="835" cy="182" r="6" fill={ORANGE} />
              </g>
            </motion.g>

            <motion.text
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
              x="835" y="88" textAnchor="middle" fontFamily={MONO} fontSize="20" fill="rgba(254,254,254,0.72)" letterSpacing="0.05em"
            >OFF-CHAIN</motion.text>
            <motion.text
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.7 }}
              x="835" y="300" textAnchor="middle" fontFamily={ANTON} fontSize="38" fill={ORANGE} letterSpacing="0.02em"
            >BEARER INSTRUMENT</motion.text>

            {/* ── properties emitted by the object ── */}
            {props.map((p, i) => {
              const y = 110 + i * 54;
              return (
                <motion.g
                  key={p}
                  initial={{ opacity: 0, x: 14 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.9 + i * 0.14, duration: 0.45 }}
                >
                  <line x1="900" y1="182" x2="1010" y2={y + 21} stroke={ORANGE} strokeOpacity="0.35" strokeWidth="1.2" />
                  <rect x="1010" y={y} width="182" height="42" rx="21" fill="rgba(249,115,22,0.08)" stroke={ORANGE} strokeOpacity="0.5" />
                  <text x="1101" y={y + 28} textAnchor="middle" fontFamily={MONO} fontSize="18" fill={ORANGE}>{p}</text>
                </motion.g>
              );
            })}
          </svg>
        </div>

      </div>
    </div>
  );
}
