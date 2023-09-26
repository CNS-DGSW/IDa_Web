import AuthApi from "assets/api/AuthApi";
import UserApi from "assets/api/UserApi";
import Sex from "util/enums/Sex";
import { UploadResponse, UserInfoResponse } from "util/types/Response";
import { useRecoilValue } from "recoil";

const getStudentInfo = async (
  userIdx?: number | null
): Promise<UserInfoResponse> => {
  const response: UserInfoResponse = await AuthApi.GetInfo(userIdx);
  return response;
};

const editStudentInfo = async (
  name: string,
  birth: string,
  sex: Sex,
  studentTel: string
): Promise<Response> => {
  const userIdx: number = 0;
  const response: Response = await UserApi.EditUserInfo(
    name,
    birth,
    sex,
    studentTel,
    userIdx
  );

  return response;
};

const upload = async (fileName: File | Blob): Promise<UploadResponse> => {
  const response: UploadResponse = await UserApi.upload(fileName);
  return response;
};
