"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getRelatedTools, getParentPath, ALL_TOOLS, type ToolEntry } from "@/data/all-tools";
import ToolIcon from "@/components/ToolIcon";

const CATEGORY_LABELS: Record<string, string> = {
  calculator: "Calculator",
  developer: "Developer",
  security: "Security",
  hash: "Hash",
  image: "Image",
  random: "Random",
  seo: "SEO",
  time: "Time",
  text: "Text",
  language: "Language",
  "unit-converter": "Unit Converter",
};

/** Only categories with dedicated pages (security, hash are standalone) */
const CATEGORY_PATHS: Record<string, string> = {
  calculator: "/tools/calculator",
  developer: "/tools/developer",
  image: "/tools/image",
  random: "/tools/random",
  seo: "/tools/seo",
  time: "/tools/time",
  text: "/tools/text",
  language: "/tools/language",
  "unit-converter": "/tools/unit-converter",
};

function getIconForCategory(category: string): string {
  const map: Record<string, string> = {
    calculator: "calculator",
    developer: "code",
    security: "key",
    hash: "hash",
    image: "image",
    random: "random",
    seo: "seo",
    time: "clock",
    text: "text",
    language: "language",
    "unit-converter": "ruler",
  };
  return map[category] ?? "code";
}

function ToolCard({ tool }: { tool: ToolEntry }) {
  return (
    <Link
      href={tool.path}
      className="group flex flex-col rounded-xl border border-border bg-surface p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-500/20 hover:shadow-[0_0_0_1px_rgba(59,130,246,0.15)]"
    >
      <ToolIcon name={getIconForCategory(tool.category)} className="mb-2" />
      <span className="text-sm font-medium text-slate-200 group-hover:text-white">
        {tool.title}
      </span>
    </Link>
  );
}

export default function RelatedTools() {
  const pathname = usePathname();
  if (!pathname?.startsWith("/tools")) return null;

  const currentEntry = ALL_TOOLS.find((t) => t.path === pathname);
  const related = getRelatedTools(pathname, 6);
  if (related.length === 0) return null;

  const categoryLabel = currentEntry
    ? CATEGORY_LABELS[currentEntry.category] ?? currentEntry.category
    : related[0].category;
  const categoryPath = currentEntry && CATEGORY_PATHS[currentEntry.category];
  const parentPath = getParentPath(pathname);
  const parentEntry = parentPath ? ALL_TOOLS.find((t) => t.path === parentPath) : null;

  return (
    <section className="mt-12 rounded-xl border border-border bg-surface/50 p-6 sm:p-8">
      <h2 className="mb-4 text-lg font-semibold text-slate-200">
        More {categoryLabel} Tools
      </h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {related.map((tool) => (
          <ToolCard key={tool.path} tool={tool} />
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-4 text-sm">
        {categoryPath && (
          <Link
            href={categoryPath}
            className="text-slate-500 transition-colors hover:text-slate-300"
          >
            ← All {categoryLabel} tools
          </Link>
        )}
        {!categoryPath && parentPath && parentEntry && (
          <Link
            href={parentPath}
            className="text-slate-500 transition-colors hover:text-slate-300"
          >
            ← {parentEntry.title}
          </Link>
        )}
        <Link
          href="/"
          className="text-slate-500 transition-colors hover:text-slate-300"
        >
          ← All tools
        </Link>
      </div>
    </section>
  );
}
