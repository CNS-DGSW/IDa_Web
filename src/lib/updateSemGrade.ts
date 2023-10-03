import Score from "util/enums/Score";
import ScoreGrade from "util/types/ScoreGrade";

const updateSemGrade = (idx: number, value: Score, grade: ScoreGrade) => {
  let copyGrade = {...grade}
  switch (idx) {
    case 0:
      copyGrade.score11 = value;
      break;
    case 1:
      copyGrade.score12 = value;
      break;
    case 2:
      copyGrade.score21 = value;
      break;
    case 3:
      copyGrade.score22 = value;
      break;
    case 4:
      copyGrade.score31 = value;
      break;
    case 5:
      copyGrade.score32 = value;
      break;
  }

  return copyGrade;
};

export default updateSemGrade;
