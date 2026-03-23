declare module "jsrsasign" {
  export const KEYUTIL: {
    generateKeypair(
      alg: string,
      curve: string
    ): { prvKeyObj: object; pubKeyObj: object };
    getPEM(key: object, format: string, passphrase?: string): string;
    getKey(pem: string, passphrase?: string): object | null;
  };
}
