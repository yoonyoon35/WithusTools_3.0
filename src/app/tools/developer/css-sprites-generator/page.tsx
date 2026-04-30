import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import CssSpritesGenerator from "./CssSpritesGenerator";

export const metadata: Metadata = createMetadata({
  title: "Combine Images into CSS Sprites",
  description:
    "Generate a CSS sprite sheet from multiple images and copy ready-to-use CSS classes. Build and export sprites directly in your browser.",
  path: "/tools/developer/css-sprites-generator",
  keywords: [
    "css sprites generator",
    "sprite sheet maker",
    "image sprites",
    "withustools",
  ],
});

const SPRITES_GUIDE = {
  usage: [
    "Drop images here or click to upload. Add or remove images with the × button.",
    "Set Padding (px), Max Columns, and Background color. Click Generate Sprite.",
    "Download the sprite image as sprite.png and copy the generated CSS from the Preview or CSS Code section.",
    "Use Reset to clear everything and start over.",
  ],
  howItWorks: [
    "Uses Canvas API to composite images into a single PNG. Images are laid out in a grid.",
    "Generated CSS: .sprite for the common background, .sprite-{filename} for each image with width, height, and background-position.",
    "Apply .sprite as base and add .sprite-{name} for each icon. Use background-position for display.",
  ],
  about: [
    "Free online CSS sprites generator. Combine multiple images into one sprite sheet. Customizable padding, columns, and background. Automatic CSS class generation.",
  ],
  advantages: [
    "Reduces HTTP requests by combining images.",
    "Customizable padding, max columns, and background color.",
    "Automatic CSS with .sprite and .sprite-{name} classes.",
    "Download PNG and copy code in one place.",
  ],
  useCases: [
    "Icons: Combine icon images for faster loading.",
    "UI: Create sprite sheets for buttons and UI elements.",
    "Performance: Reduce image requests on web pages.",
  ],
};

const FAQ_ITEMS = [
  {
    question: "Can I generate both sprite image and CSS together?",
    answer:
      "Yes. The tool exports a sprite PNG and matching CSS classes with positions.",
  },
  {
    question: "Can I control spacing and layout?",
    answer:
      "Yes. You can set padding, max columns, and background color before generating.",
  },
  {
    question: "Does this sprite generator require installation?",
    answer: "No. It runs in your browser without setup.",
  },
];

export default function CssSpritesGeneratorPage() {
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
              CSS Sprites Generator
            </h1>
            <p className="mt-1 text-sm text-slate-500">developer</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        Merge multiple images into one sprite sheet and get matching CSS classes instantly.
      </p>

      <CssSpritesGenerator />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-3 text-xl font-semibold text-slate-200">
          CSS Sprites Generator Guide
        </h2>
        <p className="mb-6 text-sm leading-relaxed text-slate-400">
          For related frontend utilities, use the{" "}
          <Link
            href="/tools/developer/color-picker"
            className="underline hover:text-slate-200"
          >
            Color Picker
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
              1. How can I pack images into one sprite sheet and export CSS from this page?
            </h3>
            <ol className="list-decimal space-y-2 pl-5">
              {SPRITES_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              2. How does this sprite tool lay out tiles and emit background-position CSS?
            </h3>
            <div className="space-y-2">
              {SPRITES_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              3. What is a CSS sprite sheet, and when is it still useful on the web?
            </h3>
            <div className="space-y-2">
              {SPRITES_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              4. Why build sprites in the browser for fast iteration on front-end assets?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {SPRITES_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              5. When do teams prefer one sprite over dozens of separate icon requests?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {SPRITES_GUIDE.useCases.map((item, i) => (
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
