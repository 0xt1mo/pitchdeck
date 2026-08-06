import { useState } from 'react';
import { motion } from 'framer-motion';
import { tr } from '../i18n';

type StackLayer = {
  product: string;
  label: string;
  detail: string;
  tags: string;
};

// Non-text structure (layer order + variant) stays out of translation.
const stackVariants = ['top', 'mid', 'bottom'] as const;

const T = tr({
  en: {
    eyebrow: 'The Platform',
    headLead: 'AN OS BUILT FOR THE DAY WHEN',
    headAccent: 'NO ONE IS WATCHING.',
    subtitle: 'Every OS until now assumed a human at the keyboard. This one is built for the day when no one is watching — with the identity, enforcement, and proof to earn that autonomy safely, one step at a time.',
    agentLabel: 'AGENT',
    stack: [
      {
        product: 'AGENT HARNESSES',
        label: '',
        detail: 'Bring or build your own agent.',
        tags: 'CLAUDE CODE · CODEX · GROK CODE',
      },
      {
        product: 'UNICITY AOS',
        label: 'MULTI-TENANT SECURE OS',
        detail: 'Executes every agent — multi-tenant and isolated. Every prompt, tool call, and decision passes through the kernel, where policy, budgets, and audit are enforced below the agent.',
        tags: 'KERNEL · POLICY · INTERCEPT',
      },
      {
        product: 'UNICITY PROOF SYSTEM',
        label: 'CRYPTOGRAPHIC PROOF OF EXECUTION',
        detail: 'A purpose-built blockchain for verifiable execution, identity, and multi-agent coordination — the source of truth beneath the execution layer.',
        tags: '',
      },
    ] as StackLayer[],
  },
  pt: {
    eyebrow: 'A Plataforma',
    headLead: 'UM OS CONSTRUÍDO PARA O DIA EM QUE',
    headAccent: 'NINGUÉM ESTÁ OLHANDO.',
    subtitle: 'Todo OS até hoje presumia um humano ao teclado. Este foi construído para o dia em que ninguém está olhando — com a identidade, a imposição e a prova para conquistar essa autonomia com segurança, um passo de cada vez.',
    agentLabel: 'AGENTE',
    stack: [
      {
        product: 'HARNESSES DE AGENTE',
        label: '',
        detail: 'Traga ou construa seu próprio agente.',
        tags: 'CLAUDE CODE · CODEX · GROK CODE',
      },
      {
        product: 'UNICITY AOS',
        label: 'OS SEGURO MULTI-TENANT',
        detail: 'Executa cada agente — multi-tenant e isolado. Cada prompt, chamada de ferramenta e decisão passa pelo kernel, onde política, orçamentos e auditoria são impostos abaixo do agente.',
        tags: 'KERNEL · POLÍTICA · INTERCEPTAÇÃO',
      },
      {
        product: 'UNICITY PROOF SYSTEM',
        label: 'PROVA CRIPTOGRÁFICA DE EXECUÇÃO',
        detail: 'Uma blockchain feita sob medida para execução verificável, identidade e coordenação multi-agente — a fonte da verdade sob a camada de execução.',
        tags: '',
      },
    ] as StackLayer[],
  },
});

// Harness chips render their brand logo where we have one; others fall back to text.
const HARNESS_LOGOS: Record<string, string> = {
  'CLAUDE CODE': '/logos/claude.svg',
  'CODEX': '/logos/openai-mark.webp',
  'GROK CODE': '/logos/grok-code.svg',
};

function HarnessChip({ label, logo }: { label: string; logo?: string }) {
  const [failed, setFailed] = useState(false);
  return (
    <span
      className="rounded-md px-3 py-1.5 flex items-center text-[#fefefe] text-xs sm:text-sm lg:text-base tracking-[0.06em] uppercase"
      style={{ fontFamily: "'Geist Mono', monospace", background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.22)' }}
    >
      {logo && !failed ? (
        <img
          src={logo}
          alt={label}
          onError={() => setFailed(true)}
          className="h-4 lg:h-5 w-auto"
          style={{ filter: 'brightness(0) invert(1)', opacity: 0.9 }}
        />
      ) : (
        label
      )}
    </span>
  );
}

export function AutonomyStackCodewallSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-5 sm:py-6 lg:py-8 justify-center gap-3 lg:gap-4">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-orange-400 text-sm tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            {T.eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[30px] sm:text-[44px] lg:text-[60px] xl:text-[74px] leading-[0.95] tracking-tight uppercase mt-2"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            {T.headLead} <span className="text-orange-400">{T.headAccent}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-3 text-[#fefefe]/85 text-base sm:text-lg lg:text-xl max-w-5xl leading-relaxed"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            {T.subtitle}
          </motion.p>
        </div>

        {/* Isometric stack */}
        <div className="grid grid-cols-[1.1fr_1fr] lg:grid-cols-[1fr_1fr] gap-6 lg:gap-10 shrink-0 items-center">
          {/* Diagram */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <IsoStackDiagram />
          </motion.div>

          {/* Right-side annotations */}
          <div className="flex flex-col gap-3 lg:gap-4">
            {T.stack.map((layer, i) => {
              const variant = stackVariants[i];
              return (
              <motion.div
                key={layer.product}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
                className="flex items-start gap-3"
              >
                <span
                  className="block w-6 h-[2px] mt-3 shrink-0"
                  style={{ background: '#f97316' }}
                />
                <div className="flex flex-col">
                  {/* Product name + harness logos on the same row */}
                  <div className="flex items-center gap-3 lg:gap-4 flex-wrap">
                    <p
                      className="text-[#fefefe] text-[22px] sm:text-[26px] lg:text-[32px] leading-none tracking-tight"
                      style={{ fontFamily: "'Anton', sans-serif" }}
                    >
                      {layer.product}
                    </p>
                    {variant === 'top' && layer.tags && (
                      <div className="flex flex-wrap items-center gap-2">
                        {layer.tags.split(' · ').map((t) => (
                          <HarnessChip key={t} label={t} logo={HARNESS_LOGOS[t]} />
                        ))}
                      </div>
                    )}
                  </div>
                  {layer.label && (
                    <p
                      className="text-orange-400 text-[10px] sm:text-xs lg:text-sm tracking-[0.28em] uppercase font-bold mt-1.5"
                      style={{ fontFamily: "'Geist Mono', monospace" }}
                    >
                      {layer.label}
                    </p>
                  )}
                  <p
                    className="text-[#fefefe]/75 text-xs sm:text-sm lg:text-base leading-snug mt-1"
                    style={{ fontFamily: "'Geist Mono', monospace" }}
                  >
                    {layer.detail}
                  </p>
                  {variant !== 'top' && layer.tags && (
                    <p
                      className="text-[#fefefe]/45 text-[10px] sm:text-xs tracking-[0.18em] uppercase mt-1.5"
                      style={{ fontFamily: "'Geist Mono', monospace" }}
                    >
                      {layer.tags}
                    </p>
                  )}
                </div>
              </motion.div>
              );
            })}
          </div>
        </div>


      </div>
    </div>
  );
}

// Isometric exploded-view of the three-layer stack.
export function IsoStackDiagram() {
  const W = 720;
  const H = 360;
  const cx = W / 2;
  const hw = 180; // rhombus half-width
  const hh = 55; // rhombus half-depth
  const t = 14; // slab thickness
  const layerY = [55, 170, 285]; // top, mid, bottom centers — bottom slab fits within H (285+55+14=354)

  function Slab({
    cy,
    variant,
    centerLabel,
    centerSub,
  }: {
    cy: number;
    variant: 'top' | 'mid' | 'bottom';
    centerLabel?: string;
    centerSub?: string;
  }) {
    const top = `${cx},${cy - hh} ${cx + hw},${cy} ${cx},${cy + hh} ${cx - hw},${cy}`;
    const leftFace = `${cx - hw},${cy} ${cx},${cy + hh} ${cx},${cy + hh + t} ${cx - hw},${cy + t}`;
    const rightFace = `${cx},${cy + hh} ${cx + hw},${cy} ${cx + hw},${cy + t} ${cx},${cy + hh + t}`;

    const styles: Record<typeof variant, { stroke: string; topFill: string; leftFill: string; rightFill: string; glow: boolean }> = {
      top: {
        stroke: 'rgba(254,254,254,0.55)',
        topFill: 'rgba(254,254,254,0.04)',
        leftFill: 'rgba(254,254,254,0.06)',
        rightFill: 'rgba(254,254,254,0.03)',
        glow: false,
      },
      mid: {
        stroke: '#f97316',
        topFill: 'rgba(249,115,22,0.32)',
        leftFill: 'rgba(249,115,22,0.45)',
        rightFill: 'rgba(249,115,22,0.22)',
        glow: true,
      },
      bottom: {
        stroke: 'rgba(249,115,22,0.65)',
        topFill: 'rgba(249,115,22,0.08)',
        leftFill: 'rgba(249,115,22,0.16)',
        rightFill: 'rgba(249,115,22,0.06)',
        glow: false,
      },
    };

    const s = styles[variant];

    return (
      <g filter={s.glow ? 'url(#iso-glow)' : undefined}>
        <polygon points={leftFace} fill={s.leftFill} stroke={s.stroke} strokeWidth={1} />
        <polygon points={rightFace} fill={s.rightFill} stroke={s.stroke} strokeWidth={1} />
        <polygon points={top} fill={s.topFill} stroke={s.stroke} strokeWidth={1.2} />

        {variant === 'mid' && (
          <>
            {/* Inner accent diamond */}
            <polygon
              points={`${cx},${cy - hh * 0.55} ${cx + hw * 0.55},${cy} ${cx},${cy + hh * 0.55} ${cx - hw * 0.55},${cy}`}
              fill="rgba(249,115,22,0.55)"
              stroke="#f97316"
              strokeWidth={1}
            />
          </>
        )}


        {centerLabel && (
          <text
            x={cx}
            y={variant === 'mid' ? cy + (centerSub ? 4 : 12) : cy + 11}
            textAnchor="middle"
            fill="#fefefe"
            fontSize={variant === 'mid' ? 38 : 30}
            letterSpacing="2"
            fontFamily="Anton, sans-serif"
            style={{ textTransform: 'uppercase' }}
          >
            {centerLabel}
          </text>
        )}
        {centerSub && (
          <text
            x={cx}
            y={variant === 'mid' ? cy + 30 : cy + 22}
            textAnchor="middle"
            fill="rgba(254,254,254,0.7)"
            fontSize={variant === 'mid' ? 12 : 9}
            letterSpacing="2"
            fontFamily="Geist Mono, monospace"
          >
            {centerSub}
          </text>
        )}
      </g>
    );
  }

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto">
      <defs>
        <pattern id="iso-grid" width="36" height="36" patternUnits="userSpaceOnUse">
          <path d="M 36 0 L 0 0 0 36" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
        </pattern>
        <filter id="iso-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="6" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect x={0} y={0} width={W} height={H} fill="url(#iso-grid)" />

      {/* Render bottom-up so upper layers sit visually in front */}
      <Slab cy={layerY[2]} variant="bottom" centerLabel="PROOF SYSTEM" />
      <Slab cy={layerY[1]} variant="mid" centerLabel="AOS" centerSub="KERNEL" />
      <Slab cy={layerY[0]} variant="top" centerLabel={T.agentLabel} />
    </svg>
  );
}
