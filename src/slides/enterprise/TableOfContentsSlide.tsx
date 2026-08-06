import { motion } from 'framer-motion';
import { tr } from '../../i18n';
import splashVideoUrl from '/kling_20260226_VIDEO_Take_Image_1650_0.mp4';
import unicityLogoUrl from '/UnicityLogo.svg';

// Non-text data (colors, slide indices, stable ids) stays identical across languages.
const sections = [
  { id: 'intro', color: '#f97316', items: [{ slideIndex: 3 }, { slideIndex: 4 }] },
  { id: 'how', color: '#f59e0b', items: [{ slideIndex: 5 }, { slideIndex: 6 }] },
  { id: 'product', color: '#ec4899', items: [{ slideIndex: 7 }, { slideIndex: 8 }, { slideIndex: 9 }, { slideIndex: 10 }] },
  { id: 'kernel', color: '#a855f7', items: [{ slideIndex: 12 }, { slideIndex: 13 }, { slideIndex: 14 }] },
  { id: 'security', color: '#6366f1', items: [{ slideIndex: 16 }, { slideIndex: 17 }] },
  { id: 'blockchain', color: '#3b82f6', items: [{ slideIndex: 19 }, { slideIndex: 20 }, { slideIndex: 21 }, { slideIndex: 22 }] },
  { id: 'token', color: '#10b981', items: [{ slideIndex: 24 }, { slideIndex: 25 }] },
];

// Display text: section titles + item labels (parallel to sections by index).
const T = tr({
  en: {
    title: 'CONTENTS',
    sectionTitles: ['INTRODUCTION', 'HOW IT WORKS', 'PRODUCT', 'KERNEL', 'SECURITY', 'BLOCKCHAIN', 'TOKEN'],
    itemLabels: [
      ['The Problem', 'The Solution'],
      ['Paradigm Overview', 'Sphere Wallet'],
      ['Consumer GTM', 'A2A Marketplace', 'Intents', 'Product Demo'],
      ['Astrid Runtime', 'Why Astrid', 'Swap a Capsule'],
      ['Semantic Intercept Fabric', 'Zero Trust Network'],
      ['Protocol Stack', 'A2A Micropayments', 'Unicity X402', 'Solana vs Unicity'],
      ['Genesis Allocation', 'Community & Traction'],
    ],
  },
  pt: {
    title: 'CONTEÚDO',
    sectionTitles: ['INTRODUÇÃO', 'COMO FUNCIONA', 'PRODUTO', 'KERNEL', 'SEGURANÇA', 'BLOCKCHAIN', 'TOKEN'],
    itemLabels: [
      ['O Problema', 'A Solução'],
      ['Visão do Paradigma', 'Carteira Sphere'],
      ['GTM Consumidor', 'Marketplace A2A', 'Intenções', 'Demo do Produto'],
      ['Runtime Astrid', 'Por que Astrid', 'Trocar uma Cápsula'],
      ['Semantic Intercept Fabric', 'Rede Zero Trust'],
      ['Pilha de Protocolo', 'Micropagamentos A2A', 'Unicity X402', 'Solana vs Unicity'],
      ['Alocação Genesis', 'Comunidade e Tração'],
    ],
  },
});

export function TableOfContentsSlide({ goToSlide }: { goToSlide?: (index: number) => void; [key: string]: unknown }) {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-y-auto">
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <video className="w-full h-full object-cover opacity-40" autoPlay muted loop playsInline src={splashVideoUrl} />
        <div className="absolute inset-0 bg-[#060606]/20" />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 sm:px-10 lg:px-16">

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-[#fefefe] text-[48px] sm:text-[72px] lg:text-[96px] leading-none tracking-tight"
          style={{ fontFamily: "'Anton', sans-serif" }}>
          {T.title}
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-[2px] w-24 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mt-4 origin-center"
        />

        {/* Section grid */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="grid grid-cols-4 gap-x-8 gap-y-6 sm:gap-x-10 sm:gap-y-8 mt-10 sm:mt-14 w-full max-w-6xl">
          {sections.map((section, si) => (
            <div key={section.id}>
              <h3 className="text-sm sm:text-base lg:text-lg tracking-[0.12em] mb-3"
                style={{ fontFamily: "'Anton', sans-serif", color: section.color }}>
                {T.sectionTitles[si]}
              </h3>
              <div className="space-y-2">
                {section.items.map((item, ii) => (
                  <motion.button
                    key={item.slideIndex}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + si * 0.08 + ii * 0.04 }}
                    onClick={() => goToSlide?.(item.slideIndex)}
                    className="block text-left w-full group cursor-pointer">
                    <span className="text-[#fefefe]/60 text-[11px] sm:text-xs leading-relaxed group-hover:text-orange-400 transition-colors"
                      style={{ fontFamily: "'Geist Mono', monospace" }}>
                      <span className="text-orange-400/60 mr-1.5">→</span>
                      {T.itemLabels[si][ii]}
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Logo */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
          className="absolute bottom-8 right-6 sm:right-10 lg:right-16">
          <img src={unicityLogoUrl} alt="Unicity" className="h-5 opacity-60" />
        </motion.div>

      </div>
    </div>
  );
}
