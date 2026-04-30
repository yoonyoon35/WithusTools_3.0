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
    "Choose Ed25519, RSA, or ECDSA first.",
    "Set options only when needed (RSA size or ECDSA curve).",
    "Add a passphrase if you want private-key encryption.",
    "Generate the pair, then copy/download both keys.",
    "Put only the public key on servers and keep the private key private.",
  ],
  howItWorks: [
    "SSH uses asymmetric keys: public key for servers, private key for your local device.",
    "The generator creates random private-key material and derives the matching public key.",
    "Ed25519 and ECDSA use elliptic-curve math; RSA uses modular arithmetic with large integers.",
    "Generation is done locally in your browser runtime.",
  ],
  about: [
    "This online SSH key generator creates OpenSSH-compatible keys for common server and Git workflows.",
    "Use it when you need quick key setup on a machine without local tooling.",
    "Keys are generated client-side and are not uploaded to a backend.",
  ],
  advantages: [
    "Client-side key generation.",
    "OpenSSH key format support.",
    "Ed25519, RSA, and ECDSA options.",
    "Optional passphrase protection.",
    "No install required.",
  ],
  useCases: [
    "Set up SSH login for Linux servers.",
    "Add keys to GitHub or GitLab accounts.",
    "Create rotation keys for CI/CD jobs.",
    "Register SSH keys on cloud instances.",
  ],
};

export const SSH_ALGORITHM_GUIDE: Record<string, SshGuideSection> = {
  ed25519: {
    usage: [
      "Click Generate to create an Ed25519 key pair.",
      "Copy the public key to your server or Git provider.",
      "Store the private key in a secure local path.",
      "Use ssh -i or your SSH config to reference the private key.",
      "Never share the private key.",
    ],
    howItWorks: [
      "Ed25519 creates a random private key and derives a matching public key using curve math.",
      "It is fast and designed for modern signature safety in SSH workflows.",
      "Generation runs in your browser and outputs OpenSSH-compatible keys.",
    ],
    about: [
      "Ed25519 is the default choice for most new SSH key setups.",
      "It gives compact keys, good speed, and broad support on modern platforms.",
      "Use it for server access, Git hosting, and daily developer workflows.",
    ],
    advantages: [
      "Fast key generation and signing.",
      "Small key size.",
      "Strong modern security profile.",
      "Good default for new deployments.",
    ],
    useCases: [
      "New Linux server onboarding.",
      "GitHub/GitLab SSH login.",
      "CI/CD key rotation.",
      "Cloud instance access setup.",
    ],
  },
  rsa: {
    usage: [
      "Pick RSA key size first (4096 recommended).",
      "Generate the key pair and download or copy both keys.",
      "Add optional passphrase protection if needed.",
      "Register the public key on your target server or service.",
      "Store private key securely and keep backups under control.",
    ],
    howItWorks: [
      "RSA generates a public/private pair from large-integer operations.",
      "Larger key sizes increase security and generation cost.",
      "The resulting keys are emitted in OpenSSH-compatible format.",
    ],
    about: [
      "RSA is still the safest choice for broad compatibility across old and new systems.",
      "Use it when tooling or policy requires RSA keys.",
      "Generation can be slower than Ed25519, especially at larger sizes.",
    ],
    advantages: [
      "Very broad compatibility.",
      "Configurable key sizes.",
      "Well-known operational behavior.",
      "Works with most enterprise stacks.",
    ],
    useCases: [
      "Legacy host access.",
      "Enterprise policy compliance.",
      "Mixed-environment deployments.",
      "Audit or compatibility-driven key rollout.",
    ],
  },
  ecdsa: {
    usage: [
      "Choose a curve (P-256, P-384, or P-521).",
      "Generate the key pair and copy/download outputs.",
      "Set passphrase protection if your workflow needs it.",
      "Add the public key to authorized_keys or Git provider settings.",
      "Keep the private key local and protected.",
    ],
    howItWorks: [
      "ECDSA generates keys from elliptic-curve operations on the selected curve.",
      "Curve choice affects key size and security margin.",
      "The output keys are compatible with standard OpenSSH flows.",
    ],
    about: [
      "ECDSA is a practical middle option when you need curve-based SSH keys.",
      "It is often used in environments that prefer NIST curves.",
      "Use it when Ed25519 is unavailable but smaller keys than RSA are desired.",
    ],
    advantages: [
      "Smaller keys than RSA.",
      "Multiple NIST curve options.",
      "Good interoperability on modern stacks.",
      "Balanced security-to-size profile.",
    ],
    useCases: [
      "NIST-curve-required environments.",
      "SSH setups without Ed25519 support.",
      "Cloud and enterprise key onboarding.",
      "Key rotation in mixed compatibility environments.",
    ],
  },
};
