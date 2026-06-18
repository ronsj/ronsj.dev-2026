import { hero } from '@/lib/portfolio-data'
import { FigmaIcon, GitHubIcon, LinkedInIcon } from '@/components/icons'
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

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center lg:gap-5">
          <a
            href="#projects"
            className="bg-site-accent text-site-bg hover:bg-site-heading inline-flex items-center justify-center rounded-md px-5 py-2.5 font-mono text-lg transition-colors"
          >
            View Projects
          </a>
          <a
            href={hero.github}
            target="_blank"
            rel="noopener noreferrer"
            className="border-site-border text-site-accent hover:text-site-heading inline-flex items-center justify-center gap-2 rounded-md border px-5 py-2.5 font-mono text-lg transition-colors"
          >
            <GitHubIcon className="size-3.5" />
            GitHub
          </a>
          <a
            href={hero.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="border-site-border text-site-accent hover:text-site-heading inline-flex items-center justify-center gap-2 rounded-md border px-5 py-2.5 font-mono text-lg transition-colors"
          >
            <LinkedInIcon className="size-3.5" />
            LinkedIn
          </a>
          <a
            href={hero.figma}
            target="_blank"
            rel="noopener noreferrer"
            className="border-site-border text-site-accent hover:text-site-heading inline-flex items-center justify-center gap-2 rounded-md border px-5 py-2.5 font-mono text-lg transition-colors"
          >
            <FigmaIcon className="size-3.5" />
            Figma
          </a>
        </div>
      </div>
    </section>
  )
}
