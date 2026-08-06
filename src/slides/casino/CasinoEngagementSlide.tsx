import { motion } from 'framer-motion';
import { tr } from '../../i18n';

const T = tr({
  en: {
    eyebrow: 'Nº 04 · Engagement',
    headLead: 'Agents keep players',
    headAccent: 'in the game.',
    body: (
      <>
        Push notifications get ignored. The agent runs a <span className="text-[#fefefe] font-semibold">live activity stream</span> — tournaments, new slots, jackpots, trending tables — and acts on the ones the player cares about.{' '}
        <span className="text-orange-400 font-semibold">Always-on engagement, one tap from a wager.</span>
      </>
    ),
    imgAlt: 'Concierge live activity stream of MagicCasino engagement prompts',
  },
  pt: {
    eyebrow: 'Nº 04 · Engajamento',
    headLead: 'Agentes mantêm os jogadores',
    headAccent: 'no jogo.',
    body: (
      <>
        Notificações push são ignoradas. O agente mantém um <span className="text-[#fefefe] font-semibold">fluxo de atividades ao vivo</span> — torneios, novos slots, jackpots, mesas em alta — e age sobre aqueles que importam ao jogador.{' '}
        <span className="text-orange-400 font-semibold">Engajamento sempre ativo, a um toque de uma aposta.</span>
      </>
    ),
    imgAlt: 'Fluxo de atividades ao vivo do Concierge com prompts de engajamento do MagicCasino',
  },
});

export function CasinoEngagementSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-12 lg:px-20 py-10 lg:py-14 justify-center gap-8">

        <div className="grid grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center">

          {/* Left column — copy */}
          <div className="flex flex-col">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-orange-400 text-xs sm:text-sm tracking-[0.32em] uppercase font-semibold"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              {T.eyebrow}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="text-[#fefefe] text-[32px] sm:text-[44px] lg:text-[64px] leading-[0.98] tracking-tight mt-3 uppercase"
              style={{ fontFamily: "'Anton', sans-serif" }}
            >
              {T.headLead}{' '}
              <span className="text-orange-400">{T.headAccent}</span>
            </motion.h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-[2px] w-24 lg:w-32 bg-orange-500 origin-left mt-5"
              style={{ boxShadow: '0 0 8px rgba(249,115,22,0.7)' }}
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-[#fefefe]/75 text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl mt-7"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              {T.body}
            </motion.p>
          </div>

          {/* Right column — engagement stream screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative justify-self-center w-full max-w-[420px] p-8"
          >
            {/* Bracket corners */}
            <span className="absolute top-0 left-0 w-5 h-5 border-l-2 border-t-2 border-orange-500" />
            <span className="absolute top-0 right-0 w-5 h-5 border-r-2 border-t-2 border-orange-500" />
            <span className="absolute bottom-0 left-0 w-5 h-5 border-l-2 border-b-2 border-orange-500" />
            <span className="absolute bottom-0 right-0 w-5 h-5 border-r-2 border-b-2 border-orange-500" />

            <img
              src="/images/casino-engagement.png"
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
