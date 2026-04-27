import Link from "next/link";

export const jeonseRenewalBrokerageFeeGuideMeta = {
  slug: "jeonse-renewal-brokerage-fee-guide",
  title: "전세 재계약 시 중개수수료 내야 하나",
  description:
    "합의 재계약·묵시적 갱신·계약갱신청구권별 수수료·계약서 필요 여부, 유의사항, 중도 해지 시 부담, 신고·확정일자 체크리스트를 표로 정리했습니다.",
  updated: "2026년 4월 28일",
} as const;

export function JeonseRenewalBrokerageFeeGuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-jrbf-intro">
        <p>
          전세 재계약 방식에 따라 중개수수료 발생 여부가 달라집니다. 재계약 유형은 크게 합의 재계약·묵시적 갱신·계약갱신청구권
          행사 세 가지로 나뉩니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-jrbf-table-fee">
        <h2 id="guide-jrbf-table-fee" className="text-foreground text-xl font-semibold tracking-tight">
          재계약 유형별 중개수수료 발생 여부
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              재계약 유형별 중개수수료·계약서 재작성
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  재계약 유형
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  중개수수료
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  계약서 재작성
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  합의 재계약 (조건 변경)
                </th>
                <td className="border-border border-b px-3 py-2.5">중개사 이용 시 발생</td>
                <td className="border-border border-b px-3 py-2.5">필요</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  합의 재계약 (조건 동일)
                </th>
                <td className="border-border border-b px-3 py-2.5">중개사 이용 시 발생</td>
                <td className="border-border border-b px-3 py-2.5">불필요</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  묵시적 갱신
                </th>
                <td className="border-border border-b px-3 py-2.5">발생하지 않음</td>
                <td className="border-border border-b px-3 py-2.5">불필요</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  계약갱신청구권 행사
                </th>
                <td className="px-3 py-2.5">발생하지 않음</td>
                <td className="px-3 py-2.5">불필요</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3" aria-labelledby="guide-jrbf-agreed">
        <h2 id="guide-jrbf-agreed" className="text-foreground text-xl font-semibold tracking-tight">
          ① 합의 재계약
        </h2>
        <p>
          임대인과 임차인이 보증금·계약 기간 등 조건을 새로 협의해 계약서를 작성하는 방식입니다. 공인중개사를 통해 진행하면
          중개수수료가 발생합니다. 임대인과 임차인이 직접 재계약서를 작성하면 중개수수료는 0원입니다. 중개수수료는 의무가 아니라
          중개사를 선택했을 때만 발생하는 비용입니다.
        </p>
        <p>
          보증금이 변경된 경우 확정일자를 새로 받아야 하며, 보증금이나 임대료를 올리거나 계약 조건을 바꾸는 경우 새 계약서를
          작성해야 하지만 집주인과 세입자가 직접 작성해도 됩니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-jrbf-tacit">
        <h2 id="guide-jrbf-tacit" className="text-foreground text-xl font-semibold tracking-tight">
          ② 묵시적 갱신
        </h2>
        <p>
          임대인과 임차인 모두 계약 만료 2개월 전까지 별도 의사 표시를 하지 않으면 기존 조건 그대로 2년 자동 연장됩니다.
          임대인이 임대차 계약기간이 끝나기 2개월 전까지 갱신을 거절한다고 통지하지 않았고, 임차인 역시 계약종료를 통지하지
          않았다면 바로 전 계약과 동일한 조건으로 전세계약이 갱신됩니다.
        </p>
        <p>
          묵시적 갱신은 새로운 계약이 아니므로 중개수수료가 발생하지 않습니다. 계약서 재작성도 불필요하며 기존 확정일자도
          유효합니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-jrbf-renewal-right">
        <h2 id="guide-jrbf-renewal-right" className="text-foreground text-xl font-semibold tracking-tight">
          ③ 계약갱신청구권 행사
        </h2>
        <p>
          계약갱신청구권은 1회에 한해 행사 가능하며 2년이 보장됩니다. 세입자가 계약갱신청구권을 사용하면 집주인은 특별한 사유가
          없는 한 거절할 수 없으며, 보증금은 5% 이내로만 인상할 수 있습니다.
        </p>
        <p>계약갱신청구권 행사는 새로운 중개 계약이 아니므로 중개수수료가 발생하지 않습니다.</p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-jrbf-caution">
        <h2 id="guide-jrbf-caution" className="text-foreground text-xl font-semibold tracking-tight">
          재계약 유형 선택 시 유의사항
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              유형별 비교
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  합의 재계약
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  묵시적 갱신
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  계약갱신청구권
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  보증금 인상 상한
                </th>
                <td className="border-border border-b px-3 py-2.5">없음</td>
                <td className="border-border border-b px-3 py-2.5">없음 (동일 조건 연장)</td>
                <td className="border-border border-b px-3 py-2.5">5% 이내</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  중도 해지
                </th>
                <td className="border-border border-b px-3 py-2.5">계약 기간 준수 원칙</td>
                <td className="border-border border-b px-3 py-2.5">임대인 통보 후 3개월</td>
                <td className="border-border border-b px-3 py-2.5">임대인 통보 후 3개월</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  중개수수료
                </th>
                <td className="border-border border-b px-3 py-2.5">중개사 이용 시 발생</td>
                <td className="border-border border-b px-3 py-2.5">없음</td>
                <td className="border-border border-b px-3 py-2.5">없음</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  계약서 작성
                </th>
                <td className="border-border border-b px-3 py-2.5">조건 변경 시 필요</td>
                <td className="border-border border-b px-3 py-2.5">불필요</td>
                <td className="border-border border-b px-3 py-2.5">불필요 (증액 시 확정일자만)</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  행사 횟수 제한
                </th>
                <td className="px-3 py-2.5">없음</td>
                <td className="px-3 py-2.5">없음</td>
                <td className="px-3 py-2.5">1회</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-jrbf-early-terminate">
        <h2 id="guide-jrbf-early-terminate" className="text-foreground text-xl font-semibold tracking-tight">
          중도 해지 시 중개수수료 부담 주체
        </h2>
        <p>재계약 후 임차인이 중도에 나가는 경우 중개수수료 부담 주체가 달라집니다.</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              중도 해지 시 수수료 부담
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  상황
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  중개수수료 부담
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  합의 재계약 후 기간 내 중도 해지
                </th>
                <td className="border-border border-b px-3 py-2.5">임차인이 임대인 수수료 부담하는 관행</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  묵시적 갱신 중 중도 해지
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  임대인과 새로운 임차인이 부담하며 기존 임차인은 부담하지 않음
                </td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  계약갱신청구권 행사 후 중도 해지
                </th>
                <td className="px-3 py-2.5">임대인과 새로운 임차인이 부담하며 기존 임차인은 부담하지 않음</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-jrbf-checklist">
        <h2 id="guide-jrbf-checklist" className="text-foreground text-xl font-semibold tracking-tight">
          전세 재계약 시 필수 확인 사항
        </h2>
        <p>
          보증금이 변경되는 경우 임대차 신고를 계약일로부터 30일 이내에 해야 합니다. 신고 기한을 초과하면 과태료가 부과됩니다.
          확정일자는 증액된 보증금 부분에 대해서만 새로 받아야 하며, 기존 확정일자를 취소하거나 재발급받으면 기존 보증금이
          후순위로 밀릴 수 있으므로 주의해야 합니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              필수 확인 체크리스트
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  확인 항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  내용
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  임대차 신고
                </th>
                <td className="border-border border-b px-3 py-2.5">보증금 변경 시 계약일로부터 30일 이내 신고</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  확정일자
                </th>
                <td className="border-border border-b px-3 py-2.5">증액분에 대해서만 새로 취득</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  전세보증보험
                </th>
                <td className="border-border border-b px-3 py-2.5">보증금 변경 시 가입 조건 재확인</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  등기부등본
                </th>
                <td className="px-3 py-2.5">재계약 전 근저당 변동 여부 확인</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          ※ 중개수수료 발생 여부는 재계약 방식에 따라 다릅니다. 합의 재계약이라도 임대인·임차인이 직접 계약서를 작성하면
          중개수수료 없이 진행할 수 있습니다.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="중개보수 계산기 이동"
      >
        <p>
          <Link href="/brokerage-fee-calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            → 전세 보증금에 따른 중개수수료는 중개보수 계산기에서 확인할 수 있습니다.
          </Link>
        </p>
      </aside>
    </>
  );
}
