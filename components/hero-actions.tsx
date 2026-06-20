'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { FigmaIcon, GitHubIcon, LinkedInIcon } from '@/components/icons'
import { ActionLink } from '@/components/ui'

gsap.registerPlugin(useGSAP)

type HeroActionsProps = {
  github: string
  linkedin: string
  figma: string
}

export function HeroActions({ github, linkedin, figma }: HeroActionsProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { contextSafe } = useGSAP({ scope: containerRef })

  useGSAP(
    () => {
      const buttons = containerRef.current?.querySelectorAll('a')
      if (!buttons?.length) return

      const mm = gsap.matchMedia()

      mm.add(
        '(hover: hover) and (prefers-reduced-motion: no-preference)',
        () => {
          const handlers: Array<{
            el: Element
            onEnter: () => void
            onLeave: () => void
          }> = []

          buttons.forEach((button) => {
            const onEnter = contextSafe(() => {
              gsap.to(button, { y: -4, duration: 0.25, ease: 'power2.out' })
            })
            const onLeave = contextSafe(() => {
              gsap.to(button, { y: 0, duration: 0.25, ease: 'power2.out' })
            })

            button.addEventListener('mouseenter', onEnter)
            button.addEventListener('mouseleave', onLeave)
            handlers.push({ el: button, onEnter, onLeave })
          })

          return () => {
            handlers.forEach(({ el, onEnter, onLeave }) => {
              el.removeEventListener('mouseenter', onEnter)
              el.removeEventListener('mouseleave', onLeave)
            })
          }
        }
      )

      return () => mm.revert()
    },
    { scope: containerRef }
  )

  return (
    <div
      ref={containerRef}
      className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center lg:gap-5"
    >
      <ActionLink
        href="#projects"
        variant="primary"
      >
        View Projects
      </ActionLink>
      <ActionLink
        href={github}
        external
      >
        <GitHubIcon className="size-3.5" />
        GitHub
      </ActionLink>
      <ActionLink
        href={linkedin}
        external
      >
        <LinkedInIcon className="size-3.5" />
        LinkedIn
      </ActionLink>
      <ActionLink
        href={figma}
        external
      >
        <FigmaIcon className="size-3.5" />
        Figma
      </ActionLink>
    </div>
  )
}
