import Api from "lib/customAxios";

class AuthApi {
  async Login(email: string, pw: string) {
    try {
      const body = {
        email,
        pw,
      };
      const { data } = await Api.post("/auth/login", body);

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
  async Register(name: string, email: string, pw: string, birth: string) {
    try {
      const body = {
        birth,
        name,
        email,
        pw,
      };
      const { data } = await Api.post("/auth/register", body);

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async EmailCode(email: string) {
    try {
      const body = {
        email,
      };

      const { data } = await Api.post("/auth/authCode", body);

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async GetInfo(userIdx?: number | null) {
    try {
      const query = userIdx ? `?userIdx=${userIdx}` : "";

      const { data } = await Api.get(`/user/getInfo${query}`);

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async PwCode(email: string) {
    try {
      const body = {
        email,
      };

      const { data } = await Api.post("/auth/pwCode", body);

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async ChangePwByEmail(code: string, pw: string) {
    try {
      const body = {
        code,
        pw,
      };

      const { data } = await Api.patch("/auth/changePwByEmail", body);

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async ChangePw(newPw: string, pw: string) {
    try {
      const body = {
        newPw,
        pw,
      };

      const { data } = await Api.patch("/auth/changePw", body);

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}

export default new AuthApi();
