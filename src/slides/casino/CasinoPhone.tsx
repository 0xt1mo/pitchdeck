/* ============================================================
   CasinoPhone — anonymized concierge phone mockup (React, not an
   image). Replaces the baked-brand screenshots for confidentiality.
   Generic in-chat reference ('the casino' / 'your account' /
   'your wallet'); real slot names kept (generic to iGaming).
   Two modes: 'chat' (bubbles) and 'stream' (activity cards).
   ============================================================ */

type Btn = { label: string; primary?: boolean };
type ChatMsg = { who: 'a' | 'u'; text: string; btns?: Btn[] };
type StreamCard = { tag: string; text: string; btns: Btn[] };

const ui = "'Geist Mono', monospace";

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-4 pt-2.5 pb-1.5 shrink-0">
      <span className="text-[#fefefe] text-[11px] font-semibold" style={{ fontFamily: ui }}>9:41</span>
      <div className="flex items-center gap-1.5">
        <div className="flex items-end gap-[1.5px] h-2.5">
          {[5, 7, 9, 11].map((h, i) => <span key={i} className="w-[2.5px] rounded-sm bg-[#fefefe]/80" style={{ height: h }} />)}
        </div>
        <span className="text-[#fefefe]/80 text-[9px]" style={{ fontFamily: ui }}>4G</span>
        <div className="w-5 h-2.5 rounded-[3px] border border-[#fefefe]/60 relative"><span className="absolute inset-[1.5px] right-1.5 rounded-[1px] bg-[#fefefe]/80" /></div>
      </div>
    </div>
  );
}

function Pills({ btns }: { btns?: Btn[] }) {
  if (!btns?.length) return null;
  return (
    <div className="flex flex-wrap gap-1.5 mt-2">
      {btns.map((b, i) => (
        <span key={i} className={`text-[11px] px-3 py-1.5 rounded-full leading-none ${b.primary ? 'bg-orange-500 text-[#0a0a0a] font-semibold' : 'border border-[#fefefe]/20 text-[#fefefe]/80'}`} style={{ fontFamily: ui }}>{b.label}</span>
      ))}
    </div>
  );
}

export function CasinoPhone({ title, subtitle, mode, chat, stream }: { title: string; subtitle: string; mode: 'chat' | 'stream'; chat?: ChatMsg[]; stream?: StreamCard[] }) {
  return (
    <div className="w-full rounded-[34px] border border-[#262624] bg-[#0a0a0a] p-2">
      <div className="rounded-[27px] bg-[#0d0d0c] overflow-hidden flex flex-col">
        <StatusBar />
        {/* header */}
        <div className="flex items-center gap-2.5 px-4 py-2.5 border-b border-white/5 shrink-0">
          <span className="text-[#fefefe]/50 text-base leading-none">‹</span>
          <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center text-[9px] text-[#0a0a0a] font-bold">C</div>
          <div className="min-w-0">
            <div className="text-[#fefefe] text-[12px] font-semibold leading-none">{title}</div>
            <div className="flex items-center gap-1 mt-1"><span className="w-1.5 h-1.5 rounded-full bg-green-400" /><span className="text-[#fefefe]/45 text-[9px]" style={{ fontFamily: ui }}>{subtitle}</span></div>
          </div>
        </div>
        {/* body */}
        <div className="px-3 py-3 flex flex-col gap-2">
          {mode === 'stream' && stream?.map((c, i) => (
            <div key={i} className="rounded-xl border border-[#262624] bg-[#141413] px-3 py-2.5">
              <div className="text-orange-400 text-[8.5px] tracking-[0.18em] uppercase mb-1" style={{ fontFamily: ui }}>{c.tag}</div>
              <div className="text-[#e8e8e4] text-[12px] leading-snug">{c.text}</div>
              <Pills btns={c.btns} />
            </div>
          ))}
          {mode === 'chat' && chat?.map((m, i) => {
            const u = m.who === 'u';
            return (
              <div key={i} className={`flex flex-col ${u ? 'items-end' : 'items-start'}`}>
                <div className={`max-w-[82%] rounded-2xl px-3 py-2 text-[12px] leading-snug ${u ? 'bg-orange-500 text-[#0a0a0a] rounded-br-sm font-medium' : 'bg-[#1f1f1d] text-[#e8e8e4] rounded-bl-sm'}`}>{m.text}</div>
                {!u && <Pills btns={m.btns} />}
              </div>
            );
          })}
        </div>
        {/* input */}
        <div className="px-3 py-2.5 mt-auto border-t border-white/5 shrink-0">
          <div className="flex items-center justify-between rounded-full bg-[#1a1a18] px-3.5 py-2">
            <span className="text-[#6a6a64] text-[11px]" style={{ fontFamily: ui }}>Ask anything…</span>
            <span className="text-orange-400 text-[13px]">↑</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---- anonymized content for each screen ---- */
const stream: StreamCard[] = [
  { tag: 'Via Concierge', text: 'E-roulette tournament tonight — $10 entry, $1,000 first prize, 6pm. Want me to enter you?', btns: [{ label: 'Enter · $10', primary: true }, { label: 'Not tonight' }] },
  { tag: 'Via Concierge', text: 'New slot launched: Batman & Joker. Want to try it?', btns: [{ label: 'Open game', primary: true }, { label: 'Save for later' }] },
  { tag: 'Via Concierge', text: 'Progressive jackpot just past $10,000 (Mega Moolah). Mystery jackpot still unclaimed at $11,000.', btns: [{ label: 'Play now', primary: true }, { label: 'Alert me at $12k' }] },
  { tag: 'Via Concierge', text: 'Huff n Puff is trending — 88,000 players right now. Jackpots hit roughly every hour.', btns: [{ label: 'Open Huff n Puff', primary: true }, { label: 'Skip' }] },
];

export const PHONE = {
  concierge: { title: 'Concierge — activity stream', subtitle: 'active now', mode: 'stream' as const, stream: stream.slice(0, 3) },
  engagement: { title: 'Concierge — activity stream', subtitle: 'active now', mode: 'stream' as const, stream },
  onboarding: {
    title: 'Concierge', subtitle: 'active now', mode: 'chat' as const, chat: [
      { who: 'u' as const, text: 'Any good games available?' },
      { who: 'a' as const, text: 'The casino is offering 100 free spins if you sign up today — want me to onboard you?', btns: [{ label: 'Sure', primary: true }] },
      { who: 'a' as const, text: 'Confirm I can use your credentials to onboard you?', btns: [{ label: 'Confirm', primary: true }] },
      { who: 'a' as const, text: 'KYC completed. Your account is live and the 100 free spins are loaded — here is your link.', btns: [{ label: 'Open my account', primary: true }] },
    ],
  },
  intent: {
    title: 'Concierge', subtitle: 'active now', mode: 'chat' as const, chat: [
      { who: 'u' as const, text: 'Any good games available?' },
      { who: 'a' as const, text: 'The casino is offering 100 free spins if you sign up today — want me to onboard you?', btns: [{ label: 'Onboard me', primary: true }, { label: 'Later' }] },
    ],
  },
  retention: {
    title: 'Concierge', subtitle: 'active now', mode: 'chat' as const, chat: [
      { who: 'a' as const, text: "Friday's reload just dropped — 50% match up to $200. You usually take $50 on Fridays — want me to apply it?", btns: [{ label: 'Yes', primary: true }] },
      { who: 'a' as const, text: 'Done. $75 in your wallet — $50 + a $25 bonus. The bonus clears fastest on Huff n Puff or Mega Moolah.' },
    ],
  },
  wallet: {
    title: 'Concierge', subtitle: 'active now', mode: 'chat' as const, chat: [
      { who: 'u' as const, text: 'Top up my account with $150' },
      { who: 'a' as const, text: '$100 from Apple Pay to your wallet. Confirm?', btns: [{ label: 'Confirm', primary: true }] },
      { who: 'a' as const, text: 'Done. $100 in your wallet, ref #AC-44219. New balance: $147.' },
    ],
  },
};
