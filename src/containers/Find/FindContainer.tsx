import React, { useState } from "react";
import { observer } from "mobx-react";
import Find from "components/Find";
import useStore from "lib/hooks/useStore";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FindContainer = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
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
      .then(() => {
        toast("메일 전송중입니다.");
        setEmailLoading(false);
      })
      .catch((err) => {
        setEmailLoading(false);
        if (err.response?.status === 400) {
          toast.warn("메일 형식이 아닙니다.");
        } else if (err.response?.status === 404) {
          toast.warn("존재하지 않는 메일입니다.");
        } else {
          console.log(err);
        }
      });
  };

  const handleChangePw = () => {
    if (newPw !== checkPw) {
      toast("Wow so easy !");
    } else {
      tryChangePwByEmail(code, newPw)
        .then((res) => {
          history.push("/login");
          toast("Wow so easy !");
        })
        .catch((err) => {
          if (err.response?.status === 409) {
            console.log("메일 인증 해라");
          } else {
            console.log(err);
          }
        });
    }
  };

  return (
    <>
      <Find
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
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
    </>
  );
};

export default observer(FindContainer);
