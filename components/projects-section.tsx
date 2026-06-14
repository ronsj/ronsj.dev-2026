import { projects } from '@/lib/portfolio-data'
import { ExternalLinkIcon, GitHubIcon } from '@/components/icons'
import { SectionLabel, TagList } from '@/components/ui'

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="border-site-border scroll-mt-24 border-t py-16 lg:py-16.25"
    >
      <div className="mx-auto max-w-5xl px-6">
        <SectionLabel>Projects</SectionLabel>

        <div className="mt-8 space-y-4">
          {projects.map((project) => (
            <article
              key={project.title}
              className="border-site-border bg-site-surface rounded-md border p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-site-heading text-lg font-medium">
                  {project.title}
                </h3>
                <div className="flex shrink-0 items-center gap-3">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-site-body hover:text-site-accent transition-colors"
                    aria-label={`View ${project.title} repository`}
                  >
                    <GitHubIcon className="size-4" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-site-body hover:text-site-accent transition-colors"
                    aria-label={`View ${project.title} live project`}
                  >
                    <ExternalLinkIcon className="size-4" />
                  </a>
                </div>
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
