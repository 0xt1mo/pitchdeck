import { motion } from 'framer-motion';
import { useMemo } from 'react';
import splashVideoUrl from '/kling_20260226_VIDEO_Take_Image_1650_0.mp4';
import unicityLogoUrl from '/UnicityLogo.svg';

// Enterprise clusters with their agents
const enterprises = [
  { name: 'Bank A', color: '#3b82f6', cx: 0.19, cy: 0.22, r: 0.125 },
  { name: 'Logistics Co', color: '#a855f7', cx: 0.81, cy: 0.20, r: 0.12 },
  { name: 'Insurer', color: '#ec4899', cx: 0.17, cy: 0.78, r: 0.12 },
  { name: 'Bank B', color: '#f59e0b', cx: 0.81, cy: 0.78, r: 0.125 },
  { name: 'Private Marketplace', color: '#10b981', cx: 0.5, cy: 0.5, r: 0.115 },
];

const agents = enterprises.flatMap((ent, ei) => {
  const count = ei === 4 ? 2 : 3; // fewer agents in center cluster
  return Array.from({ length: count }, (_, ai) => {
    const angle = (ai / count) * Math.PI * 2 - Math.PI / 2;
    const spread = ent.r * 0.5;
    return {
      id: ei * 3 + ai,
      x: ent.cx + Math.cos(angle) * spread,
      y: ent.cy + Math.sin(angle) * spread,
      enterprise: ei,
      label: `Agent ${ai + 1}`,
      delay: 0.3 + ei * 0.12 + ai * 0.05,
    };
  });
});

// Connections: intra-enterprise (all connected) + cross-enterprise links
function generateConnections() {
  const conns: { from: number; to: number; crossEnterprise: boolean; delay: number }[] = [];
  // Intra-enterprise
  for (const ent of enterprises) {
    const members = agents.filter(a => a.enterprise === enterprises.indexOf(ent));
    for (let i = 0; i < members.length; i++) {
      for (let j = i + 1; j < members.length; j++) {
        conns.push({ from: members[i].id, to: members[j].id, crossEnterprise: false, delay: 0.5 + conns.length * 0.02 });
      }
    }
  }
  // Cross-enterprise links
  const crossLinks = [
    [0, 4], [1, 3], [2, 6], [5, 9], [7, 12], [10, 8], [11, 3], [6, 13],
  ];
  for (const [a, b] of crossLinks) {
    if (a < agents.length && b < agents.length) {
      conns.push({ from: a, to: b, crossEnterprise: true, delay: 0.8 + conns.length * 0.02 });
    }
  }
  return conns;
}

export function DemoSlide() {
  const connections = useMemo(generateConnections, []);

  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-y-auto">
      {/* Video background */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <video className="w-full h-full object-cover opacity-40" autoPlay muted loop playsInline src={splashVideoUrl} />
        <div className="absolute inset-0 bg-[#060606]/30" />
      </div>

      <div className="relative z-10 h-full flex flex-col px-6 sm:px-10 lg:px-16 py-6 sm:py-8">

        {/* Header */}
        <div className="shrink-0">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-orange-400 text-[10px] sm:text-xs tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            Product
          </motion.p>
          <motion.h1 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[32px] sm:text-[44px] lg:text-[56px] leading-[0.95] tracking-tight mt-1"
            style={{ fontFamily: "'Anton', sans-serif" }}>
            PRODUCT{' '}
            <span className="text-orange-400">ENTERPRISE</span>
          </motion.h1>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] w-32 sm:w-48 bg-gradient-to-r from-orange-500 to-transparent origin-left mt-2" />
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-[#fefefe]/70 text-xs sm:text-sm mt-3"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            Initial deployments for inter-enterprise <span className="text-orange-400">A2A discovery</span>, <span className="text-orange-400">execution</span> and <span className="text-orange-400">settlement</span>
          </motion.p>
        </div>

        {/* Two-column layout */}
        <div className="flex-1 mt-4 grid grid-cols-2 gap-6 sm:gap-10 min-h-0">

          {/* Left — Agent network visualization */}
          <div className="relative flex flex-col items-center justify-center">
            <svg className="w-full h-full" viewBox="0 0 400 400">
              {/* Enterprise cluster backgrounds */}
              {enterprises.map((ent, i) => (
                <motion.g key={`ent-${i}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}>
                  {/* Cluster boundary */}
                  <circle cx={ent.cx * 400} cy={ent.cy * 400} r={ent.r * 400}
                    fill={`${ent.color}15`}
                    stroke={`${ent.color}50`}
                    strokeWidth={1.5}
                    strokeDasharray="6 4" />
                  {/* Enterprise label — positioned above circle */}
                  <text x={ent.cx * 400} y={ent.cy * 400 - ent.r * 400 - 8}
                    textAnchor="middle"
                    fill={ent.color}
                    fontSize="13"
                    fontWeight="bold"
                    fontFamily="Geist Mono, monospace"
                    style={{ filter: 'drop-shadow(0 0 4px rgba(6,6,6,0.9))' }}>
                    {ent.name}
                  </text>
                </motion.g>
              ))}

              {/* Connection lines */}
              {connections.map((c, i) => {
                const a = agents[c.from];
                const b = agents[c.to];
                return (
                  <motion.line
                    key={`conn-${i}`}
                    x1={a.x * 400} y1={a.y * 400}
                    x2={b.x * 400} y2={b.y * 400}
                    stroke={c.crossEnterprise ? 'rgba(249,115,22,0.25)' : `${enterprises[agents[c.from].enterprise].color}20`}
                    strokeWidth={c.crossEnterprise ? 1.5 : 1}
                    strokeDasharray={c.crossEnterprise ? '3 2' : 'none'}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: c.delay, duration: 0.4 }}
                  />
                );
              })}

              {/* Animated data pulses on cross-enterprise connections */}
              {connections.filter(c => c.crossEnterprise).map((c, i) => {
                const a = agents[c.from];
                const b = agents[c.to];
                return (
                  <motion.circle
                    key={`pulse-${i}`}
                    r={4}
                    fill="#f97316"
                    initial={{ opacity: 0 }}
                    animate={{
                      cx: [a.x * 400, b.x * 400],
                      cy: [a.y * 400, b.y * 400],
                      opacity: [0, 0.9, 0],
                    }}
                    transition={{
                      duration: 1.8,
                      delay: 1.5 + i * 0.6,
                      repeat: Infinity,
                      repeatDelay: 2.5,
                    }}
                  />
                );
              })}

              {/* Agent nodes */}
              {agents.map((agent) => {
                const entColor = enterprises[agent.enterprise].color;
                return (
                  <motion.g key={agent.id}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: agent.delay, duration: 0.3 }}>
                    {/* Glow */}
                    <circle cx={agent.x * 400} cy={agent.y * 400} r={16}
                      fill={`${entColor}10`} />
                    {/* Ring */}
                    <circle cx={agent.x * 400} cy={agent.y * 400} r={10}
                      fill="rgba(6,6,6,0.8)"
                      stroke={`${entColor}70`} strokeWidth={1.5} />
                    {/* Inner dot */}
                    <circle cx={agent.x * 400} cy={agent.y * 400} r={4}
                      fill={entColor} opacity={0.9} />
                  </motion.g>
                );
              })}
            </svg>
          </div>

          {/* Right — demo video + text below */}
          <div className="flex flex-col justify-center gap-4 min-h-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="rounded-xl overflow-hidden border border-orange-500/20 shadow-[0_0_60px_rgba(249,115,22,0.08)]"
            >
              <video
                className="w-full"
                controls
                autoPlay
                muted
                loop
                playsInline
                src="/demo.webm"
              />
            </motion.div>

            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-[#fefefe]/60 text-xs sm:text-sm mt-1"
              style={{ fontFamily: "'Geist Mono', monospace" }}>
              Demo of USDT tokens moving at <span className="text-orange-400">3M TPS</span>. Agent to Agent. Across the Internet.
            </motion.p>
          </div>

        </div>

        {/* Logo */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
          className="shrink-0 mt-3 flex justify-end">
          <img src={unicityLogoUrl} alt="Unicity" className="h-5 opacity-60" />
        </motion.div>

      </div>
    </div>
  );
}
