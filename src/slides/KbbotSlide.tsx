import { motion } from 'framer-motion';
import { useEffect, useRef, useState, useCallback } from 'react';
import type { DirectMessage } from '@unicitylabs/sphere-sdk';
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
  return {
    id: dm.id,
    content: dm.content,
    isFromMe: dm.senderPubkey === myPubkey,
    timestamp: dm.timestamp,
  };
}

export function KbbotSlide() {
  const sessionRef = useRef<SphereSession | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const [ready, setReady] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const refreshMessages = useCallback(() => {
    const session = sessionRef.current;
    if (!session || !session.sphere.identity) return;

    const myPubkey = session.sphere.identity.chainPubkey;
    const page = session.sphere.communications.getConversationPage(
      session.peer.transportPubkey, { limit: 50 },
    );
    const filtered = page.messages
      .filter((dm: DirectMessage) => dm.content !== WELCOME_TRIGGER)
      .map((dm: DirectMessage) => toDM(dm, myPubkey))
      .sort((a, b) => a.timestamp - b.timestamp);
    setMessages(filtered);
  }, []);

  // Auto-scroll on new messages
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages]);

  // Await the pre-initialized session (started eagerly on page load)
  useEffect(() => {
    let destroyed = false;

    getSphereSession()
      .then((session) => {
        if (destroyed) return;
        sessionRef.current = session;

        // Listen for incoming DMs
        session.sphere.on('message:dm', () => refreshMessages());

        // Typing indicator
        session.sphere.on('composing:started', () => {
          setIsTyping(true);
          setTimeout(() => setIsTyping(false), 5000);
        });

        refreshMessages();
        setReady(true);
      })
      .catch((err) => {
        if (destroyed) return;
        setError(err instanceof Error ? err.message : String(err));
      });

    return () => { destroyed = true; };
  }, [refreshMessages]);

  const handleSend = async () => {
    const content = input.trim();
    const session = sessionRef.current;
    if (!content || !session) return;

    setInput('');
    setIsSending(true);
    try {
      await session.sphere.communications.sendDM(
        session.peer.transportPubkey,
        content,
      );
      refreshMessages();
    } catch (err) {
      console.error('Failed to send:', err);
    } finally {
      setIsSending(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

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
            Knowledge Base
          </motion.p>
          <motion.h1 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[32px] sm:text-[44px] lg:text-[56px] leading-[0.95] tracking-tight mt-1"
            style={{ fontFamily: "'Anton', sans-serif" }}>
            ASK{' '}
            <span className="text-orange-400">KBBOT</span>
          </motion.h1>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] w-32 sm:w-48 bg-gradient-to-r from-orange-500 to-transparent origin-left mt-2" />
        </div>

        {/* Chat area */}
        <div className="flex-1 mt-4 min-h-0 flex flex-col">

          {!ready && !error ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <div className="w-8 h-8 border-2 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
                <p className="text-[#fefefe]/50 text-sm" style={{ fontFamily: "'Geist Mono', monospace" }}>
                  Connecting to kbbot...
                </p>
              </div>
            </div>
          ) : error ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <p className="text-red-400 text-sm mb-3" style={{ fontFamily: "'Geist Mono', monospace" }}>
                  {error}
                </p>
                <button
                  onClick={() => window.location.reload()}
                  className="px-4 py-2 rounded-lg text-sm"
                  style={{
                    background: 'rgba(249,115,22,0.15)',
                    border: '1px solid rgba(249,115,22,0.3)',
                    color: '#f97316',
                    fontFamily: "'Geist Mono', monospace",
                  }}
                >
                  Retry
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Messages */}
              <div
                ref={scrollRef}
                className="flex-1 overflow-y-auto min-h-0 space-y-3 pr-2"
                style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(255,255,255,0.1) transparent' }}
              >
                {messages.length === 0 && (
                  <div className="flex items-center justify-center h-full">
                    <p className="text-[#fefefe]/30 text-sm text-center" style={{ fontFamily: "'Geist Mono', monospace" }}>
                      Ask kbbot anything about Unicity...
                    </p>
                  </div>
                )}

                {messages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.isFromMe ? 'justify-end' : 'justify-start'}`}>
                    <div
                      className="max-w-[75%] rounded-xl px-4 py-2.5"
                      style={{
                        background: msg.isFromMe
                          ? 'rgba(249,115,22,0.15)'
                          : 'rgba(255,255,255,0.05)',
                        border: msg.isFromMe
                          ? '1px solid rgba(249,115,22,0.25)'
                          : '1px solid rgba(255,255,255,0.08)',
                      }}
                    >
                      {!msg.isFromMe && (
                        <p className="text-orange-400 text-[10px] font-bold mb-1"
                          style={{ fontFamily: "'Geist Mono', monospace" }}>
                          @kbbot
                        </p>
                      )}
                      <p className="text-[#fefefe]/85 text-sm leading-relaxed whitespace-pre-wrap"
                        style={{ fontFamily: "'Geist Mono', monospace" }}>
                        {msg.content}
                      </p>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="rounded-xl px-4 py-2.5"
                      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                      <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#fefefe]/30 animate-bounce" style={{ animationDelay: '0ms' }} />
                        <div className="w-1.5 h-1.5 rounded-full bg-[#fefefe]/30 animate-bounce" style={{ animationDelay: '150ms' }} />
                        <div className="w-1.5 h-1.5 rounded-full bg-[#fefefe]/30 animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Input */}
              <div className="shrink-0 mt-3">
                <div className="flex items-center gap-3 rounded-xl px-4 py-3"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask a question..."
                    rows={1}
                    disabled={isSending}
                    className="flex-1 bg-transparent text-[#fefefe]/90 text-sm resize-none outline-none placeholder:text-[#fefefe]/25"
                    style={{ fontFamily: "'Geist Mono', monospace" }}
                  />
                  <button
                    onClick={handleSend}
                    disabled={!input.trim() || isSending}
                    className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-colors disabled:opacity-30"
                    style={{
                      background: 'rgba(249,115,22,0.2)',
                      border: '1px solid rgba(249,115,22,0.3)',
                    }}
                  >
                    {isSending ? (
                      <div className="w-3.5 h-3.5 border border-orange-400 border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4">
                        <path d="M3 10L17 3L10 17L9 11L3 10Z" fill="#f97316" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Logo */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
          className="shrink-0 mt-3 flex justify-end">
          <img src={unicityLogoUrl} alt="Unicity" className="h-5 opacity-60" />
        </motion.div>

      </div>
    </div>
  );
}
