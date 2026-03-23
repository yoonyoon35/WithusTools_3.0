/**
 * ECDSA to OpenSSH public key format
 * SSH format: "ecdsa-sha2-nistp256" + base64(key_type + key_data)
 */

const CURVE_TO_SSH: Record<string, string> = {
  secp256r1: "ecdsa-sha2-nistp256",
  secp384r1: "ecdsa-sha2-nistp384",
  secp521r1: "ecdsa-sha2-nistp521",
};

function writeUint32(val: number): number[] {
  return [(val >> 24) & 0xff, (val >> 16) & 0xff, (val >> 8) & 0xff, val & 0xff];
}

function writeString(str: string | number[]): number[] {
  const bytes = typeof str === "string" ? Array.from(new TextEncoder().encode(str)) : str;
  return [...writeUint32(bytes.length), ...bytes];
}

function hexToBytes(hex: string): number[] {
  const arr: number[] = [];
  for (let i = 0; i < hex.length; i += 2) {
    arr.push(parseInt(hex.slice(i, i + 2), 16));
  }
  return arr;
}

/** Build OpenSSH ECDSA public key from x, y hex strings */
export function ecdsaToOpenSSHPublicKey(
  curveName: string,
  xHex: string,
  yHex: string,
  comment = "generated@withustools"
): string {
  const sshName = CURVE_TO_SSH[curveName] || curveName;
  const point = [4, ...hexToBytes(xHex), ...hexToBytes(yHex)];
  const keyBlob = [
    ...writeString(sshName),
    ...writeString(point),
  ];
  const b64 = btoa(String.fromCharCode(...keyBlob));
  return `${sshName} ${b64} ${comment}`;
}
