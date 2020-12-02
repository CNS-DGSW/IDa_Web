import axios from "axios";
import { server } from "../../config/config.json";

class AuthApi {
  async Login(email: string, pw: string) {
    try {
      const url = `${server}/member/signin`;

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
      const url = `${server}/member/signup`;

      const body = {
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
}

export default new AuthApi();
