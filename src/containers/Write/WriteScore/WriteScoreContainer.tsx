import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { observer } from "mobx-react";
import useStore from "lib/hooks/useStore";
import WriteScore from "components/Write/WriteScore";
import { handleGetWriteError } from "lib/handleErrors";
import { useHistory, withRouter } from "react-router-dom";
import useQuery from "lib/hooks/useQuery";

const WriteScoreContainer = ({}) => {
  const { store } = useStore();

  const { getScore } = store.ScoreStore;
  const { gradeType } = store.WriteStore;

  const history = useHistory();

  const query = useQuery();

  const [grade1, setGrade1] = useState<number>(0);
  const [grade2, setGrade2] = useState<number>(0);
  const [absence, setAbsence] = useState<number>(0);
  const [volunteer, setVolunteer] = useState<number>(0);
  const [additional, setAdditional] = useState<number>(0);
  const [totalScore1, setTotalScore1] = useState<number>(0);
  const [totalScore2, setTotalScore2] = useState<number>(0);

  const [isGed, setIsGed] = useState<boolean>(false);

  const getScoreCallback = useCallback(() => {
    if (gradeType) {
      getScore(Number(query.get("userIdx")))
        .then((res) => {
          setGrade1(res.data.grade1);
          setGrade2(res.data.grade2);
          setIsGed(res.data.isGed);
          setAbsence(res.data.absence);
          setVolunteer(res.data.volunteer);
          setAdditional(res.data.additional);
          setTotalScore1(res.data.totalScore1);
          setTotalScore2(res.data.totalScore2);
        })
        .catch((err: Error) => {
          handleGetWriteError(err, history);
        });
    }
  }, [getScore, gradeType]);

  useLayoutEffect(() => {
    getScoreCallback();
  }, [getScoreCallback]);

  useEffect(() => {
    return () => {
      setGrade1(0);
      setGrade2(0);
      setAbsence(0);
      setVolunteer(0);
      setAdditional(0);
      setTotalScore1(0);
      setTotalScore2(0);
      setIsGed(false);
    };
  }, []);

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
