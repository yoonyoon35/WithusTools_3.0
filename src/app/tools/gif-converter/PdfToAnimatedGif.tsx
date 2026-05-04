"use client";

import type { DragEvent, KeyboardEvent } from "react";
import { useState, useCallback, useRef, useEffect } from "react";
import NumberInputWithStepper from "@/components/NumberInputWithStepper";

const PDFJS_VERSION = "3.11.174";
const MAX_PAGES = 60;
const MIN_FRAMES = 2;

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

function drawContainCanvas(
  ctx: CanvasRenderingContext2D,
  src: HTMLCanvasElement,
  cw: number,
  ch: number,
  bg: string
): void {
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, cw, ch);
  const iw = src.width;
  const ih = src.height;
  if (!iw || !ih) return;
  const scale = Math.min(cw / iw, ch / ih);
  const dw = Math.round(iw * scale);
  const dh = Math.round(ih * scale);
  const dx = Math.round((cw - dw) / 2);
  const dy = Math.round((ch - dh) / 2);
  ctx.drawImage(src, dx, dy, dw, dh);
}

export default function PdfToAnimatedGif() {
  const [pdfReady, setPdfReady] = useState(false);
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [pageCanvases, setPageCanvases] = useState<HTMLCanvasElement[]>([]);
  const [pagePreviews, setPagePreviews] = useState<string[]>([]);
  const [loadingPdf, setLoadingPdf] = useState(false);
  const [loadPercent, setLoadPercent] = useState(0);

  const [frameDelayMs, setFrameDelayMs] = useState(300);
  const [quality, setQuality] = useState(85);
  const [outWidth, setOutWidth] = useState(480);
  const [outHeight, setOutHeight] = useState(480);
  const [bgColor, setBgColor] = useState("#ffffff");
  const [loopForever, setLoopForever] = useState(true);
  const [encoding, setEncoding] = useState(false);
  const [encodeProgress, setEncodeProgress] = useState(0);
  const [resultBlob, setResultBlob] = useState<Blob | null>(null);
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const [message, setMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);

  const [uploadDropActive, setUploadDropActive] = useState(false);
  const uploadDragDepth = useRef(0);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const resultUrlRef = useRef(resultUrl);
  resultUrlRef.current = resultUrl;

  useEffect(() => {
    return () => {
      if (resultUrlRef.current) URL.revokeObjectURL(resultUrlRef.current);
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.pdfjsLib) {
      setPdfReady(true);
      return;
    }
    const script = document.createElement("script");
    script.src = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${PDFJS_VERSION}/pdf.min.js`;
    script.async = true;
    script.onload = () => {
      const lib = window.pdfjsLib;
      if (lib?.GlobalWorkerOptions) {
        try {
          lib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${PDFJS_VERSION}/pdf.worker.min.js`;
        } catch {
          /* ignore */
        }
      }
      if (lib) setPdfReady(true);
    };
    document.head.appendChild(script);
    return () => script.remove();
  }, []);

  const showMessage = useCallback((text: string, type: "success" | "error" = "success") => {
    setMessage({ text, type });
    setTimeout(() => setMessage(null), 4000);
  }, []);

  const loadPdfPages = useCallback(
    async (file: File) => {
      const pdfjs = window.pdfjsLib;
      if (!pdfjs) {
        showMessage("PDF library is loading. Please wait.", "error");
        return;
      }
      setLoadingPdf(true);
      setLoadPercent(0);
      setPageCanvases([]);
      setPagePreviews([]);
      setResultBlob(null);
      setResultUrl((prev) => {
        if (prev) URL.revokeObjectURL(prev);
        return null;
      });
      try {
        const ab = await file.arrayBuffer();
        const task = pdfjs.getDocument({ data: ab, length: ab.byteLength });
        task.onProgress = (p: { loaded: number; total: number }) => {
          const pct = p.total > 0 ? Math.round((p.loaded / p.total) * 30) : 0;
          setLoadPercent(pct);
        };
        const pdf = await task.promise;
        const numPages = Math.min(pdf.numPages, MAX_PAGES);
        if (pdf.numPages > MAX_PAGES) {
          showMessage(`Only the first ${MAX_PAGES} pages are used (PDF has ${pdf.numPages} pages).`, "error");
        }
        const canvases: HTMLCanvasElement[] = [];
        for (let i = 1; i <= numPages; i++) {
          setLoadPercent(30 + Math.round((i / numPages) * 70));
          const page = await pdf.getPage(i);
          const scale = 2;
          const viewport = page.getViewport({ scale });
          const canvas = document.createElement("canvas");
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          const ctx = canvas.getContext("2d")!;
          await page.render({ canvasContext: ctx, viewport }).promise;
          canvases.push(canvas);
        }
        setPageCanvases(canvases);
        setPagePreviews(canvases.map((c) => c.toDataURL("image/jpeg", 0.65)));
        showMessage(`Loaded ${canvases.length} page(s) from PDF.`);
      } catch (e) {
        showMessage(e instanceof Error ? e.message : "Failed to load PDF", "error");
      } finally {
        setLoadingPdf(false);
        setLoadPercent(0);
      }
    },
    [showMessage]
  );

  useEffect(() => {
    if (pdfFile && pdfReady) void loadPdfPages(pdfFile);
  }, [pdfFile, pdfReady, loadPdfPages]);

  const pickPdf = useCallback(
    (list: FileList | null) => {
      if (!list?.length) return;
      const pdfs = Array.from(list).filter((f) => f.type === "application/pdf" || f.name.toLowerCase().endsWith(".pdf"));
      if (!pdfs.length) {
        showMessage("Please select a PDF file.", "error");
        return;
      }
      if (pdfs.length > 1) {
        showMessage("Using the first PDF only. Replace it by choosing another file.", "error");
      }
      setPdfFile(pdfs[0]);
    },
    [showMessage]
  );

  const onDrop = useCallback(
    (e: DragEvent) => {
      e.preventDefault();
      uploadDragDepth.current = 0;
      setUploadDropActive(false);
      if (!loadingPdf && !encoding) pickPdf(e.dataTransfer.files);
    },
    [pickPdf, loadingPdf, encoding]
  );

  const onDragEnter = useCallback(
    (e: DragEvent) => {
      e.preventDefault();
      if (loadingPdf || encoding) return;
      uploadDragDepth.current += 1;
      setUploadDropActive(true);
    },
    [loadingPdf, encoding]
  );

  const onDragLeave = useCallback((e: DragEvent) => {
    e.preventDefault();
    uploadDragDepth.current -= 1;
    if (uploadDragDepth.current <= 0) {
      uploadDragDepth.current = 0;
      setUploadDropActive(false);
    }
  }, []);

  const onDragOver = useCallback((e: DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "copy";
  }, []);

  const reset = useCallback(() => {
    setPdfFile(null);
    setPageCanvases([]);
    setPagePreviews([]);
    setFrameDelayMs(300);
    setQuality(85);
    setOutWidth(480);
    setOutHeight(480);
    setBgColor("#ffffff");
    setLoopForever(true);
    setResultBlob(null);
    setResultUrl((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return null;
    });
    if (fileInputRef.current) fileInputRef.current.value = "";
    showMessage("Reset complete.");
  }, [showMessage]);

  const createAnimatedGif = useCallback(async () => {
    if (pageCanvases.length < MIN_FRAMES) {
      showMessage(`This PDF needs at least ${MIN_FRAMES} pages to make an animated GIF.`, "error");
      return;
    }
    const w = Math.min(1280, Math.max(32, Math.round(outWidth)));
    const h = Math.min(1280, Math.max(32, Math.round(outHeight)));
    if (w !== outWidth) setOutWidth(w);
    if (h !== outHeight) setOutHeight(h);

    setEncoding(true);
    setEncodeProgress(0);
    setResultBlob(null);
    setResultUrl((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return null;
    });

    const gifJsQuality = Math.max(1, Math.min(30, Math.round(31 - (quality / 100) * 29)));
    const origin = typeof window !== "undefined" ? window.location.origin : "";
    const delay = Math.min(5000, Math.max(20, Math.round(frameDelayMs)));

    try {
      const { default: GIF } = await import("gif.js");
      const gif = new GIF({
        workers: 2,
        quality: gifJsQuality,
        workerScript: `${origin}/gif.worker.js`,
        width: w,
        height: h,
        repeat: loopForever ? 0 : -1,
      });

      gif.on("progress", (p: unknown) => {
        const n = typeof p === "number" ? p : 0;
        setEncodeProgress(Math.round(n * 100));
      });

      for (const pageCanvas of pageCanvases) {
        const canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext("2d");
        if (!ctx) throw new Error("Canvas not available");
        drawContainCanvas(ctx, pageCanvas, w, h, bgColor);
        gif.addFrame(canvas, { copy: true, delay });
      }

      const blob: Blob = await new Promise((resolve, reject) => {
        gif.on("finished", (b: unknown) => resolve(b as Blob));
        try {
          gif.render();
        } catch (e) {
          reject(e);
        }
      });

      setResultBlob(blob);
      setResultUrl(URL.createObjectURL(blob));
      setEncodeProgress(100);
      showMessage("Animated GIF created. Download below.");
    } catch (e) {
      showMessage(e instanceof Error ? e.message : "Failed to create GIF", "error");
    } finally {
      setEncoding(false);
    }
  }, [pageCanvases, outWidth, outHeight, quality, frameDelayMs, bgColor, loopForever, showMessage]);

  const downloadGif = useCallback(() => {
    if (!resultBlob) {
      showMessage("Create a GIF first.", "error");
      return;
    }
    const a = document.createElement("a");
    a.href = URL.createObjectURL(resultBlob);
    a.download = `pdf-animation-${Date.now()}.gif`;
    a.click();
    URL.revokeObjectURL(a.href);
    showMessage("Download started.");
  }, [resultBlob, showMessage]);

  const displayName = "PDF";

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-amber-500/45 bg-slate-950 px-5 py-4">
        <p className="flex flex-wrap items-center gap-3 text-sm font-semibold leading-snug text-amber-300 sm:text-[0.95rem]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="shrink-0 text-amber-400"
            aria-hidden
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          <span>All conversion runs in your browser. Files never leave your device.</span>
        </p>
      </div>

      {!pdfFile ? (
        <div className="rounded-xl border border-slate-700/90 bg-slate-900 p-6 shadow-lg shadow-black/25 sm:p-8">
          <h2 className="mb-6 text-lg font-bold tracking-tight text-white sm:text-xl">Upload Files</h2>
          <div
            role="button"
            tabIndex={loadingPdf || encoding ? -1 : 0}
            aria-label="Upload PDF"
            onKeyDown={(e: KeyboardEvent) => {
              if (loadingPdf || encoding) return;
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                fileInputRef.current?.click();
              }
            }}
            onDragEnter={onDragEnter}
            onDragLeave={onDragLeave}
            onDragOver={onDragOver}
            onDrop={onDrop}
            onClick={() => !loadingPdf && !encoding && fileInputRef.current?.click()}
            className={`flex min-h-[200px] flex-col items-center justify-center rounded-lg border-2 border-dashed px-8 py-14 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 sm:min-h-[240px] ${
              loadingPdf || encoding ? "pointer-events-none cursor-not-allowed opacity-60" : "cursor-pointer"
            } ${
              uploadDropActive
                ? "border-amber-500/80 bg-slate-950/90 ring-1 ring-amber-500/30"
                : "border-slate-500/45 bg-slate-950/70 hover:border-amber-500/45 hover:bg-slate-950/85"
            }`}
          >
            <svg
              className="mb-4 h-12 w-12 text-amber-400 sm:h-14 sm:w-14"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden
            >
              <path d="M10 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2h-8l-2-2z" />
            </svg>
            <p className="mb-2 text-center text-base font-medium text-slate-300">
              Drop {displayName} files here or click to upload
            </p>
            <p className="text-center text-sm text-slate-500">One PDF — each page becomes a frame (max {MAX_PAGES})</p>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="rounded-xl border border-slate-700/90 bg-slate-900 p-6 shadow-lg shadow-black/25 sm:p-8">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm text-slate-300">
                <span className="font-medium text-slate-100">{pdfFile.name}</span>
                {loadingPdf ? (
                  <span className="ml-2 text-amber-400"> · Loading pages… {loadPercent}%</span>
                ) : (
                  <span className="ml-2 text-slate-500"> · {pageCanvases.length} page(s)</span>
                )}
              </p>
              <button
                type="button"
                disabled={loadingPdf || encoding}
                onClick={() => fileInputRef.current?.click()}
                className="rounded-lg border border-slate-600 px-3 py-1.5 text-sm text-slate-300 hover:bg-slate-800 disabled:opacity-50"
              >
                Replace PDF
              </button>
            </div>

            {pagePreviews.length > 0 && (
              <div className="mb-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {pagePreviews.map((src, idx) => (
                  <div key={idx} className="rounded-lg border border-slate-700 bg-slate-950/50 p-3">
                    <span className="text-xs font-medium text-slate-500">Page {idx + 1}</span>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={src} alt="" className="mx-auto mt-2 max-h-32 rounded object-contain" />
                  </div>
                ))}
              </div>
            )}

            <div className="grid gap-6 border-t border-slate-700 pt-6 lg:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">Frame delay (ms)</label>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min={20}
                    max={2000}
                    step={10}
                    value={frameDelayMs}
                    onChange={(e) => setFrameDelayMs(Number(e.target.value))}
                    className="flex-1"
                    disabled={encoding || loadingPdf}
                  />
                  <NumberInputWithStepper
                    value={String(frameDelayMs)}
                    onChange={(v) => setFrameDelayMs(Math.min(5000, Math.max(20, Number(v) || 300)))}
                    min={20}
                    max={5000}
                    disabled={encoding || loadingPdf}
                    className="w-28"
                  />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">GIF quality</label>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min={1}
                    max={100}
                    value={quality}
                    onChange={(e) => setQuality(Number(e.target.value))}
                    className="flex-1"
                    disabled={encoding || loadingPdf}
                  />
                  <span className="min-w-[3rem] text-right text-slate-400">{quality}%</span>
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">Output width</label>
                <NumberInputWithStepper
                  value={String(outWidth)}
                  onChange={(v) => setOutWidth(Number(v) || 480)}
                  min={32}
                  max={1280}
                  disabled={encoding || loadingPdf}
                  className="w-full max-w-xs"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">Output height</label>
                <NumberInputWithStepper
                  value={String(outHeight)}
                  onChange={(v) => setOutHeight(Number(v) || 480)}
                  min={32}
                  max={1280}
                  disabled={encoding || loadingPdf}
                  className="w-full max-w-xs"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">Letterbox background</label>
                <input
                  type="color"
                  value={bgColor}
                  onChange={(e) => setBgColor(e.target.value)}
                  disabled={encoding || loadingPdf}
                  className="h-10 w-24 cursor-pointer rounded border border-slate-600 bg-slate-950 disabled:opacity-50"
                />
              </div>
              <div className="flex items-end">
                <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-300">
                  <input
                    type="checkbox"
                    checked={loopForever}
                    onChange={(e) => setLoopForever(e.target.checked)}
                    disabled={encoding || loadingPdf}
                  />
                  Loop forever
                </label>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => void createAnimatedGif()}
                disabled={encoding || loadingPdf || pageCanvases.length < MIN_FRAMES}
                className="rounded-lg bg-blue-600 px-6 py-2.5 font-medium text-white hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {encoding ? `Encoding… ${encodeProgress}%` : "Create animated GIF"}
              </button>
              <button
                type="button"
                onClick={downloadGif}
                disabled={encoding || !resultBlob}
                className="rounded-lg border border-slate-600 bg-slate-700 px-6 py-2.5 font-medium text-slate-200 hover:bg-slate-600 disabled:opacity-50"
              >
                Download GIF
              </button>
              <button
                type="button"
                onClick={reset}
                disabled={encoding || loadingPdf}
                className="rounded-lg border border-slate-600 px-6 py-2.5 text-slate-300 hover:bg-slate-800 disabled:opacity-50"
              >
                Reset
              </button>
            </div>

            {encoding && (
              <div className="mt-4">
                <div className="mb-1 flex justify-between text-xs text-slate-500">
                  <span>Encoding pages…</span>
                  <span>{encodeProgress}%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-slate-700">
                  <div
                    className="h-full rounded-full bg-blue-500 transition-all duration-200"
                    style={{ width: `${encodeProgress}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {resultUrl && resultBlob && (
            <div className="rounded-xl border border-slate-700/90 bg-slate-900 p-6 shadow-lg shadow-black/25 sm:p-8">
              <h3 className="mb-3 text-lg font-semibold text-slate-100">Preview</h3>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={resultUrl} alt="Animated GIF preview" className="max-h-96 rounded border border-slate-700 bg-slate-950 object-contain" />
              <p className="mt-2 text-sm text-slate-500">File size: {formatSize(resultBlob.size)}</p>
            </div>
          )}
        </div>
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf,application/pdf"
        className="hidden"
        disabled={encoding || loadingPdf}
        onChange={(e) => {
          pickPdf(e.target.files);
          e.target.value = "";
        }}
      />

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
    </div>
  );
}
