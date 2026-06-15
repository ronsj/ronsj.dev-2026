import { experience } from '@/lib/portfolio-data'
import { SectionLabel } from '@/components/ui'

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="border-site-border scroll-mt-24 border-t py-16"
    >
      <div className="mx-auto max-w-5xl px-6">
        <SectionLabel>Experience</SectionLabel>

        <div className="divide-site-border mt-8 divide-y">
          {experience.map((role) => (
            <article
              key={role.title + role.company}
              className="py-8 first:pt-0"
            >
              <div className="flex flex-col gap-1 lg:flex-row lg:items-start lg:justify-between">
                <h3 className="text-site-heading font-sans text-base font-semibold">
                  {role.title}
                  <span className="text-site-accent font-extrabold"> · </span>
                  <span className="text-site-body font-sans text-base font-normal">
                    {role.company}
                  </span>
                </h3>
                <p className="text-site-body font-mono text-sm lg:text-right">
                  {role.period}
                </p>
              </div>
              <p className="text-site-body mt-3 max-w-2xl text-sm/relaxed">
                {role.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
