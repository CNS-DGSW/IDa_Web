import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import useStore from "lib/hooks/useStore";
import WriteIntroduction from "../../../components/Write/WriteIntroduction";
import { useHistory } from "react-router-dom";
import { SelfIntroductionResponse, StudyPlanResponse } from "util/types/Response";
import { toast } from "react-toastify";

const WriteIntroductionContainer = ({}) => {
  const { store } = useStore();
  const history = useHistory();

  const [selfIntroduce, setSelfIntroduce] = useState<string>("");
  const [studyPlan, setStudyPlan] = useState<string>("");
  const [isChanged, setIsChanged] = useState<boolean>(false);

  const { getSelfIntroduce, editSelfIntroduce, getStudyPlan, editStudyPlan } = store.WriteStore;

  const onSave = useCallback(async () => {
    if (selfIntroduce && studyPlan) {
      const promises = [editStudyPlan(studyPlan), editSelfIntroduce(selfIntroduce)];

      await Promise.all(promises).catch((err: Error) => {
        if (err.message.includes("401") || err.message.includes("410")) {
          history.push("/login");
          toast.warn("로그인이 필요합니다.");
        } else {
          toast.error("서버 오류입니다.");
        }
      });
      setIsChanged(false);
      return true;
    } else {
      toast.warn("빈칸을 채워주세요.");
      return false;
    }
  }, [selfIntroduce, studyPlan]);

  const getSelfIntroduceCallBack = useCallback(() => {
    getSelfIntroduce()
      .then((res: SelfIntroductionResponse) => {
        setSelfIntroduce(res.data.selfIntroduction || "");
      })
      .catch((err: Error) => {
        if (err.message.includes("401") || err.message.includes("410")) {
          history.push("/login");
          toast.warn("로그인이 필요합니다.");
        } else {
          toast.error("서버 오류입니다.");
        }
      });
  }, []);

  const getStudyPlanCallBack = useCallback(() => {
    getStudyPlan()
      .then((res: StudyPlanResponse) => {
        setStudyPlan(res.data.studyPlan || "");
      })
      .catch((err: Error) => {
        if (err.message.includes("401") || err.message.includes("410")) {
          history.push("/login");
          toast.warn("로그인이 필요합니다.");
        } else {
          toast.error("서버 오류입니다.");
        }
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

export default observer(WriteIntroductionContainer);
