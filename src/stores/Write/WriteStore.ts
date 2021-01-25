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
  uploadResponse,
  selfIntroductionResponse,
  studyPlanResponse,
  attendResponse,
  additionalResponse,
  volunteerResponse,
  schoolResponse,
} from "util/types/Response";
import Sex from "util/enums/Sex";
import Relation from "util/enums/Relation";
import Grade from "util/enums/Grade";
import UserApi from "assets/api/UserApi";
import Apply from "util/enums/Apply";
import ApplyDetail from "util/enums/ApplyDetail";
import FreeSumType from "util/types/FreeSum";

@autobind
class WriteStore {
  @observable page: number = 0;
  @observable gradeType: Grade | null = null;

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
  pageHandle = (page: number) => {
    this.page = page;
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
  editStudentInfo = async (
    name: string,
    birth: string,
    sex: Sex,
    studentTel: string
  ): Promise<Response> => {
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
  upload = async (fileName: File | Blob): Promise<uploadResponse> => {
    try {
      const response: uploadResponse = await UserApi.upload(fileName);

      return new Promise((resolve: (response: uploadResponse) => void, reject) => {
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
  getSelfIntroduce = async (): Promise<selfIntroductionResponse> => {
    try {
      const response: selfIntroductionResponse = await UserApi.GetSelfIntroduce();

      return new Promise(
        (resolve: (response: selfIntroductionResponse) => void, reject) => {
          resolve(response);
        }
      );
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
  getStudyPlan = async (): Promise<studyPlanResponse> => {
    try {
      const response: studyPlanResponse = await UserApi.GetStudyPlan();

      return new Promise((resolve: (response: studyPlanResponse) => void, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
  };

  @action
  editGrade = async (freeSum: FreeSumType, grade: Grade[]): Promise<Response> => {
    try {
      const response: Response = await UserApi.EditGrade(freeSum, grade);

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
  editAttend = async (
    absence1: number,
    absence2: number,
    absence3: number,
    lateness1: number,
    lateness2: number,
    lateness3: number,
    earlyLeave1: number,
    earlyLeave2: number,
    earlyLeave3: number,
    absenceLecture1: number,
    absenceLecture2: number,
    absenceLecture3: number
  ): Promise<Response> => {
    try {
      const response: Response = await UserApi.EditAttend(
        absence1,
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
        absenceLecture3
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
  editAdditional = async (
    leadership11: boolean,
    leadership12: boolean,
    leadership21: boolean,
    leadership22: boolean,
    leadership31: boolean,
    leadership32: boolean,
    prize: number
  ): Promise<Response> => {
    try {
      const response: Response = await UserApi.EditAdditional(
        leadership11,
        leadership12,
        leadership21,
        leadership22,
        leadership31,
        leadership32,
        prize
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
  editVolunteer = async (
    volunteer1: number,
    volunteer2: number,
    volunteer3: number
  ): Promise<Response> => {
    try {
      const response: Response = await UserApi.EditVolunteer(
        volunteer1,
        volunteer2,
        volunteer3
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
  getAttend = async (): Promise<attendResponse> => {
    try {
      const response: attendResponse = await UserApi.GetAttend();

      return new Promise((resolve: (response: attendResponse) => void, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
  };

  @action
  getAdditional = async (): Promise<additionalResponse> => {
    try {
      const response: additionalResponse = await UserApi.GetAttend();

      return new Promise((resolve: (response: additionalResponse) => void, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
  };

  @action
  getVolunteer = async (): Promise<volunteerResponse> => {
    try {
      const response: volunteerResponse = await UserApi.GetAttend();

      return new Promise((resolve: (response: volunteerResponse) => void, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
  };

  @action
  searchSchool = async (schoolName: string): Promise<schoolResponse> => {
    try {
      const response: schoolResponse = await UserApi.SearchSchool(schoolName);

      return new Promise((resolve: (response: schoolResponse) => void, reject) => {
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
