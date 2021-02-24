import React from "react";
import { SecondScoreResponse } from "util/types/Score";
import "./SecondTypeScore.scss";

interface SecondTypeScoreProps {
  tryDown: (key: string) => void;
  scoreDate: SecondScoreResponse | undefined;
  select: string;
  setSelect: React.Dispatch<React.SetStateAction<string>>;
  tryUpload: (e: React.ChangeEvent<HTMLInputElement>, content: string) => void;
}

const SecondTypeScore = ({
  tryDown,
  scoreDate,
  select,
  setSelect,
  tryUpload,
}: SecondTypeScoreProps) => {
  return (
    <div className="SecondScore">
      <span className="SecondScore-title">2차 전형 점수 관리</span>
      <div className="SecondScore-buttons">
        <select
          name=""
          id=""
          onChange={(e) => {
            setSelect(e.target.value);
          }}
        >
          <option value={"0"}>다운로드</option>
          <option value={"1"}>업로드</option>
        </select>
        {select === "0" ? (
          <>
            <div>
              <span>소프트웨어역량평가</span>
              <button className="buttons" onClick={() => tryDown("sw")}>
                서식 다운로드
              </button>
            </div>
            <div>
              <span>직무능력검사</span>
              <button className="buttons" onClick={() => tryDown("job")}>
                서식 다운로드
              </button>
            </div>
            <div>
              <span>코딩테스트</span>
              <button className="buttons" onClick={() => tryDown("coding")}>
                서식 다운로드
              </button>
            </div>
            <div>
              <span>최종 결과 다운로드</span>
              <button
                className="buttons"
                onClick={() => tryDown("secondScore")}
              >
                엑셀 다운로드
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="SecondScore-buttons-file">
              <span>소프트웨어역량평가</span>
              <label htmlFor="input-file1" className="buttons">
                업로드
              </label>
              <input
                type="file"
                id="input-file1"
                className="input-file"
                onChange={(e) => tryUpload(e, "sw")}
              />
            </div>
            <div className="SecondScore-buttons-file">
              <span>직무능력검사</span>
              <label htmlFor="input-file2" className="buttons">
                업로드
              </label>
              <input
                type="file"
                id="input-file2"
                className="input-file"
                onChange={(e) => tryUpload(e, "job")}
              />
            </div>
            <div className="SecondScore-buttons-file">
              <span>코딩테스트</span>
              <label htmlFor="input-file3" className="buttons">
                업로드
              </label>
              <input
                type="file"
                id="input-file3"
                className="input-file"
                onChange={(e) => tryUpload(e, "coding")}
              />
            </div>
          </>
        )}
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
        <th>창의협업역량</th>
        <th>심층면접</th>
        <th>합계</th>
        <th>합격여부</th>
        <th>최종합격전형</th>
        {scoreDate?.data.map((i, key) => (
          <tr>
            <td>{i.examCode}</td>
            {/* 수험번호 */}
            <td>{i.userName}</td>
            {/* 이름 */}
            <td>{i.gradeType}</td>
            {/* 학력 */}
            <td>{}</td>
            {/* 출신학교 */}
            <td>{i.cityName}</td>
            {/* 지역 */}
            <td>{}</td>
            {/* 1차 합격전형 */}
            <td>{i.gradeScore}</td>
            {/* 교과*/}
            <td>{}</td>
            {/* 출결 */}
            <td>{i.volunteerScore}</td>
            {/* 봉사 */}
            <td>{i.additionalScore}</td>
            {/* 가산점 */}
            <td>{i.jobAptitudeScore}</td>
            {/* 직무적성 */}
            <td>{i.totalInterviewScore}</td>
            {/* 면접 */}
            <td>{i.swAbilityScore}</td>
            {/* sw역량 */}
            <td>{}</td>
            {/* 창의협업역량 */}
            <td>{i.interviewScore}</td>
            {/* 심층면접 */}
            <td>{i.totalScore}</td>
            {/* 합계 */}
            <td>{i.finalApplyType}</td>
            {/* 합격여부 */}
            <td>{}</td>
            {/* 최종합격전형 */}
          </tr>
        ))}
      </table>
    </div>
  );
};

export default SecondTypeScore;
