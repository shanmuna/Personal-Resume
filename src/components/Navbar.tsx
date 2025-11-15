import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './Navbar.css'

const sections = [
  { id: 'hero', label: '首页' },
  { id: 'about', label: '关于' },
  { id: 'skills', label: '技能' },
  { id: 'projects', label: '项目' },
  { id: 'contact', label: '联系' },
]

export default function Navbar() {
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const chapters = document.querySelectorAll('[data-chapter]')
      let current = 'hero'

      chapters.forEach((chapter) => {
        const rect = chapter.getBoundingClientRect()
        if (rect.top <= window.innerHeight / 2) {
          current = chapter.getAttribute('data-chapter') || 'hero'
        }
      })

      setActive(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (id: string) => {
    const element = document.querySelector(`[data-chapter="${id}"]`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="navbar">
      <div className="navbar-track">
        {sections.map((section) => (
          <motion.button
            key={section.id}
            className={`navbar-item ${active === section.id ? 'active' : ''}`}
            onClick={() => handleClick(section.id)}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            title={section.label}
          >
            <span className="navbar-dot" />
            <span className="navbar-label">{section.label}</span>
          </motion.button>
        ))}
      </div>
    </nav>
  )
}
