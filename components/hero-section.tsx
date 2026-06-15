import { hero } from '@/lib/portfolio-data'
import { GitHubIcon, LinkedInIcon, MailIcon } from '@/components/icons'
import { HeroCanvas } from '@/components/ui'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-28 pb-24 lg:pt-36 lg:pb-32">
      <HeroCanvas />

      <div className="relative mx-auto max-w-5xl px-6">
        <p className="text-site-accent font-mono text-xs tracking-widest uppercase">
          {hero.label}
        </p>

        <h1 className="font-display text-site-heading mt-4 text-5xl/none font-bold tracking-tight lg:text-8xl/tight lg:tracking-tight">
          {hero.name}
        </h1>

        <p className="text-site-body mt-6 max-w-xl text-lg/relaxed">
          {hero.summary}
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center lg:gap-5">
          <a
            href={`mailto:${hero.email}`}
            className="bg-site-accent text-site-cta inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 font-mono text-sm transition-opacity hover:opacity-90"
          >
            <MailIcon className="size-3.5" />
            Get in touch
          </a>
          <a
            href={hero.github}
            target="_blank"
            rel="noopener noreferrer"
            className="border-site-border text-site-body hover:text-site-heading inline-flex items-center justify-center gap-2 rounded-md border px-5 py-2.5 font-mono text-sm transition-colors"
          >
            <GitHubIcon className="size-3.5" />
            GitHub
          </a>
          <a
            href={hero.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="border-site-border text-site-body hover:text-site-heading inline-flex items-center justify-center gap-2 rounded-md border px-5 py-2.5 font-mono text-sm transition-colors"
          >
            <LinkedInIcon className="size-3.5" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
