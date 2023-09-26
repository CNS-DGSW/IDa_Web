import { useSetRecoilState } from "recoil";
import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import SecondResult from "components/ResultStatusCheck/SecondResult";
import { useNavigate } from "react-router-dom";
import { handleLogin } from "lib/handleErrors";

import { useRecoilValue } from "recoil";
import {
  areaAtom,
  birthAtom,
  examCodeAtom,
  finalApplyTypeAtom,
  finalApplyDetailTypeAtom,
  isPassedAtom,
  schoolAtom,
  sexAtom,
} from "stores/Status/StatusAtom";
import { nameAtom } from "stores/Auth/AuthAtom";
import { gradeTypeAtom } from "stores/Write/WriteAtom";
import { FinalStatusResponse } from "util/types/Response";
import StatusApi from "assets/api/StatusApi";

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
  const setIsPassed = useSetRecoilState(isPassedAtom);
  const setExamCode = useSetRecoilState(examCodeAtom);
  const setName = useSetRecoilState(nameAtom);
  const setSex = useSetRecoilState(sexAtom);
  const setBirth = useSetRecoilState(birthAtom);
  const setGradeType = useSetRecoilState(gradeTypeAtom);
  const setArea = useSetRecoilState(areaAtom);
  const setSchool = useSetRecoilState(schoolAtom);
  const setFinalApplyType = useSetRecoilState(finalApplyTypeAtom);
  const setFinalApplyDetailType = useSetRecoilState(finalApplyDetailTypeAtom);

  const tryGetFinalStatusAtom = async (): Promise<FinalStatusResponse> => {
    // 2차(최종) 합격 여부
    const response: FinalStatusResponse = await StatusApi.GetFinalStatus();
    setIsPassed(response.data.isPassed || null);
    setExamCode(response.data.examCode || null);
    setName(response.data.name || "");
    setSex(response.data.sex || null);
    setBirth(response.data.birth || null);
    setGradeType(response.data.gradeType || null);
    setArea(response.data.area || null);
    setSchool(response.data.school || null);
    setFinalApplyType(response.data.finalApplyType || null);
    setFinalApplyDetailType(response.data.finalApplyDetailType || null);
    return response;
  };
  const history = useNavigate();
  const [comment, setComment] = useState<string>("");

  const isPassed = useRecoilValue(isPassedAtom);
  const examCode = useRecoilValue(examCodeAtom);
  const name = useRecoilValue(nameAtom);
  const sex = useRecoilValue(sexAtom);
  const birth = useRecoilValue(birthAtom);
  const area = useRecoilValue(areaAtom);
  const school = useRecoilValue(schoolAtom);
  const finalApplyType = useRecoilValue(finalApplyTypeAtom);
  const gradeType = useRecoilValue(gradeTypeAtom);

  // 합격 여부 불합격 여부 등 멘트를 useState로 관리

  const selectComment = useCallback(
    // pass 여부를 props로 받아와서 comment를 정해주는 함수
    (pass?: boolean | null) => {
      if (pass) {
        setComment("합격하셨습니다. 축하드립니다.");
      } else if (pass === false) {
        setComment("불합격입니다. 수고하셨습니다.");
      } else if (pass === null) {
        setComment("합격 발표일은 11월 1일(수) 오전 10시입니다.");
      }
    },
    [comment]
  );

  const getData = useCallback(() => {
    // pass 여부 받아오기
    tryGetFinalStatusAtom()
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
