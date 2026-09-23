// Ambient animated background lines — soft flowing traces (teal/gold) with
// small traveling light-dots, evoking movement/activity behind the hero
// content. Pure SVG + CSS, no dependencies. Respects prefers-reduced-motion.
export default function DynamicLines({ className = '' }) {
  return (
    <svg
      viewBox="0 0 1000 700"
      preserveAspectRatio="none"
      className={`absolute inset-0 h-full w-full ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="lineGradA" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1fb3ad" stopOpacity="0" />
          <stop offset="50%" stopColor="#1fb3ad" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#0e7c86" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="lineGradB" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#d9b565" stopOpacity="0" />
          <stop offset="50%" stopColor="#c99a3f" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#d9b565" stopOpacity="0" />
        </linearGradient>
      </defs>

      <path
        id="traceA"
        d="M-50 560 C 180 460, 260 620, 460 500 S 760 340, 1050 400"
        fill="none"
        stroke="url(#lineGradA)"
        strokeWidth="2.5"
        strokeLinecap="round"
        className="dl-trace"
        style={{ strokeDasharray: '14 16', animationDuration: '9s' }}
      />
      <path
        id="traceB"
        d="M-50 220 C 200 300, 320 120, 540 200 S 820 340, 1050 260"
        fill="none"
        stroke="url(#lineGradB)"
        strokeWidth="2"
        strokeLinecap="round"
        className="dl-trace"
        style={{ strokeDasharray: '10 14', animationDuration: '12s', animationDirection: 'reverse' }}
      />
      <path
        id="traceC"
        d="M-50 400 C 150 340, 380 460, 600 380 S 880 260, 1050 320"
        fill="none"
        stroke="url(#lineGradA)"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="dl-trace"
        style={{ strokeDasharray: '8 18', animationDuration: '15s' }}
      />

      <circle r="4" fill="#5eead4" className="dl-dot">
        <animateMotion dur="9s" repeatCount="indefinite" rotate="auto">
          <mpath href="#traceA" />
        </animateMotion>
      </circle>
      <circle r="3" fill="#eecd8f" className="dl-dot">
        <animateMotion dur="12s" repeatCount="indefinite" rotate="auto">
          <mpath href="#traceB" />
        </animateMotion>
      </circle>

      <style>{`
        .dl-trace {
          animation-name: dl-flow;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .dl-dot {
          filter: drop-shadow(0 0 4px currentColor);
        }
        @keyframes dl-flow {
          to { stroke-dashoffset: -300; }
        }
        @media (prefers-reduced-motion: reduce) {
          .dl-trace, .dl-dot { animation: none !important; }
        }
      `}</style>
    </svg>
  )
}
