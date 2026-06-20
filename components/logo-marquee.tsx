import { clientLogos } from '@/lib/portfolio-data'
import type { CSSProperties } from 'react'

function LogoMark({ logo }: { logo: (typeof clientLogos)[number] }) {
  return (
    <>
      <img
        src={logo.src}
        alt=""
        aria-hidden
        className="logo-marquee-logo-size h-8 w-auto object-contain md:h-10"
        loading="lazy"
        decoding="async"
      />
      <span
        aria-hidden
        className="logo-marquee-logo absolute inset-0 block"
        style={{ '--logo-mask': `url(${logo.src})` } as CSSProperties}
      />
    </>
  )
}

function LogoRow({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <>
      {clientLogos.map((logo) => (
        <li
          key={`${logo.src}${ariaHidden ? '-clone' : ''}`}
          className="relative flex shrink-0 items-center"
        >
          {ariaHidden ? (
            <a
              href={logo.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${logo.name}`}
              className="relative block"
            >
              <LogoMark logo={logo} />
            </a>
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
    <div
      role="region"
      aria-label="Companies Ron has shipped code for"
      className={`group relative w-full overflow-hidden ${className ?? ''}`}
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
  )
}
