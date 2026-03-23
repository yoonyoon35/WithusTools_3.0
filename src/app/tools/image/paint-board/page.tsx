import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import PaintBoard from "./PaintBoard";

export const metadata: Metadata = createMetadata({
  title: "Free Online Paint Board",
  description:
    "Online drawing tool. Draw with brush, shapes, colors. Eraser, undo/redo, insert images. Create digital art, sketches, diagrams. All processing runs in your browser.",
  path: "/tools/image/paint-board",
  keywords: [
    "paint board",
    "drawing tool",
    "online paint",
    "digital art",
    "sketch tool",
    "free online drawing tool",
    "draw with brush online",
    "create digital art in browser",
    "sketch tool for diagrams",
    "online whiteboard",
    "withustools",
  ],
});

const PAINT_BOARD_GUIDE = {
  usage: [
    "Select a tool: Brush (freehand), Eraser, Rectangle, Circle, Line, or Image (insert from file).",
    "Choose foreground and background colors. Adjust brush size for the brush and eraser.",
    "Hold Shift while drawing rectangles or circles to create squares or perfect circles.",
    "Use Undo and Redo to step back or forward through your drawing history.",
    "Insert Image: Click to add an image from your device. Resize and position before placing.",
    "Save: Export your artwork as PNG. All processing runs in your browser.",
  ],
  howItWorks: [
    "Uses HTML5 Canvas for drawing. Brush strokes, shapes, and images are rendered with 2D context.",
    "Undo/redo uses canvas snapshots. Each action is stored in the history stack.",
    "All processing runs locally. Your artwork never leaves your device—no upload, no server.",
  ],
  about: [
    "Free online paint board for drawing, sketching, and creating simple graphics. No installation required—works in any modern browser.",
    "Ideal for quick diagrams, sketches, annotations, flowcharts, and simple digital art.",
  ],
  advantages: [
    "Privacy-first: All processing runs in your browser. Your files never leave your device.",
    "No installation: Works in any modern browser. No plugins or downloads.",
    "Rich tools: Brush, eraser, shapes, image insertion, undo/redo.",
    "No signup: Use immediately. Free with no limits.",
  ],
  useCases: [
    "Diagrams: Draw flowcharts, wireframes, or simple diagrams.",
    "Sketches: Quick doodles, brainstorming, or concept sketches.",
    "Annotations: Add drawings to screenshots or notes.",
    "Education: Simple illustrations for teaching or presentations.",
  ],
};

export default function PaintBoardPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="image" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">Paint Board</h1>
            <p className="mt-1 text-sm text-slate-500">image</p>
          </div>
        </div>
      </div>

      <PaintBoard />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">1. How to Use</h3>
            <ol className="list-decimal space-y-2 pl-5">
              {PAINT_BOARD_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">2. How It Works</h3>
            <div className="space-y-2">
              {PAINT_BOARD_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">3. About Paint Board</h3>
            <div className="space-y-2">
              {PAINT_BOARD_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">4. Advantages</h3>
            <ul className="list-disc space-y-2 pl-5">
              {PAINT_BOARD_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">5. Real-World Use Cases</h3>
            <ul className="list-disc space-y-2 pl-5">
              {PAINT_BOARD_GUIDE.useCases.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Link
        href="/tools/image"
        className="mt-8 inline-block text-slate-400 underline transition-colors hover:text-slate-200"
      >
        ← Back to Image Tools
      </Link>
    </div>
  );
}
