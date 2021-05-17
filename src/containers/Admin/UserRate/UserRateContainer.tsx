import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import UserRate from "components/Admin/UserRate";
import { Rate } from "util/types/UserList";
import { useHistory } from "react-router-dom";
import { Report } from "util/types/ReportInfo";
import { handleAdmin } from "lib/handleErrors";
import useStore from "lib/hooks/useStore";
import ExcelApi from "assets/api/ExcelApi";
import { toast } from "react-toastify";

const UserRateContainer = ({}) => {
  const { store } = useStore();
  const history = useHistory();

  const [rateStatus, setRateStatus] = useState<Rate[]>([]);
  const [reportStatus, setReportStatus] = useState<Report[]>([]);

  const { getReportInfo, getUserRate } = store.AdminStore;

  const { GetUserRate } = ExcelApi;

  // 입학 지원자 경쟁률 받아오기
  const tryGetUserRate = useCallback(() => {
    getUserRate(true)
      .then((res) => {
        setRateStatus(res.data);
      })
      .catch((err) => {
        handleAdmin(err, history);
      });
  }, []);

  // 교육청 보고 정보 받아오기
  const tryGetReportInfo = useCallback(() => {
    getReportInfo()
      .then((res) => {
        setReportStatus(res.data);
      })
      .catch((err) => {
        handleAdmin(err, history);
      });
  }, []);

  // 입학 지원자 경쟁률 엑셀 다운
  const tryDownExcel = () => {
    GetUserRate().catch((err) => {
      toast.error("오류가 발생하였습니다.");
    });
  };

  useEffect(() => {
    tryGetUserRate();
    tryGetReportInfo();
  }, []);

  return (
    <UserRate
      tryDownExcel={tryDownExcel}
      rateStatus={rateStatus}
      reportStatus={reportStatus}
    />
  );
};

export default observer(UserRateContainer);
