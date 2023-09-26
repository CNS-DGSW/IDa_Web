import { autobind } from "core-decorators";
import AuthApi from "../../assets/api/AuthApi";
import {
  LoginResponse,
  Response,
  UserInfoResponse,
} from "../../util/types/Response";
import { _autoAction, observable } from "mobx";

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

  @_autoAction
  handleName = (name: string) => {
    this.name = name;
  };

  @_autoAction
  tryProfileBox = () => {
    this.profileBox = !this.profileBox;
  };
  /*
  @_autoAction
  tryLogout = () => {
    this.login = false;
    this.profileBox = false;
    this.name = "";
    this.email = "";
    this.isAdmin = false;
  };

  @_autoAction
  tryCloseModal = () => {
    this.profileBox = false;
  };

  changeLogin = (login: boolean) => {
    this.login = login;
  };

  @_autoAction
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

  @_autoAction
  tryRegister = async (
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

  @_autoAction
  trySendPhone = async (phoneNum: string): Promise<Response> => {
    const response = await AuthApi.PhoneNum(phoneNum);

    return response;
  };

  @_autoAction
  trySendEmail = async (email: string): Promise<Response> => {
    const response = await AuthApi.EmailCode(email);

    return response;
  };

  @_autoAction
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

  @_autoAction
  tryPwCode = async (email: string): Promise<Response> => {
    const response = await AuthApi.PwCode(email);

    return response;
  };

  @_autoAction
  tryChangePwByEmail = async (code: string, pw: string): Promise<Response> => {
    const response = await AuthApi.ChangePwByEmail(code, pw);

    return response;
  };

  @_autoAction
  tryChangePw = async (newPw: string, pw: string): Promise<Response> => {
    const response = await AuthApi.ChangePw(newPw, pw);

    return response;
  };
  */
}

export default AuthStore;
