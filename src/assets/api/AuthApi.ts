import Api from "lib/customAxios";

class AuthApi {
  async Login(email: string, pw: string) {
    const body = {
      email,
      pw,
    };
    const { data } = await Api.post("/auth/login", body);

    return data;
  }
  async Register(name: string, email: string, pw: string, birth: string) {
    const body = {
      birth,
      name,
      email,
      pw,
    };
    const { data } = await Api.post("/auth/register", body);

    return data;
  }

  async EmailCode(email: string) {
    const body = {
      email,
    };

    const { data } = await Api.post("/auth/authCode", body);

    return data;
  }

  async GetInfo(userIdx?: number | null) {
    const query = userIdx ? `?userIdx=${userIdx}` : "";

    const { data } = await Api.get(`/user/getInfo${query}`);

    return data;
  }

  async PwCode(email: string) {
    const body = {
      email,
    };

    const { data } = await Api.post("/auth/pwCode", body);

    return data;
  }

  async ChangePwByEmail(code: string, pw: string) {
    const body = {
      code,
      pw,
    };

    const { data } = await Api.patch("/auth/changePwByEmail", body);

    return data;
  }

  async ChangePw(newPw: string, pw: string) {
    const body = {
      newPw,
      pw,
    };

    const { data } = await Api.patch("/auth/changePw", body);

    return data;
  }
}

export default new AuthApi();
