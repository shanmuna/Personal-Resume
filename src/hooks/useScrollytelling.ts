import { useEffect, useRef } from 'react'

export function useScrollytelling() {
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const chapters = document.querySelectorAll('[data-chapter]')
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-active', 'true')
          } else {
            entry.target.removeAttribute('data-active')
          }
        })
      },
      { threshold: 0.5 }
    )

    chapters.forEach((ch) => observer.observe(ch))

    return () => observer.disconnect()
  }, [])

  return containerRef
}
