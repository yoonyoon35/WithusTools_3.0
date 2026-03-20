import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
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

const COLOR_PICKER_GUIDE = {
  usage: [
    "Use the color input or Eyedropper (main color) to select a color. Values update in real time.",
    "Copy HEX, RGB, RGBA, HSL, HSV, or CMYK values with the Copy buttons.",
    "Adjust alpha for transparency with the slider.",
    "Color Palette: Click Original, Complementary, Analogous, Triadic, Lighter, or Darker to apply.",
    "Contrast Ratio: Use Custom color picker or its Eyedropper to set a comparison color. Results show ratio and WCAG grade (Fail, AA Large, AA, AAA).",
    "Saved Colors: Selected colors are auto-saved (up to 20). Click to reuse. Use Clear to remove all.",
  ],
  howItWorks: [
    "Color picker uses native HTML5 color input and the EyeDropper API when available.",
    "Two Eyedroppers: one for the main color, one for the Contrast Ratio comparison color.",
    "All conversions (RGB, HSL, HSV, CMYK) are computed in the browser.",
    "Saved colors are stored in localStorage.",
    "Contrast ratios follow WCAG 2.1. Fail (<3), AA Large (≥3), AA (≥4.5), AAA (≥7).",
  ],
  about: [
    "Free online color picker for HEX, RGB, HSL, HSV, CMYK, and RGBA. Includes contrast ratio (vs 10 preset + custom), color palette (8 variants), and saved history.",
  ],
  advantages: [
    "Multiple format support (HEX, RGB, HSL, HSV, CMYK, RGBA).",
    "Two Eyedroppers: main color and contrast comparison.",
    "Contrast ratio with WCAG badges (10 preset colors + custom).",
    "Color palette (Complementary, Analogous, Triadic, Lighter, Darker).",
    "Auto-saved color history (localStorage).",
  ],
  useCases: [
    "Web design: Pick and copy color codes.",
    "Accessibility: Check contrast ratios against common colors.",
    "Design: Explore complementary, analogous, and triadic colors.",
  ],
};

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

      <ColorPicker />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">1. How to Use</h3>
            <ol className="list-decimal space-y-2 pl-5">
              {COLOR_PICKER_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">2. How It Works</h3>
            <div className="space-y-2">
              {COLOR_PICKER_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">3. About Color Picker</h3>
            <div className="space-y-2">
              {COLOR_PICKER_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">4. Advantages</h3>
            <ul className="list-disc space-y-2 pl-5">
              {COLOR_PICKER_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">5. Use Cases</h3>
            <ul className="list-disc space-y-2 pl-5">
              {COLOR_PICKER_GUIDE.useCases.map((item, i) => (
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
