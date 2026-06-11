import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { PageShell } from "@/components/page-shell";
import { ImagePlaceholder } from "@/components/visual-blocks";
import { aiLabProjects, aiLabSections, projects } from "@/data/site";

const labIndex = [
  { label: "01", value: "AIGC visual workflow" },
  { label: "02", value: "Image2 poster generation" },
  { label: "03", value: "Vibe coding prototypes" }
];

const image2Studies = [
  {
    src: "/images/ai-lab/image2-poster-01.png",
    alt: "Image2 university recruitment poster generation",
    label: "University recruitment poster"
  },
  {
    src: "/images/ai-lab/image2-poster-02.jpg",
    alt: "Image2 cinematic monster poster generation",
    label: "Cinematic poster generation"
  },
  {
    src: "/images/ai-lab/image2-poster-03.jpg",
    alt: "Image2 game character poster generation",
    label: "Game character poster"
  }
];

const sensebathProject = projects.find((project) => project.slug === "sensebath");
const relatedAiProjects = [
  ...aiLabProjects,
  ...(sensebathProject
    ? [
        {
          ...sensebathProject,
          title: "Sensebath Web Prototype",
          type: "Vibe Coding / Product Page Prototype",
          summary:
            "为 Sensebath 项目搭建的网页化作品展示，用前端页面承接产品叙事、视觉资料和交互式浏览体验。",
          keywords: ["Vibe Coding", "Web Prototype", "Next.js", "Sensebath"],
          accent: "Web Prototype"
        }
      ]
    : [])
];

export default function AiLabPage() {
  return (
    <PageShell>
      <section className="py-8">
        <div className="grid min-h-[68vh] border-y border-ink-950/15 lg:grid-cols-12">
          <FadeIn className="flex lg:col-span-5">
            <div className="flex min-h-[38rem] flex-1 flex-col justify-between border-ink-950/15 py-8 lg:border-r lg:pr-10">
              <div className="grid grid-cols-3 gap-4 border-b border-ink-950/15 pb-5 text-xs text-ink-500">
                <span>AI Design Lab</span>
                <span>Workflow Index</span>
                <span className="text-right">2026</span>
              </div>
              <div className="py-12">
                <h1 className="font-display text-6xl font-semibold leading-[0.86] text-ink-950 sm:text-7xl xl:text-8xl">
                  AI
                  <br />
                  Design
                  <br />
                  Lab
                </h1>
                <p className="mt-8 max-w-sm border-t border-ink-950/15 pt-5 text-sm font-medium leading-6 text-ink-700">
                  AIGC workflow / controlled visual generation / vibe coding prototype archive
                </p>
              </div>
              <div className="border-t border-ink-950/15">
                {labIndex.map((item) => (
                  <div key={item.label} className="grid grid-cols-[3rem_1fr] gap-4 border-b border-ink-950/15 py-4 text-sm last:border-b-0">
                    <span className="text-ink-500">{item.label}</span>
                    <span className="font-medium text-ink-950">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.08} className="flex lg:col-span-7">
            <div className="flex min-h-[38rem] flex-1 flex-col justify-between py-8 lg:pl-10">
              <div>
                <p className="max-w-3xl text-pretty text-2xl font-semibold leading-10 text-ink-950 sm:text-3xl sm:leading-[1.45]">
                  AI is part of the design workflow, not a decorative output layer.
                </p>
                <p className="mt-8 max-w-3xl text-pretty text-base leading-8 text-ink-500 sm:text-lg sm:leading-9">
                  我不是单纯使用 AI 生成图片，而是在尝试把 AI 作为完整设计流程的一部分：从灵感生成、视觉控制、产品验证，到前端原型落地。
                </p>
              </div>

              <div className="mt-14 border-t border-ink-950/15">
                {aiLabSections.map((section, index) => (
                  <div
                    key={section.title}
                    className="grid gap-5 border-b border-ink-950/15 py-5 sm:grid-cols-[3rem_1fr]"
                  >
                    <span className="text-sm text-ink-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h2 className="text-xl font-semibold leading-tight text-ink-950">
                        {section.title}
                      </h2>
                      <p className="mt-3 text-sm leading-7 text-ink-500">{section.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-16">
        <div className="grid gap-8 border-t border-ink-950/15 pt-8 lg:grid-cols-12">
          <FadeIn className="lg:col-span-4">
            <p className="text-sm font-medium text-accent-700">Using Image2</p>
            <h2 className="mt-5 max-w-md text-balance font-display text-4xl font-semibold leading-tight text-ink-950 sm:text-5xl">
              Poster generation as visual study.
            </h2>
            <p className="mt-5 max-w-md text-pretty text-base leading-8 text-ink-500">
              使用 Image2 进行海报风格生成与视觉叙事探索，测试不同主题、画面构成和字体氛围的生成效果。
            </p>
          </FadeIn>

          <div className="grid gap-4 md:grid-cols-3 lg:col-span-8">
            {image2Studies.map((study, index) => (
              <FadeIn
                key={study.src}
                delay={index * 0.05}
              >
                <ImagePlaceholder
                  src={study.src}
                  alt={study.alt}
                  label={study.label}
                  className="aspect-[3/4]"
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="grid gap-8 border-t border-ink-950/15 pt-8 lg:grid-cols-12">
          <FadeIn className="lg:col-span-4">
            <p className="text-sm font-medium text-accent-700">Related AI projects</p>
            <p className="mt-5 max-w-md text-pretty text-base leading-8 text-ink-500">
              AI 工作流与 AI 产品原型项目会持续扩展。
            </p>
          </FadeIn>

          <div className="border-y border-ink-950/15 lg:col-span-8">
            {relatedAiProjects.map((project, index) => (
              <FadeIn key={project.slug} delay={index * 0.05}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="group grid gap-5 border-b border-ink-950/15 py-6 last:border-b-0 md:grid-cols-[7rem_1fr_1.5rem]"
                >
                  <span className="text-sm text-ink-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>
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

        <FadeIn>
          <Link
            href="/projects"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink-950"
          >
            View all projects <ArrowUpRight size={16} />
          </Link>
        </FadeIn>
      </section>
    </PageShell>
  );
}
