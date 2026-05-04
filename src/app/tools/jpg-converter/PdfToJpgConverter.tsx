"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import Link from "next/link";

interface PDFDocumentProxy {
  numPages: number;
  getPage: (n: number) => Promise<PDFPageProxy>;
}

interface PDFPageProxy {
  getViewport: (opts: { scale: number }) => { width: number; height: number };
  render: (opts: {
    canvasContext: CanvasRenderingContext2D;
    viewport: unknown;
  }) => { promise: Promise<void> };
}

const PDFJS_VERSION = "3.11.174";

export default function PdfToJpgConverter() {
  const [files, setFiles] = useState<File[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [pageCanvases, setPageCanvases] = useState<HTMLCanvasElement[]>([]);
  const [pagePreviews, setPagePreviews] = useState<string[]>([]);
  const [convertedImages, setConvertedImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadProgress, setLoadProgress] = useState<{ percent: number; phase: "loading" | "rendering"; page?: number; totalPages?: number } | null>(null);
  const [message, setMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);
  const [quality, setQuality] = useState(95);
  const [pdfReady, setPdfReady] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load pdf.js from CDN - manual script inject for reliable global assignment
  useEffect(() => {
    if (typeof window === "undefined") return;
    if ((window as Window & { pdfjsLib?: unknown }).pdfjsLib) {
      setPdfReady(true);
      return;
    }
    const script = document.createElement("script");
    script.src = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${PDFJS_VERSION}/pdf.min.js`;
    script.async = true;
    script.onload = () => {
      const lib = (window as Window & { pdfjsLib?: { GlobalWorkerOptions?: { workerSrc?: string } } }).pdfjsLib;
      if (lib) {
        try {
          if (lib.GlobalWorkerOptions) {
            lib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${PDFJS_VERSION}/pdf.worker.min.js`;
          }
        } catch {
          // Some builds have getter-only GlobalWorkerOptions, ignore
        }
        setPdfReady(true);
      } else {
        setTimeout(() => {
          const lib2 = (window as Window & { pdfjsLib?: unknown }).pdfjsLib;
          if (lib2) setPdfReady(true);
        }, 100);
      }
    };
    document.head.appendChild(script);
    return () => {
      script.remove();
    };
  }, []);

  const showMessage = useCallback((text: string, type: "success" | "error" = "success") => {
    setMessage({ text, type });
    setTimeout(() => setMessage(null), 3000);
  }, []);

  const addFiles = useCallback((fileList: FileList | null) => {
    if (!fileList) return;
    const arr = Array.from(fileList).filter(
      (f) => f.type === "application/pdf"
    );
    if (arr.length === 0) {
      showMessage("Please select PDF files only", "error");
      return;
    }
    setFiles((prev) => [...prev.slice(0, 10 - arr.length), ...arr].slice(0, 10));
    setPageCanvases([]);
    setConvertedImages([]);
    setCurrentIndex(0);
  }, [showMessage]);

  const loadPdf = useCallback(
    async (file: File) => {
      const pdfjs = typeof window !== "undefined" ? window.pdfjsLib : undefined;
      if (!pdfjs) {
        showMessage("PDF library is loading. Please wait.", "error");
        return;
      }
      setLoading(true);
      setLoadProgress({ percent: 0, phase: "loading" });
      try {
        const ab = await file.arrayBuffer();
        const loadingTask = pdfjs.getDocument({ data: ab, length: ab.byteLength });
        loadingTask.onProgress = (p: { loaded: number; total: number }) => {
          const percent = p.total > 0 ? Math.round((p.loaded / p.total) * 100) : 0;
          setLoadProgress((prev) => prev ? { ...prev, percent: Math.min(percent, 99) } : { percent: 0, phase: "loading" });
        };
        const pdf = await loadingTask.promise;

        const numPages = pdf.numPages;
        setLoadProgress({ percent: 10, phase: "rendering", page: 0, totalPages: numPages });

        const canvases: HTMLCanvasElement[] = [];
        for (let i = 1; i <= numPages; i++) {
          setLoadProgress({
            percent: 10 + Math.round((i / numPages) * 90),
            phase: "rendering",
            page: i,
            totalPages: numPages,
          });
          const page = await pdf.getPage(i);
          const scale = 2;
          const viewport = page.getViewport({ scale });
          const canvas = document.createElement("canvas");
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          const ctx = canvas.getContext("2d")!;
          await page.render({
            canvasContext: ctx,
            viewport,
          }).promise;
          canvases.push(canvas);
        }

        setLoadProgress({ percent: 100, phase: "rendering", page: numPages, totalPages: numPages });
        setPageCanvases(canvases);
        setPagePreviews(canvases.map((c) => c.toDataURL("image/jpeg", 0.7)));
      } catch (err) {
        showMessage(err instanceof Error ? err.message : "Failed to load PDF", "error");
      } finally {
        setLoading(false);
        setLoadProgress(null);
      }
    },
    [showMessage]
  );

  useEffect(() => {
    if (pdfReady && files.length > 0 && currentIndex < files.length) {
      loadPdf(files[currentIndex]);
    } else if (files.length === 0) {
      setPageCanvases([]);
      setPagePreviews([]);
    }
  }, [files, currentIndex, loadPdf, pdfReady]);

  const convertToJpg = useCallback(() => {
    const images: string[] = [];
    pageCanvases.forEach((canvas) => {
      images.push(
        canvas.toDataURL("image/jpeg", quality / 100)
      );
    });
    setConvertedImages(images);
  }, [pageCanvases, quality]);

  const downloadImage = useCallback((dataUrl: string, filename: string) => {
    const a = document.createElement("a");
    a.href = dataUrl;
    a.download = filename;
    a.click();
  }, []);

  const downloadAllAsZip = useCallback(async () => {
    if (convertedImages.length === 0) return;
    const JSZip = (await import("jszip")).default;
    const zip = new JSZip();
    const baseName = files[currentIndex]?.name.replace(".pdf", "") ?? "document";
    convertedImages.forEach((dataUrl, i) => {
      const base64 = dataUrl.split(",")[1];
      zip.file(`${baseName}-page-${i + 1}.jpg`, base64!, { base64: true });
    });
    const blob = await zip.generateAsync({ type: "blob" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `${baseName}.zip`;
    a.click();
    URL.revokeObjectURL(a.href);
  }, [convertedImages, files, currentIndex]);

  const reset = useCallback(() => {
    setFiles([]);
    setCurrentIndex(0);
    setPageCanvases([]);
    setConvertedImages([]);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }, []);

  const currentFile = files[currentIndex];

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 px-4 py-3">
        <p className="flex items-center gap-2 font-semibold text-amber-400">
          All conversion runs in your browser. Files never leave your device.
        </p>
      </div>

      {files.length === 0 ? (
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            addFiles(e.dataTransfer.files);
          }}
          onClick={() => fileInputRef.current?.click()}
          className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-border bg-surface p-8 transition-colors hover:border-slate-600"
        >
          <span className="mb-2 text-4xl text-slate-500">📁</span>
          <p className="text-slate-400">
            Drop PDF files here or click to upload
          </p>
          <p className="mt-1 text-sm text-slate-500">Up to 10 files</p>
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf"
            multiple
            className="hidden"
            onChange={(e) => addFiles(e.target.files)}
          />
        </div>
      ) : (
        <>
          <div className="rounded-xl border border-border bg-surface p-6">
            <h2 className="mb-4 text-lg font-semibold text-slate-100">Uploaded PDFs</h2>
            <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="text-slate-400">
                  File {currentIndex + 1} of {files.length}: {currentFile?.name}
                </span>
              </div>
            <div className="flex flex-wrap items-center gap-4">
                  <div>
                    <label className="mr-2 text-sm text-slate-400">Quality</label>
                    <input
                      type="range"
                      min={1}
                      max={100}
                      value={quality}
                      onChange={(e) => setQuality(Number(e.target.value))}
                      className="align-middle"
                    />
                    <span className="ml-2 text-sm text-slate-300">{quality}%</span>
                  </div>
                  <button
                    onClick={convertToJpg}
                    disabled={loading || pageCanvases.length === 0}
                    className="rounded-lg bg-blue-600 px-6 py-2 font-medium text-white hover:bg-blue-500 disabled:opacity-50"
                  >
                    {loading ? "Loading..." : "Convert to JPG"}
                  </button>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
                      disabled={currentIndex === 0}
                      className="rounded border border-border px-4 py-2 text-slate-300 disabled:opacity-50"
                    >
                      ← Previous
                    </button>
                    <button
                      onClick={() =>
                        setCurrentIndex((i) => Math.min(files.length - 1, i + 1))
                      }
                      disabled={currentIndex === files.length - 1}
                      className="rounded border border-border px-4 py-2 text-slate-300 disabled:opacity-50"
                    >
                      Next →
                    </button>
                  </div>
                  <button
                    onClick={reset}
                    className="rounded border border-border px-4 py-2 text-slate-300"
                  >
                    Reset
                  </button>
                </div>
              </div>
              {!pdfReady ? (
                <p className="py-8 text-center text-slate-400">Loading PDF library...</p>
              ) : loading ? (
                <div className="py-8">
                  <div className="mb-3 flex items-center justify-between text-sm text-slate-400">
                    <span>
                      {loadProgress?.phase === "loading"
                        ? "Loading document..."
                        : loadProgress?.phase === "rendering"
                          ? `Rendering page ${loadProgress.page ?? 0} of ${loadProgress.totalPages ?? "?"}`
                          : "Processing..."}
                    </span>
                    <span>{loadProgress?.percent ?? 0}%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-slate-700">
                    <div
                      className="h-full rounded-full bg-blue-500 transition-all duration-300"
                      style={{ width: `${loadProgress?.percent ?? 0}%` }}
                    />
                  </div>
                </div>
              ) : (
                <div
                  className={
                    pagePreviews.length > 10
                      ? "scrollbar-thin grid max-h-[420px] grid-cols-2 gap-4 overflow-y-auto pr-2 sm:grid-cols-3 md:grid-cols-4"
                      : "grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4"
                  }
                >
                  {pagePreviews.map((src, i) => (
                    <div key={i} className="rounded-lg border border-border p-2">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={src}
                        alt={`Page ${i + 1}`}
                        className="max-h-48 w-full rounded object-contain"
                      />
                      <p className="mt-2 text-center text-sm text-slate-500">
                        Page {i + 1}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

          {convertedImages.length > 0 && (
            <div className="mt-6 rounded-xl border border-border bg-surface p-6">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-semibold text-slate-100">
                  Converted Files: {currentFile?.name}
                </h3>
                <div className="flex gap-2">
                  <button
                    onClick={downloadAllAsZip}
                    className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500"
                  >
                    Download as ZIP
                  </button>
                  <button
                    onClick={() => {
                      setConvertedImages([]);
                      if (currentIndex < files.length - 1) {
                        setCurrentIndex(currentIndex + 1);
                        setPageCanvases([]);
                        setPagePreviews([]);
                      } else {
                        reset();
                      }
                    }}
                    className="rounded border border-border px-4 py-2 text-slate-300"
                  >
                    {currentIndex < files.length - 1 ? "Next File" : "Done & Reset"}
                  </button>
                </div>
              </div>
              <div
                className={
                  convertedImages.length > 10
                    ? "scrollbar-thin grid max-h-[420px] grid-cols-2 gap-4 overflow-y-auto pr-2 sm:grid-cols-3 md:grid-cols-4"
                    : "grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4"
                }
              >
                {convertedImages.map((dataUrl, i) => (
                  <div key={i} className="rounded-lg border border-border bg-slate-950/50 p-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={dataUrl}
                      alt={`Page ${i + 1}`}
                      className="mb-2 aspect-square w-full rounded object-cover"
                    />
                    <p className="text-xs text-slate-400">Page {i + 1}</p>
                    <button
                      onClick={() =>
                        downloadImage(
                          dataUrl,
                          `${currentFile?.name.replace(".pdf", "")}-page-${i + 1}.jpg`
                        )
                      }
                      className="mt-2 w-full rounded bg-slate-700 px-2 py-1.5 text-xs text-slate-300 hover:bg-slate-600"
                    >
                      Download
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
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
        <Link
          href="/tools/jpg-converter"
          className="text-slate-400 underline hover:text-slate-200"
        >
          ← Back to JPG Converter
        </Link>
        <Link
          href="/"
          className="text-slate-400 underline hover:text-slate-200"
        >
          ← Back to home
        </Link>
      </div>
    </div>
  );
}
