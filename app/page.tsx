import Link from "next/link";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { PageShell } from "@/components/page-shell";
import { skills } from "@/data/site";

const heroCollage = [
  {
    src: "/images/home/product-system.png",
    label: "Product system",
    className: "col-span-8 row-span-6"
  },
  {
    src: "/images/home/zero-square-gate.png",
    label: "Spatial design",
    className: "col-span-4 row-span-4"
  },
  {
    src: "/images/home/flux-workflow.png",
    label: "AI workflow",
    className: "col-span-4 row-span-3"
  },
  {
    src: "/images/home/ai-critique-studio.png",
    label: "AI prototype",
    className: "col-span-5 row-span-4"
  },
  {
    src: "/images/home/soundshell-pendant.jpg",
    label: "AI device",
    className: "col-span-3 row-span-3"
  }
];

const priorityProjects = [
  {
    title: "AI Design Critique Studio",
    type: "AI Product / Vibe Coding Prototype",
    href: "/projects/ai-design-critique-studio",
    description: "面向设计类学生的 AI 作品评审平台，连接评分逻辑、红牌规则和前端原型。"
  },
  {
    title: "Sensebath",
    type: "Accessible Product / Web Prototype",
    href: "/projects/sensebath",
    description: "围绕视障女性洗护识别的产品设计，并延展为完整的产品说明网页。"
  },
  {
    title: "Zero Square Gate",
    type: "Spatial Design / Urban System",
    href: "/projects/zero-square-gate",
    description: "把非机动车停车设施转化为清晰、有序、低碳的校园公共节点。"
  }
];

export default function HomePage() {
  return (
    <PageShell>
      <section className="relative min-h-[82vh] overflow-hidden border-b border-ink-950/15 pb-10 pt-6">
        <div className="absolute left-0 top-0 hidden h-full w-px bg-ink-950/15 lg:block" />
        <div className="absolute right-[23%] top-0 hidden h-full w-px bg-ink-950/10 lg:block" />
        <div className="absolute inset-x-0 top-24 h-px bg-ink-950/10" />

        <FadeIn>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(420px,1.08fr)] xl:gap-10">
            <div className="relative z-10 flex min-h-[70vh] flex-col">
              <div className="flex flex-wrap items-end justify-between gap-5 border-b border-ink-950/15 pb-5">
                <div>
                  <h1 className="font-display text-5xl font-semibold leading-none text-ink-950 sm:text-6xl">
                    朱宬屹作品集
                  </h1>
                  <p className="mt-3 text-lg font-medium text-ink-500">zhu chengyi</p>
                </div>
                <p className="max-w-[13rem] text-right text-sm leading-6 text-ink-500">
                  Zhu Chengyi Portfolio / 2026
                </p>
              </div>

              <div
                className="relative mt-8 overflow-hidden py-4 text-ink-950"
                style={{ fontFamily: '"Arial Black", Impact, Haettenschweiler, sans-serif' }}
              >
                <p className="poster-word-in origin-left rotate-[-1.2deg] text-[clamp(4.9rem,17vw,14.8rem)] font-black leading-[0.72]">
                  DESIGN
                </p>
                <p
                  className="poster-word-in -mt-1 ml-[0.06em] origin-left rotate-[0.8deg] text-[clamp(4.1rem,14vw,12rem)] font-black leading-[0.74]"
                  style={{ animationDelay: "120ms" }}
                >
                  WITH
                </p>
                <p
                  className="poster-sign-in pointer-events-none absolute left-[12%] top-[42%] rotate-[-8deg] text-[clamp(5.4rem,18vw,15rem)] font-normal leading-none text-accent-600"
                  style={{
                    animationDelay: "260ms",
                    fontFamily: '"Segoe Script", "Brush Script MT", "Lucida Handwriting", cursive'
                  }}
                >
                  AI
                </p>
              </div>

              <div className="mt-3 max-w-2xl">
                <p className="text-xl font-semibold leading-snug text-ink-950 sm:text-2xl">
                  Product Design x AI Workflow x Visual Prototyping
                </p>
                <p className="mt-4 text-pretty text-base leading-8 text-ink-600 sm:text-lg sm:leading-9">
                  用 AI 扩展设计流程，从产品概念、视觉叙事到网页原型落地。
                </p>
                <p className="mt-3 text-pretty text-sm leading-7 text-ink-500">
                  我关注生成式 AI、产品设计与前端原型工具如何共同介入设计流程，
                  从用户痛点、概念推导、视觉表达，到网页与产品原型落地。
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/ai-lab"
                    className="inline-flex items-center justify-center gap-2 bg-ink-950 px-5 py-3.5 text-sm font-medium text-white transition-colors hover:bg-accent-700"
                  >
                    Explore AI Design Lab <Sparkles size={17} />
                  </Link>
                  <Link
                    href="/projects"
                    className="inline-flex items-center justify-center gap-2 border border-ink-950/20 bg-white px-5 py-3.5 text-sm font-medium text-ink-950 transition-colors hover:bg-mist-100"
                  >
                    View Projects <ArrowRight size={17} />
                  </Link>
                </div>
              </div>
            </div>

            <FadeIn delay={0.12}>
              <div className="collage-in relative min-h-[70vh] border border-ink-950/15 bg-white/70 p-3 [animation-delay:180ms]">
                <div className="grid h-full min-h-[620px] grid-cols-12 grid-rows-10 gap-3">
                  {heroCollage.map((item, index) => (
                    <PosterTile key={item.label} {...item} index={index} />
                  ))}
                </div>
                <div className="pointer-events-none absolute inset-x-3 top-1/2 h-px bg-white/70" />
                <div className="pointer-events-none absolute bottom-5 right-5 bg-ink-950 px-3 py-2 text-xs font-medium text-white">
                  visual index / workflow archive
                </div>
              </div>
            </FadeIn>
          </div>
        </FadeIn>
      </section>

      <section className="py-14">
        <FadeIn>
          <div className="grid gap-8 border-t border-ink-950/15 pt-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-sm font-medium text-accent-700">Selected entry points</p>
            </div>
            <div className="lg:col-span-8">
              <div className="border-y border-ink-950/15">
                {priorityProjects.map((project, index) => (
                  <Link
                    key={project.title}
                    href={project.href}
                    className="grid gap-4 border-b border-ink-950/15 py-6 last:border-b-0 hover:bg-white/55 sm:grid-cols-[4rem_1.1fr_1fr_2rem]"
                  >
                    <span className="text-sm text-ink-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="text-2xl font-semibold leading-tight text-ink-950">
                        {project.title}
                      </p>
                      <p className="mt-2 text-sm font-medium text-ink-500">{project.type}</p>
                    </div>
                    <p className="max-w-xl text-pretty text-sm leading-7 text-ink-600">
                      {project.description}
                    </p>
                    <ArrowRight className="text-ink-500" size={18} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="py-16">
        <EditorialHeader
          eyebrow="Skills & Workflow"
          title="A working index for design, generation, and build."
          description="从产品设计、三维视觉到 AI 工作流和 Vibe Coding，能力结构服务于概念验证与原型落地。"
        />
        <div className="mt-10 border-y border-ink-950/15">
          {skills.map((skill, index) => (
            <FadeIn key={skill.title} delay={index * 0.04}>
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

      <section className="grid gap-6 py-16 lg:grid-cols-[1.1fr_0.9fr]">
        <FadeIn>
          <div className="h-full border-y border-ink-950/15 py-8 sm:py-10">
            <div className="grid gap-8 lg:grid-cols-[7rem_1fr]">
              <p className="text-sm font-medium text-accent-700">04 / About</p>
              <div>
                <h2 className="text-balance font-display text-4xl font-semibold leading-tight text-ink-950 sm:text-5xl">
                  Design practice shaped by AI workflows.
                </h2>
                <p className="mt-5 max-w-2xl text-pretty text-base leading-8 text-ink-500">
                  我是一名产品设计方向的跨界创作者，关注生成式 AI、产品设计和前端原型工具如何重塑设计流程。
                </p>
                <Link
                  href="/about"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink-950"
                >
                  Read about me <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={0.08}>
          <div className="flex h-full flex-col justify-between bg-ink-950 p-8 text-white sm:p-10">
            <div className="flex items-center justify-between border-b border-white/20 pb-5">
              <span className="text-sm text-white/65">05 / Contact</span>
              <Mail size={22} />
            </div>
            <div className="mt-16">
              <h2 className="max-w-lg text-balance text-4xl font-semibold leading-tight">
                Let ideas become visible, testable, and buildable.
              </h2>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 border border-white/25 px-4 py-3 text-sm font-medium transition-colors hover:bg-white hover:text-ink-950"
              >
                Contact <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </PageShell>
  );
}

function PosterTile({
  src,
  label,
  className,
  index
}: {
  src: string;
  label: string;
  className: string;
  index: number;
}) {
  return (
    <div className={`group relative overflow-hidden bg-mist-200 ${className}`}>
      <div
        className="absolute inset-0 scale-[1.01] bg-cover bg-center grayscale transition duration-700 ease-out group-hover:scale-[1.045] group-hover:grayscale-0"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(255,255,255,0.2), rgba(17,19,21,0.12)), url("${src}")`,
          backgroundPosition: index === 0 ? "center" : index % 2 === 0 ? "center" : "62% 42%"
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,19,21,0),rgba(17,19,21,0.23))] transition-opacity duration-500 group-hover:opacity-65" />
      <div className="absolute inset-0 border border-white/55" />
      <div className="absolute left-3 top-3 bg-white px-2 py-1 text-[11px] font-medium text-ink-950">
        {String(index + 1).padStart(2, "0")}
      </div>
      <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-3 border-t border-white/60 pt-2">
        <span className="text-xs font-medium text-white">{label}</span>
        <span className="max-w-[55%] truncate text-right text-[10px] text-white/78">{src}</span>
      </div>
    </div>
  );
}

function EditorialHeader({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <FadeIn>
      <div className="grid gap-8 border-t border-ink-950/15 pt-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="text-sm font-medium text-accent-700">{eyebrow}</p>
        </div>
        <div className="lg:col-span-8">
          <h2 className="max-w-4xl text-balance font-display text-4xl font-semibold leading-tight text-ink-950 sm:text-5xl">
            {title}
          </h2>
          <p className="mt-5 max-w-2xl text-pretty text-base leading-8 text-ink-500">
            {description}
          </p>
        </div>
      </div>
    </FadeIn>
  );
}
