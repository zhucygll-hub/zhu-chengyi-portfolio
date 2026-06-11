import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { PageShell } from "@/components/page-shell";
import { categoryMeta, projects, type ProjectCategory } from "@/data/site";

const orderedCategories: ProjectCategory[] = ["ai-lab", "featured", "visual-3d"];
const categoryNumbers: Record<ProjectCategory, string> = {
  "ai-lab": "01",
  featured: "02",
  "visual-3d": "03"
};

export default function ProjectsPage() {
  return (
    <PageShell>
      <section className="py-8">
        <div className="grid min-h-[68vh] border-y border-ink-950/15 lg:grid-cols-12">
          <FadeIn className="flex lg:col-span-5">
            <div className="flex min-h-[38rem] flex-1 flex-col justify-between border-ink-950/15 py-8 lg:border-r lg:pr-10">
              <div className="grid grid-cols-3 gap-4 border-b border-ink-950/15 pb-5 text-xs text-ink-500">
                <span>Projects</span>
                <span>Work Index</span>
                <span className="text-right">2026</span>
              </div>
              <div className="py-12">
                <h1 className="font-display text-6xl font-semibold leading-[0.86] text-ink-950 sm:text-7xl xl:text-8xl">
                  Project
                  <br />
                  Index
                  <br />
                  AI
                  <br />
                  Works
                </h1>
                <p className="mt-8 max-w-sm border-t border-ink-950/15 pt-5 text-sm font-medium leading-6 text-ink-700">
                  A structured archive across AI workflow, product design, and visual prototyping.
                </p>
              </div>
              <div className="grid grid-cols-[5rem_1fr] gap-4 border-t border-ink-950/15 pt-5 text-sm">
                <span className="text-ink-500">Order</span>
                <span className="font-medium text-ink-950">AI Lab first / Product works / Visual skills</span>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.08} className="flex lg:col-span-7">
            <div className="flex min-h-[38rem] flex-1 flex-col justify-between py-8 lg:pl-10">
              <div>
                <p className="max-w-3xl text-pretty text-2xl font-semibold leading-10 text-ink-950 sm:text-3xl sm:leading-[1.45]">
                  Structured works across products, AI workflows, and visual skills.
                </p>
                <p className="mt-8 max-w-3xl text-pretty text-base leading-8 text-ink-500 sm:text-lg sm:leading-9">
                  项目被拆分成三类：AI Design Lab、Featured Design Projects、Visual & 3D Skills。这样可以同时呈现完整设计项目和持续成长的工具能力。
                </p>
              </div>

              <div className="mt-14 border-t border-ink-950/15">
                {orderedCategories.map((category) => (
                  <div
                    key={category}
                    className="grid gap-4 border-b border-ink-950/15 py-5 text-sm sm:grid-cols-[5rem_1fr]"
                  >
                    <span className="text-ink-500">{categoryNumbers[category]}</span>
                    <div>
                      <p className="font-medium leading-6 text-ink-950">{categoryMeta[category].title}</p>
                      <p className="mt-1 leading-6 text-ink-500">{categoryMeta[category].description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="space-y-20 py-16">
        {orderedCategories.map((category) => {
          const categoryProjects = projects.filter((project) => project.category === category);
          return (
            <section key={category}>
              <div className="grid gap-8 border-t border-ink-950/15 pt-8 lg:grid-cols-12">
                <FadeIn className="lg:col-span-4">
                  <div className="lg:pr-8">
                    <p className="text-sm text-ink-500">{categoryNumbers[category]}</p>
                    <h2 className="mt-5 max-w-md text-balance font-display text-4xl font-semibold leading-tight text-ink-950 sm:text-5xl">
                      {categoryMeta[category].title}
                    </h2>
                    <p className="mt-5 max-w-md text-pretty text-base leading-8 text-ink-500">
                      {categoryMeta[category].description}
                    </p>
                  </div>
                </FadeIn>

                <div className="border-y border-ink-950/15 lg:col-span-8">
                {categoryProjects.map((project, index) => (
                  <FadeIn key={project.slug} delay={index * 0.04}>
                      <Link
                        href={`/projects/${project.slug}`}
                        className="group grid gap-5 border-b border-ink-950/15 py-6 last:border-b-0 md:grid-cols-[4rem_10rem_1fr_1.5rem]"
                      >
                        <span className="text-sm text-ink-500">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <ProjectThumbnail
                          src={project.heroImage}
                          alt={project.title}
                        />
                        <div>
                          <p className="text-sm leading-5 text-accent-700">{project.type}</p>
                          <h3 className="mt-2 text-2xl font-semibold leading-tight text-ink-950">
                            {project.title}
                          </h3>
                          <p className="mt-4 max-w-2xl text-pretty text-sm leading-7 text-ink-500">
                            {project.summary}
                          </p>
                          <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                            {project.keywords.slice(0, 4).map((keyword) => (
                              <span key={keyword} className="text-xs leading-5 text-ink-700">
                                {keyword}
                              </span>
                            ))}
                          </div>
                        </div>
                        <ArrowUpRight
                          className="text-ink-300 transition-colors group-hover:text-accent-700"
                          size={20}
                        />
                      </Link>
                  </FadeIn>
                ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </PageShell>
  );
}

function ProjectThumbnail({ src, alt: _alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden border border-ink-950/10 bg-mist-200">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-[1.035]"
        style={{ backgroundImage: `url("${src}")` }}
      />
    </div>
  );
}
