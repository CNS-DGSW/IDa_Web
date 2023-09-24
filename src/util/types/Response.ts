import Apply from "util/enums/Apply";
import ApplyDetail from "util/enums/ApplyDetail";
import Grade from "util/enums/Grade";
import Relation from "util/enums/Relation";
import Sex from "util/enums/Sex";
import FreeSemType from "./FreeSem";
import { PostType } from "./PostType";
import Schools from "util/types/Schools";
import ScoreGrade from "./ScoreGrade";
import { Receipt } from "./ReceiptType";
import { SchoolCity } from "./SchoolCity";
import { CityRatio, DateRatio, SchoolRatio } from "./UserRatio";
import { List, ListPassed, Rate } from "./UserList";
import { Report } from "./ReportInfo";
import InterViewCategory from "util/enums/InterViewCategory";
import { UserResult as UserResultType } from "util/types/UserResult";

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
    detailAddress: string;
    parentBirth: Date;
    parentTel: string;
    postCode: string;
  };
}

export interface SchoolInfoResponse extends Response {
  data: {
    location: string;
    cityName: string;
    gradeType: Grade;
    graduatedDate: string;
    code: string;
    name: string;
    schoolTel: string;
    teacherName: string;
    teacherTel: string;
  };
}

export interface ProfileInfoResponse extends Response {
  data: {
    profileImage: string | null;
  };
}

export interface UploadResponse extends Response {
  data: {
    fileName: string;
  };
}

export interface SelfIntroductionResponse extends Response {
  data: {
    selfIntroduction: string;
  };
}

export interface StudyPlanResponse extends Response {
  data: {
    studyPlan: string;
  };
}

export interface GedResponse extends Response {
  data: {
    score: {
      englishScore: number;
      koreanScore: number;
      mathScore: number;
      otherScore: number;
      scienceScore: number;
      socialScore: number;
    };
  };
}

export interface GetGradeList extends Response {
  data: {
    freeSem: FreeSemType;
    grade: ScoreGrade[];
  };
}

export interface GetScoreResponse extends Response {
  data: {
    absence: number;
    additional: number;
    grade1: number;
    grade2: number;
    isGed: boolean;
    totalScore1: number;
    totalScore2: number;
    volunteer: number;
  };
}

export interface AttendResponse extends Response {
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

export interface AdditionalResponse extends Response {
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

export interface VolunteerResponse extends Response {
  data: {
    volunteer1: number;
    volunteer2: number;
    volunteer3: number;
  };
}

export interface SchoolResponse extends Response {
  data: {
    schools: Schools[];
  };
}

export interface ReceiptResponse extends Response {
  data: Receipt[];
}

export interface SchoolCityResponse extends Response {
  data: SchoolCity[];
}

export interface ResultStatusResponse extends Response {
  data: {
    examCode: string;
    isPrintedApplicationArrived: boolean;
    applicationChecked: boolean | string;
    isPassedFirstApply: boolean | null;
    firstApplyDetailType: ApplyDetail | null;
    firstApplyType: Apply | null;
    isSubmit: boolean;
    submitCode: string;
    canAccess: boolean;
  };
}

export interface FinalStatusResponse extends Response {
  data: {
    // finalApplyDetailType: Apply;
    // finalApplyType: Apply;
    // isPassed: true | null;
    isPassed?: boolean | null;
    examCode?: number | null;
    name?: string | null;
    gradeType?: string | null;
    sex?: string | null;
    birth?: string | null;
    area?: string | null;
    school?: string | null;
    finalApplyType?: string | null;
    finalApplyDetailType?: string | null;
  };
}
export interface AllUserRatio extends Response {
  data: {
    userCityRatio: CityRatio[];
    userDateRatio: DateRatio[];
    userSchoolRatio: SchoolRatio[];
  };
}

export interface UserList extends Response {
  data: List[];
}

export interface UserListPassed extends Response {
  data: ListPassed[];
}
export interface ViewFirstStudent extends Response {
  data: boolean;
}
export interface ViewSecondStudent extends Response {
  data: boolean;
}

export interface UserRate extends Response {
  data: Rate[];
}

export interface ReportInfo extends Response {
  data: Report[];
}

export interface UserReulstListResponse extends Response {
  data: UserResultType[];
}

export interface SecondScoreResponse extends Response {
  data: [
    {
      computingScore: number;
      studyScore: number;
      absenceScore: number;
      additionalScore: number;
      applyDetailType: Apply | null;
      applyType: Apply | null;
      cityName: string;
      codingTestScore: number;
      cooperationScore: number;
      examCode: number;
      finalApplyDetailType: Apply | null;
      finalApplyType: Apply | null;
      gradeScore: number;
      gradeType: Grade | null;
      interviewScore: number;
      jobAptitudeScore: number;
      swAbilityScore: number;
      schoolName: string
      totalInterviewScore: number;
      totalScore: number;
      userIdx: number;
      userName: string;
      volunteerScore: number;
      isPassed: boolean | null;
    }
  ];
}

export interface TeamResponse extends Response {
  data: number[];
}

export interface InterViewScoreResponse extends Response {
  data: [
    {
      calcScore: number;
      evaluationFactor1: number;
      evaluationFactor2: number;
      evaluationFactor3: number;
      evaluationFactor4: number;
      evaluationFactor5: number;
      evaluationFactor6: number | null;
      evaluationFactor7: number | null;
      evaluationFactor8: number | null;
      evaluationFactor9: number | null;
      evaluationFactor10: number | null;
      totalScore: number;
      examCode: number;
      isAttend: boolean;
      interviewCategory: InterViewCategory;
      userName: string;
    }
  ];
}
