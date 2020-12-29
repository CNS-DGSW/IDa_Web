import axios from "axios";
import { config } from "process";
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
  async Register(name: string, email: string, pw: string, birth: string) {
    try {
      const url = `${server}/auth/register`;

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
      const url = `${server}/auth/authCode`;

      const body = {
        email,
      };
      const { data } = await axios.post(url, body);

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async RefreshToken(refreshToken: string) {
    try {
      const url = `${server}/auth/token`;

      const body = {
        refreshToken,
      };
      const { data } = await axios.post(url, body);

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async GetInfo() {
    try {
      const url = `${server}/user/getInfo`;

      let config = {};

      if (localStorage.getItem("accessToken")) {
        config = {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        };
      }

      const { data } = await axios.get(url, config);

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async changePw() {
    try {
      const url = `${server}/user/getInfo`;

      let config = {};

      if (localStorage.getItem("accessToken")) {
        config = {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        };
      }

      const { data } = await axios.get(url, config);

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async pwCode(email: string) {
    try {
      const url = `${server}/auth/pwCode`;

      const body = {
        email,
      };

      const { data } = await axios.post(url, body);

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async changePwByEmail(code: string, pw: string) {
    try {
      const url = `${server}/auth/changePwByEmail`;

      const body = {
        code,
        pw,
      };

      const { data } = await axios.patch(url, body);

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}

export default new AuthApi();
