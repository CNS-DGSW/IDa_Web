import React from "react";
import { SecondScoreResponse } from "util/types/Response";
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
          className="SecondScore-buttons-s-op"
          name=""
          id=""
          onChange={(e) => {
            setSelect(e.target.value);
          }}
        >
          <option className="SecondScore-buttons-s-op" value={"0"}>
            다운로드
          </option>
          <option className="SecondScore-buttons-s-op" value={"1"}>
            업로드
          </option>
        </select>
        {select === "0" ? (
          <>
            <div className="SecondScore-buttons-download">
              <span>소프트웨어역량평가</span>
              <button className="buttons" onClick={() => tryDown("sw")}>
                서식 다운로드
              </button>
            </div>
            <div className="SecondScore-buttons-download">
              <span>직무능력검사</span>
              <button className="buttons" onClick={() => tryDown("job")}>
                서식 다운로드
              </button>
            </div>
            <div className="SecondScore-buttons-download">
              <span>코딩테스트</span>
              <button className="buttons" onClick={() => tryDown("coding")}>
                서식 다운로드
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="SecondScore-buttons-upload">
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
            <div className="SecondScore-buttons-upload">
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
            <div className="SecondScore-buttons-upload">
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
      <div className="SecondScore-table">
        <table className="SecondScore-table-list">
          <thead>
            <tr className="SecondScore-table-list-title">
              <th>순번</th>
              <th>수험번호</th>
              <th>이름</th>
              <th>학력</th>
              <th>지역</th>
              <th>1차합격전형</th>
              <th>교과</th>
              <th>출결</th>
              <th>봉사</th>
              <th>가산점</th>
              {/* <th>면접</th> */}
              <th>직무적성</th>
              {/* <th>창의협업역량</th> */}
              <th>sw역량</th>
              {/* <th>심층면접</th> */}
              <th>코딩테스트</th>
              <th>합계</th>
              {/* <th>합격여부</th> */}
              {/* <th>최종합격전형</th> */}
            </tr>
          </thead>
          <tbody>
            {scoreDate?.data.map((i, key) => (
              <tr key={key}>
                <td>{key + 1}</td>
                {/* 순번 */}
                <td>{i.examCode}</td>
                {/* 수험번호 */}
                <td>{i.userName}</td>
                {/* 이름 */}
                <td>
                  {i.gradeType === "UNGRADUATED" && "졸업예정"}
                  {i.gradeType === "GRADUATED" && "졸업"}
                </td>
                {/* 학력 */}
                <td>{i.cityName}</td>
                {/* 지역 */}
                <td>
                  {i.applyType === "COMMON" && "일반전형"}
                  {i.applyType === "SPECIAL" && "특별전형"}
                  {i.applyType === "OTHER" && "특례입학"}
                </td>
                {/* 1차 합격전형 */}
                <td>{i.gradeScore}</td>
                {/* 교과*/}
                <td>{i.absenceScore}</td>
                {/* 출결 */}
                <td>{i.volunteerScore}</td>
                {/* 봉사 */}
                <td>{i.additionalScore}</td>
                {/* 가산점 */}
                <td>{i.jobAptitudeScore}</td>
                {/* 직무적성 */}
                <td>{i.swAbilityScore}</td>
                {/* sw역량 */}
                <td>{i.codingTestScore}</td>
                {/* 코딩테스트 */}
                <td>{i.totalScore === 0 ? i.totalScore : "X"}</td>
                {/* 합계 */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SecondTypeScore;
