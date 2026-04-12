import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import QRCodeReader from "./QRCodeReader";

export const metadata: Metadata = createMetadata({
  title: "Read QR Codes Instantly",
  description:
    "QR Code Scanner - Scan QR codes from camera or upload images (PNG, JPG, WebP, GIF). Decode URLs, text, vCard, Wi-Fi. Free online tool.",
  path: "/tools/developer/qr-code-reader",
  keywords: [
    "qr code scanner",
    "qr code reader",
    "scan qr code",
    "qr scanner online",
    "qr code decoder",
    "withustools",
  ],
});

const QR_READER_GUIDE = {
  usage: [
    "Camera mode: Allow camera access and position the QR code within the frame. The result appears automatically when detected.",
    "Upload mode: Drag & drop an image onto the drop zone or click to select a file (PNG, JPG, WebP, GIF).",
    "Use Copy to copy the decoded text, or Open to open URLs in a new tab. Works with tel:, mailto:, and other schemes.",
  ],
  howItWorks: [
    "Uses jsQR library to detect and decode QR codes from video frames or images.",
    "Camera mode continuously scans each frame until a QR code is found, then stops.",
    "Upload mode analyzes the image once and extracts the encoded content.",
  ],
  about: [
    "Free online QR code scanner. Scan from your device camera or upload an image. Decodes URLs, text, vCard, Wi-Fi credentials, and more. All processing runs in your browser—no data is sent to servers.",
  ],
  advantages: [
    "Camera and drag-and-drop upload support.",
    "Instant results. No account required.",
    "Copy to clipboard or open URLs (http, tel, mailto, etc.).",
    "Works offline after initial load.",
  ],
  useCases: [
    "Scan QR codes from screens, posters, or printed materials.",
    "Decode QR codes from saved images or screenshots.",
    "Share contact info, Wi-Fi credentials, or links via QR.",
  ],
};

export default function QRCodeReaderPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="code" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">QR Code Reader</h1>
            <p className="mt-1 text-sm text-slate-500">developer</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        Scan QR codes from camera or uploaded images.
      </p>

      <QRCodeReader />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              1. How can I scan QR codes from my camera or an uploaded image here?
            </h3>
            <ol className="list-decimal space-y-2 pl-5">
              {QR_READER_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              2. How does this QR reader decode barcodes locally in my browser?
            </h3>
            <div className="space-y-2">
              {QR_READER_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">3. About</h3>
            <div className="space-y-2">
              {QR_READER_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              4. Why scan QR codes in the browser instead of unknown mobile scanner apps?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {QR_READER_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              5. When are web-based QR readers handy for tickets, Wi-Fi, or 2FA setup?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {QR_READER_GUIDE.useCases.map((item, i) => (
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
