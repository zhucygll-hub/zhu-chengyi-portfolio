import type { ReactNode } from "react";

export function PageShell({ children }: { children: ReactNode }) {
  return <main className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 sm:py-20">{children}</main>;
}
