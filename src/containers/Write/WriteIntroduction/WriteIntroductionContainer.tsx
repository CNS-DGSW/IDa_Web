import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import useStore from "lib/hooks/useStore";
import WriteIntroduction from "../../../components/Write/WriteIntroduction";
import { useHistory, withRouter } from "react-router-dom";
import { SelfIntroductionResponse, StudyPlanResponse } from "util/types/Response";
import { toast } from "react-toastify";
import { handleLogin, handleWriteError } from "lib/handleErrors";

const WriteIntroductionContainer = ({}) => {
  const { store } = useStore();
  const history = useHistory();

  const [selfIntroduce, setSelfIntroduce] = useState<string>("");
  const [studyPlan, setStudyPlan] = useState<string>("");
  const [isChanged, setIsChanged] = useState<boolean>(false);

  const { getSelfIntroduce, editSelfIntroduce, getStudyPlan, editStudyPlan } = store.WriteStore;

  const onSave = useCallback(async () => {
    let flag = true;
    if (selfIntroduce && studyPlan) {
      const promises = [editStudyPlan(studyPlan), editSelfIntroduce(selfIntroduce)];

      await Promise.all(promises)
        .then(() => {
          flag = true;
        })
        .catch((err: Error) => {
          handleWriteError(err, history);
          flag = false;
        });
      setIsChanged(false);
    } else {
      toast.warn("빈칸을 채워주세요.");
      flag = false;
    }
    return flag;
  }, [selfIntroduce, studyPlan]);

  const getSelfIntroduceCallBack = useCallback(() => {
    getSelfIntroduce()
      .then((res: SelfIntroductionResponse) => {
        setSelfIntroduce(res.data.selfIntroduction || "");
      })
      .catch((err: Error) => {
        handleLogin(err, history);
      });
  }, []);

  const getStudyPlanCallBack = useCallback(() => {
    getStudyPlan()
      .then((res: StudyPlanResponse) => {
        setStudyPlan(res.data.studyPlan || "");
      })
      .catch((err: Error) => {
        handleLogin(err, history);
      });
  }, []);

  useEffect(() => {
    getSelfIntroduceCallBack();
    getStudyPlanCallBack();
  }, []);

  return (
    <>
      <WriteIntroduction
        selfIntroduce={selfIntroduce}
        setSelfIntroduce={setSelfIntroduce}
        studyPlan={studyPlan}
        setStudyPlan={setStudyPlan}
        onSave={onSave}
        isChanged={isChanged}
        setIsChanged={setIsChanged}
      />
    </>
  );
};

export default withRouter(observer(WriteIntroductionContainer));