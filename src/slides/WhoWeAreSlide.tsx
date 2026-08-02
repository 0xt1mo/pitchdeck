import { useMemo, type CSSProperties } from 'react';
import { motion } from 'framer-motion';
import LANDDATA_LON_LAT from './landData.json';

const founders = [
  {
    name: 'Mike Gault',
    role: 'CEO',
    photo: '/team/mike-bw.png',
    linkedin: 'https://www.linkedin.com/in/mikegault1/',
    lines: [
      'PhD Electrical Engineering',
      'Built & exited Guardtime (ADX:IHC)',
      'Ex-MD, Barclays Capital',
    ],
  },
  {
    name: 'Tony Kenyon',
    role: 'CTO',
    photo: '/team/tony-bw.png',
    linkedin: 'https://www.linkedin.com/in/tonykenyon/',
    lines: [
      'PhD Machine Learning',
      '25 years shipping enterprise AI & infra',
      'Principal Architect: BT, Nokia, A10',
    ],
  },
  {
    name: 'Joshua J Buow',
    role: 'OS Architect',
    photo: '/team/jjb2-bw.png',
    lines: [
      'Inventor AOS',
      'Ex-NEAR',
    ],
  },
  {
    name: 'Eric Leandri',
    role: 'Chairman',
    photo: '/team/eric-bw.png',
    linkedin: 'https://www.linkedin.com/in/ericleandri/',
    lines: [
      'AI Visionary',
      'CEO, Aleria (UAE Sovereign AI)',
    ],
  },
];

const offices = [
  { id: 'zug',      name: 'ZUG',       lat: 47.17, lon:  8.52, coords: '47.17°N · 8.52°E',  off: { x: -130, y: -90 }, an: 'end'   as const },
  { id: 'tallinn',  name: 'TALLINN',   lat: 59.44, lon: 24.75, coords: '59.44°N · 24.75°E', off: { x:  205, y: -25 }, an: 'start' as const },
  { id: 'abudhabi', name: 'ABU DHABI', lat: 24.47, lon: 54.37, coords: '24.47°N · 54.37°E', off: { x:  165, y: 105 }, an: 'start' as const },
];

const LinkedInBadge = ({ href }: { href: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="absolute -bottom-0.5 -right-0.5 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer"
    style={{ background: 'rgba(249,115,22,0.85)' }}
  >
    <svg viewBox="0 0 24 24" fill="white" className="w-3 h-3">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  </a>
);

export function WhoWeAreSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-12 lg:px-20 pt-6 pb-20 lg:pt-6 lg:pb-24 justify-center gap-3">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-orange-400 text-xs sm:text-sm tracking-[0.32em] uppercase font-semibold"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            The Team
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[34px] sm:text-[50px] lg:text-[72px] xl:text-[84px] leading-[0.95] tracking-tight mt-2 uppercase"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            Built by{' '}
            <span className="text-orange-400">infrastructure veterans.</span>
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] w-20 lg:w-28 bg-orange-500 origin-left mt-3"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-3 text-[#fefefe]/85 text-xs sm:text-sm lg:text-base leading-[1.55] max-w-5xl"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            <span className="text-[#fefefe] font-bold">Unicity Labs.</span> PhDs in machine learning and cryptography with fifteen years building <span className="text-orange-400 font-bold">nation-state-grade security infrastructure</span> — now applied to AI.
          </motion.p>
        </div>

        {/* Two columns: founders (left) + globe (right) */}
        <div className="grid grid-cols-[1fr_1fr] gap-6 lg:gap-8 items-center shrink-0">

          {/* Left — founders in a 2×2 matrix */}
          <div className="grid grid-cols-2 gap-x-5 lg:gap-x-7 gap-y-5 lg:gap-y-7">
            {founders.map((f, i) => (
              <motion.div
                key={f.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="relative shrink-0">
                  <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden ring-2 ring-orange-500/30">
                    <img src={f.photo} alt={f.name} className="w-full h-full object-cover" style={(f as { photoStyle?: CSSProperties }).photoStyle} />
                  </div>
                  {f.linkedin && <LinkedInBadge href={f.linkedin} />}
                </div>
                <div className="min-w-0">
                  <p
                    className="text-[#fefefe] text-xl lg:text-2xl font-bold leading-tight"
                    style={{ fontFamily: "'Geist Mono', monospace" }}
                  >
                    {f.name}
                  </p>
                  <p
                    className="text-orange-400 text-xs lg:text-sm font-bold tracking-[0.2em] uppercase mt-1"
                    style={{ fontFamily: "'Geist Mono', monospace" }}
                  >
                    {f.role}
                  </p>
                  <div className="mt-2 space-y-1">
                    {f.lines.map((line, j) => (
                      <p
                        key={j}
                        className="text-[#fefefe]/75 text-xs lg:text-sm leading-snug flex gap-2"
                        style={{ fontFamily: "'Geist Mono', monospace" }}
                      >
                        <span className="text-orange-400/70 shrink-0">→</span>
                        <span>{line}</span>
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right — globe */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="flex flex-col items-center pl-8 lg:pl-10"
            style={{ borderLeft: '1px solid rgba(255,255,255,0.10)' }}
          >
            <p
              className="text-orange-400 text-sm lg:text-base tracking-[0.32em] uppercase font-semibold mb-2 self-start"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              Where We Operate
            </p>
            <Globe />
          </motion.div>
        </div>

      </div>
    </div>
  );
}

const R = 200;
const ROT_LON = 25;
const ROT_LAT = -15;
const COS_LAT = Math.cos((ROT_LAT * Math.PI) / 180);
const SIN_LAT = Math.sin((ROT_LAT * Math.PI) / 180);

function project(latDeg: number, lonDeg: number) {
  const lat = (latDeg * Math.PI) / 180;
  const lon = ((lonDeg - ROT_LON) * Math.PI) / 180;
  const x = Math.cos(lat) * Math.sin(lon);
  const y0 = -Math.sin(lat);
  const z = Math.cos(lat) * Math.cos(lon);
  const yr = y0 * COS_LAT - z * SIN_LAT;
  const zr = y0 * SIN_LAT + z * COS_LAT;
  return { x: x * R, y: yr * R, visible: zr > 0 };
}

type Seg = string[];

function buildGraticule() {
  const lonLines: { d: string; stroke: string; sw: number; dash?: string }[] = [];
  const latLines: { d: string; stroke: string; sw: number; dash?: string }[] = [];

  // Longitudes (meridians)
  for (let lonDeg = -180; lonDeg < 180; lonDeg += 20) {
    const isMajor = lonDeg % 60 === 0;
    const stroke = isMajor ? 'rgba(254,254,254,0.14)' : 'rgba(254,254,254,0.08)';
    const sw = isMajor ? 0.7 : 0.5;
    let pts: string[] = [];
    for (let lat = -85; lat <= 85; lat += 4) {
      const p = project(lat, lonDeg);
      if (p.visible) {
        pts.push(`${p.x.toFixed(1)},${p.y.toFixed(1)}`);
      } else {
        if (pts.length > 1) lonLines.push({ d: pts.join(' '), stroke, sw });
        pts = [];
      }
    }
    if (pts.length > 1) lonLines.push({ d: pts.join(' '), stroke, sw });
  }

  // Latitudes (parallels)
  for (let latDeg = -75; latDeg <= 75; latDeg += 15) {
    const isEq = latDeg === 0;
    const stroke = isEq ? 'rgba(255,106,31,0.45)' : (latDeg % 30 === 0 ? 'rgba(254,254,254,0.14)' : 'rgba(254,254,254,0.08)');
    const sw = isEq ? 1 : (latDeg % 30 === 0 ? 0.7 : 0.5);
    const dash = isEq ? '4 4' : undefined;
    let pts: string[] = [];
    for (let lon = -180; lon <= 180; lon += 4) {
      const p = project(latDeg, lon);
      if (p.visible) {
        pts.push(`${p.x.toFixed(1)},${p.y.toFixed(1)}`);
      } else {
        if (pts.length > 1) latLines.push({ d: pts.join(' '), stroke, sw, dash });
        pts = [];
      }
    }
    if (pts.length > 1) latLines.push({ d: pts.join(' '), stroke, sw, dash });
  }

  return [...lonLines, ...latLines];
}

function buildLand() {
  const front: Seg[] = [];
  const back: Seg[] = [];
  for (const ring of LANDDATA_LON_LAT as [number, number][][]) {
    let curFront: string[] = [];
    let curBack: string[] = [];
    for (const [lon, lat] of ring) {
      const p = project(lat, lon);
      if (p.visible) {
        if (curBack.length) {
          if (curBack.length > 1) back.push(curBack);
          curBack = [];
        }
        curFront.push(`${p.x.toFixed(1)},${p.y.toFixed(1)}`);
      } else {
        if (curFront.length) {
          if (curFront.length > 1) front.push(curFront);
          curFront = [];
        }
        curBack.push(`${p.x.toFixed(1)},${p.y.toFixed(1)}`);
      }
    }
    if (curFront.length > 1) front.push(curFront);
    if (curBack.length > 1) back.push(curBack);
  }
  return { front, back };
}

function Globe() {
  const graticule = useMemo(buildGraticule, []);
  const { front, back } = useMemo(buildLand, []);

  const pins = offices
    .map((o) => {
      const p = project(o.lat, o.lon);
      return { ...o, x: p.x, y: p.y, visible: p.visible };
    })
    .filter((p) => p.visible);

  const arcPairs: [number, number][] = [[0, 1], [0, 2], [1, 2]];

  return (
    <svg viewBox="-380 -300 760 600" preserveAspectRatio="xMidYMid meet" className="w-full h-auto max-w-[560px]" style={{ overflow: 'visible' }}>
      {/* Disc backdrop */}
      <circle cx="0" cy="0" r={R + 3} fill="none" stroke="rgba(255,106,31,0.22)" strokeWidth="6" />
      <defs>
        <radialGradient id="globe-fill" cx="0.42" cy="0.35" r="0.7">
          <stop offset="0%" stopColor="rgba(255,106,31,0.10)" />
          <stop offset="55%" stopColor="rgba(255,106,31,0.03)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0)" />
        </radialGradient>
      </defs>
      <circle cx="0" cy="0" r={R} fill="url(#globe-fill)" />

      {/* Land — back faces first (faint dashed), then front (filled) */}
      <g>
        {back.map((seg, i) => (
          <polyline
            key={`b${i}`}
            points={seg.join(' ')}
            fill="none"
            stroke="rgba(255,106,31,0.16)"
            strokeWidth="0.5"
            strokeDasharray="1.5 2"
            strokeLinejoin="round"
          />
        ))}
        {front.map((seg, i) => (
          <polyline
            key={`f${i}`}
            points={seg.join(' ')}
            fill="rgba(255,106,31,0.10)"
            stroke="rgba(255,106,31,0.55)"
            strokeWidth="0.7"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        ))}
      </g>

      {/* Graticule on top */}
      <g>
        {graticule.map((g, i) => (
          <polyline
            key={`g${i}`}
            points={g.d}
            fill="none"
            stroke={g.stroke}
            strokeWidth={g.sw}
            strokeDasharray={g.dash}
          />
        ))}
      </g>

      {/* Bright outer ring */}
      <circle cx="0" cy="0" r={R} fill="none" stroke="rgba(255,106,31,0.75)" strokeWidth="1.4" />

      {/* Arcs with bidirectional pulses */}
      <g>
        {arcPairs.map(([a, b], i) => {
          if (a >= pins.length || b >= pins.length) return null;
          const p1 = pins[a];
          const p2 = pins[b];
          const mx = (p1.x + p2.x) / 2;
          const my = (p1.y + p2.y) / 2;
          const dx = p2.x - p1.x;
          const dy = p2.y - p1.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const lift = Math.min(60, dist * 0.32);
          const cmag = Math.sqrt(mx * mx + my * my) || 1;
          const cx = mx + (mx / cmag) * lift;
          const cy = my + (my / cmag) * lift;
          const path = `M${p1.x.toFixed(1)},${p1.y.toFixed(1)} Q${cx.toFixed(1)},${cy.toFixed(1)} ${p2.x.toFixed(1)},${p2.y.toFixed(1)}`;
          const dur = 3 + (i % 3) * 0.7;
          const offsetA = i * 0.4;
          const offsetB = i * 0.4 + dur / 2;
          const pid = `arc13-${i}`;
          return (
            <g key={pid}>
              <defs>
                <path id={pid} d={path} />
              </defs>
              <path d={path} fill="none" stroke="rgba(255,106,31,0.10)" strokeWidth="3.5" strokeLinecap="round" />
              <path d={path} fill="none" stroke="rgba(255,106,31,0.55)" strokeWidth="1" strokeLinecap="round" />
              <circle r="2.4" fill="#FF6A1F" style={{ filter: 'drop-shadow(0 0 4px rgba(255,106,31,0.9))' }}>
                <animateMotion dur={`${dur}s`} begin={`${offsetA}s`} repeatCount="indefinite" rotate="auto">
                  <mpath href={`#${pid}`} />
                </animateMotion>
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.85;1" dur={`${dur}s`} begin={`${offsetA}s`} repeatCount="indefinite" />
              </circle>
              <circle r="2.4" fill="#FF6A1F" style={{ filter: 'drop-shadow(0 0 4px rgba(255,106,31,0.9))' }}>
                <animateMotion dur={`${dur}s`} begin={`${offsetB}s`} repeatCount="indefinite" rotate="auto" keyPoints="1;0" keyTimes="0;1">
                  <mpath href={`#${pid}`} />
                </animateMotion>
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.85;1" dur={`${dur}s`} begin={`${offsetB}s`} repeatCount="indefinite" />
              </circle>
            </g>
          );
        })}
      </g>

      {/* Pins */}
      <g>
        {pins.map((p, i) => {
          const labelX = p.x + p.off.x;
          const labelY = p.y + p.off.y;
          const leaderX = labelX + (p.an === 'end' ? 4 : -4);
          const pulseDelay1 = i * 0.7;
          const pulseDelay2 = i * 0.7 + 1.3;
          return (
            <g key={p.id}>
              <circle cx={p.x} cy={p.y} r="6" fill="none" stroke="rgba(255,106,31,0.5)" strokeWidth="1" opacity="0">
                <animate attributeName="r" from="6" to="36" dur="2.6s" begin={`${pulseDelay1}s`} repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.7;0" keyTimes="0;1" dur="2.6s" begin={`${pulseDelay1}s`} repeatCount="indefinite" />
              </circle>
              <circle cx={p.x} cy={p.y} r="6" fill="none" stroke="rgba(255,106,31,0.5)" strokeWidth="1" opacity="0">
                <animate attributeName="r" from="6" to="22" dur="2.6s" begin={`${pulseDelay2}s`} repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.5;0" keyTimes="0;1" dur="2.6s" begin={`${pulseDelay2}s`} repeatCount="indefinite" />
              </circle>
              <circle cx={p.x} cy={p.y} r="9" fill="rgba(6,6,6,0.7)" stroke="rgba(255,106,31,0.7)" strokeWidth="1.4" />
              <circle cx={p.x} cy={p.y} r="4" fill="#FF6A1F" />
              <line
                x1={p.x + (p.an === 'end' ? -9 : 9)}
                y1={p.y}
                x2={leaderX}
                y2={labelY}
                stroke="rgba(255,106,31,0.45)"
                strokeWidth="0.8"
                strokeDasharray="2 3"
                fill="none"
              />
              <text x={labelX} y={labelY} textAnchor={p.an} fontFamily="Anton, sans-serif" fontSize="22" letterSpacing="3" fill="#FF6A1F" style={{ textTransform: 'uppercase' }}>
                {p.name}
              </text>
              <text x={labelX} y={labelY + 22} textAnchor={p.an} fontFamily="Geist Mono" fontSize="14" letterSpacing="1.4" fill="rgba(254,254,254,0.55)" style={{ textTransform: 'uppercase' }}>
                {p.coords}
              </text>
            </g>
          );
        })}
      </g>
    </svg>
  );
}
