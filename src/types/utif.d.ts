declare module "utif" {
  interface UTIF {
    decode(buffer: ArrayBuffer): Array<Record<string, unknown>>;
    decodeImage(buffer: ArrayBuffer, ifd: Record<string, unknown>): void;
    toRGBA8(ifd: Record<string, unknown>): Uint8Array;
  }
  const UTIF: UTIF;
  export default UTIF;
}
