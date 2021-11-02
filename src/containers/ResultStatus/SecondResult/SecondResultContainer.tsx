import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import useStore from "lib/hooks/useStore";
import SecondResult from "components/ResultStatusCheck/SecondResult";
import { useHistory } from "react-router-dom";
import { handleLogin } from "lib/handleErrors";
import { FinalStatusResponse } from "util/types/Response";

interface SecondResultContainerProps {
  secondOpenModal: () => void;
  modalLoading: boolean;
  setModalLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const SecondResultContainer = ({
  secondOpenModal,
  modalLoading,
  setModalLoading,
}: SecondResultContainerProps) => {
  const history = useHistory();
  const { store } = useStore();
  const { tryGetFinalStatus } = store.StatusStore;
  const [comment, setComment] = useState<string>("");

  const {
    isPassed,
    examCode,
    name,
    sex,
    birth,
    area,
    school,
    finalApplyType,
    finalApplyDetailType,
    gradeType,
  } = store.StatusStore;

  // 합격 여부 불합격 여부 등 멘트를 useState로 관리

  const selectComment = useCallback(
    // pass 여부를 props로 받아와서 comment를 정해주는 함수
    (pass?: boolean | null) => {
      if (pass) {
        setComment("합격하셨습니다. 축하드립니다.");
      } else if (pass === false) {
        setComment("불합격입니다. 수고하셨습니다.");
      } else if (pass === null) {
        setComment("기다려주세요. 아직 결과가 나오지 않았습니다.");
      }
    },
    [comment]
  );

  const getData = useCallback(() => {
    // pass 여부 받아오기
    tryGetFinalStatus()
      .then((res) => {
        console.log("=>>", res.data);
        selectComment(res.data.isPassed);
        setModalLoading(false);
      })
      .catch((err) => {
        handleLogin(err, history);
      });
  }, [history]);

  useEffect(() => {
    getData();
  }, []);

  if (modalLoading) {
    return <></>;
  }
  return (
    <>
      {/* comment가 업데이트 되면 true가 되어서 모달이 뜨게됨 */}
      {/* 이렇게 해주는 이유는 comment가 비어있을때 모달이 뜨게되면 아무 멘트없이 빈 모달만 뜨게됨 */}
      {/* {comment && ( */}
      <SecondResult comment={comment} secondOpenModal={secondOpenModal}>
        {examCode && (
          <div>
            <br />
            <hr />
            <br />
            <div>수험번호 :{examCode} </div>
            <div>성명 : {name}</div>
            <div>성별 : {sex}</div>
            <div>생년월일 : {birth?.split("T")[0]}</div>
            <div>지역 : {area}</div>
            <div>출신학교 : {school}</div>
            <div>학력 : {gradeType}</div>
            {isPassed && <div>합격 전형 : {finalApplyType}</div>}
            <div>최종합격여부 : {isPassed ? "합격" : "불합격"}</div>
          </div>
        )}
      </SecondResult>
      {/* )} */}
    </>
  );
};

export default observer(SecondResultContainer);
