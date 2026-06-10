import Link from "next/link";
import { navItems } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink-950/10 bg-mist-100/70">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="text-lg font-semibold text-ink-950">Zhu Chengyi Portfolio</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-ink-500">
            Product Design x AI Workflow x Visual Prototyping. 用 AI 扩展设计流程，
            从产品概念、视觉叙事到网页原型落地。
          </p>
        </div>
        <div className="flex flex-wrap items-start gap-x-5 gap-y-2 md:justify-end">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-ink-500 transition-colors hover:text-ink-950"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
