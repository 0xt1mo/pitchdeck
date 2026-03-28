import { motion } from 'framer-motion';
import splashVideoUrl from '/kling_20260226_VIDEO_Take_Image_1650_0.mp4';
import unicityLogoUrl from '/UnicityLogo.svg';

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
  // Pre-compute all positions
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

      {/* Background grid */}
      <g opacity="0.03">
        {Array.from({ length: 20 }).map((_, i) => (
          <line key={`h${i}`} x1={0} y1={i * 30} x2={600} y2={i * 30} stroke="white" strokeWidth={0.5} />
        ))}
        {Array.from({ length: 20 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 30} y1={0} x2={i * 30} y2={600} stroke="white" strokeWidth={0.5} />
        ))}
      </g>

      {/* Gateway-to-gateway connections */}
      {enterprises.map((_, i) => {
        const next = (i + 1) % enterprises.length;
        const { gx: gx1, gy: gy1 } = positions[i];
        const { gx: gx2, gy: gy2 } = positions[next];
        return (
          <g key={`g2g${i}`}>
            <line x1={gx1} y1={gy1} x2={gx2} y2={gy2}
              stroke="rgba(168,85,247,0.15)" strokeWidth={1} strokeDasharray="3 4" />
            <circle r="2.5" fill="#a855f7" opacity="0">
              <animateMotion dur={`${4 + i * 0.4}s`} repeatCount="indefinite" begin={`${i * 0.8}s`}
                path={`M${gx1},${gy1} L${gx2},${gy2}`} />
              <animate attributeName="opacity" values="0;0.6;0" dur={`${4 + i * 0.4}s`}
                repeatCount="indefinite" begin={`${i * 0.8}s`} />
            </circle>
            <circle r="2.5" fill="#a855f7" opacity="0">
              <animateMotion dur={`${4.5 + i * 0.3}s`} repeatCount="indefinite" begin={`${2 + i * 0.6}s`}
                path={`M${gx2},${gy2} L${gx1},${gy1}`} />
              <animate attributeName="opacity" values="0;0.6;0" dur={`${4.5 + i * 0.3}s`}
                repeatCount="indefinite" begin={`${2 + i * 0.6}s`} />
            </circle>
          </g>
        );
      })}

      {/* Connection lines from gateways to marketplace */}
      {enterprises.map((ent, i) => {
        const { gx, gy } = positions[i];
        return (
          <g key={`conn${i}`}>
            <line x1={gx} y1={gy} x2={CX} y2={CY}
              stroke={`url(#connGrad${i})`} strokeWidth={2} strokeDasharray="6 4" />
            <circle r="4" fill="#f97316" opacity="0.8">
              <animateMotion dur={`${2.5 + i * 0.3}s`} repeatCount="indefinite" begin={`${i * 0.5}s`}
                path={`M${gx},${gy} L${CX},${CY}`} />
              <animate attributeName="opacity" values="0;0.9;0" dur={`${2.5 + i * 0.3}s`}
                repeatCount="indefinite" begin={`${i * 0.5}s`} />
            </circle>
            <circle r="3" fill={ent.color} opacity="0.6">
              <animateMotion dur={`${3 + i * 0.2}s`} repeatCount="indefinite" begin={`${1 + i * 0.4}s`}
                path={`M${CX},${CY} L${gx},${gy}`} />
              <animate attributeName="opacity" values="0;0.7;0" dur={`${3 + i * 0.2}s`}
                repeatCount="indefinite" begin={`${1 + i * 0.4}s`} />
            </circle>
          </g>
        );
      })}

      {/* Central marketplace */}
      <circle cx={CX} cy={CY} r={70} fill="url(#marketGrad)" filter="url(#marketGlow)" />
      <circle cx={CX} cy={CY} r={52} fill="none" stroke="rgba(249,115,22,0.3)" strokeWidth={2} />
      <circle cx={CX} cy={CY} r={48} fill="rgba(249,115,22,0.06)" stroke="rgba(249,115,22,0.5)" strokeWidth={1.5} />
      <text x={CX} y={CY + 6} textAnchor="middle" fill="#f97316" fontSize="16" fontWeight="bold"
        fontFamily="Anton, sans-serif" letterSpacing="0.1em">MARKETPLACE</text>

      {/* Enterprise clusters */}
      {enterprises.map((ent, i) => {
        const { ex, ey, gx, gy, agents } = positions[i];

        return (
          <g key={ent.name}>
            <circle cx={ex} cy={ey} r={65} fill={`${ent.color}08`}
              stroke={`${ent.color}30`} strokeWidth={1} strokeDasharray="4 3" />

            {/* Inter-agent connection lines */}
            {agents.map((a1, ai) => {
              const a2 = agents[(ai + 1) % agents.length];
              return (
                <line key={`ia${ai}`} x1={a1.ax} y1={a1.ay} x2={a2.ax} y2={a2.ay}
                  stroke={`${ent.color}20`} strokeWidth={0.8} />
              );
            })}

            {/* Inter-agent particles */}
            {agents.map((a1, ai) => {
              const a2 = agents[(ai + 1) % agents.length];
              return (
                <circle key={`iap${ai}`} r="2" fill={ent.color} opacity="0">
                  <animateMotion dur={`${2 + ai * 0.5}s`} repeatCount="indefinite" begin={`${0.3 * ai}s`}
                    path={`M${a1.ax},${a1.ay} L${a2.ax},${a2.ay}`} />
                  <animate attributeName="opacity" values="0;0.6;0" dur={`${2 + ai * 0.5}s`}
                    repeatCount="indefinite" begin={`${0.3 * ai}s`} />
                </circle>
              );
            })}

            {/* Agent nodes */}
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

            {/* Line from cluster to gateway */}
            <line x1={ex} y1={ey} x2={gx} y2={gy}
              stroke={`${ent.color}30`} strokeWidth={1.5} />

            {/* Particles: gateway → agents (fan out) */}
            {agents.map((a, ai) => (
              <circle key={`gta${ai}`} r="2.5" fill={ent.color} opacity="0">
                <animateMotion dur={`${2.2 + ai * 0.3}s`} repeatCount="indefinite" begin={`${1.5 + ai * 0.4}s`}
                  path={`M${gx},${gy} L${a.ax},${a.ay}`} />
                <animate attributeName="opacity" values="0;0.7;0" dur={`${2.2 + ai * 0.3}s`}
                  repeatCount="indefinite" begin={`${1.5 + ai * 0.4}s`} />
              </circle>
            ))}

            {/* SIF Gateway shield */}
            <g filter="url(#shieldGlow)">
              <path d={`M${gx},${gy - 18} L${gx + 16},${gy - 10} L${gx + 16},${gy + 6} L${gx},${gy + 18} L${gx - 16},${gy + 6} L${gx - 16},${gy - 10} Z`}
                fill="rgba(168,85,247,0.15)" stroke="rgba(168,85,247,0.6)" strokeWidth={1.5} />
              <path d={`M${gx},${gy - 12} L${gx + 10},${gy - 6} L${gx + 10},${gy + 3} L${gx},${gy + 12} L${gx - 10},${gy + 3} L${gx - 10},${gy - 6} Z`}
                fill="rgba(168,85,247,0.1)" stroke="rgba(168,85,247,0.35)" strokeWidth={1} />
              <path d={`M${gx - 4},${gy} L${gx - 1},${gy + 3} L${gx + 5},${gy - 3}`}
                fill="none" stroke="rgba(168,85,247,0.8)" strokeWidth={1.5} strokeLinecap="round" />
            </g>
            <text x={gx} y={gy + 28} textAnchor="middle" fill="rgba(168,85,247,0.8)" fontSize="9"
              fontFamily="Geist Mono, monospace" letterSpacing="0.05em">
              SIF GATEWAY
            </text>
          </g>
        );
      })}

      {/* Pulsing ring around marketplace */}
      <circle cx={CX} cy={CY} r={55} fill="none" stroke="rgba(249,115,22,0.2)" strokeWidth={1}>
        <animate attributeName="r" values="55;65;55" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.3;0;0.3" dur="3s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

const keyPoints = [
  {
    title: 'Semantic Intercept Fabric',
    color: '#a855f7',
    text: 'Every enterprise deploys a SIF gateway — a policy-enforcing proxy that validates, audits, and filters every agent interaction',
  },
  {
    title: 'Zero Trust by Default',
    color: '#f97316',
    text: 'No agent trusts another. Every message is authenticated, every transaction is verified. The gateway enforces enterprise-specific policy without exposing internal state.',
  },
  {
    title: 'P2P Marketplace',
    color: '#f97316',
    text: 'The central marketplace enables discovery and transaction requests. Agents from different enterprises interact through their respective gateways — never directly.',
  },
  {
    title: 'Enterprise Isolation',
    color: '#3b82f6',
    text: 'Each enterprise maintains its own agent cluster behind its own SIF gateway. Internal agent-to-agent communication never leaves the boundary.',
  },
  {
    title: 'Audit Trail',
    color: '#06b6d4',
    text: 'Every cross-enterprise interaction is logged at the gateway level — who requested what, what policy was applied, and whether it was approved or denied.',
  },
];

export function SecurityNetworkSlide() {
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
            Appendix — Security
          </motion.p>
          <motion.h1 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[28px] sm:text-[40px] lg:text-[52px] leading-[0.95] tracking-tight mt-1"
            style={{ fontFamily: "'Anton', sans-serif" }}>
            ZERO TRUST{' '}
            <span className="text-orange-400">ENTERPRISE NETWORK</span>
          </motion.h1>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] w-32 sm:w-48 bg-gradient-to-r from-orange-500 to-transparent origin-left mt-2" />
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-3 text-[#fefefe]/70 text-xs sm:text-sm leading-relaxed max-w-3xl"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            Every enterprise deploys its own <span className="text-orange-400">Semantic Intercept Fabric</span> as a gateway — validating, auditing and enforcing policy on every agent interaction before it reaches the marketplace.
          </motion.p>
        </div>

        {/* Two-column: diagram left, descriptions right */}
        <div className="flex-1 grid grid-cols-[1.1fr_1fr] gap-4 sm:gap-8 mt-4 min-h-0 items-center">

          {/* Left — SVG */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex items-center justify-center">
            <NetworkDiagram />
          </motion.div>

          {/* Right — Key points */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col gap-4 sm:gap-5">
            {keyPoints.map((point, i) => (
              <motion.div key={point.title}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + i * 0.1, duration: 0.4 }}
                className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                  style={{ background: `${point.color}99` }} />
                <div>
                  <h3 className="text-[#fefefe]/90 text-xs sm:text-sm font-bold"
                    style={{ fontFamily: "'Geist Mono', monospace", color: point.color }}>
                    {point.title}
                  </h3>
                  <p className="text-[#fefefe]/50 text-[10px] sm:text-xs leading-relaxed mt-0.5"
                    style={{ fontFamily: "'Geist Mono', monospace" }}>
                    {point.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>

        {/* Logo */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
          className="shrink-0 mt-3 flex justify-end">
          <img src={unicityLogoUrl} alt="Unicity" className="h-5 opacity-60" />
        </motion.div>

      </div>
    </div>
  );
}
