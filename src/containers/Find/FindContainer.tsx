import React, { useState } from "react";
import { observer } from "mobx-react";
import Find from "components/Find";
import useStore from "util/lib/hooks/useStore";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const FindContainer = ({}) => {
  const [changePage, setChangePage] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [birth, setBirth] = useState<string>("");
  const [newPw, setNewPw] = useState<string>("");
  const [checkPw, setCheckPw] = useState<string>("");
  const [code, setCode] = useState<string>("");
  const [emailLoading, setEmailLoading] = useState<boolean>(false);

  const { store } = useStore();
  const history = useHistory();

  const { tryChangePwByEmail, tryPwCode } = store.AuthStore;

  const handlePwCode = () => {
    setEmailLoading(true);
    tryPwCode(email)
      .then((res) => {
        setEmailLoading(false);
      })
      .catch((err) => {
        setEmailLoading(false);
        console.log(err);
      });
  };

  const handleChangePw = () => {
    if (newPw !== checkPw) {
      console.log("비밀번호가 일치하지 않습니다.");
    } else {
      tryChangePwByEmail(code, newPw)
        .then((res) => {
          history.push("/login");
          toast("Wow so easy !");
        })
        .catch((err) => {
          if (err.message.includes("409")) {
            console.log("메일 인증 해라");
          } else {
            console.log(err);
          }
        });
    }
  };

  return (
    <Find
      changePage={changePage}
      setChangePage={setChangePage}
      name={name}
      setName={setName}
      email={email}
      setEmail={setEmail}
      birth={birth}
      setBirth={setBirth}
      newPw={newPw}
      setNewPw={setNewPw}
      checkPw={checkPw}
      setCheckPw={setCheckPw}
      code={code}
      setCode={setCode}
      emailLoading={emailLoading}
      handlePwCode={handlePwCode}
      handleChangePw={handleChangePw}
    />
  );
};

export default observer(FindContainer);
