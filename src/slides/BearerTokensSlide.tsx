import { motion } from 'framer-motion';
import { tr } from '../i18n';

const ease = [0.16, 1, 0.3, 1] as const;
const ANTON = "'Anton', sans-serif";
const MONO = "'Geist Mono', monospace";
const ORANGE = '#f97316';

const T = tr({
  en: {
    chipSelfContained: 'SELF-CONTAINED',
    chipSelfProving: 'SELF-PROVING',
    chipP2P: 'PEER-TO-PEER',
    proofSeal: '+ PROOF',
    headLead: 'The OS has an',
    headAccent: 'integrated blockchain.',
    subHead: (
      <>
        <span className="text-[#fefefe] font-bold">Tokens are OS-native data types</span> that <span className="text-orange-400">verify execution.</span>
      </>
    ),
    h2Lead: 'Bearer',
    h2Accent: 'Tokens.',
    dictTerm: 'bear·er to·ken',
    dictPos: 'noun',
    defBody: (
      <>
        An asset you <span className="text-orange-400">hold</span> — self-contained, self-proving, and transferable peer-to-peer — not an entry in a ledger the network maintains for you.
      </>
    ),
    whyBody: (
      <>
        <span className="text-orange-400 font-bold">Why it matters:</span> crypto reaches scale when tokens become <span className="text-orange-400">native data types of the operating system</span>.
      </>
    ),
    ctaProtocol: 'See the protocol',
    watchDemo: 'Watch demo — USDT moving A2A at 3M TPS',
  },
  pt: {
    chipSelfContained: 'AUTOCONTIDO',
    chipSelfProving: 'AUTOCOMPROVÁVEL',
    chipP2P: 'PEER-TO-PEER',
    proofSeal: '+ PROVA',
    headLead: 'O OS tem uma',
    headAccent: 'blockchain integrada.',
    subHead: (
      <>
        <span className="text-[#fefefe] font-bold">Tokens são tipos de dados nativos do OS</span> que <span className="text-orange-400">verificam a execução.</span>
      </>
    ),
    h2Lead: 'Bearer',
    h2Accent: 'Tokens.',
    dictTerm: 'bear·er to·ken',
    dictPos: 'substantivo',
    defBody: (
      <>
        Um ativo que você <span className="text-orange-400">detém</span> — autocontido, autocomprovável e transferível peer-to-peer — não uma entrada num registro que a rede mantém para você.
      </>
    ),
    whyBody: (
      <>
        <span className="text-orange-400 font-bold">Por que isso importa:</span> cripto atinge escala quando os tokens se tornam <span className="text-orange-400">tipos de dados nativos do sistema operacional</span>.
      </>
    ),
    ctaProtocol: 'Veja o protocolo',
    watchDemo: 'Assista à demo — USDT movendo A2A a 3M TPS',
  },
});

/** Animated bearer-token emblem: a self-proving object with its properties orbiting. */
function TokenEmblem() {
  const chips: { label: string; cx: number; cy: number; w: number; from: [number, number]; to: [number, number] }[] = [
    { label: T.chipSelfContained, cx: 230, cy: 46, w: 176, from: [230, 158], to: [230, 63] },
    { label: T.chipSelfProving, cx: 372, cy: 372, w: 158, from: [286, 300], to: [332, 356] },
    { label: T.chipP2P, cx: 88, cy: 372, w: 158, from: [174, 300], to: [128, 356] },
  ];
  return (
    <svg viewBox="0 0 460 460" className="h-auto w-full max-w-[410px]">
      <defs>
        <radialGradient id="emGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(249,115,22,0.35)" />
          <stop offset="100%" stopColor="rgba(249,115,22,0)" />
        </radialGradient>
        <filter id="emBlur" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="7" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* pulsing glow */}
      <motion.circle
        cx="230" cy="232" r="150" fill="url(#emGlow)"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.55, 0.95, 0.55], scale: [1, 1.06, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformOrigin: '230px 232px' }}
      />

      {/* faint orbit rings */}
      {[150, 202].map((r, i) => (
        <motion.circle
          key={r}
          cx="230" cy="232" r={r}
          fill="none" stroke="rgba(249,115,22,0.16)" strokeWidth="1" strokeDasharray="3 7"
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 1, rotate: i === 0 ? 360 : -360 }}
          transition={{ opacity: { duration: 0.8 }, rotate: { duration: i === 0 ? 60 : 90, repeat: Infinity, ease: 'linear' } }}
          style={{ transformOrigin: '230px 232px' }}
        />
      ))}

      {/* connector lines + property chips */}
      {chips.map((c, i) => (
        <g key={c.label}>
          <motion.line
            x1={c.from[0]} y1={c.from[1]} x2={c.to[0]} y2={c.to[1]}
            stroke={ORANGE} strokeOpacity="0.4" strokeWidth="1.2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ delay: 0.9 + i * 0.15, duration: 0.5 }}
          />
          <motion.g
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.0 + i * 0.15, duration: 0.4, ease }}
            style={{ transformOrigin: `${c.cx}px ${c.cy}px` }}
          >
            <rect x={c.cx - c.w / 2} y={c.cy - 17} width={c.w} height="34" rx="17" fill="rgba(249,115,22,0.08)" stroke={ORANGE} strokeOpacity="0.55" />
            <text x={c.cx} y={c.cy + 5} textAnchor="middle" fontFamily={MONO} fontSize="15" fill={ORANGE} letterSpacing="1">{c.label}</text>
          </motion.g>
        </g>
      ))}

      {/* the token — a self-contained bearer object */}
      <motion.g
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.7, ease }}
        style={{ transformOrigin: '230px 232px' }}
      >
        <g transform="rotate(-8 230 232)">
          <rect x="155" y="157" width="150" height="150" rx="28" fill="rgba(249,115,22,0.14)" stroke={ORANGE} strokeWidth="2.5" filter="url(#emBlur)" />
          <path d="M230 190 L272 232 L230 274 L188 232 Z" fill="none" stroke={ORANGE} strokeWidth="2.2" />
          <circle cx="230" cy="232" r="8" fill={ORANGE} />
        </g>
      </motion.g>

      {/* + PROOF seal */}
      <motion.g
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.75, duration: 0.5, ease }}
        style={{ transformOrigin: '324px 168px' }}
      >
        <rect x="286" y="150" width="86" height="36" rx="18" fill="#0f0a06" stroke={ORANGE} strokeWidth="1.6" />
        <text x="329" y="173" textAnchor="middle" fontFamily={MONO} fontSize="15" fill={ORANGE}>{T.proofSeal}</text>
      </motion.g>
    </svg>
  );
}

export function BearerTokensSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      {/* ambient grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      {/* ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 60% 55% at 72% 45%, rgba(249,115,22,0.12) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-10 lg:py-12 gap-6 lg:gap-8">

        {/* Dominant headline */}
        <div className="shrink-0">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] leading-[0.95] tracking-tight uppercase"
            style={{ fontFamily: ANTON, fontSize: 'clamp(2rem, 4.4vw, 3.6rem)' }}
          >
            {T.headLead}
            <br />
            <span className="text-orange-400">{T.headAccent}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-4 text-[#fefefe]/85 text-base sm:text-lg lg:text-xl max-w-4xl leading-relaxed"
            style={{ fontFamily: MONO }}
          >
            {T.subHead}
          </motion.p>
        </div>

        {/* Content — bearer-token proof + emblem */}
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
          {/* Left — copy */}
          <div className="lg:w-[36rem] shrink-0">
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32, duration: 0.6, ease }}
              className="uppercase leading-[0.9] tracking-tight text-[#fefefe]"
              style={{ fontFamily: ANTON, fontSize: 'clamp(2.4rem, 4.6vw, 4rem)' }}
            >
              {T.h2Lead} <span className="text-orange-400">{T.h2Accent}</span>
            </motion.h2>

            {/* dictionary-style definition */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.42, duration: 0.6 }}
              className="mt-5 max-w-xl border-l-2 border-orange-500/60 pl-5"
            >
              <p className="text-sm sm:text-base text-[#fefefe]/50" style={{ fontFamily: MONO }}>
                <span className="text-[#fefefe]/80">{T.dictTerm}</span>
                <span className="mx-2 text-orange-400/70">·</span>
                <span className="italic">{T.dictPos}</span>
              </p>
              <p className="mt-2 text-base sm:text-lg leading-relaxed text-[#fefefe]/70" style={{ fontFamily: MONO }}>
                {T.defBody}
              </p>
              <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#fefefe]/85" style={{ fontFamily: MONO }}>
                {T.whyBody}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6, ease }}
              className="mt-7 flex flex-wrap items-center gap-4"
              style={{ fontFamily: MONO }}
            >
              <a
                href="https://unicity.network"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-orange-500 text-[#0a0a0a] px-7 py-3 text-sm font-bold transition-transform hover:scale-[1.02] cursor-pointer"
              >
                {T.ctaProtocol} <span aria-hidden>→</span>
              </a>
            </motion.div>

            {/* Watch demo — 3M TPS */}
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              href="https://www.youtube.com/watch?v=tz4NBRRNLRo"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2.5 text-orange-400 text-sm sm:text-base font-bold hover:underline cursor-pointer"
              style={{ fontFamily: MONO }}
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0" fill="#FF0000">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              {T.watchDemo}
            </motion.a>
          </div>

          {/* Right — emblem */}
          <div className="flex-1 flex justify-center">
            <TokenEmblem />
          </div>
        </div>
      </div>
    </div>
  );
}
