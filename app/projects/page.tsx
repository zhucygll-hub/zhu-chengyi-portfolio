import { FadeIn } from "@/components/fade-in";
import { PageShell } from "@/components/page-shell";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { categoryMeta, projects, type ProjectCategory } from "@/data/site";

const orderedCategories: ProjectCategory[] = ["ai-lab", "featured", "visual-3d"];

export default function ProjectsPage() {
  return (
    <PageShell>
      <FadeIn>
        <div className="max-w-4xl py-8">
          <p className="mb-5 text-sm font-medium text-accent-700">Projects</p>
          <h1 className="text-balance font-display text-5xl font-semibold leading-tight text-ink-950 sm:text-6xl">
            Structured works across products, AI workflows, and visual skills.
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-9 text-ink-500">
            项目被拆分成三类：AI Design Lab、Featured Design Projects、Visual & 3D Skills。
            这样可以同时呈现完整设计项目和持续成长的工具能力。
          </p>
        </div>
      </FadeIn>

      <div className="space-y-24 py-10">
        {orderedCategories.map((category) => {
          const categoryProjects = projects.filter((project) => project.category === category);
          return (
            <section key={category}>
              <FadeIn>
                <SectionHeading
                  title={categoryMeta[category].title}
                  description={categoryMeta[category].description}
                />
              </FadeIn>
              <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {categoryProjects.map((project, index) => (
                  <FadeIn key={project.slug} delay={index * 0.04}>
                    <ProjectCard project={project} />
                  </FadeIn>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </PageShell>
  );
}
