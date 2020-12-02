import React, { useCallback, useEffect, useState } from "react";
import { inject, observer } from "mobx-react";
import Register from "components/Register";
import Cert from "components/Cert";
import store from "../../stores/index";

const RegisterContainer = () => {
  const { tryRegister, cert, changePage } = store.AuthStore;

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

  const handleRegister = useCallback(async () => {
    if (!email || !pw || !checkPw || !name) {
      console.log("빈칸이 있습니다.");
    } else if (pw !== checkPw) {
      console.log("비밀번호가 일치하지 않습니다..");
    } else if (!allCheck) {
      console.log("모두 동의를 체크해 주세요");
    } else {
      await tryRegister(name, email, pw)
        .then((res) => {})
        .catch((err) => {});
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
