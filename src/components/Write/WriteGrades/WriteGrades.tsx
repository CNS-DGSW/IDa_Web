import React from "react";
import "./WriteGrades.scss";
import WriteContent from "../../common/WriteContent";
import WriteGradeAttendContainer from "../../../containers/Write/WriteGrade/WriteGradeAttend/WriteGradeAttendContainer";
import WriteGradeAdditionalContainer from "../../../containers/Write/WriteGrade/WriteGradeAdditional/WriteGradeAdditionalContainer";
import Grade from "util/enums/Grade";
import WriteScoreContainer from "containers/Write/WriteScore/WriteScoreContainer";
import WriteGradeListContainer from "containers/Write/WriteGrade/WriteGradeList/WriteGradeListContainer";
import WriteGedContainer from "containers/Write/WriteGrade/WriteGed/WriteGedContainer";

interface WriteGradesProps {
  gradeType: Grade | null;
  isChanged: boolean;
  onSave: () => Promise<boolean>;
}

const WriteGrades = ({ gradeType, onSave, isChanged }: WriteGradesProps) => {
  return (
    <>
      <WriteContent title="성적알림표를 작성해주세요" onSave={onSave} isChanged={isChanged}>
        <div className="grade">
          <WriteScoreContainer />

          {gradeType !== Grade.GED ? (
            <>
              <WriteGradeListContainer />
              <WriteGradeAttendContainer />
              <div className="grade-textBox">
                <p>
                  자유학기제 등으로 교과 성적이 없는 학기일 경우, 모집 요강에 의거하여 해당학기의 성적을
                  인정하니, 테이블 상단의 '자유학기제'를 꼭 선택해 주세요.
                </p>
              </div>
              <WriteGradeAdditionalContainer />
            </>
          ) : (
            <WriteGedContainer />
          )}
        </div>
      </WriteContent>
    </>
  );
};

export default WriteGrades;
