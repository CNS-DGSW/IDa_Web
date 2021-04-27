import ScoreApi from "assets/api/ScoreApi";
import { autobind } from "core-decorators";
import { action } from "mobx";
import {
  GetScoreResponse,
  InterViewScoreResponse,
  SecondScoreResponse,
  TeamResponse,
} from "util/types/Response";

@autobind
class ScoreStore {
  @action
  getScore = async (userIdx?: number | null): Promise<GetScoreResponse> => {
    const response: GetScoreResponse = await ScoreApi.GetScore(userIdx);

    return response;
  };

  @action
  getSecondScore = async (): Promise<SecondScoreResponse> => {
    const response: SecondScoreResponse = await ScoreApi.GetSecondScore();

    return response;
  };

  @action
  getTeam = async (category: string): Promise<TeamResponse> => {
    const response: TeamResponse = await ScoreApi.getTeam(category);

    return response;
  };

  @action
  getInterviewScore = async (
    category: string,
    teamNumber?: string
  ): Promise<InterViewScoreResponse> => {
    const response: InterViewScoreResponse = await ScoreApi.getInterviewScore(
      category,
      teamNumber
    );

    return response;
  };
}

export default ScoreStore;
