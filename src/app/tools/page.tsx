import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import { TOOLS } from "@/data/tools";
import ToolIcon from "@/components/ToolIcon";

export const metadata: Metadata = createMetadata({
  title: "Tools",
  description: "All free online tools provided by WithusTools",
  path: "/tools",
  keywords: ["tools", "online tools", "withustools"],
});

export default function ToolsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-slate-100">Tools</h1>
        <p className="mt-2 text-slate-400">
        All free online tools provided by WithusTools.
      </p>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {TOOLS.map((tool) => (
          <Link
            key={tool.id}
            href={tool.path}
            className="rounded-xl border border-border bg-surface p-6 transition-all hover:border-slate-600 hover:shadow-lg hover:shadow-black/20"
          >
            <ToolIcon name={tool.icon} className="mb-4" />
            <h2 className="text-lg font-semibold text-slate-100">
              {tool.title}
            </h2>
            <p className="mt-1 text-sm text-slate-400">{tool.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
