import { LogoMarquee } from '@/components/logo-marquee'
import { projects } from '@/lib/portfolio-data'
import { ExternalLinkIcon } from '@/components/icons'
import { ActionLink, SectionLabel, TagList } from '@/components/ui'

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="border-site-border scroll-mt-24 border-t py-16"
    >
      <div className="mx-auto max-w-5xl px-6">
        <SectionLabel sectionId="projects">Projects</SectionLabel>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="border-site-border bg-site-surface relative overflow-hidden rounded-md border p-6"
            >
              <div
                aria-hidden
                className="card-accent-glow pointer-events-none absolute inset-0 z-0"
              />

              <div className="relative z-10 flex flex-col">
                <h3 className="text-site-heading font-sans text-base font-medium">
                  {project.title}
                </h3>

                <p className="text-site-body mt-3 text-sm/relaxed">
                  {project.description}
                </p>

                <div className="mt-4">
                  <TagList tags={project.tags} />
                </div>

                <div className="mt-auto self-start pt-4">
                  <ActionLink
                    href={project.link.url}
                    external
                    size="sm"
                  >
                    View {project.link.type === 'repo' ? 'Repo' : 'Site'}
                    <ExternalLinkIcon className="size-3.5" />
                  </ActionLink>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <LogoMarquee className="mt-16" />
    </section>
  )
}
