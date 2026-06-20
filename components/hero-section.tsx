import { hero } from '@/lib/portfolio-data'
import { HeroContent } from '@/components/hero-content'
import { HeroCanvas } from '@/components/hero-canvas-dynamic'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-28 pb-24 lg:pt-36 lg:pb-32">
      <HeroCanvas />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
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
