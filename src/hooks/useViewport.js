import { useState, useEffect } from 'react'

/**
 * Devuelve true mientras el elemento referenciado esté visible dentro del viewport
 * (más el margen opcional). Útil para pausar videos, intervalos y animaciones fuera de pantalla.
 */
export const useInViewport = (ref, rootMargin = '100px 0px') => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin, threshold: 0 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [ref, rootMargin])

  return isVisible
}

/**
 * Devuelve true una única vez cuando el elemento se acerca al viewport.
 * Ideal para montar iframes pesados (Facebook, Google Maps) solo bajo demanda.
 */
export const useNearViewport = (ref, rootMargin = '400px 0px') => {
  const [isNear, setIsNear] = useState(false)

  useEffect(() => {
    if (isNear) return
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') {
      setIsNear(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsNear(true)
          observer.disconnect()
        }
      },
      { rootMargin, threshold: 0 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [ref, rootMargin, isNear])

  return isNear
}
