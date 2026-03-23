"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import NumberInputWithStepper from "@/components/NumberInputWithStepper";

type CropRatio = "free" | "1:1" | "4:3" | "16:9";
type ResizeUnit = "px" | "%";
type DrawMode = "text" | "arrow" | "rectangle" | "brush" | null;
type SaveQuality = "high" | "medium" | "low";
type WatermarkPosition =
  | "bottom-right"
  | "bottom-left"
  | "top-right"
  | "top-left"
  | "center"
  | "tiled";
type InstantEffect =
  | "none"
  | "grayscale"
  | "sepia"
  | "invert"
  | "noir"
  | "vintage"
  | "blur"
  | "saturated"
  | "fade";

export default function ImageEditor() {
  const [originalImage, setOriginalImage] = useState<HTMLImageElement | null>(null);
  const initialImageRef = useRef<HTMLImageElement | null>(null);
  const [showEditor, setShowEditor] = useState(false);
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [saturation, setSaturation] = useState(100);
  const [warmth, setWarmth] = useState(100);
  const [sharpness, setSharpness] = useState(100);
  const [exposure, setExposure] = useState(100);
  const [instantEffect, setInstantEffect] = useState<InstantEffect>("none");
  const [cropRatio, setCropRatio] = useState<CropRatio>("free");
  const [resizeWidth, setResizeWidth] = useState("");
  const [resizeHeight, setResizeHeight] = useState("");
  const [resizeUnit, setResizeUnit] = useState<ResizeUnit>("px");
  const [maintainAspect, setMaintainAspect] = useState(true);
  const [drawMode, setDrawMode] = useState<DrawMode>(null);
  const [watermarkEnabled, setWatermarkEnabled] = useState(false);
  const [compareEnabled, setCompareEnabled] = useState(false);
  const [saveQuality, setSaveQuality] = useState<SaveQuality>("high");
  const [watermarkText, setWatermarkText] = useState("");
  const [watermarkOpacity, setWatermarkOpacity] = useState(0.5);
  const [watermarkPosition, setWatermarkPosition] = useState<WatermarkPosition>("bottom-right");
  const [drawColor, setDrawColor] = useState("#000000");
  const [drawSize, setDrawSize] = useState(3);
  const [textInput, setTextInput] = useState("");
  const [showTextInput, setShowTextInput] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const overlayRef = useRef<HTMLCanvasElement>(null);
  const watermarkOverlayRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const drawStartRef = useRef<{ x: number; y: number } | null>(null);
  const isDrawingRef = useRef(false);

  const getFinalFilter = useCallback(() => {
    const exp = exposure / 100;
    const bri = brightness / 100;
    const parts: string[] = [];
    parts.push(`brightness(${bri * exp * 100}%)`);
    parts.push(`contrast(${contrast}%)`);
    parts.push(`saturate(${saturation}%)`);
    parts.push(`contrast(${sharpness}%)`);
    if (warmth < 100) {
      parts.push(`hue-rotate(-${(100 - warmth) * 0.3}deg)`);
    } else if (warmth > 100) {
      parts.push(`sepia(${Math.min((warmth - 100) * 0.5, 100)}%)`);
    }
    if (instantEffect === "grayscale") parts.push("grayscale(100%)");
    else if (instantEffect === "sepia") parts.push("sepia(100%)");
    else if (instantEffect === "invert") parts.push("invert(1)");
    else if (instantEffect === "noir") {
      parts.push("grayscale(100%)");
      parts.push("contrast(1.35)");
    } else if (instantEffect === "vintage") {
      parts.push("sepia(0.5)");
      parts.push("saturate(0.8)");
    } else if (instantEffect === "blur") parts.push("blur(3px)");
    else if (instantEffect === "saturated") parts.push("saturate(1.5)");
    else if (instantEffect === "fade") {
      parts.push("contrast(0.85)");
      parts.push("brightness(1.05)");
    }
    return parts.join(" ");
  }, [brightness, contrast, saturation, exposure, sharpness, warmth, instantEffect]);

  const drawWatermarkOnCtx = useCallback(
    (ctx: CanvasRenderingContext2D, w: number, h: number) => {
      const text = watermarkText.trim();
      if (!text) return;
      const fontSize = Math.max(24, Math.min(w, h) / 15);
      ctx.font = `bold ${fontSize}px sans-serif`;
      ctx.fillStyle = "#ffffff";
      ctx.strokeStyle = "#000000";
      ctx.lineWidth = 2;
      ctx.globalAlpha = watermarkOpacity;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      const drawOne = (x: number, y: number) => {
        ctx.strokeText(text, x, y);
        ctx.fillText(text, x, y);
      };

      const margin = 20;
      const m = ctx.measureText(text);
      const tw = m.width;
      const th = fontSize;

      if (watermarkPosition === "center") {
        drawOne(w / 2, h / 2);
      } else if (watermarkPosition === "bottom-right") {
        ctx.textAlign = "right";
        ctx.textBaseline = "bottom";
        drawOne(w - margin, h - margin);
      } else if (watermarkPosition === "bottom-left") {
        ctx.textAlign = "left";
        ctx.textBaseline = "bottom";
        drawOne(margin, h - margin);
      } else if (watermarkPosition === "top-right") {
        ctx.textAlign = "right";
        ctx.textBaseline = "top";
        drawOne(w - margin, margin);
      } else if (watermarkPosition === "top-left") {
        ctx.textAlign = "left";
        ctx.textBaseline = "top";
        drawOne(margin, margin);
      } else if (watermarkPosition === "tiled") {
        const stepX = tw + 80;
        const stepY = th + 60;
        for (let y = stepY / 2; y < h; y += stepY) {
          for (let x = stepX / 2; x < w; x += stepX) {
            drawOne(x, y);
          }
        }
      }
      ctx.globalAlpha = 1;
    },
    [watermarkText, watermarkOpacity, watermarkPosition]
  );

  const resetCanvas = useCallback(
    (sourceImage?: HTMLImageElement | null) => {
      const img = sourceImage ?? originalImage;
      if (!img || !canvasRef.current) return;
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const ratio = Math.min(800 / img.width, 600 / img.height);
      const scale = Math.min(1, ratio);
      canvas.width = Math.round(img.width * scale);
      canvas.height = Math.round(img.height * scale);
      ctx.filter = getFinalFilter();
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      if (overlayRef.current) {
        overlayRef.current.width = canvas.width;
        overlayRef.current.height = canvas.height;
        overlayRef.current.getContext("2d")?.clearRect(0, 0, canvas.width, canvas.height);
      }
      if (watermarkOverlayRef.current) {
        const wm = watermarkOverlayRef.current;
        wm.width = canvas.width;
        wm.height = canvas.height;
        const wmCtx = wm.getContext("2d");
        if (wmCtx && watermarkEnabled && watermarkText.trim()) {
          wmCtx.clearRect(0, 0, wm.width, wm.height);
          drawWatermarkOnCtx(wmCtx, wm.width, wm.height);
        }
      }
    },
    [originalImage, getFinalFilter, watermarkEnabled, watermarkText, drawWatermarkOnCtx]
  );

  useEffect(() => {
    resetCanvas();
  }, [resetCanvas]);

  useEffect(() => {
    const wm = watermarkOverlayRef.current;
    const main = canvasRef.current;
    if (!wm || !main || !watermarkEnabled || !watermarkText.trim()) {
      if (wm) wm.getContext("2d")?.clearRect(0, 0, wm.width, wm.height);
      return;
    }
    if (wm.width !== main.width || wm.height !== main.height) {
      wm.width = main.width;
      wm.height = main.height;
    }
    const ctx = wm.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, wm.width, wm.height);
    drawWatermarkOnCtx(ctx, wm.width, wm.height);
  }, [
    watermarkEnabled,
    watermarkText,
    watermarkOpacity,
    watermarkPosition,
    drawWatermarkOnCtx,
    originalImage,
  ]);

  const loadImage = useCallback((file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        initialImageRef.current = img;
        setOriginalImage(img);
        setShowEditor(true);
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  }, []);

  const applyFilters = useCallback(() => {
    if (!originalImage || !canvasRef.current) return;
    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;
    ctx.filter = getFinalFilter();
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    ctx.drawImage(originalImage, 0, 0, canvasRef.current.width, canvasRef.current.height);
  }, [originalImage, getFinalFilter]);

  useEffect(() => {
    if (originalImage && showEditor) applyFilters();
  }, [
    brightness,
    contrast,
    saturation,
    warmth,
    sharpness,
    exposure,
    instantEffect,
    originalImage,
    showEditor,
    applyFilters,
  ]);

  const rotate = (degrees: number) => {
    if (!canvasRef.current || !originalImage) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const tempCanvas = document.createElement("canvas");
    const tempCtx = tempCanvas.getContext("2d");
    if (!tempCtx) return;

    tempCanvas.width = canvas.height;
    tempCanvas.height = canvas.width;
    tempCtx.translate(tempCanvas.width / 2, tempCanvas.height / 2);
    tempCtx.rotate((degrees * Math.PI) / 180);
    tempCtx.drawImage(canvas, -canvas.width / 2, -canvas.height / 2);

    const img = new Image();
    img.onload = () => {
      setOriginalImage(img);
      const ratio = Math.min(800 / img.width, 600 / img.height);
      const scale = Math.min(1, ratio);
      canvas.width = Math.round(img.width * scale);
      canvas.height = Math.round(img.height * scale);
      ctx.filter = getFinalFilter();
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
    img.src = tempCanvas.toDataURL();
  };

  const flip = (direction: "horizontal" | "vertical") => {
    if (!canvasRef.current || !originalImage) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const tempCanvas = document.createElement("canvas");
    const tempCtx = tempCanvas.getContext("2d");
    if (!tempCtx) return;

    tempCanvas.width = canvas.width;
    tempCanvas.height = canvas.height;
    if (direction === "horizontal") {
      tempCtx.scale(-1, 1);
      tempCtx.drawImage(canvas, -tempCanvas.width, 0);
    } else {
      tempCtx.scale(1, -1);
      tempCtx.drawImage(canvas, 0, -tempCanvas.height);
    }

    const img = new Image();
    img.onload = () => {
      setOriginalImage(img);
      ctx.filter = getFinalFilter();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
    };
    img.src = tempCanvas.toDataURL();
  };

  const applyCrop = () => {
    if (!canvasRef.current || !originalImage || cropRatio === "free") return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let targetW: number;
    let targetH: number;
    const w = canvas.width;
    const h = canvas.height;

    switch (cropRatio) {
      case "1:1":
        targetW = targetH = Math.min(w, h);
        break;
      case "4:3":
        if (w / h > 4 / 3) {
          targetH = h;
          targetW = Math.round(h * (4 / 3));
        } else {
          targetW = w;
          targetH = Math.round(w * (3 / 4));
        }
        break;
      case "16:9":
        if (w / h > 16 / 9) {
          targetH = h;
          targetW = Math.round(h * (16 / 9));
        } else {
          targetW = w;
          targetH = Math.round(w * (9 / 16));
        }
        break;
      default:
        return;
    }

    const sx = (w - targetW) / 2;
    const sy = (h - targetH) / 2;
    const tempCanvas = document.createElement("canvas");
    tempCanvas.width = targetW;
    tempCanvas.height = targetH;
    const tempCtx = tempCanvas.getContext("2d");
    if (!tempCtx) return;
    tempCtx.drawImage(canvas, sx, sy, targetW, targetH, 0, 0, targetW, targetH);

    const img = new Image();
    img.onload = () => {
      setOriginalImage(img);
      canvas.width = targetW;
      canvas.height = targetH;
      ctx.filter = getFinalFilter();
      ctx.drawImage(img, 0, 0);
    };
    img.src = tempCanvas.toDataURL();
  };

  const updateResizeFromWidth = useCallback((widthVal: string) => {
    setResizeWidth(widthVal);
    if (!maintainAspect || !canvasRef.current) return;
    const w = parseInt(widthVal, 10);
    if (Number.isNaN(w) || w <= 0) return;
    const cw = canvasRef.current.width;
    const ch = canvasRef.current.height;
    if (resizeUnit === "%") {
      setResizeHeight(widthVal);
    } else {
      setResizeHeight(String(Math.round(w * (ch / cw))));
    }
  }, [maintainAspect, resizeUnit]);

  const updateResizeFromHeight = useCallback((heightVal: string) => {
    setResizeHeight(heightVal);
    if (!maintainAspect || !canvasRef.current) return;
    const h = parseInt(heightVal, 10);
    if (Number.isNaN(h) || h <= 0) return;
    const cw = canvasRef.current.width;
    const ch = canvasRef.current.height;
    if (resizeUnit === "%") {
      setResizeWidth(heightVal);
    } else {
      setResizeWidth(String(Math.round(h * (cw / ch))));
    }
  }, [maintainAspect, resizeUnit]);

  const applyResize = () => {
    if (!canvasRef.current || !originalImage) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const cw = canvas.width;
    const ch = canvas.height;

    let w = parseInt(resizeWidth, 10);
    let h = parseInt(resizeHeight, 10);

    if (maintainAspect) {
      if (!Number.isNaN(w) && w > 0) {
        h = resizeUnit === "%" ? w : Math.round(w * (ch / cw));
      } else if (!Number.isNaN(h) && h > 0) {
        w = resizeUnit === "%" ? h : Math.round(h * (cw / ch));
      }
    }
    if (Number.isNaN(w) || Number.isNaN(h) || w <= 0 || h <= 0) return;

    let targetW: number;
    let targetH: number;

    if (resizeUnit === "%") {
      targetW = Math.round((cw * w) / 100);
      targetH = maintainAspect ? Math.round(targetW * (ch / cw)) : Math.round((ch * h) / 100);
    } else {
      targetW = w;
      targetH = maintainAspect ? Math.round(w * (ch / cw)) : h;
    }

    const tempCanvas = document.createElement("canvas");
    tempCanvas.width = targetW;
    tempCanvas.height = targetH;
    const tempCtx = tempCanvas.getContext("2d");
    if (!tempCtx) return;
    tempCtx.drawImage(canvas, 0, 0, cw, ch, 0, 0, targetW, targetH);

    const img = new Image();
    img.onload = () => {
      setOriginalImage(img);
      canvas.width = targetW;
      canvas.height = targetH;
      ctx.filter = getFinalFilter();
      ctx.drawImage(img, 0, 0);
    };
    img.src = tempCanvas.toDataURL();
  };

  const reset = () => {
    const source = initialImageRef.current;
    if (!source || !canvasRef.current) return;
    setBrightness(100);
    setContrast(100);
    setSaturation(100);
    setWarmth(100);
    setSharpness(100);
    setExposure(100);
    setInstantEffect("none");
    setCropRatio("free");
    setResizeWidth("");
    setResizeHeight("");
    setDrawMode(null);
    setWatermarkEnabled(false);
    setWatermarkText("");
    setWatermarkPosition("bottom-right");
    setCompareEnabled(false);
    if (overlayRef.current) {
      overlayRef.current.getContext("2d")?.clearRect(0, 0, overlayRef.current.width, overlayRef.current.height);
    }
    setOriginalImage(source);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      const ratio = Math.min(800 / source.width, 600 / source.height);
      const scale = Math.min(1, ratio);
      canvas.width = Math.round(source.width * scale);
      canvas.height = Math.round(source.height * scale);
      ctx.filter =
        "brightness(100%) contrast(100%) saturate(100%) brightness(100%) contrast(100%)";
      ctx.drawImage(source, 0, 0, canvas.width, canvas.height);
      if (overlayRef.current) {
        overlayRef.current.width = canvas.width;
        overlayRef.current.height = canvas.height;
        overlayRef.current.getContext("2d")?.clearRect(0, 0, canvas.width, canvas.height);
      }
      if (watermarkOverlayRef.current) {
        const wm = watermarkOverlayRef.current;
        wm.width = canvas.width;
        wm.height = canvas.height;
        wm.getContext("2d")?.clearRect(0, 0, wm.width, wm.height);
      }
    }
  };

  const getSaveQuality = () => {
    switch (saveQuality) {
      case "high":
        return 1;
      case "medium":
        return 0.8;
      case "low":
        return 0.6;
      default:
        return 1;
    }
  };

  const download = () => {
    const main = canvasRef.current;
    if (!main) return;
    const w = main.width;
    const h = main.height;
    const out = document.createElement("canvas");
    out.width = w;
    out.height = h;
    const ctx = out.getContext("2d");
    if (!ctx) return;
    ctx.drawImage(main, 0, 0);
    if (overlayRef.current) {
      ctx.drawImage(overlayRef.current, 0, 0);
    }
    if (watermarkEnabled && watermarkText.trim()) {
      ctx.save();
      drawWatermarkOnCtx(ctx, w, h);
      ctx.restore();
    }
    const link = document.createElement("a");
    const quality = getSaveQuality();
    const useJpeg = quality < 1;
    link.download = useJpeg ? "edited-image.jpg" : "edited-image.png";
    link.href = useJpeg ? out.toDataURL("image/jpeg", quality) : out.toDataURL("image/png");
    link.click();
  };

  const getCanvasPoint = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
    };
  }, []);

  const drawOnOverlay = useCallback(
    (mode: DrawMode, from: { x: number; y: number }, to: { x: number; y: number }) => {
      const overlay = overlayRef.current;
      if (!overlay) return;
      const ctx = overlay.getContext("2d");
      if (!ctx) return;
      ctx.strokeStyle = drawColor;
      ctx.fillStyle = drawColor;
      ctx.lineWidth = drawSize;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      if (mode === "rectangle") {
        const x = Math.min(from.x, to.x);
        const y = Math.min(from.y, to.y);
        const w = Math.abs(to.x - from.x);
        const h = Math.abs(to.y - from.y);
        ctx.strokeRect(x, y, w, h);
      } else if (mode === "arrow") {
        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        ctx.stroke();
        const angle = Math.atan2(to.y - from.y, to.x - from.x);
        const len = 12;
        ctx.beginPath();
        ctx.moveTo(to.x, to.y);
        ctx.lineTo(to.x - len * Math.cos(angle - 0.4), to.y - len * Math.sin(angle - 0.4));
        ctx.lineTo(to.x - len * Math.cos(angle + 0.4), to.y - len * Math.sin(angle + 0.4));
        ctx.closePath();
        ctx.fill();
      }
    },
    [drawColor, drawSize]
  );

  const drawTextOnOverlay = useCallback(
    (x: number, y: number, text: string) => {
      const overlay = overlayRef.current;
      if (!overlay || !text.trim()) return;
      const ctx = overlay.getContext("2d");
      if (!ctx) return;
      ctx.fillStyle = drawColor;
      ctx.font = `${Math.max(12, drawSize * 4)}px sans-serif`;
      ctx.fillText(text, x, y);
    },
    [drawColor, drawSize]
  );

  const handleCanvasMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const pt = getCanvasPoint(e);
    if (!pt || !drawMode) return;
    if (drawMode === "text") {
      drawStartRef.current = pt;
      setTextInput("");
      setShowTextInput(true);
      return;
    }
    drawStartRef.current = pt;
    isDrawingRef.current = true;
    if (drawMode === "brush") {
      const overlay = overlayRef.current;
      if (!overlay) return;
      const ctx = overlay.getContext("2d");
      if (!ctx) return;
      ctx.strokeStyle = drawColor;
      ctx.lineWidth = drawSize;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(pt.x, pt.y);
    }
  };

  const handleCanvasMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawingRef.current || !drawStartRef.current || !drawMode) return;
    const pt = getCanvasPoint(e);
    if (!pt) return;
    if (drawMode === "brush") {
      const overlay = overlayRef.current;
      if (!overlay) return;
      const ctx = overlay.getContext("2d");
      if (!ctx) return;
      ctx.lineTo(pt.x, pt.y);
      ctx.stroke();
      drawStartRef.current = pt;
    }
  };

  const handleCanvasMouseUp = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!drawStartRef.current || !drawMode) return;
    if (drawMode === "text") return;
    const pt = getCanvasPoint(e);
    if (!pt) return;
    if (drawMode === "brush") {
      isDrawingRef.current = false;
      return;
    }
    drawOnOverlay(drawMode, drawStartRef.current, pt);
    drawStartRef.current = null;
    isDrawingRef.current = false;
  };

  const handleCanvasMouseLeave = () => {
    if (isDrawingRef.current && drawMode === "brush") {
      isDrawingRef.current = false;
    }
  };

  const confirmTextInput = () => {
    const start = drawStartRef.current;
    if (start && textInput.trim()) {
      drawTextOnOverlay(start.x, start.y, textInput.trim());
    }
    setShowTextInput(false);
    setTextInput("");
    drawStartRef.current = null;
  };

  return (
    <div className="space-y-6">
      {showTextInput && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="w-full max-w-md rounded-xl border border-border bg-surface p-4 shadow-xl">
            <label className="mb-2 block text-sm font-medium text-slate-200">Enter text</label>
            <input
              type="text"
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") confirmTextInput();
                if (e.key === "Escape") {
                  setShowTextInput(false);
                  setTextInput("");
                  drawStartRef.current = null;
                }
              }}
              placeholder="Type here..."
              className="mb-4 w-full rounded bg-slate-800 px-3 py-2 text-slate-200 placeholder:text-slate-500"
              autoFocus
            />
            <div className="flex gap-2">
              <button
                type="button"
                onClick={confirmTextInput}
                className="flex-1 rounded-lg bg-blue-600 py-2 text-white hover:bg-blue-500"
              >
                Add
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowTextInput(false);
                  setTextInput("");
                  drawStartRef.current = null;
                }}
                className="flex-1 rounded-lg bg-slate-600 py-2 text-slate-200 hover:bg-slate-500"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      {!showEditor ? (
        <div
          className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-600 bg-surface p-12 text-center transition-colors hover:border-blue-500/50"
          onClick={() => fileInputRef.current?.click()}
          onDragOver={(e) => {
            e.preventDefault();
            e.currentTarget.classList.add("border-blue-500");
          }}
          onDragLeave={(e) => {
            e.preventDefault();
            e.currentTarget.classList.remove("border-blue-500");
          }}
          onDrop={(e) => {
            e.preventDefault();
            e.currentTarget.classList.remove("border-blue-500");
            const file = e.dataTransfer.files[0];
            if (file?.type.startsWith("image/")) loadImage(file);
          }}
        >
          <svg
            className="mb-4 h-12 w-12 text-slate-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
          <p className="mb-2 text-slate-400">Drag & Drop image or</p>
          <button
            type="button"
            className="rounded-lg bg-blue-600 px-6 py-2 font-medium text-white hover:bg-blue-500"
            onClick={(e) => {
              e.stopPropagation();
              fileInputRef.current?.click();
            }}
          >
            Choose File
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) loadImage(file);
            }}
          />
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-[1fr,320px]">
          <div className="relative flex items-center justify-center rounded-xl border border-border bg-surface p-4">
            {compareEnabled && initialImageRef.current && canvasRef.current && (
              <div
                className="absolute inset-4 z-10 flex items-center justify-center overflow-hidden rounded-lg"
                style={{
                  background: `center/contain no-repeat url(${initialImageRef.current.src})`,
                }}
              />
            )}
            <div
              className={`relative inline-block [&>canvas]:max-h-[70vh] [&>canvas]:max-w-full ${drawMode ? "cursor-crosshair" : ""}`}
            >
              <canvas
                ref={canvasRef}
                className="block"
                onMouseDown={handleCanvasMouseDown}
                onMouseMove={handleCanvasMouseMove}
                onMouseUp={handleCanvasMouseUp}
                onMouseLeave={handleCanvasMouseLeave}
              />
              <canvas
                ref={overlayRef}
                className="pointer-events-none absolute left-0 top-0 block"
              />
              <canvas
                ref={watermarkOverlayRef}
                className="pointer-events-none absolute left-0 top-0 block"
              />
            </div>
          </div>
          <div className="scrollbar-thin max-h-[70vh] space-y-4 overflow-y-auto pr-2">
            {/* Filters */}
            <div className="rounded-xl border border-border bg-surface p-4">
              <label className="mb-4 block border-b border-slate-600 pb-2 font-semibold text-slate-200">
                Filters
              </label>
              <div className="space-y-4">
                <div>
                  <label className="mb-1 flex justify-between text-sm text-slate-400">
                    <span>Brightness</span>
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="200"
                    value={brightness}
                    onChange={(e) => setBrightness(Number(e.target.value))}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm text-slate-400">Contrast</label>
                  <input
                    type="range"
                    min="0"
                    max="200"
                    value={contrast}
                    onChange={(e) => setContrast(Number(e.target.value))}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm text-slate-400">Saturation</label>
                  <input
                    type="range"
                    min="0"
                    max="200"
                    value={saturation}
                    onChange={(e) => setSaturation(Number(e.target.value))}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="mb-1 flex justify-between text-sm text-slate-400">
                    <span>Warmth</span>
                    <span className="text-xs">
                      {warmth < 100 ? "Cool" : warmth > 100 ? "Warm" : "Neutral"}
                    </span>
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="200"
                    value={warmth}
                    onChange={(e) => setWarmth(Number(e.target.value))}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="mb-1 flex justify-between text-sm text-slate-400">
                    <span>Sharpness</span>
                    <span className="text-xs">
                      {sharpness < 100 ? "Soft" : sharpness > 100 ? "Sharp" : "Normal"}
                    </span>
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="200"
                    value={sharpness}
                    onChange={(e) => setSharpness(Number(e.target.value))}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm text-slate-400">Exposure</label>
                  <input
                    type="range"
                    min="0"
                    max="200"
                    value={exposure}
                    onChange={(e) => setExposure(Number(e.target.value))}
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            {/* Instant Effects */}
            <div className="rounded-xl border border-border bg-surface p-4">
              <label className="mb-4 block border-b border-slate-600 pb-2 font-semibold text-slate-200">
                Instant Effects
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(
                  [
                    ["grayscale", "Grayscale"],
                    ["sepia", "Sepia"],
                    ["invert", "Invert"],
                    ["noir", "Noir"],
                    ["vintage", "Vintage"],
                    ["blur", "Blur"],
                    ["saturated", "Saturated"],
                    ["fade", "Fade"],
                  ] as const
                ).map(([effect, label]) => (
                  <button
                    key={effect}
                    type="button"
                    onClick={() =>
                      setInstantEffect((v) => (v === effect ? "none" : effect))
                    }
                    className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      instantEffect === effect
                        ? "bg-blue-600 text-white"
                        : "bg-slate-700 text-slate-400 hover:bg-slate-600"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
              <p className="mt-2 text-xs text-slate-500">
                Click to apply, click again to remove
              </p>
            </div>

            {/* Transform */}
            <div className="rounded-xl border border-border bg-surface p-4">
              <label className="mb-4 block border-b border-slate-600 pb-2 font-semibold text-slate-200">
                Transform
              </label>
              <div className="space-y-4">
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => rotate(-90)}
                    className="flex flex-1 items-center justify-center rounded-lg bg-blue-600 p-2 text-white hover:bg-blue-500"
                    title="Rotate Left"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={() => rotate(90)}
                    className="flex flex-1 items-center justify-center rounded-lg bg-blue-600 p-2 text-white hover:bg-blue-500"
                    title="Rotate Right"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 10h-10a8 8 0 00-8 8v2M21 10l-6 6m6-6l-6-6"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={() => flip("horizontal")}
                    className="flex flex-1 items-center justify-center rounded-lg bg-blue-600 p-2 text-white hover:bg-blue-500"
                    title="Flip Horizontal"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={() => flip("vertical")}
                    className="flex flex-1 items-center justify-center rounded-lg bg-blue-600 p-2 text-white hover:bg-blue-500"
                    title="Flip Vertical"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                      />
                    </svg>
                  </button>
                </div>
                <div>
                  <label className="mb-2 block text-sm text-slate-400">Crop</label>
                  <div className="flex flex-wrap gap-2">
                    {(["free", "1:1", "4:3", "16:9"] as const).map((r) => (
                      <button
                        key={r}
                        type="button"
                        onClick={() => setCropRatio(r)}
                        className={`rounded-lg px-3 py-1.5 text-sm ${
                          cropRatio === r ? "bg-blue-600 text-white" : "bg-slate-700 text-slate-400"
                        }`}
                      >
                        {r === "free" ? "Free" : r}
                      </button>
                    ))}
                  </div>
                  {cropRatio !== "free" && (
                    <button
                      type="button"
                      onClick={applyCrop}
                      className="mt-2 rounded-lg bg-slate-600 px-3 py-1.5 text-sm text-white hover:bg-slate-500"
                    >
                      Apply Crop
                    </button>
                  )}
                </div>
                <div>
                  <label className="mb-2 block text-sm text-slate-400">Resize</label>
                  <div className="flex gap-2">
                    <NumberInputWithStepper
                      value={resizeWidth}
                      onChange={(v) =>
                        maintainAspect
                          ? updateResizeFromWidth(v)
                          : setResizeWidth(v)
                      }
                      placeholder="Width"
                      min={1}
                      className="w-24"
                    />
                    <NumberInputWithStepper
                      value={resizeHeight}
                      onChange={(v) =>
                        maintainAspect
                          ? updateResizeFromHeight(v)
                          : setResizeHeight(v)
                      }
                      placeholder="Height"
                      min={1}
                      className="w-24"
                    />
                    <select
                      value={resizeUnit}
                      onChange={(e) => setResizeUnit(e.target.value as ResizeUnit)}
                      className="rounded bg-slate-800 px-2 py-1 text-sm text-slate-200"
                    >
                      <option value="px">px</option>
                      <option value="%">%</option>
                    </select>
                  </div>
                  <label className="mt-2 flex items-center gap-2 text-sm text-slate-400">
                    <input
                      type="checkbox"
                      checked={maintainAspect}
                      onChange={(e) => setMaintainAspect(e.target.checked)}
                      className="rounded"
                    />
                    Maintain Aspect Ratio
                  </label>
                  <button
                    type="button"
                    onClick={applyResize}
                    className="mt-2 rounded-lg bg-slate-600 px-3 py-1.5 text-sm text-white hover:bg-slate-500"
                  >
                    Apply Resize
                  </button>
                </div>
              </div>
            </div>

            {/* Draw & Annotate */}
            <div className="rounded-xl border border-border bg-surface p-4">
              <label className="mb-4 block border-b border-slate-600 pb-2 font-semibold text-slate-200">
                Draw & Annotate
              </label>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setDrawMode(drawMode === "text" ? null : "text")}
                  className={`flex flex-1 items-center justify-center rounded-lg p-2 ${
                    drawMode === "text" ? "bg-blue-600 text-white" : "bg-slate-700 text-slate-400"
                  }`}
                  title="Text"
                >
                  <span className="font-serif text-lg font-bold">T</span>
                </button>
                <button
                  type="button"
                  onClick={() => setDrawMode(drawMode === "arrow" ? null : "arrow")}
                  className={`flex flex-1 items-center justify-center rounded-lg p-2 ${
                    drawMode === "arrow" ? "bg-blue-600 text-white" : "bg-slate-700 text-slate-400"
                  }`}
                  title="Arrow"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => setDrawMode(drawMode === "rectangle" ? null : "rectangle")}
                  className={`flex flex-1 items-center justify-center rounded-lg p-2 ${
                    drawMode === "rectangle" ? "bg-blue-600 text-white" : "bg-slate-700 text-slate-400"
                  }`}
                  title="Rectangle"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => setDrawMode(drawMode === "brush" ? null : "brush")}
                  className={`flex flex-1 items-center justify-center rounded-lg p-2 ${
                    drawMode === "brush" ? "bg-blue-600 text-white" : "bg-slate-700 text-slate-400"
                  }`}
                  title="Brush"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                </button>
              </div>
              {drawMode && (
                <div className="mt-3 space-y-2 border-t border-slate-600 pt-3">
                  <div className="flex items-center gap-3">
                    <label className="text-xs text-slate-400">Color</label>
                    <input
                      type="color"
                      value={drawColor}
                      onChange={(e) => setDrawColor(e.target.value)}
                      className="h-8 w-14 cursor-pointer rounded border-0 bg-transparent p-0"
                    />
                    <label className="text-xs text-slate-400">Size</label>
                    <input
                      type="range"
                      min="1"
                      max="20"
                      value={drawSize}
                      onChange={(e) => setDrawSize(Number(e.target.value))}
                      className="w-24"
                    />
                    <span className="text-xs text-slate-500">{drawSize}px</span>
                  </div>
                  <p className="text-xs text-slate-500">
                    {drawMode === "text"
                      ? "Click on canvas, then type your text"
                      : "Click and drag on canvas to draw"}
                  </p>
                </div>
              )}
            </div>

            {/* Utilities */}
            <div className="rounded-xl border border-border bg-surface p-4">
              <label className="mb-4 block border-b border-slate-600 pb-2 font-semibold text-slate-200">
                Utilities
              </label>
              <div className="space-y-3">
                <label className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">Add Watermark</span>
                  <button
                    type="button"
                    onClick={() => setWatermarkEnabled((v) => !v)}
                    className={`relative h-6 w-11 rounded-full transition-colors ${
                      watermarkEnabled ? "bg-blue-600" : "bg-slate-600"
                    }`}
                  >
                    <span
                      className={`absolute top-1 h-4 w-4 rounded-full bg-white transition-all ${
                        watermarkEnabled ? "left-6" : "left-1"
                      }`}
                    />
                  </button>
                </label>
                {watermarkEnabled && (
                  <div className="space-y-3 pt-2">
                    <input
                      type="text"
                      placeholder="Watermark text"
                      value={watermarkText}
                      onChange={(e) => setWatermarkText(e.target.value)}
                      className="w-full rounded bg-slate-800 px-3 py-1.5 text-sm text-slate-200 placeholder:text-slate-500"
                    />
                    <div>
                      <label className="mb-1.5 block text-xs text-slate-400">Position</label>
                      <div className="grid grid-cols-3 gap-1.5">
                        {(
                          [
                            ["top-left", "Top Left"],
                            ["top-right", "Top Right"],
                            ["center", "Center"],
                            ["bottom-left", "Bottom Left"],
                            ["bottom-right", "Bottom Right"],
                            ["tiled", "Tiled"],
                          ] as const
                        ).map(([val, label]) => (
                          <button
                            key={val}
                            type="button"
                            onClick={() => setWatermarkPosition(val)}
                            className={`rounded px-2 py-1.5 text-xs ${
                              watermarkPosition === val
                                ? "bg-blue-600 text-white"
                                : "bg-slate-700 text-slate-400 hover:bg-slate-600"
                            }`}
                          >
                            {label}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <label className="text-xs text-slate-400">Opacity</label>
                      <input
                        type="range"
                        min="0.05"
                        max="1"
                        step="0.01"
                        value={watermarkOpacity}
                        onChange={(e) => setWatermarkOpacity(Number(e.target.value))}
                        className="flex-1"
                      />
                      <span className="text-xs text-slate-500">{Math.round(watermarkOpacity * 100)}%</span>
                    </div>
                    <p className="text-xs text-slate-500">Preview on canvas above</p>
                  </div>
                )}
                <label className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">Compare with Original</span>
                  <button
                    type="button"
                    onClick={() => setCompareEnabled((v) => !v)}
                    className={`relative h-6 w-11 rounded-full transition-colors ${
                      compareEnabled ? "bg-blue-600" : "bg-slate-600"
                    }`}
                  >
                    <span
                      className={`absolute top-1 h-4 w-4 rounded-full bg-white transition-all ${
                        compareEnabled ? "left-6" : "left-1"
                      }`}
                    />
                  </button>
                </label>
                <p className="text-xs text-slate-500">
                  {compareEnabled ? "Showing original" : "Showing edited"}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="rounded-xl border border-border bg-surface p-4">
              <label className="mb-4 block border-b border-slate-600 pb-2 font-semibold text-slate-200">
                Actions
              </label>
              <div className="space-y-3">
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={reset}
                    className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-blue-600 py-2 font-medium text-white hover:bg-blue-500"
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
                  <div className="flex flex-1 flex-col gap-2">
                    <button
                      type="button"
                      onClick={download}
                      className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 py-2 font-medium text-white hover:bg-blue-500"
                    >
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                      Save Image
                    </button>
                    <select
                      value={saveQuality}
                      onChange={(e) => setSaveQuality(e.target.value as SaveQuality)}
                      className="rounded bg-slate-800 px-2 py-1 text-xs text-slate-200"
                    >
                      <option value="high">High (100%)</option>
                      <option value="medium">Medium (80%)</option>
                      <option value="low">Low (60%)</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
