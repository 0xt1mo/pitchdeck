import { motion } from 'framer-motion';
import { SlideFrame } from '../../components/SlideFrame';

const fontTitle = "'Anton', sans-serif";
const fontMono = "'Geist Mono', monospace";

/**
 * Regulatory map slide — what Unicity discharges for which regime.
 *
 * Source: GitHub repo deck-content.md slide 7 (Built for the Audit).
 * Six regulatory regimes a CISO actually has to answer to, each mapped
 * to a specific Unicity capability that produces the evidence required.
 */

interface Reg {
  code: string;
  region: string;
  domain: string;
  capability: string;
}

const regs: Reg[] = [
  {
    code: 'DORA',
    region: 'EU',
    domain: 'Operational Resilience',
    capability: 'Cryptographic audit chain per agent action.',
  },
  {
    code: 'EU AI ACT',
    region: 'EU',
    domain: 'High-Risk AI Traceability',
    capability: 'Identity-attributed logs, immutable trail.',
  },
  {
    code: 'NIST AI RMF',
    region: 'US Federal',
    domain: 'AI Risk Management',
    capability: 'Runtime enforcement at every stage — govern, map, measure, manage.',
  },
  {
    code: 'FCA AI LIVE TESTING',
    region: 'UK',
    domain: 'Financial Services',
    capability: 'Sandbox-to-production with identical APIs.',
  },
  {
    code: 'CBUAE · SAMA',
    region: 'GCC',
    domain: 'Sovereign Banking',
    capability: 'Air-gapped deployment, in-region operation.',
  },
  {
    code: 'GDPR · CCPA',
    region: 'Global',
    domain: 'Data Protection',
    capability: 'Only cryptographic commitments touch the proof layer. Personal data stays in your systems — and is erased there.',
  },
];

export function SalesRegulatoryMapSlide() {
  return (
    <SlideFrame
      title="BUILT FOR THE AUDIT,"
      accent="NOT JUST THE DEPLOYMENT."
      subtitle={
        <>
          Every regulatory regime that touches autonomous systems —{' '}
          <span className="text-orange-400 font-bold">mapped to runtime enforcement.</span>
        </>
      }
      bodyGap="gap-6"
    >
        {/* Regulation grid — 3 cols × 2 rows */}
        <div className="grid grid-cols-3 gap-3 lg:gap-4 shrink-0">
          {regs.map((r, i) => (
            <motion.div
              key={r.code}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.08, duration: 0.45 }}
              className="rounded-md p-4 lg:p-5 flex flex-col gap-2"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.10)',
                borderLeft: '3px solid rgba(249,115,22,0.85)',
              }}
            >
              <div className="flex items-baseline justify-between gap-2">
                <p
                  className="text-orange-400 text-[14px] lg:text-[18px] tracking-tight leading-none"
                  style={{ fontFamily: fontTitle, letterSpacing: '0.06em' }}
                >
                  {r.code}
                </p>
                <p
                  className="text-[#fefefe]/45 text-[9px] lg:text-[10px] uppercase tracking-[0.22em] font-bold"
                  style={{ fontFamily: fontMono }}
                >
                  {r.region}
                </p>
              </div>
              <p
                className="text-[#fefefe]/70 text-[10.5px] lg:text-[11.5px] uppercase tracking-[0.14em] font-bold"
                style={{ fontFamily: fontMono }}
              >
                {r.domain}
              </p>
              <p
                className="text-[#fefefe]/85 text-[11.5px] lg:text-[13px] leading-snug pt-2"
                style={{
                  fontFamily: fontMono,
                  borderTop: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                {r.capability}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footer punchline */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="rounded-md px-5 py-4 shrink-0 grid grid-cols-[auto_1fr] items-center gap-5"
          style={{
            background: 'rgba(52,211,153,0.06)',
            border: '1px solid rgba(52,211,153,0.30)',
            borderLeft: '3px solid #34d399',
          }}
        >
          <p
            className="text-emerald-300 text-[10px] lg:text-[11px] uppercase tracking-[0.28em] font-bold whitespace-nowrap"
            style={{ fontFamily: fontMono }}
          >
            The evidence
          </p>
          <p
            className="text-[#fefefe] text-sm lg:text-base leading-snug"
            style={{ fontFamily: fontMono }}
          >
            Every agent action produces a tamper-evident record.{' '}
            <span className="text-emerald-300 font-bold">Every record is audit-ready.</span>{' '}
            Your CISO no longer has to choose between deploying agents and being able to defend them.
          </p>
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-[#fefefe]/35 text-[10px] lg:text-[11px] tracking-[0.06em] shrink-0"
          style={{ fontFamily: fontMono }}
        >
          Capability mapping — Unicity produces the evidence each regime requires. Not a certification or regulatory-approval claim.
        </motion.p>
    </SlideFrame>
  );
}
