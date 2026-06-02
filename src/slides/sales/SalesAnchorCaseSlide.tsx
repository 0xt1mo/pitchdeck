import { motion } from 'framer-motion';
import { SlideFrame } from '../../components/SlideFrame';

const fontTitle = "'Anton', sans-serif";
const fontMono = "'Geist Mono', monospace";

/**
 * Anchor-case slide — the team that built sovereign-scale cryptographic
 * infrastructure for Estonia, NATO, NHS and Verizon is the team building
 * Unicity. Four named credibility counters + four named deployments.
 *
 * Source: GitHub repo deck-content.md slide 5 + SalesAboutSlide credibility data.
 */

interface Counter {
  value: string;
  label: string;
  accent: string;
}

const counters: Counter[] = [
  { value: '15+', label: 'Years in production', accent: '#fb923c' },
  { value: '25+', label: 'Sovereign-grade institutions', accent: '#fb923c' },
  { value: '4',   label: 'Continents deployed', accent: '#fb923c' },
  { value: '0',   label: 'Known cryptographic breaches', accent: '#34d399' },
];

interface Deployment {
  who: string;
  region: string;
  what: string;
}

const deployments: Deployment[] = [
  {
    who: 'Estonia · e-Government',
    region: 'Sovereign',
    what: 'Keyless signature infrastructure underwriting national health, judicial and population registries.',
  },
  {
    who: 'NATO · CCDCOE',
    region: 'Defense',
    what: 'Cryptographic integrity for cyber defence operations across NATO member states.',
  },
  {
    who: 'NHS England',
    region: 'Public Health',
    what: 'Tamper-evident audit for sensitive patient record systems at national scale.',
  },
  {
    who: 'Verizon · Maersk · Roche',
    region: 'Enterprise',
    what: 'Cross-border integrity deployments across logistics, telecom, and pharma.',
  },
];

export function SalesAnchorCaseSlide() {
  return (
    <SlideFrame
      title="BUILT FIFTEEN YEARS BEFORE THE MARKET"
      accent="KNEW IT NEEDED IT."
      subtitle={
        <>
          The team that secured the workloads that{' '}
          <span className="text-orange-400 font-bold">cannot afford to fail</span>{' '}
          — sovereign government, defence, public health, regulated finance — is the team building Unicity.
        </>
      }
      bodyGap="gap-5 lg:gap-6"
    >
        {/* Counter strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="grid grid-cols-4 gap-3 lg:gap-4 shrink-0"
        >
          {counters.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.55 + i * 0.1 }}
              className="rounded-md px-5 py-5 lg:py-6 flex flex-col gap-1 items-start"
              style={{
                background: c.accent === '#34d399'
                  ? 'rgba(52,211,153,0.08)'
                  : 'rgba(249,115,22,0.06)',
                border: `1px solid ${c.accent === '#34d399' ? 'rgba(52,211,153,0.32)' : 'rgba(249,115,22,0.30)'}`,
                borderLeft: `3px solid ${c.accent}`,
              }}
            >
              <p
                className="text-[44px] lg:text-[64px] leading-none tracking-tight tabular-nums"
                style={{ color: c.accent, fontFamily: fontTitle }}
              >
                {c.value}
              </p>
              <p
                className="text-[10.5px] lg:text-[12px] uppercase tracking-[0.16em] font-bold"
                style={{ color: 'rgba(254,254,254,0.78)', fontFamily: fontMono }}
              >
                {c.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Guardtime attribution — these are the team's deployments at Guardtime, not Unicity customers */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.95 }}
          className="text-[#fefefe]/45 text-[10px] lg:text-[11px] uppercase tracking-[0.26em] font-bold shrink-0 -mb-2"
          style={{ fontFamily: fontMono }}
        >
          Track record delivered at Guardtime · the team now building Unicity
        </motion.p>

        {/* Named deployments — 4 cards */}
        <div className="grid grid-cols-4 gap-3 lg:gap-4 shrink-0">
          {deployments.map((d, i) => (
            <motion.div
              key={d.who}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 + i * 0.08, duration: 0.45 }}
              className="rounded-md p-4 lg:p-5 flex flex-col gap-2"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.10)',
              }}
            >
              <p
                className="text-orange-400/80 text-[9.5px] lg:text-[10.5px] uppercase tracking-[0.22em] font-bold"
                style={{ fontFamily: fontMono }}
              >
                {d.region}
              </p>
              <p
                className="text-[#fefefe] text-[14px] lg:text-[16px] tracking-tight leading-tight"
                style={{ fontFamily: fontTitle, letterSpacing: '0.04em' }}
              >
                {d.who}
              </p>
              <p
                className="text-[#fefefe]/65 text-[11px] lg:text-[12px] leading-snug pt-2"
                style={{
                  fontFamily: fontMono,
                  borderTop: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                {d.what}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.55 }}
          className="text-[#fefefe]/70 text-sm lg:text-base leading-snug shrink-0"
          style={{ fontFamily: fontMono }}
        >
          Founded by Guardtime (ADX:IHC) leadership. Cryptographers who secured the internet&apos;s most consequential workloads —{' '}
          <span className="text-orange-400 font-bold">now building the layer the agentic internet needs.</span>
        </motion.p>
    </SlideFrame>
  );
}
