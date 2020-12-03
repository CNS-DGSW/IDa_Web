import React, { useState } from "react";
import { inject, observer } from "mobx-react";
import Login from "components/Login";
import { LoginResponse } from "../../util/types/Response";
import useStore from "../../util/lib/hooks/useStore";

const LoginContainer = () => {
  const [check, setCheck] = useState<boolean>(false);
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { store } = useStore();

  const { tryLogin, login } = store.AuthStore;

  const handleLogin = async () => {
    if (!id || !password) {
    } else {
      await tryLogin(id, password)
        .then((res: LoginResponse) => {
          console.log("로그인 성공");
        })
        .catch((err: Error) => {
          console.log(`${err}`);
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

export default inject("store")(observer(LoginContainer));
