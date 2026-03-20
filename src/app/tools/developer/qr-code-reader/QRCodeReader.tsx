"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import jsQR from "jsqr";

type Mode = "camera" | "upload";
type ToastType = "success" | "error";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900";

export default function QRCodeReader() {
  const [mode, setMode] = useState<Mode>("camera");
  const [result, setResult] = useState<string | null>(null);
  const [toast, setToast] = useState<{ text: string; type: ToastType } | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const animationRef = useRef<number | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const showToast = useCallback((msg: string, type: ToastType = "success") => {
    setToast({ text: msg, type });
    setTimeout(() => setToast(null), 3000);
  }, []);

  const stopCamera = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((t) => t.stop());
      streamRef.current = null;
    }
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
  }, []);

  const startCamera = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment", width: { ideal: 1280 }, height: { ideal: 720 } },
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }
    } catch {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          await videoRef.current.play();
        }
      } catch {
        showToast("Camera access denied or not available.", "error");
      }
    }
  }, [showToast]);

  const scanFrame = useCallback(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas || !streamRef.current || video.readyState !== video.HAVE_ENOUGH_DATA) {
      animationRef.current = requestAnimationFrame(scanFrame);
      return;
    }
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      animationRef.current = requestAnimationFrame(scanFrame);
      return;
    }
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const code = jsQR(imageData.data, imageData.width, imageData.height);
    if (code) {
      setResult(code.data);
      stopCamera();
      return;
    }
    animationRef.current = requestAnimationFrame(scanFrame);
  }, [stopCamera]);

  const modeRef = useRef(mode);
  modeRef.current = mode;

  useEffect(() => {
    if (mode === "camera") {
      startCamera().then(() => {
        if (modeRef.current === "camera") {
          animationRef.current = requestAnimationFrame(scanFrame);
        }
      });
    } else {
      stopCamera();
      setResult(null);
    }
    return () => stopCamera();
  }, [mode, startCamera, scanFrame]);

  const processFile = useCallback(
    (file: File) => {
      const img = new Image();
      const url = URL.createObjectURL(file);
      img.onload = () => {
        try {
          const canvas = document.createElement("canvas");
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext("2d");
          if (!ctx) return;
          ctx.drawImage(img, 0, 0);
          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          const code = jsQR(imageData.data, imageData.width, imageData.height);
          setResult(code ? code.data : null);
          if (!code) showToast("No QR code found in image.", "error");
        } finally {
          URL.revokeObjectURL(url);
        }
      };
      img.onerror = () => {
        URL.revokeObjectURL(url);
        showToast("Failed to load image. Please try another file.", "error");
      };
      img.src = url;
    },
    [showToast]
  );

  const addFile = useCallback(
    (fileList: FileList | null) => {
      const file = fileList?.[0];
      if (!file) return;
      if (!file.type.startsWith("image/")) {
        showToast("Please select an image file (PNG, JPG, WebP, GIF, etc.)", "error");
        return;
      }
      processFile(file);
      if (fileInputRef.current) fileInputRef.current.value = "";
    },
    [processFile, showToast]
  );

  const onDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      addFile(e.dataTransfer.files);
    },
    [addFile]
  );

  const copyResult = useCallback(() => {
    if (!result) return;
    navigator.clipboard
      .writeText(result)
      .then(() => showToast("Copied!"))
      .catch(() => showToast("Failed to copy", "error"));
  }, [result, showToast]);

  const openResult = useCallback(() => {
    if (!result) return;
    try {
      new URL(result);
      window.open(result, "_blank");
    } catch {
      showToast("Not a valid URL", "error");
    }
  }, [result, showToast]);

  return (
    <div className="space-y-6">
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => setMode("camera")}
          aria-pressed={mode === "camera"}
          aria-label="Scan with camera"
          className={`rounded-lg px-4 py-2 text-sm font-medium ${
            mode === "camera"
              ? "border border-blue-500 bg-blue-500/20 text-blue-300"
              : "border border-border text-slate-400 hover:border-slate-600 hover:text-slate-200"
          } ${focusRing}`}
        >
          Camera
        </button>
        <button
          type="button"
          onClick={() => setMode("upload")}
          aria-pressed={mode === "upload"}
          aria-label="Upload image to scan"
          className={`rounded-lg px-4 py-2 text-sm font-medium ${
            mode === "upload"
              ? "border border-blue-500 bg-blue-500/20 text-blue-300"
              : "border border-border text-slate-400 hover:border-slate-600 hover:text-slate-200"
          } ${focusRing}`}
        >
          Upload Image
        </button>
      </div>

      {mode === "camera" && (
        <div className="rounded-xl border border-border bg-surface p-6">
          <div className="relative overflow-hidden rounded-lg bg-black">
            <video
              ref={videoRef}
              playsInline
              muted
              className="h-auto w-full"
            />
            <canvas ref={canvasRef} className="hidden" />
            <div className="absolute inset-0 flex items-center justify-center border-4 border-dashed border-white/30">
              <p className="text-sm text-white/80">Position QR code within the frame</p>
            </div>
          </div>
        </div>
      )}

      {mode === "upload" && (
        <div className="rounded-xl border border-border bg-surface p-6">
          <h2 className="mb-4 text-lg font-semibold text-slate-100">Upload Image</h2>
          <div
            role="button"
            tabIndex={0}
            onDragOver={(e) => e.preventDefault()}
            onDrop={onDrop}
            onClick={() => fileInputRef.current?.click()}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                fileInputRef.current?.click();
              }
            }}
            aria-label="Drop image here or click to upload"
            className={`flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-border bg-slate-950/50 px-6 py-8 transition-colors hover:border-slate-600 ${focusRing}`}
          >
            <span className="mb-2 text-4xl text-slate-500">📁</span>
            <p className="mb-2 text-sm text-slate-400">
              Drop image here or click to upload
            </p>
            <p className="text-xs text-slate-500">Select an image containing a QR code (PNG, JPG, WebP, GIF)</p>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => addFile(e.target.files)}
            />
          </div>
        </div>
      )}

      <div className="rounded-xl border border-border bg-surface p-6">
        <h3 className="mb-3 text-lg font-semibold text-slate-100">Scanned Result</h3>
        {result ? (
          <div className="space-y-3">
            <textarea
              value={result}
              readOnly
              className="scrollbar-thin max-h-[50vh] w-full resize-none overflow-y-auto rounded-lg border border-border bg-slate-950 px-4 py-3 font-mono text-sm text-slate-200"
              rows={4}
            />
            <div className="flex gap-2">
              <button
                type="button"
                onClick={copyResult}
                aria-label="Copy result to clipboard"
                className={`rounded-lg border border-border px-4 py-2 text-sm text-slate-300 hover:border-slate-600 hover:bg-slate-700 ${focusRing}`}
              >
                Copy
              </button>
              <button
                type="button"
                onClick={openResult}
                aria-label="Open result in new tab if URL"
                className={`rounded-lg border border-border px-4 py-2 text-sm text-slate-300 hover:border-slate-600 hover:bg-slate-700 ${focusRing}`}
              >
                Open (if URL)
              </button>
            </div>
          </div>
        ) : (
          <p className="text-slate-500">QR code result will appear here</p>
        )}
      </div>

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
