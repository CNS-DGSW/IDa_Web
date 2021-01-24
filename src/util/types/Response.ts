import Apply from "util/enums/Apply";
import ApplyDetail from "util/enums/ApplyDetail";
import Grade from "util/enums/Grade";
import Relation from "util/enums/Relation";
import Sex from "util/enums/Sex";

export type Response = {
  status: number;
  message: string;
};

export interface LoginResponse extends Response {
  data: {
    accessToken: string;
    refreshToken: string;
  };
}
export interface RefreshTokenResponse extends Response {
  data: {
    accessToken: string;
  };
}

export interface UserInfoResponse extends Response {
  data: {
    birth: Date;
    email: string;
    name: string;
    profileImage: string;
    sex: Sex;
    studentTel: string;
  };
}

export interface ApplyTypeResponse extends Response {
  data: {
    applyType: Apply;
    applyDetailType: ApplyDetail;
    verteransCity?: string;
    verteransNumber?: string;
  };
}

export interface ParentInfoResponse extends Response {
  data: {
    address: string;
    parentName: string;
    parentRelation: Relation;
    parentTel: string;
    postCode: string;
  };
}

export interface SchoolInfoResponse extends Response {
  data: {
    cityLocation: string;
    cityName: string;
    gradeType: Grade;
    graduatedDate: string;
    schoolCode: string;
    schoolName: string;
    schoolTel: string;
    teacherName: string;
    teacherTel: string;
  };
}

export interface ProfileInfoResponse extends Response {
  data: {
    profileImage: string;
  };
}

export interface uploadResponse extends Response {
  data: {
    fileName: string;
  };
}

export interface selfIntroductionResponse extends Response {
  data: {
    selfIntroduction: string;
  };
}

export interface studyPlanResponse extends Response {
  data: {
    studyPlan: string;
  };
}
