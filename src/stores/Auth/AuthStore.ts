import { action, observable } from "mobx";
import { autobind } from "core-decorators";
import AuthApi from "../../assets/api/AuthApi";
import { LoginResponse, Response } from "../../util/types/Response";

@autobind
class AuthStore {
  @observable login: boolean = false;
  @observable cert: boolean = false;

  @action
  changePage = () => {
    this.cert = true;
  };

  @action
  tryLogin = async (email: string, password: string): Promise<LoginResponse> => {
    try {
      const response = await AuthApi.Login(email, password);

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
  tryRegister = async (email: string, password: string): Promise<Response> => {
    try {
      const response = await AuthApi.Login(email, password);

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
