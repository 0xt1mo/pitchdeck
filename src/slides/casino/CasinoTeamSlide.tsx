import { useState, type CSSProperties } from 'react';
import { motion } from 'framer-motion';

const founders = [
  {
    name: 'Mike Gault',
    role: 'CEO',
    photo: '/team/mike.jpg',
    linkedin: 'https://www.linkedin.com/in/mikegault1/',
    lines: [
      'PhD Electrical Engineering',
      'Built & exited the KSI infrastructure company',
      'Ex-MD, Barclays Capital',
    ],
  },
  {
    name: 'Tony Kenyon',
    role: 'CPTO',
    photo: '/team/tony.png',
    linkedin: 'https://www.linkedin.com/in/tonykenyon/',
    lines: [
      'PhD Machine Learning · Former Vitruvian',
      'Principal Architect: BT, Nokia, A10',
    ],
  },
  {
    name: 'Vladimir Rogojin',
    role: 'Architecture',
    photo: '/team/vladimir.png',
    linkedin: '',
    lines: [
      'PhD Computer Science',
      'Cryptographic systems · Somnium Metaverse',
    ],
  },
  {
    name: 'Alan Radi',
    role: 'Commercial',
    photo: '/team/Alan Portrait.jpg',
    photoStyle: { transform: 'translateY(-8%) scale(1.3)', transformOrigin: '50% 50%' },
    linkedin: 'https://www.linkedin.com/in/alanradi/',
    lines: [
      'Mass CX AI for global brands',
      'Apple · Google · Verizon · DHL',
    ],
  },
  {
    name: 'Joshua J. Bouw',
    role: 'AI OS',
    photo: '/team/joshua.jpeg',
    linkedin: '',
    lines: [
      'NEAR · Asimov · Blackcoin',
      'Proof-of-Stake infrastructure',
    ],
  },
  {
    name: 'Pavel Grigorenko',
    role: 'Engineering',
    photo: '/team/pavel.png',
    linkedin: '',
    lines: [
      'PhD Computer Science',
      'Microsoft · Cryptographic engineering',
    ],
  },
  {
    name: 'Jamie Steiner',
    role: 'Product',
    photo: '/team/jamie.jpg',
    linkedin: '',
    lines: ['JP Morgan'],
  },
];

const scientists = ['Ahto Buldas', 'Ahto Truu', 'Risto Laanoja', 'Jian Tan', 'Dirk Draheim'];
const engineers = ['Martti Marran', 'Igor Mahlinovski', 'Alexander Khrushkov', 'Marek Sepp', 'Lennart Ploom', 'Dmytro Maryshev', 'Johannes Ait'];
const advisors = ['Carlos Domingo', 'Arnold Lee', 'Sylvain LaMarche'];

const LinkedInBadge = ({ href }: { href: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-full flex items-center justify-center cursor-pointer"
    style={{ background: 'rgba(249,115,22,0.85)' }}
  >
    <svg viewBox="0 0 24 24" fill="white" className="w-2.5 h-2.5">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  </a>
);

function FounderAvatar({ f, idx }: { f: typeof founders[number]; idx: number }) {
  const [failed, setFailed] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 + idx * 0.06 }}
      className="flex flex-col items-center gap-2"
    >
      <div className="relative">
        <div className="w-[72px] h-[72px] lg:w-[88px] lg:h-[88px] rounded-full overflow-hidden ring-2 ring-orange-500/30 bg-[#0d0d0d] flex items-center justify-center">
          {!failed ? (
            <img
              src={f.photo}
              alt={f.name}
              onError={() => setFailed(true)}
              className="w-full h-full object-cover"
              style={(f as { photoStyle?: CSSProperties }).photoStyle}
            />
          ) : (
            <span
              className="text-orange-400 text-sm lg:text-base tracking-[0.2em]"
              style={{ fontFamily: "'Anton', sans-serif" }}
            >
              {f.name
                .split(' ')
                .map((p) => p[0])
                .join('')
                .toUpperCase()}
            </span>
          )}
        </div>
        {f.linkedin && <LinkedInBadge href={f.linkedin} />}
      </div>
      <div className="flex flex-col items-center text-center min-w-0 w-full">
        <p
          className="text-[#fefefe] text-[13px] lg:text-[14px] font-bold leading-tight whitespace-nowrap"
          style={{ fontFamily: "'Geist Mono', monospace" }}
        >
          {f.name}
        </p>
        <p
          className="text-orange-400 text-[9px] lg:text-[10px] font-bold tracking-[0.2em] uppercase mt-0.5"
          style={{ fontFamily: "'Geist Mono', monospace" }}
        >
          {f.role}
        </p>
        <div className="mt-1 flex flex-col gap-0.5">
          {f.lines.map((line, j) => (
            <p
              key={j}
              className="text-[#fefefe]/65 text-[10px] lg:text-[11px] leading-snug"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function CasinoTeamSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-12 lg:px-20 py-6 lg:py-8 justify-center gap-5">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-orange-400 text-xs sm:text-sm tracking-[0.32em] uppercase font-semibold"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Nº 12 · The Team
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[22px] sm:text-[32px] lg:text-[42px] leading-[1.0] tracking-tight mt-2 uppercase"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            Built by people who have{' '}
            <span className="text-orange-400">shipped trust infrastructure.</span>
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] w-20 lg:w-28 bg-orange-500 origin-left mt-3"
            style={{ boxShadow: '0 0 8px rgba(249,115,22,0.7)' }}
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-3 text-[#fefefe]/85 text-xs sm:text-sm lg:text-base leading-snug max-w-5xl"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            <span className="text-[#fefefe] font-semibold">Unicity Labs.</span> PhDs in cryptography, machine learning, and computer science. Operators who have shipped infrastructure at BT, Nokia, Microsoft, JP Morgan, Barclays, Verizon — and at sovereign and supra-national scale.
          </motion.p>
        </div>

        {/* 7 founders in a 4+3 grid */}
        <div className="flex flex-col gap-4 shrink-0">
          <div className="grid grid-cols-4 gap-x-4 gap-y-5">
            {founders.slice(0, 4).map((f, i) => (
              <FounderAvatar key={f.name} f={f} idx={i} />
            ))}
          </div>
          <div className="grid grid-cols-3 gap-x-4 px-[12.5%]">
            {founders.slice(4, 7).map((f, i) => (
              <FounderAvatar key={f.name} f={f} idx={4 + i} />
            ))}
          </div>
        </div>

        {/* Science / Engineering / Advisors strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="shrink-0 pt-4 grid grid-cols-3 gap-x-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.10)' }}
        >
          <div>
            <p
              className="text-orange-400 text-[10px] tracking-[0.32em] uppercase font-semibold mb-2"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              Science
            </p>
            <p
              className="text-[#fefefe]/75 text-[11px] leading-relaxed"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              {scientists.join(' · ')}
            </p>
          </div>
          <div>
            <p
              className="text-orange-400 text-[10px] tracking-[0.32em] uppercase font-semibold mb-2"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              Engineering
            </p>
            <p
              className="text-[#fefefe]/75 text-[11px] leading-relaxed"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              {engineers.join(' · ')}
            </p>
          </div>
          <div>
            <p
              className="text-orange-400 text-[10px] tracking-[0.32em] uppercase font-semibold mb-2"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              Advisors
            </p>
            <p
              className="text-[#fefefe]/75 text-[11px] leading-relaxed"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              {advisors.join(' · ')}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
