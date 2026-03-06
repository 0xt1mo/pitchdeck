import { motion } from 'framer-motion';
import splashVideoUrl from '/kling_20260226_VIDEO_Take_Image_1650_0.mp4';

const leaders = [
  { name: 'Mike Gault', role: 'CEO', lines: ['PhD EE', 'Founder Guardtime (ADX:IHC)', 'MD Barclays Capital'], photo: '/team/mike.jpg', linkedin: 'https://www.linkedin.com/in/mikegault1/' },
  { name: 'Vladimir Rogojin', role: 'CTO', lines: ['PhD CS', 'Somnium Metaverse, Guardtime'], photo: '/team/vladimir.png', linkedin: 'https://www.linkedin.com/in/vladimir-rogojin-369b7151/' },
  { name: 'Rajeev Gupta', role: 'Commercial', lines: ['CCO Etisalat'], photo: '/team/Nitish2.jpeg', linkedin: '' },
  { name: 'Tony Kenyon', role: 'Product', lines: ['PhD ML/Cybersecurity', 'Vitruvian, BT, Nokia, A10'], photo: '/team/Tony.jpeg', linkedin: 'https://www.linkedin.com/in/tonykenyon/' },
  { name: 'Joshua J. Bouw', role: 'AI', lines: ['NEAR, Asimov, Blackcoin', 'Godfather Proof of Stake'], photo: '/team/joshua.jpeg', linkedin: 'https://www.linkedin.com/in/joshuajbouw/' },
  { name: 'Matt Law', role: 'Growth', lines: ['Outlier Ventures, Boson, Fetch.ai'], photo: '/team/matt.jpg', linkedin: 'https://www.linkedin.com/in/mattlaw/' },
  { name: 'Pavel Grigorenko', role: 'Engineering', lines: ['PhD CS', 'Microsoft, Guardtime'], photo: '/team/pavel.png', linkedin: 'https://www.linkedin.com/in/pavelgrigorenko/' },
  { name: 'Jamie Steiner', role: 'DeFi', lines: ['JP Morgan, NEOM'], photo: '/team/jamie.jpg', linkedin: 'https://www.linkedin.com/in/jvsteiner/' },
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
  { name: 'Carlos Domingo', company: 'Securitize', focus: 'Tokenization', linkedin: 'https://www.linkedin.com/in/carlosdomingo/' },
  { name: 'Eric Leandri', company: 'Aleria AI', focus: 'AI', linkedin: 'https://www.linkedin.com/in/ericleandri/' },
  { name: 'Arnold Lee', company: 'Sphere', focus: 'Stable-coin', linkedin: 'https://www.linkedin.com/in/arnoldhlee/' },
  { name: 'Sylvain LaMarche', company: 'Movidone', focus: 'Commerce', linkedin: 'https://www.linkedin.com/in/sylvain-mathieu-lamarche-0b47711a/' },
];

export function TeamSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-y-auto scrollbar-hide">
      {/* Video background */}
      <div className="fixed inset-0 w-full h-full z-0">
        <video
          className="w-full h-full object-cover opacity-40"
          autoPlay muted loop playsInline
          src={splashVideoUrl}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060606]/40 via-[#060606]/20 to-[#060606]/40" />
      </div>

      <div className="relative z-10 h-full">

        {/* Header */}
        <div className="pt-10 sm:pt-14 lg:pt-16 px-6 sm:px-10 lg:px-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-orange-400 text-[10px] sm:text-xs tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            The People
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-[#fefefe] text-[52px] sm:text-[72px] lg:text-[96px] leading-[0.9] tracking-tight mt-1"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            MEET THE TEAM
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] w-32 sm:w-48 bg-gradient-to-r from-orange-500 to-transparent origin-left mt-3"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-3 text-[#fefefe]/70 text-xs sm:text-sm max-w-lg"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Experienced entrepreneurs with multiple exits
            <br />
            PhDs in ML, Cryptography and Cybersecurity
          </motion.p>
        </div>

        {/* ── Leadership Grid ── */}
        <div className="mt-8 sm:mt-12 px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 auto-rows-fr">
            {leaders.map((leader, i) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                className="group relative h-full"
              >
                <div className="relative border-r border-white/[0.05] last:border-r-0 overflow-hidden h-full">
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{ background: 'linear-gradient(to top, rgba(255,111,0,0.08), transparent 60%)' }}
                  />

                  {/* Left accent line */}
                  <motion.div
                    className="absolute left-0 top-0 w-[2px] h-full origin-top bg-gradient-to-b from-orange-500 to-transparent"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 + i * 0.1 }}
                  />

                  {/* Content */}
                  <div className="relative p-4 sm:p-5 lg:p-6 flex items-start gap-3">
                    {/* Avatar */}
                    <div className="relative shrink-0">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden ring-2 ring-orange-500/20">
                        {leader.photo ? (
                          <img src={leader.photo} alt={leader.name} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-orange-500/20 to-orange-600/10 flex items-center justify-center text-orange-400 text-sm font-bold">
                            {leader.name.split(' ').map(n => n[0]).join('')}
                          </div>
                        )}
                      </div>
                      {leader.linkedin && (
                        <a href={leader.linkedin} target="_blank" rel="noopener noreferrer"
                          className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer"
                          style={{ background: 'rgba(249,115,22,0.8)' }}>
                          <svg viewBox="0 0 24 24" fill="white" className="w-3.5 h-3.5">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </a>
                      )}
                    </div>
                    {/* Text */}
                    <div className="flex-1 min-w-0">
                    <h3 className="text-[#fefefe] text-base sm:text-lg lg:text-xl font-bold leading-tight">
                      {leader.name}
                    </h3>
                    <p
                      className="text-orange-400 text-[11px] sm:text-xs font-medium tracking-wider uppercase mt-1"
                      style={{ fontFamily: "'Geist Mono', monospace" }}
                    >
                      {leader.role}
                    </p>
                    <div className="mt-2 flex flex-col gap-0.5">
                      {leader.lines.map((line, j) => (
                        <p key={j} className="text-[#fefefe]/50 text-[10px] sm:text-[11px]" style={{ fontFamily: "'Geist Mono', monospace" }}>
                          {line}
                        </p>
                      ))}
                    </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Cryptography Team ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-8 sm:mt-10 px-6 sm:px-10 lg:px-16"
        >
          <div className="flex items-start gap-4 sm:gap-6">
            <p
              className="text-orange-400 text-[10px] sm:text-xs tracking-[0.3em] uppercase shrink-0 pt-0.5"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              Cryptography
            </p>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              {cryptographers.map((c, i) => (
                <span key={c.name}>
                  {c.linkedin ? (
                    <a href={c.linkedin} target="_blank" rel="noopener noreferrer"
                      className="text-[#fefefe]/80 hover:text-orange-400 text-sm font-medium transition-colors cursor-pointer">{c.name}</a>
                  ) : (
                    <span className="text-[#fefefe]/80 text-sm font-medium">{c.name}</span>
                  )}
                  {i < cryptographers.length - 1 && (
                    <span className="text-orange-500/30 mx-1">·</span>
                  )}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-start gap-4 sm:gap-6 mt-4">
            <p
              className="text-orange-400 text-[10px] sm:text-xs tracking-[0.3em] uppercase shrink-0 pt-0.5"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              Development
            </p>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              {developers.map((d, i) => (
                <span key={d.name}>
                  {d.linkedin ? (
                    <a href={d.linkedin} target="_blank" rel="noopener noreferrer"
                      className="text-[#fefefe]/80 hover:text-orange-400 text-sm font-medium transition-colors cursor-pointer">{d.name}</a>
                  ) : (
                    <span className="text-[#fefefe]/80 text-sm font-medium">{d.name}</span>
                  )}
                  {i < developers.length - 1 && (
                    <span className="text-orange-500/30 mx-1">·</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Advisors ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mt-3 sm:mt-4 px-6 sm:px-10 lg:px-16"
        >
          <p
            className="text-[#fefefe]/50 text-[10px] tracking-[0.3em] uppercase mb-3"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Advisors
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {advisors.map((a, i) => (
              <motion.a
                key={a.name}
                href={a.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + i * 0.08, duration: 0.5 }}
                whileHover={{ y: -3 }}
                className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-orange-500/15 bg-orange-500/[0.03] hover:border-orange-500/30 transition-colors duration-300"
                style={{ cursor: 'pointer' }}
              >
                <div className="relative shrink-0">
                  <div className="w-8 h-8 rounded-full bg-orange-500/15 flex items-center justify-center text-orange-400 text-[10px] font-bold">
                    {a.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div
                    className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(249,115,22,0.8)' }}>
                    <svg viewBox="0 0 24 24" fill="white" className="w-2.5 h-2.5">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-[#fefefe] text-xs font-semibold">{a.name}</p>
                  <p className="text-orange-400/70 text-[10px]" style={{ fontFamily: "'Geist Mono', monospace" }}>
                    CEO, {a.company} — {a.focus}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
