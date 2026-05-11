import { motion } from 'framer-motion';

const items = [
  { name: 'Identity', today: 'Which subscriber logged in?',       after: 'Which agent acted?' },
  { name: 'Authority', today: 'Which device connected?',           after: 'Who authorised it?' },
  { name: 'Policy',   today: 'Which application called the API?', after: 'Which policy governed it?' },
  { name: 'Evidence', today: 'Can we identify the user?',          after: 'Can we prove it to a regulator?' },
];

export function CasinoCostSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-12 lg:px-20 py-10 lg:py-14 justify-center gap-7">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-orange-400 text-xs sm:text-sm tracking-[0.32em] uppercase font-semibold"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Nº 02 · The Gap
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[28px] sm:text-[40px] lg:text-[52px] leading-[0.98] tracking-tight mt-3 uppercase"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            Current infrastructure was designed to answer{' '}
            <span className="text-orange-400">different questions.</span>
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
            className="mt-4 text-[#fefefe]/75 text-sm lg:text-base leading-relaxed max-w-5xl"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            A telco today can reliably answer: <span className="text-[#fefefe] font-semibold">which subscriber logged in, which device connected, which application called the API.</span> Agentic AI creates a different set of questions — and none of the infrastructure built for human-initiated transactions produces answers at operator standard.
          </motion.p>
        </div>

        {/* Two columns: 4-row question comparison (left) + composite "0" (right) */}
        <div className="grid grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-stretch shrink-0">

          {/* Left — 4 row comparison */}
          <div className="flex flex-col">
            <div
              className="grid grid-cols-[0.7fr_1.6fr_60px_1.6fr] items-end gap-4 py-2"
              style={{ borderBottom: '1px dashed rgba(255,255,255,0.18)' }}
            >
              <div />
              <div className="text-[#fefefe]/45 text-[10px] tracking-[0.32em] uppercase font-semibold" style={{ fontFamily: "'Geist Mono', monospace" }}>
                Today
              </div>
              <div />
              <div className="text-orange-400 text-[10px] tracking-[0.32em] uppercase font-semibold" style={{ fontFamily: "'Geist Mono', monospace" }}>
                For Agents
              </div>
            </div>
            {items.map((it, i) => (
              <motion.div
                key={it.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                className="grid grid-cols-[0.7fr_1.6fr_60px_1.6fr] items-center gap-4 py-3 lg:py-4"
                style={{
                  borderTop: '1px solid rgba(255,255,255,0.10)',
                  ...(i === items.length - 1
                    ? { borderBottom: '1px solid rgba(255,255,255,0.10)' }
                    : {}),
                }}
              >
                <div
                  className="text-[#fefefe] text-[15px] sm:text-[17px] lg:text-[19px] tracking-[0.04em] uppercase leading-tight"
                  style={{ fontFamily: "'Anton', sans-serif" }}
                >
                  {it.name}
                </div>
                <div
                  className="text-[#fefefe]/55 text-[12px] lg:text-[13px] leading-snug"
                  style={{ fontFamily: "'Geist Mono', monospace" }}
                >
                  {it.today}
                </div>
                <div
                  className="text-[#fefefe]/30 text-center text-base lg:text-lg"
                  style={{ fontFamily: "'Geist Mono', monospace" }}
                >
                  →
                </div>
                <div
                  className="text-[#fefefe] text-[13px] lg:text-[14px] leading-snug font-semibold"
                  style={{ fontFamily: "'Geist Mono', monospace" }}
                >
                  {it.after}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right — composite "0" */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col justify-center gap-7 lg:gap-8 pl-8 lg:pl-10"
            style={{ borderLeft: '1px solid rgba(255,255,255,0.10)' }}
          >
            <div className="flex flex-col gap-1">
              <div
                className="text-[#fefefe]/40 text-[11px] lg:text-[13px] tracking-[0.32em] uppercase font-semibold"
                style={{ fontFamily: "'Geist Mono', monospace" }}
              >
                Operator-Grade Answers · Today
              </div>
              <h3
                className="text-orange-400 text-[120px] sm:text-[160px] lg:text-[200px] leading-[0.88] tracking-[-0.005em] uppercase"
                style={{ fontFamily: "'Anton', sans-serif" }}
              >
                0
              </h3>
              <div
                className="text-[#fefefe] text-[20px] sm:text-[24px] lg:text-[28px] leading-tight tracking-[0.04em] uppercase"
                style={{ fontFamily: "'Anton', sans-serif" }}
              >
                Of the new questions.
              </div>
            </div>

            <p
              className="text-[#fefefe]/78 text-sm lg:text-base leading-[1.6] pt-5"
              style={{
                fontFamily: "'Geist Mono', monospace",
                borderTop: '1px solid rgba(255,255,255,0.10)',
              }}
            >
              Traditional IAM was built for human lifecycles. Prompt-layer security tools classify what an agent says — not what it did. Vendor-managed logs are held by the vendor.{' '}
              <span className="text-orange-400 font-semibold">An operator presenting a vendor's log as evidence is depending on the vendor to defend its own record.</span>
            </p>
          </motion.div>
        </div>

        {/* Closing footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="text-[#fefefe]/65 text-[22px] sm:text-[26px] lg:text-[32px] leading-tight tracking-tight uppercase pt-5 shrink-0"
          style={{
            fontFamily: "'Anton', sans-serif",
            borderTop: '1px solid rgba(249,115,22,0.25)',
          }}
        >
          The network was built for one set of questions.{' '}
          <span className="text-orange-400">Agentic AI is asking another.</span>
        </motion.p>
      </div>
    </div>
  );
}
