import { FadeIn } from "@/components/fade-in";
import { PageShell } from "@/components/page-shell";
import { SectionHeading } from "@/components/section-heading";
import { skills } from "@/data/site";

export default function AboutPage() {
  return (
    <PageShell>
      <section className="grid gap-10 py-8 lg:grid-cols-[0.9fr_1.1fr]">
        <FadeIn>
          <p className="mb-5 text-sm font-medium text-accent-700">About</p>
          <h1 className="text-balance font-display text-5xl font-semibold leading-tight text-ink-950 sm:text-6xl">
            A product design student building between tools, images, and prototypes.
          </h1>
        </FadeIn>
        <FadeIn delay={0.08}>
          <p className="text-pretty text-lg leading-9 text-ink-500">
            朱宬屹是一名产品设计方向的跨界创作者，关注生成式 AI、产品设计和前端原型工具如何重塑设计流程。
            从手绘草图、Rhino 建模、KeyShot 渲染，到 ComfyUI、ControlNet、Flux、Image2 的生成式视觉实验，
            再到 Codex 和 Claude Code 辅助的 Vibe Coding 原型搭建，我尝试在理性设计流程与感性图像叙事之间建立新的创作方法。
          </p>
        </FadeIn>
      </section>

      <section className="py-14">
        <FadeIn>
          <SectionHeading
            title="Skill modules"
            description="技能结构不是为了堆工具名，而是服务于从问题到概念、从概念到视觉、从视觉到可交互原型的完整路径。"
          />
        </FadeIn>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {skills.map((skill, index) => (
            <FadeIn key={skill.title} delay={index * 0.05}>
              <div className="border border-ink-950/10 bg-white/70 p-7">
                <h2 className="text-2xl font-semibold leading-tight text-ink-950">
                  {skill.title}
                </h2>
                <div className="mt-6 flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span key={item} className="bg-mist-100 px-3 py-1.5 text-sm text-ink-700">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
