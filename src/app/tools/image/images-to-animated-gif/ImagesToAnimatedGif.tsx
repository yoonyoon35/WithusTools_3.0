"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import NumberInputWithStepper from "@/components/NumberInputWithStepper";

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

export default function ImagesToAnimatedGif() {
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

  const showMessage = useCallback((text: string, type: "success" | "error" = "success") => {
    setMessage({ text, type });
    setTimeout(() => setMessage(null), 4000);
  }, []);

  const revokeFrames = useCallback((list: FrameRow[]) => {
    list.forEach((f) => URL.revokeObjectURL(f.previewUrl));
  }, []);

  const addFiles = useCallback(
    (fileList: FileList | null) => {
      if (!fileList?.length) return;
      const arr = Array.from(fileList).filter(isImageFile);
      if (!arr.length) {
        showMessage("Only image files can be added.", "error");
        return;
      }
      const room = MAX_FRAMES - frames.length;
      if (room <= 0) {
        showMessage(`Maximum ${MAX_FRAMES} frames allowed.`, "error");
        return;
      }
      const take = arr.slice(0, room);
      if (arr.length > take.length) {
        showMessage(`Only the first ${take.length} file(s) were added (limit ${MAX_FRAMES} frames).`, "error");
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
      showMessage(`${take.length} image(s) added to the frame list.`);
    },
    [frames.length, showMessage]
  );

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
    showMessage("Reset complete.");
  }, [frames, revokeFrames, showMessage]);

  const createAnimatedGif = useCallback(async () => {
    if (frames.length < MIN_FRAMES) {
      showMessage(`Add at least ${MIN_FRAMES} images to build an animated GIF.`, "error");
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
        const img = await fileToImage(row.file);
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
      showMessage("Animated GIF created. Download below.");
    } catch (e) {
      showMessage(e instanceof Error ? e.message : "Failed to create GIF", "error");
    } finally {
      setEncoding(false);
    }
  }, [frames, outWidth, outHeight, quality, frameDelayMs, bgColor, loopForever, showMessage]);

  const downloadGif = useCallback(() => {
    if (!resultBlob) {
      showMessage("Create a GIF first.", "error");
      return;
    }
    const a = document.createElement("a");
    a.href = URL.createObjectURL(resultBlob);
    a.download = `animation-${Date.now()}.gif`;
    a.click();
    URL.revokeObjectURL(a.href);
    showMessage("Download started.");
  }, [resultBlob, showMessage]);

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
          All processing runs in your browser. Images are never uploaded to a server.
        </p>
      </div>

      {frames.length === 0 ? (
        <div
          className={`flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-600 bg-surface p-12 text-center transition-colors hover:border-blue-500/50 ${encoding ? "pointer-events-none opacity-60" : ""}`}
          onClick={() => !encoding && fileInputRef.current?.click()}
          onDragOver={(e) => {
            e.preventDefault();
            if (!encoding) e.currentTarget.classList.add("border-blue-500");
          }}
          onDragLeave={(e) => {
            e.preventDefault();
            e.currentTarget.classList.remove("border-blue-500");
          }}
          onDrop={(e) => {
            e.preventDefault();
            e.currentTarget.classList.remove("border-blue-500");
            if (!encoding) addFiles(e.dataTransfer.files);
          }}
        >
          <svg className="mb-4 h-12 w-12 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <p className="mb-2 text-slate-400">Drop multiple images (order = animation frames)</p>
          <p className="mb-4 text-xs text-slate-500">PNG, JPG, WebP, GIF, BMP, AVIF, TIFF, HEIC/HEIF — up to {MAX_FRAMES} frames</p>
          <button
            type="button"
            className="rounded-lg bg-blue-600 px-6 py-2 font-medium text-white hover:bg-blue-500"
            onClick={(e) => {
              e.stopPropagation();
              fileInputRef.current?.click();
            }}
          >
            Choose Images
          </button>
        </div>
      ) : null}

      {frames.length > 0 && (
        <div className="space-y-6">
          <div className="rounded-xl border border-border bg-surface p-6">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm text-slate-300">
                <span className="font-medium text-slate-100">{frames.length}</span> frame(s) · Top to bottom = first
                to last in the GIF
              </p>
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                disabled={encoding || frames.length >= MAX_FRAMES}
                className="rounded-lg border border-border px-3 py-1.5 text-sm text-slate-300 hover:bg-slate-800 disabled:opacity-50"
              >
                Add more images
              </button>
            </div>

            <div className="mb-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {frames.map((row, idx) => (
                <div key={row.id} className="rounded-lg border border-border bg-slate-950/50 p-3">
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <span className="text-xs font-medium text-slate-500">#{idx + 1}</span>
                    <div className="flex gap-1">
                      <button
                        type="button"
                        disabled={encoding || idx === 0}
                        onClick={() => moveFrame(row.id, -1)}
                        className="rounded border border-border px-2 py-0.5 text-xs text-slate-400 hover:bg-slate-800 disabled:opacity-30"
                        title="Move up"
                      >
                        ↑
                      </button>
                      <button
                        type="button"
                        disabled={encoding || idx === frames.length - 1}
                        onClick={() => moveFrame(row.id, 1)}
                        className="rounded border border-border px-2 py-0.5 text-xs text-slate-400 hover:bg-slate-800 disabled:opacity-30"
                        title="Move down"
                      >
                        ↓
                      </button>
                      <button
                        type="button"
                        disabled={encoding}
                        onClick={() => removeFrame(row.id)}
                        className="rounded border border-red-500/40 px-2 py-0.5 text-xs text-red-400 hover:bg-red-500/10 disabled:opacity-30"
                      >
                        Remove
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

            <div className="grid gap-6 border-t border-border pt-6 lg:grid-cols-2">
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
                <p className="mt-1 text-xs text-slate-500">Time each frame stays visible before the next.</p>
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
                  />
                  <span className="min-w-[3rem] text-right text-slate-400">{quality}%</span>
                </div>
                <p className="mt-1 text-xs text-slate-500">Higher = sharper colors (larger file). Uses gif.js palette sampling.</p>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">Output width</label>
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
                <label className="mb-2 block text-sm font-medium text-slate-300">Output height</label>
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
                <label className="mb-2 block text-sm font-medium text-slate-300">Letterbox background</label>
                <input
                  type="color"
                  value={bgColor}
                  onChange={(e) => setBgColor(e.target.value)}
                  disabled={encoding}
                  className="h-10 w-24 cursor-pointer rounded border border-border bg-slate-950 disabled:opacity-50"
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
                  Loop forever
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
                {encoding ? `Encoding… ${encodeProgress}%` : "Create animated GIF"}
              </button>
              <button
                type="button"
                onClick={downloadGif}
                disabled={encoding || !resultBlob}
                className="rounded-lg border border-border bg-slate-700 px-6 py-2.5 font-medium text-slate-200 hover:bg-slate-600 disabled:opacity-50"
              >
                Download GIF
              </button>
              <button
                type="button"
                onClick={reset}
                disabled={encoding}
                className="rounded-lg border border-border px-6 py-2.5 text-slate-300 hover:bg-slate-800 disabled:opacity-50"
              >
                Reset
              </button>
            </div>

            {encoding && (
              <div className="mt-4">
                <div className="mb-1 flex justify-between text-xs text-slate-500">
                  <span>Encoding frames…</span>
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
            <div className="rounded-xl border border-border bg-surface p-6">
              <h3 className="mb-3 text-lg font-semibold text-slate-100">Preview</h3>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={resultUrl} alt="Animated GIF preview" className="max-h-96 rounded border border-border bg-slate-900 object-contain" />
              {resultBlob && (
                <p className="mt-2 text-sm text-slate-500">File size: {formatSize(resultBlob.size)}</p>
              )}
            </div>
          )}
        </div>
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*,.heic,.heif"
        multiple
        className="hidden"
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
