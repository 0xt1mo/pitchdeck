import { motion } from 'framer-motion';

const mono = "'Geist Mono', monospace";
const display = "'Anton', sans-serif";

// DDN variant of the deployment/SIF diagram — retitled "Product: Agentic Firewall"
// and scaled down from the shared DeploymentModelHtmlSlide.
const caps: { label: string; color: string }[] = [
  { label: 'DLP', color: '255,80,80' },
  { label: 'COST CONTROL', color: '100,180,140' },
  { label: 'INTELLIGENT ROUTING', color: '140,120,200' },
  { label: 'PAYMENTS', color: '249,115,22' },
  { label: 'PROMPT DEFENSE', color: '96,165,250' },
];

export function DdnAgenticFirewallSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-8 lg:py-9 gap-5 lg:gap-7">

        {/* Header */}
        <div className="shrink-0">
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#fefefe] text-[24px] sm:text-[34px] lg:text-[42px] xl:text-[48px] leading-[0.98] tracking-tight uppercase"
            style={{ fontFamily: display }}
          >
            <span className="text-[#fefefe]">Product:</span>{' '}
            <span className="text-orange-400">Agentic Firewall</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-[#fefefe]/80 text-sm lg:text-base leading-[1.5] mt-2.5 max-w-5xl"
            style={{ fontFamily: mono }}
          >
            One semantic gate for every agent — <span className="text-[#fefefe] font-bold">inspect, allow, block or flag</span> before anything leaves your environment.
          </motion.p>
        </div>

        {/* Capability chips */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="shrink-0 flex flex-wrap items-center justify-center gap-2 lg:gap-3"
        >
          {caps.map((c) => (
            <span
              key={c.label}
              className="rounded-full px-3 lg:px-4 py-1 lg:py-1.5 text-[11px] lg:text-sm font-bold tracking-[0.08em] uppercase"
              style={{
                fontFamily: mono,
                color: `rgb(${c.color})`,
                background: `rgba(${c.color},0.07)`,
                border: `1px solid rgba(${c.color},0.35)`,
              }}
            >
              {c.label}
            </span>
          ))}
        </motion.div>

        {/* Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="shrink-0 flex justify-center"
        >
          <div
            className="relative w-full max-w-[860px]"
            style={{ aspectRatio: '1400 / 760', maxHeight: '52vh' }}
          >
            {/* Zone labels */}
            <p
              className="absolute text-[#fefefe]/80 text-xs sm:text-sm lg:text-base tracking-[0.25em] uppercase font-bold text-center"
              style={{ left: '0.6%', top: '0%', width: '50%', fontFamily: mono }}
            >
              Your environment
            </p>
            <p
              className="absolute text-[#fefefe]/55 text-xs sm:text-sm lg:text-base tracking-[0.25em] uppercase font-bold text-center"
              style={{ left: '65%', top: '0%', width: '34%', fontFamily: mono }}
            >
              External world
            </p>

            {/* Enclosures */}
            <div
              className="absolute rounded-[16px]"
              style={{ left: '0.6%', top: '6%', width: '50%', height: '84%', border: '2px solid rgba(255,255,255,0.45)', background: 'rgba(255,255,255,0.012)' }}
            />
            <div
              className="absolute rounded-[16px]"
              style={{ left: '65%', top: '6%', width: '34%', height: '84%', border: '2px dashed rgba(255,255,255,0.32)', background: 'rgba(255,255,255,0.012)' }}
            />

            {/* Internal boxes */}
            <Box left="4%" top="10.8%" width="20.5%" height="8.5%" align="center" title="Frameworks" />
            <Box left="26.5%" top="10.8%" width="20.5%" height="8.5%" align="center" title="Internal LLM" />
            <GateBox left="4%" top="24.1%" width="43%" height="10%" title="Semantic Intercept Fabric" subtitle="One gate · single egress · allow / block / flag" />
            <GateBox left="4%" top="38.9%" width="43%" height="9.5%" title="Agent Registry" subtitle="Cryptographic identity · scoped, revocable" />
            <AOSBox left="4%" top="53.2%" width="43%" height="32%" />

            {/* External boxes */}
            <Box left="74%" top="18.75%" width="23%" height="11%" title="External LLM" />
            <Box left="74%" top="42.5%" width="23%" height="11%" title="Mobile App (hosted)" />
            <Box left="74%" top="66.25%" width="23%" height="11%" title="External agent" />

            {/* SVG arrows */}
            <svg viewBox="0 0 1400 760" preserveAspectRatio="none" className="absolute inset-0 w-full h-full pointer-events-none">
              <defs>
                <marker id="ddnfw-grey" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M0,0 L10,5 L0,10 z" fill="rgba(254,254,254,0.55)" />
                </marker>
                <marker id="ddnfw-orange" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M0,0 L10,5 L0,10 z" fill="#FF6A00" />
                </marker>
              </defs>
              <g stroke="rgba(254,254,254,0.45)" strokeWidth={2}>
                <line x1={210} y1={147} x2={210} y2={183} markerStart="url(#ddnfw-grey)" markerEnd="url(#ddnfw-grey)" />
                <line x1={525} y1={147} x2={525} y2={183} markerStart="url(#ddnfw-grey)" markerEnd="url(#ddnfw-grey)" />
                <line x1={367} y1={259} x2={367} y2={296} markerStart="url(#ddnfw-grey)" markerEnd="url(#ddnfw-grey)" />
                <line x1={367} y1={368} x2={367} y2={404} markerStart="url(#ddnfw-grey)" markerEnd="url(#ddnfw-grey)" />
              </g>
              <g stroke="#FF6A00" strokeWidth={2} fill="none">
                <line x1={665} y1={221} x2={740} y2={221} />
                <line x1={740} y1={184} x2={740} y2={545} />
                <line x1={740} y1={184} x2={1030} y2={184} markerEnd="url(#ddnfw-orange)" />
                <line x1={740} y1={365} x2={1030} y2={365} markerEnd="url(#ddnfw-orange)" />
                <line x1={740} y1={545} x2={1030} y2={545} markerEnd="url(#ddnfw-orange)" />
              </g>
            </svg>

            {/* A2A label */}
            <p
              className="absolute text-[#fefefe]/75 text-[10px] sm:text-xs lg:text-sm tracking-[0.18em] uppercase font-bold text-center leading-[1.2] whitespace-nowrap"
              style={{ left: '57.3%', top: '-4%', transform: 'translateX(-50%)', fontFamily: mono }}
            >
              A2A networking + payments
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function Box({ left, top, width, height, title, subtitle, align = 'left' }: {
  left: string; top: string; width: string; height: string; title: string; subtitle?: string; align?: 'left' | 'center';
}) {
  return (
    <div
      className={`absolute rounded-[10px] flex flex-col justify-center px-3 lg:px-4 ${align === 'center' ? 'items-center text-center' : ''}`}
      style={{ left, top, width, height, background: '#141414', border: '1px solid rgba(255,255,255,0.18)', fontFamily: mono }}
    >
      <p className="text-[#fefefe] text-sm lg:text-base font-bold leading-tight">{title}</p>
      {subtitle && <p className="text-[#fefefe]/65 text-[11px] lg:text-xs mt-0.5 leading-snug">{subtitle}</p>}
    </div>
  );
}

function GateBox({ left, top, width, height, title, subtitle }: {
  left: string; top: string; width: string; height: string; title: string; subtitle?: string;
}) {
  return (
    <div
      className="absolute rounded-[10px] flex flex-col justify-center px-3 lg:px-4"
      style={{ left, top, width, height, background: 'rgba(255,106,0,0.08)', border: '1.5px solid rgba(255,106,0,0.70)', fontFamily: mono }}
    >
      <p className="text-orange-400 text-xs lg:text-base uppercase leading-tight" style={{ fontFamily: display, letterSpacing: '0.01em' }}>{title}</p>
      {subtitle && <p className="text-[#d59a6f] text-[10px] lg:text-xs mt-0.5 leading-snug">{subtitle}</p>}
    </div>
  );
}

function AOSBox({ left, top, width, height }: { left: string; top: string; width: string; height: string }) {
  return (
    <div
      className="absolute rounded-[10px] flex flex-col px-3 lg:px-4 py-2.5"
      style={{ left, top, width, height, background: 'rgba(255,106,0,0.08)', border: '1.5px solid rgba(255,106,0,0.70)', fontFamily: mono }}
    >
      <p className="text-orange-400 text-xs lg:text-base uppercase leading-tight" style={{ fontFamily: display, letterSpacing: '0.01em' }}>AOS · Hosting Environment</p>
      <p className="text-[#d59a6f] text-[10px] lg:text-xs mt-0.5 leading-snug">Enforcement kernel · WASM sandbox · budgets</p>
      <div className="flex-1 flex gap-2 lg:gap-3 mt-2.5 min-h-0">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="flex-1 rounded-[8px] flex items-center justify-center min-h-0"
            style={{ background: 'rgba(255,106,0,0.05)', border: '1px solid rgba(255,106,0,0.35)' }}
          >
            <p className="text-[#e0b893] text-[10px] lg:text-xs font-medium whitespace-nowrap">Agent Sandbox</p>
          </div>
        ))}
      </div>
    </div>
  );
}
