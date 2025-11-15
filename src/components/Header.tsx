import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './Header.css'

const chapters = [
  { id: 'hero', title: '贾振华' },
  { id: 'about', title: '关于我' },
  { id: 'skills', title: '技能展示' },
  { id: 'projects', title: '项目经历' },
  { id: 'contact', title: '联系方式' },
]

export default function Header() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeChapter, setActiveChapter] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight
      setIsVisible(window.scrollY > heroHeight * 0.3)

      const chapterElements = document.querySelectorAll('[data-chapter]')
      let current = 'hero'
      chapterElements.forEach((el) => {
        const rect = el.getBoundingClientRect()
        if (rect.top <= window.innerHeight / 2) {
          current = el.getAttribute('data-chapter') || 'hero'
        }
      })
      setActiveChapter(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const currentTitle = chapters.find(ch => ch.id === activeChapter)?.title || '贾振华'

  return (
    <motion.header
      className="header"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
      transition={{ duration: 0.3 }}
      style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
    >
      <div className="header-content">
        <div className="header-left">
          <img src={`${import.meta.env.BASE_URL}avatar.png`} alt="avatar" className="header-avatar" />
          <span className="header-name">贾振华</span>
        </div>
        
        <motion.div
          className="header-title"
          key={activeChapter}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
        >
          {currentTitle}
        </motion.div>

        <div className="header-right">
          <div className="header-indicator">
            <span className="indicator-dot" />
            <span className="indicator-text">在线</span>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
