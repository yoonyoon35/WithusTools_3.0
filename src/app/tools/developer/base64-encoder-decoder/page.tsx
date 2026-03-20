import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import Base64Encoder from "./Base64Encoder";

export const metadata: Metadata = createMetadata({
  title: "Base64 Encoder & Decoder | Convert Text and Files",
  description:
    "Base64 Encoder & Decoder - Convert text and files to Base64 format and back. Support for URL-safe Base64 and file conversion. Free online tool.",
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

export default function Base64EncoderPage() {
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
        Convert text and files to Base64 format and back. Support for URL-safe
        Base64.
      </p>

      <Base64Encoder />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">1. How to Use</h3>
            <ol className="list-decimal space-y-2 pl-5">
              {BASE64_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">2. How It Works</h3>
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
            <h3 className="mb-3 font-semibold text-slate-200">4. Advantages</h3>
            <ul className="list-disc space-y-2 pl-5">
              {BASE64_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">5. Use Cases</h3>
            <ul className="list-disc space-y-2 pl-5">
              {BASE64_GUIDE.useCases.map((item, i) => (
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
