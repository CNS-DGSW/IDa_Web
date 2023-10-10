import { AxiosError } from "axios";
import { toast } from "react-toastify";

const handleWriteError = (err: AxiosError, history?: any) => {
  if (err.response?.status === 401 || err.response?.status === 410) {
    if (history) history("/login", { state: { isValid: true } });
    toast.warning("로그인이 필요합니다.");
  } else if (err.response?.status === 403) {
    toast.warning("이미 제출하셨습니다.");
  } else if (err.response?.status === 400) {
    toast.warning("올바르지 않은 값이 있습니다.");
  } else if (err.response?.status === 500) {
    toast.error("파일이 커서 저장에 실패합니다");
  }
};

const handleGetWriteError = (err: AxiosError, history?: any) => {
  if (
    err.response?.status === 400 ||
    err.response?.status === 401 ||
    err.response?.status === 410
  ) {
    if (history) history("/login", { state: { isValid: true } });
    toast.warning("로그인이 필요합니다.");
  } else if (err.response?.status === 404) {
    if (history) history("/", { state: { isValid: true } });
    toast.warning("없는 유저입니다.");
  } else if (err.response?.status === 403) {
    if (history) history("/", { state: { isValid: true } });
    toast.warning("권한이 없습니다.");
  } else if (err.response?.status === 500) {
    toast.error("서버 오류입니다. 잠시 후 다시 시도해주세요.");
  }
};

const handleLogin = (err: AxiosError, history?: any) => {
  if (err.response?.status === 401 || err.response?.status === 410) {
    if (history) history("/login", { state: { isValid: true } });
    toast.warning("로그인이 필요합니다.");
  } else if (err.response?.status === 500) {
    toast.error("서버 오류입니다. 잠시 후 다시 시도해주세요.");
  }
};

const handleAdmin = (err: AxiosError, history?: any) => {
  if (err.response?.status === 401 || err.response?.status === 410) {
    if (history) history("/login", { state: { isValid: true } });
    toast.warning("로그인이 필요합니다.");
  } else if (err.response?.status === 403) {
    if (history) history("/", { state: { isValid: true } });
    toast.warning("권한이 없습니다.");
  } else if (err.response?.status === 500) {
    toast.error("서버 오류입니다. 잠시 후 다시 시도해주세요.");
  }
};

export { handleWriteError, handleLogin, handleGetWriteError, handleAdmin };
