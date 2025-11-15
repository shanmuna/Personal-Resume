import { useEffect, useState } from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Chapter from './components/Chapter'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

const chapters = [
  { id: 'hero', component: Hero },
  { id: 'about', component: About },
  { id: 'skills', component: Skills },
  { id: 'projects', component: Projects },
  { id: 'contact', component: Contact },
]

function App() {
  const [activeChapter, setActiveChapter] = useState('hero')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveChapter(entry.target.id)
          }
        })
      },
      { threshold: 0.3 }
    )

    const chapterElements = document.querySelectorAll('[data-chapter]')
    chapterElements.forEach((ch) => observer.observe(ch))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="app-container">
      <Header />
      <Navbar />
      <main className="scrollytelling">
        {chapters.map((ch) => (
          <Chapter key={ch.id} id={ch.id} component={ch.component} />
        ))}
      </main>
    </div>
  )
}

export default App
