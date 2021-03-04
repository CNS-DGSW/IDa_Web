import { action, observable } from "mobx";
import { autobind } from "core-decorators";
import AdminApi from "../../assets/api/AdminApi";
import {
  AllUserRatio,
  ReceiptResponse,
  ReportInfo,
  SchoolCityResponse,
  UserList,
  UserListPassed,
  UserRate,
} from "util/types/Response";
import ExcelApi from "assets/api/ExcelApi";
import StatusApi from "assets/api/StatusApi";

@autobind
class AdminStore {
  @observable isFinal: boolean = false;

  @action
  getReceiptSatus = async (): Promise<ReceiptResponse> => {
    try {
      const response: ReceiptResponse = await AdminApi.GetReceiptStatus();

      return new Promise(
        (resolve: (response: ReceiptResponse) => void, reject) => {
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
  getUserSchoolCity = async (): Promise<SchoolCityResponse> => {
    try {
      const response: SchoolCityResponse = await AdminApi.GetUserSchoolCity();

      return new Promise(
        (resolve: (response: SchoolCityResponse) => void, reject) => {
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
  getReceiptSatusExcel = async (): Promise<any> => {
    try {
      const response: any = await ExcelApi.GetReceiptStatus();

      return new Promise((resolve: (response: any) => void, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
  };

  @action
  getUserSchoolCityExcel = async (): Promise<any> => {
    try {
      const response: any = await ExcelApi.GetUserSchoolCity();

      return new Promise((resolve: (response: any) => void, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
  };

  @action
  handleCancelSubmit = async (userIdx: number): Promise<Response> => {
    try {
      const response: Response = await StatusApi.cancelSubmit(userIdx);

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
  getReportInfo = async (): Promise<ReportInfo> => {
    try {
      const response: ReportInfo = await AdminApi.GetReportInfo();

      return new Promise((resolve: (response: ReportInfo) => void, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
  };

  @action
  getUserListPassed = async (): Promise<UserListPassed> => {
    try {
      const response: UserListPassed = await AdminApi.GetUserListPassed();

      return new Promise(
        (resolve: (response: UserListPassed) => void, reject) => {
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
  getUserRate = async (isFinal?: boolean): Promise<UserRate> => {
    try {
      const response: UserRate = await AdminApi.GetUserRate(isFinal);

      return new Promise((resolve: (response: UserRate) => void, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
  };

  @action
  getUserList = async (): Promise<UserList> => {
    try {
      const response: UserList = await AdminApi.GetUserList();

      return new Promise((resolve: (response: UserList) => void, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
  };

  @action
  getAllUserRatio = async (): Promise<AllUserRatio> => {
    try {
      const response: AllUserRatio = await AdminApi.GetAllUserRadio();

      return new Promise(
        (resolve: (response: AllUserRatio) => void, reject) => {
          resolve(response);
        }
      );
    } catch (error) {
      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
  };
}

export default AdminStore;
