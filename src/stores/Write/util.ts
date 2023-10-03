import AuthApi from "assets/api/AuthApi";
import UserApi from "assets/api/UserApi";
import {
  SchoolResponse,
  UploadResponse,
  UserInfoResponse,
} from "util/types/Response";

const getStudentInfo = async (
  userIdx?: number | null
): Promise<UserInfoResponse> => {
  const response: UserInfoResponse = await AuthApi.GetInfo(userIdx);
  return response;
};

const upload = async (fileName: File | Blob): Promise<UploadResponse> => {
  const response: UploadResponse = await UserApi.upload(fileName);
  return response;
};

const searchSchool = async (
  schoolName: string,
  city: string
): Promise<SchoolResponse> => {
  const response: SchoolResponse = await UserApi.SearchSchool(schoolName, city);
  // console.log(response);
  return response;
};

export { getStudentInfo, upload, searchSchool };
