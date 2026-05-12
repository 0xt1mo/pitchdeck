import { motion } from 'framer-motion';

const categories = [
  {
    label: 'Defence & Aerospace',
    logos: ['05_nato', '04_darpa', '01_lockheed', '22_boeing', '11_esa', '10_estonia_mod'],
  },
  {
    label: 'Sovereign Government',
    logos: ['23_switzerland', '07_estonia_govt', '08_netherlands', '09_hm_government', '12_sicpa'],
  },
  {
    label: 'Banking & Insurance',
    logos: ['13_bis', '14_seb', '15_kpmg', '24_ey', '18_willis_towers'],
  },
  {
    label: 'Enterprise',
    logos: ['16_maersk', '17_roche', '20_verizon', '21_nhs', '25_scrive'],
  },
];

export function CasinoLogosSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-10 lg:px-20 py-10 lg:py-14 justify-center gap-7">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-orange-400 text-xs sm:text-sm tracking-[0.32em] uppercase font-semibold"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Nº 13 · Deployment Ecosystem
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[32px] sm:text-[44px] lg:text-[56px] leading-[1.05] tracking-tight mt-3 uppercase"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            Built on 15 years of{' '}
            <span className="text-orange-400">sovereign-scale deployments.</span>
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] w-24 lg:w-32 bg-orange-500 origin-left mt-5"
            style={{ boxShadow: '0 0 8px rgba(249,115,22,0.7)' }}
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-4 text-[#fefefe]/70 text-sm lg:text-base leading-relaxed max-w-5xl"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            <span className="text-[#fefefe]/55">Relevant cryptographic lineage and prior team deployment ecosystem.</span> Cryptographic infrastructure deployed across <span className="text-[#fefefe] font-semibold">defence, sovereign government, finance, and supply chain</span> — over fifteen years. The evidentiary properties that infrastructure delivers — tamper-evident, independently verifiable, institution-held — are exactly what the enterprise market now requires.
          </motion.p>
        </div>

        {/* Logo rows */}
        <div className="shrink-0 flex flex-col">
          {categories.map((cat, rowIdx) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + rowIdx * 0.12, duration: 0.5 }}
              className="flex items-center gap-5 lg:gap-7 py-3 lg:py-4"
              style={{
                borderTop: rowIdx > 0 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              }}
            >
              {/* Vertical orange anchor + label */}
              <div className="flex items-center gap-3 w-[170px] lg:w-[220px] shrink-0">
                <div
                  className="w-[2px] h-9 lg:h-11"
                  style={{
                    background: 'rgba(249,115,22,0.85)',
                    boxShadow: '0 0 8px rgba(249,115,22,0.5)',
                  }}
                />
                <p
                  className="text-orange-400 text-[10px] lg:text-xs font-bold uppercase leading-tight"
                  style={{
                    fontFamily: "'Geist Mono', monospace",
                    letterSpacing: '0.12em',
                  }}
                >
                  {cat.label}
                </p>
              </div>

              {/* Logos in flex grid */}
              <div
                className="flex-1 grid items-center gap-3 lg:gap-5"
                style={{
                  gridTemplateColumns: `repeat(${cat.logos.length}, minmax(0, 1fr))`,
                }}
              >
                {cat.logos.map((slug, i) => {
                  const label = slug.replace(/^\d+_/, '').replace(/_/g, ' ').toUpperCase();
                  return (
                    <motion.div
                      key={slug}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 + rowIdx * 0.12 + i * 0.04 }}
                      className="flex items-center justify-center h-10 lg:h-12 relative"
                    >
                      <img
                        src={`/logos/${slug}.png`}
                        alt={label}
                        className="max-h-full max-w-full object-contain"
                        style={{ filter: 'brightness(0) invert(1)', opacity: 0.78 }}
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

        {/* Closing footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="text-[#fefefe]/65 text-[20px] sm:text-[24px] lg:text-[30px] leading-tight tracking-tight uppercase pt-5 shrink-0"
          style={{
            fontFamily: "'Anton', sans-serif",
            borderTop: '1px solid rgba(249,115,22,0.25)',
          }}
        >
          Nation-state procurement. NATO security review. Tier-one deployment.{' '}
          <span className="text-orange-400">The track record under the architecture.</span>
        </motion.p>
      </div>
    </div>
  );
}
