import { motion } from 'framer-motion';

const mono = { fontFamily: "'Geist Mono', monospace" };
const anton = { fontFamily: "'Anton', sans-serif" };

const monoF = "'Geist Mono', monospace";
const antonF = "'Anton', sans-serif";
const ORANGE = '#f97316';
const GREY = 'rgba(254,254,254,0.5)';

const items = [
  { title: 'SELF-CONTAINED', desc: 'value lives in the object' },
  { title: 'SELF-PROVING', desc: 'carries its own proof' },
  { title: 'PEER-TO-PEER', desc: 'moves with no ledger lookup' },
];

function TokenFlowStrip() {
  return (
    <svg viewBox="0 0 720 150" className="w-full h-auto max-h-[26vh]">
      <defs>
        <marker id="bearerAr" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M2 1L8 5L2 9" fill="none" stroke={ORANGE} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </marker>
      </defs>

      {/* A */}
      <circle cx="60" cy="52" r="38" fill="rgba(249,115,22,0.06)" stroke={ORANGE} strokeWidth="2.5" />
      <text x="60" y="52" textAnchor="middle" dominantBaseline="central" fontFamily={antonF} fontSize="28" fill="#fb923c">A</text>
      {/* B */}
      <circle cx="660" cy="52" r="38" fill="rgba(249,115,22,0.06)" stroke={ORANGE} strokeWidth="2.5" />
      <text x="660" y="52" textAnchor="middle" dominantBaseline="central" fontFamily={antonF} fontSize="28" fill="#fb923c">B</text>

      {/* arrows */}
      <line x1="102" y1="52" x2="296" y2="52" stroke={ORANGE} strokeWidth="2.4" markerEnd="url(#bearerAr)" />
      <line x1="424" y1="52" x2="618" y2="52" stroke={ORANGE} strokeWidth="2.4" markerEnd="url(#bearerAr)" />

      {/* token + proof */}
      <rect x="300" y="22" width="120" height="60" rx="11" fill="#0f0a06" stroke={ORANGE} strokeWidth="2" />
      <line x1="360" y1="32" x2="360" y2="72" stroke={ORANGE} strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
      <text x="330" y="57" textAnchor="middle" fontFamily={antonF} fontSize="15" fill="#ffffff">TOKEN</text>
      <text x="392" y="56" textAnchor="middle" fontFamily={monoF} fontSize="11" fill={ORANGE}>+ PROOF</text>

      {/* B verifies */}
      <text x="716" y="110" textAnchor="end" fontFamily={monoF} fontSize="12" fill={ORANGE}>✓ verifies on arrival</text>
      <text x="716" y="126" textAnchor="end" fontFamily={monoF} fontSize="10" fill={GREY}>no chain to call</text>
    </svg>
  );
}

export function BearerObjectSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-10 sm:py-14 lg:py-16 justify-center gap-8 lg:gap-12">

        {/* Header */}
        <div className="shrink-0">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[38px] sm:text-[60px] lg:text-[80px] leading-[0.95] tracking-tight"
            style={anton}
          >
            TOKENS AS <span className="text-orange-400">BEARER OBJECTS</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-[#fefefe]/75 text-lg sm:text-xl lg:text-2xl mt-3"
            style={mono}
          >
            an asset you <span className="text-orange-400">hold</span>, not a ledger entry the network maintains
          </motion.p>
        </div>

        {/* Three properties */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="shrink-0 grid grid-cols-3 gap-6 lg:gap-12"
        >
          {items.map((item) => (
            <div key={item.title} className="border-l-2 border-orange-500 pl-5 lg:pl-6">
              <h3 className="text-[#fefefe] text-2xl lg:text-3xl leading-none" style={anton}>{item.title}</h3>
              <p className="text-[#fefefe]/55 text-sm lg:text-lg mt-2.5" style={mono}>{item.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* Peer-to-peer token flow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="shrink-0 w-full max-w-5xl mx-auto"
        >
          <TokenFlowStrip />
        </motion.div>

      </div>
    </div>
  );
}
