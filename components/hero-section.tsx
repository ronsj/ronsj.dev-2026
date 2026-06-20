import { hero } from '@/lib/portfolio-data'
import { HeroContent } from '@/components/hero-content'

export function HeroSection() {
  return (
    <section className="pt-28 pb-24 lg:pt-36 lg:pb-32">
      <div className="mx-auto max-w-5xl px-6">
        <HeroContent
          label={hero.label}
          name={hero.name}
          summary={hero.summary}
          github={hero.github}
          linkedin={hero.linkedin}
          figma={hero.figma}
        />
      </div>
    </section>
  )
}
