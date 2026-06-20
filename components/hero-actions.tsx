'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { FigmaIcon, GitHubIcon, LinkedInIcon } from '@/components/icons'

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
      <HeroActionButton
        href="#projects"
        primary={true}
      >
        View Projects
      </HeroActionButton>
      <HeroActionButton
        href={github}
        primary={false}
      >
        <GitHubIcon className="size-3.5" />
        GitHub
      </HeroActionButton>
      <HeroActionButton
        href={linkedin}
        primary={false}
      >
        <LinkedInIcon className="size-3.5" />
        LinkedIn
      </HeroActionButton>
      <HeroActionButton
        href={figma}
        primary={false}
      >
        <FigmaIcon className="size-3.5" />
        Figma
      </HeroActionButton>
    </div>
  )
}

function HeroActionButton({
  href,
  primary,
  children,
}: {
  href: string
  primary: boolean
  children: React.ReactNode
}) {
  if (primary) {
    return (
      <a
        href={href}
        className="bg-site-accent text-site-bg hover:bg-site-heading inline-flex items-center justify-center rounded-md px-5 py-2.5 font-mono text-lg transition-colors"
      >
        {children}
      </a>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="border-site-border text-site-accent hover:text-site-heading inline-flex items-center justify-center gap-2 rounded-md border px-5 py-2.5 font-mono text-lg transition-colors"
    >
      {children}
    </a>
  )
}
