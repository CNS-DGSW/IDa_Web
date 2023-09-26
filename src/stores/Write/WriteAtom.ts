import { atom, selector } from "recoil";
import AuthApi from "assets/api/AuthApi";
import {
  ApplyTypeResponse,
  ParentInfoResponse,
  Response,
  UserInfoResponse,
  SchoolInfoResponse,
  ProfileInfoResponse,
  UploadResponse,
  SelfIntroductionResponse,
  StudyPlanResponse,
  AttendResponse,
  AdditionalResponse,
  VolunteerResponse,
  SchoolResponse,
  GetGradeList,
  GedResponse,
} from "util/types/Response";
import Sex from "util/enums/Sex";
import Relation from "util/enums/Relation";
import Grade from "util/enums/Grade";
import UserApi from "assets/api/UserApi";
import Apply from "util/enums/Apply";
import ApplyDetail from "util/enums/ApplyDetail";
import FreeSemType from "util/types/FreeSem";
import ScoreGrade from "util/types/ScoreGrade";

const userIdx = atom<number | null>({
  key: "userIdx",
  default: null,
});

const page = atom<number>({
  key: "page",
  default: 0,
});

const gradeType = atom<Grade | null>({
  key: "gradeType",
  default: null,
});

const isChanged = atom<boolean>({
  key: "isChanged",
  default: false,
});

const englishScore = atom<number>({
  key: "englishScore",
  default: 0,
});

const koreanScore = atom<number>({
  key: "koreanScore",
  default: 0,
});

const mathScore = atom<number>({
  key: "mathScore",
  default: 0,
});

const otherScore = atom<number>({
  key: "otherScore",
  default: 0,
});

const scienceScore = atom<number>({
  key: "scienceScore",
  default: 0,
});

const socialScore = atom<number>({
  key: "socialScore",
  default: 0,
});

const grades = atom<ScoreGrade[]>({
  key: "grades",
  default: [],
});

const freeSem = atom<FreeSemType>({
  key: "freeSem",
  default: {
    freeSem11: false,
    freeSem12: false,
    freeSem21: false,
    freeSem22: false,
    freeSem31: false,
    freeSem32: false,
  },
});

//학년별 미인정 출석
const absence1 = atom<number>({
  key: "absence1",
  default: 0,
});
const absence2 = atom<number>({
  key: "absence2",
  default: 0,
});
const absence3 = atom<number>({
  key: "absence3",
  default: 0,
});

//학년별 미인정 지각
const lateness1 = atom<number>({
  key: "lateness1",
  default: 0,
});
const lateness2 = atom<number>({
  key: "lateness2",
  default: 0,
});
const lateness3 = atom<number>({
  key: "lateness3",
  default: 0,
});

//학년별 미인정 조퇴
const earlyLeave1 = atom<number>({
  key: "earlyLeave1",
  default: 0,
});
const earlyLeave2 = atom<number>({
  key: "earlyLeave2",
  default: 0,
});
const earlyLeave3 = atom<number>({
  key: "earlyLeave3",
  default: 0,
});

//학년별 미인정 결과
const absenceLecture1 = atom<number>({
  key: "absenceLecture1",
  default: 0,
});
const absenceLecture2 = atom<number>({
  key: "absenceLecture2",
  default: 0,
});
const absenceLecture3 = atom<number>({
  key: "absenceLecture3",
  default: 0,
});

//학기중 학생임원 여부
const leadership11 = atom<boolean>({
  key: "leadership11",
  default: false,
});
const leadership12 = atom<boolean>({
  key: "leadership12",
  default: false,
});
const leadership21 = atom<boolean>({
  key: "leadership21",
  default: false,
});
const leadership22 = atom<boolean>({
  key: "leadership22",
  default: false,
});
const leadership31 = atom<boolean>({
  key: "leadership31",
  default: false,
});
const leadership32 = atom<boolean>({
  key: "leadership32",
  default: false,
});

//모범생 수상 개수
const prize = atom<number>({
  key: "prize",
  default: 0,
});

//학년별 봉사 시간
const volunteer1 = atom<number>({
  key: "volunteer1",
  default: 0,
});
const volunteer2 = atom<number>({
  key: "volunteer2",
  default: 0,
});
const volunteer3 = atom<number>({
  key: "volunteer3",
  default: 0,
});
