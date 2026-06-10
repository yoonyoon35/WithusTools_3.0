import RelatedTools from "@/components/RelatedTools";

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <RelatedTools />
      </div>
    </>
  );
}
