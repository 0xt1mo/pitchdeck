import { motion } from 'framer-motion';
import splashVideoUrl from '/kling_20260226_VIDEO_Take_Image_1650_0.mp4';
import unicityLogoUrl from '/UnicityLogo.svg';

const thesis = {
  headline: 'The next OS won\'t be built for humans.',
  subline: 'It will be simple, dumb — like the Linux kernel — but configured with AI at the center. NVIDIA and the industry are converging here, using OpenClaw as a first glimpse. But OpenClaw is built on fragile, vibe-coded principles — and the security industry is scrambling to patch it with virus scanners that can be trivially bypassed.',
  bridge: 'Astrid replaces the patchwork.',
};

const impacts = [
  {
    label: 'Sovereign AI Factory',
    need: 'Auditable, jurisdictionally compliant agent execution',
    astrid: 'Chain-linked audit trail with cryptographic signatures — out of the box',
    color: '#f97316',
  },
  {
    label: 'AI Employees',
    need: 'Legal, HR, Finance, Compliance each need scoped permissions per role',
    astrid: 'Capability tokens with cryptographic enforcement — no ACL hacks',
    color: '#a855f7',
  },
  {
    label: 'GPU Scale',
    need: 'NVIDIA partnership means scaling across GPU clusters',
    astrid: 'Kernel / capsule split — the security model doesn\'t change at scale',
    color: '#3b82f6',
  },
  {
    label: '10 Sovereign Sites',
    need: '24-month rollout needs reproducible deployments',
    astrid: 'Same kernel, site-specific capsule configs — security patches ship to all simultaneously',
    color: '#10b981',
  },
];

export function AleriaImpactSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-y-auto">
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <video className="w-full h-full object-cover opacity-20" autoPlay muted loop playsInline src={splashVideoUrl} />
        <div className="absolute inset-0 bg-[#060606]/40" />
      </div>

      <div className="relative z-10 h-full flex flex-col px-6 sm:px-10 lg:px-16 py-6 sm:py-8 lg:py-10">

        {/* Header */}
        <div className="shrink-0 mb-6 lg:mb-8">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-400 text-[10px] sm:text-xs tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Impact for Aleria
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[32px] sm:text-[44px] lg:text-[56px] leading-[0.95] tracking-tight mt-1"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            WHY ASTRID <span className="text-orange-400">MATTERS</span>
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] w-32 sm:w-48 bg-gradient-to-r from-orange-500 to-transparent origin-left mt-2"
          />
        </div>

        {/* Thesis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="shrink-0 mb-8 lg:mb-10 max-w-4xl"
        >
          <p
            className="text-[#fefefe] text-lg sm:text-xl lg:text-2xl font-normal leading-snug mb-3"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            {thesis.headline}
          </p>
          <p
            className="text-[#fefefe]/50 text-[11px] sm:text-xs lg:text-sm leading-relaxed max-w-3xl"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            {thesis.subline}
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-orange-400 text-xs sm:text-sm mt-4 font-medium tracking-wide"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            → {thesis.bridge}
          </motion.p>
        </motion.div>

        {/* Impact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {impacts.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm p-5 lg:p-6"
            >
              {/* Color accent bar */}
              <div className="h-[3px] w-10 rounded-full mb-4" style={{ background: item.color }} />

              {/* Label */}
              <h3
                className="text-[#fefefe] text-base sm:text-lg font-normal mb-3"
                style={{ fontFamily: "'Anton', sans-serif", letterSpacing: '0.02em' }}
              >
                {item.label}
              </h3>

              {/* Need */}
              <div className="mb-4">
                <p
                  className="text-[#fefefe]/25 text-[9px] uppercase tracking-[0.2em] mb-1"
                  style={{ fontFamily: "'Geist Mono', monospace" }}
                >
                  The need
                </p>
                <p
                  className="text-[#fefefe]/60 text-[11px] sm:text-xs leading-relaxed"
                  style={{ fontFamily: "'Geist Mono', monospace" }}
                >
                  {item.need}
                </p>
              </div>

              {/* Astrid delivers */}
              <div className="pt-3 border-t border-white/[0.06]">
                <p
                  className="text-[9px] uppercase tracking-[0.2em] mb-1"
                  style={{ fontFamily: "'Geist Mono', monospace", color: item.color }}
                >
                  Astrid delivers
                </p>
                <p
                  className="text-[#fefefe]/80 text-[11px] sm:text-xs leading-relaxed font-medium"
                  style={{ fontFamily: "'Geist Mono', monospace" }}
                >
                  {item.astrid}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Logo */}
        <div className="shrink-0 mt-4 flex justify-end">
          <img src={unicityLogoUrl} alt="Unicity" className="h-5 opacity-60" />
        </div>

      </div>
    </div>
  );
}
