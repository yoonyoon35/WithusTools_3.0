"use client";

import { useTranslations } from "next-intl";
import HomeToolGrid from "@/components/HomeToolGrid";

export default function HomePageClient() {
  const t = useTranslations("home");

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl lg:text-6xl">
          {t("title")}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
          {t("subtitle")}
        </p>
      </section>

      <HomeToolGrid />
    </div>
  );
}
