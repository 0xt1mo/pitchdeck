import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { OrangeSphereBackground } from './OrangeSphereBackground';

const fontTitle = "'Anton', sans-serif";
const fontMono = "'Geist Mono', monospace";

interface SlideFrameProps {
  /** Short uppercase label (Geist Mono) above the title. Optional. */
  eyebrow?: ReactNode;
  /** First, white portion of the title. */
  title: ReactNode;
  /** Second, orange portion of the title. Optional. */
  accent?: ReactNode;
  /** Subtitle / body lede under the title. Optional. */
  subtitle?: ReactNode;
  /** Tailwind max-width class for the subtitle. Defaults to max-w-5xl. */
  subtitleMaxWidth?: string;
  /** Per-slide ambient-glow intensity passed to the background. */
  dim?: number;
  /** Tailwind gap class for the body's internal vertical spacing. */
  bodyGap?: string;
  /** Body content rendered below the header in the centered region. */
  children: ReactNode;
}

/**
 * SlideFrame — single source of truth for slide chrome.
 *
 * Enterprise + Government edition: the root is a self-contained, opaque
 * `fixed inset-0 z-50` slide (matching the rest of this deck and the deck's
 * PDF export path) rather than the sales deck's transparent `absolute inset-0`
 * over an App-level video. The `fixed inset-0 z-50` class triple also opts the
 * slide into the global scroll + bottom-nav-spacer rules in index.css.
 *
 * Locks: container, ambient background, padding, title typography, subtitle
 * typography, and header position. Header is pinned at the top with fixed top
 * padding so it sits at the same Y across every slide. The body fills the
 * remaining height and vertically centers its content.
 */
export function SlideFrame({
  eyebrow,
  title,
  accent,
  subtitle,
  subtitleMaxWidth = 'max-w-5xl',
  dim,
  bodyGap = 'gap-6',
  children,
}: SlideFrameProps) {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <OrangeSphereBackground dim={dim} />
      <div className="relative z-10 h-full flex flex-col px-10 lg:px-16 pt-10 lg:pt-12 pb-10 lg:pb-12">

        {/* Header — locked position at the top of every slide */}
        <div className="shrink-0">
          {eyebrow && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-orange-400 text-[10px] sm:text-xs lg:text-sm tracking-[0.4em] uppercase font-bold mb-2"
              style={{ fontFamily: fontMono }}
            >
              {eyebrow}
            </motion.p>
          )}
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[28px] sm:text-[40px] lg:text-[50px] leading-[1.05] tracking-tight"
            style={{ fontFamily: fontTitle }}
          >
            {title}
            {accent && (
              <>
                {' '}
                <span className="text-orange-400">{accent}</span>
              </>
            )}
          </motion.h1>
          {subtitle && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className={`mt-3 text-[#fefefe]/85 text-base lg:text-lg ${subtitleMaxWidth} leading-relaxed`}
              style={{ fontFamily: fontMono }}
            >
              {subtitle}
            </motion.div>
          )}
        </div>

        {/* Body — fills remaining height, centers its content vertically */}
        <div className={`flex-1 min-h-0 flex flex-col justify-center ${bodyGap} mt-6 lg:mt-8`}>
          {children}
        </div>
      </div>
    </div>
  );
}
