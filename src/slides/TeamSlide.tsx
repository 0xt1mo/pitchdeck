import { useState } from 'react';
import { motion } from 'framer-motion';
import { tr } from '../i18n';

// Names, photo paths and LinkedIn URLs stay identical across languages.
const founders = [
  {
    name: 'Mike Gault',
    photo: '/team/mike-bg.png',
    linkedin: 'https://www.linkedin.com/in/mikegault1/',
  },
  {
    name: 'Tony Kenyon',
    photo: '/team/tony-bg.png',
    linkedin: 'https://www.linkedin.com/in/tonykenyon/',
  },
];

const coreTeam = [
  {
    name: 'Joshua J. Bouw',
    photo: '/team/jjb2-bg.png',
    linkedin: 'https://www.linkedin.com/in/joshuajbouw/',
  },
  {
    name: 'Jamie Steiner',
    photo: '/team/jamie-bg.png',
    linkedin: '',
  },
  {
    name: 'Alan Radi',
    photo: '/team/alan-bg.jpg',
    linkedin: 'https://www.linkedin.com/in/alanradi/',
  },
];

// Company names are brands — they stay identical across languages.
const advisors = [
  { name: 'Carlos Domingo', company: 'Securitize', photo: '/team/carlos.jpg', linkedin: 'https://www.linkedin.com/in/carlosdomingo/' },
  { name: 'Arnold Lee', company: 'Sphere', photo: '/team/arnold.jpg', linkedin: 'https://www.linkedin.com/in/arnoldhlee/' },
  { name: 'Eric Leandri', company: 'Aleria AI', photo: '/team/eric-bg.png', linkedin: 'https://www.linkedin.com/in/ericleandri/' },
];

// Roles and bio lines swap by language; brand/people names above stay put.
const T = tr({
  en: {
    headLead: "FOUNDERS WHO'VE",
    headAccent: 'DONE THIS BEFORE',
    subHead: (
      <>
        15 years shipping cryptographic infrastructure to <span className="text-orange-400 font-bold">DARPA, NATO, Lockheed</span>.<br />5 PhD cryptographers in the core team.
      </>
    ),
    founders: [
      { role: 'CEO', lines: ['PhD EE', 'Built & exited Guardtime', 'Ex-MD, Barclays Capital'] },
      { role: 'CPTO', lines: ['PhD Machine Learning', '25 years shipping enterprise AI & infra (BT, Nokia, A10)', 'Former Vitruvian (applied ML, security)'] },
    ],
    coreTeam: [
      { role: 'AI OS', lines: ['NEAR, Asimov, Blackcoin', 'Early Proof-of-Stake pioneer'] },
      { role: 'Product', lines: ['Head of AI Delivery, NEOM', 'JP Morgan'] },
      { role: 'VP Sales (incoming)', lines: ['Zain · Etisalat · Dubai Gov', '12 yrs CX AI, global B2C'] },
    ],
    advisorsLabel: 'Advisors',
  },
  pt: {
    headLead: 'FUNDADORES QUE',
    headAccent: 'JÁ FIZERAM ISSO ANTES',
    subHead: (
      <>
        15 anos entregando infraestrutura criptográfica para <span className="text-orange-400 font-bold">DARPA, NATO, Lockheed</span>.<br />5 criptógrafos PhD no time principal.
      </>
    ),
    founders: [
      { role: 'CEO', lines: ['PhD em Engenharia Elétrica', 'Fundou e vendeu a Guardtime', 'Ex-MD, Barclays Capital'] },
      { role: 'CPTO', lines: ['PhD em Machine Learning', '25 anos entregando IA e infraestrutura corporativa (BT, Nokia, A10)', 'Ex-Vitruvian (ML aplicado, segurança)'] },
    ],
    coreTeam: [
      { role: 'AI OS', lines: ['NEAR, Asimov, Blackcoin', 'Pioneiro do Proof-of-Stake'] },
      { role: 'Produto', lines: ['Head de Entrega de IA, NEOM', 'JP Morgan'] },
      { role: 'VP de Vendas (a chegar)', lines: ['Zain · Etisalat · Dubai Gov', '12 anos de CX IA, B2C global'] },
    ],
    advisorsLabel: 'Conselheiros',
  },
});

/** Advisor avatar: shows the photo, falls back to a gray initials circle until the file exists. */
const AdvisorAvatar = ({ name, photo }: { name: string; photo?: string }) => {
  const [failed, setFailed] = useState(false);
  const initials = name.split(' ').map((w) => w[0]).slice(0, 2).join('');
  if (!photo || failed) {
    return (
      <div
        className="w-20 h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center ring-2 ring-orange-500/30 shrink-0"
        style={{ background: '#d2d2d2' }}
      >
        <span className="text-[#3a3a3a] text-lg font-bold" style={{ fontFamily: "'Geist Mono', monospace" }}>{initials}</span>
      </div>
    );
  }
  return (
    <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden ring-2 ring-orange-500/30 shrink-0">
      <img src={photo} alt={name} className="w-full h-full object-cover" onError={() => setFailed(true)} />
    </div>
  );
};

const LinkedInBadge = ({ href, size = 5 }: { href: string; size?: number }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`absolute -bottom-0.5 -right-0.5 w-${size} h-${size} rounded-full flex items-center justify-center cursor-pointer`}
    style={{ background: 'rgba(249,115,22,0.85)' }}
  >
    <svg viewBox="0 0 24 24" fill="white" className="w-3 h-3">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  </a>
);

/** Team photo: shows the photo, falls back to a gray initials circle when missing. */
const TeamPhoto = ({ name, photo }: { name: string; photo?: string }) => {
  const [failed, setFailed] = useState(false);
  const initials = name.split(' ').map((w) => w[0]).slice(0, 2).join('');
  if (!photo || failed) {
    return (
      <div
        className="w-24 h-24 lg:w-28 lg:h-28 rounded-full flex items-center justify-center ring-2 ring-orange-500/30"
        style={{ background: '#d2d2d2' }}
      >
        <span className="text-[#3a3a3a] text-2xl lg:text-3xl font-bold" style={{ fontFamily: "'Geist Mono', monospace" }}>{initials}</span>
      </div>
    );
  }
  return (
    <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden ring-2 ring-orange-500/30">
      <img src={photo} alt={name} className="w-full h-full object-cover" onError={() => setFailed(true)} />
    </div>
  );
};

export function TeamSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-10 sm:py-14 lg:py-16 justify-center gap-7">

        {/* Header */}
        <div className="shrink-0">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[44px] sm:text-[60px] lg:text-[80px] xl:text-[92px] leading-[1.0] tracking-tight"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            {T.headLead} <span className="text-orange-400">{T.headAccent}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-3 text-[#fefefe]/85 text-base sm:text-lg max-w-5xl leading-relaxed"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            {T.subHead}
          </motion.p>
        </div>

        {/* Founders */}
        <div className="grid grid-cols-3 gap-6 lg:gap-10 shrink-0">
          {founders.map((f, i) => { const info = T.founders[i]; return (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.12 }}
              className="flex items-start gap-5"
            >
              <div className="relative shrink-0">
                <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden ring-2 ring-orange-500/30">
                  <img src={f.photo} alt={f.name} className="w-full h-full object-cover" />
                </div>
                {f.linkedin && <LinkedInBadge href={f.linkedin} size={6} />}
              </div>
              <div className="min-w-0">
                <p className="text-[#fefefe] text-xl lg:text-2xl font-bold leading-tight">
                  {f.name}
                </p>
                <p
                  className="text-orange-400 text-xs lg:text-sm font-bold tracking-[0.2em] uppercase mt-1"
                  style={{ fontFamily: "'Geist Mono', monospace" }}
                >
                  {info.role}
                </p>
                <div className="mt-2 space-y-1">
                  {info.lines.map((line, j) => (
                    <p
                      key={j}
                      className="text-[#fefefe]/75 text-xs lg:text-sm leading-snug flex gap-2"
                      style={{ fontFamily: "'Geist Mono', monospace" }}
                    >
                      <span className="text-orange-400/70 shrink-0">→</span>
                      <span>{line}</span>
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          ); })}
        </div>

        {/* Core team — photo bios */}
        <div className="grid grid-cols-3 gap-6 lg:gap-10 shrink-0">
          {coreTeam.map((f, i) => { const info = T.coreTeam[i]; return (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + i * 0.12 }}
              className="flex items-start gap-5"
            >
              <div className="relative shrink-0">
                <TeamPhoto name={f.name} photo={f.photo} />
                {f.linkedin && <LinkedInBadge href={f.linkedin} size={6} />}
              </div>
              <div className="min-w-0">
                <p className="text-[#fefefe] text-xl lg:text-2xl font-bold leading-tight">
                  {f.name}
                </p>
                <p
                  className="text-orange-400 text-xs lg:text-sm font-bold tracking-[0.2em] uppercase mt-1"
                  style={{ fontFamily: "'Geist Mono', monospace" }}
                >
                  {info.role}
                </p>
                <div className="mt-2 space-y-1">
                  {info.lines.map((line, j) => (
                    <p
                      key={j}
                      className="text-[#fefefe]/75 text-xs lg:text-sm leading-snug flex gap-2"
                      style={{ fontFamily: "'Geist Mono', monospace" }}
                    >
                      <span className="text-orange-400/70 shrink-0">→</span>
                      <span>{line}</span>
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          ); })}
        </div>

        {/* Advisors — compact photo row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="shrink-0 flex items-center gap-8 lg:gap-12 border-t border-white/[0.06] pt-5"
        >
          <p
            className="text-orange-400 text-xs tracking-[0.3em] uppercase shrink-0"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            {T.advisorsLabel}
          </p>
          {advisors.map((a) => (
            <div key={a.name} className="flex items-center gap-3">
              <div className="relative shrink-0">
                <AdvisorAvatar name={a.name} photo={a.photo} />
                {a.linkedin && <LinkedInBadge href={a.linkedin} size={5} />}
              </div>
              <div className="min-w-0">
                <p className="text-[#fefefe] text-lg lg:text-xl font-bold leading-tight">{a.name}</p>
                <p className="text-[#fefefe]/50 text-sm lg:text-base mt-0.5" style={{ fontFamily: "'Geist Mono', monospace" }}>{a.company}</p>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}
