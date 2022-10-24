enum Apply {
  // 일반 전형
  COMMON = "COMMON",
  // 특별 전형
  SPECIAL = "SPECIAL",
  // 특례 입학
  OTHER = "OTHER",
  // 국가 보훈 대상자
  NATIONAL = "NATIONAL",
}

export function findApplyByString(apply: Apply) {
  if (apply === Apply.COMMON) return "일반 전형";
  if (apply === Apply.SPECIAL) return "특별 전형 전형";
  if (apply === Apply.OTHER) return "특례 입학";
  if (apply === Apply.NATIONAL) return "국가보훈대상자";
}
export default Apply;
