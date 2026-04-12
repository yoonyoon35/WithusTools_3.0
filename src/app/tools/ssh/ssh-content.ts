/**
 * SSH Key Generator content: usage, how it works, about, advantages, use cases.
 * Section titles (question-style, per algorithm) live in SshKeyGenerator.tsx.
 */

export type SshGuideSection = {
  usage: string[];
  howItWorks: string[];
  about: string[];
  advantages: string[];
  useCases: string[];
};

export const SSH_INDEX_GUIDE: SshGuideSection = {
  usage: [
    "Select an algorithm above: Ed25519 (recommended), RSA, or ECDSA.",
    "For Ed25519: Click 'Generate' to create a key pair; no size configuration needed.",
    "For RSA: Choose key size (4096-bit recommended; 2048 minimum for modern use).",
    "For ECDSA: Select curve (P-256, P-384, or P-521).",
    "Enter an optional passphrase to encrypt the private key. Keep it safe—you need it to use the key.",
    "Click 'Generate' to create your key pair. Keys are generated entirely in your browser.",
    "Copy the public key to add to servers (~/.ssh/authorized_keys). Keep the private key secure.",
    "Download both keys or copy them manually. Never share your private key.",
  ],
  howItWorks: [
    "SSH key pairs use asymmetric cryptography: a public key (shared with servers) and a private key (kept secret). The public key encrypts data that only the private key can decrypt, and the private key signs data that the public key can verify.",
    "Key generation involves selecting a cryptographically secure random number as the private key, then deriving the public key through mathematical operations specific to each algorithm (elliptic curve scalar multiplication for Ed25519/ECDSA; modular exponentiation for RSA).",
    "Ed25519 uses Curve25519: public key = scalar × base point G on the curve. The scalar is the private key. EdDSA signing: create random nonce k, compute R = k×G, compute s = k + H(R,P,m)·a mod L where a is the private scalar, H is SHA-512.",
    "RSA: Choose primes p, q; n = p·q; φ(n) = (p-1)(q-1); choose e (e.g., 65537); compute d ≡ e⁻¹ (mod φ(n)). Public key = (n,e); private key = (n,d). Encryption: c = m^e mod n; decryption: m = c^d mod n ≡ m^(ed) ≡ m (mod n) by Euler's theorem.",
    "ECDSA: Key on curve (e.g., P-256). Private key = random d; public key = d×G. Sign: pick k, R = k×G, r = x_R mod n, s = k⁻¹(H(m) + d·r) mod n. Verify: u₁ = H(m)·s⁻¹, u₂ = r·s⁻¹; check u₁×G + u₂×Q has x-coord ≡ r.",
  ],
  about: [
    "This free online SSH key generator creates RSA, Ed25519, and ECDSA key pairs entirely in your browser. No keys are transmitted to any server—generation uses the Web Crypto API (or equivalent) locally on your device.",
    "The tool produces OpenSSH-format keys compatible with ssh-keygen, OpenSSH servers, GitHub, GitLab, cloud providers, and most SSH clients. You can paste the public key into authorized_keys and use the private key with ssh, scp, or sftp.",
    "SSH keys provide passwordless authentication and are more secure than passwords when properly managed. This tool helps developers, DevOps engineers, and system administrators generate keys quickly without installing local tools.",
  ],
  advantages: [
    "Client-side security: Keys are generated in your browser; private keys never leave your device or touch any server.",
    "No installation: Generate keys without ssh-keygen or OpenSSH—works on any device with a modern browser.",
    "Algorithm choice: Ed25519 for best security and performance, RSA for maximum compatibility, ECDSA for a balance.",
    "OpenSSH compatible: Output format works with standard SSH tools and servers worldwide.",
    "Passphrase protection: Optionally encrypt the private key with a passphrase for additional security.",
  ],
  useCases: [
    "Server access: Add your public key to ~/.ssh/authorized_keys on Linux servers for passwordless login.",
    "Git hosting: Add your SSH key to GitHub, GitLab, or Bitbucket for secure repository access.",
    "CI/CD pipelines: Generate ephemeral keys for deployment automation or container builds.",
    "Cloud providers: Register SSH keys with AWS, GCP, Azure, or other clouds for instance access.",
    "DevOps and automation: Use keys with Ansible, Terraform, or custom deployment scripts.",
    "Secure file transfer: Use scp or sftp with your SSH key instead of passwords.",
  ],
};

export const SSH_ALGORITHM_GUIDE: Record<string, SshGuideSection> = {
  ed25519: {
    usage: [
      "Click 'Generate' to create an Ed25519 key pair. No key size or curve selection is needed.",
      "Optionally enter a passphrase to encrypt the private key. Store the passphrase securely.",
      "Copy the public key (starts with ssh-ed25519) and add it to your server's ~/.ssh/authorized_keys.",
      "Save the private key securely. Use it with ssh -i <private_key_file> or configure your SSH config.",
      "Never share your private key. The public key is safe to share with any server or service.",
    ],
    howItWorks: [
      "Ed25519 is based on the Curve25519 elliptic curve and the EdDSA (Edwards-curve Digital Signature Algorithm). The curve equation is y² = x³ + 486662x² + x over the finite field F_p where p = 2²⁵⁵ - 19.",
      "Private key: 32-byte (256-bit) cryptographically secure random scalar. Public key: A = a × B, where B is the standard base point on Curve25519 and a is the private scalar. The multiplication is elliptic curve scalar multiplication.",
      "EdDSA signing: Compute h = H(a) (SHA-512 of private key), derive secret scalar from h. For message m: k = H(h₂₅₆||m) mod L, R = k × B, S = (k + H(R||A||m) · a) mod L. Signature = (R, S). Verification uses R, S, A, and m to check the equation.",
      "Security: Equivalent to ~128-bit symmetric security. Resistant to side-channel attacks due to constant-time operations. No known practical attacks on full Ed25519.",
    ],
    about: [
      "Ed25519 is the recommended algorithm for new SSH keys. It produces compact 256-bit keys, offers strong security, and is faster than RSA and ECDSA for both key generation and operations.",
      "This Ed25519 SSH key generator creates OpenSSH-format keys in your browser. Ed25519 is supported by OpenSSH 6.5+, most modern servers, GitHub, GitLab, and cloud providers.",
      "All key generation runs locally using the Web Crypto API. Your private key is never transmitted.",
    ],
    advantages: [
      "Best security: 128-bit equivalent security with small keys and fast operations.",
      "Smallest keys: 68-byte public key vs 392+ bytes for RSA-4096.",
      "Fastest: Key generation and signing are significantly faster than RSA and ECDSA.",
      "Modern standard: Recommended by OpenSSH, NIST, and many security guidelines.",
      "Deterministic: No random k in signing (derived from message); avoids implementation pitfalls.",
    ],
    useCases: [
      "Default choice for new SSH keys: Use Ed25519 unless you need RSA compatibility.",
      "GitHub/GitLab: Add your Ed25519 public key for secure git push and pull.",
      "Servers and VPS: Add to authorized_keys for SSH login to Linux servers.",
      "Docker and Kubernetes: Use for container registry authentication or cluster access.",
      "CI/CD: Generate short-lived Ed25519 keys for pipelines.",
    ],
  },
  rsa: {
    usage: [
      "Select key size: 4096 bits recommended; 2048 minimum for current security standards.",
      "Click 'Generate' to create an RSA key pair. Larger keys take slightly longer to generate.",
      "Enter an optional passphrase to encrypt the private key.",
      "Copy the public key (ssh-rsa AAAA...) and add it to authorized_keys or your Git/cloud provider.",
      "Store the private key securely. Use ssh -i or configure IdentityFile in ~/.ssh/config.",
    ],
    howItWorks: [
      "RSA relies on the mathematical difficulty of factoring large semiprimes. Key generation: choose two large random primes p and q (each 1024+ bits for 2048-bit RSA). Compute n = p × q (the modulus) and φ(n) = (p-1)(q-1).",
      "Choose public exponent e (typically 65537). Compute private exponent d ≡ e⁻¹ (mod φ(n)). Public key is (n, e); private key is (n, d). Encryption: c = m^e mod n. Decryption: m = c^d mod n = m^(ed) mod n. By Euler's theorem, m^(φ(n)) ≡ 1 (mod n), so m^(ed) ≡ m when e·d ≡ 1 (mod φ(n)).",
      "SSH uses RSA for signing: sign(m) = m^d mod n; verify(signature) checks signature^e mod n == m (with appropriate padding, e.g., PKCS#1 or PSS).",
      "Security: 2048-bit RSA ≈ 112-bit symmetric; 4096-bit ≈ 128-bit. Factoring n is believed to be infeasible for sufficiently large n.",
    ],
    about: [
      "RSA is the most widely supported SSH key algorithm. It has been used for decades and is supported by virtually every SSH server, client, and service—including legacy systems that may not yet support Ed25519 or ECDSA.",
      "This RSA SSH key generator produces keys in OpenSSH format. Choose 4096-bit for maximum security or 2048-bit for faster operations where compatibility is paramount.",
      "All generation runs in your browser. RSA key generation is computationally heavier than Ed25519, so 4096-bit keys may take a few seconds.",
    ],
    advantages: [
      "Maximum compatibility: Supported by every SSH implementation, including old servers and embedded devices.",
      "Proven: Decades of use; well-understood security and implementation.",
      "Flexible key sizes: 1024–8192 bits to balance security and performance.",
      "Universal: Works with GitHub, GitLab, AWS, Azure, GCP, and any SSH-compatible service.",
    ],
    useCases: [
      "Legacy systems: When the server or client does not support Ed25519 or ECDSA.",
      "Enterprise: Many corporate policies and tools are built around RSA keys.",
      "Maximum compatibility: When deploying keys across diverse or unknown environments.",
      "Regulatory: Some standards or audits specifically require RSA.",
    ],
  },
  ecdsa: {
    usage: [
      "Select a curve: P-256 (fast, 128-bit security), P-384 (192-bit), or P-521 (256-bit).",
      "Click 'Generate' to create an ECDSA key pair.",
      "Optionally add a passphrase to encrypt the private key.",
      "Copy the public key (ecdsa-sha2-nistp256...) and add it to authorized_keys or your service.",
      "Use the private key with ssh -i or your SSH config.",
    ],
    howItWorks: [
      "ECDSA uses elliptic curves over finite fields. For P-256 (secp256r1): curve equation y² = x³ - 3x + b over F_p with 256-bit prime p. The curve has order n (a large prime); the base point G has order n.",
      "Private key: random integer d in [1, n-1]. Public key: Q = d × G (elliptic curve scalar multiplication).",
      "Signing: Pick random k in [1, n-1]. Compute (x₁, y₁) = k × G. Let r = x₁ mod n; s = k⁻¹(H(m) + d·r) mod n. Signature = (r, s). If r or s is 0, repeat with new k.",
      "Verification: w = s⁻¹ mod n; u₁ = H(m)·w mod n; u₂ = r·w mod n; (x₁, y₁) = u₁×G + u₂×Q. Accept if x₁ mod n = r.",
    ],
    about: [
      "ECDSA provides security equivalent to RSA with much smaller keys. P-256 offers ~128-bit security with a 256-bit key, comparable to RSA-3072. Supported by OpenSSH and most modern servers and services.",
      "This ECDSA SSH key generator creates keys for P-256, P-384, and P-521 (NIST curves). ECDSA offers a balance between Ed25519's efficiency and RSA's compatibility.",
      "All key generation runs locally in your browser.",
    ],
    advantages: [
      "Smaller keys: 256–521 bits vs 2048–4096 for RSA, with equivalent security.",
      "Fast operations: Key generation and signing are faster than RSA.",
      "Standard curves: NIST P-256, P-384, P-521 are widely supported.",
      "Balance: Good compatibility with reasonable key sizes.",
    ],
    useCases: [
      "When Ed25519 is not supported: Some older systems support ECDSA but not Ed25519.",
      "Regulatory: NIST curves may be required in certain environments.",
      "Middle ground: Smaller keys than RSA, broader support than Ed25519 in some ecosystems.",
      "TLS and PKI: ECDSA is used in certificates; SSH ECDSA keys follow similar standards.",
    ],
  },
};
