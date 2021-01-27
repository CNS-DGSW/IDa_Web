import Score from "util/enums/Score";

type ScoreGrade = {
  score11: Score;
  score12: Score;
  score21: Score;
  score22: Score;
  score31: Score;
  score32: Score;
  subjectName: string;
};

export default ScoreGrade;
