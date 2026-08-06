import { motion } from 'framer-motion';
import { tr } from '../../i18n';

const T = tr({
  en: {
    tagline: 'A New VIP Agent Has Entered The Room',
    headLead: 'Your next million customers',
    headAccent: "won't be using web or apps.",
    body: 'The first regulated gaming operator to receive Agents at the front door defines the category.',
    imgAlt: 'Concierge — activity stream',
  },
  pt: {
    tagline: 'Um Novo Agente VIP Entrou na Sala',
    headLead: 'Seus próximos milhões de clientes',
    headAccent: 'não vão usar web nem apps.',
    body: 'O primeiro operador de cassino regulado a receber Agentes na porta da frente define a categoria.',
    imgAlt: 'Concierge — fluxo de atividades',
  },
});

export function CasinoCoverSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-12 lg:px-20 py-10 lg:py-14 justify-center gap-8">

        {/* Two-column: text left, phone right */}
        <div className="grid grid-cols-[1fr_1.05fr] gap-10 lg:gap-14 items-center shrink-0">

          {/* Left column — copy */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-3 mb-6"
            >
              <span
                className="text-[#fefefe] text-xl sm:text-2xl tracking-[0.18em]"
                style={{ fontFamily: "'Anton', sans-serif" }}
              >
                UNICITY
              </span>
              <span className="block w-px h-5 bg-orange-500" />
              <span
                className="text-orange-400 text-[11px] sm:text-xs tracking-[0.32em] uppercase font-semibold"
                style={{ fontFamily: "'Geist Mono', monospace" }}
              >
                {T.tagline}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[#fefefe] text-[34px] sm:text-[48px] lg:text-[64px] leading-[0.95] tracking-tight uppercase"
              style={{ fontFamily: "'Anton', sans-serif" }}
            >
              {T.headLead}{' '}
              <span className="text-orange-400">{T.headAccent}</span>
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="h-[2px] w-24 lg:w-32 bg-orange-500 origin-left mt-6 mb-6"
              style={{ boxShadow: '0 0 8px rgba(249,115,22,0.7)' }}
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-[#fefefe]/85 text-base sm:text-lg lg:text-xl leading-relaxed"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              {T.body}
            </motion.p>
          </div>

          {/* Right column — phone mockup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative justify-self-center w-full max-w-[560px] p-8"
          >
            {/* Bracket corners */}
            <span className="absolute top-0 left-0 w-5 h-5 border-l-2 border-t-2 border-orange-500" />
            <span className="absolute top-0 right-0 w-5 h-5 border-r-2 border-t-2 border-orange-500" />
            <span className="absolute bottom-0 left-0 w-5 h-5 border-l-2 border-b-2 border-orange-500" />
            <span className="absolute bottom-0 right-0 w-5 h-5 border-r-2 border-b-2 border-orange-500" />

            {/* Phone screenshot */}
            <img
              src="/images/casino-concierge.png"
              alt={T.imgAlt}
              className="block mx-auto w-full max-w-[340px] h-auto"
              style={{ filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.6))' }}
            />
          </motion.div>
        </div>

      </div>
    </div>
  );
}
