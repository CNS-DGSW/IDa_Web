import React, { useState } from "react";
import { observer } from "mobx-react";
import Find from "components/Find";
import useStore from "util/lib/hooks/useStore";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FindContainer = ({}) => {
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
    toast("메일 전송중입니다.");
    tryPwCode(email)
      .then((res) => {
        setEmailLoading(false);
      })
      .catch((err) => {
        setEmailLoading(false);
        if (err.message.includes("400")) {
          toast("메일 형식이 아닙니다.");
        } else if (err.message.includes("404")) {
          toast("존재하지 않는 메일입니다.");
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
          if (err.message.includes("409")) {
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
      <ToastContainer />
    </>
  );
};

export default observer(FindContainer);
