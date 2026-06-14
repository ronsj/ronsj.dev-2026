import { skills } from '@/lib/portfolio-data'
import { SectionLabel } from '@/components/ui'

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="border-site-border scroll-mt-24 border-t py-16 lg:py-16.25"
    >
      <div className="mx-auto max-w-5xl px-6">
        <SectionLabel>Skills</SectionLabel>

        <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="text-site-accent font-mono text-[0.625rem] tracking-widest uppercase">
                {group.category}
              </h3>
              <ul className="mt-3 space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-site-body text-sm"
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
