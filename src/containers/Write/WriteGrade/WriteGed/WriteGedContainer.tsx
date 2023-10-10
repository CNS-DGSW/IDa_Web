import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import { useNavigate } from "react-router-dom";
import WriteGed from "components/Write/WriteGed";
import { handleGetWriteError } from "lib/handleErrors";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  englishScoreAtom,
  isChangedAtom,
  koreanScoreAtom,
  mathScoreAtom,
  otherScoreAtom,
  scienceScoreAtom,
  socialScoreAtom,
  userIdxAtom,
} from "stores/Write/WriteAtom";
import GedScoreType from "util/types/GedScore";
import { getGed } from "stores/Write/util";

interface writeGedProps {
  gedScore: GedScoreType;
  setGedScore: React.Dispatch<React.SetStateAction<GedScoreType>>;
}

// 검정고시 성적 입력
const WriteGedContainer = ({ gedScore, setGedScore }: writeGedProps) => {
  const history = useNavigate();
  const userIdx = useRecoilValue(userIdxAtom);

  /* const [koreanScore, setKoreanScore] = useRecoilState(koreanScoreAtom);
  const [mathScore, setMathScore] = useRecoilState(mathScoreAtom);
  const [socialScore, setSocialScore] = useRecoilState(socialScoreAtom);
  const [scienceScore, setScienceScore] = useRecoilState(scienceScoreAtom);
  const [englishScore, setEnglishScore] = useRecoilState(englishScoreAtom);
  const [otherScore, setOtherScore] = useRecoilState(otherScoreAtom); */

  const setIsChanged = useSetRecoilState(isChangedAtom);
  const getGedAtom = getGed;

  // 검정고시 점수 받아오기
  const getGedCallback = useCallback(async () => {
    await getGedAtom({ userIdx })
      .then((res: any) => {
        setGedScore(res.data.score);
      })
      .catch((err) => {
        handleGetWriteError(err, history);
      });
  }, [getGed]);

  useEffect(() => {
    getGedCallback();
  }, [getGedCallback]);

  return (
    <>
      <WriteGed
        gedScore={gedScore}
        setGedScore={setGedScore}
        handleIsChanged={(value: boolean) => setIsChanged(value)}
      />
    </>
  );
};

export default observer(WriteGedContainer);
