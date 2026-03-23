"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import Link from "next/link";
import { PDFDocument } from "pdf-lib";

/**
 * Load image with EXIF orientation applied.
 * Returns canvas with correctly oriented pixels and dimensions.
 */
async function loadOrientedImage(
  file: File
): Promise<{ canvas: HTMLCanvasElement; width: number; height: number }> {
  const bitmap = await createImageBitmap(file, {
    imageOrientation: "from-image",
  });
  const canvas = document.createElement("canvas");
  canvas.width = bitmap.width;
  canvas.height = bitmap.height;
  const ctx = canvas.getContext("2d")!;
  ctx.drawImage(bitmap, 0, 0);
  bitmap.close();
  return {
    canvas,
    width: canvas.width,
    height: canvas.height,
  };
}

const A4_PORTRAIT_WIDTH = 595.28;
const A4_PORTRAIT_HEIGHT = 841.89;

type PageSizeMode = "fit" | "a4";
type PageOrientation = "portrait" | "landscape";

/**
 * Convert images to PDF using pdf-lib.
 * EXIF orientation is applied via createImageBitmap—no rotation issues.
 * @param pageSize - "fit": page size matches each image (no margins). "a4": fixed A4 page with image scaled to fit (may have margins).
 * @param orientation - "portrait" | "landscape" (affects A4 only)
 */
async function imagesToPdf(
  files: File[],
  pageSize: PageSizeMode,
  orientation: PageOrientation,
  onProgress?: (current: number, total: number) => void
): Promise<Uint8Array> {
  const pdfDoc = await PDFDocument.create();
  const isJpeg = (f: File) =>
    /^image\/(jpeg|jpg)$/i.test(f.type) || /\.(jpe?g|jfif)$/i.test(f.name);
  const total = files.length;

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const { canvas, width, height } = await loadOrientedImage(file);

    const blob = await new Promise<Blob | null>((resolve) => {
      canvas.toBlob(
        resolve,
        isJpeg(file) ? "image/jpeg" : "image/png",
        isJpeg(file) ? 1 : undefined
      );
    });
    if (!blob) throw new Error(`Failed to process image: ${file.name}`);

    const bytes = new Uint8Array(await blob.arrayBuffer());
    const image = isJpeg(file)
      ? await pdfDoc.embedJpg(bytes)
      : await pdfDoc.embedPng(bytes);

    if (pageSize === "fit") {
      const page = pdfDoc.addPage([width, height]);
      page.drawImage(image, {
        x: 0,
        y: 0,
        width,
        height,
      });
    } else {
      const pageW = orientation === "landscape" ? A4_PORTRAIT_HEIGHT : A4_PORTRAIT_WIDTH;
      const pageH = orientation === "landscape" ? A4_PORTRAIT_WIDTH : A4_PORTRAIT_HEIGHT;
      const page = pdfDoc.addPage([pageW, pageH]);
      const scaled = image.scaleToFit(pageW, pageH);
      const x = (pageW - scaled.width) / 2;
      const y = (pageH - scaled.height) / 2;
      page.drawImage(image, {
        x,
        y,
        width: scaled.width,
        height: scaled.height,
      });
    }
    onProgress?.(i + 1, total);
  }

  return pdfDoc.save();
}

const THUMB_MAX = 200;

/**
 * Create a thumbnail preview of how the image will appear in the PDF.
 */
async function createPagePreview(
  file: File,
  pageSize: PageSizeMode,
  orientation: PageOrientation
): Promise<string> {
  const { canvas: srcCanvas, width: imgW, height: imgH } =
    await loadOrientedImage(file);

  let pageW: number;
  let pageH: number;
  let drawW: number;
  let drawH: number;
  let drawX: number;
  let drawY: number;

  if (pageSize === "fit") {
    pageW = imgW;
    pageH = imgH;
    drawW = imgW;
    drawH = imgH;
    drawX = 0;
    drawY = 0;
  } else {
    const pw = orientation === "landscape" ? A4_PORTRAIT_HEIGHT : A4_PORTRAIT_WIDTH;
    const ph = orientation === "landscape" ? A4_PORTRAIT_WIDTH : A4_PORTRAIT_HEIGHT;
    const scale = Math.min(pw / imgW, ph / imgH);
    drawW = imgW * scale;
    drawH = imgH * scale;
    drawX = (pw - drawW) / 2;
    drawY = (ph - drawH) / 2;
    pageW = pw;
    pageH = ph;
  }

  const scale = Math.min(THUMB_MAX / pageW, THUMB_MAX / pageH);
  const outW = Math.round(pageW * scale);
  const outH = Math.round(pageH * scale);
  const out = document.createElement("canvas");
  out.width = outW;
  out.height = outH;
  const ctx = out.getContext("2d")!;
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, outW, outH);

  const sx = (drawX / pageW) * outW;
  const sy = (drawY / pageH) * outH;
  const sw = (drawW / pageW) * outW;
  const sh = (drawH / pageH) * outH;
  ctx.drawImage(srcCanvas, 0, 0, imgW, imgH, sx, sy, sw, sh);

  return out.toDataURL("image/jpeg", 0.9);
}

const ACCEPT_JPG = "image/jpeg,image/jpg,.jpg,.jpeg,.jfif";
const ACCEPT_PNG = "image/png,.png";

export type ImageToPdfFormat = "jpg" | "png";

interface ImageToPdfConverterProps {
  /** When provided, only files of this format are accepted. "jpg" = JPG only, "png" = PNG only. */
  format?: ImageToPdfFormat;
}

export default function ImageToPdfConverter({ format }: ImageToPdfConverterProps) {
  const accept = format === "png" ? ACCEPT_PNG : ACCEPT_JPG;
  const acceptedFormatsLabel = format === "png" ? "PNG" : "JPG";
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [message, setMessage] = useState<{
    text: string;
    type: "success" | "error";
  } | null>(null);
  const [pageSize, setPageSize] = useState<PageSizeMode>("fit");
  const [orientation, setOrientation] = useState<PageOrientation>("portrait");
  const [progress, setProgress] = useState<{
    current: number;
    total: number;
  } | null>(null);
  const [convertedPreviews, setConvertedPreviews] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (files.length === 0) {
      setConvertedPreviews([]);
      return;
    }
    let cancelled = false;
    Promise.all(
      files.map((file) =>
        createPagePreview(file, pageSize, orientation)
      )
    ).then((urls) => {
      if (!cancelled) setConvertedPreviews(urls);
    });
    return () => {
      cancelled = true;
    };
  }, [files, pageSize, orientation]);

  const displayPreviews = convertedPreviews.length === files.length ? convertedPreviews : previews;

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
      const pattern =
        format === "png"
          ? /^image\/png$/i
          : /^image\/(jpeg|jpg|jfif)$/i;
      const arr = Array.from(fileList).filter((f) => pattern.test(f.type));
      if (arr.length === 0) {
        showMessage(
          `Please select ${acceptedFormatsLabel} images.`,
          "error"
        );
        return;
      }
      const newFiles = [...files, ...arr];
      setFiles(newFiles);
      setPdfUrl(null);
      Promise.all(
        newFiles.map((f) => {
          return new Promise<string>((resolve) => {
            const r = new FileReader();
            r.onload = () => resolve(r.result as string);
            r.readAsDataURL(f);
          });
        })
      ).then(setPreviews);
    },
    [files, showMessage, format, acceptedFormatsLabel]
  );

  const removeFile = useCallback((index: number) => {
    setFiles((prev) => {
      const next = prev.filter((_, i) => i !== index);
      setPreviews((p) => p.filter((_, i) => i !== index));
      if (next.length === 0) setPdfUrl(null);
      return next;
    });
  }, []);

  const clearAll = useCallback(() => {
    setFiles([]);
    setPreviews([]);
    setPdfUrl(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }, []);

  const convert = useCallback(async () => {
    if (files.length === 0) {
      showMessage("Please add images first.", "error");
      return;
    }
    setLoading(true);
    setPdfUrl(null);
    setProgress({ current: 0, total: files.length });
    try {
      const pdfBytes = await imagesToPdf(
        files,
        pageSize,
        orientation,
        (current, total) => setProgress({ current, total })
      );
      const blob = new Blob([new Uint8Array(pdfBytes)], {
        type: "application/pdf",
      });
      setPdfUrl(URL.createObjectURL(blob));
      showMessage("PDF created successfully.");
    } catch (err) {
      showMessage(
        err instanceof Error ? err.message : "Failed to convert to PDF.",
        "error"
      );
    } finally {
      setLoading(false);
      setProgress(null);
    }
  }, [files, pageSize, orientation, showMessage]);

  const downloadPdf = useCallback(() => {
    if (!pdfUrl) return;
    const a = document.createElement("a");
    a.href = pdfUrl;
    a.download =
      files.length === 1
        ? files[0].name.replace(/\.[^.]+$/, "") + ".pdf"
        : "images.pdf";
    a.click();
  }, [pdfUrl, files]);

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
          All conversion runs in your browser. Files never leave your device.
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
            Drop {acceptedFormatsLabel} images here or click to upload
          </p>
          <p className="text-xs text-slate-500">Supports multiple files</p>
          <input
            ref={fileInputRef}
            type="file"
            accept={accept}
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
                  files.length > 10
                    ? "scrollbar-thin grid max-h-[420px] grid-cols-2 gap-3 overflow-y-auto pr-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
                    : "grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
                }
              >
                {displayPreviews.map((src, i) => (
                  <div
                    key={`${files[i].name}-${i}`}
                    className="group relative overflow-hidden rounded-lg border border-border bg-slate-950/50"
                  >
                    <div className="aspect-square w-full overflow-hidden bg-slate-900">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={src}
                        alt={files[i].name}
                        className="h-full w-full object-contain transition-transform group-hover:scale-105"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFile(i)}
                      className="absolute right-1 top-1 rounded bg-red-600/90 px-2 py-0.5 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100"
                    >
                      Remove
                    </button>
                    <p
                      className="truncate px-2 py-1.5 text-xs text-slate-400"
                      title={files[i].name}
                    >
                      {files[i].name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-4 rounded-lg border border-border bg-slate-950/30 p-4">
              <h3 className="mb-3 text-sm font-medium text-slate-400">
                Options
              </h3>
              <div className="mb-4">
                <label className="mb-2 block text-sm text-slate-400">
                  Page size
                </label>
                <div className="flex gap-4">
                  <label className="flex cursor-pointer items-center gap-2">
                    <input
                      type="radio"
                      name="pageSize"
                      checked={pageSize === "fit"}
                      onChange={() => setPageSize("fit")}
                      className="rounded-full border-slate-600 bg-slate-800 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-slate-300">Fit to image</span>
                  </label>
                  <label className="flex cursor-pointer items-center gap-2">
                    <input
                      type="radio"
                      name="pageSize"
                      checked={pageSize === "a4"}
                      onChange={() => setPageSize("a4")}
                      className="rounded-full border-slate-600 bg-slate-800 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-slate-300">A4</span>
                  </label>
                </div>
                <p className="mt-1 text-xs text-slate-500">
                  {pageSize === "fit"
                    ? "Each page matches its image size (no margins)"
                    : "Fixed A4 size, image scaled to fit (may have margins)"}
                </p>
              </div>
              {pageSize === "a4" && (
                <div>
                  <label className="mb-2 block text-sm text-slate-400">
                    Page orientation
                  </label>
                  <div className="flex gap-4">
                    <label className="flex cursor-pointer items-center gap-2">
                      <input
                        type="radio"
                        name="orientation"
                        checked={orientation === "portrait"}
                        onChange={() => setOrientation("portrait")}
                        className="rounded-full border-slate-600 bg-slate-800 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-slate-300">Portrait</span>
                    </label>
                    <label className="flex cursor-pointer items-center gap-2">
                      <input
                        type="radio"
                        name="orientation"
                        checked={orientation === "landscape"}
                        onChange={() => setOrientation("landscape")}
                        className="rounded-full border-slate-600 bg-slate-800 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-slate-300">Landscape</span>
                    </label>
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={convert}
                disabled={loading}
                className="rounded-lg bg-blue-600 px-6 py-2.5 font-medium text-white transition-colors hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? "Converting..." : "Convert to PDF"}
              </button>
              <button
                onClick={clearAll}
                className="rounded-lg border border-border px-6 py-2.5 text-slate-300 hover:bg-slate-700"
              >
                Reset
              </button>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="rounded-lg border border-border px-6 py-2.5 text-slate-300 hover:bg-slate-700"
              >
                Add
              </button>
            </div>
            {loading && progress && (
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between text-sm text-slate-400">
                  <span>
                    Converting... {progress.current} of {progress.total}
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
                {files.length} file(s) selected
              </p>
            )}
          </div>
        )}
      </div>

      {pdfUrl && (
        <div className="rounded-xl border border-border bg-surface p-6">
          <p className="mb-3 font-semibold text-slate-100">PDF created successfully</p>
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
        <Link
          href="/tools/pdf-converter"
          className="text-slate-400 underline hover:text-slate-200"
        >
          ← Back to PDF Converter
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
