"use client";

import { useTranslations } from "next-intl";
import ToolsGrid from "@/components/ToolsGrid";

export default function ToolsPageContent() {
  const t = useTranslations("toolsPage");

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-slate-100">{t("title")}</h1>
        <p className="mt-2 text-slate-400">{t("subtitle")}</p>
      </div>
      <div className="mt-8">
        <ToolsGrid />
      </div>
    </div>
  );
}
