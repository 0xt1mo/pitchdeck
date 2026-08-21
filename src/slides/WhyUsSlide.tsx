import { motion } from 'framer-motion';
import { tr } from '../i18n';

const ANTON = "'Anton', sans-serif";
const MONO = "'Geist Mono', monospace";

type Pillar = { num: string; label: string; stat: string; statSub: string; punch: string; body: string };

const T = tr({
  en: {
    eyebrow: 'Why us · why now',
    headLead: 'The window',
    headAccent: 'is open.',
    subHead: (
      <>
        Safety, compliance and governance are the industry's <span className="text-orange-400">unsolved problem</span> — and
        we are the team that has shipped this kind of infrastructure before.
      </>
    ),
    pillars: [
      {
        num: '01',
        label: 'Timing',
        stat: 'NOW',
        statSub: 'safety · compliance · governance',
        punch: 'Every buyer is stuck on the same problem.',
        body: 'The industry is grappling with safety, compliance and governance right now. Agents are being deployed faster than they can be governed. Whoever solves it at the OS layer sets the standard — and that window is open today.',
      },
      {
        num: '02',
        label: 'Execution',
        stat: '8-FIGURE',
        statSub: 'OEM deals, closed',
        punch: 'We have sold infrastructure at this scale before.',
        body: 'Our CEO has personally closed eight-figure OEM infrastructure deals, with a deep network across telecom and banking — the exact two sectors this platform lands in first.',
      },
      {
        num: '03',
        label: 'Science',
        stat: '80+',
        statSub: 'patents between them',
        punch: 'World-class deep tech, still inventing.',
        body: 'A deep-tech team holding more than 80 patents between them — cryptography, distributed systems and machine learning. We did not stop at the last breakthrough, and we keep inventing.',
      },
    ] as Pillar[],
  },
  pt: {
    eyebrow: 'Por que nós · por que agora',
    headLead: 'A janela',
    headAccent: 'está aberta.',
    subHead: (
      <>
        Segurança, conformidade e governança são o <span className="text-orange-400">problema não resolvido</span> do setor —
        e somos a equipe que já entregou esse tipo de infraestrutura antes.
      </>
    ),
    pillars: [
      {
        num: '01',
        label: 'Momento',
        stat: 'AGORA',
        statSub: 'segurança · conformidade · governança',
        punch: 'Todo comprador está travado no mesmo problema.',
        body: 'O setor está lidando com segurança, conformidade e governança neste exato momento. Agentes são implantados mais rápido do que conseguem ser governados. Quem resolver isso na camada do OS define o padrão — e essa janela está aberta hoje.',
      },
      {
        num: '02',
        label: 'Execução',
        stat: '8 DÍGITOS',
        statSub: 'contratos OEM fechados',
        punch: 'Já vendemos infraestrutura nessa escala.',
        body: 'Nosso CEO fechou pessoalmente contratos OEM de infraestrutura de oito dígitos, com uma rede profunda em telecom e bancos — exatamente os dois setores em que esta plataforma entra primeiro.',
      },
      {
        num: '03',
        label: 'Ciência',
        stat: '80+',
        statSub: 'patentes entre eles',
        punch: 'Deep tech de classe mundial, ainda inventando.',
        body: 'Uma equipe de deep tech com mais de 80 patentes entre seus membros — criptografia, sistemas distribuídos e machine learning. Não paramos no último avanço, e seguimos inventando.',
      },
    ] as Pillar[],
  },
});

export function WhyUsSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      {/* Warm centre wash, same family as the GTM slides */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 65% 60% at 50% 40%, rgba(249,115,22,0.10) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-20 py-10 lg:py-14 gap-8 lg:gap-12">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="tracking-[0.28em] uppercase text-sm lg:text-base"
            style={{ fontFamily: MONO, color: '#fb923c' }}
          >
            {T.eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.7 }}
            className="mt-4 text-[#fefefe] text-[44px] sm:text-[68px] lg:text-[92px] xl:text-[104px] leading-[0.95] tracking-tight uppercase"
            style={{ fontFamily: ANTON }}
          >
            {T.headLead} <span className="text-orange-400">{T.headAccent}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-4 text-[#fefefe]/85 text-base sm:text-lg lg:text-xl leading-relaxed max-w-5xl"
            style={{ fontFamily: MONO }}
          >
            {T.subHead}
          </motion.p>
        </div>

        {/* Three pillars — content-sized columns, ruled off at the top */}
        <div className="shrink-0 grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
          {T.pillars.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.14, duration: 0.55 }}
              className="border-t-2 border-orange-500/70 pt-5"
            >
              {/* Index + label */}
              <div className="flex items-baseline gap-3">
                <span className="text-orange-400/70 text-sm lg:text-base" style={{ fontFamily: MONO }}>
                  {p.num}
                </span>
                <span
                  className="text-orange-400 text-sm lg:text-base tracking-[0.24em] uppercase"
                  style={{ fontFamily: MONO }}
                >
                  {p.label}
                </span>
              </div>

              {/* Headline stat */}
              <p
                className="mt-4 text-orange-400 text-[40px] sm:text-[46px] lg:text-[62px] leading-[0.9] uppercase"
                style={{ fontFamily: ANTON }}
              >
                {p.stat}
              </p>
              <p
                className="mt-1.5 text-[#fefefe]/60 text-sm lg:text-base tracking-[0.12em] uppercase"
                style={{ fontFamily: MONO }}
              >
                {p.statSub}
              </p>

              {/* Punch + body */}
              <p
                className="mt-5 text-[#fefefe] text-xl sm:text-2xl lg:text-[28px] leading-[1.1] uppercase sm:min-h-[2.2em]"
                style={{ fontFamily: ANTON }}
              >
                {p.punch}
              </p>
              <p
                className="mt-3 text-[#fefefe]/75 text-sm lg:text-base leading-relaxed"
                style={{ fontFamily: MONO }}
              >
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
