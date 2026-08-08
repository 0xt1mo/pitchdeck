const ANTON = "'Anton', sans-serif";
const MONO = "'Geist Mono', monospace";

// AOS shared-kernel field — squares flash as agents execute.
const COLS = 18;
const ROWS = 11;
const CELLS = COLS * ROWS;

function rnd(i: number, salt: number) {
  const x = Math.sin(i * 12.9898 + salt * 78.233) * 43758.5453;
  return x - Math.floor(x);
}

/** The old way: one container per agent — an agent plus a whole OS of overhead. */
function OldContainer() {
  return (
    <div className="rounded-lg border border-white/15 bg-white/[0.02] p-2.5 flex flex-col gap-2">
      <div className="rounded bg-[#2a2a2a] border border-white/20 text-[#fefefe] text-base lg:text-2xl text-center py-2" style={{ fontFamily: MONO }}>agent</div>
      {['runtime', 'guest OS'].map((o) => (
        <div key={o} className="rounded border border-dashed border-white/15 text-[#fefefe]/35 text-sm lg:text-lg text-center py-2" style={{ fontFamily: MONO }}>{o}</div>
      ))}
    </div>
  );
}

export function AosKernelScene() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden flex items-center justify-center gap-10 lg:gap-16 px-10 lg:px-16 py-12">
      <style>{`
        @keyframes agentFlash {
          0%, 100% { background: rgba(249,115,22,0.13); box-shadow: none; }
          6%  { background: #ffb066; box-shadow: 0 0 10px rgba(249,115,22,0.95); }
          16% { background: #f97316; box-shadow: 0 0 6px rgba(249,115,22,0.6); }
          30% { background: rgba(249,115,22,0.13); box-shadow: none; }
        }
      `}</style>

      {/* ambient glow behind the kernel */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 42% 60% at 74% 50%, rgba(249,115,22,0.14) 0%, transparent 70%)' }}
      />

      {/* LEFT — the old way */}
      <div className="relative z-10 flex-1 max-w-[40%] flex flex-col justify-center">
        <p className="text-[#fefefe]/55 text-[40px] sm:text-[60px] lg:text-[80px] uppercase leading-[0.92]" style={{ fontFamily: ANTON }}>The old way</p>
        <p className="text-[#fefefe]/45 text-xl sm:text-3xl lg:text-[34px] tracking-[0.06em] uppercase mt-2 mb-8" style={{ fontFamily: MONO }}>one container per agent</p>
        <div className="grid grid-cols-3 gap-4">
          {Array.from({ length: 3 }).map((_, i) => <OldContainer key={i} />)}
        </div>
      </div>

      {/* RIGHT — Unicity AOS shared kernel */}
      <div className="relative z-10 flex-1 max-w-[52%] flex flex-col justify-center">
        <p className="text-orange-400 text-[40px] sm:text-[60px] lg:text-[80px] uppercase leading-[0.92]" style={{ fontFamily: ANTON }}>Unicity AOS</p>
        <p className="text-[#fefefe]/55 text-xl sm:text-3xl lg:text-[34px] tracking-[0.06em] uppercase mt-2 mb-8" style={{ fontFamily: MONO }}>one shared kernel · <span className="text-orange-400">1000× density</span></p>
        <div className="grid" style={{ gridTemplateColumns: `repeat(${COLS}, 1fr)`, gap: '7px', maxHeight: '46vh' }}>
          {Array.from({ length: CELLS }).map((_, i) => {
            const dur = 2.4 + rnd(i, 1) * 4.0;
            const delay = -rnd(i, 2) * dur;
            return (
              <span
                key={i}
                className="rounded-[3px]"
                style={{ aspectRatio: '1', background: 'rgba(249,115,22,0.13)', animation: `agentFlash ${dur}s ease-in-out ${delay}s infinite`, willChange: 'background, box-shadow' }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
