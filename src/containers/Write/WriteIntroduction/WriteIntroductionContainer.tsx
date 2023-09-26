import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import useStore from "lib/hooks/useStore";
import WriteIntroduction from "../../../components/Write/WriteIntroduction";
import { useNavigate } from "react-router-dom";
import {
  SelfIntroductionResponse,
  StudyPlanResponse,
} from "util/types/Response";
import { toast } from "react-toastify";
import { handleGetWriteError, handleWriteError } from "lib/handleErrors";
import { useRecoilValue } from "recoil";
import {
  editSelfIntroduce,
  editStudyPlan,
  getSelfIntroduce,
  getStudyPlan,
} from "stores/Write/WriteAtom";

const WriteIntroductionContainer = ({}) => {
  const { store } = useStore();
  const history = useNavigate();

  const [selfIntroduce, setSelfIntroduce] = useState<string>("");
  const [studyPlan, setStudyPlan] = useState<string>("");
  const [isChanged, setIsChanged] = useState<boolean>(false);

  const getSelfIntroduceAtom = useRecoilValue(getSelfIntroduce);
  const editSelfIntroduceAtom = useRecoilValue(editSelfIntroduce);
  const getStudyPlanAtom = useRecoilValue(getStudyPlan);
  const editStudyPlanAtom = useRecoilValue(editStudyPlan);

  //변경사항 저장 함수
  const onSave = useCallback(async () => {
    let flag = true;
    if (selfIntroduce && studyPlan) {
      const promises = [
        editStudyPlanAtom(studyPlan).then(() =>
          editSelfIntroduceAtom(selfIntroduce)
        ),
      ];

      console.log(studyPlan);

      await Promise.all(promises)
        .then(() => {
          flag = true;
        })
        .catch((err: any) => {
          handleWriteError(err, history);
          flag = false;
        });
      setIsChanged(false);
    } else {
      toast.warning("빈칸을 채워주세요.");
      flag = false;
    }
    getSelfIntroduceAtom().then((current: any) => console.log(current));
    return flag;
  }, [selfIntroduce, studyPlan]);

  //자기소개서 받아오는 함수
  const getSelfIntroduceCallBack = useCallback(() => {
    getSelfIntroduceAtom()
      .then((res: SelfIntroductionResponse) => {
        setSelfIntroduce(res.data.selfIntroduction || "");
      })
      .catch((err: any) => {
        handleGetWriteError(err, history);
      });
  }, []);

  //학업계획서 받아오는 함수
  const getStudyPlanCallBack = useCallback(() => {
    getStudyPlanAtom()
      .then((res: StudyPlanResponse) => {
        setStudyPlan(res.data.studyPlan || "");
      })
      .catch((err: any) => {
        handleGetWriteError(err, history);
      });
  }, []);

  useEffect(() => {
    getSelfIntroduceCallBack();
    getStudyPlanCallBack();
  }, []);

  useEffect(() => {
    return () => {
      setStudyPlan("");
      setSelfIntroduce("");
    };
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
