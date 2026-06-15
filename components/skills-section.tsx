import { skills } from '@/lib/portfolio-data'
import { SectionLabel } from '@/components/ui'

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="border-site-border scroll-mt-24 border-t py-16"
    >
      <div className="mx-auto max-w-5xl px-6">
        <SectionLabel>Skills</SectionLabel>

        <div className="mt-8 flex flex-col gap-5">
          {skills.map((group) => (
            <div
              key={group.category}
              className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-3"
            >
              {/* give this a line height near 28px */}
              <h3 className="text-site-body text-label w-24 shrink-0 font-mono leading-7 tracking-widest uppercase">
                {group.category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border-site-border text-site-body flex h-7 items-center rounded-md border px-3 font-mono text-xs"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
