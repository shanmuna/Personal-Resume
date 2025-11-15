import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import ParticleBackground from './ParticleBackground'
import './Hero.css'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef(null)
  const { scrollY } = useScroll()
  const heroHeight = typeof window !== 'undefined' ? window.innerHeight : 0
  
  const heroMainOpacity = useTransform(scrollY, [heroHeight * 0.2, heroHeight * 2], [1, 0])
  const heroMainX = useTransform(scrollY, [heroHeight * 0.2, heroHeight * 2], [0, -window.innerWidth / 2 + 80])
  const heroMainY = useTransform(scrollY, [heroHeight * 0.2, heroHeight * 2], [0, -heroHeight + 30])
  const heroMainScale = useTransform(scrollY, [heroHeight * 0.2, heroHeight * 2], [1, 0.3])
  const heroMainRotate = useTransform(scrollY, [heroHeight * 0.2, heroHeight * 2], [0, 8])
  const heroMainBlur = useTransform(scrollY, [heroHeight * 0.2, heroHeight * 2], [0, 4])
  const heroMainFilter = useMotionTemplate`blur(${heroMainBlur}px)`

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="hero-wrapper">
      <ParticleBackground />
      
      <div 
        className="hero-cursor-glow"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      />

      <div className="hero-content">
        <motion.div 
          className="hero-main"
          style={{
            opacity: heroMainOpacity,
            scale: heroMainScale,
            x: heroMainX,
            y: heroMainY,
            rotate: heroMainRotate,
            filter: heroMainFilter,
          }}
        >
          <motion.div
            className="hero-left"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <motion.img
              src={`${import.meta.env.BASE_URL}avatar.png`}
              alt="avatar"
              className="hero-avatar"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            />
          </motion.div>

          <motion.div
            className="hero-right"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: 'easeOut' }}
            >
              贾振华
            </motion.h1>

            <motion.p
              className="hero-role"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            >
              全栈工程师 × 项目经理 × 架构师
            </motion.p>

            <motion.div
              className="hero-desc-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            >
              <p className="hero-desc-title">4 年 Java 全栈</p>
              <p className="hero-desc-subtitle">主导 1 套云原生多租户 SaaS 从 0 到 1 上线及 5 个项目按期交付</p>
              
              <motion.div
                className="hero-scroll-hint-mobile"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
                  <rect x="4" y="2" width="8" height="14" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <circle cx="8" cy="9" r="1.5" fill="currentColor"/>
                </svg>
                <span>向下滚动</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="hero-scroll-hint"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
          <rect x="4" y="2" width="8" height="14" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <circle cx="8" cy="9" r="1.5" fill="currentColor"/>
        </svg>
        <span>向下滚动</span>
      </motion.div>
    </div>
  )
}
