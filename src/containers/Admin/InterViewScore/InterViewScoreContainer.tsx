import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import InterViewScore from "components/Admin/InterViewScore";
import useStore from "lib/hooks/useStore";
import { InterViewScoreType } from "util/types/Score";
import ExcelApi from "assets/api/ExcelApi";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

const InterViewScoreContainer = ({}) => {
  const { store } = useStore();
  const { getInterviewScore, getTeam } = store.ScoreStore;
  const { uploadInterview } = ExcelApi;

  const [teamCount, setTeamCount] = useState<number[]>();
  const [interView, setInterView] = useState<string>("COOPERATION");
  const [team, setTeam] = useState<string>("0");
  const [scoreDate, setScoreDate] = useState<InterViewScoreType>();
  const history = useHistory();

  const uploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      let file = e.target.files[0];
      uploadInterview(file)
        .then(() => {
          toast.success("파일 업로드 되었습니다");
        })
        .catch((err) => {
          if (err.message.includes("400")) {
            toast.warn("파일을 잘못선택하였습니다");
          }
        });
    }
  };

  const tryDownExcel = async () => {
    await ExcelApi.GetInterviewScoreExcel(
      interView,
      team === "0" ? undefined : team
    ).catch((err) => {
      console.log(err);
    });
  };

  const tryGetTeam = useCallback(async () => {
    await getTeam(interView)
      .then((res) => {
        setTeamCount(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [interView]);

  const tryGetScore = useCallback(async () => {
    await getInterviewScore(interView, team === "0" ? undefined : team)
      .then((res) => {
        setScoreDate(res);
      })
      .catch((err) => {
        if (err.message.includes("403")) {
          toast.warn("어드민으로 로그인해주세요");
          history.push("/");
        }
      });
  }, [interView, team, teamCount, scoreDate]);

  const selectInterView = useCallback(
    (index: string) => {
      if (index === "0") {
        setInterView("COOPERATION");
      } else {
        setInterView("INTERVIEW");
      }
    },
    [interView]
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
      selectInterView={selectInterView}
      scoreDate={scoreDate}
      tryDownExcel={tryDownExcel}
      uploadFile={uploadFile}
    />
  );
};

export default observer(InterViewScoreContainer);
