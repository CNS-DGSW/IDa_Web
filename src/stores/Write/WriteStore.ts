import { action, observable } from "mobx";
import { autobind } from "core-decorators";
import AuthApi from "assets/api/AuthApi";
import {
  ApplyTypeResponse,
  ParentInfoResponse,
  Response,
  UserInfoResponse,
  SchoolInfoResponse,
} from "util/types/Response";
import Sex from "util/enums/Sex";
import Relation from "util/enums/Relation";
import Grade from "util/enums/Grade";
import UserApi from "assets/api/UserApi";
import Apply from "util/enums/Apply";
import ApplyDetail from "util/enums/ApplyDetail";

@autobind
class WriteStore {
  @observable page: number = 0;
  @observable gradeType: Grade | null = null;

  @action
  pageHandle = (page: number) => {
    this.page = page;
  };

  @action
  handleGrade = (gradeType: Grade | null) => {
    this.gradeType = gradeType;
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
      const response: ParentInfoResponse = await UserApi.getParentInfo();

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
      const response: SchoolInfoResponse = await UserApi.getSchoolInfo();

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
      const response: Response = await UserApi.editSchoolInfo(
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
}

export default WriteStore;
