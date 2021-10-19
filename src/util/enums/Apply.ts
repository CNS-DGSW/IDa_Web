enum Apply {
  // 일반 전형
  COMMON = "COMMON",
  // 특별 전형
  SPECIAL = "SPECIAL",
  // 특례 입학
  OTHER = "OTHER",
}

export function findApplyByString(apply: Apply) {
  if (apply === Apply.COMMON) return "일반 전형";
  if (apply === Apply.SPECIAL) return "특별 전형 전형";
  if (apply === Apply.OTHER) return "특례 입학";
}
export default Apply;
