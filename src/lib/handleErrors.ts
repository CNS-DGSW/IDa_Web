import { AxiosError } from "axios";
import { History } from "history";
import { toast } from "react-toastify";

const handleWriteError = (err: AxiosError, history?: History) => {
  if (err.response?.status === 401 || err.response?.status === 410) {
    if (history) history.push("/login");
    toast.warning("로그인이 필요합니다.");
  } else if (err.response?.status === 403) {
    toast.warning("이미 제출하셨습니다.");
  } else if (err.response?.status === 400) {
    toast.warning("올바르지 않은 값이 있습니다.");
  } else if (err.response?.status === 500) {
    toast.error("서버 오류입니다.");
  }
};

const handleGetWriteError = (err: AxiosError, history?: History) => {
  if (
    err.response?.status === 400 ||
    err.response?.status === 401 ||
    err.response?.status === 410
  ) {
    if (history) history.push("/login");
    toast.warning("로그인이 필요합니다.");
  } else if (err.response?.status === 404) {
    if (history) history.push("/");
    toast.warning("없는 유저입니다.");
  } else if (err.response?.status === 403) {
    if (history) history.push("/");
    toast.warning("권한이 없습니다.");
  } else if (err.response?.status === 500) {
    toast.error("서버 오류입니다.");
  }
};

const handleLogin = (err: AxiosError, history?: History) => {
  if (err.response?.status === 401 || err.response?.status === 410) {
    if (history) history.push("/login");
    toast.warning("로그인이 필요합니다.");
  } else if (err.response?.status === 500) {
    toast.error("서버 오류입니다.");
  }
};

const handleAdmin = (err: AxiosError, history?: History) => {
  if (err.response?.status === 401 || err.response?.status === 410) {
    if (history) history.push("/login");
    toast.warning("로그인이 필요합니다.");
  } else if (err.response?.status === 403) {
    if (history) history.push("/");
    toast.warning("권한이 없습니다.");
  } else if (err.response?.status === 500) {
    toast.error("서버 오류입니다.");
  }
};

export { handleWriteError, handleLogin, handleGetWriteError, handleAdmin };
