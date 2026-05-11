import { motion } from 'framer-motion';

const team = [
  { name: 'Mike Gault', role: 'CEO', bio: 'PhD Engineering · Founder Guardtime (ADX:IHC) · MD Barclays Capital' },
  { name: 'Tony Kenyon', role: 'Product', bio: 'PhD Machine Learning · Vitruvian · BT · Nokia' },
  { name: 'Alan Radi', role: 'Commercial', bio: 'Zain · Etisalat · Dubai Government' },
];

const proof = [
  { label: 'Founded', value: 'Guardtime — DARPA, NATO, Lockheed, Ericsson, Maersk' },
  { label: 'VC Backed', value: 'Blockchange Capital, Outlier Ventures' },
];

export function SalesAboutSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#0a0a0f] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-10 lg:px-20 py-10 lg:py-14 justify-center gap-7">

        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-[#fefefe] text-[32px] sm:text-[44px] lg:text-[56px] leading-[1.05] tracking-tight shrink-0"
          style={{ fontFamily: "'Anton', sans-serif" }}
        >
          15 YEARS OF{' '}
          <span className="text-orange-400">CRYPTOGRAPHIC INFRASTRUCTURE.</span>
        </motion.h1>

        <div className="grid grid-cols-[420px_1fr] gap-10 lg:gap-14 shrink-0 items-start">

          {/* Left — photo + proofs */}
          <div className="flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="rounded-lg overflow-hidden"
              style={{ border: '1px solid rgba(245,158,11,0.25)' }}
            >
              <img
                src="/award-ceremony.jpg"
                alt="Guardtime award at the World Government Summit"
                className="w-full h-[230px] object-cover"
                style={{ objectPosition: 'center 20%' }}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-[#fefefe]/65 text-sm leading-relaxed"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              <span className="text-orange-400 font-bold">World Government Summit, Dubai.</span>{' '}
              Mike Gault receiving the award for Best Emerging Technology in Government from HH Sheikh Mohammed bin Rashid Al Maktoum.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col gap-2 mt-2"
            >
              {proof.map((p) => (
                <div key={p.label} className="flex items-baseline gap-3">
                  <span
                    className="text-orange-400/80 text-xs uppercase tracking-[0.18em] font-bold w-[68px] shrink-0"
                    style={{ fontFamily: "'Geist Mono', monospace" }}
                  >
                    {p.label}
                  </span>
                  <span
                    className="text-[#fefefe]/80 text-sm font-bold"
                    style={{ fontFamily: "'Geist Mono', monospace" }}
                  >
                    {p.value}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — leadership */}
          <div className="flex flex-col">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-orange-400 text-sm uppercase tracking-[0.25em] font-bold pb-3"
              style={{
                fontFamily: "'Geist Mono', monospace",
                borderBottom: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              Leadership
            </motion.p>

            <div className="flex flex-col">
              {team.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="py-4"
                  style={{
                    borderBottom: i < team.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                  }}
                >
                  <p
                    className="text-orange-400 text-xs uppercase tracking-[0.18em] font-bold"
                    style={{ fontFamily: "'Geist Mono', monospace" }}
                  >
                    {t.role}
                  </p>
                  <p
                    className="text-[#fefefe] text-xl lg:text-2xl font-bold mt-1"
                    style={{ fontFamily: "'Geist Mono', monospace" }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="text-[#fefefe]/70 text-sm lg:text-base leading-relaxed mt-1"
                    style={{ fontFamily: "'Geist Mono', monospace" }}
                  >
                    {t.bio}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
