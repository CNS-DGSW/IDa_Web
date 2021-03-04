import { Response } from "util/types/Response";
import Apply from "util/enums/Apply";
import Ged from "util/enums/Grade";
import InterViewCategory from "util/enums/InterViewCategory";

export interface SecondScoreResponse extends Response {
  data: [
    {
      absenceScore: number;
      additionalScore: number;
      applyDetailType: Apply;
      applyType: Apply;
      cityName: "string";
      codingTestScore: number;
      cooperationScore: number;
      examCode: number;
      finalApplyDetailType: Apply;
      finalApplyType: Apply;
      gradeScore: number;
      gradeType: Ged;
      interviewScore: number;
      isPassed: boolean;
      jobAptitudeScore: number;
      swAbilityScore: number;
      totalInterviewScore: number;
      totalScore: number;
      userIdx: number;
      userName: "string";
      volunteerScore: number;
    }
  ];
}
export interface TeamResponse extends Response {
  data: number[];
}
export interface InterViewScoreType extends Response {
  data: [
    {
      calcScore: number;
      evaluationFactor1: number;
      evaluationFactor2: number;
      evaluationFactor3: number;
      evaluationFactor4: number;
      evaluationFactor5: number;
      evaluationFactor6: number;
      evaluationFactor7: number;
      examCode: number;
      interviewCategory: InterViewCategory;
      userName: "string";
    }
  ];
}
