import Image from "next/image";
import {
  ALLCREDIT_AFFILIATE_URL,
  ALLCREDIT_BANNER_HEIGHT,
  ALLCREDIT_BANNER_SRC,
  ALLCREDIT_BANNER_WIDTH,
  ALLCREDIT_CTA_DEFAULT,
  ALLCREDIT_DISCLOSURE,
} from "@/lib/affiliate/allcredit";
import { cn } from "@/lib/utils";

export function AllCreditAffiliateCta({
  description = ALLCREDIT_CTA_DEFAULT,
  className,
}: {
  description?: string;
  className?: string;
}) {
  return (
    <aside
      className={cn(
        "bg-muted/40 text-muted-foreground w-full space-y-3 rounded-lg border p-4 text-sm leading-relaxed",
        className,
      )}
      role="complementary"
      aria-label="신용등급 무료 조회 안내"
    >
      <p className="text-muted-foreground/90 text-xs leading-snug">{ALLCREDIT_DISCLOSURE}</p>
      <a
        href={ALLCREDIT_AFFILIATE_URL}
        target="_blank"
        rel="sponsored noopener noreferrer"
        className="hover:bg-muted/60 flex w-full min-h-[60px] items-center gap-3 rounded-md transition-colors"
      >
        <Image
          src={ALLCREDIT_BANNER_SRC}
          alt="올크레딧 신용등급 무료 조회"
          width={ALLCREDIT_BANNER_WIDTH}
          height={ALLCREDIT_BANNER_HEIGHT}
          className="h-[60px] w-[120px] shrink-0"
          unoptimized
        />
        <span className="text-foreground text-sm leading-snug">{description}</span>
      </a>
    </aside>
  );
}
