import CheckBox from "components/common/CheckBox";
import { render } from "node-sass";
import React from "react";
import "./InterViewScore.scss";
import { InterViewScoreType } from "util/types/Score";

interface InterViewScoreProps {
  team: string;
  setTeam: React.Dispatch<React.SetStateAction<string>>;
  teamCount: number[] | undefined;
  selectInterView: (index: string) => void;
  scoreDate: InterViewScoreType | undefined;
}

const InterViewScore = ({
  team,
  setTeam,
  teamCount,
  selectInterView,
  scoreDate,
}: InterViewScoreProps) => {
  return (
    <div className="InterViewScore">
      <span className="InterViewScore-title">2차전형 면접 점수 확인</span>
      <div className="InterViewScore-checkBox">
        <select
          onChange={(e) => {
            selectInterView(e.target.value);
          }}
        >
          <option value="0">그룹면접</option>
          <option value="1">심층면접</option>
        </select>
        <select name="" id="" onChange={(e) => setTeam(e.target.value)}>
          {teamCount &&
            teamCount.map((i, key) => (
              <option key={key} value={key + 1}>
                {i}팀
              </option>
            ))}
        </select>
      </div>
      <table className="InterViewScore-table">
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
        {scoreDate?.data.map((i, key) => (
          <tr>
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
  );
};

export default InterViewScore;
