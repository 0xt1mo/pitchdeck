import { motion } from 'framer-motion';

const mono = "'Geist Mono', monospace";
const display = "'Anton', sans-serif";

/**
 * HTML-first deployment diagram with a tiny SVG overlay just for arrows.
 *
 * Layout strategy:
 *   - `.canvas` is a fixed-aspect (1400 × 760) relative container.
 *   - Boxes are absolutely positioned <div>s using % coordinates inside the canvas.
 *   - Text inside boxes is regular HTML text (Tailwind/Geist Mono/Anton).
 *   - Arrows live in a single absolute-positioned <svg> overlay with
 *     viewBox 0 0 1400 760 and preserveAspectRatio="none" so the SVG grid
 *     stretches to match the canvas exactly. Arrow endpoints can be edited
 *     in the SVG coordinate space without touching the box CSS.
 */
export function DeploymentModelHtmlSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">

      {/* Subtle dotted background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '34px 34px',
        }}
      />

      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-16 py-8 lg:py-10 gap-6 lg:gap-8">

        {/* Top spacer — small breathing room from the top edge */}
        <div className="shrink-0" style={{ height: '0' }} />

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-400 text-[10px] sm:text-xs lg:text-sm tracking-[0.4em] uppercase font-bold"
            style={{ fontFamily: mono }}
          >
            Deployment
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[32px] sm:text-[48px] lg:text-[68px] xl:text-[80px] leading-[0.95] tracking-tight uppercase mt-2"
            style={{ fontFamily: display }}
          >
            RUNS INSIDE <span className="text-orange-400">YOUR INFRASTRUCTURE.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-[#fefefe]/85 text-base sm:text-lg lg:text-xl xl:text-2xl leading-relaxed mt-3 lg:mt-5 max-w-5xl"
            style={{
              fontFamily:
                '"Helvetica Neue", Helvetica, Arial, sans-serif',
            }}
          >
            QVAC on the user’s device. Astrid OS in your network.{' '}
            <span className="text-[#fefefe] font-semibold">Agent activity and user data never leave your boundary.</span>
          </motion.p>
        </div>

        {/* Spacer that pushes the diagram down toward the bottom */}
        <div className="flex-1 min-h-0" />

        {/* Canvas — fixed aspect, contains absolutely-positioned boxes + SVG overlay */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="shrink-0 flex justify-center"
        >
          <div
            className="relative w-full max-w-[1180px] max-h-[58vh]"
            style={{ aspectRatio: '1400 / 760' }}
          >

            {/* Zone labels — centered above each enclosure */}
            <p
              className="absolute text-[#fefefe]/80 text-sm sm:text-base lg:text-xl xl:text-2xl tracking-[0.25em] uppercase font-bold text-center"
              style={{ left: '0.6%', top: '0%', width: '50%', fontFamily: mono }}
            >
              Your environment
            </p>
            <p
              className="absolute text-[#fefefe]/55 text-sm sm:text-base lg:text-xl xl:text-2xl tracking-[0.25em] uppercase font-bold text-center"
              style={{ left: '65%', top: '0%', width: '34%', fontFamily: mono }}
            >
              External world
            </p>

            {/* Enclosures — matched heights, content centered vertically */}
            <div
              className="absolute rounded-[18px]"
              style={{
                left: '0.6%', top: '6%', width: '50%', height: '84%',
                border: '2px solid rgba(255,255,255,0.45)',
                background: 'rgba(255,255,255,0.012)',
              }}
            />
            <div
              className="absolute rounded-[18px]"
              style={{
                left: '65%', top: '6%', width: '34%', height: '84%',
                border: '2px dashed rgba(255,255,255,0.32)',
                background: 'rgba(255,255,255,0.012)',
              }}
            />

            {/* ────── Internal boxes — evenly distributed ────── */}
            {/* Layout math (enclosure 6%→90% = 84% inner height):
                  row heights: 8.5 + 10 + 9.5 + 32 = 60%
                  5 gaps: (84 − 60) / 5 = 4.8% each
                  positions: 10.8 · 24.1 · 38.9 · 53.2 */}

            {/* Entry: Frameworks */}
            <Box left="4%" top="10.8%" width="20.5%" height="8.5%" align="center"
              title="Frameworks" />

            {/* Entry: Internal LLM */}
            <Box left="26.5%" top="10.8%" width="20.5%" height="8.5%" align="center"
              title="Internal LLM" />

            {/* Semantic Intercept Fabric (gate) */}
            <GateBox left="4%" top="24.1%" width="43%" height="10%"
              title="Semantic Intercept Fabric"
              subtitle="One gate · single egress · allow / block / flag" />

            {/* Agent Registry (gate) */}
            <GateBox left="4%" top="38.9%" width="43%" height="9.5%"
              title="Agent Registry"
              subtitle="Cryptographic identity · scoped, revocable" />

            {/* AOS hosting environment — taller to contain its sub-boxes */}
            <AOSBox left="4%" top="53.2%" width="43%" height="32%" />

            {/* ────── External boxes — evenly distributed ────── */}
            {/* 3 × 11% boxes, 4 equal gaps of 12.75% across the 84% enclosure */}

            <Box left="74%" top="18.75%" width="23%" height="11%"
              title="External LLM" />

            <Box left="74%" top="42.5%" width="23%" height="11%"
              title="Mobile App (hosted)" />

            <Box left="74%" top="66.25%" width="23%" height="11%"
              title="External agent" />

            {/* ────── SVG OVERLAY — only the connecting arrows ────── */}
            <svg
              viewBox="0 0 1400 760"
              preserveAspectRatio="none"
              className="absolute inset-0 w-full h-full pointer-events-none"
            >
              <defs>
                <marker id="dep-arr-grey" viewBox="0 0 10 10" refX="9" refY="5"
                  markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M0,0 L10,5 L0,10 z" fill="rgba(254,254,254,0.55)" />
                </marker>
                <marker id="dep-arr-orange" viewBox="0 0 10 10" refX="9" refY="5"
                  markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M0,0 L10,5 L0,10 z" fill="#FF6A00" />
                </marker>
              </defs>

              {/* Grey two-way arrows between left-column layers.
                  Y coordinates derived from updated even-distribution layout:
                    Frameworks bottom = 19.3% × 760 = 147
                    SIF top           = 24.1% × 760 = 183
                    SIF bottom        = 34.1% × 760 = 259
                    Registry top      = 38.9% × 760 = 296
                    Registry bottom   = 48.4% × 760 = 368
                    AOS top           = 53.2% × 760 = 404 */}
              <g stroke="rgba(254,254,254,0.45)" strokeWidth={2}>
                {/* Frameworks ↔ SIF */}
                <line x1={210} y1={147} x2={210} y2={183}
                  markerStart="url(#dep-arr-grey)" markerEnd="url(#dep-arr-grey)" />
                {/* Internal LLM ↔ SIF */}
                <line x1={525} y1={147} x2={525} y2={183}
                  markerStart="url(#dep-arr-grey)" markerEnd="url(#dep-arr-grey)" />
                {/* SIF ↔ Registry */}
                <line x1={367} y1={259} x2={367} y2={296}
                  markerStart="url(#dep-arr-grey)" markerEnd="url(#dep-arr-grey)" />
                {/* Registry ↔ AOS */}
                <line x1={367} y1={368} x2={367} y2={404}
                  markerStart="url(#dep-arr-grey)" markerEnd="url(#dep-arr-grey)" />
              </g>

              {/* Orange bracket routing from SIF out to External LLM, Mobile App,
                  and External agent. Bus sits at x=740 (outside the 50% left enclosure).
                  Y positions match each right-side box's vertical center on the
                  760-unit canvas (even-distribution layout):
                    External LLM        top:18.75% + h:11%/2 = 24.25% → y=184
                    Mobile App (hosted) top:42.5%  + h:11%/2 = 48%    → y=365
                    External agent      top:66.25% + h:11%/2 = 71.75% → y=545
                    SIF center y        = 29.1% × 760              → y=221 */}
              <g stroke="#FF6A00" strokeWidth={2} fill="none">
                {/* SIF right edge → vertical bus */}
                <line x1={665} y1={221} x2={740} y2={221} />
                {/* Vertical bus (spans External LLM Y → External agent Y) */}
                <line x1={740} y1={184} x2={740} y2={545} />
                {/* Bus → External LLM (top) — arrow tip lands at box left edge (74% = x=1036) */}
                <line x1={740} y1={184} x2={1030} y2={184} markerEnd="url(#dep-arr-orange)" />
                {/* Bus → Mobile App (hosted) (middle) */}
                <line x1={740} y1={365} x2={1030} y2={365} markerEnd="url(#dep-arr-orange)" />
                {/* Bus → External agent (bottom) */}
                <line x1={740} y1={545} x2={1030} y2={545} markerEnd="url(#dep-arr-orange)" />
              </g>
            </svg>

            {/* A2A label — styled like the zone titles, shifted up so its
                vertical center sits on the same line as the single-line titles */}
            <p
              className="absolute text-[#fefefe]/75 text-xs sm:text-sm lg:text-base xl:text-lg tracking-[0.18em] uppercase font-bold text-center leading-[1.2] whitespace-nowrap"
              style={{
                left: '57.3%',
                top: '-4%',
                transform: 'translateX(-50%)',
                fontFamily: mono,
              }}
            >
              A2A networking + payments
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

/* ───────── Box primitives ───────── */

function Box({
  left, top, width, height, title, subtitle, align = 'left',
}: {
  left: string; top: string; width: string; height: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}) {
  return (
    <div
      className={`absolute rounded-[11px] flex flex-col justify-center px-4 lg:px-6 ${align === 'center' ? 'items-center text-center' : ''}`}
      style={{
        left, top, width, height,
        background: '#141414',
        border: '1px solid rgba(255,255,255,0.18)',
        fontFamily: mono,
      }}
    >
      <p className="text-[#fefefe] text-base sm:text-lg lg:text-xl font-bold leading-tight">
        {title}
      </p>
      {subtitle && (
        <p className="text-[#fefefe]/65 text-xs sm:text-sm lg:text-base mt-1 leading-snug">
          {subtitle}
        </p>
      )}
    </div>
  );
}

function GateBox({
  left, top, width, height, title, subtitle,
}: {
  left: string; top: string; width: string; height: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div
      className="absolute rounded-[11px] flex flex-col justify-center px-4 lg:px-6"
      style={{
        left, top, width, height,
        background: 'rgba(255,106,0,0.08)',
        border: '1.5px solid rgba(255,106,0,0.70)',
        fontFamily: mono,
      }}
    >
      <p
        className="text-orange-400 text-sm sm:text-base lg:text-lg uppercase leading-tight"
        style={{ fontFamily: display, letterSpacing: '0.01em' }}
      >
        {title}
      </p>
      {subtitle && (
        <p className="text-[#d59a6f] text-[10px] sm:text-xs lg:text-sm mt-1 leading-snug">
          {subtitle}
        </p>
      )}
    </div>
  );
}

function AOSBox({
  left, top, width, height,
}: {
  left: string; top: string; width: string; height: string;
}) {
  return (
    <div
      className="absolute rounded-[11px] flex flex-col px-4 lg:px-6 py-3"
      style={{
        left, top, width, height,
        background: 'rgba(255,106,0,0.08)',
        border: '1.5px solid rgba(255,106,0,0.70)',
        fontFamily: mono,
      }}
    >
      <p
        className="text-orange-400 text-sm sm:text-base lg:text-lg uppercase leading-tight"
        style={{ fontFamily: display, letterSpacing: '0.01em' }}
      >
        AOS · Hosting Environment
      </p>
      <p className="text-[#d59a6f] text-[10px] sm:text-xs lg:text-sm mt-1 leading-snug">
        Enforcement kernel · WASM sandbox · budgets
      </p>
      <div className="flex-1 flex gap-3 lg:gap-4 mt-3 min-h-0">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="flex-1 rounded-[9px] flex items-center justify-center min-h-0"
            style={{
              background: 'rgba(255,106,0,0.05)',
              border: '1px solid rgba(255,106,0,0.35)',
            }}
          >
            <p className="text-[#e0b893] text-[10px] sm:text-xs lg:text-sm font-medium whitespace-nowrap">
              Agent Sandbox
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
