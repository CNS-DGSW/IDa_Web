import React, { useCallback, useEffect, useState } from "react";
import { inject, observer } from "mobx-react";
import Register from "components/Register";
import { Response } from "../../util/types/Response";
import useStore from "../../lib/hooks/useStore";
import { useHistory, withRouter } from "react-router-dom";

const RegisterContainer = () => {
  const { store } = useStore();
  const { tryRegister, trySendEmail } = store.AuthStore;

  const history = useHistory();

  // RegisterComponents checkBox
  const [allCheck, setAllCheck] = useState<boolean>(false);
  const [privacy, setPrivacy] = useState<boolean>(false);
  const [use, setUse] = useState<boolean>(false);
  const [background, setBackground] = useState<boolean>(false);

  // RegisterComponents input
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [pw, setPw] = useState<string>("");
  const [checkPw, setCheckPw] = useState<string>("");
  const [birth, setBirth] = useState<string>("2003-01-28");

  // 로딩
  const [emailLoading, setEmailLoading] = useState<boolean>(false);

  const handleEmailSend = useCallback(async () => {
    setEmailLoading(true);
    if (!email) {
      setEmailLoading(false);
      console.log("이메일을 입력해 주세요");
    } else {
      await trySendEmail(email)
        .then((res: Response) => {
          setEmailLoading(false);
        })
        .catch((err: Error) => {
          setEmailLoading(false);
          if (err.message.includes("400")) {
            console.log("메일 형식이 아닙니다.");
          } else if (err.message.includes("409")) {
            console.log("이미 사용중인 메일입니다.");
          } else {
            console.log("서버 오류입니다");
          }
        });
    }
  }, [email, emailLoading]);

  const handleRegister = useCallback(async () => {
    if (!email || !pw || !checkPw || !name || !birth) {
      console.log("빈칸이 있습니다.");
    } else if (pw !== checkPw) {
      console.log("비밀번호가 일치하지 않습니다.");
    } else if (!allCheck) {
      console.log("모두 동의를 체크해 주세요");
    } else {
      await tryRegister(name, email, pw, birth)
        .then((res: Response) => {
          history.push("login");
        })
        .catch((Error: Error) => {
          if (Error.message.includes("409")) {
            console.log("메일 인증이 안되었습니다.");
          } else {
            console.log(Error.message);
          }
        });
    }
  }, [name, email, pw, checkPw, allCheck]);

  const handleAllCheck = useCallback(() => {
    setPrivacy(allCheck);
    setUse(allCheck);
    setBackground(allCheck);
  }, [allCheck]);

  useEffect(() => {
    handleAllCheck();
  }, [allCheck, handleAllCheck]);

  useEffect(() => {
    if (privacy && use && background) {
      setAllCheck(true);
    }
    //  else if (!privacy || !use || !background) {
    //   setAllCheck(false);
    // }
  }, [privacy, use, background]);

  return (
    <Register
      allCheck={allCheck}
      setAllCheck={setAllCheck}
      privacy={privacy}
      setPrivacy={setPrivacy}
      use={use}
      setUse={setUse}
      background={background}
      setBackground={setBackground}
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
      handleAllCheck={handleAllCheck}
      history={history}
      birth={birth}
      setBirth={setBirth}
    />
  );
};

export default withRouter(inject("store")(observer(RegisterContainer)));
