import { ArrowUpRight, Download } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { PageShell } from "@/components/page-shell";
import { contactLinks } from "@/data/site";

export default function ContactPage() {
  return (
    <PageShell>
      <section className="grid min-h-[68vh] gap-10 py-8 lg:grid-cols-[0.9fr_1.1fr]">
        <FadeIn>
          <p className="mb-5 text-sm font-medium text-accent-700">Contact</p>
          <h1 className="text-balance font-display text-5xl font-semibold leading-tight text-ink-950 sm:text-6xl">
            Open to product design, AI workflow, and prototype conversations.
          </h1>
          <p className="mt-8 max-w-xl text-pretty text-lg leading-8 text-ink-500">
            追光逐影，在理性设计与感性生成中寻找平衡
          </p>
        </FadeIn>
        <FadeIn delay={0.08}>
          <div className="border border-ink-950/10 bg-white/70">
            {contactLinks.map((link) => {
              const isDownload = link.href.endsWith(".pdf");
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center justify-between gap-6 border-b border-ink-950/10 px-6 py-5 last:border-b-0 hover:bg-mist-100/80"
                >
                  <div>
                    <p className="text-sm text-ink-500">{link.label}</p>
                    <p className="mt-1 text-lg font-medium text-ink-950">{link.value}</p>
                  </div>
                  {isDownload ? <Download size={19} /> : <ArrowUpRight size={19} />}
                </a>
              );
            })}
          </div>
        </FadeIn>
      </section>
    </PageShell>
  );
}
