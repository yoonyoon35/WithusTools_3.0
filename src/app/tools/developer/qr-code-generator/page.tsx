import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import QRCodeGenerator from "./QRCodeGenerator";

export const metadata: Metadata = createMetadata({
  title: "Create Custom QR Codes",
  description:
    "QR Code Generator - Create QR codes for URLs, text, email, phone, SMS, WhatsApp, Wi-Fi, vCard, location, Bitcoin, image. Custom colors, logo support, error correction. Download as PNG, JPG, SVG, or PDF. Free online tool.",
  path: "/tools/developer/qr-code-generator",
  keywords: [
    "qr code generator",
    "qr code maker",
    "create qr code",
    "qr code with logo",
    "custom qr code",
    "free qr code",
    "withustools",
  ],
});

const QR_GEN_GUIDE = {
  usage: [
    "Select Content Type: Text/URL, Email, Phone, SMS, WhatsApp, Wi-Fi, vCard, Location (Geo), Bitcoin, or Image URL.",
    "Enter the required fields. The QR code preview updates in real time.",
    "Use Appearance Settings: size (200–500 px), foreground/background colors, error correction level (L/M/Q/H), and download format (PNG, JPG, SVG, PDF).",
    "Optional: Upload a logo and set its size (10–25%). Use high contrast colors and Error Correction Level Q or H for better scanability when using a logo.",
    "Click Download to save the QR code in your chosen format.",
  ],
  howItWorks: [
    "Uses the qrcode library to generate QR codes from your input.",
    "Formats: Text/URL, mailto:, tel:, sms:, wa.me (WhatsApp), WIFI:, vCard 3.0, geo:, bitcoin:, image URL.",
    "Appearance: Customizable colors, error correction level, and optional logo overlay in the center.",
    "Export: PNG, JPG, SVG, or PDF. Logo and all appearance settings are applied before download.",
  ],
  about: [
    "Free online QR code generator for URLs, text, email, phone, SMS, WhatsApp, Wi-Fi, vCard, location, Bitcoin, and image URLs. Supports custom colors, error correction, logo embedding, and multiple download formats. All processing runs in your browser.",
  ],
  advantages: [
    "10 content types: Text, Email, Phone, SMS, WhatsApp, Wi-Fi, vCard, Geo, Bitcoin, Image URL.",
    "Appearance Settings: size (200–500 px), foreground/background colors, error correction (L/M/Q/H).",
    "Logo support: Upload a logo, set size (10–25%), centered with padding.",
    "Download formats: PNG, JPG, SVG, PDF. Real-time preview. No data leaves your device.",
  ],
  useCases: [
    "Marketing: Create branded QR codes with logos for URLs and campaigns.",
    "Contact: Share phone numbers, email, and vCards.",
    "Wi-Fi: Let guests connect easily with a scannable credential.",
  ],
};

export default function QRCodeGeneratorPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="code" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">QR Code Generator</h1>
            <p className="mt-1 text-sm text-slate-500">developer</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        Create QR codes for URLs, text, email, phone, SMS, WhatsApp, Wi-Fi, vCard, location, Bitcoin, image, and more.
      </p>

      <QRCodeGenerator />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">1. How to Use</h3>
            <ol className="list-decimal space-y-2 pl-5">
              {QR_GEN_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">2. How It Works</h3>
            <div className="space-y-2">
              {QR_GEN_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">3. About</h3>
            <div className="space-y-2">
              {QR_GEN_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">4. Advantages</h3>
            <ul className="list-disc space-y-2 pl-5">
              {QR_GEN_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">5. Use Cases</h3>
            <ul className="list-disc space-y-2 pl-5">
              {QR_GEN_GUIDE.useCases.map((item, i) => (
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
