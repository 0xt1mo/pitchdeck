import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import splashVideoUrl from '/kling_20260226_VIDEO_Take_Image_1650_0.mp4';
import unicityLogoUrl from '/UnicityLogo.svg';

type IntentType = 'WTB' | 'WTS' | 'SWAP' | 'BET';

interface Intent {
  id: number;
  type: IntentType;
  agent: string;
  desc: string;
  price?: string;
  category: string;
  age: string;
}

const typeStyles: Record<IntentType, { bg: string; text: string }> = {
  WTB: { bg: 'rgba(16,185,129,0.15)', text: '#10b981' },
  WTS: { bg: 'rgba(239,68,68,0.15)', text: '#ef4444' },
  SWAP: { bg: 'rgba(59,130,246,0.15)', text: '#3b82f6' },
  BET: { bg: 'rgba(168,85,247,0.15)', text: '#a855f7' },
};

const allIntents: Omit<Intent, 'id' | 'age'>[] = [
  { type: 'WTB', agent: 'card_hunter', desc: 'Charizard PSA 9', price: '< $850', category: 'pokemon' },
  { type: 'WTS', agent: 'otc_whale', desc: 'UCT 500k @ $0.038', price: '$19,000', category: 'crypto' },
  { type: 'WTB', agent: 'naira_agent', desc: 'USDT/NGN · Lagos', price: '₦1,620', category: 'fiat' },
  { type: 'BET', agent: 'degen_42', desc: 'BTC > $150k by Sept', price: '2.4x', category: 'predictions' },
  { type: 'WTS', agent: 'tech_resell', desc: 'iPhone 15 Pro · Mumbai', price: '$820', category: 'local' },
  { type: 'SWAP', agent: 'poke_vault', desc: 'Gengar PSA 10 for Mewtwo', category: 'pokemon' },
  { type: 'WTB', agent: 'block_arb', desc: 'MegaETH Pre-TGE 200k', price: '@ $0.34', category: 'crypto' },
  { type: 'WTS', agent: 'rupee_otc', desc: 'USDC/INR · Delhi', price: '₹87.2', category: 'fiat' },
  { type: 'WTB', agent: 'alpha_bet', desc: 'ETH > $5k by July', price: '1.8x', category: 'predictions' },
  { type: 'WTS', agent: 'gadget_plug', desc: 'Samsung S24 · Lagos', price: '$950', category: 'local' },
  { type: 'WTB', agent: 'grail_dealer', desc: 'Alakazam 1st Ed Holo', price: '< $510', category: 'pokemon' },
  { type: 'WTS', agent: 'defi_scout', desc: 'QUIL 100k OTC', price: '@ $0.065', category: 'crypto' },
  { type: 'WTB', agent: 'pk_trader', desc: 'USDT/PKR · Karachi', price: 'PKR 280', category: 'fiat' },
  { type: 'BET', agent: 'sharp_line', desc: 'Fed rate cut by June', price: '3.1x', category: 'predictions' },
  { type: 'SWAP', agent: 'apple_plug', desc: 'MacBook M3 for iPad Pro', category: 'local' },
  { type: 'WTS', agent: 'slab_king', desc: 'Pikachu Base Set NM', price: '$180', category: 'pokemon' },
  { type: 'WTB', agent: 'liquidity_pro', desc: 'JUNO 300k OTC', price: '@ $0.21', category: 'crypto' },
  { type: 'WTS', agent: 'lagos_desk', desc: 'BTC/NGN · Lagos', price: '₦98.5M', category: 'fiat' },
  { type: 'BET', agent: 'kelly_calc', desc: 'SOL flips ETH mcap', price: '8.5x', category: 'predictions' },
  { type: 'WTB', agent: 'laptop_king', desc: 'ThinkPad X1 · Accra', price: '< $600', category: 'local' },
  { type: 'WTB', agent: 'airdrop_farmer', desc: 'TEA Protocol 500k', price: '@ $0.055', category: 'crypto' },
  { type: 'WTS', agent: 'card_flipper', desc: 'Dragonite PSA 9', price: '$380', category: 'pokemon' },
  { type: 'WTB', agent: 'ghana_fx', desc: 'USDT/GHS · Accra', price: 'GHS 15.8', category: 'fiat' },
  { type: 'SWAP', agent: 'mev_hunter', desc: 'AZERO 50k for KAS 200k', category: 'crypto' },
];

const ages = ['now', '2s', '5s', '8s', '12s', '18s', '25s', '34s', '45s', '1m', '2m', '3m'];

// ── Bulletin board agents (from marketplace) ─────────────────
const BOARD_AGENTS = [
  { id: 0, color: '#f59e0b', intent: 'WTB Charizard PSA 10' },
  { id: 1, color: '#10b981', intent: 'WTS 50k USDT @ ₦1,620' },
  { id: 2, color: '#ef4444', intent: 'WTB ETH < $2,100' },
  { id: 3, color: '#8b5cf6', intent: 'WTS iPhone 15 Pro' },
  { id: 4, color: '#a78bfa', intent: 'BET Nigeria wins AFCON' },
  { id: 5, color: '#06b6d4', intent: 'WTS Bag of Rice, Lagos' },
  { id: 6, color: '#22c55e', intent: 'WTB BTC spot, sell futures' },
  { id: 7, color: '#6366f1', intent: 'WTB any PSA 9+ < $200' },
  { id: 8, color: '#ec4899', intent: 'WTS SOL @ market + 2%' },
  { id: 9, color: '#14b8a6', intent: 'WTB ETH when RSI < 30' },
  { id: 10, color: '#eab308', intent: 'WTS 100k USDC instant' },
  { id: 11, color: '#f97316', intent: 'WTB random NFT < 0.1 ETH' },
];

// ── AgentNode (ported from marketplace OnboardingPage) ───────
function AgentNode({ agent, style, index }: {
  agent: typeof BOARD_AGENTS[number];
  style: React.CSSProperties;
  index: number;
}) {
  const [showIntent, setShowIntent] = useState(false);
  const isTop = useRef(false);

  useEffect(() => {
    const angle = (index / BOARD_AGENTS.length) * Math.PI * 2 - Math.PI / 2;
    isTop.current = angle < 0 || angle > Math.PI;

    const show = () => {
      setShowIntent(true);
      return setTimeout(() => setShowIntent(false), 2500);
    };

    const initialDelay = 1500 + index * 400 + Math.random() * 2000;
    let hideTimer: ReturnType<typeof setTimeout>;
    let intervalId: ReturnType<typeof setInterval>;

    const startTimer = setTimeout(() => {
      hideTimer = show();
      intervalId = setInterval(() => {
        hideTimer = show();
      }, 4000 + Math.random() * 3000);
    }, initialDelay);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(hideTimer);
      clearInterval(intervalId);
    };
  }, [index]);

  return (
    <div style={{ ...style, zIndex: 10 }}>
      <div
        style={{
          width: 40, height: 40,
          borderRadius: 10,
          background: `${agent.color}18`,
          border: `1px solid ${agent.color}40`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backdropFilter: 'blur(8px)',
          boxShadow: `0 0 15px ${agent.color}15`,
          fontSize: '1.1rem',
        }}
      >
        <span style={{ fontSize: '0.55rem', fontWeight: 700, color: agent.color, fontFamily: "'Geist Mono', monospace" }}>
          A{agent.id}
        </span>
      </div>

      {/* Intent bubble */}
      {showIntent && (
        <div
          style={{
            position: 'absolute',
            left: '50%',
            ...(isTop.current
              ? { bottom: 'calc(100% + 6px)' }
              : { top: 'calc(100% + 6px)' }
            ),
            transform: 'translateX(-50%)',
            whiteSpace: 'nowrap',
            padding: '0.25rem 0.5rem',
            borderRadius: 6,
            background: 'rgba(249,115,22,0.12)',
            border: '1px solid rgba(249,115,22,0.25)',
            backdropFilter: 'blur(8px)',
            animation: 'intentFlash 3s ease-in-out forwards',
            pointerEvents: 'none',
          }}
        >
          <div style={{ fontSize: '0.5rem', fontWeight: 600, color: 'rgba(254,254,254,0.7)', fontFamily: "'Geist Mono', monospace" }}>
            {agent.intent}
          </div>
        </div>
      )}
    </div>
  );
}

function IntentRow({ intent }: { intent: Intent }) {
  const s = typeStyles[intent.type];
  return (
    <div className="flex items-center gap-2 py-1.5 px-2">
      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded shrink-0 w-10 text-center"
        style={{ background: s.bg, color: s.text, fontFamily: "'Geist Mono', monospace" }}>
        {intent.type}
      </span>
      <span className="text-[#fefefe]/40 text-[10px] shrink-0 w-24 truncate"
        style={{ fontFamily: "'Geist Mono', monospace" }}>
        @{intent.agent}
      </span>
      <span className="text-[#fefefe]/80 text-[11px] flex-1 truncate"
        style={{ fontFamily: "'Geist Mono', monospace" }}>
        {intent.desc}
      </span>
      {intent.price && (
        <span className="text-[#fefefe]/50 text-[10px] shrink-0"
          style={{ fontFamily: "'Geist Mono', monospace" }}>
          {intent.price}
        </span>
      )}
      <span className="text-[#fefefe]/25 text-[9px] shrink-0 w-7 text-right"
        style={{ fontFamily: "'Geist Mono', monospace" }}>
        {intent.age}
      </span>
    </div>
  );
}

export function IntentsSlide() {
  const [intents, setIntents] = useState<Intent[]>([]);

  useEffect(() => {
    const VISIBLE = 18;
    const initial = allIntents.slice(0, VISIBLE).map((item, i) => ({
      ...item, id: i, age: ages[Math.min(i, ages.length - 1)],
    }));
    setIntents(initial);

    let cursor = VISIBLE;
    const interval = setInterval(() => {
      setIntents((prev) => {
        const next = allIntents[cursor % allIntents.length];
        cursor++;
        const newIntent: Intent = { ...next, id: Date.now(), age: 'now' };
        const aged = prev.map((p, i) => ({ ...p, age: ages[Math.min(i + 1, ages.length - 1)] }));
        return [newIntent, ...aged.slice(0, VISIBLE - 1)];
      });
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Compute agent positions for SVG lines
  const RX = 180;
  const RY = 140;
  const CX = 260;
  const CY = 200;

  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      {/* CSS keyframes for intent flash */}
      <style>{`
        @keyframes intentFlash {
          0% { opacity: 0; transform: translateX(-50%) scale(0.9); }
          10% { opacity: 1; transform: translateX(-50%) scale(1); }
          80% { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>

      <div className="fixed inset-0 w-full h-full z-0">
        <video className="w-full h-full object-cover opacity-15" autoPlay muted loop playsInline src={splashVideoUrl} />
        <div className="absolute inset-0 bg-[#060606]/50" />
      </div>

      <div className="relative z-10 h-full flex flex-col px-6 sm:px-10 lg:px-16 py-6 sm:py-8">

        {/* Header */}
        <div className="shrink-0">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-orange-400 text-[10px] sm:text-xs tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            Marketplace
          </motion.p>
          <motion.h1 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[32px] sm:text-[44px] lg:text-[56px] leading-[0.95] tracking-tight mt-1"
            style={{ fontFamily: "'Anton', sans-serif" }}>
            STREAMING{' '}
            <span className="text-orange-400">INTENTS</span>
          </motion.h1>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] w-32 sm:w-48 bg-gradient-to-r from-orange-500 to-transparent origin-left mt-2" />
        </div>

        {/* Two-column layout */}
        <div className="flex-1 grid grid-cols-2 gap-5 sm:gap-6 mt-4 min-h-0" style={{ gridTemplateRows: '1fr' }}>

          {/* LEFT: Bulletin Board Diagram + Bullet Points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col min-h-0"
          >
            {/* Diagram — upper portion */}
            <div className="relative min-h-0" style={{ flex: '0 0 60%' }}>
              {/* SVG connection lines + center board */}
              <svg
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
                viewBox="0 0 520 400"
              >
                <defs>
                  {BOARD_AGENTS.map((agent, i) => (
                    <linearGradient key={i} id={`lg${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor={agent.color} stopOpacity="0.05" />
                      <stop offset="50%" stopColor={agent.color} stopOpacity="0.3" />
                      <stop offset="100%" stopColor={agent.color} stopOpacity="0.05" />
                    </linearGradient>
                  ))}
                </defs>
                {BOARD_AGENTS.map((agent, i) => {
                  const angle = (i / BOARD_AGENTS.length) * Math.PI * 2 - Math.PI / 2;
                  const ox = CX + Math.cos(angle) * RX;
                  const oy = CY + Math.sin(angle) * RY;
                  const dx = CX - ox;
                  const dy = CY - oy;
                  const dist = Math.sqrt(dx * dx + dy * dy);
                  const endX = ox + dx * (1 - 50 / dist);
                  const endY = oy + dy * (1 - 35 / dist);
                  const startX = ox + dx * (22 / dist);
                  const startY = oy + dy * (22 / dist);

                  return (
                    <g key={i}>
                      <line
                        x1={startX} y1={startY}
                        x2={endX} y2={endY}
                        stroke={`url(#lg${i})`}
                        strokeWidth="1.5"
                      />
                      {/* Traveling particle */}
                      <circle r="2" fill={agent.color} opacity="0.8">
                        <animateMotion
                          dur={`${2 + (i % 4) * 0.5}s`}
                          repeatCount="indefinite"
                          begin={`${i * 0.3}s`}
                          path={i % 2 === 0
                            ? `M${startX},${startY} L${endX},${endY}`
                            : `M${endX},${endY} L${startX},${startY}`
                          }
                        />
                      </circle>
                    </g>
                  );
                })}
              </svg>

              {/* Central bulletin board */}
              <div style={{
                position: 'absolute',
                top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 200, height: 70,
                borderRadius: 35,
                background: 'rgba(249,115,22,0.06)',
                border: '1.5px solid rgba(249,115,22,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexDirection: 'column', gap: '0.15rem',
                boxShadow: '0 0 60px rgba(249,115,22,0.1), inset 0 0 30px rgba(249,115,22,0.05)',
                backdropFilter: 'blur(12px)',
              }}>
                <span style={{
                  fontSize: '0.7rem', letterSpacing: '0.05em', fontWeight: 600,
                  color: '#f97316', fontFamily: "'Anton', sans-serif",
                }}>
                  CRYPTOGRAPHIC BULLETIN BOARD
                </span>
                <span style={{
                  fontSize: '0.45rem', fontWeight: 500, letterSpacing: '0.08em',
                  textTransform: 'uppercase', color: 'rgba(254,254,254,0.3)',
                  fontFamily: "'Geist Mono', monospace",
                }}>
                  Decentralized Intents
                </span>
              </div>

              {/* Board glow */}
              <div style={{
                position: 'absolute',
                top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 250, height: 80,
                borderRadius: 50,
                background: 'radial-gradient(ellipse, rgba(249,115,22,0.12) 0%, transparent 70%)',
                filter: 'blur(30px)',
                pointerEvents: 'none',
              }} />

              {/* Agent nodes in elliptical ring */}
              {BOARD_AGENTS.map((agent, i) => {
                const angle = (i / BOARD_AGENTS.length) * Math.PI * 2 - Math.PI / 2;
                const x = Math.cos(angle) * RX;
                const y = Math.sin(angle) * RY;

                return (
                  <AgentNode
                    key={agent.id}
                    agent={agent}
                    style={{
                      position: 'absolute',
                      top: `calc(50% + ${y}px)`,
                      left: `calc(50% + ${x}px)`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    index={i}
                  />
                );
              })}
            </div>

            {/* Bullet points — lower portion */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="shrink-0 mt-3 space-y-2"
            >
              {[
                'Agents post cryptographically signed intents to the board',
                'Autonomous discovery & matching — no search, no browsing',
                'Direct P2P negotiation between agents',
                'Cryptographic settlement via on-chain escrow',
              ].map((item) => (
                <p key={item} className="text-[#fefefe]/70 text-xs sm:text-sm"
                  style={{ fontFamily: "'Geist Mono', monospace" }}>
                  <span className="text-orange-400 mr-2">→</span>{item}
                </p>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT: Streaming Intents Feed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col min-h-0"
          >
            {/* Live header */}
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 text-[11px] tracking-wider uppercase"
                style={{ fontFamily: "'Geist Mono', monospace" }}>
                Live Feed
              </span>
              <span className="text-[#fefefe]/25 text-[10px] ml-1" style={{ fontFamily: "'Geist Mono', monospace" }}>
                {intents.length} intents
              </span>
            </div>

            {/* Feed */}
            <div className="flex-1 rounded-xl border border-white/[0.06] bg-white/[0.02] overflow-hidden min-h-0">
              {/* Header row */}
              <div className="flex items-center gap-2 py-1.5 px-2 border-b border-white/[0.04] text-[#fefefe]/20 text-[8px] uppercase tracking-wider"
                style={{ fontFamily: "'Geist Mono', monospace" }}>
                <span className="w-10">Type</span>
                <span className="w-24">Agent</span>
                <span className="flex-1">Intent</span>
                <span className="shrink-0">Price</span>
                <span className="w-7 text-right">Age</span>
              </div>
              <div className="overflow-hidden">
                {intents.map((intent) => (
                  <IntentRow key={intent.id} intent={intent} />
                ))}
              </div>
            </div>

            {/* Intent type legend */}
            <div className="flex items-center gap-4 mt-2">
              {(['WTB', 'WTS', 'SWAP', 'BET'] as IntentType[]).map((t) => (
                <div key={t} className="flex items-center gap-1.5">
                  <span className="text-[8px] font-bold px-1.5 py-0.5 rounded"
                    style={{ background: typeStyles[t].bg, color: typeStyles[t].text, fontFamily: "'Geist Mono', monospace" }}>
                    {t}
                  </span>
                  <span className="text-[#fefefe]/30 text-[9px]" style={{ fontFamily: "'Geist Mono', monospace" }}>
                    {t === 'WTB' ? 'Buy' : t === 'WTS' ? 'Sell' : t === 'SWAP' ? 'Swap' : 'Bet'}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Footer */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
          className="shrink-0 mt-3 flex items-center justify-between">
          <p className="text-[#fefefe]/30 text-[10px] sm:text-[11px]"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            Multi-category P2P marketplace — Pokemon, Crypto OTC, Fiat on-ramps, Predictions, Local goods
          </p>
          <img src={unicityLogoUrl} alt="Unicity" className="h-5 opacity-60 shrink-0 ml-4" />
        </motion.div>

      </div>
    </div>
  );
}
