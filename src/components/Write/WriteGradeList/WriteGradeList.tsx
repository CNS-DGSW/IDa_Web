import WriteGradeListItemContainer from "containers/Write/WriteGrade/WriteGradeList/WriteGradeListItem/WriteGradeListItemContainer";
import GradeListModel from "models/GradeListModel";
import React from "react";
import Grade from "util/enums/Grade";
import Score from "util/enums/Score";
import FreeSem from "util/types/FreeSem";
import ScoreGrade from "util/types/ScoreGrade";
import "./WriteGradeList.scss";

interface WriteGradeListProps {
  grades: ScoreGrade[];
  freeSem: FreeSem;
  gradeType: Grade | null;
  addNewGrade: () => void;
  handleGradesCallback: (
    idx: number,
    value: Score,
    subjectName: string
  ) => void;
  handleFreeSem: (freeSem: FreeSem) => void;
}

const WriteGradeList = ({
  grades,
  gradeType,
  freeSem,
  addNewGrade,
  handleGradesCallback,
  handleFreeSem,
}: WriteGradeListProps) => {
  return (
    <>
      <div className="grade-textBox">
        <p>
          자유학기제 등으로 교과 성적이 없는 학기일 경우, 모집 요강에 의거하여
          해당학기의 성적을 인정하니, 테이블 상단의 '자유학기제'를 꼭 선택해
          주세요.
        </p>

        <p>
          체육·예술 교과 등 성적이 3등급(우수, 보통, 미흡) 평가로 나오는 교과는
          입력하지 않습니다.
        </p>

        <p>
          과목이 없다면 아래에 있는 과목 추가를 클릭 후 성적을 입력해주세요.
        </p>
      </div>

      <table className="grade-list">
        <thead>
          <tr>
            <th className="grade-list-head" rowSpan={3}>
              과목
            </th>
            <th className="grade-list-head" colSpan={2}>
              1학년
            </th>
            <th className="grade-list-head" colSpan={2}>
              2학년
            </th>
            <th className="grade-list-head" colSpan={2}>
              3학년
            </th>
            <th className="grade-list-head" rowSpan={3}>
              삭제
            </th>
          </tr>
          <tr>
            <th className="grade-list-white">1학기</th>
            <th className="grade-list-white">2학기</th>
            <th className="grade-list-white">1학기</th>
            <th className="grade-list-white">2학기</th>
            <th className="grade-list-white">1학기</th>
            <th className="grade-list-white">2학기</th>
          </tr>
          <tr>
            <th>
              <button
                className={freeSem.freeSem11 ? "on" : "off"}
                onClick={() =>
                  handleFreeSem({ ...freeSem, freeSem11: !freeSem.freeSem11 })
                }
              >
                자유학기제
              </button>
            </th>
            <th>
              <button
                className={freeSem.freeSem12 ? "on" : "off"}
                onClick={() =>
                  handleFreeSem({ ...freeSem, freeSem12: !freeSem.freeSem12 })
                }
              >
                자유학기제
              </button>
            </th>
            <th>
              <button
                className={freeSem.freeSem21 ? "on" : "off"}
                onClick={() =>
                  handleFreeSem({ ...freeSem, freeSem21: !freeSem.freeSem21 })
                }
              >
                자유학기제
              </button>
            </th>
            <th>
              <button
                className={freeSem.freeSem22 ? "on" : "off"}
                onClick={() =>
                  handleFreeSem({ ...freeSem, freeSem22: !freeSem.freeSem22 })
                }
              >
                자유학기제
              </button>
            </th>
            <th>
              <button
                className={freeSem.freeSem31 ? "on" : "off"}
                onClick={() =>
                  handleFreeSem({ ...freeSem, freeSem31: !freeSem.freeSem31 })
                }
              >
                자유학기제
              </button>
            </th>
            <th>
              <button
                className={freeSem.freeSem32 ? "on" : "off"}
                onClick={() =>
                  handleFreeSem({
                    ...freeSem,
                    freeSem32:
                      gradeType === Grade.UNGRADUATED || !freeSem.freeSem32,
                  })
                }
              >
                자유학기제
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {GradeListModel.map((model, index) => {
            const filtered = grades.find((grade) => {
              return grade.subjectName === model;
            });
            return (
              <React.Fragment key={index}>
                <WriteGradeListItemContainer
                  filtered={filtered}
                  model={model}
                  handleGradesCallback={handleGradesCallback}
                />
              </React.Fragment>
            );
          })}
          {grades
            .filter((grade) => {
              let flag = true;
              GradeListModel.forEach((value) => {
                if (value === grade.subjectName) flag = false;
              });
              return flag;
            })
            .map((grade, index) => {
              return (
                <React.Fragment key={index}>
                  <WriteGradeListItemContainer
                    filtered={grade}
                    isNew={true}
                    model={grade.subjectName}
                    handleGradesCallback={handleGradesCallback}
                  />
                </React.Fragment>
              );
            })}
        </tbody>
      </table>

      <div className="add pointer" onClick={() => addNewGrade()}>
        과목 추가
      </div>

      <div className="grade-textBox">
        <p>
          자유학기제 등으로 교과 성적이 없는 학기일 경우, 모집 요강에 의거하여
          해당학기의 성적을 인정하니, 테이블 상단의 '자유학기제'를 꼭 선택해
          주세요.
        </p>
      </div>
    </>
  );
};

export default WriteGradeList;
