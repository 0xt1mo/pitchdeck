import { motion } from 'framer-motion';

const mono = "'Geist Mono', monospace";
const display = "'Anton', sans-serif";

/**
 * Single-SVG diagram. viewBox 1400 × 760.
 * Left enclosure (solid): inside-the-firewall stack — Frameworks/Internal LLM
 * → Semantic Intercept Fabric → Agent Registry → AOS hosting (with sandboxes).
 * Right enclosure (dashed): External LLM and External agent.
 * Orange bracket routing from the SIF gate splits up/down to the two external boxes.
 */
function Diagram() {
  // Enclosures
  const lE = { x: 10, y: 30, w: 765, h: 690 };
  const rE = { x: 825, y: 30, w: 565, h: 690 };

  // Left column boxes (inside lE)
  const leftPad = 50;
  const colW = lE.w - leftPad * 2 + 30;
  const lx = lE.x + leftPad;
  const entryW = (colW - 30) / 2;

  // Right column boxes (inside rE)
  const rx = rE.x + 50;
  const rW = rE.w - 100;

  return (
    <svg viewBox="0 0 1400 760" className="w-full h-full"
      preserveAspectRatio="xMidYMid meet">

      {/* Zone labels (sit just above the enclosures) */}
      <text x={lE.x + 14} y={20} fill="rgba(254,254,254,0.78)"
        fontSize="16" letterSpacing="2.5" fontWeight="bold"
        fontFamily={mono}>YOUR ENVIRONMENT · INSIDE THE FIREWALL</text>
      <text x={rE.x + 14} y={20} fill="rgba(254,254,254,0.5)"
        fontSize="16" letterSpacing="2.5" fontWeight="bold"
        fontFamily={mono}>EXTERNAL WORLD</text>

      {/* Enclosures */}
      <rect x={lE.x} y={lE.y} width={lE.w} height={lE.h} rx={18}
        fill="rgba(255,255,255,0.012)" stroke="rgba(255,255,255,0.18)" strokeWidth={1.5} />
      <rect x={rE.x} y={rE.y} width={rE.w} height={rE.h} rx={18}
        fill="rgba(255,255,255,0.012)" stroke="rgba(255,255,255,0.18)" strokeWidth={1.5}
        strokeDasharray="8 6" />

      {/* ────── ORANGE BRACKET ROUTING (drawn before boxes so boxes cover joints) ────── */}
      {(() => {
        const gateRightX = lx + colW;          // right edge of SIF gate
        const sifMidY = 240;
        const llmMidY = 122;                   // matches external LLM center
        const agentMidY = 595;                 // matches external agent center
        const busX = gateRightX + 50;          // vertical bus, inside lE right area
        const targetLeftX = rE.x - 2;          // where horizontal hits right enclosure
        const A = 12, W = 7;                   // arrowhead geometry

        return (
          <g stroke="#FF6A00" fill="#FF6A00" strokeWidth={2}>
            {/* Tap from SIF right edge → bus */}
            <line x1={gateRightX} y1={sifMidY} x2={busX} y2={sifMidY} />
            {/* Vertical bus from LLM Y → Agent Y */}
            <line x1={busX} y1={llmMidY} x2={busX} y2={agentMidY} />
            {/* Top branch → External LLM */}
            <line x1={busX} y1={llmMidY} x2={targetLeftX - A} y2={llmMidY} />
            <polygon points={`${targetLeftX - A},${llmMidY - W} ${targetLeftX},${llmMidY} ${targetLeftX - A},${llmMidY + W}`} />
            {/* Bottom branch → External agent */}
            <line x1={busX} y1={agentMidY} x2={targetLeftX - A} y2={agentMidY} />
            <polygon points={`${targetLeftX - A},${agentMidY - W} ${targetLeftX},${agentMidY} ${targetLeftX - A},${agentMidY + W}`} />
          </g>
        );
      })()}

      {/* Grey down-arrows between left-column layers */}
      {(() => {
        const arrows: { x: number; y1: number; y2: number }[] = [
          { x: lx + entryW / 2, y1: 137, y2: 168 },
          { x: lx + entryW + 30 + entryW / 2, y1: 137, y2: 168 },
          { x: lx + colW / 2, y1: 285, y2: 316 },
          { x: lx + colW / 2, y1: 405, y2: 438 },
        ];
        return arrows.map((a, i) => (
          <g key={i}>
            <line x1={a.x} y1={a.y1} x2={a.x} y2={a.y2}
              stroke="rgba(254,254,254,0.4)" strokeWidth={1.5} />
            <polygon
              points={`${a.x - 5},${a.y2 - 4} ${a.x + 5},${a.y2 - 4} ${a.x},${a.y2 + 4}`}
              fill="rgba(254,254,254,0.55)" />
          </g>
        ));
      })()}

      {/* ────── LEFT COLUMN BOXES ────── */}

      {/* Entry: Frameworks */}
      <Box x={lx} y={70} w={entryW} h={68}
        stroke="rgba(255,255,255,0.18)" fill="#141414"
        title="Frameworks" align="center" />
      {/* Entry: Internal LLM */}
      <Box x={lx + entryW + 30} y={70} w={entryW} h={68}
        stroke="rgba(255,255,255,0.18)" fill="#141414"
        title="Internal LLM" align="center" />

      {/* Semantic Intercept Fabric (gate) */}
      <GateBox x={lx} y={200} w={colW} h={82}
        title="Semantic Intercept Fabric"
        subtitle="One gate · single egress · allow / block / flag" />

      {/* Agent Registry (gate) */}
      <GateBox x={lx} y={320} w={colW} h={82}
        title="Agent Registry"
        subtitle="Cryptographic identity · scoped, revocable" />

      {/* AOS hosting environment (gate w/ sandboxes) */}
      <rect x={lx} y={440} width={colW} height={250} rx={11}
        fill="rgba(255,106,0,0.08)" stroke="rgba(255,106,0,0.70)" strokeWidth={1.5} />
      <text x={lx + 22} y={470} fill="#FF6A00"
        fontSize="22" fontWeight="bold" fontFamily={display}
        letterSpacing="0.5">AOS · HOSTING ENVIRONMENT</text>
      <text x={lx + 22} y={495} fill="rgba(213,154,111,0.95)"
        fontSize="14" fontFamily={mono}>Enforcement kernel · WASM sandbox · budgets</text>
      {[0, 1, 2].map((i) => {
        const inset = 22;
        const gap = 18;
        const sw = (colW - inset * 2 - gap * 2) / 3;
        const sx = lx + inset + i * (sw + gap);
        const sy = 530;
        const sh = 130;
        return (
          <g key={i}>
            <rect x={sx} y={sy} width={sw} height={sh} rx={9}
              fill="rgba(255,106,0,0.05)" stroke="rgba(255,106,0,0.35)" strokeWidth={1} />
            <text x={sx + sw / 2} y={sy + sh / 2 + 7} textAnchor="middle"
              fill="rgba(224,184,147,0.95)" fontSize="18" fontWeight="bold"
              fontFamily={mono}>Agent Sandbox</text>
          </g>
        );
      })}

      {/* ────── RIGHT COLUMN BOXES ────── */}

      <Box x={rx} y={86} w={rW} h={72}
        stroke="rgba(255,255,255,0.20)" fill="#141414"
        title="External LLM"
        subtitle="Frontier models · via the gate" />

      <Box x={rx} y={559} w={rW} h={72}
        stroke="rgba(255,255,255,0.20)" fill="#141414"
        title="External agent"
        subtitle="Third-party · across boundary" />

      {/* A2A label sitting between the two external boxes */}
      <g>
        <rect x={rx} y={335} width={rW} height={52} rx={6}
          fill="#0a0a0a" stroke="rgba(255,255,255,0.10)" strokeWidth={1} />
        <text x={rx + rW / 2} y={358} textAnchor="middle"
          fill="rgba(254,254,254,0.85)" fontSize="16" fontWeight="bold"
          fontFamily={mono}>A2A networking</text>
        <text x={rx + rW / 2} y={378} textAnchor="middle"
          fill="rgba(254,254,254,0.85)" fontSize="16" fontWeight="bold"
          fontFamily={mono}>+ payments</text>
      </g>
    </svg>
  );
}

function Box({
  x, y, w, h, stroke, fill, title, titleColor, subtitle, align = 'left',
}: {
  x: number; y: number; w: number; h: number;
  stroke: string;
  fill?: string;
  title: string;
  titleColor?: string;
  subtitle?: string;
  align?: 'left' | 'center';
}) {
  const tx = align === 'center' ? x + w / 2 : x + 22;
  const anchor = align === 'center' ? 'middle' : 'start';
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={11}
        fill={fill ?? 'rgba(255,255,255,0.02)'} stroke={stroke} strokeWidth={1} />
      <text x={tx} y={subtitle ? y + 30 : y + h / 2 + 7} textAnchor={anchor}
        fill={titleColor ?? '#fefefe'} fontSize="20" fontWeight="bold"
        fontFamily="'Geist Mono', monospace">{title}</text>
      {subtitle && (
        <text x={tx} y={y + 54} textAnchor={anchor}
          fill="rgba(174,174,174,0.95)" fontSize="14"
          fontFamily="'Geist Mono', monospace">{subtitle}</text>
      )}
    </g>
  );
}

function GateBox({
  x, y, w, h, title, subtitle,
}: {
  x: number; y: number; w: number; h: number;
  title: string;
  subtitle?: string;
}) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={11}
        fill="rgba(255,106,0,0.08)" stroke="rgba(255,106,0,0.70)" strokeWidth={1.5} />
      <text x={x + 22} y={y + 32} fill="#FF6A00"
        fontSize="22" fontWeight="bold"
        fontFamily="'Anton', sans-serif"
        letterSpacing="0.5">{title.toUpperCase()}</text>
      {subtitle && (
        <text x={x + 22} y={y + 58} fill="rgba(213,154,111,0.95)" fontSize="14"
          fontFamily="'Geist Mono', monospace">{subtitle}</text>
      )}
    </g>
  );
}

export function DeploymentModelSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">

      {/* Subtle dotted background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '34px 34px',
        }}
      />

      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-8 lg:py-10 gap-4 lg:gap-5">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-400 text-[10px] sm:text-xs lg:text-sm tracking-[0.4em] uppercase font-bold"
            style={{ fontFamily: mono }}
          >
            Deployment
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[28px] sm:text-[40px] lg:text-[56px] xl:text-[64px] leading-[0.95] tracking-tight uppercase mt-2"
            style={{ fontFamily: display }}
          >
            DEPLOYMENT <span className="text-orange-400">MODEL.</span>
          </motion.h1>
        </div>

        {/* Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex-1 min-h-0 flex items-center justify-center"
        >
          <Diagram />
        </motion.div>

        {/* Footer */}
        <div className="shrink-0 flex items-end justify-between">
          <p
            className="text-[#fefefe]/35 text-[10px] sm:text-xs tracking-[0.3em] uppercase"
            style={{ fontFamily: mono }}
          >
            Unicity / Deployment
          </p>
          <p
            className="text-[#fefefe]/25 text-xs sm:text-sm lg:text-base tracking-[0.04em] font-bold"
            style={{ fontFamily: display }}
          >
            UNICITY
          </p>
        </div>
      </div>
    </div>
  );
}
