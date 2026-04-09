"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { PDFDocument } from "pdf-lib";

const ACCEPT_PDF = "application/pdf,.pdf";

function isPdfFile(file: File): boolean {
  if (/^application\/pdf$/i.test(file.type)) return true;
  return /\.pdf$/i.test(file.name);
}

export default function MergePdfTool({
  backHref = "/tools/pdf",
  backLabel = "Back to PDF Tools",
}: {
  backHref?: string;
  backLabel?: string;
}) {
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [message, setMessage] = useState<{
    text: string;
    type: "success" | "error";
  } | null>(null);
  const [progress, setProgress] = useState<{ current: number; total: number } | null>(
    null
  );
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const totalBytes = useMemo(
    () => files.reduce((sum, f) => sum + (f.size || 0), 0),
    [files]
  );

  useEffect(() => {
    return () => {
      if (pdfUrl) URL.revokeObjectURL(pdfUrl);
    };
  }, [pdfUrl]);

  useEffect(() => {
    if (files.length === 0) {
      setPreviewUrls([]);
      return;
    }
    const urls = files.map((file) => URL.createObjectURL(file));
    setPreviewUrls(urls);
    return () => {
      urls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [files]);

  const showMessage = useCallback(
    (text: string, type: "success" | "error" = "success") => {
      setMessage({ text, type });
      setTimeout(() => setMessage(null), 3000);
    },
    []
  );

  const addFiles = useCallback(
    (fileList: FileList | null) => {
      if (!fileList) return;
      const arr = Array.from(fileList).filter(isPdfFile);
      if (arr.length === 0) {
        showMessage("Please add at least one PDF file.", "error");
        return;
      }
      setFiles((prev) => [...prev, ...arr]);
      setPdfUrl(null);
    },
    [showMessage]
  );

  const removeFile = useCallback((index: number) => {
    setFiles((prev) => {
      const next = prev.filter((_, i) => i !== index);
      if (next.length === 0) setPdfUrl(null);
      return next;
    });
  }, []);

  const moveFile = useCallback((from: number, to: number) => {
    setFiles((prev) => {
      if (to < 0 || to >= prev.length) return prev;
      const next = [...prev];
      const [item] = next.splice(from, 1);
      next.splice(to, 0, item);
      return next;
    });
    setPdfUrl(null);
  }, []);

  const clearAll = useCallback(() => {
    setFiles([]);
    setPdfUrl(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }, []);

  const merge = useCallback(async () => {
    if (files.length < 2) {
      showMessage("Please add at least two PDF files to merge.", "error");
      return;
    }
    setLoading(true);
    setPdfUrl(null);
    setProgress({ current: 0, total: files.length });
    try {
      const merged = await PDFDocument.create();

      for (let i = 0; i < files.length; i++) {
        setProgress({ current: i, total: files.length });
        const srcBytes = await files[i].arrayBuffer();
        const src = await PDFDocument.load(srcBytes, { ignoreEncryption: false });
        const pages = await merged.copyPages(src, src.getPageIndices());
        pages.forEach((p) => merged.addPage(p));
      }

      setProgress({ current: files.length, total: files.length });
      const mergedBytes = await merged.save();
      const blob = new Blob([new Uint8Array(mergedBytes)], {
        type: "application/pdf",
      });
      setPdfUrl(URL.createObjectURL(blob));
      showMessage("PDFs merged successfully.");
    } catch (err) {
      showMessage(
        err instanceof Error ? err.message : "Failed to merge PDFs.",
        "error"
      );
    } finally {
      setLoading(false);
      setProgress(null);
    }
  }, [files, showMessage]);

  const downloadPdf = useCallback(() => {
    if (!pdfUrl) return;
    const a = document.createElement("a");
    a.href = pdfUrl;
    a.download = "merged.pdf";
    a.click();
  }, [pdfUrl]);

  const reset = useCallback(() => {
    if (pdfUrl) URL.revokeObjectURL(pdfUrl);
    clearAll();
  }, [pdfUrl, clearAll]);

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 px-4 py-3">
        <p className="flex items-center gap-2 font-semibold text-amber-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          All processing runs in your browser. Files never leave your device.
        </p>
      </div>

      <div className="rounded-xl border border-border bg-surface p-6">
        <h2 className="mb-4 text-lg font-semibold text-slate-100">
          Upload Files
        </h2>
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            addFiles(e.dataTransfer.files);
          }}
          onClick={() => fileInputRef.current?.click()}
          className="flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-border bg-slate-950/50 px-6 py-8 transition-colors hover:border-slate-600"
        >
          <span className="mb-2 text-4xl text-slate-500">📁</span>
          <p className="mb-2 text-sm text-slate-400">
            Drop PDF files here or click to upload
          </p>
          <p className="text-xs text-slate-500">
            Supports multiple files
          </p>
          <input
            ref={fileInputRef}
            type="file"
            accept={ACCEPT_PDF}
            multiple
            className="hidden"
            onChange={(e) => addFiles(e.target.files)}
          />
        </div>

        {files.length > 0 && (
          <div className="mt-4 space-y-4">
            <div className="mb-4">
              <h3 className="mb-3 text-sm font-medium text-slate-400">
                Uploaded files ({files.length})
              </h3>
              <div
                className={
                  files.length > 4
                    ? "scrollbar-thin max-h-[420px] space-y-2 overflow-y-auto pr-2"
                    : "space-y-2"
                }
              >
                {files.map((file, i) => (
                  <div
                    key={`${file.name}-${file.size}-${i}`}
                    className="flex flex-wrap items-start justify-between gap-3 rounded-lg border border-border bg-slate-950/50 px-3 py-2"
                  >
                    <div className="flex min-w-0 items-start gap-3">
                      <div className="h-20 w-16 shrink-0 overflow-hidden rounded border border-border bg-slate-900">
                        {previewUrls[i] ? (
                          <iframe
                            src={`${previewUrls[i]}#page=1&view=FitH`}
                            title={`Preview of ${file.name}`}
                            className="h-full w-full border-0"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center text-xl text-slate-500">
                            📄
                          </div>
                        )}
                      </div>
                      <div className="min-w-0">
                        <p
                          className="truncate text-sm font-medium text-slate-200"
                          title={file.name}
                        >
                          {i + 1}. {file.name}
                        </p>
                        <p className="text-xs text-slate-500">
                          {(file.size / (1024 * 1024)).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <button
                        type="button"
                        onClick={() => moveFile(i, i - 1)}
                        disabled={i === 0 || loading}
                        className="rounded border border-border px-2.5 py-1 text-xs text-slate-300 hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        Move up
                      </button>
                      <button
                        type="button"
                        onClick={() => moveFile(i, i + 1)}
                        disabled={i === files.length - 1 || loading}
                        className="rounded border border-border px-2.5 py-1 text-xs text-slate-300 hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        Move down
                      </button>
                      <button
                        type="button"
                        onClick={() => removeFile(i)}
                        disabled={loading}
                        className="rounded bg-red-600/90 px-2.5 py-1 text-xs text-white disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={merge}
                disabled={loading}
                className="rounded-lg bg-blue-600 px-6 py-2.5 font-medium text-white transition-colors hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? "Merging..." : "Merge PDFs"}
              </button>
              <button
                onClick={clearAll}
                disabled={loading}
                className="rounded-lg border border-border px-6 py-2.5 text-slate-300 hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Reset
              </button>
              <button
                onClick={() => fileInputRef.current?.click()}
                disabled={loading}
                className="rounded-lg border border-border px-6 py-2.5 text-slate-300 hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Add
              </button>
            </div>

            {loading && progress && (
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between text-sm text-slate-400">
                  <span>
                    Merging... {progress.current} of {progress.total}
                  </span>
                  <span>
                    {Math.round((progress.current / progress.total) * 100)}%
                  </span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-slate-700">
                  <div
                    className="h-full rounded-full bg-blue-500 transition-all duration-300"
                    style={{
                      width: `${(progress.current / progress.total) * 100}%`,
                    }}
                  />
                </div>
              </div>
            )}

            {!loading && (
              <p className="mt-4 text-sm text-slate-500">
                {files.length} file(s) selected ·{" "}
                {(totalBytes / (1024 * 1024)).toFixed(2)} MB total
              </p>
            )}
          </div>
        )}
      </div>

      {pdfUrl && (
        <div className="rounded-xl border border-border bg-surface p-6">
          <p className="mb-3 font-semibold text-slate-100">
            PDFs merged successfully
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={downloadPdf}
              className="rounded-lg bg-blue-600 px-6 py-2 font-medium text-white hover:bg-blue-500"
            >
              Download PDF
            </button>
            <button
              onClick={reset}
              className="rounded border border-border px-4 py-2 text-slate-300 hover:bg-slate-800"
            >
              Reset
            </button>
          </div>
        </div>
      )}

      {message && (
        <div
          className={`rounded-xl px-4 py-3 ${
            message.type === "error"
              ? "border border-red-500/30 bg-red-500/10 text-red-400"
              : "border border-green-500/30 bg-green-500/10 text-green-400"
          }`}
        >
          {message.text}
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        <Link href={backHref} className="text-slate-400 underline hover:text-slate-200">
          ← {backLabel}
        </Link>
        <Link href="/" className="text-slate-400 underline hover:text-slate-200">
          ← Back to home
        </Link>
      </div>
    </div>
  );
}

