import { motion } from 'framer-motion';
import { tr } from '../i18n';

const display = "'Anton', sans-serif";

const T = tr({
  en: {
    headLead: 'EXAMPLE SOLUTION: TELECOM,',
    headAccent: 'AN AGENT FOR EVERY SIM.',
    subtitle:
      "A personal AI concierge: a secure personalized agent with integrated billing, identity and voice for telecom subscribers — running on the operator's own infrastructure.",
  },
  pt: {
    headLead: 'SOLUÇÃO DE EXEMPLO: TELECOM,',
    headAccent: 'UM AGENTE PARA CADA SIM.',
    subtitle:
      'Um concierge de IA pessoal: um agente personalizado e seguro com faturamento, identidade e voz integrados para assinantes de telecom — rodando na própria infraestrutura da operadora.',
  },
});

/**
 * Subscriber concierge slide — three phone screenshots arranged in a fan
 * (left tilted back, right tilted back, center forward and largest).
 */
export function ConciergeSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">

      {/* Subtle dotted background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '34px 34px',
        }}
      />

      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-8 lg:py-10 gap-6 lg:gap-8">

        {/* Header */}
        <div className="shrink-0">
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[28px] sm:text-[40px] lg:text-[56px] xl:text-[64px] leading-[0.95] tracking-tight uppercase"
            style={{ fontFamily: display }}
          >
            {T.headLead}{' '}
            <span className="text-orange-400">{T.headAccent}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-[#fefefe]/75 text-base sm:text-lg lg:text-xl leading-snug mt-3 max-w-4xl"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            {T.subtitle}
          </motion.p>
        </div>

        {/* Phone fan — flexbox row, center bigger and on top with overlap via negative margins */}
        <div className="flex items-center justify-center -mx-4">
          {/* LEFT phone — tilted back-left, partially hidden behind center */}
          <motion.img
            src="/concierge/Concierge6.png"
            alt="Subscriber concierge — stream"
            initial={{ opacity: 0, rotate: -14 }}
            animate={{ opacity: 1, rotate: -7 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="h-[46vh] lg:h-[50vh] w-auto"
            style={{
              filter: 'drop-shadow(0 24px 60px rgba(0,0,0,0.7))',
              borderRadius: '20px',
              marginRight: '2vw',
              zIndex: 1,
            }}
          />

          {/* CENTER phone — forward, largest */}
          <motion.img
            src="/concierge/Concierge1.png"
            alt="Subscriber concierge — splash"
            initial={{ opacity: 0, y: 30, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="h-[46vh] lg:h-[50vh] w-auto"
            style={{
              filter: 'drop-shadow(0 34px 90px rgba(0,0,0,0.85))',
              borderRadius: '24px',
              zIndex: 3,
              rotate: '0deg',
            }}
          />

          {/* RIGHT phone — tilted back-right, partially hidden behind center */}
          <motion.img
            src="/concierge/Concierge5.png"
            alt="Subscriber concierge — heads-up"
            initial={{ opacity: 0, rotate: 14 }}
            animate={{ opacity: 1, rotate: 7 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="h-[46vh] lg:h-[50vh] w-auto"
            style={{
              filter: 'drop-shadow(0 24px 60px rgba(0,0,0,0.7))',
              borderRadius: '20px',
              marginLeft: '2vw',
              zIndex: 1,
            }}
          />

        </div>

      </div>
    </div>
  );
}
