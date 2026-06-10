"use client";

import { useState, useCallback, useRef } from "react";
import NumberInputWithStepper from "@/components/NumberInputWithStepper";
import useToolPageContent from "@/hooks/useToolPageContent";
import { asMap, asText, formatUi } from "@/lib/tool-ui-helpers";
import JSZip from "jszip";

const META_PATH = "/tools/image/image-compressor";

interface FileRecord {
  id: string;
  file: File;
  originalDataUrl: string;
  originalSize: number;
  originalWidth: number | null;
  originalHeight: number | null;
  compressedBlob: Blob | null;
  compressedDataUrl: string | null;
  compressedSize: number | null;
  outputFilename: string | null;
  status: "ready" | "processing" | "done" | "error";
  error: string | null;
}

function formatSize(bytes: number | null | undefined): string {
  if (bytes === null || bytes === undefined) return "-";
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
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

export default function ImageCompressor() {
  const page = useToolPageContent(META_PATH);
  const ui = page?.ui;
  const toolUi = asMap(ui);
  const uploadUi = asMap(toolUi.upload);
  const summaryUi = asMap(toolUi.summary);
  const labelsUi = asMap(toolUi.labels);
  const buttonsUi = asMap(toolUi.buttons);
  const statusUi = asMap(toolUi.status);
  const previewUi = asMap(toolUi.preview);
  const fileInfoUi = asMap(toolUi.fileInfo);
  const messagesUi = asMap(toolUi.messages);

  const [files, setFiles] = useState<FileRecord[]>([]);
  const [quality, setQuality] = useState(80);
  const [maxWidth, setMaxWidth] = useState("");
  const [removeExif, setRemoveExif] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const [message, setMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);
  const [comparePos, setComparePos] = useState<Record<string, number>>({});
  const fileInputRef = useRef<HTMLInputElement>(null);

  const showMessage = useCallback((text: string, type: "success" | "error" = "success") => {
    setMessage({ text, type });
    setTimeout(() => setMessage(null), 3000);
  }, []);

  const readFile = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = () => reject(reader.error || new Error("Unable to read file"));
      reader.readAsDataURL(file);
    });

  const getOutputMimeType = (inputType: string) => {
    if (inputType === "image/png") return "image/png";
    if (inputType === "image/webp") return "image/webp";
    if (inputType === "image/gif") return "image/gif";
    return "image/jpeg";
  };

  const mimeTypeToExtension = (mimeType: string) => {
    switch (mimeType) {
      case "image/png":
        return "png";
      case "image/webp":
        return "webp";
      case "image/gif":
        return "gif";
      default:
        return "jpg";
    }
  };

  const handleFiles = useCallback(
    async (fileList: FileList | null) => {
      const imageFiles = Array.from(fileList || []).filter((f) => f.type.startsWith("image/"));
      if (!imageFiles.length) {
        showMessage(asText(messagesUi.onlyImages), "error");
        return;
      }

      try {
        const newRecords: FileRecord[] = [];
        for (const file of imageFiles) {
          const dataUrl = await readFile(file);
          const record: FileRecord = {
            id: `${file.name}-${Date.now()}-${Math.random().toString(16).slice(2)}`,
            file,
            originalDataUrl: dataUrl,
            originalSize: file.size,
            originalWidth: null,
            originalHeight: null,
            compressedBlob: null,
            compressedDataUrl: null,
            compressedSize: null,
            outputFilename: null,
            status: "ready",
            error: null,
          };

          const img = new Image();
          img.onload = () => {
            setFiles((prev) =>
              prev.map((f) =>
                f.id === record.id
                  ? { ...f, originalWidth: img.naturalWidth, originalHeight: img.naturalHeight }
                  : f
              )
            );
          };
          img.src = dataUrl;
          newRecords.push(record);
        }
        setFiles((prev) => [...prev, ...newRecords]);
        showMessage(formatUi(asText(messagesUi.filesAdded), { n: imageFiles.length }));
      } catch {
        showMessage(asText(messagesUi.loadError), "error");
      }
    },
    [showMessage, messagesUi]
  );

  const getOutputFilename = (originalName: string, mimeType: string, qualityVal: number) => {
    const base = originalName.replace(/\.[^/.]+$/, "");
    const ext = mimeTypeToExtension(mimeType);
    return `${base}_${Math.round(qualityVal * 100)}%_optimized.${ext}`;
  };

  const compressSingle = (
    file: FileRecord,
    qualityVal: number,
    maxWidthVal: number | null,
    stripExif: boolean
  ): Promise<void> =>
    new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        let targetWidth = img.naturalWidth;
        let targetHeight = img.naturalHeight;
        if (maxWidthVal && targetWidth > maxWidthVal) {
          targetHeight = Math.round((maxWidthVal / targetWidth) * targetHeight);
          targetWidth = maxWidthVal;
        }

        const canvas = document.createElement("canvas");
        canvas.width = targetWidth;
        canvas.height = targetHeight;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          reject(new Error("Failed to get canvas context"));
          return;
        }
        ctx.drawImage(img, 0, 0, targetWidth, targetHeight);

        const mimeType = getOutputMimeType(file.file.type);
        canvas.toBlob(
          (blob) => {
            if (!blob) {
              reject(new Error("Failed to convert image"));
              return;
            }
            const reader = new FileReader();
            reader.onload = () => {
              setFiles((prev) =>
                prev.map((f) =>
                  f.id === file.id
                    ? {
                        ...f,
                        compressedBlob: blob,
                        compressedDataUrl: reader.result as string,
                        compressedSize: blob.size,
                        outputFilename: getOutputFilename(file.file.name, mimeType, qualityVal),
                        status: "done",
                        error: null,
                      }
                    : f
                )
              );
              resolve();
            };
            reader.readAsDataURL(blob);
          },
          mimeType,
          qualityVal
        );
      };
      img.onerror = () => reject(new Error("Failed to load image"));
      img.src = file.originalDataUrl;
    });

  const compressImages = useCallback(async () => {
    if (!files.length) {
      showMessage(asText(messagesUi.uploadFirst), "error");
      return;
    }
    if (isProcessing) return;

    setIsProcessing(true);
    const qualityVal = Math.min(Math.max(quality, 0), 100) / 100;
    const maxWidthVal = parseInt(maxWidth, 10);
    const maxW = Number.isNaN(maxWidthVal) || maxWidthVal <= 0 ? null : maxWidthVal;

    let successCount = 0;
    for (const file of files) {
      setFiles((prev) =>
        prev.map((f) => (f.id === file.id ? { ...f, status: "processing" as const, error: null } : f))
      );
      try {
        await compressSingle(file, qualityVal, maxW, removeExif);
        successCount++;
      } catch (err) {
        setFiles((prev) =>
          prev.map((f) =>
            f.id === file.id
              ? { ...f, status: "error" as const, error: err instanceof Error ? err.message : "Unknown error" }
              : f
          )
        );
      }
    }

    if (successCount > 0) {
      showMessage(
        successCount === files.length
          ? asText(messagesUi.allCompressed)
          : formatUi(asText(messagesUi.partialCompressed), { n: successCount })
      );
    } else {
      showMessage(asText(messagesUi.compressFailed), "error");
    }
    setIsProcessing(false);
  }, [files, quality, maxWidth, removeExif, isProcessing, showMessage, messagesUi]);

  const downloadAll = useCallback(async () => {
    const downloadable = files.filter((f) => f.compressedBlob);
    if (!downloadable.length) {
      showMessage(asText(messagesUi.compressFirst), "error");
      return;
    }

    try {
      const zip = new JSZip();
      downloadable.forEach((f) => {
        zip.file(f.outputFilename || f.file.name, f.compressedBlob!);
      });
      const blob = await zip.generateAsync({ type: "blob" });
      downloadBlob(blob, "compressed-images.zip");
      showMessage(asText(messagesUi.zipStarted));
    } catch {
      showMessage(asText(messagesUi.zipError), "error");
    }
  }, [files, showMessage, messagesUi]);

  const downloadSingle = useCallback(
    (id: string) => {
      const f = files.find((x) => x.id === id);
      if (!f?.compressedBlob) {
        showMessage(asText(messagesUi.noCompressedFile), "error");
        return;
      }
      downloadBlob(f.compressedBlob, f.outputFilename || `${f.file.name}-compressed`);
    },
    [files, showMessage, messagesUi]
  );

  const removeFile = useCallback(
    (id: string) => {
      const removed = files.find((f) => f.id === id);
      setFiles((prev) => prev.filter((f) => f.id !== id));
      if (removed) {
        showMessage(formatUi(asText(messagesUi.fileRemoved), { name: removed.file.name }));
      }
    },
    [files, showMessage, messagesUi]
  );

  const reset = useCallback(() => {
    setFiles([]);
    setMaxWidth("");
    setQuality(80);
    setRemoveExif(true);
    if (fileInputRef.current) fileInputRef.current.value = "";
    showMessage(asText(messagesUi.resetDone));
  }, [showMessage, messagesUi]);

  const totalOriginal = files.reduce((acc, f) => acc + (f.originalSize || 0), 0);
  const totalCompressed = files
    .filter((f) => f.compressedSize)
    .reduce((acc, f) => acc + (f.compressedSize || 0), 0);
  const saved = totalOriginal - totalCompressed;
  const hasCompressed = files.some((f) => f.compressedBlob);

  const getStatusLabel = (status: FileRecord["status"]) => {
    switch (status) {
      case "processing":
        return asText(statusUi.compressing);
      case "done":
        return asText(statusUi.done);
      case "error":
        return asText(statusUi.error);
      default:
        return asText(statusUi.pending);
    }
  };

  const calculateSaving = (f: FileRecord) => {
    if (!f.originalSize || !f.compressedSize) return "";
    const savedBytes = f.originalSize - f.compressedSize;
    if (savedBytes <= 0) return "";
    const percent = ((savedBytes / f.originalSize) * 100).toFixed(1);
    return formatUi(asText(fileInfoUi.percentReduced), { percent });
  };

  if (!ui) return null;

  return (
    <div className="space-y-6">
      {/* Upload Section */}
      {files.length === 0 ? (
        <div
          className={`flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-600 bg-surface p-12 text-center transition-colors hover:border-blue-500/50 ${isProcessing ? "pointer-events-none opacity-60" : ""}`}
          onClick={() => !isProcessing && fileInputRef.current?.click()}
          onDragOver={(e) => {
            e.preventDefault();
            if (!isProcessing) e.currentTarget.classList.add("border-blue-500");
          }}
          onDragLeave={(e) => {
            e.preventDefault();
            e.currentTarget.classList.remove("border-blue-500");
          }}
          onDrop={(e) => {
            e.preventDefault();
            e.currentTarget.classList.remove("border-blue-500");
            if (!isProcessing) handleFiles(e.dataTransfer.files);
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
          <p className="mb-2 text-slate-400">{asText(uploadUi.dragDrop)}</p>
          <button
            type="button"
            className="rounded-lg bg-blue-600 px-6 py-2 font-medium text-white hover:bg-blue-500"
            onClick={(e) => {
              e.stopPropagation();
              fileInputRef.current?.click();
            }}
          >
            {asText(uploadUi.chooseFiles)}
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={(e) => {
              handleFiles(e.target.files);
              e.target.value = "";
            }}
          />
        </div>
      ) : null}

      {/* Preview Section */}
      {files.length > 0 && (
        <div className="space-y-6">
          <div className="rounded-xl border border-border bg-surface p-6">
            <div className="mb-4 rounded-lg bg-slate-800/50 p-4 text-sm text-slate-300">
              {formatUi(asText(summaryUi.totalFiles), { n: files.length })} ·{" "}
              {formatUi(asText(summaryUi.originalSize), { size: formatSize(totalOriginal) })}
              {totalCompressed > 0 &&
                ` · ${formatUi(asText(summaryUi.compressedSize), { size: formatSize(totalCompressed) })} (${
                  saved > 0
                    ? formatUi(asText(summaryUi.percentReduced), {
                        percent: ((saved / totalOriginal) * 100).toFixed(1),
                      })
                    : asText(summaryUi.noChange)
                })`}
            </div>

            <div className="mb-4">
              <label className="mb-2 block text-sm font-medium text-slate-300">
                {asText(labelsUi.compressionQuality)}
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

            <div className="mb-4">
              <label className="mb-2 block text-sm font-medium text-slate-300">
                {asText(labelsUi.maxWidthOptional)}
              </label>
              <NumberInputWithStepper
                value={maxWidth}
                onChange={(v) => setMaxWidth(v)}
                placeholder={asText(labelsUi.originalWidthPlaceholder)}
                min={1}
                className="w-full"
              />
            </div>

            <div className="mb-4">
              <label className="flex cursor-pointer items-center justify-between">
                <span className="text-sm font-medium text-slate-300">{asText(labelsUi.removeExif)}</span>
                <button
                  type="button"
                  role="switch"
                  aria-checked={removeExif}
                  onClick={() => setRemoveExif((v) => !v)}
                  className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${
                    removeExif ? "bg-blue-600" : "bg-slate-600"
                  }`}
                >
                  <span
                    className={`absolute top-1 h-4 w-4 rounded-full bg-white transition-all ${
                      removeExif ? "left-6" : "left-1"
                    }`}
                  />
                </button>
              </label>
              <p className="mt-1 text-xs text-slate-500">{asText(labelsUi.exifHint)}</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={compressImages}
                disabled={isProcessing || !files.length}
                className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-500 disabled:opacity-50"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                  />
                </svg>
                {asText(buttonsUi.compressAll)}
              </button>
              <button
                type="button"
                onClick={downloadAll}
                disabled={isProcessing || !hasCompressed}
                className="flex items-center gap-2 rounded-lg bg-slate-600 px-4 py-2 font-medium text-white hover:bg-slate-500 disabled:opacity-50"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
                {asText(buttonsUi.downloadAllZip)}
              </button>
              <button
                type="button"
                onClick={reset}
                disabled={isProcessing}
                className="flex items-center gap-2 rounded-lg bg-slate-600 px-4 py-2 font-medium text-white hover:bg-slate-500 disabled:opacity-50"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                {asText(buttonsUi.reset)}
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {files.map((file) => (
              <div
                key={file.id}
                className="rounded-xl border border-border bg-surface p-6"
              >
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <p className="font-semibold text-slate-200">{file.file.name}</p>
                    <p className="text-sm text-slate-500">
                      {formatUi(asText(fileInfoUi.originalSize), { size: formatSize(file.originalSize) })}
                    </p>
                    {file.originalWidth && file.originalHeight && (
                      <p className="text-sm text-slate-500">
                        {formatUi(asText(fileInfoUi.resolution), {
                          width: file.originalWidth,
                          height: file.originalHeight,
                        })}
                      </p>
                    )}
                    {file.compressedSize && (
                      <p className="text-sm text-blue-400">
                        {formatUi(asText(fileInfoUi.compressedSize), {
                          size: formatSize(file.compressedSize),
                        })}{" "}
                        {calculateSaving(file)}
                      </p>
                    )}
                    {file.error && (
                      <p className="text-sm text-red-400">
                        {formatUi(asText(fileInfoUi.errorPrefix), { message: file.error })}
                      </p>
                    )}
                  </div>
                  <span
                    className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium ${
                      file.status === "done"
                        ? "bg-green-900/50 text-green-400"
                        : file.status === "processing"
                          ? "bg-amber-900/50 text-amber-400"
                          : file.status === "error"
                            ? "bg-red-900/50 text-red-400"
                            : "bg-slate-700 text-slate-400"
                    }`}
                  >
                    {getStatusLabel(file.status)}
                  </span>
                </div>
                <div className="mb-4">
                  <p className="mb-2 text-sm font-medium text-slate-300">
                    {file.compressedDataUrl
                      ? asText(previewUi.compare)
                      : asText(previewUi.preview)}
                  </p>
                  {file.compressedDataUrl ? (
                    <div className="space-y-2">
                      <div className="relative aspect-video overflow-hidden rounded-lg bg-slate-800">
                        <img
                          src={file.originalDataUrl}
                          alt={file.file.name}
                          className="absolute inset-0 h-full w-full object-contain"
                        />
                        <div
                          className="absolute inset-0 overflow-hidden"
                          style={{
                            clipPath: `inset(0 0 0 ${comparePos[file.id] ?? 50}%)`,
                          }}
                        >
                          <img
                            src={file.compressedDataUrl}
                            alt={`${file.file.name} compressed`}
                            className="absolute inset-0 h-full w-full object-contain"
                          />
                        </div>
                        <div
                          className="absolute top-0 bottom-0 z-10 w-1 cursor-ew-resize bg-white/90"
                          style={{ left: `${comparePos[file.id] ?? 50}%` }}
                          onMouseDown={(e) => {
                            e.preventDefault();
                            const container = (e.currentTarget as HTMLElement).parentElement;
                            if (!container) return;
                            const move = (ev: MouseEvent) => {
                              const rect = container.getBoundingClientRect();
                              const pct = Math.max(
                                0,
                                Math.min(100, ((ev.clientX - rect.left) / rect.width) * 100)
                              );
                              setComparePos((prev) => ({ ...prev, [file.id]: pct }));
                            };
                            window.addEventListener("mousemove", move);
                            window.addEventListener(
                              "mouseup",
                              () => window.removeEventListener("mousemove", move),
                              { once: true }
                            );
                          }}
                        />
                      </div>
                      <div className="flex items-center gap-4">
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={comparePos[file.id] ?? 50}
                          onChange={(e) =>
                            setComparePos((prev) => ({ ...prev, [file.id]: Number(e.target.value) }))
                          }
                          className="flex-1"
                        />
                        <span className="text-xs text-slate-500">
                          {formatUi(asText(previewUi.compressedView), {
                            percent: (comparePos[file.id] ?? 50).toFixed(0),
                          })}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500">
                        {formatUi(asText(previewUi.sizeLine), {
                          original: formatSize(file.originalSize),
                          compressed: formatSize(file.compressedSize),
                        })}
                      </p>
                    </div>
                  ) : (
                    <div className="aspect-video overflow-hidden rounded-lg bg-slate-800">
                      <img
                        src={file.originalDataUrl}
                        alt={file.file.name}
                        className="h-full w-full object-contain"
                      />
                      <p className="mt-1 text-xs text-slate-500">
                        {formatUi(asText(previewUi.compressToCompare), {
                          size: formatSize(file.originalSize),
                        })}
                      </p>
                    </div>
                  )}
                </div>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => downloadSingle(file.id)}
                    disabled={!file.compressedBlob}
                    className="flex items-center gap-2 rounded-lg bg-slate-600 px-4 py-2 text-sm font-medium text-white hover:bg-slate-500 disabled:opacity-50"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                      />
                    </svg>
                    {asText(buttonsUi.download)}
                  </button>
                  <button
                    type="button"
                    onClick={() => removeFile(file.id)}
                    className="flex items-center gap-2 rounded-lg bg-red-900/50 px-4 py-2 text-sm font-medium text-red-400 hover:bg-red-900/70"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                    {asText(buttonsUi.remove)}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={(e) => {
          handleFiles(e.target.files);
          e.target.value = "";
        }}
      />

      {message && (
        <div
          className={`fixed right-4 top-4 z-[9999] rounded-lg px-4 py-3 ${
            message.type === "error" ? "bg-red-600" : "bg-green-600"
          } text-white shadow-lg`}
        >
          {message.text}
        </div>
      )}
    </div>
  );
}
