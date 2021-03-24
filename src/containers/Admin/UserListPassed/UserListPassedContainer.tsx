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

  const tryGetUserListPassed = useCallback(() => {
    getUserListPassed(
      listPassed === ListPassedCategory.Final ? true : undefined
    )
      .then((res) => {
        setPassedStatus(res.data);
      })
      .catch((err: Error) => {
        handleAdmin(err, history);
      });
  }, [listPassed]);

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
