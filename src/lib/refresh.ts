import axios, { AxiosRequestConfig } from "axios";
import Cookie from "js-cookie";
import { RefreshTokenResponse } from "util/types/Response";
<<<<<<< Updated upstream
import cpmfogInfo from "config/config.json";
=======
import configInfo from "config/config.json";
>>>>>>> Stashed changes
import moment from "moment";

const refresh = async (config: AxiosRequestConfig): Promise<AxiosRequestConfig> => {
  const refreshToken = Cookie.get("refreshToken");
  const expireAt = localStorage.getItem("expiresAt");
  let token = localStorage.getItem("accessToken");
  if (moment(expireAt).diff(moment()) < 0 && refreshToken) {
    const body = {
      refreshToken,
    };
<<<<<<< Updated upstream
    const { data } = await axios.post(`${cpmfogInfo.server}/auth/token`, body);
=======
    const { data } = await axios.post(`${configInfo.server}/auth/token`, body);
>>>>>>> Stashed changes
    const res: RefreshTokenResponse = data;

    token = res.data.accessToken;
    localStorage.setItem("accessToken", res.data.accessToken);
    localStorage.setItem("expiresAt", moment().add(1, "hour").format("yyyy-MM-DD HH:mm:ss"));
  }

  config.headers["Authorization"] = `Bearer ${token}`;

  return config;
};

const refreshErrorHandle = (err: any) => {
  Cookie.remove("refreshToken");
};

export { refresh, refreshErrorHandle };
