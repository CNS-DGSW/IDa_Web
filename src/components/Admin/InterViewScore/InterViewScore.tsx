import React from "react";
import "./InterViewScore.scss";
import { InterViewScoreResponse } from "util/types/Response";
import InterViewCategory from "util/enums/InterViewCategory";

interface InterViewScoreProps {
  team: string;
  setTeam: React.Dispatch<React.SetStateAction<string>>;
  teamCount: number[] | undefined;
  selectInterView: (index: string) => void;
  scoreDate: InterViewScoreResponse | undefined;
  tryDownExcel: () => void;
  uploadFile: (e: React.ChangeEvent<HTMLInputElement>) => void;
  interView: InterViewCategory;
  tryGetNumberTeam: () => void;
  tyrUploadTeam: (e: React.ChangeEvent<HTMLInputElement>) => void;
  attend: string;
  selectAttend: (e: React.FormEvent<HTMLOptionElement>) => void;
}

const InterViewScore = ({
  team,
  setTeam,
  teamCount,
  interView,
  selectInterView,
  scoreDate,
  tryDownExcel,
  uploadFile,
  tryGetNumberTeam,
  tyrUploadTeam,
  attend,
  selectAttend,
}: InterViewScoreProps) => {
  return (
    <div className="InterViewScore">
      <span className="InterViewScore-title">
        2차전형 (창의 협업, 구술 면접) 점수
      </span>
      <div className="InterViewScore-checkBox">
        <select
          className="InterViewScore-checkBox-s-op"
          onChange={(e) => {
            selectInterView(e.target.value);
          }}
        >
          <option value="0" className="InterViewScore-checkBox-s-op">
            {/* 그룹면접 */}
            창의 협업
          </option>
          <option value="1" className="InterViewScore-checkBox-s-op">
            {/* 심층면접 */}
            구술면접
          </option>
        </select>
        <select
          className="InterViewScore-checkBox-s-op"
          onChange={(e) => {
            setTeam(e.target.value);
          }}
          value={team}
        >
          <option className="InterViewScore-checkBox-s-op" value="0">
            전체
          </option>
          {teamCount &&
            teamCount.map((i, key) => (
              <option key={key} value={i}>
                {i}팀
              </option>
            ))}
        </select>

        <div className="InterViewScore-checkBox-label">
          <span>팀 번호 서식 다운로드</span>
          <button onClick={() => tryGetNumberTeam()} className="buttons">
            다운로드
          </button>
        </div>

        <div className="InterViewScore-checkBox-label">
          <span>팀 번호 서식 업로드</span>
          <label htmlFor="input-file2" className="buttons">
            업로드
          </label>
          <input
            type="file"
            id="input-file2"
            className="input-file"
            onChange={(e) => tyrUploadTeam(e)}
          />
        </div>

        <div className="InterViewScore-checkBox-label">
          <span>출력용 &amp; 서식</span>
          <button onClick={() => tryDownExcel()} className="buttons">
            다운로드
          </button>
        </div>

        <div className="InterViewScore-checkBox-label">
          <span>
            {interView === InterViewCategory.INTERVIEW
              ? "구술 면접 점수"
              : "창의 협업 점수"}
          </span>
          <label htmlFor="input-file1" className="buttons">
            업로드
          </label>
          <input
            type="file"
            id="input-file1"
            className="input-file"
            onChange={(e) => uploadFile(e)}
          />
        </div>
      </div>
      <div className="InterViewScore-table">
        <table className="InterViewScore-table-list">
          <thead>
            <tr className="InterViewScore-table-list-title">
              <th>순번</th>
              <th>수험번호</th>
              <th>이름</th>
              <th>참석여부</th>
              <th>평가요소1</th>
              <th>평가요소2</th>
              <th>평가요소3</th>
              <th>평가요소4</th>
              <th>평가요소5</th>
              {interView === InterViewCategory.INTERVIEW && (
                <>
                  <th>평가요소6</th>
                  <th>평가요소7</th>
                  <th>평가요소8</th>
                  <th>평가요소9</th>
                  <th>평가요소10</th>
                </>
              )}
              {/* <th>평가요소 합산점수</th> */}
              <th>
                {" "}
                {interView === InterViewCategory.INTERVIEW
                  ? "총점"
                  : "전형별 창의 협업 점수"}
              </th>
            </tr>
          </thead>
          <tbody>
            {scoreDate?.data.map((i, key) => (
              <tr key={key}>
                <td>{key + 1}</td>
                <td>{i.examCode}</td>
                <td>{i.userName}</td>
                {/* <td>{i.isAttend ? "참석" : "미참석"}</td> */}
                <td>
                  <option value={attend} onChange={(e) => selectAttend(e)}>
                    <select>참석</select>
                    <select>미참석</select>
                  </option>
                </td>
                <td>{i.evaluationFactor1}</td>
                <td>{i.evaluationFactor2}</td>
                <td>{i.evaluationFactor3}</td>
                <td>{i.evaluationFactor4}</td>
                <td>{i.evaluationFactor5}</td>
                {interView === InterViewCategory.INTERVIEW && (
                  <>
                    <td>{i.evaluationFactor6}</td>
                    <td>{i.evaluationFactor7}</td>
                    <td>{i.evaluationFactor8}</td>
                    <td>{i.evaluationFactor9}</td>
                    <td>{i.evaluationFactor10}</td>
                  </>
                )}
                {/* <td>
                  {i.evaluationFactor1 +
                    i.evaluationFactor2 +
                    i.evaluationFactor3 +
                    i.evaluationFactor4 +
                    i.evaluationFactor5 +
                    (i.evaluationFactor6 !== null ? i.evaluationFactor6 : 0) +
                    (i.evaluationFactor7 !== null ? i.evaluationFactor7 : 0) +
                    (i.evaluationFactor8 !== null ? i.evaluationFactor8 : 0)}
                </td> */}
                <td>{i.calcScore}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InterViewScore;
