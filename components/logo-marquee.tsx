import { logoComponents } from '@/components/logos'
import { clientLogos } from '@/lib/portfolio-data'

function LogoMark({ logo }: { logo: (typeof clientLogos)[number] }) {
  const Logo = logoComponents[logo.logo]

  return <Logo className="text-site-body h-8 w-auto md:h-10" />
}

function LogoRow({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <>
      {[...clientLogos]
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((logo) => (
          <li
            key={`${logo.logo}${ariaHidden ? '-clone' : ''}`}
            className="relative flex shrink-0 items-center"
          >
            {ariaHidden ? (
              <span className="relative block">
                <LogoMark logo={logo} />
              </span>
            ) : (
              <a
                href={logo.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${logo.name}`}
                className="relative block"
              >
                <LogoMark logo={logo} />
              </a>
            )}
          </li>
        ))}
    </>
  )
}

export function LogoMarquee({ className }: { className?: string }) {
  return (
    <div className={className ?? ''}>
      <p className="text-site-body mb-16 text-center font-mono text-xs">
        and more...
      </p>

      <div
        role="region"
        aria-label="Companies Ron has shipped code for"
        className="group relative w-full overflow-hidden"
      >
        <div
          aria-hidden
          className="from-site-bg pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r to-transparent md:w-24"
        />
        <div
          aria-hidden
          className="from-site-bg pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l to-transparent md:w-24"
        />

        <div className="logo-marquee-track flex w-max opacity-70 transition-opacity group-hover:opacity-100">
          <ul className="flex shrink-0 items-center gap-16 px-6 md:gap-24 md:px-8">
            <LogoRow />
          </ul>
          <ul
            aria-hidden
            className="flex shrink-0 items-center gap-16 px-6 md:gap-24 md:px-8"
          >
            <LogoRow ariaHidden />
          </ul>
        </div>
      </div>
    </div>
  )
}
