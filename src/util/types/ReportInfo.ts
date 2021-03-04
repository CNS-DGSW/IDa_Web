import ApplyDetail from "util/enums/ApplyDetail";

export type Report = {
  applyDetail: string;
  applyDetailType: ApplyDetail;
  daeguGraduatedMen: number;
  daeguGraduatedWomen: number;
  daeguUngraduatedMen: number;
  daeguUngraduatedWomen: number;
  gedMen: number;
  gedWomen: number;
  otherMen: number;
  otherWomen: number;
};
