import React from "react";
import "./WriteGrades.scss";
import WriteContent from "../../common/WriteContent";
import WriteGradeAttendContainer from "../../../containers/Write/WriteGrade/WriteGradeAttend/WriteGradeAttendContainer";
import WriteGradeAdditionalContainer from "../../../containers/Write/WriteGrade/WriteGradeAdditional/WriteGradeAdditionalContainer";
import Grade from "util/enums/Grade";
import WriteScoreContainer from "containers/Write/WriteScore/WriteScoreContainer";
import WriteGradeListContainer from "containers/Write/WriteGrade/WriteGradeList/WriteGradeListContainer";
import WriteGedContainer from "containers/Write/WriteGrade/WriteGed/WriteGedContainer";
import ScoreGrade from "util/types/ScoreGrade";
import FreeSemType from "util/types/FreeSem";
import AttendType from "util/types/Attend";
import volunteerType from "util/types/Volunteer";
import additionalType from "util/types/Additional";
import GedScoreType from "util/types/GedScore";

interface WriteGradesProps {
  saved: boolean;
  setSaved: React.Dispatch<React.SetStateAction<boolean>>;
  gradeType: Grade | null;
  isChanged: boolean;
  onSave: () => Promise<boolean>;
  grades:ScoreGrade[];
  setGrades:React.Dispatch<React.SetStateAction<ScoreGrade[]>>;
  freeSem:FreeSemType;
  setFreeSem:React.Dispatch<React.SetStateAction<FreeSemType>>;
  attend:AttendType;
  setAttend:React.Dispatch<React.SetStateAction<AttendType>>;
  volunteer:volunteerType;
  setVolunteer:React.Dispatch<React.SetStateAction<volunteerType>>;
  additional:additionalType;
  setAdditional:React.Dispatch<React.SetStateAction<additionalType>>;
  gedScore:GedScoreType;
  setGedScore:React.Dispatch<React.SetStateAction<GedScoreType>>;
}

const WriteGrades = ({
  saved,
  setSaved,
  gradeType,
  onSave,
  isChanged,

  grades,
  setGrades,
  freeSem,
  setFreeSem,

  attend,
  setAttend,

  volunteer,
  setVolunteer,

  additional,
  setAdditional,

  gedScore,
  setGedScore
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
              <WriteGradeListContainer 
                grades={grades}
                setGrades={setGrades}
                freeSem={freeSem}
                setFreeSem={setFreeSem}
              />
              <WriteGradeAttendContainer 
                attend={attend}
                setAttend={setAttend}
              />
              <WriteGradeAdditionalContainer 
                volunteer={volunteer}
                setVolunteer={setVolunteer}

                additional={additional}
                setAdditional={setAdditional}
              />
            </>
          ) : (
            <WriteGedContainer 
              gedScore={gedScore}
              setGedScore={setGedScore}
            />
          )}
        </div>
      </WriteContent>
    </>
  );
};

export default WriteGrades;
