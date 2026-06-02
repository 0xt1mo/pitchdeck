import { motion } from 'framer-motion';
import { SlideFrame } from '../components/SlideFrame';

const fontTitle = "'Anton', sans-serif";
const fontMono = "'Geist Mono', monospace";
const EASE_OUT = [0.16, 1, 0.3, 1] as const;

/**
 * The horizontal slide — one platform, every regulated vertical.
 *
 * The deck's whole thesis is that a bank and a ministry buy the same runtime
 * for the same reason. This slide proves it on one canvas: enterprise verticals
 * on the left, government verticals on the right, each an agent doing real,
 * consequential work — and the same guarantee underneath every one of them.
 */

interface Vertical {
  name: string;
  action: string;
  guarantee: string;
}

interface Domain {
  label: string;
  tag: string;
  accent: string;
  fill: string;
  border: string;
  verticals: Vertical[];
}

const domains: Domain[] = [
  {
    label: 'ENTERPRISE',
    tag: 'Regulated industry',
    accent: '#fb923c',
    fill: 'rgba(249,115,22,0.07)',
    border: 'rgba(249,115,22,0.42)',
    verticals: [
      {
        name: 'BANKING',
        action: 'Agents approve credit, move funds, and authorise payments.',
        guarantee: 'Every decision attributed and audit-ready — the answer your regulator and your legal team can both stand behind.',
      },
      {
        name: 'HEALTHCARE',
        action: 'Agents read and update patient records to coordinate care.',
        guarantee: 'Access is bounded by policy before the action, never reconstructed from logs after a breach.',
      },
      {
        name: 'LOGISTICS',
        action: 'Agents commit across counterparties, carriers, and borders.',
        guarantee: 'Every cross-jurisdiction commitment is scoped, signed, and replayable end to end.',
      },
    ],
  },
  {
    label: 'GOVERNMENT',
    tag: 'Public sector · sovereign',
    accent: '#60a5fa',
    fill: 'rgba(96,165,250,0.07)',
    border: 'rgba(96,165,250,0.42)',
    verticals: [
      {
        name: 'CUSTOMS',
        action: 'Agents classify declarations and authorise clearances.',
        guarantee: 'A tamper-evident record of every ruling that survives independent review.',
      },
      {
        name: 'PERMITTING',
        action: 'Agents approve, reject, and escalate citizen applications.',
        guarantee: 'An audit trail a tribunal can inspect — decision by decision, with the reasoning attached.',
      },
      {
        name: 'SOVEREIGN AI',
        action: 'Citizen-data agents run on national infrastructure.',
        guarantee: 'Evidence held under the institution’s control, in-region — not a vendor’s cloud.',
      },
    ],
  },
];

export function EntGovUseCasesSlide() {
  return (
    <SlideFrame
      title="ONE PLATFORM."
      accent="EVERY REGULATED VERTICAL."
      subtitle={
        <>
          The same runtime that lets a bank’s agents move money lets a ministry’s agents clear a shipment —{' '}
          <span className="text-orange-400 font-bold">bounded before the action, provable after it.</span>
        </>
      }
      bodyGap="gap-5 lg:gap-6"
    >
      <div className="grid grid-cols-2 gap-5 lg:gap-7 shrink-0">
        {domains.map((d, di) => (
          <motion.div
            key={d.label}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 + di * 0.12, duration: 0.55, ease: EASE_OUT }}
            className="rounded-xl overflow-hidden flex flex-col"
            style={{ background: d.fill, border: `1px solid ${d.border}`, borderTop: `3px solid ${d.accent}` }}
          >
            {/* Domain header */}
            <div
              className="px-5 lg:px-6 pt-4 pb-3 flex items-baseline justify-between"
              style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
            >
              <h3
                className="text-[26px] lg:text-[34px] leading-none tracking-tight"
                style={{ color: d.accent, fontFamily: fontTitle, letterSpacing: '0.03em' }}
              >
                {d.label}
              </h3>
              <p
                className="text-[9.5px] lg:text-[11px] uppercase tracking-[0.24em] font-bold"
                style={{ color: 'rgba(254,254,254,0.5)', fontFamily: fontMono }}
              >
                {d.tag}
              </p>
            </div>

            {/* Verticals */}
            <div className="flex flex-col">
              {d.verticals.map((v, vi) => (
                <motion.div
                  key={v.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + di * 0.12 + vi * 0.09, duration: 0.45, ease: EASE_OUT }}
                  className="px-5 lg:px-6 py-3.5 grid grid-cols-[120px_1fr] gap-4 lg:gap-5 items-start"
                  style={{ borderTop: vi > 0 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}
                >
                  <p
                    className="text-[13px] lg:text-[15px] tracking-tight leading-tight pt-0.5"
                    style={{ color: d.accent, fontFamily: fontTitle, letterSpacing: '0.05em' }}
                  >
                    {v.name}
                  </p>
                  <div className="min-w-0">
                    <p
                      className="text-[#fefefe] text-[12.5px] lg:text-[14px] font-bold leading-snug"
                      style={{ fontFamily: fontMono }}
                    >
                      {v.action}
                    </p>
                    <p
                      className="text-[#fefefe]/65 text-[11px] lg:text-[12.5px] leading-snug mt-1.5 pl-3 relative"
                      style={{ fontFamily: fontMono }}
                    >
                      <span
                        className="absolute left-0 top-[6px] h-[3px] w-[3px] rounded-full"
                        style={{ background: d.accent }}
                      />
                      {v.guarantee}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Unifier strip — the guarantee that does not change */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.15, duration: 0.55, ease: EASE_OUT }}
        className="rounded-md px-5 py-3.5 shrink-0 grid grid-cols-[auto_1fr_auto] items-center gap-5"
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
          One guarantee
        </p>
        <p
          className="text-[#fefefe] text-sm lg:text-base leading-snug"
          style={{ fontFamily: fontMono }}
        >
          Same kernel. Same cryptographic proof. The vertical changes the workflow —{' '}
          <span className="text-emerald-300 font-bold">never the guarantee underneath it.</span>
        </p>
        <p
          className="text-[#fefefe]/40 text-[10px] lg:text-[11px] uppercase tracking-[0.22em] whitespace-nowrap"
          style={{ fontFamily: fontMono }}
        >
          Bank ↔ Ministry · one runtime
        </p>
      </motion.div>
    </SlideFrame>
  );
}
