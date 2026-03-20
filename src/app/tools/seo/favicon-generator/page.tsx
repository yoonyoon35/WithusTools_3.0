import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import FaviconGenerator from "./FaviconGenerator";

export const metadata: Metadata = createMetadata({
  title: "Favicon Generator | Create All Platform Favicons",
  description:
    "Generate favicons for your website. Create favicons for all platforms including Apple, Android, Windows. Free online tool. Complete favicon package with HTML code.",
  path: "/tools/seo/favicon-generator",
  keywords: [
    "favicon generator",
    "favicon maker",
    "favicon creator",
    "website icon generator",
    "favicon converter",
    "favicon package",
    "favicon design",
    "withustools",
  ],
});

const FAVICON_GUIDE = {
  usage: [
    "Upload a square image (minimum 260x260 pixels). Drag & drop or click to select.",
    "Choose platforms: Basic favicon, Apple Touch Icons, Android/Chrome, Windows Tiles, Safari Pinned Tab.",
    "Set background color for transparent icons, site name, short name, and favicon output path.",
    "Click Generate Favicons. Copy HTML, manifest, and browserconfig code, or download the complete package.",
  ],
  howItWorks: [
    "The generator uses the Canvas API to resize your image and create favicons in required sizes.",
    "Each platform has specific size requirements: browsers (16–48px), Apple (57–180px), Android (36–512px), Windows (70–310px), Safari (16–192px).",
    "The complete package includes PNG files, site.webmanifest, browserconfig.xml, and HTML link tags.",
    "All processing runs in your browser. No data is sent to any server.",
  ],
  about: [
    "Free online favicon generator for creating favicons for all platforms. Generates complete favicon packages with implementation code.",
    "Supports multi-platform output including web browsers, iOS, Android, and Windows. No signup required.",
    "Ensures your website displays properly across all devices and bookmarks.",
  ],
  advantages: [
    "Multi-platform: Create favicons for browsers, Apple, Android, Windows, Safari.",
    "Complete package: HTML, manifest, and browserconfig included.",
    "Privacy: All generation happens locally in your browser.",
    "No signup: Use immediately without creating an account.",
  ],
  useCases: [
    "Website launch: Create favicons for new website projects.",
    "Brand update: Update favicons to match new brand identities.",
    "Multi-platform sites: Ensure favicon compatibility across devices.",
    "Progressive web apps: Generate icons for PWA manifests.",
  ],
};

export default function FaviconGeneratorPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="seo" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">Favicon Generator</h1>
            <p className="mt-1 text-sm text-slate-500">seo</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        Create favicons for all platforms and devices. Generate complete favicon
        packages with HTML, manifest, and browserconfig code.
      </p>

      <FaviconGenerator />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">1. How to Use</h3>
            <ol className="list-decimal space-y-2 pl-5">
              {FAVICON_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">2. How It Works</h3>
            <div className="space-y-2">
              {FAVICON_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">3. About Favicon Generator</h3>
            <div className="space-y-2">
              {FAVICON_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">4. Advantages</h3>
            <ul className="list-disc space-y-2 pl-5">
              {FAVICON_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">5. Real-World Use Cases</h3>
            <ul className="list-disc space-y-2 pl-5">
              {FAVICON_GUIDE.useCases.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Link
        href="/tools/seo"
        className="mt-8 inline-block text-slate-400 underline transition-colors hover:text-slate-200"
      >
        ← Back to SEO Tools
      </Link>
    </div>
  );
}
