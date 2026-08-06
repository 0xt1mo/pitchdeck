import { motion } from 'framer-motion';
import { tr } from '../i18n';

const mono = "'Geist Mono', monospace";
const display = "'Anton', sans-serif";

// Non-text styling (dots, colors, highlight flags) stays outside the tr map.
const residentMeta = [
  { dot: '●', color: '#4ade80', highlight: false },
  { dot: '●', color: '#4ade80', highlight: false },
  { dot: '●', color: '#4ade80', highlight: false },
  { dot: '', color: '#c9a583', highlight: true },
];
const togetherMeta = [{ highlight: false }, { highlight: true }, { highlight: false }];

const T = tr({
  en: {
    kicker: 'The resolution',
    headLead: 'Owned by no model vendor.',
    headAccent: 'Running all of them.',
    sub: (
      <>
        We don't compete with harnesses — we run them. Yours keeps its brain and its interface, and gains the guarantees:{' '}
        <span className="text-orange-400">isolation, permissions, audit, budgets.</span>
      </>
    ),
    platformLabel: 'Harnesses — residents · at the same time, on the same machine',
    runOn: '↓  run on  ↓',
    runThemTogether: 'Run them together',
    residents: [
      { name: 'Claude Code', status: 'SHIPPED' },
      { name: 'Codex', status: 'SHIPPED' },
      { name: 'Grok Code', status: 'SHIPPED' },
      { name: 'YOURS', status: 'ANY FRAMEWORK' },
    ],
    together: [
      { label: 'SEALED APART', body: 'Each harness in its own sandbox, with its own identity and permissions — isolation by construction.' },
      { label: 'ONE RULEBOOK', body: 'One policy plane over all of them — same budgets, guardrails, audit, and kill switch. No more silo per framework.' },
      { label: 'SHARED PARTS', body: 'One shelf serves every resident — install a capsule once, grant it to any harness. The right harness per job.' },
    ],
  },
  pt: {
    kicker: 'A resolução',
    headLead: 'Não pertence a nenhum fornecedor de modelo.',
    headAccent: 'Executando todos eles.',
    sub: (
      <>
        Nós não competimos com os harnesses — nós os executamos. O seu mantém seu cérebro e sua interface, e ganha as garantias:{' '}
        <span className="text-orange-400">isolamento, permissões, auditoria, orçamentos.</span>
      </>
    ),
    platformLabel: 'Harnesses — residentes · ao mesmo tempo, na mesma máquina',
    runOn: '↓  executam sobre  ↓',
    runThemTogether: 'Execute-os juntos',
    residents: [
      { name: 'Claude Code', status: 'ENTREGUE' },
      { name: 'Codex', status: 'ENTREGUE' },
      { name: 'Grok Code', status: 'ENTREGUE' },
      { name: 'O SEU', status: 'QUALQUER FRAMEWORK' },
    ],
    together: [
      { label: 'SELADOS À PARTE', body: 'Cada harness em seu próprio sandbox, com identidade e permissões próprias — isolamento por construção.' },
      { label: 'UM ÚNICO REGULAMENTO', body: 'Um único plano de políticas sobre todos eles — mesmos orçamentos, guardrails, auditoria e kill switch. Chega de silo por framework.' },
      { label: 'PEÇAS COMPARTILHADAS', body: 'Uma única prateleira serve cada residente — instale um capsule uma vez, conceda-o a qualquer harness. O harness certo para cada tarefa.' },
    ],
  },
});

export function AosResolutionSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-8 lg:py-10 gap-5 lg:gap-7">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-400 text-xs lg:text-lg tracking-[0.4em] uppercase font-bold"
            style={{ fontFamily: mono }}
          >
            {T.kicker}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[30px] sm:text-[44px] lg:text-[58px] xl:text-[66px] leading-[1.0] tracking-tight uppercase mt-2"
            style={{ fontFamily: display }}
          >
            {T.headLead} <span className="text-orange-400">{T.headAccent}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-[#fefefe]/80 text-sm sm:text-base lg:text-2xl leading-snug mt-3 max-w-6xl"
            style={{ fontFamily: mono }}
          >
            {T.sub}
          </motion.p>
        </div>

        {/* Residents platform card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="shrink-0 rounded-xl p-3.5 lg:p-4"
          style={{ border: '1px solid #3a3a3a', background: '#0d0d0d' }}
        >
          <p className="text-center text-[#8f8f8f] text-xs lg:text-lg tracking-[0.18em] uppercase mb-3" style={{ fontFamily: mono }}>
            {T.platformLabel}
          </p>
          <div className="grid grid-cols-4 gap-2.5">
            {T.residents.map((r, i) => (
              <div
                key={i}
                className="rounded-lg py-2.5 text-center"
                style={{
                  background: residentMeta[i].highlight ? '#1a0f05' : '#141414',
                  border: residentMeta[i].highlight ? '1px solid #f97316' : '1px solid #3a3a3a',
                }}
              >
                <p className={`text-sm lg:text-2xl ${residentMeta[i].highlight ? 'text-orange-400' : 'text-[#e8e8e8]'}`} style={{ fontFamily: mono }}>
                  {r.name}
                </p>
                <p className="text-[11px] lg:text-xs tracking-[0.12em] mt-1" style={{ fontFamily: mono, color: residentMeta[i].color }}>
                  {residentMeta[i].dot ? `${residentMeta[i].dot} ` : ''}{r.status}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center text-orange-400 text-base my-2">{T.runOn}</p>
          <div className="rounded-lg py-3 text-center" style={{ background: '#1a0f05', border: '1px solid #f97316' }}>
            <p className="text-orange-400 text-xl lg:text-3xl leading-none uppercase" style={{ fontFamily: display }}>
              Unicity AOS
            </p>
          </div>
        </motion.div>

        {/* Run them together */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="text-orange-400 text-xs lg:text-lg tracking-[0.18em] uppercase mb-2.5 font-bold" style={{ fontFamily: mono }}
          >
            {T.runThemTogether}
          </motion.p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
            {T.together.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 + i * 0.08, duration: 0.4 }}
                className="rounded-xl px-4 py-3.5 lg:px-5 lg:py-4"
                style={{ background: togetherMeta[i].highlight ? '#160d05' : '#111', border: togetherMeta[i].highlight ? '1px solid #f97316' : '1px solid #2e2e2e' }}
              >
                <p className={`text-sm lg:text-xl tracking-[0.08em] uppercase font-bold ${togetherMeta[i].highlight ? 'text-orange-400' : 'text-[#e8e8e8]'}`} style={{ fontFamily: mono }}>
                  {c.label}
                </p>
                <p className={`text-xs lg:text-xl leading-snug mt-2 ${togetherMeta[i].highlight ? 'text-[#e8d5c4]' : 'text-[#a8a8a8]'}`} style={{ fontFamily: mono }}>
                  {c.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
