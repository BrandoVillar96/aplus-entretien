// A quiet "universe" of cleaning motifs — small bubbles, water droplets and
// sparkle/shine glints scattered like stars, each twinkling on its own
// rhythm, plus two soft flowing "orbit" trails that each carry a traveling
// droplet or sparkle. Same ambient, low-opacity background feel as before,
// just built from shapes that read as "cleaning" rather than plain dots.
// Pure SVG + CSS, no dependencies. Respects prefers-reduced-motion.

// Unit-sized paths (roughly -1..1), scaled/translated per instance via a
// wrapping <g transform="...">.
const SPARKLE_PATH =
  'M0 -1 C0.25 -0.35,0.35 -0.25,1 0 C0.35 0.25,0.25 0.35,0 1 C-0.25 0.35,-0.35 0.25,-1 0 C-0.35 -0.25,-0.25 -0.35,0 -1 Z'
const DROPLET_PATH =
  'M0 -1 C0.49 -0.37,0.79 0.2,0.79 0.6 C0.79 1.11,0.43 1.5,0 1.5 C-0.43 1.5,-0.79 1.11,-0.79 0.6 C-0.79 0.2,-0.49 -0.37,0 -1 Z'

const BUBBLES = [
  { cx: 70, cy: 560, r: 9, delay: '0s', dur: '5s' },
  { cx: 128, cy: 615, r: 4, delay: '1.4s', dur: '6s' },
  { cx: 905, cy: 110, r: 11, delay: '0.6s', dur: '5.6s' },
  { cx: 952, cy: 168, r: 5, delay: '2s', dur: '6.4s' },
  { cx: 470, cy: 55, r: 6, delay: '1s', dur: '5.2s' },
  { cx: 55, cy: 250, r: 5, delay: '2.6s', dur: '6.8s' },
  { cx: 610, cy: 645, r: 7, delay: '0.9s', dur: '5.8s' },
  { cx: 860, cy: 470, r: 4, delay: '2.2s', dur: '6.2s' },
  { cx: 300, cy: 615, r: 5, delay: '1.7s', dur: '5.4s' },
]

const SPARKLES = [
  { cx: 250, cy: 120, s: 7, delay: '0s', dur: '4s' },
  { cx: 640, cy: 520, s: 9, delay: '1.6s', dur: '4.6s' },
  { cx: 820, cy: 90, s: 5, delay: '0.8s', dur: '3.8s' },
  { cx: 180, cy: 470, s: 6, delay: '2.2s', dur: '4.2s' },
  { cx: 970, cy: 340, s: 5, delay: '1.1s', dur: '4.4s' },
  { cx: 400, cy: 40, s: 4.5, delay: '2.8s', dur: '3.6s' },
]

const DROPLETS = [
  { cx: 400, cy: 620, s: 7, delay: '0.4s', dur: '5.4s' },
  { cx: 760, cy: 230, s: 6, delay: '1.8s', dur: '5s' },
  { cx: 40, cy: 400, s: 5.5, delay: '1.1s', dur: '4.8s' },
  { cx: 545, cy: 660, s: 5, delay: '2.4s', dur: '5.2s' },
  { cx: 930, cy: 610, s: 6, delay: '0.2s', dur: '5.6s' },
]

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
          <stop offset="50%" stopColor="#1fb3ad" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#0e7c86" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="lineGradB" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#d9b565" stopOpacity="0" />
          <stop offset="50%" stopColor="#c99a3f" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#d9b565" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Two soft flowing "orbit" trails, each carrying a traveling motif. */}
      <path
        id="traceA"
        d="M-50 560 C 180 460, 260 620, 460 500 S 760 340, 1050 400"
        fill="none"
        stroke="url(#lineGradA)"
        strokeWidth="2"
        strokeLinecap="round"
        className="dl-trace"
        style={{ strokeDasharray: '14 16', animationDuration: '9s' }}
      />
      <path
        id="traceB"
        d="M-50 220 C 200 300, 320 120, 540 200 S 820 340, 1050 260"
        fill="none"
        stroke="url(#lineGradB)"
        strokeWidth="1.75"
        strokeLinecap="round"
        className="dl-trace"
        style={{ strokeDasharray: '10 14', animationDuration: '12s', animationDirection: 'reverse' }}
      />

      <g className="dl-dot" fill="#5eead4">
        <animateMotion dur="9s" repeatCount="indefinite" rotate="auto">
          <mpath href="#traceA" />
        </animateMotion>
        <path transform="scale(6)" d={DROPLET_PATH} />
      </g>
      <g className="dl-dot" fill="#eecd8f">
        <animateMotion dur="12s" repeatCount="indefinite" rotate="auto">
          <mpath href="#traceB" />
        </animateMotion>
        <path transform="scale(5.5)" d={SPARKLE_PATH} />
      </g>

      {/* The "universe": bubbles, droplets and sparkles twinkling like a
          quiet constellation of cleaning motifs. */}
      {BUBBLES.map((b, i) => (
        <circle
          key={`bubble-${i}`}
          cx={b.cx}
          cy={b.cy}
          r={b.r}
          fill="none"
          stroke={i % 2 === 0 ? '#1fb3ad' : '#c99a3f'}
          strokeWidth="1.4"
          className="cu-twinkle"
          style={{ '--cu-delay': b.delay, '--cu-dur': b.dur }}
        />
      ))}
      {DROPLETS.map((d, i) => (
        <g key={`droplet-${i}`} transform={`translate(${d.cx} ${d.cy})`}>
          <path
            transform={`scale(${d.s})`}
            d={DROPLET_PATH}
            fill={i % 2 === 0 ? '#1fb3ad' : '#c99a3f'}
            className="cu-twinkle"
            style={{ '--cu-delay': d.delay, '--cu-dur': d.dur, '--cu-max': '0.4' }}
          />
        </g>
      ))}
      {SPARKLES.map((s, i) => (
        <g key={`sparkle-${i}`} transform={`translate(${s.cx} ${s.cy})`}>
          <path
            transform={`scale(${s.s})`}
            d={SPARKLE_PATH}
            fill={i % 2 === 0 ? '#eecd8f' : '#5eead4'}
            className="cu-twinkle"
            style={{ '--cu-delay': s.delay, '--cu-dur': s.dur, '--cu-max': '0.6' }}
          />
        </g>
      ))}

      <style>{`
        .dl-trace {
          animation-name: dl-flow;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .dl-dot {
          filter: drop-shadow(0 0 4px currentColor);
        }
        .cu-twinkle {
          transform-box: fill-box;
          transform-origin: 50% 50%;
          opacity: var(--cu-min, 0.14);
          animation: cu-twinkle var(--cu-dur, 5s) ease-in-out infinite;
          animation-delay: var(--cu-delay, 0s);
        }
        @keyframes dl-flow {
          to { stroke-dashoffset: -300; }
        }
        @keyframes cu-twinkle {
          0%, 100% { opacity: var(--cu-min, 0.14); transform: scale(0.82); }
          50% { opacity: var(--cu-max, 0.5); transform: scale(1.15); }
        }
        @media (prefers-reduced-motion: reduce) {
          .dl-trace, .dl-dot, .cu-twinkle { animation: none !important; opacity: 0.28 !important; }
        }
      `}</style>
    </svg>
  )
}
