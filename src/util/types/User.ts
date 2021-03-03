import Apply from "util/enums/Apply";
import ApplyDetail from "util/enums/ApplyDetail";

export type List = {
  birth: Date;
  cityName: string;
  createdAt: Date;
  email: string;
  idx: number;
  isPrintedApplicationArrived: boolean;
  isSubmit: boolean;
  isWriting: boolean;
  name: string;
  schoolName: string;
  studentTel: string;
};

export type ListPassed = {
  birth: Date;
  cityName: string;
  email: string;
  examCode: string;
  finalApplyDetailType: ApplyDetail;
  finalApplyType: Apply;
  firstApplyDetailType: ApplyDetail;
  firstApplyType: Apply;
  idx: number;
  name: string;
  schoolName: string;
  studentTel: string;
  submitCode: string;
};

export type Rate = {
  applyDetail: string;
  applyDetailType: ApplyDetail | null;
  applyType: Apply | null;
  daeguMen: number;
  daeguWomen: number;
  otherMen: number;
  otherWomen: number;
  personnel: number;
  rate: number;
  totalPeople: number;
};
