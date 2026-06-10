"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/components/I18nLink";
import { useCatalogMessages } from "@/hooks/useCatalogMessages";
import { resolvePathTitle } from "@/lib/i18n-catalog";
import { getHubCardDescription } from "@/lib/hub-cards";

type HubToolGridProps = {
  paths: readonly string[];
  columnsClassName?: string;
};

export default function HubToolGrid({
  paths,
  columnsClassName = "sm:grid-cols-2 lg:grid-cols-3",
}: HubToolGridProps) {
  const messages = useCatalogMessages();
  const tHub = useTranslations("hub");

  return (
    <div className={`mb-8 grid gap-4 ${columnsClassName}`}>
      {paths.map((toolPath) => {
        const name = resolvePathTitle(toolPath, messages);
        const description = getHubCardDescription(messages.hubCards, toolPath);

        return (
          <Link
            key={toolPath}
            href={toolPath}
            className="rounded-xl border border-border bg-surface p-6 transition-all hover:border-slate-600 hover:shadow-lg hover:shadow-black/20"
          >
            <h2 className="text-lg font-semibold text-slate-100">{name}</h2>
            {description ? (
              <p className="mt-2 text-sm text-slate-400">{description}</p>
            ) : null}
            <span className="mt-3 inline-block text-sm text-blue-400">
              {tHub("openTool", { name })}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
