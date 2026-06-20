'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { HeroActions } from '@/components/hero-actions'

gsap.registerPlugin(useGSAP)

const introFrom = {
  opacity: 0,
  y: 24,
  duration: 1,
  ease: 'power2.out' as const,
  delay: 0.2,
}

type HeroContentProps = {
  label: string
  name: string
  summary: string
  github: string
  linkedin: string
  figma: string
}

export function HeroContent({
  label,
  name,
  summary,
  github,
  linkedin,
  figma,
}: HeroContentProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const introElements =
        containerRef.current?.querySelectorAll('[data-hero-intro]')
      const buttons = containerRef.current?.querySelectorAll('a')
      if (!introElements?.length && !buttons?.length) return

      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        if (introElements?.length) {
          gsap.from(introElements, introFrom)
        }

        if (buttons?.length) {
          gsap.from(buttons, {
            ...introFrom,
            stagger: 0.2,
          })
        }
      })

      mm.add('(prefers-reduced-motion: reduce)', () => {
        const targets = [
          ...(introElements ? Array.from(introElements) : []),
          ...(buttons ? Array.from(buttons) : []),
        ]
        if (targets.length) {
          gsap.set(targets, { opacity: 1, y: 0 })
        }
      })

      return () => mm.revert()
    },
    { scope: containerRef }
  )

  return (
    <div ref={containerRef}>
      <p
        data-hero-intro
        className="text-site-accent font-mono text-sm tracking-widest uppercase"
      >
        {label}
      </p>

      <h1
        id="hero-title"
        data-hero-intro
        className="font-display text-site-heading text-box-trim-both text-box-edge-cap-alpha mt-8 text-5xl/none font-bold tracking-tight lg:text-8xl/tight lg:tracking-tight"
      >
        {name}
      </h1>

      <p
        data-hero-intro
        className="text-site-body mt-8 max-w-xl text-lg/relaxed hyphens-none"
      >
        {summary.replace(/(\w)-(\w)/g, '$1\u2011$2')}
      </p>

      <HeroActions
        github={github}
        linkedin={linkedin}
        figma={figma}
      />
    </div>
  )
}
