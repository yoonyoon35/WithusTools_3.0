/**
 * 본문·목록 블록이 `blockCount`개(인덱스 0 … blockCount-1)일 때,
 * **해당 인덱스의 블록 바로 다음**에 인라인 광고를 넣을 인덱스 목록을 반환합니다.
 */
export function leaderAdIndicesAfterWhichToInsert(blockCount: number): number[] {
  if (blockCount <= 0) return [];
  if (blockCount === 1) return [0];

  const indices: number[] = [];
  for (let i = 1; i < blockCount; i += 2) {
    indices.push(i);
  }
  return indices;
}
