import Apply from "util/enums/Apply";
import ApplyDetail from "util/enums/ApplyDetail";

export type UserResult = {
  idx: number;
  name: string;
  email: string;
  firstApplyType: Apply;
  firstApplyDetailType: ApplyDetail;
  finalApplyType: Apply;
  finalApplyDetailType: ApplyDetail;
  isPassedFirstApply: boolean;
  isPassedSecondApply: boolean;
};
