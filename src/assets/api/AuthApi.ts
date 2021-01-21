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

  async RefreshToken(refreshToken: string) {
    try {
      const body = {
        refreshToken,
      };
      const { data } = await Api.post("/auth/token", body);

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async GetInfo() {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      };

      const { data } = await Api.get("/user/getInfo", config);

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async changePw() {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      };

      const { data } = await Api.get("/user/getInfo", config);

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async pwCode(email: string) {
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

  async changePwByEmail(code: string, pw: string) {
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
}

export default new AuthApi();
