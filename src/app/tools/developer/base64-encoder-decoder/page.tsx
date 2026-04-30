import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import Base64Encoder from "./Base64Encoder";

export const metadata: Metadata = createMetadata({
  title: "Convert Text and Files to Base64(Encoder & Decoder)",
  description:
    "Encode and decode Base64 for text and files in your browser. Supports URL-safe Base64 and quick copy or download workflows.",
  path: "/tools/developer/base64-encoder-decoder",
  keywords: [
    "base64 encoder decoder",
    "base64 converter",
    "text to base64",
    "base64 to text",
    "file to base64",
    "base64 to file",
    "withustools",
  ],
});

const BASE64_GUIDE = {
  usage: [
    "Text Mode: Enter text in the input field and click Encode or Decode. Use Copy to copy the result.",
    "File Mode: Drag & drop or choose a file to upload. The Base64 string appears in the output. Use Download File to decode the Base64 back to the original file and save it.",
    "URL-safe option: Check the box for URL-safe Base64 (replaces + with - and / with _).",
  ],
  howItWorks: [
    "Base64 encoding converts binary data into ASCII text using 64 characters (A-Z, a-z, 0-9, +, /).",
    "Text encoding uses btoa/atob with UTF-8 handling via encodeURIComponent/decodeURIComponent.",
    "File mode uses FileReader to read files and converts to Base64 data URL.",
  ],
  about: [
    "Free online Base64 encoder and decoder for text and files. Supports URL-safe Base64 for use in URLs and APIs.",
  ],
  advantages: [
    "Text and file encoding/decoding.",
    "URL-safe Base64 option.",
    "Copy to clipboard and file download.",
  ],
  useCases: [
    "API development: Encode binary data for transmission.",
    "Data storage: Store binary data in JSON or text files.",
    "Email attachments: Encode files for MIME.",
  ],
};

const FAQ_ITEMS = [
  {
    question: "Can I use this Base64 tool for files as well as text?",
    answer:
      "Yes. You can encode and decode both plain text and uploaded files.",
  },
  {
    question: "What is URL-safe Base64?",
    answer:
      "It replaces `+` and `/` with `-` and `_` so encoded strings are safer in URLs.",
  },
  {
    question: "Does this Base64 encoder upload my data?",
    answer: "No. Processing runs in your browser.",
  },
];

export default function Base64EncoderPage() {
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
              Base64 Encoder & Decoder
            </h1>
            <p className="mt-1 text-sm text-slate-500">developer</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        Encode or decode Base64 for text and files, including URL-safe Base64 output.
      </p>

      <Base64Encoder />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-3 text-xl font-semibold text-slate-200">
          Base64 Encoder &amp; Decoder Guide
        </h2>
        <p className="mb-6 text-sm leading-relaxed text-slate-400">
          For related data checks, try the{" "}
          <Link
            href="/tools/developer/ascii-code-converter"
            className="underline hover:text-slate-200"
          >
            ASCII Code Converter
          </Link>{" "}
          and{" "}
          <Link
            href="/tools/developer/code-formatter"
            className="underline hover:text-slate-200"
          >
            Code Formatter
          </Link>
          .
        </p>
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              1. How can I encode or decode Base64 from text or files on this page?
            </h3>
            <ol className="list-decimal space-y-2 pl-5">
              {BASE64_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              2. How does this Base64 tool process data entirely in my browser?
            </h3>
            <div className="space-y-2">
              {BASE64_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">3. About Base64</h3>
            <div className="space-y-2">
              {BASE64_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              4. Why handle Base64 locally instead of pasting secrets into random sites?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {BASE64_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              5. When do APIs, data URIs, or attachments still rely on Base64 strings?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {BASE64_GUIDE.useCases.map((item, i) => (
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
