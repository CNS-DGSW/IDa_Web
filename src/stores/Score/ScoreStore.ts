import ScoreApi from "assets/api/ScoreApi";
import { autobind } from "core-decorators";
import { action } from "mobx";
import { GetScoreResponse } from "util/types/Response";

@autobind
class ScoreStore {
  @action
  getScore = async (): Promise<GetScoreResponse> => {
    try {
      const response: GetScoreResponse = await ScoreApi.GetScore();

      return new Promise((resolve: (response: GetScoreResponse) => void, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
  };
}

export default ScoreStore;
