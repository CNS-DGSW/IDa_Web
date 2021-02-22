import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import InterViewScore from "components/Admin/InterViewScore";
import useStore from "lib/hooks/useStore";
import { InterViewScoreType } from "util/types/Score";
import { getAllJSDocTagsOfKind } from "typescript";
import { render } from "@testing-library/react";

const InterViewScoreContainer = ({}) => {
  const { store } = useStore();
  const { getInterviewScore, getTeam } = store.ScoreStore;

  const [teamCount, setTeamCount] = useState<number[]>();
  const [interView, setInterView] = useState<string>("COOPERATION");
  const [team, setTeam] = useState<string>("1");
  const [scoreDate, setScoreDate] = useState<InterViewScoreType>();

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
    await getInterviewScore(interView, team)
      .then((res) => {
        setScoreDate(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [interView, team, teamCount, scoreDate]);

  console.log(scoreDate?.data);

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
    />
  );
};

export default observer(InterViewScoreContainer);
