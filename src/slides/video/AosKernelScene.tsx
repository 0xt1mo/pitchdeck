import { motion } from 'framer-motion';

const MONO = "'Geist Mono', monospace";

// Full-bleed field of agent capsules on one shared kernel — squares flash as
// agents wake and execute. Built to be screen-recorded for the launch video.
const COLS = 34;
const ROWS = 17;
const CELLS = COLS * ROWS;

// deterministic-ish pseudo-random so it renders the same each load (no Math.random at module import)
function rnd(i: number, salt: number) {
  const x = Math.sin(i * 12.9898 + salt * 78.233) * 43758.5453;
  return x - Math.floor(x);
}

export function AosKernelScene() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden flex flex-col items-center justify-center">
      <style>{`
        @keyframes agentFlash {
          0%, 100% { background: rgba(249,115,22,0.13); box-shadow: none; }
          6%  { background: #ffb066; box-shadow: 0 0 10px rgba(249,115,22,0.95); }
          16% { background: #f97316; box-shadow: 0 0 6px rgba(249,115,22,0.6); }
          30% { background: rgba(249,115,22,0.13); box-shadow: none; }
        }
      `}</style>

      {/* ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 60% 55% at 50% 48%, rgba(249,115,22,0.12) 0%, transparent 72%)' }}
      />

      {/* Agent field */}
      <div
        className="relative z-10 grid"
        style={{
          gridTemplateColumns: `repeat(${COLS}, 1fr)`,
          gap: '7px',
          width: 'min(88vw, 1400px)',
          maxHeight: '62vh',
        }}
      >
        {Array.from({ length: CELLS }).map((_, i) => {
          const dur = 2.4 + rnd(i, 1) * 4.0;        // 2.4s – 6.4s
          const delay = -rnd(i, 2) * dur;            // negative → mid-cycle start, lively immediately
          return (
            <span
              key={i}
              className="rounded-[3px]"
              style={{
                aspectRatio: '1',
                background: 'rgba(249,115,22,0.13)',
                animation: `agentFlash ${dur}s ease-in-out ${delay}s infinite`,
                willChange: 'background, box-shadow',
              }}
            />
          );
        })}
      </div>

      {/* Shared-kernel label */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="relative z-10 mt-8 text-center"
      >
        <p className="text-orange-400 text-sm sm:text-base lg:text-lg tracking-[0.34em] uppercase" style={{ fontFamily: MONO }}>
          One shared kernel
        </p>
        <p className="text-[#fefefe]/45 text-xs sm:text-sm lg:text-base tracking-[0.2em] uppercase mt-2" style={{ fontFamily: MONO }}>
          thousands of agents · OS-enforced isolation
        </p>
      </motion.div>
    </div>
  );
}
