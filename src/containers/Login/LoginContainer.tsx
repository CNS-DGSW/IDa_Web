import React, { useEffect, useState, useCallback } from "react";
import { inject, observer } from "mobx-react";
import Login from "components/Login";
import { LoginResponse } from "../../util/types/Response";
import useStore from "lib/hooks/useStore";
import { useHistory, withRouter } from "react-router-dom";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";

const LoginContainer = () => {
  const [check, setCheck] = useState<boolean>(false);
  const [loginSave, setLoginSave] = useState<string | null>("");
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { store } = useStore();
  const history = useHistory();

  const { tryLogin } = store.AuthStore;

  const [cookie, setCookie, removeCookie] = useCookies(["refreshToken"]);

  const handleLogin = useCallback(async () => {
    if (!id || !password) {
      toast("아이디 또는 비밀번호를 입력해 주세요");
    } else {
      await tryLogin(id, password)
        .then((res: LoginResponse) => {
          toast("로그인 되었습니다");
          localStorage.setItem("accessToken", res.data.accessToken);
          localStorage.setItem(
            "expiresAt",
            moment().add(1, "hour").format("yyyy-MM-DD HH:mm:ss")
          );
          setCookie("refreshToken", res.data.refreshToken, { path: "/" });
          setLoginCheck();
          history.push("/");
        })
        .catch((err: Error) => {
          if (err.message.includes("401")) {
            toast("이메일이나 비밀번호가 다릅니다");
          } else {
            toast("서버 오류입니다");
          }
        });
    }
  }, [id, password]);

  const setLoginCheck = useCallback(() => {
    if (check) {
      localStorage.setItem("loginSave", "true");
      localStorage.setItem("id", id);
    } else {
      localStorage.setItem("loginSave", "false");
      localStorage.removeItem("id");
    }
  }, [check]);

  const getLoginSave = useCallback(() => {
    setLoginSave(localStorage.getItem("loginSave"));
    let localStroageId: any = localStorage.getItem("id");
    if (loginSave) {
      if (loginSave === "true") {
        setCheck(true);
        setId(localStroageId);
      } else {
        setCheck(false);
      }
    }
  }, [id, setId, loginSave]);

  useEffect(() => {
    getLoginSave();
  }, []);

  useEffect(() => {}, []);

  return (
    <>
      <Login
        check={check}
        setCheck={setCheck}
        id={id}
        setId={setId}
        password={password}
        setPassword={setPassword}
        handleLogin={handleLogin}
      />
      <ToastContainer />
    </>
  );
};

export default withRouter(inject("store")(observer(LoginContainer)));
