"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import {
  buildAllTools,
  getParentPath,
  getRelatedTools,
  type ToolEntry,
} from "@/data/all-tools";
import { useCatalogMessages } from "@/hooks/useCatalogMessages";
import ToolIcon from "@/components/ToolIcon";

const CATEGORY_PATHS: Record<string, string> = {
  calculator: "/tools/calculator",
  health: "/tools/health",
  developer: "/tools/developer",
  image: "/tools/image",
  pdf: "/tools/pdf",
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
    health: "heart",
    developer: "code",
    security: "key",
    hash: "hash",
    image: "image",
    pdf: "pdf",
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
  const messages = useCatalogMessages();
  const t = useTranslations("relatedTools");
  const tCategories = useTranslations("categories");

  if (!pathname?.startsWith("/tools")) return null;

  const catalog = buildAllTools(messages);
  const currentEntry = catalog.find((entry) => entry.path === pathname);
  const related = getRelatedTools(pathname, 6, messages);
  if (related.length === 0) return null;

  const categoryLabel = currentEntry
    ? tCategories(currentEntry.category)
    : tCategories(related[0].category);
  const categoryPath = currentEntry && CATEGORY_PATHS[currentEntry.category];
  const parentPath = getParentPath(pathname);
  const parentEntry = parentPath
    ? catalog.find((entry) => entry.path === parentPath)
    : null;

  return (
    <section className="mt-12 rounded-xl border border-border bg-surface/50 p-6 sm:p-8">
      <h2 className="mb-4 text-lg font-semibold text-slate-200">
        {t("moreCategory", { category: categoryLabel })}
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
            {t("allCategory", { category: categoryLabel })}
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
          {t("allTools")}
        </Link>
      </div>
    </section>
  );
}
