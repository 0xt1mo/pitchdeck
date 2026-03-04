import { motion } from 'framer-motion';
import { useEffect, useState, useCallback } from 'react';
import { getSphereSession, type SphereSession } from '../sphereInit';
import splashVideoUrl from '/kling_20260226_VIDEO_Take_Image_1650_0.mp4';
import unicityLogoUrl from '/UnicityLogo.svg';

interface AssetDisplay {
  coinId: string;
  symbol: string;
  name: string;
  totalAmount: string;
  decimals: number;
  confirmedAmount: string;
  unconfirmedAmount: string;
  tokenCount: number;
}

function formatAmount(amount: string, decimals: number): string {
  if (!amount || amount === '0') return '0';
  const padded = amount.padStart(decimals + 1, '0');
  const intPart = padded.slice(0, -decimals) || '0';
  const fracPart = padded.slice(-decimals).replace(/0+$/, '');
  return fracPart ? `${intPart}.${fracPart}` : intPart;
}

function truncate(s: string, n: number): string {
  if (s.length <= n) return s;
  return s.slice(0, n / 2) + '...' + s.slice(-n / 2);
}

export function WalletSlide() {
  const [session, setSession] = useState<SphereSession | null>(null);
  const [assets, setAssets] = useState<AssetDisplay[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [sendAmount, setSendAmount] = useState('');
  const [sendCoinId, setSendCoinId] = useState('');
  const [sendStatus, setSendStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [sendError, setSendError] = useState('');

  const refresh = useCallback((sphere: SphereSession['sphere']) => {
    try {
      const rawAssets = sphere.payments.getBalance();
      const mapped = rawAssets.map((a) => ({
        coinId: a.coinId,
        symbol: a.symbol,
        name: a.name,
        totalAmount: a.totalAmount,
        decimals: a.decimals,
        confirmedAmount: a.confirmedAmount,
        unconfirmedAmount: a.unconfirmedAmount,
        tokenCount: a.tokenCount,
      }));
      setAssets(mapped);
      // Auto-select first coin if none selected
      setSendCoinId((prev) => prev || (mapped[0]?.coinId ?? ''));
    } catch {
      // getBalance may not be available yet
    }
  }, []);

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval>;

    getSphereSession()
      .then(async (s) => {
        setSession(s);
        s.sphere.on('transfer:incoming', () => refresh(s.sphere));
        s.sphere.on('transfer:confirmed', () => refresh(s.sphere));

        // Initial sync
        try { await s.sphere.payments.receive(); } catch { }
        refresh(s.sphere);

        // Poll every 3s until tokens show up, then stop
        intervalId = setInterval(async () => {
          try { await s.sphere.payments.receive(); } catch { }
          refresh(s.sphere);
          if (s.sphere.payments.getBalance().length > 0) {
            clearInterval(intervalId);
          }
        }, 3000);
      })
      .catch((err) => setError(err instanceof Error ? err.message : String(err)));

    return () => clearInterval(intervalId);
  }, [refresh]);

  const handleSend = async () => {
    if (!session || !sendAmount.trim()) return;
    const asset = assets.find((a) => a.coinId === sendCoinId) ?? assets[0];
    if (!asset) {
      setSendStatus('error');
      setSendError('No tokens available to send');
      return;
    }

    setSendStatus('sending');
    setSendError('');
    try {
      const amountInSmallest = String(Math.round(parseFloat(sendAmount) * Math.pow(10, asset.decimals)));
      await session.sphere.payments.send({
        coinId: asset.coinId,
        amount: amountInSmallest,
        recipient: '@mike_agent1',
      });
      setSendStatus('sent');
      setSendAmount('');
      refresh(session.sphere);
      setTimeout(() => setSendStatus('idle'), 3000);
    } catch (err) {
      setSendStatus('error');
      setSendError(err instanceof Error ? err.message : String(err));
    }
  };

  const identity = session?.sphere.identity;

  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
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
            Live Demo
          </motion.p>
          <motion.h1 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[32px] sm:text-[44px] lg:text-[56px] leading-[0.95] tracking-tight mt-1"
            style={{ fontFamily: "'Anton', sans-serif" }}>
            TRUE P2P <span className="text-orange-400">ELECTRONIC CASH</span>
          </motion.h1>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] w-32 sm:w-48 bg-gradient-to-r from-orange-500 to-transparent origin-left mt-2" />
        </div>

        {error ? (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <p className="text-red-400 text-sm" style={{ fontFamily: "'Geist Mono', monospace" }}>{error}</p>
              <button onClick={() => window.location.reload()}
                className="mt-3 px-4 py-2 rounded-lg text-sm"
                style={{ background: 'rgba(249,115,22,0.15)', border: '1px solid rgba(249,115,22,0.3)', color: '#f97316', fontFamily: "'Geist Mono', monospace" }}>
                Retry
              </button>
            </div>
          </div>
        ) : !session ? (
          <div className="flex-1 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-orange-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex-1 mt-4 grid grid-cols-2 gap-8 min-h-0">

            {/* Left column — Explanatory text */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col justify-center">
              <p className="text-[#fefefe]/80 text-sm sm:text-base leading-relaxed"
                style={{ fontFamily: "'Geist Mono', monospace" }}>
                This is a <span className="text-orange-400">real wallet</span> running entirely in your browser.
                No extensions, no blockchain sync, no account creation.
              </p>
              <div className="mt-4 space-y-2">
                {[
                  'Ephemeral key pair generated on page load',
                  'Assets stored locally — no shared ledger',
                  'P2P private transfers via NOSTR relays',
                ].map((item) => (
                  <p key={item} className="text-[#fefefe]/70 text-xs sm:text-sm"
                    style={{ fontFamily: "'Geist Mono', monospace" }}>
                    <span className="text-orange-400 mr-2">→</span>{item}
                  </p>
                ))}
                <p className="text-[#fefefe]/70 text-xs sm:text-sm"
                  style={{ fontFamily: "'Geist Mono', monospace" }}>
                  <span className="text-orange-400 mr-2">→</span>Send tokens to <span className="text-orange-400">@mike</span> right now →
                </p>
              </div>
              <div className="mt-10 space-y-2">
                <p className="text-orange-400 text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-3"
                  style={{ fontFamily: "'Geist Mono', monospace" }}>
                  Implications
                </p>
                {[
                  'Unlimited throughput with the same security model as Bitcoin',
                  'Validation at the edge (the recipient), not a set of validators',
                  'Ultra low latency',
                  'Ultra low cost: a microcent/tx',
                ].map((item) => (
                  <p key={item} className="text-[#fefefe]/70 text-xs sm:text-sm leading-relaxed"
                    style={{ fontFamily: "'Geist Mono', monospace" }}>
                    <span className="text-orange-400 mr-2">→</span>{item}
                  </p>
                ))}
                <p className="text-[#fefefe]/70 text-xs sm:text-sm leading-relaxed"
                  style={{ fontFamily: "'Geist Mono', monospace" }}>
                  <span className="text-orange-400 mr-2">→</span>A single line of code
                </p>
                <p className="text-orange-400/80 text-xs sm:text-sm leading-relaxed mt-1 px-3 py-2 rounded-lg bg-orange-500/[0.06] border border-orange-500/15"
                  style={{ fontFamily: "'Geist Mono', monospace" }}>
                  await sphere.payments.send({'{'} recipient: '@mike1_agent', amount: '100', coinId {'}'});
                </p>
              </div>
            </motion.div>

            {/* Right column — Wallet UI */}
            <div className="flex flex-col gap-4 min-h-0">

              {/* Identity card */}
              <div className="shrink-0 rounded-xl p-4"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(249,115,22,0.15)', border: '1px solid rgba(249,115,22,0.3)' }}>
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                      <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="#f97316" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-orange-400 text-sm font-bold" style={{ fontFamily: "'Geist Mono', monospace" }}>
                      {identity?.nametag ? `@${identity.nametag}` : 'Anonymous Wallet'}
                    </p>
                    <p className="text-[#fefefe]/40 text-[10px]" style={{ fontFamily: "'Geist Mono', monospace" }}>
                      Ephemeral identity
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  {identity?.chainPubkey && (
                    <div>
                      <p className="text-[#fefefe]/30 text-[9px] uppercase tracking-wider" style={{ fontFamily: "'Geist Mono', monospace" }}>
                        Public Key
                      </p>
                      <p className="text-[#fefefe]/60 text-[11px] break-all" style={{ fontFamily: "'Geist Mono', monospace" }}>
                        {truncate(identity.chainPubkey, 32)}
                      </p>
                    </div>
                  )}
                  {identity?.l1Address && (
                    <div>
                      <p className="text-[#fefefe]/30 text-[9px] uppercase tracking-wider" style={{ fontFamily: "'Geist Mono', monospace" }}>
                        L1 Address
                      </p>
                      <p className="text-[#fefefe]/60 text-[11px] break-all" style={{ fontFamily: "'Geist Mono', monospace" }}>
                        {truncate(identity.l1Address, 32)}
                      </p>
                    </div>
                  )}
                  {identity?.directAddress && (
                    <div>
                      <p className="text-[#fefefe]/30 text-[9px] uppercase tracking-wider" style={{ fontFamily: "'Geist Mono', monospace" }}>
                        Direct Address
                      </p>
                      <p className="text-[#fefefe]/60 text-[11px] break-all" style={{ fontFamily: "'Geist Mono', monospace" }}>
                        {truncate(identity.directAddress, 32)}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Balances */}
              <div className="shrink-0 rounded-xl p-4"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <p className="text-[#fefefe]/50 text-[10px] uppercase tracking-wider mb-3"
                  style={{ fontFamily: "'Geist Mono', monospace" }}>
                  Token Balances
                </p>
                {assets.length === 0 ? (
                  <div className="py-3 text-center">
                    <p className="text-[#fefefe]/25 text-xs" style={{ fontFamily: "'Geist Mono', monospace" }}>
                      No tokens yet
                    </p>
                    <p className="text-[#fefefe]/15 text-[10px] mt-1" style={{ fontFamily: "'Geist Mono', monospace" }}>
                      Send tokens to this wallet to see them here
                    </p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {assets.map((asset) => (
                      <div key={asset.symbol} className="rounded-lg px-3 py-2"
                        style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold"
                              style={{ background: 'rgba(249,115,22,0.15)', border: '1px solid rgba(249,115,22,0.25)', color: '#f97316', fontFamily: "'Geist Mono', monospace" }}>
                              {asset.symbol.slice(0, 2)}
                            </div>
                            <div>
                              <p className="text-[#fefefe]/80 text-xs font-bold" style={{ fontFamily: "'Geist Mono', monospace" }}>
                                {asset.symbol}
                              </p>
                              <p className="text-[#fefefe]/30 text-[9px]" style={{ fontFamily: "'Geist Mono', monospace" }}>
                                {asset.name}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-[#fefefe]/90 text-sm font-bold" style={{ fontFamily: "'Geist Mono', monospace" }}>
                              {formatAmount(asset.totalAmount, asset.decimals)}
                            </p>
                            <p className="text-[#fefefe]/30 text-[9px]" style={{ fontFamily: "'Geist Mono', monospace" }}>
                              {asset.tokenCount} token{asset.tokenCount !== 1 ? 's' : ''}
                            </p>
                          </div>
                        </div>
                        {asset.unconfirmedAmount !== '0' && (
                          <p className="text-orange-400/60 text-[9px] mt-1" style={{ fontFamily: "'Geist Mono', monospace" }}>
                            {formatAmount(asset.unconfirmedAmount, asset.decimals)} pending
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Send to @mike */}
              <div className="shrink-0 rounded-xl p-4"
                style={{ background: 'rgba(249,115,22,0.04)', border: '1px solid rgba(249,115,22,0.15)' }}>
                <p className="text-orange-400 text-[10px] uppercase tracking-wider mb-3"
                  style={{ fontFamily: "'Geist Mono', monospace" }}>
                  Send to @mike
                </p>
                <div className="flex items-center gap-2">
                  <select
                    value={sendCoinId}
                    onChange={(e) => setSendCoinId(e.target.value)}
                    disabled={sendStatus === 'sending' || assets.length === 0}
                    className="shrink-0 bg-transparent text-[#fefefe]/90 text-sm rounded-lg px-2 py-2 outline-none appearance-none"
                    style={{ fontFamily: "'Geist Mono', monospace", border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)', minWidth: '90px' }}>
                    {assets.length === 0 ? (
                      <option value="">--</option>
                    ) : (
                      assets.map((a) => (
                        <option key={a.coinId} value={a.coinId} style={{ background: '#111', color: '#fefefe' }}>
                          {a.symbol}
                        </option>
                      ))
                    )}
                  </select>
                  <input
                    type="number"
                    value={sendAmount}
                    onChange={(e) => setSendAmount(e.target.value)}
                    placeholder="Amount"
                    autoFocus
                    disabled={sendStatus === 'sending'}
                    className="flex-1 bg-transparent text-[#fefefe]/90 text-sm rounded-lg px-3 py-2 outline-none placeholder:text-[#fefefe]/20 caret-orange-400 animate-border-pulse"
                    style={{ fontFamily: "'Geist Mono', monospace", background: 'rgba(255,255,255,0.03)' }}
                    onKeyDown={(e) => { if (e.key === 'Enter') handleSend(); }}
                  />
                  <button
                    onClick={handleSend}
                    disabled={!sendAmount.trim() || sendStatus === 'sending' || assets.length === 0}
                    className="shrink-0 px-4 py-2 rounded-lg text-sm font-bold disabled:opacity-30"
                    style={{ background: 'rgba(249,115,22,0.2)', border: '1px solid rgba(249,115,22,0.3)', color: '#f97316', fontFamily: "'Geist Mono', monospace" }}>
                    {sendStatus === 'sending' ? (
                      <div className="w-4 h-4 border-2 border-orange-400 border-t-transparent rounded-full animate-spin mx-auto" />
                    ) : 'Send'}
                  </button>
                </div>
                {sendStatus === 'sent' && (
                  <p className="text-emerald-400 text-[10px] mt-2" style={{ fontFamily: "'Geist Mono', monospace" }}>
                    Sent successfully!
                  </p>
                )}
                {sendStatus === 'error' && (
                  <p className="text-red-400 text-[10px] mt-2" style={{ fontFamily: "'Geist Mono', monospace" }}>
                    {sendError}
                  </p>
                )}
              </div>

            </div>

          </motion.div>
        )}

        {/* Logo */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
          className="shrink-0 mt-3 flex justify-end">
          <img src={unicityLogoUrl} alt="Unicity" className="h-5 opacity-60" />
        </motion.div>
      </div>
      <style>{`
        @keyframes border-pulse {
          0%, 100% { border-color: rgba(249,115,22,0.4); }
          50% { border-color: rgba(249,115,22,0.1); }
        }
        .animate-border-pulse {
          border: 1px solid rgba(249,115,22,0.4);
          animation: border-pulse 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
