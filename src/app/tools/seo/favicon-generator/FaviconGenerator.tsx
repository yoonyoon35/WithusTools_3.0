"use client";

import { useState, useCallback, useRef } from "react";
import JSZip from "jszip";

const SIZES = {
  basic: [16, 32, 48],
  apple: [57, 60, 72, 76, 114, 120, 144, 152, 180],
  android: [36, 48, 72, 96, 144, 192, 512],
  windows: [70, 150, 310],
  safari: [16, 32, 96, 192],
} as const;

type Platform = keyof typeof SIZES;

function getFilename(platform: Platform, size: number): string {
  switch (platform) {
    case "basic":
      return size === 16 ? "favicon.ico" : `favicon-${size}x${size}.png`;
    case "apple":
      return size === 180 ? "apple-touch-icon.png" : `apple-touch-icon-${size}x${size}.png`;
    case "android":
      return `android-chrome-${size}x${size}.png`;
    case "windows":
      return `mstile-${size}x${size}.png`;
    case "safari":
      return `safari-pinned-${size}x${size}.png`;
    default:
      return `icon-${size}x${size}.png`;
  }
}

interface FaviconItem {
  size: number;
  dataUrl: string;
  filename: string;
}

export default function FaviconGenerator() {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [message, setMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);
  const [basic, setBasic] = useState(true);
  const [apple, setApple] = useState(true);
  const [android, setAndroid] = useState(true);
  const [windows, setWindows] = useState(true);
  const [safari, setSafari] = useState(true);
  const [bgColor, setBgColor] = useState("#ffffff");
  const [transparentBg, setTransparentBg] = useState(false);
  const [siteName, setSiteName] = useState("");
  const [shortName, setShortName] = useState("");
  const [iconPath, setIconPath] = useState("");
  const [results, setResults] = useState<Record<string, FaviconItem[]> | null>(null);
  const [htmlCode, setHtmlCode] = useState("");
  const [manifestCode, setManifestCode] = useState("");
  const [browserconfigCode, setBrowserconfigCode] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const pickerJustClosedRef = useRef(false);

  const showMessage = useCallback((text: string, type: "success" | "error" = "success") => {
    setMessage({ text, type });
    setTimeout(() => setMessage(null), 3000);
  }, []);

  const handleFile = useCallback(
    (file: File) => {
      if (!file.type.startsWith("image/")) {
        showMessage("Please select an image file (PNG, JPG, GIF, etc.).", "error");
        return;
      }
      const reader = new FileReader();
      reader.onerror = () => showMessage("Failed to read file.", "error");
      reader.onload = (e) => {
        const dataUrl = e.target?.result as string;
        if (!dataUrl) return;
        const img = new Image();
        img.onerror = () => showMessage("Failed to load image. The file may be corrupted.", "error");
        img.onload = () => {
          if (img.width < 260 || img.height < 260) {
            showMessage("Image is too small. Minimum size is 260x260 pixels.", "error");
            return;
          }
          setPreviewUrl(dataUrl);
        };
        img.src = dataUrl;
      };
      reader.readAsDataURL(file);
    },
    [showMessage]
  );

  const createFavicon = useCallback(
    (img: HTMLImageElement, size: number, canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
      return new Promise<{ size: number; dataUrl: string }>((resolve) => {
        canvas.width = size;
        canvas.height = size;
        if (!transparentBg) {
          ctx.fillStyle = bgColor;
          ctx.fillRect(0, 0, size, size);
        }
        const scale = Math.min(size / img.width, size / img.height);
        const x = (size - img.width * scale) / 2;
        const y = (size - img.height * scale) / 2;
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
        resolve({ size, dataUrl: canvas.toDataURL("image/png") });
      });
    },
    [bgColor, transparentBg]
  );

  const generate = useCallback(async () => {
    if (!previewUrl) return;
    try {
      const img = new Image();
      img.src = previewUrl;
      await new Promise((r) => (img.onload = r));

      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d")!;
      const favicons: Record<string, FaviconItem[]> = {};
      const platforms: { key: Platform; checked: boolean }[] = [
        { key: "basic", checked: basic },
        { key: "apple", checked: apple },
        { key: "android", checked: android },
        { key: "windows", checked: windows },
        { key: "safari", checked: safari },
      ];

      for (const { key, checked } of platforms) {
        if (!checked) continue;
        favicons[key] = await Promise.all(
          SIZES[key].map(async (size) => {
            const fav = await createFavicon(img, size, canvas, ctx);
            return { ...fav, filename: getFilename(key, size) };
          })
        );
      }

      setResults(favicons);

      const iconPathVal = iconPath.trim() ? (iconPath.endsWith("/") ? iconPath : `${iconPath}/`) : "/";
      const siteNameVal = siteName.trim() || "Your Site Name";
      const shortNameVal = shortName.trim() || "Site";

      const lines: string[] = ["<!-- Favicon: all generated assets -->"];
      if (favicons.basic) {
        const ico = favicons.basic.find((f) => f.filename === "favicon.ico");
        if (ico) lines.push(`<link rel="icon" type="image/x-icon" href="${iconPathVal}${ico.filename}">`);
        favicons.basic.filter((f) => f.filename !== "favicon.ico").forEach(({ size, filename }) => {
          lines.push(`<link rel="icon" type="image/png" sizes="${size}x${size}" href="${iconPathVal}${filename}">`);
        });
      }
      if (favicons.apple) {
        favicons.apple.forEach(({ size, filename }) => {
          lines.push(`<link rel="apple-touch-icon" sizes="${size}x${size}" href="${iconPathVal}${filename}">`);
        });
      }
      if (favicons.android) {
        favicons.android.forEach(({ size, filename }) => {
          lines.push(`<link rel="icon" type="image/png" sizes="${size}x${size}" href="${iconPathVal}${filename}">`);
        });
      }
      if (favicons.windows) {
        favicons.windows.forEach(({ size, filename }) => {
          lines.push(`<meta name="msapplication-square${size}x${size}logo" content="${iconPathVal}${filename}">`);
        });
      }
      if (favicons.safari) {
        favicons.safari.forEach(({ size, filename }) => {
          lines.push(`<link rel="icon" type="image/png" sizes="${size}x${size}" href="${iconPathVal}${filename}">`);
        });
      }
      lines.push(`<meta name="theme-color" content="${bgColor}">`);
      if (favicons.android) lines.push('<link rel="manifest" href="/site.webmanifest">');
      if (favicons.windows) lines.push('<meta name="msapplication-config" content="/browserconfig.xml">');
      setHtmlCode(lines.join("\n"));

      const icons: { src: string; sizes: string; type: string }[] = [];
      ["basic", "apple", "android", "windows", "safari"].forEach((p) => {
        (favicons[p] || []).forEach(({ size, filename }) => {
          if (filename.endsWith(".png"))
            icons.push({ src: `${iconPathVal}${filename}`, sizes: `${size}x${size}`, type: "image/png" });
        });
      });
      const manifest = {
        name: siteNameVal,
        short_name: shortNameVal,
        start_url: "/",
        icons,
        theme_color: bgColor,
        background_color: bgColor,
        display: "standalone",
      };
      setManifestCode(JSON.stringify(manifest, null, 2));

      const browserconfig = `<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
    <msapplication>
        <tile>
            <square70x70logo src="${iconPathVal}mstile-70x70.png"/>
            <square150x150logo src="${iconPathVal}mstile-150x150.png"/>
            <square310x310logo src="${iconPathVal}mstile-310x310.png"/>
            <TileColor>${bgColor}</TileColor>
        </tile>
    </msapplication>
</browserconfig>`;
      setBrowserconfigCode(browserconfig);
    } catch (err) {
      showMessage("Failed to generate favicons", "error");
    }
  }, [previewUrl, basic, apple, android, windows, safari, bgColor, transparentBg, siteName, shortName, iconPath, createFavicon, showMessage]);

  const downloadPackage = useCallback(async () => {
    if (!previewUrl) return;
    try {
      const zip = new JSZip();
      const img = new Image();
      img.src = previewUrl;
      await new Promise((r) => (img.onload = r));
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d")!;
      const favicons: Record<string, FaviconItem[]> = {};
      const platforms: { key: Platform; checked: boolean }[] = [
        { key: "basic", checked: basic },
        { key: "apple", checked: apple },
        { key: "android", checked: android },
        { key: "windows", checked: windows },
        { key: "safari", checked: safari },
      ];

      for (const { key, checked } of platforms) {
        if (!checked) continue;
        favicons[key] = [];
        for (const size of SIZES[key]) {
          const fav = await createFavicon(img, size, canvas, ctx);
          const filename = getFilename(key, size);
          favicons[key].push({ ...fav, filename });
          const res = await fetch(fav.dataUrl);
          const blob = await res.blob();
          zip.file(filename, blob);
        }
      }

      const iconPathVal = iconPath.trim() ? (iconPath.endsWith("/") ? iconPath : `${iconPath}/`) : "/";
      const siteNameVal = siteName.trim() || "Your Site Name";
      const shortNameVal = shortName.trim() || "Site";

      const icons: { src: string; sizes: string; type: string }[] = [];
      ["basic", "apple", "android", "windows", "safari"].forEach((p) => {
        (favicons[p] || []).forEach(({ size, filename }) => {
          if (filename.endsWith(".png"))
            icons.push({ src: `${iconPathVal}${filename}`, sizes: `${size}x${size}`, type: "image/png" });
        });
      });
      const manifest = {
        name: siteNameVal,
        short_name: shortNameVal,
        start_url: "/",
        icons,
        theme_color: bgColor,
        background_color: bgColor,
        display: "standalone",
      };
      const browserconfig = `<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
    <msapplication>
        <tile>
            <square70x70logo src="${iconPathVal}mstile-70x70.png"/>
            <square150x150logo src="${iconPathVal}mstile-150x150.png"/>
            <square310x310logo src="${iconPathVal}mstile-310x310.png"/>
            <TileColor>${bgColor}</TileColor>
        </tile>
    </msapplication>
</browserconfig>`;

      const lines: string[] = ["<!-- Favicon: all generated assets -->"];
      if (favicons.basic) {
        const ico = favicons.basic.find((f) => f.filename === "favicon.ico");
        if (ico) lines.push(`<link rel="icon" type="image/x-icon" href="${iconPathVal}${ico.filename}">`);
        favicons.basic.filter((f) => f.filename !== "favicon.ico").forEach(({ size, filename }) => {
          lines.push(`<link rel="icon" type="image/png" sizes="${size}x${size}" href="${iconPathVal}${filename}">`);
        });
      }
      if (favicons.apple) {
        favicons.apple.forEach(({ size, filename }) => {
          lines.push(`<link rel="apple-touch-icon" sizes="${size}x${size}" href="${iconPathVal}${filename}">`);
        });
      }
      if (favicons.android) {
        favicons.android.forEach(({ size, filename }) => {
          lines.push(`<link rel="icon" type="image/png" sizes="${size}x${size}" href="${iconPathVal}${filename}">`);
        });
      }
      if (favicons.windows) {
        favicons.windows.forEach(({ size, filename }) => {
          lines.push(`<meta name="msapplication-square${size}x${size}logo" content="${iconPathVal}${filename}">`);
        });
      }
      if (favicons.safari) {
        favicons.safari.forEach(({ size, filename }) => {
          lines.push(`<link rel="icon" type="image/png" sizes="${size}x${size}" href="${iconPathVal}${filename}">`);
        });
      }
      lines.push(`<meta name="theme-color" content="${bgColor}">`);
      if (favicons.android) lines.push('<link rel="manifest" href="/site.webmanifest">');
      if (favicons.windows) lines.push('<meta name="msapplication-config" content="/browserconfig.xml">');

      zip.file("site.webmanifest", JSON.stringify(manifest, null, 2));
      zip.file("browserconfig.xml", browserconfig);
      zip.file("example.html", lines.join("\n"));

      const content = await zip.generateAsync({ type: "blob" });
      const url = URL.createObjectURL(content);
      const a = document.createElement("a");
      a.href = url;
      a.download = "favicon-package.zip";
      a.click();
      URL.revokeObjectURL(url);
      showMessage("Package downloaded successfully!");
    } catch (err) {
      showMessage("Failed to download package", "error");
    }
  }, [previewUrl, basic, apple, android, windows, safari, bgColor, transparentBg, siteName, shortName, iconPath, createFavicon, showMessage]);

  const copyToClipboard = (id: string, text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  return (
    <div className="space-y-6">
      {message && (
        <div
          className={`rounded-lg px-4 py-2 text-sm ${
            message.type === "error" ? "bg-red-900/50 text-red-200" : "bg-green-900/50 text-green-200"
          }`}
        >
          {message.text}
        </div>
      )}

      <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 px-4 py-3">
        <p className="flex items-center gap-2 font-semibold text-amber-400">
          All favicon generation runs in your browser. Files never leave your device.
        </p>
      </div>

      <div className="rounded-xl border border-border bg-surface p-6">
        <h2 className="mb-4 text-lg font-semibold text-slate-100">Upload Image</h2>
        <input
          ref={fileInputRef}
          id="favicon-file"
          type="file"
          accept="image/*"
          className="absolute left-0 top-0 h-px w-px overflow-hidden opacity-0"
          onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) {
              pickerJustClosedRef.current = true;
              setTimeout(() => {
                pickerJustClosedRef.current = false;
              }, 500);
              handleFile(f);
            }
            e.target.value = "";
          }}
        />
        {!previewUrl ? (
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              const f = e.dataTransfer.files[0];
              if (!f) {
                showMessage("Please drop an image file.", "error");
                return;
              }
              if (!f.type.startsWith("image/")) {
                showMessage("Please drop an image file (PNG, JPG, GIF, etc.).", "error");
                return;
              }
              handleFile(f);
            }}
            onClick={() => {
              if (pickerJustClosedRef.current) return;
              fileInputRef.current?.click();
            }}
            className="flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-border bg-slate-950/50 px-6 py-8 transition-colors hover:border-slate-600"
          >
            <span className="mb-2 text-4xl text-slate-500">📁</span>
            <p className="mb-2 text-sm text-slate-400">
              Drop image here or click to upload
            </p>
            <p className="text-xs text-slate-500">Recommended: Square image, minimum 260×260 pixels</p>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <img src={previewUrl} alt="Preview" className="h-24 w-24 rounded-lg object-cover" />
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => {
                  if (pickerJustClosedRef.current) return;
                  fileInputRef.current?.click();
                }}
                className="rounded-lg border border-slate-600 px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:border-slate-500"
              >
                Change Image
              </button>
              <button
                type="button"
                onClick={() => {
                  setPreviewUrl(null);
                  setResults(null);
                  setHtmlCode("");
                  setManifestCode("");
                  setBrowserconfigCode("");
                }}
                className="rounded-lg border border-slate-600 px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:border-slate-500"
              >
                Reset
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="rounded-xl border border-border bg-surface p-6">
        <h3 className="mb-4 font-semibold text-slate-200">Options</h3>
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="text-sm text-slate-400">Platforms</p>
            <div className="flex flex-wrap gap-4">
              {[
                { id: "basic", label: "Basic favicon (favicon.ico)", checked: basic, set: setBasic },
                { id: "apple", label: "Apple Touch Icons", checked: apple, set: setApple },
                { id: "android", label: "Android/Chrome Icons", checked: android, set: setAndroid },
                { id: "windows", label: "Windows Tiles", checked: windows, set: setWindows },
                { id: "safari", label: "Safari Pinned Tab", checked: safari, set: setSafari },
              ].map(({ id, label, checked, set }) => (
                <label key={id} className="flex items-center gap-2 text-sm text-slate-300">
                  <input type="checkbox" checked={checked} onChange={(e) => set(e.target.checked)} />
                  {label}
                </label>
              ))}
            </div>
          </div>
          <div>
            <span className="block text-sm text-slate-400">Background (for transparent source images)</span>
            <label className="mt-2 flex cursor-pointer items-center gap-2 text-sm text-slate-300">
              <input
                type="checkbox"
                checked={transparentBg}
                onChange={(e) => setTransparentBg(e.target.checked)}
              />
              No background (keep transparency)
            </label>
            <p className="mt-1 text-xs text-slate-500">
              {transparentBg
                ? "Icons are drawn on a transparent canvas. Opaque pixels in your image are unchanged."
                : "Transparent areas in your image are filled with the color below."}
            </p>
            <label className="mt-3 block text-sm text-slate-400">
              {transparentBg ? "Theme & manifest color (meta tags only)" : "Fill color"}
            </label>
            <input
              type="color"
              value={bgColor}
              onChange={(e) => setBgColor(e.target.value)}
              className="mt-1 h-10 w-20 cursor-pointer rounded border border-slate-600 bg-slate-800"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-400">Site Name</label>
            <input
              type="text"
              value={siteName}
              onChange={(e) => setSiteName(e.target.value)}
              placeholder="e.g., WithusTools"
              className="mt-1 w-full rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-slate-200"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-400">Short Name</label>
            <input
              type="text"
              value={shortName}
              onChange={(e) => setShortName(e.target.value)}
              placeholder="e.g., Withus"
              className="mt-1 w-full rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-slate-200"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-400">Favicon output path</label>
            <input
              type="text"
              value={iconPath}
              onChange={(e) => setIconPath(e.target.value)}
              placeholder="e.g., /assets/icons/"
              className="mt-1 w-full rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-slate-200"
            />
          </div>
          <button
            type="button"
            disabled={!previewUrl}
            onClick={generate}
            className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white disabled:opacity-50 hover:bg-blue-500"
          >
            Generate Favicons
          </button>
        </div>
      </div>

      {results && (
        <div className="rounded-xl border border-border bg-surface p-6">
          <h3 className="mb-4 font-semibold text-slate-200">Generated Favicons</h3>
          <div className="mb-6 flex flex-wrap gap-4">
            {Object.entries(results).flatMap(([platform, items]) =>
              items.map(({ size, dataUrl }) => {
                const displaySize = Math.min(size, 96);
                return (
                  <div key={`${platform}-${size}`} className="flex flex-col items-center gap-2">
                    <img
                      src={dataUrl}
                      alt={`${size}x${size}`}
                      className="rounded object-none"
                      style={{ width: displaySize, height: displaySize }}
                    />
                    <span className="text-xs text-slate-500">{size}×{size}</span>
                  </div>
                );
              })
            )}
          </div>
          <p className="mb-6 text-xs text-slate-500">
            These previews are for illustrative purposes only.
          </p>
          <div className="space-y-4">
            <div>
              <p className="mb-2 text-sm font-medium text-slate-300">HTML Code</p>
              <div className="relative">
                <pre className="scrollbar-thin max-h-[50vh] overflow-y-auto rounded-lg bg-slate-900 p-4 pr-2 text-sm text-slate-300">
                  {htmlCode}
                </pre>
                <button
                  type="button"
                  onClick={() => copyToClipboard("html", htmlCode)}
                  className="absolute right-2 top-2 rounded bg-slate-700 px-2 py-1 text-xs hover:bg-slate-600"
                >
                  {copiedId === "html" ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>
            <div>
              <p className="mb-2 text-sm font-medium text-slate-300">site.webmanifest</p>
              <div className="relative">
                <pre className="scrollbar-thin max-h-[50vh] overflow-y-auto rounded-lg bg-slate-900 p-4 pr-2 text-sm text-slate-300">
                  {manifestCode}
                </pre>
                <button
                  type="button"
                  onClick={() => copyToClipboard("manifest", manifestCode)}
                  className="absolute right-2 top-2 rounded bg-slate-700 px-2 py-1 text-xs hover:bg-slate-600"
                >
                  {copiedId === "manifest" ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>
            <div>
              <p className="mb-2 text-sm font-medium text-slate-300">browserconfig.xml</p>
              <div className="relative">
                <pre className="scrollbar-thin max-h-[50vh] overflow-y-auto rounded-lg bg-slate-900 p-4 pr-2 text-sm text-slate-300">
                  {browserconfigCode}
                </pre>
                <button
                  type="button"
                  onClick={() => copyToClipboard("browserconfig", browserconfigCode)}
                  className="absolute right-2 top-2 rounded bg-slate-700 px-2 py-1 text-xs hover:bg-slate-600"
                >
                  {copiedId === "browserconfig" ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={downloadPackage}
            className="mt-4 rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-500"
          >
            Download Favicon Package
          </button>
        </div>
      )}
    </div>
  );
}
