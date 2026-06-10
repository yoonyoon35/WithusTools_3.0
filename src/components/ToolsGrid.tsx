"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { getLocalizedTools } from "@/lib/i18n-catalog";
import { useCatalogMessages } from "@/hooks/useCatalogMessages";
import ToolIcon from "@/components/ToolIcon";

interface ToolsGridProps {
  showTryIt?: boolean;
}

export default function ToolsGrid({ showTryIt = false }: ToolsGridProps) {
  const messages = useCatalogMessages();
  const tools = getLocalizedTools(messages);
  const tHome = useTranslations("home");

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {tools.map((tool) => (
        <Link
          key={tool.id}
          href={tool.path}
          className={
            showTryIt
              ? "group flex flex-col rounded-xl border border-border bg-surface p-6 transition-all duration-200 hover:-translate-y-1 hover:border-blue-500/20 hover:shadow-[0_0_0_1px_rgba(59,130,246,0.2),0_8px_16px_-4px_rgba(0,0,0,0.3)]"
              : "rounded-xl border border-border bg-surface p-6 transition-all hover:border-slate-600 hover:shadow-lg hover:shadow-black/20"
          }
        >
          <ToolIcon name={tool.icon} className="mb-4" />
          <h2
            className={
              showTryIt
                ? "text-lg font-semibold text-slate-100 group-hover:text-white"
                : "text-lg font-semibold text-slate-100"
            }
          >
            {tool.title}
          </h2>
          <p
            className={
              showTryIt
                ? "mt-1 flex-1 text-sm text-slate-400 group-hover:text-slate-300"
                : "mt-1 text-sm text-slate-400"
            }
          >
            {tool.description}
          </p>
          {showTryIt && (
            <span className="mt-4 text-sm font-medium text-slate-500 group-hover:text-blue-400/80">
              {tHome("tryIt")}
            </span>
          )}
        </Link>
      ))}
    </div>
  );
}
