import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import SecondTypeScore from "components/Admin/SecondTypeScore";
import useStore from "lib/hooks/useStore";
import { useHistory } from "react-router-dom";
import ExcelApi from "assets/api/ExcelApi";
import { SecondScoreResponse } from "util/types/Score";
import { toast } from "react-toastify";

const SecondTypeScoreContainer = ({}) => {
  const history = useHistory();
  const { store } = useStore();
  const {
    GetSoftWare,
    GetJob,
    GetCodingTest,
    GetSecondScoreExcel,
    uploadSw,
    uploadCodingTest,
    uploadJob,
  } = ExcelApi;

  const [scoreDate, setScoreDate] = useState<SecondScoreResponse>();
  const [select, setSelect] = useState<string>("0");

  const { getSecondScore } = store.ScoreStore;

  /**
   * absenceScore
   * additional 가산점
   *
   * absenceScore: 10
    additionalScore: 0 가산점
    applyDetailType: null
    applyType: null 
    cityName: null 도시이름
    codingTestScore: 0 코딩점수
    cooperationScore: 0 창의 협력
    examCode: 210003 수험번호 
    finalApplyDetailType: null 
    finalApplyType: null 
    gradeScore: 0 교과점수
    gradeType: null
    interviewScore: 0 심층
    jobAptitudeScore: 0 직무적성
    swAbilityScore: 0 sw 역량 점수
    totalInterviewScore: 0 총 면접점수
    totalScore: 10 총점수 
    userIdx: 2 
    userName: "정성훈" 이름 
    volunteerScore: 0 봉사점수
   */

  const handleSecondScore = async () => {
    await getSecondScore()
      .then((res) => {
        setScoreDate(res);
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

  const tryUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    content: string
  ) => {
    if (e.target.files && e.target.files.length) {
      let file = e.target.files[0];
      switch (content) {
        case "sw":
          uploadSw(file)
            .then(() => {
              toast.success("파일 업로드 되었습니다");
            })
            .catch((err) => {
              console.log(err);
            });
          break;
        case "job":
          uploadJob(file)
            .then(() => {
              toast.success("파일 업로드 되었습니다");
            })
            .catch((err) => {
              console.log(err);
            });
          break;

        case "coding":
          uploadCodingTest(file)
            .then(() => {
              toast.success("파일 업로드 되었습니다");
            })
            .catch((err) => {
              console.log(err);
            });
          break;
      }
    }
  };

  useEffect(() => {
    handleSecondScore();
  }, []);

  return (
    <SecondTypeScore
      tryDown={tryDown}
      scoreDate={scoreDate}
      select={select}
      setSelect={setSelect}
      tryUpload={tryUpload}
    />
  );
};

export default observer(SecondTypeScoreContainer);
