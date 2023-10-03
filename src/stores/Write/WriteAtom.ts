import UserApi from "assets/api/UserApi";
import { atom, selector, useRecoilValue } from "recoil";
import Score from "util/enums/Score";
import Apply from "util/enums/Apply";
import ApplyDetail from "util/enums/ApplyDetail";
import Grade from "util/enums/Grade";
import Relation from "util/enums/Relation";
import Sex from "util/enums/Sex";
import FreeSemType from "util/types/FreeSem";
import {
  AdditionalResponse,
  ApplyTypeResponse,
  AttendResponse,
  GedResponse,
  GetGradeList,
  ParentInfoResponse,
  ProfileInfoResponse,
  SchoolInfoResponse,
  SelfIntroductionResponse,
  StudyPlanResponse,
  VolunteerResponse,
} from "util/types/Response";
import ScoreGrade from "util/types/ScoreGrade";
import AttendType from "util/types/Attend";
import volunteerType from "util/types/Volunteer";
import additionalType from "util/types/Additional";
import GedScoreType from "util/types/GedScore";

const userIdxAtom = atom<number | null>({
  key: "userIdx",
  default: null,
});

const pageAtom = atom<number>({
  key: "page",
  default: 0,
});

const gradeTypeAtom = atom<Grade | null>({
  key: "gradeType",
  default: null,
});

const isChangedAtom = atom<boolean>({
  key: "isChanged",
  default: false,
});

const englishScoreAtom = atom<number>({
  key: "englishScore",
  default: 0,
});

const koreanScoreAtom = atom<number>({
  key: "koreanScore",
  default: 0,
});

const mathScoreAtom = atom<number>({
  key: "mathScore",
  default: 0,
});

const otherScoreAtom = atom<number>({
  key: "otherScore",
  default: 0,
});

const scienceScoreAtom = atom<number>({
  key: "scienceScore",
  default: 0,
});

const socialScoreAtom = atom<number>({
  key: "socialScore",
  default: 0,
});

const gradesAtom = atom<ScoreGrade[]>({
  key: "grades",
  default: [{
    score11: Score.NONE,
    score12: Score.NONE,
    score21: Score.NONE,
    score22: Score.NONE,
    score31: Score.NONE,
    score32: Score.NONE,
    subjectName: "",
  }],
});

const freeSemAtom = atom<FreeSemType>({
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
const absence1Atom = atom<number>({
  key: "absence1",
  default: 0,
});
const absence2Atom = atom<number>({
  key: "absence2",
  default: 0,
});
const absence3Atom = atom<number>({
  key: "absence3",
  default: 0,
});

//학년별 미인정 지각
const lateness1Atom = atom<number>({
  key: "lateness1",
  default: 0,
});
const lateness2Atom = atom<number>({
  key: "lateness2",
  default: 0,
});
const lateness3Atom = atom<number>({
  key: "lateness3",
  default: 0,
});

//학년별 미인정 조퇴
const earlyLeave1Atom = atom<number>({
  key: "earlyLeave1",
  default: 0,
});
const earlyLeave2Atom = atom<number>({
  key: "earlyLeave2",
  default: 0,
});
const earlyLeave3Atom = atom<number>({
  key: "earlyLeave3",
  default: 0,
});

//학년별 미인정 결과
const absenceLecture1Atom = atom<number>({
  key: "absenceLecture1",
  default: 0,
});
const absenceLecture2Atom = atom<number>({
  key: "absenceLecture2",
  default: 0,
});
const absenceLecture3Atom = atom<number>({
  key: "absenceLecture3",
  default: 0,
});

//학기중 학생임원 여부
const leadership11Atom = atom<boolean>({
  key: "leadership11",
  default: false,
});
const leadership12Atom = atom<boolean>({
  key: "leadership12",
  default: false,
});
const leadership21Atom = atom<boolean>({
  key: "leadership21",
  default: false,
});
const leadership22Atom = atom<boolean>({
  key: "leadership22",
  default: false,
});
const leadership31Atom = atom<boolean>({
  key: "leadership31",
  default: false,
});
const leadership32Atom = atom<boolean>({
  key: "leadership32",
  default: false,
});

//모범생 수상 개수
const prizeAtom = atom<number>({
  key: "prize",
  default: 0,
});

//학년별 봉사 시간
const volunteer1Atom = atom<number>({
  key: "volunteer1",
  default: 0,
});
const volunteer2Atom = atom<number>({
  key: "volunteer2",
  default: 0,
});
const volunteer3Atom = atom<number>({
  key: "volunteer3",
  default: 0,
});

const editGed = selector({
  key: "editGed",
  get:
    ({ get }) =>
    async (
      gedScore:GedScoreType
    ) => {
      /*
      const englishScore = get(englishScoreAtom);
      const koreanScore = get(koreanScoreAtom);
      const mathScore = get(mathScoreAtom);
      const otherScore = get(otherScoreAtom);
      const scienceScore = get(scienceScoreAtom);
      const socialScore = get(socialScoreAtom); */
      const userIdx = get(userIdxAtom);

      const response: Response = await UserApi.EditGed(
        gedScore,
        userIdx 
        /* englishScore,
        koreanScore,
        mathScore,
        otherScore,
        scienceScore,
        socialScore,
        */
      );
      return response;
    },
});

const getGed = selector({
  key: "getGed",
  get:
    ({ get }) =>
    async (): Promise<GedResponse> => {
      const userIdx = get(userIdxAtom);
      const response: GedResponse = await UserApi.GetGed(userIdx);

      return response;
    },
});

const getApplyType = selector({
  key: "getApplyType",
  get:
    ({ get }) =>
    async (): Promise<ApplyTypeResponse> => {
      const userIdx = get(userIdxAtom);
      const response: ApplyTypeResponse = await UserApi.GetApplyType(userIdx);

      return response;
    },
});

const getParentInfo = selector({
  key: "getParentInfo",
  get:
    ({ get }) =>
    async (): Promise<ParentInfoResponse> => {
      const userIdx = get(userIdxAtom);
      const response: ParentInfoResponse = await UserApi.GetParentInfo(userIdx);

      return response;
    },
});

const editApplyType = selector({
  key: "editApplyType",
  get:
    ({ get }) =>
    async (
      applyType: Apply,
      applyDetailType: ApplyDetail,
      verteransCity?: string,
      verteransNumber?: string
    ): Promise<Response> => {
      const userIdx = get(userIdxAtom);
      const response: Response = await UserApi.EditApplyType(
        applyType,
        applyDetailType,
        verteransCity,
        verteransNumber,
        userIdx
      );

      return response;
    },
});

const editParentInfo = selector({
  key: "editParentInfo",
  get:
    ({ get }) =>
    async (
      address: string,
      parentName: string,
      parentRelation: Relation,
      parentBirth: string,
      parentTel: string,
      detailAddress: string,
      postcode: string
    ): Promise<Response> => {
      const userIdx = get(userIdxAtom);
      const response: Response = await UserApi.EditParentInfo(
        address,
        parentName,
        parentRelation,
        parentBirth,
        parentTel,
        detailAddress,
        postcode,
        userIdx
      );

      return response;
    },
});

const getSchoolInfo = selector({
  key: "getSchoolInfo",
  get:
    ({ get }) =>
    async (): Promise<SchoolInfoResponse> => {
      const userIdx = get(userIdxAtom);
      const response: SchoolInfoResponse = await UserApi.GetSchoolInfo(userIdx);

      return response;
    },
});

const editSchoolInfo = selector({
  key: "editSchoolInfo",
  get:
    ({ get }) =>
    async (
      cityLocation: string,
      cityName: string,
      gradeType: Grade,
      graduatedDate: string,
      schoolCode: string,
      schoolName: string,
      schoolTel: string,
      teacherName: string,
      teacherTel: string
    ): Promise<Response> => {
      const userIdx = get(userIdxAtom);
      const response: Response = await UserApi.EditSchoolInfo(
        cityLocation,
        cityName,
        gradeType,
        graduatedDate,
        schoolCode,
        schoolName,
        schoolTel,
        teacherName,
        teacherTel,
        userIdx
      );
      return response;
    },
});

const upload = selector({
  key: "upload",
  get:
    ({ get }) =>
    async (selfIntroduction: string): Promise<Response> => {
      const userIdx = get(userIdxAtom);
      const response: Response = await UserApi.EditSelfIntroduce(
        selfIntroduction,
        userIdx
      );

      return response;
    },
});

const editSelfIntroduce = selector({
  key: "editSelfIntroduce",
  get:
    ({ get }) =>
    async (selfIntroduction: string): Promise<Response> => {
      const userIdx = get(userIdxAtom);
      const response: Response = await UserApi.EditSelfIntroduce(
        selfIntroduction,
        userIdx
      );

      return response;
    },
});

const getProfileImage = selector({
  key: "getProfileImage",
  get:
    ({ get }) =>
    async (): Promise<ProfileInfoResponse> => {
      const userIdx = get(userIdxAtom);
      const response: ProfileInfoResponse = await UserApi.GetProfileImage(
        userIdx
      );

      console.log(response)

      return response;
    },
});

const editStudentInfo = selector({
  key: "editStudentInfo",
  get:
    ({ get }) =>
    async (
      name: string,
      birth: string,
      sex: Sex,
      studentTel: string
    ): Promise<Response> => {
      const userIdx = get(userIdxAtom);
      const response: Response = await UserApi.EditUserInfo(
        name,
        birth,
        sex,
        studentTel,
        userIdx
      );

      return response;
    },
});

const getSelfIntroduce = selector({
  key: "getSelfIntroduce",
  get:
    ({ get }) =>
    async (): Promise<SelfIntroductionResponse> => {
      const userIdx = get(userIdxAtom);
      const response: SelfIntroductionResponse = await UserApi.GetSelfIntroduce(
        userIdx
      );

      return response;
    },
});

const editStudyPlan = selector({
  key: "editStudyPlan",
  get:
    ({ get }) =>
    async (studyPlan: string): Promise<Response> => {
      const userIdx = get(userIdxAtom);
      const response: Response = await UserApi.EditStudyPlan(
        studyPlan,
        userIdx
      );

      return response;
    },
});

const getStudyPlan = selector({
  key: "getStudyPlan",
  get:
    ({ get }) =>
    async (): Promise<StudyPlanResponse> => {
      const userIdx = get(userIdxAtom);
      const response: StudyPlanResponse = await UserApi.GetStudyPlan(userIdx);

      return response;
    },
});

const editGrade = selector({
  key: "editGrade",
  get:
    ({ get }) =>
    async (
      grades:ScoreGrade[],
      freeSem:FreeSemType
    ): Promise<Response> => {
      // const grades = get(gradesAtom);
      // const freeSem = get(freeSemAtom);
      
      const userIdx = get(userIdxAtom);
      const response: Response = await UserApi.EditGrade(
        freeSem,
        grades,
        userIdx
      );

      return response;
    },
});

const editAttend = selector({
  key: "editAttend",
  get:
    ({ get }) =>
    async (
      attend : AttendType
    ): Promise<Response> => {
      /*
      const absence1 = get(absence1Atom);
      const absence2 = get(absence2Atom);
      const absence3 = get(absence3Atom);
      const lateness1 = get(lateness1Atom);
      const lateness2 = get(lateness2Atom);
      const lateness3 = get(lateness3Atom);
      const earlyLeave1 = get(earlyLeave1Atom);
      const earlyLeave2 = get(earlyLeave2Atom);
      const earlyLeave3 = get(earlyLeave3Atom);
      const absenceLecture1 = get(absenceLecture1Atom);
      const absenceLecture2 = get(absenceLecture2Atom);
      const absenceLecture3 = get(absenceLecture3Atom);
      */
      const userIdx = get(userIdxAtom);
      const response: Response = await UserApi.EditAttend(
        /* absence1,
        absence2,
        absence3,
        lateness1,
        lateness2,
        lateness3,
        earlyLeave1,
        earlyLeave2,
        earlyLeave3,
        absenceLecture1,
        absenceLecture2,
        absenceLecture3, */
        attend,
        userIdx
      );

      return response;
    },
});

const editAdditional = selector({
  key: "editAdditional",
  get:
    ({ get }) =>
    async (
      additional:additionalType
    ): Promise<Response> => {
      /* const leadership11 = get(leadership11Atom);
      const leadership12 = get(leadership12Atom);
      const leadership21 = get(leadership21Atom);
      const leadership22 = get(leadership22Atom);
      const leadership31 = get(leadership31Atom);
      const leadership32 = get(leadership32Atom);
      const prize = get(prizeAtom); */
      const userIdx = get(userIdxAtom);
      const response: Response = await UserApi.EditAdditional(
        additional,
        userIdx
        /* leadership11,
        leadership12,
        leadership21,
        leadership22,
        leadership31,
        leadership32,
        prize, */
      );

      return response;
    },
});

const editVolunteer = selector({
  key: "editVolunteer",
  get:
    ({ get }) =>
    async (
      volunteer : volunteerType
    ): Promise<Response> => {
      /* const volunteer1 = get(volunteer1Atom);
      const volunteer2 = get(volunteer2Atom);
      const volunteer3 = get(volunteer3Atom); */
      const userIdx = get(userIdxAtom);
      const response: Response = await UserApi.EditVolunteer(
        volunteer,
        userIdx
        /* volunteer1,
        volunteer2,
        volunteer3, */
      );

      return response;
    },
});

const getAttend = selector({
  key: "getAttend",
  get:
    ({ get }) =>
    async (): Promise<AttendResponse> => {
      const userIdx = get(userIdxAtom);
      const response: AttendResponse = await UserApi.GetAttend(userIdx);

      return response;
    },
});

const getAdditional = selector({
  key: "getAdditional",
  get:
    ({ get }) =>
    async (): Promise<AdditionalResponse> => {
      const userIdx = get(userIdxAtom);
      const response: AdditionalResponse = await UserApi.GetAdditional(userIdx);

      return response;
    },
});

const getVolunteer = selector({
  key: "getVolunteer",
  get:
    ({ get }) =>
    async (): Promise<VolunteerResponse> => {
      const userIdx = get(userIdxAtom);
      const response: VolunteerResponse = await UserApi.GetVolunteer(userIdx);

      return response;
    },
});

const getGradeList = selector({
  key: "getGradeList",
  get:
    ({ get }) =>
    async (): Promise<GetGradeList> => {
      const userIdx = get(userIdxAtom);
      const response: GetGradeList = await UserApi.GetGrade(userIdx);

      return response;
    },
});
const editProfileImage = selector({
  key: "editProfileImage",
  get:
    ({ get }) =>
    async (ProfileImgage: string): Promise<Response> => {
      const userIdx = get(userIdxAtom);
      const response: Response = await UserApi.EditProfileImage(
        ProfileImgage,
        userIdx
      );
      return response;
    },
});

export {
  userIdxAtom,
  pageAtom,
  editProfileImage,
  gradeTypeAtom,
  isChangedAtom,
  englishScoreAtom,
  koreanScoreAtom,
  mathScoreAtom,
  otherScoreAtom,
  scienceScoreAtom,
  socialScoreAtom,
  gradesAtom,
  freeSemAtom,
  absence1Atom,
  absence2Atom,
  absence3Atom,
  absenceLecture1Atom,
  absenceLecture2Atom,
  absenceLecture3Atom,
  lateness1Atom,
  lateness2Atom,
  lateness3Atom,
  earlyLeave1Atom,
  earlyLeave2Atom,
  earlyLeave3Atom,
  leadership11Atom,
  leadership12Atom,
  leadership21Atom,
  leadership22Atom,
  leadership31Atom,
  leadership32Atom,
  prizeAtom,
  volunteer1Atom,
  volunteer2Atom,
  volunteer3Atom,
  editGed,
  getGed,
  getParentInfo,
  editApplyType,
  editParentInfo,
  getSchoolInfo,
  editSchoolInfo,
  upload,
  getApplyType,
  editSelfIntroduce,
  getProfileImage,
  editStudentInfo,
  getSelfIntroduce,
  editStudyPlan,
  getStudyPlan,
  editGrade,
  editAttend,
  editAdditional,
  editVolunteer,
  getAttend,
  getAdditional,
  getVolunteer,
  getGradeList,
};
