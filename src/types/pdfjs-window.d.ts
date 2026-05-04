/** Minimal pdf.js globals loaded from CDN (see PdfToJpgConverter, PdfToAnimatedGif, JPGConverter). */
declare global {
  interface Window {
    pdfjsLib?: {
      getDocument: (src: ArrayBuffer | { data: ArrayBuffer; length?: number }) => {
        promise: Promise<{
          numPages: number;
          getPage: (n: number) => Promise<{
            getViewport: (opts: { scale: number }) => { width: number; height: number };
            render: (opts: {
              canvasContext: CanvasRenderingContext2D;
              viewport: unknown;
            }) => { promise: Promise<void> };
          }>;
        }>;
        onProgress?: (p: { loaded: number; total: number }) => void;
      };
      GlobalWorkerOptions?: { workerSrc?: string };
    };
  }
}

export {};
