import { motion } from 'framer-motion';
import splashVideoUrl from '/kling_20260226_VIDEO_Take_Image_1650_0.mp4';
import unicityLogoUrl from '/UnicityLogo.svg';

function StackDiagram() {
  const W = 520;
  const H = 420;
  const px = 30; // horizontal padding
  const bw = W - px * 2; // box width
  const bh = 90; // box height
  const arrowGap = 22;
  const font = "'Geist Mono', monospace";
  const fontTitle = "'Anton', sans-serif";

  // Layer positions (top-down)
  const y0 = 20; // user space
  const y1 = y0 + bh + arrowGap; // astrid
  const y2 = y1 + bh + arrowGap; // host os

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto">
      <defs>
        <filter id="astridGlow">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* ── User Space ── */}
      <rect x={px} y={y0} width={bw} height={bh} rx={12}
        fill="rgba(59,130,246,0.05)" stroke="rgba(59,130,246,0.25)" strokeWidth={1.5} />
      <text x={px + 16} y={y0 + 24} fill="#3b82f6" fontSize="14" fontWeight="bold"
        fontFamily={fontTitle} letterSpacing="0.08em">USER SPACE</text>
      <text x={px + 145} y={y0 + 24} fill="rgba(254,254,254,0.3)" fontSize="9"
        fontFamily={font}>User-facing tools &amp; agent frameworks</text>
      {/* Tags */}
      {['Claude Code', 'OpenClaw', 'Custom Agent Tools', 'LLM Frontends'].map((t, i) => {
        const tx = px + 16 + i * 115;
        return (
          <g key={t}>
            <rect x={tx} y={y0 + 40} width={106} height={28} rx={6}
              fill="rgba(59,130,246,0.08)" stroke="rgba(59,130,246,0.18)" strokeWidth={1} />
            <text x={tx + 53} y={y0 + 58} textAnchor="middle" fill="rgba(254,254,254,0.6)"
              fontSize="9.5" fontFamily={font}>{t}</text>
          </g>
        );
      })}

      {/* Arrow 1 */}
      <line x1={W / 2} y1={y0 + bh + 2} x2={W / 2} y2={y1 - 2}
        stroke="rgba(254,254,254,0.15)" strokeWidth={1.5} />
      <polygon points={`${W / 2 - 4},${y1 - 6} ${W / 2 + 4},${y1 - 6} ${W / 2},${y1 - 1}`}
        fill="rgba(254,254,254,0.15)" />

      {/* ── Astrid Runtime (highlighted) ── */}
      <rect x={px - 2} y={y1 - 2} width={bw + 4} height={bh + 24} rx={14}
        fill="rgba(249,115,22,0.04)" stroke="rgba(249,115,22,0.12)" strokeWidth={1}
        strokeDasharray="0" filter="url(#astridGlow)" />
      <rect x={px} y={y1} width={bw} height={bh + 20} rx={12}
        fill="rgba(249,115,22,0.08)" stroke="rgba(249,115,22,0.45)" strokeWidth={2} />
      <text x={px + 16} y={y1 + 24} fill="#f97316" fontSize="15" fontWeight="bold"
        fontFamily={fontTitle} letterSpacing="0.08em">ASTRID RUNTIME</text>
      <text x={px + 180} y={y1 + 24} fill="rgba(254,254,254,0.35)" fontSize="9"
        fontFamily={font}>User-space microkernel — enforcement layer</text>
      {/* Tags */}
      {['Security Interceptor', 'WASM Sandbox', 'Capsule Engine'].map((t, i) => {
        const tx = px + 16 + i * 148;
        return (
          <g key={t}>
            <rect x={tx} y={y1 + 40} width={140} height={28} rx={6}
              fill="rgba(249,115,22,0.12)" stroke="rgba(249,115,22,0.3)" strokeWidth={1} />
            <text x={tx + 70} y={y1 + 58} textAnchor="middle" fill="rgba(254,254,254,0.85)"
              fontSize="10" fontFamily={font}>{t}</text>
          </g>
        );
      })}
      {['Audit & Budgets', 'IPC Message Bus'].map((t, i) => {
        const tx = px + 16 + i * 148;
        return (
          <g key={t}>
            <rect x={tx} y={y1 + 74} width={140} height={28} rx={6}
              fill="rgba(249,115,22,0.12)" stroke="rgba(249,115,22,0.3)" strokeWidth={1} />
            <text x={tx + 70} y={y1 + 92} textAnchor="middle" fill="rgba(254,254,254,0.85)"
              fontSize="10" fontFamily={font}>{t}</text>
          </g>
        );
      })}

      {/* Arrow 2 */}
      <line x1={W / 2} y1={y1 + bh + 22} x2={W / 2} y2={y2 - 2}
        stroke="rgba(254,254,254,0.15)" strokeWidth={1.5} />
      <polygon points={`${W / 2 - 4},${y2 - 6} ${W / 2 + 4},${y2 - 6} ${W / 2},${y2 - 1}`}
        fill="rgba(254,254,254,0.15)" />

      {/* ── Host OS ── */}
      <rect x={px} y={y2} width={bw} height={bh - 10} rx={12}
        fill="rgba(99,102,241,0.05)" stroke="rgba(99,102,241,0.25)" strokeWidth={1.5} />
      <text x={px + 16} y={y2 + 24} fill="#6366f1" fontSize="14" fontWeight="bold"
        fontFamily={fontTitle} letterSpacing="0.08em">HOST OS</text>
      <text x={px + 105} y={y2 + 24} fill="rgba(254,254,254,0.3)" fontSize="9"
        fontFamily={font}>Underlying operating system</text>
      {['Linux', 'macOS', 'Container Runtimes'].map((t, i) => {
        const tw = t === 'Container Runtimes' ? 130 : 80;
        const tx = px + 16 + (i === 0 ? 0 : i === 1 ? 90 : 180);
        return (
          <g key={t}>
            <rect x={tx} y={y2 + 40} width={tw} height={28} rx={6}
              fill="rgba(99,102,241,0.08)" stroke="rgba(99,102,241,0.18)" strokeWidth={1} />
            <text x={tx + tw / 2} y={y2 + 58} textAnchor="middle" fill="rgba(254,254,254,0.6)"
              fontSize="9.5" fontFamily={font}>{t}</text>
          </g>
        );
      })}
    </svg>
  );
}

const keyPoints = [
  { title: 'User-Space Microkernel', text: 'Astrid models itself as an OS — with syscalls, airlocks, and user-space isolation. The kernel (astridd) and system SDK (astrid-sys) are the only core components.' },
  { title: 'WASM Capsule Sandbox', text: 'All plugins run as WASM capsules inside a sandboxed runtime. OpenClaw plugins are compiled into capsules via astrid-openclaw, with host calls thunked into astrid::sys.' },
  { title: 'Enforcement Layer', text: 'Security interception, budget enforcement, and audit logging happen at the runtime level — below the agent, not beside it. Tools cannot bypass the kernel.' },
  { title: 'Everything Is User-Space', text: 'CLIs, OpenClaw, frontends, and even LLM providers are external user-space components communicating over IPC. The kernel stays minimal and ignorant of legacy ABIs.' },
];

export function AstridSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="fixed inset-0 w-full h-full z-0">
        <video className="w-full h-full object-cover opacity-15" autoPlay muted loop playsInline src={splashVideoUrl} />
        <div className="absolute inset-0 bg-[#060606]/50" />
      </div>

      <div className="relative z-10 h-full flex flex-col px-6 sm:px-10 lg:px-16 py-6 sm:py-8">

        {/* Header */}
        <div className="shrink-0">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-orange-400 text-[10px] sm:text-xs tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            Appendix — Kernel
          </motion.p>
          <motion.h1 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[28px] sm:text-[40px] lg:text-[52px] leading-[0.95] tracking-tight mt-1"
            style={{ fontFamily: "'Anton', sans-serif" }}>
            <span className="text-orange-400">ASTRID:</span>{' '}
            THE AGENT RUNTIME
          </motion.h1>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] w-32 sm:w-48 bg-gradient-to-r from-orange-500 to-transparent origin-left mt-2" />
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-3 text-[#fefefe]/70 text-xs sm:text-sm leading-relaxed max-w-3xl"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            Astrid is the secure enforcement OS that tools like Claude Code and OpenClaw run <span className="text-orange-400">on top of</span>, not alongside.
            A user-space microkernel with syscalls, airlocks, and sandboxed isolation — the kernel stays minimal while everything else lives in user-space.
          </motion.p>
        </div>

        {/* Two-column: stack diagram left, key points right */}
        <div className="flex-1 grid grid-cols-[1.1fr_1fr] gap-6 sm:gap-10 mt-5 min-h-0 items-center">

          {/* Left — SVG Layer stack */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex items-center justify-center">
            <StackDiagram />
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
                <div className="w-1.5 h-1.5 rounded-full bg-orange-400/60 mt-1.5 shrink-0" />
                <div>
                  <h3 className="text-[#fefefe]/90 text-xs sm:text-sm font-bold"
                    style={{ fontFamily: "'Anton', sans-serif", letterSpacing: '0.02em' }}>
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
