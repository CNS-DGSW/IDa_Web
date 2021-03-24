import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import UserRate from "components/Admin/UserRate";
import { Rate } from "util/types/UserList";
import { useHistory } from "react-router-dom";
import { Report } from "util/types/ReportInfo";
import { handleAdmin } from "lib/handleErrors";
import useStore from "lib/hooks/useStore";
import ExcelApi from "assets/api/ExcelApi";

const UserRateContainer = ({}) => {
  const { store } = useStore();
  const history = useHistory();

  const [rateStatus, setRateStatus] = useState<Rate[]>([]);
  const [reportStatus, setReportStatus] = useState<Report[]>([]);

  const { getReportInfo, getUserRate } = store.AdminStore;

  const { GetUserRate } = ExcelApi;

  const tryGetUserRate = useCallback(() => {
    getUserRate(true)
      .then((res) => {
        setRateStatus(res.data);
      })
      .catch((err: Error) => {
        handleAdmin(err, history);
      });
  }, []);

  const tryGetReportInfo = useCallback(() => {
    getReportInfo()
      .then((res) => {
        setReportStatus(res.data);
      })
      .catch((err: Error) => {
        handleAdmin(err, history);
      });
  }, []);

  const tryDownExcel = () => {
    GetUserRate().catch((err) => {
      console.log(err);
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
