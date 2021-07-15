import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import ChangePw from "components/ChangePw/ChangePw";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import useStore from "lib/hooks/useStore";

const ChangePwContainer = ({}) => {
  const { store } = useStore();

  const { tryChangePw } = store.AuthStore;
  // 비밀번호 바꾸는 action

  const [originPw, setOriginPw] = useState<string>("");
  // 원래 비밀번호
  const [changePw, setChangePw] = useState<string>("");
  // 바꾸는 비밀번호
  const [checkPw, setCheckPw] = useState<string>("");
  // 바꾸는 비밀번호 확인

  const history = useHistory();

  // 비밀번호 바꾸는 함수
  const handleTryChangePw = useCallback(async () => {
    if (checkPw === changePw && changePw !== originPw) {
      tryChangePw(changePw, originPw)
        .then((res) => {
          toast.success("비밀번호가 변경되었습니다.");
          history.push("/");
        })
        .catch((err) => {
          if (err.response?.status === 401) {
            toast.warning("현재 비밀번호가 다릅니다.");
          } else {
            toast.error("서버 오류입니다");
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
      history.push("/");
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
        handleTryChangePw={handleTryChangePw}
      />
    </>
  );
};

export default observer(ChangePwContainer);
