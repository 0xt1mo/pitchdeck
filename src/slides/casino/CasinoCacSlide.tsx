import { motion } from 'framer-motion';

export function CasinoCacSlide() {
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
              Nº 03 · Aquisição
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="text-[#fefefe] text-[32px] sm:text-[44px] lg:text-[64px] leading-[0.98] tracking-tight mt-3 uppercase"
              style={{ fontFamily: "'Anton', sans-serif" }}
            >
              Agentes são seu novo{' '}
              <span className="text-orange-400">canal de aquisição.</span>
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
              Hoje você compra cada jogador com saldo por <span className="text-[#fefefe] font-semibold">centenas de dólares</span> — busca paga, revenue share de afiliados, bônus de boas-vindas — e espera um ano para empatar. Quando o agente do jogador recomenda você, o cliente chega <span className="text-[#fefefe] font-semibold">pré-qualificado e pronto para apostar.</span>{' '}
              <span className="text-orange-400 font-semibold">Conquiste a confiança do agente e seu CAC despenca.</span>
            </motion.p>
          </div>

          {/* Right column — agent screenshot */}
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
              src="/images/casino-agent-intent.png"
              alt="Agente perguntando ao concierge quais jogos estão disponíveis"
              className="block mx-auto w-full max-w-[340px] h-auto"
              style={{ filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.6))' }}
            />
          </motion.div>

        </div>
      </div>
    </div>
  );
}
