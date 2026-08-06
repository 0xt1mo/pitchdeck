import { motion } from 'framer-motion';
import { tr } from '../i18n';

const mono = "'Geist Mono', monospace";
const display = "'Anton', sans-serif";

const T = tr({
  en: {
    eyebrow: 'Get started',
    headLead: 'INSTALL THE OS',
    headAccent: 'IN 60 SECONDS.',
    termTitle: 'unicity — community install',
    commentInstall: '# community edition — one command, any machine',
    commentClaude: '# or on Claude Code — the plugin is shipped',
    entVpc: 'Deploys in your VPC or on-prem',
    entFleet: 'Fleet rollout in days, not quarters',
    entSeat: 'Per-seat licensing',
    bookDemo: 'Book a live demo',
  },
  pt: {
    eyebrow: 'Comece agora',
    headLead: 'INSTALE O OS',
    headAccent: 'EM 60 SEGUNDOS.',
    termTitle: 'unicity — instalação community',
    commentInstall: '# edição community — um comando, qualquer máquina',
    commentClaude: '# ou no Claude Code — o plugin já vem incluso',
    entVpc: 'Implanta no seu VPC ou on-premise',
    entFleet: 'Rollout para a frota em dias, não trimestres',
    entSeat: 'Licenciamento por assento',
    bookDemo: 'Agende uma demo ao vivo',
  },
});

export function AosCtaCodewallSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.08), transparent 60%)' }}
      />

      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-10 lg:py-14 gap-7 lg:gap-9">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-400 text-xs lg:text-lg tracking-[0.4em] uppercase font-bold"
            style={{ fontFamily: mono }}
          >
            {T.eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[34px] sm:text-[52px] lg:text-[76px] xl:text-[88px] leading-[0.95] tracking-tight uppercase mt-2"
            style={{ fontFamily: display }}
          >
            {T.headLead} <span className="text-orange-400">{T.headAccent}</span>
          </motion.h1>
        </div>

        {/* Terminal + enterprise */}
        <div className="shrink-0 grid grid-cols-1 lg:grid-cols-[1.55fr_1fr] gap-5 lg:gap-6 items-stretch">

          {/* Terminal card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="rounded-xl overflow-hidden flex flex-col"
            style={{ border: '1px solid rgba(255,255,255,0.14)', background: '#0c0c10' }}
          >
            {/* title bar */}
            <div className="flex items-center gap-2 px-4 py-2.5" style={{ background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              <span className="w-3 h-3 rounded-full" style={{ background: '#ff5f56' }} />
              <span className="w-3 h-3 rounded-full" style={{ background: '#ffbd2e' }} />
              <span className="w-3 h-3 rounded-full" style={{ background: '#27c93f' }} />
              <span className="ml-3 text-[#fefefe]/40 text-xs lg:text-sm" style={{ fontFamily: mono }}>{T.termTitle}</span>
            </div>
            {/* body */}
            <div className="p-5 lg:p-7 flex flex-col gap-2.5 lg:gap-3 flex-1 justify-center overflow-x-auto">
              <p className="text-[#5f6b7a] text-sm lg:text-lg" style={{ fontFamily: mono }}>{T.commentInstall}</p>
              <p className="text-sm lg:text-xl whitespace-nowrap" style={{ fontFamily: mono }}>
                <span className="text-orange-400">$ </span>
                <span className="text-[#e8e8e8]">curl -fsSL unicity.ai/install.sh | sh</span>
              </p>
              <div className="h-2" />
              <p className="text-[#5f6b7a] text-sm lg:text-lg" style={{ fontFamily: mono }}>{T.commentClaude}</p>
              <p className="text-sm lg:text-xl whitespace-nowrap" style={{ fontFamily: mono }}>
                <span className="text-orange-400">$ </span>
                <span className="text-[#e8e8e8]">/plugin marketplace add unicitynetwork/aos</span>
              </p>
              <p className="text-sm lg:text-xl whitespace-nowrap" style={{ fontFamily: mono }}>
                <span className="text-orange-400">$ </span>
                <span className="text-[#e8e8e8]">/plugin install aos</span>
              </p>
            </div>
          </motion.div>

          {/* Enterprise */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="rounded-xl border-2 border-orange-500 bg-orange-500/[0.06] p-6 lg:p-8 flex flex-col justify-center gap-4"
            style={{ boxShadow: '0 0 28px rgba(249,115,22,0.14)' }}
          >
            <p className="text-[#fefefe] text-2xl lg:text-4xl uppercase leading-none" style={{ fontFamily: display }}>Enterprise</p>
            <div className="flex flex-col gap-1.5">
              <p className="flex gap-2 text-[#fefefe]/85 text-sm lg:text-lg leading-snug" style={{ fontFamily: mono }}>
                <span className="text-orange-400 shrink-0">→</span> {T.entVpc}
              </p>
              <p className="flex gap-2 text-[#fefefe]/85 text-sm lg:text-lg leading-snug" style={{ fontFamily: mono }}>
                <span className="text-orange-400 shrink-0">→</span> {T.entFleet}
              </p>
              <p className="flex gap-2 text-[#fefefe]/85 text-sm lg:text-lg leading-snug" style={{ fontFamily: mono }}>
                <span className="text-orange-400 shrink-0">→</span> {T.entSeat}
              </p>
            </div>
            <a
              href="mailto:info@unicity.ai?subject=Book%20a%20live%20demo"
              className="inline-flex items-center gap-3 self-start rounded-full px-6 py-3 lg:px-7 lg:py-3.5 text-[#060606] font-bold transition-transform hover:scale-[1.02]"
              style={{ background: '#FF6A00', fontFamily: mono }}
            >
              <span className="text-sm lg:text-lg tracking-[0.14em] uppercase">{T.bookDemo}</span>
              <span className="text-base lg:text-lg">→</span>
            </a>
          </motion.div>
        </div>

        {/* Contact line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.5 }}
          className="shrink-0 text-orange-400/90 text-sm lg:text-xl"
          style={{ fontFamily: mono }}
        >
          <a href="mailto:info@unicity.ai" className="hover:underline">info@unicity.ai</a>
          <span className="text-[#fefefe]/40">  ·  </span>
          <a href="https://unicity.ai" target="_blank" rel="noopener noreferrer" className="hover:underline">unicity.ai</a>
        </motion.p>

      </div>
    </div>
  );
}
