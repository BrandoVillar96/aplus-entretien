// Ambient animated background — soft flowing traces (teal/gold) carrying
// small cleaning motifs (a water droplet and a sparkle/shine glint) along
// them, plus a couple of faint static soap-bubble clusters. Same sense of
// gentle motion as before, but the shapes themselves now read as
// "cleaning company" rather than generic abstract lines. Pure SVG + CSS,
// no dependencies. Respects prefers-reduced-motion.
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

      {/* Faint static soap-bubble clusters — reads as suds/foam texture
          without tipping into cartoon clipart. */}
      <g className="dl-bubbles" opacity="0.16" fill="none" stroke="#1fb3ad" strokeWidth="1.5">
        <circle cx="115" cy="110" r="15" />
        <circle cx="148" cy="86" r="7" />
        <circle cx="92" cy="145" r="5" />
      </g>
      <g className="dl-bubbles dl-bubbles-alt" opacity="0.14" fill="none" stroke="#c99a3f" strokeWidth="1.5">
        <circle cx="895" cy="575" r="17" />
        <circle cx="927" cy="603" r="8" />
        <circle cx="862" cy="608" r="6" />
      </g>

      {/* Traveling motifs — a water droplet and a sparkle/shine glint —
          follow the same traces the plain dots used to, so the sense of
          movement is unchanged while the shapes are now recognizably
          "cleaning". */}
      <g className="dl-dot" fill="#5eead4">
        <animateMotion dur="9s" repeatCount="indefinite" rotate="auto">
          <mpath href="#traceA" />
        </animateMotion>
        <path d="M0 -7 C 3.4 -2.6, 5.5 1.4, 5.5 4.2 C 5.5 7.8, 3 10.5, 0 10.5 C -3 10.5, -5.5 7.8, -5.5 4.2 C -5.5 1.4, -3.4 -2.6, 0 -7 Z" />
      </g>
      <g className="dl-dot" fill="#eecd8f">
        <animateMotion dur="12s" repeatCount="indefinite" rotate="auto">
          <mpath href="#traceB" />
        </animateMotion>
        <path d="M0 -7 L1.9 -1.9 L7 0 L1.9 1.9 L0 7 L-1.9 1.9 L-7 0 L-1.9 -1.9 Z" />
      </g>

      <style>{`
        .dl-trace {
          animation-name: dl-flow;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .dl-dot {
          filter: drop-shadow(0 0 4px currentColor);
        }
        .dl-bubbles {
          animation: dl-drift 11s ease-in-out infinite;
        }
        .dl-bubbles-alt {
          animation-duration: 13s;
          animation-direction: reverse;
        }
        @keyframes dl-flow {
          to { stroke-dashoffset: -300; }
        }
        @keyframes dl-drift {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .dl-trace, .dl-dot, .dl-bubbles { animation: none !important; }
        }
      `}</style>
    </svg>
  )
}
