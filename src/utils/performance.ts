export function trackPerformance() {
  if (typeof window === 'undefined') return

  const lcpObserver = new PerformanceObserver((list) => {
    const entries = list.getEntries()
    const lastEntry = entries[entries.length - 1] as any
    console.log('LCP:', lastEntry.renderTime || lastEntry.loadTime)
  })

  try {
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })
  } catch (e) {
    console.warn('LCP observer not supported')
  }

  let clsValue = 0
  const clsObserver = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (!(entry as any).hadRecentInput) {
        clsValue += (entry as any).value
        console.log('CLS:', clsValue)
      }
    }
  })

  try {
    clsObserver.observe({ entryTypes: ['layout-shift'] })
  } catch (e) {
    console.warn('CLS observer not supported')
  }
}
