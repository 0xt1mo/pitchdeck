import { motion } from 'framer-motion';

const mono = "'Geist Mono', monospace";
const display = "'Anton', sans-serif";

const primitives = [
  { name: 'File', sub: 'bytes on disk', highlight: false },
  { name: 'Process', sub: 'running program', highlight: false },
  { name: 'Socket', sub: 'network endpoint', highlight: false },
  { name: 'Token', sub: 'identity · time · integrity · uniqueness', highlight: true },
];

const proofPoints = [
  { title: 'Self-contained', desc: 'The proof travels with the record — verify locally, no chain in your critical path.' },
  { title: 'Zero data egress', desc: 'The network sees only opaque commitments — never prompts, payloads, or decisions.' },
  { title: 'Proof, not logs', desc: 'Logs can be edited. Tokens are tamper-evident by construction — rewritable by no one, verifiable by anyone.' },
];

export function AosProofSystemSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-8 lg:py-11 gap-5 lg:gap-7">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-400 text-xs lg:text-sm tracking-[0.4em] uppercase font-bold"
            style={{ fontFamily: mono }}
          >
            The foundation
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[30px] sm:text-[46px] lg:text-[62px] xl:text-[72px] leading-[1.0] tracking-tight uppercase mt-2"
            style={{ fontFamily: display }}
          >
            UNICITY PROOF SYSTEM —{' '}
            <span className="text-orange-400">VERIFIABLE EXECUTION.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-[#fefefe]/80 text-base sm:text-lg lg:text-xl leading-snug mt-4 max-w-6xl"
            style={{ fontFamily: mono }}
          >
            <span className="text-[#fefefe] font-bold">Tokens are native data types, not ledger entries.</span> Every agent decision becomes a self-contained token — an object the OS holds, like a file. Each token proves four things:{' '}
            <span className="text-orange-400">who</span> acted, <span className="text-orange-400">when</span>, that the record is{' '}
            <span className="text-orange-400">unaltered</span>, and that it exists <span className="text-orange-400">exactly once</span>. No shared ledger holds your data.
          </motion.p>
        </div>

        {/* OS primitives panel */}
        <motion.div
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.45 }}
          className="shrink-0 rounded-xl px-5 lg:px-7 py-5 lg:py-6"
          style={{ border: '1px solid rgba(249,115,22,0.35)', background: 'rgba(249,115,22,0.04)' }}
        >
          <p className="text-[#fefefe] text-sm lg:text-lg tracking-[0.14em] uppercase font-bold mb-4" style={{ fontFamily: mono }}>
            Operating system
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
            {primitives.map((p) => (
              <div
                key={p.name}
                className="rounded-lg px-4 py-4 text-center"
                style={{
                  border: p.highlight ? '1.5px solid #f97316' : '1px solid #2e2c29',
                  background: p.highlight ? 'rgba(249,115,22,0.10)' : '#141312',
                }}
              >
                <p className="text-lg lg:text-2xl font-bold uppercase" style={{ fontFamily: display, color: p.highlight ? '#f97316' : '#c9c7c1' }}>
                  {p.name}
                </p>
                <p className="text-xs lg:text-sm mt-2 leading-snug" style={{ fontFamily: mono, color: p.highlight ? '#fdba74' : '#6f6d68' }}>
                  {p.sub}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Proof points */}
        <div className="shrink-0 grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-7">
          {proofPoints.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 + i * 0.1, duration: 0.4 }}
              className="pl-4"
              style={{ borderLeft: '2px solid #f97316' }}
            >
              <p className="text-[#fefefe] text-base lg:text-xl font-bold uppercase leading-tight" style={{ fontFamily: mono }}>{p.title}</p>
              <p className="text-[#fefefe]/60 text-sm lg:text-base leading-snug mt-2" style={{ fontFamily: mono }}>{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }}
          className="shrink-0 text-[#6f6d68] text-xs lg:text-sm tracking-[0.14em] uppercase pt-3"
          style={{ fontFamily: mono, borderTop: '1px solid #262421' }}
        >
          Purpose-built attestation infrastructure · only opaque commitments leave your boundary
        </motion.p>

      </div>
    </div>
  );
}
