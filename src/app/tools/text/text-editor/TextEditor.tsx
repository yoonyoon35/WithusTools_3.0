"use client";

import { useState, useEffect, useCallback, useRef } from "react";

interface Document {
  id: number;
  title: string;
  content: string;
  date: string;
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  const yy = date.getFullYear().toString().slice(-2);
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${yy}.${mm}.${dd} ${hours}:${minutes}`;
}

export default function TextEditor() {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [toast, setToast] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const stored = localStorage.getItem("documents");
    setDocuments(stored ? JSON.parse(stored) : []);
  }, []);

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  }, []);

  const saveDocument = useCallback(() => {
    const t = title.trim();
    const c = content.trim();
    if (!t || !c) {
      showToast("Please enter both title and content");
      return;
    }

    const doc: Document = {
      id: Date.now(),
      title: t,
      content: c,
      date: new Date().toISOString(),
    };
    const next = [...documents, doc];
    setDocuments(next);
    localStorage.setItem("documents", JSON.stringify(next));
    setTitle("");
    setContent("");
    showToast("Note saved!");
  }, [title, content, documents, showToast]);

  const loadNote = useCallback((doc: Document) => {
    setTitle(doc.title);
    setContent(doc.content);
  }, []);

  const deleteNote = useCallback(
    (id: number) => {
      if (!confirm("Are you sure you want to delete this note?")) return;
      const next = documents.filter((d) => d.id !== id);
      setDocuments(next);
      localStorage.setItem("documents", JSON.stringify(next));
      showToast("Note deleted");
    },
    [documents, showToast]
  );

  const loadFromFile = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result;
        if (typeof result === "string") {
          setContent(result);
          if (!title.trim()) {
            setTitle(file.name.replace(/\.txt$/i, ""));
          }
          showToast(`Loaded: ${file.name}`);
        } else {
          showToast("Failed to read file (binary)");
        }
      };
      reader.onerror = () => showToast("Failed to read file");
      reader.readAsText(file, "UTF-8");
      e.target.value = "";
    },
    [title, showToast]
  );

  const copyContent = useCallback(() => {
    if (content) {
      navigator.clipboard
        .writeText(content)
        .then(() => showToast("Text copied to clipboard!"))
        .catch(() => showToast("Failed to copy text."));
    } else {
      showToast("No content to copy");
    }
  }, [content, showToast]);

  const clearDocument = useCallback(() => {
    setTitle("");
    setContent("");
    showToast("Cleared");
  }, [showToast]);

  const exportToTxt = useCallback(() => {
    const t = title.trim() || "document";
    const c = content.trim();
    const blob = new Blob([c], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${t}.txt`;
    a.click();
    URL.revokeObjectURL(url);
    showToast("Exported to TXT!");
  }, [title, content, showToast]);

  const exportToWord = useCallback(() => {
    const t = title.trim() || "document";
    const c = content.trim();
    const blob = new Blob([c], { type: "application/msword" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${t}.doc`;
    a.click();
    URL.revokeObjectURL(url);
    showToast("Exported to Word!");
  }, [title, content, showToast]);

  const exportToPDF = useCallback(async () => {
    const t = title.trim() || "document";
    const c = content.trim();

    const element = document.createElement("div");
    element.innerHTML = c.replace(/\n/g, "<br>");
    element.style.padding = "20px";
    element.style.lineHeight = "1.5";
    element.style.fontFamily = "Arial, sans-serif";
    element.style.whiteSpace = "pre-wrap";
    element.style.color = "#1e293b";
    element.style.backgroundColor = "white";

    try {
      const html2pdf = (await import("html2pdf.js")).default;
      const opt = {
        margin: [10, 10] as [number, number],
        filename: `${t}.pdf`,
        html2canvas: {
          scale: 2,
          scrollY: 0,
          windowWidth: document.documentElement.offsetWidth,
          windowHeight: document.documentElement.offsetHeight,
        },
        jsPDF: {
          unit: "mm",
          format: "a4",
          orientation: "portrait" as const,
          compress: true,
        },
        pagebreak: { mode: "css" as const, before: ".page-break", avoid: ["img", "table"] },
      };
      document.body.appendChild(element);
      await html2pdf().set(opt).from(element).save();
      document.body.removeChild(element);
      showToast("Exported to PDF!");
    } catch (err) {
      document.body.contains(element) && document.body.removeChild(element);
      showToast("Failed to export PDF");
    }
  }, [title, content, showToast]);

  const charCount = content.length;
  const wordCount = content.trim() ? content.trim().split(/\s+/).length : 0;

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-border bg-surface p-6">
        <h2 className="mb-4 text-lg font-semibold text-slate-100">Document</h2>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter title..."
          className="mb-4 w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-lg text-slate-100 placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Start writing..."
          className="scrollbar-thin mb-4 max-h-[50vh] min-h-[300px] w-full resize-none overflow-y-auto rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 pr-2 font-mono text-sm text-slate-100 placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          rows={12}
        />
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <input
            ref={fileInputRef}
            type="file"
            accept=".txt,text/plain"
            className="hidden"
            onChange={loadFromFile}
          />
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm text-slate-300 transition-colors hover:border-slate-600 hover:bg-slate-700 hover:text-slate-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" />
            </svg>
            Load TXT
          </button>
        </div>
        <div className="mb-4 flex flex-wrap items-center justify-between gap-4 rounded-lg bg-slate-950/80 px-4 py-2 text-sm">
          <span className="text-slate-400">
            Characters: <span className="font-medium text-slate-200">{charCount}</span>
          </span>
          <span className="text-slate-400">
            Words: <span className="font-medium text-slate-200">{wordCount}</span>
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={exportToWord}
              className="flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2 text-sm text-slate-300 transition-colors hover:border-slate-600 hover:text-slate-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <path d="M16 13H8" />
                <path d="M16 17H8" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
              Word
            </button>
            <button
              type="button"
              onClick={exportToPDF}
              className="flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2 text-sm text-slate-300 transition-colors hover:border-slate-600 hover:text-slate-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <path d="M16 13H8" />
                <path d="M16 17H8" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
              PDF
            </button>
            <button
              type="button"
              onClick={exportToTxt}
              className="flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2 text-sm text-slate-300 transition-colors hover:border-slate-600 hover:text-slate-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <path d="M16 13H8" />
                <path d="M16 17H8" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
              TXT
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={copyContent}
              className="flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2 text-sm text-slate-300 transition-colors hover:border-slate-600 hover:text-slate-100"
            >
              Copy
            </button>
            <button
              type="button"
              onClick={clearDocument}
              className="rounded-lg border border-border bg-surface px-4 py-2 text-sm text-slate-300 transition-colors hover:border-slate-600 hover:text-slate-100"
            >
              Clear
            </button>
            <button
              type="button"
              onClick={saveDocument}
              className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white transition-colors hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-surface p-6">
        <h2 className="mb-4 text-lg font-semibold text-slate-100">Saved Notes</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="group relative cursor-pointer rounded-lg border border-border bg-surface p-4 transition-all hover:border-slate-600 hover:shadow-lg"
              onClick={() => loadNote(doc)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  loadNote(doc);
                }
              }}
              role="button"
              tabIndex={0}
            >
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteNote(doc.id);
                }}
                className="absolute right-2 top-2 rounded p-1.5 opacity-0 text-red-400 transition-opacity hover:bg-red-400/20 group-hover:opacity-100"
                aria-label="Delete note"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="3 6 5 6 21 6" />
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                  <line x1="10" y1="11" x2="10" y2="17" />
                  <line x1="14" y1="11" x2="14" y2="17" />
                </svg>
              </button>
              <div className="mb-2 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-slate-400">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <path d="M16 13H8" />
                  <path d="M16 17H8" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>
              <div className="truncate text-sm font-medium text-slate-200">
                {doc.title}
              </div>
              <div className="text-xs text-slate-500">{formatDate(doc.date)}</div>
            </div>
          ))}
        </div>
      </div>

      {toast && (
        <div
          className="fixed right-4 top-4 z-50 rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white"
          role="alert"
        >
          {toast}
        </div>
      )}
    </div>
  );
}
