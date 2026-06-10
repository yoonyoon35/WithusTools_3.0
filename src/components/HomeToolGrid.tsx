"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { CATEGORIES, type ToolCategory } from "@/data/tools";
import { getLocalizedTools } from "@/lib/i18n-catalog";
import { useCatalogMessages } from "@/hooks/useCatalogMessages";
import { Link } from "@/i18n/navigation";
import ToolIcon from "@/components/ToolIcon";

export default function HomeToolGrid() {
  const t = useTranslations("home");
  const tCategories = useTranslations("categories");
  const messages = useCatalogMessages();
  const tools = useMemo(() => getLocalizedTools(messages), [messages]);
  const [selectedCategory, setSelectedCategory] = useState<ToolCategory | "all">("all");

  const filteredTools = useMemo(() => {
    if (selectedCategory === "all") return tools;
    return tools.filter((tool) => tool.category === selectedCategory);
  }, [tools, selectedCategory]);

  return (
    <>
      <section className="mb-8 flex flex-wrap justify-center gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setSelectedCategory(cat.value)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
              selectedCategory === cat.value
                ? "bg-slate-700 text-slate-100 ring-1 ring-slate-600"
                : "bg-surface text-slate-400 hover:bg-slate-800 hover:text-slate-200"
            }`}
          >
            {tCategories(cat.value)}
          </button>
        ))}
      </section>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredTools.map((tool) => (
          <Link
            key={tool.id}
            href={tool.path}
            className="group flex flex-col rounded-xl border border-border bg-surface p-6 transition-all duration-200 hover:-translate-y-1 hover:border-blue-500/20 hover:shadow-[0_0_0_1px_rgba(59,130,246,0.2),0_8px_16px_-4px_rgba(0,0,0,0.3)]"
          >
            <ToolIcon name={tool.icon} className="mb-4" />
            <h2 className="text-lg font-semibold text-slate-100 group-hover:text-white">
              {tool.title}
            </h2>
            <p className="mt-1 flex-1 text-sm text-slate-400 group-hover:text-slate-300">
              {tool.description}
            </p>
            <span className="mt-4 text-sm font-medium text-slate-500 group-hover:text-blue-400/80">
              {t("tryIt")}
            </span>
          </Link>
        ))}
      </section>

      {filteredTools.length === 0 && (
        <p className="text-center text-slate-500">{t("noTools")}</p>
      )}
    </>
  );
}
