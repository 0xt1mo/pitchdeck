import { motion } from 'framer-motion';
import { tr } from '../i18n';

const mono = "'Geist Mono', monospace";

const T = tr({
  en: {
    thankLead: 'THANK',
    thankAccent: 'YOU',
    installLabel: 'Install the OS in 60 seconds',
    terminalTitle: 'unicity — community install',
    terminalComment: '# community edition — one command, any machine',
  },
  pt: {
    thankLead: 'MUITO',
    thankAccent: 'OBRIGADO',
    installLabel: 'Instale o OS em 60 segundos',
    terminalTitle: 'unicity — instalação da comunidade',
    terminalComment: '# edição comunidade — um comando, qualquer máquina',
  },
});

export function ThankYouChatSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-8 sm:px-12 lg:px-20 py-10 lg:py-12 gap-7 lg:gap-8">

        {/* Heading */}
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[#fefefe] text-[56px] sm:text-[84px] lg:text-[112px] leading-none tracking-tight"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            {T.thankLead} <span className="text-orange-400">{T.thankAccent}</span>
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-[2px] w-32 sm:w-48 bg-gradient-to-r from-transparent via-orange-500 to-transparent origin-center mx-auto mt-4"
          />
        </div>

        {/* Install the OS in 60 seconds */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="w-full max-w-2xl"
        >
          <p
            className="text-orange-400 text-xs sm:text-sm tracking-[0.3em] uppercase font-bold text-center mb-3"
            style={{ fontFamily: mono }}
          >
            {T.installLabel}
          </p>
          <div className="rounded-xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.14)', background: '#0c0c10' }}>
            <div className="flex items-center gap-2 px-4 py-2.5" style={{ background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              <span className="w-3 h-3 rounded-full" style={{ background: '#ff5f56' }} />
              <span className="w-3 h-3 rounded-full" style={{ background: '#ffbd2e' }} />
              <span className="w-3 h-3 rounded-full" style={{ background: '#27c93f' }} />
              <span className="ml-3 text-[#fefefe]/40 text-xs lg:text-sm" style={{ fontFamily: mono }}>{T.terminalTitle}</span>
            </div>
            <div className="p-5 lg:p-6 flex flex-col gap-2.5 overflow-x-auto">
              <p className="text-[#5f6b7a] text-sm lg:text-base" style={{ fontFamily: mono }}>{T.terminalComment}</p>
              <p className="text-sm lg:text-lg whitespace-nowrap" style={{ fontFamily: mono }}>
                <span className="text-orange-400">$ </span>
                <span className="text-[#e8e8e8]">curl -fsSL https://aos.unicity.ai/install.sh | sh</span>
              </p>
              <p className="text-sm lg:text-lg whitespace-nowrap" style={{ fontFamily: mono }}>
                <span className="text-orange-400">$ </span>
                <span className="text-[#e8e8e8]">aos init</span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact details */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-col items-center gap-5"
        >
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
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
              href="mailto:mike@unicity-labs.com"
              className="text-orange-400 text-lg lg:text-2xl font-bold"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              mike@unicity-labs.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
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
              className="text-orange-400 text-lg lg:text-2xl font-bold"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              unicity.ai
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-8 pt-2">
            <a
              href="https://x.com/unicity_labs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-[#fefefe]/80 hover:text-orange-400 transition-colors"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 lg:w-6 lg:h-6">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span className="text-base lg:text-xl font-bold">@unicity_labs</span>
            </a>
            <a
              href="https://www.linkedin.com/company/unicity-labs/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-[#fefefe]/80 hover:text-orange-400 transition-colors"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 lg:w-6 lg:h-6">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span className="text-base lg:text-xl font-bold">unicity-labs</span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
