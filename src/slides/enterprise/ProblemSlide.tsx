import { motion } from 'framer-motion';
import { tr } from '../../i18n';
import splashVideoUrl from '/kling_20260226_VIDEO_Take_Image_1650_0.mp4';
import unicityLogoUrl from '/UnicityLogo.svg';

// Non-text data (prefix flag, animation delay, stable id) stays identical across languages.
const problems = [
  { id: 'discovery', noPrefix: false, delay: 0.6 },
  { id: 'security', noPrefix: true, delay: 0.9 },
  { id: 'friction', noPrefix: false, delay: 1.2 },
  { id: 'autonomy', noPrefix: true, delay: 1.5 },
];

const T = tr({
  en: {
    headLead: 'THE INTERNET IS BEING',
    headAccent: 'REBUILT FOR AI',
    subLead: 'The first web connected people. The next one is connecting AI agents.',
    subAccent: ' We are still in the dialup phase.',
    noWord: 'NO',
    titles: ['LIMITED DISCOVERY', 'SECURITY', 'TRANSACTION FRICTION', 'AUTONOMY'],
    lines: [
      ["Agents can't find each other", '10,000 unused MCP servers'],
      ["It's Windows 95 in 1995", 'Major unprotected threat surfaces'],
      ['Shared ledgers were built for human not machine finance'],
      ['Humans required in the loop'],
    ],
  },
  pt: {
    headLead: 'A INTERNET ESTÁ SENDO',
    headAccent: 'RECONSTRUÍDA PARA IA',
    subLead: 'A primeira web conectou pessoas. A próxima está conectando agentes de IA.',
    subAccent: ' Ainda estamos na fase da discagem.',
    noWord: 'SEM',
    titles: ['DESCOBERTA LIMITADA', 'SEGURANÇA', 'ATRITO DE TRANSAÇÃO', 'AUTONOMIA'],
    lines: [
      ['Agentes não conseguem se encontrar', '10,000 servidores MCP sem uso'],
      ['É o Windows 95 em 1995', 'Grandes superfícies de ameaça desprotegidas'],
      ['Ledgers compartilhados foram feitos para finanças humanas, não de máquina'],
      ['Humanos necessários no ciclo'],
    ],
  },
});

export function ProblemSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-y-auto">
      {/* Video background */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <video
          className="w-full h-full object-cover opacity-40"
          autoPlay muted loop playsInline
          src={splashVideoUrl}
        />
        <div className="absolute inset-0 bg-[#060606]/20" />
      </div>

      {/* Scan line overlay */}
      <div className="absolute inset-0 z-[1] pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)',
        }}
      />

      <div className="relative z-10 h-full flex flex-col px-6 sm:px-10 lg:px-16 py-8 sm:py-12 lg:py-14">

        {/* Header */}
        <div>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="h-[1px] bg-gradient-to-r from-red-500/60 via-orange-500/40 to-transparent mb-4"
          />
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[32px] sm:text-[48px] lg:text-[64px] xl:text-[76px] leading-[0.95] tracking-tight"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            {T.headLead}
            <br />
            <span className="text-orange-400">{T.headAccent}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-3 text-[#fefefe]/60 text-xs sm:text-sm lg:text-base max-w-2xl"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            {T.subLead}
            <span className="text-orange-400/80">{T.subAccent}</span>
          </motion.p>
        </div>

        {/* ── Problem Grid ── */}
        <div className="flex-1 flex items-center mt-4 sm:mt-6">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-5xl mx-auto">
            {problems.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: p.delay,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative rounded-2xl overflow-hidden border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm p-5 sm:p-6 lg:p-8 h-full transition-all duration-300 hover:border-red-500/30 hover:bg-red-500/[0.06] hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(239,68,68,0.1)]">
                  {/* Animated warning pulse border */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{ border: '1px solid rgba(239, 68, 68, 0.15)' }}
                    animate={{ opacity: [0.3, 0.8, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                  />

                  {/* Big "NO" watermark */}
                  <div
                    className="absolute -top-2 -right-2 text-[80px] sm:text-[100px] lg:text-[130px] font-black leading-none select-none pointer-events-none"
                    style={{
                      fontFamily: "'Anton', sans-serif",
                      color: 'transparent',
                      WebkitTextStroke: '1px rgba(239, 68, 68, 0.1)',
                    }}
                  >
                    {T.noWord}
                  </div>

                  {/* Red dot indicator */}
                  <motion.div
                    className="w-2 h-2 rounded-full bg-red-500 mb-4 shadow-[0_0_10px_rgba(239,68,68,0.5)]"
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  />

                  {/* Title */}
                  <h3
                    className="text-[#fefefe] text-lg sm:text-2xl lg:text-3xl tracking-wide relative z-10"
                    style={{ fontFamily: "'Anton', sans-serif" }}
                  >
                    {p.noPrefix && <><span className="text-red-400/90">{T.noWord}</span>{' '}</>}
                    {T.titles[i]}
                  </h3>

                  {/* Description lines */}
                  <div className="mt-2 sm:mt-3 flex flex-col gap-0.5 relative z-10">
                    {T.lines[i].map((line, j) => (
                      <p
                        key={j}
                        className="text-[#fefefe]/50 text-[10px] sm:text-xs lg:text-sm uppercase tracking-wider"
                        style={{ fontFamily: "'Geist Mono', monospace" }}
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Unicity logo bottom right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="self-end"
        >
          <img src={unicityLogoUrl} alt="Unicity" className="h-5 sm:h-6 opacity-60" />
        </motion.div>

      </div>
    </div>
  );
}
