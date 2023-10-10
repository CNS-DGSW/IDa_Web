import axios, { AxiosRequestConfig } from "axios";
import Cookie from "js-cookie";
import { RefreshTokenResponse } from "util/types/Response";
import serverUrl from "config/config.json";
import moment from "moment";

const refresh = async (
  config: AxiosRequestConfig
): Promise<AxiosRequestConfig> => {
  const server = serverUrl.server;
  const refreshToken = Cookie.get("refreshToken");
  const expireAt = localStorage.getItem("expiresAt");
  let token = localStorage.getItem("accessToken");
  if (moment(expireAt).diff(moment()) < 0 && refreshToken) {
    const body = {
      refreshToken,
    };
    const { data } = await axios.post(`${server}auth/token`, body);
    const res: RefreshTokenResponse = data;

    token = res.data.accessToken;
    localStorage.setItem("accessToken", res.data.accessToken);
    localStorage.setItem(
      "expiresAt",
      moment().add(1, "hour").format("yyyy-MM-DD HH:mm:ss")
    );
  }

  config.headers["Authorization"] = `Bearer ${token}`;

  return config;
};

const refreshErrorHandle = (err: any) => {
  Cookie.remove("refreshToken");
};

export { refresh, refreshErrorHandle };
