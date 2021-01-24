import { action, observable } from "mobx";
import { autobind } from "core-decorators";
import AuthApi from "../../assets/api/AuthApi";
import { LoginResponse, Response, UserInfoResponse } from "../../util/types/Response";
import { sha256 } from "js-sha256";

@autobind
class AuthStore {
  @observable login: boolean = false;
  @observable isAdmin: boolean = false;
  @observable profileBox: boolean = false;
  @observable name: string = "";
  @observable email: string = "";

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

  @action
  tryLogin = async (email: string, password: string): Promise<LoginResponse> => {
    try {
      const response = await AuthApi.Login(email, sha256(password));

      if (response.status === 200) {
        this.login = true;
      }

      return new Promise((resolve: (response: LoginResponse) => void, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
  };

  @action
  tryRegister = async (
    name: string,
    email: string,
    password: string,
    birth: string
  ): Promise<Response> => {
    try {
      const response = await AuthApi.Register(name, email, sha256(password), birth);

      return new Promise((resolve: (response: Response) => void, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
  };

  @action
  trySendEmail = async (email: string): Promise<Response> => {
    try {
      const response = await AuthApi.EmailCode(email);

      return new Promise((resolve: (response: Response) => void, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
  };

  @action
  getInfo = async (): Promise<UserInfoResponse> => {
    try {
      const response: UserInfoResponse = await AuthApi.GetInfo();

      if (response.status === 200) {
        this.login = true;
        this.email = response.data.email;
        this.name = response.data.name;
        this.isAdmin = response.data.isAdmin;
      }

      return new Promise((resolve: (response: UserInfoResponse) => void, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
  };

  @action
  tryPwCode = async (email: string): Promise<Response> => {
    try {
      const response = await AuthApi.pwCode(email);

      return new Promise((resolve: (response: Response) => void, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
  };

  @action
  tryChangePwByEmail = async (code: string, pw: string): Promise<Response> => {
    try {
      const response = await AuthApi.changePwByEmail(code, sha256(pw));

      return new Promise((resolve: (response: Response) => void, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
  };
}

export default AuthStore;
