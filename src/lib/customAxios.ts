import axios from "axios";
import serverUrl from "config/config.json";
import { refresh, refreshErrorHandle } from "./refresh";

const Api = axios.create({
  baseURL: serverUrl.server,
  params: {},
});

Api.defaults.headers = {
  "Cache-Control": "no-cache",
  Pragma: "no-cache",
  Expires: "0",
};

Api.interceptors.request.use(refresh, refreshErrorHandle);

export default Api;
