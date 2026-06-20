import { process } from '@/lib/portfolio-data'
import { SectionLabel } from '@/components/ui'

export function ProcessSection() {
  return (
    <section
      id="process"
      className="border-site-border scroll-mt-24 border-t py-16"
    >
      <div className="mx-auto max-w-5xl px-6">
        <SectionLabel sectionId="process">Process</SectionLabel>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {process.map((item) => (
            <article
              key={item.label}
              className="border-site-border bg-site-surface relative overflow-hidden rounded-md border p-6"
            >
              <div
                aria-hidden
                className="card-accent-glow pointer-events-none absolute inset-0 z-0"
              />

              <div className="relative z-10">
                <h3 className="text-site-heading font-sans text-base font-medium">
                  {item.label}
                </h3>
                <p className="text-site-body mt-3 text-sm/relaxed">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
