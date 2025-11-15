import { useEffect } from 'react'

export function usePageAnimation() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-animate]')
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = parseFloat(entry.target.getAttribute('data-delay') || '0')
            setTimeout(() => {
              entry.target.classList.add('animated')
            }, delay)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}
