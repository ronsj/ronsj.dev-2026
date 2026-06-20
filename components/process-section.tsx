'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { SectionLabel } from '@/components/ui'
import { process } from '@/lib/portfolio-data'
import { useActiveSection } from '@/lib/use-active-section'

function ProcessBar({
  percent,
  variant,
}: {
  percent: number
  variant: 'text' | 'accent'
}) {
  return (
    <div
      role="progressbar"
      aria-valuenow={percent}
      aria-valuemin={0}
      aria-valuemax={100}
      className="bg-site-surface mt-4 h-2 w-full overflow-hidden rounded-full"
    >
      <div
        data-process-fill
        data-target-percent={percent}
        className={`h-full rounded-full ${
          variant === 'text' ? 'bg-site-body' : 'bg-site-accent'
        }`}
        style={{ width: 0 }}
      />
    </div>
  )
}

export function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const hasAnimatedRef = useRef(false)
  const activeId = useActiveSection()

  useEffect(() => {
    if (activeId !== 'process' || hasAnimatedRef.current) return

    const fills = containerRef.current?.querySelectorAll('[data-process-fill]')
    if (!fills?.length) return

    hasAnimatedRef.current = true

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) {
      fills.forEach((fill) => {
        gsap.set(fill, {
          width: `${(fill as HTMLElement).dataset.targetPercent}%`,
        })
      })
      return
    }

    gsap.fromTo(
      fills,
      { width: '0%' },
      {
        width: (index, target) =>
          `${(target as HTMLElement).dataset.targetPercent}%`,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.15,
      }
    )
  }, [activeId])

  return (
    <section
      id="process"
      className="border-site-border scroll-mt-24 border-t py-16"
    >
      <div
        ref={containerRef}
        className="mx-auto max-w-5xl px-6"
      >
        <SectionLabel sectionId="process">Process</SectionLabel>

        <div className="mt-8 flex flex-col gap-8">
          {process.map((item) => (
            <div key={item.heading}>
              <h3 className="text-site-body text-base/relaxed">
                {item.heading}
              </h3>
              <ProcessBar
                percent={item.fillPercent}
                variant={item.fillColor}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
