import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import UnitConverter from "../UnitConverter";

export const metadata: Metadata = createMetadata({
  title: "Digital Storage Converter | Bytes, KB, MB, GB, TB",
  description:
    "Convert digital storage units: bytes, kilobytes, megabytes, gigabytes, terabytes. Free online digital storage converter for computing and data management.",
  path: "/tools/unit-converter/digital",
  keywords: [
    "digital storage converter",
    "bytes to MB",
    "GB to TB",
    "file size converter",
    "data storage",
    "binary units",
    "withustools",
  ],
});

const DIGITAL_GUIDE = {
  usage: [
    "Enter a value and select source unit (e.g., MB, GB). Select target unit.",
    "Result updates in real time. Supports both decimal (1000) and binary (1024) bases. Use swap button to switch units.",
  ],
  howItWorks: [
    "Decimal: KB = 1000 B, MB = 10^6 B. Binary: KiB = 1024 B, MiB = 1024 KiB.",
    "Bits and bytes: 1 byte = 8 bits. Supports Kilobits, Megabits, Kibibits, Mebibits, and more.",
  ],
  about: [
    "Free online digital storage converter for bits, bytes, kilobytes, megabytes, gigabytes, terabytes, and petabytes. Supports both decimal (SI) and binary (IEC) units. All calculations run in your browser.",
  ],
  advantages: [
    "Decimal and binary units (KB/KiB, MB/MiB, etc.).",
    "Bits and bytes conversion.",
    "All Unit Conversions panel shows value in every unit.",
  ],
  useCases: [
    "Computing: File sizes, disk space, RAM.",
    "Data management: Storage capacity planning.",
    "Downloads: File size in MB or GB.",
  ],
};

export default function DigitalStorageConverterPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="ruler" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">Digital Storage Converter</h1>
            <p className="mt-1 text-sm text-slate-500">unit-converter</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        Convert between bits, bytes, KB, MB, GB, TB, and more. Supports decimal
        (1000) and binary (1024) units. All Unit Conversions panel included.
      </p>

      <UnitConverter category="digital" title="Convert Digital Storage" />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">1. How to Use</h3>
            <ol className="list-decimal space-y-2 pl-5">
              {DIGITAL_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">2. How It Works</h3>
            <div className="space-y-2">
              {DIGITAL_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">3. About Digital Storage Converter</h3>
            <div className="space-y-2">
              {DIGITAL_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">4. Advantages</h3>
            <ul className="list-disc space-y-2 pl-5">
              {DIGITAL_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">5. Real-World Use Cases</h3>
            <ul className="list-disc space-y-2 pl-5">
              {DIGITAL_GUIDE.useCases.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Link
        href="/tools/unit-converter"
        className="mt-8 inline-block text-slate-400 underline transition-colors hover:text-slate-200"
      >
        ← Back to Unit Converter
      </Link>
    </div>
  );
}
