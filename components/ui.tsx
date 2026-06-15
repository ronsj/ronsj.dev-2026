export function SectionLabel({ children }: { children: string }) {
  return (
    <p className="text-site-accent text-label font-mono tracking-widest uppercase">
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

export function HeroCanvas() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-28 h-149.75 overflow-hidden lg:top-28"
    >
      <svg
        className="absolute top-0 right-[-10%] h-full w-[115%] max-w-none opacity-70 dark:opacity-100"
        viewBox="0 0 403 599"
        fill="none"
      >
        <path
          d="M280 120 360 80 340 180 260 220Z"
          className="stroke-site-accent/25"
          strokeWidth="1"
        />
        <path
          d="M300 260 390 220 370 340 280 380Z"
          className="stroke-site-accent/20"
          strokeWidth="1"
        />
        <path
          d="M220 320 310 280 290 400 200 440Z"
          className="stroke-site-accent/15"
          strokeWidth="1"
        />
        <circle
          cx="300"
          cy="420"
          r="70"
          className="stroke-site-accent/20"
          strokeWidth="1"
        />
        <path
          d="M250 430 320 390 340 470 270 510Z"
          className="fill-site-accent/5 stroke-site-accent/20"
          strokeWidth="1"
        />
        <path
          d="M120 180 210 140 190 260 100 300Z"
          className="stroke-site-accent/10"
          strokeWidth="1"
        />
      </svg>
    </div>
  )
}
