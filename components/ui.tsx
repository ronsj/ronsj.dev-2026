import type { ReactNode } from 'react'

export function ActionLink({
  href,
  variant = 'secondary',
  size = 'default',
  external = false,
  className = '',
  children,
}: {
  href: string
  variant?: 'primary' | 'secondary'
  size?: 'default' | 'sm'
  external?: boolean
  className?: string
  children: ReactNode
}) {
  const sizeClasses =
    size === 'sm' ? 'gap-1.5 px-4 py-2 text-sm' : 'gap-2 px-5 py-2.5 text-lg'

  const variantClasses =
    variant === 'primary'
      ? 'bg-site-accent text-site-bg hover:bg-site-heading'
      : 'border-site-border text-site-accent hover:text-site-heading border'

  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`inline-flex items-center justify-center rounded-md font-mono transition-colors ${sizeClasses} ${variantClasses} ${className}`.trim()}
    >
      {children}
    </a>
  )
}

export function SectionLabel({
  children,
  sectionId,
}: {
  children: string
  sectionId: string
}) {
  return (
    <h2
      data-section-id={sectionId}
      className="text-box-trim-both text-box-edge-cap-alpha text-site-accent font-mono text-base tracking-widest uppercase"
    >
      {children}
    </h2>
  )
}

export function TagList({ tags }: { tags: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li
          key={tag}
          className="border-site-border bg-site-bg text-site-body flex h-7 items-center rounded-md px-3 font-mono text-xs"
        >
          {tag}
        </li>
      ))}
    </ul>
  )
}
