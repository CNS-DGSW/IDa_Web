import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import useStore from "lib/hooks/useStore";
import ResultStatus from "components/ResultStatusCheck/ResultStatus";
import { handleLogin } from "lib/handleErrors";
import { useHistory } from "react-router-dom";

interface ResultStatusContainerPropse {}

const ResultStatusContainer = ({}: ResultStatusContainerPropse) => {
  const history = useHistory();

  const { store } = useStore();
  const { tryGetStatus } = store.StatusStore;
  const [post, setPost] = useState<boolean | undefined>(undefined);
  // 우편 접수 현황
  const [internet, setInternet] = useState<boolean | undefined>(undefined);
  // 인터넷 원서 접수 현황
  const { tryCloseModal } = store.AuthStore;
  // 헤더에 있어서 모달을 store에서 관리해줌

  // api 받아오기
  const getStatus = useCallback(async () => {
    await tryGetStatus()
      .then((res) => {
        setPost(res.data.isSubmit);
        setInternet(res.data.isPrintedApplicationArrived);
      })
      .catch((err) => {
        handleLogin(err, history);
      });
  }, []);

  useEffect(() => {
    getStatus();
  }, [getStatus]);

  return (
    <>
      {/* api를 받고 난후 데이터가 오면 보여줌 */}
      {post !== undefined && internet !== undefined && (
        // !post로 안하는 이유는 우편 접수가 아직 안되있으면 서버에서 false로 주기 때문
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
