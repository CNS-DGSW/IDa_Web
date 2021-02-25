import { action } from "mobx";
import { autobind } from "core-decorators";
import AdminApi from "../../assets/api/AdminApi";
import { ReceiptResponse, SchoolCityResponse } from "util/types/Response";

@autobind
class AdminStore {
  @action
  getReceiptSatus = async (): Promise<ReceiptResponse> => {
    try {
      const response: ReceiptResponse = await AdminApi.GetReceiptStatus();

      return new Promise((resolve: (response: ReceiptResponse) => void, reject) => {
        resolve(response);
      });
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

      return new Promise((resolve: (response: SchoolCityResponse) => void, reject) => {
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
