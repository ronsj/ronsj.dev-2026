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
              className="flex flex-col gap-4 sm:flex-row sm:items-start"
            >
              <h3 className="text-site-body w-24 shrink-0 font-mono text-xs lg:w-32 lg:leading-7">
                {group.category}
              </h3>
              <ul className="flex flex-wrap gap-2 pl-2 lg:gap-2 lg:pl-0">
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
