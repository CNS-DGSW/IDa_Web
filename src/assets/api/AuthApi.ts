import Api from "lib/customAxios";

class AuthApi {
  async Login(email: string, pw: string) {
    const body = {
      email,
      pw,
    };
    const { data } = await Api.post("/auth/login", body);
    console.log(data);

    return data;
  }

  async Register(
    name: string,
    birth: string,
    email: string,
    pw: string,
    studentTel:string,
    telAuthCode:string
  ) {
    const body = {
      email,
      pw,
      name,
      studentTel,
      birth,
      telAuthCode,
    };
    const { data } = await Api.post("/auth/register", body);

    return data;
  }

  async PhoneNum(phoneNumber:string){
    const body = {
      phoneNumber,
    }

    const {data} = await Api.post(`/auth/mobile-auth`,body);

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
