import { motion } from 'framer-motion';

const font = "'Geist Mono', monospace";
const fontTitle = "'Anton', sans-serif";

type BoxVariant = 'white' | 'orange' | 'yellow' | 'green' | 'red';

function Box({
  label,
  sub,
  variant = 'white',
  size = 'md',
}: {
  label: string;
  sub?: string;
  variant?: BoxVariant;
  size?: 'sm' | 'md' | 'lg';
}) {
  const palettes: Record<BoxVariant, { border: string; bg: string; text: string }> = {
    white: { border: 'rgba(255,255,255,0.20)', bg: 'rgba(255,255,255,0.04)', text: '#fefefe' },
    orange: { border: 'rgba(249,115,22,0.60)', bg: 'rgba(249,115,22,0.10)', text: '#f97316' },
    yellow: { border: 'rgba(234,179,8,0.55)', bg: 'rgba(234,179,8,0.08)', text: '#eab308' },
    green: { border: 'rgba(16,185,129,0.50)', bg: 'rgba(16,185,129,0.10)', text: '#10b981' },
    red: { border: 'rgba(248,113,113,0.50)', bg: 'rgba(248,113,113,0.10)', text: '#f87171' },
  };
  const c = palettes[variant];
  const pad = size === 'lg' ? 'px-4 py-3' : size === 'sm' ? 'px-2.5 py-2' : 'px-3.5 py-2.5';
  const titleSize = size === 'lg' ? 'text-sm lg:text-base' : size === 'sm' ? 'text-[11px] lg:text-xs' : 'text-xs lg:text-sm';
  return (
    <div
      className={`${pad} rounded-lg text-center`}
      style={{ border: `1.5px solid ${c.border}`, background: c.bg }}
    >
      <p className={`${titleSize} font-bold leading-tight`} style={{ fontFamily: font, color: c.text }}>
        {label}
      </p>
      {sub && (
        <p
          className="text-[9px] lg:text-[10px] mt-1 leading-snug"
          style={{ fontFamily: font, color: 'rgba(254,254,254,0.55)' }}
        >
          {sub}
        </p>
      )}
    </div>
  );
}

function ConnectorDown() {
  return (
    <div className="flex justify-center py-1">
      <svg width="10" height="14" viewBox="0 0 10 14">
        <path
          d="M5 0v9M2 7l3 4 3-4"
          stroke="rgba(249,115,22,0.55)"
          strokeWidth="1.4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export function InterceptFabricSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">

      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-16 pt-8 pb-14 lg:pt-10 lg:pb-16 justify-center gap-6 lg:gap-8">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-400 text-[10px] sm:text-xs lg:text-sm tracking-[0.4em] uppercase font-bold"
            style={{ fontFamily: font }}
          >
            Appendix — Security
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[32px] sm:text-[46px] lg:text-[62px] xl:text-[74px] leading-[0.95] tracking-tight uppercase mt-2"
            style={{ fontFamily: fontTitle }}
          >
            SEMANTIC INTERCEPT <span className="text-orange-400">FABRIC.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[#fefefe]/50 text-sm sm:text-base lg:text-lg mt-2"
            style={{ fontFamily: font, fontStyle: 'italic' }}
          >
            "the semantic firewall"
          </motion.p>
        </div>

        {/* Main: text left, diagram right — diagram vertically centered next to text */}
        <div className="grid grid-cols-[1.05fr_1fr] gap-8 lg:gap-12 shrink-0 items-center">

          {/* LEFT — description, full available width */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col gap-4 lg:gap-5"
          >
            <p
              className="text-[#fefefe]/80 text-xs sm:text-sm lg:text-base leading-[1.55]"
              style={{ fontFamily: font }}
            >
              Goes beyond <span className="text-orange-400 font-bold">action-based</span> policies to include{' '}
              <span className="text-orange-400 font-bold">content-based</span> semantic security controls — prompt injection, indirect prompt injection, data leakage — with domain-specific ontologies.
            </p>

            <div>
              <p
                className="text-[#fefefe] text-xs sm:text-sm lg:text-base font-bold mb-3 tracking-[0.18em] uppercase"
                style={{ fontFamily: font }}
              >
                A layered model:
              </p>
              <div className="flex flex-col gap-2.5">
                {[
                  { n: '1', name: 'Rule engine', text: 'High-performance pattern matching, candidate identification, rule evaluation. Dynamic rule updates.' },
                  { n: '2', name: 'ML Detection', text: 'Low-latency inference and anomaly detection. Plugin-expandable (ONNX-compatible) model loading.' },
                  { n: '3', name: 'DLP scanning', text: 'For secrets / IP exfiltration — pattern matching plus name-entity recognition.' },
                ].map((item) => (
                  <div key={item.n} className="flex gap-3 items-start">
                    <span
                      className="text-orange-400 text-xs sm:text-sm lg:text-base font-bold shrink-0 mt-px"
                      style={{ fontFamily: font }}
                    >
                      {item.n}.
                    </span>
                    <p
                      className="text-[#fefefe]/70 text-[11px] sm:text-xs lg:text-sm leading-[1.55]"
                      style={{ fontFamily: font }}
                    >
                      <span className="text-[#fefefe] font-bold">{item.name}</span>{' '}
                      — {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <p
              className="text-[#fefefe]/45 text-[10px] sm:text-[11px] lg:text-xs leading-[1.55] mt-1"
              style={{ fontFamily: font }}
            >
              Rust-based implementation with optimised search and rule algos. Targets low-latency classification, depending on context (risk tolerance, industry sector), message type, and depth of content screening required.
            </p>
          </motion.div>

          {/* RIGHT — flow diagram, fills column width naturally */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col items-stretch w-full"
          >
            <Box label="Policy Dashboard" variant="yellow" />
            <ConnectorDown />
            <Box label="Unified Server (HTTP)" sub="normalisation · cleanup · scrubbing" variant="white" />
            <ConnectorDown />

            {/* Three parallel engines */}
            <div className="grid grid-cols-3 gap-2">
              <Box label="Rule Engine" sub="fast matching" variant="white" size="sm" />
              <Box label="ML Detection" sub="anomaly · classify" variant="white" size="sm" />
              <Box label="DLP Scanner" sub="secrets · PII" variant="white" size="sm" />
            </div>
            <ConnectorDown />

            <Box label="Decision Engine" sub="scoring · thresholds" variant="orange" />

            {/* Outcomes — inline pill row below Decision Engine */}
            <div className="flex items-center justify-center gap-2 mt-3">
              <span
                className="px-3 py-1 rounded-md text-[11px] lg:text-xs font-bold tracking-[0.12em]"
                style={{
                  fontFamily: font,
                  color: '#10b981',
                  border: '1px solid rgba(16,185,129,0.45)',
                  background: 'rgba(16,185,129,0.08)',
                }}
              >
                ALLOW
              </span>
              <span
                className="px-3 py-1 rounded-md text-[11px] lg:text-xs font-bold tracking-[0.12em]"
                style={{
                  fontFamily: font,
                  color: '#f87171',
                  border: '1px solid rgba(248,113,113,0.45)',
                  background: 'rgba(248,113,113,0.08)',
                }}
              >
                BLOCK
              </span>
              <span
                className="px-3 py-1 rounded-md text-[11px] lg:text-xs font-bold tracking-[0.12em]"
                style={{
                  fontFamily: font,
                  color: '#eab308',
                  border: '1px solid rgba(234,179,8,0.45)',
                  background: 'rgba(234,179,8,0.08)',
                }}
              >
                FLAG
              </span>
            </div>

            <ConnectorDown />
            <Box label="Unicity Token Audit · Metrics" variant="yellow" />
          </motion.div>

        </div>
      </div>
    </div>
  );
}
