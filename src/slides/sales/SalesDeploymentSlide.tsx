import { motion } from 'framer-motion';
import { SlideFrame } from '../../components/SlideFrame';

const fontMono = "'Geist Mono', monospace";
const fontTitle = "'Anton', sans-serif";
const EASE_OUT = [0.16, 1, 0.3, 1] as const;
const STAMP_OVERSHOOT = [0.34, 1.56, 0.64, 1] as const;

interface Model {
  title: string;
  subtitle: string;
  points: string[];
  best: string;
  diagram: 'cloud' | 'onprem' | 'airgap';
}

const models: Model[] = [
  {
    title: 'CLOUD',
    subtitle: 'Managed Service',
    points: [
      'Zero operational overhead',
      'Multi-tenant with cryptographic isolation',
      'Automatic updates, SLA-backed',
      'Fastest path to production',
    ],
    best: 'Teams that want speed without operational burden.',
    diagram: 'cloud',
  },
  {
    title: 'ON-PREMISE',
    subtitle: 'Your infrastructure',
    points: [
      'Full control of data and environment',
      'Your brand, your billing',
      'We provide runtime and L3 support',
      'Private cloud or bare metal',
    ],
    best: 'Enterprises with data residency or compliance requirements.',
    diagram: 'onprem',
  },
  {
    title: 'AIR-GAPPED',
    subtitle: 'Sovereign deployment',
    points: [
      'Data never leaves the perimeter',
      'Zero external network access',
      'Full isolation',
      'Full offline operation',
    ],
    best: 'Defence, government, regulated industries.',
    diagram: 'airgap',
  },
];

export function SalesDeploymentSlide() {
  return (
    <SlideFrame
      title="DEPLOY HOW"
      accent="YOU NEED IT"
      subtitle="Same runtime. Same security guarantees. Same APIs. The deployment topology changes where it runs — not what it does."
    >
        <div className="shrink-0">
          <div className="grid grid-cols-3 gap-5 lg:gap-6 w-full">
            {models.map((m, i) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.15, duration: 0.6, ease: EASE_OUT }}
                className="rounded-xl overflow-hidden flex flex-col"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.55 + i * 0.15, duration: 0.7, ease: EASE_OUT }}
                  className="h-[3px] w-full bg-gradient-to-r from-orange-500 to-orange-500/30 origin-left"
                />
                <div className="p-6 lg:p-7 flex flex-col">
                  <motion.h2
                    initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{
                      delay: 0.7 + i * 0.15,
                      duration: 0.5,
                      ease: STAMP_OVERSHOOT,
                    }}
                    className="text-orange-400 text-[26px] sm:text-[32px] lg:text-[38px] leading-none tracking-tight origin-bottom-left"
                    style={{ fontFamily: fontTitle }}
                  >
                    {m.title}
                  </motion.h2>
                  <p
                    className="text-[#fefefe]/50 text-sm mt-1"
                    style={{ fontFamily: fontMono }}
                  >
                    {m.subtitle}
                  </p>

                  {/* Custom topology mini-diagram */}
                  <div className="mt-4 mb-2">
                    <TopologyDiagram kind={m.diagram} delay={0.95 + i * 0.15} />
                  </div>

                  <div className="mt-4 space-y-2.5">
                    {m.points.map((p) => (
                      <div key={p} className="flex gap-2.5">
                        <span className="text-orange-400/50 text-sm mt-0.5">→</span>
                        <p
                          className="text-[#fefefe]/75 text-sm sm:text-base leading-relaxed"
                          style={{ fontFamily: fontMono }}
                        >
                          {p}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 pt-4" style={{ borderTop: '1px solid rgba(249,115,22,0.1)' }}>
                    <p
                      className="text-[#fefefe]/50 text-xs uppercase tracking-wider mb-1"
                      style={{ fontFamily: fontMono }}
                    >
                      Best for
                    </p>
                    <p
                      className="text-[#fefefe]/85 text-sm font-bold leading-relaxed"
                      style={{ fontFamily: fontMono }}
                    >
                      {m.best}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
    </SlideFrame>
  );
}

/**
 * Topology mini-diagram — 200×100 SVG showing the deployment shape.
 *
 * cloud  — Unicity (left) connects via the open internet to multiple
 *          tenant clouds with animated traffic
 * onprem — Unicity runtime sits inside a perimeter labelled "your infra";
 *          clean inbound/outbound connectors show data sovereignty
 * airgap — A solid perimeter with NO outbound connections; "perimeter
 *          sealed" mark with a slashed exit
 */
function TopologyDiagram({ kind, delay }: { kind: 'cloud' | 'onprem' | 'airgap'; delay: number }) {
  return (
    <div
      className="rounded-md overflow-hidden"
      style={{
        background: 'rgba(0,0,0,0.30)',
        border: '1px solid rgba(249,115,22,0.18)',
      }}
    >
      <svg viewBox="0 0 200 100" className="w-full h-auto" aria-hidden="true">
        {kind === 'cloud' && <CloudTopology delay={delay} />}
        {kind === 'onprem' && <OnPremTopology delay={delay} />}
        {kind === 'airgap' && <AirGapTopology delay={delay} />}
      </svg>
    </div>
  );
}

function CloudTopology({ delay }: { delay: number }) {
  // Unicity hub (left) → 3 tenant clouds (right) with traffic dots
  const hub = { x: 26, y: 50 };
  const tenants = [
    { x: 168, y: 22 },
    { x: 168, y: 50 },
    { x: 168, y: 78 },
  ];
  return (
    <g>
      {/* Unicity hub */}
      <motion.g
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay, ease: STAMP_OVERSHOOT }}
        style={{ transformOrigin: `${hub.x}px ${hub.y}px`, transformBox: 'fill-box' }}
      >
        <rect x={hub.x - 18} y={hub.y - 12} width={36} height={24} rx={4}
          fill="rgba(249,115,22,0.18)" stroke="#fb923c" strokeWidth={1.2} />
        <text x={hub.x} y={hub.y + 4} textAnchor="middle" fontSize="8.5" fontFamily={fontMono}
          fill="#fb923c" fontWeight="bold" letterSpacing="0.06em">UNICITY</text>
      </motion.g>

      {/* Connection lines */}
      {tenants.map((t, i) => (
        <motion.line
          key={i}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 0.5, delay: delay + 0.2 + i * 0.08, ease: EASE_OUT }}
          x1={hub.x + 18} y1={hub.y}
          x2={t.x - 14} y2={t.y}
          stroke="#fb923c" strokeWidth={0.8} strokeDasharray="3 3"
        />
      ))}

      {/* Traffic dots — perpetual */}
      {tenants.map((t, i) => (
        <motion.circle
          key={`d${i}`}
          r={1.5}
          fill="#fb923c"
          initial={{ opacity: 0 }}
          animate={{
            cx: [hub.x + 18, t.x - 14],
            cy: [hub.y, t.y],
            opacity: [0, 0.95, 0],
          }}
          transition={{
            duration: 1.6,
            delay: delay + 0.8 + i * 0.3,
            repeat: Infinity,
            repeatDelay: 1.0,
            ease: 'linear',
          }}
        />
      ))}

      {/* Tenant cloud blobs */}
      {tenants.map((t, i) => (
        <motion.g
          key={i}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: delay + 0.3 + i * 0.08, ease: STAMP_OVERSHOOT }}
          style={{ transformOrigin: `${t.x}px ${t.y}px`, transformBox: 'fill-box' }}
        >
          <ellipse cx={t.x} cy={t.y} rx={14} ry={9}
            fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.35)" strokeWidth={0.8} />
          <text x={t.x} y={t.y + 3} textAnchor="middle" fontSize="7" fontFamily={fontMono}
            fill="rgba(254,254,254,0.75)" letterSpacing="0.05em">TENANT</text>
        </motion.g>
      ))}

      <text x={100} y={96} textAnchor="middle" fontSize="7" fontFamily={fontMono}
        fill="rgba(254,254,254,0.40)" letterSpacing="0.18em">SHARED INFRA · SLA-BACKED</text>
    </g>
  );
}

function OnPremTopology({ delay }: { delay: number }) {
  // Perimeter box "your infra" containing the unicity runtime
  return (
    <g>
      {/* Perimeter */}
      <motion.rect
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.7, delay, ease: EASE_OUT }}
        x={14} y={14} width={172} height={62} rx={6}
        fill="none" stroke="#fb923c" strokeWidth={1.4} strokeDasharray="6 4"
      />
      <motion.text
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 0.4 }}
        x={20} y={11}
        fontSize="7" fontFamily={fontMono}
        fill="#fb923c" letterSpacing="0.22em" fontWeight="bold"
      >
        YOUR PERIMETER
      </motion.text>

      {/* Inside: Unicity runtime + 3 internal nodes */}
      <motion.g
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: delay + 0.3, ease: STAMP_OVERSHOOT }}
        style={{ transformOrigin: '50px 45px', transformBox: 'fill-box' }}
      >
        <rect x={32} y={33} width={36} height={24} rx={4}
          fill="rgba(249,115,22,0.18)" stroke="#fb923c" strokeWidth={1.2} />
        <text x={50} y={49} textAnchor="middle" fontSize="8.5" fontFamily={fontMono}
          fill="#fb923c" fontWeight="bold" letterSpacing="0.06em">UNICITY</text>
      </motion.g>

      {/* Internal data nodes */}
      {[{ x: 110, y: 30 }, { x: 140, y: 45 }, { x: 110, y: 60 }].map((n, i) => (
        <motion.g
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: delay + 0.5 + i * 0.08 }}
        >
          <circle cx={n.x} cy={n.y} r={5}
            fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.45)" strokeWidth={0.8} />
        </motion.g>
      ))}

      {/* Internal flows — circulating traffic */}
      {[{ from: { x: 68, y: 45 }, to: { x: 110, y: 30 } },
        { from: { x: 68, y: 45 }, to: { x: 140, y: 45 } },
        { from: { x: 68, y: 45 }, to: { x: 110, y: 60 } }].map((f, i) => (
        <motion.line
          key={i}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 0.5, delay: delay + 0.55 + i * 0.06, ease: EASE_OUT }}
          x1={f.from.x} y1={f.from.y} x2={f.to.x} y2={f.to.y}
          stroke="#fb923c" strokeWidth={0.7} strokeDasharray="2 2"
        />
      ))}

      <text x={100} y={96} textAnchor="middle" fontSize="7" fontFamily={fontMono}
        fill="rgba(254,254,254,0.40)" letterSpacing="0.18em">DATA RESIDENCY · YOUR CONTROL</text>
    </g>
  );
}

function AirGapTopology({ delay }: { delay: number }) {
  // Solid perimeter — NO outbound connections
  return (
    <g>
      {/* Solid perimeter */}
      <motion.rect
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay, ease: EASE_OUT }}
        x={14} y={14} width={172} height={62} rx={6}
        fill="rgba(249,115,22,0.04)" stroke="#fb923c" strokeWidth={2}
      />
      <motion.text
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 0.4 }}
        x={20} y={11}
        fontSize="7" fontFamily={fontMono}
        fill="#fb923c" letterSpacing="0.22em" fontWeight="bold"
      >
        SEALED PERIMETER
      </motion.text>

      {/* Inside: full Unicity stack */}
      <motion.g
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: delay + 0.3, ease: STAMP_OVERSHOOT }}
        style={{ transformOrigin: '100px 45px', transformBox: 'fill-box' }}
      >
        <rect x={64} y={28} width={72} height={14} rx={3}
          fill="rgba(249,115,22,0.18)" stroke="#fb923c" strokeWidth={1.0} />
        <text x={100} y={38} textAnchor="middle" fontSize="7" fontFamily={fontMono}
          fill="#fb923c" fontWeight="bold" letterSpacing="0.08em">AOS + SIF</text>

        <rect x={64} y={45} width={72} height={14} rx={3}
          fill="rgba(249,115,22,0.10)" stroke="rgba(249,115,22,0.65)" strokeWidth={0.9} />
        <text x={100} y={55} textAnchor="middle" fontSize="7" fontFamily={fontMono}
          fill="#fb923c" fontWeight="bold" letterSpacing="0.08em">UNICITY L1 (LOCAL)</text>
      </motion.g>

      {/* Slashed-exit mark — denoting "no outbound" */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 0.7, duration: 0.4 }}
      >
        <line x1={186} y1={45} x2={196} y2={45} stroke="#f87171" strokeWidth={1.2} />
        <line x1={189} y1={40} x2={194} y2={50} stroke="#f87171" strokeWidth={1.5} strokeLinecap="round" />
      </motion.g>

      <text x={100} y={96} textAnchor="middle" fontSize="7" fontFamily={fontMono}
        fill="rgba(254,254,254,0.40)" letterSpacing="0.18em">ZERO EXTERNAL · SOVEREIGN</text>
    </g>
  );
}
