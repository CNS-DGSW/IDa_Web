import React, { useEffect, useState, useCallback, useRef } from "react";
import { inject, observer } from "mobx-react";
import Login from "components/Login";
import { LoginResponse } from "../../util/types/Response";
import useStore from "lib/hooks/useStore";
import { useHistory, withRouter } from "react-router-dom";
import { useCookies } from "react-cookie";
import { NotificationContainer, NotificationManager } from "react-notifications";
import "react-notifications/lib/notifications.css";

const LoginContainer = () => {
  const passwordInput = React.useRef<HTMLInputElement>(null);

  const [check, setCheck] = useState<boolean>(false);

  const [loginSave, setLoginSave] = useState<string | null>("");
  //input들
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { store } = useStore();
  const history = useHistory();

  //api 불러오기
  const { tryLogin } = store.AuthStore;

  const [cookie, setCookie, removeCookie] = useCookies(["refreshToken"]);

  //로그인
  const handleLogin = async () => {
    if (!id || !password) {
      NotificationManager.warning(
        "warning.",
        "아이디 또는 비밀번호를 입력해 주세요",
        1000
      );
    } else {
      await tryLogin(id, password)
        .then((res: LoginResponse) => {
          NotificationManager.success("Succes", "로그인 되었습니다.", 1000);
          localStorage.setItem("accessToken", res.data.accessToken);
          setCookie("refreshToken", res.data.refreshToken, { path: "/" });
          setLoginCheck();
          history.push("/");
        })
        .catch((err: Error) => {
          if (err.message.includes("401")) {
            passwordInput.current?.focus();
            console.log(passwordInput);
            console.log(passwordInput.current);

            NotificationManager.warning(
              "warning.",
              "이메일이나 비밀번호가 다릅니다",
              1000
            );
          } else {
            NotificationManager.error("Error", "서버 오류입니다", 1000);
          }
        });
    }
  };

  //id 저장여부 확인해서
  const setLoginCheck = () => {
    if (check) {
      localStorage.setItem("loginSave", "true");
      localStorage.setItem("id", id);
    } else {
      localStorage.setItem("loginSave", "false");
      localStorage.removeItem("id");
    }
  };

  //아이디 저장했으면 불러오기
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

  //비밀번호 비었으면 비밀번호에 포커스 두기 아님 로그인
  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === "NumpadEnter") {
        if (password.length !== 0) {
          handleLogin();
        } else {
          passwordInput.current?.focus();
        }
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [id, password]);

  useEffect(() => {
    getLoginSave();
  }, [loginSave]);

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
        passwordInput={passwordInput}
      />
      <NotificationContainer />
    </>
  );
};

export default withRouter(inject("store")(observer(LoginContainer)));
