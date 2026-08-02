import { motion } from 'framer-motion';

const ANTON = "'Anton', sans-serif";
const MONO = "'Geist Mono', monospace";

function Card({
  title,
  sub,
  color,
  emphasize,
  children,
}: {
  title: string;
  sub?: string;
  color: string;
  emphasize?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div
      className="rounded-lg px-3.5 py-2.5 lg:px-4 lg:py-3"
      style={{
        border: `1px solid ${color}`,
        background: emphasize ? `${color}1f` : `${color}12`,
        boxShadow: emphasize ? `0 0 24px ${color}33` : 'none',
      }}
    >
      <p className="text-[#fefefe] text-sm lg:text-lg font-bold leading-tight" style={{ fontFamily: MONO }}>{title}</p>
      {sub && <p className="text-[#fefefe]/55 text-[11px] lg:text-sm leading-snug mt-0.5" style={{ fontFamily: MONO }}>{sub}</p>}
      {children}
    </div>
  );
}

function DownArrow({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-center gap-2 py-1">
      <span className="text-orange-400 text-lg leading-none">↓</span>
      <span className="text-[#fefefe]/50 text-[10px] lg:text-xs uppercase tracking-wide" style={{ fontFamily: MONO }}>{label}</span>
    </div>
  );
}

export function AosFirewallArchSlide() {
  const BLUE = '#3b82f6';
  const ORANGE = '#f97316';
  const PURPLE = '#a855f7';
  const GREEN = '#22c55e';

  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-8 lg:py-10 gap-5 lg:gap-6">

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="shrink-0 text-[#fefefe] text-[24px] sm:text-[34px] lg:text-[46px] leading-[0.98] tracking-tight uppercase"
          style={{ fontFamily: ANTON }}
        >
          How it works: <span className="text-orange-400">enforce locally, govern centrally</span>
        </motion.h1>

        {/* Diagram */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="shrink-0 grid items-center gap-3 lg:gap-4"
          style={{ gridTemplateColumns: '1fr 150px 1fr' }}
        >
          {/* LEFT — Developer Endpoint */}
          <div className="rounded-xl p-3.5 lg:p-4" style={{ border: '1px solid rgba(255,255,255,0.14)', background: 'rgba(255,255,255,0.015)' }}>
            <p className="text-[#fefefe]/80 text-xs lg:text-sm tracking-[0.2em] uppercase font-bold" style={{ fontFamily: MONO }}>Developer Endpoint</p>
            <p className="text-[#fefefe]/40 text-[10px] lg:text-xs mb-2.5" style={{ fontFamily: MONO }}>Workspace / cloud sandbox</p>

            <Card title="IDE & AI Coding Agent" sub="Cursor · Claude Code · Copilot" color={BLUE} />
            <DownArrow label="Action / tool execution attempts" />
            <Card title="Codewall Local Agent" sub="Execution hooks & file-config monitoring" color={ORANGE} emphasize>
              <div className="grid grid-cols-2 gap-2 mt-2.5">
                <div className="rounded-md px-2.5 py-1.5" style={{ border: `1px solid ${ORANGE}55`, background: `${ORANGE}10` }}>
                  <p className="text-[#fefefe] text-[11px] lg:text-sm font-bold leading-tight" style={{ fontFamily: MONO }}>Inline Guardrails</p>
                  <p className="text-[#fefefe]/50 text-[9px] lg:text-xs" style={{ fontFamily: MONO }}>Regex / fast blocks</p>
                </div>
                <div className="rounded-md px-2.5 py-1.5" style={{ border: `1px solid ${ORANGE}55`, background: `${ORANGE}10` }}>
                  <p className="text-[#fefefe] text-[11px] lg:text-sm font-bold leading-tight" style={{ fontFamily: MONO }}>Async Analysis</p>
                  <p className="text-[#fefefe]/50 text-[9px] lg:text-xs" style={{ fontFamily: MONO }}>Advisory sync to central</p>
                </div>
              </div>
            </Card>
            <DownArrow label="Enforced access controls" />
            <Card title="System Resources" sub="MCP servers · Local files · Host CLI" color={PURPLE} />
          </div>

          {/* CENTER — cross links */}
          <div className="flex flex-col items-center justify-center gap-8">
            <div className="text-center">
              <div className="flex items-center gap-1.5">
                <span style={{ color: GREEN }} className="text-lg leading-none">←</span>
                <span className="h-px w-8" style={{ background: GREEN }} />
              </div>
              <p className="text-[#fefefe]/50 text-[9px] lg:text-[11px] uppercase tracking-wide mt-1" style={{ fontFamily: MONO }}>Sync logic<br />updates</p>
            </div>
            <div className="text-center">
              <div className="flex items-center gap-1.5">
                <span className="h-px w-8" style={{ background: BLUE, opacity: 0.7, backgroundImage: `repeating-linear-gradient(90deg, ${BLUE}, ${BLUE} 3px, transparent 3px, transparent 6px)` }} />
                <span style={{ color: BLUE }} className="text-lg leading-none">→</span>
              </div>
              <p className="text-[#fefefe]/50 text-[9px] lg:text-[11px] uppercase tracking-wide mt-1" style={{ fontFamily: MONO }}>Async traffic<br />analysis</p>
            </div>
          </div>

          {/* RIGHT — AOS Central Platform */}
          <div className="rounded-xl p-3.5 lg:p-4 flex flex-col gap-2.5" style={{ border: `1px solid ${GREEN}55`, background: `${GREEN}0c` }}>
            <p className="text-[#fefefe]/80 text-xs lg:text-sm tracking-[0.2em] uppercase font-bold mb-0.5" style={{ fontFamily: MONO }}>AOS Central Platform</p>
            <Card title="Global Policies (MDM / Push)" sub="OWASP rules · custom best practices" color={GREEN} />
            <Card title="Deep AI Threat Analysis" sub="Context validation & intent mismatches" color={GREEN} />
            <Card title="Inventory & Telemetry" sub="Monitors extensions, skills, anomalies" color={GREEN} />
          </div>
        </motion.div>

        {/* BOTTOM — Git / CI hooks */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="shrink-0 rounded-lg px-4 py-3 text-center"
          style={{ border: '1px dashed rgba(255,255,255,0.22)', background: 'rgba(255,255,255,0.02)' }}
        >
          <p className="text-[#fefefe]/85 text-sm lg:text-base font-bold" style={{ fontFamily: MONO }}>
            Git / CI Repository Hooks
            <span className="text-[#fefefe]/45 font-normal"> — validates the Codewall agent is present before allowing commits</span>
          </p>
        </motion.div>

      </div>
    </div>
  );
}
