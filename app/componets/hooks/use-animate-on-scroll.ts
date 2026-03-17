"use client"

import { useEffect, useRef, useState, useMemo } from "react"

interface UseAnimateOnScrollOptions {
  threshold?: number
  rootMargin?: string
  once?: boolean
  mobileOffset?: string
}

export function useAnimateOnScroll({
  threshold = 0.1,
  rootMargin = "0px 0px -50px 0px",
  once = true,
  mobileOffset = "0px 0px 10px 0px"
}: UseAnimateOnScrollOptions = {}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)


  const options = useMemo(() => {
    // Detecta se é mobile (ajuste simples de largura)
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768
    return {
      threshold,
      rootMargin: isMobile ? mobileOffset : rootMargin
    }
  }, [threshold, rootMargin, mobileOffset])

  useEffect(() => {
    const element = ref.current
    if (!element) return

   

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // RequestAnimationFrame garante que a mudança de estado 
          // ocorra no próximo frame de renderização, evitando engasgos (jank)
          requestAnimationFrame(() => setIsVisible(true))
          
          if (once) observer.unobserve(element)
        }
      },
      options
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [options, once])

  return { ref, isVisible }
}
