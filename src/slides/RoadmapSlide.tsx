import { motion } from 'framer-motion';
import { useRef, useState, useEffect, useCallback } from 'react';
import splashVideoUrl from '/kling_20260226_VIDEO_Take_Image_1650_0.mp4';
import unicityLogoUrl from '/UnicityLogo.svg';

const completed = [
  {
    date: 'APR 2024',
    label: 'First Line of Code',
    details: 'Kernel architecture · WASM sandbox · IPC primitives',
  },
  {
    date: 'JUN 2025',
    label: 'Testnet Launch',
    details: 'PoW + BFT consensus · Uniqueness oracle · Token SDK',
  },
  {
    date: 'FEB 2026',
    label: 'Foundation Established',
    details: 'Unicity Foundation · Zug, Switzerland',
  },
];

const postTGE = [
  {
    date: 'JUL 2026',
    label: 'AgentStack',
    details: 'Open source core · Enterprise license · Channel partners',
    color: '#3b82f6',
    tag: 'PHASE 1',
  },
  {
    date: 'AUG 2026',
    label: 'AgentSphere',
    details: 'A2A marketplace · Atomic settlement · First transactions',
    color: '#a855f7',
    tag: 'PHASE 2',
  },
  {
    date: 'SEP 2026',
    label: 'ParaMarket Launch',
    details: 'Parametric insurance · Mutual pools · Automated claims',
    color: '#10b981',
    tag: 'PHASE 3',
  },
  {
    date: 'H2 2026 →',
    label: 'Enterprise Scale',
    details: 'Channel partner ramp · Enterprise deployments · Network effects',
    color: '#f59e0b',
    tag: null,
  },
];

const stats = [
  { value: '24', label: 'months building', color: '#f97316' },
  { value: '3', label: 'products launching 2026', color: '#10b981' },
  { value: '4', label: 'partners committed', color: '#a855f7' },
];

interface ConnectorLine {
  x1: number; y1: number;
  x2: number; y2: number;
  color: string;
  gradientId: string;
}

export function RoadmapSlide() {
  const gridRef = useRef<HTMLDivElement>(null);
  const tgeRef = useRef<HTMLDivElement>(null);
  const leftRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rightRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [lines, setLines] = useState<ConnectorLine[]>([]);
  const [svgSize, setSvgSize] = useState({ w: 1, h: 1 });

  const measure = useCallback(() => {
    const grid = gridRef.current;
    const tge = tgeRef.current;
    if (!grid || !tge) return;

    const gridRect = grid.getBoundingClientRect();
    const tgeRect = tge.getBoundingClientRect();

    const cx = tgeRect.left + tgeRect.width / 2 - gridRect.left;
    const cy = tgeRect.top + tgeRect.height / 2 - gridRect.top;

    setSvgSize({ w: gridRect.width, h: gridRect.height });

    const newLines: ConnectorLine[] = [];

    // Left connectors (completed items) — connect to right edge center of each item
    leftRefs.current.forEach((el, i) => {
      if (!el) return;
      const r = el.getBoundingClientRect();
      const x2 = r.right - gridRect.left;
      const y2 = r.top + r.height / 2 - gridRect.top;
      newLines.push({
        x1: cx, y1: cy, x2, y2,
        color: '#34d399',
        gradientId: `gl${i}`,
      });
    });

    // Right connectors (post-TGE items) — connect to left edge center of each item
    rightRefs.current.forEach((el, i) => {
      if (!el) return;
      const r = el.getBoundingClientRect();
      const x2 = r.left - gridRect.left;
      const y2 = r.top + r.height / 2 - gridRect.top;
      newLines.push({
        x1: cx, y1: cy, x2, y2,
        color: postTGE[i].color,
        gradientId: `gr${i}`,
      });
    });

    setLines(newLines);
  }, []);

  useEffect(() => {
    // Measure after a short delay to let layout settle
    const t = setTimeout(measure, 100);
    window.addEventListener('resize', measure);
    return () => {
      clearTimeout(t);
      window.removeEventListener('resize', measure);
    };
  }, [measure]);

  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-y-auto">
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <video className="w-full h-full object-cover opacity-15" autoPlay muted loop playsInline src={splashVideoUrl} />
        <div className="absolute inset-0 bg-[#060606]/50" />
      </div>

      <div className="relative z-10 h-full flex flex-col px-6 sm:px-10 lg:px-16 py-6 sm:py-8">

        {/* Header */}
        <div className="shrink-0">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-orange-400 text-[10px] sm:text-xs tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            Roadmap
          </motion.p>
          <motion.h1 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[28px] sm:text-[40px] lg:text-[52px] leading-[0.95] tracking-tight mt-1"
            style={{ fontFamily: "'Anton', sans-serif" }}>
            24 MONTHS BUILDING.{' '}
            <span className="text-orange-400">READY TO LAUNCH.</span>
          </motion.h1>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] w-32 sm:w-48 bg-gradient-to-r from-orange-500 to-transparent origin-left mt-2" />
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="shrink-0 mt-3 flex items-baseline gap-8 flex-wrap"
        >
          {stats.map((s) => (
            <div key={s.label} className="flex items-baseline gap-2">
              <span className="text-xl sm:text-2xl font-black"
                style={{ fontFamily: "'Anton', sans-serif", color: s.color }}>
                {s.value}
              </span>
              <span className="text-[#fefefe]/50 text-xs sm:text-sm"
                style={{ fontFamily: "'Geist Mono', monospace" }}>
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Three-column: Completed | TGE Center | Post-TGE */}
        <div className="flex-1 flex items-center min-h-0 mt-4">
        <div ref={gridRef} className="grid w-full relative items-center" style={{ gridTemplateColumns: '240px 1fr 300px', gap: 0 }}>

          {/* ── Connector paths overlay ── */}
          {lines.length > 0 && (
            <motion.svg
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute inset-0 pointer-events-none z-0"
              width={svgSize.w}
              height={svgSize.h}
              viewBox={`0 0 ${svgSize.w} ${svgSize.h}`}
            >
              <defs>
                {/* Left gradients: orange → emerald */}
                {[0, 1, 2].map((i) => (
                  <linearGradient key={`gl${i}`} id={`gl${i}`} x1="100%" y1="0" x2="0%" y2="0">
                    <stop offset="0%" stopColor="#f97316" stopOpacity={0.45} />
                    <stop offset="100%" stopColor="#34d399" stopOpacity={0.3} />
                  </linearGradient>
                ))}
                {/* Right gradients: orange → item color */}
                {postTGE.map((item, i) => (
                  <linearGradient key={`gr${i}`} id={`gr${i}`} x1="0%" y1="0" x2="100%" y2="0">
                    <stop offset="0%" stopColor="#f97316" stopOpacity={0.45} />
                    <stop offset="100%" stopColor={item.color} stopOpacity={0.4} />
                  </linearGradient>
                ))}
                <filter id="connGlow">
                  <feGaussianBlur stdDeviation="2.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {lines.map((line, i) => {
                const dx = line.x2 - line.x1;
                const isLeft = dx < 0;
                // Control points: pull horizontally from TGE, then curve toward target
                const cp1x = line.x1 + dx * 0.3;
                const cp1y = line.y1;
                const cp2x = line.x1 + dx * 0.7;
                const cp2y = line.y2;
                return (
                  <g key={i}>
                    <motion.path
                      d={`M ${line.x1},${line.y1} C ${cp1x},${cp1y} ${cp2x},${cp2y} ${line.x2},${line.y2}`}
                      fill="none"
                      stroke={`url(#${line.gradientId})`}
                      strokeWidth={1.2}
                      filter="url(#connGlow)"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{
                        delay: isLeft ? 0.8 + (i % 3) * 0.15 : 0.9 + (i - 3) * 0.12,
                        duration: 0.8,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                    />
                    {/* Endpoint dot */}
                    <motion.circle
                      cx={line.x2} cy={line.y2} r={3}
                      fill={line.color}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 0.8, scale: 1 }}
                      transition={{
                        delay: isLeft ? 1.0 + (i % 3) * 0.15 : 1.1 + (i - 3) * 0.12,
                        duration: 0.3,
                      }}
                    />
                  </g>
                );
              })}

              {/* Center origin glow */}
              {lines.length > 0 && (
                <motion.circle
                  cx={lines[0].x1} cy={lines[0].y1} r={6}
                  fill="#f97316"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.6, 0.3] }}
                  transition={{ delay: 0.7, duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
                />
              )}
            </motion.svg>
          )}

          {/* ── LEFT: Completed ── */}
          <div className="flex flex-col relative z-10">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-[#fefefe]/60 text-xs tracking-[0.3em] uppercase mb-4"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              Completed
            </motion.p>

            <div className="flex flex-col gap-4">
              {completed.map((item, i) => (
                <motion.div
                  key={item.label}
                  ref={(el) => { leftRefs.current[i] = el; }}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.12, duration: 0.5 }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
                    <span className="text-[9px] tracking-[0.2em] uppercase text-[#fefefe]/30"
                      style={{ fontFamily: "'Geist Mono', monospace" }}>
                      {item.date}
                    </span>
                  </div>
                  <p className="text-[#fefefe] text-base sm:text-lg font-bold leading-tight"
                    style={{ fontFamily: "'Geist Mono', monospace" }}>
                    {item.label}
                  </p>
                  <p className="text-[#fefefe]/50 text-xs mt-1 leading-relaxed"
                    style={{ fontFamily: "'Geist Mono', monospace" }}>
                    {item.details}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[8px] tracking-[0.15em] uppercase mt-2 px-2 py-0.5 rounded border border-emerald-400/30 text-emerald-400"
                    style={{ fontFamily: "'Geist Mono', monospace" }}>
                    <svg viewBox="0 0 12 12" className="w-2.5 h-2.5">
                      <path d="M2.5 6L5 8.5L9.5 3.5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    COMPLETE
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── CENTER: TGE ── */}
          <div className="flex items-center justify-center relative z-10">
            {/* TGE circle */}
            <motion.div
              ref={tgeRef}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full flex flex-col items-center justify-center z-10"
              style={{
                border: '2px solid rgba(249,115,22,0.4)',
                background: 'radial-gradient(circle, rgba(249,115,22,0.08) 0%, rgba(6,6,6,0.9) 70%)',
                boxShadow: '0 0 60px rgba(249,115,22,0.1), inset 0 0 30px rgba(249,115,22,0.05)',
              }}
            >
              <span className="text-[#fefefe] text-3xl sm:text-4xl"
                style={{ fontFamily: "'Anton', sans-serif" }}>
                TGE
              </span>
              <span className="text-[#fefefe]/70 text-xs sm:text-sm tracking-[0.2em] uppercase mt-1"
                style={{ fontFamily: "'Geist Mono', monospace" }}>
                Mainnet Launch
              </span>
            </motion.div>

            {/* Outer ring */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute w-48 h-48 sm:w-56 sm:h-56 rounded-full border border-orange-500/10 pointer-events-none"
            />
          </div>

          {/* ── RIGHT: Post-TGE Launch Sequence ── */}
          <div className="flex flex-col relative z-10">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-[#fefefe]/60 text-xs tracking-[0.3em] uppercase mb-4 text-right"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              Post-TGE Launch Sequence
            </motion.p>

            <div className="flex flex-col gap-4">
              {postTGE.map((item, i) => (
                <motion.div
                  key={item.label}
                  ref={(el) => { rightRefs.current[i] = el; }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + i * 0.12, duration: 0.5 }}
                  className="text-right"
                >
                  <div className="flex items-center justify-end gap-2 mb-1">
                    <span className="text-[9px] tracking-[0.12em] uppercase"
                      style={{ fontFamily: "'Geist Mono', monospace", color: `${item.color}80` }}>
                      {item.date}
                    </span>
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: `${item.color}80` }} />
                  </div>
                  <p className="text-lg sm:text-xl font-bold leading-tight"
                    style={{ fontFamily: "'Geist Mono', monospace", color: item.color }}>
                    {item.label}
                  </p>
                  <p className="text-[#fefefe]/50 text-xs mt-1 leading-relaxed"
                    style={{ fontFamily: "'Geist Mono', monospace" }}>
                    {item.details}
                  </p>
                  {item.tag && (
                    <span className="inline-block text-[8px] tracking-[0.12em] uppercase mt-2 px-2 py-0.5 rounded border"
                      style={{
                        fontFamily: "'Geist Mono', monospace",
                        color: item.color,
                        borderColor: `${item.color}35`,
                        background: `${item.color}0a`,
                      }}>
                      {item.tag}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        </div>

      </div>

      {/* Logo — fixed bottom right */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
        className="fixed bottom-6 right-6 sm:right-10 lg:right-16 z-20">
        <img src={unicityLogoUrl} alt="Unicity" className="h-5 opacity-60" />
      </motion.div>
    </div>
  );
}
