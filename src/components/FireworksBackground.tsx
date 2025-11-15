import { useEffect, useRef } from 'react'

export default function FireworksBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Particle[] = []
    const colors = ['#00d4ff', '#1e3a8a', '#0f1535', '#1a1f4d', '#00a8cc']

    class Particle {
      x: number
      y: number
      vx: number
      vy: number
      color: string
      life: number
      maxLife: number
      size: number

      constructor(x: number, y: number, color: string) {
        this.x = x
        this.y = y
        this.color = color
        this.life = 1
        this.maxLife = Math.random() * 2 + 1
        this.size = Math.random() * 80 + 40
        const angle = Math.random() * Math.PI * 2
        const speed = Math.random() * 2 + 1
        this.vx = Math.cos(angle) * speed
        this.vy = Math.sin(angle) * speed
      }

      update() {
        this.x += this.vx
        this.y += this.vy
        this.vy += 0.05
        this.life -= 1 / (this.maxLife * 60)
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.globalAlpha = this.life * 0.3
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.globalAlpha = 1
      }
    }

    function createFireworks() {
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height * 0.6
      const color = colors[Math.floor(Math.random() * colors.length)]
      for (let i = 0; i < 8; i++) {
        particles.push(new Particle(x, y, color))
      }
    }

    function animate() {
      ctx.fillStyle = 'rgba(10, 14, 39, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update()
        particles[i].draw(ctx)
        if (particles[i].life <= 0) {
          particles.splice(i, 1)
        }
      }

      requestAnimationFrame(animate)
    }

    const interval = setInterval(createFireworks, 800)
    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  )
}
