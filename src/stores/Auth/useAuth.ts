import AuthApi from "assets/api/AuthApi";
import { LoginResponse } from "util/types/Response";

const tryLogin = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  const response = await AuthApi.Login(email, password);
  return response;
};

const tryRegister = async (
  name: string,
  birth: string,
  email: string,
  password: string,
  phoneNum: string,
  phoneCheck: string
): Promise<Response> => {
  const response = await AuthApi.Register(
    name,
    birth,
    email,
    password,
    phoneNum,
    phoneCheck
  );

  return response;
};

const trySendPhone = async (phoneNum: string): Promise<Response> => {
  const response = await AuthApi.PhoneNum(phoneNum);
  return response;
};

const trySendEmail = async (email: string): Promise<Response> => {
  const response = await AuthApi.EmailCode(email);
  return response;
};

const tryPwCode = async (email: string): Promise<Response> => {
  const response = await AuthApi.PwCode(email);

  return response;
};

const tryChangePwByEmail = async (
  code: string,
  pw: string
): Promise<Response> => {
  const response = await AuthApi.ChangePwByEmail(code, pw);

  return response;
};

const tryChangePw = async (newPw: string, pw: string): Promise<Response> => {
  const response = await AuthApi.ChangePw(newPw, pw);
  return response;
};

export {
  tryLogin,
  tryRegister,
  trySendPhone,
  trySendEmail,
  tryPwCode,
  tryChangePwByEmail,
  tryChangePw,
};
