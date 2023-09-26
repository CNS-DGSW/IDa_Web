import React, { useEffect, useState, useCallback } from "react";
import { observer } from "mobx-react";
import Login from "components/Login";
import { LoginResponse } from "../../util/types/Response";
import useStore from "lib/hooks/useStore";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
import moment from "moment";
import asyncLocalStorage from "lib/asyncStorage";
import { tryLogin } from "stores/Auth/useAuth";
import { useSetRecoilState } from "recoil";
import { loginAtom } from "stores/Auth/AuthAtom";

const LoginContainer = () => {
  const setLoginAtom = useSetRecoilState<boolean>(loginAtom);

  const passwordInput = React.useRef<HTMLInputElement>(null);
  // login focus 주는 useRef
  const [check, setCheck] = useState<boolean>(false);
  // 아이디 저장 체크박스 여부

  const [loginSave, setLoginSave] = useState<string | null>("");
  //input들
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const history = useNavigate();

  const [cookie, setCookie, removeCookie] = useCookies(["refreshToken"]);

  //로그인
  const handleLogin = async () => {
    if (!id || !password) {
      if (!id) {
        toast.warning("아이디를 입력해주세요");
      } else if (!password) {
        toast.warning("비밀번호를 입력해주세요");
      } else {
        toast.warning("아이디와 비밀번호가 입력되지 않았습니다");
      }
    } else if (password.length < 8) {
      toast.warning("비밀번호를 8자 이상 입력해주세요");
    } else {
      await tryLogin(id, password)
        .then(async (res: LoginResponse) => {
          setLoginAtom(true);
          toast.success("로그인 되었습니다");
          asyncLocalStorage.setItem("accessToken", res.data.accessToken);
          asyncLocalStorage.setItem(
            "expiresAt",
            moment().add(1, "hour").format("yyyy-MM-DD HH:mm:ss")
          );
          setCookie("refreshToken", res.data.refreshToken, { path: "/" });
          setLoginCheck();
          history("/");
        })
        .catch((err: any) => {
          if (err.response?.status === 401) {
            passwordInput.current?.focus();
            toast.warning("이메일이나 비밀번호가 다릅니다");
          } else if (err.response?.status === 400) {
            toast.warning("잘못된 이메일 형식입니다");
          } else {
            toast.error("서버 오류입니다. 잠시 후 다시 시도해주세요.");
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
    </>
  );
};

export default observer(LoginContainer);
