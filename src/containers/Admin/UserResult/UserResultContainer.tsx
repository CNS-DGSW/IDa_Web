import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import useStore from "lib/hooks/useStore";
import UserResult from "components/Admin/UserResult";
import { handleAdmin } from "lib/handleErrors";
import Apply from "util/enums/Apply";
import ApplyDetail from "util/enums/ApplyDetail";
import { UserResult as UserResultType } from "util/types/UserResult";
import { observer } from "mobx-react";

const UserRateContainer = ({}) => {
  const history = useHistory();

  const { store } = useStore();
  const { getUserResultList, changeFirstApplyStatus, changeSecondApplyStatus } =
    store.AdminStore;

  const [userResultList, setUserResultList] = useState<UserResultType[]>([]);

  // 지원자 현황 받아오기
  const tryGetUserResultList = useCallback(() => {
    getUserResultList()
      .then((res) => {
        setUserResultList(res.data);
      })
      .catch((err) => {
        handleAdmin(err, history);
      });
  }, []);

  useEffect(() => {
    tryGetUserResultList();
  }, [tryGetUserResultList]);

  const tryChangeFirstApplyStatus = (
    userIdx: number,
    apply: Apply,
    applyDetail: ApplyDetail
  ) => {
    changeFirstApplyStatus(userIdx, apply, applyDetail).then(() => {
      tryGetUserResultList();
    });
  };

  const tryChangeSecondApplyStatus = (
    userIdx: number,
    apply: Apply,
    applyDetail: ApplyDetail
  ) => {
    changeSecondApplyStatus(userIdx, apply, applyDetail).then(() => {
      tryGetUserResultList();
    });
  };

  return (
    <UserResult
      userResultList={userResultList}
      tryChangeFirstApplyStatus={tryChangeFirstApplyStatus}
      tryChangeSecondApplyStatus={tryChangeSecondApplyStatus}
    />
  );
};

export default observer(UserRateContainer);
