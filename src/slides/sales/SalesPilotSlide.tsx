import { motion } from 'framer-motion';
import { SlideFrame } from '../../components/SlideFrame';

const fontTitle = "'Anton', sans-serif";
const fontMono = "'Geist Mono', monospace";

/**
 * Pilot 30/60/90 — three phases from kickoff to production.
 *
 * Slot 14 of the enterprise + government B-spine. Each phase carries
 * a fixed day range, buyer commitment, our commitment, and an
 * operator-readable success criterion. Bottom strip lists the
 * sovereign / classified add-ons available on request.
 */

interface Phase {
  badge: string;
  days: string;
  title: string;
  intent: string;
  buyer: string[];
  unicity: string[];
  exit: string;
  accent: string;
  fill: string;
  border: string;
}

const phases: Phase[] = [
  {
    badge: 'PHASE 01',
    days: 'DAY 1–30',
    title: 'LAND',
    intent: 'Stand up Unicity on one priority workflow inside your perimeter.',
    buyer: [
      'One workflow + named SME',
      'SIEM / IAM / ticketing endpoints',
      'Sandbox environment access',
    ],
    unicity: [
      'Two solution engineers, on-site optional',
      'Reference architecture + threat model',
      'Unicity AOS deployed in your VPC / tenant',
    ],
    exit: 'First agent action signed, intercepted, and logged with a tamper-evident audit record.',
    accent: 'rgba(96,165,250,0.95)',
    fill: 'rgba(96,165,250,0.08)',
    border: 'rgba(96,165,250,0.40)',
  },
  {
    badge: 'PHASE 02',
    days: 'DAY 31–60',
    title: 'VALIDATE',
    intent: 'Run agents under SIF on real workloads. Map evidence to your regulators.',
    buyer: [
      'Compliance / audit liaison engaged',
      'Two additional workflows enrolled',
      'Red-team exercise window',
    ],
    unicity: [
      'Regulatory evidence pack (DORA / NIST AI RMF / EU AI Act)',
      'Policy library tuned to your control framework',
      'Live SOC integration + 24/5 escalation',
    ],
    exit: 'Audit-ready evidence pack delivered. Red-team report signed off by your CISO.',
    accent: 'rgba(245,158,11,0.95)',
    fill: 'rgba(245,158,11,0.08)',
    border: 'rgba(245,158,11,0.42)',
  },
  {
    badge: 'PHASE 03',
    days: 'DAY 61–90',
    title: 'OPERATE',
    intent: 'Production cutover. Hand the keys to your SecOps and platform teams.',
    buyer: [
      'Production change-window approved',
      'Operating-model owner named',
      'Annual contract terms reviewed',
    ],
    unicity: [
      'Runbooks, RBAC, and DR posture signed off',
      'Sovereign deployment options enabled (on-prem / air-gap)',
      'Executive review with success metrics',
    ],
    exit: 'Three production workflows live. Audit trail flowing to your SIEM. Renewal proposal on the table.',
    accent: 'rgba(52,211,153,0.95)',
    fill: 'rgba(52,211,153,0.08)',
    border: 'rgba(52,211,153,0.42)',
  },
];

const govAddons = [
  { code: 'AIR-GAP',       note: 'Disconnected install, signed offline updates' },
  { code: 'CLASSIFIED',    note: 'Cleared engineers, segregated keys, NDA + SCIF-ready' },
  { code: 'ATO-ACCEL',     note: 'NIST 800-53 control mapping, FedRAMP-equivalent docs' },
  { code: 'IN-REGION',     note: 'EU / GCC / UK sovereign hosting, no cross-border egress' },
];

export function SalesPilotSlide() {
  return (
    <SlideFrame
      title="THIRTY DAYS TO LAND."
      accent="NINETY DAYS TO PRODUCTION."
      subtitle={
        <>
          A fixed-scope, fixed-price pilot path. Three phases, named deliverables,
          {' '}
          <span className="text-orange-400 font-bold">
            audit-ready evidence at every gate.
          </span>
        </>
      }
      bodyGap="gap-5 lg:gap-6"
    >
      {/* Three-phase grid */}
      <div className="grid grid-cols-3 gap-4 lg:gap-5 shrink-0">
        {phases.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 + i * 0.12, duration: 0.55 }}
            className="rounded-lg flex flex-col"
            style={{
              background: p.fill,
              border: `1px solid ${p.border}`,
              borderTop: `3px solid ${p.accent}`,
            }}
          >
            {/* Header — phase tag + day range */}
            <div
              className="px-5 pt-4 pb-3 flex items-baseline justify-between"
              style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
            >
              <p
                className="text-[10px] lg:text-[10.5px] uppercase tracking-[0.32em] font-bold"
                style={{ color: p.accent, fontFamily: fontMono }}
              >
                {p.badge}
              </p>
              <p
                className="text-[#fefefe]/55 text-[9.5px] lg:text-[10.5px] uppercase tracking-[0.22em] font-bold"
                style={{ fontFamily: fontMono }}
              >
                {p.days}
              </p>
            </div>

            {/* Title + intent */}
            <div className="px-5 pt-4 pb-3 flex flex-col gap-2">
              <p
                className="text-[#fefefe] text-[26px] lg:text-[34px] leading-none tracking-tight"
                style={{ fontFamily: fontTitle, letterSpacing: '0.04em' }}
              >
                {p.title}
              </p>
              <p
                className="text-[#fefefe]/85 text-[12px] lg:text-[13px] leading-snug"
                style={{ fontFamily: fontMono }}
              >
                {p.intent}
              </p>
            </div>

            {/* Buyer commitment */}
            <div className="px-5 pt-3 pb-3" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              <p
                className="text-[#fefefe]/45 text-[9px] lg:text-[10px] uppercase tracking-[0.28em] font-bold mb-2"
                style={{ fontFamily: fontMono }}
              >
                You bring
              </p>
              <ul className="flex flex-col gap-1.5">
                {p.buyer.map((b) => (
                  <li
                    key={b}
                    className="text-[#fefefe]/85 text-[11px] lg:text-[12px] leading-snug pl-3 relative"
                    style={{ fontFamily: fontMono }}
                  >
                    <span
                      className="absolute left-0 top-[7px] h-[3px] w-[3px] rounded-full"
                      style={{ background: 'rgba(255,255,255,0.45)' }}
                    />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Unicity commitment */}
            <div className="px-5 pt-3 pb-3" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              <p
                className="text-orange-400/85 text-[9px] lg:text-[10px] uppercase tracking-[0.28em] font-bold mb-2"
                style={{ fontFamily: fontMono }}
              >
                We bring
              </p>
              <ul className="flex flex-col gap-1.5">
                {p.unicity.map((u) => (
                  <li
                    key={u}
                    className="text-[#fefefe]/90 text-[11px] lg:text-[12px] leading-snug pl-3 relative"
                    style={{ fontFamily: fontMono }}
                  >
                    <span
                      className="absolute left-0 top-[7px] h-[3px] w-[3px] rounded-full"
                      style={{ background: '#fb923c' }}
                    />
                    {u}
                  </li>
                ))}
              </ul>
            </div>

            {/* Exit criterion */}
            <div
              className="px-5 py-3 mt-auto"
              style={{
                borderTop: `1px solid ${p.border}`,
                background: 'rgba(255,255,255,0.02)',
              }}
            >
              <p
                className="text-[9px] lg:text-[10px] uppercase tracking-[0.28em] font-bold mb-1.5"
                style={{ color: p.accent, fontFamily: fontMono }}
              >
                Exit criterion
              </p>
              <p
                className="text-[#fefefe] text-[11.5px] lg:text-[12.5px] leading-snug font-bold"
                style={{ fontFamily: fontMono }}
              >
                {p.exit}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Government add-ons strip */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.95, duration: 0.5 }}
        className="rounded-md grid grid-cols-[auto_1fr] gap-5 items-center px-5 py-4 shrink-0"
        style={{
          background: 'rgba(52,211,153,0.05)',
          border: '1px solid rgba(52,211,153,0.28)',
          borderLeft: '3px solid #34d399',
        }}
      >
        <p
          className="text-emerald-300 text-[10px] lg:text-[11px] uppercase tracking-[0.28em] font-bold whitespace-nowrap"
          style={{ fontFamily: fontMono }}
        >
          Sovereign + classified, on request
        </p>
        <div className="grid grid-cols-4 gap-3">
          {govAddons.map((g) => (
            <div key={g.code} className="flex flex-col gap-0.5 min-w-0">
              <p
                className="text-emerald-300/95 text-[10.5px] lg:text-[12px] uppercase tracking-[0.18em] font-bold"
                style={{ fontFamily: fontMono }}
              >
                {g.code}
              </p>
              <p
                className="text-[#fefefe]/75 text-[10px] lg:text-[11px] leading-snug"
                style={{ fontFamily: fontMono }}
              >
                {g.note}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </SlideFrame>
  );
}
