import { _autoAction, observable } from "mobx";
import { autobind } from "core-decorators";
import AdminApi from "../../assets/api/AdminApi";
import ApplyType from "util/enums/Apply";
import ApplyDetailType from "util/enums/ApplyDetail";
import { UserResult as UserResultType } from "util/types/UserResult";

import {
  AllUserRatio,
  ReceiptResponse,
  ReportInfo,
  SchoolCityResponse,
  UserList,
  UserListPassed,
  UserRate,
  ViewFirstStudent,
  UserReulstListResponse,
  ViewSecondStudent,
} from "util/types/Response";
import ExcelApi from "assets/api/ExcelApi";
import StatusApi from "assets/api/StatusApi";

@autobind
class AdminStore {
  @observable isFinal: boolean = false;

  //입학 한 학생 받아오기
  @_autoAction
  getReceiptStatus = async (): Promise<ReceiptResponse> => {
    const response: ReceiptResponse = await AdminApi.GetReceiptStatus();

    return response;
  };

  //지역별 출신교별 현황 받기
  @_autoAction
  getUserSchoolCity = async (): Promise<SchoolCityResponse> => {
    const response: SchoolCityResponse = await AdminApi.GetUserSchoolCity();

    return response;
  };

  //입학 전형 원부 엑셀 받기
  @_autoAction
  getReceiptStatusExcel = async (): Promise<any> => {
    const response: any = await ExcelApi.GetReceiptStatus();

    return response;
  };

  //지역별 출신교별 형황 엑셀 받기
  @_autoAction
  getUserSchoolCityExcel = async (): Promise<any> => {
    const response: any = await ExcelApi.GetUserSchoolCity();

    return response;
  };

  //유저별 원서 제출 취소 설정
  @_autoAction
  handleCancelSubmit = async (userIdx: number): Promise<Response> => {
    const response: Response = await StatusApi.cancelSubmit(userIdx);

    return response;
  };

  @_autoAction
  getReportInfo = async (): Promise<ReportInfo> => {
    const response: ReportInfo = await AdminApi.GetReportInfo();

    return response;
  };

  @_autoAction
  getUserListPassed = async (isFinal?: boolean): Promise<UserListPassed> => {
    const response: UserListPassed = await AdminApi.GetUserListPassed(isFinal);

    return response;
  };

  @_autoAction
  getUserRate = async (isFinal?: boolean): Promise<UserRate> => {
    const response: UserRate = await AdminApi.GetUserRate(isFinal);

    return response;
  };

  @_autoAction
  getUserList = async (): Promise<UserList> => {
    const response: UserList = await AdminApi.GetUserList();

    return response;
  };

  @_autoAction
  getAllUserRatio = async (): Promise<AllUserRatio> => {
    const response: AllUserRatio = await AdminApi.GetAllUserRadio();

    return response;
  };

  @_autoAction
  adminAddUser = async (
    email: string,
    name: string,
    pw: string,
    birth: string
  ): Promise<Response> => {
    const duplicateInfo: string = Math.random().toString(36).substr(2, 11);
    const response: Response = await AdminApi.AddUser(
      email,
      name,
      pw,
      birth,
      duplicateInfo
    );

    return response;
  };

  @_autoAction
  adminDeleteUser = async (userIdx: number): Promise<Response> => {
    const response: Response = await AdminApi.DeleteUser(userIdx);

    return response;
  };

  @_autoAction
  getViewFirstStudent = async (): Promise<ViewFirstStudent> => {
    const response: ViewFirstStudent = await AdminApi.viewFirstStudent();
    return response;
  };

  @_autoAction
  adminChangeFirstStudent = async (): Promise<ViewFirstStudent> => {
    const response: ViewFirstStudent = await AdminApi.changeFirstStudent();
    return response;
  };
  @_autoAction
  getViewSecondStudent = async (): Promise<ViewSecondStudent> => {
    const response: ViewSecondStudent = await AdminApi.viewSecondStudent();
    return response;
  };

  @_autoAction
  adminChangeSecondStudent = async (): Promise<ViewSecondStudent> => {
    const response: ViewSecondStudent = await AdminApi.changeSecondStudent();
    return response;
  };

  @_autoAction
  getUserResultList = async (): Promise<UserReulstListResponse> => {
    const response: UserReulstListResponse = await AdminApi.GetUserResultList();

    return response;
  };

  @_autoAction
  changeFirstResultStatus = async (userIdx: number) => {
    const response: Response = await AdminApi.ChangeFirstResultStatus(userIdx);

    return response;
  };

  @_autoAction
  changeSecondResultStatus = async (userIdx: number) => {
    const response: Response = await AdminApi.ChangeSecondResultStatus(userIdx);

    return response;
  };

  @_autoAction
  changeFirstApplyStatus = async (
    userIdx: number,
    apply: ApplyType,
    applyDetail: ApplyDetailType
  ) => {
    const response: Response = await AdminApi.ChangeFirstApplyStatus(
      userIdx,
      apply,
      applyDetail
    );
    return response;
  };

  @_autoAction
  changeSecondApplyStatus = async (
    userIdx: number,
    apply: ApplyType,
    applyDetail: ApplyDetailType
  ) => {
    const response: Response = await AdminApi.ChangeSecondApplyStatus(
      userIdx,
      apply,
      applyDetail
    );
    return response;
  };

  @_autoAction
  setFirstSelection = async () => {
    const response: Response = await AdminApi.SetFirstSelection();

    return response;
  };

  @_autoAction
  setSecondSelection = async () => {
    const response: Response = await AdminApi.SetSecondSelection();

    return response;
  };
}

export default AdminStore;
