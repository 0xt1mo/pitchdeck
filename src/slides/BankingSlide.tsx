import { motion } from 'framer-motion';
import { tr } from '../i18n';

const ANTON = "'Anton', sans-serif";
const MONO = "'Geist Mono', monospace";

const T = tr({
  en: {
    eyebrow: 'Go-to-market · Banking',
    headLead: 'BANKING:',
    headAccent: 'give your customers a better experience.',
    subtitle: 'A personal banking agent for every customer — it acts, not just answers. Secure and compliant by construction.',
  },
  pt: {
    eyebrow: 'Go-to-market · Bancos',
    headLead: 'BANCOS:',
    headAccent: 'ofereça uma experiência melhor aos clientes.',
    subtitle: 'Um agente bancário pessoal para cada cliente — que age, não só responde. Seguro e em conformidade por construção.',
  },
});

export function BankingSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      {/* Subtle dotted background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '34px 34px',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 55% 55% at 50% 60%, rgba(249,115,22,0.10) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-6 lg:py-8 gap-5 lg:gap-7">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-orange-400 text-xs lg:text-sm tracking-[0.22em] uppercase mb-2.5"
            style={{ fontFamily: MONO }}
          >
            {T.eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.06, duration: 0.6 }}
            className="text-[#fefefe] text-[26px] sm:text-[38px] lg:text-[52px] xl:text-[58px] leading-[0.95] tracking-tight uppercase"
            style={{ fontFamily: ANTON }}
          >
            {T.headLead} <span className="text-orange-400">{T.headAccent}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-[#fefefe]/70 text-sm sm:text-base lg:text-lg leading-snug mt-2.5 max-w-4xl"
            style={{ fontFamily: MONO }}
          >
            {T.subtitle}
          </motion.p>
        </div>

        {/* Video — front and center */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex justify-center"
        >
          <div
            className="relative w-full max-w-[920px] rounded-xl overflow-hidden border border-white/10"
            style={{ aspectRatio: '16 / 9', boxShadow: '0 30px 90px rgba(0,0,0,0.7)' }}
          >
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/B5XdSSfJjKQ?rel=0&modestbranding=1"
              title="Banking agent"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </motion.div>

      </div>
    </div>
  );
}
