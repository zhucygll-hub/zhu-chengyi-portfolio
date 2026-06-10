"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/data/site";
import { ImagePlaceholder } from "@/components/visual-blocks";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
};

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.article
      whileHover={reducedMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
      className="group h-full"
    >
      <Link
        href={`/projects/${project.slug}`}
        className="flex h-full flex-col border border-ink-950/10 bg-white/75 p-3 transition-colors hover:border-ink-950/20 hover:bg-white"
      >
        <ImagePlaceholder
          src={project.heroImage}
          alt={project.title}
          label={project.accent}
          className={featured ? "aspect-[16/10]" : "aspect-[4/3]"}
        />
        <div className="flex flex-1 flex-col px-1 pb-1 pt-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm leading-5 text-accent-700">{project.type}</p>
              <h3 className="mt-2 text-balance text-xl font-semibold leading-snug text-ink-950">
                {project.title}
              </h3>
            </div>
            <ArrowUpRight
              className="mt-1 shrink-0 text-ink-300 transition-colors group-hover:text-accent-700"
              size={20}
            />
          </div>
          <p className="mt-4 text-pretty text-sm leading-7 text-ink-500">{project.summary}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.keywords.slice(0, 4).map((keyword) => (
              <span
                key={keyword}
                className="border border-ink-950/10 bg-mist-50 px-2.5 py-1 text-xs leading-5 text-ink-700"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
