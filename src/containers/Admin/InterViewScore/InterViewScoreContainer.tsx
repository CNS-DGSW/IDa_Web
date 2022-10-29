import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import InterViewScore from "components/Admin/InterViewScore";
import useStore from "lib/hooks/useStore";
import { InterViewScoreResponse } from "util/types/Response";
import ExcelApi from "assets/api/ExcelApi";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import InterViewCategory from "util/enums/InterViewCategory";
import { handleAdmin } from "lib/handleErrors";

const InterViewScoreContainer = ({}) => {
  const { store } = useStore();
  const { getInterviewScore, getTeam } = store.ScoreStore;
  const {
    uploadInterview,
    GetInterviewScoreExcel,
    getTeamNumber,
    uploadTeamNumber,
  } = ExcelApi;

  const [teamCount, setTeamCount] = useState<number[]>();
  // 팀 수를 저장하는 useState
  const [interView, setInterView] = useState<InterViewCategory>(
    InterViewCategory.COOPERATION
  );
  // 면접 카테고리를 선택하는 useState 기본은 COOPERATION로 선택되있음
  const [team, setTeam] = useState<string>("0");
  // 팀 선택 하는 useState
  const [scoreDate, setScoreDate] = useState<InterViewScoreResponse>();
  // 학생들의 점수를 저장하는 useState
  const [attend, setAttend] = useState<string>("참석");
  // 학생들의 참석여부를 저장하는 useState
  const history = useHistory();

  // 팀 번호별 점수를 excel 다운받는 함수 0은 전체 팀 점수를 다운받는다.
  // 전체가 선택되어있으면 team이 0이 되는데 그러면 api를 받을때 undefined를 넘겨준다
  const tryDownExcel = async () => {
    await GetInterviewScoreExcel(
      interView,
      team === "0" ? undefined : team
    ).catch((err) => {
      handleAdmin(err, history);
      if (err.response?.status === 404) {
        setTeam("0");
      }
    });
  };

  // 전체 팀 수를 얻어오는 함수
  // 카테고리마다 팀 수가 달라서 카테고리를 선택해서 넘겨줘야함
  const tryGetTeam = useCallback(async () => {
    setTeam("0");
    await getTeam(interView)
      .then((res) => {
        setTeamCount(res.data);
      })
      .catch((err) => {
        handleAdmin(err, history);
      });
  }, [interView]);

  // 팀 점수 받아오는 함수
  //카테고리와 팀 번호를 넘겨줘야 한다
  // 팀번호가 0이면 undefined가 넘어가서 팀 전체를 조회할 수 있다.
  const tryGetScore = useCallback(async () => {
    await getInterviewScore(interView, team === "0" ? undefined : team)
      .then((res) => {
        setScoreDate(res);
      })
      .catch((err) => {
        handleAdmin(err, history);
      });
  }, [interView, team, teamCount, scoreDate]);

  // 카테고리 선택하는 함수
  // component 보면 select로 되어있는데 거기의 값이 value가 0 또는 1로 되어있다
  const selectInterView = useCallback(
    (index: string) => {
      if (index === "0") {
        setInterView(InterViewCategory.COOPERATION);
      } else {
        setInterView(InterViewCategory.INTERVIEW);
      }
    },
    [interView]
  );

  // 팀 배치 해주는 서식(excel)을 다운받는 함수
  const tryGetNumberTeam = () => {
    getTeamNumber(interView).catch((err) => {
      handleAdmin(err, history);
    });
  };

  // 팀 수에 맞게 학생을 재배치 한 excel 업로드 하는 함수
  const tyrUploadTeam = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length) {
        let file = e.target.files[0];
        uploadTeamNumber(file)
          .then(() => {
            toast.success("파일 업로드 되었습니다");
            tryGetScore();
            tryGetTeam();
          })
          .catch((err) => {
            if (err.response?.status === 400) {
              toast.warning("파일을 잘못선택하였습니다");
            } else if (err.response?.status === 500) {
              toast.error("서버 오류입니다. 잠시 후 다시 시도해주세요.");
            }
          });
      }
    },
    [tryGetScore]
  );

  // 면접 점수 업로드 하는 함수
  const uploadFile = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length) {
        let file = e.target.files[0];
        uploadInterview(file)
          .then(() => {
            toast.success("파일 업로드 되었습니다");
            tryGetScore();
          })
          .catch((err) => {
            if (err.response?.status === 400) {
              toast.warning("파일을 잘못선택하였습니다");
            } else if (err.response?.status === 500) {
              toast.error("서버 오류입니다. 잠시 후 다시 시도해주세요.");
            }
          });
      }
    },
    [tryGetScore]
  );

  //참석여부 컬럼에서 참석, 미참석 선택 하는 함수
  const selectAttend = (e: React.FormEvent<HTMLOptionElement>) => {
    const result = (e.target as HTMLSelectElement).value;
    setAttend(result);
  };

  useEffect(() => {
    tryGetTeam();
  }, [interView]);

  useEffect(() => {
    tryGetScore();
  }, [interView, team, teamCount]);

  return (
    <InterViewScore
      team={team}
      setTeam={setTeam}
      teamCount={teamCount}
      interView={interView}
      selectInterView={selectInterView}
      scoreDate={scoreDate}
      tryDownExcel={tryDownExcel}
      uploadFile={uploadFile}
      tryGetNumberTeam={tryGetNumberTeam}
      tyrUploadTeam={tyrUploadTeam}
      attend={attend}
      selectAttend={selectAttend}
    />
  );
};

export default observer(InterViewScoreContainer);
