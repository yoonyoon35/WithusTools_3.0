import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/page-metadata";
import SearchResults from "./SearchResults";
import { Suspense } from "react";

const META_PATH = "/search";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return generatePageMetadata(params.locale, META_PATH);
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-7xl px-4 py-12 text-center text-slate-400">Loading...</div>}>
      <SearchResults />
    </Suspense>
  );
}
