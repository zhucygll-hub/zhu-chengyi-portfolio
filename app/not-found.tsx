import Link from "next/link";
import { PageShell } from "@/components/page-shell";

export default function NotFound() {
  return (
    <PageShell>
      <div className="py-24">
        <p className="text-sm font-medium text-accent-700">404</p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-ink-950">
          Page not found
        </h1>
        <Link href="/" className="mt-8 inline-block bg-ink-950 px-5 py-3 text-sm font-medium text-white">
          Back home
        </Link>
      </div>
    </PageShell>
  );
}
