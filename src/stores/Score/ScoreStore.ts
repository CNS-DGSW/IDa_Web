import ScoreApi from "assets/api/ScoreApi";
import { autobind } from "core-decorators";
import { action } from "mobx";
import { GetScoreResponse } from "util/types/Response";
import {
  InterViewScoreType,
  SecondScoreResponse,
  TeamResponse,
} from "util/types/Score";

@autobind
class ScoreStore {
  @action
  getScore = async (userIdx?: number | null): Promise<GetScoreResponse> => {
    try {
      const response: GetScoreResponse = await ScoreApi.GetScore(userIdx);

      return new Promise(
        (resolve: (response: GetScoreResponse) => void, reject) => {
          resolve(response);
        }
      );
    } catch (error) {
      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
  };

  @action
  getSecondScore = async (): Promise<SecondScoreResponse> => {
    try {
      const response: SecondScoreResponse = await ScoreApi.GetSecondScore();

      return new Promise(
        (resolve: (response: SecondScoreResponse) => void, reject) => {
          resolve(response);
        }
      );
    } catch (error) {
      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
  };

  @action
  getTeam = async (category: string): Promise<TeamResponse> => {
    try {
      const response: TeamResponse = await ScoreApi.getTeam(category);

      return new Promise(
        (resolve: (response: TeamResponse) => void, reject) => {
          resolve(response);
        }
      );
    } catch (error) {
      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
  };

  @action
  getInterviewScore = async (
    category: string,
    teamNumber: string
  ): Promise<InterViewScoreType> => {
    try {
      const response: InterViewScoreType = await ScoreApi.getInterviewScore(
        category,
        teamNumber
      );

      return new Promise(
        (resolve: (response: InterViewScoreType) => void, reject) => {
          resolve(response);
        }
      );
    } catch (error) {
      return new Promise((resolve, reject: (error: Error) => void) => {
        reject(error);
      });
    }
  };
}

export default ScoreStore;
