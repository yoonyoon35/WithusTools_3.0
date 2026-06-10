/**
 * Root layout — html/body는 [locale]/layout.tsx에서 locale별로 렌더링합니다.
 * @see https://next-intl.dev/docs/getting-started/app-router
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
