import axios, { AxiosRequestConfig } from "axios";
import Cookie from "js-cookie";
import AuthApi from "assets/api/AuthApi";
import { RefreshTokenResponse } from "util/types/Response";
import moment from "moment";

const refresh = async (config: AxiosRequestConfig): Promise<AxiosRequestConfig> => {
  const refreshToken = Cookie.get("refreshToken");
  const expireAt = localStorage.getItem("expiresAt");
  let token = localStorage.getItem("accessToken");
  if (moment(expireAt).diff(moment()) < 0 && refreshToken) {
    await AuthApi.RefreshToken(refreshToken).then((res: RefreshTokenResponse) => {
      token = res.data.accessToken;
      localStorage.setItem("accessToken", res.data.accessToken);
      localStorage.setItem(
        "expiresAt",
        moment().add(1, "hour").format("yyyy-MM-DD HH:mm:ss")
      );
    });
  }

  config.headers["Authorization"] = `Bearer ${token}`;

  return config;
};

const refreshErrorHandle = (err: any) => {
  Cookie.remove("refreshToken");
};

export { refresh, refreshErrorHandle };
