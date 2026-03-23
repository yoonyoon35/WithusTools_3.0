"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { TOOLS } from "@/data/tools";
import ToolIcon from "@/components/ToolIcon";

function searchTools(query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return TOOLS;
  return TOOLS.filter(
    (tool) =>
      tool.title.toLowerCase().includes(q) ||
      tool.description.toLowerCase().includes(q) ||
      tool.category.toLowerCase().includes(q)
  );
}

export default function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const results = useMemo(() => searchTools(query), [query]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <h1 className="text-2xl font-bold text-slate-100">
          {query ? `"${query}" search results` : "Tool Search"}
        </h1>
        <p className="mt-2 text-slate-400">
          {query
            ? `Found ${results.length} tool${results.length !== 1 ? "s" : ""}.`
            : "Use the search bar above to find tools."}
        </p>
      </div>

      {results.length > 0 ? (
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {results.map((tool) => (
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
                Try it →
              </span>
            </Link>
          ))}
        </section>
      ) : (
        <div className="rounded-xl border border-border bg-surface p-12 text-center">
          <p className="text-slate-500">
            No tools found for &quot;{query}&quot;. Try a different search term.
          </p>
          <Link
            href="/"
            className="mt-4 inline-block text-sm font-medium text-blue-400 hover:text-blue-300"
          >
            Back to home
          </Link>
        </div>
      )}
    </div>
  );
}
