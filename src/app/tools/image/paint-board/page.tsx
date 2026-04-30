import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import PaintBoard from "./PaintBoard";

export const metadata: Metadata = createMetadata({
  title: "Free Online Paint Board",
  description:
    "Free online paint board for drawing, sketching, and annotation in browser with brush, shapes, and undo/redo.",
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
    "Pick a tool (brush, eraser, shape, or image insert).",
    "Set color and brush size, then draw directly on canvas.",
    "Use undo/redo while iterating on your sketch.",
    "Insert reference images when needed.",
    "Export the result as PNG.",
  ],
  howItWorks: [
    "The paint board renders actions on an HTML5 canvas.",
    "Undo and redo are based on local snapshot history.",
    "All drawing and export steps run in your browser.",
  ],
  about: [
    "Use this board for fast sketches, annotations, and simple diagrams.",
    "It is designed for quick visual notes rather than complex multi-layer art projects.",
  ],
  advantages: [
    "Browser-local drawing workflow.",
    "Quick tool set for everyday sketching.",
    "Undo/redo and image insertion.",
    "No signup or installation.",
  ],
  useCases: [
    "Draw quick flowcharts or UI wireframes.",
    "Sketch ideas during planning calls.",
    "Annotate screenshots for feedback.",
    "Create simple teaching visuals.",
  ],
};

const FAQ_ITEMS = [
  {
    question: "How can I draw, sketch, or annotate with this paint board?",
    answer:
      "Choose a drawing tool, adjust color and size, and work directly on canvas before exporting PNG.",
  },
  {
    question: "How does this canvas-based paint board run in the browser?",
    answer:
      "It uses browser canvas rendering and local history snapshots for drawing and undo/redo.",
  },
  {
    question: "What can I create with this online paint board, and what are its limits?",
    answer:
      "It is great for quick sketches and annotations, but not aimed at advanced layered illustration workflows.",
  },
  {
    question: "When is a simple paint tool enough for mockups or whiteboard ideas?",
    answer:
      "It is enough when you need fast visual communication, lightweight diagrams, and quick concept drafts.",
  },
];

export default function PaintBoardPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="image" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">Paint Board</h1>
            <p className="mt-1 text-sm text-slate-500">
              Online paint board for sketches and annotations
            </p>
          </div>
        </div>
      </div>

      <PaintBoard />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-3 text-xl font-semibold text-slate-200">
          Paint Board Guide
        </h2>
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              1. How can I draw, sketch, or annotate with this paint board?
            </h3>
            <ol className="list-decimal space-y-2 pl-5">
              {PAINT_BOARD_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              2. How does this canvas-based paint board run in the browser?
            </h3>
            <div className="space-y-2">
              {PAINT_BOARD_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              3. What can I create with this online paint board, and what are its limits?
            </h3>
            <div className="space-y-2">
              {PAINT_BOARD_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              4. Why use a browser sketchpad for quick diagrams or notes?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {PAINT_BOARD_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              5. When is a simple paint tool enough for mockups or whiteboard ideas?
            </h3>
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
