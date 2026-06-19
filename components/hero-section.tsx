import { hero } from '@/lib/portfolio-data'
import { HeroActions } from '@/components/hero-actions'
import { HeroCanvas } from '@/components/hero-canvas-dynamic'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-28 pb-24 lg:pt-36 lg:pb-32">
      <HeroCanvas />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <p className="text-site-accent font-mono text-sm tracking-widest uppercase">
          {hero.label}
        </p>

        <h1
          id="hero-title"
          className="font-display text-site-heading text-box-trim-both text-box-edge-cap-alpha mt-8 text-5xl/none font-bold tracking-tight lg:text-8xl/tight lg:tracking-tight"
        >
          {hero.name}
        </h1>

        <p className="text-site-body mt-8 max-w-xl text-lg/relaxed">
          {hero.summary}
        </p>

        <HeroActions
          github={hero.github}
          linkedin={hero.linkedin}
          figma={hero.figma}
        />
      </div>
    </section>
  )
}
