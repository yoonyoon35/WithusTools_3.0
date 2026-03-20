import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import SearchResults from "./SearchResults";
import { Suspense } from "react";

export const metadata: Metadata = createMetadata({
  title: "Tool Search",
  description: "Search tools - WithusTools",
  path: "/search",
  keywords: ["search", "withustools"],
});

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-7xl px-4 py-12 text-center text-slate-400">Loading...</div>}>
      <SearchResults />
    </Suspense>
  );
}
