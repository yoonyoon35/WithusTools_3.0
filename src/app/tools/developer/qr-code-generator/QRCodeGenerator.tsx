"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import QRCode from "qrcode";
import { jsPDF } from "jspdf";

type ContentType = "text" | "email" | "phone" | "sms" | "wifi" | "vcard" | "geo" | "bitcoin" | "whatsapp" | "image";
type ErrorLevel = "L" | "M" | "Q" | "H";
type DownloadFormat = "png" | "jpg" | "svg" | "pdf";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900";

function getContent(type: ContentType, values: Record<string, string>): string | null {
  switch (type) {
    case "text":
      return values.text?.trim() || null;
    case "email": {
      const email = values.email?.trim();
      if (!email) return null;
      let content = `mailto:${email}`;
      const params: string[] = [];
      if (values.subject) params.push(`subject=${encodeURIComponent(values.subject)}`);
      if (values.body) params.push(`body=${encodeURIComponent(values.body)}`);
      if (params.length) content += "?" + params.join("&");
      return content;
    }
    case "phone": {
      const phone = values.phone?.trim();
      return phone ? `tel:${phone}` : null;
    }
    case "sms": {
      const num = values.smsNumber?.trim();
      if (!num) return null;
      let content = `sms:${num}`;
      if (values.smsMessage) content += `:${encodeURIComponent(values.smsMessage)}`;
      return content;
    }
    case "wifi": {
      const ssid = values.wifiSSID?.trim();
      if (!ssid) return null;
      const pwd = values.wifiPassword?.trim() || "";
      const security = values.wifiSecurity || "WPA";
      return `WIFI:T:${security};S:${ssid};P:${pwd};;`;
    }
    case "vcard": {
      const name = values.vcardName?.trim();
      if (!name) return null;
      const lines = ["BEGIN:VCARD", "VERSION:3.0", `FN:${name}`, `N:${name};;;`];
      if (values.vcardPhone?.trim()) lines.push(`TEL:${values.vcardPhone.trim()}`);
      if (values.vcardEmail?.trim()) lines.push(`EMAIL:${values.vcardEmail.trim()}`);
      if (values.vcardOrg?.trim()) lines.push(`ORG:${values.vcardOrg.trim()}`);
      if (values.vcardUrl?.trim()) {
        const url = values.vcardUrl.trim();
        lines.push(`URL:${url.startsWith("http") ? url : `https://${url}`}`);
      }
      if (values.vcardAddr?.trim()) lines.push(`ADR:;;${values.vcardAddr.trim()};;;;`);
      lines.push("END:VCARD");
      return lines.join("\n");
    }
    case "geo": {
      const lat = values.geoLat?.trim();
      const lng = values.geoLng?.trim();
      if (!lat || !lng) return null;
      const alt = values.geoAlt?.trim();
      return alt ? `geo:${lat},${lng},${alt}` : `geo:${lat},${lng}`;
    }
    case "bitcoin": {
      const addr = values.bitcoinAddr?.trim();
      if (!addr) return null;
      const amount = values.bitcoinAmount?.trim();
      return amount ? `bitcoin:${addr}?amount=${amount}` : `bitcoin:${addr}`;
    }
    case "whatsapp": {
      const num = values.whatsappNumber?.trim();
      if (!num) return null;
      const msg = values.whatsappMessage?.trim();
      const clean = num.replace(/\D/g, "");
      const url = msg ? `https://wa.me/${clean}?text=${encodeURIComponent(msg)}` : `https://wa.me/${clean}`;
      return url;
    }
    case "image": {
      const url = values.imageUrl?.trim();
      if (!url) return null;
      return url.startsWith("http") ? url : `https://${url}`;
    }
    default:
      return null;
  }
}

export default function QRCodeGenerator() {
  const [contentType, setContentType] = useState<ContentType>("text");
  const [values, setValues] = useState<Record<string, string>>({});
  const [size, setSize] = useState(300);
  const [fgColor, setFgColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [errorLevel, setErrorLevel] = useState<ErrorLevel>("M");
  const [downloadFormat, setDownloadFormat] = useState<DownloadFormat>("png");
  const [logoDataUrl, setLogoDataUrl] = useState<string | null>(null);
  const [logoSize, setLogoSize] = useState(20);
  const [toast, setToast] = useState<{ text: string; type: "success" | "error" } | null>(null);
  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const logoInputRef = useRef<HTMLInputElement>(null);

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

  const updateValue = useCallback((key: string, val: string) => {
    setValues((prev) => ({ ...prev, [key]: val }));
  }, []);

  const content = getContent(contentType, values);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isGenerated, setIsGenerated] = useState(false);

  const drawLogoOnCanvas = useCallback(
    (canvas: HTMLCanvasElement): Promise<void> =>
      new Promise((resolve) => {
        if (!logoDataUrl) {
          resolve();
          return;
        }
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = () => {
          const ctx = canvas.getContext("2d");
          if (!ctx) {
            resolve();
            return;
          }
          const s = canvas.width;
          const logoSizePx = s * (logoSize / 100);
          const logoX = (s - logoSizePx) / 2;
          const logoY = (s - logoSizePx) / 2;
          const padding = 8;
          ctx.fillStyle = bgColor;
          ctx.fillRect(logoX - padding, logoY - padding, logoSizePx + padding * 2, logoSizePx + padding * 2);
          ctx.drawImage(img, logoX, logoY, logoSizePx, logoSizePx);
          resolve();
        };
        img.onerror = () => resolve();
        img.src = logoDataUrl;
      }),
    [logoDataUrl, logoSize, bgColor]
  );

  useEffect(() => {
    if (!content || !canvasRef.current) {
      setIsGenerated(false);
      return;
    }
    const canvas = canvasRef.current;
    QRCode.toCanvas(canvas, content, {
      width: size,
      margin: 4,
      color: { dark: fgColor, light: bgColor },
      errorCorrectionLevel: errorLevel,
    })
      .then(() => drawLogoOnCanvas(canvas))
      .then(() => setIsGenerated(true))
      .catch(() => {
        setIsGenerated(false);
        showToast("Failed to generate QR code", "error");
      });
  }, [content, size, fgColor, bgColor, errorLevel, logoDataUrl, logoSize, drawLogoOnCanvas, showToast]);

  const download = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || !isGenerated) return;
    const ext = downloadFormat === "jpg" ? "jpg" : downloadFormat;
    const filename = `qrcode.${ext}`;

    if (downloadFormat === "png") {
      const link = document.createElement("a");
      link.download = filename;
      link.href = canvas.toDataURL("image/png");
      link.click();
      showToast("Downloaded!");
    } else if (downloadFormat === "jpg") {
      const link = document.createElement("a");
      link.download = filename;
      link.href = canvas.toDataURL("image/jpeg", 0.92);
      link.click();
      showToast("Downloaded!");
    } else if (downloadFormat === "svg") {
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("width", String(canvas.width));
      svg.setAttribute("height", String(canvas.height));
      svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      const image = document.createElementNS("http://www.w3.org/2000/svg", "image");
      image.setAttribute("href", canvas.toDataURL("image/png"));
      image.setAttribute("width", String(canvas.width));
      image.setAttribute("height", String(canvas.height));
      svg.appendChild(image);
      const blob = new Blob([new XMLSerializer().serializeToString(svg)], { type: "image/svg+xml" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = filename;
      link.click();
      URL.revokeObjectURL(url);
      showToast("Downloaded!");
    } else if (downloadFormat === "pdf") {
      const pdf = new jsPDF({ orientation: "portrait", unit: "px", format: [canvas.width, canvas.height] });
      pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, canvas.width, canvas.height);
      pdf.save(filename);
      showToast("Downloaded!");
    }
  }, [isGenerated, downloadFormat, showToast]);

  const handleLogoUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      showToast("Please upload an image file", "error");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      showToast("Image file is too large. Max 5MB.", "error");
      return;
    }
    const reader = new FileReader();
    reader.onload = (ev) => {
      const dataUrl = ev.target?.result as string;
      if (dataUrl) setLogoDataUrl(dataUrl);
    };
    reader.onerror = () => showToast("Failed to read image", "error");
    reader.readAsDataURL(file);
    e.target.value = "";
  }, [showToast]);

  const removeLogo = useCallback(() => {
    setLogoDataUrl(null);
    if (logoInputRef.current) logoInputRef.current.value = "";
  }, []);

  return (
    <div className="space-y-6" role="main" aria-label="QR Code Generator">
      <div className="rounded-xl border border-border bg-surface p-6">
        <label htmlFor="qr-content-type" className="mb-3 block text-lg font-semibold text-slate-100">
          Content Type
        </label>
        <select
          id="qr-content-type"
          value={contentType}
          onChange={(e) => setContentType(e.target.value as ContentType)}
          aria-label="Content type for QR code"
          className={`rounded-lg border border-border bg-slate-950 px-3 py-2 text-slate-200 ${focusRing}`}
        >
          <option value="text">Text / URL</option>
          <option value="email">Email</option>
          <option value="phone">Phone Number</option>
          <option value="sms">SMS</option>
          <option value="whatsapp">WhatsApp</option>
          <option value="wifi">Wi-Fi Network</option>
          <option value="vcard">vCard (Contact)</option>
          <option value="geo">Location (Geo)</option>
          <option value="bitcoin">Bitcoin</option>
          <option value="image">Image URL</option>
        </select>
      </div>

      <div className="rounded-xl border border-border bg-surface p-6">
        <h3 className="mb-3 text-lg font-semibold text-slate-100">Content</h3>
        {contentType === "text" && (
          <textarea
            id="qr-text"
            value={values.text ?? ""}
            onChange={(e) => updateValue("text", e.target.value)}
            placeholder="Enter URL or text"
            aria-label="URL or text content"
            className={`scrollbar-thin w-full resize-none rounded-lg border border-border bg-slate-950 px-4 py-3 text-slate-100 placeholder-slate-500 ${focusRing}`}
            rows={4}
          />
        )}
        {contentType === "email" && (
          <div className="space-y-3">
            <input
              id="qr-email"
              type="email"
              value={values.email ?? ""}
              onChange={(e) => updateValue("email", e.target.value)}
              placeholder="Email address"
              aria-label="Email address"
              className={`w-full rounded-lg border border-border bg-slate-950 px-4 py-2 text-slate-100 placeholder-slate-500 ${focusRing}`}
            />
            <input
              id="qr-email-subject"
              type="text"
              value={values.subject ?? ""}
              onChange={(e) => updateValue("subject", e.target.value)}
              placeholder="Subject (optional)"
              aria-label="Email subject"
              className={`w-full rounded-lg border border-border bg-slate-950 px-4 py-2 text-slate-100 placeholder-slate-500 ${focusRing}`}
            />
            <textarea
              id="qr-email-body"
              value={values.body ?? ""}
              onChange={(e) => updateValue("body", e.target.value)}
              placeholder="Body (optional)"
              aria-label="Email body"
              className={`w-full resize-none rounded-lg border border-border bg-slate-950 px-4 py-2 text-slate-100 placeholder-slate-500 ${focusRing}`}
              rows={3}
            />
          </div>
        )}
        {contentType === "phone" && (
          <input
            id="qr-phone"
            type="tel"
            value={values.phone ?? ""}
            onChange={(e) => updateValue("phone", e.target.value)}
            placeholder="+1234567890"
            aria-label="Phone number"
            className={`w-full rounded-lg border border-border bg-slate-950 px-4 py-2 text-slate-100 placeholder-slate-500 ${focusRing}`}
          />
        )}
        {contentType === "sms" && (
          <div className="space-y-3">
            <input
              id="qr-sms-number"
              type="tel"
              value={values.smsNumber ?? ""}
              onChange={(e) => updateValue("smsNumber", e.target.value)}
              placeholder="Phone number"
              aria-label="SMS recipient number"
              className={`w-full rounded-lg border border-border bg-slate-950 px-4 py-2 text-slate-100 placeholder-slate-500 ${focusRing}`}
            />
            <textarea
              id="qr-sms-message"
              value={values.smsMessage ?? ""}
              onChange={(e) => updateValue("smsMessage", e.target.value)}
              placeholder="Message (optional)"
              aria-label="SMS message"
              className={`w-full resize-none rounded-lg border border-border bg-slate-950 px-4 py-2 text-slate-100 placeholder-slate-500 ${focusRing}`}
              rows={3}
            />
          </div>
        )}
        {contentType === "wifi" && (
          <div className="space-y-3">
            <input
              id="qr-wifi-ssid"
              type="text"
              value={values.wifiSSID ?? ""}
              onChange={(e) => updateValue("wifiSSID", e.target.value)}
              placeholder="Network name (SSID)"
              aria-label="Wi-Fi network name"
              className={`w-full rounded-lg border border-border bg-slate-950 px-4 py-2 text-slate-100 placeholder-slate-500 ${focusRing}`}
            />
            <input
              id="qr-wifi-password"
              type="text"
              value={values.wifiPassword ?? ""}
              onChange={(e) => updateValue("wifiPassword", e.target.value)}
              placeholder="Password"
              aria-label="Wi-Fi password"
              className={`w-full rounded-lg border border-border bg-slate-950 px-4 py-2 text-slate-100 placeholder-slate-500 ${focusRing}`}
            />
            <select
              id="qr-wifi-security"
              value={values.wifiSecurity ?? "WPA"}
              onChange={(e) => updateValue("wifiSecurity", e.target.value)}
              aria-label="Wi-Fi security type"
              className={`rounded-lg border border-border bg-slate-950 px-4 py-2 text-slate-200 ${focusRing}`}
            >
              <option value="WPA">WPA/WPA2</option>
              <option value="WEP">WEP</option>
              <option value="nopass">No Password</option>
            </select>
          </div>
        )}
        {contentType === "vcard" && (
          <div className="space-y-3">
            <input
              id="qr-vcard-name"
              type="text"
              value={values.vcardName ?? ""}
              onChange={(e) => updateValue("vcardName", e.target.value)}
              placeholder="Name *"
              aria-label="Contact name"
              className={`w-full rounded-lg border border-border bg-slate-950 px-4 py-2 text-slate-100 placeholder-slate-500 ${focusRing}`}
            />
            <input
              id="qr-vcard-phone"
              type="tel"
              value={values.vcardPhone ?? ""}
              onChange={(e) => updateValue("vcardPhone", e.target.value)}
              placeholder="Phone (optional)"
              aria-label="Contact phone"
              className={`w-full rounded-lg border border-border bg-slate-950 px-4 py-2 text-slate-100 placeholder-slate-500 ${focusRing}`}
            />
            <input
              id="qr-vcard-email"
              type="email"
              value={values.vcardEmail ?? ""}
              onChange={(e) => updateValue("vcardEmail", e.target.value)}
              placeholder="Email (optional)"
              aria-label="Contact email"
              className={`w-full rounded-lg border border-border bg-slate-950 px-4 py-2 text-slate-100 placeholder-slate-500 ${focusRing}`}
            />
            <input
              id="qr-vcard-org"
              type="text"
              value={values.vcardOrg ?? ""}
              onChange={(e) => updateValue("vcardOrg", e.target.value)}
              placeholder="Organization (optional)"
              aria-label="Contact organization"
              className={`w-full rounded-lg border border-border bg-slate-950 px-4 py-2 text-slate-100 placeholder-slate-500 ${focusRing}`}
            />
            <input
              id="qr-vcard-url"
              type="url"
              value={values.vcardUrl ?? ""}
              onChange={(e) => updateValue("vcardUrl", e.target.value)}
              placeholder="Website (optional)"
              aria-label="Contact website"
              className={`w-full rounded-lg border border-border bg-slate-950 px-4 py-2 text-slate-100 placeholder-slate-500 ${focusRing}`}
            />
            <input
              id="qr-vcard-addr"
              type="text"
              value={values.vcardAddr ?? ""}
              onChange={(e) => updateValue("vcardAddr", e.target.value)}
              placeholder="Address (optional)"
              aria-label="Contact address"
              className={`w-full rounded-lg border border-border bg-slate-950 px-4 py-2 text-slate-100 placeholder-slate-500 ${focusRing}`}
            />
          </div>
        )}
        {contentType === "geo" && (
          <div className="space-y-3">
            <input
              id="qr-geo-lat"
              type="text"
              value={values.geoLat ?? ""}
              onChange={(e) => updateValue("geoLat", e.target.value)}
              placeholder="Latitude * (e.g. 37.5665)"
              aria-label="Latitude"
              className={`w-full rounded-lg border border-border bg-slate-950 px-4 py-2 text-slate-100 placeholder-slate-500 ${focusRing}`}
            />
            <input
              id="qr-geo-lng"
              type="text"
              value={values.geoLng ?? ""}
              onChange={(e) => updateValue("geoLng", e.target.value)}
              placeholder="Longitude * (e.g. 126.9780)"
              aria-label="Longitude"
              className={`w-full rounded-lg border border-border bg-slate-950 px-4 py-2 text-slate-100 placeholder-slate-500 ${focusRing}`}
            />
            <input
              id="qr-geo-alt"
              type="text"
              value={values.geoAlt ?? ""}
              onChange={(e) => updateValue("geoAlt", e.target.value)}
              placeholder="Altitude (optional, meters)"
              aria-label="Altitude"
              className={`w-full rounded-lg border border-border bg-slate-950 px-4 py-2 text-slate-100 placeholder-slate-500 ${focusRing}`}
            />
          </div>
        )}
        {contentType === "bitcoin" && (
          <div className="space-y-3">
            <input
              id="qr-bitcoin-addr"
              type="text"
              value={values.bitcoinAddr ?? ""}
              onChange={(e) => updateValue("bitcoinAddr", e.target.value)}
              placeholder="Bitcoin address *"
              aria-label="Bitcoin address"
              className={`w-full rounded-lg border border-border bg-slate-950 px-4 py-2 text-slate-100 placeholder-slate-500 ${focusRing}`}
            />
            <input
              id="qr-bitcoin-amount"
              type="text"
              value={values.bitcoinAmount ?? ""}
              onChange={(e) => updateValue("bitcoinAmount", e.target.value)}
              placeholder="Amount in BTC (optional, e.g. 0.001)"
              aria-label="Bitcoin amount"
              className={`w-full rounded-lg border border-border bg-slate-950 px-4 py-2 text-slate-100 placeholder-slate-500 ${focusRing}`}
            />
          </div>
        )}
        {contentType === "whatsapp" && (
          <div className="space-y-3">
            <input
              id="qr-whatsapp-number"
              type="tel"
              value={values.whatsappNumber ?? ""}
              onChange={(e) => updateValue("whatsappNumber", e.target.value)}
              placeholder="Phone number * (with country code, e.g. 821012345678)"
              aria-label="WhatsApp phone number"
              className={`w-full rounded-lg border border-border bg-slate-950 px-4 py-2 text-slate-100 placeholder-slate-500 ${focusRing}`}
            />
            <textarea
              id="qr-whatsapp-message"
              value={values.whatsappMessage ?? ""}
              onChange={(e) => updateValue("whatsappMessage", e.target.value)}
              placeholder="Pre-filled message (optional)"
              aria-label="WhatsApp message"
              className={`w-full resize-none rounded-lg border border-border bg-slate-950 px-4 py-2 text-slate-100 placeholder-slate-500 ${focusRing}`}
              rows={2}
            />
          </div>
        )}
        {contentType === "image" && (
          <div className="space-y-3">
            <input
              id="qr-image-url"
              type="url"
              value={values.imageUrl ?? ""}
              onChange={(e) => updateValue("imageUrl", e.target.value)}
              placeholder="Image URL * (e.g. https://example.com/photo.jpg)"
              aria-label="Image URL"
              className={`w-full rounded-lg border border-border bg-slate-950 px-4 py-2 text-slate-100 placeholder-slate-500 ${focusRing}`}
            />
            <p className="text-xs text-slate-500">
              Enter a public URL to an image. When scanned, the QR code will open this URL to display the image.
            </p>
          </div>
        )}
      </div>

      <div className="rounded-xl border border-border bg-surface p-6">
        <h3 className="mb-3 text-lg font-semibold text-slate-100">Appearance Settings</h3>
        <div className="mb-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <label htmlFor="qr-size" className="mb-1 block text-sm text-slate-400">
              QR Code Size
            </label>
            <select
              id="qr-size"
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              aria-label="QR code size"
              className={`w-full rounded-lg border border-border bg-slate-950 px-3 py-2 text-slate-200 ${focusRing}`}
            >
              <option value={200}>Small (200×200)</option>
              <option value={300}>Medium (300×300)</option>
              <option value={400}>Large (400×400)</option>
              <option value={500}>Extra Large (500×500)</option>
            </select>
          </div>
          <div>
            <label htmlFor="qr-fg-color" className="mb-1 block text-sm text-slate-400">
              Foreground Color
            </label>
            <div className="flex items-center gap-2">
              <input
                id="qr-fg-color"
                type="color"
                value={fgColor}
                onChange={(e) => setFgColor(e.target.value)}
                aria-label="Foreground color"
                className="h-10 w-14 cursor-pointer rounded border border-border bg-transparent"
              />
              <input
                type="text"
                value={fgColor}
                onChange={(e) => setFgColor(e.target.value)}
                className={`w-24 rounded border border-border bg-slate-950 px-2 py-1 text-sm text-slate-200 ${focusRing}`}
              />
            </div>
          </div>
          <div>
            <label htmlFor="qr-bg-color" className="mb-1 block text-sm text-slate-400">
              Background Color
            </label>
            <div className="flex items-center gap-2">
              <input
                id="qr-bg-color"
                type="color"
                value={bgColor}
                onChange={(e) => setBgColor(e.target.value)}
                aria-label="Background color"
                className="h-10 w-14 cursor-pointer rounded border border-border bg-transparent"
              />
              <input
                type="text"
                value={bgColor}
                onChange={(e) => setBgColor(e.target.value)}
                className={`w-24 rounded border border-border bg-slate-950 px-2 py-1 text-sm text-slate-200 ${focusRing}`}
              />
            </div>
          </div>
          <div>
            <label htmlFor="qr-error-level" className="mb-1 block text-sm text-slate-400">
              Error Correction Level
            </label>
            <select
              id="qr-error-level"
              value={errorLevel}
              onChange={(e) => setErrorLevel(e.target.value as ErrorLevel)}
              aria-label="Error correction level"
              className={`w-full rounded-lg border border-border bg-slate-950 px-3 py-2 text-slate-200 ${focusRing}`}
            >
              <option value="L">L (Low ~7%)</option>
              <option value="M">M (Medium ~15%)</option>
              <option value="Q">Q (Quartile ~25%)</option>
              <option value="H">H (High ~30%)</option>
            </select>
          </div>
          <div>
            <label htmlFor="qr-download-format" className="mb-1 block text-sm text-slate-400">
              Download Format
            </label>
            <select
              id="qr-download-format"
              value={downloadFormat}
              onChange={(e) => setDownloadFormat(e.target.value as DownloadFormat)}
              aria-label="Download format"
              className={`w-full rounded-lg border border-border bg-slate-950 px-3 py-2 text-slate-200 ${focusRing}`}
            >
              <option value="png">PNG</option>
              <option value="jpg">JPG</option>
              <option value="svg">SVG</option>
              <option value="pdf">PDF</option>
            </select>
          </div>
        </div>

        <div className="mb-4 border-t border-border pt-4">
          <h4 className="mb-3 text-base font-medium text-slate-200">Logo (Optional)</h4>
          <div className="flex flex-wrap items-center gap-3">
            <label
              htmlFor="logo-upload"
              className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm text-slate-300 hover:border-slate-600 hover:bg-slate-800"
            >
              <svg className="h-5 w-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" x2="12" y1="3" y2="15" />
              </svg>
              Upload Logo
            </label>
            <input
              id="logo-upload"
              ref={logoInputRef}
              type="file"
              accept="image/*"
              onChange={handleLogoUpload}
              className="hidden"
              aria-label="Upload logo image"
            />
            {logoDataUrl && (
              <>
                <div className="flex items-center gap-2">
                  <img
                    src={logoDataUrl}
                    alt="Logo preview"
                    className="h-12 w-12 rounded border border-border object-contain"
                  />
                  <button
                    type="button"
                    onClick={removeLogo}
                    aria-label="Remove logo"
                    className={`rounded px-2 py-1 text-sm text-red-400 hover:bg-red-500/20 ${focusRing}`}
                  >
                    Remove
                  </button>
                </div>
                <div>
                  <label htmlFor="logo-size" className="mb-1 block text-sm text-slate-400">
                    Logo Size
                  </label>
                  <select
                    id="logo-size"
                    value={logoSize}
                    onChange={(e) => setLogoSize(Number(e.target.value))}
                    aria-label="Logo size"
                    className={`rounded border border-border bg-slate-950 px-2 py-1 text-sm text-slate-200 ${focusRing}`}
                  >
                    <option value={10}>Small (10%)</option>
                    <option value={15}>Medium (15%)</option>
                    <option value={20}>Large (20%)</option>
                    <option value={25}>Extra Large (25%)</option>
                  </select>
                </div>
              </>
            )}
          </div>
        </div>

        <p className="mb-4 flex items-start gap-2 rounded-lg border border-amber-500/30 bg-amber-500/10 px-3 py-2 text-sm text-amber-200">
          <svg className="mt-0.5 h-4 w-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <circle cx="12" cy="12" r="10" />
            <line x1="12" x2="12" y1="8" y2="12" />
            <line x1="12" x2="12.01" y1="16" y2="16" />
          </svg>
          <span>
            Note: Certain combinations of appearance settings (e.g., low contrast colors, low error correction) or a large logo may reduce scanability. For best results, use high contrast colors and consider Error Correction Level Q or H when adding a logo.
          </span>
        </p>

        <div className="flex flex-col items-center gap-4">
          {content ? (
            <>
              <canvas
                ref={canvasRef}
                width={size}
                height={size}
                aria-label="QR Code preview"
                className="rounded border border-border"
              />
              <button
                type="button"
                onClick={download}
                disabled={!isGenerated}
                aria-label={`Download QR code as ${downloadFormat.toUpperCase()}`}
                className={`inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-lg shadow-blue-600/25 transition-colors hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-blue-600 ${focusRing}`}
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" x2="12" y1="15" y2="3" />
                </svg>
                Download {downloadFormat.toUpperCase()}
              </button>
            </>
          ) : (
            <div className="flex h-64 w-64 items-center justify-center rounded border border-dashed border-border text-slate-500">
              Enter content to generate QR code
            </div>
          )}
        </div>
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
