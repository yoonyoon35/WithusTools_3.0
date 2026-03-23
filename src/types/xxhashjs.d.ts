declare module "xxhashjs" {
  type HashFn = (data: string | ArrayBuffer | Buffer, seed?: number) => { toString(radix?: number): string };
  export const h32: HashFn;
  export const h64: HashFn;
}
