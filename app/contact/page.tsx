import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { PageShell } from "@/components/page-shell";
import { contactLinks } from "@/data/site";

const contactIndex = [
  { label: "Focus", value: "Product design / AIGC workflow / Vibe coding prototype" },
  { label: "Format", value: "Portfolio review, project discussion, collaboration inquiry" },
  { label: "Response", value: "Email first, clear context preferred" }
];

const collaborationTopics = [
  "AI product prototype",
  "AIGC visual workflow",
  "Portfolio review",
  "Frontend page build"
];

export default function ContactPage() {
  return (
    <PageShell>
      <section className="py-8">
        <div className="grid min-h-[68vh] border-y border-ink-950/15 lg:grid-cols-12">
          <FadeIn className="flex lg:col-span-5">
            <div className="flex min-h-[36rem] flex-1 flex-col justify-between border-ink-950/15 py-8 lg:border-r lg:pr-10">
              <div className="grid grid-cols-3 gap-4 border-b border-ink-950/15 pb-5 text-xs text-ink-500">
                <span>Contact</span>
                <span>Open Index</span>
                <span className="text-right">2026</span>
              </div>

              <div className="py-12">
                <h1 className="font-display text-6xl font-semibold leading-[0.88] text-ink-950 sm:text-7xl xl:text-8xl">
                  Let&apos;s
                  <br />
                  Build
                  <br />
                  The
                  <br />
                  Next
                  <br />
                  Prototype
                </h1>
                <p className="mt-8 max-w-sm border-t border-ink-950/15 pt-5 text-sm font-medium leading-6 text-ink-700">
                  For product design, AIGC workflow, and vibe coding conversations.
                </p>
              </div>

              <div className="grid grid-cols-[5rem_1fr] gap-4 border-t border-ink-950/15 pt-5 text-sm">
                <span className="text-ink-500">Email</span>
                <a
                  className="font-medium text-ink-950 underline decoration-ink-950/20 underline-offset-4 hover:decoration-ink-950"
                  href="mailto:zhucygll@gmail.com"
                >
                  zhucygll@gmail.com
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.08} className="flex lg:col-span-7">
            <div className="flex min-h-[36rem] flex-1 flex-col justify-between py-8 lg:pl-10">
              <div>
                <p className="max-w-3xl text-pretty text-2xl font-semibold leading-10 text-ink-950 sm:text-3xl sm:leading-[1.45]">
                  I am open to conversations around design systems, AI-assisted workflows,
                  portfolio projects, and fast product prototypes.
                </p>
                <p className="mt-8 max-w-2xl text-pretty text-base leading-8 text-ink-500 sm:text-lg sm:leading-9">
                  如果你想讨论作品集、AIGC 工作流、产品原型或前端页面实现，可以直接通过邮箱联系我。
                  来信时附上项目背景、目标和时间节点，会更方便快速进入具体问题。
                </p>
              </div>

              <div className="mt-14 border-t border-ink-950/15">
                {contactIndex.map((item) => (
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
              <p className="text-sm font-medium text-accent-700">Contact channels</p>
            </div>
            <div className="lg:col-span-8">
              <div className="border-y border-ink-950/15">
                {contactLinks.map((link, index) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="grid gap-4 border-b border-ink-950/15 py-6 last:border-b-0 hover:bg-white/55 sm:grid-cols-[4rem_9rem_1fr_2rem]"
                  >
                    <span className="text-sm text-ink-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm text-ink-500">{link.label}</span>
                    <span className="text-lg font-semibold text-ink-950">{link.value}</span>
                    <ArrowUpRight className="text-ink-500" size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="pb-12">
        <FadeIn>
          <div className="grid gap-8 border-t border-ink-950/15 pt-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-sm font-medium text-accent-700">Conversation topics</p>
            </div>
            <div className="lg:col-span-8">
              <div className="grid border-y border-ink-950/15 sm:grid-cols-2">
                {collaborationTopics.map((topic, index) => (
                  <div
                    key={topic}
                    className="grid min-h-28 grid-cols-[4rem_1fr] gap-4 border-b border-ink-950/15 py-6 sm:odd:border-r sm:last:border-b-0 sm:[&:nth-last-child(2)]:border-b-0"
                  >
                    <span className="text-sm text-ink-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-xl font-semibold leading-tight text-ink-950">
                      {topic}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </PageShell>
  );
}
