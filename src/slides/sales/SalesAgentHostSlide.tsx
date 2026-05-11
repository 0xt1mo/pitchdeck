import { motion } from 'framer-motion';
import splashVideoUrl from '/kling_20260226_VIDEO_Take_Image_1650_0.mp4';

function StackDiagram() {
  const W = 520;
  const H = 440;
  const px = 30;
  const bw = W - px * 2;
  const bh = 90;
  const arrowGap = 22;
  const aos9H = bh + 20;
  const font = "'Geist Mono', monospace";
  const fontTitle = "'Anton', sans-serif";

  const y0 = 20;
  const y1 = y0 + bh + arrowGap;
  const y2 = y1 + aos9H + arrowGap;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto">
      <defs>
        <filter id="aos9Glow">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* User Space */}
      <rect x={px} y={y0} width={bw} height={bh} rx={12}
        fill="rgba(59,130,246,0.05)" stroke="rgba(59,130,246,0.25)" strokeWidth={1.5} />
      <text x={px + 16} y={y0 + 24} fill="#3b82f6" fontSize="14" fontWeight="bold"
        fontFamily={fontTitle} letterSpacing="0.08em">USER SPACE</text>
      <text x={px + 145} y={y0 + 24} fill="rgba(254,254,254,0.3)" fontSize="9"
        fontFamily={font}>User-facing tools &amp; agent frameworks</text>
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

      <line x1={W / 2} y1={y0 + bh + 2} x2={W / 2} y2={y1 - 2}
        stroke="rgba(254,254,254,0.15)" strokeWidth={1.5} />
      <polygon points={`${W / 2 - 4},${y1 - 6} ${W / 2 + 4},${y1 - 6} ${W / 2},${y1 - 1}`}
        fill="rgba(254,254,254,0.15)" />

      {/* AOS-9 Runtime */}
      <rect x={px - 2} y={y1 - 2} width={bw + 4} height={bh + 24} rx={14}
        fill="rgba(249,115,22,0.04)" stroke="rgba(249,115,22,0.12)" strokeWidth={1}
        strokeDasharray="0" filter="url(#aos9Glow)" />
      <rect x={px} y={y1} width={bw} height={bh + 20} rx={12}
        fill="rgba(249,115,22,0.08)" stroke="rgba(249,115,22,0.45)" strokeWidth={2} />
      <text x={px + 16} y={y1 + 24} fill="#f97316" fontSize="15" fontWeight="bold"
        fontFamily={fontTitle} letterSpacing="0.08em">AOS-9 RUNTIME</text>
      <text x={px + 180} y={y1 + 24} fill="rgba(254,254,254,0.35)" fontSize="9"
        fontFamily={font}>User-space microkernel — enforcement layer</text>
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

      <line x1={W / 2} y1={y1 + bh + 22} x2={W / 2} y2={y2 - 2}
        stroke="rgba(254,254,254,0.15)" strokeWidth={1.5} />
      <polygon points={`${W / 2 - 4},${y2 - 6} ${W / 2 + 4},${y2 - 6} ${W / 2},${y2 - 1}`}
        fill="rgba(254,254,254,0.15)" />

      {/* Host OS */}
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
  { title: 'User-Space Microkernel', text: 'AOS-9 models itself as an OS — with syscalls, airlocks, and user-space isolation. The kernel (aos9d) and system SDK (aos9-sys) are the only core components.' },
  { title: 'WASM Capsule Sandbox', text: 'All plugins run as WASM capsules inside a sandboxed runtime. OpenClaw plugins are compiled into capsules via aos9-openclaw, with host calls thunked into aos9::sys.' },
  { title: 'Enforcement Layer', text: 'Security interception, budget enforcement, and audit logging happen at the runtime level — below the agent, not beside it. Tools cannot bypass the kernel.' },
  { title: 'Everything Is User-Space', text: 'CLIs, OpenClaw, frontends, and even LLM providers are external user-space components communicating over IPC. The kernel stays minimal and ignorant of legacy ABIs.' },
];

export function SalesAgentHostSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-y-auto">
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <video className="w-full h-full object-cover opacity-15" autoPlay muted loop playsInline src={splashVideoUrl} />
        <div className="absolute inset-0 bg-[#060606]/50" />
      </div>

      <div className="relative z-10 h-full flex flex-col px-6 sm:px-10 lg:px-16 py-10 sm:py-14 justify-center gap-6">

        <div className="shrink-0">
          <motion.h1 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[32px] sm:text-[44px] lg:text-[56px] leading-[1.05] tracking-tight"
            style={{ fontFamily: "'Anton', sans-serif" }}>
            <span className="text-orange-400">AOS-9</span>{' '}
            — THE SECURE AGENTIC RUNTIME
          </motion.h1>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] w-32 sm:w-48 bg-gradient-to-r from-orange-500 to-transparent origin-left mt-2" />
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-[#fefefe]/85 text-base lg:text-lg leading-relaxed max-w-4xl"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            AOS-9 is the secure enforcement OS that tools like Claude Code and OpenClaw run <span className="text-orange-400">on top of</span>, not alongside.
            A user-space microkernel with syscalls, airlocks, and sandboxed isolation — the kernel stays minimal while everything else lives in user-space.
          </motion.p>
        </div>

        <div className="grid grid-cols-[1fr_1.1fr] gap-4 sm:gap-8 shrink-0 items-center">

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex items-center justify-center">
            <StackDiagram />
          </motion.div>

          <div className="grid grid-cols-2 gap-4 lg:gap-5">
            {keyPoints.map((point, i) => (
              <motion.div key={point.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
                className="rounded-lg p-5"
                style={{
                  background: 'rgba(249,115,22,0.06)',
                  border: '1px solid rgba(249,115,22,0.30)',
                  borderLeftWidth: '3px',
                  borderLeftColor: 'rgba(249,115,22,0.7)',
                }}>
                <h3 className="text-orange-400 text-base lg:text-lg font-bold mb-2"
                  style={{ fontFamily: "'Geist Mono', monospace" }}>
                  {point.title}
                </h3>
                <p className="text-[#fefefe]/85 text-sm lg:text-base leading-relaxed"
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
