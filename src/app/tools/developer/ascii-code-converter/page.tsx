import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import ASCIIConverter from "./ASCIIConverter";

export const metadata: Metadata = createMetadata({
  title: "Convert Text to ASCII Codes & Reverse",
  description:
    "Convert text to ASCII and back in decimal, hex, or binary. This online ASCII converter runs in your browser with quick copy support.",
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

const FAQ_ITEMS = [
  {
    question: "Can I convert both text to ASCII and ASCII to text?",
    answer:
      "Yes. You can switch between both directions and choose decimal, hexadecimal, or binary format.",
  },
  {
    question: "What separators are supported for ASCII input?",
    answer:
      "Use spaces or commas between ASCII codes when decoding back to text.",
  },
  {
    question: "Does this ASCII converter run online or locally?",
    answer: "It runs in your browser, so conversion happens locally.",
  },
];

export default function ASCIIConverterPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

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
        Convert text and ASCII values quickly in decimal, hex, or binary with a built-in ASCII reference.
      </p>

      <ASCIIConverter />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-3 text-xl font-semibold text-slate-200">ASCII Code Converter Guide</h2>
        <p className="mb-6 text-sm leading-relaxed text-slate-400">
          If you are also working with encoded payloads, open the{" "}
          <Link
            href="/tools/developer/base64-encoder-decoder"
            className="underline hover:text-slate-200"
          >
            Base64 Encoder &amp; Decoder
          </Link>{" "}
          and{" "}
          <Link
            href="/tools/developer/numbersystem-converter"
            className="underline hover:text-slate-200"
          >
            Number System Converter
          </Link>
          .
        </p>
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              1. How can I convert text to ASCII (decimal, hex, binary) and back on this page?
            </h3>
            <ol className="list-decimal space-y-2 pl-5">
              {ASCII_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              2. How does this ASCII converter map characters locally in the browser?
            </h3>
            <div className="space-y-2">
              {ASCII_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              3. What is the ASCII table, and how does this tool help students or engineers?
            </h3>
            <div className="space-y-2">
              {ASCII_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              4. Why use an in-browser ASCII reference for quick byte-level checks?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {ASCII_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              5. When do serial protocols, logs, or embedded work still hinge on ASCII values?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {ASCII_GUIDE.useCases.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Link
        href="/tools/developer"
        className="mt-8 inline-block text-slate-400 underline transition-colors hover:text-slate-200"
      >
        ← Back to Developer Tools
      </Link>
    </div>
  );
}
