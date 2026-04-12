/**
 * Hash Calculator algorithm content: usage, how it works, about, advantages, use cases.
 * Per-algorithm guide titles (question-style) live in [algorithm]/page.tsx.
 */

export type AlgorithmGuideSection = {
  usage: string[];
  howItWorks: string[];
  about: string[];
  advantages: string[];
  useCases: string[];
};

export const HASH_INDEX_GUIDE: AlgorithmGuideSection = {
  usage: [
    "Choose an algorithm from the grid above (e.g., MD5, SHA-256, Bcrypt). Each link opens a dedicated calculator for that algorithm.",
    "For general hashing (MD5, SHA-1, SHA-256, etc.): Enter text in the input box or drag-and-drop a file. Click the generate button.",
    "For password hashing (Bcrypt, Argon2, PBKDF2, Scrypt): Enter your password, configure parameters (rounds, memory, iterations), and generate. Use Verify to test passwords.",
    "For checksums (CRC32, Adler-32, xxHash, FNV-1a): Enter text or upload a file. These are non-cryptographic—use for integrity, not security.",
    "Use the Verify section on each algorithm page to compare a hash against new input or test a password against a stored hash.",
    "Copy results with one click. Store hashes and parameters (salt, iterations) for password algorithms—you need them for verification.",
    "File support: Most algorithms accept file upload. Password hashers typically use text input only.",
  ],
  howItWorks: [
    "Hash functions map arbitrary-length input to fixed-length output. Cryptographic hashes (SHA-256, BLAKE2, etc.) are designed so that finding two inputs with the same hash (collision) or reversing the hash (preimage) is computationally infeasible.",
    "Merkle–Damgård hashes (MD5, SHA-1, SHA-256): Input is padded and split into blocks. Each block is mixed with an internal state via a compression function. Final state is the hash. Formula: H_i = f(H_{i-1}, M_i); output = H_n.",
    "Sponge hashes (SHA-3, Keccak): Absorb input into a large state, then squeeze output. Resistant to length-extension attacks. Password hashes (Bcrypt, Argon2): Deliberately slow and memory-intensive to resist brute force.",
    "Key derivation (PBKDF2, Scrypt): Repeatedly apply a pseudorandom function (e.g., HMAC-SHA256) with password and salt. PBKDF2: DK = PRF(password, salt||1) ⊕ PRF(password, salt||2) ⊕ ...; Scrypt adds memory-hardness.",
    "Non-cryptographic (CRC32, Adler-32, xxHash, FNV-1a): Fast checksums for error detection. CRC uses polynomial division; FNV uses multiply-XOR. Not secure—collisions are easy to find.",
  ],
  about: [
    "This free online hash calculator supports 19 algorithms: MD5, SHA-1, SHA-224, SHA-256, SHA-384, SHA-512, SHA-3, Keccak-256, CRC32, Adler-32, xxHash, BLAKE2, RIPEMD-160, Bcrypt, Argon2, PBKDF2, Scrypt, Whirlpool, and FNV-1a.",
    "All hash computation runs entirely in your browser. Your data—including passwords and files—never leaves your device. No server-side processing, no logging, no transmission.",
    "Use this tool for file integrity verification, checksum validation, password hashing, key derivation, or cryptographic development. Each algorithm page provides detailed usage, how it works, and real-world use cases.",
  ],
  advantages: [
    "Privacy: All processing is client-side. Passwords and sensitive files never touch any server.",
    "19 algorithms: From legacy (MD5) to modern (Argon2, SHA-3), plus non-cryptographic (CRC32, xxHash).",
    "File and text: Most algorithms support both text input and file upload.",
    "Verify: Compare hashes or test passwords against stored values directly in the tool.",
    "No installation: Works in any modern browser without plugins or downloads.",
  ],
  useCases: [
    "File download verification: Compare SHA-256 or MD5 of a downloaded file with the published checksum.",
    "Password storage: Generate Bcrypt or Argon2 hashes for secure password storage in applications.",
    "Git and version control: Verify Git object hashes (SHA-1) or checksums.",
    "Blockchain: SHA-256 for Bitcoin; Keccak-256 for Ethereum; Scrypt for Litecoin.",
    "Digital signatures: Hash documents with SHA-256 or SHA-512 before signing.",
    "Database deduplication: Use xxHash or CRC32 for fast content addressing.",
    "TLS and certificates: SHA-256, SHA-384 for certificate fingerprints and TLS handshakes.",
    "Legacy systems: MD5, SHA-1 for compatibility with older protocols and tools.",
  ],
};

export const ALGORITHM_GUIDE: Record<string, AlgorithmGuideSection> = {
  md5: {
    usage: [
      "Enter text in the input box or drag-and-drop a file to calculate MD5 hash.",
      "Click 'Generate MD5 Hash' to compute the 128-bit MD5 checksum.",
      "Use the Verify section to compare a hash against new input (e.g., verify MD5 of downloaded file).",
      "Copy the result with one click for checksum verification or MD5 comparison.",
      "For file hashing, use the File Input area to upload or drag files.",
    ],
    howItWorks: [
      "MD5 uses the Merkle–Damgård construction: input is padded to a multiple of 512 bits, then processed in 512-bit blocks through a compression function.",
      "The compression function operates on a 128-bit state (four 32-bit words A, B, C, D) and uses four auxiliary functions: F(X,Y,Z) = (X∧Y)∨(¬X∧Z), G(X,Y,Z) = (X∧Z)∨(Y∧¬Z), H(X,Y,Z) = X⊕Y⊕Z, I(X,Y,Z) = Y⊕(X∨¬Z).",
      "Each 512-bit block undergoes 64 rounds. Round constants K[i] and shift amounts s[i] are derived from sin(i×2³²). The mix: F = (B∧C)∨(¬B∧D), then A = B + ROL((A+F+K[i]+M[g]) mod 2³², s[i]), with B,C,D rotated.",
      "Final output is the concatenation of the four 32-bit state words in little-endian, yielding a 128-bit (32 hex character) hash.",
    ],
    about: [
      "MD5 (Message-Digest Algorithm 5) is a 128-bit cryptographic hash function designed by Ronald Rivest in 1991. It produces a 32-character hexadecimal digest.",
      "This free online MD5 hash calculator computes MD5 checksums for text strings or files entirely in your browser. No data is sent to any server—all processing runs locally for maximum privacy.",
      "MD5 is widely used for file integrity verification, checksum validation, and legacy system compatibility. It is not recommended for security-sensitive applications due to known collision and preimage vulnerabilities.",
    ],
    advantages: [
      "Fast computation: MD5 is one of the fastest hash algorithms, suitable for large file checksums.",
      "Wide compatibility: Nearly every platform and tool supports MD5 checksum verification.",
      "Compact output: 128-bit output is easy to store and compare.",
      "Client-side security: This tool runs entirely in your browser; sensitive data never leaves your device.",
    ],
    useCases: [
      "File download verification: Compare MD5 of a downloaded file with the published checksum to detect corruption or tampering.",
      "Database lookups: Use MD5 as a non-reversible identifier for caching or deduplication (where collision risk is acceptable).",
      "Legacy systems: Many older applications and protocols still rely on MD5; this tool provides compatibility.",
      "Checksum validation: Verify backup integrity or detect accidental file modifications.",
    ],
  },
  sha1: {
    usage: [
      "Paste text or upload a file to generate SHA-1 hash online.",
      "Click 'Generate SHA-1 Hash' to get the 40-character hexadecimal result.",
      "Verify SHA1 checksums by pasting the expected hash and comparing with new input.",
      "Use for Git hash verification or SHA1 checksum comparison.",
      "File support: Drag-and-drop or select files for SHA-1 computation.",
    ],
    howItWorks: [
      "SHA-1 also uses the Merkle–Damgård construction with 512-bit blocks and a 160-bit state (five 32-bit words A,B,C,D,E).",
      "The message schedule extends 16 words to 80 words: W[t] = ROL(W[t-3]⊕W[t-8]⊕W[t-14]⊕W[t-16], 1) for t≥16.",
      "Four round functions and constants: f₀,f₁,f₂,f₃ with K₀=0x5A827999, K₁=0x6ED9EBA1, K₂=0x8F1BBCDC, K₃=0xCA62C1D6. Each of 80 rounds: T=ROL(A,5)+fₜ(B,C,D)+E+W[t]+Kₜ; E=D; D=C; C=ROL(B,30); B=A; A=T.",
      "Initial hash values are the first five primes; final output is 160 bits (40 hex characters).",
    ],
    about: [
      "SHA-1 (Secure Hash Algorithm 1) is a 160-bit hash function developed by the NSA and standardized by NIST in 1995.",
      "This SHA-1 hash calculator computes SHA1 hashes for text and files in your browser. SHA-1 is used in Git commit hashes, TLS certificates (legacy), and various checksum applications.",
      "SHA-1 is cryptographically broken—collision attacks are practical. It remains in use for Git and legacy compatibility but should not be used for new security-sensitive designs.",
    ],
    advantages: [
      "Git compatibility: Git uses SHA-1 for commit and object IDs; this tool helps verify or explore Git hashes.",
      "Legacy support: Many existing systems and certificates still use SHA-1.",
      "Deterministic: Same input always produces the same SHA-1 hash.",
      "Privacy-first: All hashing runs locally in your browser.",
    ],
    useCases: [
      "Git object verification: Check Git commit hashes, blob hashes, or tree hashes.",
      "Legacy TLS/SSL: Inspect SHA-1 fingerprints for older certificates.",
      "Checksum validation: Verify file integrity where SHA-1 is the published checksum.",
      "Compatibility testing: Ensure your application produces correct SHA-1 hashes.",
    ],
  },
  sha224: {
    usage: [
      "Enter text or upload a file to calculate SHA-224 hash.",
      "Click 'Generate SHA-224 Hash' for the 56-character hex output.",
      "Verify SHA224 hashes using the comparison section below.",
      "Copy the SHA-224 checksum for certificate or DNSSEC validation.",
      "No parameters required—SHA-224 has a fixed output size.",
    ],
    howItWorks: [
      "SHA-224 is identical to SHA-256 in structure but uses different initial hash values and truncates the output to 224 bits (leftmost 28 bytes).",
      "Uses the same Merkle–Damgård construction and compression function as SHA-256. Message block size: 512 bits. State: eight 32-bit words.",
      "The compression function uses: Ch(x,y,z)=(x∧y)⊕(¬x∧z), Maj(x,y,z)=(x∧y)⊕(x∧z)⊕(y∧z), Σ₀(x)=ROTR(x,2)⊕ROTR(x,13)⊕ROTR(x,22), Σ₁(x)=ROTR(x,6)⊕ROTR(x,11)⊕ROTR(x,25), σ₀(x)=ROTR(x,7)⊕ROTR(x,18)⊕SHR(x,3), σ₁(x)=ROTR(x,17)⊕ROTR(x,19)⊕SHR(x,10).",
      "Initial values for SHA-224 are the second 32 bits of the fractional parts of the cube roots of the first 64 primes. Final hash: truncate SHA-256 state to 224 bits.",
    ],
    about: [
      "SHA-224 is a 224-bit truncated variant of SHA-256, standardized in FIPS 180-4. It provides the same security margin as SHA-256 with a shorter output.",
      "This SHA-224 hash calculator supports text and file hashing. SHA-224 is used in TLS, DNSSEC, and digital certificates where a shorter hash is preferred.",
      "All computation runs in your browser; no data is transmitted to any server.",
    ],
    advantages: [
      "Shorter output: 56 hex chars vs 64 for SHA-256—useful when space is limited.",
      "Same security as SHA-256: Based on the same underlying algorithm.",
      "Standard compliance: FIPS 180-4 and many protocols support SHA-224.",
      "Client-side: Full privacy for your data.",
    ],
    useCases: [
      "Certificate validation: TLS and X.509 certificates may use SHA-224.",
      "DNSSEC: Some DNSSEC records use SHA-224 for resource records.",
      "Short hash requirements: When 224-bit output is specified by a protocol.",
      "Checksum verification: File or message integrity with SHA-224 checksums.",
    ],
  },
  sha256: {
    usage: [
      "Enter text or drag a file to compute SHA-256 hash online.",
      "Click 'Generate SHA-256 Hash' for the 64-character hex result.",
      "Verify SHA256 checksums by entering the expected hash and comparing.",
      "Use for Bitcoin address verification, file integrity, or download verification.",
      "File input: Supports text files; for binary files, paste or upload as applicable.",
    ],
    howItWorks: [
      "SHA-256 uses the Merkle–Damgård construction with 512-bit message blocks and a 256-bit state (eight 32-bit words a,b,c,d,e,f,g,h).",
      "Message schedule: 16 input words expanded to 64: W[t]=σ₁(W[t-2])+W[t-7]+σ₀(W[t-15])+W[t-16], with σ₀(x)=ROTR(x,7)⊕ROTR(x,18)⊕SHR(x,3), σ₁(x)=ROTR(x,17)⊕ROTR(x,19)⊕SHR(x,10).",
      "64 rounds with Ch, Maj, Σ₀, Σ₁ and round constants K[t] from cube roots of primes. Each round: T₁=h+Σ₁(e)+Ch(e,f,g)+K[t]+W[t]; T₂=Σ₀(a)+Maj(a,b,c); h=g; g=f; f=e; e=d+T₁; d=c; c=b; b=a; a=T₁+T₂.",
      "Padding: append bit 1, then zeros so length≡448 (mod 512), then 64-bit length in bits. Output is the final state as eight 32-bit big-endian words (256 bits, 64 hex chars).",
    ],
    about: [
      "SHA-256 is the industry-standard 256-bit hash function, part of the SHA-2 family. It was designed by the NSA and published in 2001.",
      "This SHA-256 hash calculator computes hashes for text and files in your browser. SHA-256 is used in Bitcoin, TLS, SSL certificates, blockchain, and countless security applications.",
      "SHA-256 is considered secure for most applications. No data leaves your device—all hashing is performed locally.",
    ],
    advantages: [
      "Industry standard: The most widely deployed cryptographic hash function.",
      "Security: No practical attacks on full SHA-256; suitable for most use cases.",
      "Bitcoin compatibility: SHA-256 is central to Bitcoin's proof-of-work and address derivation.",
      "Deterministic and fast: Same input always yields the same output; efficient implementation.",
    ],
    useCases: [
      "File integrity: Verify downloads, backups, or software packages with SHA-256 checksums.",
      "Bitcoin and blockchain: SHA-256 powers Bitcoin mining and transaction hashing.",
      "Password hashing: Often used as the inner hash in PBKDF2 or HMAC.",
      "Digital signatures: Hash documents before signing with RSA or ECDSA.",
    ],
  },
  sha384: {
    usage: [
      "Paste text or upload a file to generate SHA-384 hash.",
      "Click 'Generate SHA-384 Hash' for the 96-character result.",
      "Verify SHA384 hashes in the comparison section.",
      "Copy for TLS certificate or digital signature verification.",
      "No variant selection—SHA-384 has fixed 384-bit output.",
    ],
    howItWorks: [
      "SHA-384 is SHA-512 with different initial values and truncated to 384 bits (leftmost 48 bytes).",
      "SHA-512 uses 1024-bit blocks and 64-bit words. State: eight 64-bit words. Functions: Ch(x,y,z)=(x∧y)⊕(¬x∧z), Maj(x,y,z)=(x∧y)⊕(x∧z)⊕(y∧z), Σ₀(x)=ROTR(x,28)⊕ROTR(x,34)⊕ROTR(x,39), Σ₁(x)=ROTR(x,14)⊕ROTR(x,18)⊕ROTR(x,41), σ₀(x)=ROTR(x,1)⊕ROTR(x,8)⊕SHR(x,7), σ₁(x)=ROTR(x,19)⊕ROTR(x,61)⊕SHR(x,6).",
      "80 rounds; round constants from cube roots of first 80 primes. Message schedule extends 16 words to 80.",
      "SHA-384 initial values are the first 64 bits of the fractional parts of the square roots of primes 9–16. Output: truncate SHA-512 to 384 bits.",
    ],
    about: [
      "SHA-384 is a 384-bit truncated SHA-512 variant. It offers a balance between output size and security.",
      "This SHA-384 hash calculator computes hashes for text and files. SHA-384 is used in TLS 1.2+, digital signatures, and when SHA-512 output is unnecessarily long.",
      "All processing runs in your browser—no server-side hashing.",
    ],
    advantages: [
      "Medium output: 96 hex chars—shorter than SHA-512, longer than SHA-256.",
      "Strong security: Same cryptographic strength as SHA-512.",
      "TLS support: Commonly used in TLS handshakes and certificate verification.",
      "Privacy: Client-side only.",
    ],
    useCases: [
      "TLS certificate fingerprinting: Many servers use SHA-384 for certificate chains.",
      "Digital signatures: Hash documents before RSA or ECDSA signing.",
      "Secure storage: Checksums for sensitive files.",
      "Protocol compliance: When SHA-384 is required by a specification.",
    ],
  },
  sha512: {
    usage: [
      "Enter text or upload a file to calculate SHA-512 hash.",
      "Click 'Generate SHA-512 Hash' for the 128-character hex output.",
      "Verify SHA512 checksums using the comparison tool.",
      "Use for secure password storage or file integrity verification.",
      "Supports both text input and file upload.",
    ],
    howItWorks: [
      "SHA-512 uses 1024-bit message blocks and 64-bit arithmetic. State: eight 64-bit words. Same structure as SHA-256 but with 64-bit operations.",
      "Message schedule: W[t]=σ₁(W[t-2])+W[t-7]+σ₀(W[t-15])+W[t-16] for t=16..79. σ₀, σ₁ use 64-bit rotates and shifts.",
      "80 rounds with Ch, Maj, Σ₀, Σ₁. Round constants K[t] are the first 64 bits of the fractional parts of the cube roots of the first 80 primes.",
      "Padding: append 1 bit, pad with zeros to length≡896 (mod 1024), then append 128-bit length. Output: 512 bits (128 hex characters).",
    ],
    about: [
      "SHA-512 is the 512-bit member of the SHA-2 family. It provides maximum security among SHA-2 algorithms.",
      "This SHA-512 hash calculator computes hashes for text and files. SHA-512 is used in TLS, digital signatures, and high-security applications.",
      "All hashing runs locally in your browser—your data never leaves your device.",
    ],
    advantages: [
      "Strongest SHA-2: 512-bit output provides maximum security margin.",
      "64-bit optimized: On 64-bit systems, SHA-512 can be faster than SHA-256.",
      "Wide support: Standardized and supported across platforms.",
      "Future-proof: Large output resists length-extension and collision attacks.",
    ],
    useCases: [
      "High-security hashing: When maximum cryptographic strength is required.",
      "Password hashing: Inner hash for PBKDF2 or HMAC-based KDFs.",
      "Digital signatures: Hash large documents before signing.",
      "Blockchain: Some cryptocurrencies use SHA-512 or its variants.",
    ],
  },
  sha3: {
    usage: [
      "Choose SHA3 variant (224, 256, 384, or 512 bit) from the dropdown.",
      "Enter text or upload a file to generate SHA-3 hash.",
      "Click 'Generate SHA-3 Hash' for the result.",
      "Verify SHA3 hashes or use for post-quantum cryptography preparation.",
      "Variant determines output length: 56, 64, 96, or 128 hex characters.",
    ],
    howItWorks: [
      "SHA-3 is based on the Keccak sponge construction, unlike SHA-2's Merkle–Damgård. It uses a permutation (Keccak-f) on a 1600-bit state (5×5×64 bits).",
      "Sponge: Absorb input into the state in r-bit blocks (rate), then squeeze output. Capacity c = 1600−r. For SHA3-256: r=1088, c=512; output is squeezed and truncated to 256 bits.",
      "Keccak-f permutation: 24 rounds. Each round: θ (parity diffusions), ρ (bit rotations), π (lane permutations), χ (non-linear mixing: a[i][j] XOR= (¬a[i][j+1])∧a[i][j+2]), ι (round constant XOR).",
      "Padding: Keccak uses pad10*1: append 0x06, then pad with 0x00 and final 0x80 so (message|pad) is a multiple of the rate. Different from SHA3: original Keccak used simpler padding.",
    ],
    about: [
      "SHA-3 (Keccak) is the NIST standard from the SHA-3 competition (2012). It uses a completely different design than SHA-2.",
      "This SHA-3 hash calculator supports SHA3-224, SHA3-256, SHA3-384, and SHA3-512. SHA-3 is resistant to length-extension attacks and has a different security profile than SHA-2.",
      "All variants run in your browser with no server involvement.",
    ],
    advantages: [
      "Different design: Sponge construction avoids length-extension vulnerabilities.",
      "NIST standard: Officially approved for cryptographic use.",
      "Multiple sizes: 224 to 512 bits for different security levels.",
      "Post-quantum consideration: Sponge structures are studied for PQ resistance.",
    ],
    useCases: [
      "Future-proof hashing: When SHA-2 compatibility is not required.",
      "Length-extension resistance: Where SHA-2's property is a concern.",
      "Cryptographic protocols: New designs often prefer SHA-3.",
      "Testing and development: Verify SHA-3 implementations.",
    ],
  },
  keccak256: {
    usage: [
      "Enter text or upload a file to calculate Keccak-256 hash.",
      "Click 'Generate Keccak-256 Hash' for Ethereum-compatible output.",
      "Use for smart contract testing or Web3 development.",
      "Verify Keccak256 hashes for Ethereum transaction or message signing.",
      "Note: Keccak-256 ≠ SHA3-256; Ethereum uses Keccak (original padding).",
    ],
    howItWorks: [
      "Keccak-256 uses the Keccak sponge with 256-bit output. The key difference from SHA3-256 is the padding: Keccak uses pad01*1 (append 0x01, pad with 0x00, final 0x80); SHA3 uses 0x06.",
      "Same Keccak-f permutation: 1600-bit state, 24 rounds of θ, ρ, π, χ, ι. Rate r=1088, capacity c=512 for 256-bit security.",
      "Logic: Absorb(input) = state XOR pad(input) in r-bit blocks; Squeeze() = output from state in r-bit blocks. Keccak256 = first 256 bits of Squeeze().",
      "Ethereum's keccak256 is this Keccak-256. Solidity and EVM use it for addresses, transaction hashes, and contract storage.",
    ],
    about: [
      "Keccak-256 is the original Keccak algorithm before NIST's SHA-3 padding change. Ethereum and Web3 use Keccak-256 throughout.",
      "This Keccak-256 hash calculator produces hashes identical to Ethereum's keccak256. Use it for smart contract development, address derivation, and Web3 debugging.",
      "All computation runs in your browser.",
    ],
    advantages: [
      "Ethereum compatibility: Matches Solidity keccak256 and EVM opcodes exactly.",
      "Web3 development: Essential for dApp and smart contract work.",
      "Deterministic: Same input always yields same hash.",
      "Privacy: No server calls.",
    ],
    useCases: [
      "Smart contracts: Test Keccak-256 hashes for Solidity code.",
      "Ethereum addresses: Part of the address derivation (Keccak256 of pubkey).",
      "Transaction hashes: Ethereum tx hashes use Keccak-256.",
      "Web3 libraries: Verify hashes from ethers.js, web3.js, or other libs.",
    ],
  },
  crc32: {
    usage: [
      "Enter text or upload a file (e.g., ZIP, PNG) to compute CRC32 checksum.",
      "Click 'Generate CRC32' for the 8-character hex result.",
      "Compare CRC32 with expected checksum for file verification.",
      "Use for ZIP file CRC check or PNG chunk validation.",
      "File upload supported for integrity checking.",
    ],
    howItWorks: [
      "CRC32 is a cyclic redundancy check using polynomial division over GF(2). The polynomial is typically x³²+x²⁶+x²³+x²²+x¹⁶+x¹²+x¹¹+x¹⁰+x⁸+x⁷+x⁵+x⁴+x²+x+1 (0xEDB88320 reversed).",
      "Process: Initialize register to 0xFFFFFFFF. For each byte, XOR with register, then for 8 bits: if LSB=1, register = (register>>1) XOR polynomial; else register >>= 1. Final: register XOR 0xFFFFFFFF.",
      "Logic: CRC(M) = (M(x)·x³²) mod P(x), where P is the CRC-32 polynomial. The quotient is discarded; remainder is the checksum.",
      "Not cryptographic: CRC32 is for error detection (e.g., transmission errors); collisions are easy to find.",
    ],
    about: [
      "CRC32 is a 32-bit non-cryptographic checksum used in ZIP, PNG, and Git. It detects accidental errors, not malicious tampering.",
      "This CRC32 checksum calculator computes CRC32 for text and files. Fast and widely supported across formats and tools.",
      "All computation runs locally in your browser.",
    ],
    advantages: [
      "Fast: Very efficient for large files.",
      "Wide support: ZIP, PNG, Ethernet, and many protocols use CRC32.",
      "Error detection: Catches burst errors and accidental corruption.",
      "Simple: Easy to implement and verify.",
    ],
    useCases: [
      "ZIP file verification: Check CRC32 of compressed files.",
      "PNG integrity: PNG chunks store CRC32 for validation.",
      "Git: Git uses CRC32 in pack files.",
      "Network protocols: Ethernet, Gzip, and others use CRC checksums.",
    ],
  },
  adler32: {
    usage: [
      "Enter text or upload a file to calculate Adler-32 checksum.",
      "Click 'Generate Adler-32' for the 8-character hex result.",
      "Verify Adler32 checksums in the comparison section.",
      "Use for zlib stream or PNG Adler verification.",
      "Supports both text and file input.",
    ],
    howItWorks: [
      "Adler-32 uses two 16-bit accumulators: A = 1 + Σ byte[i] (mod 65521), B = Σ (i+1)·byte[i] (mod 65521). Final checksum = B<<16 | A.",
      "Optimized: A and B are updated incrementally. For each byte: A = (A + byte) mod 65521; B = (B + A) mod 65521. Modulo 65521 is prime (largest prime < 2¹⁶).",
      "Adler-32 is simpler and often faster than CRC32. Used in zlib (with DEFLATE) for checksum. Not cryptographic.",
      "PNG uses Adler-32 in the zlib-compressed data stream within IDAT chunks.",
    ],
    about: [
      "Adler-32 is a 32-bit checksum designed by Mark Adler for zlib. It is faster than CRC32 but slightly less reliable for certain error patterns.",
      "This Adler-32 checksum calculator computes Adler-32 for text and files. Used in zlib, PNG, and other compressed formats.",
      "All processing runs in your browser.",
    ],
    advantages: [
      "Speed: Faster than CRC32 in many implementations.",
      "Simplicity: Easy to implement and understand.",
      "zlib/PNG support: Standard in DEFLATE-based formats.",
      "Small code: Minimal implementation footprint.",
    ],
    useCases: [
      "zlib streams: Verify Adler-32 of DEFLATE-compressed data.",
      "PNG files: Adler-32 is part of PNG's compression layer.",
      "Quick checksums: When speed matters more than error detection strength.",
      "Legacy formats: Older protocols using Adler-32.",
    ],
  },
  xxhash: {
    usage: [
      "Select xxHash32 or xxHash64 variant.",
      "Enter text or upload a file to generate xxHash.",
      "Click 'Generate xxHash' for the result.",
      "Use for fast checksum comparison or deduplication hashing.",
      "File upload supported for large-file hashing.",
    ],
    howItWorks: [
      "xxHash uses a combination of multiplications, rotates, and XORs. No cryptographic operations—optimized purely for speed.",
      "xxHash32: 32-bit state, primes p1=2654435761, p2=2246822519, p3=3266489917, p4=668265263, p5=374761393. Process 4-byte blocks: h = ROL(h + block·p3, 17) · p4. Final: avalanche (mix and shift) for better distribution.",
      "xxHash64: Same idea with 64-bit arithmetic and different primes. Processes 8-byte blocks. Final 64-bit value.",
      "Avalanche step: h ^= h >> 33; h *= 0xff51afd7ed558ccd; h ^= h >> 33; h *= 0xc4ceb9fe1a85ec53; h ^= h >> 33.",
    ],
    about: [
      "xxHash is an extremely fast non-cryptographic hash by Yann Collet. xxHash32 and xxHash64 are used for deduplication, caching, and content-addressable storage.",
      "This xxHash calculator supports both 32-bit and 64-bit variants. Choose based on output size and collision requirements.",
      "All hashing runs locally—no server involvement.",
    ],
    advantages: [
      "Extreme speed: Among the fastest hashes available; often 10× faster than MD5.",
      "Good distribution: Despite non-cryptographic, has low collision rate for similar inputs.",
      "Deduplication: Used in databases and storage for content addressing.",
      "Flexibility: 32-bit and 64-bit variants for different needs.",
    ],
    useCases: [
      "Deduplication: Identify duplicate files or blocks quickly.",
      "Caching: Cache keys for distributed systems.",
      "Checksums: Fast integrity checks for large datasets.",
      "LZ4/Zstd: xxHash used internally in some compression libraries.",
    ],
  },
  blake2: {
    usage: [
      "Select BLAKE2 variant (BLAKE2b-512, BLAKE2b-256, or BLAKE2s-256).",
      "Enter text or upload a file to compute BLAKE2 hash.",
      "Click 'Generate BLAKE2 Hash' for the result.",
      "Verify BLAKE2 checksums or use for secure hashing.",
      "BLAKE2b for 64-bit platforms; BLAKE2s for 32-bit or shorter output.",
    ],
    howItWorks: [
      "BLAKE2 is based on the BLAKE/ChaCha design. It uses a permutation similar to ChaCha's quarter-round, arranged in a 4×4 matrix of 32-bit (BLAKE2s) or 64-bit (BLAKE2b) words.",
      "BLAKE2b state: 16×64-bit; BLAKE2s: 16×32-bit. Compression function mixes message blocks and salt/personalization with the state.",
      "G function (mixing): a+=b+m[σ(2i)]; d=(d⊕a)>>>16; c+=d; b=(b⊕c)>>>12; a+=b+m[σ(2i+1)]; d=(d⊕a)>>>8; c+=d; b=(b⊕c)>>>7. Column and diagonal rounds alternate.",
      "Tree mode supported for parallel hashing; this tool uses sequential mode. Output is configurable (1–64 bytes for BLAKE2b).",
    ],
    about: [
      "BLAKE2 is a fast cryptographic hash (RFC 7693), faster than MD5 and SHA-256 while being cryptographically secure. Designed by Jean-Philippe Aumasson et al.",
      "This BLAKE2 hash calculator supports BLAKE2b-256, BLAKE2b-512, and BLAKE2s-256. BLAKE2 is used in Argon2 and many modern applications.",
      "All computation runs in your browser.",
    ],
    advantages: [
      "Speed: Faster than MD5 on many platforms while being secure.",
      "Security: No known practical attacks on full BLAKE2.",
      "Flexibility: Configurable output length and parameters.",
      "Standard: RFC 7693; used in major protocols and libraries.",
    ],
    useCases: [
      "Password hashing: Argon2 uses BLAKE2 internally.",
      "File integrity: Fast secure hashing for large files.",
      "Digital signatures: Hash before signing.",
      "Generic hashing: When speed and security both matter.",
    ],
  },
  ripemd160: {
    usage: [
      "Enter text or upload a file to calculate RIPEMD-160 hash.",
      "Click 'Generate RIPEMD-160 Hash' for the 40-character hex result.",
      "Verify RIPEMD160 checksums in the comparison section.",
      "Use for Bitcoin address verification or PGP fingerprint checks.",
      "File input supported.",
    ],
    howItWorks: [
      "RIPEMD-160 uses two parallel lines of processing (left and right), each with 80 steps. Results are combined at the end. Similar in spirit to MD5/SHA-1 but with dual lines.",
      "Five 32-bit state words. Two sets of round functions f₁..f₅ (left) and f₁'..f₅' (right). Order of word usage differs between lines. Permutations and constants defined in the spec.",
      "Each step: X[j] = ROL(X[i] + f(X[j],X[k],X[l]) + M[r] + K, s) + X[m]; indices and rotates vary by step.",
      "Final: add left and right branches, output 160 bits (40 hex chars). Often used with SHA-256: Bitcoin address = Base58Check(RIPEMD160(SHA256(pubkey))).",
    ],
    about: [
      "RIPEMD-160 is a 160-bit hash developed in Belgium. It is used in Bitcoin address derivation and PGP.",
      "This RIPEMD-160 hash calculator computes hashes for text and files. RIPEMD-160 is part of the Bitcoin address generation (with SHA-256).",
      "All processing runs locally.",
    ],
    advantages: [
      "Bitcoin: Essential for Bitcoin and compatible cryptocurrencies.",
      "PGP: Used in OpenPGP key fingerprints.",
      "Dual-line design: Different structure from MD5/SHA-1.",
      "160-bit output: Compact compared to SHA-256.",
    ],
    useCases: [
      "Bitcoin addresses: RIPEMD160(SHA256(publicKey)) for address derivation.",
      "PGP fingerprints: Part of OpenPGP key identification.",
      "Legacy systems: Some protocols specify RIPEMD-160.",
      "Checksum verification: When RIPEMD-160 is the published hash.",
    ],
  },
  bcrypt: {
    usage: [
      "Enter your password in the input box.",
      "Select salt rounds (10 recommended; higher = slower but more secure).",
      "Click 'Generate Bcrypt Hash' to create the bcrypt password hash.",
      "Use the Verify section to test if a password matches a bcrypt hash.",
      "Copy the hash (includes salt and parameters) for storage.",
    ],
    howItWorks: [
      "Bcrypt is based on the Blowfish block cipher. It uses an expensive key setup (EksBlowfish) that depends on the password and salt. Cost factor = 2^rounds (e.g., 10 → 1024 iterations).",
      "Algorithm: (1) Generate salt (128 bits). (2) State = EksBlowfishSetup(password, salt, cost). (3) Repeat 64 times: state = ExpensiveKeySchedule(state, password, salt). (4) Encrypt 'OrpheanBeholderScryDoubt' 64 times using state; output = $2a$rounds$salt$hash.",
      "EksBlowfish: Blowfish key schedule modified so that the P-array and S-boxes are derived from password and salt via repeated encryptions. Each round doubles the work.",
      "Output format: $2a$10$[22-char salt][31-char hash]. Rounds 4–31 supported; this tool offers 4–14 for browser performance.",
    ],
    about: [
      "Bcrypt is a password hashing function designed by Niels Provos and David Mazières. It is deliberately slow to resist brute-force attacks.",
      "This bcrypt hash calculator generates bcrypt hashes with configurable salt rounds. The hash includes all parameters—no separate salt storage needed for verification.",
      "All hashing runs in your browser; passwords never leave your device.",
    ],
    advantages: [
      "Adaptive cost: Increase rounds as hardware improves.",
      "Built-in salt: Salt is embedded in the hash output.",
      "Widely supported: Libraries in every major language.",
      "Proven: Used since 1999; well-studied.",
    ],
    useCases: [
      "Password storage: Hash user passwords before storing in databases.",
      "Application authentication: Django, Rails, and many frameworks use bcrypt.",
      "Verification: Test if a password matches a stored bcrypt hash.",
      "Security auditing: Verify password policy compliance.",
    ],
  },
  argon2: {
    usage: [
      "Enter your password in the input box.",
      "Configure type (Argon2id recommended), memory, time, parallelism.",
      "Optionally set a salt or use Random for a new salt.",
      "Click 'Generate Argon2 Hash' and use Verify to test passwords.",
      "Copy the encoded hash (includes all parameters and salt).",
    ],
    howItWorks: [
      "Argon2 fills memory with a pseudo-random data structure, then makes many passes that depend on both the password and the memory. Argon2id mixes Argon2i (side-channel resistant) and Argon2d (GPU resistant).",
      "Memory matrix: 2^mem bytes organized in lanes and segments. Fill phase: each lane initialized with H(password,salt,lane,segment). Each block B[i][j] = G(B[i][j-1], B[i'][j']) with dependencies on previous blocks.",
      "Compression function G: P = H(B₁,B₂), Q = P⊕(P>>>32), then 16-block permutation. Final hash: XOR of last blocks of each lane, then more passes.",
      "Parameters: time (iterations), mem (KB), parallelism, hashLen. More memory and time → slower attacks.",
    ],
    about: [
      "Argon2 won the Password Hashing Competition (2015). Argon2id is recommended for most applications, balancing side-channel and GPU resistance.",
      "This Argon2 hash calculator generates Argon2id, Argon2i, or Argon2d hashes. Configure memory, time, parallelism, and optionally salt.",
      "All hashing runs in your browser.",
    ],
    advantages: [
      "Memory-hard: Requires large RAM; limits parallel attacks.",
      "Configurable: Tune security vs. performance.",
      "Modern standard: Recommended by OWASP and NIST.",
      "Encoded output: Hash includes parameters for verification.",
    ],
    useCases: [
      "Password storage: Preferred for new applications.",
      "Key derivation: Derive encryption keys from passwords.",
      "Security-critical systems: When best-in-class hashing is required.",
      "Compliance: Meet password hashing requirements.",
    ],
  },
  pbkdf2: {
    usage: [
      "Enter your password in the input box.",
      "Set salt (or use Random), iterations, hash algorithm, key length.",
      "Choose Salt format (Auto for hex salt, UTF-8 for cross-tool compatibility).",
      "Click 'Generate' and use Verify to test password against derived key.",
      "Copy derived key (hex) and salt for storage; parameters must be stored too.",
    ],
    howItWorks: [
      "PBKDF2 (RFC 2898): DK = PBKDF2(PRF, password, salt, c, dkLen) where PRF is HMAC with a hash (e.g., HMAC-SHA256).",
      "Formula: U₁ = PRF(password, salt||INT(1)); Uᵢ = PRF(password, Uᵢ₋₁); Tᵢ = U₁⊕U₂⊕...⊕Uᵢ. DK = T₁||T₂||... truncated to dkLen.",
      "Iterations: c iterations (e.g., 100,000) make each candidate guess expensive. Salt ensures different users get different keys even with same password.",
      "HMAC: HMAC(K,m) = H((K'⊕opad)||H((K'⊕ipad)||m)) with opad=0x5c repeated, ipad=0x36 repeated.",
    ],
    about: [
      "PBKDF2 is the classic password-based key derivation function (RFC 2898). Used in TLS, WPA2, Django, and many frameworks.",
      "This PBKDF2 hash calculator derives keys with configurable iterations, hash (SHA-1/256/384/512), salt, and key length. Salt format options support cross-tool compatibility.",
      "All processing runs locally.",
    ],
    advantages: [
      "Standard: Widely implemented and standardized.",
      "Configurable: Adjust iterations for security vs. performance.",
      "Hash flexibility: Use SHA-256, SHA-512, etc.",
      "Compatibility: Works with Django, Node, Python, etc.",
    ],
    useCases: [
      "Password hashing: Django, Laravel, and others use PBKDF2.",
      "Key derivation: Derive encryption keys from passwords.",
      "TLS/WPA2: Key derivation in network protocols.",
      "Legacy systems: When PBKDF2 is required.",
    ],
  },
  scrypt: {
    usage: [
      "Enter your password in the input box.",
      "Set salt (or Random), N (16384 recommended), r, p, key length.",
      "Choose Salt format (UTF-8 to match other online Scrypt tools).",
      "Click 'Generate' and use Verify to test password against derived key.",
      "Store salt, N, r, p, and derived key for verification.",
    ],
    howItWorks: [
      "Scrypt (RFC 7914) uses a large amount of memory. It builds a vector V of N blocks (each 128r bytes), then accesses them in a pseudo-random order. Memory usage ≈ 128·N·r bytes.",
      "Steps: (1) PBKDF2 to get initial blocks. (2) ROMix: fill V with repeated BlockMix; then for each block, read from V at index (block XOR integer) and mix. (3) PBKDF2 on result to get final key.",
      "BlockMix: Salsa20/8 core on each 64-byte block; blocks are permuted and XORed. ROMix ensures the entire V must be in memory to compute the result efficiently.",
      "Parameters: N (CPU/memory cost, must be power of 2), r (block size), p (parallelism). Memory ≈ 128Nr. N=16384, r=8, p=1 → ~16 MB.",
    ],
    about: [
      "Scrypt is a memory-hard KDF (RFC 7914) used in many cryptocurrencies and Unix. It resists GPU and ASIC attacks by requiring large RAM.",
      "This Scrypt hash calculator derives keys with configurable N, r, p. Salt format can be Auto (hex), Hex, or UTF-8 for cross-site verification.",
      "All hashing runs in your browser.",
    ],
    advantages: [
      "Memory-hard: High RAM requirement limits parallel cracking.",
      "Standard: RFC 7914; used in Bitcoin (Litecoin), Unix.",
      "Configurable: N, r, p tune security and performance.",
      "Proven: In use since 2009.",
    ],
    useCases: [
      "Cryptocurrency: Litecoin, many altcoins use Scrypt.",
      "Unix passwords: Some systems use Scrypt.",
      "Key derivation: When memory-hardness is desired.",
      "Password storage: Alternative to bcrypt/Argon2.",
    ],
  },
  whirlpool: {
    usage: [
      "Enter text or upload a file to calculate Whirlpool hash.",
      "Click 'Generate Whirlpool Hash' for the 128-character hex result.",
      "Verify Whirlpool checksums in the comparison section.",
      "Use for digital signatures or Whirlpool-based systems.",
      "No parameters—fixed 512-bit output.",
    ],
    howItWorks: [
      "Whirlpool (ISO/IEC 10118-3) uses a block cipher structure (W block cipher) in Miyaguchi-Preneel mode. 512-bit state, 512-bit blocks.",
      "State is 8×8 matrix of 8-bit cells. Round: SubBytes (S-box), ShiftColumns (cyclic shift per column), MixRows (matrix multiply in GF(2⁸)), AddRoundKey (XOR with key schedule). 10 rounds.",
      "S-box: Inversion in GF(2⁸) with reduction polynomial, then affine transform. Same structure as AES but different constants.",
      "Miyaguchi-Preneel: Hᵢ = E_Hᵢ₋₁(Mᵢ) ⊕ Mᵢ ⊕ Hᵢ₋₁. E is the block cipher, keyed by previous hash.",
    ],
    about: [
      "Whirlpool is a 512-bit hash (ISO/IEC 10118-3) designed by Vincent Rijmen and Paulo Barreto. Used in digital signatures and some cryptocurrencies.",
      "This Whirlpool hash calculator computes hashes for text and files. Whirlpool provides strong security with 512-bit output.",
      "All processing runs locally.",
    ],
    advantages: [
      "512-bit output: Large security margin.",
      "Standard: ISO/IEC 10118-3.",
      "AES-like design: Well-understood structure.",
      "No known attacks: Full Whirlpool remains secure.",
    ],
    useCases: [
      "Digital signatures: Hash documents before signing.",
      "Cryptocurrency: Some coins use Whirlpool.",
      "Secure hashing: When 512-bit output is needed.",
      "Protocol compliance: ISO-standard hashing.",
    ],
  },
  fnv1a: {
    usage: [
      "Select bit size (32-bit default; 64 or 128 for longer hashes).",
      "Enter text or upload a file to compute FNV-1a hash.",
      "Click 'Generate FNV-1a Hash' for the result.",
      "Use for fast checksums, cache keys, or consistent hashing.",
      "Not for security—optimized for speed and distribution.",
    ],
    howItWorks: [
      "FNV-1a: Start with hash = offset basis (e.g., 14695981039346656037 for 64-bit). For each byte: hash = hash XOR byte; hash = hash × FNV_prime (e.g., 1099511628211 for 64-bit); hash = hash mod 2^64.",
      "Formula: h = offset_basis; for each octet o: h = (h ⊕ o) × FNV_prime mod 2^n. FNV-1a XORs before multiply (vs FNV-1 which multiplies before XOR); FNV-1a has better avalanche.",
      "Primes: FNV-1a 32-bit uses 16777619; 64-bit uses 1099511628211; 128-bit uses 309485009821345068724781371; etc.",
      "Not cryptographic: Inverses and collisions are easy to find. Use for hash tables, checksums, sharding—not passwords.",
    ],
    about: [
      "FNV-1a (Fowler–Noll–Vo) is a fast non-cryptographic hash with excellent distribution. This tool supports 32, 64, 128, 256, 512, and 1024-bit outputs.",
      "This FNV-1a hash calculator computes hashes for text and files. Ideal for hash tables, URL hashing, and fast lookups.",
      "All computation runs in your browser.",
    ],
    advantages: [
      "Speed: Extremely fast—minimal operations per byte.",
      "Distribution: Good for hash tables and similar strings.",
      "Simple: Easy to implement across languages.",
      "Configurable size: 32 to 1024 bits.",
    ],
    useCases: [
      "Hash tables: Fast bucketing with good distribution.",
      "URL hashing: Consistent hashing for caches.",
      "Sharding: Partition data by FNV-1a of keys.",
      "Checksums: Quick non-cryptographic integrity checks.",
    ],
  },
};
