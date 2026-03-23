import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import NumberSystemConverter from "./NumberSystemConverter";

export const metadata: Metadata = createMetadata({
  title: "Number System Converter | Binary, Octal, Decimal, Hex",
  description:
    "Number System Converter - Convert numbers between different number systems. Support for binary, octal, decimal, hexadecimal, and ASCII. Free online tool.",
  path: "/tools/developer/numbersystem-converter",
  keywords: [
    "number system converter",
    "binary converter",
    "decimal converter",
    "hexadecimal converter",
    "octal converter",
    "withustools",
  ],
});

const NS_GUIDE = {
  usage: [
    "Select input format (Input as): Binary, Octal, Decimal, Hexadecimal, or Character.",
    "Enter a number or single character. Binary: 0b1010, Hex: 0xFF, Octal: 0777, Decimal: 255, Character: A.",
    "All conversions (Binary, Octal, Decimal, Hex, Character) are shown at once. Copy All to copy. Clear to reset.",
  ],
  howItWorks: [
    "Parses input according to the selected format, converts to decimal, then outputs all formats at once.",
    "Formats: binary (0b prefix), octal (0 prefix), decimal, hex (0x prefix), character (single char → ASCII/Unicode code).",
  ],
  about: [
    "Free online number system converter for binary, octal, decimal, hexadecimal, and ASCII characters.",
  ],
  advantages: [
    "Multi-base conversion.",
    "Character to/from number conversion.",
    "Real-time conversion.",
  ],
  useCases: [
    "Programming: Convert between number bases.",
    "Debugging: Inspect character codes.",
    "Learning: Understand number systems.",
  ],
};

export default function NumberSystemConverterPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="code" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">
              Number System Converter
            </h1>
            <p className="mt-1 text-sm text-slate-500">developer</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        Convert between binary, octal, decimal, hexadecimal, and ASCII
        characters.
      </p>

      <NumberSystemConverter />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">1. How to Use</h3>
            <ol className="list-decimal space-y-2 pl-5">
              {NS_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">2. How It Works</h3>
            <div className="space-y-2">
              {NS_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">3. About</h3>
            <div className="space-y-2">
              {NS_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">4. Advantages</h3>
            <ul className="list-disc space-y-2 pl-5">
              {NS_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">5. Use Cases</h3>
            <ul className="list-disc space-y-2 pl-5">
              {NS_GUIDE.useCases.map((item, i) => (
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
