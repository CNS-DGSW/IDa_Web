import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import InterViewScore from "components/Admin/InterViewScore";

const InterViewScoreContainer = ({}) => {
  const [interView, setInterView] = useState<string>("0");
  const [team, setTeam] = useState<string>("1");

  useEffect(() => {
    console.log("Asd");
  }, [interView, team]);

  return (
    <InterViewScore
      interView={interView}
      setInterView={setInterView}
      team={team}
      setTeam={setTeam}
    />
  );
};

export default observer(InterViewScoreContainer);
