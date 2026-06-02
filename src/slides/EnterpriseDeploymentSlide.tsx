import { motion } from 'framer-motion';

const mono = "'Geist Mono', monospace";
const display = "'Anton', sans-serif";

/**
 * Single SVG diagram. viewBox 1600 × 740.
 * Layout:
 *   - Dashed orange container on the left holding the inside-firewall stack
 *   - Red vertical firewall in the middle
 *   - Two external boxes on the right, vertically aligned to their data partners
 *   - Orange L-shaped "compute" route (External LLM ↔ Semantic Intercept Fabric)
 *   - Straight "A2A comms + payments" arrow (AOS → External Enterprise)
 */
function Diagram() {
  // Dashed container
  const cX = 20, cY = 30, cW = 880, cH = 920;
  const padX = 24, padY = 28;
  const innerX = cX + padX;
  const innerW = cW - padX * 2;

  // Firewall
  const fwX = 960;

  // Right column — pushed further right, narrower
  const rX = 1130;
  const rW = 400;

  // ── Left column layer Y anchors ──
  const yEntry = cY + padY;
  const hEntry = 100;
  const arrow = 28;
  const ySIF = yEntry + hEntry + arrow;
  const hSIF = 100;
  const yReg = ySIF + hSIF + arrow;
  const hReg = 100;
  const yAOS = yReg + hReg + arrow;
  const hAOS = 240;
  const yProof = yAOS + hAOS + arrow;
  const hProof = 100;

  // ── Right column box Y anchors ──
  // External LLM sits HIGHER than SIF so the "compute" L-shape has a vertical leg
  const yLLM = yEntry;
  const hLLM = 100;
  const yExt = yAOS + 50;                    // sits inside the AOS-row band
  const hExt = 100;

  // Common left-column box geometry
  const lX = innerX;
  const lW = innerW;
  const halfBoxW = (lW - 24) / 2;

  // Vertical center of SIF (target of incoming compute arrow)
  const sifMidY = ySIF + hSIF / 2;
  const llmMidY = yLLM + hLLM / 2;
  const aosMidY = yAOS + 90;
  const extMidY = yExt + hExt / 2;

  return (
    <svg viewBox="0 0 1600 980" className="w-full h-full"
      preserveAspectRatio="xMidYMid meet">
      <defs>
        <marker id="arr-grey" viewBox="0 0 10 10" refX="9" refY="5"
          markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="rgba(254,254,254,0.55)" />
        </marker>
        <marker id="arr-orange-r" viewBox="0 0 10 10" refX="9" refY="5"
          markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="#f97316" />
        </marker>
        <marker id="arr-orange-l" viewBox="0 0 10 10" refX="9" refY="5"
          markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0,0 L10,5 L0,10 z" fill="#f97316" />
        </marker>
      </defs>

      {/* ── Column labels ── */}
      <text x={cX} y={20} fill="rgba(254,254,254,0.7)"
        fontSize="18" letterSpacing="5" fontWeight="bold"
        fontFamily={mono}>ENTERPRISE · INSIDE THE FIREWALL</text>
      <text x={rX} y={20} fill="rgba(254,254,254,0.7)"
        fontSize="18" letterSpacing="5" fontWeight="bold"
        fontFamily={mono}>EXTERNAL</text>

      {/* ── Dashed container around inside-firewall stack ── */}
      <rect x={cX} y={cY} width={cW} height={cH} rx={14}
        fill="none" stroke="rgba(249,115,22,0.40)" strokeWidth={1.5}
        strokeDasharray="6 5" />

      {/* ── Firewall vertical line ── */}
      <line x1={fwX} y1={20} x2={fwX} y2={950}
        stroke="#ff3030" strokeWidth={2} />
      <text x={fwX} y={972} textAnchor="middle"
        fill="#ff3030" fontSize="15" letterSpacing="3"
        fontFamily={mono} fontWeight="bold">FIREWALL</text>

      {/* ───── LEFT COLUMN ───── */}

      {/* Entry row */}
      <Box x={lX} y={yEntry} w={halfBoxW} h={hEntry}
        stroke="rgba(255,255,255,0.30)"
        title="Claude Cowork · OpenClaw" />
      <Box x={lX + halfBoxW + 24} y={yEntry} w={halfBoxW} h={hEntry}
        stroke="rgba(100,180,140,0.55)" titleColor="#64b48c"
        title="Custom agents · internal LLM"
        twoLine />

      {/* ↓ arrow */}
      <DownArrow xMid={lX + halfBoxW + 12} yFrom={yEntry + hEntry + 4} yTo={ySIF - 6} />

      {/* Semantic Intercept Fabric */}
      <Box x={lX} y={ySIF} w={lW} h={hSIF}
        stroke="rgba(255,80,80,0.55)" titleColor="#ff5050"
        title="Semantic Intercept Fabric"
        subtitle="Single egress · DLP · allow / block / flag" />

      {/* ↓ arrow */}
      <DownArrow xMid={lX + lW / 2} yFrom={ySIF + hSIF + 4} yTo={yReg - 6} />

      {/* Agent Registry */}
      <Box x={lX} y={yReg} w={lW} h={hReg}
        stroke="rgba(140,120,200,0.55)" titleColor="#8c78c8"
        title="Agent Registry"
        subtitle="Cryptographic identity · scoped, revocable" />

      {/* ↓ arrow */}
      <DownArrow xMid={lX + lW / 2} yFrom={yReg + hReg + 4} yTo={yAOS - 6} />

      {/* AOS Hosting Environment */}
      <rect x={lX} y={yAOS} width={lW} height={hAOS} rx={10}
        fill="rgba(59,130,246,0.04)" stroke="rgba(59,130,246,0.55)" strokeWidth={1.5} />
      <text x={lX + 22} y={yAOS + 38} fill="#3b82f6"
        fontSize="28" fontWeight="bold" fontFamily={mono}>AOS — Hosting Environment</text>
      <text x={lX + 22} y={yAOS + 64} fill="rgba(254,254,254,0.6)"
        fontSize="17" fontFamily={mono}>Enforcement kernel · WASM sandbox · budgets</text>
      {/* Sandbox capsules */}
      {[0, 1, 2].map((i) => {
        const inset = 22, gap = 18;
        const sw = (lW - inset * 2 - gap * 2) / 3;
        const sx = lX + inset + i * (sw + gap);
        const sy = yAOS + 92;
        const sh = 96;
        return (
          <g key={i}>
            <rect x={sx} y={sy} width={sw} height={sh} rx={8}
              fill="rgba(59,130,246,0.06)" stroke="rgba(100,180,140,0.45)" strokeWidth={1} />
            <text x={sx + sw / 2} y={sy + 42} textAnchor="middle"
              fill="#fefefe" fontSize="24" fontWeight="bold" fontFamily={mono}>Sandbox</text>
            <text x={sx + sw / 2} y={sy + 72} textAnchor="middle"
              fill="rgba(254,254,254,0.6)" fontSize="17" fontFamily={mono}>Agent capsule</text>
          </g>
        );
      })}

      {/* ↓ arrow */}
      <DownArrow xMid={lX + lW / 2} yFrom={yAOS + hAOS + 4} yTo={yProof - 6} />

      {/* Unicity Blockchain */}
      <Box x={lX} y={yProof} w={lW} h={hProof}
        stroke="rgba(249,115,22,0.55)" titleColor="#f97316"
        fill="rgba(249,115,22,0.04)"
        title="Unicity Blockchain"
        subtitle="Verifiable execution" />

      {/* ───── RIGHT COLUMN — simplified single-label boxes ───── */}

      {/* External LLM */}
      <rect x={rX} y={yLLM} width={rW} height={hLLM} rx={10}
        fill="rgba(100,180,140,0.05)"
        stroke="rgba(100,180,140,0.55)" strokeWidth={1.5} />
      <text x={rX + rW / 2} y={yLLM + hLLM / 2 + 10}
        textAnchor="middle"
        fill="#64b48c" fontSize="30" fontWeight="bold" fontFamily={mono}>
        External LLM
      </text>

      {/* External Agent */}
      <rect x={rX} y={yExt} width={rW} height={hExt} rx={10}
        fill="rgba(140,120,200,0.05)"
        stroke="rgba(140,120,200,0.55)" strokeWidth={1.5} />
      <text x={rX + rW / 2} y={yExt + hExt / 2 + 10}
        textAnchor="middle"
        fill="#8c78c8" fontSize="30" fontWeight="bold" fontFamily={mono}>
        External Agent
      </text>

      {/* ───── ROUTING — orange bus + 3 branches ───── */}
      {/*
         Vertical orange bus between the dashed container and the firewall.
           • TOP   → External LLM Providers   ("compute")
           • MID   ← Semantic Intercept Fabric (response into SIF)
           • BOT   → External Enterprise       ("A2A comms + payments")
         Arrowheads are explicit polygons so direction is unambiguous.
      */}
      {(() => {
        const busX = 925;
        const sifRightEdge = lX + lW;   // right edge of SIF (and all left-col boxes)
        const llmLeftEdge = rX;         // left edge of External LLM box
        const extLeftEdge = rX;
        const A = 12;                    // arrowhead length
        const W = 7;                     // arrowhead half-width

        return (
          <g stroke="#f97316" fill="#f97316">
            {/* Vertical bus */}
            <line x1={busX} y1={llmMidY} x2={busX} y2={extMidY} strokeWidth={2} />

            {/* TOP branch — bus → RIGHT → External LLM */}
            <line x1={busX} y1={llmMidY} x2={llmLeftEdge - A} y2={llmMidY} strokeWidth={2} />
            <polygon
              points={`${llmLeftEdge - A},${llmMidY - W} ${llmLeftEdge},${llmMidY} ${llmLeftEdge - A},${llmMidY + W}`}
            />

            {/* MIDDLE branch — SIF → RIGHT → bus (egress out of security layer) */}
            <line x1={sifRightEdge} y1={sifMidY} x2={busX - A} y2={sifMidY} strokeWidth={2} />
            <polygon
              points={`${busX - A},${sifMidY - W} ${busX},${sifMidY} ${busX - A},${sifMidY + W}`}
            />

            {/* BOTTOM branch — bus → RIGHT → External Enterprise */}
            <line x1={busX} y1={extMidY} x2={extLeftEdge - A} y2={extMidY} strokeWidth={2} />
            <polygon
              points={`${extLeftEdge - A},${extMidY - W} ${extLeftEdge},${extMidY} ${extLeftEdge - A},${extMidY + W}`}
            />
          </g>
        );
      })()}

      {/* A2A label — 2-line stack sitting well above its arrow */}
      {(() => {
        const busX = 925;
        const labelX = (busX + rX) / 2;
        const labelY = extMidY - 70;
        return (
          <g fontFamily={mono} textAnchor="middle">
            <text x={labelX} y={labelY}
              fill="rgba(254,254,254,0.95)" fontSize="26" fontWeight="bold">
              A2A networking
            </text>
            <text x={labelX} y={labelY + 32}
              fill="rgba(254,254,254,0.95)" fontSize="26" fontWeight="bold">
              + payments
            </text>
          </g>
        );
      })()}

      {/* Reference */}
      {(() => { void aosMidY; return null; })()}
    </svg>
  );
}

function Box({
  x, y, w, h, stroke, fill, title, titleColor, subtitle, twoLine,
}: {
  x: number; y: number; w: number; h: number;
  stroke: string;
  fill?: string;
  title: string;
  titleColor?: string;
  subtitle?: string;
  twoLine?: boolean;
}) {
  // Title can be split across 2 lines for narrow boxes
  let titleEls: import('react').ReactElement;
  if (twoLine && title.includes('·')) {
    const idx = title.indexOf('·');
    const a = title.slice(0, idx).trim();
    const b = title.slice(idx + 1).trim();
    titleEls = (
      <>
        <text x={x + 22} y={y + 34} fill={titleColor ?? '#fefefe'}
          fontSize="26" fontWeight="bold" fontFamily="'Geist Mono', monospace">
          {a} ·
        </text>
        <text x={x + 22} y={y + 64} fill={titleColor ?? '#fefefe'}
          fontSize="26" fontWeight="bold" fontFamily="'Geist Mono', monospace">
          {b}
        </text>
      </>
    );
  } else if (subtitle) {
    titleEls = (
      <text x={x + 22} y={y + 38} fill={titleColor ?? '#fefefe'}
        fontSize="28" fontWeight="bold" fontFamily="'Geist Mono', monospace">
        {title}
      </text>
    );
  } else {
    titleEls = (
      <text x={x + 22} y={y + h / 2 + 9} fill={titleColor ?? '#fefefe'}
        fontSize="26" fontWeight="bold" fontFamily="'Geist Mono', monospace">
        {title}
      </text>
    );
  }
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={10}
        fill={fill ?? 'rgba(255,255,255,0.02)'} stroke={stroke} strokeWidth={1.5} />
      {titleEls}
      {subtitle && (
        <text x={x + 22} y={y + 64} fill="rgba(254,254,254,0.6)" fontSize="17"
          fontFamily="'Geist Mono', monospace">{subtitle}</text>
      )}
    </g>
  );
}

function DownArrow({ xMid, yFrom, yTo }: { xMid: number; yFrom: number; yTo: number }) {
  return (
    <line x1={xMid} y1={yFrom} x2={xMid} y2={yTo}
      stroke="rgba(254,254,254,0.55)" strokeWidth={1.5}
      markerEnd="url(#arr-grey)" />
  );
}

export function EnterpriseDeploymentSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-16 py-6 lg:py-8 gap-3 lg:gap-4">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-400 text-[10px] sm:text-xs tracking-[0.4em] uppercase font-bold"
            style={{ fontFamily: mono }}
          >
            Deployment
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[24px] sm:text-[32px] lg:text-[42px] xl:text-[48px] leading-[0.95] tracking-tight uppercase mt-1"
            style={{ fontFamily: display }}
          >
            ENTERPRISE <span className="text-orange-400">DEPLOYMENT.</span>
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="h-[2px] w-28 lg:w-40 bg-gradient-to-r from-orange-500 to-transparent origin-left mt-1.5"
          />
        </div>

        {/* Diagram — vertically centered, fills available space */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex-1 min-h-0 flex items-center justify-center"
        >
          <Diagram />
        </motion.div>

        {/* Footer */}
        <div className="shrink-0">
          <p
            className="text-[#fefefe]/40 text-[9px] sm:text-[10px] tracking-[0.3em] uppercase"
            style={{ fontFamily: mono }}
          >
            Unicity / Enterprise Deployment
          </p>
        </div>
      </div>
    </div>
  );
}
