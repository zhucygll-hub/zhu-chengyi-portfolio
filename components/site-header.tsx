"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/data/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink-950/10 bg-mist-50/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center border border-ink-950/20 bg-white text-sm font-semibold text-ink-950">
            Z
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-sm font-semibold text-ink-950">Zhu Chengyi</span>
            <span className="mt-1.5 text-xs text-ink-500">Product Design / AI Workflow</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3 py-2 text-sm transition-colors ${
                  active ? "text-ink-950" : "text-ink-500 hover:text-ink-950"
                }`}
              >
                {item.label}
                {active ? (
                  <span className="absolute inset-x-3 -bottom-[15px] h-px bg-ink-950" />
                ) : null}
              </Link>
            );
          })}
        </nav>
        <button
          type="button"
          className="grid h-10 w-10 place-items-center border border-ink-950/15 bg-white text-ink-900 md:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {open ? (
        <nav className="border-t border-ink-950/10 bg-mist-50 px-5 py-3 md:hidden">
          {navItems.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block border-b border-ink-950/10 py-3 text-sm last:border-b-0 ${
                  active ? "text-ink-950" : "text-ink-500"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      ) : null}
    </header>
  );
}
