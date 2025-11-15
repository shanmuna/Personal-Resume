import { useEffect, useRef } from 'react'

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const parent = canvas.parentElement
    if (!parent) return

    const MAX_DISTANCE = 80
    const particles: Array<{
      x: number
      y: number
      startX: number
      startY: number
      vx: number
      vy: number
      radius: number
      brightness: number
    }> = []

    const createParticle = () => {
      const vx = (Math.random() - 0.5) * 0.3
      const vy = (Math.random() - 0.5) * 0.3
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        startX: 0,
        startY: 0,
        vx,
        vy,
        radius: Math.random() * 2 + 0.5,
        brightness: Math.random() * 0.8 + 0.6,
      }
    }

    const initParticles = () => {
      particles.length = 0
      for (let i = 0; i < 40; i++) {
        const p = createParticle()
        p.startX = p.x
        p.startY = p.y
        particles.push(p)
      }
    }

    const resizeCanvas = () => {
      canvas.width = parent.clientWidth
      canvas.height = parent.clientHeight
      initParticles()
    }

    resizeCanvas()

    let animationId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p, idx) => {
        p.x += p.vx
        p.y += p.vy

        const distance = Math.sqrt(
          Math.pow(p.x - p.startX, 2) + Math.pow(p.y - p.startY, 2)
        )

        if (distance > MAX_DISTANCE) {
          const newP = createParticle()
          newP.startX = newP.x
          newP.startY = newP.y
          particles[idx] = newP
          return
        }
        const progress = distance / MAX_DISTANCE
        const alpha = p.brightness * 0.6 * (1 - progress)
        ctx.fillStyle = `rgba(0, 212, 255, ${alpha})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    const observer = new ResizeObserver(() => {
      resizeCanvas()
    })
    observer.observe(parent)

    return () => {
      cancelAnimationFrame(animationId)
      observer.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'block',
      }}
    />
  )
}
