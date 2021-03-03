import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import useStore from "lib/hooks/useStore";
import ResultStatus from "components/ResultStatusCheck/ResultStatus";

interface ResultStatusContainerPropse {}

const ResultStatusContainer = ({}: ResultStatusContainerPropse) => {
  const { store } = useStore();
  const { submit, print, flag, tryGetStatus } = store.StatusStore;
  const [post, setPost] = useState<boolean>(false);
  const [internet, setInternet] = useState<boolean>(false);

  const { tryCloseModal } = store.AuthStore;

  const getStauts = useCallback(() => {
    tryGetStatus()
      .then(() => {
        setPost(submit);
        setInternet(print);
      })
      .catch(() => {});
  }, [post, internet]);

  useEffect(() => {
    if (flag) {
      setPost(submit);
      setInternet(print);
    } else {
      getStauts();
    }
  }, [post, internet]);

  return (
    <ResultStatus
      post={post}
      internet={internet}
      tryCloseModal={tryCloseModal}
    />
  );
};

export default observer(ResultStatusContainer);
