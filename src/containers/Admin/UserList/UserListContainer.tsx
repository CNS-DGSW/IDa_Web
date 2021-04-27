import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import UserListCompoment from "components/Admin/UserList";
import useStore from "lib/hooks/useStore";
import { useHistory } from "react-router-dom";
import { List } from "util/types/UserList";
import { handleAdmin, handleLogin } from "lib/handleErrors";
import { CityRatio, DateRatio, SchoolRatio } from "util/types/UserRatio";
import ExcelApi from "assets/api/ExcelApi";
import { toast } from "react-toastify";

const UserListContainer = ({}) => {
  const { store } = useStore();
  const history = useHistory();

  const { getUserList, getAllUserRatio } = store.AdminStore;
  const { changeArrived } = store.StatusStore;

  const [userStatus, setUserStatus] = useState<List[]>();
  const [cityStatus, setCityStatus] = useState<CityRatio[]>([]);
  const [dateStatus, setDateStatus] = useState<DateRatio[]>([]);
  const [schoolStatus, setSchoolStatus] = useState<SchoolRatio[]>([]);
  const [search, setSearch] = useState<string>("");

  const { GetReceiptStatus } = ExcelApi;

  // 지원자 현황 받아오기
  const tryGetUserList = useCallback(() => {
    getUserList()
      .then((res) => {
        setUserStatus(res.data);
      })
      .catch((err) => {
        handleAdmin(err, history);
      });
  }, []);

  // 날짜, 출신학교, 지역 별 비율 받아오기
  const tryGetAllUserRatio = useCallback(() => {
    getAllUserRatio()
      .then((res) => {
        setCityStatus(res.data.userCityRatio);
        setDateStatus(res.data.userDateRatio);
        setSchoolStatus(res.data.userSchoolRatio);
      })
      .catch((err) => {
        handleLogin(err, history);
      });
  }, []);

  // 최종 원서 도착 또는 미도착 변경
  const tryChangeArrived = (userIdx: number, status: boolean) => {
    changeArrived(userIdx, status).then(() => {
      tryGetUserList();
    });
  };

  // 엑셀 다운
  const tryDownExcel = () => {
    GetReceiptStatus().catch((err) => {
      toast.warn("서버 오류입니다.");
    });
  };

  useEffect(() => {
    tryGetUserList();
  }, [tryGetUserList]);

  useEffect(() => {
    tryGetAllUserRatio();
  }, [tryGetAllUserRatio]);

  return (
    <UserListCompoment
      search={search}
      setSearch={setSearch}
      dateStatus={dateStatus}
      schoolStatus={schoolStatus}
      cityStatus={cityStatus}
      userStatus={userStatus}
      tryDownExcel={tryDownExcel}
      tryChangeArrived={tryChangeArrived}
    />
  );
};

export default observer(UserListContainer);
