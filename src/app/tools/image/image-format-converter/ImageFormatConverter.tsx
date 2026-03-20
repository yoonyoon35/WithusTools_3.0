"use client";

import { useState, useCallback, useRef, useEffect } from "react";

type FormatMime = "image/png" | "image/jpeg" | "image/webp" | "image/gif" | "image/bmp" | "image/tiff" | "image/avif";

const FORMAT_SETTINGS: Record<
  FormatMime,
  { hasQuality: boolean; description: string; supportsTransparency: boolean }
> = {
  "image/png": { hasQuality: false, description: "Lossless compression, supports transparency", supportsTransparency: true },
  "image/jpeg": { hasQuality: true, description: "Small file size, ideal for photos", supportsTransparency: false },
  "image/webp": { hasQuality: true, description: "Web optimized, supports transparency", supportsTransparency: true },
  "image/gif": { hasQuality: false, description: "Supports animation, 256 colors", supportsTransparency: true },
  "image/bmp": { hasQuality: false, description: "Uncompressed, large file size", supportsTransparency: false },
  "image/tiff": { hasQuality: false, description: "Professional use, multi-image support", supportsTransparency: true },
  "image/avif": { hasQuality: true, description: "Next-gen format, high efficiency", supportsTransparency: true },
};

function isHEICFile(file: File): boolean {
  const name = file.name.toLowerCase();
  const type = file.type.toLowerCase();
  return (
    name.endsWith(".heic") ||
    name.endsWith(".heif") ||
    type === "image/heic" ||
    type === "image/heif"
  );
}

function isTIFFFile(file: File): boolean {
  const name = file.name.toLowerCase();
  const type = file.type.toLowerCase();
  return name.endsWith(".tiff") || name.endsWith(".tif") || type === "image/tiff";
}

function getFormatLabel(file: File): string {
  if (isHEICFile(file)) {
    return file.name.toLowerCase().endsWith(".heic") ? "HEIC" : "HEIF";
  }
  if (isTIFFFile(file)) return "TIFF";
  const type = file.type.split("/")[1];
  return type ? type.toUpperCase() : "Unknown";
}

function getOutputFilename(originalName: string, ext: string): string {
  const base = originalName.replace(/\.[^/.]+$/, "");
  return `${base}.${ext}`;
}

async function loadTIFFImage(file: File): Promise<string> {
  const tryUtif = async (): Promise<string> => {
    const UTIF = (await import("utif")).default;
    const ab = await file.arrayBuffer();
    const ifds = UTIF.decode(ab);
    if (ifds.length === 0) throw new Error("No image");

    const allIfds: typeof ifds = [...ifds];
    const subIFD = (ifds[0] as { subIFD?: typeof ifds }).subIFD;
    if (subIFD?.length) allIfds.push(...subIFD);

    let bestIfd: { width?: number; height?: number; t256?: number | number[]; t257?: number | number[] } | null = null;
    let bestW = 0;
    let bestH = 0;
    let bestArea = 0;
    for (const ifd of allIfds) {
      const w = (ifd as { t256?: number | number[] }).t256;
      const h = (ifd as { t257?: number | number[] }).t257;
      const width = (Array.isArray(w) ? w[0] : w) ?? 0;
      const height = (Array.isArray(h) ? h[0] : h) ?? 0;
      if (width > 0 && height > 0 && !isNaN(width) && !isNaN(height)) {
        const area = width * height;
        if (area > bestArea) {
          bestArea = area;
          bestIfd = ifd;
          bestW = width;
          bestH = height;
        }
      }
    }

    const targetIfd = bestIfd ?? ifds[0];
    UTIF.decodeImage(ab, targetIfd);
    const rgba = UTIF.toRGBA8(targetIfd);

    const ifd = targetIfd as { width?: number; height?: number; t256?: number | number[]; t257?: number | number[] };
    let w = ifd.width;
    let h = ifd.height;
    if (!w || !h || w <= 0 || h <= 0 || isNaN(w) || isNaN(h)) {
      w = Array.isArray(ifd.t256) ? ifd.t256[0] : ifd.t256;
      h = Array.isArray(ifd.t257) ? ifd.t257[0] : ifd.t257;
    }
    if (!w || !h || w <= 0 || h <= 0 || isNaN(w) || isNaN(h)) {
      w = bestW;
      h = bestH;
    }
    if (!w || !h || w <= 0 || h <= 0 || isNaN(w) || isNaN(h)) {
      const pixels = rgba.length / 4;
      const side = Math.round(Math.sqrt(pixels));
      if (side > 0 && side * side === pixels) w = h = side;
      else throw new Error("Invalid dimensions");
    }

    const canvas = document.createElement("canvas");
    canvas.width = Math.round(w);
    canvas.height = Math.round(h);
    const ctx = canvas.getContext("2d")!;
    const imgData = ctx.createImageData(canvas.width, canvas.height);
    imgData.data.set(rgba);
    ctx.putImageData(imgData, 0, 0);
    return canvas.toDataURL("image/png");
  };

  const tryBrowserFallback = async (): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const img = new Image();
        img.onload = () => resolve(reader.result as string);
        img.onerror = () => reject(new Error("Browser cannot decode this TIFF"));
        img.src = reader.result as string;
      };
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(file);
    });
  };

  try {
    return await tryUtif();
  } catch {
    return tryBrowserFallback();
  }
}

export default function ImageFormatConverter() {
  const [originalDataUrl, setOriginalDataUrl] = useState<string | null>(null);
  const [originalImage, setOriginalImage] = useState<HTMLImageElement | null>(null);
  const [originalFile, setOriginalFile] = useState<File | null>(null);
  const [convertedDataUrl, setConvertedDataUrl] = useState<string | null>(null);
  const [format, setFormat] = useState<FormatMime>("image/png");
  const [quality, setQuality] = useState(90);
  const [bgColor, setBgColor] = useState("#ffffff");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const messageTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showMessage = useCallback((text: string, type: "success" | "error" = "success") => {
    if (messageTimerRef.current) clearTimeout(messageTimerRef.current);
    setMessage({ text, type });
    messageTimerRef.current = setTimeout(() => {
      setMessage(null);
      messageTimerRef.current = null;
    }, 3000);
  }, []);

  useEffect(() => {
    return () => {
      if (messageTimerRef.current) clearTimeout(messageTimerRef.current);
    };
  }, []);

  const loadHEICImage = useCallback(
    async (file: File): Promise<string> => {
      const heic2any = (await import("heic2any")).default;
      const convertedBlob = await heic2any({
        blob: file,
        toType: "image/jpeg",
        quality: 0.9,
      });
      const result = Array.isArray(convertedBlob) ? convertedBlob[0] : convertedBlob;
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = () => reject(reader.error);
        reader.readAsDataURL(result);
      });
    },
    []
  );

  const loadImage = useCallback(
    async (file: File) => {
      if (!file) return;
      const isImage = file.type.startsWith("image/") || isHEICFile(file) || isTIFFFile(file);
      if (!isImage) {
        showMessage("Only image files can be uploaded.", "error");
        return;
      }

      setIsLoading(true);
      try {
        let dataUrl: string;

        if (isHEICFile(file)) {
          dataUrl = await loadHEICImage(file);
        } else if (isTIFFFile(file)) {
          dataUrl = await loadTIFFImage(file);
        } else {
          dataUrl = await new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = () => reject(reader.error);
            reader.readAsDataURL(file);
          });
        }

        const img = new Image();
        img.onload = () => {
          setOriginalDataUrl(dataUrl);
          setOriginalImage(img);
          setOriginalFile(file);
          setConvertedDataUrl(null);
          setIsLoading(false);
        };
        img.onerror = () => {
          showMessage("Failed to load image.", "error");
          setIsLoading(false);
        };
        img.src = dataUrl;
      } catch (err) {
        showMessage(
          err instanceof Error ? err.message : "An error occurred while loading the file.",
          "error"
        );
        setIsLoading(false);
      }
    },
    [loadHEICImage, showMessage]
  );

  const convertImage = useCallback(() => {
    if (!originalImage) {
      showMessage("Please upload an image first.", "error");
      return;
    }

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      showMessage("Failed to get canvas context.", "error");
      return;
    }

    canvas.width = originalImage.naturalWidth;
    canvas.height = originalImage.naturalHeight;

    const settings = FORMAT_SETTINGS[format];
    const needsBackground = !settings.supportsTransparency && originalFile && (
      originalFile.type === "image/png" ||
      originalFile.type === "image/gif" ||
      isHEICFile(originalFile) ||
      isTIFFFile(originalFile)
    );

    if (needsBackground) {
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    ctx.drawImage(originalImage, 0, 0);

    try {
      const dataUrl = settings.hasQuality
        ? canvas.toDataURL(format, quality / 100)
        : canvas.toDataURL(format);
      setConvertedDataUrl(dataUrl);
      showMessage("Image converted successfully.");
    } catch {
      showMessage("Browser does not support conversion to this format.", "error");
    }
  }, [originalImage, originalFile, format, quality, bgColor, showMessage]);

  const downloadImage = useCallback(() => {
    if (!convertedDataUrl || !originalFile) return;
    const ext = format.split("/")[1];
    const filename = getOutputFilename(originalFile.name, ext);
    const link = document.createElement("a");
    link.download = filename;
    link.href = convertedDataUrl;
    link.click();
  }, [convertedDataUrl, originalFile, format]);

  const reset = useCallback(() => {
    setOriginalDataUrl(null);
    setOriginalImage(null);
    setOriginalFile(null);
    setConvertedDataUrl(null);
    setFormat("image/png");
    setQuality(90);
    setBgColor("#ffffff");
    if (fileInputRef.current) fileInputRef.current.value = "";
    showMessage("The tool has been reset.");
  }, [showMessage]);

  const settings = FORMAT_SETTINGS[format];
  const displayUrl = convertedDataUrl ?? originalDataUrl;

  const formatSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  const estimatedSize = convertedDataUrl
    ? (convertedDataUrl.length - "data:image/xyz;base64,".length) * 0.75
    : null;

  const onDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      if (file && !isLoading) loadImage(file);
    },
    [loadImage, isLoading]
  );

  const showBackgroundColor = !settings.supportsTransparency && originalFile && (
    originalFile.type === "image/png" ||
    originalFile.type === "image/gif" ||
    isHEICFile(originalFile) ||
    isTIFFFile(originalFile)
  );

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

      {!originalDataUrl ? (
        <div className="rounded-xl border border-border bg-surface p-6">
          <h2 className="mb-4 text-lg font-semibold text-slate-100">Upload File</h2>
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={onDrop}
            onClick={() => !isLoading && fileInputRef.current?.click()}
            className={`flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-border bg-slate-950/50 px-6 py-8 transition-colors hover:border-slate-600 ${isLoading ? "pointer-events-none opacity-60" : ""}`}
          >
            {isLoading ? (
              <div className="mb-4 flex h-12 w-12 items-center justify-center">
                <svg className="h-10 w-10 animate-spin text-slate-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
              </div>
            ) : (
              <span className="mb-2 text-4xl text-slate-500">📁</span>
            )}
            <p className="mb-2 text-sm text-slate-400">
              {isLoading ? "Loading..." : "Drop image here or click to upload"}
            </p>
            <p className="text-xs text-slate-500">
              PNG, JPG, WebP, GIF, BMP, TIFF, AVIF, HEIC, HEIF
            </p>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*,.heic,.heif,.tiff,.tif"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) loadImage(file);
                e.target.value = "";
              }}
            />
          </div>
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
          <div className="rounded-xl border border-border bg-surface p-6">
            <p className="mb-3 text-sm font-medium text-slate-300">Preview</p>
            <div className="aspect-video overflow-hidden rounded-lg bg-slate-800">
              {displayUrl && (
                <img
                  src={displayUrl}
                  alt="Preview"
                  className="h-full w-full object-contain"
                />
              )}
            </div>
            {originalFile && originalImage && (
              <div className="mt-4 text-sm text-slate-500">
                Original Format: {getFormatLabel(originalFile)}
                <br />
                Size: {formatSize(originalFile.size)}
                <br />
                Dimensions: {originalImage.naturalWidth} × {originalImage.naturalHeight} px
                {convertedDataUrl && estimatedSize !== null && (
                  <>
                    <br />
                    Converted size: ~{formatSize(estimatedSize)}
                  </>
                )}
              </div>
            )}
          </div>

          <div className="rounded-xl border border-border bg-surface p-6">
            <div className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Convert to
                </label>
                <select
                  value={format}
                  onChange={(e) => setFormat(e.target.value as FormatMime)}
                  className="w-full rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-slate-200"
                >
                  <option value="image/png">PNG (Lossless)</option>
                  <option value="image/jpeg">JPG (High Compression)</option>
                  <option value="image/webp">WEBP (Optimized)</option>
                  <option value="image/gif">GIF (Animation)</option>
                  <option value="image/bmp">BMP (Uncompressed)</option>
                  <option value="image/tiff">TIFF (High Quality)</option>
                  <option value="image/avif">AVIF (Next-Gen)</option>
                </select>
              </div>

              {settings.hasQuality && (
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">
                    Quality (for JPG, WebP, AVIF)
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={quality}
                      onChange={(e) => setQuality(Number(e.target.value))}
                      className="flex-1"
                    />
                    <span className="min-w-[3rem] text-right text-slate-400">{quality}%</span>
                  </div>
                </div>
              )}

              {showBackgroundColor && (
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">
                    Background (for transparent images)
                  </label>
                  <input
                    type="color"
                    value={bgColor}
                    onChange={(e) => setBgColor(e.target.value)}
                    className="h-10 w-20 cursor-pointer rounded border border-border bg-slate-950"
                  />
                </div>
              )}

              <p className="text-xs italic text-slate-500">{settings.description}</p>

              <div className="flex flex-col gap-2">
                <button
                  type="button"
                  onClick={convertImage}
                  className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-500"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                  Convert
                </button>
                <button
                  type="button"
                  onClick={downloadImage}
                  disabled={!convertedDataUrl}
                  className="flex items-center justify-center gap-2 rounded-lg bg-slate-600 px-4 py-2 font-medium text-white hover:bg-slate-500 disabled:opacity-50"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                  Download
                </button>
                <button
                  type="button"
                  onClick={reset}
                  className="flex items-center justify-center gap-2 rounded-lg bg-slate-600 px-4 py-2 font-medium text-white hover:bg-slate-500"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                  Reset
                </button>
              </div>
            </div>
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
    </div>
  );
}
