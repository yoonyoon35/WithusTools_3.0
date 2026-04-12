import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import TextEditor from "./TextEditor";

export const metadata: Metadata = createMetadata({
  title: "Text Editor | Simple Note Taking",
  description:
    "Create and save notes with local storage. Export to Word or PDF. Simple online text editor for note taking and document creation. Free tool.",
  path: "/tools/text/text-editor",
  keywords: [
    "text editor",
    "note taking",
    "online notes",
    "simple editor",
    "text to pdf",
    "text to word",
    "withustools",
  ],
});

const TEXT_EDITOR_GUIDE = {
  usage: [
    "Enter a title and content in the input fields. Click Save to add the note to your saved list.",
    "Click any saved note to load it for editing. Use the trash icon (on hover) to delete a note.",
    "Use Word or PDF buttons to export the current content. Data is stored in your browser's local storage.",
  ],
  howItWorks: [
    "Notes are saved in localStorage, so they persist across browser sessions on the same device.",
    "Word export creates a .doc file from the plain text. PDF export uses html2pdf to render content and generate a downloadable PDF.",
    "All processing runs in your browser. No data is sent to any server.",
  ],
  about: [
    "Free online text editor for simple note taking and document creation. Create multiple notes, save them locally, and export to Word or PDF.",
  ],
  advantages: [
    "Local storage: Notes persist without signup or cloud sync.",
    "Export: Download as Word (.doc) or PDF.",
    "Multiple notes: Create and manage multiple documents.",
    "No signup: Use immediately in any browser.",
  ],
  useCases: [
    "Note-taking: Quick notes for classes, meetings, or ideas.",
    "Draft writing: Create drafts before copying to other apps.",
    "Document creation: Write and export to Word or PDF.",
    "Personal memos: Keep reminders and to-do lists locally.",
  ],
};

export default function TextEditorPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="text" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">Text Editor</h1>
            <p className="mt-1 text-sm text-slate-500">text</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        Write and manage your text content freely. Save notes locally and export
        to Word or PDF. All processing runs in your browser.
      </p>

      <TextEditor />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              1. How can I write, save, and export text from this editor on the page?
            </h3>
            <ol className="list-decimal space-y-2 pl-5">
              {TEXT_EDITOR_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              2. How does this text editor keep content local in my browser?
            </h3>
            <div className="space-y-2">
              {TEXT_EDITOR_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              3. What features does this online text editor include, and what is it not for?
            </h3>
            <div className="space-y-2">
              {TEXT_EDITOR_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              4. Why use a lightweight browser text editor for notes or quick edits?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {TEXT_EDITOR_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              5. When is a simple web editor enough instead of Word or a full IDE?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {TEXT_EDITOR_GUIDE.useCases.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Link
        href="/tools/text"
        className="mt-8 inline-block text-slate-400 underline transition-colors hover:text-slate-200"
      >
        ← Back to Text Tools
      </Link>
    </div>
  );
}
