import { action, observable } from "mobx";
import { autobind } from "core-decorators";
import AuthApi from "assets/api/AuthApi";
import { Response, UserInfoResponse } from "util/types/Response";
import Sex from "util/enums/Sex";
import UserApi from "assets/api/UserApi";

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
}

export default WriteStore;
