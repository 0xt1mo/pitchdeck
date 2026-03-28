import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import { DiscordIcon, XIcon } from '../components/icons/SocialIcons';
import splashVideoUrl from '/kling_20260226_VIDEO_Take_Image_1650_0.mp4';
import unicityLogoUrl from '/UnicityLogo.svg';

/* Generate difficulty history mimicking the real chart:
   x: 0-350, y: ~1 → ~1e7 (log scale)
   Phases: slow start → ramp to ~100 → dip at ~60 → spike to ~7000 at ~80 →
   plateau ~30k-50k from 100-200 → jumps to ~100k at ~210 →
   plateau ~50k-100k 220-250 → steep climb to ~1e6 at 270 → peak ~1e7 at 300 → pullback → recovery */
const generateChartData = () => {
  const pts: { x: number; y: number }[] = [];
  const rng = (s: number) => Math.sin(s * 127.1) * 0.5 + 0.5; // deterministic pseudo-random

  for (let i = 0; i <= 350; i++) {
    let v: number;
    const n = 1 + (rng(i) - 0.5) * 0.15; // ±7.5% noise

    if (i <= 10) v = 1 + i * 0.2;
    else if (i <= 25) v = 3 + (i - 10) * 0.8;
    else if (i <= 40) v = 15 + (i - 25) * 2.5;
    else if (i <= 55) v = 52 + (i - 40) * 3.5;
    else if (i <= 62) v = 105 - (i - 55) * 7; // dip down to ~56
    else if (i <= 70) v = 56 + (i - 62) * 20; // sharp recovery
    else if (i <= 78) v = 216 + (i - 70) * 90; // spike
    else if (i <= 85) v = 936 + (i - 78) * 600; // to ~5000
    else if (i <= 95) v = 5136 + (i - 85) * 1500; // to ~20k
    else if (i <= 110) v = 20000 + (i - 95) * 1000; // ramp to ~35k
    else if (i <= 140) v = 35000 + (i - 110) * 500 + rng(i + 50) * 5000; // noisy plateau ~35-55k
    else if (i <= 195) v = 50000 + (i - 140) * 100 + rng(i + 80) * 8000; // long plateau ~50-60k
    else if (i <= 210) v = 55000 + (i - 195) * 5000; // jump to ~130k
    else if (i <= 225) v = 130000 - (i - 210) * 3000 + rng(i + 30) * 15000; // pullback ~80-100k
    else if (i <= 250) v = 85000 + (i - 225) * 6000 + rng(i + 10) * 20000; // climb to ~250k
    else if (i <= 270) v = 250000 + (i - 250) * 35000 + rng(i + 70) * 30000; // steep to ~1M
    else if (i <= 290) v = 950000 + (i - 270) * 200000 + rng(i + 20) * 300000; // to ~5-7M
    else if (i <= 305) v = 5000000 + (i - 290) * 350000 + rng(i + 40) * 500000; // peak ~1e7
    else if (i <= 320) v = 10000000 - (i - 305) * 200000 + rng(i + 60) * 400000; // dip
    else v = 7000000 + (i - 320) * 100000 + rng(i + 90) * 500000; // recovery ~8-9M

    pts.push({ x: i, y: Math.max(1, v * n) });
  }
  return pts;
};

const chartData = generateChartData();
const maxX = 350;

function DifficultyChart() {
  const W = 500;
  const H = 340;
  const pad = { top: 30, right: 15, bottom: 35, left: 52 };
  const cw = W - pad.left - pad.right;
  const ch = H - pad.top - pad.bottom;

  // Log scale: 1 (10^0) to 1e7 (10^7)
  const logMin = 0;
  const logMax = 7;

  const toSvgX = (x: number) => pad.left + (x / maxX) * cw;
  const toSvgY = (y: number) => {
    const logY = Math.log10(Math.max(y, 1));
    return pad.top + ch - ((logY - logMin) / (logMax - logMin)) * ch;
  };

  const pathD = chartData
    .map((p, i) => `${i === 0 ? 'M' : 'L'}${toSvgX(p.x).toFixed(1)},${toSvgY(p.y).toFixed(1)}`)
    .join(' ');

  const yLabels: { val: number; label: string }[] = [
    { val: 1, label: '1 H/s' },
    { val: 10, label: '10' },
    { val: 100, label: '100' },
    { val: 1e3, label: '1 KH/s' },
    { val: 1e4, label: '10K' },
    { val: 1e5, label: '100K' },
    { val: 1e6, label: '1 MH/s' },
    { val: 1e7, label: '1 GH/s' },
  ];
  const xLabels: { val: number; label: string }[] = [
    { val: 0, label: 'Jun' },
    { val: 50, label: 'Jul' },
    { val: 100, label: 'Aug' },
    { val: 150, label: 'Sep' },
    { val: 200, label: 'Oct' },
    { val: 250, label: 'Nov' },
    { val: 300, label: 'Dec' },
    { val: 350, label: '' },
  ];

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto">
      {/* Background */}
      <rect x={pad.left} y={pad.top} width={cw} height={ch}
        fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.08)" strokeWidth={0.5} />

      {/* Title */}
      <text x={pad.left + 4} y={pad.top - 10} fill="rgba(254,254,254,0.6)" fontSize="11"
        fontFamily="Geist Mono, monospace">Difficulty (log scale)</text>

      {/* Grid lines + Y labels */}
      {yLabels.map(yl => {
        const y = toSvgY(yl.val);
        return (
          <g key={yl.label}>
            <line x1={pad.left} y1={y} x2={pad.left + cw} y2={y}
              stroke="rgba(249,115,22,0.08)" strokeWidth={0.5} />
            <text x={pad.left - 6} y={y + 3} textAnchor="end" fill="rgba(249,115,22,0.45)"
              fontSize="8" fontFamily="Geist Mono, monospace">
              {yl.label}
            </text>
          </g>
        );
      })}

      {/* Vertical grid + X labels */}
      {xLabels.map(xl => {
        const x = toSvgX(xl.val);
        return (
          <g key={xl.val}>
            <line x1={x} y1={pad.top} x2={x} y2={pad.top + ch}
              stroke="rgba(249,115,22,0.06)" strokeWidth={0.5} />
            {xl.label && (
              <text x={x} y={H - 8} textAnchor="middle" fill="rgba(249,115,22,0.4)"
                fontSize="8" fontFamily="Geist Mono, monospace">{xl.label}</text>
            )}
          </g>
        );
      })}

      {/* X-axis label */}
      <text x={pad.left + cw / 2} y={H - 1} textAnchor="middle" fill="rgba(254,254,254,0.35)"
        fontSize="8" fontFamily="Geist Mono, monospace">2025</text>

      {/* Glow fill under line */}
      <defs>
        <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f97316" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d={`${pathD} L${toSvgX(chartData[chartData.length - 1].x)},${pad.top + ch} L${pad.left},${pad.top + ch} Z`}
        fill="url(#chartGlow)"
      />

      {/* Line */}
      <motion.path
        d={pathD}
        fill="none"
        stroke="#f97316"
        strokeWidth={1.5}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.5, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      />
    </svg>
  );
}


export function CommunitySlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-y-auto">
      {/* Video background */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <video className="w-full h-full object-cover opacity-40" autoPlay muted loop playsInline src={splashVideoUrl} />
        <div className="absolute inset-0 bg-[#060606]/20" />
      </div>

      <div className="relative z-10 h-full flex flex-col px-6 sm:px-10 lg:px-16 py-8 sm:py-10">

        {/* Header */}
        <div className="shrink-0">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-orange-400 text-[10px] sm:text-xs tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            Appendix — Traction
          </motion.p>
          <motion.h1 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[28px] sm:text-[40px] lg:text-[52px] leading-[0.95] tracking-tight mt-1"
            style={{ fontFamily: "'Anton', sans-serif" }}>
            BUILDING THE{' '}
            <span className="text-orange-400">UNICITY COMMUNITY</span>
          </motion.h1>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] w-32 sm:w-48 bg-gradient-to-r from-orange-500 to-transparent origin-left mt-2" />
        </div>

        {/* Main content */}
        <div className="flex-1 grid grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-10 items-center min-h-0">

          {/* Left: stats */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}>

            {/* Big number */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <h2 className="text-[#fefefe] text-[64px] sm:text-[80px] lg:text-[100px] leading-none font-black"
                style={{ fontFamily: "'Anton', sans-serif" }}>
                1GH/S
              </h2>
              <p className="text-orange-400 text-sm sm:text-base mt-1"
                style={{ fontFamily: "'Geist Mono', monospace" }}>
                Peak hash rate
              </p>
            </motion.div>

            {/* Explanatory text */}
            <p className="text-[#fefefe]/70 text-xs sm:text-sm leading-relaxed mt-4 sm:mt-6"
              style={{ fontFamily: "'Geist Mono', monospace" }}>
              Alpha testnet ran from June to December 2025. Zero marketing spend, no social media, word of mouth only — the community grew organically, peaking at <span className="text-orange-400">1GH/s</span>, second only to Monero at 5GH/s among RandomX chains.
            </p>
            <p className="text-[#fefefe]/70 text-xs sm:text-sm leading-relaxed mt-3"
              style={{ fontFamily: "'Geist Mono', monospace" }}>
              <span className="text-orange-400 font-bold">Current Status:</span> 20K DAU on testnet. Agents to be introduced April 2026.
            </p>

            {/* Social icons */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}
              className="flex items-center gap-8 sm:gap-10 mt-6 sm:mt-8">
              {[
                { href: 'https://x.com/unicity_labs', icon: <XIcon className="w-[32px] h-[32px] sm:w-[38px] sm:h-[38px]" />, label: 'X' },
                { href: 'https://discord.gg/BGuqUtwZp3', icon: <DiscordIcon className="w-[32px] h-[32px] sm:w-[38px] sm:h-[38px]" />, label: 'Discord' },
                { href: 'https://github.com/unicity-sphere/sphere', icon: <Github className="w-[32px] h-[32px] sm:w-[38px] sm:h-[38px]" />, label: 'GitHub' },
                { href: 'https://www.linkedin.com/company/unicity-labs/', icon: <Linkedin className="w-[32px] h-[32px] sm:w-[38px] sm:h-[38px]" />, label: 'LinkedIn' },
              ].map(({ href, icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="text-[#fefefe]/70 hover:text-orange-400 transition-colors cursor-pointer"
                  aria-label={label}>
                  {icon}
                </a>
              ))}
            </motion.div>

          </motion.div>

          {/* Right: chart */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col items-center">
            <div className="w-full rounded-xl border border-orange-500/15 bg-white/[0.02] backdrop-blur-sm p-3 sm:p-4 overflow-hidden">
              <DifficultyChart />
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="mt-3 text-[#fefefe]/50 text-xs sm:text-sm"
              style={{ fontFamily: "'Geist Mono', monospace" }}>
              Jun–Dec 2025
            </motion.p>
          </motion.div>

        </div>

        {/* Logo */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
          className="shrink-0 mt-4 flex justify-end">
          <img src={unicityLogoUrl} alt="Unicity" className="h-5 opacity-60" />
        </motion.div>

      </div>
    </div>
  );
}
