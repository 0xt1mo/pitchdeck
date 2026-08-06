import { motion } from 'framer-motion';
import { tr } from '../i18n';

const mono = "'Geist Mono', monospace";
const display = "'Anton', sans-serif";

// Non-text stage styling (colors, status dots) stays outside the tr map.
const loopMeta = [
  { color: '#4ade80', dot: '●' },
  { color: '#9ca3af', dot: '○' },
  { color: '#9ca3af', dot: '○' },
  { color: '#fbbf24', dot: '◐' },
  { color: '#9ca3af', dot: '○' },
];

const T = tr({
  en: {
    kicker: 'Loop One · Behavior',
    tagline: '○ The same pattern, extended',
    headLead: 'Next, it learns',
    headAccent: 'behavior.',
    sub: (
      <>
        The OS learns each agent's <span className="text-orange-400">normal — a live, per-agent flow graph</span> — then flags anomalies and can downgrade access rights automatically. Layered on top of the deterministic policies already enforced.
      </>
    ),
    loop: [
      { name: 'CAPTURE', status: 'SHIPPED', desc: 'Everything on the bus; audit is fail-closed — no record, no action.' },
      { name: 'BASELINE', status: 'HORIZON', desc: "Learn each agent's normal — a live per-agent flow graph of its calls, tools, and paths." },
      { name: 'DETECT', status: 'HORIZON', desc: 'Deviation from that graph — the agent that just opened three email accounts and started scraping.' },
      { name: 'ACT', status: 'RULES IN BUILD', desc: 'Alert, revoke tokens, downgrade access rights — automatically, at 3 a.m., without waking anyone.' },
      { name: 'LEARN', status: 'HORIZON', desc: 'Every intervention sharpens the baseline and calibrates the risk score.' },
    ],
    outputs: [
      { label: 'OUTPUT · A RISK SCORE THAT MEANS SOMETHING', desc: 'Not arithmetic with arbitrary weights — calibrated against what actually happened.' },
      { label: 'OUTPUT · A BASELINE LEARNED INSIDE YOUR WALLS', desc: "Per-deployment models, no pooled customer data. Healthcare's normal isn't finance's." },
    ],
  },
  pt: {
    kicker: 'Loop One · Comportamento',
    tagline: '○ O mesmo padrão, estendido',
    headLead: 'Em seguida, ela aprende',
    headAccent: 'comportamento.',
    sub: (
      <>
        O OS aprende o <span className="text-orange-400">normal de cada agente — um flow graph ao vivo, por agente</span> — então sinaliza anomalias e pode rebaixar direitos de acesso automaticamente. Sobreposto às políticas determinísticas já aplicadas.
      </>
    ),
    loop: [
      { name: 'CAPTURA', status: 'DISPONÍVEL', desc: 'Tudo no bus; a auditoria é fail-closed — sem registro, sem ação.' },
      { name: 'BASELINE', status: 'HORIZONTE', desc: 'Aprenda o normal de cada agente — um flow graph ao vivo, por agente, de suas chamadas, ferramentas e caminhos.' },
      { name: 'DETECÇÃO', status: 'HORIZONTE', desc: 'Desvio desse graph — o agente que acabou de abrir três contas de e-mail e começou a fazer scraping.' },
      { name: 'AÇÃO', status: 'REGRAS EM CONSTRUÇÃO', desc: 'Alertar, revogar tokens, rebaixar direitos de acesso — automaticamente, às 3 da manhã, sem acordar ninguém.' },
      { name: 'APRENDIZADO', status: 'HORIZONTE', desc: 'Cada intervenção aprimora a baseline e calibra o risk score.' },
    ],
    outputs: [
      { label: 'OUTPUT · UM RISK SCORE QUE SIGNIFICA ALGO', desc: 'Não aritmética com pesos arbitrários — calibrado contra o que de fato aconteceu.' },
      { label: 'OUTPUT · UMA BASELINE APRENDIDA DENTRO DOS SEUS MUROS', desc: 'Modelos por implantação, sem dados de clientes agrupados. O normal da saúde não é o das finanças.' },
    ],
  },
});

export function AosLearningLoopBehaviorSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-8 lg:py-11 gap-5 lg:gap-7">

        {/* Header */}
        <div className="shrink-0">
          <div className="flex items-baseline gap-4 flex-wrap">
            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="text-orange-400 text-xs lg:text-lg tracking-[0.4em] uppercase font-bold"
              style={{ fontFamily: mono }}
            >
              {T.kicker}
            </motion.p>
            <span className="text-[#9ca3af] text-xs lg:text-base tracking-[0.14em] uppercase" style={{ fontFamily: mono }}>{T.tagline}</span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[36px] sm:text-[56px] lg:text-[80px] xl:text-[92px] leading-[0.95] tracking-tight uppercase mt-2"
            style={{ fontFamily: display }}
          >
            {T.headLead} <span className="text-orange-400">{T.headAccent}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-[#fefefe]/80 text-sm sm:text-base lg:text-xl leading-snug mt-3 max-w-6xl"
            style={{ fontFamily: mono }}
          >
            {T.sub}
          </motion.p>
        </div>

        {/* Loop One — 5-stage ladder */}
        <div className="shrink-0 flex flex-col lg:flex-row items-stretch gap-3 lg:gap-2.5">
          {T.loop.map((c, i) => (
            <div key={i} className="contents">
              <motion.div
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 + i * 0.07, duration: 0.4 }}
                className="flex-1 rounded-xl px-4 py-4 lg:py-5 flex flex-col"
                style={{ border: '1px solid #2e2e2e', background: '#111' }}
              >
                <p className="text-[#fefefe] text-lg lg:text-2xl font-bold leading-none" style={{ fontFamily: mono }}>{c.name}</p>
                <p className="text-xs lg:text-sm tracking-[0.1em] uppercase mt-2" style={{ fontFamily: mono, color: loopMeta[i].color }}>{loopMeta[i].dot} {c.status}</p>
                <p className="text-[#9a9a9a] text-sm lg:text-base leading-snug mt-3" style={{ fontFamily: mono }}>{c.desc}</p>
              </motion.div>
              {i < T.loop.length - 1 && <span className="hidden lg:flex items-center text-[#5f5f5f] text-xl">→</span>}
            </div>
          ))}
        </div>

        {/* Outputs */}
        <div className="shrink-0 grid grid-cols-1 lg:grid-cols-2 gap-4">
          {T.outputs.map((o, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
              className="rounded-xl px-6 py-4 lg:py-5" style={{ border: '1px solid #2e2e2e', background: '#111', borderLeft: '3px solid #f97316' }}
            >
              <p className="text-orange-400 text-sm lg:text-lg tracking-[0.1em] uppercase font-bold" style={{ fontFamily: mono }}>{o.label}</p>
              <p className="text-[#b8b8b8] text-sm lg:text-xl leading-snug mt-2" style={{ fontFamily: mono }}>{o.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
