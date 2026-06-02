import type { CSSProperties } from 'react';
import { motion } from 'framer-motion';
import { SlideFrame } from '../../components/SlideFrame';

/**
 * Natural pixel aspect ratio (W:H) per logo, measured from the actual PNG.
 * Used to size each cell proportionally — logos get the column width
 * their design actually needs instead of forcing equal cells across the row.
 */
const LOGO_ASPECTS: Record<string, number> = {
  '01_lockheed':      3.56,
  '04_darpa':         1.70,
  '05_nato':          1.84,
  '07_estonia_govt':  2.64,
  '08_netherlands':   2.36,
  '09_hm_government': 2.56,
  '10_estonia_mod':   2.91,
  '11_esa':           1.71,
  '12_sicpa':         1.10,
  '13_bis':           3.18,
  '14_seb':           2.04,
  '15_kpmg':          2.19,
  '16_maersk':        3.65,
  '17_roche':         1.76,
  '18_willis_towers': 11.24,
  '20_verizon':       3.48,
  '21_nhs':           2.37,
  '22_boeing':        4.42,
  '23_switzerland':   0.90,
  '24_ey':            2.05,
  '25_scrive':        5.11,
};

/**
 * Column-weight from aspect ratio — sqrt-compressed so extreme outliers
 * (Willis Towers at 11.24, Switzerland at 0.90) sit within a 3.5× range
 * instead of a 12× one. Wide logos still get wider cells, but the row
 * stays balanced.
 */
function columnWeight(slug: string): number {
  const a = LOGO_ASPECTS[slug] ?? 2;
  return Math.sqrt(a);
}

function gridTemplate(slugs: string[]): string {
  return slugs.map((s) => `${columnWeight(s).toFixed(2)}fr`).join(' ');
}

/**
 * Per-logo size cap. Each PNG ships with different internal padding,
 * so even at the proportional cell width some logos look humongous.
 * Tuned visually one by one.
 *
 * maxH/maxW are fractions of the cell. Lower = smaller logo on screen.
 */
type LogoSizeOverride = { maxH: number; maxW: number };

const LOGO_SIZE_OVERRIDES: Record<string, LogoSizeOverride> = {
  // DEFENSE & AEROSPACE
  '05_nato':          { maxH: 0.82, maxW: 0.85 },
  '04_darpa':         { maxH: 0.88, maxW: 0.88 },
  '01_lockheed':      { maxH: 0.78, maxW: 0.96 },
  '22_boeing':        { maxH: 0.48, maxW: 0.95 },
  '11_esa':           { maxH: 0.92, maxW: 0.92 },
  '10_estonia_mod':   { maxH: 0.82, maxW: 0.88 },

  // SOVEREIGN GOVERNMENT
  '23_switzerland':   { maxH: 0.92, maxW: 0.85 },
  '07_estonia_govt':  { maxH: 0.96, maxW: 0.96 }, // bumped up — was too small
  '08_netherlands':   { maxH: 0.96, maxW: 0.96 }, // bumped up — was too small
  '09_hm_government': { maxH: 0.85, maxW: 0.92 },
  '12_sicpa':         { maxH: 1.00, maxW: 1.00 }, // bumped up — was too small

  // BANKING & INSURANCE
  '13_bis':           { maxH: 0.62, maxW: 0.92 },
  '14_seb':           { maxH: 0.72, maxW: 0.85 },
  '15_kpmg':          { maxH: 0.78, maxW: 0.85 },
  '24_ey':            { maxH: 0.78, maxW: 0.78 },
  '18_willis_towers': { maxH: 0.32, maxW: 0.85 }, // shrunk — was too big

  // ENTERPRISE
  '16_maersk':        { maxH: 0.78, maxW: 0.96 }, // bumped up — was too small
  '17_roche':         { maxH: 0.78, maxW: 0.85 },
  '20_verizon':       { maxH: 0.55, maxW: 0.92 },
  '21_nhs':           { maxH: 0.60, maxW: 0.78 },
  '25_scrive':        { maxH: 0.36, maxW: 0.72 }, // shrunk — was too big
};

function logoSizeStyle(slug: string): CSSProperties {
  const o = LOGO_SIZE_OVERRIDES[slug];
  if (!o) return { maxHeight: '100%', maxWidth: '100%' };
  return { maxHeight: `${o.maxH * 100}%`, maxWidth: `${o.maxW * 100}%` };
}

const categories = [
  {
    label: 'DEFENSE & AEROSPACE',
    logos: [
      '05_nato',
      '04_darpa',
      '01_lockheed',
      '22_boeing',
      '11_esa',
      '10_estonia_mod',
    ],
  },
  {
    label: 'SOVEREIGN GOVERNMENT',
    logos: [
      '23_switzerland',
      '07_estonia_govt',
      '08_netherlands',
      '09_hm_government',
      '12_sicpa',
    ],
  },
  {
    label: 'BANKING & INSURANCE',
    logos: ['13_bis', '14_seb', '15_kpmg', '24_ey', '18_willis_towers'],
  },
  {
    label: 'ENTERPRISE',
    logos: [
      '16_maersk',
      '17_roche',
      '20_verizon',
      '21_nhs',
      '25_scrive',
    ],
  },
];

export function SalesTrackRecordSlide() {
  return (
    <SlideFrame
      eyebrow="Track Record · Sovereign-Grade, In Production"
      title="THE TEAM'S PRIOR WORK."
      accent="FIFTEEN YEARS, SOVEREIGN-GRADE."
      subtitle={
        <>
          The Unicity team built and deployed{' '}
          <span className="text-orange-400 font-bold">KSI cryptographic infrastructure</span>{' '}
          across defence, sovereign government, finance, and supply chain —{' '}
          <span className="text-[#fefefe]/70">now applying the same cryptographic security to autonomous AI.</span>
        </>
      }
      subtitleMaxWidth="max-w-none"
      bodyGap="gap-6 lg:gap-8"
    >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="shrink-0 text-[#fefefe]/45 text-[10px] lg:text-xs uppercase tracking-[0.24em] font-bold -mb-1"
          style={{ fontFamily: "'Geist Mono', monospace" }}
        >
          Prior-work deployments · KSI cryptographic infrastructure, 2010–2024
        </motion.p>

        {/* Logo grid — proportional column widths per row by logo aspect ratio */}
        <div className="shrink-0 flex flex-col">
          {categories.map((cat, rowIdx) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + rowIdx * 0.12, duration: 0.5 }}
              className="flex items-center gap-6 lg:gap-9 py-4 lg:py-6"
              style={{
                borderTop:
                  rowIdx > 0 ? '1px solid rgba(255,255,255,0.07)' : 'none',
              }}
            >
              {/* Vertical orange anchor + label */}
              <div className="flex items-center gap-4 w-[170px] lg:w-[220px] shrink-0">
                <div
                  className="w-[2px] h-12 lg:h-16"
                  style={{ background: 'rgba(249,115,22,0.85)' }}
                />
                <p
                  className="text-orange-400 text-[11px] lg:text-[13px] font-bold uppercase leading-tight"
                  style={{
                    fontFamily: "'Geist Mono', monospace",
                    letterSpacing: '0.14em',
                  }}
                >
                  {cat.label}
                </p>
              </div>

              {/* Logos — proportional columns by aspect ratio */}
              <div
                className="flex-1 grid items-center gap-4 lg:gap-7"
                style={{
                  gridTemplateColumns: gridTemplate(cat.logos),
                }}
              >
                {cat.logos.map((slug, i) => {
                  const label = slug.replace(/^\d+_/, '').replace(/_/g, ' ').toUpperCase();
                  const sizeStyle = logoSizeStyle(slug);
                  return (
                    <motion.div
                      key={slug}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 + rowIdx * 0.12 + i * 0.04 }}
                      className="flex items-center justify-center h-12 lg:h-[72px] relative"
                    >
                      <img
                        src={`/logos/${slug}.png`}
                        alt={label}
                        className="object-contain"
                        style={{
                          ...sizeStyle,
                          filter: 'brightness(0) invert(1)',
                          opacity: 0.88,
                        }}
                        onError={(e) => {
                          const img = e.currentTarget;
                          img.style.display = 'none';
                          const fallback = img.nextElementSibling as HTMLElement | null;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                      <span
                        className="absolute inset-0 hidden items-center justify-center text-[#fefefe]/55 text-[10px] lg:text-xs font-bold tracking-[0.12em] text-center px-1"
                        style={{ fontFamily: "'Geist Mono', monospace" }}
                      >
                        {label}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stat footer — the trust line that makes the cryptography believable */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.05, duration: 0.6 }}
          className="shrink-0 flex flex-wrap items-center gap-x-8 lg:gap-x-12 gap-y-2 pt-5"
          style={{ borderTop: '1px solid rgba(249,115,22,0.25)' }}
        >
          {[
            { n: '15+', l: 'years in production', em: false },
            { n: '25+', l: 'sovereign-grade institutions', em: false },
            { n: '4', l: 'continents deployed', em: false },
            { n: '0', l: 'cryptographic breaches', em: true },
          ].map((s) => (
            <div key={s.l} className="flex items-baseline gap-2.5">
              <span
                className={`${s.em ? 'text-emerald-300 text-[40px] lg:text-[56px]' : 'text-orange-400 text-[28px] lg:text-[38px]'} leading-none tabular-nums`}
                style={{ fontFamily: "'Anton', sans-serif" }}
              >
                {s.n}
              </span>
              <span
                className="text-[#fefefe]/70 text-[11px] lg:text-[13px] uppercase tracking-[0.14em] font-bold"
                style={{ fontFamily: "'Geist Mono', monospace" }}
              >
                {s.l}
              </span>
            </div>
          ))}
        </motion.div>
    </SlideFrame>
  );
}
