import { motion } from 'framer-motion';
import { useEffect, useRef, useState, useCallback } from 'react';
import type { DirectMessage, PeerInfo } from '@unicitylabs/sphere-sdk';
import { getSphereSession, type SphereSession } from '../sphereInit';
import splashVideoUrl from '/kling_20260226_VIDEO_Take_Image_1650_0.mp4';
import unicityLogoUrl from '/UnicityLogo.svg';

const WELCOME_TRIGGER = '__sphere_welcome__';

interface ChatMessage {
  id: string;
  content: string;
  isFromMe: boolean;
  timestamp: number;
}

function toDM(dm: DirectMessage, myPubkey: string): ChatMessage {
  return { id: dm.id, content: dm.content, isFromMe: dm.senderPubkey === myPubkey, timestamp: dm.timestamp };
}

// ── Mini chat panel (reused for both kbbot and @mike_agent1) ────────
function ChatPanel({ session, peer, peerLabel, placeholder, filterWelcome }: {
  session: SphereSession | null;
  peer: PeerInfo | null;
  peerLabel: string;
  placeholder: string;
  filterWelcome?: boolean;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const refresh = useCallback(() => {
    if (!session || !peer || !session.sphere.identity) return;
    const myPubkey = session.sphere.identity.chainPubkey;
    const page = session.sphere.communications.getConversationPage(peer.transportPubkey, { limit: 50 });
    const filtered = page.messages
      .filter((dm: DirectMessage) => !filterWelcome || dm.content !== WELCOME_TRIGGER)
      .map((dm: DirectMessage) => toDM(dm, myPubkey))
      .sort((a, b) => a.timestamp - b.timestamp);
    setMessages(filtered);
  }, [session, peer, filterWelcome]);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages]);

  useEffect(() => {
    if (!session || !peer) return;
    const handler = () => refresh();
    session.sphere.on('message:dm', handler);
    session.sphere.on('composing:started', () => {
      setIsTyping(true);
      setTimeout(() => setIsTyping(false), 5000);
    });
    refresh();
  }, [session, peer, refresh]);

  const handleSend = async () => {
    const content = input.trim();
    if (!content || !session || !peer) return;
    setInput('');
    setIsSending(true);
    try {
      await session.sphere.communications.sendDM(peer.transportPubkey, content);
      refresh();
    } catch (err) {
      console.error('Send failed:', err);
    } finally {
      setIsSending(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); }
  };

  return (
    <div className="flex flex-col h-full rounded-xl overflow-hidden"
      style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
      {/* Panel header */}
      <div className="shrink-0 px-3 py-2 flex items-center gap-2"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="w-2 h-2 rounded-full bg-emerald-400" />
        <span className="text-orange-400 text-xs font-bold" style={{ fontFamily: "'Geist Mono', monospace" }}>
          {peerLabel}
        </span>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto min-h-0 space-y-2 p-3"
        style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(255,255,255,0.1) transparent' }}>
        {!session ? (
          <div className="flex items-center justify-center h-full">
            <div className="w-5 h-5 border-2 border-orange-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : messages.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <p className="text-[#fefefe]/25 text-xs text-center" style={{ fontFamily: "'Geist Mono', monospace" }}>
              {placeholder}
            </p>
          </div>
        ) : (
          messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.isFromMe ? 'justify-end' : 'justify-start'}`}>
              <div className="max-w-[85%] rounded-lg px-3 py-1.5"
                style={{
                  background: msg.isFromMe ? 'rgba(249,115,22,0.12)' : 'rgba(59,130,246,0.10)',
                  border: msg.isFromMe ? '1px solid rgba(249,115,22,0.2)' : '1px solid rgba(59,130,246,0.20)',
                }}>
                {!msg.isFromMe && (
                  <p className="text-orange-400 text-[9px] font-bold mb-0.5"
                    style={{ fontFamily: "'Geist Mono', monospace" }}>
                    {peerLabel}
                  </p>
                )}
                <p className="text-[#fefefe]/80 text-xs leading-relaxed whitespace-pre-wrap"
                  style={{ fontFamily: "'Geist Mono', monospace" }}>
                  {msg.content}
                </p>
              </div>
            </div>
          ))
        )}
        {isTyping && (
          <div className="flex justify-start">
            <div className="rounded-lg px-3 py-1.5"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="flex gap-1">
                <div className="w-1 h-1 rounded-full bg-[#fefefe]/30 animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-1 h-1 rounded-full bg-[#fefefe]/30 animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-1 h-1 rounded-full bg-[#fefefe]/30 animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="shrink-0 px-3 pb-3">
        <div className="flex items-center gap-2 rounded-lg px-3 py-2"
          style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(249,115,22,0.4)', animation: 'border-pulse-chat 1.5s ease-in-out infinite' }}>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            rows={1}
            disabled={isSending || !session}
            className="flex-1 bg-transparent text-[#fefefe]/90 text-xs resize-none outline-none placeholder:text-[#fefefe]/50 caret-orange-400"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isSending || !session}
            className="shrink-0 w-6 h-6 rounded flex items-center justify-center disabled:opacity-30 cursor-pointer"
            style={{ background: 'rgba(249,115,22,0.2)', border: '1px solid rgba(249,115,22,0.3)' }}>
            {isSending ? (
              <div className="w-3 h-3 border border-orange-400 border-t-transparent rounded-full animate-spin" />
            ) : (
              <svg viewBox="0 0 20 20" fill="none" className="w-3 h-3">
                <path d="M3 10L17 3L10 17L9 11L3 10Z" fill="#f97316" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Main slide ───────────────────────────────────────────────
export function ThankYouChatSlide() {
  const [session, setSession] = useState<SphereSession | null>(null);

  useEffect(() => {
    getSphereSession()
      .then(setSession)
      .catch((err) => console.warn('Sphere session failed:', err));
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-y-auto">
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <video className="w-full h-full object-cover opacity-20" autoPlay muted loop playsInline src={splashVideoUrl} />
        <div className="absolute inset-0 bg-[#060606]/50" />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 sm:px-10 lg:px-16 py-6 sm:py-8">

        {/* Centered block: Thank You + chat */}
        <div className="text-center">
          <motion.img src={unicityLogoUrl} alt="Unicity"
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="h-8 sm:h-10 mx-auto mb-4"
          />
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[#fefefe] text-[56px] sm:text-[80px] lg:text-[110px] leading-none tracking-tight"
            style={{ fontFamily: "'Anton', sans-serif" }}>
            THANK <span className="text-orange-400">YOU</span>
          </motion.h1>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-[2px] w-24 sm:w-36 bg-gradient-to-r from-transparent via-orange-500 to-transparent origin-center mx-auto mt-3" />
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-3 text-[#fefefe]/50 text-xs sm:text-sm"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            Infrastructure for the agentic economy
          </motion.p>
        </div>

        {/* Chat panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="w-full max-w-lg mt-8"
          style={{ height: 220 }}
        >
          <ChatPanel
            session={session}
            peer={session?.peer ?? null}
            peerLabel="@kbbot"
            placeholder="Ask about Unicity..."
            filterWelcome
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-orange-400 text-sm sm:text-base mt-3"
          style={{ fontFamily: "'Anton', sans-serif", letterSpacing: '0.04em' }}>
          Talk to our KnowledgeBot
        </motion.p>

        {/* Logo — bottom right */}
        <div className="absolute bottom-6 right-6 sm:right-10 lg:right-16">
          <img src={unicityLogoUrl} alt="Unicity" className="h-5 opacity-60" />
        </div>

      </div>
      <style>{`
        @keyframes border-pulse-chat {
          0%, 100% { border-color: rgba(249,115,22,0.4); }
          50% { border-color: rgba(249,115,22,0.1); }
        }
        .animate-border-pulse-chat {
          border: 1px solid rgba(249,115,22,0.4);
          animation: border-pulse-chat 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
