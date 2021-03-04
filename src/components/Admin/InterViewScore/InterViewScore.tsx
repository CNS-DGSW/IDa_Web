import React from "react";
import "./InterViewScore.scss";
import { InterViewScoreType } from "util/types/Score";

interface InterViewScoreProps {
  team: string;
  setTeam: React.Dispatch<React.SetStateAction<string>>;
  teamCount: number[] | undefined;
  selectInterView: (index: string) => void;
  scoreDate: InterViewScoreType | undefined;
  tryDownExcel: () => void;
  uploadFile: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InterViewScore = ({
  team,
  setTeam,
  teamCount,
  selectInterView,
  scoreDate,
  tryDownExcel,
  uploadFile,
}: InterViewScoreProps) => {
  return (
    <div className="InterViewScore">
      <span className="InterViewScore-title">2차전형 면접 점수 확인</span>
      <div className="InterViewScore-checkBox">
        <select
          className="InterViewScore-checkBox-s-op"
          onChange={(e) => {
            selectInterView(e.target.value);
          }}
        >
          <option value="0" className="InterViewScore-checkBox-s-op">
            그룹면접2
          </option>
          <option value="1" className="InterViewScore-checkBox-s-op">
            심층면접
          </option>
        </select>
        <select
          className="InterViewScore-checkBox-s-op"
          name=""
          id=""
          onChange={(e) => setTeam(e.target.value)}
        >
          <option className="InterViewScore-checkBox-s-op" value="0">
            전체
          </option>
          {teamCount &&
            teamCount.map((i, key) => (
              <option key={key} value={key + 1}>
                {i}팀
              </option>
            ))}
        </select>

        <div className="InterViewScore-checkBox-label">
          <span>면접 점수 &amp; 서식</span>
          <button onClick={() => tryDownExcel()} className="buttons">
            다운로드
          </button>
        </div>

        <div className="InterViewScore-checkBox-label">
          <span>소프트웨어역량평가</span>
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
          <tr className="InterViewScore-table-list-title">
            <th>수험번호</th>
            <th>이름</th>
            <th>참석여부</th>
            <th>평가요소1</th>
            <th>평가요소2</th>
            <th>평가요소3</th>
            <th>평가요소4</th>
            <th>평가요소5</th>
            <th>평가요소6</th>
            <th>평가요소7</th>
            <th>점수</th>
            <th>합산점수</th>
          </tr>
          {scoreDate?.data.map((i, key) => (
            <tr key={key}>
              <td>{i.examCode}</td>
              <td>{i.userName}</td>
              <td>{i.examCode}</td>
              <td>{i.evaluationFactor1}</td>
              <td>{i.evaluationFactor2}</td>
              <td>{i.evaluationFactor3}</td>
              <td>{i.evaluationFactor4}</td>
              <td>{i.evaluationFactor5}</td>
              <td>{i.evaluationFactor6}</td>
              <td>{i.evaluationFactor7}</td>
              <td>{i.calcScore}</td>
              <td>
                {i.evaluationFactor1 +
                  i.evaluationFactor2 +
                  i.evaluationFactor3 +
                  i.evaluationFactor4 +
                  i.evaluationFactor5 +
                  i.evaluationFactor6 +
                  i.evaluationFactor7}
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default InterViewScore;
