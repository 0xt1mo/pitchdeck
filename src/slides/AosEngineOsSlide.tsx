import { motion } from 'framer-motion';

const mono = "'Geist Mono', monospace";
const display = "'Anton', sans-serif";

const composed = ['Editions', 'Installers', 'Unicity Audit', 'First-party capsules', 'UI', 'Support'];
const precedents = [
  ['Apple', 'macOS', 'Darwin'],
  ['Google', 'Android', 'Linux kernel'],
  ['Google', 'Chrome', 'V8'],
  ['Docker', 'Docker', 'containerd'],
  ['Unicity', 'Unicity AOS', 'Astrid Runtime'],
];

export function AosEngineOsSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-20 py-9 lg:py-12 gap-6 lg:gap-8">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-400 text-xs sm:text-xs lg:text-lg tracking-[0.4em] uppercase font-bold"
            style={{ fontFamily: mono }}
          >
            Appendix
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[32px] sm:text-[48px] lg:text-[66px] xl:text-[76px] leading-[0.95] tracking-tight uppercase mt-2"
            style={{ fontFamily: display }}
          >
            THE ENGINE AND <span className="text-orange-400">THE OS.</span>
          </motion.h1>
        </div>

        {/* Containment diagram */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="shrink-0 rounded-2xl p-5 lg:p-7 max-w-4xl w-full mx-auto"
          style={{ border: '1.5px solid rgba(249,115,22,0.6)', background: 'rgba(249,115,22,0.05)' }}
        >
          <p className="text-orange-400 text-lg lg:text-2xl uppercase leading-none" style={{ fontFamily: display }}>
            Unicity AOS <span className="text-[#fefefe]/45 text-xs lg:text-lg tracking-[0.16em] normal-case" style={{ fontFamily: mono }}>· the product</span>
          </p>

          {/* composed pieces */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mt-4">
            {composed.map((c) => (
              <div key={c} className="rounded-md py-2 text-center" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.12)' }}>
                <p className="text-[#fefefe]/70 text-xs lg:text-xl" style={{ fontFamily: mono }}>{c}</p>
              </div>
            ))}
          </div>

          {/* engine core */}
          <div className="rounded-lg mt-3 py-4 text-center" style={{ background: 'rgba(0,0,0,0.4)', border: '1px dashed rgba(249,115,22,0.55)' }}>
            <p className="text-[#fefefe] text-base lg:text-2xl uppercase leading-none" style={{ fontFamily: display }}>
              Astrid Runtime
            </p>
            <p className="text-[#fefefe]/50 text-xs lg:text-xl tracking-[0.16em] uppercase mt-1.5" style={{ fontFamily: mono }}>
              the open engine
            </p>
          </div>
        </motion.div>

        {/* Precedents */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="shrink-0 pt-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.10)' }}
        >
          <p className="text-[#fefefe]/40 text-xs lg:text-xl tracking-[0.2em] uppercase mb-2" style={{ fontFamily: mono }}>
            Ships the product, not the engine
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 lg:gap-3">
            {precedents.map(([, product, engine], i) => (
              <div
                key={product + i}
                className="rounded-md px-3 py-2"
                style={{
                  background: i === 4 ? 'rgba(249,115,22,0.08)' : 'rgba(255,255,255,0.02)',
                  border: i === 4 ? '1px solid rgba(249,115,22,0.5)' : '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <p className={`text-xs lg:text-lg font-bold ${i === 4 ? 'text-orange-400' : 'text-[#fefefe]/80'}`} style={{ fontFamily: mono }}>
                  {product}
                </p>
                <p className="text-[#fefefe]/45 text-xs lg:text-xl" style={{ fontFamily: mono }}>on {engine}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
