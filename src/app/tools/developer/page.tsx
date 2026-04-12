import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import { DEVELOPER_INDEX_GUIDE } from "./developer-content";

export const metadata: Metadata = createMetadata({
  title: "Developer Tools",
  description:
    "Free online developer tools: ASCII converter, Base64 encoder/decoder, code formatter, color picker, CSS sprites generator, number system converter, QR code generator and reader.",
  path: "/tools/developer",
  keywords: [
    "developer tools",
    "ascii converter",
    "base64 encoder",
    "code formatter",
    "color picker",
    "css sprites",
    "number system converter",
    "qr code generator",
    "qr code reader",
    "withustools",
  ],
});

const DEVELOPER_TOOLS = [
  {
    slug: "ascii-code-converter",
    name: "ASCII Code Converter",
    description: "Convert text to ASCII codes (decimal, hex, binary) and view the ASCII table reference.",
    path: "/tools/developer/ascii-code-converter",
  },
  {
    slug: "base64-encoder-decoder",
    name: "Base64 Encoder & Decoder",
    description: "Encode and decode text or files to Base64 format with URL-safe option.",
    path: "/tools/developer/base64-encoder-decoder",
  },
  {
    slug: "code-formatter",
    name: "Code Formatter",
    description: "Format and beautify HTML, CSS, JavaScript, and JSON code with proper indentation.",
    path: "/tools/developer/code-formatter",
  },
  {
    slug: "color-picker",
    name: "Color Picker",
    description: "Select colors and get HEX, RGB, HSL values. Pick colors from screen with eyedropper.",
    path: "/tools/developer/color-picker",
  },
  {
    slug: "css-sprites-generator",
    name: "CSS Sprites Generator",
    description: "Combine multiple images into a single sprite sheet and generate CSS code.",
    path: "/tools/developer/css-sprites-generator",
  },
  {
    slug: "numbersystem-converter",
    name: "Number System Converter",
    description: "Convert between binary, octal, decimal, hexadecimal, and ASCII characters.",
    path: "/tools/developer/numbersystem-converter",
  },
  {
    slug: "qr-code-generator",
    name: "QR Code Generator",
    description: "Create QR codes for URLs, text, email, phone, Wi-Fi, vCard, and more.",
    path: "/tools/developer/qr-code-generator",
  },
  {
    slug: "qr-code-reader",
    name: "QR Code Reader",
    description: "Scan QR codes from camera or uploaded images.",
    path: "/tools/developer/qr-code-reader",
  },
] as const;

export default function DeveloperToolsIndexPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="code" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">Developer Tools</h1>
            <p className="mt-1 text-sm text-slate-500">developer</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        ASCII converter, Base64 encoder/decoder, code formatter, color picker,
        CSS sprites, number system converter, QR code generator and reader. All
        processing runs in your browser. No signup required.
      </p>

      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {DEVELOPER_TOOLS.map((tool) => (
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
            <h3 className="mb-3 font-semibold text-slate-200">
              1. How do I open and use a developer utility from this index?
            </h3>
            <ol className="list-decimal space-y-2 pl-5">
              {DEVELOPER_INDEX_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              2. How do developer tools on this site run locally in my browser?
            </h3>
            <div className="space-y-2">
              {DEVELOPER_INDEX_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              3. What developer tools are available and what problems do they solve?
            </h3>
            <div className="space-y-2">
              {DEVELOPER_INDEX_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              4. Why use browser-based encoders, formatters, and generators?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {DEVELOPER_INDEX_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              5. When are quick developer utilities faster than a full IDE or CLI?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {DEVELOPER_INDEX_GUIDE.useCases.map((item, i) => (
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
