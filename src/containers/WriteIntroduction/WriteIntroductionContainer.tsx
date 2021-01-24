import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import useStore from "lib/hooks/useStore";
import WriteIntroduction from "../../components/WriteIntroduction";
import { useHistory } from "react-router-dom";
import { selfIntroductionResponse, studyPlanResponse } from "util/types/Response";

const WriteIntroductionContainer = ({}) => {
  const { store } = useStore();
  const history = useHistory();

  const [intro, setIntro] = useState<number>(0);
  const [plan, setPlan] = useState<number>(0);
  const [selfIntroduce, setSelfIntroduce] = useState<string>("");
  const [studyPlan, setStudyPlan] = useState<string>("");
  const [isChanged, setIsChanged] = useState<boolean>(false);

  const {
    getSelfIntroduce,
    editSelfIntroduce,
    getStudyPlan,
    editStudyPlan,
  } = store.WriteStore;

  const onSave = useCallback(() => {
    if (selfIntroduce && studyPlan) {
      editSelfIntroduce(selfIntroduce);
      editStudyPlan(studyPlan);
      setIsChanged(false);
      return true;
    } else {
      return false;
    }
  }, [selfIntroduce, studyPlan]);

  const getSelfIntroduceCallBack = useCallback(() => {
    getSelfIntroduce()
      .then((res: selfIntroductionResponse) => {
        setSelfIntroduce(res.data.selfIntroduction);
      })
      .catch((err: Error) => {
        if (err.message.includes("401")) {
          history.push("/login");
        }
      });
  }, []);

  const getStudyPlanCallBack = useCallback(() => {
    getStudyPlan()
      .then((res: studyPlanResponse) => {
        setStudyPlan(res.data.studyPlan);
      })
      .catch((err: Error) => {
        if (err.message.includes("401")) {
          history.push("/login");
        }
      });
  }, []);

  useEffect(() => {
    getSelfIntroduceCallBack();
    getStudyPlanCallBack();
  }, []);

  useEffect(() => {
    setIntro(selfIntroduce.length);
  }, [selfIntroduce]);

  useEffect(() => {
    setPlan(studyPlan.length);
  }, [studyPlan]);

  return (
    <>
      <WriteIntroduction
        intro={intro}
        plan={plan}
        selfIntroduce={selfIntroduce}
        setSelfIntroduce={setSelfIntroduce}
        studyPlan={studyPlan}
        setStudyPlan={setStudyPlan}
        onSave={onSave}
      ></WriteIntroduction>
    </>
  );
};

export default observer(WriteIntroductionContainer);
