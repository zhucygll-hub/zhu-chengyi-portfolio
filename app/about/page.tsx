import { FadeIn } from "@/components/fade-in";
import { PageShell } from "@/components/page-shell";
import { skills } from "@/data/site";

const profileIndex = [
  { label: "Focus", value: "Product Design / AIGC Workflow" },
  { label: "Prototype", value: "Vibe Coding / Frontend Pages" },
  { label: "Tools", value: "Rhino, KeyShot, ComfyUI, Codex" }
];

export default function AboutPage() {
  return (
    <PageShell>
      <section className="py-8">
        <div className="grid min-h-[68vh] border-y border-ink-950/15 lg:grid-cols-12">
          <FadeIn className="flex lg:col-span-5">
            <div className="flex min-h-[38rem] flex-1 flex-col justify-between border-ink-950/15 py-8 lg:border-r lg:pr-10">
              <div className="grid grid-cols-3 gap-4 border-b border-ink-950/15 pb-5 text-xs text-ink-500">
                <span>About</span>
                <span>Portfolio Index</span>
                <span className="text-right">2026</span>
              </div>
              <div className="py-12">
                <h1 className="font-display text-6xl font-semibold leading-[0.86] text-ink-950 sm:text-7xl xl:text-8xl">
                  Product
                  <br />
                  Design
                  <br />
                  AI
                  <br />
                  Workflow
                </h1>
                <p className="mt-8 max-w-sm border-t border-ink-950/15 pt-5 text-sm font-medium leading-6 text-ink-700">
                  Product design student / AIGC workflow explorer / Vibe coding prototype builder
                </p>
              </div>
              <div className="grid grid-cols-[5rem_1fr] gap-4 border-t border-ink-950/15 pt-5 text-sm">
                <span className="text-ink-500">Name</span>
                <span className="font-medium text-ink-950">Zhu Chengyi / 朱宬屹</span>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.08} className="flex lg:col-span-7">
            <div className="flex min-h-[38rem] flex-1 flex-col justify-between py-8 lg:pl-10">
              <div>
                <p className="max-w-3xl text-pretty text-2xl font-semibold leading-10 text-ink-950 sm:text-3xl sm:leading-[1.45]">
                  我是一名产品设计方向的跨界创作者，关注生成式 AI、产品设计和前端原型工具如何重塑设计流程。
                </p>
                <p className="mt-8 max-w-3xl text-pretty text-base leading-8 text-ink-500 sm:text-lg sm:leading-9">
                  从手绘草图、Rhino 建模、KeyShot 渲染，到 ComfyUI、ControlNet、Flux、Image2 的生成式视觉实验，再到 Codex 和 Claude Code 辅助的 Vibe Coding 原型搭建，我尝试在理性设计流程与感性图像叙事之间建立新的创作方法。
                </p>
              </div>

              <div className="mt-14 border-t border-ink-950/15">
                {profileIndex.map((item) => (
                  <div
                    key={item.label}
                    className="grid gap-4 border-b border-ink-950/15 py-5 text-sm sm:grid-cols-[9rem_1fr]"
                  >
                    <span className="text-ink-500">{item.label}</span>
                    <span className="font-medium leading-6 text-ink-950">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-16">
        <FadeIn>
          <div className="grid gap-8 border-t border-ink-950/15 pt-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-sm font-medium text-accent-700">Skill modules</p>
            </div>
            <div className="lg:col-span-8">
              <h2 className="max-w-3xl text-balance font-display text-4xl font-semibold leading-tight text-ink-950 sm:text-5xl">
                Skills arranged as a working index, not a tool list.
              </h2>
              <p className="mt-5 max-w-2xl text-pretty text-base leading-8 text-ink-500">
                技能结构不是为了堆工具名，而是服务于从问题到概念、从概念到视觉、从视觉到可交互原型的完整路径。
              </p>
            </div>
          </div>
        </FadeIn>
        <div className="mt-10 border-y border-ink-950/15">
          {skills.map((skill, index) => (
            <FadeIn key={skill.title} delay={index * 0.05}>
              <div className="grid gap-5 border-b border-ink-950/15 py-6 last:border-b-0 lg:grid-cols-12">
                <div className="flex items-baseline gap-5 lg:col-span-4">
                  <span className="w-8 text-sm text-ink-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-2xl font-semibold leading-tight text-ink-950">
                    {skill.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-x-5 gap-y-2 lg:col-span-8">
                  {skill.items.map((item) => (
                    <span key={item} className="text-sm leading-6 text-ink-700">
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
