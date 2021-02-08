import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import useStore from "lib/hooks/useStore";
import WriteScore from "components/Write/WriteScore";
import { handleLogin } from "lib/handleErrors";
import { useHistory, withRouter } from "react-router-dom";

const WriteScoreContainer = ({}) => {
  const { store } = useStore();

  const { getScore } = store.ScoreStore;

  const history = useHistory();

  const [grade1, setGrade1] = useState<number>(0);
  const [grade2, setGrade2] = useState<number>(0);
  const [absence, setAbsence] = useState<number>(0);
  const [volunteer, setVolunteer] = useState<number>(0);
  const [additional, setAdditional] = useState<number>(0);
  const [totalScore1, setTotalScore1] = useState<number>(0);
  const [totalScore2, setTotalScore2] = useState<number>(0);

  const [isGed, setIsGed] = useState<boolean>(false);

  const getScoreCallback = useCallback(() => {
    getScore()
      .then((res) => {
        setGrade1(res.data.grade1);
        setGrade2(res.data.grade2);
        setIsGed(res.data.isGed);
        setAbsence(res.data.absence);
        setVolunteer(res.data.volunteer);
        setAdditional(res.data.additional);
        if (res.data.isGed) {
          setTotalScore1(res.data.grade1);
          setTotalScore2(res.data.grade2);
        } else {
          setTotalScore1(res.data.grade1 + res.data.absence + res.data.volunteer + res.data.additional);
          setTotalScore2(res.data.grade2 + res.data.absence + res.data.volunteer + res.data.additional);
        }
      })
      .catch((err: Error) => {
        handleLogin(err, history);
      });
  }, [getScore]);

  useEffect(() => {
    getScoreCallback();
  }, [getScoreCallback]);

  return (
    <>
      <WriteScore
        grade1={grade1}
        grade2={grade2}
        isGed={isGed}
        absence={absence}
        volunteer={volunteer}
        additional={additional}
        totalScore1={totalScore1}
        totalScore2={totalScore2}
      />
    </>
  );
};

export default withRouter(observer(WriteScoreContainer));
