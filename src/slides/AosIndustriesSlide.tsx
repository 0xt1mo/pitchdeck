import { motion } from 'framer-motion';

const mono = "'Geist Mono', monospace";
const display = "'Anton', sans-serif";

type Industry = { name: string; why: string; engagement: string; active: boolean; href?: string };

// NOTE: `engagement` strings are placeholders — replace with real, anonymized
// descriptors (e.g. "European telecom operator", "top-10 investment bank").
// Set `active: false` for any sector that is a target, not a live engagement.
const industries: Industry[] = [
  {
    name: 'Telecom',
    why: 'Every subscriber gets a personal agent — massive-scale, multi-tenant agent hosting for operators.',
    engagement: 'unicity.ai/industry/telecom',
    active: true,
    href: 'https://www.unicity.ai/industry/telecom',
  },
  {
    name: 'Financial Services',
    why: 'When an agent moves money, an auditor needs proof — not a log.',
    engagement: 'Quant × Unicity partnership',
    active: true,
    href: 'https://www.unicity.ai/blog/quant-unicity-partnership-aos-ai-agents',
  },
  {
    name: 'Healthcare',
    why: 'Agents near PHI and clinical decisions — provably in-bounds, HIPAA-auditable, nothing leaks.',
    engagement: 'unicity.ai/industry/healthcare',
    active: true,
    href: 'https://www.unicity.ai/industry/healthcare',
  },
  {
    name: 'Defense',
    why: 'Air-gapped, clearance-scoped autonomy — with cryptographic proof of what every agent did.',
    engagement: '',
    active: true,
  },
];

export function AosIndustriesSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-8 lg:py-11 gap-6 lg:gap-8">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-400 text-xs sm:text-sm lg:text-base tracking-[0.4em] uppercase font-bold"
            style={{ fontFamily: mono }}
          >
            Who this is for
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[32px] sm:text-[50px] lg:text-[68px] xl:text-[78px] leading-[0.95] tracking-tight uppercase mt-2"
            style={{ fontFamily: display }}
          >
            WHERE “PROBABLY FINE” <span className="text-orange-400">ISN'T GOOD ENOUGH.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-[#fefefe]/75 text-base sm:text-lg lg:text-xl leading-snug mt-3 max-w-6xl"
            style={{ fontFamily: mono }}
          >
            The sectors where ungoverned autonomy is least acceptable — regulated, audited, and high-consequence.
          </motion.p>
        </div>

        {/* 2×2 industries */}
        <div className="shrink-0 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.09, duration: 0.45 }}
              className="rounded-xl px-6 py-5 lg:py-6 flex flex-col"
              style={{ border: '1px solid rgba(249,115,22,0.30)', background: 'rgba(249,115,22,0.035)', borderLeft: '3px solid #f97316' }}
            >
              <div className="flex items-baseline justify-between gap-3">
                <p className="text-[#fefefe] text-2xl lg:text-3xl uppercase leading-none" style={{ fontFamily: display }}>{ind.name}</p>
                {ind.active && (
                  <span className="shrink-0 text-xs lg:text-sm tracking-[0.14em] uppercase whitespace-nowrap" style={{ fontFamily: mono, color: '#4ade80' }}>
                    ● Active
                  </span>
                )}
              </div>
              <p className="text-[#fefefe]/75 text-sm lg:text-lg leading-snug mt-3" style={{ fontFamily: mono }}>{ind.why}</p>
              {ind.href ? (
                <a
                  href={ind.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 text-xs lg:text-sm leading-snug mt-3 inline-flex items-center gap-1.5 hover:underline"
                  style={{ fontFamily: mono }}
                >
                  {ind.engagement} <span>↗</span>
                </a>
              ) : ind.engagement ? (
                <p className="text-orange-400/80 text-xs lg:text-sm leading-snug mt-3" style={{ fontFamily: mono }}>{ind.engagement}</p>
              ) : null}
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
