import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useState } from 'react';
import { SlideFrame } from '../../components/SlideFrame';

const fontMono = "'Geist Mono', monospace";
const fontTitle = "'Anton', sans-serif";

const bars = [
  {
    label: 'Agentic AI Projects\nCancelled by 2027',
    value: 40,
    width: 40,
    fill: 'rgba(249,115,22,0.55)',
    valueColor: '#fb923c',
    labelColor: '#fb923c',
    labelBold: true,
    annotation: '← SECURITY: A PRIMARY DRIVER',
  },
];

export function SalesPilotPurgatorySlide() {
  return (
    <SlideFrame
      title="THE BIGGEST BLOCKER TO PRODUCTION IS"
      accent="SECURITY."
      subtitle={
        <>
          Gartner forecasts that over 40% of agentic AI projects will be cancelled by 2027.{' '}
          <span className="text-orange-400/80 font-bold">Inadequate security and risk controls are a primary driver — and the one a platform can fix.</span>
        </>
      }
      bodyGap="gap-6 lg:gap-7"
    >
        <div className="flex flex-col gap-5 lg:gap-6 px-4 lg:px-8 shrink-0">
          {bars.map((b, i) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.12 }}
              className="flex items-center gap-5 lg:gap-6"
            >
              <div
                className="w-[180px] lg:w-[220px] text-right text-sm lg:text-base leading-[1.3] shrink-0 whitespace-pre-line"
                style={{
                  color: b.labelColor,
                  fontFamily: fontMono,
                  fontWeight: b.labelBold ? 700 : 400,
                }}
              >
                {b.label}
              </div>
              <div
                className="flex-1 h-12 lg:h-14 rounded relative overflow-visible"
                style={{ background: 'rgba(255,255,255,0.03)' }}
              >
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${b.width}%` }}
                  transition={{ delay: 0.5 + i * 0.12, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full rounded flex items-center justify-end pr-4 text-base lg:text-lg font-bold relative"
                  style={{
                    background: b.fill,
                    color: b.valueColor,
                    fontFamily: fontMono,
                  }}
                >
                  <CountUpInline target={b.value} delay={0.5} suffix="%" />
                  {b.annotation && (
                    <motion.div
                      initial={{ opacity: 0, x: 6 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.7 }}
                      className="absolute -top-6 right-0 text-[11px] lg:text-[12px] uppercase tracking-[0.22em] font-bold whitespace-nowrap"
                      style={{
                        color: '#fb923c',
                        fontFamily: fontMono,
                      }}
                    >
                      {b.annotation}
                    </motion.div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="text-[11px] lg:text-xs pl-[200px] lg:pl-[244px]"
            style={{
              color: 'rgba(255,255,255,0.18)',
              fontFamily: fontMono,
            }}
          >
            Source: Gartner, June 2025 — agentic AI project forecast
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="grid grid-cols-3 gap-3 lg:gap-4 shrink-0"
        >
          {[
            {
              statTarget: 88,
              statSuffix: '%',
              label: 'reported AI agent security incidents',
              accent: 'rgba(248,113,113,0.95)',
              fill: 'rgba(239,68,68,0.10)',
              border: 'rgba(239,68,68,0.40)',
              countDelay: 1.65,
            },
            {
              statTarget: 14,
              statSuffix: '%',
              label: 'agents went live with security approval',
              accent: 'rgba(251,191,36,0.95)',
              fill: 'rgba(245,158,11,0.10)',
              border: 'rgba(245,158,11,0.40)',
              countDelay: 1.8,
            },
            {
              statTarget: 400,
              statPrefix: '$',
              statSuffix: 'B+',
              label: 'agentic AI market by 2034',
              accent: 'rgba(251,146,60,0.95)',
              fill: 'rgba(249,115,22,0.10)',
              border: 'rgba(249,115,22,0.40)',
              countDelay: 1.95,
            },
          ].map((s, idx) => (
            <div
              key={idx}
              className="rounded-md px-5 py-4 grid grid-cols-[auto_1fr] items-center gap-4"
              style={{
                background: s.fill,
                border: `1px solid ${s.border}`,
                borderLeft: `3px solid ${s.accent}`,
              }}
            >
              <CountUpStat
                target={s.statTarget}
                prefix={s.statPrefix}
                suffix={s.statSuffix}
                color={s.accent}
                delay={s.countDelay}
              />
              <p
                className="text-[11px] lg:text-[12.5px] leading-snug uppercase tracking-[0.06em]"
                style={{ color: 'rgba(254,254,254,0.85)', fontFamily: fontMono }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7 }}
          className="text-[10px] lg:text-[11px] uppercase tracking-[0.22em] shrink-0"
          style={{ color: 'rgba(255,255,255,0.30)', fontFamily: fontMono }}
        >
          Industry analyst composite — Gartner research, security vendor surveys, market projections. Full citations available on request.
        </motion.p>
    </SlideFrame>
  );
}

/** Counts a number up from 0 to target, inline (small variant — used inside the bar). */
function CountUpInline({
  target,
  delay,
  suffix = '',
}: {
  target: number;
  delay: number;
  suffix?: string;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const unsub = rounded.on('change', (v) => setDisplay(v));
    const controls = animate(count, target, {
      duration: 1.1,
      delay: delay + 0.2,
      ease: [0.16, 1, 0.3, 1],
    });
    return () => {
      unsub();
      controls.stop();
    };
  }, [target, delay, count, rounded]);

  return (
    <span className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

/** Count-up for the larger stat-tile numbers (Anton display). */
function CountUpStat({
  target,
  prefix = '',
  suffix = '',
  color,
  delay,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  color: string;
  delay: number;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const unsub = rounded.on('change', (v) => setDisplay(v));
    const controls = animate(count, target, {
      duration: 1.2,
      delay,
      ease: [0.16, 1, 0.3, 1],
    });
    return () => {
      unsub();
      controls.stop();
    };
  }, [target, delay, count, rounded]);

  return (
    <p
      className="text-[40px] lg:text-[52px] leading-none tracking-tight tabular-nums"
      style={{ color, fontFamily: fontTitle }}
    >
      {prefix}
      {display}
      {suffix}
    </p>
  );
}
