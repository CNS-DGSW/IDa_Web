import CheckBox from "components/common/CheckBox";
import React from "react";
import "./InterViewScore.scss";

interface InterViewScoreProps {
  interView: string;
  setInterView: React.Dispatch<React.SetStateAction<string>>;
  team: string;
  setTeam: React.Dispatch<React.SetStateAction<string>>;
}

const InterViewScore = ({
  interView,
  setInterView,
  team,
  setTeam,
}: InterViewScoreProps) => {
  return (
    <div className="InterViewScore">
      <span className="InterViewScore-title">2차전형 면접 점수 확인</span>
      <div className="InterViewScore-checkBox">
        <select
          onChange={(e) => {
            setInterView(e.target.value);
          }}
        >
          <option value="0">그룹면접</option>
          <option value="1">심층면접</option>
        </select>
        <select name="" id="" onChange={(e) => setTeam(e.target.value)}>
          <option value="0">1팀</option>
          <option value="0">2팀</option>
          <option value="0">3팀</option>
          <option value="0">4팀</option>
          <option value="0">5팀</option>
          <option value="0">6팀</option>
        </select>
      </div>
      <table className="InterViewScore-table">
        <th>수험번호</th>
        <th>이름</th>
        <th>참석여부</th>
        <th>면접관</th>
        <th>평가요소1</th>
        <th>평가요소2</th>
        <th>평가요소3</th>
        <th>평가요소4</th>
        <th>평가요소5</th>
        <th>평가요소6</th>
        <th>평가요소7</th>
        <th>점수</th>
        <th>합산점수</th>
        <tr>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
        </tr>
      </table>
    </div>
  );
};

export default InterViewScore;
