import { motion } from 'framer-motion';

const mono = { fontFamily: "'Geist Mono', monospace" };
const anton = { fontFamily: "'Anton', sans-serif" };
const monoF = "'Geist Mono', monospace";
const antonF = "'Anton', sans-serif";

const rules = [
  { name: 'RECEIVE PREDICATE', desc: "The token's own condition gates receipt — KYC, jurisdiction, accreditation." },
  { name: 'PROTOCOL-ENFORCED', desc: 'Lives in the asset itself, not an app or custodian. No intermediary to bypass.' },
  { name: 'ISSUER-DEFINED', desc: 'The issuer sets who may hold it once; the rules travel with the token everywhere.' },
];

function ComplianceDiagram() {
  const ORANGE = '#f97316';
  const GREY = 'rgba(254,254,254,0.5)';
  return (
    <svg viewBox="0 0 940 300" className="w-full h-auto max-h-[46vh]">
      <defs>
        <marker id="cmAr" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M2 1L8 5L2 9" fill="none" stroke={ORANGE} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </marker>
        <marker id="cmGrey" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M2 1L8 5L2 9" fill="none" stroke={GREY} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </marker>
      </defs>

      {/* Sender */}
      <rect x="4" y="164" width="128" height="64" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(254,254,254,0.25)" strokeWidth="1.2" />
      <text x="68" y="192" textAnchor="middle" fontFamily={antonF} fontSize="18" fill="#fefefe">SENDER</text>
      <text x="68" y="212" textAnchor="middle" fontFamily={monoF} fontSize="12" fill={GREY}>holds the token</text>

      {/* Sender -> token */}
      <line x1="132" y1="196" x2="288" y2="196" stroke={ORANGE} strokeWidth="1.6" markerEnd="url(#cmAr)" />
      <text x="210" y="186" textAnchor="middle" fontFamily={monoF} fontSize="12" fill={GREY}>sends</text>

      {/* TOKEN card */}
      <rect x="296" y="136" width="212" height="120" rx="14" fill="rgba(249,115,22,0.05)" stroke={ORANGE} strokeWidth="1.7" />
      <text x="402" y="200" textAnchor="middle" fontFamily={antonF} fontSize="24" fill="#fefefe">TOKEN</text>
      <text x="402" y="222" textAnchor="middle" fontFamily={monoF} fontSize="11" fill={GREY}>self-contained bearer asset</text>

      {/* RECEIVE PREDICATE — tag tethered to the token's top-right corner */}
      <line x1="500" y1="136" x2="500" y2="116" stroke={ORANGE} strokeWidth="1.4" />
      <circle cx="500" cy="136" r="2.6" fill={ORANGE} />
      <rect x="430" y="28" width="200" height="88" rx="10" fill="rgba(249,115,22,0.12)" stroke={ORANGE} strokeWidth="1.5" />
      <text x="530" y="52" textAnchor="middle" fontFamily={antonF} fontSize="14" fill={ORANGE}>RECEIVE PREDICATE</text>
      <text x="530" y="76" textAnchor="middle" fontFamily={monoF} fontSize="12" fill="#fefefe">KYC · JURISDICTION</text>
      <text x="530" y="96" textAnchor="middle" fontFamily={monoF} fontSize="12" fill="#fefefe">ACCREDITATION</text>

      {/* Pass branch — recipient satisfies the token's own predicate */}
      <path d="M508 178 L700 134" stroke={ORANGE} strokeWidth="1.6" fill="none" markerEnd="url(#cmAr)" />
      <text x="600" y="128" textAnchor="middle" fontFamily={monoF} fontSize="13" fill={ORANGE}>satisfies predicate ✓</text>
      <rect x="706" y="104" width="224" height="72" rx="10" fill="rgba(249,115,22,0.1)" stroke={ORANGE} strokeWidth="1.4" />
      <text x="818" y="134" textAnchor="middle" fontFamily={antonF} fontSize="18" fill={ORANGE}>VERIFIED HOLDER</text>
      <text x="818" y="158" textAnchor="middle" fontFamily={monoF} fontSize="13" fill="#fefefe">✓ token received</text>

      {/* Fail branch — recipient cannot satisfy it */}
      <path d="M508 216 L700 232" stroke={GREY} strokeWidth="1.5" strokeDasharray="5 4" fill="none" markerEnd="url(#cmGrey)" />
      <text x="600" y="208" textAnchor="middle" fontFamily={monoF} fontSize="13" fill={GREY}>fails predicate ✗</text>
      <rect x="706" y="196" width="224" height="72" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(254,254,254,0.25)" strokeWidth="1.2" strokeDasharray="5 4" />
      <text x="818" y="226" textAnchor="middle" fontFamily={antonF} fontSize="18" fill="rgba(254,254,254,0.6)">UNVERIFIED</text>
      <text x="818" y="250" textAnchor="middle" fontFamily={monoF} fontSize="13" fill={GREY}>✗ transfer rejected</text>
    </svg>
  );
}

export function ComplianceSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-7 sm:py-9 lg:py-10 justify-center gap-5 lg:gap-6">

        {/* Header */}
        <div className="shrink-0">
          <motion.h1
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[30px] sm:text-[42px] lg:text-[56px] leading-[0.95] tracking-tight"
            style={anton}
          >
            <span className="text-orange-400">COMPLIANCE</span> INTEGRATED INTO THE PROTOCOL
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25, duration: 0.6 }}
            className="text-[#fefefe] text-lg sm:text-2xl lg:text-3xl leading-snug mt-2"
            style={anton}
          >
            TOKENS CAN'T BE RECEIVED WITHOUT THE RIGHT CREDENTIALS.
          </motion.p>
        </div>

        {/* Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }}
          className="shrink-0 w-full max-w-6xl mx-auto"
        >
          <ComplianceDiagram />
        </motion.div>

        {/* Compact rules */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.6 }}
          className="shrink-0 grid grid-cols-3 gap-5 lg:gap-8"
        >
          {rules.map((r) => (
            <div key={r.name} className="border-l-2 border-orange-500 pl-4 lg:pl-5">
              <h3 className="text-orange-400 text-base lg:text-2xl leading-none" style={anton}>{r.name}</h3>
              <p className="text-[#fefefe]/65 text-sm lg:text-base leading-snug mt-2" style={mono}>{r.desc}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}
