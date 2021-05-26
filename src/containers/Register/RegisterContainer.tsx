import React, { useCallback, useEffect, useState } from "react";
import { inject, observer } from "mobx-react";
import Register from "components/Register";
import { Response } from "util/types/Response";
import useStore from "lib/hooks/useStore";
import { useHistory, withRouter } from "react-router-dom";
import { toast } from "react-toastify";

const RegisterContainer = () => {
  const { store } = useStore();
  const { tryRegister, trySendEmail } = store.AuthStore;

  const history = useHistory();

  //모두동의 체크박스
  const [allCheck, setAllCheck] = useState<boolean>(false);

  // 정보들 받는 input들
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [pw, setPw] = useState<string>("");
  const [checkPw, setCheckPw] = useState<string>("");
  const [birth, setBirth] = useState<string>("");

  // 로딩
  const [emailLoading, setEmailLoading] = useState<boolean>(false);

  //email 인증 보내기
  const handleEmailSend = useCallback(async () => {
    if (!email) {
      toast.warning("이메일을 입력해 주세요");
    } else {
      setEmailLoading(true);
      toast.success("이메일이 전송중입니다.");
      await trySendEmail(email)
        .then((res: Response) => {
          toast.success("이메일이 전송되었습니다.");
          setEmailLoading(false);
        })
        .catch((err) => {
          setEmailLoading(false);
          if (err.response?.status === 406) {
            toast.warning("현재 요청이 너무 많습니다. 잠시 후에 시도하세요.");
          } else if (err.response?.status === 400) {
            toast.warning("메일 형식이 아닙니다.");
          } else if (err.response?.status === 409) {
            toast.warning("이미 사용중인 메일입니다.");
          } else {
            toast.error("서버 오류입니다");
          }
        });
    }
  }, [email, emailLoading]);

  //회원가입하기
  const handleRegister = useCallback(async () => {
    if (!email || !pw || !checkPw || !name || !birth) {
      toast.warning("빈칸이 있습니다.");
    } else if (pw !== checkPw) {
      toast.warning("비밀번호가 일치하지 않습니다.");
    } else if (!allCheck) {
      toast.warning("모두 동의를 체크해 주세요");
    } else {
      await tryRegister(name, email, pw, birth)
        .then((res: Response) => {
          toast.success("회원가입이 완료되었습니다.");
          history.push("login");
        })
        .catch((err) => {
          if (err.response?.status === 406) {
            toast.warning(
              "나이 제한으로 인해 가입이 불가능합니다. 본인 명의로 가입해주세요."
            );
          } else if (err.response?.status === 403) {
            toast.warning("이미 원서 제출이 마감되었습니다.");
          } else if (err.response?.status === 409) {
            toast.warning("이미 사용중인 이메일입니다.");
          } else if (err.response?.status === 401) {
            toast.warning("메일 인증이 안되었습니다.");
          } else if (err.response?.status === 400) {
            toast.warning("올바르지 않은 값이 있습니다.");
          } else {
            toast.error("서버 오류입니다");
          }
        });
    }
  }, [name, email, pw, checkPw, allCheck]);

  //이메일인증 enter처리
  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === "NumpadEnter") {
        if (name && email && pw && birth && checkPw) {
          handleRegister();
        } else {
          handleEmailSend();
        }
      }
    };

    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [email, name, pw, checkPw, birth, allCheck]);

  return (
    <>
      <Register
        allCheck={allCheck}
        setAllCheck={setAllCheck}
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        pw={pw}
        setPw={setPw}
        checkPw={checkPw}
        setCheckPw={setCheckPw}
        handleRegister={handleRegister}
        emailLoading={emailLoading}
        handleEmailSend={handleEmailSend}
        birth={birth}
        setBirth={setBirth}
      />
    </>
  );
};

export default withRouter(inject("store")(observer(RegisterContainer)));
