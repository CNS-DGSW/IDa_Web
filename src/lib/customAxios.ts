import axios from "axios";
import { server } from "config/config.json";
import { refresh, refreshErrorHandle } from "./refresh";

const Api = axios.create({
  baseURL: server,
  params: {},
});

Api.defaults.headers = {
  "Cache-Control": "no-cache",
  Pragma: "no-cache",
  Expires: "0",
  "access-control-allow-origin": "*"
};

Api.interceptors.request.use(refresh, refreshErrorHandle);

export default Api;
