import { motion } from 'framer-motion';
import splashVideoUrl from '/kling_20260226_VIDEO_Take_Image_1650_0.mp4';

const leaders = [
  { name: 'Mike Gault', role: 'CEO', lines: ['PhD EE', 'Founder Guardtime (ADX:IHC)', 'MD Barclays Capital'], photo: '/team/mike.jpg' },
  { name: 'Vladimir Rogojin', role: 'CTO', lines: ['PhD CS', 'Somnium Metaverse, Guardtime'], photo: '/team/vladimir.png' },
  { name: 'Rajeev Malik', role: 'Commercial', lines: ['CCO Etisalat'], photo: '' },
  { name: 'Tony Kenyon', role: 'Product', lines: ['PhD ML/Cybersecurity', 'Vitruvian, BT, Nokia, A10'], photo: '' },
  { name: 'Joshua J. Bouw', role: 'AI', lines: ['NEAR, Asimov, Blackcoin', 'Godfather Proof of Stake'], photo: '/team/joshua.jpeg' },
  { name: 'Matt Law', role: 'Growth', lines: ['Outlier Ventures'], photo: '/team/matt.jpg' },
  { name: 'Pavel Grigorenko', role: 'Engineering', lines: ['PhD CS', 'Microsoft, Guardtime'], photo: '/team/pavel.png' },
  { name: 'Jamie Steiner', role: 'DeFi', lines: ['JP Morgan'], photo: '/team/jamie.jpg' },
];

const cryptographers = ['Ahto Buldas PhD', 'Ahto Truu PhD', 'Risto Laanoja PhD', 'Jian Tan PhD', 'Dirk Draheim PhD'];

const developers = ['Martti Maran', 'Igor Mahlinovski', 'Alex Khrushkov', 'Marek Sepp', 'Lennart Ploom', 'Dmytro Maryshev', 'Johannes Ait'];

const advisors = [
  { name: 'Carlos Domingo', company: 'Securitize', focus: 'Tokenization' },
  { name: 'Eric Leandri', company: 'Aleria AI', focus: 'AI' },
  { name: 'Arnold Lee', company: 'Sphere', focus: 'Stable-coin' },
  { name: 'Sylvain LaMarche', company: 'Movidone', focus: 'Commerce' },
];

const credentials = [
  'Guardtime', 'Microsoft', 'NEAR', 'JP Morgan',
  'Outlier', 'BT', 'Nokia','Barclays','Vitruvian','Deutsche Bank',
  'Asimov',
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

      <div className="relative z-10 min-h-full">

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
            Experienced entrepreneurs with multiple exits.
            <br />
            PhDs in ML, Cryptography and Cybersecurity
          </motion.p>
        </div>

        {/* ── Leadership Grid ── */}
        <div className="mt-8 sm:mt-12 px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-0">
            {leaders.map((leader, i) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                className="group relative"
              >
                <div className="relative border-r border-white/[0.05] last:border-r-0 overflow-hidden">
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
                    {/* Avatar */}
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden ring-2 ring-orange-500/20 shrink-0">
                      {leader.photo ? (
                        <img src={leader.photo} alt={leader.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-orange-500/20 to-orange-600/10 flex items-center justify-center text-orange-400 text-xs font-bold">
                          {leader.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      )}
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
              {cryptographers.map((name, i) => (
                <span key={name}>
                  <span className="text-[#fefefe]/80 text-sm font-medium">{name}</span>
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
              {developers.map((name, i) => (
                <span key={name}>
                  <span className="text-[#fefefe]/80 text-sm font-medium">{name}</span>
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
          <div className="flex flex-wrap gap-4">
            {advisors.map((a, i) => (
              <motion.div
                key={a.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + i * 0.08, duration: 0.5 }}
                whileHover={{ y: -3 }}
                className="flex items-center gap-3 px-4 py-3 rounded-xl border border-orange-500/15 bg-orange-500/[0.03] hover:border-orange-500/30 transition-colors duration-300"
              >
                <div className="w-8 h-8 rounded-full bg-orange-500/15 flex items-center justify-center text-orange-400 text-[10px] font-bold">
                  {a.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="text-[#fefefe] text-xs font-semibold">{a.name}</p>
                  <p className="text-orange-400/70 text-[10px]" style={{ fontFamily: "'Geist Mono', monospace" }}>
                    CEO, {a.company} — {a.focus}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Credentials Marquee ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-10 sm:mt-12 border-t border-white/[0.05] py-6 overflow-hidden"
        >
          <div className="flex animate-marquee whitespace-nowrap">
            {[...credentials, ...credentials].map((c, i) => (
              <span
                key={`${c}-${i}`}
                className="text-[#fefefe]/20 text-sm sm:text-base font-bold tracking-wider mx-8 sm:mx-12"
              >
                {c}
              </span>
            ))}
          </div>
        </motion.div>

      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
