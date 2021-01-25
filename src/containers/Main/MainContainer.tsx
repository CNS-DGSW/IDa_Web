import Main from "components/Main";
import useStore from "lib/hooks/useStore";
import { observer } from "mobx-react";
import React, { useCallback } from "react";
import { toast } from "react-toastify";

const MainContainer = () => {
  const { store } = useStore();

  const { downloadApplyInfo } = store.FileStore;

  const handleDownloadApplyInfo = useCallback(() => {
    downloadApplyInfo().catch(() => {
      toast.warn("아직 전형 요강이 등록되지 않았어요.");
    });
  }, [downloadApplyInfo]);

  return (
    <>
      <Main handleDownloadApplyInfo={handleDownloadApplyInfo} />
    </>
  );
};

export default observer(MainContainer);
