import { motion } from 'framer-motion';
import { tr } from '../i18n';

const ANTON = "'Anton', sans-serif";
const MONO = "'Geist Mono', monospace";

const LIT = new Set([0, 3, 7, 12, 15, 19, 21, 26, 28, 30, 33, 35]);

const T = tr({
  en: {
    headLead: 'What a multi-tenant',
    headAccent: 'agent OS',
    headTail: 'buys',
    subtitle: (
      <>
        <span className="text-[#fefefe] font-bold">AOS runs agents the way an operating system runs processes:</span> lightweight capsules on a shared kernel. Isolation is enforced by the OS, not by duplicating the machine.
      </>
    ),
    overhead: ['app runtime', 'libraries + deps', 'guest userland', 'container engine'],
    containerModel: 'Container model — one agent',
    overheadCaption: <>an OS's worth of overhead,<br />replicated per agent</>,
    capsuleModel: 'AOS capsule model — a fleet',
    sharedKernel: 'shared kernel · OS-enforced isolation',
    capsuleCaption: <>capsules share the kernel —<br /><span className="text-orange-400">bright = executing,</span> the rest cost ~nothing</>,
    stats: [
      {
        num: '1000', sup: '×', label: 'Agent density',
        why: <>Thousands of agents per node instead of a handful. <b className="text-[#fefefe] font-bold">The hardware you already own runs a fleet, not a pilot.</b></>,
      },
      {
        num: '54', sup: '×', label: 'Faster launch than Docker',
        why: <>Capsule spawn vs. container cold start. Agents launch on demand — <b className="text-[#fefefe] font-bold">no warm pool, no idle burn.</b></>,
      },
      {
        num: 'milliseconds', sup: '', label: 'To first token', size: 'clamp(22px, 2.6vw, 36px)',
        why: <>Wake → execute → sleep. Agents become event-driven: <b className="text-[#fefefe] font-bold">they exist only while working.</b></>,
      },
    ],
    verifiableLabel: <>Verifiable<br />execution</>,
    verifiableBody: (
      <>
        Every capsule run is <span className="text-[#fefefe] font-bold">recorded by construction</span> — inputs, actions, and outputs content-addressed into a <span className="text-orange-400">cryptographically verifiable provenance graph.</span>
      </>
    ),
  },
  pt: {
    headLead: 'O que um',
    headAccent: 'OS de agentes multi-tenant',
    headTail: 'oferece',
    subtitle: (
      <>
        <span className="text-[#fefefe] font-bold">O AOS roda agentes como um sistema operacional roda processos:</span> capsules leves sobre um kernel compartilhado. O isolamento é imposto pelo OS, não duplicando a máquina.
      </>
    ),
    overhead: ['runtime da app', 'bibliotecas + deps', 'userland convidado', 'engine de container'],
    containerModel: 'Modelo de container — um agente',
    overheadCaption: <>overhead equivalente a um OS,<br />replicado por agente</>,
    capsuleModel: 'Modelo de capsules do AOS — uma frota',
    sharedKernel: 'kernel compartilhado · isolamento imposto pelo OS',
    capsuleCaption: <>capsules compartilham o kernel —<br /><span className="text-orange-400">aceso = executando,</span> o resto custa ~nada</>,
    stats: [
      {
        num: '1000', sup: '×', label: 'Densidade de agentes',
        why: <>Milhares de agentes por nó em vez de um punhado. <b className="text-[#fefefe] font-bold">O hardware que você já tem roda uma frota, não um piloto.</b></>,
      },
      {
        num: '54', sup: '×', label: 'Lançamento mais rápido que o Docker',
        why: <>Spawn de capsule vs. cold start de container. Agentes iniciam sob demanda — <b className="text-[#fefefe] font-bold">sem warm pool, sem queima ociosa.</b></>,
      },
      {
        num: 'milissegundos', sup: '', label: 'Até o primeiro token', size: 'clamp(22px, 2.6vw, 36px)',
        why: <>Acorda → executa → dorme. Agentes se tornam orientados a eventos: <b className="text-[#fefefe] font-bold">existem apenas enquanto trabalham.</b></>,
      },
    ],
    verifiableLabel: <>Execução<br />verificável</>,
    verifiableBody: (
      <>
        Toda execução de capsule é <span className="text-[#fefefe] font-bold">registrada por construção</span> — entradas, ações e saídas endereçadas por conteúdo em um <span className="text-orange-400">grafo de proveniência verificável criptograficamente.</span>
      </>
    ),
  },
});

const overhead = T.overhead;
const stats = T.stats;

export function AosDensitySlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-8 lg:py-10 gap-5 lg:gap-6">

        {/* Header */}
        <div className="shrink-0">
          <motion.h1
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#fefefe] text-[32px] sm:text-[44px] lg:text-[60px] xl:text-[70px] leading-[1.0] tracking-tight uppercase max-w-6xl"
            style={{ fontFamily: ANTON }}
          >
            {T.headLead} <span className="text-orange-400">{T.headAccent}</span> {T.headTail}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-3 text-[#fefefe]/70 text-base lg:text-lg leading-relaxed max-w-5xl"
            style={{ fontFamily: MONO }}
          >
{T.subtitle}
          </motion.p>
        </div>

        {/* Main: diagram + stats */}
        <div className="flex gap-6 lg:gap-8 items-stretch">

          {/* Diagram panel */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex-[0_0_46%] rounded-xl border border-white/10 bg-white/[0.02] p-5 flex gap-7"
          >
            {/* Container model */}
            <div className="flex-1 flex flex-col">
              <p className="text-[#fefefe]/40 text-[10px] lg:text-[11px] tracking-[0.14em] uppercase mb-3" style={{ fontFamily: MONO }}>{T.containerModel}</p>
              <div className="flex flex-col gap-1.5">
                <div className="rounded border border-[#3a4450] bg-[#1b222b] text-[#fefefe] text-xs lg:text-sm px-3 py-2.5" style={{ fontFamily: MONO }}>agent</div>
                {overhead.map((o) => (
                  <div key={o} className="rounded border border-dashed border-white/15 text-[#fefefe]/35 text-xs lg:text-sm px-3 py-2.5" style={{ fontFamily: MONO }}>{o}</div>
                ))}
              </div>
              <p className="text-[#fefefe]/35 text-[11px] lg:text-sm leading-snug mt-2" style={{ fontFamily: MONO }}>{T.overheadCaption}</p>
            </div>

            {/* AOS capsule model */}
            <div className="flex-1 flex flex-col">
              <p className="text-orange-400 text-[10px] lg:text-[11px] tracking-[0.14em] uppercase mb-3" style={{ fontFamily: MONO }}>{T.capsuleModel}</p>
              <div className="flex flex-col gap-1.5">
                <div className="grid grid-cols-10 gap-1 mb-1">
                  {Array.from({ length: 40 }).map((_, i) => (
                    <span
                      key={i}
                      className="rounded-[2px]"
                      style={{
                        aspectRatio: '1.55',
                        background: LIT.has(i) ? '#f97316' : 'rgba(249,115,22,0.22)',
                        border: LIT.has(i) ? '1px solid #f97316' : '1px solid rgba(249,115,22,0.3)',
                      }}
                    />
                  ))}
                </div>
                <div className="rounded text-center text-orange-400 text-xs lg:text-sm px-3 py-2.5" style={{ fontFamily: MONO, border: '1px solid rgba(249,115,22,0.4)', background: 'rgba(249,115,22,0.07)' }}>
                  {T.sharedKernel}
                </div>
              </div>
              <p className="text-[#fefefe]/35 text-[11px] lg:text-sm leading-snug mt-2" style={{ fontFamily: MONO }}>
                {T.capsuleCaption}
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <div className="flex-1 flex flex-col gap-3 lg:gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.45 }}
                className="flex-1 rounded-xl border border-white/10 bg-white/[0.02] border-l-[3px] border-l-orange-500 px-6 py-3 flex flex-col justify-center"
              >
                <p className="text-[#fefefe] leading-none" style={{ fontFamily: ANTON, fontSize: (s as { size?: string }).size ?? 'clamp(32px, 3.6vw, 50px)' }}>
                  {s.num}<span className="text-orange-400" style={{ fontSize: '0.95em' }}>{s.sup}</span>
                </p>
                <p className="text-orange-400 text-[11px] lg:text-sm tracking-[0.16em] uppercase mt-2 mb-1.5" style={{ fontFamily: MONO }}>{s.label}</p>
                <p className="text-[#fefefe]/70 text-sm lg:text-base leading-snug" style={{ fontFamily: MONO }}>{s.why}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Verifiable execution band */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="shrink-0 rounded-xl px-6 py-3.5 flex items-center gap-5 lg:gap-6"
          style={{ border: '1px solid rgba(249,115,22,0.4)', background: 'rgba(249,115,22,0.04)' }}
        >
          <p className="text-orange-400 text-[11px] lg:text-sm tracking-[0.16em] uppercase leading-tight shrink-0" style={{ fontFamily: MONO }}>{T.verifiableLabel}</p>
          <p className="text-[#fefefe]/75 text-sm lg:text-lg leading-snug flex-1" style={{ fontFamily: MONO }}>
            {T.verifiableBody}
          </p>
          <p className="text-orange-400 text-[10px] lg:text-[11px] whitespace-nowrap shrink-0 hidden xl:block" style={{ fontFamily: MONO }}>
            #a1f3…9c <span className="text-[#fefefe]/35">→</span> #c48d…1e <span className="text-[#fefefe]/35">→</span> #e02a…b7 ✓
          </p>
        </motion.div>

      </div>
    </div>
  );
}
