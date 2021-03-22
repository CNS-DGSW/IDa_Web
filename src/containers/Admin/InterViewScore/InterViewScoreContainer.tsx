import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import InterViewScore from "components/Admin/InterViewScore";
import useStore from "lib/hooks/useStore";
import { InterViewScoreResponse } from "util/types/Response";
import ExcelApi from "assets/api/ExcelApi";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import InterViewCategory from "util/enums/InterViewCategory";
import { handleAdmin } from "lib/handleErrors";

const InterViewScoreContainer = ({}) => {
  const { store } = useStore();
  const { getInterviewScore, getTeam } = store.ScoreStore;
  const { uploadInterview } = ExcelApi;

  const [teamCount, setTeamCount] = useState<number[]>();
  const [interView, setInterView] = useState<InterViewCategory>(
    InterViewCategory.COOPERATION
  );
  const [team, setTeam] = useState<string>("0");
  const [scoreDate, setScoreDate] = useState<InterViewScoreResponse>();
  const history = useHistory();

  const tryDownExcel = async () => {
    await ExcelApi.GetInterviewScoreExcel(
      interView,
      team === "0" ? undefined : team
    ).catch((err) => {
      handleAdmin(err, history);
      if (err.message.includes("404")) {
        setTeam("0");
      }
    });
  };

  const tryGetTeam = useCallback(async () => {
    setTeam("0");
    await getTeam(interView)
      .then((res) => {
        setTeamCount(res.data);
      })
      .catch((err) => {
        handleAdmin(err, history);
      });
  }, [interView]);

  const tryGetScore = useCallback(async () => {
    await getInterviewScore(interView, team === "0" ? undefined : team)
      .then((res) => {
        setScoreDate(res);
      })
      .catch((err) => {
        handleAdmin(err, history);
      });
  }, [interView, team, teamCount, scoreDate]);

  const selectInterView = useCallback(
    (index: string) => {
      if (index === "0") {
        setInterView(InterViewCategory.COOPERATION);
      } else {
        setInterView(InterViewCategory.INTERVIEW);
      }
    },
    [interView]
  );

  const uploadFile = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length) {
        let file = e.target.files[0];
        uploadInterview(file)
          .then(() => {
            toast.success("파일 업로드 되었습니다");
            tryGetScore();
          })
          .catch((err) => {
            if (err.message.includes("400")) {
              toast.warn("파일을 잘못선택하였습니다");
            } else if (err.message.includes("500")) {
              toast.warn("서버 오류입니다.");
            }
          });
      }
    },
    [tryGetScore]
  );

  useEffect(() => {
    tryGetTeam();
  }, [interView]);

  useEffect(() => {
    tryGetScore();
  }, [interView, team, teamCount]);

  return (
    <InterViewScore
      team={team}
      setTeam={setTeam}
      teamCount={teamCount}
      interView={interView}
      selectInterView={selectInterView}
      scoreDate={scoreDate}
      tryDownExcel={tryDownExcel}
      uploadFile={uploadFile}
    />
  );
};

export default observer(InterViewScoreContainer);
