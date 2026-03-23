/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  /* redirects는 output: 'export'와 호환되지 않음 → public/_redirects로 Cloudflare Pages에서 처리 */
};

export default nextConfig;
