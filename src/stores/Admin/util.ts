import AdminApi from "assets/api/AdminApi";
import ExcelApi from "assets/api/ExcelApi";
import StatusApi from "assets/api/StatusApi";
import {
  AllUserRatio,
  ReceiptResponse,
  ReportInfo,
  SchoolCityResponse,
  UserList,
  UserListPassed,
  UserRate,
  UserReulstListResponse,
  ViewFirstStudent,
  ViewSecondStudent,
} from "util/types/Response";
import ApplyType from "util/enums/Apply";
import ApplyDetailType from "util/enums/ApplyDetail";

const getReceiptStatus = async (): Promise<ReceiptResponse> => {
  const response: ReceiptResponse = await AdminApi.GetReceiptStatus();

  return response;
};

const getUserSchoolCity = async (): Promise<SchoolCityResponse> => {
  const response: SchoolCityResponse = await AdminApi.GetUserSchoolCity();

  return response;
};

const getReceiptStatusExcel = async (): Promise<any> => {
  const response: any = await ExcelApi.GetReceiptStatus();

  return response;
};

const getUserSchoolCityExcel = async (): Promise<any> => {
  const response: any = await ExcelApi.GetUserSchoolCity();

  return response;
};

const handleCancelSubmit = async (userIdx: number): Promise<Response> => {
  const response: Response = await StatusApi.cancelSubmit(userIdx);
  return response;
};

const getReportInfo = async (): Promise<ReportInfo> => {
  const response: ReportInfo = await AdminApi.GetReportInfo();

  return response;
};

const getUserListPassed = async (
  isFinal?: boolean
): Promise<UserListPassed> => {
  const response: UserListPassed = await AdminApi.GetUserListPassed(isFinal);

  return response;
};

const getUserRate = async (isFinal?: boolean): Promise<UserRate> => {
  const response: UserRate = await AdminApi.GetUserRate(isFinal);

  return response;
};

const getUserList = async (): Promise<UserList> => {
  const response: UserList = await AdminApi.GetUserList();

  return response;
};

const getAllUserRatio = async (): Promise<AllUserRatio> => {
  const response: AllUserRatio = await AdminApi.GetAllUserRadio();

  return response;
};

const adminAddUser = async (
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

const adminDeleteUser = async (userIdx: number): Promise<Response> => {
  const response: Response = await AdminApi.DeleteUser(userIdx);

  return response;
};

const getViewFirstStudent = async (): Promise<ViewFirstStudent> => {
  const response: ViewFirstStudent = await AdminApi.viewFirstStudent();
  return response;
};

const adminChangeFirstStudent = async (): Promise<ViewFirstStudent> => {
  const response: ViewFirstStudent = await AdminApi.changeFirstStudent();
  return response;
};

const getViewSecondStudent = async (): Promise<ViewSecondStudent> => {
  const response: ViewSecondStudent = await AdminApi.viewSecondStudent();
  return response;
};

const adminChangeSecondStudent = async (): Promise<ViewSecondStudent> => {
  const response: ViewSecondStudent = await AdminApi.changeSecondStudent();
  return response;
};

const getUserResultList = async (): Promise<UserReulstListResponse> => {
  const response: UserReulstListResponse = await AdminApi.GetUserResultList();

  return response;
};

const changeFirstResultStatus = async (userIdx: number) => {
  const response: Response = await AdminApi.ChangeFirstResultStatus(userIdx);

  return response;
};

const changeSecondResultStatus = async (userIdx: number) => {
  const response: Response = await AdminApi.ChangeSecondResultStatus(userIdx);

  return response;
};

const changeFirstApplyStatus = async (
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

const changeSecondApplyStatus = async (
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

const setFirstSelection = async () => {
  const response: Response = await AdminApi.SetFirstSelection();

  return response;
};

const setSecondSelection = async () => {
  const response: Response = await AdminApi.SetSecondSelection();

  return response;
};

export {
  getReceiptStatus,
  getUserSchoolCity,
  getReceiptStatusExcel,
  getUserSchoolCityExcel,
  handleCancelSubmit,
  getReportInfo,
  getAllUserRatio,
  getUserList,
  getUserListPassed,
  getViewFirstStudent,
  getViewSecondStudent,
  changeFirstApplyStatus,
  changeFirstResultStatus,
  changeSecondApplyStatus,
  changeSecondResultStatus,
  setFirstSelection,
  setSecondSelection,
  adminAddUser,
  adminChangeFirstStudent,
  adminChangeSecondStudent,
  adminDeleteUser,
  getUserRate,
  getUserResultList,
};
