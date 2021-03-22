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
    const response: ReceiptResponse = await AdminApi.GetReceiptStatus();

    return response;
  };

  @action
  getUserSchoolCity = async (): Promise<SchoolCityResponse> => {
    const response: SchoolCityResponse = await AdminApi.GetUserSchoolCity();

    return response;
  };

  @action
  getReceiptSatusExcel = async (): Promise<any> => {
    const response: any = await ExcelApi.GetReceiptStatus();

    return response;
  };

  @action
  getUserSchoolCityExcel = async (): Promise<any> => {
    const response: any = await ExcelApi.GetUserSchoolCity();

    return response;
  };

  @action
  handleCancelSubmit = async (userIdx: number): Promise<Response> => {
    const response: Response = await StatusApi.cancelSubmit(userIdx);

    return response;
  };

  @action
  getReportInfo = async (): Promise<ReportInfo> => {
    const response: ReportInfo = await AdminApi.GetReportInfo();

    return response;
  };

  @action
  getUserListPassed = async (isFinal?: boolean): Promise<UserListPassed> => {
    const response: UserListPassed = await AdminApi.GetUserListPassed(isFinal);

    return response;
  };

  @action
  getUserRate = async (isFinal?: boolean): Promise<UserRate> => {
    const response: UserRate = await AdminApi.GetUserRate(isFinal);

    return response;
  };

  @action
  getUserList = async (): Promise<UserList> => {
    const response: UserList = await AdminApi.GetUserList();

    return response;
  };

  @action
  getAllUserRatio = async (): Promise<AllUserRatio> => {
    const response: AllUserRatio = await AdminApi.GetAllUserRadio();

    return response;
  };
}

export default AdminStore;
