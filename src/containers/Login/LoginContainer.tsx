import React, { useState } from "react";
import { inject, observer } from "mobx-react";
import Login from "components/Login";
import { LoginResponse } from "../../util/types/Response";
import useStore from "../../util/lib/hooks/useStore";
import { useHistory, withRouter } from "react-router-dom";
import { useCookies } from "react-cookie";

const LoginContainer = () => {
  const [check, setCheck] = useState<boolean>(false);
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { store } = useStore();
  const history = useHistory();

  const { tryLogin } = store.AuthStore;

  const [cookie, setCookie, removeCookie] = useCookies(["refreshToken"]);

  const handleLogin = async () => {
    if (!id || !password) {
      console.log("아이디 또는 비밀번호를 입력해 주세요");
    } else {
      await tryLogin(id, password)
        .then((res: LoginResponse) => {
          localStorage.setItem("accessToken", res.data.accessToken);
          setCookie("refreshToken", res.data.refreshToken, { path: "/" });
          history.push("/");
        })
        .catch((err: Error) => {
          console.log("서버 오류입니다.");
        });
    }
  };

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
    </>
  );
};

export default withRouter(inject("store")(observer(LoginContainer)));
