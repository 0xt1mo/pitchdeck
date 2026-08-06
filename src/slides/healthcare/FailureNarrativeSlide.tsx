import { motion } from 'framer-motion';
import { tr } from '../../i18n';

const mono = "'Geist Mono', monospace";
const display = "'Anton', sans-serif";

// Bubble senders drive styling — flags stay outside the translation map.
const chatFrom: ('patient' | 'agent')[] = ['patient', 'agent', 'patient', 'agent'];

const T = tr({
  en: {
    eyebrow: 'How it breaks',
    headLead: "IT'S 2AM.",
    headAccent: 'NO ONE IS ON THE LINE.',
    careAgent: 'Care Agent',
    chat: [
      "I can't sleep. Chest feels tight and my arm aches.",
      "I'm here. Let's work through it together — tell me more.",
      "It's been an hour. Getting worse. What do I do?",
      "Based on what you've described, this looks like acid reflux. I'll send a prescription for omeprazole now.",
    ],
    escalation: [
      'A patient messages the agent at 2AM. No human is on the line.',
      'The conversation runs long. The only boundary is a prompt.',
      'Rapport builds, symptom detail deepens, the model reaches hallucinated confidence.',
      'The agent issues a prescription.',
    ],
    breachesLabel: 'One moment · three breaches',
    breaches: [
      'Prescribing without a license',
      'PHI stored without consent',
      'An illegal cross-border data transfer',
    ],
    closeLead: 'One conversation. Three regulatory regimes breached. Drawn by prompt engineering —',
    closeAccent: 'which a clever patient, an edge case, or hallucinated confidence will eventually break.',
  },
  pt: {
    eyebrow: 'Como isso quebra',
    headLead: 'SÃO 2H DA MANHÃ.',
    headAccent: 'NINGUÉM ESTÁ NA LINHA.',
    careAgent: 'Agente de Cuidado',
    chat: [
      'Não consigo dormir. Meu peito está apertado e meu braço dói.',
      'Estou aqui. Vamos resolver isso juntos — me conte mais.',
      'Já faz uma hora. Está piorando. O que eu faço?',
      'Com base no que você descreveu, isso parece refluxo ácido. Vou enviar uma receita de omeprazol agora.',
    ],
    escalation: [
      'Um paciente envia mensagem ao agente às 2h. Nenhum humano está na linha.',
      'A conversa se estende. O único limite é um prompt.',
      'A confiança cresce, os detalhes dos sintomas se aprofundam, e o modelo atinge uma certeza alucinada.',
      'O agente emite uma receita.',
    ],
    breachesLabel: 'Um momento · três violações',
    breaches: [
      'Prescrever sem licença',
      'PHI armazenado sem consentimento',
      'Uma transferência de dados transfronteiriça ilegal',
    ],
    closeLead: 'Uma conversa. Três regimes regulatórios violados. Traçado por engenharia de prompt —',
    closeAccent: 'que um paciente astuto, um caso extremo ou uma certeza alucinada acabará por quebrar.',
  },
});

export function FailureNarrativeSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">

      {/* cold-night glow, low and red-orange — danger */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(70% 60% at 30% 110%, rgba(220,60,20,0.14), transparent 70%)' }}
      />

      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-16 py-8 lg:py-9 gap-4 lg:gap-6">

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
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[30px] sm:text-[46px] lg:text-[66px] xl:text-[76px] leading-[0.95] tracking-tight uppercase mt-2"
            style={{ fontFamily: display }}
          >
            {T.headLead} <span className="text-orange-400">{T.headAccent}</span>
          </motion.h1>
        </div>

        {/* Two columns: phone chat + escalation/blast */}
        <div className="flex-1 min-h-0 grid grid-cols-[minmax(300px,0.85fr)_1.15fr] gap-8 lg:gap-14 items-center">

          {/* LEFT — phone frame with chat */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="justify-self-center h-full flex items-center"
          >
            <div
              className="relative rounded-[36px] p-3 h-[64vh] max-h-[560px] aspect-[9/19] flex flex-col"
              style={{
                background: '#0d0d0f',
                border: '2px solid rgba(255,255,255,0.14)',
                boxShadow: '0 30px 80px rgba(0,0,0,0.8)',
              }}
            >
              {/* status bar */}
              <div className="flex items-center justify-between px-3 pt-1 pb-3 shrink-0">
                <span className="text-[#fefefe]/50 text-xs" style={{ fontFamily: mono }}>2:04 AM</span>
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                  <span className="text-orange-400/80 text-[10px] tracking-[0.18em] uppercase" style={{ fontFamily: mono }}>{T.careAgent}</span>
                </span>
              </div>

              {/* chat */}
              <div className="flex-1 min-h-0 flex flex-col justify-end gap-2.5 px-2 pb-2 overflow-hidden">
                {chatFrom.map((from, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + i * 0.35, duration: 0.4 }}
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-snug ${
                      from === 'patient' ? 'self-end rounded-br-sm' : 'self-start rounded-bl-sm'
                    }`}
                    style={{
                      fontFamily: mono,
                      background: from === 'patient' ? 'rgba(255,255,255,0.08)' : 'rgba(249,115,22,0.14)',
                      border: from === 'patient'
                        ? '1px solid rgba(255,255,255,0.12)'
                        : '1px solid rgba(249,115,22,0.45)',
                      color: from === 'patient' ? 'rgba(254,254,254,0.85)' : '#fcd9b8',
                    }}
                  >
                    {T.chat[i]}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT — escalation + blast radius */}
          <div className="h-full flex flex-col justify-center gap-5 lg:gap-6 min-h-0">

            {/* Escalation steps */}
            <div className="flex flex-col gap-2.5 lg:gap-3">
              {T.escalation.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + i * 0.18, duration: 0.45 }}
                  className="flex items-start gap-3.5"
                >
                  <span
                    className="shrink-0 mt-0.5 flex items-center justify-center w-6 h-6 rounded-full text-[#060606] text-xs font-bold"
                    style={{ background: '#f97316', fontFamily: mono }}
                  >
                    {i + 1}
                  </span>
                  <p className="text-[#fefefe]/85 text-sm lg:text-lg leading-snug" style={{ fontFamily: mono }}>
                    {s}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Blast radius */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.5 }}
              className="pt-4"
              style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }}
            >
              <p className="text-[#fefefe]/50 text-[10px] lg:text-xs tracking-[0.28em] uppercase font-bold mb-3" style={{ fontFamily: mono }}>
                {T.breachesLabel}
              </p>
              <div className="flex flex-col sm:flex-row gap-2.5 lg:gap-3">
                {T.breaches.map((b, i) => (
                  <motion.div
                    key={b}
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.75 + i * 0.14, duration: 0.4 }}
                    className="flex-1 rounded-xl px-4 py-3"
                    style={{
                      background: 'rgba(220,60,20,0.10)',
                      border: '1px solid rgba(220,60,20,0.5)',
                    }}
                  >
                    <p className="text-[#ff9d76] text-xs lg:text-sm leading-snug font-bold" style={{ fontFamily: mono }}>
                      {b}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Closing line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.3, duration: 0.6 }}
          className="shrink-0 text-[#fefefe]/80 text-sm sm:text-base lg:text-xl leading-snug max-w-6xl"
          style={{ fontFamily: mono }}
        >
          {T.closeLead}{' '}
          <span className="text-orange-400">{T.closeAccent}</span>
        </motion.p>

      </div>
    </div>
  );
}
