import { motion } from 'framer-motion';

const bullets = [
  {
    label: 'WASM SANDBOXING',
    body: 'Agents execute within a WebAssembly isolated container. No direct access to the host OS.',
  },
  {
    label: 'IPC MESSAGE BUS',
    body: 'All external communication is routed through a monitored inter-process communication bus, enabling continuous, tamper-evident auditing.',
  },
  {
    label: 'SUB-20MS ENFORCEMENT',
    body: 'Intent is classified inline and enforced before the action executes — sub-twenty-millisecond overhead, in-path, not after the fact.',
  },
];

const stack = [
  {
    n: '1',
    name: 'RULE ENGINE',
    kind: 'Deterministic',
    desc: 'High-performance pattern matching and candidate identification. Enables dynamic rule updates to catch zero-day injection vectors without restarting the cluster.',
    highlight: false,
  },
  {
    n: '2',
    name: 'ML DETECTION',
    kind: 'Inference',
    desc: 'Low-latency inference and anomaly detection. Plugin-expandable, ONNX-compatible model loading allows CISOs to deploy custom detection models.',
    highlight: true,
  },
  {
    n: '3',
    name: 'DLP SCANNER',
    kind: 'Exfiltration',
    desc: 'Continuous scanning for secrets, IP, and PII exfiltration using advanced pattern matching and Named Entity Recognition (NER).',
    highlight: false,
  },
];

export function SemanticFirewallSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-8 sm:py-10 lg:py-12 justify-center gap-6 lg:gap-7">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-orange-400 text-xs sm:text-sm lg:text-base tracking-[0.4em] uppercase font-bold"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            AOS Architecture
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[36px] sm:text-[52px] lg:text-[72px] xl:text-[84px] leading-[0.95] tracking-tight uppercase mt-2"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            THE SEMANTIC{' '}
            <span className="text-orange-400">FIREWALL.</span>
          </motion.h1>
        </div>

        {/* 2-column body */}
        <div className="grid grid-cols-[1.05fr_1fr] gap-8 lg:gap-12 shrink-0 items-start">

          {/* Left — intro + bullets */}
          <div className="flex flex-col gap-5 lg:gap-6">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-[#fefefe]/90 text-sm sm:text-base lg:text-lg leading-snug"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              <span className="text-[#fefefe] font-bold">The Semantic Intercept Fabric (SIF)</span> goes beyond action-based policies to content-based controls with domain-specific ontologies — a Rust implementation with optimized search and rule algorithms.
            </motion.p>

            <ul className="flex flex-col gap-3 lg:gap-4">
              {bullets.map((b, i) => (
                <motion.li
                  key={b.label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.08, duration: 0.4 }}
                  className="flex items-start gap-3 lg:gap-4"
                >
                  <span className="text-orange-400/70 text-base lg:text-lg shrink-0 mt-0.5 font-bold">→</span>
                  <div>
                    <p
                      className="text-orange-400 text-xs sm:text-sm lg:text-base tracking-[0.2em] uppercase font-bold"
                      style={{ fontFamily: "'Geist Mono', monospace" }}
                    >
                      {b.label}
                    </p>
                    <p
                      className="text-[#fefefe]/85 text-sm lg:text-base leading-snug mt-1"
                      style={{ fontFamily: "'Geist Mono', monospace" }}
                    >
                      {b.body}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Right — 3-stage SIF stack */}
          <div className="flex flex-col gap-3 lg:gap-4">
            {stack.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 + i * 0.1, duration: 0.45 }}
                className="rounded-lg p-4 lg:p-5"
                style={{
                  background: s.highlight ? 'rgba(249,115,22,0.08)' : 'rgba(255,255,255,0.03)',
                  border: s.highlight ? '1px solid rgba(249,115,22,0.55)' : '1px solid rgba(255,255,255,0.12)',
                }}
              >
                <div className="flex items-baseline justify-between gap-3 mb-1.5">
                  <p
                    className={`text-base sm:text-lg lg:text-xl tracking-tight uppercase ${s.highlight ? 'text-orange-400' : 'text-[#fefefe]'}`}
                    style={{ fontFamily: "'Anton', sans-serif" }}
                  >
                    {s.n} · {s.name}
                  </p>
                  <p
                    className="text-[#fefefe]/50 text-[10px] sm:text-xs lg:text-sm tracking-[0.2em] uppercase font-bold"
                    style={{ fontFamily: "'Geist Mono', monospace" }}
                  >
                    {s.kind}
                  </p>
                </div>
                <p
                  className="text-[#fefefe]/75 text-xs sm:text-sm lg:text-base leading-snug"
                  style={{ fontFamily: "'Geist Mono', monospace" }}
                >
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
