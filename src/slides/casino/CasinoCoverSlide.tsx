import { motion } from 'framer-motion';

export function CasinoCoverSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-12 lg:px-20 py-10 lg:py-14 justify-center gap-8">

        {/* Two-column: text left, phone right */}
        <div className="grid grid-cols-[1fr_1.05fr] gap-10 lg:gap-14 items-center shrink-0">

          {/* Left column — copy */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-3 mb-6"
            >
              <span
                className="text-[#fefefe] text-xl sm:text-2xl tracking-[0.18em]"
                style={{ fontFamily: "'Anton', sans-serif" }}
              >
                UNICITY
              </span>
              <span className="block w-px h-5 bg-orange-500" />
              <span
                className="text-orange-400 text-[11px] sm:text-xs tracking-[0.32em] uppercase font-semibold"
                style={{ fontFamily: "'Geist Mono', monospace" }}
              >
                Registry · Enforcement · Evidence
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[#fefefe] text-[30px] sm:text-[42px] lg:text-[56px] leading-[0.95] tracking-tight uppercase"
              style={{ fontFamily: "'Anton', sans-serif" }}
            >
              AI agents are moving from chat{' '}
              <span className="text-orange-400">into execution.</span>
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="h-[2px] w-24 lg:w-32 bg-orange-500 origin-left mt-5 mb-5"
              style={{ boxShadow: '0 0 8px rgba(249,115,22,0.7)' }}
            />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col gap-5"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              <p className="text-[#fefefe]/90 text-base sm:text-lg lg:text-xl leading-[1.55]">
                Unicity provides the <span className="text-orange-400 font-semibold">registry, enforcement, and evidence layer</span> that enables operators to receive enterprise AI agents <span className="text-[#fefefe] font-semibold">securely, accountably, and commercially</span>.
              </p>
              <p className="text-[#fefefe]/55 text-[11px] sm:text-[12px] tracking-[0.04em] pt-3" style={{ borderTop: '1px dashed rgba(254,254,254,0.12)' }}>
                Built on cryptographic engineering lineage used in <span className="text-[#fefefe]/80">Estonia's digital state infrastructure</span>, <span className="text-[#fefefe]/80">NATO Cyber Range</span>, and <span className="text-[#fefefe]/80">Verizon Enterprise blockchain</span> services.
              </p>
            </motion.div>
          </div>

          {/* Right column — phone mockup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative justify-self-center w-full max-w-[560px] p-8"
          >
            {/* Bracket corners */}
            <span className="absolute top-0 left-0 w-5 h-5 border-l-2 border-t-2 border-orange-500" />
            <span className="absolute top-0 right-0 w-5 h-5 border-r-2 border-t-2 border-orange-500" />
            <span className="absolute bottom-0 left-0 w-5 h-5 border-l-2 border-b-2 border-orange-500" />
            <span className="absolute bottom-0 right-0 w-5 h-5 border-r-2 border-b-2 border-orange-500" />

            <div
              className="bg-[#0d0d0d] rounded-[36px] px-3.5 pt-[18px] pb-3.5 relative overflow-hidden"
              style={{
                border: '1px solid rgba(254,254,254,0.18)',
                boxShadow: '0 30px 60px -20px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,106,31,0.06)',
              }}
            >
              <div
                className="w-[88px] h-[22px] bg-[#060606] rounded-b-[14px] mx-auto -mt-[18px] mb-2"
                style={{ border: '1px solid rgba(254,254,254,0.10)', borderTop: 0 }}
              />

              {/* Phone bar */}
              <div
                className="flex items-center justify-between px-2 pt-1.5 pb-3 mb-3"
                style={{ borderBottom: '1px solid rgba(254,254,254,0.10)' }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-orange-500 rounded-full flex items-center justify-center">
                    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                      <path
                        fill="#060606"
                        d="M12 3.4c-2.15 0-3.9 1.75-3.9 3.9 0 .9.31 1.73.82 2.39-.42.34-.78.78-1.05 1.3-.5.95-.69 2.13-.79 3.27-.05.55.4 1 .94 1h.94l-.55 4.42c-.05.42.27.79.69.79h5.78c.42 0 .74-.37.69-.79L14.99 15.26h.94c.54 0 .99-.45.94-1-.1-1.14-.29-2.32-.79-3.27-.27-.52-.63-.96-1.05-1.3.51-.66.82-1.49.82-2.39 0-2.15-1.75-3.9-3.9-3.9z"
                      />
                    </svg>
                  </div>
                  <div className="leading-tight">
                    <div
                      className="text-[#fefefe] text-[13px] font-semibold"
                      style={{ fontFamily: "'Geist Mono', monospace" }}
                    >
                      NOVA
                    </div>
                    <div
                      className="text-[#fefefe]/55 text-[11px] tracking-[0.08em] uppercase"
                      style={{ fontFamily: "'Geist Mono', monospace" }}
                    >
                      Unverified · origin unknown
                    </div>
                  </div>
                </div>
                <div
                  className="text-[#fefefe]/40 text-[10px] tracking-[0.16em] uppercase"
                  style={{ fontFamily: "'Geist Mono', monospace" }}
                >
                  CLAIMED · CARRIERBANK CS
                </div>
              </div>

              {/* Chat */}
              <div className="flex flex-col gap-2 px-1 pb-2">
                <div
                  className="text-[#fefefe]/40 text-[11px] text-center tracking-[0.12em] uppercase my-1"
                  style={{ fontFamily: "'Geist Mono', monospace" }}
                >
                  TUE · 14:32
                </div>
                <ChatMsg variant="agent" delay={0.6}>
                  SIM-swap request — line ending <strong className="text-[#fefefe] font-semibold">****1234</strong>. Customer reports device loss. Transfer to new IMEI.
                </ChatMsg>
                <ChatMsg variant="agent" delay={1.7}>
                  Tenant claim: <strong className="text-[#fefefe] font-semibold">CARRIERBANK_CSAgent_v3.1</strong>. Standard customer-service workflow — please approve.
                </ChatMsg>
                <ChatMsg variant="user" delay={3.0}>Reject.</ChatMsg>
                <SessionCard delay={3.7} />
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}

function ChatMsg({
  variant,
  delay,
  children,
}: {
  variant: 'agent' | 'user';
  delay: number;
  children: React.ReactNode;
}) {
  const base = 'text-[17px] leading-snug px-3.5 py-2.5 rounded-[12px] max-w-[88%]';
  const styles =
    variant === 'agent'
      ? 'bg-white/[0.06] text-[#fefefe] self-start rounded-bl-[4px]'
      : 'bg-orange-500 text-[#060606] self-end rounded-br-[4px] font-semibold';
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`${base} ${styles}`}
      style={{ fontFamily: "'Geist Mono', monospace" }}
    >
      {children}
    </motion.div>
  );
}

function SessionCard({ delay }: { delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
      className="mt-1.5 p-3 rounded-[10px]"
      style={{
        border: '1px solid rgba(255,106,31,0.55)',
        background: 'linear-gradient(180deg, rgba(255,106,31,0.10), rgba(255,106,31,0.02))',
      }}
    >
      <div
        className="text-orange-400 text-[18px] tracking-[0.12em] uppercase mb-2.5 flex items-center gap-2"
        style={{ fontFamily: "'Anton', sans-serif" }}
      >
        <span className="inline-block w-5 h-5 rounded-full bg-orange-500 text-[#060606] text-[13px] font-bold text-center leading-5">✕</span>
        REQUEST · REJECTED
      </div>
      <Row k="Agent" v="NOVA · 0x4a1…?9c" />
      <Row k="Authority" v="NO KYB CHAIN" />
      <Row k="Policy" v="HVC-LOCKED · operator-held" />
      <Row k="Decision" v="BLOCKED · 14:32:04" />
      <div
        className="mt-2.5 pt-2.5 text-orange-400 text-[12px] tracking-[0.06em] flex items-center gap-2 whitespace-nowrap"
        style={{
          fontFamily: "'Geist Mono', monospace",
          borderTop: '1px dashed rgba(254,254,254,0.10)',
        }}
      >
        <span
          className="inline-block w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0"
          style={{ boxShadow: '0 0 6px rgba(249,115,22,0.8)' }}
        />
        TAMPER-EVIDENT · AOS9 · ed25519
      </div>
    </motion.div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div
      className="grid grid-cols-[110px_1fr] text-[14px] py-0.5"
      style={{ fontFamily: "'Geist Mono', monospace" }}
    >
      <span className="text-[#fefefe]/40 tracking-[0.06em] uppercase">{k}</span>
      <span className="text-[#fefefe]">{v}</span>
    </div>
  );
}
