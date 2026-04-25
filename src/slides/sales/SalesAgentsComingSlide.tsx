import { motion } from 'framer-motion';

const stats = [
  { value: '$400B+', label: 'Agentic AI market by 2030', color: 'rgba(245,158,11,0.9)' },
  { value: '88%', label: 'of organisations reported AI agent security incidents', color: 'rgba(239,68,68,0.8)' },
  { value: '14%', label: 'of agents went live with security approval', color: 'rgba(239,68,68,0.55)' },
];

const SYSTEM_FONT = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';

export function SalesAgentsComingSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-12 lg:px-20 py-10 lg:py-14 justify-center gap-8">

        {/* Header */}
        <div className="shrink-0">
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[32px] sm:text-[44px] lg:text-[56px] leading-[1.05] tracking-tight"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            AGENTIC AI IS HERE.{' '}
            <span className="text-orange-400">THE SECURITY ISN'T.</span>
          </motion.h1>
        </div>

        {/* Body — tweet | right column */}
        <div className="grid grid-cols-[480px_1fr] lg:grid-cols-[560px_1fr] gap-10 lg:gap-16 shrink-0 items-center">

          {/* Tweet embed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col rounded-2xl overflow-hidden self-center"
            style={{
              background: '#000',
              border: '1px solid #2f3336',
              fontFamily: SYSTEM_FONT,
            }}
          >
            <div className="px-4 pt-3 flex-1 flex flex-col">
              {/* Header row */}
              <div className="flex items-start gap-2 mb-2">
                <img
                  src="/sheikh-mohammed.jpg"
                  alt="HH Sheikh Mohammed"
                  className="w-10 h-10 rounded-full shrink-0 object-cover"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1">
                    <span className="text-[15px] font-bold text-[#e7e9ea]">HH Sheikh Mohammed</span>
                    <svg className="w-[18px] h-[18px] shrink-0" viewBox="0 0 22 22">
                      <path
                        d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.855-1.244 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.69-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.636.433 1.221.878 1.69.47.446 1.055.752 1.69.883.635.13 1.294.083 1.902-.143.275.586.705 1.084 1.244 1.438.54.354 1.167.551 1.813.568.646-.017 1.272-.214 1.812-.568s.972-.852 1.245-1.438c.608.226 1.264.273 1.898.143.634-.131 1.217-.437 1.687-.883.445-.47.751-1.054.882-1.69.132-.633.083-1.29-.14-1.896.587-.273 1.084-.705 1.439-1.245.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"
                        fill="#f6c543"
                      />
                    </svg>
                  </div>
                  <div className="text-[13px] text-[#71767b]">@HHShkMohd</div>
                </div>
                <svg className="w-5 h-5 ml-auto shrink-0" viewBox="0 0 24 24" fill="#e7e9ea">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </div>

              {/* Text */}
              <div className="text-[15px] lg:text-[16px] text-[#e7e9ea] leading-[1.45] flex-1">
                Under the directives of the President of the UAE, we launch a new government model.{' '}
                <span className="font-bold">
                  Within two years, 50% of government sectors, services, and operations will run on Agentic AI,
                </span>{' '}
                making the UAE the first government globally to operate at this scale through autonomous systems.
                <br />
                <br />
                <span className="font-bold">AI is no longer a tool.</span> It analyses, decides, executes, and improves in real time. It will become our executive partner.
              </div>

              {/* Time */}
              <div
                className="text-[13px] text-[#71767b] mt-3 pt-3"
                style={{ borderTop: '1px solid #2f3336' }}
              >
                3:33 PM · Apr 23, 2026
              </div>
            </div>

            {/* Engagement */}
            <div
              className="flex items-center gap-5 px-4 py-2.5 text-[13px] text-[#71767b]"
              style={{ borderTop: '1px solid #2f3336' }}
            >
              <EngItem icon="reply" value="12.4K" />
              <EngItem icon="retweet" value="8.7K" />
              <EngItem icon="like" value="42.1K" />
              <EngItem icon="views" value="2.5M" />
            </div>
          </motion.div>

          {/* Right column */}
          <div className="flex-[0.78] flex flex-col justify-center gap-5">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.12 }}
                className="pb-4"
                style={{
                  borderBottom: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                }}
              >
                <p
                  className="text-[40px] lg:text-[52px] leading-none tracking-tight"
                  style={{ fontFamily: "'Anton', sans-serif", color: s.color }}
                >
                  {s.value}
                </p>
                <p
                  className="text-xs lg:text-sm mt-2 leading-snug text-[#fefefe]/45"
                  style={{ fontFamily: "'Geist Mono', monospace" }}
                >
                  {s.label}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
}

function EngItem({ icon, value }: { icon: 'reply' | 'retweet' | 'like' | 'views'; value: string }) {
  const paths: Record<string, string> = {
    reply:
      'M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46V19.35H9.756c-4.421 0-8.005-3.58-8.005-8v-.35z',
    retweet:
      'M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z',
    like:
      'M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.56-1.13-1.666-1.84-2.908-1.91z',
    views: 'M8.75 21V3h2v18h-2zM18.25 21V8.5h2V21h-2zM13.5 21V13h2v8h-2zM3.25 21V16h2v5h-2z',
  };
  return (
    <div className="flex items-center gap-1">
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#71767b">
        <path d={paths[icon]} />
      </svg>
      <strong className="text-[#e7e9ea] font-bold">{value}</strong>
    </div>
  );
}
