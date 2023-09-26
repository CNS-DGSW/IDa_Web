import React, { useCallback, useEffect } from "react";
import { observer } from "mobx-react";
import { useNavigate } from "react-router-dom";
import WriteGed from "components/Write/WriteGed";
import { handleGetWriteError } from "lib/handleErrors";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  englishScoreAtom,
  getGed,
  isChangedAtom,
  koreanScoreAtom,
  mathScoreAtom,
  otherScoreAtom,
  scienceScoreAtom,
  socialScoreAtom,
} from "stores/Write/WriteAtom";

// 검정고시 성적 입력
const WriteGedContainer = ({}) => {
  const history = useNavigate();

  const [koreanScore, setKoreanScore] = useRecoilState(koreanScoreAtom);
  const [mathScore, setMathScore] = useRecoilState(mathScoreAtom);
  const [socialScore, setSocialScore] = useRecoilState(socialScoreAtom);
  const [scienceScore, setScienceScore] = useRecoilState(scienceScoreAtom);
  const [englishScore, setEnglishScore] = useRecoilState(englishScoreAtom);
  const [otherScore, setOtherScore] = useRecoilState(otherScoreAtom);
  const setIsChanged = useSetRecoilState(isChangedAtom);
  const getGedAtom = useRecoilValue(getGed);

  // 검정고시 점수 받아오기
  const getGedCallback = useCallback(async () => {
    await getGedAtom()
      .then((res: any) => {
        setKoreanScore(res.data.score.koreanScore);
        setMathScore(res.data.score.mathScore);
        setSocialScore(res.data.score.socialScore);
        setScienceScore(res.data.score.scienceScore);
        setEnglishScore(res.data.score.englishScore);
        setOtherScore(res.data.score.otherScore);
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
        koreanScore={koreanScore}
        handleKoreanScore={(value: number) => setKoreanScore(value)}
        englishScore={englishScore}
        handleEnglishScore={(value: number) => setEnglishScore(value)}
        mathScore={mathScore}
        handleMathScore={(value: number) => setMathScore(value)}
        socialScore={socialScore}
        handleSocialScore={(value: number) => setSocialScore(value)}
        scienceScore={scienceScore}
        handleScienceScore={(value: number) => setScienceScore(value)}
        otherScore={otherScore}
        handleOtherScore={(value: number) => setKoreanScore(value)}
        handleIsChanged={(value: boolean) => setIsChanged(value)}
      />
    </>
  );
};

export default observer(WriteGedContainer);
