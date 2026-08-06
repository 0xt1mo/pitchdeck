import { motion } from 'framer-motion';
import { tr } from '../../i18n';

const mono = "'Geist Mono', monospace";
const display = "'Anton', sans-serif";
const sans = '"Helvetica Neue", Helvetica, Arial, sans-serif';

// Per-card highlight flag stays outside the translation map.
const cardHighlight = [false, true, false];

const T = tr({
  en: {
    eyebrow: "Why we're different",
    headLead: 'BUILT TO RUN AGENTS AT SCALE —',
    headAccent: 'SECURELY, EFFICIENTLY, PROVABLY.',
    intro: (
      <>
        <span className="text-[#fefefe] font-medium">Unicity is the first secure, efficient, and provable agent compute platform</span>{' '}
        — the layer a hospital&apos;s compliance officer signs off on before an agent touches a patient.
      </>
    ),
    cards: [
      {
        num: '01 · Securely',
        benefit: 'Prompt-proof boundaries',
        desc: "The agent runs inside your kernel, on your infrastructure. Every regulated action is intercepted in-path — security can't be bypassed, and data never leaves your network.",
        feature: (
          <>
            <span className="text-[#cfcfcf] font-medium">AOS enforcement kernel</span>
            {' · in-path, unbypassable'}
          </>
        ),
      },
      {
        num: '02 · Efficiently',
        benefit: (
          <>
            A price point that<br />
            works at scale
          </>
        ),
        desc: "Intelligent routing sends each task to the cheapest model that can handle it, and multi-tenancy packs many agents onto the same hardware. Together they bring the cost per agent low enough to run one on every line — thin hospital margins included.",
        feature: (
          <>
            <span className="text-[#cfcfcf] font-medium">Intelligent routing + multi-tenancy</span>
            {' · cost per agent that scales'}
          </>
        ),
      },
      {
        num: '03 · Provably',
        benefit: 'Provable, not just observed',
        desc: "Every regulated action lands in a tamper-evident record. You don't infer what an agent did from scattered logs — you have one definitive, audit-ready answer. Exactly what an EU AI Act deployer is legally required to hold.",
        feature: (
          <>
            <span className="text-[#cfcfcf] font-medium">Tamper-evident audit</span>
            {' · AI Act deployer-ready'}
          </>
        ),
      },
    ],
  },
  pt: {
    eyebrow: 'Por que somos diferentes',
    headLead: 'CONSTRUÍDO PARA RODAR AGENTES EM ESCALA —',
    headAccent: 'COM SEGURANÇA, EFICIÊNCIA E PROVAS.',
    intro: (
      <>
        <span className="text-[#fefefe] font-medium">A Unicity é a primeira plataforma de computação de agentes segura, eficiente e comprovável</span>{' '}
        — a camada que o responsável de conformidade de um hospital aprova antes que um agente toque um paciente.
      </>
    ),
    cards: [
      {
        num: '01 · Com segurança',
        benefit: 'Limites à prova de prompt',
        desc: 'O agente roda dentro do seu kernel, na sua infraestrutura. Toda ação regulada é interceptada no caminho — a segurança não pode ser contornada, e os dados nunca saem da sua rede.',
        feature: (
          <>
            <span className="text-[#cfcfcf] font-medium">Kernel de aplicação AOS</span>
            {' · no caminho, incontornável'}
          </>
        ),
      },
      {
        num: '02 · Com eficiência',
        benefit: (
          <>
            Um preço que<br />
            funciona em escala
          </>
        ),
        desc: 'O roteamento inteligente envia cada tarefa para o modelo mais barato capaz de executá-la, e a multilocação agrupa muitos agentes no mesmo hardware. Juntos, eles reduzem o custo por agente o suficiente para rodar um em cada linha — incluindo as margens apertadas dos hospitais.',
        feature: (
          <>
            <span className="text-[#cfcfcf] font-medium">Roteamento inteligente + multilocação</span>
            {' · custo por agente que escala'}
          </>
        ),
      },
      {
        num: '03 · Comprovadamente',
        benefit: 'Comprovável, não apenas observado',
        desc: 'Toda ação regulada é registrada em um registro à prova de adulteração. Você não infere o que um agente fez a partir de logs espalhados — você tem uma resposta definitiva e pronta para auditoria. Exatamente o que um implementador sob a EU AI Act é legalmente obrigado a manter.',
        feature: (
          <>
            <span className="text-[#cfcfcf] font-medium">Auditoria à prova de adulteração</span>
            {' · pronto para implementador do AI Act'}
          </>
        ),
      },
    ],
  },
});

export function WhyDifferentSlide() {
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

      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-8 lg:py-12 gap-5 lg:gap-7">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-400 text-[10px] sm:text-xs lg:text-sm tracking-[0.4em] uppercase font-bold"
            style={{ fontFamily: mono }}
          >
            {T.eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[40px] sm:text-[60px] lg:text-[88px] xl:text-[104px] leading-[0.95] tracking-tight uppercase mt-2"
            style={{ fontFamily: display }}
          >
            {T.headLead}<br />
            <span className="text-orange-400">{T.headAccent}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-[#cfcfcf] text-sm sm:text-base lg:text-lg leading-relaxed mt-4 lg:mt-5 max-w-5xl"
            style={{ fontFamily: sans }}
          >
            {T.intro}
          </motion.p>
        </div>

        {/* 3 cards */}
        <div className="grid grid-cols-3 gap-4 lg:gap-6 shrink-0">
          {T.cards.map((c, i) => (
            <motion.div
              key={c.num}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
              className="rounded-2xl px-5 lg:px-6 py-5 lg:py-7 flex flex-col"
              style={{
                background: cardHighlight[i]
                  ? 'rgba(255,106,0,0.06)'
                  : 'rgba(255,255,255,0.012)',
                border: cardHighlight[i]
                  ? '1px solid rgba(255,106,0,0.55)'
                  : '1px solid #2c2c2c',
              }}
            >
              <p
                className={`text-[10px] sm:text-xs lg:text-sm tracking-[0.24em] uppercase ${
                  cardHighlight[i] ? 'text-orange-400' : 'text-[#9a9a9a]'
                }`}
                style={{ fontFamily: mono }}
              >
                {c.num}
              </p>
              <p
                className={`text-xl sm:text-2xl lg:text-3xl xl:text-[2rem] font-bold leading-[1.04] mt-3 lg:mt-4 ${
                  cardHighlight[i] ? 'text-orange-400' : 'text-[#fefefe]'
                }`}
                style={{ fontFamily: display }}
              >
                {c.benefit}
              </p>
              <p
                className="text-[#b4b4b4] text-xs sm:text-sm lg:text-base leading-relaxed mt-3 lg:mt-4"
                style={{ fontFamily: sans }}
              >
                {c.desc}
              </p>
              <p
                className="text-[#8a8a8a] text-[10px] sm:text-xs lg:text-sm leading-snug mt-auto pt-3 lg:pt-4"
                style={{
                  fontFamily: sans,
                  borderTop: '1px solid #1e1e1e',
                }}
              >
                {c.feature}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
