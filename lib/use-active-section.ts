'use client'

import { useEffect, useState } from 'react'
import { navItems } from '@/lib/portfolio-data'
import { HEADER_HEIGHT_PX } from '@/lib/site'

const sectionOrder = navItems.map((item) => item.id)

export function useActiveSection() {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return

    const headings = document.querySelectorAll('[data-section-id]')
    if (headings.length === 0) return

    const intersecting = new Set<string>()
    let heroVisible = false

    const updateActive = () => {
      if (heroVisible) {
        setActiveId(null)
        return
      }

      let next: string | null = null
      for (const id of sectionOrder) {
        if (intersecting.has(id)) {
          next = id
        }
      }

      if (next) {
        setActiveId(next)
      }
    }

    const headingObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.getAttribute('data-section-id')
          if (!id) continue

          if (entry.isIntersecting) {
            intersecting.add(id)
          } else {
            intersecting.delete(id)
          }
        }

        updateActive()
      },
      {
        rootMargin: `-${HEADER_HEIGHT_PX}px 0px -50% 0px`,
        threshold: 0,
      }
    )

    headings.forEach((heading) => headingObserver.observe(heading))

    const heroTitle = document.getElementById('hero-title')
    let heroObserver: IntersectionObserver | undefined

    if (heroTitle) {
      heroObserver = new IntersectionObserver(
        ([entry]) => {
          heroVisible = entry.isIntersecting
          updateActive()
        },
        {
          rootMargin: `-${HEADER_HEIGHT_PX}px 0px 0px 0px`,
          threshold: 0,
        }
      )

      heroObserver.observe(heroTitle)
    }

    return () => {
      headingObserver.disconnect()
      heroObserver?.disconnect()
    }
  }, [])

  return activeId
}
