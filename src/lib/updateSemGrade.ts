import Score from "util/enums/Score";
import ScoreGrade from "util/types/ScoreGrade";

const updateSemGrade = (idx: number, value: Score, grade: ScoreGrade) => {
  switch (idx) {
    case 0:
      grade.score11 = value;
      break;
    case 1:
      grade.score12 = value;
      break;
    case 2:
      grade.score21 = value;
      break;
    case 3:
      grade.score22 = value;
      break;
    case 4:
      grade.score31 = value;
      break;
    case 5:
      grade.score32 = value;
      break;
  }

  return grade;
};

export default updateSemGrade;
