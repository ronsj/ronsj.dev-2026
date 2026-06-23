import { footer } from '@/lib/portfolio-data'
import {
  FigmaIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from '@/components/icons'

export function FooterSection() {
  return (
    <footer className="border-site-border border-t py-16">
      <div className="mx-auto max-w-5xl space-y-8 px-6">
        <p className="text-site-body text-sm">{footer.tagline}</p>

        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-5">
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
            <a
              href={footer.figma}
              target="_blank"
              rel="noopener noreferrer"
              className="text-site-body hover:text-site-accent transition-colors"
              aria-label="Figma"
            >
              <FigmaIcon className="size-4.5" />
            </a>
            <a
              href={`mailto:${footer.email}`}
              className="text-site-body hover:text-site-accent transition-colors"
              aria-label="Email"
            >
              <MailIcon className="size-4.5" />
            </a>
          </div>
          <p className="text-site-body font-sans text-sm capitalize sm:text-right">
            <span>&copy; </span>
            2026 {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
