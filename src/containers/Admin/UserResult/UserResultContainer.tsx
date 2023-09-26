import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserResult from "components/Admin/UserResult";
import { handleAdmin } from "lib/handleErrors";
import { UserResult as UserResultType } from "util/types/UserResult";
import { observer } from "mobx-react";
import {
  changeFirstApplyStatus,
  changeFirstResultStatus,
  changeSecondApplyStatus,
  changeSecondResultStatus,
  getUserResultList,
  setFirstSelection,
  setSecondSelection,
} from "stores/Admin/util";

const UserRateContainer = ({}) => {
  const history = useNavigate();

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

  const onClickSetFirstSelection = useCallback(() => {
    setFirstSelection().then(() => {
      tryGetUserResultList();
    });
  }, []);

  const onClickSetSecondSelection = useCallback(() => {
    setSecondSelection().then(() => {
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
      onClickSetFirstSelection={onClickSetFirstSelection}
      onClickSetSecondSelection={onClickSetSecondSelection}
    />
  );
};

export default observer(UserRateContainer);
