import { motion } from 'framer-motion';

const models = [
  {
    title: 'CLOUD',
    subtitle: 'Managed Service',
    points: [
      'Zero operational overhead',
      'Multi-tenant with cryptographic isolation',
      'Automatic updates, SLA-backed',
      'Fastest path to production',
    ],
    best: 'Teams that want speed without operational burden.',
  },
  {
    title: 'ON-PREMISE',
    subtitle: 'Your infrastructure',
    points: [
      'Full control of data and environment',
      'Your brand, your billing',
      'We provide runtime and L3 support',
      'Private cloud or bare metal',
    ],
    best: 'Enterprises with data residency or compliance requirements.',
  },
  {
    title: 'AIR-GAPPED',
    subtitle: 'Sovereign deployment',
    points: [
      'Data never leaves the perimeter',
      'Zero external network access',
      'Full isolation',
      'Full offline operation',
    ],
    best: 'Defence, government, regulated industries.',
  },
];

export function SalesDeploymentSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-10 sm:py-14 lg:py-16 justify-center gap-8">

        <div className="shrink-0">
          <motion.h1 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[32px] sm:text-[44px] lg:text-[56px] leading-[1.05] tracking-tight"
            style={{ fontFamily: "'Anton', sans-serif" }}>
            DEPLOY HOW <span className="text-orange-400">YOU NEED IT</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="mt-4 text-[#fefefe]/70 text-lg sm:text-xl max-w-5xl leading-relaxed"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            Same runtime. Same security guarantees. Same APIs. The deployment model changes where it runs — not what it does.
          </motion.p>
        </div>

        <div className="shrink-0">
          <div className="grid grid-cols-3 gap-5 lg:gap-6 w-full">
            {models.map((m, i) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.15, duration: 0.6 }}
                className="rounded-xl overflow-hidden flex flex-col"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <div className="h-[3px] w-full bg-gradient-to-r from-orange-500 to-orange-500/30" />
                <div className="p-6 lg:p-7 flex flex-col">
                  <h2 className="text-orange-400 text-[26px] sm:text-[32px] lg:text-[38px] leading-none tracking-tight"
                    style={{ fontFamily: "'Anton', sans-serif" }}>
                    {m.title}
                  </h2>
                  <p className="text-[#fefefe]/50 text-sm mt-1"
                    style={{ fontFamily: "'Geist Mono', monospace" }}>
                    {m.subtitle}
                  </p>

                  <div className="mt-5 space-y-2.5">
                    {m.points.map((p) => (
                      <div key={p} className="flex gap-2.5">
                        <span className="text-orange-400/50 text-sm mt-0.5">→</span>
                        <p className="text-[#fefefe]/75 text-sm sm:text-base leading-relaxed"
                          style={{ fontFamily: "'Geist Mono', monospace" }}>{p}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 pt-4" style={{ borderTop: '1px solid rgba(249,115,22,0.1)' }}>
                    <p className="text-[#fefefe]/50 text-xs uppercase tracking-wider mb-1"
                      style={{ fontFamily: "'Geist Mono', monospace" }}>Best for</p>
                    <p className="text-[#fefefe]/85 text-sm font-bold leading-relaxed"
                      style={{ fontFamily: "'Geist Mono', monospace" }}>
                      {m.best}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
