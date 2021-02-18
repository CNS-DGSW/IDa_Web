import { History } from "history";
import { toast } from "react-toastify";

const handleWriteError = (err: Error, history?: History) => {
  if (err.message.includes("401") || err.message.includes("410")) {
    if (history) history.push("/login");
    toast.warn("로그인이 필요합니다.");
  } else if (err.message.includes("403")) {
    toast.warn("이미 제출하셨습니다.");
  } else if (err.message.includes("400")) {
    toast.warn("올바르지 않은 값이 있습니다.");
  } else if (err.message.includes("500")) {
    toast.error("서버 오류입니다.");
  }
};

const handleGetWriteError = (err: Error, history?: History) => {
  if (err.message.includes("401") || err.message.includes("410")) {
    if (history) history.push("/login");
    toast.warn("로그인이 필요합니다.");
  } else if (err.message.includes("403")) {
    if (history) history.push("/");
    toast.warn("권한이 없습니다.");
  } else if (err.message.includes("500")) {
    toast.error("서버 오류입니다.");
  }
};

const handleLogin = (err: Error, history?: History) => {
  if (err.message.includes("401") || err.message.includes("410")) {
    if (history) history.push("/login");
    toast.warn("로그인이 필요합니다.");
  } else if (err.message.includes("500")) {
    toast.error("서버 오류입니다.");
  }
};

export { handleWriteError, handleLogin, handleGetWriteError };
