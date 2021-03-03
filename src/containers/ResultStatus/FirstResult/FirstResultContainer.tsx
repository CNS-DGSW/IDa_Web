import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import useStore from "lib/hooks/useStore";
import FirstResult from "components/ResultStatusCheck/FirstResult";

interface FirstResultContainerProps {
  firstOpenModal: () => void;
}

const FirstResultContainer = ({
  firstOpenModal,
}: FirstResultContainerProps) => {
  const { store } = useStore();
  const { flag, pass, tryGetStatus } = store.StatusStore;
  const [comment, setComment] = useState<string>("");

  const setCommented = useCallback((pass: boolean | null) => {
    if (pass) {
      setComment("축하드립니다 합격되었습니다.");
    } else if (pass === false) {
      setComment("불합격입니다.");
    } else if (pass === null) {
      setComment("점수 체점중입니다.");
    }
  }, []);

  const getStatus = () => {
    tryGetStatus().then((res) => {
      setCommented(res.data.isPassedFirstApply);
    });
  };

  useEffect(() => {
    if (flag) {
      setCommented(flag);
    } else {
      getStatus();
    }
  }, [pass]);

  return <FirstResult comment={comment} firstOpenModal={firstOpenModal} />;
};

export default observer(FirstResultContainer);
