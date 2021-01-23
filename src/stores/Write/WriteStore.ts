import { action, observable } from "mobx";
import { autobind } from "core-decorators";
import AuthApi from "assets/api/AuthApi";
import { ApplyTypeResponse, Response, UserInfoResponse } from "util/types/Response";
import Sex from "util/enums/Sex";
import UserApi from "assets/api/UserApi";
import Apply from "util/enums/Apply";
import ApplyDetail from "util/enums/ApplyDetail";

@autobind
class WriteStore {
  @observable page: number = 0;

  @action
  pageHandle = (page: number) => {
    this.page = page;
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
}

export default WriteStore;
