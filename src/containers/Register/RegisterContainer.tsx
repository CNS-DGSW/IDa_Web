import React, { useCallback, useEffect, useState } from "react";
import { inject, observer } from "mobx-react";
import Register from "components/Register";
import Cert from "components/Cert";
import store from "../../stores/index";

const RegisterContainer = () => {
  const [allCheck, setAllCheck] = useState<boolean>(false);
  const [privacy, setPrivacy] = useState<boolean>(false);
  const [use, setUse] = useState<boolean>(false);
  const [background, setBackground] = useState<boolean>(false);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [pw, setPw] = useState<string>("");
  const [checkPw, setCheckPw] = useState<string>("");

  const { tryRegister, cert, changePage } = store.AuthStore;

  const [ip, setIp] = useState<boolean>(false);
  const [phone, setPhone] = useState<boolean>(false);
  const [noCert, setNoCert] = useState<boolean>(false);

  const handleRegister = useCallback(async () => {
    if (!email || !pw || !checkPw || !name) {
      console.log("");
    } else if (pw !== checkPw) {
      console.log("비밀번호가 제대로 입력되지 않았습니다.");
    } else if (allCheck === false) {
      console.log("모두 동의를 체크해 주세요");
    } else {
      await tryRegister(email, pw)
        .then((res) => {})
        .catch((err) => {});
    }
  }, [name, email, pw, checkPw]);

  useEffect(() => {
    setPrivacy(allCheck);
    setUse(allCheck);
    setBackground(allCheck);
  }, [allCheck]);

  useEffect(() => {
    if (privacy && use && background) {
      setAllCheck(true);
    } else if (!privacy || !use || !background) {
      setAllCheck(false);
    }
  }, [privacy, use, background]);

  useEffect(() => {
    // cert에
    if (phone) {
      setIp(false);
      setNoCert(false);
    } else if (ip) {
      setPhone(false);
      setNoCert(false);
    } else {
      setPhone(false);
      setIp(false);
    }
  }, [phone, ip, noCert]);

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
