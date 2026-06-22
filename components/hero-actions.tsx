import { FigmaIcon, GitHubIcon, LinkedInIcon } from '@/components/icons'
import { ActionLink } from '@/components/ui'

type HeroActionsProps = {
  github: string
  linkedin: string
  figma: string
}

const hoverLift =
  'transition-transform duration-300 ease-out motion-reduce:transition-none [@media(hover:hover)]:hover:-translate-y-1'

export function HeroActions({ github, linkedin, figma }: HeroActionsProps) {
  return (
    <div
      data-hero-actions
      className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center lg:gap-5"
    >
      <ActionLink
        href="#projects"
        variant="primary"
        className={hoverLift}
      >
        View Projects
      </ActionLink>
      <ActionLink
        href={github}
        external
        className={hoverLift}
      >
        <GitHubIcon className="size-3.5" />
        GitHub
      </ActionLink>
      <ActionLink
        href={linkedin}
        external
        className={hoverLift}
      >
        <LinkedInIcon className="size-3.5" />
        LinkedIn
      </ActionLink>
      <ActionLink
        href={figma}
        external
        className={hoverLift}
      >
        <FigmaIcon className="size-3.5" />
        Figma
      </ActionLink>
    </div>
  )
}
