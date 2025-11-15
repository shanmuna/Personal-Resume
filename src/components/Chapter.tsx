import { useEffect, useRef } from 'react'
import './Chapter.css'

interface ChapterProps {
  id: string
  component: React.ComponentType
}

export default function Chapter({ id, component: Component }: ChapterProps) {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('chapter-enter')
          const children = entry.target.querySelectorAll('[data-animate]')
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('animated')
            }, 100 + index * 80)
          })
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="chapter" data-chapter={id}>
      <Component />
    </section>
  )
}
