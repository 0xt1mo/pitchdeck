import { motion } from 'framer-motion';

type Tier = {
  tier: string;
  name: string;
  price: string;
  unit: string;
  bullets: string[];
  flagship?: boolean;
};

const tiers: Tier[] = [
  {
    tier: 'TIER 1',
    name: 'COMMUNITY',
    price: '$0',
    unit: 'forever free',
    bullets: ['Open source AOS kernel', 'Self-hosted', 'Basic policy engine', 'Community support'],
  },
  {
    tier: 'TIER 2',
    name: 'TEAM',
    price: '$99',
    unit: 'per agent / month',
    bullets: ['Hosted runtime', 'Basic SIF policies', 'Audit logs', 'Email support'],
  },
  {
    tier: 'TIER 3',
    name: 'ENTERPRISE',
    price: '$250',
    unit: 'per agent / month',
    bullets: ['Full SIF + custom policies', 'SSO, RBAC, SLA', 'Compliance reports', 'Dedicated success'],
    flagship: true,
  },
  {
    tier: 'TIER 4',
    name: 'SOVEREIGN',
    price: 'Custom',
    unit: 'government & regulated',
    bullets: ['On-prem / air-gapped', 'Custom compliance', 'Sovereign deployment'],
  },
];

export function BusinessModelPricingSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-16 py-6 sm:py-8 lg:py-10 justify-center gap-5 lg:gap-6">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-orange-400 text-xs sm:text-sm lg:text-base tracking-[0.4em] uppercase font-bold shrink-0"
          style={{ fontFamily: "'Geist Mono', monospace" }}
        >
          Business Model
        </motion.p>

        {/* Headline + subtitle */}
        <div className="shrink-0 flex flex-col gap-3 -mt-1">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[32px] sm:text-[48px] lg:text-[64px] xl:text-[72px] leading-[0.95] tracking-tight uppercase"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            <span className="text-[#fefefe]">OPEN CORE.</span>{' '}
            <span className="text-orange-400">PER AGENT PRICING.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-[#fefefe]/85 text-sm sm:text-base lg:text-lg leading-snug max-w-6xl"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Open source kernel drives developer adoption. Enterprise features and managed runtime drive revenue.{' '}
            <span className="text-orange-400">Pricing aligned to how CISOs budget: per agent, per month.</span>
          </motion.p>
        </div>

        {/* 4-tier grid */}
        <div className="grid grid-cols-4 gap-3 lg:gap-4 shrink-0">
          {tiers.map((t, i) => (
            <motion.div
              key={t.tier}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.08, duration: 0.5 }}
              className="relative rounded-lg p-4 lg:p-5 flex flex-col"
              style={{
                background: t.flagship ? 'rgba(249,115,22,0.05)' : 'rgba(255,255,255,0.02)',
                border: t.flagship ? '2px solid rgba(249,115,22,0.85)' : '1px solid rgba(255,255,255,0.10)',
              }}
            >
              {t.flagship && (
                <span
                  className="absolute -top-2 left-4 text-[#060606] text-[10px] lg:text-xs tracking-[0.15em] uppercase font-bold px-2 py-0.5 rounded"
                  style={{
                    background: '#f97316',
                    fontFamily: "'Geist Mono', monospace",
                  }}
                >
                  Flagship
                </span>
              )}
              <p
                className={`text-[10px] sm:text-xs lg:text-sm tracking-[0.2em] uppercase font-bold ${t.flagship ? 'text-orange-400' : 'text-[#fefefe]/55'}`}
                style={{ fontFamily: "'Geist Mono', monospace" }}
              >
                {t.tier}
              </p>
              <h3
                className="text-[#fefefe] text-[20px] sm:text-[24px] lg:text-[28px] leading-none tracking-tight uppercase mt-2 lg:mt-3"
                style={{ fontFamily: "'Anton', sans-serif" }}
              >
                {t.name}
              </h3>
              <p
                className={`text-[28px] sm:text-[36px] lg:text-[44px] leading-none tracking-tight mt-4 ${t.flagship ? 'text-orange-400' : 'text-[#fefefe]'}`}
                style={{ fontFamily: "'Anton', sans-serif" }}
              >
                {t.price}
              </p>
              <p
                className="text-[#fefefe]/55 text-xs lg:text-sm mt-1"
                style={{ fontFamily: "'Geist Mono', monospace" }}
              >
                {t.unit}
              </p>
              <ul
                className="flex flex-col gap-1.5 mt-4 lg:mt-5 pt-3 lg:pt-4"
                style={{
                  borderTop: t.flagship ? '1px solid rgba(249,115,22,0.30)' : '1px solid rgba(255,255,255,0.10)',
                }}
              >
                {t.bullets.map((b) => (
                  <li
                    key={b}
                    className="text-[#fefefe]/85 text-[11px] sm:text-xs lg:text-sm leading-snug flex items-start gap-2"
                    style={{ fontFamily: "'Geist Mono', monospace" }}
                  >
                    <span className="text-orange-400/70 shrink-0">→</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
