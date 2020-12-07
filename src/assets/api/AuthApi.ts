import axios from "axios";
import { server } from "../../config/config.json";

class AuthApi {
  async Login(email: string, pw: string) {
    try {
      const url = `${server}/auth/login`;

      const body = {
        email,
        pw,
      };
      const { data } = await axios.post(url, body);

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
  async Register(name: string, email: string, pw: string) {
    try {
      const url = `${server}/auth/register`;

      const birth = "2020-12-03T10:51:59.084Z";

      const body = {
        birth,
        name,
        email,
        pw,
      };
      const { data } = await axios.post(url, body);

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async EmailCode(email: string) {
    try {
      const url = `${server}/auth/code`;

      const body = {
        email,
      };
      const { data } = await axios.post(url, body);

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}

export default new AuthApi();
