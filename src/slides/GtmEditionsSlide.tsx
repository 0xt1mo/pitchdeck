import { motion } from 'framer-motion';
import { tr } from '../i18n';

const mono = "'Geist Mono', monospace";
const display = "'Anton', sans-serif";

type Item = { t: string; sub?: string };
type Column = { title: string; sub: string; accent: boolean; marker: string; items: Item[] };

const T = tr({
  en: {
    headLead: 'Business',
    headAccent: 'Model.',
    subtitle: (
      <>
        Distribution is through <span className="text-[#fefefe] font-bold">channel partners</span> in Europe, MEA, US and Brazil — targeting regulated industries adopting agents. Our role is to deliver product.
      </>
    ),
    columns: [
      {
        title: 'Community',
        sub: 'Free · open',
        accent: false,
        marker: '—',
        items: [
          { t: 'Full OS on the open engine' },
          { t: 'Installers & distributions' },
          { t: 'Capsule marketplace' },
          { t: 'Developer bottom-up adoption' },
        ],
      },
      {
        title: 'Enterprise',
        sub: 'Licensed · governed',
        accent: false,
        marker: '+',
        items: [
          { t: 'The same engine — no fork' },
          { t: 'Guardrails: Compliance, Security, Governance' },
          { t: 'RBAC, SSO, SIEM…' },
          { t: 'VPC / on-prem · per-agent licensing' },
        ],
      },
      {
        title: 'Industry Solutions',
        sub: 'Partner-led · rev share',
        accent: true,
        marker: '+',
        items: [
          { t: 'Channel partners build & ship on AOS' },
          { t: 'Revenue share on every deployment' },
          { t: 'Telecom · banking · medical · government' },
          { t: 'Signed: Aleria — UAE sovereign AI' },
          { t: 'Concierge — $5 / sub / month' },
          { t: 'Ramukaka — $5 / customer / month' },
          { t: 'Codewall — $15 / dev / month' },
        ],
      },
    ] as Column[],
    trustLine: (
      <>
        One OS underneath — adopt it free, license it, or <span className="text-orange-400">buy a finished solution built on top.</span>
      </>
    ),
  },
  pt: {
    headLead: 'Modelo de',
    headAccent: 'Negócio.',
    subtitle: (
      <>
        A distribuição é feita por <span className="text-[#fefefe] font-bold">parceiros de canal</span> na Europa, MEA, EUA e Brasil — mirando setores regulados que estão adotando agentes. Nosso papel é entregar produto.
      </>
    ),
    columns: [
      {
        title: 'Comunidade',
        sub: 'Gratuito · aberto',
        accent: false,
        marker: '—',
        items: [
          { t: 'OS completo sobre o motor aberto' },
          { t: 'Instaladores e distribuições' },
          { t: 'Marketplace de capsules' },
          { t: 'Adoção bottom-up por desenvolvedores' },
        ],
      },
      {
        title: 'Enterprise',
        sub: 'Licenciado · governado',
        accent: false,
        marker: '+',
        items: [
          { t: 'O mesmo motor — sem fork' },
          { t: 'Guardrails: Compliance, Segurança, Governança' },
          { t: 'RBAC, SSO, SIEM…' },
          { t: 'VPC / on-prem · licenciamento por agente' },
        ],
      },
      {
        title: 'Soluções Setoriais',
        sub: 'Liderado por parceiros · divisão de receita',
        accent: true,
        marker: '+',
        items: [
          { t: 'Parceiros de canal constroem e lançam no AOS' },
          { t: 'Divisão de receita em cada implantação' },
          { t: 'Telecom · bancos · saúde · governo' },
          { t: 'Assinado: Aleria — IA soberana dos Emirados Árabes Unidos' },
          { t: 'Concierge — $5 / cliente / mês' },
          { t: 'Ramukaka — $5 / cliente / mês' },
          { t: 'Codewall — $15 / dev / mês' },
        ],
      },
    ] as Column[],
    trustLine: (
      <>
        Um único OS por baixo — adote-o gratuitamente, licencie-o ou <span className="text-orange-400">compre uma solução pronta construída em cima.</span>
      </>
    ),
  },
});

const columns = T.columns;

export function GtmEditionsSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-8 lg:py-11 gap-6 lg:gap-8">

        {/* Header */}
        <div className="shrink-0">
          <motion.h1
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[34px] sm:text-[52px] lg:text-[64px] xl:text-[72px] leading-[0.95] tracking-tight uppercase"
            style={{ fontFamily: display }}
          >
            {T.headLead} <span className="text-orange-400">{T.headAccent}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-[#fefefe]/80 text-base sm:text-lg lg:text-2xl leading-snug mt-4 max-w-6xl"
            style={{ fontFamily: mono }}
          >
            {T.subtitle}
          </motion.p>
        </div>

        {/* Three columns */}
        <div className="shrink-0 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5">
          {columns.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
              className={
                c.accent
                  ? 'rounded-2xl border-2 border-orange-500 bg-orange-500/[0.06] p-5 lg:p-6'
                  : 'rounded-2xl border border-[#fefefe]/14 bg-[#fefefe]/[0.02] p-5 lg:p-6'
              }
              style={c.accent ? { boxShadow: '0 0 28px rgba(249,115,22,0.14)' } : undefined}
            >
              <p className="text-[#fefefe] text-3xl lg:text-4xl leading-none uppercase" style={{ fontFamily: display }}>{c.title}</p>
              <p
                className={`text-sm lg:text-lg tracking-[0.16em] uppercase mt-2.5 ${c.accent ? 'text-orange-400' : 'text-[#fefefe]/45'}`}
                style={{ fontFamily: mono }}
              >
                {c.sub}
              </p>
              <div className="flex flex-col gap-2.5 mt-5">
                {c.items.map((it) => (
                  <div key={it.t} className="flex gap-2.5 leading-snug" style={{ fontFamily: mono }}>
                    <span className={`shrink-0 ${c.accent ? 'text-orange-400' : 'text-[#fefefe]/40'}`}>{c.marker}</span>
                    <div className="min-w-0">
                      <p className="text-[#fefefe]/85 text-base lg:text-lg">{it.t}</p>
                      {it.sub && <p className="text-[#fefefe]/45 text-sm lg:text-base mt-0.5">{it.sub}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
