"use client";

import { useState, useRef, useCallback, useEffect } from "react";

type Tool = "brush" | "eraser" | "rectangle" | "circle" | "line" | "image";

interface PendingImage {
  img: HTMLImageElement;
  width: number;
  height: number;
}

function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export default function PaintBoard() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentTool, setCurrentTool] = useState<Tool>("brush");
  const [color, setColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [brushSize, setBrushSize] = useState(5);
  const [isDrawing, setIsDrawing] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [lastPos, setLastPos] = useState({ x: 0, y: 0 });
  const [currentStep, setCurrentStep] = useState(-1);
  const [pendingImage, setPendingImage] = useState<PendingImage | null>(null);
  const [isShiftPressed, setIsShiftPressed] = useState(false);
  const snapshotRef = useRef<ImageData | null>(null);
  const snapshotsRef = useRef<ImageData[]>([]);
  const currentStepRef = useRef(-1);
  const imageInputRef = useRef<HTMLInputElement>(null);

  const getCtx = useCallback(() => canvasRef.current?.getContext("2d"), []);

  currentStepRef.current = currentStep;

  const saveSnapshot = useCallback(() => {
    const ctx = getCtx();
    if (!ctx || !canvasRef.current) return;
    const w = canvasRef.current.width;
    const h = canvasRef.current.height;
    if (w === 0 || h === 0) return;
    const imageData = ctx.getImageData(0, 0, w, h);
    const step = currentStepRef.current;
    const next = snapshotsRef.current.slice(0, step + 1);
    next.push(imageData);
    snapshotsRef.current = next;
    currentStepRef.current = next.length - 1;
    setCurrentStep(next.length - 1);
  }, [getCtx]);

  const setupCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    if (canvas.width === 0 || canvas.height === 0) return;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = color;
    ctx.lineWidth = brushSize;
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    snapshotsRef.current = [];
    currentStepRef.current = -1;
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    snapshotsRef.current = [imageData];
    currentStepRef.current = 0;
    setCurrentStep(0);
  }, [bgColor, color, brushSize]);

  useEffect(() => {
    setupCanvas();
    // Run only on mount - canvas initialization
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const ctx = getCtx();
    if (!ctx) return;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = brushSize;
  }, [color, brushSize, getCtx]);

  const getPos = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement>) => {
      const canvas = canvasRef.current;
      if (!canvas) return { x: 0, y: 0 };
      const rect = canvas.getBoundingClientRect();
      return { x: e.clientX - rect.left, y: e.clientY - rect.top };
    },
    []
  );

  const clearCanvas = useCallback(() => {
    const ctx = getCtx();
    if (!ctx || !canvasRef.current) return;
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    saveSnapshot();
  }, [getCtx, bgColor, saveSnapshot]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Shift") setIsShiftPressed(true);
    };
    const onKeyUp = (e: KeyboardEvent) => {
      if (e.key === "Shift" || !e.shiftKey) setIsShiftPressed(false);
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
    };
  }, []);

  const handleToolClick = (tool: Tool) => {
    setCurrentTool(tool);
    if (tool === "image") {
      setPendingImage(null);
      imageInputRef.current?.click();
    }
  };

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const img = new Image();
      img.onload = () => {
        let w = img.width;
        let h = img.height;
        const maxSize = 500;
        if (w > maxSize || h > maxSize) {
          if (w > h) {
            h = (maxSize * h) / w;
            w = maxSize;
          } else {
            w = (maxSize * w) / h;
            h = maxSize;
          }
        }
        setPendingImage({ img, width: w, height: h });
      };
      img.src = ev.target?.result as string;
    };
    reader.readAsDataURL(file);
    e.target.value = "";
  };

  const startDrawing = (pos: { x: number; y: number }) => {
    const ctx = getCtx();
    if (!ctx || !canvasRef.current) return;

    if (currentTool === "image" && pendingImage) {
      const x = pos.x - pendingImage.width / 2;
      const y = pos.y - pendingImage.height / 2;
      ctx.drawImage(pendingImage.img, x, y, pendingImage.width, pendingImage.height);
      setPendingImage(null);
      setCurrentTool("brush");
      saveSnapshot();
      return;
    }

    setIsDrawing(true);
    setStartX(pos.x);
    setStartY(pos.y);
    setLastPos(pos);

    if (currentTool === "brush" || currentTool === "eraser") {
      const origFill = ctx.fillStyle;
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, brushSize / 2, 0, Math.PI * 2);
      ctx.fillStyle = currentTool === "eraser" ? "#ffffff" : color;
      ctx.fill();
      ctx.fillStyle = origFill;
      ctx.beginPath();
      ctx.moveTo(pos.x, pos.y);
    } else {
      ctx.beginPath();
      ctx.moveTo(pos.x, pos.y);
    }

    const imgData = ctx.getImageData(0, 0, canvasRef.current.width, canvasRef.current.height);
    snapshotRef.current = imgData;
  };

  const draw = (pos: { x: number; y: number }) => {
    const ctx = getCtx();
    if (!ctx || !canvasRef.current || !isDrawing) return;
    setLastPos(pos);

    switch (currentTool) {
      case "brush":
        ctx.strokeStyle = color;
        ctx.lineTo(pos.x, pos.y);
        ctx.stroke();
        break;
      case "eraser":
        ctx.strokeStyle = "#ffffff";
        ctx.lineTo(pos.x, pos.y);
        ctx.stroke();
        ctx.strokeStyle = color;
        break;
      case "rectangle": {
        if (!snapshotRef.current) return;
        ctx.putImageData(snapshotRef.current, 0, 0);
        let w = pos.x - startX;
        let h = pos.y - startY;
        let x = startX;
        let y = startY;
        if (isShiftPressed) {
          const size = Math.max(Math.abs(w), Math.abs(h));
          w = w >= 0 ? size : -size;
          h = h >= 0 ? size : -size;
        }
        if (w < 0) {
          x += w;
          w = Math.abs(w);
        }
        if (h < 0) {
          y += h;
          h = Math.abs(h);
        }
        ctx.strokeRect(x, y, w, h);
        break;
      }
      case "circle": {
        if (!snapshotRef.current) return;
        ctx.putImageData(snapshotRef.current, 0, 0);
        let w = pos.x - startX;
        let h = pos.y - startY;
        let rx: number;
        let ry: number;
        let cx: number;
        let cy: number;
        if (isShiftPressed) {
          const size = Math.max(Math.abs(w), Math.abs(h));
          rx = size / 2;
          ry = size / 2;
          let x = startX;
          let y = startY;
          if (w < 0) x = startX + w;
          if (h < 0) y = startY + h;
          cx = x + rx;
          cy = y + ry;
        } else {
          rx = Math.abs(w) / 2;
          ry = Math.abs(h) / 2;
          cx = startX + w / 2;
          cy = startY + h / 2;
        }
        ctx.beginPath();
        ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
        ctx.stroke();
        break;
      }
      case "line": {
        if (!snapshotRef.current) return;
        ctx.putImageData(snapshotRef.current, 0, 0);
        let endX = pos.x;
        let endY = pos.y;
        if (isShiftPressed) {
          const dx = endX - startX;
          const dy = endY - startY;
          const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
          const snapAngle = Math.round(angle / 45) * 45;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const rad = (snapAngle * Math.PI) / 180;
          endX = startX + Math.cos(rad) * dist;
          endY = startY + Math.sin(rad) * dist;
        }
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
        break;
      }
    }
  };

  const stopDrawing = () => {
    if (isDrawing) {
      setIsDrawing(false);
      saveSnapshot();
    }
  };

  const undo = () => {
    const step = currentStepRef.current;
    if (step <= 0) return;
    const ctx = getCtx();
    if (!ctx || !canvasRef.current) return;
    const prevStep = step - 1;
    const snapshot = snapshotsRef.current[prevStep];
    if (!snapshot || !(snapshot instanceof ImageData)) return;
    ctx.putImageData(snapshot, 0, 0);
    currentStepRef.current = prevStep;
    setCurrentStep(prevStep);
  };

  const redo = () => {
    const snaps = snapshotsRef.current;
    const step = currentStepRef.current;
    if (step >= snaps.length - 1) return;
    const ctx = getCtx();
    if (!ctx || !canvasRef.current) return;
    const nextStep = step + 1;
    const snapshot = snaps[nextStep];
    if (!snapshot || !(snapshot instanceof ImageData)) return;
    ctx.putImageData(snapshot, 0, 0);
    currentStepRef.current = nextStep;
    setCurrentStep(nextStep);
  };

  const saveCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const temp = document.createElement("canvas");
    temp.width = canvas.width;
    temp.height = canvas.height;
    const tctx = temp.getContext("2d");
    if (!tctx) return;
    tctx.fillStyle = bgColor;
    tctx.fillRect(0, 0, temp.width, temp.height);
    tctx.drawImage(canvas, 0, 0);
    temp.toBlob((blob) => {
      if (blob) {
        downloadBlob(blob, "drawing.png");
      }
    }, "image/png");
  };

  const isInitialMount = useRef(true);
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    clearCanvas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bgColor]);

  const canUndo = currentStep > 0;
  const canRedo = currentStep < snapshotsRef.current.length - 1;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-center gap-6 rounded-xl border border-border bg-surface p-4">
        <div className="flex items-center gap-2">
          {(
            [
              ["brush", "Brush", "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"],
              ["eraser", "Eraser", "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"],
              ["rectangle", "Rectangle", "M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z"],
              ["circle", "Circle", "M12 22a10 10 0 100-20 10 10 0 000 20z"],
              ["line", "Line", "M4 12h16"],
              ["image", "Insert Image", "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"],
            ] as const
          ).map(([tool, title, path]) => (
            <button
              key={tool}
              type="button"
              title={title}
              onClick={() => handleToolClick(tool as Tool)}
              className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                currentTool === tool ? "bg-blue-600 text-white" : "bg-slate-700 text-slate-400 hover:bg-slate-600"
              }`}
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={path} />
              </svg>
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2 border-l border-slate-600 pl-4">
          <label className="flex h-10 w-10 items-center justify-center text-slate-400" title="Foreground">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
                clipRule="evenodd"
              />
            </svg>
          </label>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="h-10 w-10 cursor-pointer rounded-lg border-0 p-0"
          />
          <label className="flex h-10 w-10 items-center justify-center text-slate-400" title="Background">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                clipRule="evenodd"
              />
            </svg>
          </label>
          <input
            type="color"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
            className="h-10 w-10 cursor-pointer rounded-lg border-0 p-0"
          />
          <input
            type="range"
            min="1"
            max="50"
            value={brushSize}
            onChange={(e) => setBrushSize(Number(e.target.value))}
            className="w-24"
          />
          <span className="min-w-[3rem] text-center text-sm text-slate-400">{brushSize}px</span>
        </div>
        <div className="flex items-center gap-2 border-l border-slate-600 pl-4">
          <button
            type="button"
            onClick={undo}
            disabled={!canUndo}
            title="Undo"
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-700 text-slate-400 hover:bg-slate-600 disabled:opacity-50"
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
            onClick={redo}
            disabled={!canRedo}
            title="Redo"
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-700 text-slate-400 hover:bg-slate-600 disabled:opacity-50"
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
            onClick={clearCanvas}
            title="Clear"
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-700 text-slate-400 hover:bg-slate-600"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={saveCanvas}
            title="Save"
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-700 text-slate-400 hover:bg-slate-600"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      <input
        ref={imageInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleImageSelect}
      />

      <div className="rounded-xl border border-border bg-surface p-4">
        <canvas
          ref={canvasRef}
          className="h-[600px] w-full cursor-crosshair border border-slate-600 bg-white touch-none"
          onMouseDown={(e) => startDrawing(getPos(e))}
          onMouseMove={(e) => draw(getPos(e))}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={(e) => {
            e.preventDefault();
            const touch = e.touches[0];
            if (touch) {
              const rect = canvasRef.current?.getBoundingClientRect();
              if (rect) {
                startDrawing({ x: touch.clientX - rect.left, y: touch.clientY - rect.top });
              }
            }
          }}
          onTouchMove={(e) => {
            e.preventDefault();
            const touch = e.touches[0];
            if (touch && isDrawing) {
              const rect = canvasRef.current?.getBoundingClientRect();
              if (rect) {
                draw({ x: touch.clientX - rect.left, y: touch.clientY - rect.top });
              }
            }
          }}
          onTouchEnd={(e) => {
            e.preventDefault();
            stopDrawing();
          }}
        />
      </div>

      {pendingImage && (
        <p className="text-center text-sm text-blue-400">
          Click on the canvas to insert the image
        </p>
      )}
    </div>
  );
}
