import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import TextConverter from "./TextConverter";

export const metadata: Metadata = createMetadata({
  title: "Text Case Converter | Uppercase, Lowercase, Capitalize",
  description:
    "Convert text case: uppercase, lowercase, capitalize sentences. Free online text case converter with character and word count.",
  path: "/tools/text/text-converter",
  keywords: [
    "text converter",
    "case converter",
    "uppercase converter",
    "lowercase converter",
    "capitalize text",
    "withustools",
  ],
});

const TEXT_CONVERTER_GUIDE = {
  usage: [
    "Enter your text in the input field. Character count, word count, and size update in real time.",
    "Click UPPERCASE, lowercase, or Capitalize Sentences to convert the text. The result appears in the output area.",
    "Use Copy to copy the converted text. Use Clear to reset both input and output.",
  ],
  howItWorks: [
    "Uppercase and lowercase use standard JavaScript string methods. Capitalize Sentences preserves line breaks and applies rules for proper nouns (days, months, countries, languages).",
    "Character count can include or exclude spaces. Size is calculated using UTF-8 encoding.",
    "All processing runs in your browser. No data is sent to any server.",
  ],
  about: [
    "Free online text case converter for transforming text between uppercase, lowercase, and sentence case. Ideal for content formatting, variable naming, and data cleaning.",
  ],
  advantages: [
    "Multiple conversions: Uppercase, lowercase, and capitalize sentences.",
    "Real-time stats: Character count, word count, and byte size.",
    "No signup: Use immediately in any browser.",
    "Privacy: All processing happens locally.",
  ],
  useCases: [
    "Variable naming: Convert between camelCase, PascalCase, snake_case, and kebab-case for programming.",
    "Class/component naming: Use PascalCase for TypeScript/React classes, components, and type names.",
    "Content formatting: Format titles and headings for articles and blog posts.",
    "Data cleaning: Standardize text case for CSV or database imports.",
    "Social media: Optimize text for different platforms.",
  ],
};

export default function TextConverterPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="text" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">
              Text Case Converter
            </h1>
            <p className="mt-1 text-sm text-slate-500">text</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        Transform your text to uppercase, lowercase, or capitalize sentences with
        ease. Character and word count displayed in real time.
      </p>

      <TextConverter />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">1. How to Use</h3>
            <ol className="list-decimal space-y-2 pl-5">
              {TEXT_CONVERTER_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">2. How It Works</h3>
            <div className="space-y-2">
              {TEXT_CONVERTER_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              3. About Text Case Converter
            </h3>
            <div className="space-y-2">
              {TEXT_CONVERTER_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">4. Advantages</h3>
            <ul className="list-disc space-y-2 pl-5">
              {TEXT_CONVERTER_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              5. Real-World Use Cases
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {TEXT_CONVERTER_GUIDE.useCases.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Link
        href="/tools/text"
        className="mt-8 inline-block text-slate-400 underline transition-colors hover:text-slate-200"
      >
        ← Back to Text Tools
      </Link>
    </div>
  );
}
