import { about } from '@/lib/portfolio-data'
import { SectionLabel } from '@/components/ui'

export function AboutSection() {
  return (
    <section
      id="about"
      className="border-site-border scroll-mt-24 border-t py-16"
    >
      <div className="mx-auto max-w-5xl px-6">
        <SectionLabel>About</SectionLabel>

        <div className="mt-8 flex flex-col gap-12 lg:mt-8 lg:flex-row lg:gap-12">
          <div className="lg:max-w-about-copy flex-1 space-y-4">
            {about.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 32)}
                className="text-site-body text-base/relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <dl className="lg:max-w-about-stats w-full lg:shrink-0">
            {about.stats.map((stat) => (
              <div
                key={stat.label}
                className="border-site-border flex items-center justify-between border-b py-3 first:pt-0"
              >
                <dt className="text-site-body shrink-0 pr-4 font-mono text-xs">
                  {stat.label}
                </dt>
                <dd className="text-site-heading text-right text-xs">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
