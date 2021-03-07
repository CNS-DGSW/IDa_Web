import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import useStore from "lib/hooks/useStore";
import ResultStatus from "components/ResultStatusCheck/ResultStatus";
import { toast } from "react-toastify";

interface ResultStatusContainerPropse {}

const ResultStatusContainer = ({}: ResultStatusContainerPropse) => {
  const { store } = useStore();
  const { tryGetStatus } = store.StatusStore;
  const [post, setPost] = useState<boolean | undefined>(undefined);
  const [internet, setInternet] = useState<boolean | undefined>(undefined);

  const { tryCloseModal } = store.AuthStore;

  const getStauts = useCallback(async () => {
    await tryGetStatus()
      .then((res) => {
        setPost(res.data.isSubmit);
        setInternet(res.data.isPrintedApplicationArrived);
      })
      .catch(() => {
        toast.error("서버 오류입니다");
      });
  }, []);

  useEffect(() => {
    getStauts();
  }, [getStauts]);

  return (
    <>
      {post !== undefined && internet !== undefined && (
        <ResultStatus
          post={post}
          internet={internet}
          tryCloseModal={tryCloseModal}
        />
      )}
    </>
  );
};

export default observer(ResultStatusContainer);
