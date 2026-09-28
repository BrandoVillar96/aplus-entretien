import { useEffect, useRef, useState } from 'react'

// A small "cleaning" glyph (spray bottle + shine) that softly trails the
// mouse pointer while it moves over the element referenced by
// `containerRef` — a playful, subtle nod to "cleaning as it goes".
// Purely decorative: pointer-events are disabled on it, it only attaches
// listeners on fine-pointer (desktop/mouse) devices, so it simply never
// appears on touch devices, and it holds still instead of animating when
// the user has requested reduced motion.
export default function CleanPointer({ containerRef }) {
  const dotRef = useRef(null)
  const rafRef = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = containerRef?.current
    if (!el || typeof window === 'undefined') return undefined
    if (!window.matchMedia('(pointer: fine)').matches) return undefined

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect()
      target.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
      if (reduceMotion) pos.current = { ...target.current }
      setActive(true)
    }
    const handleLeave = () => setActive(false)

    el.addEventListener('mousemove', handleMove)
    el.addEventListener('mouseenter', handleMove)
    el.addEventListener('mouseleave', handleLeave)

    const tick = () => {
      const ease = reduceMotion ? 1 : 0.16
      pos.current.x += (target.current.x - pos.current.x) * ease
      pos.current.y += (target.current.y - pos.current.y) * ease
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`
      }
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)

    return () => {
      el.removeEventListener('mousemove', handleMove)
      el.removeEventListener('mouseenter', handleMove)
      el.removeEventListener('mouseleave', handleLeave)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [containerRef])

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      className={`pointer-events-none absolute left-0 top-0 z-30 transition-opacity duration-300 ease-out ${
        active ? 'opacity-90' : 'opacity-0'
      }`}
      style={{ willChange: 'transform' }}
    >
      <svg width="34" height="34" viewBox="0 0 34 34" className="drop-shadow-[0_0_8px_rgba(31,179,173,0.5)]">
        <g fill="none" stroke="#0e7c86" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 6h4v2.6l2.6 2.6" />
          <rect x="10.5" y="11" width="10" height="15" rx="2.6" fill="#ffffff" />
          <path d="M14 16h5" />
          <path d="M14 20.4h5" />
        </g>
        <g stroke="#c99a3f" strokeWidth="1.5" strokeLinecap="round">
          <path d="M23 8.4 l3.2 -1.6" />
          <path d="M23.8 11.2 l3.7 0.4" />
          <path d="M22.6 5.6 l1.8 -2.9" />
        </g>
      </svg>
    </div>
  )
}
