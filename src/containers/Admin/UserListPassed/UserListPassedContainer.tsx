import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import UserListPassed from "components/Admin/UserListPassed";
import useStore from "lib/hooks/useStore";
import { useHistory } from "react-router-dom";
import { ListPassed } from "util/types/UserList";
import { handleAdmin } from "lib/handleErrors";
import ExcelApi from "assets/api/ExcelApi";
import ListPassedCategory from "util/enums/ListPassedCategory";
import { toast } from "react-toastify";

const UserListPassedContainer = ({}) => {
  const { store } = useStore();
  const history = useHistory();
  const { getUserListPassed, getViewFirstStudent, adminChangeFirstStudent } =
    store.AdminStore;

  const { GetFirstSelection, GetSecondSelection } = ExcelApi;
  const [listPassed, setListPassed] = useState<ListPassedCategory>(
    ListPassedCategory.First
  );
  const [data, setData] = useState<boolean>(false);

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
          toast.error("오류가 발생하였습니다.");
        });
        break;

      case "final":
        GetSecondSelection().catch((err) => {
          toast.error("오류가 발생하였습니다.");
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

  const tryViewFirstStudent = useCallback(() => {
    getViewFirstStudent().then((res) => {
      setData(res.data);
    });
  }, [getViewFirstStudent, setData]);
  const tryChangeFirstStudent = useCallback(() => {
    adminChangeFirstStudent().then((res) => {
      tryViewFirstStudent();
      console.log(res);
    });
  }, [adminChangeFirstStudent, tryViewFirstStudent]);

  useEffect(() => {
    tryGetUserListPassed();
  }, [tryGetUserListPassed]);

  useEffect(() => {
    tryViewFirstStudent();
  }, [tryViewFirstStudent]);
  return (
    <>
      <UserListPassed
        tryDownExcel={tryDownExcel}
        passedStatus={passedStatus}
        selectListPassed={selectListPassed}
        listPassed={listPassed}
        data={data}
        tryChangeFirstStudent={tryChangeFirstStudent}
      />
    </>
  );
};

export default observer(UserListPassedContainer);
