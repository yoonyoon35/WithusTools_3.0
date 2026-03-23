"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import NumberInputWithStepper from "@/components/NumberInputWithStepper";

interface LoadedImage {
  name: string;
  element: HTMLImageElement;
  width: number;
  height: number;
}

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900";

export default function CssSpritesGenerator() {
  const [images, setImages] = useState<LoadedImage[]>([]);
  const [padding, setPadding] = useState(10);
  const [columns, setColumns] = useState(5);
  const [bgColor, setBgColor] = useState("#ffffff");
  const [spriteDataUrl, setSpriteDataUrl] = useState<string | null>(null);
  const [cssCode, setCssCode] = useState("");
  const [toast, setToast] = useState<{ text: string; type: "success" | "error" } | null>(null);
  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const showToast = useCallback((msg: string, type: "success" | "error" = "success") => {
    if (toastTimerRef.current) {
      clearTimeout(toastTimerRef.current);
      toastTimerRef.current = null;
    }
    setToast({ text: msg, type });
    toastTimerRef.current = setTimeout(() => {
      setToast(null);
      toastTimerRef.current = null;
    }, 3000);
  }, []);

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    };
  }, []);

  const loadImage = (file: File): Promise<LoadedImage> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () =>
          resolve({
            name: file.name.replace(/\.[^/.]+$/, ""),
            element: img,
            width: img.naturalWidth,
            height: img.naturalHeight,
          });
        img.onerror = () => reject(new Error("Failed to load image"));
        img.src = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    });

  const handleFiles = useCallback(
    (files: FileList | null) => {
      if (!files?.length) return;
      const imageFiles = Array.from(files).filter((f) => f.type.startsWith("image/"));
      if (!imageFiles.length) {
        showToast("Please select image files", "error");
        return;
      }
      Promise.all(imageFiles.map(loadImage))
        .then((loaded) => setImages((prev) => [...prev, ...loaded]))
        .catch(() => showToast("Failed to load images", "error"));
    },
    [showToast]
  );

  const removeImage = useCallback((index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const generateSprite = useCallback(() => {
    if (!images.length) return;
    const maxCols = Math.max(1, columns);
    const cols = Math.min(images.length, maxCols);
    const rows = Math.ceil(images.length / cols);
    const maxWidth = Math.max(...images.slice(0, cols).map((img) => img.width));
    const maxHeight = Math.max(...images.map((img) => img.height));

    const canvas = document.createElement("canvas");
    canvas.width = maxWidth * cols + padding * (cols - 1);
    canvas.height = maxHeight * rows + padding * (rows - 1);
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    let css =
      ".sprite {\n    background-image: url(sprite.png);\n    background-repeat: no-repeat;\n}\n\n";

    images.forEach((img, i) => {
      const row = Math.floor(i / cols);
      const col = i % cols;
      const x = col * (maxWidth + padding);
      const y = row * (maxHeight + padding);
      ctx.drawImage(img.element, x, y);
      css += `.sprite-${img.name} {\n`;
      css += `    width: ${img.width}px;\n`;
      css += `    height: ${img.height}px;\n`;
      css += `    background-position: -${x}px -${y}px;\n`;
      css += `}\n\n`;
    });

    setSpriteDataUrl(canvas.toDataURL("image/png"));
    setCssCode(css);
    showToast("Sprite generated!", "success");
  }, [images, padding, columns, bgColor, showToast]);

  const downloadSprite = useCallback(() => {
    if (!spriteDataUrl) return;
    const link = document.createElement("a");
    link.download = "sprite.png";
    link.href = spriteDataUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast("Downloaded!");
  }, [spriteDataUrl, showToast]);

  const copyCss = useCallback(() => {
    navigator.clipboard
      .writeText(cssCode)
      .then(() => showToast("CSS copied!", "success"))
      .catch(() => showToast("Failed to copy", "error"));
  }, [cssCode, showToast]);

  const reset = useCallback(() => {
    setImages([]);
    setSpriteDataUrl(null);
    setCssCode("");
    setPadding(10);
    setColumns(5);
    setBgColor("#ffffff");
    if (fileInputRef.current) fileInputRef.current.value = "";
    showToast("Reset", "success");
  }, [showToast]);

  return (
    <div className="space-y-6" role="main" aria-label="CSS Sprites Generator">
      {images.length === 0 ? (
        <div className="rounded-xl border border-border bg-surface p-6">
          <h2 className="mb-4 text-lg font-semibold text-slate-100">Upload Files</h2>
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              handleFiles(e.dataTransfer.files);
            }}
            onClick={() => fileInputRef.current?.click()}
            className="flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-border bg-slate-950/50 px-6 py-8 transition-colors hover:border-slate-600"
          >
            <span className="mb-2 text-4xl text-slate-500">📁</span>
            <p className="mb-2 text-sm text-slate-400">Drop images here or click to upload</p>
            <p className="text-xs text-slate-500">Supports multiple files</p>
          </div>
        </div>
      ) : (
        <>
          <div className="rounded-xl border border-border bg-surface p-6">
            <h3 className="mb-3 text-lg font-semibold text-slate-100">Images</h3>
            <div className="flex flex-wrap gap-2">
              {images.map((img, i) => (
                <div key={i} className="relative">
                  <img
                    src={img.element.src}
                    alt={img.name}
                    className="h-20 w-20 rounded border border-border object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(i)}
                    aria-label={`Remove ${img.name}`}
                    className={`absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white hover:bg-red-600 ${focusRing}`}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              aria-label="Add more images"
              className={`mt-3 text-sm text-blue-400 hover:underline ${focusRing}`}
            >
              Add more images
            </button>
          </div>

          <div className="rounded-xl border border-border bg-surface p-6">
            <h3 className="mb-3 text-lg font-semibold text-slate-100">Settings</h3>
            <div className="flex flex-wrap gap-4">
              <div>
                <label htmlFor="sprite-padding" className="mb-1 block text-sm text-slate-400">
                  Padding (px)
                </label>
                <NumberInputWithStepper
                  id="sprite-padding"
                  value={String(padding)}
                  onChange={(v) => setPadding(Number(v) || 0)}
                  min={0}
                  aria-label="Padding in pixels"
                  className="w-24"
                />
              </div>
              <div>
                <label htmlFor="sprite-columns" className="mb-1 block text-sm text-slate-400">
                  Max Columns
                </label>
                <NumberInputWithStepper
                  id="sprite-columns"
                  value={String(columns)}
                  onChange={(v) => setColumns(Number(v) || 1)}
                  min={1}
                  aria-label="Maximum columns"
                  className="w-24"
                />
              </div>
              <div>
                <label htmlFor="sprite-bg" className="mb-1 block text-sm text-slate-400">
                  Background
                </label>
                <input
                  id="sprite-bg"
                  type="color"
                  value={bgColor}
                  onChange={(e) => setBgColor(e.target.value)}
                  aria-label="Background color"
                  className={`h-10 w-14 cursor-pointer rounded border-0 bg-transparent p-0 ${focusRing}`}
                />
              </div>
            </div>
            <div className="mt-3 flex gap-2">
              <button
                type="button"
                onClick={generateSprite}
                disabled={!images.length}
                aria-label="Generate sprite from images"
                className={`rounded-lg border border-blue-500 bg-blue-500/20 px-4 py-2 text-sm font-medium text-blue-300 hover:bg-blue-500/30 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-blue-500/20 ${focusRing}`}
              >
                Generate Sprite
              </button>
              <button
                type="button"
                onClick={reset}
                aria-label="Reset and clear all"
                className={`rounded-lg border border-border px-4 py-2 text-sm text-slate-300 hover:border-slate-600 hover:bg-slate-700 ${focusRing}`}
              >
                Reset
              </button>
            </div>
          </div>

          {spriteDataUrl && (
            <div className="rounded-xl border border-border bg-surface p-6">
              <h3 className="mb-3 text-lg font-semibold text-slate-100">Sprite Preview</h3>
              <img
                src={spriteDataUrl}
                alt="Sprite"
                className="max-h-64 rounded border border-border"
              />
              <div className="mt-4 flex gap-2">
                <button
                  type="button"
                  onClick={downloadSprite}
                  aria-label="Download sprite image"
                  className={`rounded-lg border border-border px-4 py-2 text-sm text-slate-300 hover:border-slate-600 hover:bg-slate-700 ${focusRing}`}
                >
                  Download
                </button>
                <button
                  type="button"
                  onClick={copyCss}
                  disabled={!cssCode}
                  aria-label="Copy CSS code"
                  className={`rounded-lg border border-border px-4 py-2 text-sm text-slate-300 hover:border-slate-600 hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-border disabled:hover:bg-transparent ${focusRing}`}
                >
                  Copy CSS
                </button>
              </div>
            </div>
          )}

          {cssCode && (
            <div className="rounded-xl border border-border bg-surface p-6">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-100">CSS Code</h3>
                <button
                  type="button"
                  onClick={copyCss}
                  aria-label="Copy CSS code"
                  className={`rounded-lg border border-border px-4 py-2 text-sm text-slate-300 hover:border-slate-600 hover:bg-slate-700 ${focusRing}`}
                >
                  Copy
                </button>
              </div>
              <pre
                className="scrollbar-thin max-h-[50vh] overflow-auto rounded-lg border border-border bg-slate-950 p-4 text-sm text-slate-300"
                aria-label="Generated CSS code"
              >
                {cssCode}
              </pre>
            </div>
          )}
        </>
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={(e) => handleFiles(e.target.files)}
        aria-label="Select image files for sprite"
      />

      {toast && (
        <div
          className={`fixed right-4 top-4 z-50 rounded-lg px-4 py-2 text-sm font-medium text-white shadow-lg ${
            toast.type === "success" ? "bg-green-600" : "bg-red-600"
          }`}
          role="alert"
          aria-live="polite"
          aria-atomic="true"
        >
          {toast.text}
        </div>
      )}
    </div>
  );
}
