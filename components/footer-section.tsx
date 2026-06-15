import { footer } from '@/lib/portfolio-data'
import { GitHubIcon, LinkedInIcon } from '@/components/icons'

function pickFooterTagline() {
  return footer.tagline[Math.floor(Math.random() * footer.tagline.length)]!
}

export function FooterSection() {
  const randomTagline = pickFooterTagline()

  return (
    <footer className="border-site-border border-t py-16">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-site-body font-sans text-sm italic">
            &ldquo;
            {randomTagline}
            &rdquo;
          </p>
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
          <p className="text-site-body text-label font-mono capitalize">
            {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
