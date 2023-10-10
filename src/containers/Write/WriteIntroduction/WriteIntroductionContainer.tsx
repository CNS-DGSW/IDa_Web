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
} from "stores/Write/util";
import { userIdxAtom } from "stores/Write/WriteAtom";

const WriteIntroductionContainer = ({}) => {
  const { store } = useStore();
  const history = useNavigate();

  const [selfIntroduce, setSelfIntroduce] = useState<string>("");
  const [studyPlan, setStudyPlan] = useState<string>("");
  const [isChanged, setIsChanged] = useState<boolean>(false);
  const userIdx = useRecoilValue(userIdxAtom);

  const getSelfIntroduceAtom = getSelfIntroduce;
  const editSelfIntroduceAtom = editSelfIntroduce;
  const getStudyPlanAtom = getStudyPlan;
  const editStudyPlanAtom = editStudyPlan;

  //변경사항 저장 함수
  const onSave = useCallback(async () => {
    let flag = true;
    if (selfIntroduce && studyPlan) {
      const promises = [
        editStudyPlanAtom({ studyPlan, userIdx }).then(() =>
          editSelfIntroduceAtom({ selfIntroduce, userIdx })
        ),
      ];

      await Promise.all(promises)
        .then(() => {
          flag = true;
        })
        .catch((err: any) => {
          if (err.response?.status === 400) {
            toast.error(
              "자기소개서 또는 학업계획서를 1500자 이하로 적어주세요."
            );
          } else {
            handleWriteError(err, history);
          }
          flag = false;
        });
      setIsChanged(false);
    } else {
      toast.warning("빈칸을 채워주세요.");
      flag = false;
    }
    getSelfIntroduceAtom({ userIdx }).then((current: any) =>
      console.log(current)
    );
    return flag;
  }, [selfIntroduce, studyPlan]);

  //자기소개서 받아오는 함수
  const getSelfIntroduceCallBack = useCallback(() => {
    getSelfIntroduceAtom({ userIdx })
      .then((res: SelfIntroductionResponse) => {
        setSelfIntroduce(res.data.selfIntroduction || "");
      })
      .catch((err: any) => {
        handleGetWriteError(err, history);
      });
  }, []);

  //학업계획서 받아오는 함수
  const getStudyPlanCallBack = useCallback(() => {
    getStudyPlanAtom({ userIdx })
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
