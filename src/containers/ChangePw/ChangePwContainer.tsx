import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import ChangePw from "components/Profile/ChangePw";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { server } from "config/config.json";
import { sha256 } from "js-sha256";

const ChangePwContainer = ({}) => {
  const [originPw, setOriginPw] = useState<string>("");
  const [changePw, setChangePw] = useState<string>("");
  const [checkPw, setCheckPw] = useState<string>("");

  const history = useHistory();

  const tryChangePw = async () => {
    if (checkPw === changePw && changePw !== originPw) {
      const body = {
        newPw: sha256(changePw),
        pw: sha256(originPw),
      };

      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      };
      patchChangePw(body, config)
        .then((res) => {
          history.push("/");
        })
        .catch((err: Error) => {
          if (err.message.includes("401")) {
            console.log("현재 비밀번호가 다릅니다.");
          }
        });
    } else if (changePw === originPw) {
      console.log("같은 비밀번호로 변경할 수 없습니다.");
    } else {
      console.log("새로운 비밀번호 확인이 다릅니다.");
    }
  };

  const patchChangePw = async (body: object, config: object) => {
    try {
      const { data } = await axios.patch(`${server}/auth/changePw`, body, config);
      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  };

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
        tryChangePw={tryChangePw}
      />
    </>
  );
};

export default observer(ChangePwContainer);
