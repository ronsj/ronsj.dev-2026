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
