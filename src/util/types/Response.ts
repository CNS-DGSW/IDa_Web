import Apply from "util/enums/Apply";
import ApplyDetail from "util/enums/ApplyDetail";
import Grade from "util/enums/Grade";
import Relation from "util/enums/Relation";
import Sex from "util/enums/Sex";
import { PostType } from "./PostType";
import Schools from "util/types/Schools";

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
    isAdmin: boolean;
  };
}

export interface GetPostsResponse extends Response {
  data: {
    posts: PostType[];
  };
}

export interface GetPostResponse extends Response {
  data: {
    post: PostType;
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

export interface gedResponse extends Response {
  data: {
    englishScore: number;
    koreanScore: number;
    mathScore: number;
    otherScore: number;
    scienceScore: number;
    socialScore: number;
  };
}

export interface attendResponse extends Response {
  data: {
    absence1: number;
    absence2: number;
    absence3: number;
    lateness1: number;
    lateness2: number;
    lateness3: number;
    earlyLeave1: number;
    earlyLeave2: number;
    earlyLeave3: number;
    absenceLecture1: number;
    absenceLecture2: number;
    absenceLecture3: number;
  };
}

export interface additionalResponse extends Response {
  data: {
    leadership11: boolean;
    leadership12: boolean;
    leadership21: boolean;
    leadership22: boolean;
    leadership31: boolean;
    leadership32: boolean;
    prize: number;
  };
}

export interface volunteerResponse extends Response {
  data: {
    volunteer1: number;
    volunteer2: number;
    volunteer3: number;
  };
}

export interface schoolResponse extends Response {
  data: {
    schools: Schools[];
  };
}
