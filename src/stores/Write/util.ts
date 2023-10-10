import AuthApi from "assets/api/AuthApi";
import UserApi from "assets/api/UserApi";
import Grade from "util/enums/Grade";
import {
  SchoolResponse,
  UploadResponse,
  UserInfoResponse,
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
import AttendType from "util/types/Attend";
import volunteerType from "util/types/Volunteer";
import additionalType from "util/types/Additional";
import GedScoreType from "util/types/GedScore";
import Relation from "util/enums/Relation";
import Sex from "util/enums/Sex";
import Apply from "util/enums/Apply";
import ScoreGrade from "util/types/ScoreGrade";
import ApplyDetail from "util/enums/ApplyDetail";
import FreeSemType from "util/types/FreeSem";

const getStudentInfo = async (
 {
  userIdx
 }:{ userIdx: number | null}
): Promise<UserInfoResponse> => {
  const response: UserInfoResponse = await AuthApi.GetInfo(userIdx);
  return response;
};

const upload = async (fileName: File | Blob): Promise<UploadResponse> => {
  const response: UploadResponse = await UserApi.upload(fileName);
  return response;
};

const searchSchool = async (
  schoolName: string,
  city: string
): Promise<SchoolResponse> => {
  const response: SchoolResponse = await UserApi.SearchSchool(schoolName, city);
  // console.log(response);
  return response;
};
const editSchoolInfo = async ({
  userIdx,
  cityLocation,
  cityName,
  gradeType,
  graduatedDate,
  schoolCode,
  schoolName,
  schoolTel,
  teacherName,
  teacherTel,
}: {
  userIdx: number | null;
  cityLocation: string;
  cityName: string;
  gradeType: Grade;
  graduatedDate: string;
  schoolCode: string;
  schoolName: string;
  schoolTel: string;
  teacherName: string;
  teacherTel: string;
}): Promise<Response> => {
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
};

const editGed = async ({
  userIdx,
  gedScore,
}: {
  userIdx: number | null;
  gedScore: GedScoreType;
}) => {
  /*
        const englishScore] = useRecoilState(englishScoreAtom);
        const koreanScore] = useRecoilState(koreanScoreAtom);
        const mathScore] = useRecoilState(mathScoreAtom);
        const otherScore] = useRecoilState(otherScoreAtom);
        const scienceScore] = useRecoilState(scienceScoreAtom);
        const socialScore] = useRecoilState(socialScoreAtom); */

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
};

const getGed = async ({
  userIdx,
}: {
  userIdx: number | null;
}): Promise<GedResponse> => {
  const response: GedResponse = await UserApi.GetGed(userIdx);

  return response;
};

const getApplyType = async ({
  userIdx,
}: {
  userIdx: number | null;
}): Promise<ApplyTypeResponse> => {
  const response: ApplyTypeResponse = await UserApi.GetApplyType(userIdx);

  return response;
};

const getParentInfo = async ({
  userIdx,
}: {
  userIdx: number | null;
}): Promise<ParentInfoResponse> => {
  const response: ParentInfoResponse = await UserApi.GetParentInfo(userIdx);

  return response;
};

const editApplyType = async ({
  userIdx,
  applyType,
  applyDetailType,
  verteransCity,
  verteransNumber,
}: {
  userIdx: number | null;
  applyType: Apply;
  applyDetailType: ApplyDetail;
  verteransCity?: string;
  verteransNumber?: string;
}): Promise<Response> => {
  const response: Response = await UserApi.EditApplyType(
    applyType,
    applyDetailType,
    verteransCity,
    verteransNumber,
    userIdx
  );

  return response;
};

const editParentInfo = async ({
  userIdx,
  address,
  parentName,
  parentRelation,
  parentBirth,
  parentTel,
  detailAddress,
  postCode,
}: {
  userIdx: number | null;
  address: string;
  parentName: string;
  parentRelation: Relation;
  parentBirth: string;
  parentTel: string;
  detailAddress: string;
  postCode: string;
}): Promise<Response> => {
  const response: Response = await UserApi.EditParentInfo(
    address,
    parentName,
    parentRelation,
    parentBirth,
    parentTel,
    detailAddress,
    postCode,
    userIdx
  );

  return response;
};

const getSchoolInfo = async ({
  userIdx,
}: {
  userIdx: number | null;
}): Promise<SchoolInfoResponse> => {
  const response: SchoolInfoResponse = await UserApi.GetSchoolInfo(userIdx);

  return response;
};

const editSelfIntroduce = async ({
  userIdx,
  selfIntroduce,
}: {
  userIdx: number | null;
  selfIntroduce: string;
}): Promise<Response> => {
  const response: Response = await UserApi.EditSelfIntroduce(
    selfIntroduce,
    userIdx
  );

  return response;
};

const getProfileImage = async ({
  userIdx,
}: {
  userIdx: number | null;
}): Promise<ProfileInfoResponse> => {
  const response: ProfileInfoResponse = await UserApi.GetProfileImage(userIdx);

  // console.log(response)

  return response;
};

const editStudentInfo = async ({
  userIdx,
  name,
  birth,
  sex,
  studentTel,
}: {
  name: string;
  birth: string;
  sex: Sex;
  studentTel: string;
  userIdx: number | null;
}): Promise<Response> => {
  const response: Response = await UserApi.EditUserInfo(
    name,
    birth,
    sex,
    studentTel,
    userIdx
  );

  return response;
};
const getSelfIntroduce = async ({
  userIdx,
}: {
  userIdx: number | null;
}): Promise<SelfIntroductionResponse> => {
  const response: SelfIntroductionResponse = await UserApi.GetSelfIntroduce(
    userIdx
  );

  return response;
};

const editStudyPlan = async ({
  userIdx,
  studyPlan,
}: {
  userIdx: number | null;
  studyPlan: string;
}): Promise<Response> => {
  const response: Response = await UserApi.EditStudyPlan(studyPlan, userIdx);

  return response;
};

const getStudyPlan = async ({
  userIdx,
}: {
  userIdx: number | null;
}): Promise<StudyPlanResponse> => {
  const response: StudyPlanResponse = await UserApi.GetStudyPlan(userIdx);

  return response;
};

const editGrade = async ({
  userIdx,
  grades,
  freeSem,
}: {
  userIdx: number | null;
  grades: ScoreGrade[];
  freeSem: FreeSemType;
}): Promise<Response> => {
  // const grades] = useRecoilState(gradesAtom);
  // const freeSem] = useRecoilState(freeSemAtom);

  const response: Response = await UserApi.EditGrade(freeSem, grades, userIdx);

  return response;
};

const editAttend = async ({
  userIdx,
  attend,
}: {
  userIdx: number | null;
  attend: AttendType;
}): Promise<Response> => {
  /*
        const absence1] = useRecoilState(absence1Atom);
        const absence2] = useRecoilState(absence2Atom);
        const absence3] = useRecoilState(absence3Atom);
        const lateness1] = useRecoilState(lateness1Atom);
        const lateness2] = useRecoilState(lateness2Atom);
        const lateness3] = useRecoilState(lateness3Atom);
        const earlyLeave1] = useRecoilState(earlyLeave1Atom);
        const earlyLeave2] = useRecoilState(earlyLeave2Atom);
        const earlyLeave3] = useRecoilState(earlyLeave3Atom);
        const absenceLecture1] = useRecoilState(absenceLecture1Atom);
        const absenceLecture2] = useRecoilState(absenceLecture2Atom);
        const absenceLecture3] = useRecoilState(absenceLecture3Atom);
        */
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
};

const editAdditional = async ({
  userIdx,
  additional,
}: {
  userIdx: number | null;
  additional: additionalType;
}): Promise<Response> => {
  /* const leadership11] = useRecoilState(leadership11Atom);
        const leadership12] = useRecoilState(leadership12Atom);
        const leadership21] = useRecoilState(leadership21Atom);
        const leadership22] = useRecoilState(leadership22Atom);
        const leadership31] = useRecoilState(leadership31Atom);
        const leadership32] = useRecoilState(leadership32Atom);
        const prize] = useRecoilState(prizeAtom); */
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
};

const editVolunteer = async ({
  volunteer,
  userIdx,
}: {
  volunteer: volunteerType;
  userIdx: number | null;
}): Promise<Response> => {
  /* const volunteer1] = useRecoilState(volunteer1Atom);
        const volunteer2] = useRecoilState(volunteer2Atom);
        const volunteer3] = useRecoilState(volunteer3Atom); */
  const response: Response = await UserApi.EditVolunteer(
    volunteer,
    userIdx
    /* volunteer1,
          volunteer2,
          volunteer3, */
  );

  return response;
};

const getAttend = async ({
  userIdx,
}: {
  userIdx: number | null;
}): Promise<AttendResponse> => {
  const response: AttendResponse = await UserApi.GetAttend(userIdx);

  return response;
};

const getAdditional = async ({
  userIdx,
}: {
  userIdx: number | null;
}): Promise<AdditionalResponse> => {
  const response: AdditionalResponse = await UserApi.GetAdditional(userIdx);

  return response;
};

const getVolunteer = async ({
  userIdx,
}: {
  userIdx: number | null;
}): Promise<VolunteerResponse> => {
  const response: VolunteerResponse = await UserApi.GetVolunteer(userIdx);

  return response;
};

const getGradeList = async ({
  userIdx,
}: {
  userIdx: number | null;
}): Promise<GetGradeList> => {
  const response: GetGradeList = await UserApi.GetGrade(userIdx);

  return response;
};

const editProfileImage = async ({
  userIdx,
  ProfileImgage,
}: {
  userIdx: number | null;
  ProfileImgage: string;
}): Promise<Response> => {
  const response: Response = await UserApi.EditProfileImage(
    ProfileImgage,
    userIdx
  );
  return response;
};

export {
  getStudyPlan,
  editVolunteer,
  editGrade,
  editAdditional,
  editAttend,
  getAttend,
  getAdditional,
  getVolunteer,
  getGradeList,
  editProfileImage,
  getStudentInfo,
  upload,
  searchSchool,
  editSchoolInfo,
  editGed,
  getApplyType,
  editStudyPlan,
  getParentInfo,
  editParentInfo,
  getGed,
  editStudentInfo,
  editApplyType,
  getSelfIntroduce,
  getProfileImage,
  editSelfIntroduce,
  getSchoolInfo,
};
