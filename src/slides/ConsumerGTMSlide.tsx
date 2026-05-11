import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import splashVideoUrl from '/kling_20260226_VIDEO_Take_Image_1650_0.mp4';

function IframeWithFallback({ src }: { src: string }) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      if (!loaded) setFailed(true);
    }, 5000);
    return () => clearTimeout(timeoutRef.current);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleLoad = () => {
    clearTimeout(timeoutRef.current);
    // Check if the iframe loaded an error page (cross-origin will throw)
    try {
      const doc = iframeRef.current?.contentDocument;
      const text = doc?.body?.innerText || '';
      if (text.includes('403') || text.includes('ERROR') || text.includes('Forbidden')) {
        setFailed(true);
        return;
      }
    } catch {
      // Cross-origin — means the real site loaded (good)
    }
    setLoaded(true);
  };

  if (failed) {
    return (
      <div className="w-full h-full relative z-10 flex flex-col items-center justify-center gap-4">
        <p className="text-[#fefefe]/40 text-sm" style={{ fontFamily: "'Geist Mono', monospace" }}>
          Preview unavailable in this browser
        </p>
        <a href={src} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold transition-all hover:scale-105 cursor-pointer"
          style={{
            fontFamily: "'Geist Mono', monospace",
            background: 'rgba(249,115,22,0.15)',
            border: '1px solid rgba(249,115,22,0.3)',
            color: '#f97316',
          }}>
          Open AgentSphere →
        </a>
      </div>
    );
  }

  return (
    <>
      {!loaded && (
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-orange-500 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      <iframe
        ref={iframeRef}
        src={src}
        className="w-full h-full relative z-10"
        style={{ border: 'none', background: '#060606' }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
        onLoad={handleLoad}
        onError={() => setFailed(true)}
      />
    </>
  );
}

export function ConsumerGTMSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-y-auto">
      {/* Video background */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <video className="w-full h-full object-cover opacity-20" autoPlay muted loop playsInline src={splashVideoUrl} />
        <div className="absolute inset-0 bg-[#060606]/50" />
      </div>

      <div className="relative z-10 h-full flex flex-col px-6 sm:px-10 lg:px-16 py-6 sm:py-8">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-400 text-[10px] sm:text-xs tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Use Case: Consumer
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[28px] sm:text-[40px] lg:text-[52px] leading-[0.95] tracking-tight mt-1"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            AGENT<span className="text-orange-400">SPHERE</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="text-[#fefefe]/60 text-sm sm:text-base mt-2 max-w-2xl"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            The network for autonomous personal agents. Deploy your agent, discover counterparties, negotiate, and settle — all peer-to-peer.
          </motion.p>
        </div>

        {/* Iframe */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex-1 mt-4 min-h-0 rounded-xl overflow-hidden border border-orange-500/15 relative"
        >
          <div className="absolute inset-0 bg-orange-500/[0.03]" />
          <IframeWithFallback src="https://sphere.unicity.network" />
        </motion.div>

        {/* Logo */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
          className="shrink-0 mt-3 flex items-center justify-between">
          <p
            className="text-[#fefefe]/30 text-[10px] sm:text-[11px]"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            sphere.unicity.network
          </p>
        </motion.div>

      </div>
    </div>
  );
}
