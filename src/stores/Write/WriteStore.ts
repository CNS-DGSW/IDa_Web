import { _autoAction, observable } from "mobx";
import { autobind } from "core-decorators";
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

@autobind
class WriteStore {
  //유저의 번호
  @observable userIdx: number | null = null;
  //현재 원서 접수 페이지의 번호
  @observable page: number = 0;
  //졸업 방식 (예정 or 졸업생 or 검정고시)
  @observable gradeType: Grade | null = null;
  //원서 내용이 수정됬는지 여부
  @observable isChanged: boolean = false;

  //영어점수
  @observable englishScore: number = 0;
  //국어점수
  @observable koreanScore: number = 0;
  //수학점수
  @observable mathScore: number = 0;
  //기타 다른 과목 점수
  @observable otherScore: number = 0;
  //과학점수
  @observable scienceScore: number = 0;
  //사회점수
  @observable socialScore: number = 0;
  //점수 배열
  @observable grades: ScoreGrade[] = [];
  //자유학기제 여부
  @observable freeSem: FreeSemType = {
    freeSem11: false,
    freeSem12: false,
    freeSem21: false,
    freeSem22: false,
    freeSem31: false,
    freeSem32: false,
  };

  //학년별 미인정 출석
  @observable absence1: number = 0;
  @observable absence2: number = 0;
  @observable absence3: number = 0;
  //학년별 미인정 지각
  @observable lateness1: number = 0;
  @observable lateness2: number = 0;
  @observable lateness3: number = 0;
  //학년별 미인정 조퇴
  @observable earlyLeave1: number = 0;
  @observable earlyLeave2: number = 0;
  @observable earlyLeave3: number = 0;
  //학년별 미인정 결과
  @observable absenceLecture1: number = 0;
  @observable absenceLecture2: number = 0;
  @observable absenceLecture3: number = 0;

  //학기중 학생임원 여부
  @observable leadership11: boolean = false;
  @observable leadership12: boolean = false;
  @observable leadership21: boolean = false;
  @observable leadership22: boolean = false;
  @observable leadership31: boolean = false;
  @observable leadership32: boolean = false;
  //모범상 수상 개수
  @observable prize: number = 0;

  //학년별 봉사 시간
  @observable volunteer1: number = 0;
  @observable volunteer2: number = 0;
  @observable volunteer3: number = 0;

  //유저번호 설정
  @_autoAction
  handleUserIdx = (userIdx: number | null) => {
    this.userIdx = userIdx;
  };

  //각 과목 점수 설정 (국, 수, 사, 과, 영, 기타)
  @_autoAction
  handleEnglishScore = (englishScore: number) => {
    this.englishScore = englishScore;
  };

  @_autoAction
  handleKoreanScore = (koreanScore: number) => {
    this.koreanScore = koreanScore;
  };

  @_autoAction
  handleMathScore = (mathScore: number) => {
    this.mathScore = mathScore;
  };

  @_autoAction
  handleScienceScore = (scienceScore: number) => {
    this.scienceScore = scienceScore;
  };

  @_autoAction
  handleSocialScore = (socialScore: number) => {
    this.socialScore = socialScore;
  };

  @_autoAction
  handleOtherScore = (otherScore: number) => {
    this.otherScore = otherScore;
  };

  //변경 여부 설정
  @_autoAction
  handleIsChanged = (value: boolean) => {
    this.isChanged = value;
  };

  //페이지 번호 설정
  @_autoAction
  pageHandle = (page: number) => {
    this.page = page;
  };

  //점수 배열 설정
  @_autoAction
  handleGrades = (grades: ScoreGrade[]) => {
    this.grades = grades;
  };

  //자유학기제 여부 설정
  @_autoAction
  handleFreeSem = (freeSem: FreeSemType) => {
    this.freeSem = freeSem;
  };

  //졸업 방식 설정
  @_autoAction
  handleGrade = (gradeType: Grade | null) => {
    this.gradeType = gradeType;
  };

  //학년별 미인정 출석
  @_autoAction
  handleAbsence1 = (absence1: number) => {
    this.absence1 = absence1;
  };

  @_autoAction
  handleAbsence2 = (absence2: number) => {
    this.absence2 = absence2;
  };

  @_autoAction
  handleAbsence3 = (absence3: number) => {
    this.absence3 = absence3;
  };

  //학년별 미인정 지각
  @_autoAction
  handleLateness1 = (lateness1: number) => {
    this.lateness1 = lateness1;
  };

  @_autoAction
  handleLateness2 = (lateness2: number) => {
    this.lateness2 = lateness2;
  };

  @_autoAction
  handleLateness3 = (lateness3: number) => {
    this.lateness3 = lateness3;
  };

  //학년별 미인정 조퇴
  @_autoAction
  handleEarlyLeave1 = (earlyLeave1: number) => {
    this.earlyLeave1 = earlyLeave1;
  };

  @_autoAction
  handleEarlyLeave2 = (earlyLeave2: number) => {
    this.earlyLeave2 = earlyLeave2;
  };

  @_autoAction
  handleEarlyLeave3 = (earlyLeave3: number) => {
    this.earlyLeave3 = earlyLeave3;
  };

  //학년별 미인정 결과
  @_autoAction
  handleAbsenceLecture1 = (absenceLecture1: number) => {
    this.absenceLecture1 = absenceLecture1;
  };

  @_autoAction
  handleAbsenceLecture2 = (absenceLecture2: number) => {
    this.absenceLecture2 = absenceLecture2;
  };

  @_autoAction
  handleAbsenceLecture3 = (absenceLecture3: number) => {
    this.absenceLecture3 = absenceLecture3;
  };

  //학기별 학생임원 여부 설정
  @_autoAction
  handleLeadership11 = (leadership11: boolean) => {
    this.leadership11 = leadership11;
  };

  @_autoAction
  handleLeadership12 = (leadership12: boolean) => {
    this.leadership12 = leadership12;
  };

  @_autoAction
  handleLeadership21 = (leadership21: boolean) => {
    this.leadership21 = leadership21;
  };

  @_autoAction
  handleLeadership22 = (leadership22: boolean) => {
    this.leadership22 = leadership22;
  };

  @_autoAction
  handleLeadership31 = (leadership31: boolean) => {
    this.leadership31 = leadership31;
  };

  @_autoAction
  handleLeadership32 = (leadership32: boolean) => {
    this.leadership32 = leadership32;
  };

  //모범상 개수 설정
  @_autoAction
  handlePrize = (prize: number) => {
    this.prize = prize;
  };

  //학년별 봉사 시간 설정
  @_autoAction
  handleVolunteer1 = (volunteer1: number) => {
    this.volunteer1 = volunteer1;
  };

  @_autoAction
  handleVolunteer2 = (volunteer2: number) => {
    this.volunteer2 = volunteer2;
  };

  @_autoAction
  handleVolunteer3 = (volunteer3: number) => {
    this.volunteer3 = volunteer3;
  };

  //API 사용
  //점수 서버에서 받아오기
  @_autoAction
  getGed = async (): Promise<GedResponse> => {
    const response: GedResponse = await UserApi.GetGed(this.userIdx);

    return response;
  };

  //점수 설정
  @_autoAction
  editGed = async (): Promise<Response> => {
    const response: Response = await UserApi.EditGed(
      this.englishScore,
      this.koreanScore,
      this.mathScore,
      this.otherScore,
      this.scienceScore,
      this.socialScore,
      this.userIdx
    );

    return response;
  };

  //유저 번호에 해방하는 정보 가져오기
  @_autoAction
  getStudentInfo = async (
    userIdx?: number | null
  ): Promise<UserInfoResponse> => {
    const response: UserInfoResponse = await AuthApi.GetInfo(userIdx);

    return response;
  };

  //유저 정보 설정
  @_autoAction
  editStudentInfo = async (
    name: string,
    birth: string,
    sex: Sex,
    studentTel: string
  ): Promise<Response> => {
    const response: Response = await UserApi.EditUserInfo(
      name,
      birth,
      sex,
      studentTel,
      this.userIdx
    );

    return response;
  };

  //프로필 이미지 설정
  @_autoAction
  editProfileImage = async (ProfileImgage: string): Promise<Response> => {
    const response: Response = await UserApi.EditProfileImage(
      ProfileImgage,
      this.userIdx
    );

    return response;
  };

  //프로필 이미지 받기
  @_autoAction
  getProfileImage = async (): Promise<ProfileInfoResponse> => {
    const response: ProfileInfoResponse = await UserApi.GetProfileImage(
      this.userIdx
    );

    return response;
  };

  //입학 전형 받아오기
  @_autoAction
  getApplyType = async (): Promise<ApplyTypeResponse> => {
    const response: ApplyTypeResponse = await UserApi.GetApplyType(
      this.userIdx
    );

    return response;
  };

  //학부모 정보 받아오기
  @_autoAction
  getParentInfo = async (): Promise<ParentInfoResponse> => {
    const response: ParentInfoResponse = await UserApi.GetParentInfo(
      this.userIdx
    );

    return response;
  };

  //입학 전형 설정
  @_autoAction
  editApplyType = async (
    applyType: Apply,
    applyDetailType: ApplyDetail,
    verteransCity?: string,
    verteransNumber?: string
  ): Promise<Response> => {
    const response: Response = await UserApi.EditApplyType(
      applyType,
      applyDetailType,
      verteransCity,
      verteransNumber,
      this.userIdx
    );

    return response;
  };

  //학부모 정보 설정
  @_autoAction
  editParentInfo = async (
    address: string,
    parentName: string,
    parentRelation: Relation,
    parentBirth: string,
    parentTel: string,
    detailAddress: string,
    postcode: string
  ): Promise<Response> => {
    const response: Response = await UserApi.EditParentInfo(
      address,
      parentName,
      parentRelation,
      parentBirth,
      parentTel,
      detailAddress,
      postcode,
      this.userIdx
    );

    return response;
  };

  //학교 정보 받기
  @_autoAction
  getSchoolInfo = async (): Promise<SchoolInfoResponse> => {
    const response: SchoolInfoResponse = await UserApi.GetSchoolInfo(
      this.userIdx
    );

    return response;
  };

  //학교 정보 설정
  @_autoAction
  editSchoolInfo = async (
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
      this.userIdx
    );

    return response;
  };

  //프로필 이미지 업로드
  @_autoAction
  upload = async (fileName: File | Blob): Promise<UploadResponse> => {
    const response: UploadResponse = await UserApi.upload(fileName);

    return response;
  };

  //자기소개서 설정
  @_autoAction
  editSelfIntroduce = async (selfIntroduction: string): Promise<Response> => {
    const response: Response = await UserApi.EditSelfIntroduce(
      selfIntroduction,
      this.userIdx
    );

    return response;
  };

  //자기소개서 받기
  @_autoAction
  getSelfIntroduce = async (): Promise<SelfIntroductionResponse> => {
    const response: SelfIntroductionResponse = await UserApi.GetSelfIntroduce(
      this.userIdx
    );

    return response;
  };

  //학업계획서 설정
  @_autoAction
  editStudyPlan = async (studyPlan: string): Promise<Response> => {
    const response: Response = await UserApi.EditStudyPlan(
      studyPlan,
      this.userIdx
    );

    return response;
  };

  //학업계획서 받기
  @_autoAction
  getStudyPlan = async (): Promise<StudyPlanResponse> => {
    const response: StudyPlanResponse = await UserApi.GetStudyPlan(
      this.userIdx
    );

    return response;
  };

  //유저별 점수 및 자유학기제 설정
  @_autoAction
  editGrade = async (): Promise<Response> => {
    const response: Response = await UserApi.EditGrade(
      this.freeSem,
      this.grades,
      this.userIdx
    );

    return response;
  };

  //유저별 출결상황 설정
  @_autoAction
  editAttend = async (): Promise<Response> => {
    const response: Response = await UserApi.EditAttend(
      this.absence1,
      this.absence2,
      this.absence3,
      this.lateness1,
      this.lateness2,
      this.lateness3,
      this.earlyLeave1,
      this.earlyLeave2,
      this.earlyLeave3,
      this.absenceLecture1,
      this.absenceLecture2,
      this.absenceLecture3,
      this.userIdx
    );

    return response;
  };

  //유저별 가산점 설정
  @_autoAction
  editAdditional = async (): Promise<Response> => {
    const response: Response = await UserApi.EditAdditional(
      this.leadership11,
      this.leadership12,
      this.leadership21,
      this.leadership22,
      this.leadership31,
      this.leadership32,
      this.prize,
      this.userIdx
    );

    return response;
  };

  //유저별 봉사활동 점수
  @_autoAction
  editVolunteer = async (): Promise<Response> => {
    const response: Response = await UserApi.EditVolunteer(
      this.volunteer1,
      this.volunteer2,
      this.volunteer3,
      this.userIdx
    );

    return response;
  };

  //출결상황 받기
  @_autoAction
  getAttend = async (): Promise<AttendResponse> => {
    const response: AttendResponse = await UserApi.GetAttend(this.userIdx);

    return response;
  };

  //가산점 받기
  @_autoAction
  getAdditional = async (): Promise<AdditionalResponse> => {
    const response: AdditionalResponse = await UserApi.GetAdditional(
      this.userIdx
    );

    return response;
  };

  //봉사활동 받기
  @_autoAction
  getVolunteer = async (): Promise<VolunteerResponse> => {
    const response: VolunteerResponse = await UserApi.GetVolunteer(
      this.userIdx
    );

    return response;
  };

  //학교 검색
  @_autoAction
  searchSchool = async (
    schoolName: string,
    city: string
  ): Promise<SchoolResponse> => {
    const response: SchoolResponse = await UserApi.SearchSchool(
      schoolName,
      city
    );
    console.log(response)
    return response;
  };

  //자유학기제 여부 및 점수 받기
  @_autoAction
  getGradeList = async (): Promise<GetGradeList> => {
    const response: GetGradeList = await UserApi.GetGrade(this.userIdx);

    return response;
  };
}

export default WriteStore;
