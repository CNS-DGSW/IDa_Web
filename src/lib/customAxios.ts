import axios from "axios";
import { server } from "config/config.json";
import { refresh, refreshErrorHandle } from "./refresh";

const Api = axios.create({
  baseURL: server,
  timeout: 10000,
  params: {},
});

Api.interceptors.request.use(refresh, refreshErrorHandle);

export default Api;
