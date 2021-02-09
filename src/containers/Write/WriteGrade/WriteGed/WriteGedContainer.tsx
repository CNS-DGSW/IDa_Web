import React, { useCallback, useEffect } from "react";
import { observer } from "mobx-react";
import useStore from "lib/hooks/useStore";
import { useHistory, withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import WriteGed from "components/Write/WriteGed";
import { handleLogin } from "lib/handleErrors";

const WriteGedContainer = ({}) => {
  const { store } = useStore();

  const history = useHistory();

  const {
    koreanScore,
    mathScore,
    socialScore,
    scienceScore,
    englishScore,
    otherScore,
    handleKoreanScore,
    handleMathScore,
    handleSocialScore,
    handleScienceScore,
    handleEnglishScore,
    handleOtherScore,
    handleIsChanged,
    getGed,
  } = store.WriteStore;

  const getGedCallback = useCallback(async () => {
    await getGed()
      .then((res) => {
        handleKoreanScore(res.data.score.koreanScore);
        handleMathScore(res.data.score.mathScore);
        handleSocialScore(res.data.score.socialScore);
        handleScienceScore(res.data.score.scienceScore);
        handleEnglishScore(res.data.score.englishScore);
        handleOtherScore(res.data.score.otherScore);
      })
      .catch((err: Error) => {
        handleLogin(err, history);
      });
  }, [getGed]);

  useEffect(() => {
    getGedCallback();
  }, [getGedCallback]);

  return (
    <>
      <WriteGed
        koreanScore={koreanScore}
        handleKoreanScore={handleKoreanScore}
        englishScore={englishScore}
        handleEnglishScore={handleEnglishScore}
        mathScore={mathScore}
        handleMathScore={handleMathScore}
        socialScore={socialScore}
        handleSocialScore={handleSocialScore}
        scienceScore={scienceScore}
        handleScienceScore={handleScienceScore}
        otherScore={otherScore}
        handleOtherScore={handleOtherScore}
        handleIsChanged={handleIsChanged}
      />
    </>
  );
};

export default withRouter(observer(WriteGedContainer));
