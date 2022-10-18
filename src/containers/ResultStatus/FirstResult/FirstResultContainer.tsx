import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import useStore from "lib/hooks/useStore";
import FirstResult from "components/ResultStatusCheck/FirstResult";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import Apply from "util/enums/Apply";
import { handleLogin } from "lib/handleErrors";

interface FirstResultContainerProps {
  firstOpenModal: () => void;
  modalLoading: boolean;
  setModalLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const FirstResultContainer = ({
  firstOpenModal,
  modalLoading,
  setModalLoading,
}: FirstResultContainerProps) => {
  const history = useHistory();
  const { store } = useStore();
  const { canAccess, pass, tryGetStatus, submit, print } = store.StatusStore;
  const [errStatus, setErrStatus] = useState<number>(0);
  const status: number = 403;
  const [comment, setComment] = useState<string | undefined>("");
  // 합격 불합격 체점중 등등 멘트를 관리하는 state
  const [applyCheck, setApplyCheck] = useState<Apply | null>();
  const [applyComment, setApplyComment] = useState<string>("");
  // 합격 하였을때 전형을 넣어주는 state

  // state를 이용해서 멘트를 정해주는 함수
  const setCommented = useCallback(() => {
    if (canAccess) {
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
        setComment("안타깝게도 불합격 되었습니다.");
      } else if (pass === null) {
        if (!submit || !print) {
          setComment("미제출 또는 우편미도착 입니다.");
        } else {
          setComment("점수 체점중입니다.");
        }
      } else {
        setComment(pass);
      }
    } else if (canAccess) {
      setComment("기다려주세요. 아직 결과가 나오지 않았습니다.");
    }
    // setModalLoading(false);
  }, [pass, submit, print, applyCheck, canAccess, modalLoading]);
  // api 받아와서 처리하기
  const getStatus = useCallback(() => {
    // setModalLoading(true);
    tryGetStatus()
      .then((res) => {
        setApplyCheck(res.data.firstApplyType);
        setCommented();
        setModalLoading(false);
      })
      .catch((err) => {
        setErrStatus(err.response.status);
        // if (errStatus === 403) {
        //   setComment("아직 확인 불가능 합니다.");
        // } else {
        handleLogin(err, history);
        // }
      });
  }, [applyCheck, errStatus, modalLoading, setModalLoading]);

  useEffect(() => {
    getStatus();
  }, [getStatus]);

  useEffect(() => {
    setCommented();
  }, [setCommented, applyCheck]);

  if (modalLoading) {
    return <></>;
  }

  return (
    <>
      {/* api를 받고 난후 데이터가 오면 보여줌 */}

      {!modalLoading && (
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
