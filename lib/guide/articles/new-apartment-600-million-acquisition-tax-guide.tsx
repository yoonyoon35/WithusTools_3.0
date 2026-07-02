import Link from "next/link";

export const newApartment600MillionAcquisitionTaxGuideMeta = {
  slug: "new-apartment-600-million-acquisition-tax-guide",
  title: "6억·분양가6억 신축 아파트 취득세 계산",
  description:
    "2026년 6월 기준 분양가 6억 원(분양가6억아파트) 신축 아파트 취득세·지방교육세·농특세 산출, 전용면적·주택 수·생애최초 감면 시나리오와 납부 시점을 표로 정리했습니다.",
  updated: "2026년 7월 2일",
} as const;

export function NewApartment600MillionAcquisitionTaxGuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-na600-intro">
        <h2 id="guide-na600-intro" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 6월 기준
        </h2>
        <p>
          신축 분양 아파트는 계약금·중도금을 내는 동안 취득세가 나가지 않고, 보통 <strong>잔금·소유권 이전등기</strong>{" "}
          시점에 한 번 부과됩니다. 분양가 6억 원이면 1주택 기준 취득세율 1% 구간에 걸려, 전용 85㎡ 이하일 때 합계 약{" "}
          <strong>660만 원</strong>이 대표값입니다.{" "}
          <Link href="/acquisition-tax-calculator" className="text-primary underline-offset-4 hover:underline">
            취득세 계산기
          </Link>
          로 본인 조건을 넣고, 이 글에서는 6억 원 신축 분양에서 금액이 갈리는 지점을 짚습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-na600-base">
        <h2 id="guide-na600-base" className="text-foreground text-xl font-semibold tracking-tight">
          기본 계산(1주택·분양가 6억 원)
        </h2>
        <p className="text-muted-foreground text-sm">
          무주택 또는 1주택자로 취득, 조정대상지역·2주택 중과 해당 없음, 전용 85㎡ 이하 가정
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              6억 원 신축 분양 취득세 산출
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  세율
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  금액
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  취득세
                </th>
                <td className="border-border border-b px-3 py-2.5">1%</td>
                <td className="border-border border-b px-3 py-2.5">600만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  지방교육세
                </th>
                <td className="border-border border-b px-3 py-2.5">취득세의 10%</td>
                <td className="border-border border-b px-3 py-2.5">60만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  합계
                </th>
                <td className="px-3 py-2.5">1.1%</td>
                <td className="px-3 py-2.5">660만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          6억 원은 구간별 세율에서 <strong>「6억 원 이하 1%」</strong> 경계에 해당합니다. 분양가가 6억 1천만 원만 넘어도
          비례세율 구간으로 들어가 세액이 조금 올라갑니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-na600-area">
        <h2 id="guide-na600-area" className="text-foreground text-xl font-semibold tracking-tight">
          전용면적에 따른 차이
        </h2>
        <p>같은 6억 원이라도 전용 85㎡를 넘으면 농어촌특별세(농특세) 0.2%가 더해집니다.</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              전용면적별 6억 원 납부액(1주택)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  전용면적
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  농특세
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  합계
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  59㎡·84㎡(85㎡ 이하)
                </th>
                <td className="border-border border-b px-3 py-2.5">없음</td>
                <td className="border-border border-b px-3 py-2.5">660만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  101㎡(85㎡ 초과)
                </th>
                <td className="px-3 py-2.5">120만 원(0.2%)</td>
                <td className="px-3 py-2.5">780만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-na600-cases">
        <h2 id="guide-na600-cases" className="text-foreground text-xl font-semibold tracking-tight">
          케이스별 계산
        </h2>
        <p className="text-muted-foreground text-sm">분양가 6억 원, 전용 84㎡ 가정</p>

        <div className="space-y-3">
          <h3 className="text-foreground text-base font-semibold">케이스 1 — 무주택·1주택 취득</h3>
          <p>위 기본표와 같습니다. 합계 <strong>660만 원</strong>.</p>
        </div>

        <div className="space-y-3">
          <h3 className="text-foreground text-base font-semibold">케이스 2 — 생애최초 주택 구입 감면</h3>
          <p>
            본인·배우자 모두 주택 소유 이력이 없고 취득가 12억 원 이하면, 취득세 200만 원 한도 감면을 신청할 수
            있습니다.
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
              <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
                생애최초 감면 후 실납부액
              </caption>
              <thead>
                <tr className="bg-muted/40">
                  <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                    구분
                  </th>
                  <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                    금액
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                    감면 전
                  </th>
                  <td className="border-border border-b px-3 py-2.5">660만 원</td>
                </tr>
                <tr>
                  <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                    취득세 감면(200만 원)
                  </th>
                  <td className="border-border border-b px-3 py-2.5">−200만 원</td>
                </tr>
                <tr className="bg-muted/20">
                  <th scope="row" className="px-3 py-2.5 font-medium">
                    감면 후 합계
                  </th>
                  <td className="px-3 py-2.5">460만 원</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            자동 적용이 아니므로 취득세 신고 시 별도 신청이 필요합니다. 조건·추징은{" "}
            <Link href="/guide/first-home-acquisition-tax-relief-guide" className="text-primary underline-offset-4 hover:underline">
              생애최초 취득세 감면
            </Link>
            가이드를 참고하세요.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-foreground text-base font-semibold">케이스 3 — 1주택 보유 상태에서 조정지역 신축 6억 취득</h3>
          <p>
            기존 주택을 팔기 전에 신축 잔금·등기를 먼저 하면 세대 기준 2주택이 됩니다. 담보 주택이 조정대상지역이면
            중과 8%가 적용됩니다.
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
              <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
                2주택·조정지역 6억 원(84㎡)
              </caption>
              <thead>
                <tr className="bg-muted/40">
                  <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                    항목
                  </th>
                  <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                    금액
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                    취득세(8%) + 지방교육세 등
                  </th>
                  <td className="border-border border-b px-3 py-2.5">약 5,040만 원</td>
                </tr>
                <tr className="bg-muted/20">
                  <th scope="row" className="px-3 py-2.5 font-medium">
                    1주택 대비 차이
                  </th>
                  <td className="px-3 py-2.5">약 4,380만 원 추가</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            이사 목적이면{" "}
            <Link
              href="/guide/temporary-two-home-acquisition-tax-exception-guide"
              className="text-primary underline-offset-4 hover:underline"
            >
              일시적 2주택
            </Link>
            요건으로 660만 원 수준을 유지할 수 있는지 먼저 검토하는 편이 낫습니다.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-foreground text-base font-semibold">케이스 4 — 분양가 5억 8천 + 옵션 2천 = 6억</h3>
          <p>
            발코니 확장·옵션 비용이 취득가액에 포함되면 과세표준도 6억 원입니다. 계약서·분양서에 옵션이 분리돼
            있어도 실제 취득가 합계가 6억이면 위와 같은 660만 원이 기준입니다.
          </p>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-na600-timing">
        <h2 id="guide-na600-timing" className="text-foreground text-xl font-semibold tracking-tight">
          신축 분양, 취득세는 언제 내느냐
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              납부 시점·기한
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  단계
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  취득세
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  계약금·중도금 납부
                </th>
                <td className="border-border border-b px-3 py-2.5">없음</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  잔금·소유권 이전등기
                </th>
                <td className="border-border border-b px-3 py-2.5">취득일 기준 신고·납부</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  납부 기한
                </th>
                <td className="px-3 py-2.5">취득일로부터 60일 이내(위택스·관할 구청)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          중도에 <strong>분양권을 전매</strong>해 취득하는 경우는 잔금 이전에도 취득세가 발생할 수 있습니다. 시행사
          분양과 전매 분양권은 과세 시점이 다르므로, 계약 형태를 먼저 구분해야 합니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-na600-mistakes">
        <h2 id="guide-na600-mistakes" className="text-foreground text-xl font-semibold tracking-tight">
          6억 신축 분양에서 자주 틀리는 부분
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            <strong>주택 수</strong> — 기존 집 처분 전 잔금·등기를 하면 2주택. 분양권·입주권 보유도 주택 수에
            포함될 수 있습니다.
          </li>
          <li>
            <strong>조정대상지역</strong> — 2주택이면 6억이어도 8% 중과. 지역 확인은{" "}
            <Link href="/guide/second-home-acquisition-tax-surcharge-2026-guide" className="text-primary underline-offset-4 hover:underline">
              2주택자 취득세 중과
            </Link>
            를 참고하세요.
          </li>
          <li>
            <strong>6억 경계</strong> — 옵션·발코니 포함 합계가 6억을 넘으면 세율 구간이 바뀝니다.
          </li>
          <li>
            <strong>잔금 자금</strong> — 취득세 660만 원은 잔금일 별도 준비.{" "}
            <Link href="/guide/home-purchase-additional-costs-guide" className="text-primary underline-offset-4 hover:underline">
              주택 구입 부대비용
            </Link>
            과 함께 보세요.
          </li>
        </ul>
      </section>

      <section className="space-y-4" aria-labelledby="guide-na600-checklist">
        <h2 id="guide-na600-checklist" className="text-foreground text-xl font-semibold tracking-tight">
          잔금 전 체크리스트
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[30rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              확인 항목
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 w-24 font-semibold">
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

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="취득세 계산기 이동"
      >
        <p>
          <Link href="/acquisition-tax-calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            → 분양가·주택 수·면적에 맞는 취득세는 취득세 계산기에서 확인할 수 있습니다.
          </Link>
          {" · "}
          <Link href="/guide/new-construction-apartment-acquisition-tax-guide" className="text-primary font-medium underline-offset-4 hover:underline">
            신축 취득세 허브
          </Link>
        </p>
      </aside>
    </>
  );
}
