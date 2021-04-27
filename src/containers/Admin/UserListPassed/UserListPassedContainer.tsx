import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import UserListPassed from "components/Admin/UserListPassed";
import useStore from "lib/hooks/useStore";
import { useHistory } from "react-router-dom";
import { ListPassed } from "util/types/UserList";
import { handleAdmin } from "lib/handleErrors";
import ExcelApi from "assets/api/ExcelApi";
import ListPassedCategory from "util/enums/ListPassedCategory";

const UserListPassedContainer = ({}) => {
  const { store } = useStore();
  const history = useHistory();
  const { getUserListPassed } = store.AdminStore;

  const { GetFirstSelection, GetSecondSelection } = ExcelApi;
  const [listPassed, setListPassed] = useState<ListPassedCategory>(
    ListPassedCategory.First
  );

  const [passedStatus, setPassedStatus] = useState<ListPassed[]>([]);

  // 지원자 합격 여부 받아오기
  const tryGetUserListPassed = useCallback(() => {
    getUserListPassed(
      listPassed === ListPassedCategory.Final ? true : undefined
    )
      .then((res) => {
        setPassedStatus(res.data);
      })
      .catch((err) => {
        handleAdmin(err, history);
      });
  }, [listPassed]);

  // 1차 합격자 또는 2차 합격자 엑셀 다운
  const tryDownExcel = (key: string) => {
    switch (key) {
      case "first":
        GetFirstSelection().catch((err) => {
          console.log(err);
        });
        break;

      case "final":
        GetSecondSelection().catch((err) => {
          console.log(err);
        });
        break;
    }
  };

  // 1차 또는 최종 카테고리 선택
  const selectListPassed = useCallback(
    (index: string) => {
      if (index === "0") {
        setListPassed(ListPassedCategory.First);
      } else {
        setListPassed(ListPassedCategory.Final);
      }
    },
    [listPassed]
  );

  useEffect(() => {
    tryGetUserListPassed();
  }, [tryGetUserListPassed]);

  return (
    <>
      <UserListPassed
        tryDownExcel={tryDownExcel}
        passedStatus={passedStatus}
        selectListPassed={selectListPassed}
        listPassed={listPassed}
      />
    </>
  );
};

export default observer(UserListPassedContainer);
