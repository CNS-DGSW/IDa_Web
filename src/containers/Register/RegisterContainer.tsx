import React, { useCallback, useEffect, useState } from "react";
import { inject, observer } from "mobx-react";
import Register from "components/Register";
import { Response } from "util/types/Response";
import useStore from "lib/hooks/useStore";
import { useHistory, withRouter } from "react-router-dom";
//알림
import { NotificationContainer, NotificationManager } from "react-notifications";
import "react-notifications/lib/notifications.css";

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
    NotificationManager.success("잠시만 기다려주세요", "이메일이 전송중입니다.", 1000);
    setEmailLoading(true);
    if (!email) {
      setEmailLoading(false);
      NotificationManager.warning(
        "메일을 입력하지 않았습니다.",
        "이메일을 입력해 주세요",
        1000
      );
    } else {
      await trySendEmail(email)
        .then((res: Response) => {
          NotificationManager.success("Success", "이메일이 전송되었습니다.");
          setEmailLoading(false);
        })
        .catch((err: Error) => {
          setEmailLoading(false);
          if (err.message.includes("400")) {
            NotificationManager.warning("Warning", "메일 형식이 아닙니다.", 1000);
          } else if (err.message.includes("409")) {
            NotificationManager.warning("Warning", "이미 사용중인 이메일입니다.", 1000);
          } else {
            NotificationManager.error("Error", "메일 전송에 실패했습니다", 1000);
          }
        });
    }
  }, [email, emailLoading]);

  //회원가입하기
  const handleRegister = useCallback(async () => {
    if (!email || !pw || !checkPw || !name || !birth) {
      NotificationManager.warning("Warning", "빈칸이 있습니다.", 1000);
    } else if (pw !== checkPw) {
      NotificationManager.warning("Warning", "비밀번호가 일치하지 않습니다.", 1000);
    } else if (!allCheck) {
      NotificationManager.warning("Warning", "모두 동의를 체크해 주세요.", 1000);
    } else {
      await tryRegister(name, email, pw, birth)
        .then((res: Response) => {
          NotificationManager.success("Success", "회원가입이 완료되었습니다.", 1000);
          history.push("login");
        })
        .catch((Error: Error) => {
          if (Error.message.includes("409")) {
            NotificationManager.warning("Warning", "메일 인증을 다시해주세요.", 1000);
          } else {
            NotificationManager.error("Error", "서버 오류입니다", 1000);
          }
        });
    }
  }, [name, email, pw, checkPw, allCheck]);

  //이메일인증 enter처리
  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === "NumpadEnter") {
        handleEmailSend();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [email]);

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
      <NotificationContainer />
    </>
  );
};

export default withRouter(inject("store")(observer(RegisterContainer)));
