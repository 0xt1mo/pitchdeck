import { motion } from 'framer-motion';

const items = [
  { name: 'Temporary', today: 'A human is an employee. An app is a service account.', after: 'An agent is instantiated for a single task. Terminated within seconds.' },
  { name: 'Delegated', today: 'A human signs in. An app holds a key.',                after: 'An agent acts on behalf of an institution that may not be present when the action fires.' },
  { name: 'Machine speed', today: 'A human transacts at human cadence.',              after: 'An agent initiates transactions at a volume no human-oriented audit was designed to capture.' },
  { name: 'Cross-system', today: 'An app calls one API.',                              after: 'An agent coordinates across systems, organisations, and jurisdictions.' },
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
            Nº 03 · The New Actor
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[28px] sm:text-[40px] lg:text-[52px] leading-[0.98] tracking-tight mt-3 uppercase"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            Institutions know humans, apps, and vendors.{' '}
            <span className="text-orange-400">Agents are different.</span>
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
            className="mt-4 text-[#fefefe]/85 text-sm lg:text-base leading-relaxed"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            <span className="text-[#fefefe] font-semibold">The questions an institution now needs to answer are new:</span>
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-2 flex flex-wrap gap-x-5 gap-y-1.5"
          >
            {[
              'Which agent acted?',
              'Who authorised it?',
              'What was it permitted to do?',
              'Which policy governed it?',
              'Can the record be verified?',
            ].map((q) => (
              <span
                key={q}
                className="text-orange-400 text-[12px] lg:text-[13px] leading-snug"
                style={{ fontFamily: "'Geist Mono', monospace" }}
              >
                {q}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Two columns: 4-row comparison (left) + composite "missing layer" (right) */}
        <div className="grid grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-stretch shrink-0">

          <div className="flex flex-col">
            <div
              className="grid grid-cols-[0.7fr_1.6fr_60px_1.6fr] items-end gap-4 py-2"
              style={{ borderBottom: '1px dashed rgba(255,255,255,0.18)' }}
            >
              <div />
              <div className="text-[#fefefe]/45 text-[10px] tracking-[0.32em] uppercase font-semibold" style={{ fontFamily: "'Geist Mono', monospace" }}>
                Human · App · Vendor
              </div>
              <div />
              <div className="text-orange-400 text-[10px] tracking-[0.32em] uppercase font-semibold" style={{ fontFamily: "'Geist Mono', monospace" }}>
                Autonomous Agent
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
                  className="text-[#fefefe] text-[12px] lg:text-[13px] leading-snug font-semibold"
                  style={{ fontFamily: "'Geist Mono', monospace" }}
                >
                  {it.after}
                </div>
              </motion.div>
            ))}
          </div>

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
                Existing IAM · Today
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
                Of the new questions answered.
              </div>
            </div>

            <div
              className="pt-5 flex flex-col gap-2"
              style={{ borderTop: '1px solid rgba(255,255,255,0.10)' }}
            >
              {[
                { k: 'IAM', v: 'Built for joiner-mover-leaver.' },
                { k: 'Prompt tools', v: 'Classify what an agent says, not what it did.' },
                { k: 'Vendor logs', v: 'Held by the vendor, not the institution.' },
              ].map((item) => (
                <div key={item.k} className="grid grid-cols-[110px_1fr] gap-3 items-baseline">
                  <span
                    className="text-orange-400 text-[10px] tracking-[0.18em] uppercase font-bold"
                    style={{ fontFamily: "'Geist Mono', monospace" }}
                  >
                    {item.k}
                  </span>
                  <span
                    className="text-[#fefefe]/78 text-[12px] lg:text-[13px] leading-snug"
                    style={{ fontFamily: "'Geist Mono', monospace" }}
                  >
                    {item.v}
                  </span>
                </div>
              ))}
              <p
                className="text-orange-400 text-[12px] lg:text-[13px] leading-snug font-semibold pt-2"
                style={{ fontFamily: "'Geist Mono', monospace" }}
              >
                None is a security layer for an agent that exists only at the moment of action.
              </p>
            </div>
          </motion.div>
        </div>

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
          A new actor needs{' '}
          <span className="text-orange-400">a new security layer.</span>
        </motion.p>
      </div>
    </div>
  );
}
