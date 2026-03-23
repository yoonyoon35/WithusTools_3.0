declare module "argon2-browser/dist/argon2-bundled.min.js" {
  interface ArgonTypeMap {
    Argon2d: number;
    Argon2i: number;
    Argon2id: number;
  }

  interface Argon2HashParams {
    pass: string;
    salt: string;
    time?: number;
    mem?: number;
    hashLen?: number;
    parallelism?: number;
    type?: number;
  }

  interface Argon2HashResult {
    hash: Uint8Array;
    hashHex: string;
    encoded: string;
  }

  interface Argon2VerifyParams {
    pass: string;
    encoded: string;
  }

  const argon2: {
    ArgonType: ArgonTypeMap;
    hash(params: Argon2HashParams): Promise<Argon2HashResult>;
    verify(params: Argon2VerifyParams): Promise<void>;
  };

  export default argon2;
}
