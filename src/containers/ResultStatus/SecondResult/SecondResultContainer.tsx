import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import useStore from "lib/hooks/useStore";
import SecondResult from "components/ResultStatusCheck/SecondResult";

interface SecondResultContainerProps {
  secondOpenModal: () => void;
}

const SecondResultContainer = ({
  secondOpenModal,
}: SecondResultContainerProps) => {
  const { store } = useStore();
  const { tryGetFinalStatus } = store.StatusStore;
  const [comment, setComment] = useState<string>("");

  const selectComment = useCallback(
    (pass: boolean | null) => {
      if (pass) {
        setComment("합격하셨습니다. 축하드립니다.");
      } else if (pass === false) {
        setComment("불합격입니다. 수고하셨습니다");
      } else if (pass === null) {
        setComment("기다려주세요. 아직 결과가 나오지 않았습니다.");
      }
    },
    [comment]
  );

  const getData = () => {
    tryGetFinalStatus()
      .then((res) => {
        selectComment(res.data.isPassed);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    getData();
  }, []);

  return <SecondResult comment={comment} secondOpenModal={secondOpenModal} />;
};

export default observer(SecondResultContainer);
