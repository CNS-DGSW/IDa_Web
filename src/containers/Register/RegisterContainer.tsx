import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import Register from "components/Register";
import { Response } from "util/types/Response";
import useStore from "lib/hooks/useStore";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import Agree from "util/enums/Agree";

const RegisterContainer = () => {
  const { store } = useStore();
  const { tryRegister, trySendEmail } = store.AuthStore;

  const history = useHistory();

  // 실명인증 상태
  const [isAuth, setIsAuth] = useState<boolean>(false);

  //모두동의 체크박스
  const [allCheck, setAllCheck] = useState<boolean>(false);

  // 정보들 받는 input들
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNum,setPhoneNum] = useState<string>("");
  const [phoneCheck,setPhoneCheck] = useState<string>("");
  const [pw, setPw] = useState<string>("");
  const [checkPw, setCheckPw] = useState<string>("");
  const [birth, setBirth] = useState<string>("");
  const [duplicateInfo, setDuplicateInfo] = useState<string>("");

  // 로딩
  const [emailLoading, setEmailLoading] = useState<boolean>(false);

  // 동의 약관 모달창 상태들 (개인정보 활용 동의,사이트 이용약관 동의,개인정보 취급방침 동의)
  const [clickUsingPersonelInfo, setClickUsingPersonelInfo] =
    useState<boolean>(false);
  const [clickUsingSite, setClickUsingSite] = useState<boolean>(false);
  const [clickHandlingPersonelInfo, setClickHandlingPersonelInfo] =
    useState<boolean>(false);

  const toggleUsingPersonelInfoModal = useCallback(() => {
    setClickUsingPersonelInfo((v) => !v);
  }, []);

  const toggleUsingSiteModal = useCallback(() => {
    setClickUsingSite((v) => !v);
  }, []);

  const toggleHandlingPersonelInfoModal = useCallback(() => {
    setClickHandlingPersonelInfo((v) => !v);
  }, []);

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

  // 생년월일 onChange
  useEffect(() => {
    if (birth) {
      setBirth(
        birth.replace(/-/g, "").replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3")
      );
    }
  }, [birth]);

  // 전화번호 onChange
  useEffect(() => {
    if (phoneNum.length === 10) {
      setPhoneNum(phoneNum.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
    }
    if (phoneNum.length === 13) {
      setPhoneNum(phoneNum.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
    }
  },[phoneNum])

  //회원가입하기
  const handleRegister = useCallback(async () => {
    // console.log("email", email);
    // console.log("pw", pw);
    // console.log("checkPw", checkPw);
    // console.log("name", name);
    // console.log("birth", birth);
    // console.log("duplicateInfo", duplicateInfo);
    // console.log("isAuth", isAuth);

    if (!email || !pw || !checkPw || !name || !birth) {
      toast.warning("빈칸이 있습니다.");
    } else if (!isAuth) {
      toast.warning("실명 인증을 하지 않았습니다.");
    } else if (pw.length < 8) {
      toast.warning("비밀번호가 8자리 이상이여야 합니다.");
    } else if (pw !== checkPw) {
      toast.warning("비밀번호가 일치하지 않습니다.");
    } else if (!allCheck) {
      toast.warning("모두 동의를 체크해 주세요");
    } else {
      await tryRegister(name, email, pw, birth, duplicateInfo)
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
          } else if (err.response?.status === 410) {
            toast.warning("이미 사용중인 실명인증입니다.");
          } else {
            toast.error("서버 오류입니다");
          }
        });
    }
  }, [name, email, pw, checkPw, allCheck, birth, isAuth, duplicateInfo]);

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
        isAuth={isAuth}
        setIsAuth={setIsAuth}
        allCheck={allCheck}
        setAllCheck={setAllCheck}
        name={name}
        setName={setName}
        birth={birth}
        setBirth={setBirth}
        phoneNum={phoneNum}
        setPhoneNum={setPhoneNum}
        phoneCheck={phoneCheck}
        setPhoneCheck={setPhoneCheck}
        email={email}
        setEmail={setEmail}
        pw={pw}
        setPw={setPw}
        checkPw={checkPw}
        setCheckPw={setCheckPw}
        duplicateInfo={duplicateInfo}
        setDuplicateInfo={setDuplicateInfo}
        handleRegister={handleRegister}
        emailLoading={emailLoading}
        handleEmailSend={handleEmailSend}
        clickUsingPersonelInfo={clickUsingPersonelInfo}
        clickUsingSite={clickUsingSite}
        clickHandlingPersonelInfo={clickHandlingPersonelInfo}
        toggleUsingPersonelInfoModal={toggleUsingPersonelInfoModal}
        toggleUsingSiteModal={toggleUsingSiteModal}
        toggleHandlingPersonelInfoModal={toggleHandlingPersonelInfoModal}
      />
    </>
  );
};

export default observer(RegisterContainer);
