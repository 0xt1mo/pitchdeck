import { motion } from 'framer-motion';
import { tr } from '../i18n';

const T = tr({
  en: {
    eyebrow: 'The safety gap',
    line1: 'Billions of machine intelligences.',
    l2pre: 'No one can run them',
    ghost: 'safely at scale',
    yet: 'yet.',
    sub: 'Guardrails bolt on from the outside and break at scale. Safety and security have to be built into the OS they run on.',
  },
  pt: {
    eyebrow: 'A lacuna de segurança',
    line1: 'Bilhões de inteligências de máquina.',
    l2pre: 'Ninguém consegue rodá-las',
    ghost: 'com segurança em escala',
    yet: 'ainda.',
    sub: 'Guardrails acoplados por fora quebram em escala. Segurança precisa ser construída dentro do OS onde elas rodam.',
  },
});

// Deterministic pseudo-random (module-safe: no Math.random).
function rnd(i: number, s: number) {
  const x = Math.sin(i * 127.1 + s * 311.7) * 43758.5453;
  return x - Math.floor(x);
}

// An unfinished network: hollow nodes, sparse links, a few live orange nodes,
// and connections that dangle off into nothing — the internet that isn't built yet.
const N = 44;
const NODES = Array.from({ length: N }, (_, i) => ({
  x: 60 + rnd(i, 1) * 900,
  y: 40 + rnd(i, 2) * 920,
  live: rnd(i, 3) > 0.83,
  r: 3.2 + rnd(i, 4) * 3.4,
}));

const LINKS: [number, number][] = [];
for (let i = 0; i < N; i++) {
  let best = -1;
  let bd = 1e9;
  for (let j = 0; j < N; j++) {
    if (i === j) continue;
    const dx = NODES[i].x - NODES[j].x;
    const dy = NODES[i].y - NODES[j].y;
    const d = dx * dx + dy * dy;
    if (d < bd) { bd = d; best = j; }
  }
  // Only wire up ~60% — the rest stay stranded.
  if (best > i && Math.sqrt(bd) < 250 && rnd(i, 5) > 0.4) LINKS.push([i, best]);
}

// A handful of half-built links that trail off toward empty space.
const DANGLE = NODES.map((n, i) => ({ n, i }))
  .filter(({ i }) => rnd(i, 6) > 0.78)
  .map(({ n, i }) => ({
    x1: n.x,
    y1: n.y,
    x2: n.x + (rnd(i, 7) - 0.5) * 260,
    y2: n.y + (rnd(i, 8) - 0.5) * 260,
  }));

function MeshField() {
  return (
    <div
      className="pointer-events-none absolute inset-y-0 right-0 w-[62%] z-[2]"
      style={{
        maskImage: 'linear-gradient(to left, #000 34%, transparent 92%)',
        WebkitMaskImage: 'linear-gradient(to left, #000 34%, transparent 92%)',
      }}
    >
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
        {/* stranded / dangling connections */}
        {DANGLE.map((d, k) => (
          <line
            key={`d${k}`}
            x1={d.x1} y1={d.y1} x2={d.x2} y2={d.y2}
            stroke="rgba(249,115,22,0.22)"
            strokeWidth={1.2}
            strokeDasharray="2 8"
          />
        ))}
        {/* built links */}
        {LINKS.map(([a, b], k) => (
          <line
            key={`l${k}`}
            x1={NODES[a].x} y1={NODES[a].y} x2={NODES[b].x} y2={NODES[b].y}
            stroke="rgba(255,255,255,0.10)"
            strokeWidth={1}
          />
        ))}
        {/* nodes */}
        {NODES.map((n, i) => n.live ? (
          <circle
            key={`n${i}`}
            cx={n.x} cy={n.y} r={n.r}
            fill="#f97316"
            className="mesh-live"
            style={{ animationDelay: `${(rnd(i, 9) * -4).toFixed(2)}s` }}
          />
        ) : (
          <circle
            key={`n${i}`}
            cx={n.x} cy={n.y} r={n.r}
            fill="none"
            stroke="rgba(255,255,255,0.20)"
            strokeWidth={1}
          />
        ))}
      </svg>
    </div>
  );
}

export function CoverSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <style>{`
        @keyframes meshLive {
          0%, 100% { opacity: 0.35; }
          50%      { opacity: 1; filter: drop-shadow(0 0 5px rgba(249,115,22,0.9)); }
        }
        .mesh-live { animation: meshLive 3.4s ease-in-out infinite; transform-box: fill-box; }
      `}</style>

      {/* Radial glow, biased toward the network */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 55% 55% at 74% 46%, rgba(249,115,22,0.10) 0%, transparent 68%)',
        }}
      />

      <MeshField />

      {/* Bottom HUD */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="absolute bottom-6 left-8 right-8 lg:bottom-10 lg:left-16 lg:right-16 z-10 flex items-center justify-between"
      >
        <span
          className="text-[#fefefe]/45 text-xs sm:text-sm lg:text-base tracking-[0.32em] uppercase"
          style={{ fontFamily: "'Geist Mono', monospace" }}
        >
          Unicity Labs
        </span>
      </motion.div>

      {/* Left-anchored editorial block */}
      <div className="relative z-10 h-full flex flex-col items-start justify-center text-left px-8 sm:px-12 lg:px-20 max-w-[62rem]">

        {/* Eyebrow — a live node + label, tying the text to the mesh */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex items-center gap-3 mb-7 lg:mb-9"
        >
          <span className="h-2 w-2 bg-orange-500 rounded-[1px]" />
          <span
            className="text-[#fefefe]/50 text-xs sm:text-sm tracking-[0.34em] uppercase"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            {T.eyebrow}
          </span>
        </motion.div>

        {/* Thesis headline — 'doesn’t exist' rendered hollow */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-[34px] sm:text-[52px] lg:text-[72px] xl:text-[84px] leading-[0.94] tracking-tight uppercase"
          style={{ fontFamily: "'Anton', sans-serif" }}
        >
          <span className="block text-[#fefefe]">{T.line1}</span>
          <span className="block text-[#fefefe] mt-4 lg:mt-6">
            {T.l2pre}{' '}
            <span
              style={{ color: 'transparent', WebkitTextStroke: '1.5px rgba(254,254,254,0.5)' }}
            >
              {T.ghost}
            </span>
            {T.yet ? <> <span className="text-orange-400">{T.yet}</span></> : null}
          </span>
        </motion.h1>

        {/* Hairline + subline */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="h-[2px] w-24 lg:w-32 bg-gradient-to-r from-orange-500 to-transparent origin-left mt-8 lg:mt-10 mb-6 lg:mb-7"
        />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.7 }}
          className="text-[#fefefe]/60 text-base sm:text-lg lg:text-xl leading-snug max-w-2xl"
          style={{ fontFamily: "'Geist Mono', monospace" }}
        >
          {T.sub}
        </motion.p>

      </div>
    </div>
  );
}
