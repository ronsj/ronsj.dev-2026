import { footer } from '@/lib/portfolio-data'
import { GitHubIcon, LinkedInIcon } from '@/components/icons'

export function FooterSection() {
  return (
    <footer className="border-site-border border-t py-16">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6">
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
        </div>
        <p className="text-site-body text-right font-sans text-sm capitalize">
          <span>&copy; </span>
          2026 {footer.copyright}
        </p>
      </div>
    </footer>
  )
}
