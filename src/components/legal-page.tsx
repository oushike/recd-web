import Link from "next/link";
import type { ReactNode } from "react";

import { siteConfig } from "@/lib/site";

type LegalPageProps = {
  title: string;
  updated: string;
  children: ReactNode;
};

/** Shared layout for the privacy, terms and data deletion pages. */
export function LegalPage({ title, updated, children }: LegalPageProps) {
  return (
    <main className="mx-auto max-w-2xl px-4 py-12 sm:py-16">
      <Link href="/" className="text-sm lowercase">
        {siteConfig.name}
      </Link>
      <h1 className="mt-8 text-3xl font-semibold tracking-tight lowercase">{title}</h1>
      <p className="mt-2 text-sm text-muted">Last updated {updated}</p>
      <div className="mt-8 space-y-6 leading-relaxed [&_a]:underline [&_h2]:mt-10 [&_h2]:text-lg [&_h2]:font-semibold [&_li]:mt-1 [&_ul]:list-disc [&_ul]:pl-5">
        {children}
      </div>
      <nav className="mt-16 flex flex-wrap gap-x-4 gap-y-2 border-t pt-6 text-sm text-muted">
        <Link href="/privacy">privacy</Link>
        <Link href="/terms/creators">creator terms</Link>
        <Link href="/terms/businesses">business terms</Link>
        <Link href="/data-deletion">data deletion</Link>
        <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>
      </nav>
    </main>
  );
}
