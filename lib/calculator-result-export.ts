import { SITE_DOMAIN, referenceDisclaimerLine } from "@/lib/site";

export function showExportToast(message: string) {
  const toast = document.createElement("div");
  toast.textContent = message;
  toast.className =
    "fixed top-4 right-4 z-[100] max-w-sm rounded-lg bg-blue-600 px-4 py-2 text-sm text-white shadow-lg";
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2200);
}

function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

export function downloadTextFile(text: string, filename: string) {
  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  downloadBlob(blob, filename);
}

export async function copyTextToClipboard(text: string) {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return;
    } catch {
      // execCommand fallback below
    }
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  const copied = document.execCommand("copy");
  textarea.remove();
  if (!copied) throw new Error("클립보드 복사에 실패했습니다.");
}

function buildExportFilename(base: string, ext: string) {
  const stamp = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  return `${base}_${stamp}.${ext}`;
}

function inlineElementStyles(source: Element, target: HTMLElement) {
  const computed = window.getComputedStyle(source);
  for (let i = 0; i < computed.length; i++) {
    const name = computed.item(i);
    target.style.setProperty(name, computed.getPropertyValue(name), computed.getPropertyPriority(name));
  }
  target.removeAttribute("class");
}

/** Tailwind v4 oklch() 등이 html-to-image SVG 렌더링을 깨뜨리므로, 캡처용 복제본에 RGB 스타일을 인라인합니다. */
function prepareCaptureNode(element: HTMLElement): { node: HTMLElement; cleanup: () => void } {
  const width = Math.max(element.scrollWidth, element.offsetWidth, 1);
  const height = Math.max(element.scrollHeight, element.offsetHeight, 1);

  const host = document.createElement("div");
  host.setAttribute("aria-hidden", "true");
  host.style.position = "fixed";
  host.style.left = "-100000px";
  host.style.top = "0";
  host.style.width = `${width}px`;
  host.style.margin = "0";
  host.style.padding = "0";
  host.style.pointerEvents = "none";
  host.style.zIndex = "-1";
  host.style.overflow = "visible";

  const clone = element.cloneNode(true) as HTMLElement;
  clone.style.width = `${width}px`;
  clone.style.maxWidth = `${width}px`;
  clone.style.minHeight = `${height}px`;
  clone.style.margin = "0";
  clone.removeAttribute("class");

  const sourceNodes = [element, ...element.querySelectorAll("*")];
  const cloneNodes = [clone, ...clone.querySelectorAll("*")];

  sourceNodes.forEach((source, index) => {
    const target = cloneNodes[index];
    if (source instanceof HTMLElement && target instanceof HTMLElement) {
      inlineElementStyles(source, target);
    }
  });

  host.appendChild(clone);
  document.body.appendChild(host);

  return {
    node: clone,
    cleanup: () => host.remove(),
  };
}

function resolveCaptureBackground(element: HTMLElement) {
  const backgroundColor = window.getComputedStyle(element).backgroundColor;
  if (backgroundColor && backgroundColor !== "rgba(0, 0, 0, 0)" && backgroundColor !== "transparent") {
    return backgroundColor;
  }
  return "#ffffff";
}

async function captureElementAsBlob(element: HTMLElement): Promise<Blob> {
  const { toBlob } = await import("html-to-image");
  const { node, cleanup } = prepareCaptureNode(element);

  try {
    const width = Math.max(node.scrollWidth, node.offsetWidth, 1);
    const height = Math.max(node.scrollHeight, node.offsetHeight, 1);
    const blob = await toBlob(node, {
      cacheBust: false,
      skipFonts: true,
      pixelRatio: Math.min(window.devicePixelRatio || 1, 2),
      backgroundColor: resolveCaptureBackground(element),
      width,
      height,
    });
    if (!blob) throw new Error("이미지를 생성하지 못했습니다.");
    return blob;
  } finally {
    cleanup();
  }
}

export async function copyElementAsImage(element: HTMLElement) {
  const blob = await captureElementAsBlob(element);
  if (navigator.clipboard?.write && typeof ClipboardItem !== "undefined") {
    try {
      await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);
      return;
    } catch {
      // Clipboard API 미지원·권한 거부 시 파일 저장으로 대체
    }
  }
  downloadBlob(blob, buildExportFilename("calculator-result", "png"));
  throw new Error("CLIPBOARD_FALLBACK_DOWNLOAD");
}

export async function downloadElementAsPng(element: HTMLElement, filenameBase: string) {
  const blob = await captureElementAsBlob(element);
  downloadBlob(blob, buildExportFilename(filenameBase, "png"));
}

export function buildExportTextHeader(title: string): string[] {
  return [
    `${title} · 계산 결과`,
    `출처: ${SITE_DOMAIN}`,
    `생성: ${new Date().toLocaleString("ko-KR")}`,
    "",
  ];
}

export function buildExportTextFooter(): string[] {
  return ["", `※ ${referenceDisclaimerLine}`];
}
