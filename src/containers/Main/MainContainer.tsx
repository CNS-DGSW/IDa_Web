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

  // 입학 전형 요강 다운로드
  const handleDownloadApplyInfo = useCallback(() => {
    downloadApplyInfo().catch(() => {
      toast.warn("아직 전형 요강이 등록되지 않았어요.");
    });
  }, [downloadApplyInfo]);

  const firstOpenModal = useCallback(() => {
    setFirstResultModal(!firstResultModal);
  }, [firstResultModal]);

  const secondOpenModal = useCallback(() => {
    setSecondResultModal(!secondResultModal);
  }, [secondResultModal]);

  const scrollHiden = () => {
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
      {firstResultModal ? (
        <FirstResultContainer firstOpenModal={firstOpenModal} />
      ) : (
        <></>
      )}
      {secondResultModal ? (
        <SecondResultContainer secondOpenModal={secondOpenModal} />
      ) : (
        <></>
      )}
    </>
  );
};

export default observer(MainContainer);
