// Hand-built SVG illustration (no external photo assets): a flat-lay of
// cleaning equipment — bucket, mop, spray bottle, cloth — on a navy panel.
export default function AboutIllustration() {
  return (
    <svg viewBox="0 0 400 480" className="w-full h-auto" role="img" aria-label="Illustration d'équipement de nettoyage professionnel">
      <defs>
        <linearGradient id="aboutCard" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#194670" />
          <stop offset="100%" stopColor="#081b2e" />
        </linearGradient>
        <linearGradient id="bucketGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1fb3ad" />
          <stop offset="100%" stopColor="#0e7c86" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="400" height="480" rx="28" fill="url(#aboutCard)" />
      <rect x="0.75" y="0.75" width="398.5" height="478.5" rx="27.25" fill="none" stroke="#ffffff" strokeOpacity="0.08" />

      {/* soft radial glow */}
      <ellipse cx="200" cy="200" rx="180" ry="150" fill="#1fb3ad" opacity="0.08" />

      {/* mop */}
      <g transform="translate(120 70)">
        <rect x="-5" y="0" width="10" height="200" rx="5" fill="#d9b565" />
        <path
          d="M-34 190 Q-40 250 -20 270 Q0 285 20 270 Q40 250 34 190 Z"
          fill="#e9edf3"
          opacity="0.92"
        />
        {[-22, -11, 0, 11, 22].map((dx, i) => (
          <line key={i} x1={dx} y1="192" x2={dx * 1.3} y2="268" stroke="#aab4c2" strokeWidth="2.5" opacity="0.7" />
        ))}
      </g>

      {/* bucket */}
      <g transform="translate(150 300)">
        <path d="M0 0 L120 0 L104 100 Q60 112 16 100 Z" fill="url(#bucketGrad)" />
        <ellipse cx="60" cy="0" rx="60" ry="12" fill="#12969f" />
        <path d="M14 8 Q60 -34 106 8" fill="none" stroke="#d9b565" strokeWidth="6" strokeLinecap="round" />
      </g>

      {/* spray bottle */}
      <g transform="translate(255 150)">
        <rect x="0" y="40" width="58" height="90" rx="10" fill="#ffffff" opacity="0.95" />
        <rect x="14" y="14" width="30" height="30" rx="4" fill="#c99a3f" />
        <rect x="8" y="0" width="42" height="16" rx="6" fill="#0c2540" />
        <rect x="42" y="-4" width="26" height="10" rx="4" fill="#0c2540" transform="rotate(20 42 -4)" />
        <rect x="10" y="60" width="38" height="6" rx="3" fill="#1fb3ad" opacity="0.6" />
        <rect x="10" y="74" width="38" height="6" rx="3" fill="#1fb3ad" opacity="0.4" />
      </g>

      {/* folded cloth */}
      <g transform="translate(48 340)">
        <rect x="0" y="10" width="90" height="46" rx="10" fill="#1fb3ad" opacity="0.9" />
        <rect x="8" y="0" width="74" height="30" rx="8" fill="#ffffff" opacity="0.9" />
      </g>

      {/* sparkles */}
      {[
        [90, 60],
        [300, 90],
        [60, 250],
        [330, 320],
      ].map(([sx, sy], i) => (
        <path
          key={i}
          d={`M${sx} ${sy - 9} L${sx + 2.5} ${sy - 2.5} L${sx + 9} ${sy} L${sx + 2.5} ${sy + 2.5} L${sx} ${sy + 9} L${sx - 2.5} ${sy + 2.5} L${sx - 9} ${sy} L${sx - 2.5} ${sy - 2.5} Z`}
          fill="#ffffff"
          opacity={0.8 - i * 0.1}
        />
      ))}
    </svg>
  )
}
