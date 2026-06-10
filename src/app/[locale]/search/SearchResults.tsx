"use client";

import { Link } from "@/i18n/navigation";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { useTranslations } from "next-intl";
import { getLocalizedTools } from "@/lib/i18n-catalog";
import { useCatalogMessages } from "@/hooks/useCatalogMessages";
import ToolIcon from "@/components/ToolIcon";
import type { Tool } from "@/data/tools";

function searchTools(tools: Tool[], query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return tools;
  return tools.filter(
    (tool) =>
      tool.title.toLowerCase().includes(q) ||
      tool.description.toLowerCase().includes(q) ||
      tool.category.toLowerCase().includes(q)
  );
}

export default function SearchResults() {
  const t = useTranslations("search");
  const messages = useCatalogMessages();
  const tools = useMemo(() => getLocalizedTools(messages), [messages]);
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const results = useMemo(() => searchTools(tools, query), [tools, query]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <h1 className="text-2xl font-bold text-slate-100">
          {query ? t("titleWithQuery", { query }) : t("title")}
        </h1>
        <p className="mt-2 text-slate-400">
          {query
            ? results.length === 1
              ? t("foundOne")
              : t("foundMany", { count: results.length })
            : t("hint")}
        </p>
      </div>

      {results.length > 0 ? (
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {results.map((tool) => (
            <Link
              key={tool.id}
              href={tool.path}
              className="group flex flex-col rounded-xl border border-border bg-surface p-6 transition-all duration-200 hover:-translate-y-1 hover:border-blue-500/20"
            >
              <ToolIcon name={tool.icon} className="mb-4" />
              <h2 className="text-lg font-semibold text-slate-100 group-hover:text-white">
                {tool.title}
              </h2>
              <p className="mt-1 flex-1 text-sm text-slate-400">{tool.description}</p>
            </Link>
          ))}
        </section>
      ) : (
        query && (
          <p className="text-center text-slate-500">
            {t("noResults", { query })}
          </p>
        )
      )}
    </div>
  );
}
