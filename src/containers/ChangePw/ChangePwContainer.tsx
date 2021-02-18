import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import ChangePw from "components/ChangePw/ChangePw";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { server } from "config/config.json";
import { sha256 } from "js-sha256";
import { toast } from "react-toastify";
import useStore from "lib/hooks/useStore";

const ChangePwContainer = ({}) => {
  const { store } = useStore();

  const { tryChangePw } = store.AuthStore;

  const [originPw, setOriginPw] = useState<string>("");
  const [changePw, setChangePw] = useState<string>("");
  const [checkPw, setCheckPw] = useState<string>("");

  const history = useHistory();

  const handleTryChangePw = useCallback(async () => {
    if (checkPw === changePw && changePw !== originPw) {
      tryChangePw(changePw, originPw)
        .then((res) => {
          history.push("/");
        })
        .catch((err: Error) => {
          if (err.message.includes("401")) {
            toast.warn("현재 비밀번호가 다릅니다.");
          } else {
            toast.error("서버 오류입니다");
          }
        });
    } else if (changePw === originPw) {
      toast.warn("같은 비밀번호로 변경할 수 없습니다.");
    } else {
      toast.warn("새로운 비밀번호 확인이 다릅니다.");
    }
  }, [checkPw, changePw, originPw]);

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
