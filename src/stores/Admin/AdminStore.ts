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
import { sha256 } from "js-sha256";

@autobind
class AdminStore {
  @observable isFinal: boolean = false;

  //입학 한 학생 받아오기
  @action
  getReceiptStatus = async (): Promise<ReceiptResponse> => {
    const response: ReceiptResponse = await AdminApi.GetReceiptStatus();

    return response;
  };

  //지역별 출신교별 현황 받기
  @action
  getUserSchoolCity = async (): Promise<SchoolCityResponse> => {
    const response: SchoolCityResponse = await AdminApi.GetUserSchoolCity();

    return response;
  };

  //입학 전형 원부 엑셀 받기
  @action
  getReceiptStatusExcel = async (): Promise<any> => {
    const response: any = await ExcelApi.GetReceiptStatus();

    return response;
  };

  //지역별 출신교별 형황 엑셀 받기
  @action
  getUserSchoolCityExcel = async (): Promise<any> => {
    const response: any = await ExcelApi.GetUserSchoolCity();

    return response;
  };

  //유저별 원서 제출 취소 설정
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

  @action
  adminAddUser = async (
    email: string,
    name: string,
    pw: string,
    birth: string
  ): Promise<Response> => {
    const response: Response = await AdminApi.AddUser(
      email,
      name,
      sha256(pw),
      birth
    );

    return response;
  };

  @action
  adminDeleteUser = async (userIdx: number): Promise<Response> => {
    const response: Response = await AdminApi.DeleteUser(userIdx);

    return response;
  };
}

export default AdminStore;
