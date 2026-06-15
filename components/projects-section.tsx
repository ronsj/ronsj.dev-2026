import { projects } from '@/lib/portfolio-data'
import { ExternalLinkIcon } from '@/components/icons'
import { SectionLabel, TagList } from '@/components/ui'

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="border-site-border scroll-mt-24 border-t py-16"
    >
      <div className="mx-auto max-w-5xl px-6">
        <SectionLabel>Projects</SectionLabel>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="border-site-border bg-site-surface rounded-md border p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-site-heading font-sans text-base font-medium">
                  {project.title}
                </h3>
                <a
                  href={project.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-site-body hover:text-site-accent inline-flex shrink-0 items-center gap-1 font-mono text-sm transition-colors"
                >
                  {project.link.type === 'repo' ? 'Repo' : 'Site'}
                  <ExternalLinkIcon className="size-3.5" />
                </a>
              </div>

              <p className="text-site-body mt-3 text-sm/relaxed">
                {project.description}
              </p>

              <div className="mt-4">
                <TagList tags={project.tags} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
