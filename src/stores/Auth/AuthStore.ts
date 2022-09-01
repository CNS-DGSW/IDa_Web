import { action, observable } from "mobx";
import { autobind } from "core-decorators";
import AuthApi from "../../assets/api/AuthApi";
import {
  LoginResponse,
  Response,
  UserInfoResponse,
} from "../../util/types/Response";

@autobind
class AuthStore {
  @observable login: boolean = false;
  // 로그인인지 확인하는 변수
  @observable isAdmin: boolean = false;
  // 어드민인지 확인하는 변수
  @observable profileBox: boolean = false;
  // 헤더에서 프로필 모달 관리하는 변수
  @observable name: string = "";
  // 이름
  @observable email: string = "";
  // 이메일

  @action
  handleName = (name: string) => {
    this.name = name;
  };

  @action
  tryProfileBox = () => {
    this.profileBox = !this.profileBox;
  };

  @action
  tryLogout = () => {
    this.login = false;
    this.profileBox = false;
    this.name = "";
    this.email = "";
    this.isAdmin = false;
  };

  @action
  tryCloseModal = () => {
    this.profileBox = false;
  };

  changeLogin = (login: boolean) => {
    this.login = login;
  };

  @action
  tryLogin = async (
    email: string,
    password: string
  ): Promise<LoginResponse> => {
    const response = await AuthApi.Login(email, password);

    if (response.status === 200) {
      this.login = true;
    }

    return response;
  };

  @action
  tryRegister = async (
    name: string,
    email: string,
    password: string,
    birth: string,
    duplicateInfo: string
  ): Promise<Response> => {
    const response = await AuthApi.Register(
      name,
      email,
      password,
      birth,
      duplicateInfo
    );

    return response;
  };

  @action
  trySendEmail = async (email: string): Promise<Response> => {
    const response = await AuthApi.EmailCode(email);

    return response;
  };

  @action
  getInfo = async (): Promise<UserInfoResponse> => {
    const response: UserInfoResponse = await AuthApi.GetInfo();

    if (response.status === 200) {
      this.login = true;
      this.email = response.data.email;
      this.name = response.data.name;
      this.isAdmin = response.data.isAdmin;
    } else {
      this.login = false;
    }

    return response;
  };

  @action
  tryPwCode = async (email: string): Promise<Response> => {
    const response = await AuthApi.PwCode(email);

    return response;
  };

  @action
  tryChangePwByEmail = async (code: string, pw: string): Promise<Response> => {
    const response = await AuthApi.ChangePwByEmail(code, pw);

    return response;
  };

  @action
  tryChangePw = async (newPw: string, pw: string): Promise<Response> => {
    const response = await AuthApi.ChangePw(newPw, pw);

    return response;
  };
}

export default AuthStore;
