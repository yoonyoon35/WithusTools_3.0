/**
 * Compute SHA256 fingerprint from SSH public key (OpenSSH format)
 * Format: SHA256:base64(hash) - matches ssh-keygen -l -E sha256
 */
export async function sshPublicKeyFingerprint(publicKeyLine: string): Promise<string> {
  const parts = publicKeyLine.trim().split(/\s+/);
  if (parts.length < 2) throw new Error("Invalid SSH public key format");
  const keyB64 = parts[1];
  const binary = atob(keyB64.replace(/-/g, "+").replace(/_/g, "/"));
  const buf = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) buf[i] = binary.charCodeAt(i);

  const hash = await crypto.subtle.digest("SHA-256", buf);
  const hashBytes = new Uint8Array(hash);
  let binaryOut = "";
  for (let i = 0; i < hashBytes.length; i++) binaryOut += String.fromCharCode(hashBytes[i]!);
  return `SHA256:${btoa(binaryOut)}`;
}

/**
 * OpenSSH Ed25519 private key format serialization & parsing
 * Format spec: https://github.com/openssh/openssh-portable/blob/master/PROTOCOL.key
 */

function writeUint32(val: number): Uint8Array {
  const buf = new Uint8Array(4);
  new DataView(buf.buffer).setUint32(0, val, false);
  return buf;
}

function writeString(str: string | Uint8Array): Uint8Array {
  const bytes = typeof str === "string" ? new TextEncoder().encode(str) : str;
  return new Uint8Array([...writeUint32(bytes.length), ...bytes]);
}

/** Read string (length-prefixed) from buffer, returns [data, bytesConsumed] */
function readString(buf: Uint8Array, offset: number): [Uint8Array, number] {
  const len = new DataView(buf.buffer).getUint32(offset, false);
  const data = buf.slice(offset + 4, offset + 4 + len);
  return [data, 4 + len];
}

/** Read uint32 from buffer */
function readUint32(buf: Uint8Array, offset: number): number {
  return new DataView(buf.buffer).getUint32(offset, false);
}

/** Parse OpenSSH Ed25519 private key PEM, returns 32-byte seed */
export function parseOpenSSHEd25519PrivateKey(pem: string): Uint8Array {
  const base64 = pem
    .replace(/-----BEGIN OPENSSH PRIVATE KEY-----/, "")
    .replace(/-----END OPENSSH PRIVATE KEY-----/, "")
    .replace(/\s/g, "");
  const binary = atob(base64);
  const buf = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) buf[i] = binary.charCodeAt(i);

  let offset = 0;
  const [magic, n0] = readString(buf, offset);
  offset += n0;
  if (new TextDecoder().decode(magic) !== "openssh-key-v1") {
    throw new Error("Invalid OpenSSH key format");
  }
  const [, n1] = readString(buf, offset);
  offset += n1;
  const [, n2] = readString(buf, offset);
  offset += n2;
  const [, n3] = readString(buf, offset);
  offset += n3;
  offset += 4; // num_keys uint32
  const [, n4] = readString(buf, offset);
  offset += n4;
  offset += 4; // priv block length
  offset += 8; // check1, check2
  const [keyType, n5] = readString(buf, offset);
  offset += n5;
  if (new TextDecoder().decode(keyType) !== "ssh-ed25519") {
    throw new Error("Not an Ed25519 key");
  }
  const [, n6] = readString(buf, offset);
  offset += n6;
  const [privKeyData] = readString(buf, offset);
  if (privKeyData.length !== 64) throw new Error("Invalid Ed25519 private key");
  return privKeyData.slice(0, 32);
}

/** privateKey: 32-byte seed, publicKey: 32 bytes. Output: OpenSSH format with 64-byte priv (seed||pub) */
export function toOpenSSHEd25519(privateKey: Uint8Array, publicKey: Uint8Array): string {
  const keyType = "ssh-ed25519";
  const pubKeyBlob = new Uint8Array([
    ...writeString(keyType),
    ...writeString(publicKey),
  ]);
  const check1 = crypto.getRandomValues(new Uint8Array(4));
  const check2 = check1.slice();
  const privKeyPayload = new Uint8Array([
    ...check1,
    ...check2,
    ...writeString(keyType),
    ...writeString(publicKey),
    ...writeString(new Uint8Array([...privateKey, ...publicKey])),
    ...writeString(""),
  ]);
  const paddingLen = (8 - ((privKeyPayload.length + 4) % 8)) % 8;
  const padding = new Uint8Array(paddingLen);
  for (let i = 0; i < paddingLen; i++) padding[i] = i + 1;
  const privKeyBlock = new Uint8Array([
    ...writeUint32(privKeyPayload.length + paddingLen),
    ...privKeyPayload,
    ...padding,
  ]);
  const body = new Uint8Array([
    ...writeString("openssh-key-v1"),
    ...writeString("none"),
    ...writeString("none"),
    ...writeString(""),
    ...writeUint32(1),
    ...writeString(pubKeyBlob),
    ...privKeyBlock,
  ]);
  let binary = "";
  for (let i = 0; i < body.length; i++) binary += String.fromCharCode(body[i]);
  const b64 = btoa(binary);
  const lines = [];
  for (let i = 0; i < b64.length; i += 70) {
    lines.push(b64.slice(i, i + 70));
  }
  return `-----BEGIN OPENSSH PRIVATE KEY-----\n${lines.join("\n")}\n-----END OPENSSH PRIVATE KEY-----`;
}
