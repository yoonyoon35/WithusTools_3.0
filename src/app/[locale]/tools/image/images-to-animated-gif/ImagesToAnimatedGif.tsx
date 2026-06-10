"use client";

import type { DragEvent, KeyboardEvent } from "react";
import { useState, useCallback, useRef, useEffect } from "react";
import NumberInputWithStepper from "@/components/NumberInputWithStepper";
import useToolPageContent from "@/hooks/useToolPageContent";
import { asMap, asText, formatUi } from "@/lib/tool-ui-helpers";
import {
  GIF_FORMAT_UI,
  fileMatchesGifFormat,
  type MultiFileGifFormat,
} from "@/app/[locale]/tools/gif-converter/gif-format-config";
import { decodeFileToImageForGifFrame } from "@/lib/gif-frame-decode";

const META_PATH = "/tools/image/images-to-animated-gif";

const PDFJS_VERSION = "3.11.174";

const MAX_FRAMES = 60;
const MIN_FRAMES = 2;

function isHeicFile(file: File): boolean {
  const n = file.name.toLowerCase();
  const t = file.type.toLowerCase();
  return (
    n.endsWith(".heic") ||
    n.endsWith(".heif") ||
    t === "image/heic" ||
    t === "image/heif"
  );
}

function isImageFile(file: File): boolean {
  if (file.type.startsWith("image/")) return true;
  return isHeicFile(file);
}

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

function loadImageFromUrl(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("Failed to decode image"));
    img.src = url;
  });
}

async function fileToImage(file: File): Promise<HTMLImageElement> {
  if (isHeicFile(file)) {
    const heic2any = (await import("heic2any")).default;
    const result = await heic2any({ blob: file, toType: "image/png" });
    const blob = Array.isArray(result) ? result[0] : result;
    const url = URL.createObjectURL(blob);
    try {
      return await loadImageFromUrl(url);
    } finally {
      URL.revokeObjectURL(url);
    }
  }
  const url = URL.createObjectURL(file);
  try {
    return await loadImageFromUrl(url);
  } finally {
    URL.revokeObjectURL(url);
  }
}

function drawContain(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  cw: number,
  ch: number,
  bg: string
): void {
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, cw, ch);
  const iw = img.naturalWidth;
  const ih = img.naturalHeight;
  if (!iw || !ih) return;
  const scale = Math.min(cw / iw, ch / ih);
  const dw = Math.round(iw * scale);
  const dh = Math.round(ih * scale);
  const dx = Math.round((cw - dw) / 2);
  const dy = Math.round((ch - dh) / 2);
  ctx.drawImage(img, dx, dy, dw, dh);
}

type FrameRow = {
  id: string;
  file: File;
  previewUrl: string;
};

export type ImagesToAnimatedGifProps = {
  /** GIF Converter `[format]` route: only files matching this format (decoded like JPG Converter). */
  sourceFormat?: MultiFileGifFormat;
  /** Localized display name from GIF format page toolContent. */
  displayName?: string;
  /** @deprecated Use `sourceFormat="jpg"` from GIF Converter routes. */
  restrictToJpegOnly?: boolean;
};

export default function ImagesToAnimatedGif({
  sourceFormat,
  displayName,
  restrictToJpegOnly = false,
}: ImagesToAnimatedGifProps) {
  const page = useToolPageContent(META_PATH);
  const ui = page?.ui;
  const toolUi = asMap(ui);
  const uploadUi = asMap(toolUi.upload);
  const framesUi = asMap(toolUi.frames);
  const labelsUi = asMap(toolUi.labels);
  const buttonsUi = asMap(toolUi.buttons);
  const previewUi = asMap(toolUi.preview);
  const encodingUi = asMap(toolUi.encoding);
  const messagesUi = asMap(toolUi.messages);

  const effectiveHubFormat: MultiFileGifFormat | undefined =
    sourceFormat ?? (restrictToJpegOnly ? "jpg" : undefined);
  const hubUi = effectiveHubFormat ? GIF_FORMAT_UI[effectiveHubFormat] : null;
  const effectiveDisplayName = displayName ?? hubUi?.displayName ?? "image";
  const [frames, setFrames] = useState<FrameRow[]>([]);
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
  const framesRef = useRef(frames);
  const resultUrlRef = useRef(resultUrl);
  framesRef.current = frames;
  resultUrlRef.current = resultUrl;

  useEffect(() => {
    return () => {
      framesRef.current.forEach((f) => URL.revokeObjectURL(f.previewUrl));
      if (resultUrlRef.current) URL.revokeObjectURL(resultUrlRef.current);
    };
  }, []);

  useEffect(() => {
    if (effectiveHubFormat !== "ai") return;
    if (typeof window === "undefined") return;
    if ((window as unknown as { pdfjsLib?: unknown }).pdfjsLib) return;
    const script = document.createElement("script");
    script.src = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${PDFJS_VERSION}/pdf.min.js`;
    script.async = true;
    script.onload = () => {
      const lib = (window as unknown as { pdfjsLib?: { GlobalWorkerOptions?: { workerSrc?: string } } }).pdfjsLib;
      if (lib?.GlobalWorkerOptions) {
        try {
          lib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${PDFJS_VERSION}/pdf.worker.min.js`;
        } catch {
          /* ignore */
        }
      }
    };
    document.head.appendChild(script);
    return () => script.remove();
  }, [effectiveHubFormat]);

  const showMessage = useCallback((text: string, type: "success" | "error" = "success") => {
    setMessage({ text, type });
    setTimeout(() => setMessage(null), 4000);
  }, []);

  const revokeFrames = useCallback((list: FrameRow[]) => {
    list.forEach((f) => URL.revokeObjectURL(f.previewUrl));
  }, []);

  const acceptFilter = effectiveHubFormat
    ? (f: File) => fileMatchesGifFormat(f, effectiveHubFormat)
    : isImageFile;

  const fileToCanvasSource = useCallback(
    async (file: File): Promise<HTMLImageElement> => {
      if (effectiveHubFormat) return decodeFileToImageForGifFrame(file, effectiveHubFormat);
      return fileToImage(file);
    },
    [effectiveHubFormat]
  );

  const addFiles = useCallback(
    (fileList: FileList | null) => {
      if (!fileList?.length) return;
      const arr = Array.from(fileList).filter(acceptFilter);
      if (!arr.length) {
        showMessage(
          hubUi
            ? formatUi(asText(messagesUi.onlyFormat), { format: effectiveDisplayName })
            : asText(messagesUi.onlyImages),
          "error"
        );
        return;
      }
      const room = MAX_FRAMES - frames.length;
      if (room <= 0) {
        showMessage(formatUi(asText(messagesUi.maxFrames), { max: MAX_FRAMES }), "error");
        return;
      }
      const take = arr.slice(0, room);
      if (arr.length > take.length) {
        showMessage(
          formatUi(asText(messagesUi.partialAdded), { n: take.length, max: MAX_FRAMES }),
          "error"
        );
      }
      const newRows: FrameRow[] = take.map((file) => ({
        id: `${file.name}-${Date.now()}-${Math.random().toString(16).slice(2)}`,
        file,
        previewUrl: URL.createObjectURL(file),
      }));
      setFrames((prev) => {
        const next = [...prev, ...newRows];
        return next;
      });
      setResultBlob(null);
      setResultUrl((prev) => {
        if (prev) URL.revokeObjectURL(prev);
        return null;
      });
      showMessage(
        hubUi
          ? formatUi(asText(messagesUi.formatAdded), { n: take.length, format: effectiveDisplayName })
          : formatUi(asText(messagesUi.imagesAdded), { n: take.length })
      );
    },
    [frames.length, showMessage, acceptFilter, hubUi, effectiveDisplayName, messagesUi]
  );

  const onJpgUploadDrop = useCallback(
    (e: DragEvent) => {
      e.preventDefault();
      uploadDragDepth.current = 0;
      setUploadDropActive(false);
      if (!encoding) addFiles(e.dataTransfer.files);
    },
    [addFiles, encoding]
  );

  const onJpgUploadDragEnter = useCallback(
    (e: DragEvent) => {
      e.preventDefault();
      if (encoding) return;
      uploadDragDepth.current += 1;
      setUploadDropActive(true);
    },
    [encoding]
  );

  const onJpgUploadDragLeave = useCallback((e: DragEvent) => {
    e.preventDefault();
    uploadDragDepth.current -= 1;
    if (uploadDragDepth.current <= 0) {
      uploadDragDepth.current = 0;
      setUploadDropActive(false);
    }
  }, []);

  const onJpgUploadDragOver = useCallback((e: DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "copy";
  }, []);

  const removeFrame = useCallback((id: string) => {
    setFrames((prev) => {
      const row = prev.find((f) => f.id === id);
      if (row) URL.revokeObjectURL(row.previewUrl);
      return prev.filter((f) => f.id !== id);
    });
    setResultBlob(null);
    setResultUrl((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return null;
    });
  }, []);

  const moveFrame = useCallback((id: string, dir: -1 | 1) => {
    setFrames((prev) => {
      const i = prev.findIndex((f) => f.id === id);
      if (i < 0) return prev;
      const j = i + dir;
      if (j < 0 || j >= prev.length) return prev;
      const copy = [...prev];
      [copy[i], copy[j]] = [copy[j], copy[i]];
      return copy;
    });
    setResultBlob(null);
    setResultUrl((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return null;
    });
  }, []);

  const reset = useCallback(() => {
    revokeFrames(frames);
    setFrames([]);
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
    showMessage(asText(messagesUi.resetDone));
  }, [frames, revokeFrames, showMessage, messagesUi]);

  const createAnimatedGif = useCallback(async () => {
    if (frames.length < MIN_FRAMES) {
      showMessage(formatUi(asText(messagesUi.minFrames), { min: MIN_FRAMES }), "error");
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

      for (const row of frames) {
        const img = await fileToCanvasSource(row.file);
        const canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext("2d");
        if (!ctx) throw new Error("Canvas not available");
        drawContain(ctx, img, w, h, bgColor);
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
      const url = URL.createObjectURL(blob);
      setResultUrl(url);
      setEncodeProgress(100);
      showMessage(asText(messagesUi.gifCreated));
    } catch (e) {
      showMessage(e instanceof Error ? e.message : asText(messagesUi.gifFailed), "error");
    } finally {
      setEncoding(false);
    }
  }, [frames, outWidth, outHeight, quality, frameDelayMs, bgColor, loopForever, showMessage, fileToCanvasSource, messagesUi]);

  const downloadGif = useCallback(() => {
    if (!resultBlob) {
      showMessage(asText(messagesUi.createFirst), "error");
      return;
    }
    const a = document.createElement("a");
    a.href = URL.createObjectURL(resultBlob);
    a.download = `animation-${Date.now()}.gif`;
    a.click();
    URL.revokeObjectURL(a.href);
    showMessage(asText(messagesUi.downloadStarted));
  }, [resultBlob, showMessage, messagesUi]);

  const dropPrimaryText = hubUi
    ? formatUi(asText(uploadUi.dropFormat), { format: effectiveDisplayName })
    : asText(uploadUi.dropImages);

  if (!ui) return null;

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
          <span>{asText(toolUi.privacyBanner)}</span>
        </p>
      </div>

      {frames.length === 0 ? (
        <div className="rounded-xl border border-slate-700/90 bg-slate-900 p-6 shadow-lg shadow-black/25 sm:p-8">
          <h2 className="mb-6 text-lg font-bold tracking-tight text-white sm:text-xl">
            {asText(toolUi.uploadTitle)}
          </h2>
          <div
            role="button"
            tabIndex={encoding ? -1 : 0}
            aria-label={
              hubUi
                ? formatUi(asText(uploadUi.ariaUploadFormat), { format: effectiveDisplayName })
                : asText(uploadUi.ariaUploadImages)
            }
            onKeyDown={(e: KeyboardEvent) => {
              if (encoding) return;
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                fileInputRef.current?.click();
              }
            }}
            onDragEnter={onJpgUploadDragEnter}
            onDragLeave={onJpgUploadDragLeave}
            onDragOver={onJpgUploadDragOver}
            onDrop={onJpgUploadDrop}
            onClick={() => !encoding && fileInputRef.current?.click()}
            className={`flex min-h-[200px] flex-col items-center justify-center rounded-lg border-2 border-dashed px-8 py-14 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 sm:min-h-[240px] ${
              encoding ? "pointer-events-none cursor-not-allowed opacity-60" : "cursor-pointer"
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
            <p className="mb-2 text-center text-base font-medium text-slate-300">{dropPrimaryText}</p>
            <p className="text-center text-sm text-slate-500">{asText(uploadUi.supportsMultiple)}</p>
            {!hubUi ? (
              <p className="mt-2 max-w-md text-center text-xs text-slate-500">
                {formatUi(asText(uploadUi.formatHint), { max: MAX_FRAMES })}
              </p>
            ) : null}
          </div>
        </div>
      ) : null}

      {frames.length > 0 && (
        <div className="space-y-6">
          <div className="rounded-xl border border-slate-700/90 bg-slate-900 p-6 shadow-lg shadow-black/25 sm:p-8">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm text-slate-300">
                {formatUi(asText(framesUi.countOrder), { n: frames.length })}
              </p>
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                disabled={encoding || frames.length >= MAX_FRAMES}
                className="rounded-lg border border-slate-600 px-3 py-1.5 text-sm text-slate-300 hover:bg-slate-800 disabled:opacity-50"
              >
                {hubUi
                  ? formatUi(asText(framesUi.addMoreFormat), { format: effectiveDisplayName })
                  : asText(framesUi.addMoreImages)}
              </button>
            </div>

            <div className="mb-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {frames.map((row, idx) => (
                <div key={row.id} className="rounded-lg border border-slate-700 bg-slate-950/50 p-3">
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <span className="text-xs font-medium text-slate-500">
                      {formatUi(asText(framesUi.frameNumber), { n: idx + 1 })}
                    </span>
                    <div className="flex gap-1">
                      <button
                        type="button"
                        disabled={encoding || idx === 0}
                        onClick={() => moveFrame(row.id, -1)}
                        className="rounded border border-slate-600 px-2 py-0.5 text-xs text-slate-400 hover:bg-slate-800 disabled:opacity-30"
                        title={asText(framesUi.moveUp)}
                      >
                        ↑
                      </button>
                      <button
                        type="button"
                        disabled={encoding || idx === frames.length - 1}
                        onClick={() => moveFrame(row.id, 1)}
                        className="rounded border border-slate-600 px-2 py-0.5 text-xs text-slate-400 hover:bg-slate-800 disabled:opacity-30"
                        title={asText(framesUi.moveDown)}
                      >
                        ↓
                      </button>
                      <button
                        type="button"
                        disabled={encoding}
                        onClick={() => removeFrame(row.id)}
                        className="rounded border border-red-500/40 px-2 py-0.5 text-xs text-red-400 hover:bg-red-500/10 disabled:opacity-30"
                      >
                        {asText(framesUi.remove)}
                      </button>
                    </div>
                  </div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={row.previewUrl} alt="" className="mx-auto max-h-32 rounded object-contain" />
                  <p className="mt-2 truncate text-xs text-slate-500" title={row.file.name}>
                    {row.file.name}
                  </p>
                  <p className="text-xs text-slate-600">{formatSize(row.file.size)}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-6 border-t border-slate-700 pt-6 lg:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  {asText(labelsUi.frameDelay)}
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min={20}
                    max={2000}
                    step={10}
                    value={frameDelayMs}
                    onChange={(e) => setFrameDelayMs(Number(e.target.value))}
                    className="flex-1"
                  />
                  <NumberInputWithStepper
                    value={String(frameDelayMs)}
                    onChange={(v) => setFrameDelayMs(Math.min(5000, Math.max(20, Number(v) || 300)))}
                    min={20}
                    max={5000}
                    disabled={encoding}
                    className="w-28"
                  />
                </div>
                <p className="mt-1 text-xs text-slate-500">{asText(labelsUi.frameDelayHint)}</p>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  {asText(labelsUi.gifQuality)}
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min={1}
                    max={100}
                    value={quality}
                    onChange={(e) => setQuality(Number(e.target.value))}
                    className="flex-1"
                  />
                  <span className="min-w-[3rem] text-right text-slate-400">{quality}%</span>
                </div>
                <p className="mt-1 text-xs text-slate-500">{asText(labelsUi.gifQualityHint)}</p>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  {asText(labelsUi.outputWidth)}
                </label>
                <NumberInputWithStepper
                  value={String(outWidth)}
                  onChange={(v) => setOutWidth(Number(v) || 480)}
                  min={32}
                  max={1280}
                  disabled={encoding}
                  className="w-full max-w-xs"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  {asText(labelsUi.outputHeight)}
                </label>
                <NumberInputWithStepper
                  value={String(outHeight)}
                  onChange={(v) => setOutHeight(Number(v) || 480)}
                  min={32}
                  max={1280}
                  disabled={encoding}
                  className="w-full max-w-xs"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  {asText(labelsUi.letterboxBackground)}
                </label>
                <input
                  type="color"
                  value={bgColor}
                  onChange={(e) => setBgColor(e.target.value)}
                  disabled={encoding}
                  className="h-10 w-24 cursor-pointer rounded border border-slate-600 bg-slate-950 disabled:opacity-50"
                />
              </div>
              <div className="flex items-end">
                <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-300">
                  <input
                    type="checkbox"
                    checked={loopForever}
                    onChange={(e) => setLoopForever(e.target.checked)}
                    disabled={encoding}
                  />
                  {asText(labelsUi.loopForever)}
                </label>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => void createAnimatedGif()}
                disabled={encoding || frames.length < MIN_FRAMES}
                className="rounded-lg bg-blue-600 px-6 py-2.5 font-medium text-white hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {encoding
                  ? formatUi(asText(buttonsUi.encoding), { percent: encodeProgress })
                  : asText(buttonsUi.createGif)}
              </button>
              <button
                type="button"
                onClick={downloadGif}
                disabled={encoding || !resultBlob}
                className="rounded-lg border border-slate-600 bg-slate-700 px-6 py-2.5 font-medium text-slate-200 hover:bg-slate-600 disabled:opacity-50"
              >
                {asText(buttonsUi.downloadGif)}
              </button>
              <button
                type="button"
                onClick={reset}
                disabled={encoding}
                className="rounded-lg border border-slate-600 px-6 py-2.5 text-slate-300 hover:bg-slate-800 disabled:opacity-50"
              >
                {asText(buttonsUi.reset)}
              </button>
            </div>

            {encoding && (
              <div className="mt-4">
                <div className="mb-1 flex justify-between text-xs text-slate-500">
                  <span>{asText(encodingUi.label)}</span>
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

          {resultUrl && (
            <div className="rounded-xl border border-slate-700/90 bg-slate-900 p-6 shadow-lg shadow-black/25 sm:p-8">
              <h3 className="mb-3 text-lg font-semibold text-slate-100">{asText(previewUi.title)}</h3>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={resultUrl} alt={asText(previewUi.alt)} className="max-h-96 rounded border border-slate-700 bg-slate-950 object-contain" />
              {resultBlob && (
                <p className="mt-2 text-sm text-slate-500">
                  {formatUi(asText(previewUi.fileSize), { size: formatSize(resultBlob.size) })}
                </p>
              )}
            </div>
          )}
        </div>
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept={hubUi ? hubUi.acceptTypes : "image/*,.heic,.heif"}
        multiple
        className="hidden"
        disabled={encoding}
        onChange={(e) => {
          addFiles(e.target.files);
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
