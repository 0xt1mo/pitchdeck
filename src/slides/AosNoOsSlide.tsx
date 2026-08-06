import { motion } from 'framer-motion';
import { tr } from '../i18n';

const mono = "'Geist Mono', monospace";
const display = "'Anton', sans-serif";

const T = tr({
  en: {
    kicker: 'The problem',
    headLead: 'YOU ALREADY RUN AGENTS.',
    headAccent: "YOU JUST CAN'T TRUST THEM.",
    points: [
      { lead: "You can't enumerate them.", rest: 'Shadow agents spin up across teams — unseen, uninventoried, ungoverned.' },
      { lead: "You can't attribute their actions.", rest: 'No line from a decision back to the human who authorized it.' },
      { lead: "You can't govern their spend.", rest: 'Token and tool costs run open-loop, with no per-agent ceiling.' },
      { lead: "You can't prove what they did.", rest: 'When the auditor asks, you have logs — not evidence.' },
    ],
  },
  pt: {
    kicker: 'O problema',
    headLead: 'VOCÊ JÁ EXECUTA AGENTES.',
    headAccent: 'SÓ NÃO CONSEGUE CONFIAR NELES.',
    points: [
      { lead: 'Você não consegue enumerá-los.', rest: 'Agentes-sombra surgem entre as equipes — invisíveis, sem inventário, sem governança.' },
      { lead: 'Você não consegue atribuir suas ações.', rest: 'Nenhuma linha ligando uma decisão de volta ao humano que a autorizou.' },
      { lead: 'Você não consegue governar seus gastos.', rest: 'Os custos de tokens e ferramentas correm em malha aberta, sem teto por agente.' },
      { lead: 'Você não consegue provar o que eles fizeram.', rest: 'Quando o auditor pergunta, você tem logs — não evidências.' },
    ],
  },
});

export function AosNoOsSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-20 py-10 lg:py-14 gap-6 lg:gap-9">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-400 text-xs sm:text-xs lg:text-lg tracking-[0.4em] uppercase font-bold"
            style={{ fontFamily: mono }}
          >
            {T.kicker}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[32px] sm:text-[48px] lg:text-[66px] xl:text-[78px] leading-[0.95] tracking-tight uppercase mt-2 max-w-6xl"
            style={{ fontFamily: display }}
          >
            {T.headLead}{' '}
            <span className="text-orange-400">{T.headAccent}</span>
          </motion.h1>
        </div>

        {/* Points */}
        <div className="shrink-0 grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-4 lg:gap-y-6 max-w-6xl">
          {T.points.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.12, duration: 0.5 }}
              className="flex flex-col gap-1.5 pl-5 lg:pl-6"
              style={{ borderLeft: '3px solid rgba(249,115,22,0.7)' }}
            >
              <p className="text-orange-400 text-lg sm:text-xl lg:text-3xl font-bold leading-tight" style={{ fontFamily: display }}>
                {p.lead}
              </p>
              <p className="text-[#fefefe]/80 text-sm sm:text-base lg:text-xl leading-snug" style={{ fontFamily: mono }}>
                {p.rest}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
