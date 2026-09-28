import { useEffect, useRef } from 'react'

// A quiet, page-wide "universe" of cleaning motifs — small bubbles, water
// droplets and sparkle/shine glints that drift, bounce off the edges of
// the viewport, and gently collide with one another. Rendered once as a
// fixed, full-viewport <canvas> behind all page content, so it's visible
// throughout the whole site (as you scroll through any section) rather
// than confined to a single one. Pure canvas + requestAnimationFrame, no
// dependencies; respects prefers-reduced-motion by drawing one still
// frame instead of animating.

const COLORS = { teal: '#1fb3ad', gold: '#c99a3f' }

function makeParticles(width, height, reduceMotion) {
  const types = ['bubble', 'droplet', 'sparkle']
  const count = Math.max(16, Math.min(32, Math.round((width * height) / 50000)))
  const particles = []
  for (let i = 0; i < count; i++) {
    const type = types[i % types.length]
    const r = type === 'bubble' ? 4 + Math.random() * 9 : 5 + Math.random() * 5
    const speed = reduceMotion ? 0 : 0.14 + Math.random() * 0.24
    const angle = Math.random() * Math.PI * 2
    particles.push({
      type,
      x: Math.random() * width,
      y: Math.random() * height,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      r,
      color: i % 2 === 0 ? COLORS.teal : COLORS.gold,
      rot: Math.random() * Math.PI * 2,
      vr: (Math.random() - 0.5) * 0.01,
    })
  }
  return particles
}

function drawBubble(ctx, p) {
  ctx.beginPath()
  ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
  ctx.strokeStyle = p.color
  ctx.globalAlpha = 0.32
  ctx.lineWidth = 1.4
  ctx.stroke()
}

function drawDroplet(ctx, p) {
  ctx.save()
  ctx.translate(p.x, p.y)
  ctx.rotate(p.rot)
  ctx.scale(p.r / 6, p.r / 6)
  ctx.beginPath()
  ctx.moveTo(0, -6)
  ctx.bezierCurveTo(3, -2.2, 4.8, 1.2, 4.8, 3.6)
  ctx.bezierCurveTo(4.8, 6.7, 2.6, 9, 0, 9)
  ctx.bezierCurveTo(-2.6, 9, -4.8, 6.7, -4.8, 3.6)
  ctx.bezierCurveTo(-4.8, 1.2, -3, -2.2, 0, -6)
  ctx.closePath()
  ctx.fillStyle = p.color
  ctx.globalAlpha = 0.26
  ctx.fill()
  ctx.restore()
}

function drawSparkle(ctx, p) {
  ctx.save()
  ctx.translate(p.x, p.y)
  ctx.rotate(p.rot)
  ctx.scale(p.r / 6, p.r / 6)
  ctx.beginPath()
  ctx.moveTo(0, -6)
  ctx.bezierCurveTo(1.5, -2.1, 2.1, -1.5, 6, 0)
  ctx.bezierCurveTo(2.1, 1.5, 1.5, 2.1, 0, 6)
  ctx.bezierCurveTo(-1.5, 2.1, -2.1, 1.5, -6, 0)
  ctx.bezierCurveTo(-2.1, -1.5, -1.5, -2.1, 0, -6)
  ctx.closePath()
  ctx.fillStyle = p.color
  ctx.globalAlpha = 0.34
  ctx.fill()
  ctx.restore()
}

const DRAW = { bubble: drawBubble, droplet: drawDroplet, sparkle: drawSparkle }

export default function CleaningUniverse() {
  const canvasRef = useRef(null)
  const particlesRef = useRef([])
  const rafRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined
    const ctx = canvas.getContext('2d')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    let width = window.innerWidth
    let height = window.innerHeight

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    particlesRef.current = makeParticles(width, height, reduceMotion)
    window.addEventListener('resize', resize)

    const step = () => {
      const particles = particlesRef.current
      ctx.clearRect(0, 0, width, height)

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        p.rot += p.vr
        if (p.x - p.r < 0) { p.x = p.r; p.vx *= -1 }
        if (p.x + p.r > width) { p.x = width - p.r; p.vx *= -1 }
        if (p.y - p.r < 0) { p.y = p.r; p.vy *= -1 }
        if (p.y + p.r > height) { p.y = height - p.r; p.vy *= -1 }
      }

      // Simple pairwise collisions — separate overlapping particles and
      // swap their velocities, so they visibly bounce off one another.
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const dx = b.x - a.x
          const dy = b.y - a.y
          const dist = Math.hypot(dx, dy) || 0.0001
          const minDist = a.r + b.r
          if (dist < minDist) {
            const nx = dx / dist
            const ny = dy / dist
            const overlap = (minDist - dist) / 2
            a.x -= nx * overlap
            a.y -= ny * overlap
            b.x += nx * overlap
            b.y += ny * overlap
            const avx = a.vx
            const avy = a.vy
            a.vx = b.vx
            a.vy = b.vy
            b.vx = avx
            b.vy = avy
          }
        }
      }

      for (const p of particles) DRAW[p.type](ctx, p)
      ctx.globalAlpha = 1

      if (!reduceMotion) rafRef.current = requestAnimationFrame(step)
    }

    step()

    return () => {
      window.removeEventListener('resize', resize)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none fixed inset-0 z-0" />
}
