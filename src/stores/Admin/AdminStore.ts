import { action } from "mobx";
import { autobind } from "core-decorators";
import AdminApi from "../../assets/api/AdminApi";
import { ReceiptResponse, SchoolCityResponse } from "util/types/Response";
import ExcelApi from "assets/api/ExcelApi";
import StatusApi from "assets/api/StatusApi";

@autobind
class AdminStore {
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
}

export default AdminStore;
