import { motion } from 'framer-motion';

const founders = [
  {
    name: 'Mike Gault',
    role: 'CEO',
    photo: '/team/mike.jpg',
    linkedin: 'https://www.linkedin.com/in/mikegault1/',
    lines: [
      'PhD Electrical Engineering',
      'Built & exited Guardtime (ADX:IHC)',
      'Ex-MD, Barclays Capital',
    ],
  },
  {
    name: 'Tony Kenyon',
    role: 'CPTO',
    photo: '/team/tony.png',
    linkedin: 'https://www.linkedin.com/in/tonykenyon/',
    lines: [
      'PhD Machine Learning',
      '25 years shipping enterprise AI & infra',
      'Former Vitruvian (applied ML, security)',
      'Principal Architect: BT, Nokia, A10',
    ],
  },
];

const leaders = [
  { name: 'Vladimir Rogojin', role: 'Architecture', bg: 'PhD CS · Somnium Metaverse, Guardtime', photo: '/team/vladimir.png', linkedin: 'https://www.linkedin.com/in/vladimir-rogojin-369b7151/' },
  { name: 'Joshua J. Bouw', role: 'AI OS', bg: 'NEAR, Asimov, Blackcoin · Early Proof of Stake pioneer', photo: '/team/joshua.jpeg', linkedin: 'https://www.linkedin.com/in/joshuajbouw/' },
  { name: 'Matt Law', role: 'Growth', bg: 'Outlier Ventures, Boson, Fetch.ai', photo: '/team/matt.jpg', linkedin: 'https://www.linkedin.com/in/mattlaw/' },
  { name: 'Pavel Grigorenko', role: 'Engineering', bg: 'PhD CS · Microsoft, Guardtime', photo: '/team/pavel.png', linkedin: 'https://www.linkedin.com/in/pavelgrigorenko/' },
  { name: 'Jamie Steiner', role: 'Product', bg: 'JP Morgan', photo: '/team/jamie.jpg' },
];

const cryptographers = [
  { name: 'Ahto Buldas PhD', linkedin: 'https://www.linkedin.com/in/ahto-buldas-55988646/' },
  { name: 'Ahto Truu PhD', linkedin: 'https://www.linkedin.com/in/ahtotruu/' },
  { name: 'Risto Laanoja PhD', linkedin: 'https://www.linkedin.com/in/ristolaanoja/' },
  { name: 'Jian Tan PhD', linkedin: 'https://www.linkedin.com/in/jiantan/' },
  { name: 'Dirk Draheim PhD', linkedin: 'https://www.linkedin.com/in/dirk-draheim-66057a38/' },
];

const developers = [
  { name: 'Martti Marran', linkedin: 'https://www.linkedin.com/in/martti-marran-68aa1825/' },
  { name: 'Igor Mahlinovski', linkedin: 'https://www.linkedin.com/in/igor-mahlinovski-8a5500208/' },
  { name: 'Alexander Khrushkov', linkedin: 'https://www.linkedin.com/in/alexander-khrushkov-488008221/' },
  { name: 'Marek Sepp', linkedin: 'https://www.linkedin.com/in/marek-sepp-0b125451/' },
  { name: 'Lennart Ploom', linkedin: '' },
  { name: 'Dmytro Maryshev', linkedin: 'https://www.linkedin.com/in/dmytro-m-2329a5144/' },
  { name: 'Johannes Ait', linkedin: 'https://www.linkedin.com/in/johannes-ait-34087393/' },
];

const advisors = [
  { name: 'Carlos Domingo', company: 'Securitize', linkedin: 'https://www.linkedin.com/in/carlosdomingo/' },
  { name: 'Eric Leandri', company: 'Aleria AI', linkedin: 'https://www.linkedin.com/in/ericleandri/' },
  { name: 'Arnold Lee', company: 'Sphere', linkedin: 'https://www.linkedin.com/in/arnoldhlee/' },
  { name: 'Sylvain LaMarche', company: 'Movidone', linkedin: 'https://www.linkedin.com/in/sylvain-mathieu-lamarche-0b47711a/' },
];

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

const NameList = ({
  label,
  items,
}: {
  label: string;
  items: { name: string; linkedin: string; company?: string }[];
}) => (
  <div className="flex items-start gap-4">
    <p
      className="text-orange-400 text-xs tracking-[0.3em] uppercase shrink-0 w-32 pt-1"
      style={{ fontFamily: "'Geist Mono', monospace" }}
    >
      {label}
    </p>
    <div className="flex flex-wrap items-center gap-x-1">
      {items.map((c, i) => (
        <span key={c.name}>
          {c.linkedin ? (
            <a
              href={c.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#fefefe]/85 hover:text-orange-400 text-base transition-colors cursor-pointer"
            >
              {c.name}
              {'company' in c && c.company ? (
                <span className="text-[#fefefe]/45"> ({c.company})</span>
              ) : (
                ''
              )}
            </a>
          ) : (
            <span className="text-[#fefefe]/85 text-base">{c.name}</span>
          )}
          {i < items.length - 1 && <span className="text-orange-500/40 mx-1">·</span>}
        </span>
      ))}
    </div>
  </div>
);

export function TeamSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-10 sm:py-14 lg:py-16 justify-center gap-7">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-400 text-[10px] sm:text-xs tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            The People
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[44px] sm:text-[60px] lg:text-[80px] xl:text-[92px] leading-[1.0] tracking-tight mt-2"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            FOUNDERS WHO'VE <span className="text-orange-400">DONE THIS BEFORE</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-3 text-[#fefefe]/85 text-base sm:text-lg max-w-5xl leading-relaxed"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            15 years shipping cryptographic infrastructure to <span className="text-orange-400 font-bold">DARPA, NATO, Lockheed</span>.<br />5 PhD cryptographers in the core team.
          </motion.p>
        </div>

        {/* Founders */}
        <div className="grid grid-cols-2 gap-8 lg:gap-14 shrink-0">
          {founders.map((f, i) => (
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
                  {f.role}
                </p>
                <div className="mt-2 space-y-1">
                  {f.lines.map((line, j) => (
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
          ))}
        </div>

        {/* Secondary leadership */}
        <div className="grid grid-cols-5 gap-x-4 gap-y-3 shrink-0">
          {leaders.map((leader, i) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 + i * 0.06 }}
              className="flex items-start gap-3"
            >
              <div className="relative shrink-0">
                <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-orange-500/20">
                  <img src={leader.photo} alt={leader.name} className="w-full h-full object-cover" />
                </div>
                {leader.linkedin && <LinkedInBadge href={leader.linkedin} />}
              </div>
              <div className="min-w-0">
                <p className="text-[#fefefe] text-base lg:text-lg font-bold leading-tight">{leader.name}</p>
                <p
                  className="text-orange-400 text-xs font-bold tracking-[0.2em] uppercase mt-0.5"
                  style={{ fontFamily: "'Geist Mono', monospace" }}
                >
                  {leader.role}
                </p>
                <p
                  className="text-[#fefefe]/70 text-sm leading-snug mt-1"
                  style={{ fontFamily: "'Geist Mono', monospace" }}
                >
                  {leader.bg}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom: Science, Engineering, Advisors */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="shrink-0 space-y-2 border-t border-white/[0.06] pt-4"
        >
          <NameList label="Science" items={cryptographers} />
          <NameList label="Engineering" items={developers} />
          <NameList label="Advisors" items={advisors} />
        </motion.div>

      </div>
    </div>
  );
}
