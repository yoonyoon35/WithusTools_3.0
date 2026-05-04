declare module "gif.js" {
  interface GifOptions {
    workers?: number;
    quality?: number;
    workerScript?: string;
    width?: number | null;
    height?: number | null;
    repeat?: number;
    background?: string;
    transparent?: number | null;
    dither?: string | boolean;
    debug?: boolean;
  }

  export default class GIF {
    constructor(options?: GifOptions);
    addFrame(
      image: HTMLCanvasElement | CanvasRenderingContext2D | HTMLImageElement,
      options?: { delay?: number; copy?: boolean }
    ): void;
    on(event: string, callback: (...args: unknown[]) => void): void;
    render(): void;
  }
}
