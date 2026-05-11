import { motion } from 'framer-motion';

const CX = 300;
const CY = 300;

const enterprises = [
  { name: 'BANK A', color: '#3b82f6', angle: -90, dist: 210, agents: 4 },
  { name: 'INSURER', color: '#ec4899', angle: -18, dist: 220, agents: 3 },
  { name: 'LOGISTICS', color: '#a855f7', angle: 54, dist: 210, agents: 3 },
  { name: 'BANK B', color: '#f59e0b', angle: 126, dist: 220, agents: 4 },
  { name: 'TELCO', color: '#06b6d4', angle: 198, dist: 210, agents: 3 },
];

function NetworkDiagram() {
  const positions = enterprises.map((ent) => {
    const rad = (ent.angle * Math.PI) / 180;
    const ex = CX + Math.cos(rad) * ent.dist;
    const ey = CY + Math.sin(rad) * ent.dist;
    const gx = CX + Math.cos(rad) * ent.dist * 0.55;
    const gy = CY + Math.sin(rad) * ent.dist * 0.55;
    const agents = Array.from({ length: ent.agents }).map((_, ai) => {
      const aRad = (ai / ent.agents) * Math.PI * 2 - Math.PI / 2;
      return { ax: ex + Math.cos(aRad) * 28, ay: ey + Math.sin(aRad) * 28 };
    });
    return { ex, ey, gx, gy, agents };
  });

  return (
    <svg viewBox="0 0 600 600" className="w-full h-auto">
      <defs>
        <filter id="marketGlow">
          <feGaussianBlur stdDeviation="12" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <filter id="shieldGlow">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <radialGradient id="marketGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f97316" stopOpacity="0.15" />
          <stop offset="70%" stopColor="#f97316" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
        </radialGradient>
        {enterprises.map((ent, i) => {
          const { gx, gy } = positions[i];
          return (
            <linearGradient key={`cg${i}`} id={`connGrad${i}`}
              x1={gx} y1={gy} x2={CX} y2={CY} gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor={ent.color} stopOpacity="0.5" />
              <stop offset="50%" stopColor="#f97316" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#f97316" stopOpacity="0.15" />
            </linearGradient>
          );
        })}
      </defs>

      <g opacity="0.03">
        {Array.from({ length: 20 }).map((_, i) => (
          <line key={`h${i}`} x1={0} y1={i * 30} x2={600} y2={i * 30} stroke="white" strokeWidth={0.5} />
        ))}
        {Array.from({ length: 20 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 30} y1={0} x2={i * 30} y2={600} stroke="white" strokeWidth={0.5} />
        ))}
      </g>

      {enterprises.map((_, i) => {
        const next = (i + 1) % enterprises.length;
        const { gx: gx1, gy: gy1 } = positions[i];
        const { gx: gx2, gy: gy2 } = positions[next];
        return (
          <g key={`g2g${i}`}>
            <line x1={gx1} y1={gy1} x2={gx2} y2={gy2}
              stroke="rgba(168,85,247,0.15)" strokeWidth={1} strokeDasharray="3 4" />
            <circle r="3" fill="#a855f7" opacity="0">
              <animateMotion dur="1s" repeatCount="indefinite" begin={`${i * 0.3}s`}
                path={`M${gx1},${gy1} L${gx2},${gy2}`} />
              <animate attributeName="opacity" values="0;0.6;0" dur="1s"
                repeatCount="indefinite" begin={`${i * 0.3}s`} />
            </circle>
            <circle r="3" fill="#a855f7" opacity="0">
              <animateMotion dur="1s" repeatCount="indefinite" begin={`${0.5 + i * 0.2}s`}
                path={`M${gx2},${gy2} L${gx1},${gy1}`} />
              <animate attributeName="opacity" values="0;0.6;0" dur="1s"
                repeatCount="indefinite" begin={`${0.5 + i * 0.2}s`} />
            </circle>
          </g>
        );
      })}

      {enterprises.map((ent, i) => {
        const { gx, gy } = positions[i];
        return (
          <g key={`conn${i}`}>
            <line x1={gx} y1={gy} x2={CX} y2={CY}
              stroke={`url(#connGrad${i})`} strokeWidth={2} strokeDasharray="6 4" />
            <circle r="3" fill="#f97316" opacity="0.8">
              <animateMotion dur="1s" repeatCount="indefinite" begin={`${i * 0.15}s`}
                path={`M${gx},${gy} L${CX},${CY}`} />
              <animate attributeName="opacity" values="0;0.9;0" dur="1s"
                repeatCount="indefinite" begin={`${i * 0.15}s`} />
            </circle>
            <circle r="3" fill={ent.color} opacity="0.6">
              <animateMotion dur="1s" repeatCount="indefinite" begin={`${0.3 + i * 0.12}s`}
                path={`M${CX},${CY} L${gx},${gy}`} />
              <animate attributeName="opacity" values="0;0.7;0" dur="1s"
                repeatCount="indefinite" begin={`${0.3 + i * 0.12}s`} />
            </circle>
          </g>
        );
      })}

      <circle cx={CX} cy={CY} r={70} fill="url(#marketGrad)" filter="url(#marketGlow)" />
      <circle cx={CX} cy={CY} r={52} fill="none" stroke="rgba(249,115,22,0.3)" strokeWidth={2} />
      <circle cx={CX} cy={CY} r={48} fill="rgba(249,115,22,0.06)" stroke="rgba(249,115,22,0.5)" strokeWidth={1.5} />
      <text x={CX} y={CY + 6} textAnchor="middle" fill="#f97316" fontSize="16" fontWeight="bold"
        fontFamily="Anton, sans-serif" letterSpacing="0.1em">MARKETPLACE</text>

      {enterprises.map((ent, i) => {
        const { ex, ey, gx, gy, agents } = positions[i];

        return (
          <g key={ent.name}>
            <circle cx={ex} cy={ey} r={65} fill={`${ent.color}08`}
              stroke={`${ent.color}30`} strokeWidth={1} strokeDasharray="4 3" />

            {agents.map((a1, ai) => {
              const a2 = agents[(ai + 1) % agents.length];
              return (
                <line key={`ia${ai}`} x1={a1.ax} y1={a1.ay} x2={a2.ax} y2={a2.ay}
                  stroke={`${ent.color}20`} strokeWidth={0.8} />
              );
            })}

            {agents.map((a1, ai) => {
              const a2 = agents[(ai + 1) % agents.length];
              return (
                <circle key={`iap${ai}`} r="3" fill={ent.color} opacity="0">
                  <animateMotion dur="1s" repeatCount="indefinite" begin={`${0.1 * ai}s`}
                    path={`M${a1.ax},${a1.ay} L${a2.ax},${a2.ay}`} />
                  <animate attributeName="opacity" values="0;0.6;0" dur="1s"
                    repeatCount="indefinite" begin={`${0.3 * ai}s`} />
                </circle>
              );
            })}

            {agents.map((a, ai) => (
              <g key={ai}>
                <circle cx={a.ax} cy={a.ay} r={10} fill="rgba(6,6,6,0.7)"
                  stroke={`${ent.color}50`} strokeWidth={1} />
                <circle cx={a.ax} cy={a.ay} r={4} fill={ent.color} opacity={0.7} />
              </g>
            ))}

            <text x={ex} y={ey + 55} textAnchor="middle" fill={ent.color} fontSize="16"
              fontWeight="bold" fontFamily="Anton, sans-serif" letterSpacing="0.08em">
              {ent.name}
            </text>

            <line x1={ex} y1={ey} x2={gx} y2={gy}
              stroke={`${ent.color}30`} strokeWidth={1.5} />

            {agents.map((a, ai) => (
              <circle key={`gta${ai}`} r="3" fill={ent.color} opacity="0">
                <animateMotion dur="1s" repeatCount="indefinite" begin={`${0.4 + ai * 0.12}s`}
                  path={`M${gx},${gy} L${a.ax},${a.ay}`} />
                <animate attributeName="opacity" values="0;0.7;0" dur="1s"
                  repeatCount="indefinite" begin={`${1.5 + ai * 0.4}s`} />
              </circle>
            ))}

            <g filter="url(#shieldGlow)">
              <path d={`M${gx},${gy - 18} L${gx + 16},${gy - 10} L${gx + 16},${gy + 6} L${gx},${gy + 18} L${gx - 16},${gy + 6} L${gx - 16},${gy - 10} Z`}
                fill="rgba(168,85,247,0.15)" stroke="rgba(168,85,247,0.6)" strokeWidth={1.5} />
              <path d={`M${gx},${gy - 12} L${gx + 10},${gy - 6} L${gx + 10},${gy + 3} L${gx},${gy + 12} L${gx - 10},${gy + 3} L${gx - 10},${gy - 6} Z`}
                fill="rgba(168,85,247,0.1)" stroke="rgba(168,85,247,0.35)" strokeWidth={1} />
              <path d={`M${gx - 4},${gy} L${gx - 1},${gy + 3} L${gx + 5},${gy - 3}`}
                fill="none" stroke="rgba(168,85,247,0.8)" strokeWidth={1.5} strokeLinecap="round" />
            </g>
            <text x={gx} y={gy + 28} textAnchor="middle" fill="rgba(168,85,247,0.9)" fontSize="10"
              fontFamily="Geist Mono, monospace" letterSpacing="0.05em">
              SIF GATEWAY
            </text>
          </g>
        );
      })}

      <circle cx={CX} cy={CY} r={55} fill="none" stroke="rgba(249,115,22,0.2)" strokeWidth={1}>
        <animate attributeName="r" values="55;65;55" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.3;0;0.3" dur="3s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

const features = [
  {
    title: 'AGENT DISCOVERY',
    text: 'Agents find each other. Machine-readable identity, capabilities, and reputation. No directory, no registry — permissionless and decentralised.',
  },
  {
    title: 'P2P MESSAGING',
    text: 'Direct agent-to-agent communication via NOSTR relays. Private, encrypted, no intermediary. Agents negotiate, collaborate, and coordinate autonomously.',
  },
  {
    title: 'INTENT-BASED TRADING',
    text: 'A marketplace where agents express intent and settle trades. Permissionless, private, and fast enough for agent-speed settlement.',
  },
  {
    title: 'PROTOCOL AGNOSTIC',
    text: 'MCP, A2A, X402. Any chain. Extreme throughput.',
  },
];

export function SalesAgentSphereSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#0a0a0f] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-10 lg:px-20 py-10 lg:py-14 justify-center gap-6">

        <div className="shrink-0">
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[32px] sm:text-[44px] lg:text-[56px] leading-[1.05] tracking-tight"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            AGENTSPHERE: <span className="text-orange-400">THE AGENT ECONOMY</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-3 text-[#fefefe]/85 text-base lg:text-lg max-w-4xl leading-relaxed"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Agents discover each other, communicate, trade, and build trust — all on decentralised infrastructure.
          </motion.p>
        </div>

        <div className="grid grid-cols-[1fr_1.05fr] gap-8 lg:gap-12 shrink-0 items-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex items-center justify-center"
          >
            <NetworkDiagram />
          </motion.div>

          <div className="grid grid-cols-1 gap-3">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="rounded-lg p-4 lg:p-5"
                style={{ background: 'rgba(249,115,22,0.06)', border: '1px solid rgba(249,115,22,0.30)' }}
              >
                <h3
                  className="text-orange-400 text-[20px] lg:text-[24px] leading-none tracking-tight"
                  style={{ fontFamily: "'Anton', sans-serif" }}
                >
                  {f.title}
                </h3>
                <p
                  className="text-[#fefefe]/85 text-sm lg:text-base leading-relaxed mt-2"
                  style={{ fontFamily: "'Geist Mono', monospace" }}
                >
                  {f.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
