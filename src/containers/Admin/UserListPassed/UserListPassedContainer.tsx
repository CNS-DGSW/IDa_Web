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
  const {
    getUserListPassed,
    getViewFirstStudent,
    adminChangeFirstStudent,
    getViewSecondStudent,
    adminChangeSecondStudent,
  } = store.AdminStore;

  const { GetFirstSelection, GetSecondSelection } = ExcelApi;
  const [listPassed, setListPassed] = useState<ListPassedCategory>(
    ListPassedCategory.First
  );
  const [firstData, setFirstData] = useState<boolean>(false);
  const [secondData, setSecondData] = useState<boolean>(false);

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
      setFirstData(res.data);
    });
  }, [getViewFirstStudent, setFirstData]);

  const tryChangeFirstStudent = useCallback(() => {
    adminChangeFirstStudent().then((res) => {
      tryViewFirstStudent();
      console.log(res);
    });
  }, [adminChangeFirstStudent, tryViewFirstStudent]);

  const tryViewSecondStudent = useCallback(() => {
    getViewSecondStudent().then((res) => {
      setSecondData(res.data);
    });
  }, [getViewSecondStudent, setSecondData]);

  const tryChangeSecondStudent = useCallback(() => {
    adminChangeSecondStudent().then((res) => {
      tryViewSecondStudent();
      console.log(res);
    });
  }, [adminChangeSecondStudent, tryViewSecondStudent]);

  useEffect(() => {
    tryGetUserListPassed();
  }, [tryGetUserListPassed]);

  useEffect(() => {
    tryViewFirstStudent();
  }, [tryViewFirstStudent]);

  useEffect(() => {
    tryViewSecondStudent();
  }, [tryChangeSecondStudent]);
  return (
    <>
      <UserListPassed
        tryDownExcel={tryDownExcel}
        passedStatus={passedStatus}
        selectListPassed={selectListPassed}
        listPassed={listPassed}
        firstData={firstData}
        secondData={secondData}
        tryChangeFirstStudent={tryChangeFirstStudent}
        tryChangeSecondStudent={tryChangeSecondStudent}
      />
    </>
  );
};

export default observer(UserListPassedContainer);
