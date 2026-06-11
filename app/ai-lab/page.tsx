import Link from "next/link";
import { ArrowRight, Code2, Workflow } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { PageShell } from "@/components/page-shell";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { ImagePlaceholder } from "@/components/visual-blocks";
import { aiLabProjects, aiLabSections, projects } from "@/data/site";

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
      <FadeIn>
        <div className="max-w-5xl py-8">
          <p className="mb-5 text-sm font-medium text-accent-700">AI Design Lab</p>
          <h1 className="text-balance font-display text-5xl font-semibold leading-tight text-ink-950 sm:text-6xl">
            AI is part of the design workflow, not a decorative output layer.
          </h1>
          <p className="mt-6 max-w-3xl text-pretty text-lg leading-9 text-ink-500">
            我不是单纯使用 AI 生成图片，而是在尝试把 AI 作为完整设计流程的一部分：
            从灵感生成、视觉控制、产品验证，到前端原型落地。
          </p>
        </div>
      </FadeIn>

      <section className="grid gap-5 py-10 lg:grid-cols-2">
        {aiLabSections.map((section, index) => (
          <FadeIn key={section.title} delay={index * 0.08}>
            <div className="flex h-full flex-col border border-ink-950/10 bg-white/70 p-7">
              <div className="mb-10 flex h-12 w-12 items-center justify-center bg-mist-100 text-accent-700">
                {index === 0 ? <Workflow size={24} /> : <Code2 size={24} />}
              </div>
              <h2 className="text-3xl font-semibold leading-tight text-ink-950">
                {section.title}
              </h2>
              <p className="mt-5 text-pretty text-base leading-8 text-ink-500">
                {section.description}
              </p>
              <div className="mt-8 grid gap-2">
                {section.points.map((point) => (
                  <div key={point} className="border-t border-ink-950/10 pt-3 text-sm text-ink-700">
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </section>

      <section className="py-12">
        <FadeIn>
          <SectionHeading
            title="Using Image2"
            description="使用 Image2 进行海报风格生成与视觉叙事探索，测试不同主题、画面构成和字体氛围的生成效果。"
          />
        </FadeIn>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <FadeIn>
            <ImagePlaceholder
              src="/images/ai-lab/image2-poster-01.png"
              alt="Image2 university recruitment poster generation"
              label="University recruitment poster"
              className="aspect-[4/5]"
            />
          </FadeIn>
          <FadeIn delay={0.05}>
            <ImagePlaceholder
              src="/images/ai-lab/image2-poster-02.jpg"
              alt="Image2 cinematic monster poster generation"
              label="Cinematic poster generation"
              className="aspect-[4/5]"
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <ImagePlaceholder
              src="/images/ai-lab/image2-poster-03.jpg"
              alt="Image2 game character poster generation"
              label="Game character poster"
              className="aspect-[4/5]"
            />
          </FadeIn>
        </div>
      </section>

      <section className="py-12">
        <FadeIn>
          <SectionHeading
            title="Related AI projects"
            description="AI 工作流与 AI 产品原型项目会持续扩展。"
          />
        </FadeIn>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {relatedAiProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} featured />
          ))}
        </div>
        <FadeIn>
          <Link
            href="/projects"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink-950"
          >
            View all projects <ArrowRight size={16} />
          </Link>
        </FadeIn>
      </section>
    </PageShell>
  );
}
