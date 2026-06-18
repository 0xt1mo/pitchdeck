import { motion } from 'framer-motion';

type StackLayer = {
  product: string;
  label: string;
  detail: string;
  tags: string;
  variant: 'top' | 'mid' | 'bottom';
};

const stack: StackLayer[] = [
  {
    product: 'AGENT FRAMEWORKS',
    label: 'A CAMADA DE APLICAÇÃO',
    detail: 'Traga o seu próprio agente — qualquer framework, qualquer modelo.',
    tags: 'LANGCHAIN · OPENCLAW · AUTOGEN · CUSTOM',
    variant: 'top',
  },
  {
    product: 'UNICITY AOS9',
    label: 'RUNTIME',
    detail: 'Um runtime seguro que fica abaixo do agente. Cada saída de modelo, chamada de ferramenta e decisão passa por ele — interceptação de segurança, registro de auditoria e aplicação de orçamento acontecem aqui, onde as ferramentas não podem contorná-los.',
    tags: 'KERNEL · POLICY · INTERCEPT',
    variant: 'mid',
  },
  {
    product: 'UNICITY L1',
    label: 'LIQUIDAÇÃO E IDENTIDADE',
    detail: 'O substrato. Tokenização de estado, transferência de valor, identidade criptográfica e delegação.',
    tags: 'STATE TOKENS · IDENTITY · DELEGATION',
    variant: 'bottom',
  },
];

const requirements = [
  'Identidade',
  'Delegação',
  'Execução Verificável',
  'Aplicação de Políticas',
  'Liquidação',
  'Interoperabilidade',
];

export function CasinoAutonomyStackSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-5 sm:py-6 lg:py-8 justify-center gap-3 lg:gap-4">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-orange-400 text-xs sm:text-sm tracking-[0.32em] uppercase font-semibold"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Nº 10 · A Stack
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[32px] sm:text-[44px] lg:text-[56px] leading-[1.05] tracking-tight mt-2 uppercase"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            Um sistema operacional para{' '}
            <span className="text-orange-400">IA autônoma.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-3 text-[#fefefe]/85 text-base sm:text-lg lg:text-xl max-w-5xl leading-relaxed"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Três camadas. <span className="text-orange-400 font-bold">Liquidação, runtime, frameworks.</span> Cada requisito que a autonomia exige, entregue como uma única stack de protocolo.
          </motion.p>
        </div>

        {/* Isometric stack */}
        <div className="grid grid-cols-[1.1fr_1fr] lg:grid-cols-[1fr_1fr] gap-6 lg:gap-10 shrink-0 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <IsoStackDiagram />
          </motion.div>

          <div className="flex flex-col gap-3 lg:gap-4">
            {stack.map((layer, i) => (
              <motion.div
                key={layer.product}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
                className="flex items-start gap-3"
              >
                <span
                  className="block w-6 h-[2px] mt-3 shrink-0"
                  style={{
                    background:
                      layer.variant === 'mid'
                        ? '#f97316'
                        : layer.variant === 'bottom'
                        ? 'rgba(249,115,22,0.7)'
                        : 'rgba(254,254,254,0.7)',
                  }}
                />
                <div className="flex flex-col">
                  <p
                    className="text-[#fefefe] text-[22px] sm:text-[26px] lg:text-[32px] leading-none tracking-tight"
                    style={{ fontFamily: "'Anton', sans-serif" }}
                  >
                    {layer.product}
                  </p>
                  <p
                    className="text-orange-400 text-[10px] sm:text-xs lg:text-sm tracking-[0.28em] uppercase font-bold mt-1.5"
                    style={{ fontFamily: "'Geist Mono', monospace" }}
                  >
                    {layer.label}
                  </p>
                  <p
                    className="text-[#fefefe]/75 text-xs sm:text-sm lg:text-base leading-snug mt-1"
                    style={{ fontFamily: "'Geist Mono', monospace" }}
                  >
                    {layer.detail}
                  </p>
                  <p
                    className="text-[#fefefe]/45 text-[10px] sm:text-xs tracking-[0.18em] uppercase mt-1.5"
                    style={{ fontFamily: "'Geist Mono', monospace" }}
                  >
                    {layer.tags}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Requirements box */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="rounded-md px-5 py-3 shrink-0"
          style={{ border: '1px solid rgba(249,115,22,0.30)' }}
        >
          <p
            className="text-[#fefefe]/55 text-xs lg:text-sm tracking-[0.25em] uppercase font-bold mb-2"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Cada Requisito de Autonomia, Entregue
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {requirements.map((r, i) => (
              <span key={r} className="flex items-center">
                <span className="flex items-center gap-2">
                  <span className="text-orange-400 text-base lg:text-lg font-bold">✓</span>
                  <span
                    className="text-[#fefefe] text-sm lg:text-base tracking-[0.18em] uppercase font-bold"
                    style={{ fontFamily: "'Geist Mono', monospace" }}
                  >
                    {r}
                  </span>
                </span>
                {i < requirements.length - 1 && (
                  <span className="text-[#fefefe]/30 ml-5 hidden lg:inline">·</span>
                )}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-orange-400 text-[18px] sm:text-[22px] lg:text-[26px] leading-[0.95] tracking-tight pt-3 shrink-0"
          style={{
            fontFamily: "'Anton', sans-serif",
            borderTop: '1px solid rgba(249,115,22,0.25)',
          }}
        >
          SEIS REQUISITOS. UMA PLATAFORMA. CONSTRUÍDA A PARTIR DE PRIMEIROS PRINCÍPIOS.
        </motion.p>

      </div>
    </div>
  );
}

// Isometric exploded-view of the three-layer stack.
function IsoStackDiagram() {
  const W = 720;
  const H = 360;
  const cx = W / 2;
  const hw = 180;
  const hh = 55;
  const t = 14;
  const layerY = [55, 170, 285];

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
          <polygon
            points={`${cx},${cy - hh * 0.55} ${cx + hw * 0.55},${cy} ${cx},${cy + hh * 0.55} ${cx - hw * 0.55},${cy}`}
            fill="rgba(249,115,22,0.55)"
            stroke="#f97316"
            strokeWidth={1}
          />
        )}

        {centerLabel && (
          <text
            x={cx}
            y={cy + 5}
            textAnchor="middle"
            fill="#fefefe"
            fontSize="14"
            fontWeight="bold"
            letterSpacing="2"
            fontFamily="Geist Mono, monospace"
          >
            {centerLabel}
          </text>
        )}
        {centerSub && (
          <text
            x={cx}
            y={cy + 22}
            textAnchor="middle"
            fill="rgba(254,254,254,0.7)"
            fontSize="9"
            letterSpacing="1.5"
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

      <Slab cy={layerY[2]} variant="bottom" centerLabel="PROVA" />
      <Slab cy={layerY[1]} variant="mid" centerLabel="AOS9" centerSub="KERNEL" />
      <Slab cy={layerY[0]} variant="top" centerLabel="AGENTE" />
    </svg>
  );
}
