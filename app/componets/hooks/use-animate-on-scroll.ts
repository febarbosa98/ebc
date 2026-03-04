"use client"

import { useEffect, useRef, useState } from "react"

interface UseAnimateOnScrollOptions {
  threshold?: number
  rootMargin?: string
  once?: boolean
}

export function useAnimateOnScroll({
  threshold = 0.1,
  rootMargin = "0px 0px -50px 0px",
  once = true,
}: UseAnimateOnScrollOptions = {}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) observer.unobserve(element)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return { ref, isVisible }
}
