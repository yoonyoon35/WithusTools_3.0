import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";

const CodeFormatter = dynamic(() => import("./CodeFormatter"), { ssr: false });

export const metadata: Metadata = createMetadata({
  title: "Code Formatter | Format & Clean Code",
  description:
    "Code Formatter - Format HTML, CSS, JavaScript, etc. code. Beautify and clean your code instantly. Free online tool.",
  path: "/tools/developer/code-formatter",
  keywords: [
    "code formatter",
    "code beautifier",
    "code indentation",
    "format code",
    "beautify code",
    "withustools",
  ],
});

const CODE_FORMATTER_GUIDE = {
  usage: [
    "Paste or type your code in the editor, or use Load File to load from a file. Select the language (JavaScript, HTML, CSS, or JSON).",
    "Click Format Code to beautify with proper indentation and spacing.",
    "Use Copy to copy the formatted code, or Clear to reset.",
  ],
  howItWorks: [
    "Uses Prettier for consistent code formatting. Supports JavaScript, HTML, CSS, and JSON.",
    "All processing runs in your browser. No data is sent to any server.",
  ],
  about: [
    "Free online code formatter for HTML, CSS, JavaScript, and JSON. Follows Prettier's opinionated style.",
  ],
  advantages: [
    "Multiple language support.",
    "Load code from file.",
    "Line and character count.",
  ],
  useCases: [
    "Code review: Format code before sharing.",
    "Documentation: Clean up code snippets.",
    "Learning: See proper indentation and style.",
  ],
};

export default function CodeFormatterPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="code" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">Code Formatter</h1>
            <p className="mt-1 text-sm text-slate-500">developer</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        Format and beautify HTML, CSS, JavaScript, and JSON code with proper
        indentation.
      </p>

      <CodeFormatter />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">1. How to Use</h3>
            <ol className="list-decimal space-y-2 pl-5">
              {CODE_FORMATTER_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">2. How It Works</h3>
            <div className="space-y-2">
              {CODE_FORMATTER_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">3. About Code Formatter</h3>
            <div className="space-y-2">
              {CODE_FORMATTER_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">4. Advantages</h3>
            <ul className="list-disc space-y-2 pl-5">
              {CODE_FORMATTER_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">5. Use Cases</h3>
            <ul className="list-disc space-y-2 pl-5">
              {CODE_FORMATTER_GUIDE.useCases.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Link
        href="/tools/developer"
        className="mt-8 inline-block text-slate-400 underline transition-colors hover:text-slate-200"
      >
        ← Back to Developer Tools
      </Link>
    </div>
  );
}
