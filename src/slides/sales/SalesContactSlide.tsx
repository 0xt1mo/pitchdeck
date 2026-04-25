import { motion } from 'framer-motion';

export function SalesContactSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#0a0a0f] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-10 lg:px-20 py-12 lg:py-16 justify-center gap-7">

        <div className="shrink-0">
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[32px] sm:text-[44px] lg:text-[56px] leading-[1.05] tracking-tight"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            SEE IT <span className="text-orange-400">IN ACTION.</span>
          </motion.h1>
        </div>

        <div className="grid grid-cols-[1fr_440px] gap-10 lg:gap-14 shrink-0 items-stretch">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col justify-center gap-6"
          >
            <div
              className="rounded-lg p-6 lg:p-7"
              style={{
                background: 'rgba(245,158,11,0.08)',
                border: '1px solid rgba(245,158,11,0.30)',
              }}
            >
              <p
                className="text-orange-400 text-xl lg:text-2xl font-bold mb-2"
                style={{ fontFamily: "'Geist Mono', monospace" }}
              >
                Book a Live Demo
              </p>
              <p
                className="text-[#fefefe]/80 text-sm lg:text-base leading-relaxed"
                style={{ fontFamily: "'Geist Mono', monospace" }}
              >
                Move to production with security, safety and verifiability.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                  style={{
                    background: 'rgba(245,158,11,0.10)',
                    border: '1px solid rgba(245,158,11,0.30)',
                  }}
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="rgba(245,158,11,0.9)">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <a
                  href="mailto:info@unicity.ai"
                  className="text-orange-400 text-base lg:text-lg font-bold"
                  style={{ fontFamily: "'Geist Mono', monospace" }}
                >
                  info@unicity.ai
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                  style={{
                    background: 'rgba(245,158,11,0.10)',
                    border: '1px solid rgba(245,158,11,0.30)',
                  }}
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="rgba(245,158,11,0.9)">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                  </svg>
                </div>
                <a
                  href="https://unicity.ai"
                  className="text-orange-400 text-base lg:text-lg font-bold"
                  style={{ fontFamily: "'Geist Mono', monospace" }}
                >
                  unicity.ai
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                  style={{
                    background: 'rgba(245,158,11,0.10)',
                    border: '1px solid rgba(245,158,11,0.30)',
                  }}
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="rgba(245,158,11,0.9)">
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                  </svg>
                </div>
                <a
                  href="tel:+971508843756"
                  className="text-orange-400 text-base lg:text-lg font-bold"
                  style={{ fontFamily: "'Geist Mono', monospace" }}
                >
                  +971 50 884 3756
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col gap-3"
          >
            <div
              className="rounded-lg overflow-hidden h-[300px]"
              style={{ border: '1px solid rgba(255,255,255,0.10)' }}
            >
              <iframe
                title="Unicity Labs Abu Dhabi"
                src="https://maps.google.com/maps?q=Al+Montazah+Tower+B+Khalidiyah+Abu+Dhabi+UAE&z=16&output=embed"
                className="w-full h-full"
                style={{
                  border: 0,
                  filter:
                    'invert(90%) hue-rotate(180deg) saturate(0.3) brightness(0.7) contrast(1.2)',
                }}
                loading="lazy"
              />
            </div>
            <p
              className="text-[#fefefe]/65 text-sm lg:text-base leading-relaxed text-center"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              <span className="text-[#fefefe] font-bold">Unicity Labs</span>
              <br />
              502, 5th Floor, Al Montazah Tower B
              <br />
              Khalidiyah Area, Abu Dhabi, UAE
            </p>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
