import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import { TEXT_INDEX_GUIDE } from "./text-content";

export const metadata: Metadata = createMetadata({
  title: "Text Tools",
  description:
    "Free online text tools: string comparison, text case converter, and text editor. Compare texts, convert case (uppercase, lowercase, capitalize), and write notes. All processing runs in your browser.",
  path: "/tools/text",
  keywords: [
    "text tools",
    "string comparison",
    "text converter",
    "text editor",
    "case converter",
    "diff checker",
    "note taking",
    "withustools",
  ],
});

const TEXT_TOOLS = [
  {
    slug: "string-comparison",
    name: "String Comparison",
    description: "Compare two texts and highlight differences. Side-by-side diff with added and removed parts highlighted for easy review.",
    path: "/tools/text/string-comparison",
  },
  {
    slug: "text-converter",
    name: "Text Converter",
    description: "Convert text case: uppercase, lowercase, capitalize sentences. Supports programming formats and shows character/word count.",
    path: "/tools/text/text-converter",
  },
  {
    slug: "text-editor",
    name: "Text Editor",
    description: "Write and manage notes with local storage. Export to Word or PDF. Create multiple documents with title and content.",
    path: "/tools/text/text-editor",
  },
] as const;

export default function TextToolsIndexPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="text" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">Text Tools</h1>
            <p className="mt-1 text-sm text-slate-500">text</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        String comparison, text case converter, and text editor. Compare texts,
        convert case, and write notes—all processing runs in your browser. No
        signup required.
      </p>

      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {TEXT_TOOLS.map((tool) => (
          <Link
            key={tool.slug}
            href={tool.path}
            className="rounded-xl border border-border bg-surface p-6 transition-all hover:border-slate-600 hover:shadow-lg hover:shadow-black/20"
          >
            <h2 className="text-lg font-semibold text-slate-100">{tool.name}</h2>
            <p className="mt-2 text-sm text-slate-400">{tool.description}</p>
            <span className="mt-3 inline-block text-sm text-blue-400">
              Open {tool.name} →
            </span>
          </Link>
        ))}
      </div>

      <section className="mb-8 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">1. How to Use</h3>
            <ol className="list-decimal space-y-2 pl-5">
              {TEXT_INDEX_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">2. How It Works</h3>
            <div className="space-y-2">
              {TEXT_INDEX_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">3. About Text Tools</h3>
            <div className="space-y-2">
              {TEXT_INDEX_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">4. Advantages</h3>
            <ul className="list-disc space-y-2 pl-5">
              {TEXT_INDEX_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">5. Real-World Use Cases</h3>
            <ul className="list-disc space-y-2 pl-5">
              {TEXT_INDEX_GUIDE.useCases.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Link
        href="/"
        className="inline-block text-slate-400 underline transition-colors hover:text-slate-200"
      >
        ← Back to home
      </Link>
    </div>
  );
}
