import React, { useEffect } from "react";
import { observer } from "mobx-react";
import SecondTypeScore from "components/Admin/SecondTypeScore";
import useStore from "lib/hooks/useStore";
import { useHistory } from "react-router-dom";
import ExcelApi from "assets/api/ExcelApi";
import FileDownload from "js-file-download";

const SecondTypeScoreContainer = ({}) => {
  const history = useHistory();
  const { store } = useStore();
  const { GetSoftWare, GetJob, GetCodingTest, GetSecondScoreExcel } = ExcelApi;

  const { getSecondScore } = store.ScoreStore;

  /**
   * absenceScore
   * additional 가산점
   *
   */

  const handleSecondScore = async () => {
    await getSecondScore()
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        if (err.message.includes("403")) {
          console.log("어드민으로 로그인해주세요");
          history.push("/");
        }
      });
  };

  const tryDown = (key: string) => {
    switch (key) {
      case "sw":
        GetSoftWare()
          .then((res) => {})
          .catch((err) => {
            console.log(err);
          });
        break;

      case "job":
        GetJob()
          .then((res) => {})
          .catch((err) => {
            console.log(err);
          });
        break;

      case "coding":
        GetCodingTest()
          .then((res) => {})
          .catch((err) => {
            console.log(err);
          });
        break;

      case "secondScore":
        GetSecondScoreExcel()
          .then((res) => {})
          .catch((err) => {
            console.log(err);
          });
        break;
    }
  };

  useEffect(() => {
    handleSecondScore();
  }, []);

  return <SecondTypeScore tryDown={tryDown} />;
};

export default observer(SecondTypeScoreContainer);
