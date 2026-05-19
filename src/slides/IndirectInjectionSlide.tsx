import { motion } from 'framer-motion';

const traceLog = [
  { t: '[00.00ms]', k: 'SYSCALL:', body: 'Agent_04 requests HTTP_POST to ', highlight: 'api.evil.com/drop', tone: 'pearl' },
  { t: '[02.14ms]', k: 'IPC_BUS:', body: 'payload intercepted — routed to SIF', tone: 'plain' },
  { t: '[05.32ms]', k: 'SIF_RULE:', body: 'candidate strings checked — ', highlight: 'PASS', tone: 'ok' },
  { t: '[11.05ms]', k: 'SIF_ML:', body: 'semantic intent vector evaluated — ', highlight: 'WARN: anomalous context', tone: 'warn' },
  { t: '[13.88ms]', k: 'SIF_DLP:', body: 'named-entity scan — ', highlight: 'CRITICAL: PII_SSN_DETECTED', tone: 'crit' },
  { t: '[14.02ms]', k: 'KERNEL_DENY:', body: 'action denied — process terminated', tone: 'panic' },
  { t: '[14.10ms]', k: 'CRYPTO_AUDIT:', body: 'hash-linked record written to state — identity flagged', tone: 'orange' },
];

const toneColor: Record<string, string> = {
  plain: '#fefefe',
  ok: '#22c55e',
  warn: '#facc15',
  crit: '#ef4444',
  panic: '#ef4444',
  orange: '#f97316',
  pearl: '#a78bfa',
};

export function IndirectInjectionSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-16 py-6 sm:py-8 lg:py-10 justify-center gap-4 lg:gap-5">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-orange-400 text-xs sm:text-sm lg:text-base tracking-[0.4em] uppercase font-bold"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Execution Interception
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[28px] sm:text-[40px] lg:text-[56px] xl:text-[64px] leading-[0.95] tracking-tight uppercase mt-2"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            STOPPING THE{' '}
            <span className="text-orange-400">INDIRECT INJECTION.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-[#fefefe]/85 text-sm sm:text-base lg:text-lg leading-snug mt-3 max-w-6xl"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Legacy CWPP allows it — the container is authorized. Application filters miss it — the model is manipulated.{' '}
            <span className="text-orange-400">The AOS kernel terminates it in 14 milliseconds, in-path, before the payload leaves the process.</span>
          </motion.p>
        </div>

        {/* Kill-chain diagram */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="grid grid-cols-[1fr_1.4fr_1fr] items-center gap-4 lg:gap-6 shrink-0"
        >
          {/* Compromised Agent */}
          <div
            className="rounded-lg p-4 lg:p-5"
            style={{
              background: 'rgba(239,68,68,0.08)',
              border: '1px solid rgba(239,68,68,0.55)',
            }}
          >
            <p
              className="text-red-400 text-xs sm:text-sm lg:text-base tracking-[0.2em] uppercase font-bold"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              1 · Compromised Agent
            </p>
            <p
              className="text-[#fefefe]/85 text-xs sm:text-sm lg:text-base leading-snug mt-2"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              Reads a malicious email. The model is manipulated by a hidden prompt injection to exfiltrate database records.
            </p>
          </div>

          {/* AOS Kernel · SIF */}
          <div
            className="rounded-lg p-4 lg:p-5"
            style={{
              background: 'rgba(249,115,22,0.08)',
              border: '1px solid rgba(249,115,22,0.65)',
              boxShadow: '0 0 30px -8px rgba(249,115,22,0.4)',
            }}
          >
            <p
              className="text-orange-400 text-xs sm:text-sm lg:text-base tracking-[0.2em] uppercase font-bold"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              2 · AOS MICROKERNEL · SIF
            </p>
            <div className="grid grid-cols-3 gap-1.5 lg:gap-2 mt-3">
              {[
                { n: 'STAGE 1', l: 'RULE ENGINE', trip: false },
                { n: 'STAGE 2', l: 'ONNX ML MODEL', trip: false },
                { n: 'STAGE 3 · TRIGGER', l: 'DLP SCANNER', trip: true },
              ].map((s) => (
                <div
                  key={s.n}
                  className="rounded px-2 py-1.5 lg:py-2 text-center"
                  style={{
                    background: s.trip ? 'rgba(239,68,68,0.15)' : 'rgba(255,255,255,0.04)',
                    border: s.trip ? '1px solid rgba(239,68,68,0.55)' : '1px solid rgba(255,255,255,0.10)',
                  }}
                >
                  <p
                    className={`text-[9px] lg:text-[10px] tracking-[0.18em] uppercase font-bold ${s.trip ? 'text-red-400' : 'text-[#fefefe]/55'}`}
                    style={{ fontFamily: "'Geist Mono', monospace" }}
                  >
                    {s.n}
                  </p>
                  <p
                    className={`text-[10px] lg:text-xs leading-tight font-bold mt-0.5 ${s.trip ? 'text-red-400' : 'text-[#fefefe]/90'}`}
                    style={{ fontFamily: "'Geist Mono', monospace" }}
                  >
                    {s.l}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* External server (severed) */}
          <div
            className="rounded-lg p-4 lg:p-5 relative"
            style={{
              background: 'rgba(60,60,60,0.06)',
              border: '1px dashed rgba(120,120,120,0.40)',
              opacity: 0.65,
            }}
          >
            <p
              className="text-[#fefefe]/55 text-xs sm:text-sm lg:text-base tracking-[0.2em] uppercase font-bold"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              3 · External Server
            </p>
            <p
              className="text-[#fefefe]/55 text-xs sm:text-sm lg:text-base leading-snug mt-2"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              Attacker endpoint waits for the payload. The request never arrives — the connection is severed at the kernel.
            </p>
            <span
              className="absolute top-3 right-4 text-red-500 text-3xl lg:text-4xl font-bold leading-none"
              aria-hidden="true"
            >
              ×
            </span>
          </div>
        </motion.div>

        {/* Kernel trace log */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.5 }}
          className="rounded-lg overflow-hidden shrink-0"
          style={{ background: '#0a0a0f', border: '1px solid rgba(249,115,22,0.30)' }}
        >
          <div
            className="flex items-center gap-2 px-4 py-2"
            style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)' }}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
            <span
              className="text-[#fefefe]/55 text-xs lg:text-sm tracking-[0.2em] uppercase font-bold ml-2"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              AOS_KERNEL_TRACE_LOG
            </span>
          </div>
          <div
            className="px-4 py-3 lg:px-5 lg:py-4 flex flex-col gap-1 text-xs sm:text-sm lg:text-[15px] leading-snug"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            {traceLog.map((line) => (
              <div key={line.t}>
                <span className="text-[#fefefe]/45">{line.t}</span>{' '}
                <span style={{ color: line.tone === 'orange' ? '#f97316' : '#fefefe' }} className="font-bold">
                  {line.k}
                </span>{' '}
                <span className="text-[#fefefe]/80">{line.body}</span>
                {line.highlight && (
                  <span style={{ color: toneColor[line.tone] }} className="font-bold">
                    {line.highlight}
                  </span>
                )}
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
