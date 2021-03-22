import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import useStore from "lib/hooks/useStore";
import FirstResult from "components/ResultStatusCheck/FirstResult";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import Apply from "util/enums/Apply";

interface FirstResultContainerProps {
  firstOpenModal: () => void;
}

const FirstResultContainer = ({
  firstOpenModal,
}: FirstResultContainerProps) => {
  const history = useHistory();
  const { store } = useStore();
  const { pass, tryGetStatus, submit, print } = store.StatusStore;
  const [comment, setComment] = useState<string>("");
  // 합격 불합격 체점중 등등 멘트를 관리하는 state
  const [applyCheck, setApplyCheck] = useState<Apply | null>();
  const [applyComment, setApplyComment] = useState<string>("");
  // 합격 하였을때 전형을 넣어주는 state

  // state를 이용해서 멘트를 정해주는 함수
  const setCommented = useCallback(() => {
    if (pass) {
      setComment("축하드립니다 합격되었습니다.");
      if (applyCheck === Apply.SPECIAL) {
        setApplyComment("특별전형");
      } else if (applyCheck === Apply.COMMON) {
        setApplyComment("일반전형");
      } else if (applyCheck === Apply.OTHER) {
        setApplyComment("특례입학");
      }
    } else if (pass === false) {
      setComment("불합격입니다.");
    } else if (pass === null) {
      if (!submit || !print) {
        setComment("미제출 또는 우편미도착 입니다.");
      } else {
        setComment("점수 체점중입니다.");
      }
    }
  }, [pass, submit, print, applyCheck]);

  // api 받아와서 처리하기
  const getStatus = useCallback(() => {
    tryGetStatus()
      .then((res) => {
        setApplyCheck(res.data.firstApplyType);
        setCommented();
      })
      .catch((err) => {
        if (err.message.includes("401")) {
          toast.warn("로그인이 필요합니다.");
          history.push("/login");
        } else {
          toast.warn("서버 오류입니다.");
        }
      });
  }, [applyCheck]);

  useEffect(() => {
    getStatus();
  }, [getStatus]);

  useEffect(() => {
    setCommented();
  }, [setCommented, applyCheck]);

  return (
    <>
      {/* api를 받고 난후 데이터가 오면 보여줌 */}
      {pass !== undefined && (
        <FirstResult
          comment={comment}
          firstOpenModal={firstOpenModal}
          applyComment={applyComment}
        />
      )}
    </>
  );
};

export default observer(FirstResultContainer);
