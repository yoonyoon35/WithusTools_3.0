/**
 * Decode a single source file to HTMLImageElement for animated-GIF frame encoding (client-only).
 * Mirrors JPG Converter decoding paths where applicable.
 */

import type { MultiFileGifFormat } from "@/app/tools/gif-converter/gif-format-config";

function loadImageFromUrl(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("Failed to decode image"));
    img.decoding = "async";
    img.src = url;
  });
}

async function imageFromCanvas(c: HTMLCanvasElement): Promise<HTMLImageElement> {
  const blob = await new Promise<Blob>((resolve, reject) => {
    c.toBlob((b) => (b ? resolve(b) : reject(new Error("toBlob failed"))), "image/png");
  });
  const u = URL.createObjectURL(blob);
  try {
    return await loadImageFromUrl(u);
  } finally {
    URL.revokeObjectURL(u);
  }
}

async function decodeViaBlobUrl(file: File): Promise<HTMLImageElement> {
  const url = URL.createObjectURL(file);
  try {
    return await loadImageFromUrl(url);
  } finally {
    URL.revokeObjectURL(url);
  }
}

async function decodeHeicLike(file: File): Promise<HTMLImageElement> {
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

async function decodeTiff(file: File): Promise<HTMLImageElement> {
  try {
    return await decodeViaBlobUrl(file);
  } catch {
    const UTIF = (await import("utif")).default;
    const ab = await file.arrayBuffer();
    const ifds = UTIF.decode(ab);
    if (ifds.length === 0) throw new Error("No image");

    const allIfds: typeof ifds = [...ifds];
    const subIFD = (ifds[0] as { subIFD?: typeof ifds }).subIFD;
    if (subIFD?.length) allIfds.push(...subIFD);

    let bestIfd: (typeof ifds)[0] = ifds[0];
    let bestArea = 0;
    for (const ifd of allIfds) {
      const w = (ifd as { t256?: number | number[] }).t256;
      const h = (ifd as { t257?: number | number[] }).t257;
      const ww = (Array.isArray(w) ? w[0] : w) ?? 0;
      const hh = (Array.isArray(h) ? h[0] : h) ?? 0;
      const area = ww * hh;
      if (area > bestArea) {
        bestArea = area;
        bestIfd = ifd;
      }
    }

    UTIF.decodeImage(ab, bestIfd);
    const rgba = UTIF.toRGBA8(bestIfd);
    const ifd = bestIfd as { width?: number; height?: number; t256?: number | number[]; t257?: number | number[] };
    let w = ifd.width ?? (Array.isArray(ifd.t256) ? ifd.t256[0] : ifd.t256) ?? 0;
    let h = ifd.height ?? (Array.isArray(ifd.t257) ? ifd.t257[0] : ifd.t257) ?? 0;
    if (!w || !h || w <= 0 || h <= 0 || isNaN(w) || isNaN(h)) {
      const px = rgba.length / 4;
      const side = Math.round(Math.sqrt(px));
      if (side > 0 && side * side === px) {
        w = h = side;
      } else {
        throw new Error("Invalid TIFF dimensions");
      }
    }

    const canvas = document.createElement("canvas");
    canvas.width = Math.round(w);
    canvas.height = Math.round(h);
    const ctx = canvas.getContext("2d")!;
    const imgData = ctx.createImageData(canvas.width, canvas.height);
    imgData.data.set(rgba);
    ctx.putImageData(imgData, 0, 0);
    return imageFromCanvas(canvas);
  }
}

async function decodeSvg(file: File): Promise<HTMLImageElement> {
  const text = await file.text();
  const blob = new Blob([text], { type: "image/svg+xml" });
  const url = URL.createObjectURL(blob);
  try {
    const img = await loadImageFromUrl(url);
    const maxEdge = 2048;
    let nw = img.naturalWidth;
    let nh = img.naturalHeight;
    if (!nw || !nh) throw new Error("Invalid SVG size");
    if (nw <= maxEdge && nh <= maxEdge) return img;
    const scale = maxEdge / Math.max(nw, nh);
    nw = Math.max(1, Math.round(nw * scale));
    nh = Math.max(1, Math.round(nh * scale));
    const c = document.createElement("canvas");
    c.width = nw;
    c.height = nh;
    const ctx = c.getContext("2d")!;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, nw, nh);
    ctx.drawImage(img, 0, 0, nw, nh);
    return imageFromCanvas(c);
  } finally {
    URL.revokeObjectURL(url);
  }
}

async function decodePsd(file: File): Promise<HTMLImageElement> {
  const { readPsd } = await import("ag-psd");
  const psd = readPsd(await file.arrayBuffer());
  const canvas = psd.canvas;
  if (!canvas) {
    throw new Error("Could not read composite from PSD (unsupported color mode or empty canvas).");
  }
  return imageFromCanvas(canvas);
}

async function decodeTga(file: File): Promise<HTMLImageElement> {
  const { decodeTga } = await import("@lunapaint/tga-codec");
  const decoded = await decodeTga(new Uint8Array(await file.arrayBuffer()));
  const { data, width, height } = decoded.image;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d")!;
  const id = ctx.createImageData(width, height);
  id.data.set(data);
  ctx.putImageData(id, 0, 0);
  return imageFromCanvas(canvas);
}

async function decodeAiFirstPage(file: File): Promise<HTMLImageElement> {
  const pdfjs = typeof window !== "undefined" ? window.pdfjsLib : undefined;
  if (!pdfjs) throw new Error("Document library is loading. Please wait.");
  const ab = await file.arrayBuffer();
  const pdf = await pdfjs.getDocument({ data: ab, length: ab.byteLength }).promise;
  const page = await pdf.getPage(1);
  const scale = 2;
  const viewport = page.getViewport({ scale });
  const canvas = document.createElement("canvas");
  canvas.width = viewport.width;
  canvas.height = viewport.height;
  const ctx = canvas.getContext("2d")!;
  await page.render({ canvasContext: ctx, viewport }).promise;
  return imageFromCanvas(canvas);
}

function extractLargestJpegFromBuffer(ab: ArrayBuffer): Blob | null {
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
  if (jpegs.length === 0) return null;
  const best = jpegs.reduce((a, b) => (b.end - b.start > a.end - a.start ? b : a));
  return new Blob([arr.subarray(best.start, best.end)], { type: "image/jpeg" });
}

async function decodeCr3(file: File): Promise<HTMLImageElement> {
  const ab = await file.arrayBuffer();
  const jpegBlob = extractLargestJpegFromBuffer(ab);
  if (!jpegBlob) {
    throw new Error("No embedded JPEG preview found in this CR3 file.");
  }
  const url = URL.createObjectURL(jpegBlob);
  try {
    return await loadImageFromUrl(url);
  } finally {
    URL.revokeObjectURL(url);
  }
}

async function decodeDngOrCr2(file: File, ext: "dng" | "cr2"): Promise<HTMLImageElement> {
  const ab = await file.arrayBuffer();

  const tryUtifRgba = async (): Promise<HTMLImageElement> => {
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
        let sum = 0;
        for (let i = 0; i < rgba.length; i++) sum += rgba[i]!;
        if (sum === 0) continue;
        const canvas = document.createElement("canvas");
        canvas.width = Math.round(w);
        canvas.height = Math.round(h);
        const ctx = canvas.getContext("2d")!;
        const imgData = ctx.createImageData(canvas.width, canvas.height);
        imgData.data.set(rgba);
        ctx.putImageData(imgData, 0, 0);
        return imageFromCanvas(canvas);
      } catch {
        continue;
      }
    }
    throw new Error("UTIF could not decode");
  };

  try {
    return await tryUtifRgba();
  } catch {
    (window as unknown as { UTIF?: typeof import("utif").default }).UTIF = (await import("utif")).default;
    const jpegBlob = extractLargestJpegFromBuffer(ab);
    if (!jpegBlob) {
      throw new Error(
        ext === "dng"
          ? "Could not decode this DNG (no RGBA IFD and no embedded JPEG preview)."
          : "Could not decode this CR2 (no RGBA IFD and no embedded JPEG preview)."
      );
    }
    const url = URL.createObjectURL(jpegBlob);
    try {
      return await loadImageFromUrl(url);
    } finally {
      URL.revokeObjectURL(url);
    }
  }
}

export async function decodeFileToImageForGifFrame(
  file: File,
  format: MultiFileGifFormat
): Promise<HTMLImageElement> {
  switch (format) {
    case "jpg":
    case "png":
    case "webp":
    case "bmp":
    case "avif":
    case "jfif":
    case "ico":
      return decodeViaBlobUrl(file);
    case "heic":
    case "heif":
      return decodeHeicLike(file);
    case "tiff":
      return decodeTiff(file);
    case "svg":
      return decodeSvg(file);
    case "psd":
      return decodePsd(file);
    case "tga":
      return decodeTga(file);
    case "ai":
      return decodeAiFirstPage(file);
    case "cr3":
      return decodeCr3(file);
    case "dng":
      return decodeDngOrCr2(file, "dng");
    case "cr2":
      return decodeDngOrCr2(file, "cr2");
    default: {
      const _exhaustive: never = format;
      return _exhaustive;
    }
  }
}
