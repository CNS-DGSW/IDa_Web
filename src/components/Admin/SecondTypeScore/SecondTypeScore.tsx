import React from "react";
import "./SecondTypeScore.scss";

interface SecondTypeScoreProps {
  tryDown: (key: string) => void;
}

const SecondTypeScore = ({ tryDown }: SecondTypeScoreProps) => {
  const eight = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ];
  return (
    <div className="SecondScore">
      <span className="SecondScore-title">2차 전형 점수 관리</span>
      <div className="SecondScore-buttons">
        <div>
          <span>소프트웨어역량평가</span>
          <button
            onClick={() => {
              tryDown("sw");
            }}
          >
            서식 다운로드
          </button>
        </div>
        <div>
          <span>직무능력검사</span>
          <button onClick={() => tryDown("job")}>서식 다운로드</button>
        </div>
        <div>
          <span>코딩테스트</span>
          <button onClick={() => tryDown("coding")}>서식 다운로드</button>
        </div>
        <button>성적 업로드</button>
        <button onClick={() => tryDown("secondScore")}>엑셀 다운로드</button>
      </div>
      <table className="SecondScore-table">
        <th>수험번호</th>
        <th>이름</th>
        <th>학력</th>
        <th>출신학교</th>
        <th>지역</th>
        <th>1차합격전형</th>
        <th>교과</th>
        <th>출결</th>
        <th>봉사</th>
        <th>가산점</th>
        <th>직무적성</th>
        <th>면접</th>
        <th>sw역량</th>
        <th>창의협역역량</th>
        <th>심층면접</th>
        <th>합계</th>
        <th>합격여부</th>
        <th>최종합격전형</th>
        {eight.map((i, key) => (
          <tr>
            {eight[key].map((k, j) => (
              <td>{k}</td>
            ))}
          </tr>
        ))}
      </table>
    </div>
  );
};

export default SecondTypeScore;
