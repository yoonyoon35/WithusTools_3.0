import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import ASCIIConverter from "./ASCIIConverter";

export const metadata: Metadata = createMetadata({
  title: "ASCII Code Converter | Text to ASCII & Reverse",
  description:
    "ASCII Code Converter - Transform between text and ASCII code values. Support for decimal, hexadecimal, and binary formats. Free online tool.",
  path: "/tools/developer/ascii-code-converter",
  keywords: [
    "ascii converter",
    "text to ascii",
    "ascii to text",
    "ascii code",
    "ascii table",
    "hex converter",
    "binary converter",
    "decimal converter",
    "character converter",
    "text encoder",
    "withustools",
  ],
});

const ASCII_GUIDE = {
  usage: [
    "Text → ASCII: Enter text and get ASCII codes. Use Load TXT to import from file. Character count, word count, and size update in real time.",
    "ASCII → Text: Enter ASCII codes (space or comma separated) in the selected format and get decoded text.",
    "Choose format: Decimal, Hexadecimal, or Binary. The ASCII table shows Printable (32-126) and Extended (128-255) ranges.",
    "Use Copy to copy results. Use Clear to reset input and output.",
  ],
  howItWorks: [
    "The converter uses standardized ASCII encoding algorithms that map each character to its corresponding numerical value.",
    "It supports both standard ASCII (0-127) and extended ASCII (128-255) character sets.",
    "Reverse conversion parses space/comma-separated codes in the selected format and converts to text.",
    "All processing runs in your browser. No data is sent to any server.",
  ],
  about: [
    "Free online ASCII code converter to convert text to ASCII codes and ASCII codes to text in decimal, hexadecimal, and binary formats with ASCII table reference.",
  ],
  advantages: [
    "Bidirectional: Text to ASCII and ASCII to Text conversion.",
    "Multiple format support: Decimal, Hexadecimal, Binary.",
    "Load TXT file and Clear functionality.",
    "Printable and Extended ASCII table reference.",
    "Copy to clipboard functionality.",
  ],
  useCases: [
    "Debugging character encoding issues in software development.",
    "Data validation and encoding in data processing applications.",
    "Learning about character encoding and binary number systems.",
    "System integration and cross-platform character handling.",
  ],
};

export default function ASCIIConverterPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="code" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">
              ASCII Code Converter
            </h1>
            <p className="mt-1 text-sm text-slate-500">developer</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        Convert between text and ASCII codes. Support for decimal, hexadecimal,
        and binary formats with ASCII table reference.
      </p>

      <ASCIIConverter />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">1. How to Use</h3>
            <ol className="list-decimal space-y-2 pl-5">
              {ASCII_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">2. How It Works</h3>
            <div className="space-y-2">
              {ASCII_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">3. About ASCII Code Converter</h3>
            <div className="space-y-2">
              {ASCII_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">4. Advantages</h3>
            <ul className="list-disc space-y-2 pl-5">
              {ASCII_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">5. Real-World Use Cases</h3>
            <ul className="list-disc space-y-2 pl-5">
              {ASCII_GUIDE.useCases.map((item, i) => (
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
