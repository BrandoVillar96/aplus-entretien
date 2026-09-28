import { useEffect, useRef, useState } from 'react'

// The company's "A+" mark that softly trails the
// mouse pointer anywhere on the page — a playful, subtle nod to
// "cleaning as it goes". Purely decorative: pointer-events are disabled
// on it, it only attaches listeners on fine-pointer (desktop/mouse)
// devices, so it simply never appears on touch devices, and it snaps
// straight to the pointer instead of trailing when the user has
// requested reduced motion.
export default function CleanPointer() {
  const dotRef = useRef(null)
  const rafRef = useRef(null)
  const pos = useRef({ x: -100, y: -100 })
  const target = useRef({ x: -100, y: -100 })
  const [active, setActive] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return undefined
    if (!window.matchMedia('(pointer: fine)').matches) return undefined
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const handleMove = (e) => {
      target.current = { x: e.clientX, y: e.clientY }
      if (reduceMotion) pos.current = { ...target.current }
      setActive(true)
    }
    const handleLeave = () => setActive(false)

    window.addEventListener('mousemove', handleMove, { passive: true })
    document.documentElement.addEventListener('mouseleave', handleLeave)

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
      window.removeEventListener('mousemove', handleMove)
      document.documentElement.removeEventListener('mouseleave', handleLeave)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      className={`pointer-events-none fixed left-0 top-0 z-[60] transition-opacity duration-300 ease-out ${
        active ? 'opacity-90' : 'opacity-0'
      }`}
      style={{ willChange: 'transform' }}
    >
      <img
        src="/favicon.png"
        alt=""
        width="30"
        height="30"
        draggable="false"
        className="drop-shadow-[0_0_7px_rgba(31,179,173,0.55)]"
      />
    </div>
  )
}
