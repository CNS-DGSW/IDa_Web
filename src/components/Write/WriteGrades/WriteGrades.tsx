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
  saved: boolean;
  setSaved: React.Dispatch<React.SetStateAction<boolean>>;
  gradeType: Grade | null;
  isChanged: boolean;
  onSave: () => Promise<boolean>;
}

const WriteGrades = ({
  saved,
  setSaved,
  gradeType,
  onSave,
  isChanged,
}: WriteGradesProps) => {
  return (
    <>
      <WriteContent
        title="성적일람표를 작성해주세요"
        onSave={onSave}
        isChanged={isChanged}
      >
        <div className="grade">
          <WriteScoreContainer
            saved={saved}
            setSaved={setSaved}
            onSave={onSave}
          />

          {gradeType !== Grade.GED ? (
            <>
              <WriteGradeListContainer />
              <WriteGradeAttendContainer />
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
