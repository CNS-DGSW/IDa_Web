import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import ChangePw from "components/ChangePw/ChangePw";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { tryChangePw } from "stores/Auth/useAuth";

const ChangePwContainer = ({}) => {
  // 비밀번호 바꾸는 action

  const [originPw, setOriginPw] = useState<string>("");
  // 원래 비밀번호
  const [changePw, setChangePw] = useState<string>("");
  // 바꾸는 비밀번호
  const [checkPw, setCheckPw] = useState<string>("");
  // 바꾸는 비밀번호 확인

  const history = useNavigate();

  const checkPasswordValidate = () => {
    if (changePw.length < 8 && checkPw.length < 8) {
      toast.warning("비밀번호는 8자리 이상이어야 합니다.");
    } else if (
      /[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(changePw) === false ||
      /\s/.test(changePw) === true
    ) {
      toast.warning("비밀번호에 공백 또는 한글을 입력할 수 없습니다.");
    } else {
      handleTryChangePw();
    }
  };

  // 비밀번호 바꾸는 함수
  const handleTryChangePw = useCallback(async () => {
    if (checkPw === changePw && changePw !== originPw) {
      tryChangePw(changePw, originPw)
        .then(() => {
          toast.success("비밀번호가 변경되었습니다.");
          history("/", { state: { isValid: true } });
        })
        .catch((err: any) => {
          if (err.response?.status === 401) {
            toast.warning("현재 비밀번호가 다릅니다.");
          } else {
            toast.error("서버 오류입니다. 잠시 후 다시 시도해주세요.");
          }
        });
    } else if (changePw === originPw) {
      toast.warning("같은 비밀번호로 변경할 수 없습니다.");
    } else {
      toast.warning("새로운 비밀번호 확인이 다릅니다.");
    }
  }, [checkPw, changePw, originPw]);

  // 비밀번호 변경할때 accessToken 있는지 확인
  // accessToken이 있으면 헤더에서 자기 자신 accesToken인지 확인
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      history("/", { state: { isValid: true } });
    }
  });

  return (
    <>
      <ChangePw
        originPw={originPw}
        setOriginPw={setOriginPw}
        changePw={changePw}
        setChangePw={setChangePw}
        checkPw={checkPw}
        setCheckPw={setCheckPw}
        handleTryChangePw={checkPasswordValidate}
      />
    </>
  );
};

export default observer(ChangePwContainer);
