import { action, observable } from "mobx";
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
  @observable page: number = 0;
  @observable gradeType: Grade | null = null;

  @observable isChanged: boolean = false;

  @observable englishScore: number = 0;
  @observable koreanScore: number = 0;
  @observable mathScore: number = 0;
  @observable otherScore: number = 0;
  @observable scienceScore: number = 0;
  @observable socialScore: number = 0;

  @observable grades: ScoreGrade[] = [];
  @observable freeSem: FreeSemType = {
    freeSem11: false,
    freeSem12: false,
    freeSem21: false,
    freeSem22: false,
    freeSem31: false,
    freeSem32: false,
  };

  @observable absence1: number = 0;
  @observable absence2: number = 0;
  @observable absence3: number = 0;
  @observable lateness1: number = 0;
  @observable lateness2: number = 0;
  @observable lateness3: number = 0;
  @observable earlyLeave1: number = 0;
  @observable earlyLeave2: number = 0;
  @observable earlyLeave3: number = 0;
  @observable absenceLecture1: number = 0;
  @observable absenceLecture2: number = 0;
  @observable absenceLecture3: number = 0;

  @observable leadership11: boolean = false;
  @observable leadership12: boolean = false;
  @observable leadership21: boolean = false;
  @observable leadership22: boolean = false;
  @observable leadership31: boolean = false;
  @observable leadership32: boolean = false;
  @observable prize: number = 0;

  @observable volunteer1: number = 0;
  @observable volunteer2: number = 0;
  @observable volunteer3: number = 0;

  @action
  handleEnglishScore = (englishScore: number) => {
    this.englishScore = englishScore;
  };

  @action
  handleKoreanScore = (koreanScore: number) => {
    this.koreanScore = koreanScore;
  };

  @action
  handleMathScore = (mathScore: number) => {
    this.mathScore = mathScore;
  };

  @action
  handleScienceScore = (scienceScore: number) => {
    this.scienceScore = scienceScore;
  };

  @action
  handleSocialScore = (socialScore: number) => {
    this.socialScore = socialScore;
  };

  @action
  handleOtherScore = (otherScore: number) => {
    this.otherScore = otherScore;
  };

  @action
  handleIsChanged = (value: boolean) => {
    this.isChanged = value;
  };

  @action
  pageHandle = (page: number) => {
    this.page = page;
  };

  @action
  handleGrades = (grades: ScoreGrade[]) => {
    this.grades = grades;
  };

  @action
  handleFreeSem = (freeSem: FreeSemType) => {
    this.freeSem = freeSem;
  };

  @action
  handleGrade = (gradeType: Grade | null) => {
    this.gradeType = gradeType;
  };

  @action
  handleAbsence1 = (absence1: number) => {
    this.absence1 = absence1;
  };

  @action
  handleAbsence2 = (absence2: number) => {
    this.absence2 = absence2;
  };

  @action
  handleAbsence3 = (absence3: number) => {
    this.absence3 = absence3;
  };

  @action
  handleLateness1 = (lateness1: number) => {
    this.lateness1 = lateness1;
  };

  @action
  handleLateness2 = (lateness2: number) => {
    this.lateness2 = lateness2;
  };

  @action
  handleLateness3 = (lateness3: number) => {
    this.lateness3 = lateness3;
  };

  @action
  handleEarlyLeave1 = (earlyLeave1: number) => {
    this.earlyLeave1 = earlyLeave1;
  };

  @action
  handleEarlyLeave2 = (earlyLeave2: number) => {
    this.earlyLeave2 = earlyLeave2;
  };

  @action
  handleEarlyLeave3 = (earlyLeave3: number) => {
    this.earlyLeave3 = earlyLeave3;
  };

  @action
  handleAbsenceLecture1 = (absenceLecture1: number) => {
    this.absenceLecture1 = absenceLecture1;
  };

  @action
  handleAbsenceLecture2 = (absenceLecture2: number) => {
    this.absenceLecture2 = absenceLecture2;
  };

  @action
  handleAbsenceLecture3 = (absenceLecture3: number) => {
    this.absenceLecture3 = absenceLecture3;
  };

  @action
  handleLeadership11 = (leadership11: boolean) => {
    this.leadership11 = leadership11;
  };

  @action
  handleLeadership12 = (leadership12: boolean) => {
    this.leadership12 = leadership12;
  };

  @action
  handleLeadership21 = (leadership21: boolean) => {
    this.leadership21 = leadership21;
  };

  @action
  handleLeadership22 = (leadership22: boolean) => {
    this.leadership22 = leadership22;
  };

  @action
  handleLeadership31 = (leadership31: boolean) => {
    this.leadership31 = leadership31;
  };

  @action
  handleLeadership32 = (leadership32: boolean) => {
    this.leadership32 = leadership32;
  };

  @action
  handlePrize = (prize: number) => {
    this.prize = prize;
  };

  @action
  handleVolunteer1 = (volunteer1: number) => {
    this.volunteer1 = volunteer1;
  };

  @action
  handleVolunteer2 = (volunteer2: number) => {
    this.volunteer2 = volunteer2;
  };

  @action
  handleVolunteer3 = (volunteer3: number) => {
    this.volunteer3 = volunteer3;
  };

  @action
  getGed = async (): Promise<GedResponse> => {
    try {
      const response: GedResponse = await UserApi.GetGed();

      return new Promise((resolve: (response: GedResponse) => void, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
  };

  @action
  editGed = async (): Promise<Response> => {
    try {
      const response: Response = await UserApi.EditGed(
        this.englishScore,
        this.koreanScore,
        this.mathScore,
        this.otherScore,
        this.scienceScore,
        this.socialScore
      );

      return new Promise((resolve: (response: Response) => void, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
  };

  @action
  getStudentInfo = async (): Promise<UserInfoResponse> => {
    try {
      const response: UserInfoResponse = await AuthApi.GetInfo();

      return new Promise((resolve: (response: UserInfoResponse) => void, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
  };

  @action
  editStudentInfo = async (name: string, birth: string, sex: Sex, studentTel: string): Promise<Response> => {
    try {
      const response: Response = await UserApi.EditUserInfo(name, birth, sex, studentTel);

      return new Promise((resolve: (response: Response) => void, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
  };

  @action
  editProfileImage = async (ProfileImgage: string): Promise<Response> => {
    try {
      const response: Response = await UserApi.EditProfileImage(ProfileImgage);

      return new Promise((resolve: (response: Response) => void, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
  };

  @action
  getProfileImage = async (): Promise<ProfileInfoResponse> => {
    try {
      const response: ProfileInfoResponse = await UserApi.GetProfileImage();

      return new Promise((resolve: (response: ProfileInfoResponse) => void, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
  };

  @action
  getApplyType = async (): Promise<ApplyTypeResponse> => {
    try {
      const response: ApplyTypeResponse = await UserApi.GetApplyType();

      return new Promise((resolve: (response: ApplyTypeResponse) => void, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
  };

  @action
  getParentInfo = async (): Promise<ParentInfoResponse> => {
    try {
      const response: ParentInfoResponse = await UserApi.GetParentInfo();

      return new Promise((resolve: (response: ParentInfoResponse) => void, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
  };

  @action
  editApplyType = async (
    applyType: Apply,
    applyDetailType: ApplyDetail,
    verteransCity?: string,
    verteransNumber?: string
  ): Promise<Response> => {
    try {
      const response: Response = await UserApi.EditApplyType(
        applyType,
        applyDetailType,
        verteransCity,
        verteransNumber
      );

      return new Promise((resolve: (response: Response) => void, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
  };

  @action
  editParentInfo = async (
    address: string,
    parentName: string,
    parentRelation: Relation,
    parentTel: string,
    postcode: string
  ): Promise<Response> => {
    try {
      const response: Response = await UserApi.EditParentInfo(
        address,
        parentName,
        parentRelation,
        parentTel,
        postcode
      );

      return new Promise((resolve: (response: Response) => void, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
  };

  @action
  getSchoolInfo = async (): Promise<SchoolInfoResponse> => {
    try {
      const response: SchoolInfoResponse = await UserApi.GetSchoolInfo();

      return new Promise((resolve: (response: SchoolInfoResponse) => void, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
  };

  @action
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
    try {
      const response: Response = await UserApi.EditSchoolInfo(
        cityLocation,
        cityName,
        gradeType,
        graduatedDate,
        schoolCode,
        schoolName,
        schoolTel,
        teacherName,
        teacherTel
      );

      return new Promise((resolve: (response: Response) => void, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
  };

  @action
  upload = async (fileName: File | Blob): Promise<UploadResponse> => {
    try {
      const response: UploadResponse = await UserApi.upload(fileName);

      return new Promise((resolve: (response: UploadResponse) => void, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
  };

  @action
  editSelfIntroduce = async (selfIntroduction: string): Promise<Response> => {
    try {
      const response: Response = await UserApi.EditSelfIntroduce(selfIntroduction);

      return new Promise((resolve: (response: Response) => void, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
  };

  @action
  getSelfIntroduce = async (): Promise<SelfIntroductionResponse> => {
    try {
      const response: SelfIntroductionResponse = await UserApi.GetSelfIntroduce();

      return new Promise((resolve: (response: SelfIntroductionResponse) => void, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
  };

  @action
  editStudyPlan = async (studyPlan: string): Promise<Response> => {
    try {
      const response: Response = await UserApi.EditStudyPlan(studyPlan);

      return new Promise((resolve: (response: Response) => void, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
  };

  @action
  getStudyPlan = async (): Promise<StudyPlanResponse> => {
    try {
      const response: StudyPlanResponse = await UserApi.GetStudyPlan();

      return new Promise((resolve: (response: StudyPlanResponse) => void, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
  };

  @action
  editGrade = async (): Promise<Response> => {
    try {
      const response: Response = await UserApi.EditGrade(this.freeSem, this.grades);

      return new Promise((resolve: (response: Response) => void, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
  };

  @action
  editAttend = async (): Promise<Response> => {
    try {
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
        this.absenceLecture3
      );

      return new Promise((resolve: (response: Response) => void, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
  };

  @action
  editAdditional = async (): Promise<Response> => {
    try {
      const response: Response = await UserApi.EditAdditional(
        this.leadership11,
        this.leadership12,
        this.leadership21,
        this.leadership22,
        this.leadership31,
        this.leadership32,
        this.prize
      );

      return new Promise((resolve: (response: Response) => void, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
  };

  @action
  editVolunteer = async (): Promise<Response> => {
    try {
      const response: Response = await UserApi.EditVolunteer(
        this.volunteer1,
        this.volunteer2,
        this.volunteer3
      );

      console.log(this.volunteer1);

      return new Promise((resolve: (response: Response) => void, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
  };

  @action
  getAttend = async (): Promise<AttendResponse> => {
    try {
      const response: AttendResponse = await UserApi.GetAttend();

      return new Promise((resolve: (response: AttendResponse) => void, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
  };

  @action
  getAdditional = async (): Promise<AdditionalResponse> => {
    try {
      const response: AdditionalResponse = await UserApi.GetAdditional();

      return new Promise((resolve: (response: AdditionalResponse) => void, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
  };

  @action
  getVolunteer = async (): Promise<VolunteerResponse> => {
    try {
      const response: VolunteerResponse = await UserApi.GetAttend();

      return new Promise((resolve: (response: VolunteerResponse) => void, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
  };

  @action
  searchSchool = async (schoolName: string): Promise<SchoolResponse> => {
    try {
      const response: SchoolResponse = await UserApi.SearchSchool(schoolName);

      return new Promise((resolve: (response: SchoolResponse) => void, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
  };

  @action
  getGradeList = async (): Promise<GetGradeList> => {
    try {
      const response: GetGradeList = await UserApi.GetGrade();

      return new Promise((resolve: (response: GetGradeList) => void, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
  };
}

export default WriteStore;
