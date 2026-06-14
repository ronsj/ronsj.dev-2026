import { footer } from '@/lib/portfolio-data'
import { ArrowUpRightIcon, GitHubIcon, LinkedInIcon } from '@/components/icons'

export function FooterSection() {
  return (
    <footer className="border-site-border border-t py-16 lg:py-16.25">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="font-display text-site-heading text-base">
            {footer.tagline}
          </p>
          <a
            href={`mailto:${footer.email}`}
            className="text-site-accent mt-1 inline-flex items-center gap-1 font-mono text-sm transition-opacity hover:opacity-80"
          >
            {footer.email}
            <ArrowUpRightIcon className="size-3" />
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-5">
          <a
            href={footer.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-site-body hover:text-site-accent transition-colors"
            aria-label="GitHub"
          >
            <GitHubIcon className="size-4.5" />
          </a>
          <a
            href={footer.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-site-body hover:text-site-accent transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="size-4.5" />
          </a>
          <p className="text-site-body font-mono text-[0.6875rem]">
            {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
