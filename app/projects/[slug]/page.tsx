import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { PageShell } from "@/components/page-shell";
import { LargeVisualStrip, ImagePlaceholder } from "@/components/visual-blocks";
import { projects } from "@/data/site";

type ProjectDetailPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: ProjectDetailPageProps) {
  const project = projects.find((item) => item.slug === params.slug);
  return {
    title: project ? `${project.title} | Zhu Chengyi Portfolio` : "Project"
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <PageShell>
      <FadeIn>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-ink-500 transition-colors hover:text-ink-950"
        >
          <ArrowLeft size={16} /> Back to projects
        </Link>
      </FadeIn>

      <section className="grid gap-10 py-10 lg:grid-cols-[0.95fr_1.05fr]">
        <FadeIn>
          <p className="mb-4 text-sm font-medium text-accent-700">{project.type}</p>
          <h1 className="text-balance font-display text-5xl font-semibold leading-tight text-ink-950 sm:text-6xl">
            {project.title}
          </h1>
          {project.englishTitle ? (
            <p className="mt-3 text-2xl text-ink-500">{project.englishTitle}</p>
          ) : null}
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-9 text-ink-500">
            {project.summary}
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            <span className="border border-ink-950/10 bg-white px-3 py-1.5 text-sm text-ink-700">
              {project.time}
            </span>
            {project.keywords.map((keyword) => (
              <span
                key={keyword}
                className="border border-ink-950/10 bg-white px-3 py-1.5 text-sm text-ink-700"
              >
                {keyword}
              </span>
            ))}
          </div>
        </FadeIn>
        <FadeIn delay={0.08}>
          <ImagePlaceholder
            src={project.heroImage}
            alt={project.title}
            label="Main visual"
            className="aspect-[16/11]"
            fit={project.preserveImageRatio ? "contain" : "cover"}
          />
        </FadeIn>
      </section>

      <section className="py-10">
        <FadeIn>
          <LargeVisualStrip
            src={project.heroImage}
            alt={project.title}
            fit={project.preserveImageRatio ? "contain" : "cover"}
          />
        </FadeIn>
      </section>

      {project.galleryImages ? (
        <section className="py-14">
          <FadeIn>
            <div className="mb-8 flex items-end justify-between gap-6 border-b border-ink-950/10 pb-5">
              <div>
                <p className="text-sm font-medium text-accent-700">Project Images</p>
                <h2 className="mt-3 text-3xl font-semibold leading-tight text-ink-950">
                  Visual evidence and design process
                </h2>
              </div>
              <p className="hidden max-w-sm text-right text-sm leading-6 text-ink-500 md:block">
                Real project images are arranged as large narrative slices rather than small thumbnails.
              </p>
            </div>
          </FadeIn>
          <div className="grid gap-4 md:grid-cols-2">
            {project.galleryImages.map((image, index) => (
              <FadeIn key={image.src} delay={index * 0.04}>
                <ImagePlaceholder
                  src={image.src}
                  alt={`${project.title} ${image.label}`}
                  label={image.label}
                  className={image.aspect ?? "aspect-[16/10]"}
                  fit={project.preserveImageRatio ? "contain" : "cover"}
                />
              </FadeIn>
            ))}
          </div>
        </section>
      ) : null}

      <section className="grid gap-10 py-14 lg:grid-cols-[0.45fr_1fr]">
        <FadeIn>
          <div className="sticky top-28">
            <p className="text-sm font-medium text-accent-700">Project Story</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-ink-950">
              From context to outcome
            </h2>
          </div>
        </FadeIn>
        <div className="space-y-5">
          <DetailBlock title="Background" content={project.sections.background} />
          <DetailBlock title="Problem" content={project.sections.problem} />
          <DetailBlock title="Goal" content={project.sections.goal} />
          {project.sections.developmentNote ? (
            <DevelopmentNote paragraphs={project.sections.developmentNote} />
          ) : null}
          <FadeIn>
            <div className="border border-ink-950/10 bg-white/70 p-6 sm:p-7">
              <h3 className="text-xl font-semibold text-ink-950">Process</h3>
              <ol className="mt-5 space-y-3">
                {project.sections.process.map((step) => (
                  <li key={step} className="border-t border-ink-950/10 pt-3 text-sm leading-7 text-ink-500">
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </FadeIn>
          <DetailBlock title="Solution" content={project.sections.solution} />
          <DetailBlock title="Visual System / Prototype" content={project.sections.prototype} />
          <FadeIn>
            <div className="border border-ink-950/10 bg-white/70 p-6 sm:p-7">
              <h3 className="text-xl font-semibold text-ink-950">Tools</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span key={tool} className="bg-mist-100 px-3 py-1.5 text-sm text-ink-700">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
          <DetailBlock title="Outcome" content={project.sections.outcome} />
        </div>
      </section>

      <FadeIn>
        <Link
          href={`/projects/${nextProject.slug}`}
          className="flex items-center justify-between gap-6 border-y border-ink-950/10 py-8 transition-colors hover:bg-white/60"
        >
          <div>
            <p className="text-sm text-ink-500">Next Project</p>
            <p className="mt-2 text-2xl font-semibold text-ink-950">{nextProject.title}</p>
          </div>
          <ArrowRight className="shrink-0 text-ink-950" />
        </Link>
      </FadeIn>
    </PageShell>
  );
}

function DetailBlock({ title, content }: { title: string; content: string }) {
  return (
    <FadeIn>
      <div className="border border-ink-950/10 bg-white/70 p-6 sm:p-7">
        <h3 className="text-xl font-semibold text-ink-950">{title}</h3>
        <p className="mt-4 text-pretty text-base leading-8 text-ink-500">{content}</p>
      </div>
    </FadeIn>
  );
}

function DevelopmentNote({ paragraphs }: { paragraphs: string[] }) {
  return (
    <FadeIn>
      <div className="border-y border-ink-950/15 py-7">
        <div className="grid gap-6 lg:grid-cols-[8rem_1fr]">
          <div>
            <p className="text-sm font-medium text-accent-700">03 / Development Note</p>
            <h3 className="mt-3 text-xl font-semibold leading-tight text-ink-950">开发介绍</h3>
          </div>
          <div className="space-y-5">
            {paragraphs.map((paragraph) => (
              <p key={paragraph} className="max-w-3xl text-pretty text-base leading-8 text-ink-600">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
