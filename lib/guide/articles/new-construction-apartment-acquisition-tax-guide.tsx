import Link from "next/link";

export const newConstructionApartmentAcquisitionTaxGuideMeta = {
  slug: "new-construction-apartment-acquisition-tax-guide",
  title: "신축 아파트 취득세 계산, 분양가 6억~12억 총정리",
  description:
    "신축·분양 아파트 취득세는 분양가별로 얼마인지 6억·7억·8억·9억·12억 표로 보여 줍니다. 납부 시점, 전용 85㎡ 초과 차이, 생애최초 감면, 조정지역 2주택 중과, 6억·9억 경계를 다루며 취득세 계산기로 본인 조건을 바로 확인할 수 있습니다.",
  updated: "2026년 11월 4일",
} as const;

/** 1주택·조정지역 중과 없음 가정. 단위: 만 원 */
const priceRows = [
  { price: "6억 원", rate: "1%", acq: "600만 원", edu: "60만 원", total: "660만 원", large: "780만 원" },
  { price: "7억 원", rate: "약 1.67%", acq: "약 1,167만 원", edu: "약 117만 원", total: "약 1,283만 원", large: "약 1,423만 원" },
  { price: "8억 원", rate: "약 2.33%", acq: "약 1,867만 원", edu: "약 187만 원", total: "약 2,053만 원", large: "약 2,213만 원" },
  { price: "9억 원", rate: "3%", acq: "2,700만 원", edu: "270만 원", total: "2,970만 원", large: "3,150만 원" },
  { price: "12억 원", rate: "3%", acq: "3,600만 원", edu: "360만 원", total: "3,960만 원", large: "4,200만 원" },
] as const;

const reliefRows = [
  { price: "6억 원", before: "660만 원", after: "440만 원" },
  { price: "7억 원", before: "약 1,283만 원", after: "약 1,063만 원" },
  { price: "8억 원", before: "약 2,053만 원", after: "약 1,833만 원" },
  { price: "9억 원", before: "2,970만 원", after: "2,750만 원" },
  { price: "12억 원", before: "3,960만 원", after: "3,740만 원" },
] as const;

const surchargeRows = [
  { price: "6억 원", normal: "660만 원", surcharge: "약 5,040만 원", diff: "약 4,380만 원" },
  { price: "7억 원", normal: "약 1,283만 원", surcharge: "약 5,880만 원", diff: "약 4,597만 원" },
  { price: "8억 원", normal: "약 2,053만 원", surcharge: "약 6,720만 원", diff: "약 4,667만 원" },
  { price: "9억 원", normal: "2,970만 원", surcharge: "약 7,560만 원", diff: "약 4,590만 원" },
  { price: "12억 원", normal: "3,960만 원", surcharge: "약 1억 80만 원", diff: "약 6,120만 원" },
] as const;

const linkClass = "text-primary underline-offset-4 hover:underline";
const captionClass =
  "border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground";
const thClass = "border-border border-b px-3 py-2.5 font-semibold";

function rowCellClass(index: number, length: number) {
  return index === length - 1 ? "px-3 py-2.5" : "border-border border-b px-3 py-2.5";
}

export function NewConstructionApartmentAcquisitionTaxGuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-ncat-intro">
        <h2 id="guide-ncat-intro" className="text-foreground text-xl font-semibold tracking-tight">
          신축 아파트 취득세는 무엇으로 정해지나
        </h2>
        <p>
          신축 아파트 취득세는 <strong>분양가(취득가액)</strong>, <strong>잔금·등기 시점 세대 주택 수</strong>,{" "}
          <strong>전용면적</strong>, <strong>조정대상지역 여부</strong>에 따라 달라집니다. 계약금·중도금 납부만으로는
          취득세가 나가지 않고, 보통 잔금·소유권 이전등기 시점에 한 번 부과됩니다. 이 글은 분양가 6억·7억·8억·9억·12억
          표를 한곳에 모았고,{" "}
          <Link href="/acquisition-tax-calculator" className={linkClass}>
            취득세 계산기
          </Link>
          에서 본인 조건을 입력해 바로 확인할 수 있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ncat-timing">
        <h2 id="guide-ncat-timing" className="text-foreground text-xl font-semibold tracking-tight">
          신축 분양, 취득세는 언제 내느냐
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className={captionClass}>납부 시점 요약</caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className={thClass}>
                  단계
                </th>
                <th scope="col" className={thClass}>
                  취득세
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  계약금·중도금
                </th>
                <td className="border-border border-b px-3 py-2.5">없음</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  잔금·소유권 이전등기
                </th>
                <td className="border-border border-b px-3 py-2.5">취득일 기준 60일 이내 신고·납부(위택스·관할 구청)</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  분양권 전매 취득
                </th>
                <td className="px-3 py-2.5">전매 계약 시점에 별도 과세(잔금 이전)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          ※ <strong>분양권 전매</strong>로 권리만 취득하는 경우, <strong>잔금·등기로 직접 분양받는 경우</strong>,{" "}
          <strong>등기된 기존 주택을 매매</strong>하는 경우는 취득 시점·주택 수 산정이 다릅니다.{" "}
          <Link href="/guide/presale-right-capital-gains-tax-guide#guide-prcg-vs-sale" className={linkClass}>
            분양권 거래와 매매 차이
          </Link>
          ·
          <Link href="/guide/acquisition-tax-rates-2026-guide#guide-at-presale-timing" className={linkClass}>
            분양·신축 취득 시점
          </Link>
          을 참고하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ncat-amounts">
        <h2 id="guide-ncat-amounts" className="text-foreground text-xl font-semibold tracking-tight">
          분양가별 취득세 표(1주택, 6억~12억)
        </h2>
        <p className="text-muted-foreground text-sm">
          무주택·1주택, 조정대상지역·2주택 중과 없음 가정. 합계는 취득세+지방교육세이며, 전용 85㎡를 초과하면 농어촌특별세
          0.2%가 더해집니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[44rem] border-collapse text-left text-sm">
            <caption className={captionClass}>분양가별 취득세·지방교육세·농특세</caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className={thClass}>
                  분양가
                </th>
                <th scope="col" className={thClass}>
                  취득세율
                </th>
                <th scope="col" className={thClass}>
                  취득세
                </th>
                <th scope="col" className={thClass}>
                  지방교육세
                </th>
                <th scope="col" className={thClass}>
                  합계(85㎡ 이하)
                </th>
                <th scope="col" className={thClass}>
                  합계(85㎡ 초과)
                </th>
              </tr>
            </thead>
            <tbody>
              {priceRows.map((row, index) => (
                <tr key={row.price} className={index === priceRows.length - 1 ? "bg-muted/20" : undefined}>
                  <th scope="row" className={`${rowCellClass(index, priceRows.length)} font-medium`}>
                    {row.price}
                  </th>
                  <td className={rowCellClass(index, priceRows.length)}>{row.rate}</td>
                  <td className={rowCellClass(index, priceRows.length)}>{row.acq}</td>
                  <td className={rowCellClass(index, priceRows.length)}>{row.edu}</td>
                  <td className={`${rowCellClass(index, priceRows.length)} font-medium`}>{row.total}</td>
                  <td className={rowCellClass(index, priceRows.length)}>{row.large}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          6억 이하는 1%, 6억 초과~9억 이하는 비례세율(분양가에 따라 1%~3%), 9억 초과는 3% 고정입니다. 지방교육세는 취득세의
          10%입니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-ncat-eight">
        <h2 id="guide-ncat-eight" className="text-foreground text-xl font-semibold tracking-tight">
          8억 주택 구입 시 취득세는 얼마인가
        </h2>
        <p>
          1주택·전용 84㎡ 기준 분양가 8억 원이면 취득세+지방교육세 합계는 약 <strong>2,053만 원</strong>입니다. 6억(660만
          원)보다 약 1,393만 원, 7억(약 1,283만 원)보다 약 770만 원 많고, 9억(2,970만 원)에 가까워질수록 세율이 3%에
          수렴합니다. 1억 원 오를 때마다 세액이 크게 늘어나는 구간이므로, 옵션·발코니 확장 비용이 합쳐진 최종 취득가액을
          먼저 확인하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ncat-boundary">
        <h2 id="guide-ncat-boundary" className="text-foreground text-xl font-semibold tracking-tight">
          6억·9억 경계에서 달라지는 점
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            <strong>6억 경계</strong> — 6억 원까지는 1%입니다. 옵션을 포함한 합계가 6억 1천만 원이 되면 비례세율 구간으로
            들어가 합계가 약 716만 원으로 올라갑니다(6억 원 660만 원 대비 약 56만 원 증가).
          </li>
          <li>
            <strong>9억 경계</strong> — 9억과 9억 1천만 원 모두 취득세율이 3%입니다. 9억 1천만 원 합계는 약 3,003만 원으로
            9억(2,970만 원)과 33만 원 차이입니다. 비례세율 구간은 9억에서 끝나므로 이후에는 금액에 비례해서만 늘어납니다.
          </li>
          <li>
            <strong>취득가액 포함 범위</strong> — 분양가 5억 8천만 원에 옵션 2천만 원이 더해져 합계가 6억 원이면, 계약서에
            옵션이 분리돼 있어도 과세표준은 6억 원(660만 원)입니다.
          </li>
        </ul>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ncat-area">
        <h2 id="guide-ncat-area" className="text-foreground text-xl font-semibold tracking-tight">
          전용면적에 따른 차이(85㎡ 초과)
        </h2>
        <p>
          같은 분양가라도 전용 85㎡를 넘으면 농어촌특별세 0.2%가 더해집니다. 6억 원이면 59㎡·84㎡는 660만 원, 101㎡는 농특세
          120만 원이 더해져 780만 원입니다. 위 표의 맨 오른쪽 열이 85㎡ 초과 기준 합계입니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ncat-relief">
        <h2 id="guide-ncat-relief" className="text-foreground text-xl font-semibold tracking-tight">
          생애최초 주택 구입 감면 적용 시
        </h2>
        <p>
          본인·배우자 모두 주택 소유 이력이 없고 본인이 거주할 목적으로 취득가 12억 원 이하 주택을 유상 취득하면 취득세
          200만 원 한도로 감면됩니다(소득 요건 없음). 취득세가 200만 원 줄면 지방교육세도 연동돼 20만 원이 함께 줄어, 실질
          감면액은 약 220만 원입니다. 자동 적용이 아니므로 취득세 신고 시 별도 신청이 필요하고, 한도가 정해져 있어 12억 원에서도
          감면액은 같습니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className={captionClass}>생애최초 감면 후 실납부액(84㎡ 가정)</caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className={thClass}>
                  분양가
                </th>
                <th scope="col" className={thClass}>
                  감면 전 합계
                </th>
                <th scope="col" className={thClass}>
                  감면 후(약 −220만 원)
                </th>
              </tr>
            </thead>
            <tbody>
              {reliefRows.map((row, index) => (
                <tr key={row.price} className={index === reliefRows.length - 1 ? "bg-muted/20" : undefined}>
                  <th scope="row" className={`${rowCellClass(index, reliefRows.length)} font-medium`}>
                    {row.price}
                  </th>
                  <td className={rowCellClass(index, reliefRows.length)}>{row.before}</td>
                  <td className={`${rowCellClass(index, reliefRows.length)} font-medium`}>{row.after}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          전용 85㎡ 초과 주택은 농특세가 별도로 붙고, 취득 후 3년 안에 매각·증여·임대하면 감면분이 추징됩니다(2026년 1월 1일 이후 취득분). 2026년 지방세제 개편안(주거용 오피스텔 포함, 40세 미만 한도 300만 원)은 2026년 11월 4일 기준 아직 확정되지 않았습니다. 자세한 요건은{" "}
          <Link href="/guide/first-home-acquisition-tax-relief-guide" className={linkClass}>
            생애최초 취득세 감면
          </Link>
          가이드를 확인하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ncat-surcharge">
        <h2 id="guide-ncat-surcharge" className="text-foreground text-xl font-semibold tracking-tight">
          1주택 보유 상태에서 조정지역 신축을 취득할 때(2주택 중과)
        </h2>
        <p>
          기존 주택을 팔기 전에 신축 잔금·등기를 먼저 하면 세대 기준 2주택이 됩니다. 취득하는 주택이 조정대상지역이면
          취득세 8%가 적용되고, 지방교육세(0.4%)를 더한 합계는 전용 85㎡ 이하 기준 분양가의 약 8.4%입니다. 85㎡를 초과하면 농특세 0.6%가 더해져 약 9.0%가 됩니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className={captionClass}>2주택·조정지역 중과 시 합계(84㎡ 가정)</caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className={thClass}>
                  분양가
                </th>
                <th scope="col" className={thClass}>
                  1주택 합계
                </th>
                <th scope="col" className={thClass}>
                  2주택 중과 합계
                </th>
                <th scope="col" className={thClass}>
                  추가 부담
                </th>
              </tr>
            </thead>
            <tbody>
              {surchargeRows.map((row, index) => (
                <tr key={row.price} className={index === surchargeRows.length - 1 ? "bg-muted/20" : undefined}>
                  <th scope="row" className={`${rowCellClass(index, surchargeRows.length)} font-medium`}>
                    {row.price}
                  </th>
                  <td className={rowCellClass(index, surchargeRows.length)}>{row.normal}</td>
                  <td className={rowCellClass(index, surchargeRows.length)}>{row.surcharge}</td>
                  <td className={`${rowCellClass(index, surchargeRows.length)} font-medium`}>{row.diff}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          이사 목적이면{" "}
          <Link href="/guide/temporary-two-home-acquisition-tax-exception-guide" className={linkClass}>
            일시적 2주택
          </Link>{" "}
          요건으로 1주택 세율을 유지할 수 있는지 먼저 검토하는 편이 낫습니다. 지역별 중과 여부는{" "}
          <Link href="/guide/second-home-acquisition-tax-surcharge-2026-guide" className={linkClass}>
            2주택자 취득세 중과
          </Link>
          를 참고하세요.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-ncat-mistakes">
        <h2 id="guide-ncat-mistakes" className="text-foreground text-xl font-semibold tracking-tight">
          신축 분양에서 자주 틀리는 부분
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            <strong>주택 수</strong> — 기존 집 처분 전 잔금·등기를 하면 2주택. 분양권·입주권 보유도 주택 수에 포함될 수
            있습니다.
          </li>
          <li>
            <strong>조정대상지역</strong> — 2주택이면 같은 분양가라도 8% 중과가 적용될 수 있습니다.
          </li>
          <li>
            <strong>취득가액 경계</strong> — 옵션·발코니 포함 합계가 6억·9억을 넘는지 계약서에서 먼저 확인하세요.
          </li>
          <li>
            <strong>잔금 자금</strong> — 취득세는 잔금일 별도 준비 자금입니다.{" "}
            <Link href="/guide/home-purchase-additional-costs-guide" className={linkClass}>
              주택 구입 부대비용
            </Link>
            과 함께 보세요.
          </li>
        </ul>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ncat-checklist">
        <h2 id="guide-ncat-checklist" className="text-foreground text-xl font-semibold tracking-tight">
          잔금 전 체크리스트
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[30rem] border-collapse text-left text-sm">
            <caption className={captionClass}>확인 항목</caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className={thClass}>
                  항목
                </th>
                <th scope="col" className={`${thClass} w-24`}>
                  확인
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  취득가액 합계(분양가+옵션) 및 전용면적
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  잔금·등기 시점 세대 주택 수
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  조정대상지역·생애최초·일시적 2주택 해당 여부
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 text-left font-medium">
                  취득세·등기비·국민주택채권 등 잔금일 자금 확보
                </th>
                <td className="px-3 py-2.5 text-center">□</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          ※ 취득세율·감면 조건은 지방세법 등에 따르며 정책에 따라 변동될 수 있습니다. 정확한 세액은 위택스(wetax.go.kr) 또는
          관할 구청 세무과에서 확인할 것을 권장합니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-ncat-related">
        <h2 id="guide-ncat-related" className="text-foreground text-xl font-semibold tracking-tight">
          함께 보면 좋은 글
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            <Link href="/guide/acquisition-tax-rates-2026-guide" className={linkClass}>
              2026년 취득세율 완전 정리
            </Link>
          </li>
          <li>
            <Link href="/guide/first-home-acquisition-tax-relief-guide" className={linkClass}>
              생애최초 취득세 감면
            </Link>
          </li>
          <li>
            <Link href="/guide/national-housing-bond-purchase-criteria-guide" className={linkClass}>
              국민주택채권 매입 기준
            </Link>
          </li>
          <li>
            <Link href="/guide/apartment-brokerage-fee-guide" className={linkClass}>
              아파트 매매 중개수수료
            </Link>{" "}
            — 12억 원 매매는 상한 0.6%(1인당 720만 원)
          </li>
        </ul>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="취득세 계산기 이동"
      >
        <p>
          <Link href="/acquisition-tax-calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            → 취득세 계산기에서 분양가·주택 수·면적을 입력해 바로 확인하세요.
          </Link>
        </p>
      </aside>
    </>
  );
}
