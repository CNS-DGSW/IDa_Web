import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import useStore from "lib/hooks/useStore";
import UserResult from "components/Admin/UserResult";
import { handleAdmin } from "lib/handleErrors";
import Apply from "util/enums/Apply";
import ApplyDetail from "util/enums/ApplyDetail";
import { UserResult as UserResultType } from "util/types/UserResult";
import { observer } from "mobx-react";
import { findNameByValue } from "models/ApplyDetailModel";

const UserRateContainer = ({}) => {
  const history = useHistory();

  const { store } = useStore();
  const {
    getUserResultList,
    changeFirstApplyStatus,
    changeSecondApplyStatus,
    changeSecondResultStatus,
    changeFirstResultStatus,
  } = store.AdminStore;

  const [userResultList, setUserResultList] = useState<UserResultType[]>([]);

  // 지원자 현황 받아오기
  const tryGetUserResultList = useCallback(() => {
    getUserResultList()
      .then((res) => {
        console.log(res.data);
        setUserResultList(res.data);
      })
      .catch((err) => {
        handleAdmin(err, history);
      });
  }, []);

  useEffect(() => {
    tryGetUserResultList();
  }, [tryGetUserResultList]);

  const onChangeFirstApply = useCallback((userId, status) => {
    const apply = status.split("-")[0];
    const applyDetail = status.split("-")[1];

    changeFirstApplyStatus(userId, apply, applyDetail).then(() => {
      tryGetUserResultList();
    });
  }, []);

  const onChangeSecondApply = useCallback((userId, status) => {
    const apply = status.split("-")[0];
    const applyDetail = status.split("-")[1];

    changeSecondApplyStatus(userId, apply, applyDetail).then(() => {
      tryGetUserResultList();
    });
  }, []);

  const tryChangeFirstResultStatus = useCallback((userIdx: number) => {
    changeFirstResultStatus(userIdx).then(() => {
      tryGetUserResultList();
    });
  }, []);

  const tryChangeSecondResultStatus = useCallback((userIdx: number) => {
    changeSecondResultStatus(userIdx).then(() => {
      tryGetUserResultList();
    });
  }, []);

  return (
    <UserResult
      userResultList={userResultList}
      onChangeFirstApply={onChangeFirstApply}
      onChangeSecondApply={onChangeSecondApply}
      tryChangeFirstResultStatus={tryChangeFirstResultStatus}
      tryChangeSecondResultStatus={tryChangeSecondResultStatus}
    />
  );
};

export default observer(UserRateContainer);
