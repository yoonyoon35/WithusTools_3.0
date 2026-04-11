/**
 * Shared limitation notice for Hangul↔kana pronunciation tools (not for translation or orthography proof).
 */

const boxClass =
  "mx-auto mb-6 max-w-2xl rounded-lg border border-amber-500/25 bg-amber-950/15 px-4 py-3 text-sm leading-relaxed text-slate-400";

export function HangulToKanaDisclaimer() {
  return (
    <aside className={boxClass} role="note" aria-label="Tool limitation">
      <p>
        <span className="font-medium text-amber-100/90">Limitation: </span>
        This page is a supplementary study aid only. It does not provide reliable
        translation between Korean and Japanese, and it is not suitable for checking
        official Korean spelling, standard romanization, or formal rules for how
        Korean is written in Japanese kana. For anything that requires correctness
        (publication, schoolwork, names on documents, broadcasting, and similar),
        use dictionaries, institutional or publisher style guides, or qualified human
        review.
      </p>
    </aside>
  );
}

export function KanaToHangulDisclaimer() {
  return (
    <aside className={boxClass} role="note" aria-label="Tool limitation">
      <p>
        <span className="font-medium text-amber-100/90">Limitation: </span>
        This page is a supplementary study aid only. It is not a Korean–Japanese
        translator, and it must not be used as the sole check for correct Hangul
        spelling or wording. Decoding uses the approximate inverse of this
        site&apos;s Hangul→kana rules, so output often differs from the original
        Korean, especially after a round trip. Treat results as rough reference and
        verify with dictionaries, teachers, or other authoritative sources when
        accuracy matters.
      </p>
    </aside>
  );
}
