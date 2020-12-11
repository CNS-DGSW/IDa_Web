import axios from "axios";
import Cookie from "js-cookie";
import AuthApi from "assets/api/AuthApi";
import { RefreshTokenResponse } from "util/types/Response";

const refresh = async (): Promise<boolean> => {
  const refreshToken = Cookie.get("refreshToken");
  let flag = false;
  if (!refreshToken) {
    return false;
  }

  await AuthApi.RefreshToken(refreshToken)
    .then((res: RefreshTokenResponse) => {
      localStorage.setItem("accessToken", res.data.accessToken);
      axios.defaults.headers.common["Authorization"] = `Bearer ${res.data.accessToken}`;
      flag = true;
    })
    .catch(() => {
      Cookie.remove("refreshToken");
    });

  return flag;
};

export default refresh;
