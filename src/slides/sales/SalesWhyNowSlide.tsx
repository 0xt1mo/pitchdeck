import { motion } from 'framer-motion';
import { SlideFrame } from '../../components/SlideFrame';

const fontTitle = "'Anton', sans-serif";
const fontMono = "'Geist Mono', monospace";

/**
 * Why-now / urgency slide.
 *
 * Four nation-state milestones + the "platforms vs audit" speed gap +
 * closer about 2027 evidence requirements. Milestones are framed at the
 * level of public posture (no invented dates / unverifiable specifics) so
 * they survive a buyer's fact-check.
 */

interface Milestone {
  date: string;
  region: string;
  body: string;
  accent: string;
}

const milestones: Milestone[] = [
  {
    date: 'NOV 2025',
    region: 'United States',
    body: 'Directs a national-priority push on federal AI agent deployment.',
    accent: 'rgba(96,165,250,0.85)',
  },
  {
    date: 'MAR 2026',
    region: 'China',
    body: 'Elevates autonomous AI as a national-planning priority.',
    accent: 'rgba(239,68,68,0.85)',
  },
  {
    date: 'APR 2026',
    region: 'United Arab Emirates',
    body: 'Targets autonomous agents across a large share of government services.',
    accent: 'rgba(245,158,11,0.95)',
  },
  {
    date: 'Q2 2026',
    region: 'US Treasury · Federal Reserve',
    body: 'Convenes large-bank leadership on agentic-AI risk.',
    accent: 'rgba(192,132,252,0.85)',
  },
];

export function SalesWhyNowSlide() {
  return (
    <SlideFrame
      title="THE WINDOW IS"
      accent="EIGHTEEN MONTHS."
      subtitle={
        <>
          The platforms are being built at{' '}
          <span className="text-orange-400 font-bold">the speed of nation-states.</span>
        </>
      }
      bodyGap="gap-7"
    >
        {/* Timeline — 4 milestones in a horizontal track */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="shrink-0 relative"
        >
          {/* Horizontal track line */}
          <div
            className="absolute left-0 right-0 top-[42px] h-px"
            style={{
              background:
                'linear-gradient(to right, rgba(255,255,255,0.10) 0%, rgba(249,115,22,0.55) 50%, rgba(255,255,255,0.10) 100%)',
            }}
            aria-hidden="true"
          />
          <div className="grid grid-cols-4 gap-3 lg:gap-4 relative">
            {milestones.map((m, i) => (
              <motion.div
                key={m.date}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 + i * 0.12 }}
                className="flex flex-col items-stretch"
              >
                {/* Date chip */}
                <div
                  className="self-start rounded-md px-3 py-1.5 mb-3"
                  style={{
                    background: `${m.accent.replace('0.85', '0.10').replace('0.95', '0.10')}`,
                    border: `1px solid ${m.accent.replace('0.85', '0.40').replace('0.95', '0.40')}`,
                  }}
                >
                  <p
                    className="text-[10px] lg:text-[11px] uppercase tracking-[0.22em] font-bold"
                    style={{ color: m.accent, fontFamily: fontMono }}
                  >
                    {m.date}
                  </p>
                </div>

                {/* Anchor pin on track */}
                <div className="relative h-3 mb-3">
                  <span
                    className="absolute left-2 top-0 w-2.5 h-2.5 rounded-full"
                    style={{
                      background: m.accent,
                      boxShadow: `0 0 8px ${m.accent}`,
                    }}
                  />
                </div>

                {/* Card */}
                <div
                  className="rounded-md p-4 lg:p-5 flex flex-col gap-2 flex-1"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.10)',
                    borderLeft: `3px solid ${m.accent}`,
                  }}
                >
                  <p
                    className="text-[#fefefe] text-[15px] lg:text-[18px] leading-tight tracking-tight"
                    style={{ fontFamily: fontTitle, color: m.accent }}
                  >
                    {m.region}
                  </p>
                  <p
                    className="text-[#fefefe]/80 text-[11px] lg:text-[13px] leading-snug"
                    style={{ fontFamily: fontMono }}
                  >
                    {m.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Speed-gap pair */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="grid grid-cols-2 gap-4 lg:gap-5 shrink-0"
        >
          <div
            className="rounded-md px-5 py-4 grid grid-cols-[auto_1fr] items-center gap-4"
            style={{
              background: 'rgba(249,115,22,0.08)',
              border: '1px solid rgba(249,115,22,0.35)',
              borderLeft: '3px solid #fb923c',
            }}
          >
            <p
              className="text-orange-400 text-[10px] lg:text-[11px] uppercase tracking-[0.28em] font-bold whitespace-nowrap"
              style={{ fontFamily: fontMono }}
            >
              Platforms
            </p>
            <p
              className="text-[#fefefe] text-sm lg:text-base leading-snug"
              style={{ fontFamily: fontMono }}
            >
              Built at the speed of <span className="text-orange-400 font-bold">nation-states.</span>
            </p>
          </div>
          <div
            className="rounded-md px-5 py-4 grid grid-cols-[auto_1fr] items-center gap-4"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.18)',
              borderLeft: '3px solid rgba(255,255,255,0.45)',
            }}
          >
            <p
              className="text-[10px] lg:text-[11px] uppercase tracking-[0.28em] font-bold whitespace-nowrap"
              style={{ color: 'rgba(255,255,255,0.65)', fontFamily: fontMono }}
            >
              Audit Infra
            </p>
            <p
              className="text-[#fefefe]/85 text-sm lg:text-base leading-snug"
              style={{ fontFamily: fontMono }}
            >
              Built at the speed of <span className="text-[#fefefe] font-bold">vendor procurement.</span>
            </p>
          </div>
        </motion.div>

        {/* Closer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="text-[#fefefe]/85 text-sm lg:text-base leading-snug shrink-0"
          style={{ fontFamily: fontMono }}
        >
          In 2027, your regulator will ask for evidence{' '}
          <span className="text-orange-400 font-bold">
            you should have started collecting in 2026.
          </span>
        </motion.p>
    </SlideFrame>
  );
}
