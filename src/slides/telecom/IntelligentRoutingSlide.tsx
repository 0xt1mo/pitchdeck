import { motion } from 'framer-motion';

const criteria = [
  { n: '01', name: 'Complexity' },
  { n: '02', name: 'Cost' },
  { n: '03', name: 'Latency' },
  { n: '04', name: 'Security clearance' },
];

const models = [
  {
    name: 'HIGH-CAPABILITY MODEL',
    state: 'SELECTED',
    body: 'Complex reasoning, cleared context.',
    selected: true,
  },
  {
    name: 'LIGHTWEIGHT MODEL',
    state: 'STANDBY',
    body: 'Low-cost path for simple tasks.',
    selected: false,
  },
  {
    name: 'SPECIALIST CAPSULE',
    state: 'STANDBY',
    body: 'Sandboxed, clearance-scoped execution.',
    selected: false,
  },
];

const properties = [
  {
    name: 'CAPABILITY-MATCHED',
    body: 'Heavy work reaches strong models; trivial work never pays for them.',
  },
  {
    name: 'CLEARANCE-AWARE',
    body: 'Sensitive context is only ever routed to a target authorised to receive it.',
  },
  {
    name: 'RECORDED',
    body: 'The routing choice is an inspected event — every decision is explainable after the fact.',
  },
];

export function IntelligentRoutingSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-16 py-6 sm:py-8 lg:py-10 justify-center gap-5 lg:gap-6">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-orange-400 text-xs sm:text-sm lg:text-base tracking-[0.4em] uppercase font-bold flex items-center gap-3"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            <span className="inline-block w-6 h-[2px] bg-orange-500" />
            Capability · Orchestrating the Agent Mesh
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[32px] sm:text-[48px] lg:text-[68px] xl:text-[80px] leading-[0.95] tracking-tight uppercase mt-2"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            <span className="text-[#fefefe]">COST OPTIMIZATION:</span>{' '}
            <span className="text-orange-400">INTELLIGENT ROUTING.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-[#fefefe]/85 text-sm sm:text-base lg:text-lg leading-snug mt-3 max-w-6xl"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Every agent request is scored before it runs and directed to the right model — by task complexity, cost, latency, and security clearance.{' '}
            <span className="text-[#fefefe]/65">The routing decision is itself an inspected, recorded event, so traffic is matched to capability without ever escaping the security boundary.</span>
          </motion.p>
        </div>

        {/* Diagram — request → routing → models */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="grid grid-cols-[1fr_auto_1.4fr_auto_1.2fr] items-center gap-3 lg:gap-4 shrink-0"
        >
          {/* Agent request */}
          <div
            className="rounded-lg p-4 lg:p-5"
            style={{
              background: 'rgba(249,115,22,0.05)',
              border: '1px solid rgba(249,115,22,0.55)',
            }}
          >
            <p
              className="text-orange-400 text-base sm:text-lg lg:text-xl tracking-tight uppercase font-bold text-center"
              style={{ fontFamily: "'Anton', sans-serif", letterSpacing: '0.04em' }}
            >
              AGENT REQUEST
            </p>
            <p
              className="text-[#fefefe]/80 text-xs sm:text-sm lg:text-base leading-snug text-center mt-2"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              Task, context, and required clearance presented to the routing layer.
            </p>
          </div>

          {/* Arrow */}
          <span className="text-orange-400 text-xl lg:text-2xl font-bold">→</span>

          {/* Routing decision — 4 criteria */}
          <div
            className="rounded-lg p-4 lg:p-5"
            style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.18)',
            }}
          >
            <p
              className="text-[#fefefe] text-base sm:text-lg lg:text-xl tracking-tight uppercase font-bold text-center mb-3"
              style={{ fontFamily: "'Anton', sans-serif", letterSpacing: '0.04em' }}
            >
              ROUTING DECISION
            </p>
            <div className="grid grid-cols-2 gap-2 lg:gap-3">
              {criteria.map((c) => (
                <div
                  key={c.n}
                  className="rounded p-2 lg:p-2.5"
                  style={{
                    background: '#0a0a0f',
                    border: '1px solid rgba(255,255,255,0.10)',
                  }}
                >
                  <p
                    className="text-[#fefefe]/45 text-[10px] lg:text-xs tracking-[0.2em] uppercase"
                    style={{ fontFamily: "'Geist Mono', monospace" }}
                  >
                    Criterion {c.n}
                  </p>
                  <p
                    className="text-[#fefefe] text-sm lg:text-base font-bold mt-0.5"
                    style={{ fontFamily: "'Geist Mono', monospace" }}
                  >
                    {c.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Arrow */}
          <span className="text-orange-400 text-xl lg:text-2xl font-bold">→</span>

          {/* Models */}
          <div className="flex flex-col gap-2 lg:gap-2.5">
            {models.map((m) => (
              <div
                key={m.name}
                className="rounded-lg p-3 lg:p-4"
                style={{
                  background: m.selected ? 'rgba(249,115,22,0.06)' : 'rgba(255,255,255,0.025)',
                  border: m.selected ? '1px solid rgba(249,115,22,0.65)' : '1px solid rgba(255,255,255,0.12)',
                }}
              >
                <div className="flex items-center justify-between gap-3">
                  <p
                    className={`text-sm sm:text-base lg:text-lg font-bold ${m.selected ? 'text-orange-400' : 'text-[#fefefe]'}`}
                    style={{ fontFamily: "'Geist Mono', monospace" }}
                  >
                    {m.name}
                  </p>
                  <p
                    className={`text-[10px] lg:text-xs tracking-[0.2em] uppercase font-bold ${m.selected ? 'text-orange-400' : 'text-[#fefefe]/50'}`}
                    style={{ fontFamily: "'Geist Mono', monospace" }}
                  >
                    {m.state}
                  </p>
                </div>
                <p
                  className={`text-xs lg:text-sm leading-snug mt-1 ${m.selected ? 'text-[#fefefe]/85' : 'text-[#fefefe]/55'}`}
                  style={{ fontFamily: "'Geist Mono', monospace" }}
                >
                  {m.body}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom property strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="grid grid-cols-3 gap-6 lg:gap-10 shrink-0 pt-4 lg:pt-5"
          style={{ borderTop: '1px solid rgba(255,255,255,0.10)' }}
        >
          {properties.map((p) => (
            <div key={p.name} className="flex items-start gap-2 lg:gap-3">
              <span className="inline-block w-4 h-[2px] bg-orange-500 mt-2 shrink-0" />
              <div>
                <p
                  className="text-[#fefefe] text-sm sm:text-base lg:text-lg tracking-[0.04em] uppercase font-bold"
                  style={{ fontFamily: "'Geist Mono', monospace" }}
                >
                  {p.name}
                </p>
                <p
                  className="text-[#fefefe]/70 text-xs sm:text-sm lg:text-base leading-snug mt-1"
                  style={{ fontFamily: "'Geist Mono', monospace" }}
                >
                  {p.body}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}
