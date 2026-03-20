import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import MetaTagGenerator from "./MetaTagGenerator";

export const metadata: Metadata = createMetadata({
  title: "Meta Tag Generator | Create SEO Meta Tags",
  description:
    "Generate meta tags for your website. Create SEO-friendly meta tags including Open Graph and Twitter Cards. Free online tool.",
  path: "/tools/seo/metatag-generator",
  keywords: [
    "meta tag generator",
    "seo meta tags",
    "open graph generator",
    "twitter card generator",
    "meta description generator",
    "withustools",
  ],
});

const METATAG_GUIDE = {
  usage: [
    "Enter title (50–60 characters recommended) and meta description (150–160 characters).",
    "Add keywords and select robots directive (index/noindex, follow/nofollow).",
    "In Open Graph tab: Enter OG title, description, URL, and image URL for social sharing.",
    "In Twitter tab: Choose card type, enter title, description, and image URL. Copy the generated HTML to your site head.",
  ],
  howItWorks: [
    "The generator builds HTML meta tags from your input. Title and description character limits follow SEO best practices.",
    "Open Graph tags control how your content appears when shared on Facebook, LinkedIn, and other platforms.",
    "Twitter Card tags optimize how your links appear on Twitter/X. All processing runs in your browser.",
  ],
  about: [
    "Free online meta tag generator for creating SEO-friendly meta tags. Supports basic SEO, Open Graph, and Twitter Cards.",
    "Essential for search engine optimization and social media sharing. No signup required.",
    "Copy the generated code into your HTML head section.",
  ],
  advantages: [
    "SEO optimized: Follows best practices for title and description length.",
    "Social ready: Open Graph and Twitter Card support.",
    "Privacy: All generation happens locally in your browser.",
    "No signup: Use immediately without creating an account.",
  ],
  useCases: [
    "Search engine optimization: Improve rankings with optimized meta tags.",
    "Social sharing: Optimize appearance when shared on Facebook, Twitter, LinkedIn.",
    "E-commerce: Optimize product page meta tags for better CTR.",
    "Content marketing: Improve blog post discoverability.",
  ],
};

export default function MetaTagGeneratorPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="seo" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">Meta Tag Generator</h1>
            <p className="mt-1 text-sm text-slate-500">seo</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        Generate SEO-friendly meta tags for your website. Support for Open Graph and Twitter Cards.
      </p>

      <MetaTagGenerator />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">1. How to Use</h3>
            <ol className="list-decimal space-y-2 pl-5">
              {METATAG_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">2. How It Works</h3>
            <div className="space-y-2">
              {METATAG_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">3. About Meta Tag Generator</h3>
            <div className="space-y-2">
              {METATAG_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">4. Advantages</h3>
            <ul className="list-disc space-y-2 pl-5">
              {METATAG_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">5. Real-World Use Cases</h3>
            <ul className="list-disc space-y-2 pl-5">
              {METATAG_GUIDE.useCases.map((item, i) => (
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
