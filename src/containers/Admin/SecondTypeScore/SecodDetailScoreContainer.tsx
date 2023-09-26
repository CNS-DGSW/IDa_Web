import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import SecondTypeScore from "components/Admin/SecondDetailScore";
import useStore from "lib/hooks/useStore";
import { useNavigate } from "react-router-dom";
import ExcelApi from "assets/api/ExcelApi";
import { SecondScoreResponse } from "util/types/Response";
import { toast } from "react-toastify";
import { handleAdmin } from "lib/handleErrors";

const SecondTypeScoreContainer = ({}) => {
  const history = useNavigate();
  const { store } = useStore();
  const {
    GetStudyScore,
    GetJob,
    GetComputingScore,
    GetSecondScoreExcel,
    uploadStu,
    uploadComputing,
    uploadJob,
  } = ExcelApi;

  const [scoreDate, setScoreDate] = useState<SecondScoreResponse>();
  // 2차 전형 점수를 관리하는 useState
  const [select, setSelect] = useState<string>("0");
  // 업로드 다운로드 선택하는 select

  const { getSecondScore } = store.ScoreStore;

  // 2차 전형 점수를 받아오는 함수
  const handleSecondScore = async () => {
    await getSecondScore()
      .then((res) => {
        setScoreDate(res);
        console.log(scoreDate);
      })
      .catch((err) => {
        handleAdmin(err, history);
      });
  };

  // 파일을 다운받는 함수
  const tryDown = (key: string) => {
    switch (key) {
      case "stu":
        GetStudyScore().catch((err) => {
          toast.error("서버 오류입니다. 잠시 후 다시 시도해주세요");
        });
        break;

      case "job":
        GetJob().catch((err) => {
          toast.error("서버 오류입니다. 잠시 후 다시 시도해주세요");
        });
        break;

      case "compputing":
        GetComputingScore().catch((err) => {
          toast.error("서버 오류입니다. 잠시 후 다시 시도해주세요");
        });
        break;

      case "secondScore":
        GetSecondScoreExcel().catch((err) => {
          toast.error("서버 오류입니다. 잠시 후 다시 시도해주세요");
        });
        break;
    }
  };

  // 파일 업로드 하는 함수
  const tryUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    content: string
  ) => {
    if (e.target.files && e.target.files.length) {
      let file = e.target.files[0];
      switch (content) {
        case "job":
          await uploadJob(file)
            .then(() => {
              toast.success("파일 업로드 되었습니다");
            })
            .catch((err) => {
              if (err.response?.status === 400) {
                toast.warning("파일을 잘못선택하였습니다");
              }
            });
          break;
        case "stu":
          await uploadStu(file)
            .then(() => {
              toast.success("파일 업로드 되었습니다");
            })
            .catch((err) => {
              if (err.response?.status === 400) {
                toast.warning("파일을 잘못선택하였습니다");
              }
            });
          break;
        case "computing":
          await uploadComputing(file)
            .then(() => {
              toast.success("파일 업로드 되었습니다");
            })
            .catch((err) => {
              if (err.response?.status === 400) {
                toast.warning("파일을 잘못선택하였습니다");
              }
            });
          break;
      }
      handleSecondScore();
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
