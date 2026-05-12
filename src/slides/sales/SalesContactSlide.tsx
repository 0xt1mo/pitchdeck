import { useMemo } from 'react';
import { motion } from 'framer-motion';
import LANDDATA_LON_LAT from '../casino/landData.json';

const offices = [
  { id: 'zug',      name: 'ZUG',       lat: 47.17, lon:  8.52, coords: '47.17°N · 8.52°E',  off: { x: -130, y: -90 }, an: 'end'   as const },
  { id: 'tallinn',  name: 'TALLINN',   lat: 59.44, lon: 24.75, coords: '59.44°N · 24.75°E', off: { x:  205, y: -25 }, an: 'start' as const },
  { id: 'abudhabi', name: 'ABU DHABI', lat: 24.47, lon: 54.37, coords: '24.47°N · 54.37°E', off: { x:  165, y: 105 }, an: 'start' as const },
];

export function SalesContactSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-10 lg:px-20 py-12 lg:py-16 justify-center gap-7">

        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-orange-400 text-xs sm:text-sm tracking-[0.32em] uppercase font-semibold mb-3"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Next Steps
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[26px] sm:text-[36px] lg:text-[46px] leading-[1.05] tracking-tight"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            Secure first.{' '}
            <span className="text-orange-400">Then run.</span>
          </motion.h1>
        </div>

        <div className="grid grid-cols-[1fr_500px] gap-10 lg:gap-12 shrink-0 items-stretch">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col justify-center gap-5"
          >
            {/* Next Steps — the 4 needs */}
            <div>
              <p
                className="text-[#fefefe]/85 text-sm lg:text-base leading-snug mb-3"
                style={{ fontFamily: "'Geist Mono', monospace" }}
              >
                Autonomous AI needs more than intelligence.
              </p>
              <div className="grid grid-cols-4 gap-2">
                {['Identity', 'Authority', 'Policy', 'Proof'].map((w, i) => (
                  <motion.div
                    key={w}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.08, duration: 0.4 }}
                    className="px-3 py-2.5 rounded-md text-center"
                    style={{
                      border: '1px solid rgba(255,106,31,0.35)',
                      background: 'rgba(255,106,31,0.06)',
                    }}
                  >
                    <p
                      className="text-orange-400 text-[11px] lg:text-[12px] tracking-[0.18em] uppercase font-bold"
                      style={{ fontFamily: "'Geist Mono', monospace" }}
                    >
                      {w}
                    </p>
                  </motion.div>
                ))}
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.78 }}
                className="mt-3 text-[#fefefe]/70 text-[13px] lg:text-[15px] tracking-[0.08em] uppercase"
                style={{ fontFamily: "'Anton', sans-serif" }}
              >
                Security. Explainability.{' '}
                <span className="text-orange-400">Verifiability.</span>
              </motion.p>
            </div>

            {/* 45-day pilot callout */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.5 }}
              className="rounded-lg p-5 lg:p-6"
              style={{
                background: 'rgba(245,158,11,0.08)',
                border: '1px solid rgba(245,158,11,0.30)',
              }}
            >
              <p
                className="text-orange-400 text-[10px] tracking-[0.32em] uppercase font-bold mb-2"
                style={{ fontFamily: "'Geist Mono', monospace" }}
              >
                45 Days · First Deployment
              </p>
              <p
                className="text-[#fefefe] text-lg lg:text-xl font-bold leading-tight tracking-[0.02em] uppercase mb-2"
                style={{ fontFamily: "'Anton', sans-serif" }}
              >
                To the first secure-agent workflow.
              </p>
              <p
                className="text-[#fefefe]/75 text-xs lg:text-sm leading-relaxed"
                style={{ fontFamily: "'Geist Mono', monospace" }}
              >
                Start narrow. <span className="text-[#fefefe] font-semibold">One institution. One workflow. One agent class. One controlled action surface.</span> Permit approval · procurement · onboarding · claims · customs · payments.
              </p>
            </motion.div>

            {/* Contact strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
              className="flex items-center gap-5 flex-wrap pt-3"
              style={{ borderTop: '1px solid rgba(255,255,255,0.10)' }}
            >
              <a
                href="mailto:info@unicity.ai"
                className="flex items-center gap-2 text-orange-400 text-sm lg:text-base font-bold"
                style={{ fontFamily: "'Geist Mono', monospace" }}
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="rgba(245,158,11,0.9)">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                info@unicity.ai
              </a>
              <span className="text-[#fefefe]/30">·</span>
              <a
                href="https://unicity.ai"
                className="flex items-center gap-2 text-orange-400 text-sm lg:text-base font-bold"
                style={{ fontFamily: "'Geist Mono', monospace" }}
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="rgba(245,158,11,0.9)">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
                unicity.ai
              </a>
              <span className="text-[#fefefe]/30">·</span>
              <a
                href="tel:+37258859860"
                className="flex items-center gap-2 text-orange-400 text-sm lg:text-base font-bold"
                style={{ fontFamily: "'Geist Mono', monospace" }}
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="rgba(245,158,11,0.9)">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                </svg>
                +372 5885 9860
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="flex flex-col items-center"
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
      <circle cx="0" cy="0" r={R + 3} fill="none" stroke="rgba(255,106,31,0.22)" strokeWidth="6" />
      <defs>
        <radialGradient id="globe-fill" cx="0.42" cy="0.35" r="0.7">
          <stop offset="0%" stopColor="rgba(255,106,31,0.10)" />
          <stop offset="55%" stopColor="rgba(255,106,31,0.03)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0)" />
        </radialGradient>
      </defs>
      <circle cx="0" cy="0" r={R} fill="url(#globe-fill)" />

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

      <circle cx="0" cy="0" r={R} fill="none" stroke="rgba(255,106,31,0.75)" strokeWidth="1.4" />

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
          const pid = `arc-contact-${i}`;
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
