import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import useStore from "lib/hooks/useStore";
import SecondResult from "components/ResultStatusCheck/SecondResult";
import { useHistory } from "react-router-dom";
import { handleLogin } from "lib/handleErrors";

interface SecondResultContainerProps {
  secondOpenModal: () => void;
}

const SecondResultContainer = ({
  secondOpenModal,
}: SecondResultContainerProps) => {
  const history = useHistory();
  const { store } = useStore();
  const { tryGetFinalStatus } = store.StatusStore;
  const [comment, setComment] = useState<string>("");
  // 합격 여부 불합격 여부 등 멘트를 useState로 관리

  const selectComment = useCallback(
    // pass 여부를 props로 받아와서 comment를 정해주는 함수
    (pass: boolean | null) => {
      if (pass) {
        setComment("합격하셨습니다. 축하드립니다.");
      } else if (pass === false) {
        setComment("안타깝게도 불합격입니다. 고생하셨습니다.");
      } else if (pass === null) {
        setComment("기다려주세요. 아직 결과가 나오지 않았습니다.");
      }
    },
    [comment]
  );

  const getData = () => {
    // pass 여부 받아오기
    tryGetFinalStatus()
      .then((res) => {
        selectComment(res.data.isPassed);
      })
      .catch((err) => {
        handleLogin(err, history);
      });
  };

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <>
      {/* comment가 업데이트 되면 true가 되어서 모달이 뜨게됨 */}
      {/* 이렇게 해주는 이유는 comment가 비어있을때 모달이 뜨게되면 아무 멘트없이 빈 모달만 뜨게됨 */}
      {comment && (
        <SecondResult comment={comment} secondOpenModal={secondOpenModal} />
      )}
    </>
  );
};

export default observer(SecondResultContainer);
