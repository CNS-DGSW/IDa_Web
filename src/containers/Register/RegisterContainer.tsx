import React, { useCallback, useEffect, useState } from "react";
import { inject, observer } from "mobx-react";
import Register from "components/Register";
import Cert from "components/Cert";
import { Response } from "../../util/types/Response";
import useStore from "../../util/lib/hooks/useStore";

const RegisterContainer = () => {
  const { store } = useStore();
  const { tryRegister, cert, changePage, trySendEmail } = store.AuthStore;

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

  // certComponent CheckBox
  const [phone, setPhone] = useState<boolean>(true);
  const [ip, setIp] = useState<boolean>(false);
  const [noCert, setNoCert] = useState<boolean>(false);

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
          console.log(err);
        });
    }
  }, [email, emailLoading]);

  const handleRegister = useCallback(async () => {
    if (!email || !pw || !checkPw || !name) {
      console.log("빈칸이 있습니다.");
    } else if (pw !== checkPw) {
      console.log("비밀번호가 일치하지 않습니다..");
    } else if (!allCheck) {
      console.log("모두 동의를 체크해 주세요");
    } else {
      await tryRegister(name, email, pw)
        .then((res: Response) => {})
        .catch((Error: Error) => {
          if (Error.message === "Error: Request failed with status code 409") {
            console.log("메일 인증이 안되었습니다.");
          } else {
            console.log(Error.message);
          }
        });
    }
  }, [name, email, pw, checkPw, allCheck]);

  useEffect(() => {
    setPrivacy(allCheck);
    setUse(allCheck);
    setBackground(allCheck);
  }, [allCheck]);

  useEffect(() => {
    // Register 체크박스 모두 동의
    if (privacy && use && background) {
      setAllCheck(true);
    } else if (!privacy || !use || !background) {
      setAllCheck(false);
    }
  }, [privacy, use, background]);

  return (
    <div>
      {cert ? (
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
        />
      ) : (
        <Cert
          ip={ip}
          setIp={setIp}
          phone={phone}
          setPhone={setPhone}
          noCert={noCert}
          setNoCert={setNoCert}
          changePage={changePage}
        />
      )}
    </div>
  );
};

export default inject("store")(observer(RegisterContainer));
