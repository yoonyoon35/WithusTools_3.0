import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import MetaTagGenerator from "./MetaTagGenerator";

export const metadata: Metadata = createMetadata({
  title: "Create SEO Meta Tags",
  description:
    "Generate SEO meta tags online in your browser. Create title, description, Open Graph, and Twitter Card tags you can paste into your site head.",
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
    "Write your page title and meta description first.",
    "Set robots directives like `index`/`noindex` and `follow`/`nofollow` when needed.",
    "Fill Open Graph fields for social previews on Facebook or LinkedIn.",
    "Fill Twitter Card fields, then copy the generated meta tags into your HTML head.",
  ],
  howItWorks: [
    "The meta tag generator converts your input into ready-to-use HTML meta tags.",
    "It outputs standard SEO tags plus Open Graph and Twitter Card markup.",
    "Everything runs locally in your browser.",
  ],
  about: [
    "This online meta tag generator is handy when publishing landing pages, blog posts, and product pages.",
    "You can quickly preview and copy tags without opening a CMS plugin.",
    "No signup is needed.",
  ],
  advantages: [
    "Creates core SEO meta tags with social sharing tags in one place.",
    "Helps keep title and description fields within practical ranges.",
    "Runs in-browser so draft metadata stays local.",
    "Starts instantly without account setup.",
  ],
  useCases: [
    "Updating metadata before publishing a new page.",
    "Improving social previews for campaign links.",
    "Fixing missing or duplicate tags after a migration.",
    "Testing alternate titles for better click-through rate.",
  ],
};

const FAQ_ITEMS = [
  {
    question: "Which meta tags should I create first?",
    answer:
      "Start with title, meta description, and canonical basics. Then add Open Graph and Twitter Card tags for social sharing previews.",
  },
  {
    question: "Can I generate Open Graph and Twitter tags together?",
    answer:
      "Yes. This tool outputs both sets so you can paste one complete block into the head section.",
  },
  {
    question: "Does this meta tag generator send my content anywhere?",
    answer: "No. All generation runs in your browser.",
  },
];

export default function MetaTagGeneratorPage() {
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
          <ToolIcon name="seo" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">Meta Tag Generator</h1>
            <p className="mt-1 text-sm text-slate-500">seo</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        Create SEO meta tags in one place, including Open Graph and Twitter Card markup for link previews.
      </p>

      <MetaTagGenerator />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-3 text-xl font-semibold text-slate-200">Meta Tag Generator Guide</h2>
        <p className="mb-6 text-sm leading-relaxed text-slate-400">
          After creating tags, pair them with a clean{" "}
          <Link href="/tools/seo/robots-generator" className="underline hover:text-slate-200">
            robots.txt file
          </Link>{" "}
          and an updated{" "}
          <Link href="/tools/seo/sitemap-generator" className="underline hover:text-slate-200">
            XML sitemap
          </Link>
          .
        </p>
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              1. How can I generate meta title, description, and social tags on this page?
            </h3>
            <ol className="list-decimal space-y-2 pl-5">
              {METATAG_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              2. How does this meta tag generator build HTML snippets in my browser?
            </h3>
            <div className="space-y-2">
              {METATAG_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              3. Which meta tags still matter for SEO and social link previews?
            </h3>
            <div className="space-y-2">
              {METATAG_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              4. Why prototype meta tags in the browser before pasting into templates?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {METATAG_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              5. When are custom meta tags critical for landing pages and campaigns?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {METATAG_GUIDE.useCases.map((item, i) => (
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
        href="/tools/seo"
        className="mt-8 inline-block text-slate-400 underline transition-colors hover:text-slate-200"
      >
        ← Back to SEO Tools
      </Link>
    </div>
  );
}
