import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import FirstResult from "components/ResultStatusCheck/FirstResult";
import { useNavigate } from "react-router-dom";
import Apply from "util/enums/Apply";
import { handleLogin } from "lib/handleErrors";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  canAccessAtom,
  checkedPrintAtom,
  passAtom,
  printAtom,
  submitAtom,
} from "stores/Status/StatusAtom";
import StatusApi from "assets/api/StatusApi";
import { ResultStatusResponse } from "util/types/Response";

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
  const [submit,setSubmit] = useRecoilState(submitAtom);
  const [print,setPrint] = useRecoilState(printAtom);
  const [checkedPrint,setCheckedPrint] = useRecoilState(checkedPrintAtom);
  const [pass,setPass] = useRecoilState(passAtom);
  const [canAccess,setCanAccess] = useRecoilState(canAccessAtom);

  const tryGetStatus = async (
    userIdx?: number | null
  ): Promise<ResultStatusResponse> => {
    // 1차 합격 여부 및 우편 원서 접수, 인터넷 원서 접수 현황
    const response: ResultStatusResponse = await StatusApi.GetStatus(userIdx);

    console.log(">>", response.data.isPassedFirstApply);

    // if (response.status === 200) {
    setSubmit(response.data.isSubmit); // 인터넷 원서 접수 현홍
    setPrint(response.data.isPrintedApplicationArrived); //  우편 원서 접수 현황
    setCheckedPrint(response.data.applicationChecked); //  우편 원서 검토 현황
    setPass(response.data.isPassedFirstApply); // 1차 합격 여부
    setCanAccess(response.data.canAccess);
    setApplyCheck(response.data.firstApplyType);
    // }

    return response;
  };

  const history = useNavigate();
  const [errStatus, setErrStatus] = useState<number>(0);
  const status: number = 403;
  const [comment, setComment] = useState<string | undefined>("값이 없습니다.");
  // 합격 불합격 채점중 등등 멘트를 관리하는 state
  const [applyCheck, setApplyCheck] = useState<Apply | null>();
  const [applyComment, setApplyComment] = useState<string>("");
  // 합격 하였을때 전형을 넣어주는 state

  // state를 이용해서 멘트를 정해주는 함수
  const setCommented = useCallback(() => {
    console.log(
      "pass",
      pass,
      "can:",
      canAccess,
      "submit:",
      submit,
      "print:",
      print
    );

    // if (canAccess) {
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
    } 
    // }
      /* else if (pass === null) {
        if (!submit || !print) {
          setComment("미제출 또는 우편미도착 입니다.");
        } else {
          setComment("점수 채점중입니다.");
        }
      } else {
        setComment("점수 채점중입니다.");
      } */
    // setModalLoading(false);
  }, [pass, submit, print, applyCheck, canAccess, modalLoading]);
  
  // api 받아와서 처리하기
  const getStatus = useCallback(() => {
    // setModalLoading(true);
    tryGetStatus()
      .then((res) => {
        setCommented();
        setModalLoading(false);
      })
      .catch((err) => {
        // setErrStatus(err.response.status);
        if (err.response?.status === 400) {
          setComment("합격 발표일시는 2023. 10. 25.(수) 10:00입니다.");
          setModalLoading(false);
        } else {
          handleLogin(err, history);
        }
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
