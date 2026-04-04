import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import { getFaqEntriesByCategory } from "@/data/faq-data";
import ColorPicker from "./ColorPicker";

export const metadata: Metadata = createMetadata({
  title: "Color Picker | HEX, RGB, HSL, HSV, CMYK Code",
  description:
    "Color Picker - Pick colors from screen with eyedropper. Get HEX, RGB, HSL, HSV, CMYK values. Contrast ratio, palette, saved history. Free online tool.",
  path: "/tools/developer/color-picker",
  keywords: [
    "color picker",
    "hex color picker",
    "rgb color picker",
    "color code generator",
    "withustools",
  ],
});

/** Hub-only: pair pages carry step-by-step conversion copy; CMYK caveats repeat on CMYK converters + FAQ. */
const COLOR_PICKER_GUIDE = {
  quickStart: [
    "Pick with the color input or main Eyedropper; HEX, RGB, RGBA, HSL, HSV, and CMYK update with Copy buttons. Use the alpha slider when you need transparency.",
    "Use the palette row and contrast tools as needed; open a dedicated converter below Saved Colors for fixed input/output per format pair. Common questions are linked under that list.",
  ],
  deeper: [
    "Parsing rules, the sRGB pipeline, worked examples, and calculation lines for one pair (e.g. HEX → RGB) stay on that pair’s page—not repeated here.",
    "CMYK is a simple on-screen preview here (not a printer ICC profile). The yellow note on CMYK pair pages and the Color Picker FAQ expand on non-unique CMYK↔RGB and app-to-app differences; use HEX/RGB for stable UI work.",
  ],
  exampleUses: [
    "Web/CSS: copy HEX, rgb(), hsl(), or rgba().",
    "Accessibility: WCAG contrast vs presets or a custom comparison color.",
    "Design: complementary, analogous, and triadic variants from the palette.",
  ],
};

const COLOR_PICKER_FAQ_LINKS = getFaqEntriesByCategory("color-picker");

export default function ColorPickerPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="code" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">Color Picker</h1>
            <p className="mt-1 text-sm text-slate-500">developer</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        Select colors and get HEX, RGB, HSL, HSV, CMYK values. Pick colors from
        screen with eyedropper. Contrast ratio and color palette included.
      </p>

      <ColorPicker
        dedicatedConvertersFaq={COLOR_PICKER_FAQ_LINKS.map((e) => ({
          slug: e.slug,
          question: e.question,
          category: e.category,
        }))}
      />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-6 text-lg font-semibold text-slate-200">Guide</h2>
        <div className="space-y-6 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-2 font-semibold text-slate-200">Quick start</h3>
            <ul className="list-disc space-y-2 pl-5">
              {COLOR_PICKER_GUIDE.quickStart.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-2 font-semibold text-slate-200">Formulas &amp; deeper content</h3>
            <div className="space-y-2">
              {COLOR_PICKER_GUIDE.deeper.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-2 font-semibold text-slate-200">Example uses</h3>
            <ul className="list-disc space-y-2 pl-5">
              {COLOR_PICKER_GUIDE.exampleUses.map((item, i) => (
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
