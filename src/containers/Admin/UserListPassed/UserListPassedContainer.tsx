import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import UserListPassed from "components/Admin/UserListPassed";
import useStore from "lib/hooks/useStore";
import { useHistory } from "react-router-dom";
import { ListPassed } from "util/types/User";
import { handleAdmin } from "lib/handleErrors";
import ExcelApi from "assets/api/ExcelApi";

const UserListPassedContainer = ({}) => {
  const { store } = useStore();
  const history = useHistory();
  const { getUserListPassed, isFinal } = store.AdminStore;

  const { GetFirstSelection, GetSecondSelection } = ExcelApi;

  const [passedStatus, setPassedStatus] = useState<ListPassed[]>([]);

  const tryGetUserListPassed = useCallback(() => {
    getUserListPassed()
      .then((res) => {
        setPassedStatus(res.data);
      })
      .catch((err: Error) => {
        handleAdmin(err, history);
      });
  }, []);

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

  useEffect(() => {
    tryGetUserListPassed();
  }, [tryGetUserListPassed]);

  return (
    <>
      <UserListPassed
        tryDownExcel={tryDownExcel}
        passedStatus={passedStatus}
        isFinal={isFinal}
      />
    </>
  );
};

export default observer(UserListPassedContainer);
