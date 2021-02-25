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

  const handleSecondScore = async () => {
    await getSecondScore()
      .then((res) => {
        console.log(res);

        setScoreDate(res);
      })
      .catch((err) => {
        if (err.message.includes("403")) {
          toast.warn("어드민으로 로그인해주세요");
          history.push("/");
        }
      });
  };

  const tryDown = (key: string) => {
    switch (key) {
      case "sw":
        GetSoftWare().catch((err) => {
          console.log(err);
        });
        break;

      case "job":
        GetJob().catch((err) => {
          console.log(err);
        });
        break;

      case "coding":
        GetCodingTest().catch((err) => {
          console.log(err);
        });
        break;

      case "secondScore":
        GetSecondScoreExcel().catch((err) => {
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
              if (err.message.includes("400")) {
                toast.warn("파일을 잘못선택하였습니다");
              }
            });
          break;
        case "job":
          uploadJob(file)
            .then(() => {
              toast.success("파일 업로드 되었습니다");
            })
            .catch((err) => {
              if (err.message.includes("400")) {
                toast.warn("파일을 잘못선택하였습니다");
              }
            });
          break;

        case "coding":
          uploadCodingTest(file)
            .then(() => {
              toast.success("파일 업로드 되었습니다");
            })
            .catch((err) => {
              if (err.message.includes("400")) {
                toast.warn("파일을 잘못선택하였습니다");
              }
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
