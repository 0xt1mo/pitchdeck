import { motion } from 'framer-motion';
import { tr } from '../../i18n';

const T = tr({
  en: {
    userSpaceTitle: 'USER SPACE',
    userSpaceDesc: 'User-facing tools & agent frameworks',
    userTags: ['Claude Code', 'OpenClaw', 'Agent Tools', 'LLM Frontends'],
    kernelTitle: 'AOS KERNEL',
    kernelDesc: 'User-space microkernel — enforcement layer',
    kernelTagsTop: ['Security Interceptor', 'WASM Sandbox', 'Capsule Engine'],
    kernelTagsBottom: ['Audit & Budgets', 'IPC Message Bus'],
    hostTitle: 'HOST OS',
    hostDesc: 'Underlying operating system',
    hostTags: ['Linux', 'macOS', 'Container Runtimes'],
    blockchainTitle: 'UNICITY BLOCKCHAIN',
    blockchainDesc: 'Settlement substrate',
    blockchainTags: ['State Tokens', 'Cryptographic Identity', 'Settlement'],
    eyebrow: 'Appendix — Kernel',
    headAccent: 'AOS:',
    headRest: 'THE KERNEL',
    intro: (
      <>
        AOS is the secure enforcement kernel that tools like Claude Code and OpenClaw run{' '}
        <span className="text-orange-400 font-bold">on top of</span>, not alongside. A user-space microkernel with syscalls, airlocks, and sandboxed isolation — the kernel stays minimal while everything else lives in user-space.
      </>
    ),
    keyPoints: [
      { title: 'User-Space Microkernel', text: 'AOS models itself as an OS — with syscalls, airlocks, and user-space isolation. The kernel (aos9d) and system SDK (aos9-sys) are the only core components.' },
      { title: 'WASM Capsule Sandbox', text: 'All plugins run as WASM capsules inside a sandboxed runtime. OpenClaw plugins are compiled into capsules via aos9-openclaw, with host calls thunked into aos9::sys.' },
      { title: 'Enforcement Layer', text: 'Security interception, budget enforcement, and audit logging happen at the runtime level — below the agent, not beside it. Tools cannot bypass the kernel.' },
      { title: 'Everything Is User-Space', text: 'CLIs, OpenClaw, frontends, and even LLM providers are external user-space components communicating over IPC. The kernel stays minimal and ignorant of legacy ABIs.' },
    ],
  },
  pt: {
    userSpaceTitle: 'ESPAÇO DO USUÁRIO',
    userSpaceDesc: 'Ferramentas de usuário & frameworks de agentes',
    userTags: ['Claude Code', 'OpenClaw', 'Ferramentas de Agente', 'Frontends de LLM'],
    kernelTitle: 'AOS KERNEL',
    kernelDesc: 'Microkernel em espaço de usuário — camada de imposição',
    kernelTagsTop: ['Interceptor de Segurança', 'Sandbox WASM', 'Motor de Cápsulas'],
    kernelTagsBottom: ['Auditoria & Orçamentos', 'Barramento de Mensagens IPC'],
    hostTitle: 'HOST OS',
    hostDesc: 'Sistema operacional subjacente',
    hostTags: ['Linux', 'macOS', 'Runtimes de Contêiner'],
    blockchainTitle: 'UNICITY BLOCKCHAIN',
    blockchainDesc: 'Substrato de liquidação',
    blockchainTags: ['Tokens de Estado', 'Identidade Criptográfica', 'Liquidação'],
    eyebrow: 'Apêndice — Kernel',
    headAccent: 'AOS:',
    headRest: 'O KERNEL',
    intro: (
      <>
        AOS é o kernel seguro de imposição que ferramentas como Claude Code e OpenClaw executam{' '}
        <span className="text-orange-400 font-bold">em cima de</span>, não ao lado. Um microkernel em espaço de usuário com syscalls, airlocks e isolamento em sandbox — o kernel permanece mínimo enquanto todo o resto vive em espaço de usuário.
      </>
    ),
    keyPoints: [
      { title: 'Microkernel em Espaço de Usuário', text: 'O AOS se modela como um OS — com syscalls, airlocks e isolamento em espaço de usuário. O kernel (aos9d) e o SDK de sistema (aos9-sys) são os únicos componentes centrais.' },
      { title: 'Sandbox de Cápsula WASM', text: 'Todos os plugins rodam como cápsulas WASM dentro de um runtime isolado em sandbox. Plugins do OpenClaw são compilados em cápsulas via aos9-openclaw, com chamadas de host encaminhadas para aos9::sys.' },
      { title: 'Camada de Imposição', text: 'Interceptação de segurança, imposição de orçamento e registro de auditoria acontecem no nível do runtime — abaixo do agente, não ao lado dele. As ferramentas não podem contornar o kernel.' },
      { title: 'Tudo é Espaço de Usuário', text: 'CLIs, OpenClaw, frontends e até provedores de LLM são componentes externos em espaço de usuário que se comunicam via IPC. O kernel permanece mínimo e alheio a ABIs legadas.' },
    ],
  },
});

function StackDiagram() {
  const W = 520;
  const H = 408;
  const px = 22;
  const bw = W - px * 2;
  const bh = 78;
  const arrowGap = 16;
  const astridH = bh + 24;
  const font = "'Geist Mono', monospace";
  const fontTitle = "'Anton', sans-serif";

  const y0 = 10;
  const y1 = y0 + bh + arrowGap;
  const y2 = y1 + astridH + arrowGap;
  const y3 = y2 + bh + arrowGap;

  // Equal-width tag helper (n tags, fills the box minus side padding)
  const tagRow = (n: number, inset = 16) => {
    const innerW = bw - inset * 2;
    const gap = 8;
    const tw = (innerW - gap * (n - 1)) / n;
    return Array.from({ length: n }).map((_, i) => ({
      x: px + inset + i * (tw + gap),
      w: tw,
    }));
  };

  const userTags = tagRow(4);
  const kernelTagsTop = tagRow(3);
  const kernelTagsBottom = tagRow(2);
  const hostTags = tagRow(3);

  // Blockchain row uses variable widths because "Cryptographic Identity" needs more room
  const blockchainTags = (() => {
    const inset = 16;
    const gap = 8;
    const innerW = bw - inset * 2;
    const widths = [0.26, 0.44, 0.30]; // State Tokens | Cryptographic Identity | Settlement
    const totalGaps = gap * 2;
    const sumW = widths.reduce((a, b) => a + b, 0);
    const availW = innerW - totalGaps;
    let cursor = px + inset;
    return widths.map((frac) => {
      const w = (frac / sumW) * availW;
      const entry = { x: cursor, w };
      cursor += w + gap;
      return entry;
    });
  })();

  return (
    <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid meet" className="w-full h-full">
      <defs>
        <filter id="astridGlow">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* ── User Space ── */}
      <rect x={px} y={y0} width={bw} height={bh} rx={11}
        fill="rgba(59,130,246,0.05)" stroke="rgba(59,130,246,0.28)" strokeWidth={1.4} />
      <text x={px + 16} y={y0 + 20} fill="#3b82f6" fontSize="13" fontWeight="bold"
        fontFamily={fontTitle} letterSpacing="0.08em">{T.userSpaceTitle}</text>
      <text x={px + 122} y={y0 + 20} fill="rgba(254,254,254,0.32)" fontSize="9"
        fontFamily={font}>{T.userSpaceDesc}</text>
      {T.userTags.map((t, i) => (
        <g key={i}>
          <rect x={userTags[i].x} y={y0 + 34} width={userTags[i].w} height={30} rx={6}
            fill="rgba(59,130,246,0.08)" stroke="rgba(59,130,246,0.22)" strokeWidth={1} />
          <text x={userTags[i].x + userTags[i].w / 2} y={y0 + 53} textAnchor="middle"
            fill="rgba(254,254,254,0.75)" fontSize="10.5" fontFamily={font}>{t}</text>
        </g>
      ))}

      {/* Arrow 1 */}
      <line x1={W / 2} y1={y0 + bh + 2} x2={W / 2} y2={y1 - 2}
        stroke="rgba(254,254,254,0.18)" strokeWidth={1.4} />
      <polygon points={`${W / 2 - 4},${y1 - 6} ${W / 2 + 4},${y1 - 6} ${W / 2},${y1 - 1}`}
        fill="rgba(254,254,254,0.18)" />

      {/* ── AOS Kernel (highlighted) ── */}
      <rect x={px - 2} y={y1 - 2} width={bw + 4} height={astridH + 4} rx={13}
        fill="rgba(249,115,22,0.04)" stroke="rgba(249,115,22,0.14)" strokeWidth={1}
        filter="url(#astridGlow)" />
      <rect x={px} y={y1} width={bw} height={astridH} rx={11}
        fill="rgba(249,115,22,0.08)" stroke="rgba(249,115,22,0.52)" strokeWidth={1.6} />
      <text x={px + 16} y={y1 + 20} fill="#f97316" fontSize="13" fontWeight="bold"
        fontFamily={fontTitle} letterSpacing="0.08em">{T.kernelTitle}</text>
      <text x={px + 118} y={y1 + 20} fill="rgba(254,254,254,0.38)" fontSize="9"
        fontFamily={font}>{T.kernelDesc}</text>
      {T.kernelTagsTop.map((t, i) => (
        <g key={i}>
          <rect x={kernelTagsTop[i].x} y={y1 + 34} width={kernelTagsTop[i].w} height={28} rx={6}
            fill="rgba(249,115,22,0.12)" stroke="rgba(249,115,22,0.32)" strokeWidth={1} />
          <text x={kernelTagsTop[i].x + kernelTagsTop[i].w / 2} y={y1 + 52} textAnchor="middle"
            fill="rgba(254,254,254,0.88)" fontSize="10.5" fontFamily={font}>{t}</text>
        </g>
      ))}
      {T.kernelTagsBottom.map((t, i) => (
        <g key={i}>
          <rect x={kernelTagsBottom[i].x} y={y1 + 68} width={kernelTagsBottom[i].w} height={28} rx={6}
            fill="rgba(249,115,22,0.12)" stroke="rgba(249,115,22,0.32)" strokeWidth={1} />
          <text x={kernelTagsBottom[i].x + kernelTagsBottom[i].w / 2} y={y1 + 86} textAnchor="middle"
            fill="rgba(254,254,254,0.88)" fontSize="10.5" fontFamily={font}>{t}</text>
        </g>
      ))}

      {/* Arrow 2 */}
      <line x1={W / 2} y1={y1 + astridH + 2} x2={W / 2} y2={y2 - 2}
        stroke="rgba(254,254,254,0.18)" strokeWidth={1.4} />
      <polygon points={`${W / 2 - 4},${y2 - 6} ${W / 2 + 4},${y2 - 6} ${W / 2},${y2 - 1}`}
        fill="rgba(254,254,254,0.18)" />

      {/* ── Host OS ── */}
      <rect x={px} y={y2} width={bw} height={bh} rx={11}
        fill="rgba(99,102,241,0.05)" stroke="rgba(99,102,241,0.28)" strokeWidth={1.4} />
      <text x={px + 16} y={y2 + 20} fill="#6366f1" fontSize="13" fontWeight="bold"
        fontFamily={fontTitle} letterSpacing="0.08em">{T.hostTitle}</text>
      <text x={px + 88} y={y2 + 20} fill="rgba(254,254,254,0.32)" fontSize="9"
        fontFamily={font}>{T.hostDesc}</text>
      {T.hostTags.map((t, i) => (
        <g key={i}>
          <rect x={hostTags[i].x} y={y2 + 34} width={hostTags[i].w} height={30} rx={6}
            fill="rgba(99,102,241,0.08)" stroke="rgba(99,102,241,0.22)" strokeWidth={1} />
          <text x={hostTags[i].x + hostTags[i].w / 2} y={y2 + 53} textAnchor="middle"
            fill="rgba(254,254,254,0.75)" fontSize="10.5" fontFamily={font}>{t}</text>
        </g>
      ))}

      {/* Arrow 3 */}
      <line x1={W / 2} y1={y2 + bh + 2} x2={W / 2} y2={y3 - 2}
        stroke="rgba(254,254,254,0.18)" strokeWidth={1.4} />
      <polygon points={`${W / 2 - 4},${y3 - 6} ${W / 2 + 4},${y3 - 6} ${W / 2},${y3 - 1}`}
        fill="rgba(254,254,254,0.18)" />

      {/* ── Unicity blockchain ── */}
      <rect x={px} y={y3} width={bw} height={bh} rx={11}
        fill="rgba(249,115,22,0.05)" stroke="rgba(249,115,22,0.42)" strokeWidth={1.4} />
      <text x={px + 16} y={y3 + 20} fill="#f97316" fontSize="13" fontWeight="bold"
        fontFamily={fontTitle} letterSpacing="0.08em">{T.blockchainTitle}</text>
      <text x={px + 178} y={y3 + 20} fill="rgba(254,254,254,0.32)" fontSize="9"
        fontFamily={font}>{T.blockchainDesc}</text>
      {T.blockchainTags.map((t, i) => (
        <g key={i}>
          <rect x={blockchainTags[i].x} y={y3 + 34} width={blockchainTags[i].w} height={30} rx={6}
            fill="rgba(249,115,22,0.10)" stroke="rgba(249,115,22,0.30)" strokeWidth={1} />
          <text x={blockchainTags[i].x + blockchainTags[i].w / 2} y={y3 + 53} textAnchor="middle"
            fill="rgba(254,254,254,0.78)" fontSize="10.5" fontFamily={font}>{t}</text>
        </g>
      ))}
    </svg>
  );
}

export function AstridSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">

      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-16 pt-8 pb-14 lg:pt-10 lg:pb-16 justify-center gap-5 lg:gap-6">

        {/* Header */}
        <div className="shrink-0">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-orange-400 text-[10px] sm:text-xs lg:text-sm tracking-[0.4em] uppercase font-bold"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            {T.eyebrow}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[28px] sm:text-[40px] lg:text-[52px] xl:text-[60px] leading-[0.95] tracking-tight uppercase mt-2"
            style={{ fontFamily: "'Anton', sans-serif" }}>
            <span className="text-orange-400">{T.headAccent}</span>{' '}
            {T.headRest}
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-3 text-[#fefefe]/80 text-xs sm:text-sm lg:text-base leading-[1.55]"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            {T.intro}
          </motion.p>
        </div>

        {/* Two-column: stack diagram left, key points stacked right (cards vertically centered) */}
        <div className="grid grid-cols-[1fr_1fr] gap-6 lg:gap-8 shrink-0 items-center">

          {/* Left — SVG Layer stack */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex justify-center">
            <StackDiagram />
          </motion.div>

          {/* Right — Key points as 2x2 grid */}
          <div className="grid grid-cols-2 gap-3 lg:gap-4">
            {T.keyPoints.map((point, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.08, duration: 0.4 }}
                className="rounded-lg p-4 lg:p-5"
                style={{
                  background: 'rgba(249,115,22,0.04)',
                  border: '1px solid rgba(249,115,22,0.18)',
                  borderLeft: '3px solid rgba(249,115,22,0.55)',
                }}>
                <h3 className="text-orange-400 text-sm sm:text-base lg:text-lg font-bold mb-2"
                  style={{ fontFamily: "'Geist Mono', monospace" }}>
                  {point.title}
                </h3>
                <p className="text-[#fefefe]/70 text-[11px] sm:text-xs lg:text-sm leading-[1.55]"
                  style={{ fontFamily: "'Geist Mono', monospace" }}>
                  {point.text}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
