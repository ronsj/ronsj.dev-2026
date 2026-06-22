import { HeroActions } from '@/components/hero-actions'

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
  return (
    <div>
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
