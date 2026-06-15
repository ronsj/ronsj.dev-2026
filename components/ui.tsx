export function SectionLabel({ children }: { children: string }) {
  return (
    <p className="text-box-trim-both text-box-edge-cap-alpha text-site-accent font-mono text-base tracking-widest uppercase">
      {children}
    </p>
  )
}

export function TagList({ tags }: { tags: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li
          key={tag}
          className="bg-site-tag text-site-body text-label rounded-md px-2 py-0.5 font-mono"
        >
          {tag}
        </li>
      ))}
    </ul>
  )
}
