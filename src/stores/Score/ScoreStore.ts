import ScoreApi from "assets/api/ScoreApi";
import { autobind } from "core-decorators";
import {
  GetScoreResponse,
  InterViewScoreResponse,
  SecondScoreResponse,
  TeamResponse,
} from "util/types/Response";
import { _autoAction } from "mobx";

@autobind
class ScoreStore {
  @_autoAction
  getScore = async (userIdx?: number | null): Promise<GetScoreResponse> => {
    const response: GetScoreResponse = await ScoreApi.GetScore(userIdx);

    return response;
  };

  @_autoAction
  getSecondScore = async (): Promise<SecondScoreResponse> => {
    const response: SecondScoreResponse = await ScoreApi.GetSecondScore();

    return response;
  };

  @_autoAction
  getTeam = async (category: string): Promise<TeamResponse> => {
    const response: TeamResponse = await ScoreApi.getTeam(category);

    return response;
  };

  @_autoAction
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
