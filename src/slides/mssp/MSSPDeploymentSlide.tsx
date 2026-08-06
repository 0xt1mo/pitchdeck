import { motion } from 'framer-motion';

const mono = "'Geist Mono', monospace";
const display = "'Anton', sans-serif";
const ORANGE = '#f97316';

// Control plane box (SVG coords)
const CP = { x: 340, y: 20, w: 520, h: 92 };
const CPB = CP.y + CP.h; // bottom edge y
const CPCX = CP.x + CP.w / 2;

const TW = 340;
const TY = 372;
const TH = 236;

const tenants = [
  { name: 'CLIENT A', x: 40, anchor: 470 },
  { name: 'CLIENT B', x: 430, anchor: 600 },
  { name: 'CLIENT C', x: 820, anchor: 730 },
];

export function MSSPDeploymentSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(55% 42% at 50% 0%, rgba(249,115,22,0.10), transparent 70%)' }}
      />

      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-8 lg:py-10 gap-4 lg:gap-6">

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
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[28px] sm:text-[44px] lg:text-[60px] xl:text-[70px] leading-[0.95] tracking-tight uppercase mt-2"
            style={{ fontFamily: display }}
          >
            ONE CONSOLE.{' '}
            <span className="text-orange-400">EVERY CLIENT SEALED APART.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-[#fefefe]/85 text-sm sm:text-base lg:text-xl leading-snug mt-3 max-w-5xl"
            style={{ fontFamily: mono }}
          >
            Enforcement runs inside each client&apos;s boundary. You manage all of them from a single control plane.
          </motion.p>
        </div>

        {/* SVG diagram */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="shrink-0 flex justify-center"
        >
          <svg viewBox="0 0 1200 620" className="w-full h-auto max-h-[54vh]" preserveAspectRatio="xMidYMid meet">
            <defs>
              <marker id="mssp-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                <path d="M0,0 L10,5 L0,10 z" fill={ORANGE} />
              </marker>
              <marker id="mssp-arrow-dim" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                <path d="M0,0 L10,5 L0,10 z" fill="rgba(249,115,22,0.55)" />
              </marker>
              <filter id="mssp-glow" x="-40%" y="-40%" width="180%" height="180%">
                <feGaussianBlur stdDeviation="6" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* ── Connectors (drawn first, behind boxes) ── */}
            {tenants.map((t, i) => {
              const cx = t.x + TW / 2;
              const polDown = `M ${t.anchor - 12},${CPB} C ${t.anchor - 12},220 ${cx - 18},288 ${cx - 18},${TY}`;
              const sigUp = `M ${cx + 18},${TY} C ${cx + 18},288 ${t.anchor + 12},220 ${t.anchor + 12},${CPB}`;
              return (
                <g key={`c-${i}`}>
                  <motion.path
                    d={polDown}
                    fill="none"
                    stroke={ORANGE}
                    strokeWidth={2.5}
                    markerEnd="url(#mssp-arrow)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: 0.5 + i * 0.12, duration: 0.6 }}
                  />
                  <motion.path
                    d={sigUp}
                    fill="none"
                    stroke="rgba(249,115,22,0.5)"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    markerEnd="url(#mssp-arrow-dim)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: 0.6 + i * 0.12, duration: 0.6 }}
                  />
                </g>
              );
            })}

            {/* Connector legend, masked over the middle */}
            <rect x={CPCX - 250} y={276} width={500} height={30} rx={15} fill="#060606" />
            <text x={CPCX - 130} y={296} textAnchor="middle" fontFamily="Geist Mono, monospace" fontSize="14" fill="rgba(254,254,254,0.7)">
              ↓ policy
            </text>
            <text x={CPCX + 96} y={296} textAnchor="middle" fontFamily="Geist Mono, monospace" fontSize="14" fill="rgba(254,254,254,0.7)">
              ↑ signals · never raw data
            </text>

            {/* ── Control plane ── */}
            <g filter="url(#mssp-glow)">
              <rect x={CP.x} y={CP.y} width={CP.w} height={CP.h} rx={16} fill="rgba(249,115,22,0.09)" stroke={ORANGE} strokeWidth={1.8} />
            </g>
            <text x={CPCX} y={CP.y + 44} textAnchor="middle" fontFamily="Anton, sans-serif" fontSize="30" fill={ORANGE} letterSpacing="1">
              MSSP CONTROL PLANE
            </text>
            <text x={CPCX} y={CP.y + 72} textAnchor="middle" fontFamily="Geist Mono, monospace" fontSize="14" fill="rgba(254,254,254,0.72)" letterSpacing="2">
              POLICY · AUDIT · ALERTS — ACROSS EVERY CLIENT
            </text>

            {/* ── Tenants ── */}
            {tenants.map((t) => {
              const cx = t.x + TW / 2;
              const chipW = (TW - 40 - 20) / 3;
              return (
                <g key={t.name}>
                  {/* tenant boundary */}
                  <rect x={t.x} y={TY} width={TW} height={TH} rx={16} fill="rgba(255,255,255,0.014)" stroke="rgba(255,255,255,0.34)" strokeWidth={1.5} strokeDasharray="7 6" />
                  {/* title + sealed tag */}
                  <text x={t.x + 22} y={TY + 34} fontFamily="Geist Mono, monospace" fontSize="16" fontWeight="bold" fill="#fefefe" letterSpacing="2">
                    {t.name}
                  </text>
                  <text x={t.x + TW - 22} y={TY + 34} textAnchor="end" fontFamily="Geist Mono, monospace" fontSize="11" fill="rgba(249,115,22,0.75)" letterSpacing="1.5">
                    ▣ SEALED TENANT
                  </text>
                  {/* AOS enforcement chip */}
                  <rect x={t.x + 20} y={TY + 50} width={TW - 40} height={64} rx={10} fill="rgba(249,115,22,0.09)" stroke="rgba(249,115,22,0.55)" strokeWidth={1.2} />
                  <text x={cx} y={TY + 82} textAnchor="middle" fontFamily="Anton, sans-serif" fontSize="20" fill={ORANGE} letterSpacing="0.5">
                    AOS ENFORCEMENT
                  </text>
                  <text x={cx} y={TY + 102} textAnchor="middle" fontFamily="Geist Mono, monospace" fontSize="11" fill="rgba(254,254,254,0.6)" letterSpacing="1">
                    identity · intercept · audit
                  </text>
                  {/* agent chips */}
                  {[0, 1, 2].map((k) => {
                    const ax = t.x + 20 + k * (chipW + 10);
                    return (
                      <g key={k}>
                        <rect x={ax} y={TY + 130} width={chipW} height={34} rx={7} fill="#0a0a0f" stroke="rgba(255,255,255,0.12)" strokeWidth={1} />
                        <text x={ax + chipW / 2} y={TY + 151} textAnchor="middle" fontFamily="Geist Mono, monospace" fontSize="12" fill="rgba(254,254,254,0.55)">
                          agent
                        </text>
                      </g>
                    );
                  })}
                  {/* data note */}
                  <text x={t.x + 22} y={TY + 198} fontFamily="Geist Mono, monospace" fontSize="12" fill="rgba(254,254,254,0.45)">
                    Data stays inside the boundary.
                  </text>
                </g>
              );
            })}
          </svg>
        </motion.div>

        {/* Payoff */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="shrink-0 text-[#fefefe]/85 text-sm sm:text-base lg:text-xl leading-snug max-w-6xl"
          style={{ fontFamily: mono }}
        >
          Every client isolated. One pane across all of them.{' '}
          <span className="text-orange-400">Their data never leaves their walls — the compliance answer for them and for you.</span>
        </motion.p>

      </div>
    </div>
  );
}
