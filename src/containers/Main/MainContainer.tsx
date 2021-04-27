import Main from "components/Main";
import FirstResultContainer from "containers/ResultStatus/FirstResult/FirstResultContainer";
import SecondResultContainer from "containers/ResultStatus/SecondResult/SecondResultContainer";
import useStore from "lib/hooks/useStore";
import { observer } from "mobx-react";
import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";

const MainContainer = () => {
  const { store } = useStore();
  const { downloadApplyInfo } = store.FileStore;

  const [firstResultModal, setFirstResultModal] = useState<boolean>(false);
  const [secondResultModal, setSecondResultModal] = useState<boolean>(false);
  // 1,2 차 합격 여부 모달

  const handleDownloadApplyInfo = useCallback(() => {
    downloadApplyInfo().catch(() => {
      toast.warn("아직 전형 요강이 등록되지 않았어요.");
    });
  }, [downloadApplyInfo]);

  const firstOpenModal = useCallback(() => {
    setFirstResultModal(!firstResultModal);
  }, [firstResultModal]);
  // 모달 true false 하는것

  const secondOpenModal = useCallback(() => {
    setSecondResultModal(!secondResultModal);
  }, [secondResultModal]);
  // 모달 true false 하는것

  const scrollHiden = () => {
    // modal이 true가 되면 스크롤을 못하게 hidden으로 숨겨주는 함수
    firstResultModal || secondResultModal
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
    return () => (document.body.style.overflow = "unset");
  };

  useEffect(() => {
    scrollHiden();
  }, [firstResultModal, secondResultModal]);

  return (
    <>
      <Main
        handleDownloadApplyInfo={handleDownloadApplyInfo}
        firstOpenModal={firstOpenModal}
        secondOpenModal={secondOpenModal}
      />
      {firstResultModal && (
        <FirstResultContainer firstOpenModal={firstOpenModal} />
      )}

      {secondResultModal && (
        <SecondResultContainer secondOpenModal={secondOpenModal} />
      )}
    </>
  );
};

export default observer(MainContainer);
