"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import Link from "next/link";
import NumberInputWithStepper from "@/components/NumberInputWithStepper";

const PDFJS_VERSION = "3.11.174";

export type ImageFormat =
  | "heic"
  | "heif"
  | "avif"
  | "bmp"
  | "png"
  | "webp"
  | "svg"
  | "tiff"
  | "psd"
  | "jfif"
  | "ico"
  | "ai"
  | "dng"
  | "cr2"
  | "cr3"
  | "tga";

export interface JPGConverterProps {
  format: ImageFormat;
  displayName: string;
  acceptTypes: string;
  /** PNG: background color for transparency */
  hasBackgroundColor?: boolean;
  /** SVG: custom dimensions */
  hasDimensions?: boolean;
}

function loadImage(file: File): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = URL.createObjectURL(file);
  });
}

function canvasToJpegBlob(
  canvas: HTMLCanvasElement,
  quality: number
): Promise<Blob> {
  return new Promise((resolve) => {
    canvas.toBlob((b) => resolve(b!), "image/jpeg", quality);
  });
}

function applyOrientation(src: HTMLCanvasElement, orientation: number): HTMLCanvasElement {
  if (!orientation || orientation === 1) return src;
  const w = src.width;
  const h = src.height;
  const out = document.createElement("canvas");
  const ctx = out.getContext("2d")!;
  switch (orientation) {
    case 2:
      out.width = w;
      out.height = h;
      ctx.translate(w, 0);
      ctx.scale(-1, 1);
      ctx.drawImage(src, 0, 0, w, h);
      break;
    case 3:
      out.width = w;
      out.height = h;
      ctx.translate(w, h);
      ctx.rotate(Math.PI);
      ctx.drawImage(src, 0, 0, w, h);
      break;
    case 4:
      out.width = w;
      out.height = h;
      ctx.translate(0, h);
      ctx.scale(1, -1);
      ctx.drawImage(src, 0, 0, w, h);
      break;
    case 5:
      out.width = h;
      out.height = w;
      ctx.transform(0, 1, 1, 0, 0, 0);
      ctx.drawImage(src, 0, 0, w, h);
      break;
    case 6:
      out.width = h;
      out.height = w;
      ctx.setTransform(0, 1, -1, 0, h, 0);
      ctx.drawImage(src, 0, 0, w, h);
      break;
    case 7:
      out.width = h;
      out.height = w;
      ctx.setTransform(0, -1, -1, 0, h, w);
      ctx.drawImage(src, 0, 0, w, h);
      break;
    case 8:
      out.width = h;
      out.height = w;
      ctx.setTransform(0, -1, 1, 0, 0, w);
      ctx.drawImage(src, 0, 0, w, h);
      break;
    default:
      return src;
  }
  return out;
}

export default function JPGConverter({
  format,
  displayName,
  acceptTypes,
  hasBackgroundColor = false,
  hasDimensions = false,
}: JPGConverterProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [converted, setConverted] = useState<File[]>([]);
  const [quality, setQuality] = useState(90);
  const [loading, setLoading] = useState(false);
  const [convertProgress, setConvertProgress] = useState<{ percent: number; current: number; total: number } | null>(null);
  const [message, setMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);
  const [bgColor, setBgColor] = useState("#ffffff");
  const [width, setWidth] = useState(1024);
  const [height, setHeight] = useState(1024);
  const [maintainAspect, setMaintainAspect] = useState(true);
  const [useOriginalSize, setUseOriginalSize] = useState(false);
  const [filePreviewUrls, setFilePreviewUrls] = useState<string[]>([]);
  const [failedPreviews, setFailedPreviews] = useState<Set<number>>(new Set());
  const [pdfReady, setPdfReady] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (format !== "ai") return;
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
          /* getter-only */
        }
        setPdfReady(true);
      } else {
        setTimeout(() => {
          if ((window as Window & { pdfjsLib?: unknown }).pdfjsLib) setPdfReady(true);
        }, 100);
      }
    };
    document.head.appendChild(script);
    return () => script.remove();
  }, [format]);

  useEffect(() => {
    setFailedPreviews(new Set());
    const urls = files.map((f) => URL.createObjectURL(f));
    setFilePreviewUrls((prev) => {
      prev.forEach(URL.revokeObjectURL);
      return urls;
    });
    return () => urls.forEach(URL.revokeObjectURL);
  }, [files]);

  const showMessage = useCallback((text: string, type: "success" | "error" = "success") => {
    setMessage({ text, type });
    setTimeout(() => setMessage(null), 3000);
  }, []);

  const addFiles = useCallback(
    (fileList: FileList | null) => {
      if (!fileList) return;
      const arr = Array.from(fileList);
      const filtered = arr.filter((f) => {
        if (format === "heic" || format === "heif")
          return (
            f.type === "image/heic" ||
            f.type === "image/heif" ||
            f.name.toLowerCase().endsWith(".heic") ||
            f.name.toLowerCase().endsWith(".heif")
          );
        if (format === "avif") return f.type === "image/avif" || f.name.toLowerCase().endsWith(".avif");
        if (format === "bmp") return f.type === "image/bmp" || f.name.toLowerCase().endsWith(".bmp");
        if (format === "png") return f.type === "image/png";
        if (format === "webp") return f.type === "image/webp";
        if (format === "svg")
          return f.type === "image/svg+xml" || f.name.toLowerCase().endsWith(".svg");
        if (format === "tiff")
          return (
            f.type === "image/tiff" ||
            f.name.toLowerCase().endsWith(".tiff") ||
            f.name.toLowerCase().endsWith(".tif")
          );
        if (format === "psd")
          return (
            f.type === "image/vnd.adobe.photoshop" ||
            f.name.toLowerCase().endsWith(".psd")
          );
        if (format === "jfif")
          return (
            f.name.toLowerCase().endsWith(".jfif") ||
            f.name.toLowerCase().endsWith(".jfi")
          );
        if (format === "ico")
          return (
            f.type === "image/x-icon" ||
            f.name.toLowerCase().endsWith(".ico")
          );
        if (format === "ai") return f.name.toLowerCase().endsWith(".ai");
        if (format === "dng") return f.name.toLowerCase().endsWith(".dng");
        if (format === "cr2") return f.name.toLowerCase().endsWith(".cr2");
        if (format === "cr3") return f.name.toLowerCase().endsWith(".cr3");
        if (format === "tga") return f.name.toLowerCase().endsWith(".tga");
        return false;
      });
      if (filtered.length === 0) {
        showMessage(`Please select ${displayName} files only`, "error");
        return;
      }
      setFiles((prev) => [...prev, ...filtered]);
      setConverted([]);
    },
    [format, displayName, showMessage]
  );

  const convertFiles = useCallback(async () => {
    if (files.length === 0) {
      showMessage("No files to convert", "error");
      return;
    }
    setLoading(true);
    setConverted([]);
    setConvertProgress({ percent: 0, current: 0, total: files.length });
    const results: File[] = [];

    const updateProgress = (current: number) => {
      const total = files.length;
      const percent = total > 0 ? Math.round((current / total) * 100) : 0;
      setConvertProgress({ percent, current, total });
    };

    try {
      if (format === "heic" || format === "heif") {
        const heic2any = (await import("heic2any")).default;
        for (let i = 0; i < files.length; i++) {
          updateProgress(i);
          const file = files[i];
          const result = await heic2any({
            blob: file,
            toType: "image/jpeg",
            quality: quality / 100,
          });
          const blob = Array.isArray(result) ? result[0] : result;
          const outName = file.name.replace(/\.(heic|heif)$/i, ".jpg");
          results.push(new File([blob], outName, { type: "image/jpeg" }));
        }
        setConvertProgress({ percent: 100, current: files.length - 1, total: files.length });
      } else if (format === "tiff") {
        const convertTiffToJpg = async (file: File): Promise<File> => {
          const tryUtif = async (): Promise<File> => {
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
            const blob = await canvasToJpegBlob(canvas, quality / 100);
            return new File([blob], file.name.replace(/\.(tiff|tif)$/i, ".jpg"), { type: "image/jpeg" });
          };

          const tryBrowserFallback = async (): Promise<File> => {
            const url = URL.createObjectURL(file);
            const img = await new Promise<HTMLImageElement>((resolve, reject) => {
              const i = new Image();
              i.onload = () => resolve(i);
              i.onerror = () => reject(new Error("Browser cannot decode this TIFF"));
              i.src = url;
            });
            try {
              const canvas = document.createElement("canvas");
              canvas.width = img.naturalWidth;
              canvas.height = img.naturalHeight;
              const ctx = canvas.getContext("2d")!;
              ctx.drawImage(img, 0, 0);
              const blob = await canvasToJpegBlob(canvas, quality / 100);
              return new File([blob], file.name.replace(/\.(tiff|tif)$/i, ".jpg"), { type: "image/jpeg" });
            } finally {
              URL.revokeObjectURL(url);
            }
          };

          try {
            return await tryUtif();
          } catch {
            return tryBrowserFallback();
          }
        };

        for (let i = 0; i < files.length; i++) {
          updateProgress(i);
          results.push(await convertTiffToJpg(files[i]));
        }
        setConvertProgress({ percent: 100, current: files.length - 1, total: files.length });
      } else if (format === "dng" || format === "cr2") {
        const extPat = format === "dng" ? /\.dng$/i : /\.cr2$/i;
        const formatLabel = format === "dng" ? "DNG" : "CR2";
        const convertTiffRawToJpg = async (file: File): Promise<File> => {
          const ab = await file.arrayBuffer();
          const arr = new Uint8Array(ab);

          const extractJpegFromTiffStrips = (): Blob | null => {
            const U = (window as Window & { UTIF?: { decode: (b: ArrayBuffer) => unknown[] } }).UTIF;
            if (!U) return null;
            const raw = U.decode(ab) as Array<{
              t259?: number[];
              t273?: number[];
              t279?: number[];
              t324?: number[];
              t325?: number[];
              t347?: Uint8Array;
              subIFD?: unknown[];
            }>;
            const ifds = raw.flatMap((i) => (i.subIFD ? [i, ...i.subIFD] : [i])) as typeof raw;
            for (const ifd of ifds) {
              const comp = ifd.t259?.[0];
              if (comp !== 6 && comp !== 7) continue;
              const offsets = ifd.t273 ?? ifd.t324;
              const counts = ifd.t279 ?? ifd.t325;
              if (!offsets?.length || !counts?.length) continue;
              for (let s = 0; s < offsets.length; s++) {
                const off = offsets[s];
                const len = counts[s] ?? counts[0];
                if (off + len > arr.length) continue;
                const slice = arr.subarray(off, off + len);
                if (slice[0] === 0xff && slice[1] === 0xd8) {
                  return new Blob([slice], { type: "image/jpeg" });
                }
                if (comp === 7 && ifd.t347?.length) {
                  const tables = ifd.t347;
                  let end = tables.length;
                  for (let i = 0; i < tables.length - 1; i++) {
                    if (tables[i] === 0xff && tables[i + 1] === 0xd9) {
                      end = i;
                      break;
                    }
                  }
                  const prefixed = new Uint8Array(end + len);
                  prefixed.set(tables.subarray(0, end));
                  prefixed.set(slice, end);
                  if (prefixed[0] === 0xff && prefixed[1] === 0xd8) {
                    return new Blob([prefixed], { type: "image/jpeg" });
                  }
                }
              }
            }
            return null;
          };

          const extractJpegByScan = (): Blob | null => {
            const jpegs: { start: number; end: number }[] = [];
            for (let i = 0; i < arr.length - 1; i++) {
              if (arr[i] !== 0xff || arr[i + 1] !== 0xd8) continue;
              let j = i + 2;
              while (j < arr.length - 1) {
                if (arr[j] === 0xff && arr[j + 1] === 0xd9) {
                  jpegs.push({ start: i, end: j + 2 });
                  break;
                }
                if (arr[j] === 0xff && arr[j + 1] === 0x00) j += 2;
                else j++;
              }
            }
            if (jpegs.length === 0) return null;
            const best = jpegs.reduce((a, b) =>
              b.end - b.start > a.end - a.start ? b : a
            );
            return new Blob([arr.subarray(best.start, best.end)], { type: "image/jpeg" });
          };

          const tryUtifAllIfds = async (): Promise<File> => {
            const UTIF = (await import("utif")).default;
            const ifds = UTIF.decode(ab);
            if (ifds.length === 0) throw new Error("No image");
            const allIfds: typeof ifds = [...ifds];
            const subIFD = (ifds[0] as { subIFD?: typeof ifds }).subIFD;
            if (subIFD?.length) allIfds.push(...subIFD);
            const comp = (x: object) => (x as { t259?: number[] }).t259?.[0] ?? 99;
            const area = (x: object) => {
              const w = (x as { t256?: number | number[] }).t256;
              const h = (x as { t257?: number | number[] }).t257;
              const ww = Array.isArray(w) ? w[0] : w ?? 0;
              const hh = Array.isArray(h) ? h[0] : h ?? 0;
              return (ww || 0) * (hh || 0);
            };
            allIfds.sort((a, b) => {
              const c6 = comp(a) === 6 || comp(a) === 7 ? 0 : 1;
              const c7 = comp(b) === 6 || comp(b) === 7 ? 0 : 1;
              if (c6 !== c7) return c6 - c7;
              return area(b) - area(a);
            });

            for (const targetIfd of allIfds) {
              try {
                UTIF.decodeImage(ab, targetIfd);
                const rgba = UTIF.toRGBA8(targetIfd);
                const ifd = targetIfd as { width?: number; height?: number; t256?: number | number[]; t257?: number | number[] };
                let w = ifd.width ?? (Array.isArray(ifd.t256) ? ifd.t256[0] : ifd.t256);
                let h = ifd.height ?? (Array.isArray(ifd.t257) ? ifd.t257[0] : ifd.t257);
                if (!w || !h || w <= 0 || h <= 0 || isNaN(w) || isNaN(h)) {
                  const px = rgba.length / 4;
                  const side = Math.round(Math.sqrt(px));
                  if (side > 0 && side * side === px) w = h = side;
                  else continue;
                }
                const sum = rgba.reduce((a: number, b: number) => a + b, 0);
                if (sum === 0) continue;
                const canvas = document.createElement("canvas");
                canvas.width = Math.round(w);
                canvas.height = Math.round(h);
                const ctx = canvas.getContext("2d")!;
                const imgData = ctx.createImageData(canvas.width, canvas.height);
                imgData.data.set(rgba);
                ctx.putImageData(imgData, 0, 0);
                const o274 = (x: object) => (x as { t274?: number[] }).t274?.[0];
                const exif = (x: object) => (x as { exifIFD?: object }).exifIFD;
                const orientRaw = o274(targetIfd) ?? o274(ifds[0]) ?? (exif(ifds[0]) ? o274(exif(ifds[0])!) : undefined);
                const orient = orientRaw ?? 6;
                const oriented = applyOrientation(canvas, orient);
                const blob = await canvasToJpegBlob(oriented, quality / 100);
                return new File([blob], file.name.replace(extPat, ".jpg"), { type: "image/jpeg" });
              } catch {
                continue;
              }
            }
            throw new Error("UTIF could not decode any IFD");
          };

          const loadJpegBlobAsFile = async (
            jpegBlob: Blob,
            orientationOverride?: number
          ): Promise<File> => {
            const url = URL.createObjectURL(jpegBlob);
            try {
              const img = await new Promise<HTMLImageElement>((resolve, reject) => {
                const i = new Image();
                i.onload = () => resolve(i);
                i.onerror = () => reject(new Error("Failed to decode JPEG"));
                i.src = url;
              });
              const canvas = document.createElement("canvas");
              canvas.width = img.naturalWidth;
              canvas.height = img.naturalHeight;
              const ctx = canvas.getContext("2d")!;
              ctx.drawImage(img, 0, 0);
              const orient = orientationOverride ?? 1;
              const oriented = applyOrientation(canvas, orient);
              const blob = await canvasToJpegBlob(oriented, quality / 100);
              return new File([blob], file.name.replace(extPat, ".jpg"), { type: "image/jpeg" });
            } finally {
              URL.revokeObjectURL(url);
            }
          };

          const getDngOrientation = (): number => {
            const U = (window as Window & { UTIF?: { decode: (b: ArrayBuffer) => object[] } }).UTIF;
            if (!U) return 1;
            const ifds = U.decode(ab);
            const o = (x: object) => (x as { t274?: number[] }).t274?.[0];
            const check = (x: object): number | undefined => {
              const v = o(x);
              if (v) return v;
              const exif = (x as { exifIFD?: object }).exifIFD;
              return exif ? o(exif) : undefined;
            };
            for (const ifd of ifds) {
              const v = check(ifd);
              if (v) return v;
            }
            const first = ifds[0] as { subIFD?: object[]; exifIFD?: object } | undefined;
            for (const s of first?.subIFD ?? []) {
              const v = check(s);
              if (v) return v;
            }
            if (first?.exifIFD) {
              const v = o(first.exifIFD);
              if (v) return v;
            }
            return 1;
          };

          try {
            return await tryUtifAllIfds();
          } catch {
            const UTIF = (await import("utif")).default;
            (window as Window & { UTIF?: typeof UTIF }).UTIF = UTIF;
            let jpegBlob = extractJpegFromTiffStrips();
            if (!jpegBlob) jpegBlob = extractJpegByScan();
            if (!jpegBlob) throw new Error(`No embedded JPEG preview found. This ${formatLabel} may contain only raw sensor data without a preview.`);
            const orient = getDngOrientation();
            return loadJpegBlobAsFile(jpegBlob, orient === 1 ? 6 : orient);
          }
        };
        for (let i = 0; i < files.length; i++) {
          updateProgress(i);
          results.push(await convertTiffRawToJpg(files[i]));
        }
        setConvertProgress({ percent: 100, current: files.length - 1, total: files.length });
      } else if (format === "cr3") {
        const convertCr3ToJpg = async (file: File): Promise<File> => {
          const ab = await file.arrayBuffer();
          const arr = new Uint8Array(ab);
          const jpegs: { start: number; end: number }[] = [];
          for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] !== 0xff || arr[i + 1] !== 0xd8) continue;
            let j = i + 2;
            while (j < arr.length - 1) {
              if (arr[j] === 0xff && arr[j + 1] === 0xd9) {
                jpegs.push({ start: i, end: j + 2 });
                break;
              }
              if (arr[j] === 0xff && arr[j + 1] === 0x00) j += 2;
              else j++;
            }
          }
          if (jpegs.length === 0) throw new Error("No embedded JPEG preview found. This CR3 may contain only raw sensor data without a preview.");
          const best = jpegs.reduce((a, b) =>
            b.end - b.start > a.end - a.start ? b : a
          );
          const jpegBlob = new Blob([arr.subarray(best.start, best.end)], { type: "image/jpeg" });
          const url = URL.createObjectURL(jpegBlob);
          try {
            const img = await new Promise<HTMLImageElement>((resolve, reject) => {
              const i = new Image();
              i.onload = () => resolve(i);
              i.onerror = () => reject(new Error("Failed to decode embedded preview"));
              i.src = url;
            });
            const canvas = document.createElement("canvas");
            canvas.width = img.naturalWidth;
            canvas.height = img.naturalHeight;
            const ctx = canvas.getContext("2d")!;
            ctx.drawImage(img, 0, 0);
            const blob = await canvasToJpegBlob(canvas, quality / 100);
            return new File([blob], file.name.replace(/\.cr3$/i, ".jpg"), { type: "image/jpeg" });
          } finally {
            URL.revokeObjectURL(url);
          }
        };
        for (let i = 0; i < files.length; i++) {
          updateProgress(i);
          results.push(await convertCr3ToJpg(files[i]));
        }
        setConvertProgress({ percent: 100, current: files.length - 1, total: files.length });
      } else if (format === "tga") {
        const { decodeTga } = await import("@lunapaint/tga-codec");
        for (let i = 0; i < files.length; i++) {
          updateProgress(i);
          const file = files[i];
          const ab = await file.arrayBuffer();
          const decoded = await decodeTga(new Uint8Array(ab));
          const { data, width: w, height: h } = decoded.image;
          const canvas = document.createElement("canvas");
          canvas.width = w;
          canvas.height = h;
          const ctx = canvas.getContext("2d")!;
          const imgData = ctx.createImageData(w, h);
          imgData.data.set(data);
          ctx.putImageData(imgData, 0, 0);
          let outCanvas: HTMLCanvasElement = canvas;
          if (hasBackgroundColor) {
            const bg = document.createElement("canvas");
            bg.width = w;
            bg.height = h;
            const bgCtx = bg.getContext("2d")!;
            bgCtx.fillStyle = bgColor;
            bgCtx.fillRect(0, 0, w, h);
            bgCtx.drawImage(canvas, 0, 0);
            outCanvas = bg;
          }
          const blob = await canvasToJpegBlob(outCanvas, quality / 100);
          results.push(new File([blob], file.name.replace(/\.tga$/i, ".jpg"), { type: "image/jpeg" }));
        }
        setConvertProgress({ percent: 100, current: files.length - 1, total: files.length });
      } else if (format === "psd") {
        const { readPsd } = await import("ag-psd");
        for (let i = 0; i < files.length; i++) {
          updateProgress(i);
          const file = files[i];
          const ab = await file.arrayBuffer();
          const psd = readPsd(ab);
          const canvas = psd.canvas;
          if (!canvas) {
            throw new Error(`Could not read image from ${file.name}. PSD may use unsupported color mode (CMYK, LAB, etc.).`);
          }
          const blob = await canvasToJpegBlob(canvas, quality / 100);
          const outName = file.name.replace(/\.psd$/i, ".jpg");
          results.push(new File([blob], outName, { type: "image/jpeg" }));
        }
        setConvertProgress({ percent: 100, current: files.length - 1, total: files.length });
      } else if (format === "ai") {
        const pdfjs = typeof window !== "undefined" ? (window as Window & { pdfjsLib?: typeof window.pdfjsLib }).pdfjsLib : undefined;
        if (!pdfjs) throw new Error("Document library is loading. Please wait.");
        for (let i = 0; i < files.length; i++) {
          updateProgress(i);
          const file = files[i];
          const ab = await file.arrayBuffer();
          const pdf = await pdfjs.getDocument({ data: ab, length: ab.byteLength }).promise;
          const numPages = pdf.numPages;
          const baseName = file.name.replace(/\.ai$/i, "");
          for (let p = 1; p <= numPages; p++) {
            const page = await pdf.getPage(p);
            const scale = 2;
            const viewport = page.getViewport({ scale });
            const canvas = document.createElement("canvas");
            canvas.width = viewport.width;
            canvas.height = viewport.height;
            const ctx = canvas.getContext("2d")!;
            await page.render({ canvasContext: ctx, viewport }).promise;
            const blob = await canvasToJpegBlob(canvas, quality / 100);
            const outName = numPages > 1 ? `${baseName}-page-${p}.jpg` : `${baseName}.jpg`;
            results.push(new File([blob], outName, { type: "image/jpeg" }));
          }
        }
        setConvertProgress({ percent: 100, current: files.length - 1, total: files.length });
      } else if (format === "svg") {
        for (let i = 0; i < files.length; i++) {
          updateProgress(i);
          const file = files[i];
          const svgText = await file.text();
          const blob = new Blob([svgText], { type: "image/svg+xml" });
          const url = URL.createObjectURL(blob);
          const img = await loadImage(new File([blob], file.name, { type: "image/svg+xml" }));
          const w = useOriginalSize ? img.naturalWidth : width;
          const h = useOriginalSize ? img.naturalHeight : height;
          const canvas = document.createElement("canvas");
          canvas.width = w;
          canvas.height = h;
          const ctx = canvas.getContext("2d")!;
          ctx.fillStyle = "#ffffff";
          ctx.fillRect(0, 0, w, h);
          ctx.drawImage(img, 0, 0, w, h);
          const outBlob = await canvasToJpegBlob(canvas, quality / 100);
          const outName = file.name.replace(".svg", ".jpg");
          results.push(new File([outBlob], outName, { type: "image/jpeg" }));
          URL.revokeObjectURL(url);
        }
        setConvertProgress({ percent: 100, current: files.length - 1, total: files.length });
      } else {
        for (let i = 0; i < files.length; i++) {
          updateProgress(i);
          const file = files[i];
          const img = await loadImage(file);
          const canvas = document.createElement("canvas");
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext("2d")!;
          if (hasBackgroundColor && (format === "png" || format === "ico")) {
            ctx.fillStyle = bgColor;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
          }
          ctx.drawImage(img, 0, 0);
          const blob = await canvasToJpegBlob(canvas, quality / 100);
          const ext = format === "avif" ? "avif" : format === "webp" ? "webp" : format === "jfif" ? "jfif" : format === "ico" ? "ico" : format;
          const outName = file.name.replace(new RegExp(`\\.${ext}$`, "i"), ".jpg");
          results.push(new File([blob], outName, { type: "image/jpeg" }));
        }
        setConvertProgress({ percent: 100, current: files.length - 1, total: files.length });
      }
      setConverted(results);
      showMessage("Conversion completed successfully");
    } catch (err) {
      showMessage(err instanceof Error ? err.message : "Conversion failed", "error");
      console.error(err);
    } finally {
      setLoading(false);
      setConvertProgress(null);
    }
  }, [
    files,
    format,
    quality,
    hasBackgroundColor,
    bgColor,
    width,
    height,
    useOriginalSize,
    showMessage,
  ]);

  const downloadFile = useCallback((file: File) => {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(file);
    a.download = file.name;
    a.click();
    URL.revokeObjectURL(a.href);
  }, []);

  const downloadAll = useCallback(() => {
    if (converted.length === 0) {
      showMessage("No converted files to download", "error");
      return;
    }
    converted.forEach(downloadFile);
  }, [converted, downloadFile, showMessage]);

  const downloadAllAsZip = useCallback(async () => {
    if (converted.length === 0) {
      showMessage("No converted files to download", "error");
      return;
    }
    try {
      const JSZip = (await import("jszip")).default;
      const zip = new JSZip();
      const nameCount = new Map<string, number>();
      converted.forEach((file) => {
        let zipName = file.name;
        const count = nameCount.get(zipName) ?? 0;
        if (count > 0) {
          const ext = file.name.includes(".") ? file.name.slice(file.name.lastIndexOf(".")) : ".jpg";
          const base = file.name.includes(".") ? file.name.slice(0, file.name.lastIndexOf(".")) : file.name;
          zipName = `${base}-${count + 1}${ext}`;
        }
        nameCount.set(file.name, count + 1);
        zip.file(zipName, file);
      });
      const blob = await zip.generateAsync({ type: "blob" });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = `converted-images-${Date.now()}.zip`;
      a.click();
      URL.revokeObjectURL(a.href);
      showMessage("ZIP download started");
    } catch (err) {
      showMessage(err instanceof Error ? err.message : "ZIP download failed", "error");
    }
  }, [converted, showMessage]);

  const reset = useCallback(() => {
    setFiles([]);
    setConverted([]);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }, []);

  const onDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      addFiles(e.dataTransfer.files);
    },
    [addFiles]
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
        {format === "ai" && (
          <p className="mt-2 text-sm text-amber-400/90">
            Not all AI files can be converted. Only files saved with PDF compatibility are supported (enabled by default in modern Illustrator).
          </p>
        )}
      </div>

      <div className="rounded-xl border border-border bg-surface p-6">
        <h2 className="mb-4 text-lg font-semibold text-slate-100">Upload Files</h2>
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={onDrop}
          onClick={() => fileInputRef.current?.click()}
          className="flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-border bg-slate-950/50 px-6 py-8 transition-colors hover:border-slate-600"
        >
          <span className="mb-2 text-4xl text-slate-500">📁</span>
          <p className="mb-2 text-sm text-slate-400">
            Drop {displayName} files here or click to upload
          </p>
          <p className="text-xs text-slate-500">Supports multiple files</p>
          <input
            ref={fileInputRef}
            type="file"
            accept={acceptTypes}
            multiple
            className="hidden"
            onChange={(e) => addFiles(e.target.files)}
          />
        </div>

        {files.length > 0 && (
          <div className="mt-4 space-y-4">
            <div className="mb-4">
              <h3 className="mb-3 text-sm font-medium text-slate-400">Uploaded files ({files.length})</h3>
              <div
                className={
                  files.length > 10
                    ? "scrollbar-thin grid max-h-[420px] grid-cols-2 gap-3 overflow-y-auto pr-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
                    : "grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
                }
              >
                {files.map((file, i) => {
                  const isFailed = failedPreviews.has(i);
                  return (
                    <div
                      key={`${file.name}-${i}`}
                      className="group relative overflow-hidden rounded-lg border border-border bg-slate-950/50"
                    >
                      <div className="aspect-square w-full overflow-hidden bg-slate-900">
                        {!isFailed ? (
                          /* eslint-disable-next-line @next/next/no-img-element */
                          <img
                            src={filePreviewUrls[i]}
                            alt={file.name}
                            className="h-full w-full object-contain transition-transform group-hover:scale-105"
                            onError={() =>
                              setFailedPreviews((prev) => new Set([...prev, i]))
                            }
                          />
                        ) : (
                          <div className="flex h-full w-full flex-col items-center justify-center gap-1 bg-slate-800/80 p-2 text-slate-500">
                            <span className="text-2xl">🖼️</span>
                            <span className="truncate text-center text-xs">{file.name}</span>
                          </div>
                        )}
                      </div>
                      <p className="truncate px-2 py-1.5 text-xs text-slate-400" title={file.name}>
                        {file.name}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <div>
                <label className="mb-2 block text-sm text-slate-400">Quality</label>
                <div className="flex items-center gap-2">
                  <input
                    type="range"
                    min={1}
                    max={100}
                    value={quality}
                    onChange={(e) => setQuality(Number(e.target.value))}
                    className="h-2 w-32 rounded-lg bg-slate-700"
                  />
                  <span className="text-sm text-slate-300">{quality}%</span>
                </div>
              </div>
              {hasBackgroundColor && (
                <div>
                  <label className="mb-2 block text-sm text-slate-400">Background</label>
                  <input
                    type="color"
                    value={bgColor}
                    onChange={(e) => setBgColor(e.target.value)}
                    className="h-10 w-20 cursor-pointer rounded border border-border bg-slate-950"
                  />
                </div>
              )}
              {hasDimensions && (
                <>
                  <div>
                    <label className="mb-2 block text-sm text-slate-400">Width</label>
                    <NumberInputWithStepper
                      value={String(width)}
                      onChange={(v) => setWidth(Number(v) || 1)}
                      min={1}
                      max={4096}
                      disabled={useOriginalSize}
                      className="w-28"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm text-slate-400">Height</label>
                    <NumberInputWithStepper
                      value={String(height)}
                      onChange={(v) => setHeight(Number(v) || 1)}
                      min={1}
                      max={4096}
                      disabled={useOriginalSize}
                      className="w-28"
                    />
                  </div>
                  <label className="flex items-center gap-2 text-sm text-slate-400">
                    <input
                      type="checkbox"
                      checked={useOriginalSize}
                      onChange={(e) => setUseOriginalSize(e.target.checked)}
                    />
                    Use original size
                  </label>
                </>
              )}
              <button
                onClick={convertFiles}
                disabled={loading || (format === "ai" && !pdfReady)}
                className="rounded-lg bg-blue-600 px-6 py-2.5 font-medium text-white transition-colors hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? "Converting..." : format === "ai" && !pdfReady ? "Loading library..." : "Convert to JPG"}
              </button>
              <button
                onClick={reset}
                className="rounded-lg border border-border px-6 py-2.5 text-slate-300 hover:bg-slate-700"
              >
                Reset
              </button>
            </div>
            {loading && convertProgress && (
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between text-sm text-slate-400">
                  <span>
                    Converting file {convertProgress.current + 1} of {convertProgress.total}...
                  </span>
                  <span>{convertProgress.percent}%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-slate-700">
                  <div
                    className="h-full rounded-full bg-blue-500 transition-all duration-300"
                    style={{ width: `${convertProgress.percent}%` }}
                  />
                </div>
              </div>
            )}
            {!loading && (
              <p className="mt-4 text-sm text-slate-500">
                {files.length} file(s) selected
                {format === "ai" && !pdfReady && " • Loading document library..."}
              </p>
            )}
          </div>
        )}
      </div>

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

      {converted.length > 0 && (
        <div className="rounded-xl border border-border bg-surface p-6">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
            <h3 className="font-semibold text-slate-100">Converted Files</h3>
            <div className="flex gap-2">
              <button
                onClick={downloadAll}
                className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500"
              >
                Download All
              </button>
              <button
                onClick={downloadAllAsZip}
                className="rounded-lg border border-border bg-slate-700 px-4 py-2 text-sm font-medium text-slate-200 hover:bg-slate-600"
              >
                Download as ZIP
              </button>
            </div>
          </div>
          <div
            className={
              converted.length > 10
                ? "scrollbar-thin grid max-h-[420px] grid-cols-2 gap-4 overflow-y-auto pr-2 sm:grid-cols-3 md:grid-cols-4"
                : "grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4"
            }
          >
            {converted.map((file, idx) => (
              <div
                key={`${file.name}-${idx}`}
                className="rounded-lg border border-border bg-slate-950/50 p-3"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={URL.createObjectURL(file)}
                  alt={file.name}
                  className="mb-2 aspect-square w-full rounded object-cover"
                />
                <p className="truncate text-xs text-slate-400">{file.name}</p>
                <button
                  onClick={() => downloadFile(file)}
                  className="mt-2 flex w-full items-center justify-center gap-1 rounded bg-slate-700 px-2 py-1.5 text-xs text-slate-300 hover:bg-slate-600"
                >
                  <span>Download</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        <Link
          href="/tools/jpg-converter"
          className="text-slate-400 underline transition-colors hover:text-slate-200"
        >
          ← Back to JPG Converter
        </Link>
        <Link
          href="/"
          className="text-slate-400 underline transition-colors hover:text-slate-200"
        >
          ← Back to home
        </Link>
      </div>
    </div>
  );
}
