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
  const { tryRegister, trySendEmail, trySendPhone } = store.AuthStore;

  const history = useHistory();

  //모두동의 체크박스
  const [allCheck, setAllCheck] = useState<boolean>(false);

  // 정보들 받는 input들
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNum, setPhoneNum] = useState<string>("");
  const [phoneCheck, setPhoneCheck] = useState<string>("");
  const [pw, setPw] = useState<string>("");
  const [checkPw, setCheckPw] = useState<string>("");
  const [birth, setBirth] = useState<string>("");
  // 휴대폰 인증 로직이 생긴다면 state추가 필요

  // 휴대폰 인증 카운터
  const [counter, setCounter] = useState<string>("0:00");

  // 로딩
  const [loading, setLoading] = useState<boolean>(false);

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

  /** 전화번호 인증을 눌렀을 때 카운터 생성 함수(초단위계산) */
  const makeSecCounter = (
    counterSetter: React.Dispatch<React.SetStateAction<string>>,
    limitTime: number,
    runningTime: number
  ) => {
    let limitT = limitTime;
    let timerId = setInterval(() => {
      counterSetter(
        `${Math.floor(limitT / 60)}:${`${limitT % 60}`.padStart(2,"0")}`
        );
      limitT -= runningTime;
      if (limitT < 0) {
        counterSetter("0:00");
        clearInterval(timerId);
      }
    }, runningTime * 1000);
  };

  // 전화번호로 인증번호 요청
  const handlePhoneNumSend  = async () => {
    console.log(phoneNum)
    if (!phoneNum) {
      toast.warning("전화번호를 입력해 주세요");
    } else {
      setLoading(true);
      var highestIntervalId = setInterval(";");
      for (var i = 0; i < highestIntervalId; i++) {
        clearInterval(i);
      }
      makeSecCounter(setCounter, 300, 1);
      toast.success("메시지 전송중입니다.");
      // makeSecCounter(setCounter,300,1)
      await trySendPhone(phoneNum)
        .then((res: Response) => {
          toast.success("메시지가 전송되었습니다");
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          const errMsg = err.response?.this.state;
          // 통신할 때 에러핸들링
        });
    }
  }

  //email 인증 보내기
  const handleEmailSend = useCallback(async () => {
    console.log(email)
    if (!email) {
      toast.warning("이메일을 입력해 주세요");
    } else {
      setLoading(true);
      toast.success("이메일이 전송중입니다.");
      await trySendEmail(email)
        .then((res: Response) => {
          toast.success("이메일이 전송되었습니다.");
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
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
  }, [email, loading]);

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
      setPhoneNum(phoneNum.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3"));
    }
    if (phoneNum.length === 13) {
      setPhoneNum(
        phoneNum.replace(/-/g, "").replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3")
      );
    }
  }, [phoneNum]);

  //회원가입하기
  const handleRegister = useCallback(async () => {
    console.log("name", name);
    console.log("birth", birth);
    console.log("email", email);
    console.log("pw", pw);
    console.log("checkPw", checkPw);
    console.log("phoneNum",phoneNum)
    console.log("phoneCheck",phoneCheck)
    
    if (!email || !pw || !checkPw || !name || !birth) {
      toast.warning("빈칸이 있습니다.");
    } else if (pw.length < 8) {
      toast.warning("비밀번호가 8자리 이상이여야 합니다.");
    } else if (pw !== checkPw) {
      toast.warning("비밀번호가 일치하지 않습니다.");
    } else if (!allCheck) {
      toast.warning("모두 동의를 체크해 주세요");
    } else {
      await tryRegister(name, birth, email, pw, phoneNum,phoneCheck)
        .then((res: Response) => {
          toast.success("회원가입이 완료되었습니다.");
          history.push("login");
        })
        .catch((err) => {
          console.log(err);
          console.log(err.response);

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
            console.log("error");
            console.log(err);
            toast.error("서버 오류입니다");
          }
        });
    }
  }, [name, birth, email, pw, checkPw,phoneNum, allCheck]);
  
  useEffect(() => {
    console.log(loading)
  },[loading])

  //이메일인증 enter처리
  useEffect(() => {
    const listener = (e:KeyboardEvent) => {
      const target = e.target as HTMLInputElement
      const placeholder = target.placeholder
      // type이 button인 요소는 placeholder가 없기 때문에 or에 추가
      if ((e.key === "Enter" || e.key === "NumpadEnter") && target.placeholder){
        if (placeholder === "전화번호"){
          handlePhoneNumSend();
        } else if (placeholder === "이메일") {
          handleEmailSend();
        } else {
          handleRegister();
        }
      }
    }

    // const listener = (e: KeyboardEvent) => {
    //   if (e.key === "Enter" || e.key === "NumpadEnter") {
    //     if (name && email && pw && birth && checkPw) {
    //       handleRegister();
    //     } else {
    //       handleEmailSend();
    //     }
    //   }
    // };

    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [email, name, pw, checkPw, birth, allCheck, phoneNum]);

  return (
    <>
      <Register
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
        counter={counter}
        email={email}
        setEmail={setEmail}
        pw={pw}
        setPw={setPw}
        checkPw={checkPw}
        setCheckPw={setCheckPw}
        handlePhoneNumSend={handlePhoneNumSend}
        handleRegister={handleRegister}
        loading={loading}
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
