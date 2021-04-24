import React, { useState } from "react";
import { observer } from "mobx-react";
import Find from "components/Find";
import useStore from "lib/hooks/useStore";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FindContainer = ({}) => {
  const [name, setName] = useState<string>("");
  // 이름
  const [email, setEmail] = useState<string>("");
  // 이메일
  const [newPw, setNewPw] = useState<string>("");
  // 새로운 비밀번호
  const [checkPw, setCheckPw] = useState<string>("");
  // 새로운 비밀번호 확인
  const [code, setCode] = useState<string>("");
  // 이메일 코드
  const [emailLoading, setEmailLoading] = useState<boolean>(false);
  // 메일이 성공적으로 보낼때까지의 로딩

  const { store } = useStore();
  const history = useHistory();

  const { tryChangePwByEmail, tryPwCode } = store.AuthStore;
  // tryPwCode는 메일로 코드 받는 action
  //  trychangebyemail 은 메일로 받은 code랑 새로운 비밀번호 보내주는 action

  // 메일로 코드받는 함수
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

  // 새로운 비밀번호, 이메일로 받은 코드 보내주는 함수
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
      <ToastContainer />
    </>
  );
};

export default observer(FindContainer);
